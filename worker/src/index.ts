interface Env {
  DB: D1Database;
}

const CORS_HEADERS: Record<string, string> = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json", ...CORS_HEADERS },
  });
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: CORS_HEADERS });
    }

    const url = new URL(request.url);
    const [, api, action, slug] = url.pathname.split("/");

    if (api !== "api" || !action || !slug) {
      return json({ error: "Not found" }, 404);
    }

    try {
      if (action === "stats" && request.method === "GET") {
        return await getStats(env.DB, slug, url.searchParams.get("vid"));
      }

      if (action === "view" && request.method === "POST") {
        return await recordView(env.DB, slug);
      }

      if (action === "like" && request.method === "POST") {
        const body = await request.json<{ vid: string }>();
        if (!body?.vid) return json({ error: "vid required" }, 400);
        return await toggleLike(env.DB, slug, body.vid);
      }
    } catch {
      return json({ error: "Internal error" }, 500);
    }

    return json({ error: "Not found" }, 404);
  },
} satisfies ExportedHandler<Env>;

async function getStats(db: D1Database, slug: string, vid: string | null) {
  const [viewRow, likeRow, likedRow] = await Promise.all([
    db.prepare("SELECT count FROM views WHERE slug = ?").bind(slug).first<{ count: number }>(),
    db.prepare("SELECT COUNT(*) as count FROM likes WHERE slug = ?").bind(slug).first<{ count: number }>(),
    vid
      ? db.prepare("SELECT 1 FROM likes WHERE slug = ? AND visitor_id = ?").bind(slug, vid).first()
      : null,
  ]);

  return json({
    views: viewRow?.count ?? 0,
    likes: likeRow?.count ?? 0,
    liked: !!likedRow,
  });
}

async function recordView(db: D1Database, slug: string) {
  await db
    .prepare("INSERT INTO views (slug, count) VALUES (?, 1) ON CONFLICT(slug) DO UPDATE SET count = count + 1")
    .bind(slug)
    .run();

  const row = await db.prepare("SELECT count FROM views WHERE slug = ?").bind(slug).first<{ count: number }>();
  return json({ views: row?.count ?? 1 });
}

async function toggleLike(db: D1Database, slug: string, vid: string) {
  const existing = await db
    .prepare("SELECT 1 FROM likes WHERE slug = ? AND visitor_id = ?")
    .bind(slug, vid)
    .first();

  if (existing) {
    await db.prepare("DELETE FROM likes WHERE slug = ? AND visitor_id = ?").bind(slug, vid).run();
  } else {
    await db.prepare("INSERT INTO likes (slug, visitor_id) VALUES (?, ?)").bind(slug, vid).run();
  }

  const row = await db
    .prepare("SELECT COUNT(*) as count FROM likes WHERE slug = ?")
    .bind(slug)
    .first<{ count: number }>();

  return json({ likes: row?.count ?? 0, liked: !existing });
}
