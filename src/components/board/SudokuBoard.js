import React from 'react'
import Square from './Square'

const SudokuBoard = ({ sudokuValue, boardLength, handleSudokuField }) => {
    const subBoxLength = Math.sqrt(boardLength)

    const narrowBorder = 1
    const mediumBorder = 3
    const thickBorder = 5
    const squareSize = 40;
    const boardSizePx = boardLength * squareSize + (subBoxLength - 1) * thickBorder + 2 * (subBoxLength - 1) * mediumBorder

    const boardStyle = {
        border: "0px solid black",
        outline: "none",
        height: `${boardSizePx}px`,
        width: `${boardSizePx}px`,
        margin: "0 auto",
        display: "grid",
        gridTemplateRows: `repeat(${boardLength}, 1fr)`,
        gridTemplateColumns: `repeat(${boardLength}, 1fr)`
    };

    return (
        <div style={boardStyle}>
            {sudokuValue
                .map(value => value === "0" ? " " : value)
                .map((value, idx) => <Square key={idx} value={value} handleSquareValue={handleSudokuField} id={idx}
                    boardLength={boardLength} subBoxLength={subBoxLength} squareSize={squareSize}
                    narrowBorder={narrowBorder} mediumBorder={mediumBorder} thickBorder={thickBorder} />)}
        </div>
    )
}

export default SudokuBoard