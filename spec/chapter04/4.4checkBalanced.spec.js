const checkBalanced = require('../../Interview_Questions/chapter04/4.4checkBalanced');
const { TreeNode } = require('../../utils/Node');

describe('Check Balanced', () => {
    it('should return true if the tree is balanced.', () => {
        let root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.left.right = new TreeNode(4);
        expect(checkBalanced(root)).toBe(true);
    });

    it('should return false if the tree is unbalanced.', () => {
        let root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.left.right = new TreeNode(4);
        root.left.right.left = new TreeNode(4);
        expect(checkBalanced(root)).toBe(false);
    });
});