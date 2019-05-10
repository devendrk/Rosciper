//Define player choices and cpu input and generate random number between 1-3 for computers input.

var player1choice = [1, 2, 3];
var player2choice = [1, 2, 3];
// Let's make 3 buttons to assign value?

var dieMachineInput = Math.floor(Math.random() * 3) + 1;


//Function to see if player1 wins or if it's a tie
//rockIndex = 1, paperIndex = 2, scissorsIndex = 3
function compare(choice1, choice2) {
    if (choice1 === choice2) {
        return "It's a tie!";
    }
//Rock(1) beats scissors(3)   
    else if (choice1 === 1) {
        if (choice2 === 3) {
            return "Player 1 wins!";
        }
        else {
            return "Player 2 wins!";
        }
    }
//Paper(2) beats rock(1)
    else if (choice1 === 2) {
        if (choice2 === 1) {
            return "Player 1 wins!";
        }
        else {
            return "Player 2 wins!";
        }
    }
//Scissors(3) beats Paper(2)
    else if (choice1 === 3) {
        if (choice2 === 2) {
            return "Player 1 wins!";
        }
        else {
            return "Player 2 wins!";
        }
    }



}

//Init gamez
compare(player1choice[1], dieMachineInput)