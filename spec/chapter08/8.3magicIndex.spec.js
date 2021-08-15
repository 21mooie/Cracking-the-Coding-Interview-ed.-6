const magicIndexDistict = require("../../Interview_Questions/chapter08/8.3magicIndex");

describe('Magic Index', () => {
    it('should be able to find the magic index if one exists.', () => {
        expect(magicIndexDistict([-5, 0, 1, 2, 4, 6])).toBe(4);
    });

    it('should be able to tell when a magic index does not exist.', () => {
        expect(magicIndexDistict([-5, 0, 1, 2, 5, 6])).toBe(false);
    });
});