





let userScore = 0;
let compScore = 0;
const maxScore = 10; // Set the maximum score to win the game

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const getComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    console.log("Game was a draw.");
    msg.innerText = "Game was a draw.";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You win!");
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}.`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        console.log("You lose!");
        msg.innerText = `You lose! Comp's ${compChoice} beats your ${userChoice}.`;
        msg.style.backgroundColor = "red";
    }
}

const checkGameEnd = () => {
    if (userScore === maxScore) {
        msg.innerText = "Congratulations! You have won the game!";
        msg.style.backgroundColor = "blue";
        disableChoices();
    } else if (compScore === maxScore) {
        msg.innerText = "Game Over! The computer has won the game!";
        msg.style.backgroundColor = "blue";
        disableChoices();
    }
}

const disableChoices = () => {
    choices.forEach((choice) => {
        choice.removeEventListener("click", handleChoiceClick);
    });
}

const handleChoiceClick = (event) => {
    const choiceId = event.target.getAttribute("id");
    playgame(choiceId);
}

const playgame = (userChoice) => {
    console.log("User choice =", userChoice);
    const compChoice = getComputerChoice();
    console.log("Comp choice =", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin;
        if (userChoice === "rock") {
            userWin = compChoice === "scissors" ? true : false;
        } else if (userChoice === "paper") {
            userWin = compChoice === "rock" ? true : false;
        } else {
            userWin = compChoice === "paper" ? true : false;
        }
        showWinner(userWin, userChoice, compChoice);
    }

    checkGameEnd();
};

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", handleChoiceClick);
});





