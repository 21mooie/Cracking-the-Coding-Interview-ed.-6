// Stack of Plates: Imagine a (literal) stack of plates.
// If the stack gets too high, it might topple.
// Therefore, in real life, we would likely start a new stack when the previous stack exceeds some threshold.
// Implement a data structure SetOfStacks that mimics this.
// SetOfStacks should be composed of several stacks and should create a new stack once the previous one exceeds capacity.
// SetOfStacks. push () and SetOfStacks. pop() should behave identically to a single stack
// (that is, pop ( ) should return the same values as it would if there were just a single stack).
// FOLLOW UP
// Implement a function popAt (int index) which performs a pop operation on a specific sub- stack.


const {Stack} = require('../../utils/Stack');

const SetOfStacks = function(maxHeightOfStack) {
    this.maxHeightOfStack = maxHeightOfStack;
    this.heightOfLastStack = 0;
    this.stacks = [new Stack()];
}

SetOfStacks.prototype.push = function(val) {
    if (this.heightOfLastStack === this.maxHeightOfStack) {
        this.stacks.push(new Stack());
        this.heightOfLastStack = 0;
    }
    this.stacks[this.stacks.length -1].push(val);
    this.heightOfLastStack++;
}

SetOfStacks.prototype.pop = function(val) {
    if (this.heightOfLastStack > 1) {
        this.heightOfLastStack--;
        return this.stacks[this.stacks.length-1].pop();
    } else {
        const val = this.stacks[this.stacks.length-1].pop();
        this.stacks.pop();
        this.heightOfLastStack = this.maxHeightOfStack;
    }
    
}

SetOfStacks.prototype.popAt = function(stackNum) {
    if (stackNum >= this.stacks.length) {
        return null;
    }
    let x = this.stacks[stackNum].pop();
    let tempStack = new Stack();
    for (let i=stackNum; i<this.stacks.length-1; i++) {
        while(!this.stack[i+1].isEmpty) {
            tempStack.push(this.stack[i+1].pop());
        }
        this.stack[i].push(tempStack.pop());
        while(!tempStack.isEmpty()) {
            this.stack[i+1].push(tempStack.pop());
        }
    }
}