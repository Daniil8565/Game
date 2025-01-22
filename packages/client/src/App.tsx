import { useEffect } from 'react'
import './App.css'
import { SigninPage } from '@/pages/AuthPages/SigninPage'

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
  return (
    <div className="App">
      <SigninPage />
    </div>
  )
}

export default App
