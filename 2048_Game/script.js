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

    function left() {
      for (let i=0; i < 16; i++) {
        if (i % 4 === 0) {
          let a = arr[i].innerHTML
          let b = arr[i+1].innerHTML
          let c = arr[i+2].innerHTML
          let d = arr[i+3].innerHTML
          let e = [parseInt(a), parseInt(b), parseInt(c), parseInt(d)]
  
          let change = e.filter(num => num)
          let lost = 4 - change.length
          let qq = Array(lost).fill(0)
          let vara = change.concat(qq)
  
          arr[i].innerHTML = vara[0]
          arr[i +3].innerHTML = vara[3]
          arr[i +2].innerHTML = vara[2]
          arr[i +1].innerHTML = vara[1]
        }
      }
    }
  
  
  })