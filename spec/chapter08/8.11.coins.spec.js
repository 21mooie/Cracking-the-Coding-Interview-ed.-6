const {naiveCoins, memoCoins} = require("../../Interview_Questions/chapter08/8.11coins");

describe('Coins', () => {
    it('should return the number of ways to generate the given coin amount.', () => {
        expect(naiveCoins(10)).toEqual(4);
    });
    it('should return the number of ways to generate the given coin amount when memoized.', () => {
        expect(memoCoins(10)).toEqual(4);
    });
});