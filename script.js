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
    return dividend / divisor;
}

console.log(`add(1,2) expect 3 => ${add(1,2)}`);
console.log(`substract(1,2) expect -1 => ${substract(1,2)}`);
console.log(`multiply(1,2) expect 2 => ${multiply(1,2)}`);
console.log(`divide(1,2) expect 0.5 => ${divide(1,2)}`);

// Calculator Consists of 2 Numbers and an Operator
let number1;
let operator;
let number2;

function operate(num1, operator, num2)
{
    let result;
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
            return "Invalid Operator";
    }
}
