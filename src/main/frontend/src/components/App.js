import React, { useState } from 'react';
import axios from 'axios'
import SudokuBoard from './SudokuBoard'
import MyButton from './MyButton'
import BoardArea from './BoardArea'
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
