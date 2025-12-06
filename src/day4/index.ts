import { Day } from "../day";
import {parseGrid} from "../util/parser";


const directions = [
    [-1, -1], [-1, 0], [-1 , 1],
    [ 0, -1],/*[0,0]*/ [ 0 , 1],
    [ 1, -1], [ 1, 0], [ 1 , 1],
];

class Day4 extends Day {

    constructor(){
        super(4);
    }

    solveForPartOne(input: string): string {
        let grid: string[][] = parseGrid(input);
        let result = 0;

        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[i].length; j++) {
                if (grid[i][j] === '@') {
                    if (this.bfs(grid, i, j)) {
                        ++result;
                    }
                }
            }
        }

        return String(result);
    }

    bfs(grid: string[][], row: number, col: number): boolean {
        let rollCount = 0;

        // count cell if < 4 adjacent '@'
        for (const direction of directions) {
            const nextRow = row + direction[0];
            const nextCol = col + direction[1];

            if (nextRow >= 0 && nextRow < grid.length && nextCol >= 0 && nextCol < grid[0].length && grid[nextRow][nextCol] === '@') {
                ++rollCount;
            }

            if (rollCount >= 4) {
                return false;
            }
        }

        return true;
    }

    solveForPartTwo(input: string): string {
        // repeat BFS on entire grid until no change in grid
        let grid: string[][] = parseGrid(input);
        let result = 0;

        while (true) {
            // deep copy grid to setup for next iteration
            let nextGrid: string[][] = grid.map(x => x.slice());
            let currentStepResult = 0;

            for (let i = 0; i < grid.length; i++) {
                for (let j = 0; j < grid[i].length; j++) {
                    if (grid[i][j] === '@') {
                        if (this.bfs(grid, i, j)) {
                            ++currentStepResult;
                            // mark this spot as clear for next iteration
                            nextGrid[i][j] = '.';
                        }
                    }
                }
            }

            // if no new spots were found, end algorithm and return
            if (currentStepResult === 0) {
                break;
            } else {
                result += currentStepResult;
                grid = nextGrid; // save changes for next iteration
            }
        }

        return String(result);
    }
}

export default new Day4;