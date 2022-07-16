
let answerChoices = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice(){
    let randNum = Math.floor(Math.random() * answerChoices.length); //generates random number that corresponds with a string
    let computerRandChoice = answerChoices[randNum]; //uses random number and connects it to array to pick a string.
    console.log(computerRandChoice);
}
getComputerChoice();