const successor = require("../../Interview_Questions/chapter04/4.6successor");
const { TreeNodeP } = require("../../utils/Node");

describe('Successor', () => {
    it('should find the next node in a binary search tree.', () => {
        const root = new TreeNodeP(8);
        const left = new TreeNodeP(4);
        root.left = left;
        left.parent = root;
        left.left = new TreeNodeP(2, null, null, left);
        left.right = new TreeNodeP(6, null, null, left);
        const right = new TreeNodeP(10);
        root.right = right;
        right.parent = root;
        right.right = new TreeNodeP(20);
        right.right.parent = right;
        expect(successor(right)).toEqual(20);
    });
});