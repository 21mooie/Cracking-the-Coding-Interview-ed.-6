
// URLify: Write a method to replace all spaces in a string with '%20: 
// You may assume that the string has sufficient space at the end to hold the additional characters, 
// and that you are given the "true" length of the string. 
// (Note: If implementing in Java, please use a character array so that you can perform this operation in place.)

// O(n) time complexity and O(n) space complexity
var URLifyJS = function (str) {
    return str.split('').map(x => {return x === ' ' ? '%20': x;}).join('');
}

// O(n) time and space complexity
// length variable is the length of the string to its last non space character
var URLifyBackwards = function (str, length) {
    let str_array = str.split('');
    let index = str_array.length-1;
    for (let i = length - 1 ; i >= 0; i--) {
        if (str_array[i] === ' '){
            str_array[index] = '0';
            str_array[index-1] = '2';
            str_array[index-2] = '%';
            index = index - 2;
        }
        else {
            str_array[index] = str_array[i];
        }
        index = index - 1;
    }
    return str_array.join('');
}

// O(n) time complexity with in place space complexity so no extra memory usage
var URLify = function (charArray, length) {
    if (charArray.length + 1 === length) return charArray;
    let finalIdx = charArray.length-1;
    let currIdx = length-1;
    while (finalIdx > currIdx) {
        if (charArray[currIdx] === ' ') {
            charArray[finalIdx] = '0';
            charArray[finalIdx-1] = '2';
            charArray[finalIdx-2] = '%';
            finalIdx -= 3;
        } else {
            charArray[finalIdx] = charArray[currIdx];
            finalIdx -=1;
        } 
        currIdx-=1;
    }
    return charArray;
}

exports.URLifyJS = URLifyJS;
exports.URLifyBackwards = URLifyBackwards;
exports.URLify = URLify;