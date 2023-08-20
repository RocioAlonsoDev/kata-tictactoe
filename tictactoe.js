class TicTacToe {
    playerX = [];
    playerO = [];
    turn = true;

    getPlayerX(){
        return this.playerX;
    }
    getPlayerO(){
        return this.playerO;
    }
    getTurn(){
        return this.turn;
    }
    setTurn(){
        this.turn=!this.turn;
    }
    fillCell(cell){
        if(this.playerX.includes(cell) || this.playerO.includes(cell)){
           
        }else{
            if(this.turn){
                this.playerX.push(cell);
            }else{
                this.playerO.push(cell);
            }
            this.setTurn();
        }
        
    }
}

module.exports = TicTacToe;