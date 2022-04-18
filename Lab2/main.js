window.addEventListener("load", (event) => { //need this listener to put the script within the header, otherwise put the script at the end
    console.log("Page fully loaded"); 
    //get the elements needed
});

var playerTurn = 0
var player1Score = 0
var player2Score = 0
var gameBoard = [['', '', ''], ['', '', ''], ['', '', '']]; //3 by 3 matrix

const spot1 = document.getElementById('one');
const spot2 = document.getElementById('two');
const spot3 = document.getElementById('three');
const spot4 = document.getElementById('four');
const spot5 = document.getElementById('five');
const spot6 = document.getElementById('six');
const spot7 = document.getElementById('seven');
const spot8 = document.getElementById('eight');
const spot9 = document.getElementById('nine');



function gameStart() { //if reset button is pressed start game, assuming 2 players


}

function getInput () {
    //check for player turn | use % to calculate turn | even is player X | odd is player O, get input and set board status
    if (playerTurn % 2 == 0 ) { // if player 1's turn
        
    }
    else { //if player 2's turn

    }
}

function updateBoard() {
    //update game board display
}

function newGame() {// if new game button is pressed, resets the board but keeps the score
    gameBoard = [['', '', ''], ['', '', ''], ['', '', '']]; 
}

function resetGame () { //if reset button is pressed, resets the board and score
    //clear board and score
    gameStart();
}

function checkWinCon() {
    //need to implement | increment the score of the player who won
    if ()
    console.log("we have a winner ...")
}




