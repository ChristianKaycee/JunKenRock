let openRule = document.querySelector(".rules");
let closeRule = document.querySelector(".close");
let rules = document.querySelector(".rule");
let overlay = document.querySelector(".rule-overlay");
let choices = document.querySelectorAll(".choice-box");
let scissors = document.querySelector(".scissors");
let spock = document.querySelector(".spock");
let paper = document.querySelector(".paper");
let lizard = document.querySelector(".lizard");
let rock = document.querySelector(".rock");
let choicePage = document.querySelector(".choice-box");
let pickPage = document.querySelector(".pick-box");
let myPickBorder = document.querySelector(".your-choice");
let myPickImg = document.querySelector(".your-choice img");
let botPickBorder = document.querySelector(".bot-choice");
let botPickImg = document.querySelector(".bot-choice img");
let resultBox = document.querySelector(".result-box");
let result = document.querySelector(".result");
let scoretxt = document.querySelector(".score");
let again = document.querySelector(".again");

// for rules page
openRule.addEventListener("click", (e)=>{
    e.preventDefault();
    rules.classList.add("show");
    overlay.classList.add("show");
})

closeRule.addEventListener("click", (e)=>{
    e.preventDefault();
    rules.classList.remove("show");
    overlay.classList.remove("show");
})

let score = 0;
//for game
choices.forEach(choice => {
    choice.addEventListener("click", (e) => {
        if (e.target.className.includes("scissors") || e.target.className.includes("spock") || e.target.className.includes("paper") || e.target.className.includes("lizard") || e.target.className.includes("rock")) {
            choicePage.style.display = "none";
            pickPage.style.display = "flex";

            let imgLoc, imgAlt, imgCol, playerChoice;

            if (e.target.className.includes("scissors")) {
                imgLoc = "./img/icon-scissors.svg";
                imgAlt = "scissors";
                imgCol = "hsl(39, 89%, 49%)";
                playerChoice = "scissors";
            } else if (e.target.className.includes("spock")) {
                imgLoc = "./img/icon-spock.svg";
                imgAlt = "spock";
                imgCol = "hsl(189, 59%, 53%)";
                playerChoice = "spock";
            } else if (e.target.className.includes("paper")) {
                imgLoc = "./img/icon-paper.svg";
                imgAlt = "paper";
                imgCol = "hsl(230, 89%, 62%)";
                playerChoice = "paper";
            } else if (e.target.className.includes("lizard")) {
                imgLoc = "./img/icon-lizard.svg";
                imgAlt = "lizard";
                imgCol = "hsl(261, 73%, 60%)";
                playerChoice = "lizard";
            } else if (e.target.className.includes("rock")) {
                imgLoc = "./img/icon-rock.svg";
                imgAlt = "rock";
                imgCol = "hsl(349, 71%, 52%)";
                playerChoice = "rock";
            }

            setChoiceDisplay(myPickBorder, myPickImg, imgLoc, imgAlt, imgCol);

            let botChoices = ["rock", "paper", "scissors", "lizard", "spock"];
            let botChoice = botChoices[Math.floor(Math.random() * 5)];

            let botImgLoc, botImgAlt, botImgCol;
            if (botChoice === "scissors") {
                botImgLoc = "./img/icon-scissors.svg";
                botImgAlt = "scissors";
                botImgCol = "hsl(39, 89%, 49%)";
            } else if (botChoice === "spock") {
                botImgLoc = "./img/icon-spock.svg";
                botImgAlt = "spock";
                botImgCol = "hsl(189, 59%, 53%)";
            } else if (botChoice === "paper") {
                botImgLoc = "./img/icon-paper.svg";
                botImgAlt = "paper";
                botImgCol = "hsl(230, 89%, 62%)";
            } else if (botChoice === "lizard") {
                botImgLoc = "./img/icon-lizard.svg";
                botImgAlt = "lizard";
                botImgCol = "hsl(261, 73%, 60%)";
            } else if (botChoice === "rock") {
                botImgLoc = "./img/icon-rock.svg";
                botImgAlt = "rock";
                botImgCol = "hsl(349, 71%, 52%)";
            }

            setChoiceDisplay(botPickBorder, botPickImg, botImgLoc, botImgAlt, botImgCol);
            setTimeout(()=>{ 
                determineWinner(playerChoice, botChoice, scoretxt, result);
            resultBox.style.display = "flex";},500);
            
        }
    });
    
    again.addEventListener("click", () => {
        choicePage.style.display = "flex";
        pickPage.style.display = "none";
        resultBox.style.display = "none";
    });
});
function determineWinner(player, bot, scoretxt, result) {
    const outcomes = {
        scissors: ["paper", "lizard"],
        paper: ["rock", "spock"],
        rock: ["lizard", "scissors"],
        lizard: ["spock", "paper"],
        spock: ["scissors", "rock"]
    };

    if (player === bot) {
        result.textContent = "It's a Draw!";
    } else if (outcomes[player].includes(bot)) {
        result.textContent = "You Win!";
        score += 1;
    } else {
        result.textContent = "You Lose!";
        if (scoretxt.textContent != 0){
            score -= 1;
        }
    }

    scoretxt.textContent = score;
}
function setChoiceDisplay(pickBorder, pickImg, imgLoc, imgAlt, imgCol) {
    pickBorder.style.borderColor = imgCol;
    pickImg.src = imgLoc;
    pickImg.alt = imgAlt;
}
