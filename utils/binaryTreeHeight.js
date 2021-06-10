const binaryTreeHeight = (root) => {
    if (root === null){
        return -1;
    }
    return (Math.max(binaryTreeHeight(root.left),binaryTreeHeight(root.right))+1);
};

module.exports = binaryTreeHeight;