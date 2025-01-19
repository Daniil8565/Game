import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {HumsterPage} from './pages/HumserPage/HumsterPage'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <App /> */}
    <HumsterPage/>
  </React.StrictMode>
)
