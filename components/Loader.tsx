// Intro loader from the Claude Design file Loader.dc.html, driven by public/scripts/loader.js.
// Hidden unless the head script put .intro on <html>. Rendered as static HTML so the script can animate it
// before hydration (suppressHydrationWarning: React would otherwise diff its inline styles). The photo is a CSS background, so a skipped intro downloads nothing.
const html = `
<div id="xl-root" class="xl-root">
  <div id="xl-l1" class="xl-l1">
    <div class="xl-mtn"></div>
  </div>
  <div id="xl-l2" class="xl-l2" aria-hidden="true">
    <svg id="xl-fog" class="xl-fog" preserveAspectRatio="none" viewBox="0 0 2000 600">
      <filter id="xl-fogf" x="0" y="0" width="100%" height="100%">
        <feTurbulence type="fractalNoise" baseFrequency="0.0025 0.009" numOctaves="4" seed="3"/>
        <feColorMatrix values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  1.6 0 0 0 -0.62"/>
      </filter>
      <rect width="2000" height="600" filter="url(#xl-fogf)"/>
    </svg>
  </div>
  <div id="xl-glow" class="xl-glow" aria-hidden="true"></div>
  <div id="xl-logo" class="xl-logo" aria-hidden="true">
    <svg viewBox="250 200 754 825">
      <path id="xl-top" pathLength="1" d="M488,260 L770,260 C870,260 945,345 945,445 C945,560 790,696 627,696 C464,696 309,560 309,445 C309,345 384,260 488,260 Z"/>
      <path id="xl-bot" pathLength="1" d="M770,965 L488,965 C384,965 309,880 309,780 C309,665 464,529 627,529 C790,529 945,665 945,780 C945,880 870,965 770,965 Z"/>
    </svg>
  </div>
  <svg id="xl-l3" class="xl-l3" aria-hidden="true">
    <filter id="xl-grain"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" stitchTiles="stitch"/><feColorMatrix type="saturate" values="0"/></filter>
    <rect width="100%" height="100%" filter="url(#xl-grain)"/>
  </svg>
  <div class="xl-vignette" aria-hidden="true"></div>
  <button id="xl-snd" type="button" class="xl-snd" aria-pressed="true">
    <span class="xl-bars" aria-hidden="true"><span id="xl-bar0"></span><span id="xl-bar1"></span><span id="xl-bar2"></span><span id="xl-bar3"></span></span>
    <span id="xl-snd-label">Sound on</span>
  </button>
  <div id="xl-ui" class="xl-ui" role="status" aria-label="Loading">
    <div id="xl-count" class="xl-count" aria-hidden="true">000</div>
    <div class="xl-track"><div id="xl-fill" class="xl-fill"></div></div>
  </div>
</div>`

export function Loader() {
  return (
    <>
      <div id="xl" className="font-mono" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: html }} />
      <script src="/scripts/loader.js" defer />
    </>
  )
}
