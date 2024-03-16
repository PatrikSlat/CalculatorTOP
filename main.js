// Reminder: Add error message when dividng with 0 + disable multiple trailing dots
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
    currentOutput.textContent = currentOperation;
    previousOutput.textContent = previousOperation;
})
  
numberButtons.forEach((n) => {
    n.addEventListener("click", (e) => {
        currentOperation += e.target.textContent
        currentOutput.innerHTML = currentOperation
    })
})

operatorButtons.forEach((o) => {
    o.addEventListener("click", (e) => {
        operator = e.target.textContent;
        previousOutput.innerHTML = `${currentOperation} ${e.target.textContent}`;
        previousOperation = currentOperation;
        currentOperation = "";
        currentOutput.innerHTML = currentOperation;
    })
})

equalButton.addEventListener("click", () => {
    operate();
})

function operate() {
    let result = 0;
    let flag = false;
    if (operator === "+") {
        result = Number(previousOperation) + Number(currentOperation);
    } else if (operator === "-") {
        result = Number(previousOperation) - Number(currentOperation);
    } else if (operator === "*") {
        result = Number(previousOperation) * Number(currentOperation);
    } else if (operator === "/") {
        if (Number(currentOperation) !== 0) {
            result = Number(previousOperation) / Number(currentOperation);
        } else {
            flag = true;
        }
    } else {
        flag = true;
    }

    if (flag){
        previousOutput.innerHTML = "";
        currentOutput.innerHTML = "Something went wrong... AC to continue :(";
    }else{
        previousOutput.innerHTML = "";
        currentOutput.innerHTML = result;
        currentOperation = result;
    }
}
