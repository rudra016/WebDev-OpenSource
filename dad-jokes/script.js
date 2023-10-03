const btn = document.querySelector(".btn");
const joke = document.querySelector(".joke");

btn.addEventListener("click",()=>{
    const res = fetch("https://icanhazdadjoke.com/",{
    headers:{
        'Accept' : 'application/json'
    }

    })
    res.then(res=>res.json())
     .then(data=>joke.textContent = data.joke)
})
