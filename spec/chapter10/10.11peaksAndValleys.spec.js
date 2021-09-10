const peaksAndValleys = require("../../Interview_Questions/chapter10/10.11peaksAndValleys");

describe('Peaks And Valleys', () => {
    it('should sort the array into its peaks and valleys.', () => {
        expect(peaksAndValleys([5, 3, 1,2, 3])).toEqual([ 2, 1, 3, 3, 5 ]);
    });
});