const { Player, Game, Board } = require("../../Interview_Questions/chapter07/7.8othello")


const player1 = new Player('black');
const player2 = new Player('white');
const board = new Board(8);
const game = new Game(player1, player2, board);
// while(game.movesAvailable()){
//     player1.move(board);
// }