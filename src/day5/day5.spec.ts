import day5 from './index';

describe('On Day 5', () =>{
    let input =
        "3-5\n" +
        "10-14\n" +
        "16-20\n" +
        "12-18\n" +
        "\n" +
        "1\n" +
        "5\n" +
        "8\n" +
        "11\n" +
        "17\n" +
        "32\n";
    it(`part1`, ()=>{
        expect(day5.solveForPartOne(input)).toBe('3');
    });

    it(`part2`, ()=>{
        expect(day5.solveForPartTwo(input)).toBe('14');
    });
});