//Function computer chooses rock
function getRock() {
    var choices = ["r", "s", "p"];
    return choices[0];
}

//Function computer chooses scissors
function getScissors() {
    var choices = ["r", "s", "p"];
    return choices[1];
}

//Function computer chooses paper
function getPaper() {
    var choices = ["r", "s", "p"];
    return choices[2];
}

//Function to randomize computer choice
function getMachineRandomChoice() {
    var choices = ["r", "s", "p"];
    var rng = Math.floor(Math.random()*3);
    return choices[rng];
}

// Function to track and counter opponents previous choices 
function trackAndCounterOpponentPreviousChoice(choice1){
    var previousChoices = [rockCount, paperCount, scissorsCount];
    console.log("The previous choices were " + previousChoices);

    if (choice1 === "r"){
        rockCount += 1;
    } else if (choice1 == "s"){
	    paperCount += 1;
    } else if (choice1 == "p"){
        scissorsCount += 1;
    }

    if ((rockCount > paperCount) && (rockCount > scissorsCount)){ // counters with the choice that beats the choice opponent picks the most frequently
        return "p"; // paper beats rock
    } else if (paperCount > scissorsCount){
        return "s"; // scissors beats paper
    } else {
        return "r"; // rock beats scissors
    }
}

