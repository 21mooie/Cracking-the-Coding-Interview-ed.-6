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

var a = new LinkedList(1);
var b = new LinkedList(2);
var c = new LinkedList(3);
var d = new LinkedList(4);
var e = new LinkedList(5);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(kthToLastLinear(a, 0));
console.log(kthToLastLinear(a, 2));

