// Sorted Matrix Search: Given an M x N matrix in which each row and each column is sorted in
// ascending order, write a method to find an element.

const sortedMatrixSearch = (matrix, val) => {
    function recurse(matrix, val, row, col){
        if(row<0 || row>matrix.length-1 || col<0 || col>matrix[row].length-1){
            return -1;
        }
        if(matrix[row][col] === val){
            return [row, col];
        }
        if(matrix[row][col] > val){
            return recurse(matrix, val, row, col-1);
        } else {
            return recurse(matrix, val, row+1, col);
        }
    }
    return recurse(matrix, val, 0, matrix[0].length-1)
};

module.exports = sortedMatrixSearch;