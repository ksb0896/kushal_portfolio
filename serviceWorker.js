const CACHE_NAME = "ksb-portfolio";
const assets =[
  './',
  './index.html',
  './stylesheet.css',
  './scripts/main.js',
  './assets/profile-photo.ico',
  './assets/profile-photo.svg',
  './assets/images/storybook.jpg',
  './assets/data/portfolio.json'
]

// cache
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Pre-caching assets');
      return cache.addAll(assets);
    })
  );
});

// activate Event
self.addEventListener('activate', (event) => {
  console.log('Service Worker activated');
});

// fetch-cache
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request)
        .then((networkResponse) => {
          return networkResponse;
        }).catch(() => {
          console.log('Network failed and asset not in cache. Serving offline fallback...');
          return new Response('Offline content not available');
        });
    })
  );
});
      