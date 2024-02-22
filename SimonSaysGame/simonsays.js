let gameseq=[];
let userseq=[];
let btns=["yellow","purple","red","green"];
let started=false;
let level=0;
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
  if(started==false){
    console.log("game started");
    started=true;
    levelup();
  }
});
function levelup(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randidx=Math.floor(Math.random()*3);
    let randcolor=btns[randidx];
    let randbtn=document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    btnflash(randbtn);
}
function btnflash(btn){
   btn.classList.add("flash");
   setTimeout(function(){
    btn.classList.remove("flash");
   },250);
}
let allbtns=document.querySelectorAll(".btn");
for (btn of allbtns){
  btn.addEventListener("click",btnpress);
}
function btnpress(){
  let btn=this; //stores which color  button is being pressed
  btnflash(btn);
  usercolor=btn.getAttribute("id");
  console.log(usercolor);
  userseq.push(usercolor);
  check(userseq.length-1);
}
function check(idx){
   if(gameseq[idx]===userseq[idx]){
       if(gameseq.length==userseq.length){
        setTimeout(levelup,1000);
       }
   }else{
    h2.innerText=`Game Over ! Your score was ${level} Press any key to start again.`
    reseT();
    // document.querySelector("body").style.backgroundColor=red;
    // setTimeout(function(){
    //   document.querySelector("body").style.backgroundColor=white;
    // },150);
   }
}
function reset(){
  started=false;
  gameseq=[];
  userseq=[];
  level=0;
}