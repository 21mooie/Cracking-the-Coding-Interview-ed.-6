// First Common Ancestor: Design an algorithm and write code to find the first common ancestor of two nodes in a binary tree.
// Avoid storing additional nodes in a data structure. NOTE: This is not necessarily a binary search tree.

const firstCommonAncestor = (root, node1, node2) => {
    function find(root, val){
        if(root === null){
            return false;
        }
        if(root.data === val){
            return true;
        }
        return find(root.left, val) || find(root.right, val);
    }

    function findHelper(root, node1, node2) {
        if (root.data === node1.data || root.data === node2.data){
            return root;
        }
        let n1Left = find(root.left, node1.data);
        let n2Left = find(root.left, node2.data);
        if((n1Left && !n2Left) || (!n1Left && n2Left)){
            return root;
        } else if (n1Left && n2Left) {
            return firstCommonAncestor(root.left, node1, node2);
        } else {
            return firstCommonAncestor(root.right, node1, node2);
        }
    }
    if (!find(root, node1.data) || !find(root, node2.data)){
        return null;
    }
    return findHelper(root, node1, node2);
};

const optimizedFirstCommonAncestor = null;

const firstCommonAncesterWithParents = null;

module.exports = firstCommonAncestor;