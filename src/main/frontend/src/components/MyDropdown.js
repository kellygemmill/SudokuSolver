import React, { useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'


const MyDropdown = ({handleClick}) => {

    const style = {
        marginBottom: "10px",
        marginRight: "0px"
    }

    return (
        <div>
            <span style={{fontWeight: "bold"}}>Change puzzle size:</span>
            <ButtonGroup aria-label="Board size" style={style}>
                <Button variant="secondary" value="4" onClick={handleClick}>4 x 4</Button>
                <Button variant="secondary" value="9" onClick={handleClick}>9 x 9</Button>
                <Button variant="secondary" value="16" onClick={handleClick}>16 x 16</Button>
                <Button variant="secondary" value="25" onClick={handleClick}>25 x 25</Button>
            </ButtonGroup>
        </div>

        // <DropdownButton id="puzzle-size" title="Select a puzzle size" style={style}>
        //     <Dropdown.Item eventKey="4" onSelect={handleClick}>4 x 4</Dropdown.Item>
        //     <Dropdown.Item eventKey="9" onSelect={handleClick}>9 x 9 (Default)</Dropdown.Item>
        //     <Dropdown.Item eventKey="16" onSelect={handleClick}>16 x 16</Dropdown.Item>
        //     <Dropdown.Item eventKey="25" onSelect={handleClick}>25 x 25</Dropdown.Item>
        // </DropdownButton>
    )
}

export default MyDropdown