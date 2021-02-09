const LinkedList = require('../../utils/LinkedList');
const Iterator = require('../../utils/Iterator');

const partition = require('../../Interview_Questions/chapter02/2.4partition');

const isPartitionCorrect = (arr, threshold) => {
    let thresholdPassed = false;
    for (let val of arr) {
        if (val >= threshold) {
            thresholdPassed = true;
        }
        if (val < threshold && thresholdPassed) {
            return false;
        }
    }
    return true;
}

describe('Partition', () => {
    let list;
    beforeEach(() => {
        list = new LinkedList();
    });
    it('should partition linkedlist in such a way that all nodes less than value come before.', () => {
        list.add(3);
        list.add(5);
        list.add(8);
        list.add(5);
        list.add(10);
        list.add(2);
        list.add(1);
        expect(isPartitionCorrect(partition(list, 5).show(), 5)).toEqual(true);
    });
});