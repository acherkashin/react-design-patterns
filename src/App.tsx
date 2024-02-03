import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { withWhyUpdate } from './patterns/hoc-withLogging'
import { ImageList } from './patterns/compound-components/FlyOutMenu/Images'
import { SwitchExample } from './patterns/state-reducer/Switch/SwitchExample'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <LoggingIncrementButton count={count} onClick={() => setCount((count) => count + 1)} />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <ImageList />
      <SwitchExample/>
    </>
  )
}

export interface IncrementButton {
  count: number;
  onClick: () => void;
}

function IncrementButton({ count, onClick }: IncrementButton) {
  return (
    <button onClick={onClick}>
      count is {count}
    </button>
  )
}

const LoggingIncrementButton = withWhyUpdate(IncrementButton);

export default App
