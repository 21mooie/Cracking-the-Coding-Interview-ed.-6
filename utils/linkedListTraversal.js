const linkedListTraversal = (head) => {
    let array = []
    while (head) {
        array.push(head.data);
        head = head.next;
    }
    return array;
}

module.exports = linkedListTraversal;