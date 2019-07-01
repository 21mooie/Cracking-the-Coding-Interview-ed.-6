// String Rotation: Assume you have a method isSubstring 
// which checks if one word is a substring of another. 
// Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring 
// (e.g., waterbottle a rotation erbottlewat).

// O(n) time complexity because checking substring can be done in linear time
// This is solved like this because if string1 and string2 are rotations of one another there exists a sequence of characters
// such that xy = s1 and yx = s2. By concatenating s2, you are creating a string yxyxy. xy is a substring of yxyx.
// Thus, when you call substring of s1 on s2 concatenated, you'll find if s1 is contained. If this is true then they are rotations
var stringRotation = (string1, string2) => {
    string2 = string2.concat(string2);
    return string2.includes(string1) && string1.length === string2.length/2;
};

describe('String Rotation', () => {
    it('should tell when strings are rotated.', () => {
        expect(stringRotation('waterbottle', 'erbottlewat')).toBe(true);
    });

    it('should tell when strings are not rotated', () => {
        expect(stringRotation('hello', 'world')).toBe(false);
    });
});