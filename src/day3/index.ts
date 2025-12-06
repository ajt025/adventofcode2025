import { Day } from "../day";
import {parseLines} from "../util/parser";

class Day3 extends Day {

    constructor() {
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
        let highestOnesIndex = input.indexOf(Math.max(...input.slice(highestTensIndex + 1, input.length)), highestTensIndex + 1);

        return input[highestTensIndex] * 10 + input[highestOnesIndex];
    }

    solveForPartTwo(input: string): string {
        const lines = parseLines(input);

        // sum each line's highest joltage
        let answer = lines.map(x => x.split("").map(Number))
            .map(this.findHighestJoltagePrime)
            .reduce((acc, curr) => acc + curr, 0);

        return String(answer);
    }

    findHighestJoltagePrime(input: number[]): number {
        // similar approach to p1, but...
            // instead of input.length - 1; slice end should be input.length - remainingBatteriesNeeded
            // ensure we're indexOf()-ing after the last digit
            // need to loop this 12 times

        const remainingBatteriesNeeded = 12;
        let lastDigitIndex = -1;
        let result = '';
        for (let i = 0; i < remainingBatteriesNeeded; ++i) {
            lastDigitIndex = input.indexOf(
                Math.max(...input.slice(lastDigitIndex + 1, input.length + 1 + i - remainingBatteriesNeeded)),
                lastDigitIndex + 1);
            result += String(input[lastDigitIndex]);
        }

        return Number(result);
    }
}

export default new Day3;