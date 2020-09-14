package com.kellygemmill.sudokusolverweb.service;

import com.kellygemmill.sudokusolverweb.model.Square;
import com.kellygemmill.sudokusolverweb.model.SquareGroup;
import com.kellygemmill.sudokusolverweb.model.SudokuBoard;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SudokuSolver {

    public void solve(SudokuBoard sudokuBoard) {
        if (boardNotValid(sudokuBoard)) {
            return;
        }
        solve(sudokuBoard,0);
    }

    private boolean solve(SudokuBoard sudokuBoard, int startIdx) {
        if (startIdx >= sudokuBoard.getNumSquares()) {
            sudokuBoard.setSolved(true);
            return true;
        }

        Square square = sudokuBoard.getSquares().get(startIdx);
        if (square.isProvidedValue()) {
            return solve(sudokuBoard, startIdx + 1);
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
        return !group.getValues().containsKey(number);
    }

    private boolean containsDuplicates(Square square) {
        return containsDuplicates(square.getRow(),square.getValue())
                || containsDuplicates(square.getColumn(),square.getValue())
                || containsDuplicates(square.getBox(),square.getValue());
    }

    private boolean containsDuplicates(SquareGroup group, int number) {
        return group.getValues().get(number) > 1;
    }

    private boolean boardNotValid(SudokuBoard sudokuBoard) {
        for (Square square : sudokuBoard.getSquares()) {
            if (square.isProvidedValue() && containsDuplicates(square)) {
                return true;
            }
        }
        return false;
    }
}
