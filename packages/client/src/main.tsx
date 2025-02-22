import React, { useEffect } from 'react'

import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import { startServiceWorker } from './serviceWorker'

import { ErrorBoundaryProvider } from './components/ErrorBoundary/ErrorBoundaryContext'
import { ErrorBoundaryWrapper } from './components/ErrorBoundary/ErrorBoundaryWrapper'
import { routes } from './routes'
import { store } from './store/store'

const App: React.FC = () => {
  useEffect(() => {
    const fetchServerData = async () => {
      const url = `http://localhost:${__SERVER_PORT__}/api`
      const response = await fetch(url)
      const data = await response.json()
      console.log(data)
    }

    fetchServerData()
  }, [])

  // TODO вынести в redux-store
  //   const [isGameStarted, setIsGameStarted] = useState(false)
  //   const [isGameEnded, setIsGameEnded] = useState(false)
  //   const [gameCounter, setGameCounter] = useState<number>(0)

  return (
    <ErrorBoundaryProvider>
      <ErrorBoundaryWrapper>
        <Provider store={store}>
          <BrowserRouter>
            <Routes>
              {routes.map(route => {
                const { loader: _, ...rest } = route
                return <Route key={route.path} {...rest} />
              })}
              {/* <Route path="/signup" element={<SignupPage />} />
              <Route path="/signin" element={<SigninPage />} />
              <Route
                path="/game"
                element={
                  <ProtectedRoute>
                    <GameMenu>
                      {isGameStarted ? (
                        <HumsterPage
                          setIsGameStarted={setIsGameStarted}
                          setIsGameEnded={setIsGameEnded}
                          setGameCounter={setGameCounter}
                          isGameStarted={isGameStarted}
                        />
                      ) : !isGameEnded ? (
                        <StartPage setIsGameStarted={setIsGameStarted} />
                      ) : (
                        <FinalPage
                          gameCounter={gameCounter}
                          setIsGameEnded={setIsGameEnded}
                        />
                      )}
                    </GameMenu>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/profile/editData"
                element={
                  <ProtectedRoute>
                    <ChangeData />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/profile/editPassword"
                element={
                  <ProtectedRoute>
                    <ChangePassword />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/leaderboard"
                element={
                  <ProtectedRoute>
                    <Leaderboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/forum"
                element={
                  <ProtectedRoute>
                    <ForumPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="*"
                element={
                  <PageError
                    code={404}
                    message="Такой страницы не существует :("
                    image={error404Image}
                    rounded={true}
                  />
                }
              />
              <Route
                path="/error"
                element={
                  <PageError
                    code={500}
                    message="Всё сломалось, но мы уже летим чинить"
                    image={error500Image}
                  />
                }
              /> */}
            </Routes>
          </BrowserRouter>
        </Provider>
      </ErrorBoundaryWrapper>
    </ErrorBoundaryProvider>
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <App />
)

// ReactDOM.hydrateRoot(
//   document.getElementById('root') as HTMLElement,
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )

startServiceWorker()
