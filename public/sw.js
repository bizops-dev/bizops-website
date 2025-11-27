/**
 * Service Worker - BizOps Website
 * 
 * Provides offline functionality and caching strategies
 * for Progressive Web App experience.
 */

const CACHE_NAME = 'bizops-v1';
const RUNTIME_CACHE = 'bizops-runtime-v1';

// Assets to cache on install
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  // Add more critical assets as needed
];

// Cache-first strategy for these patterns
const CACHE_FIRST_PATTERNS = [
  /\.css$/,
  /\.woff2?$/,
  /\.ttf$/,
  /\.eot$/,
  /\.svg$/,
];

// Network-first strategy for these patterns
const NETWORK_FIRST_PATTERNS = [
  /\/api\//,
  /\.json$/,
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        console.log('[ServiceWorker] Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        console.log('[ServiceWorker] Skip waiting');
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('[ServiceWorker] Install failed:', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((cacheName) => {
              return cacheName !== CACHE_NAME && cacheName !== RUNTIME_CACHE;
            })
            .map((cacheName) => {
              console.log('[ServiceWorker] Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            })
        );
      })
      .then(() => {
        console.log('[ServiceWorker] Claiming clients');
        return self.clients.claim();
      })
  );
});

// Fetch event - serve from cache or network
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip cross-origin requests
  if (url.origin !== self.location.origin) {
    return;
  }

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Check if request matches cache-first pattern
  const isCacheFirst = CACHE_FIRST_PATTERNS.some((pattern) =>
    pattern.test(url.pathname)
  );

  // Check if request matches network-first pattern
  const isNetworkFirst = NETWORK_FIRST_PATTERNS.some((pattern) =>
    pattern.test(url.pathname)
  );

  if (isCacheFirst) {
    // Cache-first strategy
    event.respondWith(cacheFirst(request));
  } else if (isNetworkFirst) {
    // Network-first strategy
    event.respondWith(networkFirst(request));
  } else {
    // Stale-while-revalidate for everything else
    event.respondWith(staleWhileRevalidate(request));
  }
});

/**
 * Cache-first strategy
 * Tries cache first, falls back to network
 */
async function cacheFirst(request) {
  try {
    const cache = await caches.open(CACHE_NAME);
    const cached = await cache.match(request);

    if (cached) {
      return cached;
    }

    const response = await fetch(request);

    if (response.status === 200) {
      cache.put(request, response.clone());
    }

    return response;
  } catch (error) {
    console.error('[ServiceWorker] Cache-first failed:', error);
    return new Response('Offline', {
      status: 503,
      statusText: 'Service Unavailable',
    });
  }
}

/**
 * Network-first strategy
 * Tries network first, falls back to cache
 */
async function networkFirst(request) {
  try {
    const response = await fetch(request);

    if (response.status === 200) {
      const cache = await caches.open(RUNTIME_CACHE);
      cache.put(request, response.clone());
    }

    return response;
  } catch (error) {
    console.error('[ServiceWorker] Network-first failed:', error);
    
    const cache = await caches.open(RUNTIME_CACHE);
    const cached = await cache.match(request);

    if (cached) {
      return cached;
    }

    return new Response('Offline', {
      status: 503,
      statusText: 'Service Unavailable',
    });
  }
}

/**
 * Stale-while-revalidate strategy
 * Returns cached version immediately, updates cache in background
 */
async function staleWhileRevalidate(request) {
  try {
    const cache = await caches.open(RUNTIME_CACHE);
    const cached = await cache.match(request);

    // Fetch in background and update cache
    const fetchPromise = fetch(request).then((response) => {
      if (response.status === 200) {
        cache.put(request, response.clone());
      }
      return response;
    });

    // Return cached version immediately if available
    return cached || fetchPromise;
  } catch (error) {
    console.error('[ServiceWorker] Stale-while-revalidate failed:', error);
    
    const cache = await caches.open(RUNTIME_CACHE);
    const cached = await cache.match(request);
    
    return cached || new Response('Offline', {
      status: 503,
      statusText: 'Service Unavailable',
    });
  }
}

// Handle messages from clients
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Push notification support (future enhancement)
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json();
    
    const options = {
      body: data.body,
      icon: '/icons/icon-192x192.png',
      badge: '/icons/icon-96x96.png',
      vibrate: [200, 100, 200],
      data: {
        url: data.url || '/',
      },
    };

    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  }
});

// Notification click handler
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  event.waitUntil(
    clients
      .matchAll({ type: 'window', includeUncontrolled: true })
      .then((clientList) => {
        const url = event.notification.data.url || '/';

        // Check if window is already open
        for (const client of clientList) {
          if (client.url === url && 'focus' in client) {
            return client.focus();
          }
        }

        // Open new window
        if (clients.openWindow) {
          return clients.openWindow(url);
        }
      })
  );
});

console.log('[ServiceWorker] Loaded');
