const groupAnagrams = require("../../Interview_Questions/chapter10/10.2groupAnagrams");

describe('Group Anagrams', () => {
    it('should sort anagrams next to one another.', () => {
        expect(groupAnagrams(['cat', 'bar', 'a', 'abr', 'tac'])).toEqual([ 'cat', 'tac', 'bar', 'abr', 'a' ]);
    });
});