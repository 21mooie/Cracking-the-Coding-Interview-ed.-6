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

module.exports = magicIndexDistict;