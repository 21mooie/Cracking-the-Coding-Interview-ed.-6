const deleteMiddleNode = require('../../Interview_Questions/chapter02/2.3deleteMiddleNode');
const Iterator = require('../../utils/Iterator');
const LinkedList = require('../../utils/LinkedList');

describe('Delete Middle Node', () => {
    let list, iter;

    beforeEach(() => {
        list = new LinkedList();
        list.add(1);
        list.add(3);
        list.add(5);
        list.add(7);
        list.add(9);
    });

    it('should delete a given middle node of a linked list.', () => {
        iter = new Iterator(list);
        iter.getNext();
        iter.getNext();
        list = deleteMiddleNode(list, iter);
        expect(list.show()).toEqual([1,3,7,9]);
    });

    it('should handle if to be deleted node is at end of a linked list.', () => {
        iter = new Iterator(list);
        iter.getNext();
        iter.getNext();
        iter.getNext();
        iter.getNext();
        list = deleteMiddleNode(list, iter);
        expect(list.show()).toEqual([1,3,5,7,9]);
    });
});