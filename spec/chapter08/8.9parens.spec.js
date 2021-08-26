const {parens, parensOther} = require("../../Interview_Questions/chapter08/8.9parens");

describe('Parens', () => {
    it('should calculate all the valid combinations of parenthesis.', () => {
        expect(parens(3)).toEqual([ '()()()', '(()())', '()(())', '((()))', '(())()' ]);
    });
    it('should calculate all the valid combinations of parenthesis by building the string .', () => {
        expect(parensOther(3)).toEqual([ '((()))', '(()())', '(())()', '()(())', '()()()' ]);
    });
    
});