import sharp from 'sharp'

await sharp('legacy/icon.png').resize(32, 32).png().toFile('app/icon.png')
await sharp('legacy/icon.png').resize(180, 180).png().toFile('app/apple-icon.png')

const overlay = Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0" x2="1" y1="0" y2="0">
      <stop offset="0" stop-color="#000" stop-opacity="0.82"/>
      <stop offset="0.65" stop-color="#000" stop-opacity="0.45"/>
      <stop offset="1" stop-color="#000" stop-opacity="0.2"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#g)"/>
  <text x="80" y="300" font-family="DejaVu Sans Mono, Consolas, monospace" font-size="96" font-weight="700" letter-spacing="-6" fill="#fff">Xcortex</text>
  <text x="84" y="380" font-family="DejaVu Sans, Arial, sans-serif" font-size="44" font-weight="300" fill="#e5e5e5">Intelligence. Engineered.</text>
</svg>`)

await sharp('legacy/hero.jpeg')
  .resize(1200, 630, { fit: 'cover', position: 'right' })
  .composite([{ input: overlay }])
  .png({ palette: true, quality: 80, compressionLevel: 9 })
  .toFile('app/opengraph-image.png')
