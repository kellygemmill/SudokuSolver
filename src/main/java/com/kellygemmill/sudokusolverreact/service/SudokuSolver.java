package com.kellygemmill.sudokusolverreact.service;

import com.kellygemmill.sudokusolverreact.model.Square;
import com.kellygemmill.sudokusolverreact.model.SquareGroup;
import com.kellygemmill.sudokusolverreact.model.SudokuBoard;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SudokuSolver {

    public void solve(SudokuBoard sudokuBoard) {
        solve(sudokuBoard,0);
    }

    private boolean solve(SudokuBoard sudokuBoard, int startIdx) {
        if (startIdx >= sudokuBoard.getNumSquares()) {
            sudokuBoard.setSolved(true);
            return true;
        }

        Square square = sudokuBoard.getSquares().get(startIdx);
        if (square.isProvidedValue()) {
            return solve(sudokuBoard,startIdx+1);
        }

        for (int guess = 1; guess <= sudokuBoard.getSideLength(); guess++) {
            if (okToAddNumber(square,guess)) {
                square.setValue(guess);
                if (solve(sudokuBoard,startIdx+1)) {
                    return true;          // don't try any more if this number solves it
                }
                clearValues(sudokuBoard,startIdx);
            }
        }
        return false;
    }

    private void clearValues(SudokuBoard sudokuBoard,int startIdx) {
        List<Square> squares = sudokuBoard.getSquares()
                .subList(startIdx,sudokuBoard.getNumSquares());
        squares.forEach(square -> square.setValue(0));
    }

    private boolean okToAddNumber(Square square, int number) {
        return okToAddNumber(square.getRow(),number)
                && okToAddNumber(square.getColumn(), number)
                && okToAddNumber(square.getBox(), number);
    }

    private boolean okToAddNumber(SquareGroup group, int number) {
        return !group.getValues().contains(number);
    }
}
