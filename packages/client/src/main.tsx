import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import './index.css'
import { StartPage } from './pages/StartPage'
import { HumsterPage } from '@/pages/HumserPage'
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from 'react-router-dom'
import { startServiceWorker } from './serviceWorker'
import { SignupPage } from '@/pages/AuthPages/SignupPage'
import { SigninPage } from '@/pages/AuthPages/SigninPage'
import { ProtectedRoute } from '@/components/ProtectedRoute'

import { FinalPage } from '@/pages/FinalPage'
import { store } from './store/store'

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
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <App />
)

startServiceWorker()
