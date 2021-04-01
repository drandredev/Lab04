import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Statistics from './Statistics.js'
import Button from './Button.js'

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
      <h1>give feedback</h1>
      <Button handleClick={ClickGood} text="good"/>
      <Button handleClick={ClickNeutral} text="neutral"/>
      <Button handleClick={ClickBad} text="bad"/>
      {!good & !neutral & !bad
        ? <p>No feedback given</p>
        : <Statistics good={good} neutral={neutral} bad={bad}/>
      }
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)