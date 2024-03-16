let previousOperation = "";
let operator = "";
let currentOperation = "";

const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const equalButton = document.querySelector(".equal");
const clearButton = document.querySelector(".clear");
const deleteButton = document.querySelector(".delete");
const previousOutput = document.querySelector(".previous-output");
const currentOutput = document.querySelector(".current-output");


clearButton.addEventListener("click", () => {
    let previousOperation = "";
    let operator = "";
    let currentOperation = "";
    const currentOutput = "";
    const previousOutput = "";
})
  
numberButtons.forEach((n) => {
    n.addEventListener("click", () => {
        console.log(n.textContent);
        currentOperation += n.textContent
        currentOutput.innerHTML = currentOperation
    })
})

clearButton.addEventListener("click", () => {
    let previousOperation = "";
    let operator = "";
    let currentOperation = "";
    const currentOutput = "";
    const previousOutput = "";
})