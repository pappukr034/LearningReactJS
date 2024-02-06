import React from 'react'

function Button(props) {

  return (
      <div className='p-2 rounded-md' style={{backgroundColor:props.bgColor}}>
      <button >{props.value}</button>
    </div>
  )
}

export default Button
