// CircularArray: Implement a CircularArray class that supports an array-like 
// data structure which can be efficiently rotated.
// If possible, the class should use a generic type (also called a template),
// and should support iteration via the standard for (Obj 0 : circularArray) notation.

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class CircularArray{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    getHead(){
        if(this.head){
            return this.head.val;
        }
        return null;
    }

    popHead(){
        if(this.head){
            let node = this.head;
            this.head = this.head.next;
            if(this.tail !== this.head){
                this.tail.next = this.head;
            } else {
                this.tail = null;
            }
            return node.val;
        }
    }

    add(val){
        let node = new Node(val);
        if(!this.head){
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
            this.tail.next = this.head;
        }
    }

    getTail(){
        if(this.tail){
            return this.tail.val
        }
        return null;
    }

    popTail(){
        if(this.head === null){
            return;
        }
        if(this.head === this.tail){
            let node = this.tail;
            this.head = null;
            this.tail = null;
            return node.val;
        } else if(this.head) {
            let oldTail = this.tail;
            let newTail = this.head;
            while(newTail.next !== this.tail){
                newTail = newTail.next;
            }
            this.tail = newTail;
            this.tail.next = this.head;
            return oldTail.val;
        }
    }
}

exports.CircularArray = CircularArray;