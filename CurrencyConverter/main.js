let currencyObj = {
  dropdownINR: "INR",
  dropdownUSD: "USD",
  dropdownAUD: "AUD",
  dropdownBRL: "BRL",
  dropdownGBP: "GBP",
  dropdownCNY: "CNY",
  dropdownEUR: "EUR",
  dropdownJPY: "JPY",
  dropdownMXN: "MXN",
  dropdownRUB: "RUB",
  dropdownSAR: "SAR",
  dropdownSGD: "SGD",
  dropdownZAR: "ZAR",
  dropdownSEK: "SEK",
  dropdownAED: "AED",
};
let fromCurrency;
let toCurrency;

const convertNow = () => {
  let amount = parseInt(document.getElementById("amount").value);
  console.log(
    "fromCurrency: " +
      fromCurrency +
      " toCurrency: " +
      toCurrency +
      " amount: " +
      amount
  );

  var myHeaders = new Headers();
  myHeaders.append("apikey", "YrSZ7djoO3IVtQySLOTrT88OlqS0k59G");

  var requestOptions = {
    method: "GET",
    redirect: "follow",
    headers: myHeaders,
  };

  fetch(
    "https://api.apilayer.com/exchangerates_data/convert?to=" +
      toCurrency +
      "&from=" +
      fromCurrency +
      "&amount=" +
      amount +
      "",
    requestOptions
  )
    .then((response) => response.json())
    .then((json) => {
      let quotation = json.result;
      console.log(quotation);
      document.getElementById("finalResult").style.display = "block";
      document.getElementById("money").innerHTML = amount;
      document.getElementById("fromCurr").innerHTML = fromCurrency;
      document.getElementById("finalMoney").innerHTML = quotation;
      document.getElementById("toCurr").innerHTML = toCurrency;
      //document.getElementById("resultDisplay").value = quotation;
    })
    .catch((error) => console.log("error", error));
};

btnContainerFrom.addEventListener("click", function (event) {
  event.preventDefault();
  if (event.target.tagName === "A" && event.target.id.startsWith("dropdown")) {
    let placeId = event.target.id;
    //console.log(placeId);
    fromCurrency = currencyObj[placeId];
    //console.log(fromCurrency);
    document.getElementById("dropdownMenuButtonFrom").innerHTML = fromCurrency;
  }
});

btnContainerTo.addEventListener("click", function (event) {
  event.preventDefault();
  if (event.target.tagName === "A" && event.target.id.startsWith("dropdown")) {
    let placeId = event.target.id;
    //console.log(placeId);
    toCurrency = currencyObj[placeId];
    //console.log(toCurrency);
    document.getElementById("dropdownMenuButtonTo").innerHTML = toCurrency;
  }
});

const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark")
})
