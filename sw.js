// Orthodox Daily Service Worker
const CACHE_NAME = 'orthodox-daily-v1.1.1';
const STATIC_ASSETS = [
    '/',
    '/index.html',
    '/styles.css',
    '/script.js',
    '/manifest.json',
    '/data/saints.js',
    '/data/fasting.js',
    '/data/quotes.js'
];

// External resources that should be cached when accessed
const EXTERNAL_RESOURCES = [
    'https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;1,400&family=Inter:wght@300;400;500&display=swap',
    'https://fonts.gstatic.com/s/crimsontext/',
    'https://fonts.gstatic.com/s/inter/'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
    console.log('Service Worker: Install event');
    
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Service Worker: Caching static assets');
                return cache.addAll(STATIC_ASSETS);
            })
            .then(() => {
                console.log('Service Worker: Static assets cached successfully');
                return self.skipWaiting();
            })
            .catch((error) => {
                console.error('Service Worker: Failed to cache static assets', error);
            })
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
    console.log('Service Worker: Activate event');
    
    event.waitUntil(
        caches.keys()
            .then((cacheNames) => {
                return Promise.all(
                    cacheNames.map((cacheName) => {
                        if (cacheName !== CACHE_NAME) {
                            console.log('Service Worker: Deleting old cache', cacheName);
                            return caches.delete(cacheName);
                        }
                    })
                );
            })
            .then(() => {
                console.log('Service Worker: Old caches cleaned up');
                return self.clients.claim();
            })
    );
});

// Fetch event - serve from cache with network fallback
self.addEventListener('fetch', (event) => {
    // Skip non-GET requests
    if (event.request.method !== 'GET') {
        return;
    }

    // Skip external domains except for fonts
    const url = new URL(event.request.url);
    const isOwnDomain = url.origin === self.location.origin;
    const isFont = url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com';
    
    if (!isOwnDomain && !isFont) {
        return;
    }

    event.respondWith(
        caches.match(event.request)
            .then((cachedResponse) => {
                // Return cached version if available
                if (cachedResponse) {
                    console.log('Service Worker: Serving from cache', event.request.url);
                    return cachedResponse;
                }

                // Network request with caching for successful responses
                return fetch(event.request)
                    .then((networkResponse) => {
                        // Check if we received a valid response
                        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
                            return networkResponse;
                        }

                        // Clone the response as it can only be consumed once
                        const responseToCache = networkResponse.clone();

                        // Cache the response for future use
                        caches.open(CACHE_NAME)
                            .then((cache) => {
                                console.log('Service Worker: Caching new resource', event.request.url);
                                cache.put(event.request, responseToCache);
                            })
                            .catch((error) => {
                                console.error('Service Worker: Failed to cache resource', error);
                            });

                        return networkResponse;
                    })
                    .catch((error) => {
                        console.log('Service Worker: Network request failed, checking cache', event.request.url);
                        
                        // If it's a navigation request and network fails, return the main page
                        if (event.request.destination === 'document') {
                            return caches.match('/index.html');
                        }
                        
                        // For other requests, return a fallback response
                        return new Response(
                            JSON.stringify({
                                error: 'Network unavailable',
                                message: 'This content requires an internet connection.'
                            }),
                            {
                                status: 503,
                                statusText: 'Service Unavailable',
                                headers: {
                                    'Content-Type': 'application/json'
                                }
                            }
                        );
                    });
            })
    );
});

// Handle background sync for prayer status
self.addEventListener('sync', (event) => {
    console.log('Service Worker: Background sync', event.tag);
    
    if (event.tag === 'prayer-sync') {
        event.waitUntil(
            // Sync prayer data when network is available
            syncPrayerData()
        );
    }
});

// Handle push notifications (for future features)
self.addEventListener('push', (event) => {
    console.log('Service Worker: Push notification received');
    
    const options = {
        body: event.data ? event.data.text() : 'Orthodox Daily reminder',
        icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192"><circle cx="96" cy="96" r="70" fill="%23b8860b"/><path d="M96 36 L96 156 M46 86 L146 86" stroke="%23ffffff" stroke-width="6"/></svg>',
        badge: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96"><circle cx="48" cy="48" r="40" fill="%23b8860b"/></svg>',
        vibrate: [200, 100, 200],
        tag: 'orthodox-daily',
        requireInteraction: false,
        actions: [
            {
                action: 'open',
                title: 'Open App',
                icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15,3 21,3 21,9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>'
            }
        ]
    };

    event.waitUntil(
        self.registration.showNotification('Orthodox Daily', options)
    );
});

// Handle notification click
self.addEventListener('notificationclick', (event) => {
    console.log('Service Worker: Notification clicked');
    
    event.notification.close();

    if (event.action === 'open' || !event.action) {
        event.waitUntil(
            clients.matchAll({ type: 'window' })
                .then((clientList) => {
                    // If app is already open, focus on it
                    for (const client of clientList) {
                        if (client.url === '/' && 'focus' in client) {
                            return client.focus();
                        }
                    }
                    
                    // Otherwise, open new window
                    if (clients.openWindow) {
                        return clients.openWindow('/');
                    }
                })
        );
    }
});

// Utility function to sync prayer data
async function syncPrayerData() {
    try {
        console.log('Service Worker: Syncing prayer data');
        
        // Get stored prayer data
        const prayerData = await getStoredPrayerData();
        
        if (prayerData && prayerData.needsSync) {
            // Here you could sync with a server if needed
            console.log('Service Worker: Prayer data synced successfully');
            
            // Mark as synced
            await storeLocalData('prayerSynced', true);
        }
    } catch (error) {
        console.error('Service Worker: Failed to sync prayer data', error);
    }
}

// Utility function to get stored prayer data
async function getStoredPrayerData() {
    try {
        // In a real implementation, you might read from IndexedDB
        // For now, we'll just return a placeholder
        return {
            needsSync: false
        };
    } catch (error) {
        console.error('Service Worker: Failed to get stored prayer data', error);
        return null;
    }
}

// Utility function to store local data
async function storeLocalData(key, value) {
    try {
        // In a real implementation, you might write to IndexedDB
        console.log(`Service Worker: Storing ${key}:`, value);
        return true;
    } catch (error) {
        console.error('Service Worker: Failed to store local data', error);
        return false;
    }
}

// Handle errors
self.addEventListener('error', (event) => {
    console.error('Service Worker: Error occurred', event.error);
});

// Handle unhandled promise rejections
self.addEventListener('unhandledrejection', (event) => {
    console.error('Service Worker: Unhandled promise rejection', event.reason);
});

console.log('Service Worker: Script loaded successfully');
