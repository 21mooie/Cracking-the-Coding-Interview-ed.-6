const binaryTreeHeight = require('../../utils/binaryTreeHeight');
const minimalTree = require('../../Interview_Questions/chapter04/4.2minimalTree');

describe('minimalTree', () => {
    it('should create a binary search tree with minimal height given a sorted list.', () => {
        let array = [2,4,6,8,10,20];
        expect(binaryTreeHeight(minimalTree(array))).toEqual(3);
    });

    it('should create a binary search tree with minimal height given a sorted list.', () => {
        let array = [2];
        expect(binaryTreeHeight(minimalTree(array))).toEqual(1);
    });
});