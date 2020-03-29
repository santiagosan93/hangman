import React from 'react'

const Win = (props) => {
  return (
  <div>
    <h1>Yeeeei you woon!</h1>
    <button onClick={props.resetGame}>Play again!</button>
  </div>
)
}

export default Win
