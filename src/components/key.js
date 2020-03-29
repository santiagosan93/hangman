import React from 'react'


const Key = (props) => {
  return (
    <div>
      {props.letter !== ' ' &&
        <div
          className='key'
          style={{backgroundColor: props.played ? 'red' : 'blue'}}
          onClick={props.played ? null : (e => props.handleClick(props.letter)) }
        >
          {props.letter}
        </div>
      }
    </div>
  )
}

export default Key
