import React from 'react'

const Man = (props) => {
  return (
    <div className='man'>
      {props.mistakes}/{props.maxWrongGueses}
    </div>
  )
}

export default Man
