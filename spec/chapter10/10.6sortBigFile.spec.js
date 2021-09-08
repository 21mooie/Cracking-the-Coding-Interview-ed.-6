const sortBigFile = require("../../Interview_Questions/chapter10/10.6sortBigFile");

describe('Sort Big File', () => {
    it('will sort a large file properly.', () => {
        expect(sortBigFile(['c', 'a', 'h', 'b', 'd', 'z', 'r'])).toEqual(['a','b','c', 'd', 'h', 'r', 'z']);
    });
});