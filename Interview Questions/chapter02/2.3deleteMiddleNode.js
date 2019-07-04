var LinkedList = require('../utils/LinkedList');
var printList = require('../utils/printList');

var deleteMiddleNode = (c) => {
    let middle = c;
    middle.data = middle.next.data;
    middle.next = middle.next.next;
}

let a = new LinkedList('1');
let b = new LinkedList('2');
let c = new LinkedList('3');
let d = new LinkedList('4');
let e = new LinkedList('5');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

printList(a);
console.log('\n');
deleteMiddleNode(c);
printList(a);

