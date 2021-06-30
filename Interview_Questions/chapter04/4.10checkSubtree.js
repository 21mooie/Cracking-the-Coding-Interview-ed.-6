// Check Subtree: T l and T2 are two very large binary trees, with T l much bigger than T2.
// Create an algorithm to determine if T2 is a subtree of Tl.
// A tree T2 is a subtree ofT i if there exists a node n in T i such that the subtree of n is identical to T2.
// That is, if you cut off the tree at node n, the two trees would be identical.

const checkSubtree = (root1, root2) => {
    function checkSubTreeHelper(root1, root2) {
        if(!root1 && !root2){
            return true;
        }
        if((root1 && !root2)
        || (!root1 && root2)
        || root1.data !== root2.data){
            return false;
        }
        return checkSubTreeHelper(root1.left, root2.left) && checkSubTreeHelper(root1.right, root2.right);
    }

    function preorder(root1, root2){
        if(root1) {
            const isSubtree = checkSubTreeHelper(root1, root2);
            if (isSubtree){
                return true;
            }
            return preorder(root1.left, root2) || preorder(root1.right, root2);
        } else {
            return false;
        }
        
    }

    return preorder(root1, root2);
};

module.exports = checkSubtree;