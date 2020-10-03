/*
    This file contains all of my mocha/chai tests for the
    problem set 1 functions.
 */

const {reverseAlphabeticalString} = require('./PS1.P1');
const {evaluate} = require('./PS1.P2');

const {describe, it} = require('mocha');
const {expect} = require('chai');

//unit test for problem 1
describe('Reverse ABC String Test', () => {
    it('should return zyxcba when passed AbCxYz', () => {
        expect(reverseAlphabeticalString('AbCxYz')).to.be.equal('zyxcba');
    });
    it('should return 54321 when passed 12345', () => {
        expect(reverseAlphabeticalString('12345')).to.be.equal('54321');
    });
    it('should return wroolllhed... when passed HelloWorld...', () => {
        expect(reverseAlphabeticalString('HelloWorld...')).to.be.equal('wroolllhed...');
    })
});

//unit test for problem 2
// ‘4+2’
// ‘5*7’
// ‘6-1’
// ‘9/2’
// ‘2^8’
describe('Simple calculations test', () => {
    it('should return 6 when passed 4+2', () => {
        let operator = evaluate('4+2');
        expect(operator(4,2)).to.be.equal(6);
    });
    it('should return 35 when passed 5*7', () => {
        expect(evaluate('5*7')).to.be.equal(35);
    });
    it('should return 5 when passed 6-1', () => {
        expect(evaluate('6-1')).to.be.equal(5);
    });
    it('should return 4.5 when passed 9/2', () => {
        expect(evaluate('9/2')).to.be.equal(4.5);
    });
    it('should return 256 when passed 2^8', () => {
        expect(evaluate('2^8')).to.be.equal(256);
    })
})

//unit test for problem 3


