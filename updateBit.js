const updateBit = (num, pos, is1) => {
    let val = is1 ? 1 : 0;
    let mask = ~(1<<pos);
    let numMask = num&mask;
    return numMask | (val << pos);
};

module.exports = updateBit;