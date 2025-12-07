import { Day } from "../day";
import {parseGrid} from "../util/parser";

class Day7 extends Day {

    constructor(){
        super(7);
    }

    solveForPartOne(input: string): string {
        const grid = parseGrid(input);
        return String(this.executeTachyon(grid));
    }

    executeTachyon(grid: string[][]): number {
        let splitCount = 0;

        // on a row, find any | and check [row + 1][col]:
            // if '.', set to |
            // if '^', ...
                // set [row + 1][col - 1], [row + 1][col + 1] to |
                // add to split counter
        for (let i = 0; i < grid.length; i++) {
            // console.table(grid);
            for (let j = 0; j < grid[i].length; j++) {
                if (['|', 'S'].includes(grid[i][j]) && i < grid.length - 1) {
                    let nextCell = grid[i + 1][j];
                    if (nextCell === '.') {
                        grid[i + 1][j] = '|';
                    } else if (nextCell === '^') {
                        grid[i + 1][j - 1] = '|';
                        grid[i + 1][j + 1] = '|';
                        ++splitCount
                    }
                }
            }
        }

        return splitCount;
    }

    solveForPartTwo(input: string): string {
        return "";
    }

    // solveForPartTwo(input: string): string {
    //     const grid = parseGrid(input);
    //     return String(this.executeTachyonRecursive(grid));
    // }
    //
    // executeTachyonRecursive(grid: string[][]): number {
    //     let splitCount = 0;
    //
    //     // on a row, find any | and check [row + 1][col]:
    //     // if '.', set to |
    //     // if '^', ...
    //     // set [row + 1][col - 1], [row + 1][col + 1] to |
    //     // add to split counter
    //     for (let i = 0; i < grid.length; i++) {
    //         // console.table(grid);
    //         for (let j = 0; j < grid[i].length; j++) {
    //             if (['|', 'S'].includes(grid[i][j]) && i < grid.length - 1) {
    //                 let nextCell = grid[i + 1][j];
    //                 if (nextCell === '.') {
    //                     grid[i + 1][j] = '|';
    //                 } else if (nextCell === '^') {
    //                     grid[i + 1][j - 1] = '|';
    //                     grid[i + 1][j + 1] = '|';
    //                     ++splitCount
    //                 }
    //             }
    //         }
    //     }
    //
    //     return splitCount;
    // }
}

export default new Day7;