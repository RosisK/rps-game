// If left of || is truthy, it executes that, else, it executes the right
let scores = JSON.parse(localStorage.getItem('scores')) || {
    win: 0,
    loss: 0,
    tie: 0
}

showScore();

/*
if (scores === null) {
    scores = {
        win: 0,
        loss: 0,
        tie: 0
    };
}
*/

const pickComputerMove = () => {
    const random = Math.random();
    let computerMove;
    if (random >= 0 && random < 1/3) {
        computerMove = 'rock';
    } else if (random >= 1/3 && random < 2/3) {
        computerMove = 'paper';
    } else {
        computerMove = 'scissors';
    }

    return computerMove;
}

const playGame = (playerMove) => {
    let result;
    const computerMove = pickComputerMove();

    if (computerMove === 'rock') {
        if (playerMove === 'rock') {
            result = 'Tie';
        } else if (playerMove === 'paper') {
            result = 'You Win';
        } else {
            result = 'You Lose';
        }
    }

    else if (computerMove === 'paper') {
        if (playerMove === 'rock') {
            result = 'You Lose';
        } else if (playerMove === 'paper') {
            result = 'Tie';
        } else {
            result = 'You Win';
        }
    }

    else if (computerMove === 'scissors') {
        if (playerMove === 'rock') {
            result = 'You Win';
        } else if (playerMove === 'paper') {
            result = 'You Lose';
        } else {
            result = 'Tie';
        }
    }

    if (result === 'You Win') {
        scores.win++;
    } else if (result === 'You Lose') {
        scores.loss++;
    } else {
        scores.tie++;
    }

    showScore();

    document.querySelector('.js-moves')
        .innerHTML = `You  <img class="move-icon" src="images/${playerMove}-emoji.png"></img> 
                      <img class="move-icon" src="images/${computerMove}-emoji.png"></img> Computer`;

    document.querySelector('.js-result')
        .innerHTML = result + '.';


    localStorage.setItem('scores', JSON.stringify(scores));

    // alert(`You played ${playerMove}. Computer played ${computerMove}. ${result}.\nWins: ${scores.win}, Losses: ${scores.loss}, Ties: ${scores.tie}`);
}

function showScore() {
    document.querySelector('.js-score')
        .innerHTML = `Wins: ${scores.win}, Losses: ${scores.loss}, Ties: ${scores.tie}`;
}