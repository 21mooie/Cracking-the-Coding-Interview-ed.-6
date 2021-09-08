const sortedMatrixSearch = require("../../Interview_Questions/chapter10/10.9sortedMatrixSearch");

describe('Sorted Matrix Search', () => {
    it('should be able to find an element in a sorted M x N matrix.', () => {
        const matrix = [
            [
                1, 2, 3, 4, 5
            ],
            [
                7,9,10,12,13
            ],
            [
                15,18,19,20,21
            ],
            [
                23,24,25,28,30
            ]
        ];
        expect(sortedMatrixSearch(matrix, 19)).toEqual([2,2]);
    });
    it('should work when the entire array is not increasing.', () => {
        const matrix = [
            [
                1,7,15,23
            ],
            [
                2,9,18,24
            ],
            [
                3,10,19,25
            ],
            [
                4,12,20,28
            ],
            [
                5,13,21,30
            ]
        ];
        expect(sortedMatrixSearch(matrix, 24)).toEqual([1,3]);
    });
});