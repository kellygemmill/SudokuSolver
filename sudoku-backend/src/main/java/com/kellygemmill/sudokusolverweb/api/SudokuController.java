package com.kellygemmill.sudokusolverweb.api;

import com.kellygemmill.sudokusolverweb.model.SudokuSummary;
import com.kellygemmill.sudokusolverweb.service.SudokuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/solve")
//@CrossOrigin(origins = "*")
public class SudokuController {

    private final SudokuService sudokuService;

    @Autowired
    public SudokuController(SudokuService sudokuService) {
        this.sudokuService = sudokuService;
    }

    @GetMapping
    public String checkServer() throws Exception {
        StringBuilder sb = new StringBuilder();
        sb.append("Ready to solve! ");
        sb.append("See https://github.com/kellygemmill/SudokuSolver/blob/master/Readme.md#sudoku-solver---backend for API instructions.");
        return sb.toString();
    }

    @PostMapping
    public SudokuSummary solveBoard(@RequestBody SudokuSummary boardInput) {
        return sudokuService.solve(boardInput);
    }

}
