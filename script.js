
const answerChoices = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice(){
    let randNum = Math.floor(Math.random() * answerChoices.length); //generates random number that corresponds with a string
    let computerRandomChoice = answerChoices[randNum]; //uses random number and connects it to array to pick a string.
    console.log('Computer Choice : ' + computerRandomChoice);
    return computerRandomChoice;
} 


//Users Input Function
const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection){
    console.log('Player Choice : ' + playerSelection);

    //If it's a tie
    if(playerSelection === computerSelection){
        return 'It\'s a tie!';
        
    }
        //Player Picks Rock
    else if(playerSelection === 'Rock' && computerSelection === 'Paper'){
        return 'Computer wins, paper covers rock!';
    } 
    else if(playerSelection === 'Rock' && computerSelection === 'Scissors'){
        return 'You win, rock smashes scissors!';
    }

    //Player Picks Paper
    else if(playerSelection === 'Paper' &&  computerSelection === 'Rock'){
        return 'You win, paper covers rock!';
    }
    else if(playerSelection === 'Paper' && computerSelection === 'Scissors'){
        return 'The computer wins, scissors cuts paper!';
    }

    //Player Picks Scissors
     else if(playerSelection === 'Scissors' && computerSelection === 'Rock'){
        return 'The computer wins, rock smashes scissors!';
    }
    else if(playerSelection === 'Scissors' && computerSelection === 'Paper'){
        return 'You win, scissors cuts paper!';
    }
}
console.log(playRound('Rock', computerSelection));
