const CACHE='gmih-ternate-v6-mobile-ai';
const ASSETS=['./','index.html','doa.html','style.css','script.js','manifest.webmanifest','assets/gereja.jpg','assets/logo.jpg','assets/logo-gmih-original.png','assets/pdt-yofter-card.jpg','assets/pdt-adewenti-card.jpg','assets/interior-gereja.jpg','assets/persekutuan.jpg','assets/minggu-etnik.jpg','assets/perjamuan.jpg','assets/sidang.jpg','assets/ulang-tahun.jpg','assets/sidang-istimewa.jpg','assets/sinode.jpg','assets/gedung-baru.jpg','assets/qris.jpg','assets/rohani-ebenhaezer.mid'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(res=>{const copy=res.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return res}).catch(()=>caches.match('index.html'))));
});
