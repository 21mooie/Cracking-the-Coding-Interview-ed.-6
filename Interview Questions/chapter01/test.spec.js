var hello = 5;

describe('Hello World Server ', () => {
    it('should equal one', () => {
        expect(1).toBe(1);
    });
    it('should not equal one', () => {
        expect(1).toBeLessThan(2);
    });
    it('should not equal hello', () => {
        expect(1).toBe(hello);
    })
});