// Check every internal href/src in dist/**/*.html resolves to a file.
import { readdirSync, readFileSync, existsSync, statSync } from "node:fs";
import { join } from "node:path";
const dist = process.argv[2];
const files = [];
const walk = d => { for (const f of readdirSync(d)) { const p = join(d, f); statSync(p).isDirectory() ? walk(p) : p.endsWith(".html") && files.push(p); } };
walk(dist);
let checked = 0; const missing = [];
for (const f of files) {
  const html = readFileSync(f, "utf8");
  for (const m of html.matchAll(/\s(?:href|src)="([^"]+)"/g)) {
    let u = m[1];
    if (!u.startsWith("/") || u.startsWith("//")) continue;
    u = decodeURIComponent(u.split("#")[0].split("?")[0]);
    if (!u) continue;
    checked++;
    const base = join(dist, u);
    const ok = [base, join(base, "index.html"), base + ".html"].some(p => existsSync(p) && statSync(p).isFile());
    if (!ok) missing.push(`${f.replace(dist, "")} -> ${u}`);
  }
}
console.log(`html files: ${files.length}, internal links checked: ${checked}, missing: ${missing.length}`);
missing.forEach(m => console.log("  404 " + m));
process.exit(missing.length ? 1 : 0);
