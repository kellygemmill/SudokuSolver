import React from 'react'
import Button from 'react-bootstrap/Button'

const MyButton = ({id, text, handleClick, type}) => {

    const style = {
        marginRight: "10px",
        marginTop: "15px",
        marginBottom: "10px"
    }

    return <Button variant={type} id={id} onClick={handleClick} style={style}>{text}</Button>
}

export default MyButton