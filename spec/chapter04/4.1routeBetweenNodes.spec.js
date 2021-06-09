const { TreeNode } = require('../../utils/Node');
const routeBetweenNodes = require('../../Interview_Questions/chapter04/4.1routeBetweenNodes');

describe('routeBetweenNodes', () => {
    it('should return true when there is a path between two nodes.', () => {
        let goal = new TreeNode(9, null, null);
        let root = new TreeNode(1, 
            new TreeNode(2,
                new TreeNode(4),
                new TreeNode(5,
                    new TreeNode(8))), 
            new TreeNode(3,
                new TreeNode(6),
                new TreeNode(7,
                    null,
                    goal
                )
            )
        );
        goal.setLeftChild(new TreeNode(10, null, null));
        expect(routeBetweenNodes(root, goal)).toEqual(true);
    });

    it('should return false when there is not a path between two nodes.', () => {
        let goal = new TreeNode(9, null, null);
        let root = new TreeNode(1, 
            new TreeNode(2,
                new TreeNode(4),
                new TreeNode(5,
                    new TreeNode(8))), 
            new TreeNode(3,
                new TreeNode(6),
                new TreeNode(7,
                    null,
                    null
                )
            )
        );
        expect(routeBetweenNodes(root, goal)).toEqual(false);
    });
});