# Lighthouse baseline: legacy site

Captured 2026-11-21 against `legacy/` served by `pnpm serve:legacy` (http://localhost:4100/), one run, mobile preset (Lighthouse 13.6.0, simulated throttling, Chrome 157 headless).

Command:

```
pnpm serve:legacy
CHROME_PATH="C:/Program Files/Google/Chrome/Application/chrome.exe" pnpm exec lhci collect --url=http://localhost:4100/ --numberOfRuns=1 --settings.chromeFlags="--headless=new"
```

| Metric | Legacy | Target (AC-5, AC-6, AC-7) |
|---|---|---|
| Performance | 35 | at least 95 |
| Accessibility | 95 | at least 95 |
| Best Practices | 100 | 100 |
| SEO | 100 | 100 |
| LCP | 22.5 s | under 2.0 s |
| CLS | 0 | under 0.05 |
| TBT | 5,370 ms | under 150 ms |
| Total transfer | 4,377 KiB (4.48 MB) | at most 900 KB on a desktop visit |

Also measured: FCP 3.4 s, Speed Index 4.9 s.

The legacy page loads Tailwind (CDN compiler), Iconify and Google Fonts at runtime, which dominates TBT and LCP. A single run is noisy; treat the numbers as an order of magnitude, not an exact reference. The raw report JSON is not committed (`.lighthouseci/` is ignored).
