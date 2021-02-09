const Node = function(data) {
    this.data = data;
}

const NextNode = function(data, next) {
    Node.call(this, data);
    this.next = next;
}

exports.Node = Node;
exports.NextNode = NextNode;