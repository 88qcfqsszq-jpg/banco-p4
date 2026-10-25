// Exatamente + PATHMED V10
// Offline não é prioridade; o cache serve apenas como tolerância a falhas e aceleração.
const VERSION='exatamente-v10b-pathmed';
const CORE=['./','index.html','manifest.webmanifest','exatamente-192.png','exatamente-512.png','exatamente-apple.png','pathmed/missoes.js','pathmed/casos.js','pathmed/pathmed.js','pathmed/pathmed.css'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(VERSION).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==VERSION).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{
  const req=e.request;if(req.method!=='GET')return;const url=new URL(req.url);
  const dynamic=url.origin===location.origin&&(req.mode==='navigate'||url.pathname.endsWith('index.html')||url.pathname.endsWith('dados.js')||url.pathname.includes('/pathmed/')&&/\.(js|css)$/.test(url.pathname));
  if(dynamic){e.respondWith(fetch(req).then(res=>{if(res.ok){const cp=res.clone();caches.open(VERSION).then(c=>c.put(req,cp));}return res;}).catch(()=>caches.match(req).then(r=>r||caches.match('index.html'))));return;}
  e.respondWith(caches.match(req).then(r=>r||fetch(req).then(res=>{if(res.ok&&url.origin===location.origin){const cp=res.clone();caches.open(VERSION).then(c=>c.put(req,cp));}return res;})));
});
