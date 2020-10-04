/*
    Spencer Vilicic
    CS412
    10/4/2020
    Problem Set 1
 */

/*
 Write a function that takes a string as its input and returns a new string that contains all of the
 letters in the original string, but in reverse alphabetical order. Ignore punctuation and numbers.
 Test your function using the string ‘supercalifragilisticexpialidocious’.
*/

//my funky function
const reverseAlphabeticalString = stringToCheck => stringToCheck.toLowerCase().split('').sort().reverse().join('');

//quick test
console.log(`${reverseAlphabeticalString('supercalifragilisticexpialidocious')}`);

//make function visible to other files
module.exports = {reverseAlphabeticalString}