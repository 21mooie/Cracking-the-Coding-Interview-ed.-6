// String Compression: Implement a method to perform basic string compression using the counts of repeated characters. 
// For example, the string aabcccccaaa would become a2b1c5a3. 
// If the "compressed" string would not become smaller than the original string, 
// your method should return the original string. You can assume the string has only uppercase and lowercase letters (a - z).

// Implementation with for loop
var stringCompression2 = (value) => {
    let value2 = [];
    value = value.split('');
    let count =  0;
    for (let i = 0; i < value.length; i++) {
        count++;
        if (i < value.length && value[i] != value[i + 1]){
            value2.push(value[i]);
            value2.push(count);
            count = 0;
        }
    }
    return value2.length < value.length ?  value2.join('') : value.join('');
}

// Implementation O(n)
const stringComp = string => {
    let ans = '', idx = 0;
    while (idx < string.length) {
        let sameCharIdx = idx;
        let count = 1;
        while (sameCharIdx < string.length && string[sameCharIdx] === string[idx]) {
            sameCharIdx++;
            count++;
        }
        ans += `${string[idx]}${count-1}`;
        idx=sameCharIdx;
    }
    return ans.length < string.length ? ans : string;
}

// Get count of compression string first before making. Will require an additional
// iteration through string
const countCompress = string => {
    let compressed = 0, count = 0;
    for (let i = 0; i < string.length; i++) {
        count++;
        if (string[i] !== string[i+1]) {
            compressed += 1 + count.toString().length;
            count = 0;
        }
    }
    return compressed;
}


const decideToCompress = string => {
    if (countCompress(string) < string.length) {
        return stringComp(string);
    }
    return string;
}

module.exports = stringComp;