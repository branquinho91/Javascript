const input = require('sync-input');

const CURRENCIES = {
  JPY: 113.5,
  EUR: 0.89,
  RUB: 74.36,
  USD: 1,
  GBP: 0.75,
};

function getCurrency() {

  console.log("What do you want to convert?")

  const inputCurrency = input("From: ").toUpperCase();
  if (!CURRENCIES.hasOwnProperty(inputCurrency)) {
    console.log("Unknown currency");
    return;
  }

  const outputCurrency = input("To: ").toUpperCase();
  if (!CURRENCIES.hasOwnProperty(outputCurrency)) {
    console.log("Unknown currency");
    return;
  }

  const amount = Number(input("Amount: "));
  if (amount < 1) {
    console.log("The amount can not be less than 1.");
    return;
  }
  if (isNaN(amount)) {
    console.log("The amount has to be a number");
    return;
  }

  const result = (amount / CURRENCIES[inputCurrency] * CURRENCIES[outputCurrency]).toFixed(4);

  console.log(`Result: ${amount} ${inputCurrency} equals ${result} ${outputCurrency}`);
  return;
}

console.log(`Welcome to Currency Converter!
1 USD equals  1 USD
1 USD equals  113.5 JPY
1 USD equals  0.89 EUR
1 USD equals  74.36 RUB
1 USD equals  0.75 GBP`);

while (true) {
  console.log("What do you want to do?");
  const decision = input("1-Convert currencies 2-Exit program\n");
  if (decision != "1" && decision != "2") console.log("Unknown input");
  if (decision == "1") getCurrency();
  if (decision == "2") {
    console.log("Have a nice day!");
    break;
  }
}
