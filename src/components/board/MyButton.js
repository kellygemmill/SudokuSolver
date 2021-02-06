import React from 'react'
import Button from 'react-bootstrap/Button'

const MyButton = ({ id, text, handleClick, type }) => {

    const style = {
        margin: "15px 5px 10px",
        width: "130px"
    }

    return <Button variant={type} id={id} onClick={handleClick} style={style}>{text}</Button>
}

export default MyButton