import React, { useState } from 'react'
import axios from 'axios'
import SudokuBoard from './SudokuBoard'
import MyButton from './MyButton'
import MyDropdown from './MyDropdown'
import Directions from './Directions'

const BoardArea = () => {

    const initialize = new Array(81).fill('')

    const [sudokuBoard, setSudokuBoard] = useState(initialize);

    const solvePuzzle = () => {
        const originalPuzzle = sudokuBoard.map(value => value === "" ? "0" : value)
        const requestBody = {
            original: originalPuzzle
        }

        axios
            .post(`http://localhost:8080/sudoku/solve`, requestBody)
            .then(response => {
                setSudokuBoard(response.data.solution.map(value => value === "0" ? "" : value))
            })
    }

    const resetPuzzle = () => {
        setSudokuBoard(initialize);
    }

    const resetPuzzleSize = (event) => {
        const value = event.target.value
        const newSquares = value * value
        console.log(event.target.value)
        const newBoard = new Array(newSquares).fill('')
        console.log(sudokuBoard)
    }

    // const resetPuzzleSize = (eventKey) => {
    //     console.log(eventKey*eventKey)
        
    // }

    const handleSudokuInput = (event) => {
        const newValues = [...sudokuBoard]
        const id = event.target.id
        const value = event.target.value.charAt(0)
        newValues[id] = value
        setSudokuBoard(newValues)
    }

    const style = {
        position: "static",
        height: "auto",
        width: "360px",
        margin: "10px auto",
    }

    return (
        <div style={style}>
            
            {/* <MyDropdown handleClick={resetPuzzleSize} /> */}
            <SudokuBoard sudokuValue={sudokuBoard} handleSudokuField={handleSudokuInput} />
            <MyButton id="solve-button" text="Solve!" handleClick={solvePuzzle} type="primary" /> {' '}
            <MyButton id="reset-button" text="Reset Puzzle" handleClick={resetPuzzle} type="secondary" />
            <Directions />
        </div>
    )
}

export default BoardArea