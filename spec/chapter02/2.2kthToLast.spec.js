const LinkedList = require('../../utils/LinkedList');
const Iterator = require('../../utils/Iterator');
const { 
    kthToLastRecursive,
    kthToLastStack,
    kthToLastIter
} = require('../../Interview_Questions/chapter02/2.2kthToLast');

describe('Kth to last', () => {
    describe('recursive', () => {
        let list;
        beforeEach(() => {
            list = new LinkedList();
            list.add(11);
            list.add(23);
            list.add(53);
            list.add(43);
            list.add(51);
        });
        it('should return the kth to last element of a linked list.', () => {
            expect(kthToLastRecursive(list.getHead(), 2)).toEqual(53);
        });

        it('should return error if k > length of list.', () => {      
            expect(kthToLastRecursive(list.getHead(), 8)).toEqual(new Error('k > length of list'));
        });
    
        it('should return last element of list if k === 0.', () => {
            expect(kthToLastRecursive(list.getHead(), 0)).toEqual(51);
        });
    
        it('should return Error if K < 0.', () => {
            expect(kthToLastRecursive(list.getHead(), -3)).toEqual(new Error('k < 0'));
        });
    
        it('should return first element of list.', () => {
            expect(kthToLastRecursive(list.getHead(), 4)).toEqual(11);
        });
    });

    describe('stack', () => {
        let list, iter;
        beforeEach(() => {
            list = new LinkedList();
            list.add(1);
            list.add(45);
            list.add(6);
            list.add(13);
            iter = new Iterator(list);
        });
        it('should return the kth to last element of a linked list.', () => {
            expect(kthToLastStack(iter, 2)).toEqual(45);
        });

        it('should return the last element of a linked list.', () => {
            expect(kthToLastStack(iter, 0)).toEqual(13);
        });

        it('should return the kth to last element of a linked list.', () => {
            expect(kthToLastStack(iter, 3)).toEqual(1);
        });

        it('should return error if k > length of list.', () => {      
            expect(kthToLastRecursive(iter, 8)).toEqual(new Error('k > length of list'));
        });

        it('should return Error if K < 0.', () => {
            expect(kthToLastRecursive(iter, -3)).toEqual(new Error('k < 0'));
        });
        
    });

    describe('iter', () => {
        let list, iter;
        beforeEach(() => {
            list = new LinkedList();
            list.add(1);
            list.add(45);
            list.add(6);
            list.add(13);
            iter = new Iterator(list);
        });
        it('should return the kth to last element of a linked list.', () => {
            expect(kthToLastIter(iter, 2)).toEqual(45);
        });

        it('should return the last element of a linked list.', () => {
            expect(kthToLastIter(iter, 0)).toEqual(13);
        });

        it('should return the kth to last element of a linked list.', () => {
            expect(kthToLastIter(iter, 3)).toEqual(1);
        });

        it('should return error if k > length of list.', () => {      
            expect(kthToLastIter(iter, 8)).toEqual(new Error('k > length of list'));
        });

        it('should return Error if K < 0.', () => {
            expect(kthToLastIter(iter, -3)).toEqual(new Error('k < 0'));
        });
        
    });
});