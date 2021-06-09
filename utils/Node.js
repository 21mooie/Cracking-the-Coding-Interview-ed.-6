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

const TreeNode = function(data, leftChild = null, rightChild = null){
    Node.call(this, data);
    this.left = leftChild;
    this.right = rightChild;
}

exports.Node = Node;
exports.NextNode = NextNode;
exports.PrevNode = PrevNode;
exports.TreeNode = TreeNode;