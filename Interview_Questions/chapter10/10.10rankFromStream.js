// Rank from Stream: Imagine you are reading in a stream of integers.
// Periodically, you wish to be able to look up the rank of a number x
// (the number of values less than or equal to x).
// Implement the data structures and algorithms to support these operations.
// That is, implement the method track (in t x), which is called when each number is generated,
// and the method getRankOfNumber(int x) , which returns the number of values less than or equal to X

const { TreeNode } = require("../../utils/Node");

// (not including x itself).
class Rank{
    constructor(){
        this.root = null;    
    }

    track(elem){
        if(!this.root){
            this.root = [new TreeNode(elem), 0];
            return;
        }
        let curr = this.root;
        let past = null;
        let val = 0;
        while(curr){
            past = curr;
            if(elem < curr[0].data){
                curr[1]+=1;
                curr = curr[0].left;
            } else if (elem > curr[0].data){
                val = curr[1]+1;
                curr = curr[0].right;
            } else {
                curr[1]+=1;
                return;
            }
        }
        if(elem <= past[0].data){
            past[0].left = [new TreeNode(elem), val];
        } else {
            past[0].right = [new TreeNode(elem), val];
        }
    }

    getRankOfNumber(elem){
        let curr = this.root;
        while(curr){
            if(curr[0].data === elem){
                return curr[1];
            }
            if(elem < curr[0].data){
                curr = curr[0].left;
            } else {
                curr = curr[0].right;
            }
        }
        return 'Not Found';
    }
};

const rankFromStream = (stream) => {
    let rank = new Rank();
    for (let i = 0; i<stream.length; i++){
        rank.track(stream[i]);
    }
    return rank;
};

module.exports = rankFromStream;