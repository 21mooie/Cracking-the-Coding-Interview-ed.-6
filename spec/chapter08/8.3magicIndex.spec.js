const magicIndex = require("../../Interview_Questions/chapter08/8.3magicIndex");

describe('Magic Index', () => {
    it('should be able to find the magic index if one exists.', () => {
        expect(magicIndex([-5, 0, 1, 2, 4, 6], 0, 5)).toBe(4);
    });

    it('should be able to tell when a magic index does not exist.', () => {
        expect(magicIndex([-5, 0, 1, 2, 5, 6], 0, 5)).toBe(false);
    });

    it('should be able to handle an array of non-distinct elements.', () => {
        expect(magicIndex([-10,-5,2,2,2,3,4,7,9,12,13], 0, 10)).toBe(2);
    });
});