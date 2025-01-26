/* Chapter 9 - Game 1: Rock Paper Scissors */

let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");  // select all elements with class="choice"
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#comp-score");

const generateCompChoice = () => {
    const options = ["rock", "paper", "scissors"]; // choice
    // rock, paper, scissors
    const randomIdx = Math.floor(Math.random() * 3); // 0, 1, 2 -> random index-will be index for options.
    return options[randomIdx]; // return computer choice as string-value at randomIdx
}

// drawGame 
const drawGame = () => {
    console.log("It's a tie");
    msg.innerText = `it's a tie`;
    msg.style.backgroundColor = "#081b31";
}

// show winner
const showWinner = (userWin, userChoice, compChoice) => {

    if (userWin) {
        // score update
        userScore++;
        userScorePara.innerText = userScore;

        // msg update
        msg.innerText = `${userChoice} beats ${compChoice}. You win!`;
        msg.style.backgroundColor = "green";

        // console message update
        console.log(`User wins! User score => ${userScore}, Computer score => ${computerScore}`);
    } else {
        // score update
        computerScore++;
        computerScorePara.innerText = computerScore;

        // msg update
        msg.innerText = `${compChoice} beats ${userChoice}. You win!`;
        msg.style.backgroundColor = "red";

        // console message update
        console.log(`Computer wins! User score => ${userScore}, Computer score => ${computerScore}`);
    }
}

// playGame function
const playGame = (userChoice) => {
    console.log("Time to play the game");
    console.log("User choice =>", userChoice);

    // Computer choice
    const compChoice = generateCompChoice(); // call generateCompChoice function
    console.log("Computer choice =>", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            // scissors, paper
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            // rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        } else {
            // rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
} // end of playGame function

// add event listner to all choices
choices.forEach(choice => {
    choice.addEventListener("click", () => {
        // access id
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked", userChoice);  
        playGame(userChoice); // call playGame function
    });

});  // end of forEach loop
