// Peaks and Valleys: In an array of integers, a "peak" is an element which is greater than or equal
// to the adjacent integers and a "valley" is an element which is less than or equal to the adjacent integers.
// For example, in the array {5, 8, 6, 2, 3, 4, 6}, {8, 6} are peaks and {S, 2} are valleys.
// Given an array of integers, sort the array into an alternating sequence of peaks and valleys.

const peaksAndValleys = (array) => {
    array.sort(function(a,b){
        return a-b;
    });
    for(let i=1; i<array.length; i+=2){
       let temp = array[i];
       array[i] = array[i-1];
       array[i-1] = temp;
    }
    return array;
};

module.exports = peaksAndValleys;