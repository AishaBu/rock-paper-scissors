
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


    //Play a round of game function
function playRound(playerSelection, computerSelection){ 

    //declare rounds, and scores on page
    const roundsPara = document.getElementById('roundsPara');
    const userScoresPara = document.getElementById('userScoresPara');
    const compScoresPara = document.getElementById('compScoresPara');

     //Show round on console
     roundsPara.innerHTML = 'Round: '+ round;
     console.log('Round: '+ round);
   
    //show player and computer choice
    const playerChoice = document.getElementById('playerChoice');
    const computerChoice = document.getElementById('computerChoice');

    playerChoice.innerHTML = 'Player Choice: ' + playerSelection;
    computerChoice.innerHTML = 'Computer Choice: ' + computerSelection;
    console.log('Player Choice: ' + playerSelection);
    console.log('Computer Choice: ' + computerSelection);


     //Track round being played
     if(round === 5) {
        keepScore();
        disableBtns();
        playAgain();

        //remove current scores
        userScoresPara.style.display = 'none';
        compScoresPara.style.display = 'none';

         // delcare final player and computer scores
        const finalUserScoresPara = document.getElementById('finalUserScoresPara');
        const finalCompScoresPara = document.getElementById('finalCompScoresPara');

        //show as final scores
        finalUserScoresPara.innerHTML =  'Final Player Score: '+ userScore;
        finalCompScoresPara.innerHTML = 'Final Computer Score: '+ computerScore;
        return 'GAME OVER';
    }

    //If it's a tie
    if(playerSelection === computerSelection){
        userScore++;
        computerScore++; 
        round++
        console.log('Current Player Score: ' + userScore);
        console.log('Computer Score: ' + computerScore);

        userScoresPara.innerHTML = 'Player Score: ' + userScore;
        compScoresPara.innerHTML = 'Computer Score: ' + computerScore;
        return 'It\'s a tie!';
        
    }
        //Player Picks Rock
    else if(playerSelection === 'rock' && computerSelection === 'paper'){
        computerScore++;
        round++
        console.log('Current Player Score: ' + userScore);
        console.log('Current Computer Score: ' + computerScore);

        userScoresPara.innerHTML = 'Player Score: ' + userScore;
        compScoresPara.innerHTML = 'Computer Score: ' + computerScore;
        return 'Computer wins, paper covers rock!';
    } 
    else if(playerSelection === 'rock' && computerSelection === 'scissors'){
        userScore++;
        round++
        console.log('Current Player Score: ' + userScore);
        console.log('Current Computer Score: ' + computerScore);

        userScoresPara.innerHTML = 'Player Score: ' + userScore;
        compScoresPara.innerHTML = 'Computer Score: ' + computerScore;
        return 'You win, rock smashes scissors!';
    }

    //Player Picks Paper
    else if(playerSelection === 'paper' &&  computerSelection === 'rock'){
        userScore++;
        round++
        console.log('Current Player Score: ' + userScore);
        console.log('Current Computer Score: ' + computerScore);

        userScoresPara.innerHTML = 'Player Score: ' + userScore;
        compScoresPara.innerHTML = 'Computer Score: ' + computerScore;
        return 'You win, paper covers rock!';
    }
    else if(playerSelection === 'paper' && computerSelection === 'scissors'){
        computerScore++;
        round++
        console.log('Current Player Score: ' + userScore);
        console.log('Current Computer Score: ' + computerScore);

        userScoresPara.innerHTML = 'Player Score: ' + userScore;
        compScoresPara.innerHTML = 'Computer Score: ' + computerScore;
        return 'The computer wins, scissors cuts paper!';
    }

    //Player Picks Scissors
     else if(playerSelection === 'scissors' && computerSelection === 'rock'){
        computerScore++;
        round++
        console.log('Current Player Score: ' + userScore);
        console.log('Current Computer Score: ' + computerScore);

        userScoresPara.innerHTML = 'Player Score: ' + userScore;
        compScoresPara.innerHTML = 'Computer Score: ' + computerScore;
        return 'The computer wins, rock smashes scissors!';
    }
    else if(playerSelection === 'scissors' && computerSelection === 'paper'){
        userScore++;
        round++
        console.log('Current Player Score: ' + userScore);
        console.log('Current Computer Score: ' + computerScore);

        userScoresPara.innerHTML = 'Player Score: ' + userScore;
        compScoresPara.innerHTML = 'Computer Score: ' + computerScore;
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

    //Disable/Enable buttons function
    function disableBtns(){
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
    }

    function enableBtns(){
        rockBtn.disabled = false;
        paperBtn.disabled = false;
        scissorsBtn.disabled = false;
    }

   
    //Button restarts game function
    function playAgain(){

        const playAgainBtn = document.createElement('button');
        playAgainBtn.innerHTML = "Play Again";

        playAgainBtn.setAttribute('class', 'playAgainBtn');
        document.body.append(playAgainBtn);

        playAgainBtn.addEventListener('click',() => {
            enableBtns();
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

            location.reload(); //reloads the browser and removes console logs
        })

        rpsBtn.addEventListener('click', game);
       

    }



 // Rock, Paper, Scissors Buttons
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
 



