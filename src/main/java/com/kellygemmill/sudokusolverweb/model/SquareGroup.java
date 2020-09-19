package com.kellygemmill.sudokusolverweb.model;

import java.util.*;
import java.util.stream.Collectors;

public abstract class SquareGroup {

    protected final List<Square> squares;

    public SquareGroup(List<Square> squares) {
        this.squares = squares;
    }

    public List<Square> getSquares() {
        return this.squares;
    }

    public List<Integer> getValues() {
        return this.squares
                .stream()
                .map(Square::getValue)
                .filter(value -> value != 0)
                .collect(Collectors.toList());
    }

    public int getLength() {
        return squares.size();
    }

}
