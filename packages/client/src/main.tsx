import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import {HumsterPage} from './pages/Humster'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    <HumsterPage/>
  </React.StrictMode>
)
