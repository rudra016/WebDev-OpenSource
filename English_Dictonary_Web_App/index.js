const var_1 = document.getElementById("input");


const var_2 = document.getElementById("text");
const var_3 = document.getElementById("box2");
const var_4 = document.getElementById("title");


const var_5 = document.getElementById("ans");


let var_6 = true;
const var_7 = document.getElementById("audio");


async function func(word) {
  try {
    var_2.style.display = "block";
    var_3.style.display = "none";
    var_2.innerText = `Searching the meaning of "${word}"`;
    const var_8 = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    const var_9 = await fetch(var_8).then((res) => res.json());

    if (var_9.title) {
      var_3.style.display = "block";
      var_2.style.display = "none";
      var_4.innerText = word;
      var_5.innerText = "N/A";
      var_7.style.display = "none";
    } else {
      var_2.style.display = "none";
      var_3.style.display = "block";
      var_7.style.display = "inline-flex";
      var_4.innerText = var_9[0].word;
      var_5.innerText = var_9[0].meanings[0].definitions[0].definition;
      var_7.src = var_9[0].phonetics[0].audio;
    }
  } catch (error) {
    console.log(error);
    var_2.innerText = `an error happened, try again later`;
  }
}

var_1.addEventListener("keyup", (e) => {
  if (e.target.value && e.key==="Enter") {
    func(e.target.value);
  }
});



const searchButtonEl = document.getElementById("btn");

searchButtonEl.addEventListener("click", () => {
    const inputValue = var_1.value;
    if (inputValue) {
      func(inputValue);
    }
  });
  
  var_1.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      const inputValue = e.target.value;
      if (inputValue) {
        func(inputValue);
      }
    }
  });
  
  async function func(word) {
    try {
      if (var_6) {
        // Reposition the button below the word title and meaning
        var_3.appendChild(searchButtonEl);
      }
  
      var_2.style.display = "block";
      var_3.style.display = "none";
      var_2.innerText = `Searching the meaning of "${word}"`;
      const var_8 = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
      const var_9 = await fetch(var_8).then((res) => res.json());
  
      if (var_9.title) {
        var_3.style.display = "block";
        var_2.style.display = "none";
        var_4.innerText = word;
        var_5.innerText = "N/A";
        var_7.style.display = "none";
      } else {
        var_2.style.display = "none";
        var_3.style.display = "block";
        var_7.style.display = "inline-flex";
        var_4.innerText = var_9[0].word;
        var_5.innerText = var_9[0].meanings[0].definitions[0].definition;
        var_7.src = var_9[0].phonetics[0].audio;
      }
      var_6 = true;
    } catch (error) {
      console.log(error);
      var_2.innerText = `An error happened, try again later`;
    }
  }
  