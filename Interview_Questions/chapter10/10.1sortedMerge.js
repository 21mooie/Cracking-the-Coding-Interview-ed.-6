// Sorted Merge: You are given two sorted arrays, A and B, where A has a large enough buffer at the
// end to hold B. Write a method to merge B into A in sorted order.

const insertionSort = (a, b) => {
    let length = a.length - b.length;
    let j = 0;
    for(let i=length; i<a.length; i++){
        a[i] = b[j];
        j++;
    }
    while(length < a.length){
        let curr = a[length];
        let j = length-1;
        let i = length;
        while(curr < a[j] && j > -1){
            a[i] = a[j];
            a[j] = curr;
            j--;
            i--;
        }
        length++;
    }
    return a;
};

const sortedMerge = (a, b) => {
    let alength = a.length - b.length -1;
    let blength = b.length-1;
    for (let i=a.length-1; i>-1; i--){
        if(alength > -1 && blength > -1){
            if(a[alength] > b[blength]){
                a[i] = a[alength]
                alength--;
            } else {
                a[i] = b[blength];
                blength--;
            }
        } else if (alength > -1){
            a[i] = a[alength]
            alength--;
        } else {
            a[i] = b[blength];
            blength--;
        }
    }
    return a;
}

exports.insertionSort = insertionSort;
exports.sortedMerge = sortedMerge;