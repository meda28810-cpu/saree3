self.addEventListener('install', (event) => {
  console.log('Service Worker: Installed');
});

self.addEventListener('fetch', (event) => {
  // هذا الكود ضروري لجعل التطبيق يعمل حتى بدون إنترنت (Offline)
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
