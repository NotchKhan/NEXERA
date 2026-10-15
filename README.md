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
- `src/components/Hero.jsx` and `Hero.css` render the reference-matched dark first screen: perspective grid, centered heading, five individually positioned service cards and a staggered fan entrance. Hero copy has Russian, Kazakh and English versions. The default is Russian as in the supplied reference; a visitor's saved language is respected. Existing section navigation and language controls remain in QuickNav and the footer.
- All hero text, icons, links, borders and animation are live HTML/SVG/CSS. Each card links to the relevant existing offer. Mobile uses a full-width catalog card above a readable two-column arrangement, and a single column on very narrow screens. Reduced-motion preferences disable entrance and hover motion.
- The interface uses locally bundled Inter Variable. Its Cyrillic and Cyrillic Extended subsets cover the full Kazakh alphabet; Manrope was removed because this version lacked several Kazakh glyphs.
- `public/hero-{violet,pink,blue,green,orange}.webp` are five decorative wallpapers (about 116 KB total), prepared with `scripts/prepare-neon-hero-assets.mjs`. They contain no text or controls and can be replaced independently with supplied originals. The former laptop/phone scene assets remain in `public/` but are not loaded by the hero. Generation prompts are recorded in `docs/neon-hero-assets.md`.
- `index.html` contains the canonical URL, social preview tags and structured data. `public/robots.txt`, `public/sitemap.xml` and the Google verification file must remain publicly accessible.
- `vercel.json` sets the production security headers. Check the deployed response headers after changes; `public/_headers` is not Vercel configuration.

Do not publish unverified customer numbers, testimonials, delivery times or capabilities. Verify any offer change with the business owner before deployment.
