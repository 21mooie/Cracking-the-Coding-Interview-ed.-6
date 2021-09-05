// Search in Rotated Array: Given a sorted array of n integers that has been rotated an unknown number of times,
// write code to find an element in the array.
// You may assume that the array was originally sorted in increasing order.

const search = (array, val) => {
    let left = 0, right = array.length-1, mid = Math.floor((right+left)/2);
    while(!(array[mid] <= array[left]) && (array[mid-1] > array[mid])){
        if(array[mid] > array[left]){
            left = mid+1;
        }
        if(array[mid-1] < array[mid]){
            right = mid-1;
        }
        mid = Math.floor((right+left)/2);
    }
    if(val > array[0]){
        left = 0;
        right = mid-1;
    } else {
        left = mid;
        right = array.length-1;
    }
    while(left<=right){
        mid = Math.floor((right+left)/2);
        if(array[mid] === val){
            return mid;
        }
        if(array[mid] < val){
            left = mid+1;
        }
        if(array[mid] > val){
            right = mid-1;
        }
    }
    return -1;
};

module.exports = search;
