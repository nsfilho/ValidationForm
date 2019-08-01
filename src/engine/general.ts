import { DeepEngine, Engine } from './index';
import { txt } from '../locale';

export const isNull = (that: Engine) => () => {
    that.value === null
        ? that.passed.push('isNull')
        : that.errors.push(txt('general.isNull.errorMsg'));
    return that;
};

export const isDefined = (that: Engine) => () => {
    that.value !== undefined
        ? that.passed.push('isDefined')
        : that.errors.push(txt('general.isDefined.errorMsg'));
    return that;
};

export const isRequired = (that: Engine) => () => {
    that.value !== undefined && that.value !== null
        ? that.passed.push('isRequired')
        : that.errors.push(txt('general.isRequired.errorMsg'));
    return that;
};

export const isNotNull = (that: Engine) => () => {
    that.value !== null
        ? that.passed.push('isNotNull')
        : that.errors.push(txt('general.isNotNull.errorMsg'));
    return that;
};

export const isNotDefined = (that: Engine) => () => {
    that.value === undefined
        ? that.passed.push('isNotDefined')
        : that.errors.push(txt('general.isNotDefined.errorMsg'));
    return that;
};
