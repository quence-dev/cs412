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
     length:		 	 xxx,
 }

 Print the data from the returned object on the console (console.table would e good for this).
 For testing in Chai, you can use the same values for the string and decorators.
*/

//first function
const decoFunction = (myString, myDecorator) => myDecorator(myString);

//first expression
let firstEx = decoFunction(
    myString = `supercalifragilisticexpialidocious`,
    myDecorator = myString => myString.split('c')
);

console.log(`first expression: ${firstEx}`);