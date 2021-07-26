const prompt = require('prompt-sync')();
// Minesweeper: Design and implement a text-based Minesweeper game.
// Minesweeper is the classic single-player computer game where an NxN grid
// has B mines (or bombs) hidden across the grid.
// The remaining cells are either blank or have a number behind them.
// The numbers reflect the number of bombs in the surrounding eight cells.
// The user then uncovers a cell. If it is a bomb, the player loses.
// If it is a number, the number is exposed.
// If it is a blank cell, this cell and all adjacent blank cells
// (up to and including the surrounding numeric cells) are exposed.
// The player wins when all non-bomb cells are exposed.
// The player can also flag certain places as potential bombs.
// This doesn't affect game play, other than to block the user from
// accidentally clicking a cell that is thought to have a bomb.
// (Tip for the reader: if you're not familiar with this game,
// please playa few rounds online first.)

class Game {
    constructor(){
        this.board = [];
        this.constructBoard();
        this.addBombsToBoard();
    }

    constructBoard(){
        for (let i=0; i<7; i++){
            this.board.push([]);
            for(let j=0; j<7; j++){
                this.board[this.getBoardLength()-1].push(0);
            }
        }
    }

    addBombsToBoard(){
        let numBombs = Math.floor(Math.random()*7+1);
        for (let i=0; i<numBombs; i++){
            let bombRow, bombCol;
            while(!bombRow || !bombCol || this.isLocationABomb(bombRow, bombCol)){
                bombRow = Math.floor(Math.random()*7);
                bombCol = Math.floor(Math.random()*7);
            }
            this.setToBomb(bombRow, bombCol);
            this.updateSurroundings(bombRow, bombCol);
        }
    }

    getBoardLength(){
        return this.board.length;
    }

    showBoard(){
        for(let i=0; i<this.getBoardLength(); i++){
            let str = '';
            for(let j=0; j<this.getBoardLength(); j++){
                str += this.board[i][j] + ' ';
            }
            console.log(str);
        }
    }

    isLocationABomb(row, col){
        return this.board[row][col] === null;
    }

    setToBomb(row, col){
        this.board[row][col] = null;
    }

    updateSurroundings(row, col){
        for(let i=row-1; i<row+2; i++){
            for(let j=col-1; j<col+2; j++){
                if(i>0 && i<this.getBoardLength() && j>0 && j<this.getBoardLength()){
                    if((i !== row && (j === col || j !== col)) || (j!== row && (i===row || i !== row))){
                        if(!this.isLocationABomb(i, j)){
                            this.board[i][j]++;
                        }
                    }
                }
            }
        }
    }
}

class Player {
    constructor(){
    }

    move(){
        let move = [];
        while(!move || move.length<2 || move[0] < 0 || move[0] > 6 || move[1] < 0 || move[1] > 6){
            let move0 = prompt('What is your row? ');
            let move1 = prompt('What is your col? ');
            move = [+move0, +move1];
        }
        
    }
}
//how to make a singleton with commonjs
exports.Game = new Game();
exports.Player = Player;
