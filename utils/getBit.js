const getBit = (num, loc) => {
    return (num & (1<<loc)) !== 0;
}

module.exports = getBit;