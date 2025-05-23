import React, { ComponentType } from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { matchPath, Route, Routes, StaticRouter } from 'react-router-dom'
import serialize from 'serialize-javascript'
import { RouteConfig, routes } from './src/routes'
import { UserService } from './src/services/UserService'
import { setUser } from './src/slices/authSlice'
import { createStore } from './src/store/store'

export async function render(url: string, cookies?: string) {
  const userService = new UserService()
  const store = createStore({}, userService)

  if (cookies) {
    const cookiesMap = new Map<string, string>(
      cookies.split('; ').map(cookie => {
        const [key, value] = cookie.split('=') as [string, string]
        return [key, value]
      })
    )

    const uuid = cookiesMap.get('uuid')
    const authCookie = cookiesMap.get('authCookie')

    if (uuid && authCookie) {
      try {
        const user = await userService.signinWithCookie(cookies)
        store.dispatch(setUser(user))
      } catch (error) {
        console.error(`signin failed ${error}`)
      }
    }
  }

  const matchedRoute = routes.find(route => matchPath(route.path, url))
  if (matchedRoute?.loader) {
    await matchedRoute.loader(store.dispatch)
  }

  // Функция для рендеринга элемента в зависимости от типа component
  const renderRouteElement = (component: RouteConfig['component']) => {
    if (typeof component === 'function') {
      const Component = component as ComponentType<any>
      return <Component />
    }
    return component
  }

  const appHtml = renderToString(
    <Provider store={store}>
      <StaticRouter location={url}>
        <Routes>
          {routes.map(route => (
            <Route
              key={route.path}
              path={route.path}
              element={renderRouteElement(route.component)}
            />
          ))}
        </Routes>
      </StaticRouter>
    </Provider>
  )

  const preloadedState = store.getState()
  const stateScript = `<script>window.__PRELOADED_STATE__ = ${serialize(
    preloadedState
  )}</script>`

  return `${appHtml}${stateScript}`
}
