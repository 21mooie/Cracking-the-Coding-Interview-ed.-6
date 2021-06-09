const LinkedList = require("../../utils/LinkedList");
const { sumLists, sumListsReverse, sumListsRecursive } = require('../../Interview_Questions/chapter02/2.5sumLists');
const { NextNode } = require("../../utils/Node");
const linkedListTraversal = require('../../utils/linkedListTraversal');

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
        
        it('should add numbers reversed as linked lists that are will result in a longer list.', () => {
            let list1 = new LinkedList();
            let list2 = new LinkedList();
            list1.add(8);
            list1.add(7);
            list1.add(9);
            list2.add(5);
            list2.add(8);
            list2.add(6);
            let list3 = sumListsReverse(list1, list2);
            expect(list3.show()).toEqual([3,6,6,1]);
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

        it('should add numbers as linked lists that are will result in a longer list.', () => {
            let list1 = new LinkedList();
            let list2 = new LinkedList();
            list1.add(9);
            list1.add(7);
            list1.add(8);
            list2.add(6);
            list2.add(8);
            list2.add(5);
            let list3 = sumLists(list1, list2);
            expect(list3.show()).toEqual([1,6,6,3]);
        });
    });

    describe('recursive', () => {
        it('should add numbers reversed as linked lists.', () => {
            let list1 = new NextNode(2);
            let list2 = new NextNode(3);
            expect(linkedListTraversal(sumListsRecursive(list1, list2))).toEqual([5]);
        });

        it('should add numbers reversed as linked lists with extra node.', () => {
            let list1 = new NextNode(7);
            let list2 = new NextNode(4);
            expect(linkedListTraversal(sumListsRecursive(list1, list2))).toEqual([1,1]);
        });

        it('should add numbers reversed as linked lists from question.', () => {
            let list1 = new NextNode(7);
            list1.next = new NextNode(1);
            list1.next.next = new NextNode(6);
            let list2 = new NextNode(5);
            list2.next = new NextNode(9);
            list2.next.next = new NextNode(2);
            expect(linkedListTraversal(sumListsRecursive(list1, list2))).toEqual([2,1,9]);
        });
    });
});