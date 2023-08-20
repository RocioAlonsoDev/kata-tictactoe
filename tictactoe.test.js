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
    test('When cell 2 and 3 are selected, they are assigned to playerX and playerO respectively',
    ()=>{
        //setup
        const newGame = new TicTacToe();

        //act
        newGame.fillCell(2);
        newGame.fillCell(3);
        let playerX = newGame.getPlayerX();        
        let playerO = newGame.getPlayerO();
        expectedResultX = [2];
        expectedResultO = [3];

        //compare
        expect(playerX).toStrictEqual(expectedResultX);
        expect(playerO).toStrictEqual(expectedResultO);
    })
    test('When a cell is selected, it cannot be selected again in the same game',
    ()=>{
        //setup
        const newGame = new TicTacToe();

        //act
        newGame.fillCell(5);
        newGame.fillCell(5);
        newGame.fillCell(6);
        newGame.fillCell(1);
        let playerX = newGame.getPlayerX();        
        let playerO = newGame.getPlayerO();
        expectedResultX = [5,1];
        expectedResultO = [6];

        //compare
        expect(playerX).toStrictEqual(expectedResultX);
        expect(playerO).toStrictEqual(expectedResultO);
    })
    test('When a player selects a winning combination, the player wins and the game is over',
    ()=>{
        //setup
        const newGame = new TicTacToe();

        //act
        newGame.fillCell(5);
        newGame.fillCell(8);
        newGame.fillCell(3);
        newGame.fillCell(1);
        newGame.fillCell(4);
        let playerX = newGame.getPlayerX();        
        let playerO = newGame.getPlayerO();
        let turn = newGame.getTurn();
        expectedResultX = [];
        expectedResultO = [];
        expectedResultTurn = true;

        //compare
        expect(playerX).toStrictEqual(expectedResultX);
        expect(playerO).toStrictEqual(expectedResultO);
        expect(turn).toStrictEqual(expectedResultTurn);

    })
})
