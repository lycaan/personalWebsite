import { useState } from 'react'
import reactLogo from './assets/fish-svgrepo-com.svg'
import viteLogo from './public/cute-svgrepo-com.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://simonnilsson.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://www.youtube.com/watch?v=YAgJ9XugGBo" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Emma Edlund</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          That's me! This is my personal website
        </p>
      </div>
      <p className="read-the-docs">
        This website has just been initialized. Please come back later to see further progress.
      </p>
    </>
  )
}

export default App
