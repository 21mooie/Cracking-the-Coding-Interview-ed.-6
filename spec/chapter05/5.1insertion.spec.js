const insertion = require("../../Interview_Questions/chapter05/5.1insertion");

describe('Insertion', () => {
    it('should be able to insert M into N at indexes i & j.', () => {
        const n = 0b10000000000;
        const m = 0b10011;
        const i = 2;
        const j = 6;
        expect(insertion(n, m, i, j)).toEqual(0b10001001100);
    });
    it('should be able to insert M into N at indexes i & j again.', () => {
        const n = 0b10000111000;
        const m = 0b100;
        const i = 3;
        const j = 5;
        expect(insertion(n, m, i, j)).toEqual(0b10000100000);
    });
});