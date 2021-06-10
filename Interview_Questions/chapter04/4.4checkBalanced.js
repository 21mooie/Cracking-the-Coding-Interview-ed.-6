const binaryTreeHeight = require('../../utils/binaryTreeHeight');

// Check Balanced: Implement a function to check if a binary tree is balanced. 
// For the purposes of this question, a balanced tree is defined to be a tree such that the heights 
// of the two subtrees of any node never differ by more than one.

const checkBalanced = (root) => {
    if(root===null){
        return true;
    }
    let heightDiff = binaryTreeHeight(root.left) - binaryTreeHeight(root.right);                                                                                                                                  ;
    if(Math.abs(heightDiff)>1){
        return false;
    } else {
        return checkBalanced(root.left) && checkBalanced(root.right);
    }
};

module.exports = checkBalanced;