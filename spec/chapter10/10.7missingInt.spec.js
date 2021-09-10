const missingInt = require("../../Interview_Questions/chapter10/10.7missingInt");

xdescribe('Missing Int', () => {
    it('should be able to generate a number not contained in file.', () => {
        let file = [];
        for (let i=0; i<=100; i++){
            file.push(i);
        }
        expect(missingInt(file)).toBeGreaterThan(100);
    });
});