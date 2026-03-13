const cont=document.querySelector(".container")
let n=document.querySelector('.inputname')
n.addEventListener("change",nw);
function create(){
    for(let i=0;i<n.value**2;i++){
        let di=document.createElement('div');
        di.classList.add("d");
        di.style.cssText=`width:calc(720px/${n.value});height:calc(720px/${n.value})`;
        cont.appendChild(di);
        
    } 
    let arr=['black','blue','red','yellow','green','purple','skyblue','lightgreen','pink'];
    let a=document.querySelectorAll('.d')
    let s=Array.from(a);
    s.forEach(item => {
        item.addEventListener('mouseover',()=>{
            let index=Math.floor(Math.random()*9);
            item.classList.toggle(arr[index])        
        })
    })
}
function nw(){
    if(document.querySelector('.d')){
        let di=document.querySelectorAll(".d")
        let arr=Array.from(di);
        for(let i=0;i<arr.length;i++){
            cont.removeChild(arr[i]);
        }
    }
    create();
}
create();