const { URLifyJS, URLifyBackwards, URLify } = require('../../Interview_Questions/chapter01/1.3URLify');
 
describe('URLify', () => {
    it('should replace all spaces in string with %20', () => {
        const val = ["M", "r", " ", "J", "o", "h", "n", " ", "S", "m", "i", "t", "h", " ", " ", " ", " "];
        const val2 = ["M", "r", "%", "2", "0", "J", "o", "h", "n", "%", "2", "0", "S", "m", "i", "t", "h"];
        expect(URLify(val, 13)).toEqual(val2);
    });

    it('should not replace characters without spaces', () => {
        const val = ["n", "o", "_", "s", "p", "a", "c", "e", "s"];
        expect(URLify(val, 9)).toEqual(val);
    });

    it('should use javascript to solve in one liner.', () => {
        expect(URLifyJS('hel lo')).toEqual('hel%20lo');
    });

    it('should use the backwards implementation to also solve this.', () => {
        expect(URLifyBackwards('Mr John Smith    ', 13)).toEqual('Mr%20John%20Smith');
    });
}); 