const Stack = require('../../utils/Stack');

// Queue via Stacks: Implement a MyQueue class which implements a queue using two stacks.

//O(1) to complete same operations and O(n) to do opposing operations
const queueViaStacks = function() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();

    this.enqueue = function(val) {
        while (!this.stack2.isEmpty()) {
            this.stack1.push(this.stack2.pop());
        }
        this.stack1.push(val);
    }

    this.dequeue = function() {
        while(!this.stack1.isEmpty()) {
            this.stack2.push(this.stack1.pop());
        }
        return this.stack2.pop();
    }

    this.peek = function() {
        while(!this.stack1.isEmpty()) {
            this.stack2.push(this.stack1.pop());
        }
        return this.stack2.peek();
    }

    this.isEmpty = function() {
        return this.stack1.isEmpty() && this.stack2.isEmpty();
    }

    this.showQueue = function() {
        let array = [];
        const newStack = new Stack();
        const stack = this.stack1.isEmpty() ? this.stack2 : this.stack1;
        const isStack1Empty = this.stack1.isEmpty();
        while (!stack.isEmpty()) {
            let val = stack.pop();
            newStack.push(val);
            if (isStack1Empty) {
                array.push(val);
            }
        }

        while (!newStack.isEmpty()) {
            let val = newStack.pop();
            stack.push(val);
            if (!isStack1Empty) {
                array.push(val);
            }
        }
        return array;
    }
}

module.exports = queueViaStacks;