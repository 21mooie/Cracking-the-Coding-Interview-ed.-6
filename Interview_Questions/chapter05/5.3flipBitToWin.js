// Flip Bit to Win: You have an integer and you can flip exactly one bit from a 0 to a 1.
// Write code to find the length of the longest sequence of ls you could create.

const flipBitToWin = (num) => {
    num = parseInt(num).toString(2);
    let maxCount = 0;
    let currCount = 0;
    let usedFlip = false;
    let savedLocation = null;
    for(let i=0; i<num.length; i++){
        if(num[i]==='1'){
            currCount++;
        } else{
            if(!usedFlip){
                currCount++;
                savedLocation = i;
                usedFlip = true;
            } else {
                maxCount = Math.max(currCount, maxCount);
                currCount = 0;
                i = savedLocation;
                usedFlip = false;
            }
        }
    }
    return Math.max(maxCount, currCount);
};

const flipBitToWinNoString = null;

module.exports = flipBitToWin;