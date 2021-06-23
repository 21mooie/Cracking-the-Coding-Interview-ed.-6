// Validate BST: Implement a function to check if a binary tree is a binary search tree.

const validateBST = (root) => {
    function validate(root, min, max){
        if (root) {
            if (root.data <= min || root.data > max){
                return false;
            }
            let leftSubtree = validate(root.left, min, root.data);
            let rightSubtree = validate(root.right, root.data, max);
            return leftSubtree && rightSubtree;
        }
        return true;
    }

    return validate(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
};

module.exports = validateBST;