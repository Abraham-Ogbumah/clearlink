import React from 'react'

const Button = ({ text, style, className }) => {
  return (
    <button
      style={style}
      className={className}
    >
      {text}
    </button>
  )
}

export default Button