// String Compression: Implement a method to perform basic string compression using the counts of repeated characters. 
// For example, the string aabcccccaaa would become a2b1c5a3. 
// If the "compressed" string would not become smaller than the original string, 
// your method should return the original string. You can assume the string has only uppercase and lowercase letters (a - z).

// O(n) time and space complexity
var stringCompression = (value) => {
    let value2 = [];
    value = value.split('');
    let last = value[0], count =  1;
    for (let i = 1; i < value.length; i++) {
        if (value[i] === last){
            count++;
        }
        else {
            value2.push(last);
            value2.push(count);
            last = value[i];
            count = 1;
        }
    }
    value2.push(last);
    value2.push(count);
    return value2.length < value.length ?  value2.join('') : value.join('');
}

// shorter way to do it
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

//try to write function that figures out if it is worth doing string compression without making string
var stringCompression3 = (value) => {
    let countConsecutive = 0, compressedCount = 0;
    for (let i=0; i < value.length-1; i++) {
        countConsecutive++;
        if (value[i] != value[i+1]) {
            compressedCount += 1 + (countConsecutive + '').length;
            countConseecutive = 0;
        }
    }
    if (value.length < compressedCount){
        return value;
    }
    return stringCompression2(value);
}

console.log(stringCompression3('aabcccccaaa'));
console.log(stringCompression3('abcd'));
console.log(stringCompression3('bbbaabbbbbcccddddddddz'));