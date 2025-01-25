import { useEffect } from 'react'
import './App.css'
// import { UserData } from './pages/ProfilePages/MainProfile'
import { SigninPage } from '@/pages/AuthPages/SigninPage'
// import { FullscreamImage } from '@/components/fullscreamImage'
// import { SignupPage } from './pages/AuthPages/SignupPage'

function App() {
  useEffect(() => {
    const fetchServerData = async () => {
      const url = `http://localhost:${__SERVER_PORT__}`
      const response = await fetch(url)
      const data = await response.json()
      console.log(data)
    }

    fetchServerData()
  }, [])
  return <div className="App">Привет</div>
}

export default App
