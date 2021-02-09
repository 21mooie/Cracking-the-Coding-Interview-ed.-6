const Iterator = require('../../utils/Iterator');

// Partition: Write code to partition a linked list around a value x, 
// such that all nodes less than x come before all nodes greater than or equal to x.
//  If x is contained within the list, the values of x only need to be after the elements 
// less than x (see below). The partition element x can appear anywhere in the "right partition";
//  it does not need to appear between the left and right partitions.

// O(2n) since the list is traversed twice in total.
// The first traversal determines the number of low numbers in the array;
// The second traversal swaps numbers less than to the front of the array
// without needing to reset to start of array after each swap.
const partition = function(list, threshold) {
    const numLessThan = list.show().reduce((acc, curr) => {
        if (curr < threshold) {
            acc += 1;
        }
        return acc;
    }, 0);
    const firstIt = new Iterator(list);
    const secondIt = new Iterator(list);
    for (let i=0; i<numLessThan; i++) {
        if (firstIt.getData() >= threshold) {
            while(secondIt.getData() >= threshold && secondIt.peekNext()) {
                secondIt.getNext();
            }
            const temp = firstIt.getData();
            firstIt.setData(secondIt.getData());
            secondIt.setData(temp);
        }
        firstIt.getNext();
        secondIt.getNext();
    }
    return list;
}

module.exports = partition;