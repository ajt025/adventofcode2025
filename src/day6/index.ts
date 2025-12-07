import { Day } from "../day";
import {parseLines, parseLinesWithRegex} from "../util/parser";

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
        const results = problems.map(this.solveArithmetic);

        // sum results of the individual problem's results
        return results.reduce((acc, curr) => acc + curr, 0).toString();
    }

    // input: [#, #, #, *|+]
    private solveArithmetic(ops: string[]): number {
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
    }

    // had to revise this to not strip spaces bc of left/right justify :(
    solveForPartTwo(input: string): string {
        // iterate across all lines at once;
            // each index is a number; concat all these chars
            // if all chars are ' ', then
                // push to operand array, start new problem + capture next operand
        const lines = parseLines(input);
        const problems: string[][] = [];
        let currOperands: string[] = [];
        let currOperator = '';

        for (let col = 0; col < lines[0].length; col++) {
            // operators are on last row; push new operand when operators are encountered in the col
            let operator = lines[lines.length - 1][col];
            if (operator !== ' ') {
                // ignore first iteration to init variables
                if (col !== 0) {
                    problems.push([...currOperands, currOperator]);
                }
                currOperands = [];
                currOperator = operator;
            }

            // build out the operand by iterating through the column
            let currOperand = '';
            for (let row = 0; row < lines.length - 1; row++) {
                currOperand += lines[row][col].trim();
            }
            // skip empty columns
            if (currOperand.length > 0) {
                currOperands.push(currOperand);
            }
        }

        // last operand at end of col that's missed by the iteration
        problems.push([...currOperands, currOperator]);

        // map w/ solveArithmetic
        return problems
            .map(this.solveArithmetic)
            .reduce((acc, curr) => acc + curr, 0).toString();
    }
}

export default new Day6;