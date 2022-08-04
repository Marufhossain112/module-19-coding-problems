for (let i = 412; i <= 456; i = i+2) {
  console.log(i);
}
for (let i = 581; i <= 623; i = i + 2) {
  console.log(i);
}

for (let i = 412; i <= 456; i++) {
  console.log(i);
}

let myLearning = ["Html", "Css", "Javascript", "PSD to HTML", "Git & Github"];
for (let i = 0; i <= myLearning.length - 1; i++) {
  console.log(myLearning[i]);
}

let myPhones = ["Nokia", "Symphony", "Samsung", "Sony"];
let i = 0;
while (i <= myPhones.length - 1) {
  console.log(myPhones[i]);
  i++;
}

for (let i = 1; i <= 6; i++) {
  if (i >= 4) {
    break;
  }
  console.log(i);
}
let bookPrice = [323, 33, 56, 123, 835, 344, 122, 234];
let cutPrice = [];
for (let i = 0; i <= bookPrice.length - 1; i++) {
  let eachBook = bookPrice[i];

  if (eachBook < 200) {
    sortPrice = eachBook;
    cutPrice.push(sortPrice);
  }
}
console.log(cutPrice);
let bookPrice = [323, 33, 56, 123, 835, 344, 122, 234];
let cutPrice = [];
for (let i = 0; i <= bookPrice.length - 1; i++) {
  let eachBook = bookPrice[i];
  if (eachBook > 200) {
    sortPrice = eachBook;
    cutPrice.push(sortPrice);
    continue;
  }
  console.log(eachBook);
}
console.log(cutPrice);

has return and has parameter
function odd_even(num) {
  if (num === 0 || num === undefined || num === null) {
    console.log("It's an invalid number.");
  } else if (num % 2 === 0) {
    console.log("It's an even number.");
  } else if (num % 2 === 1) {
    console.log("It's an odd number.");
  }
  return num;
}
let result = odd_even(89);
console.log(result);

no return and has parameter
function odd_even(num) {
  if (num === 0 || num === undefined || num === null) {
    console.log("It's an invalid number.");
  } else if (num % 2 === 0) {
    console.log("It's an even number.");
  } else if (num % 2 === 1) {
    console.log("It's an odd number.");
  }
return num;
}
odd_even(8);
let result = odd_even(89);
console.log(result);

has return and no parameter

function odd_even() {
  let inputNum = -5;
  if (inputNum === 0 || inputNum === undefined || inputNum === null) {
    console.log("It's an invalid number.");
  } else if (inputNum % 2 === 0 || (inputNum < 0 && inputNum % 2 === 0)) {
    console.log("It's an even number.");
  } else if (inputNum % 2 === 1 || (inputNum < 0 && inputNum % 2 === -1)) {
    console.log("It's an odd number.");
  }
  return inputNum;
}
let result = odd_even();
console.log(result);

no return and no parameter
function odd_even() {
  let inputNum = -5;
  if (inputNum === 0 || inputNum === undefined || inputNum === null) {
    console.log("It's an invalid number.");
  } else if (inputNum % 2 === 0 || (inputNum < 0 && inputNum % 2 === 0)) {
    console.log("It's an even number.");
  } else if (inputNum % 2 === 1 || (inputNum < 0 && inputNum % 2 === -1)) {
    console.log("It's an odd number.");
  }
}
odd_even();

function trafficRules() {
  let signal = "green";

  if (signal === "red") {
    console.log("Don't cross the road.");
  } else if (signal === "yellow") {
    console.log("You should stop.");
  } else if (signal === "green") {
    console.log("Now you can cross the road.");
  }
}
trafficRules();

function timeTable(num) {
  for (i = 1; i <= 10; i++) {
    result = num * i;
    console.log(num +" * "+ i + " = "+result);
  }
}
let digit = 13;
timeTable(digit);

function toLowerCase() {
  let string = "I Am Groot";
  let result = string.toLowerCase();
  console.log(result);
  return result;
}

let returnResult = toLowerCase();
console.log(returnResult);

function fullName(firstName,lastName){
return firstName + " " + lastName
};
let getName =  fullName("Maruf","Hossain");
console.log(getName);

function makeSquare(num) {
  square = num * num;
  return square;
}
let result = makeSquare(4);
console.log(result);

const pizza = {
  toppings: ["cheese", "sauce", "pepperoni"],
  crust: "deep dish",
  serves: 2,
};
console.log(pizza.toppings[2]);
