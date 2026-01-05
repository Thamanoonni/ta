// sw.js - Service Worker อย่างง่าย
self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
});

self.addEventListener('fetch', (e) => {
  // ไม่ต้องทำ Caching ซับซ้อน เพื่อให้มั่นใจว่าได้ code ใหม่เสมอ
  e.respondWith(fetch(e.request));
});
