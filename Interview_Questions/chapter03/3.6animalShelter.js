// Animal Shelter: An animal shelter, which holds only dogs and cats, operates on a strictly"first in, first out" basis.
// People must adopt either the "oldest" (based on arrival time) of all animals at the shelter,
// or they can select whether they would prefer a dog or a cat (and will receive the oldest animal of that type).
// They cannot select which specific animal they would like.
// Create the data structures to maintain this system and implement operations such as enqueue, dequeueAny, dequeueDog, and dequeueCat.
// You may use the built-in Linked List data structure.

const {NextNode} = require('../../utils/Node');

class AnimalShelterQueue {
    constructor(){
        this.catHead = null;
        this.dogHead = null;
        this.num = 1;
    }

    enqueue(data) {
        data.order = this.num;
        this.num++;
        if (data.type === 'cat') {
            if(this.catHead) {
                let tail = this.catHead;
                while(tail.next) {
                    tail = tail.next;
                }
                tail.next = new NextNode(data, null);
            } else {
                this.catHead = new NextNode(data, null);
            }
        } else {
            if(this.dogHead) {
                let tail = this.dogHead;
                while(tail.next) {
                    tail = tail.next;
                }
                tail.next = new NextNode(data, null);
            } else {
                this.dogHead = new NextNode(data, null);
            }
        }
    }

    dequeueAny() {
        let val;
        if (this.catHead && this.dogHead && this.catHead.data.order < this.dogHead.data.order) {
            val = this.catHead;
            this.catHead = this.catHead.next;
        } else {
            val = this.dogHead;
            this.dogHead = this.dogHead.next;
        }
        return val;
    }

    dequeueCat() {
        let val = this.catHead;
        this.catHead = this.catHead.next;
        return val;
    }

    dequeueDog() {
        let val = this.dogHead;
        this.dogHead = this.dogHead.next;
        return val;
    }
}


module.exports = AnimalShelterQueue;