import React from 'react'
import Button from 'react-bootstrap/Button'
import { Text } from 'containers/Language'

const Footer = () => {
    return (
        <div className='footer'>
            <Button className='gh-button' variant="outline-light" href="https://github.com/kellygemmill/SudokuSolver"
                target="_blank" rel="noopener noreferrer"><Text textId="viewOnGitHub" /></Button>
            <p className="copyright">&copy; {new Date().getFullYear()} {' '}
                Kelly Gemmill</p>
        </div>
    )
}

export default Footer