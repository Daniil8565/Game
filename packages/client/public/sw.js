const CACHE_NAME = 'my-site-cache-v1'

const URLS = [
  '/index.html',
  '/vite.svg',
  '/assets/index.386e715f.css',
  '/assets/index.2743df7b.js',
]

this.addEventListener('install', event => {
  console.log('install')
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache')
        return cache.addAll(URLS)
      })
      .catch(err => {
        console.log(err)
        throw err
      })
  )
})

this.addEventListener('activate', function (event) {
  console.log('activate')

  const currentCacheName = CACHE_NAME

  event.waitUntil(
    caches
      .keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== currentCacheName) {
              console.log(`Deleting old cache: ${cacheName}`)
              return caches.delete(cacheName)
            }
          })
        )
      })
      .then(() => {
        return self.clients.claim()
      })
  )
})

this.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) {
        console.log('Ответ найден в кеше:', event.request.url)
        return response
      }
      const fetchRequest = event.request.clone()
      return fetch(fetchRequest)
        .then(response => {
          if (
            !response ||
            response.status !== 200 ||
            response.type !== 'basic'
          ) {
            return response
          }

          const responseToCache = response.clone()
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseToCache)
          })
          return response
        })
        .catch(() => {
          console.log('Данных нет в кеше и отсутствует сеть')
          return caches.match('')
        })
    })
  )
})
