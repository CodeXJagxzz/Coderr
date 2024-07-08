let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector(".msg");

const userScorePara = document.querySelector("#user-score");

const compScorePara = document.querySelector("#comp-score");

const genCompChoice = (() => {
    const options = ["rock", "paper", "scissors"];

    const ranIdx = Math.floor(Math.random() * 3);
    return options[ranIdx];


})

const showWinner = (userWin,userChoice,compChoice) => {
    if (userWin) {
        userscore++;
        userScorePara.innerText = userscore;
        msg.innerText = `You won !! Your ${userChoice} defeated ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compscore++;
        compScorePara.innerText = compscore;
        msg.innerText = `You lost :( ${compChoice} defeated your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    const compChoice = genCompChoice();


    if (compChoice === userChoice) {
        console.log("game was draw");
        msg.innerText="Game is draw..Try again!";
        msg.style.backgroundColor = "#081b31";
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            // comp choice can be "paper" or "scissor" else it was draw
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            // comp choice can be "rock" or "scissor" else it was draw
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin,userChoice,compChoice);

    }
};


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);

    });
});