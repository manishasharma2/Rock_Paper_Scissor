let userscore = 0;
let machinescore = 0;
let msg = document.getElementById("msg");
const choices = document.querySelectorAll(".choice");
let user = document.getElementById("user-score");
let mac = document.getElementById("machine-score");
let reset = document.getElementById("reset-btn");

reset.addEventListener("click",()=>{
    user.innerText = "0";
    mac.innerText = "0";
    msg.innerText ="Restarted the game";
    msg.style.backgroundColor = "#081b31";
})
const computerchoice = () =>{
    const options = ["rock","paper","scissors"];
    let ran = Math.floor (Math.random() * 3);
    return options[ran];
}
const playgame = (userchoice) =>{
    //userchoi ce
    console.log('Your choice',userchoice);
    //generate computer choice
    const compchoice = computerchoice();
    console.log('Computer choice',compchoice);
    if(compchoice === userchoice ){
        drawgame();
    }
    else{
        userwin = true;
        if(userchoice === "rock" ){
            if(compchoice == "paper"){
                userwin = false;
            }else{
                userwin = true;
            }
        }
        if(userchoice === "paper" ){
            if(compchoice == "rock"){
                userwin = true;
            }else{
                userwin = false;
            }
        }
        if(userchoice === "scissors" ){
            if(compchoice == "paper"){
                userwin = true;
            }else{
                userwin = false;
            }
        }
        showWinner(userwin,userchoice,compchoice);
    }
}

const showWinner = (userwin,userchoice,compchoice) =>{
    if(userwin){
        msg.innerText = `You Win :)  Your ${userchoice} beats ${compchoice}`;
        userscore++;
        user.innerText = userscore;
        msg.style.backgroundColor = "green";
    }else{
        msg.innerText = `You Lost :(  ${compchoice} beats your ${userchoice}`;
        machinescore++;
        mac.innerText = machinescore;
        msg.style.backgroundColor = "red";
    }
}
const drawgame = () =>{
    msg.innerText = "Both make the same choice !";
    msg.style.backgroundColor = "#081b31";
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
        //console.log('choive was made',userchoice);
        playgame(userchoice);
    });
});