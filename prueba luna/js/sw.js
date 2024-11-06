const CACHE_NAME = 'v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/manifest.json',
    '/style.css',
    '/images/1.jpg',
    '/images/2.jpeg',
    '/images/3.jpeg',
    '/images/1.png',
    '/images/2.png',
];

// Instalación del service worker
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Archivos en caché durante la instalación:', urlsToCache);
                return cache.addAll(urlsToCache);
            })
    );
});

// Activación del service worker
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Borrando caché antiguo:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// Responder a las solicitudes de red
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            // Retorna la respuesta de la caché si está disponible, si no, realiza la solicitud a la red
            return response || fetch(event.request).then((fetchResponse) => {
                return caches.open(CACHE_NAME).then((cache) => {
                    // Cachea la respuesta para futuras solicitudes
                    cache.put(event.request, fetchResponse.clone());
                    return fetchResponse;
                });
            });
        })
    );
});
