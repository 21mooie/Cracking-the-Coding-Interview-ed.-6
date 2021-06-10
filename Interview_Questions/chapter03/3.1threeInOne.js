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
                //pushing to stack 0 can cause stack1 to overflow to the point where stack 2 also needs to increment. need to handle that case
            case 1:
                let newTop = this.stackIdx[stackNum].top+1;
                this.values.splice(newTop, 0, null);
                if(this.stackIdx[stackNum+1].bottom===this.stackIdx[stackNum+1].top){
                    this.stackIdx[stackNum+1].top+=1;
                }
                this.stackIdx[stackNum+1].bottom+=1;
                break;
            case 2:
                this.values.push(null);
                break;
            default:
                break;
        }
    }

    getStackTop(stackNum){
        return this.stackIdx[stackNum].top;
    }

    setStackTop(stackNum, val){
        this.stackIdx[stackNum].top+=val;
    }

    getStackBottom(stackNum){
        return this.stackIdx[stackNum].bottom;
    }

    isEmpty(stackNum){
        return this.getStackTop(stackNum) === this.getStackBottom(stackNum);
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

    pop(stackNum) {
        //check if stack is empty
        // if not then remove top element and return 
        if(this.isEmpty(stackNum)){
            return 'STACK EMPTY';
        }
        let val = this.values[this.getStackTop(stackNum)];
        this.values[this.getStackTop(stackNum)] = null;
        this.setStackTop(stackNum, -1);
        return val;
    }
}

module.exports = ThreeStack;