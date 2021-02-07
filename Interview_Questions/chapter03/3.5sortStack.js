const Stack = require('../../utils/Stack');

// Sort Stack: Write a program to sort a stack such that
//  the smallest items are on the top. 
// You can use an additional temporary stack, 
// but you may not copy the elements into any other data structure 
// (such as an array). 
// The stack supports the following operations: push, pop, peek, and isEmpty.

// O(n^2) time and O(n) space complexity
function sortStack(sortStack){
    const tempStack = new Stack();
    while (!sortStack.isEmpty()) {
        let temp = sortStack.pop();
        while (tempStack.peek() !== null && temp < tempStack.peek()) {
            sortStack.push(tempStack.pop())
        }
        tempStack.push(temp);
    }
    while (!tempStack.isEmpty()) {
        sortStack.push(tempStack.pop());
    }
    return sortStack;
}

module.exports = sortStack;