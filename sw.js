// ============================================
// FLAG MASTER - SERVICE WORKER
// Enables offline functionality for PWA
// ============================================

const CACHE_NAME = 'flag-master-v1';
const STATIC_ASSETS = [
    './',
    './index.html',
    './styles.css',
    './game.js',
    './countries.js',
    './sounds.js',
    './manifest.json'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Caching static assets...');
                return cache.addAll(STATIC_ASSETS);
            })
            .then(() => self.skipWaiting())
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys()
            .then((cacheNames) => {
                return Promise.all(
                    cacheNames
                        .filter((name) => name !== CACHE_NAME)
                        .map((name) => caches.delete(name))
                );
            })
            .then(() => self.clients.claim())
    );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
    const { request } = event;
    const url = new URL(request.url);

    // For flag images from flagcdn.com - cache with network fallback
    if (url.hostname === 'flagcdn.com') {
        event.respondWith(
            caches.open(CACHE_NAME)
                .then((cache) => {
                    return cache.match(request)
                        .then((cachedResponse) => {
                            if (cachedResponse) {
                                return cachedResponse;
                            }
                            return fetch(request)
                                .then((networkResponse) => {
                                    // Cache the flag image for offline use
                                    cache.put(request, networkResponse.clone());
                                    return networkResponse;
                                })
                                .catch(() => {
                                    // Return a placeholder if offline and not cached
                                    return new Response('', { status: 404 });
                                });
                        });
                })
        );
        return;
    }

    // For local assets - cache first, then network
    event.respondWith(
        caches.match(request)
            .then((cachedResponse) => {
                if (cachedResponse) {
                    return cachedResponse;
                }
                return fetch(request)
                    .then((networkResponse) => {
                        // Don't cache non-GET requests
                        if (request.method !== 'GET') {
                            return networkResponse;
                        }
                        // Cache the response for future use
                        return caches.open(CACHE_NAME)
                            .then((cache) => {
                                cache.put(request, networkResponse.clone());
                                return networkResponse;
                            });
                    });
            })
            .catch(() => {
                // Offline fallback for HTML pages
                if (request.headers.get('Accept').includes('text/html')) {
                    return caches.match('./index.html');
                }
            })
    );
});
