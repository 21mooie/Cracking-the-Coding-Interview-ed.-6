// Paths with Sum: You are given a binary tree in which each node contains an integer value
// (which might be positive or negative).
// Design an algorithm to count the number of paths that sum to a given value.
// The path does not need to start or end at the root or a leaf,
// but it must go downwards (traveling only from parent nodes to child nodes).

const pathsWithSum = (root, target) => {
    let numPaths = 0;
    function count(root, target){
        if(root) {
            // each node will start its recursive counting with this line
            recurse(root, 0, target);
            count(root.left, target);
            count(root.right, target);
        }   
    }

    function recurse(node, acc, target){
        if(node) {
            acc+=node.data;
            if(acc === target){
                numPaths++;
            } 
            recurse(node.left, acc, target);
            recurse(node.right, acc, target);
        }
    }
    count(root, target);
    return numPaths;
}

const pathsWithSumOptimized = null;

module.exports = pathsWithSum;