const nextNumber = require("../../Interview_Questions/chapter05/5.4nextNumber");

describe('Next Number', () => {
    it('should return the next biggest and next smallest numbers with the same number of 1s.', () => {
        const num = 0b1011;
        expect(nextNumber(num)).toEqual([0b111, 0b1101]);
    });
    it('should return the next biggest and next smallest numbers with the same number of 1s.', () => {
        const num = 0b100;
        expect(nextNumber(num)).toEqual([0b10, 0b1000]);
    });
});