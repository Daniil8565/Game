import axios from 'axios'
import React, { ComponentType, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ErrorBoundaryProvider } from './components/ErrorBoundary/ErrorBoundaryContext'
import { ErrorBoundaryWrapper } from './components/ErrorBoundary/ErrorBoundaryWrapper'
import './index.css'
import { RouteConfig, routes } from './routes'
import { UserService } from './services/UserService'
import { startServiceWorker } from './serviceWorker'
import { createStore } from './store/store'

const preloadedState = window.__PRELOADED_STATE__ || {}
delete window.__PRELOADED_STATE__

const userService = new UserService()
const store = createStore(preloadedState, userService)

const App: React.FC = () => {
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const uuid = document.cookie
          .split('; ')
          .find(cookie => cookie.startsWith('uuid='))
          ?.split('=')[1]
        if (uuid) {
          const user = await userService.signinWithCookie(uuid)
          store.dispatch({ type: 'SET_USER', payload: user })
          console.log(`User authenticated: ${user}`)
        }
      } catch (error) {
        console.error(`ошибка авторизации ${error}`)
      }
    }
    const fetchServerData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:${__SERVER_PORT__}/api`
        )
        console.log(response.data)
      } catch (error) {
        console.error('Ошибка при запросе к серверу:', error)
      }
    }
    checkAuth()
    fetchServerData()
  }, [])

  // Функция для рендеринга элемента в зависимости от типа component
  const renderRouteElement = (component: RouteConfig['component']) => {
    if (typeof component === 'function') {
      const Component = component as ComponentType<any>
      return <Component />
    }
    return component
  }

  return (
    <ErrorBoundaryProvider>
      <ErrorBoundaryWrapper>
        <Provider store={store}>
          <BrowserRouter>
            <Routes>
              {routes.map(route => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={renderRouteElement(route.component)}
                />
              ))}
            </Routes>
          </BrowserRouter>
        </Provider>
      </ErrorBoundaryWrapper>
    </ErrorBoundaryProvider>
  )
}

ReactDOM.hydrateRoot(document.getElementById('root') as HTMLElement, <App />)

startServiceWorker()
