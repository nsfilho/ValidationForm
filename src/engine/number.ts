import { Engine } from './index';
import { txt } from '../locale';

export const isNumber = (that: Engine) => (): Engine => {
    if (typeof that.value === 'number') {
        that.passed.push(txt('number.isNumber.passedMsg'));
    } else {
        that.errors.push(txt('number.isNumber.errorMsg'));
    }
    return that;
};

export const isInteger = (that: Engine) => (): Engine => {
    if (typeof that.value !== 'number') {
        throw new Error('number.isInteger.typeErrorMsg');
    } else if (that.value % 1 === 0) {
        that.passed.push(txt('number.isInteger.passedMsg'));
    } else {
        that.errors.push(txt('number.isInteger.errorMsg'));
    }
    return that;
};

export const isLessThan = (that: Engine) => (valor: number): Engine => {
    if (typeof that.value !== 'number') {
        throw new Error('number.isLessThan.typeErrorMsg');
    } else if (that.value < valor) {
        that.passed.push(txt('number.isLessThan.passedMsg'));
    } else {
        that.errors.push(txt('number.isLessThan.errorMsg'));
    }
    return that;
};

export const isGreatherThan = (that: Engine) => (valor: number): Engine => {
    if (typeof that.value !== 'number') {
        throw new Error('number.isGreatherThan.typeErrorMsg');
    } else if (that.value < valor) {
        that.errors.push(txt('number.isGreatherThan.errorMsg'));
    } else {
        that.passed.push(txt('number.isGreatherThan.passedMsg'));
    }
    return that;
};

export const isFloat = (that: Engine) => (): Engine => {
    if (typeof that.value !== 'number') {
        throw new Error('number.isFloat.typeErrorMsg');
    } else if (that.value % 1 === 0) {
        that.errors.push(txt('number.isFloat.errorMsg'));
    } else {
        that.passed.push(txt('number.isFloat.passedMsg'));
    }
    return that;
};

export const isEqual = (that: Engine) => (value: number): Engine => {
    if (typeof that.value !== 'number') {
        throw new Error('number.isEqual.typeErrorMsg');
    } else if (that.value === value) {
        that.passed.push(txt('number.isEqual.passedMsg'));
    } else {
        that.errors.push(txt('number.isEqual.errorMsg'));
    }
    return that;
};
