const Stack = require('../utils/Stack');


function sortStack(sortStack){
    const tempStack = new Stack();
    while (!sortStack.isEmpty()) {
        let temp = sortStack.pop();
        while (tempStack.peek() !== undefined && temp < tempStack.peek()) {
            sortStack.push(tempStack.pop())
        }
        tempStack.push(temp);
    }
    while (!tempStack.isEmpty()) {
        sortStack.push(tempStack.pop());
    }
    return sortStack;
}

const stack = new Stack();
stack.push(12);
stack.push(1);
stack.push(5);
stack.push(45);
stack.push(22);
stack.push(19);
stack.push(0);
stack.push(15);
sortStack(stack).showStack();