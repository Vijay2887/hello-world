const playerChoice = document.getElementById("playerChoice");
const computerChoice = document.getElementById("computerChoice");
const resultLine = document.getElementById("resultLine");

const choices = ['rock', 'paper', 'scissor'];


function playGame(choice)
{
    let result = "";
    let computerChooses = choices[Math.floor(Math.random()*3)];
    if(choice == computerChooses){
        result = "IT's A TIE😐";
    }

    else{
        if(choice == 'rock') {
            result = (computerChooses == 'paper' ) ? "YOU LOSE😥" : "YOU WIN😎";
        }
        else if(choice == 'paper') {
            result = (computerChooses == 'scissor' ) ? "YOU LOSE😥" : "YOU WIN😎";
        }
        else if(choice == 'scissor') {
            result = (computerChooses == 'rock' ) ? "YOU LOSE😥" : "YOU WIN😎";
        }
    }

    playerChoice.textContent = "Player:" + `${choice}`;
    computerChoice.textContent = "Computer:" + `${computerChooses}`;
    resultLine.textContent = `${result}`;
}
