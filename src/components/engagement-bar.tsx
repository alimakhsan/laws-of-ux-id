"use client"

import { useEffect, useState, useCallback } from "react"
import { Heart, Eye, Check, Link2 } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"
import { getVisitorId } from "@/lib/visitor"

const API = process.env.NEXT_PUBLIC_API_URL

interface EngagementBarProps {
  slug: string
  twitterHref: string
  pageUrl: string
}

export function EngagementBar({ slug, twitterHref, pageUrl }: EngagementBarProps) {
  const [views, setViews] = useState<number | null>(null)
  const [likes, setLikes] = useState<number | null>(null)
  const [liked, setLiked] = useState(false)
  const [pending, setPending] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!API) return
    const vid = getVisitorId()

    Promise.all([
      fetch(`${API}/api/view/${slug}`, { method: "POST" }).then((r) => r.json()),
      fetch(`${API}/api/stats/${slug}?vid=${vid}`).then((r) => r.json()),
    ])
      .then(([viewData, statsData]) => {
        setViews(viewData.views)
        setLikes(statsData.likes)
        setLiked(statsData.liked)
      })
      .catch(() => {})
  }, [slug])

  const toggleLike = useCallback(async () => {
    if (!API || pending) return
    setPending(true)
    try {
      const vid = getVisitorId()
      const res = await fetch(`${API}/api/like/${slug}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ vid }),
      })
      const data = await res.json()
      setLikes(data.likes)
      setLiked(data.liked)
    } catch {
      // silently fail
    } finally {
      setPending(false)
    }
  }, [slug, pending])

  async function handleCopy() {
    await navigator.clipboard.writeText(pageUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const iconClass = buttonVariants({ variant: "ghost", size: "icon" })

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4 text-sm text-muted-foreground">
        <button
          onClick={toggleLike}
          disabled={pending || !API}
          className={`flex items-center gap-1.5 transition-colors ${
            liked ? "text-red-500" : "hover:text-foreground"
          } disabled:opacity-50`}
        >
          <Heart className="h-4 w-4" fill={liked ? "currentColor" : "none"} />
          <span className="tabular-nums">{likes ?? 0}</span>
        </button>
        <span className="flex items-center gap-1.5">
          <Eye className="h-4 w-4" />
          <span className="tabular-nums">{views ?? 0}</span>
        </span>
      </div>

      <div className="flex items-center gap-1">
        <Tooltip>
          <TooltipTrigger
            render={
              <a
                href={twitterHref}
                target="_blank"
                rel="noopener noreferrer"
                className={iconClass}
              />
            }
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </TooltipTrigger>
          <TooltipContent>Bagikan ke X</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger
            render={
              <button
                type="button"
                onClick={handleCopy}
                className={iconClass}
              />
            }
          >
            {copied ? (
              <Check className="h-4 w-4 text-green-500" />
            ) : (
              <Link2 className="h-4 w-4" />
            )}
          </TooltipTrigger>
          <TooltipContent>{copied ? "Tersalin!" : "Salin tautan"}</TooltipContent>
        </Tooltip>
      </div>
    </div>
  )
}
