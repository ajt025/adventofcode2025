import { Day } from "../day";
import {parseLines} from "../util/parser";

class Day3 extends Day {

    constructor(){
        super(3);
    }

    solveForPartOne(input: string): string {
        const lines = parseLines(input);

        // sum each line's highest joltage
        let answer = lines.map(x => x.split("").map(Number))
             .map(this.findHighestJoltage)
             .reduce((acc, curr) => acc + curr, 0);

        return String(answer);
    }

    // return the joltage (concat of the two batteries)
    findHighestJoltage(input: number[]): number {
        // 1st pass: find largest number/index that's not the last digit
        let highestTensIndex = input.indexOf(Math.max(...input.slice(0, input.length - 1)));

        // 2nd: find highest number that's after 1st pass digit
        let highestOnesIndex = input.indexOf(Math.max(...input.slice(highestTensIndex + 1, input.length)));

        return input[highestTensIndex] * 10 + input[highestOnesIndex];
    }

    solveForPartTwo(input: string): string {
        return input;
    }
}

export default new Day3;