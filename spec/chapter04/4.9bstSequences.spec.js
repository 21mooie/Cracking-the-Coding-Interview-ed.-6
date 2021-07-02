const bstSequences = require('../../Interview_Questions/chapter04/4.9bstSequences');
const { TreeNodeP } = require('../../utils/Node');

describe('BST Sequences', () => {
    it('should print all possible arrays that could have led to this tree.', () => {
        const root = new TreeNodeP(2);
        root.left = new TreeNodeP(2);
        root.right = new TreeNodeP(3);
        root.left.parent = root;
        root.right.parent = root;
        // const result = bstSequences(root);
        let result = [ [2,1,3]]
        const expectedResult = [[2,1,3], [2,3,1]];
        expect(result).toContain(jasmine.arrayContaining([2,1,3]));
        expect(result).toContain(jasmine.arrayContaining([2,3,1]));
    });
});