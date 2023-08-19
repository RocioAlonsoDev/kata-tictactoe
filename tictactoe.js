class TicTacToe{
    playerX = [];

    getPlayerX(){
        return this.playerX;
    }

    fillCell(cell){
         this.playerX.push(cell);
    }
}

module.exports = TicTacToe;