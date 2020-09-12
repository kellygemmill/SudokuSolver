package com.kellygemmill.sudokusolverreact.model;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class Box extends SquareGroup {

    protected final int numSquares;
    protected final int sideLength;
    protected List<Row> rows;

    public Box(List<Square> squares) {
        super(squares);
        this.numSquares = this.squares.size();
        this.sideLength = (int) Math.round(Math.sqrt(this.numSquares));

        if (isNotSquare(this.squares)) {
            throw new IllegalArgumentException("Input values must define a perfect square.");
        }

        this.populateRows();
    }

    private void populateRows() {
        this.rows = new ArrayList<>();

        for (int i = 0; i < this.sideLength; i++) {
            int startIdx = i*this.sideLength;

            List<Square> thisRowSquares = this.squares.subList(startIdx,startIdx+this.sideLength);
            Row thisRow = new Row(thisRowSquares);
            this.rows.add(thisRow);
        }
    }

    protected boolean isNotSquare(List<Square> squares) {
        double lengthSqrt = Math.sqrt(squares.size());
        return lengthSqrt - Math.floor(lengthSqrt) != 0;
    }

    public List<Square> getSquares() {
        return squares;
    }

    public int getSideLength() {
        return sideLength;
    }

    public int getNumSquares() {
        return numSquares;
    }

    @Override
    public String toString() {
        return this.rows.stream()
                .map(Row::toString)
                .collect(Collectors.joining("\n"));
    }
}
