'use strict';

function playRoshambo(userChoice) {

    // validate input
    try {
        if(userChoice < 1 || userChoice > 3) {
            throw new Error('Your choice must be 1, 2, or 3!');
        }
    }
    catch(err) {
        console.error(err.message);
    }

    //get computer's choice
    let computerChoice = getComputerChoice();

    // determine winner
    // 1 = rock, 2 = paper, 3 = scissors
    if(userChoice === computerChoice) {return 'tie';}
    if(userChoice === 1 && computerChoice === 2) {return 'lose';}
    if(userChoice === 1 && computerChoice === 3) {return 'win';}
    if(userChoice === 2 && computerChoice === 1) {return 'win';}
    if(userChoice === 2 && computerChoice === 3) {return 'lose';}
    if(userChoice === 3 && computerChoice === 1) {return 'win';}
    if(userChoice === 3 && computerChoice === 2) {return 'lose';}

}

function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3) + 1;
    return computerChoice;
}

console.log(playRoshambo(1));