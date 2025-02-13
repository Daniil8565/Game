export function startServiceWorker() {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js')
      .then(registration => {
        console.log(registration.scope)
      })
      .catch(error => {
        console.error('ServiceWorker registration failed: ', error)
      })
  })
}
