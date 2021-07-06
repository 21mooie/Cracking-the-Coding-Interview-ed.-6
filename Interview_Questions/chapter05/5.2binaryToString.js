// Binary to String: Given a real number between 0 and 1 (e.g., 0.72)
// that is passed in as a double, print the binary representation.
// Ifthe number cannot be represented accurately in binary with at most 32 characters,
// print "ERROR:'

const binaryToString = (num) => {
    let binary = '.';
    let frac = .5;
    while(num>0){
        if(binary.length>32){
            return 'ERROR';
        }
        let ans = Math.floor(num/frac);
        binary+=ans;
        if(ans>=1){
            num-=frac;
        }
        frac = frac/2;
    }
    return binary;
}

module.exports = binaryToString;