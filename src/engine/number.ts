import { Engine } from './index';

export const isNumber = (that: Engine) => (): Engine => {
    if (typeof that.value === 'number') {
        that.passed.push('number.isNumber.passedMsg');
    } else {
        that.errors.push('number.isNumber.typeErrorMsg');
    }
    return that;
};

export const isInteger = (that: Engine) => (): Engine => {
    if (typeof that.value !== 'number') {
        throw new Error('number.isInteger.typeErrorMsg');
    } else if (that.value % 1 === 0) {
        that.passed.push('number.isInteger.passedMsg');
    } else {
        that.errors.push('number.isInteger.ErrorMsg');
    }
    return that;
};

export const isLessThan = (that: Engine) => (valor: number): Engine => {
    if (typeof that.value !== 'number') {
        throw new Error('number.isLessThan.typeErrorMsg');
    } else if (that.value < valor) {
        that.passed.push('number.isLessThan.passedMsg');
    } else {
        that.errors.push('number.isLessThan.errorMsg');
    }
    return that;
};

export const isGreatherThan = (that: Engine) => (valor: number): Engine => {
    if (typeof that.value !== 'number') {
        throw new Error('number.isGreatherThan.typeErrorMsg');
    } else if (that.value < valor) {
        that.errors.push('number.isGreatherThan.errorMsg');
    } else {
        that.passed.push('number.isGreatherThan.passedMsg');
    }
    return that;
};

export const isFloat = (that: Engine) => (): Engine => {
    if (typeof that.value !== 'number') {
        throw new Error('number.isFloat.typeErrorMsg');
    } else if (Number.isInteger(that.value)) {
        that.errors.push('number.isFloat.errorMsg');
    } else {
        that.passed.push('number.isFloat.passedMsg');
    }
    return that;
};

export const isEqual = (that: Engine) => (value: number): Engine => {
    if (typeof that.value !== 'number') {
        throw new Error('number.isEqual.typeErrorMsg');
    } else if (that.value === value) {
        that.passed.push('number.isEqual.passedMsg');
    } else {
        that.errors.push('number.isEqual.errorMsg');
    }
    return that;
};
