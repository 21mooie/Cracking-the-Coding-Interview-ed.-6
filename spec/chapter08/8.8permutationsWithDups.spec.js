const permutationsWithDups = require("../../Interview_Questions/chapter08/8.8permutationsWithDups");

describe('Permutations With Duplicates', () => {
    it('should return all the permutations without duplicates.', () => {
        expect(permutationsWithDups('abca')).toEqual([
            'abca', 'baca',
            'bcaa', 'acba',
            'caba', 'cbaa',
            'acab', 'caab',
            'abac', 'baac',
            'aabc', 'aacb'
          ]);
    });
});