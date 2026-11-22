# 0001. Rebuild the xcortex.agency landing page on Next.js

**Date**: 2026-11-21
**Status**: Accepted

## Summary

The agency landing page is one static HTML file that loads Tailwind, icons and a scroll library from other servers at runtime, and ships about 15 MB of unoptimized photos. We rebuild it as a Next.js site on Vercel that looks the same as today, but is prerendered to HTML (built ahead of time, so search engines and AI tools read everything), loads almost no JavaScript, and serves small modern images. Search (SEO) and AI answer engines (GEO) get full metadata, structured data and crawler access. The old site stays in `legacy/` as the visual reference every section is checked against.

## Requirements

**User stories**:
- As a prospective client, I want the page to load fast on my phone and look polished, so that I trust the agency.
- As the agency, I want Google and AI assistants (ChatGPT, Perplexity, Claude, Gemini) to understand and cite what Xcortex does, so that people find us.
- As the team, I want the content in typed files, so that copy changes do not mean editing markup.

**Acceptance criteria**:
- **AC-1**: At viewport widths 375, 768, 1280 and 1920, each section screenshot of the new site matches the legacy site within `maxDiffPixelRatio` 0.01, except the allowed differences listed in AC-16.
- **AC-2**: Every legacy section is present with the same copy and order: header, hero, capabilities, systems, workflow, solutions, architecture, approach with FAQ, final CTA, contact, footer. The team section is not rendered, the nav has no `Team` link, and no team code or photos ship.
- **AC-3** (amended 2026-11-21 by the engineer): The hero pill plays automatically once on page load (about 1.2s, transform only, ease out), with no scroll lock; the scroll hint fades when it completes; reduced motion, a `location.hash` or `scrollY > 0` at load show the final state at once. The text below is the superseded original. ~~The hero pill plays as legacy on scroll (`PILL_TOTAL` 600, lerp 0.10, touch multiplier 1.8, see `legacy/main.js` 361 to 501). It completes at once and unlocks scrolling when any of these happen: one gesture of 300px or more (consecutive wheel events less than 150ms apart count as one gesture, `deltaMode` 1 counts 16px per line, touch distance is measured from `touchstart`); a key press of Space, PageDown, ArrowDown, End, Home or Tab (the key's normal scroll then proceeds); a click on any `a[href^="#"]`; `prefers-reduced-motion: reduce`; or the page loading with `scrollY > 0` or a `location.hash`. Scrolling is never locked after the pill completes, and a 4s failsafe completes it if a script error stops the animation.~~
- **AC-3b**: Anchor links complete the pill, call `lenis.start()`, then `lenis.scrollTo(target, { offset: -120, duration: 0.8 })` with the legacy easing `cubic-bezier(.25,0,.35,1)`. `href="#"` scrolls to the top. Sections keep `scroll-margin-top: 7.5rem`, so anchors also work without JavaScript.
- **AC-4**: The FAQ opens and closes with mouse and keyboard, following the WAI-ARIA accordion pattern: `h3 > button` with `aria-expanded` and `aria-controls`, and each panel has a matching `id`. The open animation reproduces the legacy inline `max-height` behavior.
- **AC-4b**: These legacy behaviors are ported with the same timing: the counter roll-up (`legacy/main.js` 540), the principles cascade with a 110ms stagger (617), the active nav link (518), the scroll hint fade and progress (422 to 427), stagger containers (477) and the scroll progress hairline. Under reduced motion, counters show their final value at once.
- **AC-5**: Lighthouse (mobile preset, production build) scores at least 95 Performance, 100 SEO, 100 Best Practices and 95 Accessibility. LCP is under 2.0s, CLS under 0.05, TBT under 150ms.
- **AC-6**: JavaScript for `/` is at most 130 KB gzip, measured as the gzip sum of every `<script src>` in the prerendered HTML (Next 16 no longer prints First Load JS). The page makes no request to a third party origin at load (no Tailwind CDN, Iconify, jsDelivr or Google Fonts).
- **AC-7**: The hero image is served as AVIF or WebP, at most 250 KB at 1920px wide, preloaded with high priority. Every `img` has `width`, `height` (or `fill` with `sizes`) and meaningful `alt` text, or `alt=""` when decorative (the hero image is decorative). Total transfer for a first desktop visit is at most 900 KB.
- **AC-8**: The title is exactly "Xcortex | AI Software, Automation & Engineering Agency" (54 characters). The description is exactly "Xcortex engineers AI software, intelligent automation and production systems that help companies understand more, automate more and move faster." (144 characters). Canonical is `https://xcortex.agency/`, with Open Graph and Twitter card tags and a static 1200x630 `app/opengraph-image.png`.
- **AC-9**: The page carries JSON-LD (structured data that machines read) as one `@graph`: `Organization` (`@id` `https://xcortex.agency/#org`, logo `https://xcortex.agency/logo.png` at 512px, email, `sameAs`), `WebSite`, one `Service` per solution with `provider` pointing to the org and `areaServed` "Worldwide", and `FAQPage`. There is no postal address, no phone and no `foundingDate`. Organization and FAQPage pass Google's Rich Results Test, and the whole graph passes validator.schema.org with no errors. Every FAQ answer in JSON-LD equals the visible answer text, both generated from `content/faq.ts`.
- **AC-10**: `/robots.txt` allows all crawlers, explicitly lists GPTBot, OAI-SearchBot, ChatGPT-User, PerplexityBot, ClaudeBot, Claude-SearchBot, Google-Extended and Applebot-Extended as allowed, and points to `/sitemap.xml`. `/sitemap.xml` lists `https://xcortex.agency/`. `/llms.txt` exists and summarizes the agency.
- **AC-11**: There is exactly one `h1`. It keeps the visible text "Intelligence. Engineered." and adds visually hidden text that says what Xcortex is. Headings follow h1, then h2, then h3 with no skipped levels.
- **AC-12**: Every contact link on the page is `mailto:info@xcortex.info` (a deliberate change from legacy `hello@xcortex.agency`, chosen by the engineer).
- **AC-13**: With `prefers-reduced-motion: reduce`, there is no smooth scroll, no parallax and no scroll lock, and every reveal element is visible at once. Parallax is also off below 768px wide, matching legacy (Locomotive smooth mode, and with it `data-scroll-speed`, is off on mobile).
- **AC-14**: With JavaScript disabled, all text and images are visible and readable, including the hero pill text. A blocking inline script in `<head>` adds `js` to `<html>`, and every hidden starting state is scoped under `.js`. A 3s failsafe reveals everything if the observer never runs.
- **AC-15**: Vercel Web Analytics records page views, loaded after the page becomes interactive.
- **AC-16**: The only allowed visual differences from legacy are: the hero skip behavior (AC-3), the header and footer without the Team link (AC-2), the contact email text (AC-12), and visible keyboard focus rings. Any element whose look changed because Tailwind v4 treats a class differently from the v3 Play CDN is a bug, and is fixed to match the legacy screenshot.

## Decision

**Chosen option**: Option 1: Next.js 16 App Router, prerendered on Vercel, Tailwind v4, server components first.

Rebuild the page as server components with a handful of small client components, keep the Tailwind classes as they are, and replace every runtime CDN dependency with something resolved at build time.

**Implementation skills**: `vercel-react-best-practices` (`vercel-labs/agent-skills`, `.agents/skills/vercel-react-best-practices/`) · `web-design-guidelines` (`vercel-labs/agent-skills`, `.agents/skills/web-design-guidelines/`) · `tailwind-4-docs` (`lombiq/tailwind-agent-skills`, `.agents/skills/tailwind-4-docs/`) · `schema` and `ai-seo` (`coreyhaines31/marketingskills`, `.agents/skills/`) · `core-web-vitals` and `seo` (`addyosmani/web-quality-skills`, `.agents/skills/`) · `playwright-best-practices` (`currents-dev/playwright-best-practices-skill`, `.agents/skills/playwright-best-practices/`) · `ship`, `seo-landing`, `lighthouse-audit` (user skills, `~/.claude/skills/`)

## Rationale

Reasoning and options: see [rationale.md](rationale.md).

## Proposed stack

| Layer | Choice | Reason |
|---|---|---|
| Language | TypeScript (strict) | Typed content files make the FAQ and JSON-LD share one source safely. |
| Framework | Next.js 16.4.x, App Router, React 19 | Prerenders the page to HTML at build time. Turbopack is the default builder. |
| Rendering | Default static prerender, NOT `output: 'export'` | On Vercel this keeps `next/image` optimization. Export mode needs `unoptimized` images. |
| Package manager | pnpm 9 | Already installed, strict dependency tree, detected by Vercel. |
| Styling | Tailwind CSS 4.3.x via `@tailwindcss/postcss` | The legacy markup is already Tailwind, so classes port nearly unchanged and CSS is built ahead of time. |
| Legacy CSS | `styles.css` keyframes, easing variables and reveal classes moved into `app/globals.css` | Keeps every animation exactly as designed. |
| Fonts | `next/font/google`: Inter (variable) and JetBrains Mono (variable), exposed as `--font-inter` and `--font-jetbrains` and mapped to `--font-sans` and `--font-mono` in `@theme` | Self hosted, preloaded, no layout shift. next/font hashes family names, so the 87 literal `font-['JetBrains_Mono',monospace]` classes become `font-mono` and the body's `font-['Inter',sans-serif]` becomes `font-sans`. |
| Icons | `@iconify-json/solar` + `@iconify/utils` in a server `Icon` component | Same Solar icons rendered to inline SVG at build time, zero client JS. |
| Smooth scroll | `lenis` 1.3.x via `lenis/react`, in one client component | Same inertia feel, keeps native scrolling, about 4 KB. Disabled under reduced motion. |
| Parallax | A small `useParallax` hook (requestAnimationFrame, transform only) | Only two elements use it (hero image speed -1.5, h1 speed 0.5). No library needed. |
| Reveal, hero pill, counters, cascade, active nav, scroll hint | Small vanilla scripts loaded with `next/script` (`afterInteractive`), not React components | They run before or without hydration, so above the fold content is never held back and the hero works even if hydration is slow. IntersectionObserver uses `rootMargin: '0px 0px -12% 0px'` to match Locomotive's offset. |
| FAQ | One client React component | The only piece with real UI state. |
| Images | `next/image` on Vercel (AVIF, WebP). Hero source resized once with `sharp` to a 2560px wide JPEG at quality 85, rendered with `fill`, `sizes="100vw"`, `quality={70}`, `preload` and `fetchPriority="high"`. Logo cut from 1254px to `public/logo.png` 512px for JSON-LD, plus app icons at 32, 180 and 512px | Responsive sizes and modern formats generated for us. |
| OG image | Static `app/opengraph-image.png`, 1200x630, made once from the hero and wordmark | `next/og` cannot use next/font files, and a static image needs no fonts committed. |
| SEO files | `app/robots.ts`, `app/sitemap.ts`, `app/manifest.ts`, `public/llms.txt` | Native Next.js metadata routes. |
| Structured data | JSON-LD built from `content/*.ts` in a server component | One source for visible copy and machine readable data. |
| Analytics | `@vercel/analytics` | No cookies, so no consent banner. Small and loaded late. |
| Hosting | Vercel (free tier), domain `xcortex.agency` | Built for Next.js, with preview deployments and image optimization. |
| Tests | `@playwright/test` 1.65.x (visual parity plus behavior), `@lhci/cli` 0.16.x | Proves AC-1 and AC-5 on the real build. |
| Lint and format | ESLint (Next config), Prettier with `prettier-plugin-tailwindcss` | Standard and low maintenance. |

**Project layout**:

```
app/            layout.tsx, page.tsx, globals.css, robots.ts, sitemap.ts, manifest.ts,
                opengraph-image.png, icon.png, apple-icon.png
components/     Icon.tsx, JsonLd.tsx
components/sections/  Header, Hero, Capabilities, Systems, Workflow, Solutions,
                Architecture, Approach, FinalCta, Contact, Footer
components/client/    SmoothScroll (Lenis + parallax), Faq
public/scripts/       motion.js (reveal, stagger, hero pill, counters, principles,
                active nav, scroll hint, progress hairline, failsafes)
content/        site.ts (name, url, email, sameAs, description), faq.ts, services.ts
public/         hero source, logo.png, llms.txt
legacy/         the untouched old site, used only as the visual reference
tests/          parity.spec.ts, behavior.spec.ts
```

**Value sourcing**:

| Output | Value | Source |
|---|---|---|
| Metadata, JSON-LD | site URL | `content/site.ts` `url` = `https://xcortex.agency` |
| Contact links, JSON-LD `email` | email | `content/site.ts` `email` = `info@xcortex.info` (engineer's answer) |
| JSON-LD `sameAs` | profiles | `content/site.ts`, today only `https://www.linkedin.com/company/xcortex/` (from legacy footer) |
| FAQ section, `FAQPage` | questions and answers | `content/faq.ts`, text copied verbatim from legacy |
| Title, description | copy | Fixed strings in AC-8 |
| JSON-LD logo, `areaServed` | values | `https://xcortex.agency/logo.png` (512px) and "Worldwide" (engineer: remote, no address) |
| JSON-LD `Service` entries | name and description | `content/services.ts`, copied from the legacy solutions section |
| H1 hidden text | copy | "Xcortex, an AI software, automation and engineering agency" (RECOMMEND, adjustable) |
| Section copy | text | Copied verbatim from `legacy/index.html` |
| Parallax speeds | -1.5 (hero image), 0.5 (h1) | Legacy `data-scroll-speed` attributes |
| Easing, durations | values | Legacy `styles.css` custom properties and keyframes |

**Security and config**: The site has no user input and no secrets. Add static response headers in `next.config.ts`: `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy` denying camera, microphone and geolocation, `X-Frame-Options: DENY`. HTTPS and HSTS come from Vercel. No environment variables are needed.

## Migration plan

**Strategy**: strangler (build the new site beside the old one; switch the domain only when every AC passes). Work happens on branch `nextjs-migration`. Nothing is pushed or deployed without the engineer's OK.

**Phases**:
1. **Scaffold and baseline** (blocking, one worker). Move the old files into `legacy/`. Create the Next.js app, Tailwind, fonts, `globals.css` with the legacy CSS (dropping the invalid selectors noted under Risks), the `Icon` component and `content/site.ts`. Serve `legacy/` locally and capture Playwright baselines per section at the 4 widths. Both sites are captured with `reducedMotion: 'reduce'` and `animations: 'disabled'`: legacy then turns off Locomotive smooth mode, skips the lock, fixes the pill fully revealed and forces reveals visible (`legacy/main.js` 341, 450 to 458; `legacy/styles.css` 130 to 136). Wait for counters to reach their final text (at least 1.3s, or set it directly) before each shot. Record the Lighthouse baseline. Satisfies AC-1 (baseline), AC-6.
2. **Sections** (parallel, up to 3 workers, each owning distinct files under `components/sections/`): (a) Header, Hero, Capabilities, Systems; (b) Workflow, Solutions, Architecture plus `content/services.ts`; (c) Approach, FinalCta, Contact, Footer plus `content/faq.ts`. Server components only. Satisfies AC-1, AC-2, AC-11, AC-12.
3. **Interactivity** (one worker, owns `components/client/` and `public/scripts/motion.js`): SmoothScroll with parallax, the Faq component, and the vanilla motion script with every behavior in AC-3, AC-3b, AC-4b and the failsafes. Satisfies AC-3, AC-3b, AC-4, AC-4b, AC-13, AC-14.
4. **Images, SEO and GEO** (one worker, owns `app/` metadata files, `components/JsonLd.tsx`, `public/` except `public/scripts/`): image resizing, icon set, static OG image, metadata, JSON-LD graph, robots, sitemap, manifest, llms.txt, headers, analytics. Can run in parallel with phase 3. Satisfies AC-7 to AC-10, AC-15.
5. **Verify**: parity and behavior tests, Lighthouse CI, bundle check, Rich Results check on a preview deploy. Satisfies AC-1 to AC-16.
6. **Cutover** (engineer action): connect `xcortex.agency` in Vercel, update DNS, remove `CNAME`, submit the sitemap in Google Search Console and Bing Webmaster Tools.

**Rollback**: until DNS changes, the live site is untouched. After cutover, pointing DNS back to GitHub Pages restores the old site.

**Risks**:
- Legacy uses the Tailwind v3 Play CDN. v4 changed some defaults (border color is now `currentColor`, `shadow` and `shadow-sm` moved down a step, `ring` is 1px). Any bare `border`, `shadow`, `rounded` or `ring` class must be checked against its screenshot.
- About 60 opacity modifiers sit off the v3 opacity scale (`bg-white/84`, `/72`, `/36`, `/16`, `/14`, `/24`, `/12`, `/8` and others). The v3 Play CDN likely generated nothing for them, but v4 applies them, so the nav pill and cards would turn more opaque. Check each against the baseline, and remove the modifier wherever legacy rendered without it. Also check v4 `space-y` (it now uses bottom margins) and hover styles (they now apply only on devices that can hover).
- Legacy CSS has invalid selectors with a space inside the brackets (`[data-scroll data-aura-reveal="fade-up"]`, `[data-scroll data-aura-stagger]>*`, `legacy/styles.css` 30 to 102). Browsers drop them, so legacy actually runs with 24px offsets and no stagger delays. Delete them and keep the values legacy really uses, so Lightning CSS does not fail and the motion does not change.
- Locomotive moves the page with transforms, so full page screenshots of legacy are unreliable. Capture per section under reduced motion as in phase 1.
- Font rendering can differ slightly between Google hosted and self hosted Inter. If parity fails only on text antialiasing, raise the threshold for that section with a note, never globally.

## Consequences

**Positive**:
- Images drop from about 15 MB to under 1 MB of transfer, and the page stops downloading about 300 KB of Tailwind compiler JavaScript.
- Search engines and AI crawlers get complete HTML, metadata, structured data and explicit crawler access.
- Copy lives in typed content files, and the FAQ cannot drift from its structured data.

**Negative / tradeoffs**:
- A build step and Node toolchain now exist where there was a plain HTML file. Editing copy needs a deploy.
- Vercel becomes a dependency (free tier limits apply, and image optimization counts against them).
- The hero pill no longer locks scrolling for users who scroll fast or use the keyboard, a deliberate change from legacy.
- Pixel parity tests are brittle across browser and OS versions. Baselines must be captured on the same machine as the comparison.

**Neutral**:
- The team section and its five photos are dropped from the build, kept only in `legacy/` and git history.
- `.agents/skills/` stays in the repo as agent tooling and is not part of the app.

## Follow-up

- [ ] The engineer confirmed `info@xcortex.info` although the site domain is `xcortex.agency`. Revisit if clients flag it, since mismatched domains can look like phishing and weaken entity signals.
- [ ] Connect the MCP servers the engineer chose (a user config step): `claude mcp add next-devtools npx next-devtools-mcp@latest` and `claude mcp add --scope user playwright npx @playwright/mcp@latest`.
- [ ] GEO content: add case studies with real numbers and one page per service (for example `/services/ai-automation`). AI answer engines cite specific pages far more than a homepage.
- [ ] Off site signals: keep the same name, description, email and links on LinkedIn, Clutch, Crunchbase and Google Business Profile.
- [ ] Consider a Content Security Policy with nonces later. It needs dynamic rendering, so it is out of scope now.
- [ ] No `AGENTS.md` exists yet. Run `/audit` (or `/ship setup`) after phase 1 so build, test and lint commands are recorded.
- [ ] Contact form (Resend) as its own feature, if wanted later.
