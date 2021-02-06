import React from 'react'
import MyButton from './MyButton'

const BottomButtons = ({solvePuzzle,resetPuzzle}) => {
    return (
        <div>
            <MyButton id="solve-button" text="Solve!" handleClick={solvePuzzle} type="primary" /> {' '}
            <MyButton id="reset-button" text="Reset Puzzle" handleClick={resetPuzzle} type="secondary" />
        </div>
    )
}

export default BottomButtons