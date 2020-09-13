import React from 'react'
import Button from 'react-bootstrap/Button'

const style = {
    position: 'static',
    marginTop: '30px',
    textAlign: 'center'
}

const Footer = () => {
    return (
        <div style={style}>
            <Button variant="link" href="https://github.com/kellygemmill/SudokuSolverWeb">Source code available on Github</Button>
            <p>&copy; 2020 <a href="https://www.linkedin.com/in/kelly-gemmill">Kelly Gemmill</a></p>
        </div>
    )
}

export default Footer