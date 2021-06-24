const calculator = document.querySelector(".calculator");
const buttons = document.querySelector(".calculator__keys");
const display = document.querySelector(".calculator__screen")

buttons.addEventListener("click", (event) => {
    if (event.target.matches('button')) {

        const key = event.target;
        const action = key.dataset.action;
        const buttonValue = key.textContent;
        let displayValue = display.textContent;
        const previousKeyType = calculator.dataset.previousKeyType;

        if (action === "add" ||
            action === "subtract" ||
            action === "multiply" ||
            action === "divide" ) {
            calculator.dataset.previousKeyType = "operator";
            calculator.dataset.firstValue = displayValue;
            calculator.dataset.operator = action;
        }
        if (action === "decimal") {
            display.textContent = displayValue + '.';
        }
        if (action === "clear") {
            console.log('clear')
        }
        if (action === "calculate") {
            const firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;
            const secondValue = displayValue;

            display.textContent = calculate(firstValue, operator, secondValue)
        }
        if (!action) {
            if (displayValue === '0' || previousKeyType === 'operator') {
                display.textContent = buttonValue
            } else {
                display.textContent = displayValue + buttonValue;
            }
        }
    }

});

const calculate = (firstNum, operator, secondNum) => {
    let result = ''
    
    if (operator === 'add') {
      result = parseFloat(firstNum) + parseFloat(secondNum)
    } else if (operator === 'subtract') {
      result = parseFloat(firstNum) - parseFloat(secondNum)
    } else if (operator === 'multiply') {
      result = parseFloat(firstNum) * parseFloat(secondNum)
    } else if (operator === 'divide') {
      result = parseFloat(firstNum) / parseFloat(secondNum)
    }
    
    return result
  }