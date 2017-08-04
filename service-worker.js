var CACHE = 'pepper-v1.2.0';

// On install, cache some resources.
self.addEventListener('install', function(evt) {
    console.log('The service worker is being installed.');

    // Ask the service worker to keep installing until the returning promise
    // resolves.
    evt.waitUntil(precache());
});

// On fetch, use cache but update the entry with the latest contents
// from the server.
self.addEventListener('fetch', function(evt) {
    var reqContents = (evt.request.url.includes('pepper.ink') || evt.request.url.includes('перчик.com'));
    var noMetrics = !(evt.request.url.includes('google') || evt.request.url.includes('yandex'));
    if (evt.request.method === 'GET' && reqContents && noMetrics) {
        evt.respondWith(
            caches.open(CACHE).then(function(cache) {
                return cache.match(evt.request).then(function (response) {
                    return response || fetch(evt.request).then(function(response) {
                            cache.put(evt.request, response.clone());
                            return response;
                        });
                });
            })
        );
    }
});

// Open a cache and use `addAll()` with an array of assets to add all of them
// to the cache. Return a promise resolving when all the assets are added.
function precache() {
    return caches.open(CACHE).then(function (cache) {
        return cache.addAll([
            './',
            './launch',
            './200.html',
            './dist/js/bundle.js',
            './dist/js/modernizr.js',
            './dist/img/bg.webp',
            './dist/img/bg.png',
            './dist/img/bg_gs.webp',
            './dist/img/bg_gs.png',
            './dist/img/logo.svg',
            './dist/img/rocket.svg',
            './manifest.json',
            './dist/fonts/hinted-HouschkaRounded-Bold.eot',
            './dist/fonts/hinted-HouschkaRounded-Bold.ttf',
            './dist/fonts/hinted-HouschkaRounded-Bold.woff',
            './dist/fonts/hinted-HouschkaRounded-Bold.woff2',

            './dist/fonts/hinted-HouschkaRounded-DemiBold.eot',
            './dist/fonts/hinted-HouschkaRounded-DemiBold.ttf',
            './dist/fonts/hinted-HouschkaRounded-DemiBold.woff',
            './dist/fonts/hinted-HouschkaRounded-DemiBold.woff2',

            './dist/fonts/hinted-HouschkaRounded-ExtraBold.eot',
            './dist/fonts/hinted-HouschkaRounded-ExtraBold.ttf',
            './dist/fonts/hinted-HouschkaRounded-ExtraBold.woff',
            './dist/fonts/hinted-HouschkaRounded-ExtraBold.woff2',

            './dist/fonts/hinted-HouschkaRounded-Light.eot',
            './dist/fonts/hinted-HouschkaRounded-Light.ttf',
            './dist/fonts/hinted-HouschkaRounded-Light.woff',
            './dist/fonts/hinted-HouschkaRounded-Light.woff2',

            './dist/fonts/hinted-HouschkaRounded-Medium.eot',
            './dist/fonts/hinted-HouschkaRounded-Medium.ttf',
            './dist/fonts/hinted-HouschkaRounded-Medium.woff',
            './dist/fonts/hinted-HouschkaRounded-Medium.woff2',

            './dist/fonts/hinted-HouschkaRounded-Thin.eot',
            './dist/fonts/hinted-HouschkaRounded-Thin.ttf',
            './dist/fonts/hinted-HouschkaRounded-Thin.woff',
            './dist/fonts/hinted-HouschkaRounded-Thin.woff2',

            './dist/icons/icons.eot',
            './dist/icons/icons.ttf',
            './dist/icons/icons.woff'
        ]);
    });
}


// Update consists in opening the cache, performing a network request and
// storing the new response data.
function update(request) {
    return caches.open(CACHE).then(function (cache) {
        return fetch(request).then(function (response) {
            return cache.put(request, response);
        });
    });
}