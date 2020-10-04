/*
    Spencer Vilicic
    CS412
    10/4/2020
    Problem Set 1
 */

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


const evaluate = ([left, operator, right]) => {
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
console.log(`4+2 = ${evaluate('4+2')(4,2)}`)

console.log(`5*7 = ${evaluate('5*7')(5,7)}`)

console.log(`6-1 = ${evaluate('6-1')(6,1)}`)

console.log(`9/2 = ${evaluate('9/2')(9,2)}`)

console.log(`2^8 = ${evaluate('2^8')(2,8)}`)

//Export for mocha/chai tests
module.exports = {evaluate}