
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

console.log(oneAway('paae', 'pabe'));