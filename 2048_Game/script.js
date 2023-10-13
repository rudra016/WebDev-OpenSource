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

    
    function right() {
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
          let vara = qq.concat(change)
  
          arr[i].innerHTML = vara[0]
          arr[i+3].innerHTML = vara[3]
          arr[i+2].innerHTML = vara[2]
          arr[i+1].innerHTML = vara[1]
        }
      }
    }
  
   
    function up() {
      for (let i=0; i < 4; i++) {
        let a = arr[i].innerHTML
        let b = arr[i+w].innerHTML
        let c = arr[i+(w*2)].innerHTML
        let d = arr[i+(w*3)].innerHTML
        let column = [parseInt(a), parseInt(b), parseInt(c), parseInt(d)]
  
        let filteredColumn = column.filter(num => num)
        let lost = 4 - filteredColumn.length
        let qq = Array(lost).fill(0)
        let newColumn = filteredColumn.concat(qq)
  
        arr[i].innerHTML = newColumn[0]
        arr[i +w].innerHTML = newColumn[1]
        arr[i+(w*2)].innerHTML = newColumn[2]
        arr[i+(w*3)].innerHTML = newColumn[3]
      }
    }
  
    function down() {
      for (let i=0; i < 4; i++) {
        let a = arr[i].innerHTML
        let b = arr[i+w].innerHTML
        let c = arr[i+(w*2)].innerHTML
        let d = arr[i+(w*3)].innerHTML
        let column = [parseInt(a), parseInt(b), parseInt(c), parseInt(d)]
  
        let filteredColumn = column.filter(num => num)
        let lost = 4 - filteredColumn.length
        let qq = Array(lost).fill(0)
        let newColumn = qq.concat(filteredColumn)
  
        arr[i].innerHTML = newColumn[0]
        arr[i +w].innerHTML = newColumn[1]
        arr[i+(w*2)].innerHTML = newColumn[2]
        arr[i+(w*3)].innerHTML = newColumn[3]
      }
    }


    function addrow() {
      for (let i =0; i < 15; i++) {
        if (arr[i].innerHTML === arr[i +1].innerHTML) {
          let sum = parseInt(arr[i].innerHTML) + parseInt(arr[i +1].innerHTML)
          arr[i].innerHTML = sum
          arr[i +1].innerHTML = 0
          ans += sum
          var_2.innerHTML = ans
        }
      }
      check()
    }
  
    function combineColumn() {
      for (let i =0; i < 12; i++) {
        if (arr[i].innerHTML === arr[i +w].innerHTML) {
          let sum = parseInt(arr[i].innerHTML) + parseInt(arr[i +w].innerHTML)
          arr[i].innerHTML = sum
          arr[i +w].innerHTML = 0
          ans += sum
          var_2.innerHTML = ans
        }
      }
      check()
    }
  


    function nav(e) {
      if(e.keyCode === 37) {keyLeft()} 
      else if (e.keyCode === 38) {keyUp()}
      else if (e.keyCode === 39) {keyRight()} 
      else if (e.keyCode === 40) {keyDown()}
    }
    document.addEventListener('keyup', nav)
  
    function keyRight() {
      right()  
      addrow()
      right()
      func_gen()
    }
  
    function keyLeft() {
      left()
      addrow()
      left()
      func_gen()
    }
  
    function keyUp() {
      up()
      combineColumn()
      up()
      func_gen()
    }
  
    function keyDown() {
      down()
      combineColumn()
      down()
      func_gen()
    }
  
  })