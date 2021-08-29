// Eight Queens: Write an algorithm to print all ways of arranging eight queens on an 8x8 chess board
// so that none of them share the same row, column, or diagonal.
// In this case, "diagonal" means all diagonals, not just the two that bisect the board.

const eightQueens = () => {
    let results = [];
    function checkValid(cols, row1, col1){
        for (let row2=0; row2<row1; row2++){
            let col2 = cols[row2];
            if(col1 === col2){
                return false;
            }
            let colDistance = Math.abs(col2 - col1);
            let rowDistance = row1 - row2;
            if(colDistance === rowDistance){
                return false;
            }
        }
        return true;
    }

    function placeQueens(row, cols){
        if(row === 8){
            results.push([...cols]);
        } else {
            for (let col=0; col<8; col++){
                if(checkValid(cols, row, col)){
                    cols[row] = col;
                    placeQueens(row+1, cols);
                }
            }
        }
    }

    placeQueens(0, [0, 0, 0, 0, 0, 0, 0, 0])
    return results.length;
};

module.exports = eightQueens;