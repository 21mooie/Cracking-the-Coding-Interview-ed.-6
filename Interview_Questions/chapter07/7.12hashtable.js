// Hash Table: Design and implement a hash table which uses chaining
// (linked lists) to handle collisions.

const KeyValueNode = function(key, val, next=null) {
    this.key = key;
    this.val = val;
    this.next = next;
};

class HashTable {
    constructor(){
        this.table = [];
        this.constructTable();
    }

    constructTable(){
        for(let i=0; i<=27; i++){
            this.table.push(null);
        }
    }

    findNode(idx, key){
        let curr = this.table[idx];
        while(curr){
            if(curr.key === key){
                return curr;
            }
            curr = curr.next;
        };
        return null;
    }

    getIndex(key){
        return (key.toLowerCase().charCodeAt(0)-97)%27;
    }

    add(key, val){
        const idx = this.getIndex(key);
        let node = this.findNode(idx, key);
        if(node){ //key exists
            node.val = val;
            return;
        }
        const data = new KeyValueNode(key, val);
        if (this.table[idx] === null){
            this.table[idx] = data;
        } else {
            let last = this.table[idx];
            while(last.next){
                last = last.next;
            }
            last.next = data;
        }
    }

    get(key){
        const idx = this.getIndex(key);
        const node = this.findNode(idx, key);
        if(node){
            return node.val;
        }
        return null;
    }

    remove(key){
        const idx = this.getIndex(key);
        const node = this.findNode(idx, key);
        if(node){
            if(node === this.table[idx]){
                this.table[idx] = node.next;
            } else {
                let lastNode = this.table[idx];
                while(lastNode.next !== node){
                    lastNode = lastNode.next;
                }
                lastNode.next = node.next;
            }
        }
        return null;
    }

    showTable(){
        return this.table;
    }
}

module.exports = HashTable;