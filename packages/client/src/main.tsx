// import React, { useEffect } from 'react'

// import ReactDOM from 'react-dom/client'
// import { Provider } from 'react-redux'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import './index.css'
// import { startServiceWorker } from './serviceWorker'

// import { ErrorBoundaryProvider } from './components/ErrorBoundary/ErrorBoundaryContext'
// import { ErrorBoundaryWrapper } from './components/ErrorBoundary/ErrorBoundaryWrapper'
// import { routes } from './routes'
// import { store } from './store/store'

// const App: React.FC = () => {
//   useEffect(() => {
//     const fetchServerData = async () => {
//       const url = `http://localhost:${__SERVER_PORT__}/api`
//       const response = await fetch(url)
//       const data = await response.json()
//       console.log(data)
//     }

//     fetchServerData()
//   }, [])

//   // TODO вынести в redux-store
//   //   const [isGameStarted, setIsGameStarted] = useState(false)
//   //   const [isGameEnded, setIsGameEnded] = useState(false)
//   //   const [gameCounter, setGameCounter] = useState<number>(0)

//   return (
//     <ErrorBoundaryProvider>
//       <ErrorBoundaryWrapper>
//         <Provider store={store}>
//           <BrowserRouter>
//             <Routes>
//               {routes.map(route => {
//                 const { loader: _, ...rest } = route
//                 return <Route key={route.path} {...rest} />
//               })}
//               {/* <Route path="/signup" element={<SignupPage />} />
//               <Route path="/signin" element={<SigninPage />} />
//               <Route
//                 path="/game"
//                 element={
//                   <ProtectedRoute>
//                     <GameMenu>
//                       {isGameStarted ? (
//                         <HumsterPage
//                           setIsGameStarted={setIsGameStarted}
//                           setIsGameEnded={setIsGameEnded}
//                           setGameCounter={setGameCounter}
//                           isGameStarted={isGameStarted}
//                         />
//                       ) : !isGameEnded ? (
//                         <StartPage setIsGameStarted={setIsGameStarted} />
//                       ) : (
//                         <FinalPage
//                           gameCounter={gameCounter}
//                           setIsGameEnded={setIsGameEnded}
//                         />
//                       )}
//                     </GameMenu>
//                   </ProtectedRoute>
//                 }
//               />
//               <Route
//                 path="/profile"
//                 element={
//                   <ProtectedRoute>
//                     <Profile />
//                   </ProtectedRoute>
//                 }
//               />
//               <Route
//                 path="/profile/editData"
//                 element={
//                   <ProtectedRoute>
//                     <ChangeData />
//                   </ProtectedRoute>
//                 }
//               />
//               <Route
//                 path="/profile/editPassword"
//                 element={
//                   <ProtectedRoute>
//                     <ChangePassword />
//                   </ProtectedRoute>
//                 }
//               />
//               <Route
//                 path="/leaderboard"
//                 element={
//                   <ProtectedRoute>
//                     <Leaderboard />
//                   </ProtectedRoute>
//                 }
//               />
//               <Route
//                 path="/forum"
//                 element={
//                   <ProtectedRoute>
//                     <ForumPage />
//                   </ProtectedRoute>
//                 }
//               />
//               <Route
//                 path="*"
//                 element={
//                   <PageError
//                     code={404}
//                     message="Такой страницы не существует :("
//                     image={error404Image}
//                     rounded={true}
//                   />
//                 }
//               />
//               <Route
//                 path="/error"
//                 element={
//                   <PageError
//                     code={500}
//                     message="Всё сломалось, но мы уже летим чинить"
//                     image={error500Image}
//                   />
//                 }
//               /> */}
//             </Routes>
//           </BrowserRouter>
//         </Provider>
//       </ErrorBoundaryWrapper>
//     </ErrorBoundaryProvider>
//   )
// }

// ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
//   <App />
// )

// // ReactDOM.hydrateRoot(
// //   document.getElementById('root') as HTMLElement,
// //   <React.StrictMode>
// //     <App />
// //   </React.StrictMode>
// // )

// startServiceWorker()
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

const store = createStore(preloadedState)
const userService = new UserService()

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
    return component // Уже готовый ReactNode
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
