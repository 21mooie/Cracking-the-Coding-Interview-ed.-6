// Return Kth to Last: Implement an algorithm to find the kth to last element of a singly linked list.

var LinkedList = function(data) {
    this.next = null;
    this.data = data;
}

var kthToLast = (head, k) => {
    let stack = [];
    while(head != null){
        stack.push(head.data);
        head = head.next;
    }
    while(k > 0 && stack.length > 1) {
        stack.pop();
        k--;
    }
    return stack.pop();
}

var kthToLastLinear = (head, k ) => {
    let headCopy = head;
    for (let i = 0; i < k; i++){
        headCopy = headCopy.next;
    }
    while(headCopy.next) {
        headCopy = headCopy.next;
        head = head.next;
    }
    return head.data;
}

//O(n) recursive solution
const kthToLastRecursive = (node, k, curr = -1) => {
    let answer;
    function recurse(node, k) {
        if (k<0) {
            return new Error('K < 0');
        }
        if (node.next) {
            recurse(node.next, k);
        }
        curr+=1;
        if (curr === k) {
            answer = node.data;
        }
        return answer;
    }
    return recurse(node, k);
};

exports.kthToLastRecursive = kthToLastRecursive;
