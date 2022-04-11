window.addEventListener("load", (event) => { //need this listener to put the script within the header, otherwise put the script at the end
    console.log("Page fully loaded"); 
    //get the elements needed
});

var playerTurn = 0
var player1Score = 0
var player2Score = 0
var gameBoard = [['', '', ''], ['', '', ''], ['', '', '']]; //3 by 3 matrix


function gameStart() {
    //check for player turn | use % to calculate turn | even is player X | odd is player O
}

function updateBoard() {
    //update game board and display the correct move for the respective player
}

function resetGame () {
    //clear board
}

function resetScore() {
    //reset Score 
}

function checkWinCon() {
    //need to implement | increment the score of the player who won
    console.log("we have a winner ...")
}




