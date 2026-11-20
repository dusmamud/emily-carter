// Dead-link check: crawl every internal href in dist/ and verify the
// target file exists. No browser needed.
import { readdir, readFile, access } from 'node:fs/promises';
import { join } from 'node:path';

const dist = new URL('../dist/', import.meta.url).pathname;
async function walk(dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...await walk(p));
    else if (e.name.endsWith('.html')) out.push(p);
  }
  return out;
}
const files = await walk(dist);
const targets = new Map();
for (const f of files) {
  const html = await readFile(f, 'utf8');
  for ( const m of html.matchAll(/(?:href|src)="(\/[^"#]*)"/g)) {
    const url = m[1];
    if (url.startsWith('//')) continue;
    if (!targets.has(url)) targets.set(url, []);
    targets.get(url).push(f.replace(dist, ''));
  }
}
let bad = 0;
for (const [url, from] of [...targets.entries()].sort()) {
  const clean = decodeURIComponent(url.split('?')[0]);
  const candidates = clean.endsWith('/')
    ? [join(dist, clean, 'index.html')]
    : [join(dist, clean), join(dist, clean, 'index.html')];
  let ok = false;
  for (const c of candidates) { try { await access(c); ok = true; break; } catch { /* next */ } }
  if (!ok) { bad++; console.log(`DEAD ${url}  (linked from ${from.slice(0, 3).join(', ')}${from.length > 3 ? ` +${from.length - 3} more` : ''})`); }
}
console.log(`\nChecked ${targets.size} unique internal targets from ${files.length} pages — dead: ${bad}`);
process.exit(bad ? 1 : 0);
