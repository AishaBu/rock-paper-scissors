
//Get computers random choice in array function
function getComputerChoice(){
    const answerChoices = ['rock', 'paper', 'scissors'];

    let randNum = Math.floor(Math.random() * answerChoices.length); //picks random number up to length of array.
    let computerRandomChoice = answerChoices[randNum]; //connects random number and array to pick a random string.
    return computerRandomChoice;
} 

let userScore = parseInt(0);
let computerScore = parseInt(0);
let round = parseInt(0); 

//JS DOM Methods
let roundspara = document.querySelector('#roundspara');
    
//Play a round of game function
function playRound(playerSelection, computerSelection){ 

//Track round being played
    if(round === 4) {
        console.log('GAME OVER');
        keepScore();
        return 'GAME FINAL';
    }
    
    //Write choices to console
    roundspara.append('Round: '+ round);
    console.log('Round: '+ round);
    console.log('Player Choice: ' + playerSelection);
    console.log('Computer Choice: ' + computerSelection);

    //If it's a tie
    if(playerSelection === computerSelection){
        userScore++;
        computerScore++; 
        round++
        console.log('Current Player Score: ' + userScore);
        console.log('Computer Choice: ' + computerScore);

        return 'It\'s a tie!';
        
    }
        //Player Picks Rock
    else if(playerSelection === 'rock' && computerSelection === 'paper'){
        computerScore++;
        round++
        console.log('Current Player Score: ' + userScore);
        console.log('Current Computer Score: ' + computerScore);
        return 'Computer wins, paper covers rock!';
    } 
    else if(playerSelection === 'rock' && computerSelection === 'scissors'){
        userScore++;
        round++
        console.log('Current Player Score: ' + userScore);
        console.log('Current Computer Score: ' + computerScore);
        return 'You win, rock smashes scissors!';
    }

    //Player Picks Paper
    else if(playerSelection === 'paper' &&  computerSelection === 'rock'){
        userScore++;
        round++
        console.log('Current Player Score: ' + userScore);
        console.log('Current Computer Score: ' + computerScore);
        return 'You win, paper covers rock!';
    }
    else if(playerSelection === 'paper' && computerSelection === 'scissors'){
        computerScore++;
        round++
        console.log('Current Player Score: ' + userScore);
        console.log('Current Computer Score: ' + computerScore);
        return 'The computer wins, scissors cuts paper!';
    }

    //Player Picks Scissors
     else if(playerSelection === 'scissors' && computerSelection === 'rock'){
        computerScore++;
        round++
        console.log('Current Player Score: ' + userScore);
        console.log('Current Computer Score: ' + computerScore);
        return 'The computer wins, rock smashes scissors!';
    }
    else if(playerSelection === 'scissors' && computerSelection === 'paper'){
        userScore++;
        round++
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
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection)); 
    }   


    // Rock, Paper, Scissor Buttons
    const rockBtn = document.getElementById('rock');
    const paperBtn = document.getElementById('paper');
    const scissorsBtn = document.getElementById('scissors');
    const rpsBtn = document.querySelector('.buttons');

    //Call Event Listeners
    rockBtn.addEventListener('click', () => {
        return playerSelection = 'rock';
     })


    paperBtn.addEventListener('click', () => {
        return playerSelection = 'paper'; 
    })
        
    scissorsBtn.addEventListener('click', () => {
        return playerSelection = 'scissors'; 
    })
        
    rpsBtn.addEventListener('click', game);
 
       
    