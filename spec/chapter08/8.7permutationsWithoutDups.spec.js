const permutationsWithoutDups = require("../../Interview_Questions/chapter08/8.7permutationsWithoutDups");

describe('PermutationsWithoutDups', () => {
    it('will generate all permutations of a string.', () => {
        expect(permutationsWithoutDups('abc')).toEqual([ 'abc', 'bac', 'bca', 'acb', 'cab', 'cba' ]);
    });
});