import sharp from 'sharp'

await sharp('legacy/hero.jpeg')
  .resize({ width: 2560, withoutEnlargement: true })
  .jpeg({ quality: 85 })
  .toFile('public/hero.jpg')

await sharp('legacy/icon.png').resize({ width: 512 }).png().toFile('public/logo.png')
