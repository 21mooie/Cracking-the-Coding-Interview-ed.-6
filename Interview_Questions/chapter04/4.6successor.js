// Successor: Write an algorithm to find the "next" node (i.e., in-order successor) of a given node in a
// binary search tree. You may assume that each node has a link to its parent.

const successor = (start) => {
    if(!start.right){
        let parent = start.parent;
        while (parent && parent.left !== start) {
            start = parent;
            parent = parent.parent;
        }
        return parent;
    } else {
        start = start.right;
        while(start.left) {
            start = start.left;
        }
        return start.data;
    }
};

module.exports = successor;
