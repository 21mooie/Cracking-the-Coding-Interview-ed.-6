const {recursiveMultiplyIter, recursiveMultiply} = require("../../Interview_Questions/chapter08/8.5recursiveMultiply");

describe('Recursive Multiply', () => {
    it('iter should be able to find the product by recursively multiplying.', () => {
        expect(recursiveMultiplyIter(8,9)).toBe(72);
    });

    it('should be able to find the product by recursively multiplying.', () => {
        expect(recursiveMultiply(8,9)).toBe(72);
    });
});