import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DogArray from './component/DogArray'
import ObjectExample from './component/ObjectExample'
import UseRefExample from './component/UseRefExample'
import ArrayExample from './component/ArrayExample'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>This is App</h1>
    <UseRefExample/>
    <DogArray/>
    <ObjectExample/>
    <ArrayExample/>
    
    </>
      
  )
}
export default App
