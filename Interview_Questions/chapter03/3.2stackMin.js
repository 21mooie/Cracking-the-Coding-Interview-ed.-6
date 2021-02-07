// Stack Min: How would you design a stack which, 
// in addition to push and pop, has a function min which returns the minimum element? 
// Push, pop and min should all operate in 0(1) time.

// Push, pop, and min all operate in O(1) time. Think of another way to implement which doesn't
// involve storing the min at each node.
const MinNode = function(data, prev, min) {
    this.data = data;
    this.prev = prev;
    this.min = min;
}

const MinStack = function () {
    this.head = null;
    this.push = function(val) {
        let node;
        if (this.head && this.head.min < val) {
            node = new MinNode(val, this.head, this.head.min);
        } else {
            node = new MinNode(val, this.head, val);
        }
        this.head = node;
    }
    this.pop = function() {
        if (!this.head) return null;
        const node = this.head;
        this.head = this.head.prev;
        return node.data;
    }
    this.peek = function() {
        return this.head ? this.head.data : null;
    }
    this.isEmpty = function() {
        return this.head === null;
    }
    this.showStack = function() {
        const array = [];
        let head = this.head;
        while (head) {
            array.push(head.data);
            head = head.prev;
        }
        return array;
    }
    this.showMin = function() {
        return this.head ? this.head.min : null;
    }
}

module.exports = MinStack;