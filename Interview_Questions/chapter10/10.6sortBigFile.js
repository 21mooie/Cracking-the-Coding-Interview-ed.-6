// Sort Big File: Imagine you have a 20 GB file with one string per line.
// Explain how you would sort the file.

const sortBigFile = (file) => {
    function quicksort(left, right){
        let index = partition(left, right);
        if(left < index-1){
            quicksort(left, index-1);
        }
        if(index < right){
            quicksort(index, right)
        }
    }
    
    function partition(left, right){
        let pivot = file[Math.floor((left+right)/2)];
        while(left <= right){
            while(file[left] < pivot){
                left++;
            }
            while(file[right] > pivot){
                right--;
            }
            if(left<=right){
                let temp = file[left];
                file[left] = file[right];
                file[right] = temp;
                left++;
                right--;
            }
        }
        return left;
    }
    quicksort(0, file.length-1);
    return file;
};



module.exports = sortBigFile;