var cacheName = 'pepper-v1';
var filesToCache = [
    './',
    './200.html',
    './manifest.json',
    './dist/js/bundle.js',
    './dist/img/bg.png',
    './dist/img/bg_gs.png'
];

self.addEventListener('install', function(e) {
    e.waitUntil(caches.open(cacheName)
        .then(function(cache) {
            return cache.addAll(filesToCache)
                .then(function() {
                    self.skipWaiting();
                });
        }));
});

self.addEventListener('activate', function(e) {
    e.waitUntil(caches.keys()
        .then(function(keyList) {
            return Promise.all(keyList.map(function(key) {
                if (key !== cacheName)
                    return caches.delete(key);
            }));
        }));
    return self.clients.claim();
});

self.addEventListener('fetch', function(event) {
    if (event.request.method === 'GET') {
        event.respondWith(
            caches.open(cacheName).then(function(cache) {
                return cache.match(event.request).then(function (response) {
                    return response || fetch(event.request).then(function(response) {
                            cache.put(event.request, response.clone());
                            return response;
                        });
                });
            })
        );
    }
});