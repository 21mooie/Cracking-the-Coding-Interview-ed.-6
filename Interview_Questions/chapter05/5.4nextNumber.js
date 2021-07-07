// Next Number: Given a positive integer, print the next smallest and the next largest number
// that have the same number of 1 bits in their binary representation.

const updateBit = require("../../updateBit");

//not a good solution
const nextNumber = (num) => {
    if((num&1) === 0){
        return [num>>1, num<<1];
    } else {
        //find rightmost 0
        let compare = 1;
        let found = false;
        let count = 0;
        while(!found){
            count++;
            compare = compare<<1;
            if((num&compare)==0){
                found = true;
            }
        }
        let less = compare;
        for(let i=0;i<count;i++){
            less = updateBit(less, i, true);
        }
        //need to figure for larger
        return [less, 13]
    }
};

const nextNumberBruteForce = null;


module.exports = nextNumber;