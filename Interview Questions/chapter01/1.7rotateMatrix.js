// Rotate Matrix: Given an image represented by an NxN matrix,
// where each pixel in the image is 4 bytes,
// write a method to rotate the image by 90 degrees. Can you do this in place?

// check if matrix is NxN matrix
var checkMatrix = (nums) => {
    let matrix = nums.every(element => {
        return element.length === nums.length;
    });
    if (!matrix) {
        return false;
    }
    return true;
}

//switch x and y values of matrix
var transposeMatrix = (nums) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j=i; j < nums[i].length; j++) {
            const temp = nums[i][j];
            nums[i][j] = nums[j][i];
            nums[j][i] = temp;
        }
    }
    return nums;
}

// O(n^2) time complexity O(1) space complexity since this is done in place
var rotateMatrixRight = (nums) => {
    console.log('original matrix');
    console.log(nums);
    if (!checkMatrix(nums)) {
        return false;
    }
    nums = transposeMatrix(nums);
    console.log(nums);
    let temp;
    for(let i = 0; i < nums.length; i++) {
        // only swap for half inner list otherwise function would reverse swaps
        // i.e. [1, 2, 3, 4]
        // only run for i=1 & i=2
        // parseInt handles interger division better than Math.floor for negative numbers
        for (let j = 0; j < parseInt(nums.length/2); j++){
            temp = nums[i][j];
            nums[i][j] = nums[i][nums.length-1-j];
            nums[i][nums.length-1-j] = temp;
        }
    }
    console.log('\n')
    console.log('rotatedRight matrix');
    return nums;
}

// O(n^2) time complexity O(1) space complexity since this is done in place
var rotateMatrixLeft = (nums) => {
    console.log('original matrix');
    console.log(nums);
    if (!checkMatrix(nums)) {
        return false;
    }
    nums = transposeMatrix(nums);
    let temp;
    // only swap for n//2 of outer array otherwise function would reverse swaps
    // i.e. [1, 2, 3, 4]
    // only run for i=1 & i=2
    // parseInt handles interger division better than Math.floor for negative numbers
    for(let i = 0; i < parseInt(nums.length/2); i++) {
        for (let j = 0; j < nums.length; j++){
            temp = nums[i][j];
            nums[i][j] = nums[nums.length-1-i][j];
            nums[nums.length-1-i][j] = temp;
        }
    }
    console.log('\n')
    console.log('rotatedLeft matrix');
    return nums;
}

// transpose then switch cols to rotate right or switch rows to rotate left
console.log(rotateMatrixRight([[1,2,3,4], [5,6,7,8], [9,10,11,12], [13,14,15,16]]))
console.log(rotateMatrixRight([[1,2,3,4,5], [6,7,8,9,10], [11,12,13,14,15], [16,17,18,19,20], [21,22,23,24,25]]));
console.log(rotateMatrixLeft([[1,2,3,4], [5,6,7,8], [9,10,11,12], [13,14,15,16]]))
console.log(rotateMatrixLeft([[1,2,3,4,5], [6,7,8,9,10], [11,12,13,14,15], [16,17,18,19,20], [21,22,23,24,25]]));
