<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://github.com/openriset.png?size=200">
    <img src="https://github.com/openriset.png?size=200" width="120" alt="OpenRiset logo">
  </picture>
</p>

<h1 align="center">OpenRiset Website</h1>

<p align="center">
  <a href="https://astro.build"><img src="https://img.shields.io/badge/Astro-6.3-0f172a?logo=astro&logoColor=white&style=flat-square" alt="Astro"></a>
  <a href="https://tailwindcss.com"><img src="https://img.shields.io/badge/Tailwind-4.3-38bdf8?logo=tailwindcss&logoColor=white&style=flat-square" alt="Tailwind CSS"></a>
  <a href="https://www.typescriptlang.org"><img src="https://img.shields.io/badge/TypeScript-6.0-3178c6?logo=typescript&logoColor=white&style=flat-square" alt="TypeScript"></a>
  <a href="https://bun.sh"><img src="https://img.shields.io/badge/Bun-1.3-fbf0df?logo=bun&logoColor=black&style=flat-square" alt="Bun"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue?style=flat-square" alt="License"></a>
  <a href="https://openriset.github.io"><img src="https://img.shields.io/badge/status-live-success?style=flat-square" alt="Status"></a>
</p>

<p align="center">
  <strong>Infrastruktur Sains Terbuka untuk Indonesia</strong><br>
  Website resmi OpenRiset — organisasi yang membangun fondasi riset terbuka.
</p>

---

## ✨ Sekilas

Website ini dibangun dengan **Astro 6**, **Tailwind CSS 4**, dan **TypeScript 6** — zero JavaScript by default, performa tinggi, SEO optimal.

Kunjungi: **[openriset.github.io](https://openriset.github.io)**

| Fitur | Detail |
|---|---|
| ⚡ Performa | Static HTML, 32KB total, no JS overhead |
| 🔍 SEO | Open Graph, Twitter Card, JSON-LD structured data, sitemap |
| 🎨 Desain | Tailwind CSS 4, Inter + JetBrains Mono fonts, responsive |
| ✅ Type Safety | TypeScript 6 strict, `astro check` — 0 errors, 0 warnings |
| 🚀 Deploy | GitHub Actions → GitHub Pages, otomatis setiap push |

## 🧱 Tech Stack

| Layer | Teknologi |
|---|---|
| Framework | [Astro](https://astro.build) 6.3 |
| Styling | [Tailwind CSS](https://tailwindcss.com) 4.3 |
| Bahasa | [TypeScript](https://typescriptlang.org) 6.0 |
| Runtime | [Bun](https://bun.sh) 1.3 (dev) |
| CI/CD | [GitHub Actions](https://github.com/features/actions) |
| Hosting | [GitHub Pages](https://pages.github.com) |

## 🏗️ Struktur Proyek

```
src/
├── layouts/
│   └── Layout.astro          # Shell HTML + SEO meta tags
├── pages/
│   └── index.astro           # Halaman utama (226 lines)
├── components/
│   ├── Nav.astro             # Navigasi sticky
│   ├── Hero.astro            # Hero section + CTA
│   ├── Section.astro         # Wrapper section reusable
│   ├── Card.astro            # Kartu informasi
│   ├── RepoCard.astro        # Kartu repository GitHub
│   └── Footer.astro          # Footer 3 kolom
└── styles/
    └── global.css            # Tailwind v4 + custom theme

public/
├── favicon.svg
└── robots.txt
```

## 🚀 Quick Start

### Prasyarat

- **[Bun](https://bun.sh)** (`curl -fsSL https://bun.sh/install | bash`)
- Atau **Node.js** 22+ dan npm

### Development

```bash
# Clone
git clone https://github.com/openriset/openriset.github.io.git
cd openriset.github.io

# Install dependencies
bun install     # atau npm install

# Jalankan dev server
bun run dev     # atau npm run dev
# → http://localhost:4321

# Type check
bun run check   # atau npm run check

# Build production
bun run build   # atau npm run build
# → output di dist/
```

### Perintah Lengkap

| Perintah | Kegunaan |
|---|---|
| `bun run dev` | Dev server + HMR |
| `bun run build` | Build produksi ke `dist/` |
| `bun run preview` | Preview build produksi |
| `bun run check` | TypeScript check (astro check) |
| `bun run check:watch` | TypeScript check (watch mode) |

## 🤝 Berkontribusi

Kami sangat terbuka untuk kontribusi! Baik itu perbaikan typo, peningkatan UI, penambahan konten, atau optimasi performa.

Baca **[CONTRIBUTING.md](./CONTRIBUTING.md)** untuk panduan lengkap.

**Cara cepat:**

1. 🔍 Cari [issue yang cocok](https://github.com/openriset/openriset.github.io/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22)
2. 🍴 Fork repo ini
3. 🌿 Buat branch: `git checkout -b feat/deskripsi-fitur`
4. ✍️ Commit perubahan: `git commit -m "feat: deskripsi singkat"`
5. 📤 Push: `git push origin feat/deskripsi-fitur`
6. 🔃 Buka Pull Request

## 📄 Lisensi

MIT © [OpenRiset](https://openriset.github.io)

Lihat [LICENSE](./LICENSE) untuk detail lengkap.

---

<p align="center">
  <sub>Bagian dari ekosistem <a href="https://github.com/openriset">OpenRiset</a> · Dibangun untuk Indonesia, oleh Indonesia 🇮🇩</sub>
</p>
