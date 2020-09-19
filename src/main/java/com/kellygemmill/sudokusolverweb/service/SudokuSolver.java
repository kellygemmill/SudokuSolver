package com.kellygemmill.sudokusolverweb.service;

import com.kellygemmill.sudokusolverweb.model.*;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class SudokuSolver {

    public void solve(SudokuBoard sudokuBoard) {
        if (boardNotValid(sudokuBoard)) {
            return;
        }

        boolean recheck;
        do {
            recheck = false;
            for (Square square : sudokuBoard.getSquares()) {
                List<Integer> possibleValues = square.getPossibleValues();
                if (!square.isFinalValue() && possibleValues.size() == 1) {
                    square.setValue(possibleValues.get(0));
                    square.setFinalValue(true);
                    recheck = true;
                    continue;
                }

                if (!square.isFinalValue() &&
                    (checkSquareGroup(square,square.getRow(),possibleValues) ||
                    checkSquareGroup(square,square.getColumn(),possibleValues) ||
                    checkSquareGroup(square,square.getBox(),possibleValues))) {
                    recheck = true;
                }
            }
        } while (recheck);

        solve(sudokuBoard,0);
    }

    private boolean checkSquareGroup(Square thisSquare, SquareGroup squareGroup, List<Integer> possibleValues) {
        for (Integer value : possibleValues) {
            List<Square> possibleSquares = squareGroup
                    .getSquares()
                    .stream()
                    .filter(square -> !square.isFinalValue())
                    .filter(square -> square.getPossibleValues().contains(value))
                    .collect(Collectors.toList());
            if (possibleSquares.size() == 1) {
                thisSquare.setValue(value);
                thisSquare.setFinalValue(true);
                return true;
            }
        }
        return false;
    }

    private boolean solve(SudokuBoard sudokuBoard, int startIdx) {
        if (startIdx >= sudokuBoard.getNumSquares()) {
            sudokuBoard.setSolved(true);
            return true;
        }

        Square square = sudokuBoard.getSquares().get(startIdx);
        if (square.isFinalValue()) {
            return solve(sudokuBoard, startIdx + 1);
        }

        for (Integer value : square.getPossibleValues()) {
            square.setValue(value);
            if (solve(sudokuBoard,startIdx+1)) {
                return true;          // don't try any more if this number solves it
            }
            clearValues(sudokuBoard,startIdx);
        }
        return false;
    }

    private void clearValues(SudokuBoard sudokuBoard,int startIdx) {
        List<Square> squares = sudokuBoard.getSquares()
                .subList(startIdx,sudokuBoard.getNumSquares());
        squares.forEach(square -> square.setValue(0));
    }

    private boolean containsDuplicates(SquareGroup group) {
        Set<Integer> values = new HashSet<>(group.getValues());
        return values.size() != group.getValues().size();
    }

    private boolean boardNotValid(SudokuBoard sudokuBoard) {
        for (Row row : sudokuBoard.getRows()) {
            if (containsDuplicates(row)) {
                return true;
            }
        }
        for (Column column : sudokuBoard.getColumns()) {
            if (containsDuplicates(column)) {
                return true;
            }
        }
        for (Box box: sudokuBoard.getBoxes()) {
            if (containsDuplicates(box)) {
                return true;
            }
        }
        return false;
    }
}
