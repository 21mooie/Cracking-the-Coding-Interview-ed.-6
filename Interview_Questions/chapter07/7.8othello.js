const prompt = require('prompt-sync')();

// Othello: Othello is played as follows: 
// Each Othello piece is white on one side and black on the other.
// When a piece is surrounded by its opponents on both the left and right sides,
// or both the top and bottom, it is said to be captured and its color is flipped.
// On your turn, you must capture at least one of your opponent's pieces.
// The game ends when either user has no more valid moves.
// The win is assigned to the person with the most pieces.
// Implement the object-oriented design for Othello.


class Piece {
    constructor(color, location){
        this.color = color;
        this.location = location;
    }
}

class Board {
    constructor(size){
        this.board = [];
        for(let i=0; i<size;i++){
            this.board.push([]);
            for(let j=0;j<size;j++){
                this.board[i].push(null);
            }
        }
        this.size = size;
    }

    getSize(){
        return this.size;
    }

    placePiece(piece, location){
        this.board[location[0]][location[1]] = piece;
    }
}

class Player {
    constructor(color){
        this.color = color;
    }

    getColor(){
        return this.color;
    }

    move(board){
        let move = null;
        while(!move){
            move = prompt(`What is your move? Enter two nums in between 0 and ${board.getSize()}`);
            // logic to check if piece can be played where you entered
        }
        move = move.split('');
        let piece = new Piece(this.getColor());
        board.placePiece(piece, move);
    }
}

class Game {
    constructor(player1, player2, board){
        this.player1 = player1;
        this.player2 = player2;
        this.board = board;
    }

    movesAvailable(){
        for(let i=0; i<this.board.getSize(); i++){
            if(this.board[i].find(loc => !loc)){
                return true;
            }
        }
    }
}

exports.Piece = Piece;
exports.Board = Board;
exports.Player = Player;
exports.Game = Game;