/*
    Spencer Vilicic
    CS412
    10/4/2020
    Problem Set 1
 */

/*
 Write a function that accepts two input parameters: a string, and a decorator function. The
 function should execute the passed decorator function on the passed string and return the
 result.
     Next, write two expressions that call this function. For the first, pass the string
 ‘supercalifragilisticexpialidocious’ and a lambda (unnamed) function that returns an array
 containing fragments of the input string broken on the character ‘c’. For the input string
 ‘supercalifragilisticexpialidocious’, you should get
     [‘super’, ‘califragilisti’, ‘cexpialido’, ‘cious’]

    For the second expression, pass the string ‘supercalifragilisticexpialidocious’ and a lambda
    function that replaces all of the ‘a’ characters with ‘A’ characters. Return an object that
    contains the original string, the modified string, the total number of As in the modified string,
    and the overall length of the modified string:
 {
        originalString: xxx,
        modifiedString: xxx,
        numberReplaced: xxx,
        length:		 	xxx,
 }

 Print the data from the returned object on the console (console.table would be good for this).
 For testing in Chai, you can use the same values for the string and decorators.
*/

//here's my fancy decorator function
const decoFunction = (myString, myDecorator) => myDecorator(myString);


let firstExpression = decoFunction(
    `supercalifragilisticexpialidocious`,
    (myString) => myString.split('c').join(' c').split(' ')
);
//testing first expression output
console.log(`first expression: ${firstExpression}`);


let secondExpression = decoFunction(
    `supercalifragilisticexpialidocious`,
    (myString) => {
        return {
            originalString: myString,
            modifiedString: myString.split('a').join('A'),
            numberReplaced: (myString.match(/a/g) || []).length,
            "length": myString.length
        }
    }
);
//testing second expression output
console.table(secondExpression)

module.exports = {decoFunction}