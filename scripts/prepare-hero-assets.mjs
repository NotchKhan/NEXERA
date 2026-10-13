import sharp from 'sharp'
import { resolve } from 'node:path'
const [wide, tall, reference] = process.argv.slice(2)
if (!wide || !tall || !reference) throw new Error('Usage: node scripts/prepare-hero-assets.mjs <wide-scene> <tall-scene> <wide-reference>')
const out = resolve('public')
await Promise.all([
  ...[960, 1672].map(width => sharp(wide).resize(width).webp({ quality: 87 }).toFile(resolve(out, `nexera-wide-${width}.webp`))),
  ...[480, 853].map(width => sharp(tall).resize(width).webp({ quality: 87 }).toFile(resolve(out, `nexera-tall-${width}.webp`))),
  // Unaltered reference, optimized only. CSS clips its decorative portraits.
  sharp(reference).webp({ quality: 78 }).toFile(resolve(out, 'nexera-portrait-sprite.webp')),
])
console.log('Prepared landscape, portrait and decorative avatar assets.')
