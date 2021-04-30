var Calculator = require('../src/Calculator')
var expect = require('chai').expect;
var sinon = require('sinon');

describe('Calculator', () => {

    describe('Sum operation', () => {
        it('Sum two positive integers', () => {
            var result = Calculator.sum(5, 5);
            expect(result).to.equal(10);
        });
     
        it('Sum two negative integers', () => {
            var result = Calculator.sum(-5, -5);
            expect(result).to.equal(-10);
        });
    
        it('Sum one positive and one negative integers', () => {
            var result = Calculator.sum(-5, 5);
            expect(result).to.equal(0);
        });
           
       it('Passing a character as the first number', () => {
            var result = Calculator.sum('a', 5);
            expect(result).to.equal('Not numbers');
        });
    
        it('Passing a character as the second number', () => {
            var result = Calculator.sum(5, 'a');
            expect(result).to.equal('Not numbers');
        });
    
        it('Passing a character as both numbers', () => {
            var result = Calculator.sum('a', 'a');
            expect(result).to.equal('Not numbers');
        });
         
        it('Passing null as the first number', () => {
            var result = Calculator.sum(null, 'a');
            expect(result).to.equal('Not numbers');
        });
     
        it('Sum stub', () => {
            Calculator.sum = sinon.stub().withArgs(5, 5).returns(10);
            expect(Calculator.sum(5, 5)).to.equal(10);
        });
    });    

    //Division function
    describe('Div operation', () => {
        it('Div two positive integers', () => {
            var result = Calculator.division(5, 5);
            expect(result).to.equal(1);
        });
     
        it('Div two negative integers', () => {
            var result = Calculator.division(-5, -5);
            expect(result).to.equal(1);
        });
    
        it('Div one positive and one negative integers', () => {
            var result = Calculator.division(-10, 2);
            expect(result).to.equal(-5);
        });
    
       it('Div a character as the first number', () => {
            var result = Calculator.division('a', 5);
            expect(result).to.equal('Not numbers');
        });
    
        it('Div Passing a character as the second number', () => {
            var result = Calculator.division(5, 'a');
            expect(result).to.equal('Not numbers');
        });
     
        it('Div Passing a character as both numbers', () => {
            var result = Calculator.division('a', 'a');
            expect(result).to.equal('Not numbers');
        });
         
        it('Div Passing null as the first number', () => {
            var result = Calculator.division(null, 'a');
            expect(result).to.equal('Not numbers');
        });
    
        it('DIV stub', () => {
            Calculator.division = sinon.stub().withArgs(5, 5).returns(1);
            expect(Calculator.division(5, 5)).to.equal(1);
        });

    }); 

//Substraction test

    describe('Subtraction operation',()=>{
        it('Subtraction 2 numbers', () => {
            var result = Calculator.substract(20, 5);
            expect(result).to.equal(15);
    });
        it('Subtraction 2 negative int numbers', () => {
        var result = Calculator.substract(-20, -5);
        expect(result).to.equal(-15);
    });

    it('Subtraction 1 negative , 1 positive', () => {
        var result = Calculator.substract(-20, 5);
        expect(result).to.equal(-25);
    });

    it('Subtraction first is a letter', () => {
        var result = Calculator.substract('a', -5);
        expect(result).to.equal('Not numbers');
    });
    it('Subtraction second is a letter', () => {
        var result = Calculator.substract(4, 'a');
        expect(result).to.equal('Not numbers');
    });
    it('Subtraction both are letters', () => {
        var result = Calculator.substract('b', 'a');
        expect(result).to.equal('Not numbers');
    });
    it('Substraction Passing null as the first number', () => {
        var result = Calculator.substract(null, 'a');
        expect(result).to.equal('Not numbers');
    });

    it('Substraction stub', () => {
        Calculator.substract = sinon.stub().withArgs(5, 5).returns(1);
        expect(Calculator.substract(5, 5)).to.equal(1);
    });

 });
});
