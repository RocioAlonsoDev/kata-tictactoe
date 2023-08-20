const TicTacToe = require('./tictactoe.js');

describe('Tic Tac Toe game testing',()=>{
    test('When a button is clicked, that cell is assigned to a player',
    ()=>{
        //setup
        const newGame = new TicTacToe();
        const selectedCell = 2;

        //act
        newGame.fillCell(selectedCell);
        let player = newGame.getPlayerX();
        const expectedResult = [2];

        //compare
        expect(player).toStrictEqual(expectedResult);
    })
    test('When a player plays, switch turns',
    ()=>{
        //setup
        const newGame = new TicTacToe();
        let cell = 7;

        //act
        let firstTurn = newGame.getTurn();
        newGame.fillCell(cell);
        let secondTurn = newGame.getTurn();

        //compare
        expect(firstTurn).toStrictEqual(!secondTurn);
    })
})
