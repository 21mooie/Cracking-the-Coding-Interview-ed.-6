const Iterator = function(LinkedList) {
    this.node = LinkedList.getHead();
}

Iterator.prototype.getNext = function() {
    if (this.node) {
        this.node = this.node.next;
    }
}

Iterator.prototype.setNext = function(node) {
    this.node.next = node;
}

Iterator.prototype.peekNext = function() {
    return this.node.next;
}

Iterator.prototype.getData = function() {
    return this.node ? this.node.data : null;
}

Iterator.prototype.setData = function(newData) {
    this.node.data = newData;
}

Iterator.prototype.setIterator = function(iterator) {
    if (!iterator)
        return null;
    this.node = iterator.node;
}

module.exports = Iterator;