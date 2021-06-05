const { TreeNode } = require('../../utils/Node');
const LinkedList = require('../../utils/LinkedList');
const listOfDepths = require('../../Interview_Questions/chapter04/4.3listOfDepths');

describe('ListOfDepths', () => {
    it('should not construct linked list of no nodes passed.', () => {
        expect(listOfDepths(null)).toHaveSize(0);
    });
    it('should construct linkedlist of one node tree.', () => {
        const root = new TreeNode(1);
        const result = listOfDepths(root);
        expect(result[0].show()).toEqual([1]);
    });
    it('should construct linked lists of all the nodes at each depth.', ()=> {
        let root = new TreeNode(1, 
            new TreeNode(2,
                new TreeNode(4),
                new TreeNode(5,
                    new TreeNode(8))), 
            new TreeNode(3,
                new TreeNode(6),
                new TreeNode(7,
                    null,
                    new TreeNode(9)
                )
            )
        );
        const result = listOfDepths(root);
        let correctResult = [
            [1],
            [2,3],
            [4,5,6,7],
            [8,9]
        ];
        for (let i=0; i<result.length; i++){
            expect(result[i].show()).toEqual(correctResult[i]);
        }
    });
});