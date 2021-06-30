const checkSubtree = require("../../Interview_Questions/chapter04/4.10checkSubtree");
const { TreeNode } = require("../../utils/Node");

describe('Check Subtree', () => {
    it('should check if a tree is a subtree of another tree.', () => {
        const subTreeRoot = new TreeNode(2);
        subTreeRoot.left = new TreeNode(4);
        subTreeRoot.right = new TreeNode(5);
        const root = new TreeNode(1);
        root.left = subTreeRoot;
        root.right = new TreeNode(3);
        expect(checkSubtree(root, subTreeRoot)).toBe(true);
    });

    it('should fail if a tree is not a subtree of another tree.', () => {
        const otherTree = new TreeNode(2);
        otherTree.left = new TreeNode(4);
        otherTree.right = new TreeNode(5);
        const root = new TreeNode(1);
        root.left = new TreeNode(7);
        root.right = new TreeNode(3);
        expect(checkSubtree(root, otherTree)).toBe(false);
    });
});