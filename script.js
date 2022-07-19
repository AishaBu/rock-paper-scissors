
//Get computers random choice in array function
function getComputerChoice(){
    const answerChoices = ['rock', 'paper', 'scissors'];

    let randNum = Math.floor(Math.random() * answerChoices.length); //picks random number up to length of array.
    let computerRandomChoice = answerChoices[randNum]; //connects random number and array to pick a random string.
    return computerRandomChoice;
} 

let userScore = parseInt(0);
let computerScore = parseInt(0);

//Play a round of game function
function playRound(playerSelection, computerSelection){ 
    
    //Write choices to console
    console.log('Player Choice: ' + playerSelection);
    console.log('Computer Choice: ' + computerSelection);

    //If it's a tie
    if(playerSelection === computerSelection){
        userScore++;
        computerScore++; 
        console.log('Current Player Score: ' + userScore);
        console.log('Computer Choice: ' + computerScore);
        return 'It\'s a tie!';
        
    }
        //Player Picks Rock
    else if(playerSelection === 'rock' && computerSelection === 'paper'){
        computerScore++;
        console.log('Current Player Score: ' + userScore);
        console.log('Current Computer Score: ' + computerScore);
        return 'Computer wins, paper covers rock!';
    } 
    else if(playerSelection === 'rock' && computerSelection === 'scissors'){
        userScore++;
        console.log('Current Player Score: ' + userScore);
        console.log('Current Computer Score: ' + computerScore);
        return 'You win, rock smashes scissors!';
    }

    //Player Picks Paper
    else if(playerSelection === 'paper' &&  computerSelection === 'rock'){
        userScore++;
        console.log('Current Player Score: ' + userScore);
        console.log('Current Computer Score: ' + computerScore);
        return 'You win, paper covers rock!';
    }
    else if(playerSelection === 'paper' && computerSelection === 'scissors'){
        computerScore++;
        console.log('Current Player Score: ' + userScore);
        console.log('Current Computer Score: ' + computerScore);
        return 'The computer wins, scissors cuts paper!';
    }

    //Player Picks Scissors
     else if(playerSelection === 'scissors' && computerSelection === 'rock'){
        computerScore++;
        console.log('Current Player Score: ' + userScore);
        console.log('Current Computer Score: ' + computerScore);
        return 'The computer wins, rock smashes scissors!';
    }
    else if(playerSelection === 'scissors' && computerSelection === 'paper'){
        userScore++;
        console.log('Current Player Score: ' + userScore);
        console.log('Current Computer Score: ' + computerScore);
        return 'You win, scissors cuts paper!';
    }
   
}

//Keep score of computer and numbers wins 
function keepScore(){
    if(userScore == computerScore){
        console.log('Final Player Score: '+ userScore);
        console.log('Final Computer Score: '+ computerScore);
        console.log('You both win!');
    }
    else if (userScore > computerScore){
        console.log('Final Player Score: '+ userScore);
        console.log('Final Computer Score: '+ computerScore);
        console.log('Nice! You Won!');
    }
    else if(userScore < computerScore){
        console.log('Final Player Score: '+ userScore);
        console.log('Final Computer Score: '+ computerScore);
        console.log('Aww, the computer won!');
    }
}



//Game function, runs entire game
    function game(){

    for(let round = 0; round < 5; round++){
        console.log('Round: '+ round);
        const computerSelection = getComputerChoice();
        let playerSelection = prompt('Please choose Rock, Paper, or Scissors').toLowerCase(); //converts entire response to lowercase then does comparison
        console.log(playRound(playerSelection, computerSelection)); 
    
        if(round === 4) {
                console.log('GAME OVER');
                keepScore();
            } 

        }  
    }
     game();