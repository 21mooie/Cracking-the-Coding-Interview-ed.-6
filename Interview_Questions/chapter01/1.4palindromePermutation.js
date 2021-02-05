// Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palindrome. 
// A palindrome is a word or phrase that is the same forwards and backwards. 
// A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.

// O(n) time complexity O(n) space complexity
var palindromePermutation = function(x) {
    let map = new Map();
    x = x.toLowerCase().split('');
    x.forEach(element => {
        if (element !== ' ') {
            if (map.has(element)){
                map.delete(element);
            }
            else {
                map.set(element, 0);
            }
        }
    });
    return map.size === 0 || map.size === 1;
}

var palinPerm = function(string) {
    // create object literal to store charcount
    var chars = {};
    var currChar;
    var mulligan = false;
    var isPerm = true;
    // pump characters in, spaces not counted, all lowercase
    string.split('').forEach((char) => {
      if (char !== ' ') {
        currChar = char.toLowerCase();
        if (chars[currChar] === undefined) {
          chars[currChar] = 0;
        }
        chars[currChar]++;
      }
    });
    // check that all chars are even count, except for one exception
    Object.keys(chars).forEach((char) => {
      if (chars[char] % 2 > 0) {
      // if more than one exception, return false
        if (mulligan) {
          isPerm = false; // return in a forEach statment doesn't flow out of function scope
        } else {
          mulligan = true;
        }
      }
    });
    // if not return true
    return isPerm;
  };

console.log(palindromePermutation('Tact Coa'))
console.log(palindromePermutation('hello'))
console.log(palindromePermutation('racecar'))