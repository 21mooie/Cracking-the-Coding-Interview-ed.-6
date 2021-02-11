const Node = function(data) {
    this.data = data;
}

const NextNode = function(data, next) {
    Node.call(this, data);
    this.next = next;
}

const PrevNode = function(data, prev) {
    Node.call(this, data);
    this.prev = prev;
}

exports.Node = Node;
exports.NextNode = NextNode;
exports.PrevNode = PrevNode;