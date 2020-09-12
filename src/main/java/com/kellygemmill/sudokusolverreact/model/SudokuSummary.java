package com.kellygemmill.sudokusolverreact.model;

public class SudokuSummary {

    public final boolean solved;
    public final String solution;
    public final String original;

    public SudokuSummary(String originalBoard, SudokuBoard sudokuBoard) {
        this.solved = sudokuBoard.getSolved();
        this.solution = sudokuBoard.toString();
        this.original = originalBoard;
    }
}
