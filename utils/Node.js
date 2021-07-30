const Node = function(data) {
    this.data = data;
}

const NextNode = function(data, next=null) {
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

const TreeNodeP = function(data, leftChild = null, rightChild = null, parent = null){
    TreeNode.call(this, data, leftChild, rightChild);
    this.parent = parent;
}

const GraphNode = function(data, neighbors = null){
    Node.call(this, data);
    this.neighbors = neighbors;
}

exports.Node = Node;
exports.NextNode = NextNode;
exports.PrevNode = PrevNode;
exports.TreeNode = TreeNode;
exports.TreeNodeP = TreeNodeP;
exports.GraphNode = GraphNode;