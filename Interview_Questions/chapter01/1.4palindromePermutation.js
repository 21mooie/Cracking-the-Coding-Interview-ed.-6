// Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palindrome. 
// A palindrome is a word or phrase that is the same forwards and backwards. 
// A permutation is a rearrangement of letters.The palindrome does not need to be limited to just dictionary words.
// EXAMPLE
// Input: Tact Coa
// Output: True (permutations: "taco cat". "atco cta". etc.)

// O(nlogn) sort and then search adjacent chars for identicality
const palindromePermSort = function(string) {
  string = string.toLowerCase().split('').filter(i => i !== ' ').sort().join('');
  let oddCharPresent = true;
  for (let i=0; i<string.length-1; i+=2) {
    if (string[i] !== string[i+1]) {
      if (oddCharPresent) {
        oddCharPresent = false;
        i -= 1;
      } else {
        return false;
      }
    }
  }
  return true;
}

// O(n) time complexity O(n) space complexity
const palindromePermMap = function(string) {
  string = string.toLowerCase().split('').filter(i => i !== ' ').join('');
  const map = new Map();
  for (let char of string) {
    if (map.get(char)) {
      map.delete(char);
    } else {
      map.set(char, 1);
    }
  }
  return map.size <= 1 ? true : false;
}

// O(n) time complexity O(n) space but less kind of
// not real bitwise version, so need to revisit to implement forreal
const palindromePermBit = function(string) {
  string = string.toLowerCase().split('').filter(i => i !== ' ').join('');
  const bitArray = new Array(26).fill(false);
  let oddCount = 0;
  for (let char of string) {
    const idx = char.charCodeAt(0)-97;
    if (bitArray[idx]) {
      bitArray[idx] = false;
      oddCount -= 1;
    } else {
      bitArray[idx] = true;
      oddCount += 1;
    }
  }
  return oddCount <= 1;
}

exports.palindromePermSort = palindromePermSort;
exports.palindromePermMap = palindromePermMap;
exports.palindromePermBit = palindromePermBit;
