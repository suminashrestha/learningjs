// Rock Paper Scissors

const choices = ["rock","paper","scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoredisplay = document.getElementById("playerScoredisplay");
const computerScoredisplay = document.getElementById("computerScoredisplay");
let playerScore = 0;
let computerScore =0;
function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random() *3)];
    
    let result= "";

    if(playerChoice===computerChoice){
        result= "IT'S A TIE!"
    }
    else if(playerChoice==="rock" && computerChoice==="paper"){
        result="YOU lose";
    }
    else if(playerChoice==="paper" && computerChoice==="scissors"){
        result="YOU lose";
    }
    else if(playerChoice==="scissors" && computerChoice==="rock"){
        result="YOU lose";
    }
    else if(playerChoice==="rock" && computerChoice==="scissors"){
        result="YOU win";
    }
    else if(playerChoice==="paper"&& computerChoice==="rock"){
        result="YOU win";
    }
    else if(playerChoice==="scissors" && computerChoice==="paper"){
        result="YOU win";
    }
    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;
    resultDisplay.classList.remove("greenText","redText");

    switch(result){
        case "YOU win" : 
                    resultDisplay.classList.add("greenText");
                    playerScore++;
                    playerScoredisplay.textContent = `PLAYER SCORE: ${playerScore}`;
                    break;
        case "YOU lose" :
                    resultDisplay.classList.add("redText");
                    computerScore++;
                    computerScoredisplay.textContent = `COMPUTER SCORE: ${computerScore}`;
                    break;
    }

}


