import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SudokuBoard from './SudokuBoard'
import BoardSizeSelector from './BoardSizeSelector'
import Directions from './Directions'
import Solution from './Solution'
import LargeBoardDirections from './LargeBoardDirections'
import BottomButtons from './BottomButtons'

const BoardArea = () => {

    const apiAddress = 'http://143.110.155.32:8081/sudoku/solve';
    const [boardLength, setBoardLength] = useState(9)
    const [boardSize, setBoardSize] = useState(boardLength * boardLength)
    const [sudokuBoard, setSudokuBoard] = useState(new Array(boardSize).fill(''))
    const [solutionFound, setSolutionFound] = useState("")
    
    // useEffect(() => {
    //     axios.get(apiAddress) // wake up the API
    // },[])

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

    const topStyle = {
        height: "auto",
        width: `${350}px`, // approximately the size of a 9x9
        margin: "10px auto",
        textAlign: "center"
    }

    const bottomStyle = {
        height: "auto",
        width: `${350}px`, // approximately the size of a 9x9
        margin: "10px auto",
        textAlign: "center"
    }

    return (
        <div>
            <div style={topStyle}>
                <BoardSizeSelector handleClick={resetPuzzleSize} />
                <LargeBoardDirections boardLength={boardLength} />
            </div>
            <div>
                <SudokuBoard sudokuValue={sudokuBoard} boardLength={boardLength} handleSudokuField={handleSudokuInput} />
            </div>
            <div style={bottomStyle}>
                <BottomButtons solvePuzzle={solvePuzzle} resetPuzzle={resetPuzzle} />
                <Solution solutionFound={solutionFound} />
                <Directions />
            </div>
        </div>
    )
}

export default BoardArea