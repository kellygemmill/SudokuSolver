import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'

const Directions = () => {

    const style = {
        marginTop: "15px"
    }

    return (
        <div>
            <Card className='directions' bg='light'>
                <Card.Header as='h3'>To solve your puzzle:</Card.Header>
                <Card.Body>
                    <ol style={{ textAlign: "left" }}>
                        <li>Enter known values in the boxes above. Leave all unknown boxes blank.</li>
                        <li>Click "Solve" to solve the puzzle.</li>
                        <li>Click "Reset Puzzle" to reset all squares.</li>
                    </ol>
                </Card.Body>


            </Card>
            
            
            {/* <h3>To solve your puzzle:</h3>
            <ol style={{ textAlign: "left" }}>
                <li>Enter known values in the boxes above. Leave all unknown boxes blank.</li>
                <li>Click "Solve" to solve the puzzle.</li>
                <li>Click "Reset Puzzle" to reset all squares.</li>
            </ol> */}
        </div>
    )
}

export default Directions