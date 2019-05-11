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
    } else if (choice1 === "s"){
	    paperCount += 1;
    } else if (choice1 === "p"){
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

// Function to track and and decay the value of older choices
function decayPreviousChoiceValues(choice1){
    if (!choiceRatings){
        let rockRating = 0;
        let scissorsRating = 0;
        let paperRating = 0;
        let choiceRatings = [rockRating, scissorsRating, paperRating];
        console.log("The choice ratings are initialized: " + choiceRatings);
    } else {
        rockRating *= 0.95;
        scissorsRating *= 0.95;
        paperRating *= 0.95;
        
        if (choice1 === "r"){
            paperRating += 0.1;
            scissorsRating -= 0.1;
        } else if (choice1 === "s"){
            rockRating += 0.1;
            paperRating -= 0.1;
        } else if (choice1 === "p"){
            scissorsRating += 0.1;
            rockRating -= 0.1;
        }

        let randNum = ((random.random())*(math.exp(rockRating))+(math.exp(scissorsRating))+(math.exp(paperRating))); // TODO translate from Python!

        if (randNum < (math.exp(rockRating))){
            return "r";
        } else if ((randNum < (math.exp(rockRating))) && (randNum < (math.exp(paperRating)))){
            return "p";
        } else {
            return "s";
        } 
    }
}       