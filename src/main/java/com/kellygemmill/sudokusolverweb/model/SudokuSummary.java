package com.kellygemmill.sudokusolverweb.model;

public class SudokuSummary {

    private boolean solved;
    private Integer[] original;
    private Integer[] solution;

    public SudokuSummary() {
        this.solved = false;
    }

    public SudokuSummary(Integer[] original) {
        this.solved = false;
        this.original = original;
    }

    public SudokuSummary(Integer[] originalBoard, SudokuBoard sudokuBoard) {
        this.solved = sudokuBoard.isSolved();
        this.original = originalBoard;
        this.solution = new Integer[sudokuBoard.getNumSquares()];
    }

    public boolean isSolved() {
        return this.solved;
    }

    public Integer[] getOriginal() {
        return this.original;
    }

    public Integer[] getSolution() {
        return this.solution;
    }

    public void setSolution(SudokuBoard sudokuBoard) {
        this.solved = sudokuBoard.isSolved();
        this.solution = sudokuBoard
                .getSquares()
                .stream()
                .map(Square::getValue)
                .toArray(Integer[]::new);
    }
}
