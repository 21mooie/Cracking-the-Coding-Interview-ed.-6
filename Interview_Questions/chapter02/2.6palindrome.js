const Iterator = require('../../utils/Iterator');
const Stack = require('../../utils/Stack');

// 2.6 Palindrome: Implement a function to check if a linked list is a palindrome.

const palindrome = (list) => {
    let result = true, val = '', iter = new Iterator(list);
    while(iter.hasNode()) {
        val+=iter.getData();
        iter.getNext();
    }
    let left = 0, right = val.length-1;
    while(left < right && result === true) {
        if (val[left] !== val[right]) {
            result = false;
        }
        left++;
        right--;
    }
    return result;
};

const palindromeStack = (list) => {
    const stack = new Stack();
    let slow = new Iterator(list), fast = new Iterator(list);
    while(fast.hasNode() && fast.hasNext()) {
        stack.push(slow.getData());
        slow.getNext();
        fast.getNext();
        fast.getNext();
    }
    if (fast.hasNode()) {
        slow.getNext();
    }
    while (slow.hasNode()) {
        if (slow.getData() !== stack.pop()) {
            return false;
        }
        slow.getNext();
    }
    return true;
};

exports.palindrome = palindrome;
exports.palindromeStack = palindromeStack;