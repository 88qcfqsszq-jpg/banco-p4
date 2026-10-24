// Service worker: guarda o app no aparelho para funcionar offline.
// Ao atualizar questões, mude o VERSION para os aparelhos baixarem a versão nova.
const VERSION = 'exatamente-v6';
const FILES = ['./','index.html','manifest.webmanifest','exatamente-192.png','exatamente-512.png','exatamente-apple.png','dados.js'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  // página e dados: tenta a rede primeiro (pega atualizações), cai no cache se offline
  if (url.origin === location.origin && (req.mode === 'navigate' || (url.pathname.endsWith('index.html')||url.pathname.endsWith('dados.js')))) {
    e.respondWith(fetch(req).then(r => { const cp = r.clone(); caches.open(VERSION).then(c => c.put(req, cp)); return r; }).catch(() => caches.match(req).then(r => r || caches.match('index.html'))));
    return;
  }
  // imagens, ícones e fontes: cache primeiro
  e.respondWith(caches.match(req).then(r => r || fetch(req).then(res => {
    if (res.ok && (url.origin === location.origin || url.host.includes('fonts.g'))) { const cp = res.clone(); caches.open(VERSION).then(c => c.put(req, cp)); }
    return res;
  })));
});
