import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SudokuBoard from './SudokuBoard'
import BoardSizeSelector from './BoardSizeSelector'
import Directions from './Directions'
import Solution from './Solution'
import LargeBoardDirections from './LargeBoardDirections'
import BottomButtons from './BottomButtons'

const BoardArea = () => {

    const apiAddress = 'https://sudokusolver.kellygemmill.com/api/solve';
    const [boardLength, setBoardLength] = useState(9)
    const [boardSize, setBoardSize] = useState(boardLength * boardLength)
    const [sudokuBoard, setSudokuBoard] = useState(new Array(boardSize).fill(''))
    const [solutionFound, setSolutionFound] = useState("")
    
    useEffect(() => {
        setBoardSize(boardLength * boardLength)
    }, [boardLength])

    useEffect(() => {
        setSudokuBoard(new Array(boardSize).fill(''))
    }, [boardSize])

    const convertToInt = value => {
        if (/\d/g.test(value)) {
            return parseInt(value)
        }
        if (value === "") {
            return 0
        }
        return value.toUpperCase().charCodeAt(0) - "A".charCodeAt(0) + 10
    }

    const convertToChar = value => {
        if (value === 0) {
            return ""
        }
        if (value < 10) {
            return value
        }
        return String.fromCharCode(value - 10 + "A".charCodeAt(0))
    }

    const solvePuzzle = () => {
        const originalPuzzle = sudokuBoard.map(value => convertToInt(value))
        const requestBody = {
            original: originalPuzzle
        }

        axios
            .post(apiAddress, requestBody)
            .then(response => {
                setSudokuBoard(response.data.solution.map(value => convertToChar(value)))
                if (response.data.solved) {
                    setSolutionFound("Puzzle solved!")
                } else {
                    setSolutionFound("No solution found. Check input puzzle and try again.")
                }
            })
    }

    const resetPuzzle = () => {
        setSudokuBoard(new Array(boardSize).fill(''))
        setSolutionFound("")
    }

    const resetPuzzleSize = (event) => {
        setBoardLength(event.target.value)
        setSolutionFound("")
    }

    const handleSudokuInput = (event) => {
        const newValues = [...sudokuBoard]
        const id = event.target.id
        let value = event.target.value.charAt(0).toUpperCase()
        if (convertToInt(value) > boardLength) {
            value = ''
        }
        newValues[id] = value
        setSudokuBoard(newValues)
    }

    return (
        <div>
            <div className='around-board above-board'>
                <BoardSizeSelector handleClick={resetPuzzleSize} />
                <LargeBoardDirections boardLength={boardLength} />
            </div>
            <div>
                <SudokuBoard sudokuValue={sudokuBoard} boardLength={boardLength} handleSudokuField={handleSudokuInput} />
            </div>
            <div className='around-board'>
                <BottomButtons solvePuzzle={solvePuzzle} resetPuzzle={resetPuzzle} />
                <Solution solutionFound={solutionFound} />
                <Directions />
            </div>
        </div>
    )
}

export default BoardArea