# Lighthouse: Next.js build vs legacy

Captured 2026-11-21 against the production build (`pnpm build && pnpm start`, http://localhost:3000/), 3 runs, mobile preset, median reported (Lighthouse 13.6.0, simulated throttling, Chrome 157 headless). Legacy numbers are from [lighthouse-legacy.md](lighthouse-legacy.md) (1 run).

Command:

```
pnpm build && pnpm start
CHROME_PATH="C:/Program Files/Google/Chrome/Application/chrome.exe" pnpm exec lhci collect
pnpm exec lhci assert
node scripts/check-bundle.mjs
```

(`pnpm lhci` runs collect and assert; `pnpm check:bundle` runs the bundle check.)

| Metric | Legacy | Next.js (median of 3) | Target (AC-5, AC-6, AC-7) | Result |
|---|---|---|---|---|
| Performance | 35 | 80 (runs 80, 77, 87) | at least 95 | FAIL |
| Accessibility | 95 | 96 | at least 95 | pass |
| Best Practices | 100 | 96 (100 when `/_vercel/insights/script.js` is blocked) | 100 | FAIL on localhost only, see note 1 |
| SEO | 100 | 100 | 100 | pass |
| LCP | 22.5 s | 1.29 s | under 2.0 s | pass |
| CLS | 0 | 0 | under 0.05 | pass |
| TBT | 5,370 ms | 601 ms (runs 601, 1,064, 527) | under 150 ms | FAIL |
| FCP | 3.4 s | 1.29 s | n/a | n/a |
| Speed Index | 4.9 s | 2.5 s | n/a | n/a |
| Lighthouse total transfer | 4,377 KiB (4.48 MB) | 366 KiB (374,954 B, includes the 52 KB manifest icon Lighthouse fetches) | n/a | n/a |
| Desktop 1920x1080 first visit, scrolled to the bottom | n/a | 322 KiB (329,708 B) | at most 900 KB | pass |
| Hero image at 1920 w | unoptimized JPEG (spec: about 15 MB of photos in total) | AVIF, 11,690 B | at most 250 KB | pass |
| JS gzip sum of every `<script src>` in `/` | about 300 KB Tailwind compiler plus CDN scripts | 185.7 KB (190,169 B); 147.1 KB without the 39.5 KB `noModule` polyfill chunk | at most 130 KB | FAIL |
| Third party origins on load | 3 or more | none (only `localhost:3000`) | none | pass |

Notes:

1. The Best Practices drop is `errors-in-console`: `@vercel/analytics` requests `/_vercel/insights/script.js`, which only exists on Vercel, so `next start` on localhost returns a 404. With that URL blocked (`--settings.blockedUrlPatterns="*_vercel/insights*"`), Best Practices is 100 in 3 of 3 runs. Re-measure on a Vercel preview.
2. LCP is a text element (the header tagline `AI · AUTOMATION · ENGINEERING`), not the hero image, so the AVIF preload is not on the LCP path.
3. TBT is the one metric that is far off, and it is stable across 2 batches of 3 runs (493 to 1,085 ms). The machine is fast (Lighthouse benchmark index about 1,700), so this is not a slow-runner artifact.
4. Accessibility passes at 96, but the `color-contrast` audit still fails: `text-neutral-400` (#a1a1a1) on white is 2.58:1, and `text-neutral-500` (#737373) on #f5f5f5 is 4.34:1. This is inherited from legacy (legacy also scored 95), and AC-16 forbids restyling.
5. The raw reports are not committed (`.lighthouseci/` is ignored).
