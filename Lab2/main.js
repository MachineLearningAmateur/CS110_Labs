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
    var ngButton = document.getElementsByClassName("new_game");
    var resetButton = document.getElementsByClassName("reset");
    var toggleButton = document.getElementById("mode");

    var results = document.getElementById("results");

    toggleButton.addEventListener('click', toggleMode);
    ngButton[0].addEventListener('click', newGame);
    resetButton[0].addEventListener('click', resetGame);

    spot1.addEventListener('click', choice);
    spot2.addEventListener('click', choice);
    spot3.addEventListener('click', choice);
    spot4.addEventListener('click', choice);
    spot5.addEventListener('click', choice);
    spot6.addEventListener('click', choice);
    spot7.addEventListener('click', choice);
    spot8.addEventListener('click', choice);
    spot9.addEventListener('click', choice);
});

var playerTurn = 1; //player 1 is X and player 2 is O
var player1Score = 0;
var player2Score = 0;
var dict = {"one" : [0,0], "two" : [1, 0], "three" : [2, 0], "four" : [0, 1], "five" : [1,1], "six" : [2,1], "seven" : [0,2], "eight" : [1, 2], "nine" : [2,2]};
var gameBoard = [['', '', ''], ['', '', ''], ['', '', '']]; //3 by 3 matrix

var newTimer;
var countDown;
var secs = 5;
var aiMode = false;
var winner = false;

//updates the game board in real time
function choice(event) { 
    clearTimeout(newTimer);
    let slot = event.currentTarget.className;
    //console.log("something: ", slot);
    let currChoice = event.currentTarget.firstChild;

    if (currChoice.innerHTML != '' || winner) {
        return 
    }

    if (playerTurn%2  == 1) {
        currChoice.innerHTML = "X";
        gameBoard[dict[slot][0]][dict[slot][1]] = "X";
        document.getElementsByClassName("display_player")[0].innerHTML = "O";
    } else {
        currChoice.innerHTML = "O";
        gameBoard[dict[slot][0]][dict[slot][1]] = "O";
        document.getElementsByClassName("display_player")[0].innerHTML = "X";
    }
    
    playerTurn += 1;
    if (aiMode) {
        //do something
        aiChoice();
    }
    //checkWinCon()
    newTimer = setTimeout(skipTurn, 5000); 
    clearTimeout(countDown);
    secs = 5;
    updateCountDown(); //starts the timer

    if (isGameBoardFull()) {
        results.innerHTML = "Match Result: It's a tie!"
        clearTimeout(countDown);
        clearTimeout(newTimer);
        var el = document.getElementById("timer");
        el.innerHTML = "Timer Countdown: 0";
    }
}

function aiChoice() {
    //do ai stuff
    document.getElementsByClassName("display_player")[0].innerHTML = "X";
    var i = Math.floor(Math.random() * 3);
    var j = Math.floor(Math.random() * 3);
    playerTurn += 1;
    if (isGameBoardFull()) {
        clearTimeout(countDown);
        clearTimeout(newTimer);
        var el = document.getElementById("timer");
        el.innerHTML = "Timer Countdown: 0";
        return;
    }
    while (true) {
        console.log(i, j);
        if (gameBoard[i][j] == '') {
            gameBoard[i][j] = 'O';
            Object.entries(dict).forEach(([key, value]) => {
                console.log(value);
                if (value[0] == i && value[1] == j){
                    console.log(key);
                    document.getElementsByClassName(key)[0].firstChild.innerHTML = "O";
                }
            });
            console.log(gameBoard);
            break;
        } else {
            i = Math.floor(Math.random() * 3);
            j = Math.floor(Math.random() * 3);
        }
    }
}

//checks if gameBoard is filled
function isGameBoardFull() {
    var filled = 0;
    for (var i = 0; i < gameBoard.length; i++) {
        for (var j = 0; j < gameBoard[i].length; j++) {
            if (gameBoard[i][j] != '') {
                filled += 1;
            }
        }
    }

    if (filled == 9) {
        return true;
    } else {
        return false;
    }
}

//updates the countdown for skipping player's turn
function updateCountDown() {
    var el = document.getElementById("timer");
    el.innerHTML = "Timer Countdown: " + secs;
    secs--;
    countDown = setTimeout(updateCountDown, 1000);
}

//skips player's turn when countdown is met
function skipTurn() {
    alert("Current Player " + (playerTurn%2 == 1 ? 'X' : 'O') + "'s turn has been skipped!");
    playerTurn += 1;
    document.getElementsByClassName("display_player")[0].innerHTML = playerTurn%2 == 1 ? 'X' : 'O';
    if (aiMode) {
        aiChoice();
    }
    newTimer = setTimeout(skipTurn, 5000); 
    secs = 5;
}

//clears the board that is being displayed on the webpage
function clearBoard() {
    let choices = document.getElementsByClassName("xo");
    for (var i = 0; i < choices.length; i++) {
        console.log(choices[i]);
        choices[i].innerHTML = "";
    }
    results.innerHTML = "Match Result: &nbsp &nbsp &nbsp &nbsp &nbsp";
}

// if new game button is pressed, resets the board but keeps the score
function newGame() {
    gameBoard = [['', '', ''], 
                ['', '', ''], 
                ['', '', '']]; 
    clearBoard();
    playerTurn = 1;
    clearTimeout(newTimer);
    clearTimeout(countDown);
    var el = document.getElementById("timer");
    el.innerHTML = "Timer Countdown: 0";
    document.getElementsByClassName("display_player")[0].innerHTML = playerTurn%2 == 1 ? 'X' : 'O';
}

//if reset button is pressed, resets the board and score
function resetGame () { 
    //clear board and score
    player1Score = 0
    player2Score = 0
    newGame();
    aiMode = true;
    toggleMode();
    alert("Game has been reset!");
}

//toggles the current game mode from player to ai or vice versa
function toggleMode() {
    aiMode = !aiMode; //toggles the opposite
    var displayMode = document.getElementById("modeDisplay");
    newGame(); //to avoid breaking the game, just start a new game if game mode is toggled.
    if (aiMode) {
        displayMode.innerHTML = "Current Mode: Player against AI";
    } else {
        displayMode.innerHTML = "Current Mode: Player against Player";
    }

}

//checks if the win condition is met
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
        alert("Game ended");
    }   
}




