//Function to randomise computer choice
function getMachineInput() {
    var choices = ["r", "p", "s"];
    var rng = Math.floor(Math.random()*3);
    return choices[rng];
}

//Player1&2 and machine choices
var machineInput = getMachineInput();
var player1choice = ["r", "p", "s"];
var player2choice = ["r", "p", "s"];

//Compare player1, player2 or machine answers together
function compare(choice1, choice2) {
switch(choice1 + choice2) {
    case "rs":
    case "pr":
    case "sp":
    console.log("Player 1 Wins!");
    break;
    case "rp":
    case "ps":
    case "sr":
    console.log("Player 2 Wins!");
    break;
    case "rr":
    case "pp":
    case "ss":
    console.log("Draw!");
    break;
}

}

//init comparison
compare(player1choice[0], machineInput)