/*
 Write a function that takes as its input a formatted string, such as these:
    ‘4+2’
    ‘5*7’
    ‘6-1’
    ‘9/2’
    ‘2^8’ (where ^ is exponentiation)

 This function should
    Determine the operator (+, *, -, ^, or /) embedded in the string
    Return a function to implement the input operator that returns the result

 For example, if the input string is ‘8%3’, return (left, right) => left % right

 Execute the returned function to evaluate and print each expression. For example,

 const expression = '8%3';
 let operator = evaluate(expression);
 console.log(`${expression} = ${operator(expression)}`)

 You can assume that the format of the input string is fixed (i.e. a digit, an operator, and a digit,
     always the same length). Write a test that tries each of the five expressions above.
*/


const evaluate = inputString => {
    let [left, operator, right] = inputString;

    switch (operator) {
        case '+':
            return (left,right) => left+right;
            break;
        case '-':
            return (left,right) => left-right;
            break;
        case '/':
            return (left,right) => left/right;
            break;
        case '*':
            return (left,right) => left*right;
            break;
        case '^':
            return (left,right) => left**right;
            break;
        case '%':
            return (left,right) => left%right;
            break;
    }
}

// Testing cases
const expression1 = '4+2';
let operator1 = evaluate(expression1)
console.log(`${expression1} = ${operator1(4,2)}`)

const expression2 = '5*7';
let operator2 = evaluate(expression2)
console.log(`${expression2} = ${operator2(5,7)}`)

const expression3 = '6-1';
let operator3 = evaluate(expression3)
console.log(`${expression3} = ${operator3(6,1)}`)

const expression4 = '9/2';
let operator4 = evaluate(expression4)
console.log(`${expression4} = ${operator4(9,2)}`)

const expression5 = '2^8';
let operator5 = evaluate(expression5)
console.log(`${expression5} = ${operator5(2,8)}`)

//Export for mocha/chai tests
module.exports = {evaluate}