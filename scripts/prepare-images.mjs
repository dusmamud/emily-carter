// Prepare PNG masters in images-src/ from the generated WebP
// sources in src/assets-src/, cropping the avatar triptych into three
// individual square portraits. Run once, then convert-images.mjs.
import sharp from 'sharp';
import { mkdir, readdir } from 'node:fs/promises';
import { join } from 'node:path';

const srcDir = 'src/assets-src';
const outDir = 'images-src';
await mkdir(outDir, { recursive: true });
const files = await readdir(srcDir);
const find = (key) => files.find((f) => f.includes(key) && f.endsWith('.webp'));

const singles = [
  ['hero-teacher', 'hero'],
  ['about-desk', 'about-desk'],
  ['cta-desk', 'cta-desk'],
  ['about-portrait', 'about-portrait'],
  ['blog-speaking', 'blog-speaking'],
  ['blog-ielts', 'blog-ielts'],
  ['blog-business', 'blog-business'],
];
for (const [key, stem] of singles) {
  const f = find(key);
  if (!f) { console.error('missing', key); process.exit(1); }
  await sharp(join(srcDir, f)).png().toFile(join(outDir, `${stem}.png`));
  console.log('master', stem);
}
// Avatars: triptych 1920x1280, three panels ~640 wide, faces in top area;
// bottom strip carries a caption, so crop y 60..1100 then square-crop faces.
const av = find('avatars');
const meta = await sharp(join(srcDir, av)).metadata();
const W = meta.width, panel = Math.floor(W / 3);
const names = ['avatar-sarah', 'avatar-david', 'avatar-anna'];
for (let i = 0; i < 3; i++) {
  await sharp(join(srcDir, av))
    .extract({ left: i * panel + 20, top: 60, width: panel - 40, height: 760 })
    .png().toFile(join(outDir, `${names[i]}.png`));
  console.log('master', names[i]);
}
console.log('All masters written to', outDir);
