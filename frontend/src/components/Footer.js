import React from 'react'
import Button from 'react-bootstrap/Button'

const style = {
    position: 'static',
    marginTop: '30px',
    textAlign: 'center'
}

const buttonStyle = {
    margin: "5px 5px 10px",
    width: "150px"
}

const Footer = () => {
    return (
        <div style={style}>
            <p style={{ marginBottom: "0", fontWeight: "bold" }}>Source code available on Github:</p>
            <Button style={buttonStyle} variant="outline-dark" href="https://github.com/kellygemmill/SudokuSolverWeb-Frontend"
                target="_blank" rel="noopener noreferrer">Frontend (React)</Button> {'  '}
            <Button style={buttonStyle} variant="outline-dark" href="https://github.com/kellygemmill/SudokuSolverWeb-Backend"
                target="_blank" rel="noopener noreferrer">Backend (Java)</Button>

            <p style={{ marginTop: "20px" }}>&copy; {new Date().getFullYear()} {' '}
                <a href="https://www.linkedin.com/in/kelly-gemmill" target="_blank" rel="noopener noreferrer">Kelly Gemmill</a></p>
        </div>
    )
}

export default Footer