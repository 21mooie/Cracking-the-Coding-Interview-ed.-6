const { oneAway } = require('../../Interview_Questions/chapter01/1.5oneAway');

describe('One Away', () => {
    let s1;
    beforeAll(() => {
        s1 = 'pale';
    });
    describe(('linear'), () => {
        it('should test that a string with one character removed pass test.', () => {
            const s2 = 'ple';
            expect(oneAway(s1, s2)).toBe(true); 
        });
        it('should test that a string with one character added pass test.', () => {
            const s2 = 'paale';
            expect(oneAway(s1, s2)).toBe(true); 
        });
        it('should test that a string with one character modified pass test.', () => {
            const s2 = 'pble';
            expect(oneAway(s1, s2)).toBe(true); 
        });
        it('should test that a string with multiple modifictaions fail test.', () => {
            const s2 = 'plbe';
            expect(oneAway(s1, s2)).toBe(false); 
        });
        it('should test strings of different lengths.', () => {
            const s2 = 'paaaaaaaale';
            expect(oneAway(s1,s2)).toBe(false);
        });
    });
});