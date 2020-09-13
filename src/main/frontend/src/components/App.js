import React, { useState } from 'react';
import axios from 'axios'
import SudokuBoard from './SudokuBoard'
import Button from './Button'

const App = () => {
  const initialize = new Array(81).fill('');

  const [sudokuBoard,setSudokuBoard] = useState(initialize);
  
  const solvePuzzle = () => {
    const originalPuzzle = sudokuBoard.map(value => value==="" ? "0" : value)
    const requestBody = {
      original: originalPuzzle
    }

    axios
      .post(`http://localhost:8080/sudoku/solve`,requestBody)
      .then(response => {
        setSudokuBoard(response.data.solution.map(value => value === "0" ? "" : value))
    })
  }

  const handleSudokuInput = (event) => {
    const newValues = [...sudokuBoard]
    const id = event.target.id
    const value = event.target.value.charAt(0)
    newValues[id] = value
    setSudokuBoard(newValues)
  }
  
  return (
  <div>
    <h1>Enter your Sudoku puzzle below:</h1>
    <SudokuBoard sudokuValue={sudokuBoard} handleSudokuField={handleSudokuInput} />
    <Button id="solve-button" text="Solve!" handleClick={solvePuzzle} />
    {/* {sudokuBoard} */}
    
  </div>
  )
}

export default App;
