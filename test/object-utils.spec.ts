import { ObjectUtils } from '../src/object-utils';
import { expect } from 'chai';
import 'mocha';

describe('Testing ObjectUtils Class', () => {

    it('recursiveAssign, should return {id: 3, value: "It\'s works"}', () => {
        const source = { value: "It's works" };
        const target = { id: 3 };
        const finalObject = { id: 3, value: "It's works" };
        expect(finalObject).to.deep.equal(ObjectUtils.recursiveAssign(target, source));
    });
    
    it('getattr, should return "It\'s works"', () => {
        const object = { value : "It's works" };
        const key = 'value';
        const value = "It's works";
        expect(value).to.equal(ObjectUtils.getattr(object, key));
    });

    it('getattr, should return "It\'s works" as defaultValue', () => {
        const object = { test : "It's works" };
        const key = 'value';
        const value = "It's works";
        expect(value).to.equal(ObjectUtils.getattr(object, key, value));
    });
    
    it('getattr, should return object if key is null', () => {
        const object = { test : "It's works" };
        const key = null;
        const value = "It's works";
        expect(object).to.deep.equal(ObjectUtils.getattr(object, key));
    });

    it('setattr, should works', () => {
        const object = {};
        const value = "It's works";
        const key = 'value';
        expect(undefined).to.eq(ObjectUtils.setattr(object, key, value));
    });

    it('setattr, should return false for object null', () => {
        const object = null;
        const value = "It's works";
        const key = 'value';
        expect(false).to.eq(ObjectUtils.setattr(object, key, value));
    });

    it('firstNonNull, should return first thing not null', () => {
        const emptyObject = null;
        const fullyObject = { id: 3 };
        const secondFullyObject = { id: 3 };
        expect(fullyObject).to.deep.equal(ObjectUtils.firstNonNull(emptyObject, fullyObject));
    });

    it('firstNonNull, should return first thing not null, checking if it\'s true', () => {
        const emptyObject = null;
        const fullyObject = { id: 3 };
        expect(emptyObject).to.not.deep.equal(ObjectUtils.firstNonNull(emptyObject, fullyObject));
    });

    it('firstNonEmpty, should return first thing not empty', () => {
        const emptyObject = {};
        const fullyObject = { id: 3 };
        expect(fullyObject).to.deep.equal(ObjectUtils.firstNonEmpty(emptyObject, fullyObject));
    });

    it('firstNonEmpty, should return first thing not empty, checking if it\'s true', () => {
        const emptyObject = {};
        const fullyObject = { id: 3 };
        const secondFullyObject = { id: 3 };
        expect(emptyObject).to.not.deep.equal(ObjectUtils.firstNonEmpty(emptyObject, fullyObject));
    });

    it('isCallable, should return true for () => { ... }', () => {
        const value = () => console.log("It's a log inside a function");
        expect(true).to.equal(ObjectUtils.isCallable(value));
    });

    it('isCallable, should return false for "not callable"', () => {
        const value = "not callable";
        expect(false).to.equal(ObjectUtils.isCallable(value));
    });

    it('copy, should not be the same', () => {
        const object = { id: 'test' };
        expect(object).to.not.equal(ObjectUtils.copy(object));
    });

    it('strToBoolOrStr, should return true for "TRUE"', () => {
        const value = "TRUE";
        expect(true).to.equal(ObjectUtils.strToBoolOrStr(value));
    });

    it('strToBoolOrStr, should return false for "FALSE"', () => {
        const value = "FALSE";
        expect(false).to.equal(ObjectUtils.strToBoolOrStr(value));
    });

    it('strToBoolOrStr, should return true for true', () => {
        const value = true;
        expect(true).to.equal(ObjectUtils.strToBoolOrStr(value));
    });

    it('strToBoolOrStr, should return false for false', () => {
        const value = false;
        expect(false).to.equal(ObjectUtils.strToBoolOrStr(value));
    });
    
    it('strToBoolOrStr, should return false for "not boolean"', () => {
        const value = "not boolean";
        expect(value).to.equal(ObjectUtils.strToBoolOrStr(value));
    });

    it('zipToObject, should return {id: 3, function: "zipToObject"}', () => {
        const keys = ["id", "function"];
        const values = [3, "zipToObject"];
        const object = {id: 3, function: "zipToObject"};
        expect(object).to.deep.equal(ObjectUtils.zipToObject(keys, values));
    });

    it('isString, should return true for \'It"s is a string?\' ', () => {
        const value = "It's a string?";
        expect(true).to.equal(ObjectUtils.isString(value));
    });

    it('isString, should return false for 3', () => {
        const value = 3;
        expect(false).to.equal(ObjectUtils.isString(value));
    });

    it('isEmpty, should return true for []', () => {
        const value = [];
        expect(true).to.equal(ObjectUtils.isEmpty(value));
    });

    it('isEmpty, should return true for {}', () => {
        const value = {};
        expect(true).to.equal(ObjectUtils.isEmpty(value));
    });

    it('isEmpty, should return true for ""', () => {
        const value = "";
        expect(true).to.equal(ObjectUtils.isEmpty(value));
    });
    
    it('isEmpty, should return false for [3]', () => {
        const value = [3];
        expect(false).to.equal(ObjectUtils.isEmpty(value));
    });

    it('isEmpty, should return false for {id: 3}', () => {
        const value = { id: 3 };
        expect(false).to.equal(ObjectUtils.isEmpty(value));
    });

    it('isEmpty, should return false for "not empty"', () => {
        const value = "not empty";
        expect(false).to.equal(ObjectUtils.isEmpty(value));
    });

    it('format, should return "It\'s works"', () => {
        const data = { value: 'works'};
        const message = "It's {value}";
        const finalMessage = "It's works";
        expect(finalMessage).to.equal(ObjectUtils.format(message, data));
    });

    it('format, should return "It\'s vice city"', () => {
        const data = { city: {name: 'vice city'}};
        const message = "It's {city.name}";
        const finalMessage = "It's vice city";
        expect(finalMessage).to.equal(ObjectUtils.format(message, data));
    });

    it('round, should return 3.589 with len', () => {
        const num = 3.5892222;
        const len = 3;
        const result = 3.589;
        expect(result).to.equal(ObjectUtils.round(num, len));
    });
});