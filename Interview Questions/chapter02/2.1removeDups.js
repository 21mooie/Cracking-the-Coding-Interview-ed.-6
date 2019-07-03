// Remove Dups: Write code to remove duplicates from an unsorted linked list.

//naive solution = if node not in map, push to map
//                 else delete
//O(n) space O(n) time complexity

var Node1 = function(data) {
  this.next = null;
  this.data = data;
};

var checkDups = function(head, node) {
    var currNode = head;
    while (currNode !== node) {
      if (currNode.value === node.value) {
        return true;
      }
      currNode = currNode.next;
    }
    return false;
  };

var printNode = function(head) {
    var node = head;
    console.log('start of linked list');
    while (node !== null) {
      console.log(node.value);
      node = node.next;
    }
    console.log('end of linked list');
  };
  
var removeDups = function(head) {
    var node = head;
    while (node !== null) {
      if (node.next !== null && checkDups(head, node.next)) {
        node.next = node.next.next;
      } else {
        node = node.next;
      }
    }
    return head;
  };
  

// O(n^2)
var removeDups1 = (head) => {
    let headCopyFast = head;
    let headCopySlow = head;
    let headCopy = head;
    headCopyFast = headCopyFast.next;
    while(headCopy != null) {
        while (headCopyFast != null) {
            if (headCopyFast.data === headCopy.data) {
                headCopySlow.next = headCopyFast.next;
                headCopyFast = headCopyFast.next;
            }
            headCopySlow = headCopySlow.next;
            headCopyFast = headCopyFast = headCopyFast.next;
        }
    }
    return head;
}
var printList = (head) => {
    while (head !== null) {
        console.log(head.data, ' ==> ');
        head = head.next;
    }
}

var a = new Node1('a');
var b = new Node1('b');
var c = new Node1('b');
var d = new Node1('a');
var e = new Node1('e');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

removeDups(a);
printNode(a);