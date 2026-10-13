import sharp from 'sharp'
import { resolve } from 'node:path'

const source = process.argv[2]
if (!source) throw new Error('Usage: node scripts/prepare-hero-assets.mjs <clean-scene.png>')
const out = resolve('public')
const metadata = await sharp(source).metadata()
if (metadata.width !== 1024 || metadata.height !== 1536) {
  throw new Error('The reference scene must be 1024 × 1536.')
}
await Promise.all([
  sharp(source).webp({ quality: 88 }).toFile(resolve(out, 'nexera-hero-scene.webp')),
  sharp(source).resize(768).webp({ quality: 85 }).toFile(resolve(out, 'nexera-hero-scene-768.webp')),
  ...[480, 768].map(width => sharp(source)
    .extract({ left: 0, top: 390, width: 1024, height: 900 })
    .resize(width).webp({ quality: 86 })
    .toFile(resolve(out, `nexera-hero-mobile-${width}.webp`))),
  sharp(source).extract({ left: 0, top: 0, width: 1024, height: 400 })
    .resize(640).webp({ quality: 78 }).toFile(resolve(out, 'nexera-hero-sky.webp')),
])
console.log('Prepared responsive NEXERA hero images.')
