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


/* 
numberButtons.forEach((n) => {
    n.addEventListener("click", () => {
        console.log(n.textContent);
        currentOutput.innerHTML = n.textContent;
    })
})
*/