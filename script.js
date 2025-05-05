const ERRORMESSAGE = "INVALID";
// Create a function for add, substract, multiply, divide

function add(num1, num2)
{
    return num1 + num2;
}

function substract(num1, num2)
{
    return num1 - num2;
}

function multiply(multiplicand, multiplier)
{
    return multiplicand * multiplier;
}

function divide(dividend, divisor)
{
    // Check if the divisor is 0
    if (+divisor == 0) return ERRORMESSAGE;

    return dividend / divisor;
}

console.log(`add(1,2) expect 3 => ${add(1,2)}`);
console.log(`substract(1,2) expect -1 => ${substract(1,2)}`);
console.log(`multiply(1,2) expect 2 => ${multiply(1,2)}`);
console.log(`divide(1,2) expect 0.5 => ${divide(1,2)}`);

// Calculator Consists of 2 Numbers and an Operator
let number1 = '';
let operator = '';
let number2 = '';

function operate(num1, operator, num2)
{
    let result;
    num1 = +num1;
    num2 = +num2;
    // Check what function to use depending on operator
    switch(operator)
    {
        case '+':
            result = add(num1, num2)
            break;
        case '-':
            result = substract(num1, num2)
            break;
        case '*':
            result = multiply(num1, num2);
            break;
        case '/':
            result = divide(num1, num2);
            break;
        default:
            result = ERRORMESSAGE;
    }
    // Only if the result is not an error
    if (typeof result == 'number') result = +result.toFixed(8);

    return result;
}

function clear() {
    number1 = '';
    number2 = '';
    operator = '';
    displayContent.textContent = '';
} 

// List of Operators and non-numbers
const listOfOperators = ['+', '-', '*', '/'];
const listOfSpecialButtons = ['AC', '='];

// Select all buttons
const buttons = Array.from(document.querySelectorAll('button'));
const displayContent = document.querySelector('.calculator-display');
buttons.map(button => {
    if (listOfSpecialButtons.includes(button.textContent)) {
        // Special Buttons
        if (button.textContent === 'AC')
        {
            button.addEventListener('click', clear());
        } else {
            button.addEventListener('click', () => {
                // Don't do anything if any of these are empty
                if (!number1 || !operator || !number2) return; 

                number1 = operate(number1, operator, number2); // Allows to operate on the result
                operator = '';
                number2 = '';
                displayContent.textContent = number1;
            })
        }
    } else if (listOfOperators.includes(button.textContent)) {
        // Operators
        button.addEventListener('click', () => {
            console.log(button.textContent);
            // TODO: If we alraedy have an operator, calculate it
            operator = button.textContent;

        });
    } 
    else { 
        // Numbers Button
        button.addEventListener('click', () => {
            // Check if we just got an error
            if (displayContent.textContent == ERRORMESSAGE) {
                clear();
            }

            // If we have typed number1 and selected an operator
            // The next numbers should be saved on number2 variable and the new display
            if (number1 && operator) {
                number2 += button.textContent;
                displayContent.textContent = number2;
            } else {
                number1 += button.textContent;
                displayContent.textContent = number1;
            }
        });
    }
});
