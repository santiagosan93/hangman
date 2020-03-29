import React from 'react'
import Man from './man'
import HiddenWord from './hidden_word'
import KeysContainer from './keys_container'

const Game = (props) => {
  return (
    <div className='hang-box'>
      <Man mistakes={props.mistakes} maxWrongGueses={props.maxWrongGueses}/>
      <HiddenWord word={props.hidden_word} foundLetters={props.foundLetters}/>
      <KeysContainer keys={props.keys} handleClick={props.handleClick}/>
    </div>
  )
}

export default Game
