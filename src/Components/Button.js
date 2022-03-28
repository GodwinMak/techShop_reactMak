import React from 'react'

function Button(props) {
    const {name, NameClass, clickButton} = props
  return (
      <button type='button' className={NameClass} onClick={clickButton}>{name}</button>
  )
}

export default Button