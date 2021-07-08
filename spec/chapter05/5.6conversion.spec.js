const {
    conversion,
    conversionFaster
} = require("../../Interview_Questions/chapter05/5.6conversion");

describe('Conversion', () => {
    it('should return the number of bits you would need to flip to convert a number to another.', () => {
        expect(conversion(29, 15)).toEqual(2);
    });
    it('should return the number of bits you would need to flip to convert a number to another.', () => {
        expect(conversionFaster(29, 15)).toEqual(2);
    });
});