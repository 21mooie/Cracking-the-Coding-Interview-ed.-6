// Recursive Multiply: Write a recursive function to multiply two positive integers without using the * operator.
// You can use addition, subtraction, and bit shifting, but you should minimize the number of those operations.

// O(N) time complexity
const recursiveMultiplyIter = (a, b) => {
    let map = new Map();
    function recurse(a, b, sum, counter){
        if(a===0){
            return sum;
        }
        map.set(counter, sum);
        if(map.has(a)){
            return sum+map.get(a);
        }
        return recurse(--a, b, sum+=b, ++counter);
    }
    if(a === 0 || b === 0){
        return 0;
    }
    if(a === 1){
        return b;
    }
    if(b === 1){
        return a;
    }
    return recurse(a,b,0,0)
};

const recursiveMultiply = (a,b) => {
    function recurse(smaller, bigger){
        if(smaller === 0){
            return 0;
        }
        if(smaller === 1){
            return bigger;
        }
        let small = smaller >> 1;
        let half = recurse(small, bigger);
        if(smaller % 2 === 1){
            return half + half + bigger;
        } else {
            return half + half;
        }
    }
    let smaller = a < b ? a : b;
    let bigger = a > b ? a : b;
    return recurse(smaller, bigger);
};



exports.recursiveMultiplyIter = recursiveMultiplyIter;
exports.recursiveMultiply = recursiveMultiply;