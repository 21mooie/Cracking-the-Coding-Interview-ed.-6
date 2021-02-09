const LinkedList = require('../../utils/LinkedList');

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
        expect(removeDups(list).show()).toEqual([1,2,3]);
    });
});