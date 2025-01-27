import { ProtectedRoute } from '@/components/ProtectedRoute'
import { SigninPage } from '@/pages/AuthPages/SigninPage'
import { SignupPage } from '@/pages/AuthPages/SignupPage'
import { HumsterPage } from '@/pages/HumserPage'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import { StartPage } from './pages/StartPage'
import { startServiceWorker } from './serviceWorker'

import { FinalPage } from '@/pages/FinalPage'
import { Provider } from 'react-redux'
import { store } from './store/store'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <StartPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/game"
          element={
            <ProtectedRoute>
              <HumsterPage />
            </ProtectedRoute>
          }
        />
        <Route path="/game/final-page" element={<FinalPage />} />
        <Route path="/some-page" element={<div>some page</div>} />
      </Routes>
    </BrowserRouter>
  </Provider>
)

startServiceWorker()
