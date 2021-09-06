// Sparse Search: Given a sorted array of strings that is interspersed with empty strings,
// write a method to find the location of a given string.

const sparseSearch = (array, val) => {
    let left = 0, right = array.length-1;
    while(array[left] === ''){
        left++;
    }
    while(array[right] === '' ){
        right--;
    }
    while(left <= right){
        let mid = Math.floor((left+right)/2);
        while(array[mid] === ''){
            mid--;
        }
        if(array[mid] === val){
            return mid;
        }
        if(array[mid] < val){
            left = mid+1;
            while(array[left] === '' && left<array.length-1){
                left++;
            }
        }
        if(array[mid] > val){
            right = mid-1;
            while(array[right] === '' && right>-1){
                right--;
            }
        }
    }
    return -1;
};

module.exports = sparseSearch;