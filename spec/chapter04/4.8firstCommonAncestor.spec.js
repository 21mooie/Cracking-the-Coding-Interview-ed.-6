const firstCommonAncestor = require("../../Interview_Questions/chapter04/4.8firstCommonAncestor");
const { TreeNode } = require("../../utils/Node");

describe('First Common Ancestor', () => {
    it('will return the first common ancestor of a set of nodes.', () => {
        const root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        const node1  = new TreeNode(4);
        const node2 = new TreeNode(6);
        root.left.left = node1;
        root.left.right = new TreeNode(5)
        root.left.right.right = node2;
        expect(firstCommonAncestor(root, node1, node2).data).toEqual(2);
    });
    it('will return one of the nodes when it is the common ancestor.', () => {
        const root = new TreeNode(1);
        const node1 = new TreeNode(2);
        root.left = node1;
        root.right = new TreeNode(3);
        root.left.left = new TreeNode(4);
        const node2 = new TreeNode(6);
        root.left.right = new TreeNode(5)
        root.left.right.right = node2;
        expect(firstCommonAncestor(root, node1, node2).data).toEqual(2);
    });
    it('will return null if one of the nodes are not in the tree.', () => {
        const root = new TreeNode(1);
        const node1 = new TreeNode(2);
        root.left = node1;
        root.right = new TreeNode(3);
        root.left.left = new TreeNode(4);
        const node2 = new TreeNode(6);
        root.left.right = new TreeNode(5)
        root.left.right.right = node2;
        const node3 = new TreeNode(7);
        expect(firstCommonAncestor(root, node3, node1)).toEqual(null);
    });
});