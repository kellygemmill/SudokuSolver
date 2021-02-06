import React from 'react'

const Square = ({ value, handleSquareValue, id, boardLength, subBoxLength, squareSize, narrowBorder, mediumBorder, thickBorder }) => {
    const boxRowIdx = Math.floor(id / boardLength) % subBoxLength
    const boxColIdx = id % subBoxLength
    const rowIdx = Math.floor(id / boardLength)
    const colIdx = id % boardLength

    const style = {
        borderColor: "black",
        borderStyle: "solid",
        borderTopWidth: `${rowIdx === 0 ? thickBorder : boxRowIdx === 0 ? mediumBorder : narrowBorder}px`,
        borderBottomWidth: `${rowIdx === boardLength - 1 ? thickBorder : boxRowIdx === subBoxLength - 1 ? mediumBorder : narrowBorder}px`,
        borderLeftWidth: `${colIdx === 0 ? thickBorder : boxColIdx === 0 ? mediumBorder : narrowBorder}px`,
        borderRightWidth: `${colIdx === boardLength - 1 ? thickBorder : boxColIdx === subBoxLength - 1 ? mediumBorder : narrowBorder}px`,
        borderRadius: "0px",
        width: `${colIdx === 0 || colIdx === boardLength - 1 ? squareSize + thickBorder :
            boxColIdx === 0 || boxColIdx === subBoxLength - 1 ? squareSize + mediumBorder :
                squareSize + narrowBorder}px`,
        height: `${rowIdx === 0 || rowIdx === boardLength - 1 ? squareSize + thickBorder :
            boxRowIdx === 0 || boxRowIdx === subBoxLength - 1 ? squareSize + mediumBorder :
                squareSize + narrowBorder}px`,
        background: "white",
        fontSize: "25px",
        fontWeight: "700",
        cursor: "pointer",
        outline: "none",
        textAlign: "center",
        verticalAlign: "middle"
    }

    return (
        <div>
            <input style={style} onChange={handleSquareValue} value={value} id={id} autoComplete="off" />
        </div>
    )
}

export default Square