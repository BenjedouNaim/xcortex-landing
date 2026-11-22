// One-off: turns the loader's source PNGs (design/loader/mountain-{desktop,mobile}.png, from Loader.dc.html)
// into full-resolution AVIF and WebP in public/loader/. Run: node scripts/loader-images.mjs
import sharp from 'sharp'
import { mkdirSync, statSync } from 'node:fs'

mkdirSync('public/loader', { recursive: true })
for (const name of ['mountain-desktop', 'mountain-mobile']) {
  const src = `design/loader/${name}.png`
  const img = sharp(src)
  // Quality picked to stay visually identical to the PNG on a dark, foggy photo (banding shows first in the sky).
  await img.clone().avif({ quality: 62, effort: 9, chromaSubsampling: '4:4:4' }).toFile(`public/loader/${name}.avif`)
  await img.clone().webp({ quality: 84, effort: 6, smartSubsample: true }).toFile(`public/loader/${name}.webp`)
  const kb = (f) => (statSync(f).size / 1024).toFixed(0) + ' KB'
  console.log(name, kb(src), '->', 'avif', kb(`public/loader/${name}.avif`), 'webp', kb(`public/loader/${name}.webp`))
}
