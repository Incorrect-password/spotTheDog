var log = console.log.bind(console);//bind our console to a variable
var version = "0.0.1";
var cacheName = "spotTheDog";
var cache = cacheName + "-" + version;
var filesToCache = [
    "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
    "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js",
    "https://code.jquery.com/jquery-3.3.1.slim.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.4.2/handlebars.js",

    "http://localhost:1234/spotTheDog/app/manifest.json",

    "http://localhost:1234/spotTheDog/app/",
    "http://localhost:1234/spotTheDog/app/index.html",
    "http://localhost:1234/spotTheDog/app/js/main.js",
    "http://localhost:1234/spotTheDog/app/js/localforage.js",
    "http://localhost:1234/spotTheDog/app/css/style.css",

    "http://localhost:1234/spotTheDog/app/images/kennel.jpg",
    "http://localhost:1234/spotTheDog/app/images/dalmation.jpg",
    "http://localhost:1234/spotTheDog/app/images/pokeball.png",
    "http://localhost:1234/spotTheDog/app/images/willow.jpg",
    "http://localhost:1234/spotTheDog/app/images/icons/spot-icon-48x48.png"
];

self.addEventListener("install", function(event) {
    log('[ServiceWorker] Installing....');

    event.waitUntil(caches
        .open(cache) //opens cache and returns a promise
        .then(function(swcaches) { //
            log('[ServiceWorker] Caching files');
            log(swcaches)
            return swcaches.addAll(filesToCache);
        })
    )
})

self.addEventListener("fetch", function(event) {
    if (filesToCache.includes(event.request.url)){
        event.respondWith(
            caches.match(event.request)
                .then(function(response) {
                 if(response) {
                     log("Fulfilling " + event.request.url + "from cache.")
                     return response;
                 }else{
                     log(event.request.url + "not found in cache, fetching from network");

                     return fetch(event.request)
                 }
            })
        )
    }
})
