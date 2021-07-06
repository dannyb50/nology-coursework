// VARIABLES TO KEEP TRACK OF VALUES NEEDED TO PERFORM SUMS
let displayValue = "0";
let firstInput = null;
let operator = null;
// CHECK IF THE FIRST NUMBER AND OPERATOR ARE STORED TO DETERMINE IF WE ARE READY FOR THE SECOND NUMBER
let secondInput = false;
// console.log(displayValue);
// console.log(firstInput);
// console.log(operator);
// console.log(secondInput);

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
    //CHANGE STRING TO NUMBER
    const inputValue = parseFloat(displayValue);
    //WHEN AN OPERATOR IS PRESSED MAKE THE DISPLAY VALUE THE FIRST NUMBER FOR THE SUM
    if (firstInput === null && !isNaN(inputValue)) {
        firstInput = inputValue;
    //IF AN OPERATOR IS ASSIGNED, CALL AND STORE CALCULATION TO RESULT
    } else if (operator) {
        const result = calculation(firstInput, inputValue, operator);

        displayValue = result;
        //SET RESULT TO FIRST INPUT SO IT CAN BE USED IN NEXT CALCULATION
        firstInput = result;
    }

    secondInput = true;
    operator = operatorPressed;

    console.log(displayValue);
    console.log(firstInput);
    console.log(operator);
    console.log(secondInput);
}

//PERFORM THE CALCULATIONS
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
    //STOP DISPLAYING UNDEFINED WHEN I CLICK THE CALCULATOR ITSELF
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

    //RESET THE STORED VARIABLES WHEN AC IS CLICKED
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