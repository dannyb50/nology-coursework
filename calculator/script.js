let displayValue = '0';
let firstInput = null;
let operator = null;
let secondInput = null;

function updateScreen() {
    let display = document.querySelector(".calculator__screen");
    display.value = displayValue;
    }
    
    updateScreen();


function calculation(firstInput, operator, secondInput) {
    if (operator === "*") {
        displayValue = firstInput * secondInput;
    }
    if (operator === "/") {
        displayValue = firstInput / secondInput;
    }
    if (operator === "+") {
        displayValue = firstInput + secondInput;
    }
    if (operator === "-") {
        displayValue = firstInput - secondInput
    }
    updateScreen();
}


const buttons = document.querySelector(".calculator__keys");
buttons.addEventListener("click", (event) => {

    if (event.target.classList.contains("operator")) {
        displayValue = event.target.value;
        // firstInput = displayValue;
        // console.log(firstInput);
    }

    if (event.target.classList.contains("decimal")) {
        displayValue = event.target.value;
    }

    if (event.target.classList.contains("clear")) {
        displayValue = "0";
        firstInput = null;
        secondInput = null;
        operator = null;
    }

    else {
        displayValue = event.target.value;
    }

    updateScreen();
})

function input() {
    if (displayValue === "0") {
        
    }
}