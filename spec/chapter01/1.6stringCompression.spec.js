const stringComp = require('../../Interview_Questions/chapter01/1.6stringCompression');

describe('String compression', () => {
    it('should compress the string.', () => {
        const string = 'aabcccccaaa';
        expect(stringComp(string)).toBe('a2b1c5a3');
    });
    it('should handle empty string.', () => {
        const string = '';
        expect(stringComp(string)).toBe('');
    });
    it('should return the original string.', () => {
        const string = 'aabcaaa';
        expect(stringComp(string)).toBe('aabcaaa');
    });

});