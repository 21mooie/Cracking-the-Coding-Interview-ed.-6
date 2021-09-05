const listy = require("../../Interview_Questions/chapter10/10.4sortedSearchNoSize");

describe('Sorted Search, No Size', () => {
    it('will return the index at which element x occurs.', () => {
        expect(listy([1,2,4,5,6,8,9,10,13,14], 9)).toBe(6);
    });
});