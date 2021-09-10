const rankFromStream = require("../../Interview_Questions/chapter10/10.10rankFromStream");

describe('Rank From Stream', () => {
    let rank;
    beforeEach(() => {
        rank = rankFromStream([5,1,4,4,5,9,7,13,3]);
    });

    it('should return the rank of 1 number when inquired.', () => {
        expect(rank.getRankOfNumber(1)).toBe(0);
    });

    it('should return the rank of 3 number when inquired.', () => {
        expect(rank.getRankOfNumber(3)).toBe(1);
    });

    it('should return the rank of 4 number when inquired.', () => {
        expect(rank.getRankOfNumber(4)).toBe(3);
    });

    it('should handle when the number is not a valid option.', () => {
        expect(rank.getRankOfNumber(6)).toBe('Not Found');
    });
});