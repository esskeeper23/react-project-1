import React from 'react'

const Quotes = ({randomQuotes, randomColor, changeQuote}) => {
    const objColor = {
        color: randomColor
    }
  return (
    <div className='quotes-container'>
        <p className='quote' style={objColor}> <i className='quote-icon' class="fa-solid fa-quote-left"></i> {randomQuotes.quote}</p>
        <div className='btn-container'>
            <p className='author' style={objColor}>{randomQuotes.author}</p>
            <button onClick={changeQuote} style={{backgroundColor: randomColor}}><i class="fa-solid fa-shuffle"></i></button>
        </div>
    </div>
  )
}

export default Quotes