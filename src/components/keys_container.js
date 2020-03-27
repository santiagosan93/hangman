import React from 'react'
import Key from './key'

const KeysContainer = (props) => {
  return (
    <div className='keys-container'>
      {props.keys.map((key) => {
        return (
          <Key
            played={key.played}
            letter={key.letter}
            handleClick = {props.handleClick}
            key={key.letter}
          />
        )
      })}
    </div>
  )
}

export default KeysContainer
