import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'

import Game_icon from './components/game_icon'

function App() {
  
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://macpaw.com/how-to/install-pip-mac" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
         
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 9999999)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      
      
      <Game_icon/>
    </>

   
  )
}

export default App 

 

