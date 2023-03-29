// general variables
let firstNumber = 0;
let secondNumber = 0;
let operator = "";
const display = document.querySelector(".display");

// C button
const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", () => {
  firstNumber = 0;
  secondNumber = 0;
  operator = "";
  display.textContent = "";
  dotBtn.addEventListener("click", dotClick);
});

// operator buttons
// add button
const addBtn = document.querySelector(".addBtn");
addBtn.addEventListener("click", () => {
  // if user previously clicked "="
  if (display.textContent.match(/[-+*/]/) && display.textContent.match(/[=]/)) {
    display.textContent = `${firstNumber}`;
  // if user is chaining operations
  } else if (display.textContent.match(/(-?\d+)\s*([-+*\/])\s*(-?\d+)/)) {
    calculation = display.textContent.split(/(-?\d+)\s*([-+*\/])\s*(-?\d+)/);
    secondNumber = +calculation[3];
    firstNumber = `${(operate(firstNumber, operator, secondNumber).toFixed(3).replace(/\.?0+$/, ""))}`;
    display.textContent = `${firstNumber}`;
  }
  // user's first operation
  dotBtn.addEventListener("click", dotClick); // used to limit "." to 1 per number
  firstNumber = +display.textContent;
  operator = "+";
  display.textContent += addBtn.textContent;
});

// subtract button
const subtractBtn = document.querySelector(".subtractBtn");
subtractBtn.addEventListener("click", () => {
  if (display.textContent.match(/[-+*/]/) && display.textContent.match(/[=]/)) {
    display.textContent = `${firstNumber}`;
  } else if (display.textContent.match(/(-?\d+)\s*([-+*\/])\s*(-?\d+)/)) {
    calculation = display.textContent.split(/(-?\d+)\s*([-+*\/])\s*(-?\d+)/);
    secondNumber = +calculation[3];
    firstNumber = `${(operate(firstNumber, operator, secondNumber).toFixed(3).replace(/\.?0+$/, ""))}`;
    display.textContent = `${firstNumber}`;
}
  dotBtn.addEventListener("click", dotClick);
  firstNumber = +display.textContent;
  operator = "-";
  display.textContent += subtractBtn.textContent;
});

// multiply button
const multiplyBtn = document.querySelector(".multiplyBtn");
multiplyBtn.addEventListener("click", () => {
  if (display.textContent.match(/[-+*/]/) && display.textContent.match(/[=]/)) {
    display.textContent = `${firstNumber}`;
  } else if (display.textContent.match(/(-?\d+)\s*([-+*\/])\s*(-?\d+)/)) {
    calculation = display.textContent.split(/(-?\d+)\s*([-+*\/])\s*(-?\d+)/);
    secondNumber = +calculation[3];
    firstNumber = `${(operate(firstNumber, operator, secondNumber).toFixed(3).replace(/\.?0+$/, ""))}`;
    display.textContent = `${firstNumber}`;
}
  dotBtn.addEventListener("click", dotClick);
  firstNumber = +display.textContent;
  operator = "*";
  display.textContent += multiplyBtn.textContent;
});

// divide button
const divideBtn = document.querySelector(".divideBtn");
divideBtn.addEventListener("click", () => {
  if (display.textContent.match(/[-+*/]/) && display.textContent.match(/[=]/)) {
    display.textContent = `${firstNumber}`;
  } else if (display.textContent.match(/(-?\d+)\s*([-+*\/])\s*(-?\d+)/)) {
    calculation = display.textContent.split(/(-?\d+)\s*([-+*\/])\s*(-?\d+)/);
    secondNumber = +calculation[3];
    firstNumber = `${(operate(firstNumber, operator, secondNumber).toFixed(3).replace(/\.?0+$/, ""))}`;
    display.textContent = `${firstNumber}`;
}
  dotBtn.addEventListener("click", dotClick);
  firstNumber = +display.textContent;
  operator = "/";
  display.textContent += divideBtn.textContent;
});

// equal button
const equalBtn = document.querySelector(".equalBtn");
equalBtn.addEventListener("click", () => {
  calculation = display.textContent.split(/(-?\d+)\s*([-+*\/])\s*(-?\d+)/);
  secondNumber = +calculation[3];
  if (secondNumber === 0) {
    return display.textContent = "Silly boy. You know better.";
  }
  dotBtn.addEventListener("click", dotClick);
  display.textContent += ` ${equalBtn.textContent} ${(operate(firstNumber, operator, secondNumber).toFixed(3).replace(/\.?0+$/, ""))}`;
  firstNumber = +`${(operate(firstNumber, operator, secondNumber).toFixed(3).replace(/\.?0+$/, ""))}`;
});

// "." dot button
function dotClick() {
  display.textContent += dotBtn.textContent;
  dotBtn.removeEventListener("click", dotClick); // only one "." per number
}
const dotBtn = document.querySelector(".dotBtn");
dotBtn.addEventListener("click", dotClick);

// digit buttons
const buttons = document.querySelectorAll(".btn");
buttons.forEach(button => {
  button.addEventListener("click", () => {
      display.textContent += button.textContent;
  })
})

// takes 3 arguments and works based on the operator used
function operate(firstNumber, operator, secondNumber) {
  if (operator === "+") {
    return add(firstNumber, secondNumber);
  } else if (operator === "-") {
    return subtract(firstNumber, secondNumber);
  } else if (operator === "*") {
    return multiply(firstNumber, secondNumber);
  } else if (operator === "/") {
    return divide(firstNumber, secondNumber);
  } else {
    return "Invalid operation, please try again";
  }
}

// 4 numeric functions:
// add
function add(...numbers) {
  return numbers.reduce((total, number) => {
    return total += number
  }, 0)
}
// subtract
function subtract(...numbers) {
  return numbers.reduce((total, number) => {
    return total -= number
  })
}
// multiply
function multiply(...numbers) {
  return numbers.reduce((total, number) => {
    return total *= number
  }, 1)
}
// divide
function divide(...numbers) {
  return numbers.reduce((total, number) => {
    return total /= number
  })
}
