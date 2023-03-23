let firstNumber = 0;
let secondNumber = 0;
let operator = "";

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
