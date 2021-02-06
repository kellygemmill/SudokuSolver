import React from 'react'

const Solution = ({ solutionFound }) => {

    if (solutionFound === "") {
        return <div></div>
    }
    return (
        <div style={{ fontWeight: "bold", margin: "20px", fontSize: "20px" }}>
            {solutionFound}
        </div>
    )
}

export default Solution