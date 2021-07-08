const pairwiseSwap = require("../../Interview_Questions/chapter05/5.7pairwiseSwap");

describe('Pairwise Swap', () => {
    it('should swap the bits in a number.', () => {
        expect(pairwiseSwap(10)).toEqual(5);
    });
});