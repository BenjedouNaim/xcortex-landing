# 0001. Rationale: rebuild the xcortex.agency landing page on Next.js

## Context

xcortex.agency is a single page marketing site for an AI and automation agency, served from GitHub Pages. It is one 2,610 line `index.html` with `main.js` (641 lines) and `styles.css` (703 lines). At runtime it loads the Tailwind v3 Play CDN (a compiler that builds CSS in the browser), the Iconify web component (which fetches each of about 25 Solar icons over the network), Locomotive Scroll v4 (smooth scroll and parallax through CSS transforms), and Google Fonts (Inter, JetBrains Mono).

Measured weight: `hero.jpeg` is 3.4 MB at 2528x1422, `icon.png` is 269 KB at 1254x1254 but shown at 36px, and five team photos are about 2.1 MB each at 2048x2048. The team section was removed from the HTML in the last commit, but its code and data remain in `main.js`.

The page has no Open Graph tags, no canonical URL, no structured data, no `robots.txt` and no sitemap. Its only `h1` reads "Intelligence. Engineered.", which says nothing about the business. The owner wants the site as professional as possible, the design kept exactly, and SEO, GEO (being cited by AI answer engines), image weight and JavaScript size treated as top priorities.

Constraints: a small team, no backend needs, a design that must not change, and the current Google guidance that its AI features (AI Overviews, AI Mode) draw only on pages that are indexed and eligible for normal results. So GEO rests on the same base as SEO: crawlable HTML, clear facts, structured data, and fast pages.

## Options considered

### Option 1: Next.js 16 App Router, prerendered on Vercel, Tailwind v4

Server components render the whole page to HTML at build time. A few client components handle scroll, the hero pill and the FAQ. Images go through `next/image` on Vercel.

**Pros**: complete HTML for crawlers; built in metadata, OG image, robots and sitemap routes; automatic image optimization; tiny client JS; the classes port directly.
**Cons**: brings in a Node toolchain and a dependency on Vercel; React 19 plus the App Router runtime adds about 100 to 110 KB gzip of JavaScript even to a mostly static page.

### Option 2: Next.js with `output: 'export'` on GitHub Pages

The same code, exported as plain files and served where the site lives now.

**Pros**: no hosting change; no platform dependency.
**Cons**: `next/image` optimization does not work in export mode, so images must be preprocessed by hand; no preview deployments; harder to add a form or server feature later.

### Option 3: Astro with Tailwind

Astro ships zero JavaScript by default and adds interactive "islands" only where needed.

**Pros**: the smallest possible JS; an excellent fit for a content site.
**Cons**: the owner asked for Next.js; a smaller ecosystem for future app features; the team is not on it.

### Option 4: Keep static HTML, add a build step (Tailwind CLI, image script, SEO tags)

Fix the weight and SEO issues in place without a framework.

**Pros**: the least change and the least tooling.
**Cons**: no components, so the 2,600 line file stays hard to maintain; JSON-LD and copy duplicated by hand; does not meet the explicit request for Next.js.

## Rationale

Option 1 meets every force in Context. Prerendered HTML and native metadata routes cover the SEO and GEO base, `next/image` on Vercel removes manual image work, and server components keep client JavaScript to the few interactive parts. The legacy markup is already Tailwind, so the design risk is mostly v3 to v4 default changes, which visual parity tests catch. Option 2 is a fair fallback if the owner ever leaves Vercel, since the code stays the same apart from image handling. Option 3 would ship less JavaScript, but the owner asked for Next.js. The runtime cost (about 100 KB gzip) is loaded without blocking, and the motion scripts run without waiting for React, so it does not threaten the Lighthouse targets.

Cross check (same model, 2026-11-21): 15 gaps found and fixed in `index.md`, including the Tailwind v3 opacity modifier trap, invalid legacy selectors, gating reveals on the `.js` class so content shows without JavaScript, exact hero skip rules, a realistic 130 KB JS budget, Organization plus Service instead of ProfessionalService (no address), and the motion code moved to plain scripts.

Smaller calls made during design:
- **Lenis plus a small parallax hook** over Locomotive v5. v5 wraps Lenis anyway, and its new attribute API would mean rewriting the markup regardless. Native scrolling keeps anchors, sticky elements and assistive technology working. Runner up: native scroll with no library (zero JS, but loses the inertia feel).
- **Build time SVG icons** over `unplugin-icons` (its Turbopack support is uncertain) and `@iconify/react` (runtime JS and network fetches).
- **Skippable hero lock**: locking scroll is a known usability and accessibility problem. Keeping the effect but letting intent (a fast scroll, a key press, a nav click) finish it keeps the design and removes the trap.
- **Hidden H1 text** keeps the visual headline and gives crawlers a descriptive H1. Runner up: promote the subheading to H1.
- **`llms.txt`** is added because it costs nothing, but nothing relies on it. Ahrefs found most such files are never requested, and Google says it does not need them.
- **Allowing AI crawlers explicitly** in `robots.txt` is the control that matters for GEO. The page cannot be cited if those bots are blocked.

## References

**Project sources**:
- `legacy/index.html`, `legacy/main.js`, `legacy/styles.css` (the design reference)
- Installed skills: `ship`, `seo-landing`, `searchfit-seo:ai-visibility`, `design-taste-frontend`, `lighthouse-audit`

**Practices & standards**:
- Strangler pattern for replacing a live site
- Core Web Vitals (LCP, CLS, INP) as the performance contract
- schema.org `Organization`, `ProfessionalService`, `WebSite`, `FAQPage`
- Google Search guidance that AI features use the normal Search index

**Links** (version checks from the stack walk):
- Next.js blog: https://nextjs.org/blog
- Next.js latest on npm: https://registry.npmjs.org/next/latest
- Tailwind CSS v4 upgrade guide: https://tailwindcss.com/docs/upgrade-guide
- Tailwind CSS latest on npm: https://registry.npmjs.org/tailwindcss/latest
- Lenis latest on npm: https://registry.npmjs.org/lenis/latest
- Locomotive Scroll latest on npm: https://registry.npmjs.org/locomotive-scroll/latest
- Playwright latest on npm: https://registry.npmjs.org/@playwright/test/latest
- Lighthouse CI latest on npm: https://registry.npmjs.org/@lhci/cli/latest
