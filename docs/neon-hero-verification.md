# Neon hero verification

## Scope

Replaced only the hero presentation, using the supplied five-card NEXERA reference. Existing pricing, content sections, WhatsApp destinations, SEO metadata and Google verification remain. Added anchor IDs to the existing relevant offers; no new pages or services.

## Reference implementation

- Dark atmospheric background with a masked SVG perspective grid.
- NEXERA wordmark at upper left; outlined project CTA at upper right.
- Exact Russian reference headings, descriptions and card names, with existing Kazakh/English localization retained.
- Five separate HTML links with individual decorative wallpapers, SVG icons, gradients, neon borders and shadows.
- Desktop geometry scales from the 1672 × 941 reference. Resting angles: −9°, −7°, +0.7°, +7°, +9°. The central blue card has the highest resting layer.
- One-time 1.15-second fan entrance, staggered from the center outward. Hover lifts individual cards. Keyboard focus is visible. Reduced-motion CSS disables animation and movement.
- Responsive layout at 1050 px and below: full-width catalog card followed by two columns; a single column below 350 px.
- Inter is bundled locally and supports Kazakh. No animation library was added.

## Verified in the local Chromium preview

- Primary visual inspection: 1920 × 1080, compared with the supplied desktop reference.
- Final layout matrix: 1920 × 1080, 1366 × 768, 1024 × 768, 768 × 1024, 430 × 932, 390 × 844, 360 × 800 and 320 × 700, each in Russian, Kazakh and English (24 combinations).
- No page horizontal overflow, overflowing headings or descriptions, text colliding with card arrows, unloaded hero artwork, or missing anchor targets in that matrix.
- Additional earlier checks: 1536 × 864 and 375 × 812 in all three languages.
- Clicked all five cards and the header CTA; waited for each expected URL fragment: whatsapp-automation, plan-mini, plan-business, plan-business-pro, mobile-applications, contact.
- Tab from the header CTA focuses the first card with a visible outline.
- Observed initial animation state (opacity 0, center-stacked transforms, individual delays), followed by opacity 1 and each intended final rotation.
- No browser console warnings/errors after the final reload and interaction checks.
- `npm run lint`, `npm run build`, `git diff --check`.

## Screenshots

- `artifacts/neon-hero/desktop-1920.jpg`: actual browser capture at the requested desktop viewport.
- `artifacts/neon-hero/mobile-390.jpg`: actual full hero capture of the mobile layout.

## Limits

The decorative wallpapers are generated approximations; a numerical 95–100% pixel-similarity score is not asserted. The five supplied original wallpapers can replace them independently for still closer art fidelity. Responsive QA used Chromium viewport overrides, not physical iOS/Android devices. Reduced-motion behavior is implemented in CSS; no OS preference was changed during QA.
