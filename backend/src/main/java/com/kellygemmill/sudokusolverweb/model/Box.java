package com.kellygemmill.sudokusolverweb.model;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class Box extends SquareGroup {

    protected final int numSquares;
    protected final int sideLength;
    protected final List<Row> rows;

    public Box(List<Square> squares) {
        super(squares);
        this.numSquares = this.squares.size();
        this.sideLength = (int) Math.round(Math.sqrt(numSquares));

        if (isNotSquare(this.squares)) {
            throw new IllegalArgumentException("Input values must define a perfect square.");
        }

        this.rows = this.makeRows();
    }

    private List<Row> makeRows() {
        List<Row> rows = new ArrayList<>();

        for (int i = 0; i < sideLength; i++) {
            int startIdx = i*sideLength;

            List<Square> thisRowSquares = squares.subList(startIdx,startIdx+sideLength);
            Row thisRow = new Row(thisRowSquares);
            rows.add(thisRow);
        }
        return rows;
    }

    public List<Square> getSquares() {
        return squares;
    }

    public List<Row> getRows() {
        return rows;
    }

    public int getNumSquares() {
        return numSquares;
    }

    public static boolean isNotSquare(List<Square> squares) {
        double lengthSqrt = Math.sqrt(squares.size());
        return lengthSqrt - Math.floor(lengthSqrt) != 0;
    }

    @Override
    public String toString() {
        return rows.stream()
                .map(Row::toString)
                .collect(Collectors.joining("\n"));
    }
}
