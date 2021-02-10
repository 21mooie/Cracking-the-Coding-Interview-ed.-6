const LinkedList = require('../../utils/LinkedList');

const { removeDupsMap, removeDupsQuad} = require('../../Interview_Questions/chapter02/2.1removeDups');

describe('Remove Duplicates', () => {
    let list;
    beforeEach(() => {
        list = new LinkedList();
    });
    it('should remove all duplicates from a LinkedList.', () => {
        list.add(1);
        list.add(2);
        list.add(3);
        list.add(1);
        list.add(3);
        expect(removeDupsMap(list).show()).toEqual([1,2,3]);
    });
    it('should not remove any node if there are no duplicates.', () => {
        list.add(1);
        list.add(2);
        list.add(3);
        expect(removeDupsMap(list).show()).toEqual([1,2,3]);
    });
    it('should remove all duplicates from a LinkedList.', () => {
        list.add(1);
        list.add(2);
        list.add(4);
        list.add(3);
        list.add(4);
        list.add(1);
        list.add(3);
        expect(removeDupsQuad(list).show()).toEqual([1,2,4,3]);
    });
});