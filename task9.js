let compChoice = "";
let youChoice = "";
let compWin = 0;
let youWin = 0;
let round = 1;
let symbol = ["rock", "paper", "scissor"];
    
function compChoose() {
    let choice = Math.floor(Math.random()*symbol.length);
    compChoice = symbol[choice];
    console.log("you:", youChoice, "comp:", compChoice);
}

let choice = document.querySelectorAll(".button");

choice.forEach((item) => {
    item.addEventListener("click", () => {
        round++;
        youChoice = item.getAttribute("id");
        compChoose();
        winner(compChoice, youChoice);
    });
})

function winner(compChoice, youChoice) {
    let text = document.getElementById("text");
    let comp = document.getElementById("comp");
    let you = document.getElementById("you");
    let roundNumber = document.getElementById("round-number");

    roundNumber.innerText = round;

    if (compChoice == youChoice) {

        text.innerText = `It was Draw!!`;
        text.style.backgroundColor = "grey";
    }
    else if ((compChoice == "rock" && youChoice == "scissor")
        || (compChoice == "paper" && youChoice == "rock")
        || (compChoice == "scissor" && youChoice == "paper")) {
        compWin++;
        comp.innerText = compWin;
        text.innerText = ` You Lost. ${compChoice} beat your ${youChoice}`;
        text.style.backgroundColor = "red";
    }
    else {
        youWin++;
        you.innerText = youWin;
        text.innerText = `You Win. your ${youChoice} beat ${compChoice}`;
        text.style.backgroundColor = "green";
    }
    reset(compWin, youWin);
}

function reset(compWin, youWin) {
    if ((compWin == 5) || (youWin == 5)) {
        text.innerText = compWin == 5 ? `Computer win by ${compWin}/${youWin}` : `User win by ${youWin}/${compWin}`;
        text.style.backgroundColor = "blue";
        text.style.color = "whitesmoke";
        setZero();
    }
}

function setZero() {
    let comp = document.getElementById("comp");
    let you = document.getElementById("you");
    let roundNumber = document.getElementById("round-number");
    compWin = 0;
    youWin = 0;
    round = 1;
    comp.innerText = compWin;
    you.innerText = youWin;
    roundNumber.innerText = round;
}





