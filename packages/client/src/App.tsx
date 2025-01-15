import { useEffect } from 'react'
import './App.css'
import error500Image from './assets/images/fixiki.png'
import error404Image from './assets/images/humster.png'

import { PageError } from './pages/PageError'

// const FaultyComponent = () => {
// 	throw new Error('This component always fails during render');
//   };

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
    <div className="App wrapper">
      <PageError
        code={500}
        message="Всё сломалось, но мы уже летим чинить"
        image={error500Image}
      />
      {/* <FaultyComponent /> */}
      <PageError
        code={404}
        message="Такой страницы не существует :("
        image={error404Image}
        rounded={true}
      />
    </div>
  )
}

export default App
