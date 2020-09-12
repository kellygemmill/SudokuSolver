# SudokuSolverWeb
This is a sudoku solver app written in Java using Spring Boot. This app uses backtracking to solve a valid sudoku board of any size (4x4, 9x9, 16x16, etc).

## Backend
The backend of this web app is written in Java using Spring Boot.  

### Model: 
The sudoku board model is composed of multiple components and makes extensive use of polymorphism and inheritance.

#### Square:
The smallest element of the model is an individual Square, which holds a value and a boolean indicating whether it was provided in the original puzzle. The squares also keep track of which row, column, and box they are located in.

#### SquareGroup:
This is an abstract class representing any group of squares (row, column, box, or the entire board). 

#### Row, Column:
These classes extend the SquareGroup class and represent the rows and columns of the board, making it easy to query whether a row or column contains a value.

#### Box: 
This class extends the SquareGroup class and represents a box of squares. In a typical 9x9 sudoku puzzle, this represents a 3x3 box of squares.

#### SudokuBoard:
This class extends the Box class and represents the entire sudoku board. Note that the board retains only the list of squares and whether it is solved, while the individual squares handle the logic of whether a value placement is valid.

#### SudokuSummary:
This class contains the API response containing the board solution, if it exists.

### Service: 
This package contains the solver and the service linking the API to the solver.

#### SudokuSolver: 
This class implements a backtracking algorighm to solve the sudoku board. The algorithm recursively steps through each square of the board and sets the square's value to the first integer that can be added without violating the rules (the same number can only appear in a row, column, and box once). If no values can be added, evaluation returns to the previous square and a new value is attempted. If evaulation passes the end of the board, the board is solved. Otherwise, no solution exists.

#### SudokuService:
This class provides the interface between the API and the solver. The service receives a string containing the values of the board in order. From this input, the service creates the squares and board and then passes the board to the solver. Once the solver exits, the service passes the solved (or unsolved) board back to the API.

### API: 

#### SudokuController:
This class contains the API to call the solver. The API consists only of a get mapping which receives a string of the board values from the path variable (/sudoku/solve/{boardInput}). The values are then passed to the service to create the board and solve the puzzle.
