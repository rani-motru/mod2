import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ControlledForm from './component/ControlledForm.jsx'
import UncontrolledForm from './component/UncontrolledForm.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <ControlledForm/>
        <UncontrolledForm/>
      </div>
        
    </>
  )
}

export default App
