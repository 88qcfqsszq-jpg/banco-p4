// Exatamente + PATHMED V10 + Pílulas + OSCE + N3 da Galega
// Offline não é prioridade; o cache serve apenas como tolerância a falhas e aceleração.
const VERSION='exatamente-v25-n3';
const CORE=['./','index.html','manifest.webmanifest','exatamente-192.png','exatamente-512.png','exatamente-apple.png','pathmed/missoes.js','pathmed/casos.js','pathmed/pathmed.js','pathmed/pathmed.css','pilulas/conteudo.js','pilulas/conteudo-apg3.js','pilulas/pilulas.js','pilulas/pilulas.css','osce.js','osce.css','osce-dados.js','n3.js','n3.css'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(VERSION).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==VERSION).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{
  const req=e.request;if(req.method!=='GET')return;const url=new URL(req.url);
  const dynamic=url.origin===location.origin&&(req.mode==='navigate'||url.pathname.endsWith('index.html')||url.pathname.endsWith('dados.js')||url.pathname.endsWith('osce.js')||url.pathname.endsWith('osce.css')||url.pathname.endsWith('n3.js')||url.pathname.endsWith('n3.css')||(url.pathname.includes('/pathmed/')||url.pathname.includes('/pilulas/'))&&/\.(js|css)$/.test(url.pathname));
  if(dynamic){e.respondWith(fetch(req).then(res=>{if(res.ok){const cp=res.clone();caches.open(VERSION).then(c=>c.put(req,cp));}return res;}).catch(()=>caches.match(req).then(r=>r||caches.match('index.html'))));return;}
  e.respondWith(caches.match(req).then(r=>r||fetch(req).then(res=>{if(res.ok&&url.origin===location.origin){const cp=res.clone();caches.open(VERSION).then(c=>c.put(req,cp));}return res;})));
});
