# ArtbyGK — Phase 1 (Gallery)

A gallery website for original paintings, built with Next.js and Tailwind
CSS. This is Phase 1: browsing only, no selling yet. Selling (Phase 2) gets
added later without rebuilding this site.

## What's here

- **Home** (`/`) — a hero image plus a few featured paintings.
- **Gallery** (`/gallery`) — every painting, filterable by category.
- **Painting page** (`/gallery/[slug]`) — full details for one piece.
- **About** (`/about`) — artist bio (currently placeholder text and a
  placeholder monogram image — replace both with the real thing).
- **Contact** (`/contact`) — a mailto email link and space for social links.

All the paintings themselves — title, category, medium, size, year,
description, and which photo to use — live in one file: `data/paintings.ts`.
That file also has a few fields (`price`, `type`, `sold`, `prints`) that
aren't shown anywhere yet — they're there so Phase 2 can turn on selling by
filling them in, not by redesigning anything.

The photos currently showing are computer-generated placeholders (soft
abstract color studies), just so the site isn't empty. Swap them out for
real photos of the paintings whenever they're ready.

## How to add a new painting

1. Add the photo file to `public/paintings/` (e.g. `sunset-ridge.jpg`).
   Landscape-orientation photos work well around 1200×900px; portrait
   around 1000×1250px. Keep file sizes reasonable (under ~2MB) so pages
   load quickly.
2. Open `data/paintings.ts`, copy one of the existing entries, paste it
   into the list, and fill in the new painting's details. `slug` is the
   web-address version of the title — lowercase, hyphens instead of
   spaces (e.g. `"sunset-ridge"`).
3. Save the file. That's it — no other file needs to change.

## Running it locally (optional — needs Node.js installed)

```
npm install
npm run dev
```

Then open http://localhost:3000 in a browser. `npm run build` produces a
production build (this is also what Vercel runs automatically on deploy).

## Deploying

This project is meant to be pushed to the `gautamirk-git/ArtbyGK.com`
GitHub repository and deployed on Vercel, then pointed at the `artbygk.com`
domain (already registered via Cloudflare). See the delivery message for
the exact walkthrough of those steps.
