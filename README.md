# Laws of UX dalam Bahasa Indonesia

Kumpulan prinsip-prinsip UX yang perlu dipertimbangkan desainer saat membuat
antarmuka pengguna, dijelaskan dalam **Bahasa Indonesia** dengan contoh-contoh
yang mudah dipahami.

🔗 **Live**: [lawsofuxid.netlify.app](https://lawsofuxid.netlify.app)

Terinspirasi dari [lawsofux.com](https://lawsofux.com) oleh Jon Yablonski.

## Teknologi

- [Next.js 16](https://nextjs.org) (App Router, Turbopack, static export)
- TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- Dideploy di [Netlify](https://www.netlify.com)

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

Perintah lain:

```bash
npm run build   # build produksi
npm run lint    # cek linting
```

## Struktur konten

Seluruh materi hukum UX ada di satu file: [`src/lib/laws-data.ts`](src/lib/laws-data.ts).
Tiap hukum berisi judul, deskripsi, blok konten (teks + gambar), dan poin penting.
Gambar tersimpan di `public/laws/<slug>/`.

## Kontribusi

Kontribusi sangat terbuka! Anda bisa membantu:

- Memperbaiki terjemahan atau penjelasan agar lebih jelas
- Menambah/memperbaiki contoh lokal Indonesia
- Memperbaiki bug atau meningkatkan tampilan

Cara kontribusi:

1. Fork repo ini
2. Buat branch baru (`git checkout -b perbaikan-saya`)
3. Lakukan perubahan, lalu `npm run build` untuk memastikan tidak ada error
4. Commit & push, lalu buka Pull Request

## Lisensi

Konten dilisensikan di bawah
[Creative Commons BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/),
mengikuti lisensi karya asli lawsofux.com.
