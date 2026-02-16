import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HolaMundoIA from './components/ai/HolaMundoIA'
import VariablesIA from './components/ai/VariablesIA'
import BancosIA from './components/ai/BancosIA'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <hr style={{ margin: '3rem 0', border: 'none', borderTop: '2px solid #646cff' }} />

      <h2>Versión realizada con ayuda de IA (Claude Code)</h2>

      <div style={{ marginTop: '2rem' }}>
        <HolaMundoIA />
      </div>

      <div style={{ marginTop: '2rem' }}>
        <VariablesIA />
      </div>

      <div style={{ marginTop: '2rem' }}>
        <BancosIA />
      </div>
    </>
  )
}

export default App
