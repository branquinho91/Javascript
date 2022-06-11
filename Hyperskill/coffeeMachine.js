const input = require('sync-input');

const espresso = {
  water: 250,
  milk: 0,
  beans: 16,
  price: 4,
};

const latte = {
  water: 350,
  milk: 75,
  beans: 20,
  price: 7,
};

const cappuccino = {
  water: 200,
  milk: 100,
  beans: 12,
  price: 6,
};

const machine = {
  water: 400,
  milk: 540,
  beans: 120,
  cups: 9,
  cash: 550,
};

function remaining() {
  console.log(`The coffee machine has:
  ${machine.water} ml of water
  ${machine.milk} ml of milk
  ${machine.beans} g of coffee beans
  ${machine.cups} disposable cups
  $${machine.cash} of money`);
}

function makeCoffee(type) {
  if (machine.water >= type.water) {
    machine.water -= type.water;
  } else {
    return console.log("Sorry, not enough water!");
  }
  if (machine.milk >= type.milk) {
    machine.milk -= type.milk;
  } else {
    return console.log("Sorry, not enough milk!");
  }
  if (machine.beans >= type.beans) {
    machine.beans -= type.beans;
  } else {
    return console.log("Sorry, not enough coffee beans!");
  }
  if (machine.cups > 0) {
    machine.cups--;
  } else {
    return console.log("Sorry, not enough disposable cups!");
  }
  machine.cash += type.price;
}

function buy() {
  const type = input("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu:\n");
  if (type === "1") makeCoffee(espresso);
  if (type === "2") makeCoffee(latte);
  if (type === "3") makeCoffee(cappuccino);
  if (type === "back") return;
}

function fill() {
  machine.water += Number(input("Write how many ml of water you want to add:\n"));
  machine.milk += Number(input("Write how many ml of milk you want to add:\n"));
  machine.beans += Number(input("Write how many grams of coffee beans you want to add:\n"));
  machine.cups += Number(input("Write how many disposable coffee cups you want to add:\n"));
}

function take() {
  console.log(`I gave you $${machine.cash}`);
  machine.cash = 0;
}


while (true) {
  const action = input("Write action (buy, fill, take, remaining, exit):\n");
  if (action === "buy") buy();
  if (action === "fill") fill();
  if (action === "take") take();
  if (action === "remaining") remaining();
  if (action === "exit") break;
}
