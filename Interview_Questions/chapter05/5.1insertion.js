// Insertion: You are given two 32-bit numbers, N and M, and two bit positions, i and j.
// Write a method to insert Minto N such that M starts at bit j and ends at bit i.
// You can assume that the bits j through i have enough space to fit all of M.
// That is, if M= 10011, you can assume that there are at least 5 bits between j and i.
// You would not, for example, have j = 3 and i = 2,
// because Mcould not fully fit between bit 3 and bit 2.

const clearBit = require("../../utils/clearBit");

const insertion = (n, m, i, j) => {
    for (let x=i; x<j+1;x++){
        n = clearBit(n, x);
    }
    m = m << i;
    return n|m;
};

const insertionWithMask = null;

module.exports = insertion;