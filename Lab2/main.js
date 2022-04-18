window.addEventListener("load", (event) => { //need this listener to put the script within the header, otherwise put the script at the end
    console.log("Page fully loaded"); 
    //get the elements needed
});

var playerTurn = 0
var player1Score = 0
var player2Score = 0
var gameBoard = [['', '', ''], ['', '', ''], ['', '', '']]; //3 by 3 matrix


function gameStart() { //if new game button is pressed start game, assuming 2 players


}

function getInput () {
    //check for player turn | use % to calculate turn | even is player X | odd is player O, get input and set board status
}

function updateBoard() {
    //update game board display
}

function newGame() { // if new game button is pressed, resets the board but keeps the score
    gameBoard = [['', '', ''], ['', '', ''], ['', '', '']]; 
}

function resetGame () { //if reset button is pressed, resets the board and score
    //clear board and score
    playerTurn = 0
    player1Score = 0
    player2Score = 0
    gameBoard = [['', '', ''], ['', '', ''], ['', '', '']]; 
}

function checkWinCon() {
    //need to implement | increment the score of the player who won
    console.log("we have a winner ...")
}




