import React from 'react'
import HiddenKey from './hidden_key'

const HiddenWord = (props) => {
  return (
    <div className='hidden-word'>
      {props.word.split('').map((letter, index) => {
        return (
          <HiddenKey letter={letter} key={index} foundLetters={props.foundLetters}/>
        )
      })}
    </div>
  )
}

export default HiddenWord
