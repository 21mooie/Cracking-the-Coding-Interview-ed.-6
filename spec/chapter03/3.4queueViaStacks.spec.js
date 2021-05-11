const queueViaStacks = require('../../Interview_Questions/chapter03/3.4queueViaStacks');

describe('Queue via stacks', () => {
    let queue;
    beforeEach(() => {
        queue = new queueViaStacks();
    });
    it ('should handle empty queues.', () => {
        expect(queue.isEmpty()).toBe(true);
        queue.enqueue(1);
        expect(queue.isEmpty()).toBe(false);
    });

    it('should handle peeking elements.', () => {
        queue.enqueue(2);
        queue.enqueue(4);
        queue.enqueue(5);
        queue.enqueue(6);
        queue.peek();
        expect(queue.peek()).toBe(2);
    });

    it('should implement a queue by adding to queue.', () => {
        queue.enqueue(1);
        queue.enqueue(4);
        queue.enqueue(2);
        queue.enqueue(7);
        expect(queue.showQueue()).toEqual([1,4,2,7]);
    });

    it('should implement a queue by removing from queue.', () => {
        queue.enqueue(1);
        queue.enqueue(4);
        queue.enqueue(2);
        queue.enqueue(7);
        queue.dequeue();
        queue.dequeue();
        expect(queue.showQueue()).toEqual([2,7]);
    });

    it('should implement a queue by adding and removing while not shifting unnecesarrily.', () => {
        queue.enqueue(1);
        queue.enqueue(4);
        queue.enqueue(2);
        queue.enqueue(7);
        queue.dequeue();
        queue.dequeue();
        queue.enqueue(5);
        expect(queue.peek()).toEqual(2);
    });
});