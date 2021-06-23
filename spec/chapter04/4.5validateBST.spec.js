const validateBST = require('../../Interview_Questions/chapter04/4.5validateBST');
const { TreeNode } = require('../../utils/Node');

describe('Validate BST', () => {
    it('should be simple.', () => {
        const root = new TreeNode(8);
        root.left = new TreeNode(6);
        root.right = new TreeNode(9);
        expect(validateBST(root)).toEqual(true);
    });
    it('should handle edge case of BST.', () => {
        const root = new TreeNode(8);
        root.left = new TreeNode(6);
        root.right = new TreeNode(8);
        expect(validateBST(root)).toEqual(false);
    });
    it('should return true when given a BST.', () => {
        const root = new TreeNode(8);
        root.left = new TreeNode(4);
        root.left.left = new TreeNode(2);
        root.left.right = new TreeNode(6);
        root.right = new TreeNode(10);
        root.right.right = new TreeNode(20);
        expect(validateBST(root)).toEqual(true);
    });

    it('should return false when not given a BST.', () => {
        const root = new TreeNode(8);
        root.left = new TreeNode(4);
        root.left.left = new TreeNode(2);
        root.left.right = new TreeNode(12);
        root.right = new TreeNode(10);
        root.right.right = new TreeNode(20);
        expect(validateBST(root)).toEqual(false);
    });

    it('should handle duplicates when given a BST.', () => {
        const root = new TreeNode(8);
        root.left = new TreeNode(4);
        root.left.left = new TreeNode(2);
        root.left.right = new TreeNode(6);
        root.left.right.left = new TreeNode(6);
        root.right = new TreeNode(10);
        root.right.right = new TreeNode(20);
        expect(validateBST(root)).toEqual(true);
    });

    it('should handle duplicates when not given a BST.', () => {
        const root = new TreeNode(8);
        root.left = new TreeNode(4);
        root.left.left = new TreeNode(2);
        root.left.right = new TreeNode(6);
        root.left.right.right = new TreeNode(6);
        root.right = new TreeNode(10);
        root.right.right = new TreeNode(20);
        expect(validateBST(root)).toEqual(false);
    });
});