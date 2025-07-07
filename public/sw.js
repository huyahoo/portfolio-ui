// Service Worker for GitHub Pages Portfolio
const CACHE_NAME = 'portfolio-cache-v1';
const BASE_PATH = '/portfolio-ui';

// Assets to cache
const CACHE_ASSETS = [
  `${BASE_PATH}/`,
  `${BASE_PATH}/index.html`,
  `${BASE_PATH}/assets/images/avatar.png`,
  `${BASE_PATH}/assets/images/perfil.jpeg`
];

// Install event - cache assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Service Worker: Caching assets');
        return cache.addAll(CACHE_ASSETS);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('Service Worker: Deleting old cache', cache);
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event - serve cached content when offline
self.addEventListener('fetch', (event) => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;
  
  // Skip cross-origin requests
  if (!event.request.url.startsWith(self.location.origin)) return;

  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request).then((fetchResponse) => {
          // Check if valid response
          if (!fetchResponse || fetchResponse.status !== 200 || fetchResponse.type !== 'basic') {
            return fetchResponse;
          }

          // Clone response to cache
          const responseToCache = fetchResponse.clone();
          caches.open(CACHE_NAME)
            .then((cache) => {
              cache.put(event.request, responseToCache);
            });

          return fetchResponse;
        });
      })
      .catch(() => {
        // Fallback for navigation requests
        if (event.request.destination === 'document') {
          return caches.match(`${BASE_PATH}/index.html`);
        }
      })
  );
}); 