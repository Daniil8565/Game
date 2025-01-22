import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { StartPage } from './pages/StartPage'
import { FinalPage } from './pages/FinalPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/start-page" element={<StartPage />} />
      <Route path="/game/final-page" element={<FinalPage />} />
      <Route path="/some-page" element={<div>some page</div>} />
    </Routes>
  </BrowserRouter>
)
