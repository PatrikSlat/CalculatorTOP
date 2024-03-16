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
    previousOperation = "";
    operator = "";
    currentOperation = "";
    currentOutput.textContent = "";
    previousOutput.textContent = "";
})
  


numberButtons.forEach((n) => {
    n.addEventListener("click", () => {
        console.log(n.textContent);
        currentOperation += n.textContent
        currentOutput.innerHTML = currentOperation
    })
})