import { Day } from "../day";
import {parseLinesWithSplit} from "../util/parser";

class Day5 extends Day {

    constructor(){
        super(5);
    }

    solveForPartOne(input: string): string {
        const parsedInput = parseLinesWithSplit(input);
        // convert to numbers, sort by interval start
        const parsedRanges = parsedInput[0]
            .map(x => x.split("-"))
            .map(x => [Number(x[0]), Number(x[1])]); // a lil janky but whatever
        // merge the intervals
        const mergedRanges = this.mergeRanges(parsedRanges);
        const ingredients = parsedInput[1].map(Number);

        // overall idea:
        // sort ranges by start + combine overlapping...
        // find first interval where ingredient > interval.start

        let result = 0;
        for (const ingredient in ingredients) {
            if (this.isFresh(ingredients[ingredient], mergedRanges)) {
                ++result;
            }
        }

        return String(result);
    }

    // sorts and merges intervals
    mergeRanges(ranges: number[][]): number[][] {
        const sortedRanges = [...ranges].sort((a, b) => a[0] - b[0]);

        let merged: number[][] = [];
        let prev = sortedRanges[0];

        for (let i = 1; i < sortedRanges.length; i++) {
            let interval = sortedRanges[i];
            if (interval[0] <= prev[1]) {
                prev[1] = Math.max(prev[1], interval[1]);
            } else {
                merged.push(prev);
                prev = interval;
            }
        }
        // last push
        if (prev !== merged[merged.length - 1]) {
            merged.push(prev);
        }

        return merged;
    }

    // assumes: no overlapping intervals and in sorted order by interval start
    isFresh(ingredient: number, ranges: number[][]): boolean {
        for (const range of ranges) {
            if (ingredient >= range[0] && ingredient <= range[1]) {
                return true;
            }
        }
        return false;
    }

    solveForPartTwo(input: string): string {
        const parsedInput = parseLinesWithSplit(input);
        // convert to numbers, sort by interval start
        const parsedRanges = parsedInput[0]
            .map(x => x.split("-"))
            .map(x => [Number(x[0]), Number(x[1])]);
        // merge the intervals
        const mergedRanges = this.mergeRanges(parsedRanges);

        // overall idea:
        // sort ranges by start + combine overlapping...
        // sum of: each interval end - interval start
        return mergedRanges.reduce((sum, interval) =>
            sum + (interval[1] - interval[0] + 1),
            0
        ).toString();
    }
}

export default new Day5;