// Sorted Search, No Size: You are given an array-like data structure Listy which lacks a size method.
// It does, however, have an elementAt(i) method that returns the element at index i in 0(1) time.
// If i is beyond the bounds of the data structure, it returns -1.
// (For this reason, the data structure only supports positive integers.)
// Given a Listy which contains sorted, positive integers, find the index at which an element x occurs.
// If x occurs multiple times, you may return any index.

const listy = (array, val) => {
    let idx = 1;
    while(array[idx]){
        idx = idx*2;
    }
    while(!array[idx]){
        idx--;
    }
    let right = idx; left = 0;
    while(left <= right){
        let mid = Math.floor((left+right)/2);
        if(array[mid] === val){
            return mid;
        }
        if(array[mid] > val){
            right = mid-1;
        }
        if(array[mid] < val){
            left = mid+1;
        }
    }
    return -1;
};

module.exports = listy;