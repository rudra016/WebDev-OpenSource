console.log("Welcome to TicTacToe")

let turnAudio=new Audio('static/bruh.mp4')
let turn='X';
let gameOver=false;

//Change Turn

const changeTurn=()=>{
    return turn==='X'?'0':'X';
}

// Win 
const checkWin=()=>{
    let boxtext=document.getElementsByClassName('boxText')
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText)&&(boxtext[e[1]].innerText===boxtext[e[2]].innerText)&&(boxtext[e[0]].innerText!=='')){
            document.querySelector('.info').innerHTML=boxtext[e[0]].innerText+' Wins !!'; 
            gameOver=true
            document.querySelector('.win').style.display='block'
        }

    })
}

//
let boxes=document.getElementsByClassName('box');

Array.from(boxes).forEach(element => {
    let boxText=element.querySelector('.boxText');
    element.addEventListener('click',()=>{
        if(boxText.innerText===''){
            boxText.innerText=turn;
            turn=changeTurn()
            // turnAudio.play();
            checkWin();
            if(!gameOver){
                document.querySelector('.info').innerHTML='Turn of '+turn;
            }
        }
    })
});

// Eventlistener for reset

reset.addEventListener('click',()=>{
    box=document.querySelectorAll('.boxText')
    Array.from(box).forEach(e => {
        e.innerText=''
    });
    turn='X';
    gameOver=false;
    document.querySelector('.info').innerHTML='Turn of '+turn;
    document.querySelector('.win').style.display='none'
})