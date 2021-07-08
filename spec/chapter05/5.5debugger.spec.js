const debug = require("../../Interview_Questions/chapter05/5.5debugger");

describe('Debugger', () => {
    it('should return true for 4.', () => {
        expect(debug(0b100)).toBe(true);
    });

    it('should return false for 5.', () => {
        expect(debug(0b101)).toBe(false);
    });
});