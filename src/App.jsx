import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import quotes from "./json/data.json";

function App() {
  const [count, setCount] = useState(0)
  console.log(quotes);

  return (
    <div className="App">
      <h1>hola</h1>
    </div>
  )
}

export default App
