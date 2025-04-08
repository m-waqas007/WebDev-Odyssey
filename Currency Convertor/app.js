const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies"//usd.min.json"
// "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

// print currency with country code
// for (code in countryList) {
//     console.log(code, countryList[code]);
// }

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");

const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

window.addEventListener("load", () => {
    updateExchangeRate();
});

for (let select of dropdowns) {
    for (currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;

        if (select.name === "from" && currCode === "USD") {
            newOption.selected = "selected";
        } else if (select.name === "to" && currCode === "INR") {
            newOption.selected = "selected";
        }
        select.append(newOption);
    }

    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    });
}

// update flag
const updateFlag = (element) => {
    // console.log(element);
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
};

btn.addEventListener("click", (evt) => {
    evt.preventDefault();

    //   let amount = document.querySelector(".amount input");
    //   let amtVal = amount.value;
    //   if(amtVal === "" || amtVal < 1)
    //   {
    //     amtVal = 1;
    //     amount.value = "1";
    //   }

    // const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`
    // let response = await fetch(URL);
    // let data = await response.json;
    // let rate = data[toCurr.value.to.toLowerCase()];
    // let finalAmount = amtVal*rate;
    // msg.innerText = `${amtVal} ${fromCurr} = ${finalAmount} ${toCurr.value}`

    updateExchangeRate();
});

/*
const updateExchangeRate = async () => {
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    // console.log(amtVal);
    if (amtVal === "" || amtVal < 1) {
        amtVal = 1;
        amount.value = "1";
    }

    // async function getUsdInrRate() {
    //     // This url will give you currencies UDS/XXX
    //     const url = 'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.min.json'

    //     // Fetch data and get INR rate
    //     const inr = await fetch(url)
    //         .then(response => response.json())
    //         .then(data => data['usd'].inr)

    //     console.log(inr)
    // } getUsdInrRate()

    // create url
    // console.log(fromCurr.value, toCurr.value);
    const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
    // const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}.min.json`;///${toCurr.value.toLowerCase()}.json`;

    let response = await fetch(URL);
    let data = await response.json();
    let rate = data[toCurr.value.toLowerCase()];

    // console.log(response);
    // console.log(data);
    console.log(rate);
    // console.log(amount);

    let finalAmount = amtVal * rate;
    msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
} */

const updateExchangeRate = async () => {
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    if (amtVal === "" || amtVal < 1) {
      amtVal = 1;
      amount.value = "1";
    }
    const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}.min.json`;///${toCurr.value.toLowerCase()}.json`;
    let response = await fetch(URL);
    let data = await response.json();
    console.log(data);
    let from = fromCurr.value.toLowerCase();
    console.log(from);
    let to = toCurr.value.toLowerCase();
    console.log(to);
  
    let rate = data[from][to];
  
  
    let finalAmount = amtVal * rate;
    msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
  };