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
        return input;
    }
}

export default new Day4;