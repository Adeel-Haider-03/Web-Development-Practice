
let gameSeq=[];
let userSeq=[];
let btns=["yellow","red","purple","green"];

let started=false;
let level=0;
let highestScore=0;

let h2=document.querySelector('h2');
let h3=document.querySelector('h3');


document.addEventListener("keypress",function(){  //keypress -> 
    if(started==false){
        started=true;

        levelUp();
    }
    
})

function btnFlash(btn){
    btn.classList.add("flash");

    setTimeout(function(){
        btn.classList.remove("flash");
    },250)

}

function userbtnFlash(btn){
    btn.classList.add("userflash");

    setTimeout(function(){
        btn.classList.remove("userflash");
    },250)

}


function levelUp(){

    userSeq=[];
    level++;

    
    h2.innerText=`Level ${level}`;

let randidx=Math.floor(Math.random()*btns.length);
let randColor=btns[randidx];

gameSeq.push(randColor);  //tracking gameSeq

let randbtn=document.querySelector(`.${randColor}`);
    btnFlash(randbtn);
}

function checkAns(idx){
    if (userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            if (level > highestScore) {
                highestScore = level; // Update the highest score
            }
            levelUp();
        }
    }
    else{
        h2.innerHTML=`Game Over! Your Score was <b>${level-1}</b><br>Press any key to restart`;
        document.body.style.backgroundColor='red';

        setTimeout(function(){
            document.body.style.backgroundColor='white';
        },250)
        reset();
    }
}


function btnPress(){
    let butnflash=this;
    userbtnFlash(butnflash);

    let userColor=butnflash.getAttribute("id")
    userSeq.push(userColor);  //tracking userSeq

    checkAns(userSeq.length-1);

}

let allBtns=document.querySelectorAll(".btn");
for (butn of allBtns){
    butn.addEventListener('click',btnPress);
}


function reset(){
    started=0;
    level=0;
    gameSeq=[];
    userSeq=[];
    h3.innerHTML=`Highest Score: ${highestScore}`;
}