// Screenshots + assertions against the served build. Usage: node shoot.cjs <outdir>
const { chromium } = require('/home/hanan/src/blop-issue-11/node_modules/playwright-core');
const BASE = 'http://localhost:8911';
const out = process.argv[2];
const results = [];
const check = (name, ok, detail = '') => { results.push({ name, ok }); console.log(`${ok ? 'PASS' : 'FAIL'} ${name}${detail ? ' :: ' + detail : ''}`); };
async function ready(p) {
  await p.evaluate(async () => {
    await document.fonts.ready;
    const imgs = [...document.images];
    imgs.forEach(i => { i.loading = 'eager'; });
    await Promise.all(imgs.map(i => i.complete && i.naturalWidth > 0 ? 0 : new Promise(r => { i.onload = i.onerror = r; })));
  });
}
(async () => {
  const b = await chromium.launch({ executablePath: process.env.HOME + '/.cache/ms-playwright/chromium-1248/chrome-linux64/chrome' });
  for (const [w, h, tag] of [[1440, 900, '1440'], [390, 844, '390']]) {
    const p = await b.newPage({ viewport: { width: w, height: h } });
    for (const [route, name] of [['/', 'home'], ['/projects', 'projects'], ['/about', 'about'], ['/search', 'search']]) {
      await p.goto(BASE + route, { waitUntil: 'networkidle' });
      await ready(p);
      if (route === '/') {
        const imgs = await p.evaluate(() => [...document.images].map(i => [i.getAttribute('src'), i.complete && i.naturalWidth > 0, !!i.alt]));
        check(`home ${tag}: all ${imgs.length} images loaded with alt`, imgs.every(i => i[1] && i[2]), JSON.stringify(imgs.filter(i => !i[1] || !i[2])));
        const fonts = await p.evaluate(() => ['Instrument Serif', 'Schibsted Grotesk'].map(f => [f, document.fonts.check(`italic 48px "${f}"`) || document.fonts.check(`16px "${f}"`)]));
        check(`home ${tag}: webfonts loaded`, fonts.every(f => f[1]), JSON.stringify(fonts));
        await p.screenshot({ path: `${out}/home-${tag}.png` });
        await p.screenshot({ path: `${out}/home-${tag}-full.png`, fullPage: true });
      } else {
        await p.screenshot({ path: `${out}/${name}-${tag}.png` });
      }
      const sw = await p.evaluate(() => [document.documentElement.scrollWidth, innerWidth]);
      check(`${route} ${tag}: no horizontal overflow`, sw[0] <= sw[1] + 1, `${sw[0]} vs ${sw[1]}`);
      const cur = await p.evaluate(() => [...document.querySelectorAll('nav [aria-current="page"]')].map(a => a.getAttribute('href')));
      if (route !== '/') check(`${route} ${tag}: aria-current on matching nav item`, cur.length === 1 && cur[0] === route, JSON.stringify(cur));
    }
    // nav clicks
    for (const [label, route] of [['Work', '/projects'], ['Studies', '/studies'], ['About', '/about'], ['Search', '/search']]) {
      await p.goto(BASE + '/', { waitUntil: 'networkidle' });
      await p.getByRole('navigation', { name: 'Main navigation' }).getByRole('link', { name: label }).click();
      await p.waitForLoadState('networkidle');
      const path = new URL(p.url()).pathname.replace(/\/$/, '');
      check(`${tag}: nav ${label} -> ${route}`, path === route, p.url());
    }
    // home mark
    await p.goto(BASE + '/about', { waitUntil: 'networkidle' });
    await p.getByRole('link', { name: 'Hanan, home' }).click();
    await p.waitForLoadState('networkidle');
    check(`${tag}: home mark -> /`, new URL(p.url()).pathname === '/', p.url());
    // search
    await p.goto(BASE + '/search', { waitUntil: 'networkidle' });
    const input = p.locator('main input').first();
    await input.fill('elusive');
    await p.waitForTimeout(600);
    const hits = await p.locator('main a[href^="/projects/"]').count();
    check(`${tag}: search "elusive" shows results`, hits > 0, `${hits} result links`);
    if (tag === '390') await p.screenshot({ path: `${out}/search-390-results.png` });
    await p.close();
  }
  await b.close();
  const failed = results.filter(r => !r.ok).length;
  console.log(`\n${results.length - failed}/${results.length} assertions passed`);
  process.exit(failed ? 1 : 0);
})().catch(e => { console.error(e); process.exit(2); });
