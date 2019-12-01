 /*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let currentPlayer, globalScore, score;

currentPlayer = 0;
globalScore = 0;
score = 0;


document.querySelector('.btn-roll').addEventListener('click', function () {

    //Random dice between 1 and 6
    const ranNum = Math.floor((Math.random() * 6) + 1);

    //Attach random number to dice png
    const ranDice = document.querySelector('.dice').src = 'dice-' + ranNum + '.png';

    //Dice number is added to current score
    if (ranDice !== 'dice-1.png') {
        score += ranNum;
        document.getElementById('current-' + currentPlayer).textContent = score;
    } else {
    //Next Player
        nextPlayer();

        //How to connect player element with current player variable???
    }
    
});

document.querySelector('.btn-hold').addEventListener('click', function () {
    //Add current score to global score
    let totalScore = globalScore += score;
    document.getElementById('score-' + currentPlayer).textContent = globalScore;

    //Switch to next player
    nextPlayer();

});


function nextPlayer() {
    currentPlayer === 0 ? currentPlayer = 1 : currentPlayer = 0;

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.
    
}

