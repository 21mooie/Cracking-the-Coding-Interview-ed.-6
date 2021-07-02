const pathsWithSum = require("../../Interview_Questions/chapter04/4.12pathsWithSum");
const { TreeNode } = require("../../utils/Node");

describe('Paths with sum', () => {
    it('will return the number of paths in a binary tree that sum to a value.', () => {
        const root = new TreeNode(5);
        root.right = new TreeNode(1);
        root.right.left = new TreeNode(6);
        root.left = new TreeNode(-2);
        root.left.left = new TreeNode(4);
        root.left.right = new TreeNode(3);
        expect(pathsWithSum(root, 6)).toEqual(3);
    });
});