import { Day } from "../day";
import {parseLines} from "../util/parser";

class Day1 extends Day {
    MAX_POSITION = 100;

    constructor(){
        super(1);
    }

    solveForPartOne(input: string): string {
        let currentPosition = 50; // default start
        let zeroesHit = 0;

        let inputLines: string[] = parseLines(input);
        for (const action of inputLines) {
            // input parsing
            let direction = action[0];
            let magnitude = Number.parseInt(action.substring(1));

            // apply magnitude to current position depending on the parsed direction
            if (direction === "L") {
                currentPosition -= magnitude;
            } else if (direction === "R") {
                currentPosition += magnitude;
            } else {
                throw Error("Input line has an error, undefined direction: " + action);
            }

            // check for dial overflow and add to our counter if under/overflow occurs
            currentPosition %= this.MAX_POSITION;
            if (currentPosition === 0) {
                ++zeroesHit;
            }
        }

        return String(zeroesHit);
    }

    solveForPartTwo(input: string): string {
        let currentPosition = 50; // default start
        let zeroesHit = 0;

        let inputLines: string[] = parseLines(input);
        for (const action of inputLines) {
            // input parsing
            let direction = action[0];
            let magnitude = Number.parseInt(action.substring(1));
            let nextPosition = currentPosition;

            // apply magnitude to current position depending on the parsed direction
            if (direction === "L") {
                nextPosition = currentPosition - magnitude;
            } else if (direction === "R") {
                nextPosition = currentPosition + magnitude;
            } else {
                throw Error("Input line has an error, undefined direction: " + action);
            }

            // count the times that we land on edge (0)
            // count the times that we turn through (current is positive, next is negative; current is negative, next is positive)
            // for positions >= 100 in magnitude count the times that position / 100

            if (nextPosition === 0) {
                ++zeroesHit;
            } else if (currentPosition < 0 && nextPosition > 0 || currentPosition > 0 && nextPosition < 0) {
                // polarity difference in positions
                ++zeroesHit;
            }

            // cycle checks
            if (Math.abs(nextPosition) >= this.MAX_POSITION) {
                zeroesHit += Math.floor(Math.abs(nextPosition) / this.MAX_POSITION);
                nextPosition %= this.MAX_POSITION;
            }

            currentPosition = nextPosition;
        }

        return String(zeroesHit);
    }
}

export default new Day1;