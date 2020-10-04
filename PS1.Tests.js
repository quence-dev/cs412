/*
    Spencer Vilicic
    CS412
    10/4/2020
    Problem Set 1
 */

/*
    This file contains all of my mocha/chai tests for the
    problem set 1 functions.
 */

const {reverseAlphabeticalString} = require('./PS1.P1');
const {evaluate} = require('./PS1.P2');
const {decoFunction} = require('./PS1.P3');

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
describe('Simple calculations test', () => {
    it('should return 6 when passed 4+2', () => {
        expect(evaluate('4+2')(4,2)).to.be.equal(6);
    });
    it('should return 35 when passed 5*7', () => {
        expect(evaluate('5*7')(5,7)).to.be.equal(35);
    });
    it('should return 5 when passed 6-1', () => {
        expect(evaluate('6-1')(6,1)).to.be.equal(5);
    });
    it('should return 4.5 when passed 9/2', () => {
        expect(evaluate('9/2')(9,2)).to.be.equal(4.5);
    });
    it('should return 256 when passed 2^8', () => {
        expect(evaluate('2^8')(2,8)).to.be.equal(256);
    })
})

//unit test for problem 3
describe('Decorator function test', () => {
    it('should return [‘super’, ‘califragilisti’, ‘cexpialido’, ‘cious’] when' +
        'passed `supercalifragilisticexpialidocious`,\n' +
        '(myString) => myString.split(\'c\').join(\' c\').split(\' \')', () => {
        expect(decoFunction('supercalifragilisticexpialidocious', (myString) => myString.split('c').join(' c').split(' '))).to.be.eql(['super', 'califragilisti', 'cexpialido', 'cious']);
    });
    it('should return originalString: \'supercalifragilisticexpialidocious\',' +
        ' modifiedString: \'supercAlifrAgilisticexpiAlidocious\',' +
        ' numberReplaced: 3,' +
        ' length: 34, when passed \'supercalifragilisticexpialidocious\'', () => {
        expect(decoFunction('supercalifragilisticexpialidocious', (myString) => {
            return {
                originalString: myString,
                modifiedString: myString.split('a').join('A'),
                numberReplaced: (myString.match(/a/g) || []).length,
                "length": myString.length
            }
        })).to.be.eql({originalString: 'supercalifragilisticexpialidocious', modifiedString: 'supercAlifrAgilisticexpiAlidocious', numberReplaced: 3, length: 34});
    })
})

