 /*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let globalScore, currentPlayer, score;

globalScore = [0, 0];
currentPlayer = 0;
score = 0;


document.querySelector('.btn-roll').addEventListener('click', function () {

    //Random dice between 1 and 6
    let ranNum = Math.floor((Math.random() * 6) + 1);

    //Random number chooses dice png
    document.querySelector('.dice').style.display = 'block';
    let ranDice = document.querySelector('.dice').src = './Pictures/dice-' + ranNum + '.png';

    //Add dice to current score
    if (ranDice !== './Pictures/dice-1.png') {
        score += ranNum;
        document.getElementById('current-' + currentPlayer).textContent = score;
    } else {
    //Next Player
        nextPlayer();
    }
    
});




document.querySelector('.btn-hold').addEventListener('click', function () {
    //Add current score to global score
    globalScore[currentPlayer] += score;
    document.getElementById('score-' + currentPlayer).textContent = globalScore[currentPlayer];

    //Switch to next player
    nextPlayer();

});



document.querySelector('.btn-new').addEventListener('click', function () {
    //Reset all scores
    globalScore = [0, 0];
    currentPlayer = 0;
    score = 0;

    document.querySelector('.dice').style.display = 'none';

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';

    //Reset styling


});


function nextPlayer() {
    currentPlayer === 0 ? currentPlayer = 1 : currentPlayer = 0;
    score = 0;

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.dice').style.display = 'none';
}


function winGame() {
    if (globalScore[currentPlayer] >= 20) {
        
    }
}
