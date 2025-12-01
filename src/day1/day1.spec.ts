import day1 from './index';



describe('On Day 1', () => {
    const part2input = "L68\n" +
        "L30\n" +
        "R48\n" +
        "L5\n" +
        "R60\n" +
        "L55\n" +
        "L1\n" +
        "L99\n" +
        "R14\n" +
        "L82\n";
    it(`part 2`, ()=> {
        expect(day1.solveForPartTwo(part2input)).toBe("6");
    });
});