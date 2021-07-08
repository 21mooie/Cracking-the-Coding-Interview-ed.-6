// Pairwise Swap: Write a program to swap odd and even bits in an integer
// with as few instructions as possible (e.g., bit 0 and bit 1 are swapped,
// bit 2 and bit 3 are swapped, and so on).

const pairwiseSwap = (num) => {
    // use 01010101 to and with num to get even

    let even = num&0b01010101010101010101010101010101;
    // use 10101010 to and with num to get odd
    let odd = num&0b10101010101010101010101010101010;
    even = even<<1;
    odd = odd>>>1;
    return even|odd;
};

module.exports = pairwiseSwap;