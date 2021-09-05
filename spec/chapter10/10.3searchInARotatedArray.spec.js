const search = require("../../Interview_Questions/chapter10/10.3searchInARotatedArray");

describe('Search In A Rotated Array', () => {
    it('should be able to search in a rotated array.', () => {
        expect(search([15, 16, 19, 20, 25, 1, 3 ,4 ,5 ,7 , 10, 14], 5)).toBe(8);
    });

    it('should return -1 when searching an array without the value.', () => {
        expect(search([15, 16, 19, 20, 25, 1, 3 ,4 ,5 ,7 , 10, 14], 6)).toBe(-1);
    });

    // it('should find when having duplicates.', () => {
    //     expect(search([2, 2, 2, 3, 4, 2], 4)).toBe(4);
    // });

    
});