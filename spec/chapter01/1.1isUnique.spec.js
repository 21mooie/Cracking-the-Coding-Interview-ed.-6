const {
    isUniqueAscii, 
    isUniqueSort, 
    isUniqueMap
} = require('../../Interview_Questions/chapter01/1.1isUnique');

describe('Is Unique should find if a string is unique', () => {
    describe('by sorting the string', () => {
        it('it should handle empty strings.', () => {
            expect(isUniqueSort('')).toBe(true);
        });

        it('it should determine a unique string.', () => {
            expect(isUniqueSort('naruto')).toBe(true);
        });

        it('it should determine an ununique string.', () => {
            expect(isUniqueSort('ashura')).toBe(false);
        });
    });

    describe('by using an ASCII', () => {
        it('it should handle empty strings.', () => {
            expect(isUniqueAscii('')).toBe(true);
        });

        it('it should determine a unique string.', () => {
            expect(isUniqueAscii('naruto')).toBe(true);
        });

        it('it should determine an ununique string.', () => {
            expect(isUniqueAscii('ashura')).toBe(false);
        });
    });

    describe('by using an unordered list', () => {
        it('it should handle empty strings.', () => {
            expect(isUniqueMap('')).toBe(true);
        });

        it('it should determine a unique string.', () => {
            expect(isUniqueMap('naruto')).toBe(true);
        });

        it('it should determine an ununique string.', () => {
            expect(isUniqueMap('ashura')).toBe(false);
        });
    });
});