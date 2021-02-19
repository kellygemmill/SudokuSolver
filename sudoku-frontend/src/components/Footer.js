import React from 'react'
import Button from 'react-bootstrap/Button'
import { Text } from 'containers/Language'

const style = {
    position: 'static',
    marginTop: '30px',
    textAlign: 'center'
}

const Footer = () => {
    return (
        <div style={style}>
            <Button className='gh-button' variant="outline-dark" href="https://github.com/kellygemmill/SudokuSolver"
                target="_blank" rel="noopener noreferrer"><Text textId="viewOnGitHub" /></Button>
            <p style={{ marginTop: "5px" }}>&copy; {new Date().getFullYear()} {' '}
                Kelly Gemmill</p>
        </div>
    )
}

export default Footer