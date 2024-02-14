let userscore=0;
let computerscore=0;

const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userscorePara=document.querySelector("#userscore");
const computerscorePara=document.querySelector("#computerscore");


const genCompChoice=() =>{
    const option=["rock","paper","secissor"];
 const randIdx=  Math.floor(Math.random() * 3);
 return option[randIdx];
};

const drawGame=()=>{
   
    msg.innerText="game draw";
    msg.style.backgroundColor="orange"

};

const showwinner=(userWin,userchoice,compChoice)=>{
    if(userWin){
        userscore++;
        userscorePara.innerText = userscore;
       
        msg.innerText=`you win! ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        console.log("You lose");
        computerscore++;
        computerscorePara.innerText=computerscore;
        msg.innerText=`you lose. ${compChoice} beats ${userchoice}`;
        msg.style.backgroundColor="red"
    }
}

const playGame=(userchoice)=>{
   
    const compChoice=genCompChoice();

    if(userchoice===compChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userchoice==="rock"){
          userWin=  compChoice==="paper"?false:true;
        }else if(userchoice==="paper"){
           userWin= compChoice==="secissors"?false:true;
        }else{
           userWin= compChoice==="rock"?false:true;
        }
        showwinner(userWin,userchoice,compChoice);
    }

};

choices.forEach((choice )=> {
   
 choice.addEventListener("click", ()=>{
    const userchoice =choice.getAttribute("Id");
        playGame(userchoice);
    });
});