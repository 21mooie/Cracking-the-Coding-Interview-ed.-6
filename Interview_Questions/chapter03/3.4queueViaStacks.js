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
        if (this.stack1.isEmpty()) {
            while(!this.stack2.isEmpty()) {
                let val = this.stack2.pop();
                newStack.push(val);
                array.push(val);
            }
            while (!newStack.isEmpty()) {
                this.stack2.push(newStack.pop());
            }

        } else {
            while(!this.stack1.isEmpty()) {
                newStack.push(this.stack1.pop());
            }
            while(!newStack.isEmpty()) {
                let val = newStack.pop();
                array.push(val);
                this.stack1.push(val)
            }
        }
        return array;
    }
}

module.exports = queueViaStacks;