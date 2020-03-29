import React from 'react'
const Loose = (props) => {
  return(
    <div>
      <h1>You LOOOOOOOOSEER!!!!!</h1>
      <h2>The word was {props.hiddenWord}</h2>
      <button onClick={props.resetGame}>Play again!</button>
    </div>
  )
}

export default Loose
