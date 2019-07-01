
// Zero Matrix:
// Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to O.

var findZeroes = (matrix) => {
    let sums = [[],[]];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                sums[0].push(i);
                sums[1].push(j);
            }
        }
    }
    return sums;
}

// must keep track of if first row or coloumn has zeroes
var findZeroesReduced = (matrix) => {
    let firstRowZero = false, firstColZero = false;
    for (let i = 0; i < matrix.length; i++){
        if (matrix[i][0]){
            firstColZero = true;
        }
    }
    
    for (let j = 0; j < matrix[0].length; j++) {
        if (matrix[0][j]) {
            firstRowZero = true;
        }
    }
    for (let i = 1; i < matrix.length; i++) {
        for (let j = 1; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                matrix[0][j] = 0;
                matrix[i][0] = 0;
            }
        }
    }
    return [matrix, firstColZero, firstRowZero];
}

var convertMatrixReduced  = (matrix, firstColZero, firstRowZero) => {
    // convert cols
    for (let i = 0; i < matrix[0].length; i++){
        if (i === 0 && firstColZero) {
            if (matrix[0][i] === 0){
                for (let j = 0; j < matrix.length; j++) {
                    matrix[j][i] = 0;
                }
            }
        }
    }

    // convert rows
    for (let i = 0; i < matrix.length; i++){
        if (i === 0 && firstRowZero) {
            if (matrix[i][0] === 0){
                for (let j = 0; j < matrix[i].length; j++) {
                    matrix[i][j] = 0;
                }
            }
        }
    }
    return matrix;
}

// O(n^2) time complexity to search and convert matrix positions to zeroes. O(n) space complexity
var convertMatrix = (matrix, sums) => {
    for(let i = 0; i < sums[0].length; i++) {
        for (let j = 0; j< matrix[0].length; j++) {
            matrix[sums[0][i]][j] = 0;
        }
    }

    for(let i = 0; i < sums[1].length; i++) {
        for (let j = 0; j< matrix.length; j++) {
            matrix[j][sums[1][i]] = 0;
        }
    }
    return matrix;
}


var zeroMatrix = (matrix) => {
    // let firstRowZero, firstColZero
    // [matrix, firstColZero, firstRowZero] = findZeroesReduced(matrix);
    // return convertMatrixReduced(matrix, firstColZero, firstRowZero);
    const sums = findZeroes(matrix);
    return convertMatrix(matrix, sums);
}

// let originalMatrix = [[0,1,3],[4,5,6],[7,8,9]];
// console.log(zeroMatrix(originalMatrix));
// expect(zeroMatrix(originalMatrix)).toEqual([[0,0,0],[0,5,6],[0,8,9]]);


describe('Zero Matrix ', () => {
    beforeEach(() => {
        
    });
    it('should convert zeroes for matrix needing converting', () => {
        let originalMatrix = [[0,1,3],[4,5,6],[7,8,9]];
        expect(zeroMatrix(originalMatrix)).toEqual([[0,0,0],[0,5,6],[0,8,9]]);
    });
    it('should convert not convert zeroes if matrix does not have zeroes', () => {
        let originalMatrix = [[1,1,3],[4,5,6],[7,8,9]];
        expect(zeroMatrix(originalMatrix)).toEqual(originalMatrix);
    });
    it('should convert zeroes if matrix has edge zeroes', () => {
        let originalMatrix = [[0,1,3],[4,5,6],[7,8,0]];
        expect(zeroMatrix(originalMatrix)).toEqual([[0,0,0],[0,5,0],[0,0,0]]);
    });
    it('should handle empty matrix', () => {
        expect(zeroMatrix([])).toEqual([]);
    });
    it('should handle where 0 is first item', () => {
        let originalMatrix = [[0,1,3],[4,5,6],[7,8,9]];
        expect(zeroMatrix(originalMatrix)).toEqual([[0,0,0],[0,5,6],[0,8,9]]);
    });
})