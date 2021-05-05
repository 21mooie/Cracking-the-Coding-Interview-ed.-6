// Loop Detection: Given a circular linked list, implement an algorithm that returns the node at the
// beginning of the loop.`

const loopDetection = (list) => {
    let slow = list, fast = list.next;
    while (slow !== fast) {
        slow = slow.next;
        fast = fast.next.next;
    }
    slow = list;
    // explanation is lost on me a bit though :/
    while (slow != fast){
        slow = slow.next;
        fast = fast.next;
    }
    return slow;
}