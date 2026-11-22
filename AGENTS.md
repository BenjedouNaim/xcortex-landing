<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# xcortex.agency landing page

Single page marketing site for the Xcortex AI agency. Next.js 16.4 App Router, React 19, TypeScript strict, Tailwind CSS 4.3, pnpm 9, hosted on Vercel, prerendered static (no `output: 'export'`). Decisions and acceptance criteria (AC-1..AC-16): `docs/specs/0001-nextjs-migration-stack/index.md`. Read only the AC lines your task names, not the whole spec.

## Commands

| Task | Command |
|---|---|
| Dev server | `pnpm dev` (one per folder; tests use port 3001) |
| Prod build / serve | `pnpm build` then `pnpm start` (port 3000) |
| Types / lint | `pnpm typecheck`, `pnpm lint` |
| Old site for comparison | `pnpm serve:legacy` (port 4100) |
| Visual parity (40 shots, ~4 min) | `pnpm test:parity`; iterate with `pnpm exec playwright test --project=next --grep "w1280 section 3"` |
| Behavior tests | `pnpm exec playwright test --project=behavior` |
| JS budget | `pnpm check:bundle` (after build) |
| Lighthouse | `pnpm lhci` (needs `pnpm start` running and `CHROME_PATH` set to system Chrome) |

Playwright uses the system Chrome (`channel: 'chrome'`). Screenshot baselines in `tests/__screenshots__/` come from `legacy/`; never regenerate them unless told to. Kill servers by PID only.

## File map

- `app/layout.tsx`: fonts (next/font Inter, JetBrains Mono), metadata, inline head script that adds `js` to `<html>` (plus the 3s reveal failsafe), analytics.
- `app/page.tsx`: composes the sections in order, loads `public/scripts/motion.js` as a plain `<script defer>`, renders `JsonLd`.
- `app/globals.css`: Tailwind import, `@theme` fonts, and all ported legacy CSS (reveals, hero pill, FAQ, progress bar, keyframes, reduced motion).
- `app/robots.ts`, `sitemap.ts`, `manifest.ts`, `opengraph-image.png`, `icon.png`, `apple-icon.png`: SEO and icon routes.
- `components/sections/*.tsx`: one server component per section, in page order: Header, Hero, Capabilities, Systems, Workflow, Solutions, Architecture, Approach (principles + FAQ), FinalCta (includes contact), Footer (rendered inside `<main>`).
- `components/Icon.tsx`: Solar icons rendered to inline SVG at build time (`<Icon icon="solar:name" />`).
- `components/JsonLd.tsx`: one JSON-LD `@graph` (Organization, WebSite, Service per solution, FAQPage) built from `content/`.
- `components/client/SmoothScroll.tsx`: Lenis smooth scroll and `data-scroll-speed` parallax; off below 768px and under reduced motion. Exposes `window.__lenis`.
- `public/scripts/motion.js`: vanilla script for reveals, stagger, counters, principles cascade, active nav, progress hairline, hero pill, anchor scrolling, FAQ accordion.
- `content/site.ts` (name, url, email `info@xcortex.info`, sameAs), `content/faq.ts`, `content/services.ts`: the single source for copy that also feeds JSON-LD.
- `public/llms.txt`, `public/hero.jpg`, `public/logo.png`. `scripts/*.mjs`: one-off image generation, legacy server, bundle check.
- `legacy/`: the old static site, the visual reference. Never edit it.

Legacy sections in `legacy/index.html`: header 44-126, hero 134-257, capabilities 258-721, systems 722-1094, workflow 1095-1320, solutions 1321-1677, architecture 1678-1986, approach 1987-2340, final CTA + contact 2341-2492, footer 2493-end. Team section and team photos are intentionally dropped.

## Conventions

- Copy and markup are ported verbatim from legacy; the look must match the parity screenshots (maxDiffPixelRatio 0.01). Fix differences at the cause, never by raising the threshold.
- Tailwind v3 to v4 traps already handled, keep them: opacity modifiers off the v3 step-5 scale (`bg-white/84`, `/72`, `/16`...) are removed because v3 never generated them; a base `leading-*` next to a responsive `md:text-*` gets a matching `md:leading-*` (v3 let the responsive size reset line height); renamed utilities (`shadow-sm`→`shadow-xs`, `rounded`→`rounded-sm`, `bg-gradient-to-*`→`bg-linear-to-*`, `backdrop-blur-sm`→`backdrop-blur-xs`); a base rule keeps bare `border` gray-200.
- Fonts: use `font-sans` / `font-mono`, never literal font-family classes.
- Every hidden starting state in CSS is scoped under `.js`, so the page reads fully with JavaScript off.
- Motion hooks the script relies on: `data-aura-reveal`, `data-aura-delay`, `data-aura-stagger`, `data-scroll-speed`, `data-nav-link`, `data-nav-section`, `data-counter*`, `.principle-item`, and the hero/FAQ ids. Keep them when editing markup.
- Server components by default; client JS only where state is unavoidable. JS budget and Lighthouse targets are in AC-5 and AC-6.
- Contact links use `mailto:${site.email}`; never hardcode an email.
- Never commit, push or deploy without the owner's OK. Branch: `nextjs-migration`. Do not merge to the branch GitHub Pages serves before DNS cutover (the root files moved to `legacy/`).
