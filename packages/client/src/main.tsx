import React, { useEffect, useState } from 'react'

import { ProtectedRoute } from '@/components/ProtectedRoute'
import { SigninPage } from '@/pages/AuthPages/SigninPage'
import { SignupPage } from '@/pages/AuthPages/SignupPage'
import { FinalPage } from '@/pages/FinalPage'
import { HumsterPage } from '@/pages/HumserPage'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import './index.css'
import { StartPage } from './pages/StartPage'
import { startServiceWorker } from './serviceWorker'
import { Profile } from '@/pages/ProfilePages/Profile'
import { ChangeData } from '@/pages/ProfilePages/ChangeData'
import { ChangePassword } from '@/pages/ProfilePages/ChangePassword'

import { store } from './store/store'
import { Leaderboard } from '@/pages/Leaderboard'

const App: React.FC = () => {
  // TODO вынести в redux-store
  const [isGameStarted, setIsGameStarted] = useState(false)
  const [isGameEnded, setIsGameEnded] = useState(false)
  const [gameCounter, setGameCounter] = useState<number>(0)

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                {!isGameEnded ? (
                  <StartPage setIsGameStarted={setIsGameStarted} />
                ) : (
                  <FinalPage
                    gameCounter={gameCounter}
                    setIsGameEnded={setIsGameEnded}
                  />
                )}
              </ProtectedRoute>
            }
          />
          <Route
            path="/game"
            element={
              <ProtectedRoute>
                {isGameStarted ? (
                  <HumsterPage
                    setIsGameStarted={setIsGameStarted}
                    setIsGameEnded={setIsGameEnded}
                    setGameCounter={setGameCounter}
                    isGameEnded={isGameEnded}
                  />
                ) : (
                  <Navigate to="/" replace />
                )}
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
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <App />
)

startServiceWorker()
