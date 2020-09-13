import React from 'react'

    const style = {
        background: "white",
        border: "2px solid black",
        fontSize: "25px",
        fontWeight: "700",
        cursor: "pointer",
        outline: "none",
        width: "40px",
        height: "40px",
        textAlign: "center",
        verticalAlign: "middle",
        padding:0   
        
    };

    const Square = ({ value,handleSquareValue,id }) => {
        return(
            <div>
                <input style={style} onChange={handleSquareValue} value={value} id={id} />
            </div>
        )
}

export default Square