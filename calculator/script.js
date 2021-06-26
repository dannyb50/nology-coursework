const calculator = {
    displayValue: '0',
    firstNumber: null,
    waitingForSecondNumber: false,
    operator: null,
};

function keyPressed(digit) {
 
    if (calculator.displayValue === '0') {
        calculator.displayValue = digit;
    } else {
        calculator.displayValue += digit;
    }
};

function inputDecimal(point) {
    if (!calculator.displayValue.includes(point)) {
        calculator.displayValue += point;
    }
};

function updateScreen() {
const display = document.querySelector(".calculator__screen");
display.value = calculator.displayValue;
};

updateScreen();

const keys = document.querySelector(".calculator__keys");

keys.addEventListener("click", (event) => {
    let buttonClicked = event.target;

    if(buttonClicked.classList.contains("operator")) {
        keyPressed(buttonClicked.value);
        updateScreen();
        return;
    } if(buttonClicked.classList.contains("decimal")) {
        //keyPressed(buttonClicked.value); (Was overriding inputDecimal() and allowing more to be inputted)
        inputDecimal(buttonClicked.value);
        updateScreen();
        return;
    } if(buttonClicked.classList.contains("clear")) {
        keyPressed(buttonClicked.value);
        updateScreen();
        return;
    } else {
        keyPressed(buttonClicked.value);
        updateScreen();
    }
});