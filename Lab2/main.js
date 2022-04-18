window.addEventListener("load", (event) => { //need this listener to put the script within the header, otherwise put the script at the end
    console.log("Page fully loaded"); 
    //get the elements needed
});

var playerTurn = 0
var player1Score = 0
var player2Score = 0
var gameBoard = [['', '', ''], ['', '', ''], ['', '', '']]; //3 by 3 matrix

const spot1 = document.querySelector('one');
const spot2 = document.querySelector('two');
const spot3 = document.querySelector('three');
const spot4 = document.querySelector('four');
const spot5 = document.querySelector('five');
const spot6 = document.querySelector('six');
const spot7 = document.querySelector('seven');
const spot8 = document.querySelector('eight');
const spot9 = document.querySelector('nine');



function gameStart() { //if reset button is pressed start game, assuming 2 players
    playerTurn = 0
    player1Score = 0
    player2Score = 0
    gameBoard = [['', '', ''], ['', '', ''], ['', '', '']];
}

function getInput () {
    //check for player turn | use % to calculate turn | even is player X | odd is player O, get input and set board status
    
}

function updateBoard() {
    //update game board display
}

function newGame() {// if new game button is pressed, resets the board but keeps the score
    gameBoard = [['', '', ''], 
                ['', '', ''], 
                ['', '', '']]; 
}

function resetGame () { //if reset button is pressed, resets the board and score
    //clear board and score
    gameStart();
}

function checkWinCon() {
    //need to implement | increment the score of the player who won
    if ((gameBoard[1][1] == gameBoard[1][2] == gameBoard[1][3]) || 
    (gameBoard[2][1] == gameBoard[2][2] == gameBoard[2][3]) ||
    (gameBoard[3][1] == gameBoard[3][2] == gameBoard[3][3]) ||
    (gameBoard[1][1] == gameBoard[2][1] == gameBoard[3][1]) ||
    (gameBoard[1][2] == gameBoard[2][2] == gameBoard[3][2]) || 
    (gameBoard[1][3] == gameBoard[2][3] == gameBoard[3][3]) || 
    (gameBoard[1][1] == gameBoard[2][2] == gameBoard[3][3]) || 
    (gameBoard[1][3] == gameBoard[2][2] == gameBoard[3][1])
    ) {
        if (playerTurn % 2 == 0) { // player 1 won
            player1Score++;
        }
        else {
            player2Score++;
        }
        console.log("Game ended")
    }   
}




