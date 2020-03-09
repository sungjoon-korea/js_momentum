const quote = document.querySelector(".quotes");
const QUOTE_NUMBER = 4;

const quotes = ["1", "2", "3", "4"];

function addQuotes(quoteNumber) {
  console.log(quotes[quoteNumber + 1]);
  querySelector;
}

function genRandom() {
  const number = Math.floor(Math.random() * QUOTE_NUMBER);
  return number;
}

function init() {
  const randomNumber = genRandom();
  addQuotes(randomNumber);
}

init();
