const {
    palindromePermSort,
    palindromePermMap,
    palindromePermBit
} = require('../../Interview_Questions/chapter01/1.4palindromePermutation');

describe('Palindrome Permutation', () => {
    describe('sort', () => {
        it('should return true for a permutation of palindrome.', () => {
            expect(palindromePermSort('Tact Coa')).toEqual(true);
        });
        it('should handle empty strings.', () => {
            expect(palindromePermSort('')).toEqual(true);
        });
        it('should return false for non palindrome permutation strings.', () => {
            expect(palindromePermSort('woah  d doggy')).toEqual(false);
        });
    });

    describe('map', () => {
        it('should return true for a permutation of palindrome.', () => {
            expect(palindromePermMap('Tact Coa')).toEqual(true);
        });
        it('should handle empty strings.', () => {
            expect(palindromePermMap('')).toEqual(true);
        });
        it('should return false for non palindrome permutation strings.', () => {
            expect(palindromePermMap('woah  d doggy')).toEqual(false);
        });
    });

    describe('bitwise', () => {
        it('should return true for a permutation of palindrome.', () => {
            expect(palindromePermBit('Tact Coa')).toEqual(true);
        });
        it('should handle empty strings.', () => {
            expect(palindromePermBit('')).toEqual(true);
        });
        it('should return false for non palindrome permutation strings.', () => {
            expect(palindromePermBit('woah  d doggy')).toEqual(false);
        });
    }); 
});