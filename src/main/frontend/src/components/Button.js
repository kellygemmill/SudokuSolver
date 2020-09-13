import React from 'react'

const Button = ({id, text, handleClick}) => {
    return <button id={id} onClick={handleClick}>{text}</button>
}

export default Button