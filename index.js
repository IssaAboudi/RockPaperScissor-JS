let plays = ['rock', 'paper', 'scissor']

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    return plays[Math.floor(Math.random() * plays.length)];
}

function playRound(playerSelection, computerSelection){
    if(playerSelection == 'rock' && computerSelection == 'scissor'){
        playerScore++;
        return 'You win! rock beats scissors';
    } else if(playerSelection == 'rock' && computerSelection == 'paper'){
        computerScore++;
        return 'You lose! paper beats rock';
    } else if(playerSelection == 'rock' && computerSelection == 'rock'){
        return 'You draw! rock doesn\'t beat rock';
    } else if(playerSelection == 'scissor' && computerSelection == 'scissor'){
        return 'You draw! scissors doesn\'t beat scissors';
    } else if(playerSelection == 'scissor' && computerSelection == 'paper'){
        playerScore++;
        return 'You win! scissors beats paper';
    } else if(playerSelection == 'scissor' && computerSelection == 'rock'){
        computerScore++;
        return 'You lose! rock beats scissors';
    } else if(playerSelection == 'paper' && computerSelection == 'scissor'){
        computerScore++;
        return 'You lose! paper beats scissors';
    } else if(playerSelection == 'paper' && computerSelection == 'paper'){
        return 'You draw! paper doesn\'t beat paper';
    } else if(playerSelection == 'paper' && computerSelection == 'rock') {
        playerScore++;
        return 'You win! paper beats rock';
    }
}

function game(){
    let i = 0;
    for(i=0; i < 5; i++){
        let playerChoice = prompt('Enter a move: (rock, paper, scissor)');
        playerSelection = playerChoice.toLowerCase();

        //writing it on the document, so we can see past plays without having to inspect element:
        document.write(playRound(playerSelection,getComputerChoice()));
        document.write("<br>");
    }
}

game();