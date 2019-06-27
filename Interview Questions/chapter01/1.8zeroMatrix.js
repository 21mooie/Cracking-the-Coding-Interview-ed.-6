
// Zero Matrix:
// Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to O.

var findZeroes = (matrix) => {
    let sums = [[],[]];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if (matrix[i][j] === 0) {
                sums[0].push(i);
                sums[1].push(j);
            }
        }
    }
    return sums;
}

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
    const sums = findZeroes(matrix);
    return convertMatrix(matrix, sums)
}
let originalMatrix = [[0,1,3],[4,5,6],[7,8,9]];
console.log(zeroMatrix(originalMatrix));


// describe('Zero Matrix ', () => {
//     beforeEach(() => {
        
//     });
//     it('should convert zeroes for matrix needing converting', () => {
//         let originalMatrix = [[0,1,3],[4,5,6],[7,8,9]];
//         expect(zeroMatrix(originalMatrix)).toEqual([[0,0,0],[0,5,6],[0,8,9]]);
//     });
//     it('should convert not convert zeroes if matrix does not have zeroes', () => {

//     });
//     it('should convert zeroes if matrix has edge zeroes', () => {

//     });
//     it('should handle empty matrix', () => {

//     });
// })