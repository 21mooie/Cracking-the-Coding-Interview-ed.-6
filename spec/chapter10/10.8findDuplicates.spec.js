const findDuplicates = require("../../Interview_Questions/chapter10/10.8findDuplicates");

xdescribe('Find Duplicates', () => {
    it('should return the duplicates in the array.', () => {
        let array = [100, 100, 101, 103, 104, 103, 105, 106, 107, 110];
        findDuplicates(array);
    });
});