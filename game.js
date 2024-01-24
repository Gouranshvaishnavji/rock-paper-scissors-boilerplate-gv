// Actually i am making this it post semester 1 end 
function getComputerHand() {
    const hands = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * hands.length);
    return hands[randomIndex];
}

function determineWinner(playerHand, computerHand) {
    if (playerHand === computerHand) {
        return 'draw';
    } else if (
        (playerHand === 'rock' && computerHand === 'scissors') ||
        (playerHand === 'paper' && computerHand === 'rock') ||
        (playerHand === 'scissors' && computerHand === 'paper')
    ) {
        return 'player';
    } else {
        return 'computer';
    }
}

function updateGame(playerChoice) {
    const computerChoice = getComputerHand();
    const winner = determineWinner(playerChoice, computerChoice);
// this is new thing i have tried
    document.getElementById('player-hand').src = `./assets/${playerChoice}-hand.png`;
    document.getElementById('computer-hand').src = `./assets/${computerChoice}-hand.png`;

    if (winner === 'player') {
        playerScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }

    document.getElementById('player-score').innerText = playerScore;
    document.getElementById('computer-score').innerText = computerScore;

    if (playerScore === 3 || computerScore === 3) {
        endGame();
    }
}

function endGame() {
    const resultMessage = document.getElementById('result-message');
    const playAgainButton = document.getElementById('play-again-btn');
    playerOptions.style.display = 'none';

    if (playerScore > computerScore) {
        resultMessage.innerHTML = 'You win!';
    } else if (playerScore < computerScore) {
        resultMessage.innerHTML = 'You lose!';
        // there is no possible way to draw this game
    } else {
        resultMessage.innerHTML = 'It\'s a draw!';
    }

    playAgainButton.style.display = 'block';
}

let playerScore = 0;
let computerScore = 0;
const playerOptions = document.getElementById('player-options');

playerOptions.addEventListener('click', function (event) {
    if (event.target.tagName === 'IMG') {
        const playerChoice = event.target.alt.toLowerCase();
        updateGame(playerChoice);
    }
});

document.getElementById('play-again-btn').addEventListener('click', function () {
    playerScore = 0;
    computerScore = 0;
    document.getElementById('player-score').innerText = playerScore;
    document.getElementById('computer-score').innerText = computerScore;
    document.getElementById('result-message').innerHTML = '';
    document.getElementById('play-again-btn').style.display = 'none';
    playerOptions.style.display = 'block';
    // this.style.display = 'none';
    
    document.getElementById('player-hand').src = './assets/scissors-hand.png';
    document.getElementById('computer-hand').src = './assets/scissors-hand.png';
});
