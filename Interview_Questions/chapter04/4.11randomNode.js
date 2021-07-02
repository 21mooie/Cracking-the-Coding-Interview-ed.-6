const { TreeNodeP } = require('../../utils/Node');

// Random Node: You are implementing a binary tree class from scratch which, 
// in addition to insert, find, and delete, has a method getRandomNode()
// which returns a random node from the tree.
// All nodes should be equally likely to be chosen.
// Design and implement an algorithm for getRandomNode,
// and explain how you would implement the rest of the methods.

class BST {
    constructor(val){
        this.root = new TreeNodeP(val);
        this.count = 1;
    }

    insert(val){
        let location = this.root;
        let node;
        while(location){
            node = location;
            if(val > location.data){
                location = location.right;
            } else {
                location = location.left;
            }
        }
        if(node.right === location){
            node.right = new TreeNode(val);
        } else {
            node.left = new TreeNodeP(val);
        }
        this.count++;
    }

    getRandomNode(){
        let node = this.root;
        let count = this.count;
        while(count>0){
            let direction = Math.floor(Math.random() * 3);
            switch(direction){
                case 0:
                    if (node.parent){
                        node = node.parent;
                    }
                    break;
                case 1:
                    if (node.left){
                        node = node.left;
                    }
                    break;
                case 2:
                    if (node.right){
                        node = node.right;
                    }
                    break;
                default:
                    break;
            }
            count--;
        }
        return node;
    }

}

module.exports = BST;