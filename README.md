# Emily Carter — English Teacher

A complete, professional Astro 7 website recreating the Emily Carter design
screenshot as the homepage, expanded to a full tutor site: courses with
detail pages, testimonials with results, transparent pricing, FAQ, blog,
and a dedicated "Book a Free Trial Lesson" page with a mock booking form.

## Stack
- Astro 7.4.12 (static output, trailingSlash: always)
- Tailwind CSS 4.3.5 via @tailwindcss/vite
- GSAP 3.15 + Lenis (transform/opacity only, prefers-reduced-motion respected)
- @astrojs/sitemap, TypeScript strict, sharp for images
- Fonts self-hosted via @fontsource: Playfair Display (serif display),
  Caveat (script accents), Inter (body)

## Content
All mock content lives in ONE file: `src/data/site.ts` (site info, courses,
testimonials, pricing in GBP, FAQs, blog posts). Swap it for real content
without touching components.

## Images
Original generated masters in `images-src/` (PNG). Derivatives
(AVIF/WebP/JPG/PNG at 480/800/1200/1600) in `public/images/`, rendered
through `src/components/Picture.astro`.

```bash
npm install
node scripts/prepare-images.mjs   # once: masters from src/assets-src
node scripts/convert-images.mjs   # derivatives
npm run build                     # -> dist/
npm run preview
node scripts/screenshot.mjs       # with preview running on :4321
```

## Live
- **Live site:** https://emily-carter.pages.dev
- **Repo:** https://github.com/dusmamud/emily-carter
- Deployed to Cloudflare Pages via GitHub Actions
  (`.github/workflows/deploy.yml`, Creatix pattern) on every push to
  `main`: build → `wrangler pages deploy dist --project-name=emily-carter`.
  Cloudflare credentials live only in the repo's GitHub Actions secrets
  (`CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`) — never in this repo.

## Notes
- Booking/contact forms are mock (client-side validation + confirmation
  with reference); no real data is sent anywhere.
