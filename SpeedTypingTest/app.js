let countertimerEl = document.getElementById("timer");
let spinnerEl = document.getElementById("spinner");
let quoteDispalyEl = document.getElementById("quoteDisplay");
let TextAreaEl = document.getElementById("quoteInput");
let resultEl = document.getElementById("result");
let submitBtnEl = document.getElementById("submitBtn");
let resetbtnEl = document.getElementById("resetBtn");

let quotePara = quoteDispalyEl.textContent;
let TextAreaElValue = TextAreaEl.value;

//This function is used for fetch the data

function fetchData() {
    quoteDispalyEl.classList.add("d-none");
    spinnerEl.classList.remove("d-none");
    let options = {
        method: "GET"
    }
    fetch("https://apis.ccbp.in/random-quote", options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            console.log(jsonData);
            let randomQuote = jsonData.content;
            quoteDispalyEl.classList.remove("d-none");
            spinnerEl.classList.add("d-none");
            quoteDispalyEl.textContent = randomQuote;
            quoteDispalyEl.style.fontWeight = "bold";
            console.log(randomQuote);

        })
}
//here we have to create a counter .
let uniqueid = null; //unique Id is declear befor the function because for clear interval we have to use all these.

function timer() {
    uniqueid = setInterval(function() {
        let counter = countertimerEl.textContent;
        let siteTimer = parseInt(counter);
        siteTimer = siteTimer + 1;
        countertimerEl.textContent = siteTimer;

    }, 1000);


}

fetchData();
timer();
//Both above functions called for run the functions 

submitBtnEl.onclick = function() {

    if ((quoteDispalyEl.textContent) === (TextAreaEl.value)) {
        resultEl.textContent = "You Typed in " + countertimerEl.textContent + "  Seconds";
        resultEl.style.color = "#690cb0";
        resultEl.style.fontWeight = "bold";
        resultEl.style.padding = "5px";
        clearInterval(uniqueid);



    } else {
        resultEl.textContent = "You Typed Incorrect Sentence";
        resultEl.style.color = "red";
        resultEl.style.fontWeight = "bold";
    }

};

resetbtnEl.onclick = function() {
    fetchData();
    clearInterval(uniqueid);
    resultEl.textContent = "";
    TextAreaEl.value = "";
    countertimerEl.textContent = 0; //this line is added to reset the value to 0 
    timer(); //timer added here just to call the function 

}