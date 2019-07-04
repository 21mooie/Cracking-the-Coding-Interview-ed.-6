var printNode = function(head) {
    var node = head;
    console.log('start of linked list');
    while (node !== null) {
      console.log(node.data);
      node = node.next;
    }
    console.log('end of linked list');
};

module.exports = printNode;