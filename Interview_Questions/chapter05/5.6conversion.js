// Conversion: Write a function to determine the number of bits you would need to flip to convert
// integer A to integer B.

const getBit = require("../../utils/getBit");

const conversion = (num1, num2) => {
    let num3 = num1^num2;
    let count = 0;
    while(num3!==0){
        if(getBit(num3, 0)){
            count++;
        }
        num3 = num3>>>1;
    }
    return count;
}

const conversionFaster = (num1, num2) => {
    let num3 = num1^num2;
    let count = 0;
    while(num3!=0){
        count++;
        num3=num3&(num3-1);
    }
    return count;
}

exports.conversion = conversion;
exports.conversionFaster = conversionFaster;