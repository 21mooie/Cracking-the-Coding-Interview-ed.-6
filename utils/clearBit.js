const clearBit = (num, bit) => {
    let clear = 1<<bit;
    clear = ~clear;
    return num&clear;
};

module.exports = clearBit;