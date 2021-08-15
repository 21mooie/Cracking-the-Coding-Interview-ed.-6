const tripleStep = require("../../Interview_Questions/chapter08/8.1tripleStrep");

describe('Triple Step', () => {
    it('should be able to determine the number of ways to get to the n step for a base case.', () => {
        expect(tripleStep(1)).toEqual(1);
        expect(tripleStep(2)).toEqual(2);
        expect(tripleStep(3)).toEqual(3);
    });

    it('should return the numSteps when n is not a base case.', () => {
        expect(tripleStep(5)).toEqual(11);
    });
});