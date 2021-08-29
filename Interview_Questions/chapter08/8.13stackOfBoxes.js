// Stack of Boxes: You have a stack of n boxes, with widths w1, heights h1, and depths d1.
// The boxes cannot be rotated and can only be stacked on top of one another if each box in the stack is strictly larger than the box above it in width, height, and depth.
// Implement a method to compute the height of the tallest possible stack.
// The height of a stack is the sum of the heights of each box.

const stackOfBoxes = (boxes) => {
    boxes.sort((a, b) => {
        const volA = a.height * a.depth * a.width;
        const volB = b.height * b.depth * b.width;
        if(volA > volB){
            return -1;
        }
        if(volA < volB){
            return 1;
        }
        return 0;
    });
    let maxHeight = 0;
    let possibleHeight = boxes.reduce((val, currBox) => {
        return val+currBox.height;
    }, 0);
    let idx = 0;

    function order(idx, currHeight, currBoxes){
        maxHeight = Math.max(maxHeight, currHeight);
        if(idx > boxes.length -1){
            return;
        }
        const lastBox = currBoxes[currBoxes.length-1];
        if(currBoxes.length === 0 || (lastBox.height > boxes[idx].height && lastBox.width > boxes[idx].width && lastBox.depth > boxes[idx].depth)){
            currBoxes.push(boxes[idx]);
            order(idx+1, currHeight+boxes[idx].height, currBoxes);
        } else {
            order(idx+1, currHeight, currBoxes);
        }
    }

    while(possibleHeight > maxHeight){
        order(idx, 0, []);
        possibleHeight -= boxes[idx].height;
        idx++;
    }
    return maxHeight;
};

module.exports = stackOfBoxes;