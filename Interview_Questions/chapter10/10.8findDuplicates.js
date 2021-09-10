// Find Duplicates: You have an array with all the numbers from 1 to N, where Nis at most 32,000.
// The array may have duplicate entries and you do not know what N is.
// With only 4 kilobytes of memory available, how would you print all duplicate elements in the array?

const findDuplicates = (array) => {
    let bitArray = new Array(Number.MAX_SAFE_INTEGER/8);
    let set = new Set();
    for(let num of array){
        const loc = Math.floor(num/8);
        bitArray[loc] = 1 << (num%8);
    }
};

module.exports = findDuplicates;