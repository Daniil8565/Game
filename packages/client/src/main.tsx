import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { StartPage } from './pages/StartPage'
import { HumsterPage } from '@/pages/HumserPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SignupPage } from '@/pages/AuthPages/SignupPage'
import { SigninPage } from '@/pages/AuthPages/SigninPage'
import { ProtectedRoute } from '@/components/ProtectedRoute'
import { Profile } from '@/pages/ProfilePages/Profile'
import { PageError } from '@/pages/PageError'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
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
      <Route path="/some-page" element={<div>some page</div>} />
    </Routes>
  </BrowserRouter>
)
