document.addEventListener('DOMContentLoaded', () =>  {
    const main = document.querySelector('.main')
    const w = 4
    const var_2 = document.getElementById('value_2')
    const var_3 = document.getElementById('result')
    let arr = []
    let ans=0
  
    function func_gen() {
      randomNumber = Math.floor(Math.random() * arr.length)
      if (arr[randomNumber].innerHTML == 0) {
        arr[randomNumber].innerHTML = 2
        gameove()
      } else func_gen()
    }

    function func_create() {
      for (let i=0; i < w*w; i++) {
        square = document.createElement('div')
        square.innerHTML = 0
        arr.push(square)
        main.appendChild(square)
      }
      func_gen()
      func_gen()
    }
    func_create()
  
  })