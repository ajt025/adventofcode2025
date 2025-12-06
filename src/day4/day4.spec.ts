import day4 from './index';

describe('On Day 4', () =>{
    let input =
        "..@@.@@@@.\n" +
        "@@@.@.@.@@\n" +
        "@@@@@.@.@@\n" +
        "@.@@@@..@.\n" +
        "@@.@@@@.@@\n" +
        ".@@@@@@@.@\n" +
        ".@.@.@.@@@\n" +
        "@.@@@.@@@@\n" +
        ".@@@@@@@@.\n" +
        "@.@.@@@.@.\n";
    it(`part1`, ()=>{
        expect(day4.solveForPartOne(input)).toBe('13');
    })
});