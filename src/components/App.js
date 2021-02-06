import React from 'react';
import BoardArea from './board/BoardArea'
import Footer from './Footer'

const App = () => {
  return (
    <div>
      <h1>Sudoku Solver</h1>
      <BoardArea />
      <Footer />
    </div>
  )
}

export default App;
