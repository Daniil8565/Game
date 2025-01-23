const CACHE_NAME = 'my-site-cache-v5'

const URLS = [
  '/src/main.tsx',
  '/src/App.tsx',
  '/src',
  '/src/App.css',
  '/src/components/AuthButton/AuthButton.module.scss',
  '/src/components/AuthButton/AuthButton.tsx',
  '/src/components/AuthButton/index.ts',
  '/src/components/AuthInput/AuthInput.module.scss',
  '/src/components/AuthInput/AuthInput.tsx',
  '/src/components/AuthInput/index.ts',
  '/src/components/ProfileErrorMessage/ErrorMessage.module.scss',
  '/src/components/ProfileErrorMessage/ErrorMessage.tsx',
  '/src/index.css',
  '/src/pages/AuthPages/SigninPage/SigninPage.tsx',
  '/src/pages/AuthPages/SigninPage/SinginPage.module.scss',
  '/src/pages/AuthPages/SigninPage/index.ts',
  '/src/pages/AuthPages/components/AuthForm/AuthForm.module.scss',
  '/src/pages/AuthPages/components/AuthForm/AuthForm.tsx',
  '/src/pages/AuthPages/components/AuthForm/index.ts',
  '/src/pages/StartPage/StartPage.module.scss',
  '/src/pages/StartPage/StartPage.tsx',
  '/src/pages/StartPage/index.ts',
  '/src/serviceWorker.ts',
  '/vite.svg',
  '/client',
  '/@react-refresh',
  '/@vite/client',
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
        console.log('New cache is ready!')
        return self.clients.claim()
      })
  )
})

this.addEventListener('fetch', event => {
  console.log('Сделан запрос')
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
