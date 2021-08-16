// Magic Index: A magic index in an array A[i... n-1] is defined to be an index such that A[i] = i.
// Given a sorted array of distinct integers, write a method to find a magic index,
// if one exists, in array A.
// FOLLOW UP What if the values are not distinct?

const magicIndexDistict = (array) => {
    let left = 0;
    let right = array.length-1;
    while(left <= right) {
        let mid = Math.floor((left+right)/2);
        if(array[mid] === mid){
            return mid;
        } else if (array[mid] > mid){
            right = mid-1;
        } else {
            left = mid+1;
        }
    }
    return false;
};

const magicIndex = (array, left, right) => {
    if(left > right){
        return false;
    }
    let mid = Math.floor((left+right)/2);
    if(array[mid] === mid){
        return mid;
    }
    let leftIdx = Math.min(mid-1, array[mid]);
    let lVal = magicIndex(array, left, leftIdx);
    if(lVal){
        return lVal;
    }
    let rightIdx = Math.max(mid+1, array[mid]);
    let rVal = magicIndex(array, rightIdx, right);
    return rVal;
};

module.exports = magicIndex;