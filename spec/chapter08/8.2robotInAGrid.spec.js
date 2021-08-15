const robotInAGrid = require("../../Interview_Questions/chapter08/8.2robotInAGrid");

describe('Robot in a grid', () => {
    it('should be able to find a path from the entrance to the exit of the grid.', () => {
        const grid = [
            [0,0,0],
            [1,1,0],
            [1,1,0]
        ];
        expect(robotInAGrid(grid)).toEqual([[0,0], [0,1], [0,2], [1,2], [2,2]]);
    });

    it('should be able to know when there is not a path from the entrance to the exit of a grid.', () => {
        const grid = [
            [0,0,0],
            [1,1,1],
            [1,1,0]
        ];
        expect(robotInAGrid(grid)).toEqual(false);
    });
});