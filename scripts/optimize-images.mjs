import sharp from 'sharp'
import { readdir } from 'node:fs/promises'
import path from 'node:path'

const publicDir = path.resolve('public')
const images = (await readdir(publicDir)).filter((f) => /\.(png|jpe?g)$/i.test(f))

for (const file of images) {
  const input = path.join(publicDir, file)
  const base = file.replace(/\.(png|jpe?g)$/i, '')
  const webpOut = path.join(publicDir, `${base}.webp`)

  await sharp(input)
    .resize({ width: 1920, withoutEnlargement: true })
    .webp({ quality: 78, effort: 4 })
    .toFile(webpOut)

  const meta = await sharp(webpOut).metadata()
  const { size } = await import('node:fs/promises').then((fs) => fs.stat(webpOut))
  console.log(`${base}.webp — ${Math.round(size / 1024)}KB (${meta.width}px)`)
}

console.log('Done.')
