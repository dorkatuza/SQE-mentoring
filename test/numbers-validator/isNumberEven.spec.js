import { NumbersValidator } from '../../app/numbers_validator.js';
import { describe, it, beforeEach, afterEach } from 'mocha';
import {expect} from 'chai';

describe('isNumberEven positive tests', () => {
let validator;
beforeEach(() => {
    validator = new NumbersValidator();
});

afterEach(() => {
    validator = null;
});

    it('should return true when provided with an even number', () => {
        const validationResults = validator.isNumberEven(4);
        expect(validationResults).to.be.equal(true);
    });

    it('should return false when provided with an odd number', () => {
        const validationResults = validator.isNumberEven(5);
        expect(validationResults).to.be.equal(false);
    });

    it('should throe an error when provided a string', () => {
        expect(() => {
            validator.isNumberEven('4');
        }).to.throw('[4] is not of type "Number" it is of type "string"');
    });
});