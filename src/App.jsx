import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import quotes from "./json/data.json";
import color from "./utils/colors";
import Quotes from './components/Quotes';

function App() {

  const getRandomElement = (arr) => {
    let random = Math.floor(Math.random() * arr.length)
    return arr[random];
  }

  let randomQuote = getRandomElement(quotes);
  let randomColor = getRandomElement(color)

  const [colorRandom, setcolorRandom] = useState(randomColor)
  const [Quote, setQuote] = useState(randomQuote)

  const changeQuote = () => {
    randomQuote = getRandomElement(quotes);
    randomColor = getRandomElement(color)

    setcolorRandom(randomColor)
    setQuote(randomQuote)
  }

  const objBgColor = {
    backgroundColor: colorRandom
  }

  return (
    <div style={objBgColor} className="App">
      <Quotes 
      randomQuotes={Quote}
      randomColor={colorRandom}
      changeQuote={changeQuote} />
    </div>
  )
}

export default App
