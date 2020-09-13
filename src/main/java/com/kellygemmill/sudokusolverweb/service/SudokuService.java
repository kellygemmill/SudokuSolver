package com.kellygemmill.sudokusolverweb.service;

import com.kellygemmill.sudokusolverweb.model.Square;
import com.kellygemmill.sudokusolverweb.model.SudokuBoard;
import com.kellygemmill.sudokusolverweb.model.SudokuSummary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class SudokuService {

    private final SudokuSolver sudokuSolver;

    @Autowired
    public SudokuService(SudokuSolver sudokuSolver) {
        this.sudokuSolver = sudokuSolver;
    }

    public SudokuBoard solve(String[] boardInput) {
        SudokuBoard sudokuBoard = initializeBoard(boardInput);
        sudokuSolver.solve(sudokuBoard);
        return sudokuBoard;
    }

    public SudokuSummary solve(SudokuSummary sudokuSummary) {
        SudokuBoard sudokuBoard = initializeBoard(sudokuSummary.getOriginal());
        sudokuSolver.solve(sudokuBoard);
        sudokuSummary.setSolution(sudokuBoard);
        return sudokuSummary;
    }

    private SudokuBoard initializeBoard(String[] boardInput) {
        List<Square> squares = createSquares(boardInput);
        return new SudokuBoard(squares);
    }

    private List<Square> createSquares(String[] boardInput) {
        return Arrays.stream(boardInput)
                .map(Integer::parseInt)
                .map(value -> new Square(value, value != 0))    // If value is not zero, it's a pre-provided value
                .collect(Collectors.toList());
    }
}
