package com.kellygemmill.sudokusolverreact.model;

import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class SudokuBoard extends Box {

    private final int subBoxLength;
    private boolean solved;

    public SudokuBoard(List<Square> squares) {
        super(squares);

        if (isNotSquare(this.squares.subList(0, this.sideLength))) {
            throw new IllegalArgumentException("Sub-boxes must sum to total grid dimension.");
        }

        this.subBoxLength = (int) Math.round(Math.sqrt(this.sideLength));
        this.solved = false;

        this.setRowSquares();
        this.populateColumns();
        this.populateBoxes();
    }

    private void setRowSquares() {
        for (Row row : rows) {
            List<Square> thisRowSquares = row.getSquares();
            thisRowSquares.forEach(square -> square.setRow(row));
        }
    }

    private void populateColumns() {
        for (int i = 0; i < this.sideLength; i++) {
            List<Square> thisColumnSquares = new ArrayList<>();

            for (Row row : rows) {               // Loop over each row, get element i, and add to column
                thisColumnSquares.add(row.getSquares().get(i));
            }
            Column thisColumn = new Column(thisColumnSquares);

            thisColumnSquares.forEach(square -> square.setColumn(thisColumn));
        }
    }

    private void populateBoxes() {
        for (int i = 0; i < this.sideLength; i++) {       // Loop over all boxes (9 for standard sudoku)
            int boxRow = i / this.subBoxLength;       // Find out which row and column this box is (0-2 for standard sudoku)
            int boxCol = i % this.subBoxLength;

            int startingRow = this.startingIdx(boxRow);
            int startingCol = this.startingIdx(boxCol);

            List<Square> thisBoxSquares = new ArrayList<>();
            for (int j = 0; j < this.subBoxLength; j++) {     // Add each element of the sub-box to a list
                int row = startingRow + j;
                thisBoxSquares.addAll(this.rows
                                .get(row)
                                .getSquares()
                                .subList(startingCol,startingCol+this.subBoxLength));
            }

            Box thisBox = new Box(thisBoxSquares);

            thisBoxSquares.forEach(square -> square.setBox(thisBox));

        }
    }

    private int startingIdx(int boxIdx) {
        return boxIdx * this.subBoxLength;
    }

    public void setSolved(boolean solved) {
        this.solved = solved;
    }

    public boolean getSolved() {
        return solved;
    }

}
