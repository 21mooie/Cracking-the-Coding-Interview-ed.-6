// Rotate Matrix: Given an image represented by an NxN matrix,
// where each pixel in the image is 4 bytes,
// write a method to rotate the image by 90 degrees. Can you do this in place?

var rotateMatrix = (nums) => {
    let temp;
    let matrix = nums.every(element => {
        return element.length === nums.length;
    });
    if (!matrix) {
        return false;
    }
    for (let i=0; i < nums.length-1; i++) {
        temp = nums[0][i];
        //top
        nums[0][i] = nums[nums.length-1-i][0];
        //left
        nums[nums.length-1-i][0] = nums[nums.length-1][nums.length-1-i];
        //right
        nums[nums.length-1][nums.length-1-i] = nums[i][nums.length-1];
        //bottom
        nums[i][nums.length-1] = temp;
    }
    return nums;
}

console.log(rotateMatrix([[1,2,3],[4,5,6],[7,8,9]]));

console.log(rotateMatrix([[1,2,3,4], [5,6,7,8], [9,10,11,12], [13,14,15,16]]));

