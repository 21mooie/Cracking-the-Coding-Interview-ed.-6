const binaryToString = require("../../Interview_Questions/chapter05/5.2binaryToString");

describe('Binary To String', () => {
    it('should return ERROR if the number is too long to represent with 32 characters.', () => {
        expect(binaryToString(.72)).toEqual('ERROR');
    });
    it('should return correct value when given a number which can be accurately represented.', () => {
        expect(binaryToString(.625)).toEqual('.101');
    });
});