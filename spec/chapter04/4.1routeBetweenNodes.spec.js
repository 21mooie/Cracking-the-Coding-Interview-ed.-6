const { GraphNode } = require('../../utils/Node');
const routeBetweenNodes = require('../../Interview_Questions/chapter04/4.1routeBetweenNodes');

describe('routeBetweenNodes', () => {
    it('should return true when there is a path between two nodes.', () => {
        let goal = new GraphNode(9);
        let rootn1 = new GraphNode(2);
        let rootn2 = new GraphNode(3);
        let rootn3 = new GraphNode(4);
        let root = new GraphNode(1, [rootn1, rootn2, rootn3]);
        rootn2.neighbors = [new GraphNode(5, [new GraphNode(6)]), goal];
        expect(routeBetweenNodes(root, goal)).toEqual(true);
    });

    it('should return false when there is not a path between two nodes.', () => {
        let goal = new GraphNode(9);
        let rootn1 = new GraphNode(2);
        let rootn2 = new GraphNode(3);
        let rootn3 = new GraphNode(4);
        let root = new GraphNode(1, [rootn1, rootn2, rootn3]);
        rootn2.neighbors = [new GraphNode(5, [new GraphNode(6)])];
        expect(routeBetweenNodes(root, goal)).toEqual(false);
    });

    it('should be able to handle when there is a cycle in the path.', () => {
        let goal = new GraphNode(9);
        let rootn1 = new GraphNode(2);
        let rootn2 = new GraphNode(3);
        let rootn3 = new GraphNode(4);
        let root = new GraphNode(1, [rootn1, rootn2, rootn3]);
        rootn2.neighbors = [new GraphNode(5, [new GraphNode(6)]), root];
        expect(routeBetweenNodes(root, goal)).toEqual(false);
    });
});