import day3 from './index';

describe('On Day 3', () =>{
    let input =
        "987654321111111\n" +
        "811111111111119\n" +
        "234234234234278\n" +
        "818181911112111\n";
    it(`part1`, ()=>{
        expect(day3.solveForPartOne(input)).toBe('357');
    });

    it(`part2`, ()=>{
        expect(day3.solveForPartTwo(input)).toBe('3121910778619');
    })
});