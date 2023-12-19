// Exercise 1: Guess the number
let chances = 0
// Keep asking for the number until the correct number is guessed

let random = Math.floor(Math.random() * 10);
let number = 0;

// Eventually after the game is over, display the (100 - Number of chances) and the actual number
while (number != random) {
number = Number.parseInt((prompt("enter your number between 1 and 10")))
if (number > random) {
console.log("number is greater than random")
}
else if (number < random) {
console.log("number is less than random")
}
chances++

}
console.log("correct guess")
console.log("you succeeded in ", chances,"guesses")