const LinkedList = require("../../utils/LinkedList");
const { sumLists, sumListsReverse } = require('../../Interview_Questions/chapter02/2.5sumLists');
describe('Sum Lists', () => {
    describe('Reverse', () => {
        it('should add numbers reversed as linked lists.', () => {
            let list1 = new LinkedList();
            let list2 = new LinkedList();
            list1.add(7);
            list1.add(1);
            list1.add(6);
            list2.add(5);
            list2.add(9);
            list2.add(2);
            let list3 = sumListsReverse(list1, list2);
            expect(list3.show()).toEqual([2,1,9]);
        });
    
        it('should add numbers reversed as linked lists of different lengths.', () => {
            let list1 = new LinkedList();
            let list2 = new LinkedList();
            list1.add(7);
            list1.add(1);
            list2.add(5);
            list2.add(9);
            list2.add(2);
            list2.add(4);
            let list3 = sumListsReverse(list1, list2);
            expect(list3.show()).toEqual([2,1,3,4]);
        });
    });
    describe('Forward', () => {
        it('should add numbers reversed as linked lists.', () => {
            let list1 = new LinkedList();
            let list2 = new LinkedList();
            list1.add(6);
            list1.add(1);
            list1.add(7);
            list2.add(2);
            list2.add(9);
            list2.add(5);
            let list3 = sumLists(list1, list2);
            expect(list3.show()).toEqual([9,1,2]);
        });
    
        it('should add numbers reversed as linked lists of different lengths.', () => {
            let list1 = new LinkedList();
            let list2 = new LinkedList();
            list1.add(1);
            list1.add(7);
            list2.add(4);
            list2.add(2);
            list2.add(9);
            list2.add(5);
            let list3 = sumLists(list1, list2);
            expect(list3.show()).toEqual([4,3,1,2]);
        });
    });
});