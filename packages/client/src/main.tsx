import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { StartPage } from './pages/StartPage'
import { HumsterPage } from './pages/HumserPage/HumsterPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/game/humster" element={<HumsterPage />} />
      <Route path="/start-page" element={<StartPage />} />
      <Route path="/some-page" element={<div>some page</div>} />
    </Routes>
  </BrowserRouter>
)
