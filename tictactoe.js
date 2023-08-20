class TicTacToe{
    playerX = [];
    turn = true;

    getPlayerX(){
        return this.playerX;
    }
    getTurn(){
        return this.turn;
    }
    setTurn(){
        this.turn=!this.turn;
    }
    fillCell(cell){
        this.playerX.push(cell);
        this.setTurn();
    }
}

module.exports = TicTacToe;