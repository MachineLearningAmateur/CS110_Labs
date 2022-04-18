window.addEventListener("load", (event) => { //need this listener to put the script within the header, otherwise put the script at the end
    console.log("Page fully loaded"); 
    const spot1 = document.querySelector('.one');
    const spot2 = document.querySelector('.two');
    const spot3 = document.querySelector('.three');
    const spot4 = document.querySelector('.four');
    const spot5 = document.querySelector('.five');
    const spot6 = document.querySelector('.six');
    const spot7 = document.querySelector('.seven');
    const spot8 = document.querySelector('.eight');
    const spot9 = document.querySelector('.nine');

    spot1.addEventListener('click', (event) => {
        if (playerTurn % 2 == 1) { 
            gameBoard[1][1] = 'X';
        }
        else {
            gameBoard[1][1] = '0';
        }
        updateBoard();
    });
    spot2.addEventListener('click', (event) => {
        if (playerTurn % 2 == 1) { 
            gameBoard[2][1] = 'X';
        }
        else {
            gameBoard[2][1] = '0';
        }
        updateBoard();
    });
    spot3.addEventListener('click', (event) => {
        if (playerTurn % 2 == 1) { 
            gameBoard[3][1] = 'X';
        }
        else {
            gameBoard[3][1] = '0';
        }
        updateBoard();
    });
    spot4.addEventListener('click', (event) => {
        if (playerTurn % 2 == 1) { 
            gameBoard[1][2] = 'X';
        }
        else {
            gameBoard[1][2] = '0';
        }
        updateBoard();
    });
    spot5.addEventListener('click', (event) => {
        if (playerTurn % 2 == 1) { 
            gameBoard[2][2] = 'X';
        }
        else {
            gameBoard[2][2] = '0';
        }
        updateBoard();
        });
    spot6.addEventListener('click', (event) => {
        if (playerTurn % 2 == 1) { 
            gameBoard[3][2] = 'X';
        }
        else {
            gameBoard[3][2] = '0';
        }
        updateBoard();
        });
    spot7.addEventListener('click', (event) => {
        if (playerTurn % 2 == 1) { 
            gameBoard[1][3] = 'X';
        }
        else {
            gameBoard[1][3] = '0';
        }
        updateBoard();
        });
    spot8.addEventListener('click', (event) => {
        if (playerTurn % 2 == 1) { 
            gameBoard[2][3] = 'X';
        }
        else {
            gameBoard[2][3] = '0';
        }
        updateBoard();
        });
    spot9.addEventListener('click', (event) => {
        if (playerTurn % 2 == 1) {
            gameBoard[3][3] = 'X';
        }
        else {
            gameBoard[3][3] = '0';
        }
        updateBoard(); 
       });
    //get the elements needed
});

var playerTurn = 1; //player 1 is X and player 2 is O
var player1Score = 0;
var player2Score = 0;
var gameBoard = [['', '', ''], ['', '', ''], ['', '', '']]; //3 by 3 matrix
var variables = ['']


function gameStart() { //if reset button is pressed start game, assuming 2 players
    playerTurn = 1
    gameBoard = [['', '', ''], ['', '', ''], ['', '', '']];
}

function getInput () {
    //check for player turn | use % to calculate turn | even is player X | odd is player O, get input and set board status
    
}

function updateBoard() {
    //update game board display
    let i = 0;
    let j = 0;
    let flag = true;
    
    while (flag) {
        
    }

    console.log("1");
}

function clearBoard() {

}

function newGame() {// if new game button is pressed, resets the board but keeps the score
    gameBoard = [['', '', ''], 
                ['', '', ''], 
                ['', '', '']]; 
}

function resetGame () { //if reset button is pressed, resets the board and score
    //clear board and score
    player1Score = 0
    player2Score = 0
    gameStart();
}

function checkWinCon() {
    //need to implement | increment the score of the player who won
    if ((gameBoard[0][0] == gameBoard[0][1] == gameBoard[0][2]) || 
    (gameBoard[1][0] == gameBoard[1][1] == gameBoard[1][2]) ||
    (gameBoard[2][0] == gameBoard[2][1] == gameBoard[2][2]) ||
    (gameBoard[0][0] == gameBoard[1][0] == gameBoard[2][0]) ||
    (gameBoard[0][1] == gameBoard[1][1] == gameBoard[2][1]) || 
    (gameBoard[0][2] == gameBoard[1][2] == gameBoard[2][2]) || 
    (gameBoard[0][0] == gameBoard[1][1] == gameBoard[2][2]) || 
    (gameBoard[0][2] == gameBoard[1][1] == gameBoard[2][0])
    ) {
        if (playerTurn % 2 == 1) { // player 1 won
            player1Score++;
        }
        else {
            player2Score++;
        }
        console.log("Game ended")
    }   
}




