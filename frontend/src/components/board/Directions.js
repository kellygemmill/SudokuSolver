import React from 'react'

const Directions = () => {

    const style = {
        marginTop: "15px"
    }

    return (
        <div style={style}>
            <h3>To solve your puzzle:</h3>
            <ol style={{ textAlign: "left" }}>
                <li>Enter known values in the boxes above. Leave all unknown boxes blank.</li>
                <li>Click "Solve" to solve the puzzle.</li>
                <li>Click "Reset Puzzle" to reset all squares.</li>
            </ol>
        </div>
    )
}

export default Directions