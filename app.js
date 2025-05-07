let choices=document.querySelectorAll(".choice");
let rockBtn=document.querySelector("#rock");
let paperBtn=document.querySelector("#paper");
let scissorsBtn=document.querySelector("#scissors");
const msg=document.querySelector("#msg");

let userScore=0;
let compScore=0;

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");


const genCompChoice=()=>{
    let options=["rock","paper","scissors"];
    const randIndx=Math.floor(Math.random()*3);
    return options[randIndx];
}

const draw=()=>{
    console.log("game was draw.");
    msg.innerText="Game was Draw.Play again!";
    msg.style.backgroundColor="#1E2D2F";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("you win!");
        msg.innerText=`You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        console.log("You lose!");
        msg.innerText=`You lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playgame=(userChoice)=>{
    console.log("user choice=",userChoice);
    const CompChoice=genCompChoice();
    console.log("computer choice=",CompChoice);

    if(userChoice===CompChoice){
        draw();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            if(CompChoice==="paper"){
                userWin=false;
            }
        }
        else if(userChoice==="paper"){
            if(CompChoice==="scissors"){
                userWin=false;
            }
        }
        if(userChoice==="scissors"){
            if(CompChoice==="rock"){
                userWin=false;
            }
        }
        showWinner(userWin,userChoice,CompChoice);
    }
    
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playgame(userChoice);
    })
})


