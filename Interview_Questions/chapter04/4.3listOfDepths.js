const LinkedList = require('../../utils/LinkedList');
// List of Depths: Given a binary tree, design an algorithm which creates a linked list 
// of all the nodes at each depth (e.g., if you have a tree with depth 0, you'll have 0 linked lists).

const listOfDepths = (root) => {
    let result = [];
    if (!root){
        return result;
    }
    let queue = [root];
    while(queue.length > 0){
        let size = queue.length;
        let temp = new LinkedList();
        for (let i=0; i<size; i++){
            let top = queue.shift();
            if (top.left){
                queue.push(top.left);
            }
            if (top.right){
                queue.push(top.right);
            }
            temp.add(top.data);
        }
        result.push(temp);
    }
    return result;
};

module.exports = listOfDepths;