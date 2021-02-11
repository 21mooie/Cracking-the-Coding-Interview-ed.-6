const LinkedList = require('../../utils/LinkedList');
const Iterator = require('../../utils/Iterator');
const {kthToLastRecursive} = require('../../Interview_Questions/chapter02/2.2kthToLast');

describe('Kth to last', () => {
    let list, iter;
    beforeEach(() => {
        list = new LinkedList();
        list.add(11);
        list.add(23);
        list.add(53);
        list.add(43);
        list.add(51);
        iter = new Iterator(list);
    });
    it('should return the kth to last element of a linked list.', () => {
        expect(kthToLastRecursive(list.getHead(), 2)).toEqual(53);
    });
    xit('should return error if k > length of list.', () => {      
        expect(kthToLastRecursive(list.getHead(), 8)).toEqual(new Error('k > length of list'));
    });

    it('should return last element of list if k === 0.', () => {
        expect(kthToLastRecursive(list.getHead(), 0)).toEqual(51);
    });

    xit('should return Error if K < 0.', () => {
        expect(kthToLastRecursive(list.getHead(), -3)).toEqual(new Error('K < 0'));
    });

    xit('should return first element of list.', () => {
        expect(kthToLastRecursive(list.getHead(), 4)).toEqual(11);
    });
});