import React from 'react'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

const BoardSizeSelector = ({ handleClick }) => {

    const buttonStyle = {
        width: "85px"
    }

    return (
        <div>
            <p style={{ fontWeight: "bold", marginBottom: "5px" }}>Change puzzle size:</p>
            <ButtonGroup className='top-button-group' aria-label="Board size" >
                <Button style={buttonStyle} variant="outline-dark" value="4" onClick={handleClick}>4 x 4</Button>
                <Button style={buttonStyle} variant="outline-dark" value="9" onClick={handleClick}>9 x 9</Button>
                <Button style={buttonStyle} variant="outline-dark" value="16" onClick={handleClick}>16 x 16</Button>
            </ButtonGroup>
        </div>
    )
}

export default BoardSizeSelector