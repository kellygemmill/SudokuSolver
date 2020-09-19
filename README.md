# SudokuSolverWeb-Backend
This is a sudoku solver app written in Java using Spring Boot. This app uses backtracking to solve a valid sudoku board of any size (4x4, 9x9, 16x16, etc). 

## How to use: 

### Interactive web app:
Input a puzzle at [sudoku-kg.herokuapp.com](sudoku-kg.herokuapp.com) and the solution will be displayed instantly.

### API:
Query the api directly with a post request to [sudoku-api-kg.herokuapp.com](sudoku-api-kg.herokuapp.com). Request body should send the puzzle as a 1-d integer array, filled out row by row, in the field name "original". Represent unknown squares as 0.  For example:
```
{
  "original": [
    0,
    0,
    4,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    2,
    0,
    0,
    3,
    0,
    0    
  ]
}
```
represents the 4x4 sudoku square: 

![4x4 sample](./images/4x4.PNG)

Response will include the original puzzle (field name "original"), solved puzzle if available (field name "solution"), and boolean stating whether the puzzle was solved (fieldname "solved"). If the puzzle was not solved, the "solution" field will contain the original puzzle. The response for the puzzle above is: 
```
{
    "solved": true,
    "original": [
        0,
        0,
        4,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        2,
        0,
        0,
        3,
        0,
        0
    ],
    "solution": [
        3,
        2,
        4,
        1,
        4,
        1,
        3,
        2,
        1,
        4,
        2,
        3,
        2,
        3,
        1,
        4
    ]
}
```

## Model: 
The sudoku board model is composed of multiple components and makes extensive use of polymorphism and inheritance.

### Square:
The smallest element of the model is an individual square, which holds a value and a boolean indicating whether it was provided in the original puzzle. The squares also keep track of which row, column, and box they are located in. A method is available to query the square's row, column, and box in order to determine possible values for the square.

### SquareGroup:
This is an abstract class representing any group of squares (row, column, box, or the entire board). The class implements methods to return the squares contained or return the values contained in the squares.

### Row, Column:
These classes extend the SquareGroup class and represent the rows and columns of the board, making it easy to query whether a row or column contains a value.

### Box: 
This class extends the SquareGroup class and represents a box of squares. In a typical 9x9 sudoku puzzle, this represents a 3x3 box of squares. Similar to the Row and Column classes, this class makes it easy to query whether a box contains a value. Additionally, the SudokuBoard class inherits this class due to similarity in structure.

### SudokuBoard:
This class extends the Box class and represents the entire sudoku board. Note that the board retains only the list of squares and whether it is solved, while the individual squares handle the logic of whether a value placement is valid.

### SudokuSummary:
This class contains the API response containing the board solution, if it exists.

## Service: 
This package contains the solver and the service linking the API to the solver.

### SudokuSolver: 
This class implements a backtracking algorighm to solve the sudoku board. The algorithm recursively steps through each square of the board and sets the square's value to the first integer that can be added without violating the rules (the same number can only appear in a row, column, and box once). If no values can be added, evaluation returns to the previous square and a new value is attempted. If evaulation passes the end of the board, the board is solved. Otherwise, no solution exists.

### SudokuService:
This class provides the interface between the API and the solver. The service receives a string containing the values of the board in order. From this input, the service creates the squares and board and then passes the board to the solver. Once the solver exits, the service passes the solved (or unsolved) board back to the API.

## API: 

### SudokuController:
This class contains the API to call the solver. The API consists only of a get mapping which receives a string of the board values from the path variable (/sudoku/solve/{boardInput}). The values are then passed to the service to create the board and solve the puzzle.
