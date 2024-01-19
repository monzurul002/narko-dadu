import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div className=' bg-gradient-to-r from-indigo-500 via-purple-800 to-pink-500'> */}
      <div className=' bg-gradient-to-r from-[#1a0a49] via-[#251342]	  to-purple-950	'>
        {/* <div className=' bg-gradient-to-r from-[#1a0a49] to-[#251342]'> */}

        <img src={viteLogo} className="logo" alt="Vite logo" />


        <img src={reactLogo} className="logo react" alt="React logo" />

      </div>
      <h1 className='text-3xl'>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
