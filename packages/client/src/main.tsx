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
import { store } from './store/store'
import { PageError } from './pages/PageError'
import { ForumPage } from './pages/ForumPage'
import error404Image from './image/404.png'
import error500Image from './image/fixiki.png'

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
        <Route path="/some-page" element={<div>some page</div>} />
        <Route path="/forum" element={<ForumPage />} />
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
)

startServiceWorker()
