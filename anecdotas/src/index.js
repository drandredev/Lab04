import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const anecdotes = [
    {
      vote: 0,
      anecdota: 'If it hurts, do it more often',
    },
    {
      vote: 0,
      anecdota: 'Adding manpower to a late software project makes it later!',
    },
    {
      vote: 0,
      anecdota: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    },
    {
      vote: 0,
      anecdota: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    },
    {
      vote: 0,
      anecdota: 'Premature optimization is the root of all evil.',
    },
    {
      vote: 0,
      anecdota: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
    }
  ]

  const [selected, setSelected] = useState(0)
  const [vote, setvote] = useState(anecdotes)

  const random = () => {
    setSelected( Math.floor((Math.random() * 6) + 1)-1 )
    console.log(selected)

  }

  const votescount = () => {
    let votescount = [...vote]
    votescount[selected].vote += 1
    setvote(
      votescount
    )  
  }
  let vot = [
    ...vote
  ]

  let max = vot[0];
  let maxi = vot[0].vote;
  for (let i = 1; i < vot.length; ++i) {
    if (vot[i].vote > maxi) {
      max = vot[i];
      maxi = vot[i].vote
    }
  }
  
  return (
    <div>
      <h1>Anecdota del día</h1>
      {vote[selected].anecdota}
      <p>has {vote[selected].vote} votes</p>
      <button onClick={votescount}>vote</button>
      <button onClick={random}>next anecdote</button>
      <h2>Anecdota con más votos</h2>
      {max.anecdota}
      <p>has {max.vote} votes</p>
    </div>
  )
}




ReactDOM.render(
  <App />,
  document.getElementById('root')
)