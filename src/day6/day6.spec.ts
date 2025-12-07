import day6 from './index';

describe('On Day 6', () =>{
    let input =
        "123 328  51 64 \n" +
        " 45 64  387 23 \n" +
        "  6 98  215 314\n" +
        "*   +   *   +  \n";
    it(`part1`, ()=>{
        expect(day6.solveForPartOne(input)).toBe('4277556');
    })
});