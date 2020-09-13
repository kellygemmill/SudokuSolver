import React from 'react'

    const style = {
        background: "white",
        border: "2px solid black",
        fontSize: "30px",
        fontWeight: "800",
        cursor: "pointer",
        outline: "none",
        width: "36px",
        height: "36px",
        textAlign: "center",
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