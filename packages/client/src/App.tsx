import { useEffect } from 'react'
import './App.css'
import { FinalPage } from './pages/FinalPage'

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
  return <div className="App">
    {/* Вот тут будет жить ваше приложение :) */}
  <FinalPage></FinalPage></div>
}

export default App
