
// One Away: There are three types of edits that can be performed on strings: 
// insert a character, remove a character, or replace a character. 
// Given two strings, write a function to check if they are one edit (or zero edits) away.

// Should not be implemented using a map because this will cause issues since maps can't keep track of the order of chars in string
// which will affect the answer.


// Optimal
//O(n) time complexity
const oneAway = function(s1, s2) {
    if (Math.abs(s1.length - s2.length) > 1) {
        return false;
    }
    let sLong = null, sShort = null, found = false, j = 0;
    if (s1.length >= s2.length) {
        sLong = s1, sShort = s2;
    } else {
        sLong = s2, sShort = s1;
    }
    for (let i=0; i < sLong.length; i++) {
        if (sLong[i] !== sShort[j]) {
            if (found) {
                return false;
            }
            found = true;
            if (sLong.length === sShort.length) {
                j++;
            }
        } else {
            j++;
        }
    }
    return true;
}

exports.oneAway = oneAway;