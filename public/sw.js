// Names of the two caches used in this version of the service worker.
// Change to v2, etc. when you update any of the local resources, which will
// in turn trigger the install event again.
const PRECACHE = 'precache-v1'
const RUNTIME = 'runtime'

// A list of local resources we always want to be cached.
const PRECACHE_URLS = [
  '/',
  '/ferries',
  '/buses',
  '/buses/1-grotto-bay',
  '/buses/3-grotto-bay',
  '/buses/1-st-georges',
  '/buses/3-st-georges',
  '/buses/6-st-georges',
  '/buses/10-st-georges',
  '/buses/11-st-georges',
  '/buses/4-spanish-point',
  '/buses/5-pond-hill',
  '/buses/9-prospect',
  '/buses/2-ord-road',
  '/buses/7-barnes-corner',
  '/buses/7-dockyard',
  '/buses/8-dockyard',
  '/buses/8-somerset',
  '/buses/8-cedar-hill',
  '/img/bermy-logo@1x.png',
  '/img/bermy-logo@2x.png',
  '/img/bermy-logo@3x.png',
]

// The install handler takes care of precaching the resources we always need.
self.addEventListener('install', event => {
  event.waitUntil(
    caches
      .open(PRECACHE)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(self.skipWaiting()),
  )
})

// The activate handler takes care of cleaning up old caches.
self.addEventListener('activate', event => {
  const currentCaches = [PRECACHE, RUNTIME]
  event.waitUntil(
    caches
      .keys()
      .then(cacheNames => cacheNames.filter(cacheName => !currentCaches.includes(cacheName)))
      .then(cachesToDelete => Promise.all(
        cachesToDelete.map(cacheToDelete => caches.delete(cacheToDelete)),
      ))
      .then(() => self.clients.claim()),
  )
})

// The fetch handler serves responses for same-origin resources from a cache.
// If no response is found, it populates the runtime cache with the response
// from the network before returning it to the page.
self.addEventListener('fetch', event => {
  // Skip cross-origin requests, like those for Google Analytics.
  if (event.request.url.startsWith(self.location.origin)) {
    event.respondWith(
      caches.match(event.request).then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse
        }

        return caches.open(RUNTIME).then(cache => fetch(event.request).then(response =>
          // Put a copy of the response in the runtime cache.
          cache.put(event.request, response.clone()).then(() => response),
        ))
      }),
    )
  }
})