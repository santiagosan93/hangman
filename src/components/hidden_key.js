import React from 'react'
import isEmpty from '../helpers/empty'

const HiddenKey = (props) => {
  const filter = props.foundLetters.filter((letter) => letter.letter.toLowerCase() === props.letter)
  const letterFound =  !(isEmpty(filter))
  return (
    <div className='hidden-key'>
      { letterFound || props.letter === ' ' ? props.letter : '_'}
    </div>
  )
}

export default HiddenKey
