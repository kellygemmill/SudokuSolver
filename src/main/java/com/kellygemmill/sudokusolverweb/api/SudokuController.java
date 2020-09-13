package com.kellygemmill.sudokusolverweb.api;

import com.kellygemmill.sudokusolverweb.model.SudokuSummary;
import com.kellygemmill.sudokusolverweb.service.SudokuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;

@RestController
@RequestMapping("sudoku/solve")
@CrossOrigin(origins = "http://localhost:3000")
public class SudokuController {

    private final SudokuService sudokuService;

    @Autowired
    public SudokuController(SudokuService sudokuService) {
        this.sudokuService = sudokuService;
    }

    @PostMapping
    public SudokuSummary solveBoard(@RequestBody SudokuSummary boardInput) {
        return sudokuService.solve(boardInput);
    }

}
