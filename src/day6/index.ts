import { Day } from "../day";
import {parseLinesWithRegex} from "../util/parser";

class Day6 extends Day {

    constructor(){
        super(6);
    }

    solveForPartOne(input: string): string {
        // parse as a 2d grid
        const grid = parseLinesWithRegex(input, /[\d*+]+/g);
        // flip grid to be by column
        const problems = grid[0].map((_, colIndex) => grid.map(row => row[colIndex]));

        // 2 types of reducers: sum and product, depending on last element
        const results = problems.map((ops) => {
            if (ops.at(-1) === '*') {
                return ops
                    .slice(0, ops.length - 1)
                    .reduce((acc, curr) => acc * Number(curr),
                        1);
            } else if (ops.at(-1) === '+') {
                return ops
                    .slice(0, ops.length - 1)
                    .reduce((acc, curr) => acc + Number(curr),
                        0);
            } else {
                throw Error("Unrecognized operator in input: " + ops)
            }
        });

        // sum results of the individual problem's results
        return results.reduce((acc, curr) => acc + curr, 0).toString();
    }

    solveForPartTwo(input: string): string {
        return input;
    }
}

export default new Day6;