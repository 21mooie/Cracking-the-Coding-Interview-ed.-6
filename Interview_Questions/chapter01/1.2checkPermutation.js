// Check Permutation: Given two strings, write a method to decide if one is a permutation of the other.


// O(nlogn) because both functions are sorting the words before comparing
var checkPermutationSort = function(x, y) {
    x = x.split('').sort().join('');
    y = y.split('').sort().join('');
    return x === y;
}

// O(n) time complexity since it iterates through the strings but O(n) space complexity as well since they are
// then stored in another data structure
var checkPermutationMap = function(x, y) {
    let object = new Map();
    x = x.split('');
    x.forEach(element => {
      if (object.get(element)) {
          object.set(element, object.get(element) +1);
      }
      else {
          object.set(element, 1);
      }
    });
    y=y.split('');
    for (let i = 0; i< y.length; i++) {
        let element = y[i];
        if (!object.has(element)) {
            return false;
        }
        else {
            if (object.get(element) === 1) {
                object.delete(element);
            }
            else {
                object.set(element, object.get(element)-1);
            }
        }
    }
    return object.size === 0;
}

// how to do it with javascript object as map. same time complexities as previous
// much more idiosyncrisies and makes complexity

// may come back and write fourth version of method where instead of deleting the property, set it to a diferrent value
// such as undefined
var checkPermutationObject = function(x, y) {
    let object = {};
    x = x.split('');
    x.forEach(element => {
      if (object.hasOwnProperty(element)) {
          object[element] = object[element] + 1;
      }
      else {
          object[element] = 1;
      }
    });
    y=y.split('');
    for (let i = 0; i< y.length; i++) {
        let element = y[i];
        if (!object.hasOwnProperty(element)) {
            return false;
        }
        else {
            if (object[element] === 1) {
                delete object[element];
            }
            else {
                object[element] = object[element] -1;
            }
        }
    }
    return Object.keys(object).length === 0 && object.constructor === Object
}

exports.checkPermutationSort = checkPermutationSort;
exports.checkPermutationMap = checkPermutationMap;
exports.checkPermutationObject = checkPermutationObject;