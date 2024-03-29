
//Get computers random choice in array function
function getComputerChoice(){
    const answerChoices = ['rock', 'paper', 'scissors'];

    let randNum = Math.floor(Math.random() * answerChoices.length); //picks random number up to length of array.
    let computerRandomChoice = answerChoices[randNum]; //connects random number and array to pick a random string.
    return computerRandomChoice;
} 

    let userScore = parseInt(0);
    let computerScore = parseInt(0);
    let round = parseInt(1); 


    //Play a round of game function
function playRound(playerSelection, computerSelection){ 

    //declare rounds, and scores on page
    const roundsPara = document.getElementById('roundsPara');
    const userScoresPara = document.getElementById('userScoresPara');
    const compScoresPara = document.getElementById('compScoresPara');

     //Show rounds count on page
     roundsPara.innerHTML = 'Round: '+ round;
   
    //declare player and computer choice
    const playerChoice = document.getElementById('playerChoice');
    const computerChoice = document.getElementById('computerChoice');

    //show player and computer choice on page
    playerChoice.innerHTML = 'Player Choice: ' + playerSelection;
    computerChoice.innerHTML = 'Computer Choice: ' + computerSelection;

    //declare overall game result message,  game over message, and each choice message
    let gameResultMessage = document.getElementById('gameResultMessage');
    let gameOverMessage = document.getElementById('gameOverMessage');
    const choiceMessage = document.getElementById('choiceMessage');


     //Listens for 5 rounds and 5 clicks all together from buttons
     rpsBtn.addEventListener('click',() => {

        //Track round being played
     if(round === 6) {
        keepScore();
        disableBtns();
        playAgain();

        //remove current scores
        userScoresPara.style.display = 'none';
        compScoresPara.style.display = 'none';

         // declare final player and computer scores
        const finalUserScoresPara = document.getElementById('finalUserScoresPara');
        const finalCompScoresPara = document.getElementById('finalCompScoresPara');

        //display final scores
        finalUserScoresPara.innerHTML =  'Final Player Score: '+ userScore;
        finalCompScoresPara.innerHTML = 'Final Computer Score: '+ computerScore;

        //remove regular game result message and display game over message
        gameResultMessage.style.display = 'none';
       return  gameOverMessage.innerHTML = 'GAME OVER';
       
    }
})


    //If it's a tie
    if(playerSelection === computerSelection){
        userScore++;
        computerScore++; 
        round++;

        userScoresPara.innerHTML = 'Player Score: ' + userScore;
        compScoresPara.innerHTML = 'Computer Score: ' + computerScore;
        choiceMessage.innerHTML = 'You chose ' + playerSelection +',' + ' and the computer chose ' + computerSelection;
        return gameResultMessage.innerHTML = 'It\'s a tie!';
        
    }
        //Player Picks Rock
    else if(playerSelection === 'rock' && computerSelection === 'paper'){
        computerScore++;
        round++;

        userScoresPara.innerHTML = 'Player Score: ' + userScore;
        compScoresPara.innerHTML = 'Computer Score: ' + computerScore;
        choiceMessage.innerHTML = 'You chose ' + playerSelection +',' + ' and the computer chose ' + computerSelection;
        return gameResultMessage.innerHTML ='Computer wins, paper covers rock!';
    } 
    else if(playerSelection === 'rock' && computerSelection === 'scissors'){
        userScore++;
        round++;

        userScoresPara.innerHTML = 'Player Score: ' + userScore;
        compScoresPara.innerHTML = 'Computer Score: ' + computerScore;
        choiceMessage.innerHTML = 'You chose ' + playerSelection +',' + ' and the computer chose ' + computerSelection;
        return gameResultMessage.innerHTML = 'You win, rock smashes scissors!';
    }

    //Player Picks Paper
    else if(playerSelection === 'paper' &&  computerSelection === 'rock'){
        userScore++;
        round++;

        userScoresPara.innerHTML = 'Player Score: ' + userScore;
        compScoresPara.innerHTML = 'Computer Score: ' + computerScore;
        choiceMessage.innerHTML = 'You chose ' + playerSelection +',' + ' and the computer chose ' + computerSelection;
        return gameResultMessage.innerHTML = 'You win, paper covers rock!';
    }
    else if(playerSelection === 'paper' && computerSelection === 'scissors'){
        computerScore++;
        round++;

        userScoresPara.innerHTML = 'Player Score: ' + userScore;
        compScoresPara.innerHTML = 'Computer Score: ' + computerScore;
        choiceMessage.innerHTML = 'You chose ' + playerSelection +',' + ' and the computer chose ' + computerSelection;
        return gameResultMessage.innerHTML =  'The computer wins, scissors cuts paper!';
    }

    //Player Picks Scissors
     else if(playerSelection === 'scissors' && computerSelection === 'rock'){
        computerScore++;
        round++;

        userScoresPara.innerHTML = 'Player Score: ' + userScore;
        compScoresPara.innerHTML = 'Computer Score: ' + computerScore;
        choiceMessage.innerHTML = 'You chose ' + playerSelection +',' + ' and the computer chose ' + computerSelection;
        return gameResultMessage.innerHTML = 'The computer wins, rock smashes scissors!';
    }
    else if(playerSelection === 'scissors' && computerSelection === 'paper'){
        userScore++;
        round++;

        userScoresPara.innerHTML = 'Player Score: ' + userScore;
        compScoresPara.innerHTML = 'Computer Score: ' + computerScore;
        choiceMessage.innerHTML = 'You chose ' + playerSelection +',' + ' and the computer chose ' + computerSelection;
        return gameResultMessage.innerHTML = 'You win, scissors cuts paper!';
    }
}

    /*Keep score of computer and numbers wins 
    and returns message based off of who won*/
    function keepScore(){
        //display final winner message
        let finalWinnerMessage = document.getElementById('finalWinnerMessage');

        if(userScore == computerScore){

            return finalWinnerMessage.innerHTML = 'You both win!';
        }
        else if (userScore > computerScore){
            
           return finalWinnerMessage.innerHTML = 'Nice! You Win!';
        }
        else if(userScore < computerScore){
            
            return finalWinnerMessage.innerHTML = 'Aww, the computer wins!';
        }
}

    //Game function, runs entire game
    function game(){
        const computerSelection = getComputerChoice();
       playRound(playerSelection, computerSelection); 
    }   


    // Declare Rock, Paper, Scissors Buttons
    const rockBtn = document.getElementById('rock');
    const paperBtn = document.getElementById('paper');
    const scissorsBtn = document.getElementById('scissors');
    const rpsBtn = document.querySelector('.buttons');



    //Button resets and restarts game
    function playAgain(){
        const playAgainBtn = document.getElementById('playAgainBtn');

        //shows play again button when 5 rounds
        playAgainBtn.style.display = 'inline-block';

        playAgainBtn.addEventListener('click',() => {
            playAgainBtn.style.display = 'none';

            //reset global variables
            userScore = parseInt(0);
            computerScore = parseInt(0);
            round = parseInt(0);

            //remove event listeners
            rockBtn.removeEventListener('click', () => {
                return playerSelection = 'rock';
             })
        
        
            paperBtn.removeEventListener('click', () => {
                return playerSelection = 'paper'; 
            })
                
            scissorsBtn.removeEventListener('click', () => {
                return playerSelection = 'scissors'; 
            })

            location.reload(); //reloads the browser
        })
    }

     //Disable buttons function
     function disableBtns(){
         rpsBtn.style.opacity = '20%';
         rpsBtn.style.pointerEvents = 'none';
     }

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
 



