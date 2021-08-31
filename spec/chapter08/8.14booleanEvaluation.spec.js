const booleanEvaluate = require("../../Interview_Questions/chapter08/8.14booleanEvaluation");

fdescribe('Boolean Evaluation', () => {
    it('should be able to find the number of ways to add parenthesis to get the corresponding value.', () => {
        console.log(booleanEvaluate("1^0|0|1", false));
    });
});
