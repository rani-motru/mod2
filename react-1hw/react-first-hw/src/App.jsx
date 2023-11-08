import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SideBar from "./component/SideBar";
import Review from "./component/Review";
import Average from "./component/Average";
import Sentiment from "./component/Sentiment";
import Website from "./component/Website";
import './style.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div className="container">
      <SideBar/>
      <Review/>
      <Average/>
      <Sentiment/>
      <Website/>
      </div>
  )

}

export default App
