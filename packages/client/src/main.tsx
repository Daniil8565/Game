import { ProtectedRoute } from '@/components/ProtectedRoute'
import { SigninPage } from '@/pages/AuthPages/SigninPage'
import { SignupPage } from '@/pages/AuthPages/SignupPage'
import { FinalPage } from '@/pages/FinalPage'
import { HumsterPage } from '@/pages/HumserPage'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import { StartPage } from './pages/StartPage'
import { startServiceWorker } from './serviceWorker'
import { Profile } from '@/pages/ProfilePages/Profile'
import { PageError } from '@/pages/PageError'
import { ChangeData } from '@/pages/ProfilePages/ChangeData'
import { ChangePassword } from '@/pages/ProfilePages/ChangePassword'

import { store } from './store/store'
import { Leaderboard } from '@/pages/Leaderboard'

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
          path="/game/humster"
          element={
            <ProtectedRoute>
              <HumsterPage />
            </ProtectedRoute>
          }
        />
        <Route path="/game/final-page" element={<FinalPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/editData" element={<ChangeData />} />
        <Route path="/profile/editPassword" element={<ChangePassword />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </BrowserRouter>
  </Provider>
)

startServiceWorker()
