const { chromium } = require('/home/hanan/src/blop-issue-11/node_modules/playwright-core');
const BASE='http://localhost:8911', out=process.argv[2]; let fail=0;
const check=(n,ok,d='')=>{ if(!ok) fail++; console.log(`${ok?'PASS':'FAIL'} ${n}${d?' :: '+d:''}`); };
(async()=>{
  const b=await chromium.launch({executablePath:process.env.HOME+'/.cache/ms-playwright/chromium-1248/chrome-linux64/chrome'});
  for (const [w,h] of [[1440,900],[390,844]]) {
    const p=await b.newPage({viewport:{width:w,height:h}});
    for (const [route,name] of [['/','home'],['/projects/arvel-desk-buddy','arvel-desk-buddy']]) {
      await p.goto(BASE+route,{waitUntil:'networkidle'});
      await p.evaluate(async()=>{await document.fonts.ready; const im=[...document.images]; im.forEach(i=>i.loading='eager'); await Promise.all(im.map(i=>i.complete&&i.naturalWidth>0?0:new Promise(r=>{i.onload=i.onerror=r})));});
      const imgs=await p.evaluate(()=>[...document.images].map(i=>[i.getAttribute('src'),i.complete&&i.naturalWidth>0,i.naturalWidth]));
      check(`${name} ${w}: ${imgs.length} images complete&&naturalWidth>0`, imgs.length>0&&imgs.every(i=>i[1]), JSON.stringify(imgs));
      const sw=await p.evaluate(()=>[document.documentElement.scrollWidth,innerWidth]);
      check(`${name} ${w}: scrollWidth<=innerWidth+1`, sw[0]<=sw[1]+1, `${sw[0]} vs ${sw[1]}`);
      if (route==='/') {
        const order=await p.evaluate(()=>[...document.querySelectorAll('.made-list a')].map(a=>a.getAttribute('href')));
        check(`home ${w}: desk buddy entry directly after desktop Arvel`, order.indexOf('/projects/arvel-desk-buddy')===order.indexOf('/projects/khadim-local-first-ai-coding-agent')+1, JSON.stringify(order));
        await p.locator('.made').scrollIntoViewIfNeeded();
        await p.locator('.made').screenshot({path:`${out}/home-made-${w}.png`});
        await p.screenshot({path:`${out}/home-${w}-full.png`,fullPage:true});
      } else {
        await p.screenshot({path:`${out}/${name}-${w}.png`});
        await p.screenshot({path:`${out}/${name}-${w}-full.png`,fullPage:true});
      }
    }
  }
  await b.close(); console.log(fail?`${fail} FAILED`:'ALL PASS'); process.exit(fail?1:0);
})();
