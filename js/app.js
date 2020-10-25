import Grid from "./Grid.js";

/* Start handling of game Layout */

const soloPlayingStatus = document.querySelector('.current-playing-status__solo'),
    withFirendPlayingStatus = document.querySelector('.current-playing-status__with-a-friend'),
    againstComputerPlayingStatus = document.querySelector('.current-playing-status__against-computer'),
    gameMode = document.querySelector('.game-choices__mode'),
    gameModeSolo = document.querySelector('#game-mode-solo'),
    gameModeWithAFriend = document.querySelector('#game-mode-with-a-friend'),
    gameModeAgainstComputer = document.querySelector('#game-mode-against-computer'),
    gameDifficulty = document.querySelector('.game-choices__difficulty'),
    gameBoardSize = document.querySelector('.game-choices__board-size'),
    overlayToStartPlaying = document.querySelector('.overlay-to-start-playing p'),
    reset_btn = document.querySelector(".current-playing-status__solo__reset"),
    restartGameAfterGameComplete= document.querySelector('.modal__box__restart-game'),
    timerTens = document.querySelector(".timer__tens"),
    timerSeconds = document.querySelector(".timer__seconds"),
    timerMinutes = document.querySelector(".timer__minutes");

let gameBoard = document.getElementById("game-board");
drawGrid();

let timer, sec_count = 0, min_count = 0, ten_count = 0;;

// Remove overlay to start playing
overlayToStartPlaying.addEventListener('click', function () {
    this.parentElement.style.display = 'none';

    // Start drawing the grid.
    drawGrid();

    //Start Timing function
    timer = setInterval(timerCalculator, 10);
});

// Reset game
reset_btn.addEventListener("click", () => {
    resetTimer();
    // Handling Reset Game Here

});

// Click Events For game mode
Array.prototype.forEach.call(gameMode.children[1].children, element => {// Article(Difficluty) > span+div span*3
    element.addEventListener('click', _ => {
        // If playing two players
        if (gameModeWithAFriend == element)
            setPlayersName(getPlayersName(), withFirendPlayingStatus);

        withFirendPlayingStatus.style.display = 'none';
        againstComputerPlayingStatus.style.display = 'none';
        soloPlayingStatus.style.display = 'none';

        // display current playing status
        document.querySelector(`.current-playing-status__${element.getAttribute('id').substr(10)}`).style.display = 'flex';

        //reset if not have focus class
        if (!element.classList.contains('game-choices__mode__options__focused')) {
            resetTimer();
            //Add overlay when start playing in this mode but previous time in another mode
            overlayToStartPlaying.parentElement.style.display = 'flex';
        }

        Array.prototype.forEach.call(gameMode.children[1].children, element => {
            element.classList.remove('game-choices__mode__options__focused');
        });
        element.classList.add('game-choices__mode__options__focused');

        if(element === gameModeAgainstComputer){
            gameDifficulty.style.display = 'flex';
        }
        else {
            gameDifficulty.style.display = 'none';
        }

        if (!element.getAttribute('id') === 'game-mode-against-computer')
            gameDifficulty.style.display = 'none';
    })
});

// Click Events For game Difficulty
Array.prototype.forEach.call(gameDifficulty.children[1].children, element => {// Article(Difficluty) > span+div span*3
    element.addEventListener('click', _ => {
        Array.prototype.forEach.call(gameDifficulty.children[1].children, element => {
            element.classList.remove('game-choices__difficulty__options__focused');
        });
        element.classList.add('game-choices__difficulty__options__focused');
        // Handling of Difficulty Here
    })
});

// Click Events For game board size
Array.prototype.forEach.call(gameBoardSize.children[1].children, element => {// Article(boardSize) > span+div span*6
    element.addEventListener('click', _ => {
        Array.prototype.forEach.call(gameBoardSize.children[1].children, element => {
            element.classList.remove('game-choices__board-size__options__focused');
        });
        element.classList.add('game-choices__board-size__options__focused');
        // Handling of board size Here
    })
});

// Get players name for game
function getPlayersName() {
    let firstPlayerName = prompt('Please Enter Player1 name:');
    if (firstPlayerName == "" || firstPlayerName == null) {
        alert('Please Enter Player1 name or its name will be assigned to player1')
        firstPlayerName = prompt('Last chance to enter Player1 name:');
        if (!firstPlayerName) {
            firstPlayerName = "player1";
        }
    }
    let secondPlayerName = prompt('Please Enter Player2 name:');
    if (!secondPlayerName) {
        alert('Please Enter Player2 name or its name will be assigned to player2')
        secondPlayerName = prompt('Last chance to enter Player2 name:');
        if (!secondPlayerName) {
            secondPlayerName = "player2";
        }
    }
    return [firstPlayerName, secondPlayerName];
}
// Set player name to game
function setPlayersName(playersName, DomElement) {
    DomElement.querySelectorAll('p')[0].innerHTML = `${playersName[0]} <span>Pairs: 0</span>`;
    DomElement.querySelectorAll('p')[1].innerHTML = `${playersName[1]} <span>Pairs: 0</span>`;
}
// timer is a function to act as counter for user to know how much time is left until the end of the game
function timerCalculator() {
    ten_count = ten_count + 1;
    if (ten_count < 10) {
        timerTens.innerHTML = "0" + ten_count;
    } else timerTens.innerHTML = ten_count;
    if (ten_count === 100) {
        timerTens.innerHTML = "00";
        ten_count = 0;
        sec_count++;
        if (sec_count < 10) {
            timerSeconds.innerHTML = "0" + sec_count;
        } else timerSeconds.innerHTML = sec_count;
    }
    if (sec_count === 60) {
        timerSeconds.innerHTML = "00";
        sec_count = 0;
        min_count = min_count + 1;
        if (min_count < 10) timerMinutes.innerHTML = "0" + min_count;
        else timerMinutes.innerHTML = min_count;
    }
}
// reset 
function resetTimer() {
    min_count = 0;
    sec_count = 0;
    ten_count = 0;
    timerMinutes.innerHTML = "00";
    timerSeconds.innerHTML = "00";
    timerTens.innerHTML = "00";
    clearInterval(timer);
}
/* End handling of game Layout */

/* Start handling of game cards and board */
function flipCard(){
    this.children[0].classList.toggle("flip");
    this.classList.toggle("disabled");
}
/* End handling of game cards abd board */


// Draws the grid cards with the selected dimensions.
function drawGrid() {
    let [rows, columns] = checkCardOptions();
    let grid = new Grid(rows, columns);

    removeCards();

    gameBoard.setAttribute("style",
        `grid-template-rows: repeat(${rows},1fr); grid-template-columns: repeat(${columns},1fr)`);


    grid.forEach(element => {
        let card = document.createElement("div");
        card.classList.add("card");
        card.addEventListener("click", flipCard);

        let image = document.createElement("img");
        image.src = `images/${element}`;
        image.classList.add("face");

        card.append(image);
        gameBoard.append(card);
    });
}

// Checks which card option is selected, returns num of rows and columns.
function checkCardOptions() {
    let rows, columns;
    let cardsOptions = document.querySelectorAll(".game-choices__board-size__options");

    cardsOptions.forEach(cardOption => {
        if (cardOption.classList.contains("game-choices__board-size__options__focused")) {
            [rows, columns] = cardOption.textContent.split("x");
        }
    });

    return [parseInt(rows), parseInt(columns)];
}

// Removes all the cards from the grid.
function removeCards() {
    document.querySelectorAll(".card").forEach( card => {
        card.remove();
    });
}
