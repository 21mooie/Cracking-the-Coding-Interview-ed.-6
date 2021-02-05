var Stack = require('../../utils/Stack');
var sortStack = require('../../Interview_Questions/chapter03/3.5sortStack');

describe('SortStack', () => {
    it('should be able to sort a stack of integers.', () => {
        const stack = new Stack();
        stack.push(12);
        stack.push(1);
        stack.push(5);
        stack.push(45);
        stack.push(22);
        stack.push(19);
        stack.push(0);
        stack.push(15);
        expect(sortStack(stack).showStack()).toEqual([0, 1, 5, 12, 15, 19, 22, 45]);
    });
});