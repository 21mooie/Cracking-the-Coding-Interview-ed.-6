const MinStack = require('../../Interview_Questions/chapter03/3.2stackMin');

describe('StackMin', () => {
    it('should be able to return the minimum in a stack.', () => {
        const minStack = new MinStack();
        minStack.push(12);
        minStack.push(5);
        minStack.push(6);
        minStack.push(2);
        minStack.push(8);
        expect(minStack.showMin()).toEqual(2);
    });

    it('should return the next minimum after popping the previous minimum.', () => {
        const minStack = new MinStack();
        minStack.push(12);
        minStack.push(5);
        minStack.push(6);
        minStack.push(2);
        minStack.pop();
        expect(minStack.showMin()).toEqual(5);
    });
});