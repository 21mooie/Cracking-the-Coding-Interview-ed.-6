const Node = function(data, prev) {
    this.data = data;
    this.prev = prev;
}

const Stack = function () {
    this.head = null;
    this.push = function(val) {
        const node = new Node(val, this.head);
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
}

module.exports = Stack;