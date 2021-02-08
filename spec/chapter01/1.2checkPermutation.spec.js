const {checkPermutationSort} = require('../../Interview_Questions/chapter01/1.2checkPermutation');

describe('Check Permutation', () => {
    it('should check if words are permutations of one another.', () => {
        const val1 = 'abc';
        const val2 = 'bca';
        expect(checkPermutationSort(val1, val2)).toBe(true);
    });

    it('should return true are permutations of one another.', () => {
        const val1 = '';
        const val2 = '';
        expect(checkPermutationSort(val1, val2)).toBe(true);
    });

    it('should say when words are not permutations of one another.', () => {
        const val1 = 'abcd';
        const val2 = 'bca';
        expect(checkPermutationSort(val1, val2)).toBe(false);
    });
});