const sparseSearch = require("../../Interview_Questions/chapter10/10.5sparseSearch");

describe('Sparse search', () => {
    it('will return the index of a string in an array interspersed with empty strings.', () => {
        expect(sparseSearch(['at', '', '', '', 'ball', '', '', 'car', '', '', 'dad', '' , ''], 'ball')).toBe(4);
    });

    it('will return -1 when the string is not found.', () => {
        expect(sparseSearch(['at', '', '', '', 'ball', '', '', 'car', '', '', 'dad', '' , ''], 'catch')).toBe(-1);
    });
});

