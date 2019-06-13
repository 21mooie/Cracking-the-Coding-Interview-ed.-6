
// One Away: There are three types of edits that can be performed on strings: 
// insert a character, remove a character, or replace a character. 
// Given two strings, write a function to check if they are one edit (or zero edits) away.

var oneAway = function(str1, str2) {
    if (Math.abs(str1.length - str2.length) > 1) {
        return false;
    }
    let shorterArray = str1.length <= str2.length ? str1.split(''): str2.split('');
    let longerArray = str1.length > str2.length ? str1.split(''): str2.split('');
    let map = new Map();
    shorterArray.forEach(element => {
        if(map.has(element)) {
            map.set(element, map.get(element)+1);
        }
        else {
            map.set(element, 0);
        }
    });
    longerArray.forEach(element => {
        if (map.has(element)) {
            if(map.get(element) === 0) {
                map.delete(element);
            }
            else {
                map.set(element, map.get(element)-1);
            }
        }
    });
    return map.size === 0 || map.size === 1;
}


//tomorrow implement without using map
// O(n) time and space because linearly look through the array of strings
var oneAway2 = function(string1, string2) {
    const diff = Math.abs(string1.length - string2.length);
    if (diff > 1) {
        return false;
    }
    string1 = string1.split('');
    string2 = string2.split('');
    const differentLengths = diff === 1 ? true : false;
    const longer = string1.length >= string2.length ? string1 : string2;
    const shorter = string1.length < string2.length ? string1 : string2;
    let shortIdx = 0, longIdx = 0;
    let diffFound = false;
    while (shortIdx < shorter.length && longIdx < longer.length) {
        if (shorter[shortIdx] !== longer[longIdx]) {
            if (diffFound){
                return false;
            }
            diffFound = true;
            if (differentLenghts) {
                longIdx++;
            }
        }
        shortIdx++;
        longIdx++;
    }
    return longIdx === longer.length;
}

console.log(oneAway2('pae', 'pabe'));
console.log(oneAway2('pace', 'pabe'));
console.log(oneAway2('pabe', 'pae'));
console.log(oneAway2('pab', 'pae'));