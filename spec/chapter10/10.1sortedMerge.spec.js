const {insertionSort, sortedMerge} = require("../../Interview_Questions/chapter10/10.1sortedMerge");

describe('Sorted Merge', () => {
    describe(('uses insertion sort and') , () => {
        it('should sort the a and b arrays.', () => {
            expect(insertionSort([1, 3, 5, 7, , , ,], [2, 4, 6])).toEqual([1,2,3,4,5,6,7]);
        });
    
        it('should sort the a and b arrays again.', () => {
            expect(insertionSort([4, 8, 12, 13, , , ,], [2, 4, 6])).toEqual([2, 4, 4, 6, 8, 12, 13]);
        });
    });

    it('should sort the a and b arrays.', () => {
        expect(sortedMerge([1, 3, 5, 7, , , ,], [2, 4, 6])).toEqual([1,2,3,4,5,6,7]);
    });

    it('should sort the a and b arrays again.', () => {
        expect(sortedMerge([4, 8, 12, 13, , , ,], [2, 4, 6])).toEqual([2, 4, 4, 6, 8, 12, 13]);
    });
});