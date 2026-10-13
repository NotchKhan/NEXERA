# NEXERA

Single-page, three-language website for NEXERA Digital Solutions. Built with React 19 and Vite 8; deployed from the `main` branch to [nexeraasia.vercel.app](https://nexeraasia.vercel.app/).

## Run locally

```bash
npm ci
npm run dev
```

Use the Local URL printed by Vite. The production checks are:

```bash
npm run lint
npm run build
npm audit
```

Vercel serves the static `dist/` directory produced by `npm run build`. There is no backend or database in this repository.

## Content and assets

- `src/App.jsx` holds the Russian, Kazakh and English copy, package prices and page sections. Keep all three language variants in sync when changing an offer.
- `src/site.js` holds the contact destinations. The plan and contact buttons generate pre-filled WhatsApp messages.
- `src/components/Hero.jsx` and `src/components/Hero.css` render the reference-style first screen. The laptop and phone currently belong to the landscape/portrait scene images; the separate transparent device images in `public/` are not the live hero layers.
- `public/nexera-wide-*.webp` and `public/nexera-tall-*.webp` are the responsive first-screen artwork. `scripts/prepare-hero-assets.mjs` can regenerate them from new landscape and portrait source images. Keep the same framing before replacing the live files.
- `index.html` contains the canonical URL, social preview tags and structured data. `public/robots.txt`, `public/sitemap.xml` and the Google verification file must remain publicly accessible.
- `vercel.json` sets the production security headers. Check the deployed response headers after changes; `public/_headers` is not Vercel configuration.

Do not publish unverified customer numbers, testimonials, delivery times or capabilities. Verify any offer change with the business owner before deployment.
