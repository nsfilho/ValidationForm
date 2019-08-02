import { Engine } from './index';
import { txt } from '../locale';

export const minSize = (that: Engine) => (size: number): Engine => {
    if (typeof that.value !== 'string')
        throw new Error('string.minSize.typeErrorMsg');
    that.value.length >= size
        ? that.passed.push(txt(`string.minSize.passedMsg`))
        : that.errors.push(txt(`string.minSize.lengthError`));
    return that;
};

export const maxSize = (that: Engine) => (size: number): Engine => {
    if (typeof that.value !== 'string')
        throw new Error('string.maxSize.typeErrorMsg');
    that.value.length <= size
        ? that.passed.push(txt(`string.maxSize.passedMsg`))
        : that.errors.push(
              `the ${that.value} length is greather than ${size}.`
          );
    return that;
};

export const regex = (that: Engine) => (
    value: RegExp,
    errorMessage: string = 'the value is not valid.'
): Engine => {
    value.test(that.value as string)
        ? that.passed.push(`regex: ${String(value)}`)
        : that.errors.push(errorMessage);
    return that;
};
