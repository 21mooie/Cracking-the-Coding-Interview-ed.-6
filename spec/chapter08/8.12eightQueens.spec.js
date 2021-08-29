const eightQueens = require("../../Interview_Questions/chapter08/8.12eightQueens");

describe('Eight Queens', () => {
    it('should return all the ways of arranging queens on an eight by eight chessboard.', () => {
        expect(eightQueens()).toEqual(92);
    });
});