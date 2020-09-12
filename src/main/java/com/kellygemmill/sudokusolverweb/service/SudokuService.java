package com.kellygemmill.sudokusolverweb.service;

import com.kellygemmill.sudokusolverweb.model.Square;
import com.kellygemmill.sudokusolverweb.model.SudokuBoard;
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

    public SudokuBoard solve(String boardInput) {
        SudokuBoard sudokuBoard = initializeBoard(boardInput);
        sudokuSolver.solve(sudokuBoard);
        return sudokuBoard;
    }

    private SudokuBoard initializeBoard(String boardInput) {
        List<Square> squares = createSquares(boardInput);
        return new SudokuBoard(squares);
    }

    private List<Square> createSquares(String boardInput) {
        List<Integer> boardAsInt = Arrays
                .stream(boardInput.split("\\s++"))
                .map(Integer::parseInt)
                .collect(Collectors.toList());

        return this.createSquares(boardAsInt);
    }

    private List<Square> createSquares(List<Integer> boardInput) {
        return boardInput
                .stream()
                .map(value -> new Square(value, value != 0))    // If value is not zero, it's a pre-provided value
                .collect(Collectors.toList());
    }

}
