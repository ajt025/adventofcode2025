import day3 from './index';

describe('On Day 3', () =>{
    let input1 =
        "987654321111111\n" +
        "811111111111119\n" +
        "234234234234278\n" +
        "818181911112111\n";
    it(`part1`, ()=>{
        expect(day3.solveForPartOne(input1)).toBe('357');
    })
});