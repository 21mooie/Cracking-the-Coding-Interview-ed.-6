const stackOfBoxes = require("../../Interview_Questions/chapter08/8.13stackOfBoxes");

describe('Stack of Boxes', () => {
    it('should return the height of the tallest stack of boxes.', () => {
        const boxes = [
            {
                height: 2,
                width: 2,
                depth: 2
            },
            {
                height: 5,
                width: 5,
                depth: 5
            },
            {
                height: 3,
                width: 3,
                depth: 3
            },
            {
                height: 1,
                width: 1,
                depth: 1
            },
            {
                height: 4,
                width: 4,
                depth: 4
            },
        ];
        expect(stackOfBoxes(boxes)).toBe(15);
    });
});