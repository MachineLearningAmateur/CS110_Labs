window.addEventListener("load", (event) => { //need this listener to put the script within the header, otherwise put the script at the end
    console.log("Page fully loaded"); 
    //slots
    const spot1 = document.querySelector('.one');
    const spot2 = document.querySelector('.two');
    const spot3 = document.querySelector('.three');
    const spot4 = document.querySelector('.four');
    const spot5 = document.querySelector('.five');
    const spot6 = document.querySelector('.six');
    const spot7 = document.querySelector('.seven');
    const spot8 = document.querySelector('.eight');
    const spot9 = document.querySelector('.nine');

    //buttons
    const ngButton = document.getElementsByClassName("new_game");

    spot1.addEventListener('click', choice);
    spot2.addEventListener('click', choice);
    spot3.addEventListener('click', choice);
    spot4.addEventListener('click', choice);
    spot5.addEventListener('click', choice);
    spot6.addEventListener('click', choice);
    spot7.addEventListener('click', choice);
    spot8.addEventListener('click', choice);
    spot9.addEventListener('click', choice);
    //get the elements needed
});

var playerTurn = 1; //player 1 is X and player 2 is O
var player1Score = 0;
var player2Score = 0;
var dict = {"one" : [0,0], "two" : [1, 0], "three" : [2, 0], "four" : [0, 1], "five" : [1,1], "six" : [2,1], "seven" : [0,2], "eight" : [1, 2], "nine" : [2,2]};
var gameBoard = [['', '', ''], ['', '', ''], ['', '', '']]; //3 by 3 matrix


function choice(event) {
    let slot = event.className;
    console.log("something: ", slot);
    let currChoice = event.currentTarget.firstChild;
    if (playerTurn%2  == 1) {
        currChoice.innerHTML = "X";
        //gameBoard[dict[slot][0]][dict[slot][1]] = "X";
    } else {
        currChoice.innerHTML = "O";
        //gameBoard[dict[slot][0]][dict[slot][1]] = "O";
    }
    playerTurn += 1;
    console.log(gameBoard);
    //checkWinCon()
    //start timer?
}

function gameStart() { //if reset button is pressed start game, assuming 2 players
    playerTurn = 1
    gameBoard = [['', '', ''], ['', '', ''], ['', '', '']];
}

function getInput () {
    //check for player turn | use % to calculate turn | even is player X | odd is player O, get input and set board status
    
}

function updateBoard() {
    //update game board display
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
    if ((gameBoard[1][1] == gameBoard[1][2] == gameBoard[1][3]) || 
    (gameBoard[2][1] == gameBoard[2][2] == gameBoard[2][3]) ||
    (gameBoard[3][1] == gameBoard[3][2] == gameBoard[3][3]) ||
    (gameBoard[1][1] == gameBoard[2][1] == gameBoard[3][1]) ||
    (gameBoard[1][2] == gameBoard[2][2] == gameBoard[3][2]) || 
    (gameBoard[1][3] == gameBoard[2][3] == gameBoard[3][3]) || 
    (gameBoard[1][1] == gameBoard[2][2] == gameBoard[3][3]) || 
    (gameBoard[1][3] == gameBoard[2][2] == gameBoard[3][1])
    ) {
        if (playerTurn % 2 == 1) { // player 1 won
            player1Score++;
        }
        else {
            player2Score++;
        }
        alert("Game ended");
    }   
}




