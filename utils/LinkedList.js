const {NextNode} = require('./Node');

const LinkedList = function () {
    this.head = null;
}

LinkedList.prototype.add = function(val) {
    if (this.head) {
        let head = this.head
        while(head.next) {
            head = head.next;
        }
        head.next = new NextNode(val, null);
    } else {
        this.head = new NextNode(val, null);
    }
}

LinkedList.prototype.show = function() {
    let head = this.head;
    let array = []
    while (head) {
        array.push(head.data);
        head = head.next;
    }
    return array;
}

LinkedList.prototype.removeHead = function() {
    let head = this.head;
    this.head = this.head.next;
    return head;
}

LinkedList.prototype.peekHead = function() {
    return this.head ? this.head.data : null;
}

LinkedList.prototype.getHead = function() {
    return this.head;
}

module.exports = LinkedList;