import sharp from 'sharp'
import { fileURLToPath } from 'node:url'

const names = ['violet', 'pink', 'blue', 'green', 'orange']
const inputs = process.argv.slice(2)
if (inputs.length !== names.length) throw new Error('Pass five source PNG paths: violet pink blue green orange')
for (const [index, name] of names.entries()) {
  const destination = fileURLToPath(new URL(`../public/hero-${name}.webp`, import.meta.url))
  await sharp(inputs[index]).resize(800, 1000, { fit: 'fill' }).webp({ quality: 88 }).toFile(destination)
  console.log(destination)
}
