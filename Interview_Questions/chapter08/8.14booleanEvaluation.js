// Boolean Evaluation: Given a boolean expression consisting of the symbols 0 (false), 1 (true),
// & (AND), | (OR), and ^ (XOR), and a desired boolean result value result,
// implement a function to count the number of ways of
// parenthesizing the expression such that it evaluates to result.

const booleanEvaluate = (string, result) => {
    function stringToBool(s){
        return s === '1';
    }

    if(string.length === 0){
        return 0;
    }
    if(string.length === 1){
        return stringToBool(string) === result ? 1 : 0;
    }
    let ways = 0;
    for (let i = 1; i<string.length; i+=2){
        let c = string.charAt(i);
        let left = string.substring(0, i);
        let right = string.substring(i+1);
        let leftTrue = booleanEvaluate(left, true);
        let leftFalse = booleanEvaluate(left, false);
        let rightTrue = booleanEvaluate(right, true);
        let rightFalse = booleanEvaluate(right, false);
        let total = (leftTrue + leftFalse) * (rightTrue + rightFalse);
        let totalTrue = 0;
        if(c === '^'){
            totalTrue = leftTrue * rightFalse + leftFalse * rightTrue;
        } else if(c === '&'){
            totalTrue = leftTrue * rightTrue;
        } else if(c === '|'){
            totalTrue = leftTrue * rightTrue + leftFalse * rightTrue + leftTrue * rightFalse;
        }
        let subWays = result ? totalTrue : total - totalTrue;
        ways += subWays;
    }
    return ways;
};

module.exports = booleanEvaluate;