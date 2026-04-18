/**
 * @astrojs/sitemap 3.7.x + Astro 4.16: `astro:routes:resolved` may not run before
 * `astro:build:done`, leaving `_routes` undefined and crashing on `.reduce`.
 * Guard matches upstream intent; safe when `_routes` is already set.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const NEEDLE = 'const routeUrls = _routes.reduce((urls, r) => {';
const REPLACEMENT = 'const routeUrls = (_routes ?? []).reduce((urls, r) => {';

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const name of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, name.name);
    if (name.isDirectory()) walk(full, out);
    else if (name.isFile() && name.name === 'index.js' && full.includes(`${path.sep}@astrojs${path.sep}sitemap${path.sep}dist`)) {
      out.push(full);
    }
  }
  return out;
}

const root = path.resolve(__dirname, '..');
const candidates = walk(path.join(root, 'node_modules'));
let patched = 0;
for (const file of candidates) {
  let src = fs.readFileSync(file, 'utf8');
  if (src.includes(NEEDLE)) {
    src = src.replace(NEEDLE, REPLACEMENT);
    fs.writeFileSync(file, src);
    patched++;
  }
}
if (patched) {
  console.log(`[apply-sitemap-patch] Patched ${patched} @astrojs/sitemap file(s).`);
}
