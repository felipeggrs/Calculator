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
