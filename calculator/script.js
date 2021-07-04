let displayValue = "0";
let firstInput = null;
let operator = null;
let secondInput = false;
// console.log(displayValue);
// console.log(firstInput);
// console.log(operator);
// console.log(secondInput);

function number(digit) {
    if (displayValue === "0" || secondInput === true) {
        displayValue = digit;
        secondInput = false;
    } else {
        displayValue += digit;
    }
    console.log(displayValue);
    console.log(firstInput);
    console.log(operator);
    console.log(secondInput);
}


function decimal(dot) {
    if (!displayValue.includes(dot)) {
        displayValue += dot;
    }
}


function handleOperator(operatorPressed) {
    const inputValue = parseFloat(displayValue);
    if (firstInput === null && !isNaN(inputValue)) {
        firstInput = inputValue;
    } else if (operator) {
        const result = calculation(firstInput, inputValue, operator);

        displayValue = String(result);
        firstInput = result;
    }

    secondInput = true;
    operator = operatorPressed;

    console.log(displayValue);
    console.log(firstInput);
    console.log(operator);
    console.log(secondInput);
}


function calculation(firstInput, secondInput, operator) {
    if (operator === "*") {
        return firstInput * secondInput;
    }
    if (operator === "/") {
        return firstInput / secondInput;
    }
    if (operator === "+") {
        return firstInput + secondInput;
    }
    if (operator === "-") {
        return firstInput - secondInput
    }
    return secondInput;
}


function updateScreen() {
    let display = document.querySelector(".calculator__screen");
    display.value = displayValue;
    }
    
updateScreen();


const buttons = document.querySelector(".calculator__keys");
buttons.addEventListener("click", (event) => {

    if (!event.target.matches("button")) {
        return;
    }

    if (event.target.classList.contains("operator")) {
        handleOperator(event.target.value);
        updateScreen();
        return;
    }

    if (event.target.classList.contains("decimal")) {
        decimal(event.target.value);
        updateScreen();
        return;
    }

    if (event.target.classList.contains("clear")) {
        displayValue = "0";
        firstInput = null;
        secondInput = false;
        operator = null;

        console.log(displayValue);
        console.log(firstInput);
        console.log(operator);
        console.log(secondInput);
        updateScreen();
        return;
    }

    number(event.target.value);
    updateScreen();
});