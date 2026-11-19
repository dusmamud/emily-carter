// Convert every PNG master in images-src/ into AVIF / WebP / JPG /
// PNG at 480 / 800 / 1200 / 1600 in public/images/.
// Usage: node scripts/convert-images.mjs   (requires sharp)
import sharp from 'sharp';
import { readdir, mkdir } from 'node:fs/promises';
import { join, basename, extname } from 'node:path';

const srcDir = 'images-src';
const outDir = 'public/images';
await mkdir(outDir, { recursive: true });
const widths = [480, 800, 1200, 1600];
let count = 0;
for (const f of await readdir(srcDir)) {
  if (extname(f) !== '.png') continue;
  const stem = basename(f, '.png');
  for (const width of widths) {
    const img = sharp(join(srcDir, f)).resize(width);
    await img.clone().avif({ quality: 72 }).toFile(join(outDir, `${stem}-${width}.avif`));
    await img.clone().webp({ quality: 80 }).toFile(join(outDir, `${stem}-${width}.webp`));
    await img.clone().jpeg({ quality: 82 }).toFile(join(outDir, `${stem}-${width}.jpg`));
    await img.clone().png().toFile(join(outDir, `${stem}-${width}.png`));
    count += 4;
  }
  console.log('converted', stem);
}
console.log(`Done: ${count} derivative files in ${outDir}`);
