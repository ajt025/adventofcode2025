import { Day } from "../day";

class Day2 extends Day {

    constructor(){
        super(2);
    }

    parseInput(input: string): string[][] {
        return input.split(",").map(x => x.split("-"));
    }

    solveForPartOne(input: string): string {
        let regex = /^(\d+)\1$/;
        let sum = 0;

        let intervals = this.parseInput(input);
        intervals.forEach((element) => {
            for (let i = Number(element[0]); i <= Number(element[1]); ++i) {
                if (regex.test(i.toString())) {
                    // console.log(element[0], element[1], i);
                    sum += Number(i);
                }
            }
        });
        return String(sum);
    }

    solveForPartTwo(input: string): string {
        let regex = /^(\d+)\1+$/; // repeat
        let sum = 0;

        let intervals = this.parseInput(input);
        intervals.forEach((element) => {
            for (let i = Number(element[0]); i <= Number(element[1]); ++i) {
                if (regex.test(i.toString())) {
                    // console.log(element[0], element[1], i);
                    sum += Number(i);
                }
            }
        });
        return String(sum);
    }
}

export default new Day2;