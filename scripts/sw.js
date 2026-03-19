const CACHE_NAME = 'portfolio-v3';
const RUNTIME_CACHE = 'runtime-v3';
const DATA_CACHE = 'data-v3';

// Only cache files we KNOW exist (minimal install)
// Other files will cache on first use
const CRITICAL_FILES = [
  './index.html',
  './stylesheet.css',
  './scripts/main.js'
];

// Install Event: Cache only critical files
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installing...');
  event.waitUntil(
    (async () => {
      try {
        const cache = await caches.open(CACHE_NAME);
        console.log('Opening cache:', CACHE_NAME);
        
        // Cache only critical files - don't block on missing files
        for (const url of CRITICAL_FILES) {
          try {
            await cache.add(url);
            console.log(`✅ Cached: ${url}`);
          } catch (error) {
            console.warn(`⚠️ Could not cache ${url}: ${error.message}`);
            // Don't throw - continue with other files
          }
        }
        
        console.log('Service Worker install completed');
        self.skipWaiting();
      } catch (error) {
        console.error('Cache operation failed:', error);
        // Don't re-throw - allow SW to install even if caching fails
        self.skipWaiting();
      }
    })()
  );
});

// Activate Event: Clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activating...');
  event.waitUntil(
    (async () => {
      try {
        const cacheNames = await caches.keys();
        console.log('Found caches:', cacheNames);
        
        for (const cacheName of cacheNames) {
          if (cacheName !== CACHE_NAME && cacheName !== RUNTIME_CACHE && cacheName !== DATA_CACHE) {
            console.log('Deleting old cache:', cacheName);
            await caches.delete(cacheName);
          }
        }
        
        console.log('Service Worker activated and ready');
        self.clients.claim();
      } catch (error) {
        console.error('Activation error:', error);
      }
    })()
  );
});

// Fetch Event: Smart caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Skip chrome extensions
  if (url.protocol === 'chrome-extension:') {
    return;
  }

  // Handle JSON data requests (network-first)
  if (url.pathname.includes('/data/') || url.pathname.endsWith('.json')) {
    event.respondWith(networkFirst(request, DATA_CACHE));
  }
  // Handle HTML documents (network-first)
  else if (request.headers.get('accept')?.includes('text/html')) {
    event.respondWith(networkFirst(request, RUNTIME_CACHE));
  }
  // Handle CSS/JS files (cache-first for speed)
  else if (request.destination === 'style' || request.destination === 'script') {
    event.respondWith(cacheFirst(request, CACHE_NAME));
  }
  // Handle images (cache-first)
  else if (request.destination === 'image') {
    event.respondWith(cacheFirst(request, CACHE_NAME));
  }
  // Default: network-first
  else {
    event.respondWith(networkFirst(request, RUNTIME_CACHE));
  }
});

// Network-first: try network, fallback to cache
async function networkFirst(request, cacheName) {
  try {
    const response = await fetch(request);
    if (response && response.status === 200) {
      try {
        const cache = await caches.open(cacheName);
        cache.put(request, response.clone());
        console.log(`📥 Cached from network: ${request.url}`);
      } catch (cacheError) {
        console.warn(`⚠️ Could not cache: ${request.url}`);
      }
    }
    return response;
  } catch (error) {
    console.log(`🔴 Network failed, using cache: ${request.url}`);
    try {
      const cached = await caches.match(request);
      if (cached) {
        console.log(`📦 Served from cache: ${request.url}`);
        return cached;
      }
    } catch (cacheError) {
      console.warn(`⚠️ Cache match failed: ${request.url}`);
    }
    
    // Fallback to offline page for HTML
    if (request.headers.get('accept')?.includes('text/html')) {
      try {
        return await caches.match('./offline.html');
      } catch (e) {
        return new Response('You are offline', { status: 503 });
      }
    }
    
    return new Response('Resource unavailable', { status: 503 });
  }
}

// Cache-first: use cache, fallback to network
async function cacheFirst(request, cacheName) {
  try {
    const cached = await caches.match(request);
    if (cached) {
      console.log(`📦 Served from cache: ${request.url}`);
      return cached;
    }
  } catch (error) {
    console.warn(`⚠️ Cache lookup failed: ${request.url}`);
  }

  try {
    const response = await fetch(request);
    if (response && response.status === 200) {
      try {
        const cache = await caches.open(cacheName);
        cache.put(request, response.clone());
        console.log(`📥 Cached from network: ${request.url}`);
      } catch (cacheError) {
        console.warn(`⚠️ Could not cache: ${request.url}`);
      }
    }
    return response;
  } catch (error) {
    console.log(`🔴 Network failed: ${request.url}`);
    
    // Return placeholder for images
    if (request.destination === 'image') {
      return new Response(
        '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100" height="100" fill="#eee"/></svg>',
        { headers: { 'Content-Type': 'image/svg+xml' } }
      );
    }
    
    return new Response('Resource unavailable', { status: 503 });
  }
}

// Background sync for future use
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-portfolio') {
    console.log('Background sync triggered');
  }
});