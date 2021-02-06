package com.kellygemmill.sudokusolverweb.model;

import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class SudokuBoard extends Box {

    private final int subBoxLength = (int) Math.round(Math.sqrt(this.sideLength));
    private final List<Column> columns;
    private final List<Box> boxes;
    private boolean solved;

    public SudokuBoard(List<Square> squares) {
        super(squares);

        if (isNotSquare(this.squares.subList(0, this.sideLength))) {
            throw new IllegalArgumentException("Sub-boxes must sum to total grid dimension.");
        }

        rows.forEach(row -> row.getSquares().forEach(square -> square.setRow(row))); // Set row for each square

        this.columns = this.makeColumns();
        this.boxes = this.makeBoxes();
        this.solved = false;
    }

    private List<Column> makeColumns() {
        List<Column> columns = new ArrayList<>();
        for (int i = 0; i < sideLength; i++) {
            List<Square> thisColumnSquares = new ArrayList<>();
            for (Row row : rows) {               // Loop over each row, get element i, and add to column
                thisColumnSquares.add(row.getSquares().get(i));
            }
            Column thisColumn = new Column(thisColumnSquares);
            thisColumnSquares.forEach(square -> square.setColumn(thisColumn)); // Set column for each square
            columns.add(thisColumn);
        }
        return columns;
    }

    private List<Box> makeBoxes() {
        List<Box> boxes = new ArrayList<>();
        for (int i = 0; i < sideLength; i++) {       // Loop over all boxes (9 for standard sudoku)
            int boxRow = i / subBoxLength;           // Find out which row and column this box is (0-2 for standard sudoku)
            int boxCol = i % subBoxLength;

            int startingRow = boxRow*subBoxLength;
            int startingCol = boxCol*subBoxLength;

            List<Square> thisBoxSquares = new ArrayList<>();
            for (int j = 0; j < subBoxLength; j++) {     // Add each element of the sub-box to a list
                int row = startingRow + j;
                thisBoxSquares.addAll(rows
                                .get(row)
                                .getSquares()
                                .subList(startingCol,startingCol+subBoxLength));
            }
            Box thisBox = new Box(thisBoxSquares);
            thisBoxSquares.forEach(square -> square.setBox(thisBox));   // Set sub-box for each square
            boxes.add(thisBox);
        }
        return boxes;
    }

    public List<Column> getColumns() {
        return columns;
    }

    public List<Box> getBoxes() {
        return boxes;
    }

    public void setSolved(boolean solved) {
        this.solved = solved;
    }

    public boolean isSolved() {
        return solved;
    }
}
