import React, { useState } from 'react'

import { ProtectedRoute } from '@/components/ProtectedRoute'
import { SigninPage } from '@/pages/AuthPages/SigninPage'
import { SignupPage } from '@/pages/AuthPages/SignupPage'
import { FinalPage } from '@/pages/FinalPage'
import { HumsterPage } from '@/pages/HumserPage'
import { ChangeData } from '@/pages/ProfilePages/ChangeData'
import { ChangePassword } from '@/pages/ProfilePages/ChangePassword'
import { Profile } from '@/pages/ProfilePages/Profile'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import { StartPage } from './pages/StartPage'
import { startServiceWorker } from './serviceWorker'

import { Leaderboard } from '@/pages/Leaderboard'
import { ErrorBoundaryProvider } from './components/ErrorBoundary/ErrorBoundaryContext'
import { ErrorBoundaryWrapper } from './components/ErrorBoundary/ErrorBoundaryWrapper'
import { GameMenu } from './components/GameMenu'
import error404Image from './image/404.png'
import error500Image from './image/fixiki.png'
import { ForumPage } from './pages/ForumPage'
import { PageError } from './pages/PageError'
import { store } from './store/store'
import { ErrorBoundary } from 'react-error-boundary'

const App: React.FC = () => {
  // TODO вынести в redux-store
  const [isGameStarted, setIsGameStarted] = useState(false)
  const [isGameEnded, setIsGameEnded] = useState(false)
  const [gameCounter, setGameCounter] = useState<number>(0)

  return (
    <ErrorBoundaryProvider>
      <ErrorBoundaryWrapper>
        <Provider store={store}>
          <BrowserRouter>
            <Routes>
              <Route path="/signup" element={<SignupPage />} />
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
              />
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

startServiceWorker()
