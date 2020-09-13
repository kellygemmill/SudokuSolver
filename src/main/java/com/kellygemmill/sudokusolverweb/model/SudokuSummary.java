package com.kellygemmill.sudokusolverweb.model;

public class SudokuSummary {

    private boolean solved;
    private String[] original;
    private String[] solution;

    public SudokuSummary() {
        this.solved = false;
    }

    public SudokuSummary(String[] original) {
        this.solved = false;
        this.original = original;
    }

    public SudokuSummary(String[] originalBoard, SudokuBoard sudokuBoard) {
        this.solved = sudokuBoard.isSolved();
        this.original = originalBoard;
        this.solution = new String[sudokuBoard.getNumSquares()];
    }

    public boolean isSolved() {
        return this.solved;
    }

    public String[] getOriginal() {
        return this.original;
    }

    public String[] getSolution() {
        return this.solution;
    }

    public void setSolution(SudokuBoard sudokuBoard) {
        this.solved = sudokuBoard.isSolved();
        this.solution = sudokuBoard
                .getSquares()
                .stream()
                .map(square -> square.getValue().toString())
                .map(value -> value.equals("0") ? "" : value)
                .toArray(String[]::new);
    }
}
