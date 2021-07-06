const flipBitToWin = require("../../Interview_Questions/chapter05/5.3flipBitToWin");

describe('Flip Bit to Win', () => {
    it('should return the length of the longest sequence of 1s to be created.', () => {
        expect(flipBitToWin(0b11011101111)).toEqual(8)
    });
});