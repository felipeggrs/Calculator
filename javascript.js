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
});

// operator buttons
// add button
const addBtn = document.querySelector(".addBtn");
addBtn.addEventListener("click", () => {
  firstNumber = display.textContent;
  operator = "+";
  display.textContent += addBtn.textContent;
});

// subtract button
const subtractBtn = document.querySelector(".subtractBtn");
subtractBtn.addEventListener("click", () => {
  firstNumber = display.textContent;
  operator = "-";
  display.textContent += subtractBtn.textContent
});

// multiply button
const multiplyBtn = document.querySelector(".multiplyBtn");
multiplyBtn.addEventListener("click", () => {
  firstNumber = display.textContent;
  operator = "*";
  display.textContent += multiplyBtn.textContent
});

// divide button
const divideBtn = document.querySelector(".divideBtn");
divideBtn.addEventListener("click", () => {
  firstNumber = display.textContent;
  operator = "/";
  display.textContent += divideBtn.textContent
});

// equal button
const equalBtn = document.querySelector(".equalBtn");
equalBtn.addEventListener("click", () => {
  display.textContent += `${equalBtn.textContent}`
});


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
