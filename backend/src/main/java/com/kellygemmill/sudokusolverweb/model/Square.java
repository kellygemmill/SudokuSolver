package com.kellygemmill.sudokusolverweb.model;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

public class Square {

    private Integer value;
    private boolean isFinalValue;
    private Row row;
    private Column column;
    private Box box;

    public Square(Integer value, boolean finalValue) {
        this.value = value;
        this.isFinalValue = finalValue;
    }

    public Integer getValue() {
        return value;
    }

    public void setValue(Integer value) {
        if (!this.isFinalValue) {      // protect against resetting original values
            this.value = value;
        }
    }

    public boolean isFinalValue() {
        return this.isFinalValue;
    }

    public void setFinalValue(boolean isFinalValue) {
        this.isFinalValue = isFinalValue;
    }

    public Row getRow() {
        return row;
    }

    protected void setRow(Row row) {
        this.row = row;
    }

    public Column getColumn() {
        return column;
    }

    protected void setColumn(Column column) {
        this.column = column;
    }

    public Box getBox() {
        return box;
    }

    protected void setBox(Box box) {
        this.box = box;
    }

    public List<Integer> getPossibleValues() {
        Set<Integer> possibleValues = IntStream
                .rangeClosed(1,row.getLength())
                .boxed()
                .collect(Collectors.toSet());

        possibleValues.removeAll(row.getValues());
        possibleValues.removeAll(column.getValues());
        possibleValues.removeAll(box.getValues());
        return new ArrayList<>(possibleValues);
    }

    @Override
    public String toString() {
        return this.value != 0 ? String.valueOf(this.value) : "X";
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Square square = (Square) o;
        return Objects.equals(value, square.value);
    }

    @Override
    public int hashCode() {
        return Objects.hash(value);
    }
}
