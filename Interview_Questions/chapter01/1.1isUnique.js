// Is Unique: Implement an algorithm to determine if a string has all unique characters.
//  What if you cannot use additional data structures?

//Big O(nlogn) because of sorting
var isUniqueSort = function(x){
    x = x.split('').sort();
    for (let i = 0; i < x.length-1; i++) {
      if (x[i] === x[i+1]) {
        return false;
      }
    }
    return true;
  }
  
  //Solution for string with only ascii chars
  var isUniqueAscii = function(x) {
    let array = [];
    for(let i=0; i< 256; i++) {
      array.push(false);
    }
    for (let i=0; i < x.length; i++) {
      let ascii_num = x.charCodeAt(i);
      if(array[ascii_num] === true){
        return false;
      }
      array[ascii_num] = true;
    }
    return true;
  }

  //Solution with maps
  var isUniqueMap = function(x) {
    let map = {};
    for (let char of x) {
      if (map[char]) {
        return false;
      } else {
        map[char] = char;
      }
    }
    return true;
  }
  
exports.isUniqueSort = isUniqueSort;
exports.isUniqueAscii = isUniqueAscii;
exports.isUniqueMap = isUniqueMap;
  