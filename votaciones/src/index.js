import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Boton from './boton.js';

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const ClickGood = () => {
    setGood( good + 1 ) 
  }
  const ClickNeutral = () => {
    setNeutral( neutral + 1 )

  }
  const ClickBad = () => {
    setBad( bad + 1 )

  }

  return (
    <div>
      <h1 className="title">Give Feedback</h1>
      <div className="buttons">
        <Boton handleClick={ClickGood} text="good"/>
        <Boton handleClick={ClickNeutral} text="neutral"/>
        <Boton handleClick={ClickBad} text="bad"/>
      </div>
      

    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
