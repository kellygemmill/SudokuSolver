import React from 'react'
import Square from './Square'

const SudokuBoard = ( {sudokuValue,handleSudokuField} ) => {
    
    const style = {
        height: "360px",
        width: "360px",
        margin: "0 auto",
        display: "grid",
        gridTemplate: "repeat(9, 1fr) / repeat(9, 1fr)",
    };


    return (
        <div style={style}>
            {sudokuValue    
            .map(value => value==="0" ? " " : value)
            .map((value,idx) => <Square key={idx} value={value} handleSquareValue={handleSudokuField} id={idx} />)}
        </div>
    )



}

export default SudokuBoard