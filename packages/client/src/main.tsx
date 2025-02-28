import React, { ComponentType } from 'react'
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
