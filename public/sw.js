self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('first-app')
      .then(function(cache) {
        console.log("{Service Worker} Installing Service Worker ...", event);
        return cache.addAll([
          '/',
          '/index.html',
          '/src/css/app.css',
          '/src/js/app.js'
        ]);
      })
  );
  self.skipWaiting();
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(res) {
        console.log('[Service Worker] fetching something...', event);
        return res || fetch(event.request);
      })
  );
});

self.addEventListener('activate', function(event) {
  console.log("{Service Worker} Activating Service Worker ...", event);
  return self.clients.claim();
});
