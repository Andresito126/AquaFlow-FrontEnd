const CACHE_NAME = 'aqua-cache';
const RUNTIME_CACHE = 'aqua-runtime';
const API_CACHE = 'aqua-api';

const STATIC_ASSETS = [
  '/',
  '/index.html',
];

// Instalación - cachear assets estáticos básicos
self.addEventListener('install', (event) => {
  console.log('instalando sw');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('SW cache abierto');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => self.skipWaiting())
  );
});

// donde se activa y borra cache viejo
self.addEventListener('activate', (event) => {
  console.log('Activando SW');
  const cacheWhitelist = [CACHE_NAME, RUNTIME_CACHE, API_CACHE];
  
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            console.log('Cache viejo borrado', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// checa las peticiones a la api


// para cachear solo gets

  
// no cachear login


// evento de fetch: network first
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  if (!url.protocol.startsWith('http')) {
    return;
  }

  //  vistas html, para guardar y chechar el networkfirst
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const responseClone = response.clone();
          caches.open(RUNTIME_CACHE).then((cache) => {
            cache.put(request, responseClone);
          });
          return response;
        })
        .catch(() => {
          return caches.match(request)
            .then((cachedResponse) => {
              if (cachedResponse) {
                console.log('Usando cache');
                return cachedResponse;
              }
              return caches.match('/index.html');
            });
        })
    );
    return;
  }

  // peticiones api
 
  //ASSETS 
  event.respondWith(
    caches.match(request)
      .then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }
        
        return fetch(request).then((response) => {
          if (response.status === 200) {
            const responseClone = response.clone();
            caches.open(RUNTIME_CACHE).then((cache) => {
              cache.put(request, responseClone);
            });
          }
          return response;
        });
      })
      .catch(() => {
        console.log('error cargando assetsss:', url.pathname);
        return new Response('Offline', { status: 503 });
      })
  );
});