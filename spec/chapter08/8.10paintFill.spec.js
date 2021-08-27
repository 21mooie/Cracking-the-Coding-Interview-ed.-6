const floodFill = require("../../Interview_Questions/chapter08/8.10paintFill");

describe('Paint Fill', () => {
    it('should change the colors of the neighboring color to match the new color.', () => {
        expect(floodFill([
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 0, 0],
            [1, 0, 0, 1, 1, 0, 1, 1],
            [1, 2, 2, 2, 2, 0, 1, 0],
            [1, 1, 1, 2, 2, 0, 1, 0],
            [1, 1, 1, 2, 2, 2, 2, 0],
            [1, 1, 1, 1, 1, 2, 1, 1],
            [1, 1, 1, 1, 1, 2, 2, 1],
          ], 4, 4, 3)).toEqual(
            [[1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 0, 0],
            [1, 0, 0, 1, 1, 0, 1, 1],
            [1, 3, 3, 3, 3, 0, 1, 0],
            [1, 1, 1, 3, 3, 0, 1, 0],
            [1, 1, 1, 3, 3, 3, 3, 0],
            [1, 1, 1, 1, 1, 3, 1, 1],
            [1, 1, 1, 1, 1, 3, 3, 1]
            ]);
    });
});