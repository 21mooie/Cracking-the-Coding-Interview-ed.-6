// Three in One: Describe how you could use a single array to implement three stacks.

// I want top of each stack to point at what is currently on the top
class ThreeStack {
    constructor(initLength=9){
        this.values = new Array(initLength).fill(null);
        this.stackIdx = [
            {
                bottom: 0,
                top: 0
            },
            {
                bottom: Math.floor(initLength/3),
                top: Math.floor(initLength/3)
            },
            {
                bottom: Math.floor(initLength/3)*2,
                top: Math.floor(initLength/3)*2   
            }
        ];
    };

    showStackIndexes(){
        return this.stackIdx;
    }
    
    showStacks(){
        return this.values;
    }

    isFull(stackNum){
        // check top of current stack against bottom of next stack for stacks 0 & 1, stack 3 checks against length of array
        let status = false;
        switch(stackNum){
            case 0:
            case 1:
                if(this.stackIdx[stackNum].top === this.stackIdx[stackNum+1].bottom-1){
                    status = true;
                }
                break;
            case 2:
                if(this.stackIdx[stackNum].top === this.values.length-1){
                    status = true;
                }
            default:
                break;
        }
        return status;
    }

    increaseStack(stackNum){
        switch(stackNum){
            case 0:
            case 1:
                let newTop = this.stackIdx[stackNum].top+1;
                this.values.splice(newTop, 0, null);
                this.stackIdx[stackNum+1].bottom+=1;
                break;
            case 2:
                this.values.push(null);
                break;
            default:
                break;
        }
    }

    push(stackNum, val){
        //check if stack is full
        //if so add extra space to stack
        //add item
        //increase index of stack
        if (this.isFull(stackNum)){
            this.increaseStack(stackNum);
        }
        let topIndex = this.stackIdx[stackNum].top;
        if(this.values[topIndex] !== null){
            this.stackIdx[stackNum].top++;
        }
        this.values[this.stackIdx[stackNum].top] = val;
        
    }
}

module.exports = ThreeStack;