// Minimal Tree: Given a sorted (increasing order) array with unique integer elements, 
// write an algorithm to create a binary search tree with minimal height.

const { TreeNode } = require("../../utils/Node");

const minimalTree = (array) => {
    function minTreeRecursive(root, array, leftBegin, leftEnd, rightBegin, rightEnd){
        if (leftBegin > leftEnd){
            root.left = null;
        } else {
            let leftMid = Math.floor((leftBegin+leftEnd)/2);
            let leftRoot = new TreeNode(array[leftMid]);
            root.left = leftRoot;
            minTreeRecursive(root.left, array, leftBegin, leftMid-1, leftMid+1, leftEnd);
        }
        if (rightBegin > rightEnd){
            root.right = null;
        } else {
            let rightMid = Math.floor((rightBegin+rightEnd)/2);
            let rightRoot = new TreeNode(array[rightMid]);
            root.right = rightRoot;
            minTreeRecursive(root.right, array, rightBegin, rightMid-1, rightMid+1, rightEnd);
        }
        return root;
    }
    let mid = Math.floor(array.length/2);
    let root = new TreeNode(array[mid]);
    return minTreeRecursive(root, array, 0, mid-1, mid+1, array.length-1);
};

module.exports = minimalTree;