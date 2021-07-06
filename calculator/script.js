// VARIABLES TO KEEP TRACK OF VALUES NEEDED TO PERFORM SUMS
let displayValue = "0";
let firstInput = null;
let operator = null;
// CHECK IF THE FIRST NUMBER AND OPERATOR ARE STORED TO DETERMINE IF WE ARE READY FOR THE SECOND NUMBER
let secondInput = false;

// FUNCTION TO DETERMINE WHAT IS DISPLAYED ON SCREEN
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

// ENSURE ONLY ONE DECIMAL CAN BE INPUTTED
function decimal(dot) {
    if (!displayValue.includes(dot)) {
        displayValue += dot;
    }
}

function handleOperator(operatorPressed) {
    // CHANGE STRING TO NUMBER
    const inputValue = parseFloat(displayValue);
    // WHEN AN OPERATOR IS PRESSED MAKE THE DISPLAY VALUE THE FIRST NUMBER FOR THE SUM
    if (firstInput === null && !isNaN(inputValue)) {
        firstInput = inputValue;
    // IF AN OPERATOR IS ASSIGNED, CALL AND STORE CALCULATION TO RESULT VARIABLE WHEN ANY OPERATOR IS PRESSED INC EQUALS
    } else if (operator) {
        const result = calculation(firstInput, inputValue, operator);
        // DISPLAY THE RESULT WHEN AN OPERATOR IS PRESSES
        displayValue = result;
        // SET RESULT TO FIRST INPUT SO IT CAN BE USED IN NEXT CALCULATION
        firstInput = result;
    }
    secondInput = true;
    // SET OPERATOR PROPERTY TO OPERATOR WHICH WAS CLICKED
    operator = operatorPressed;

    console.log(displayValue);
    console.log(firstInput);
    console.log(operator);
    console.log(secondInput);
}

// PERFORM THE CALCULATIONS
function calculation(firstInput, inputValue, operator) {
    if (operator === "*") {
        return firstInput * inputValue;
    }
    if (operator === "/") {
        return firstInput / inputValue;
    }
    if (operator === "+") {
        return firstInput + inputValue;
    }
    if (operator === "-") {
        return firstInput - inputValue
    }
    // IF OPERATOR IS = DO NOTHING
    return inputValue;
}

function updateScreen() {
    let display = document.querySelector(".calculator__screen");
    display.value = displayValue;
    }   
updateScreen();

const buttons = document.querySelector(".calculator__keys");
buttons.addEventListener("click", (event) => {
    // STOP DISPLAYING UNDEFINED WHEN I CLICK THE CALCULATOR ITSELF
    if (!event.target.matches("button")) {
        return;
    }
    // ASSIGN HANDLEOPERATOR TO OPERATOR BUTTONS
    if (event.target.classList.contains("operator")) {
        handleOperator(event.target.value);
        updateScreen();
        return;
    }
    // ASSIGN DECIMAL FUNCTION TO DECIMAL BUTTON
    if (event.target.classList.contains("decimal")) {
        decimal(event.target.value);
        updateScreen();
        return;
    }
    // RESET THE STORED VARIABLES WHEN AC IS CLICKED
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