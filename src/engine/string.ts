import { Engine } from './index';

export function minSize(size: number): Engine {
    // @ts-ignore
    const that: Engine = this; // eslint-disable-line
    if (typeof that.value !== 'string')
        throw new Error('The value is not a string');
    that.value.length >= size
        ? that.passed.push(`minSize>=${size}`)
        : that.errors.push(`the ${that.value} length is shorter than ${size}.`);
    return that;
}

export function maxSize(size: number): Engine {
    // @ts-ignore
    const that: Engine = this;
    if (typeof that.value !== 'string')
        throw new Error('The value is not a string');
    that.value.length <= size
        ? that.passed.push(`maxSize<=${size}`)
        : that.errors.push(
              `the ${that.value} length is greather than ${size}.`
          );
    return that;
}

export function regex(
    value: RegExp,
    errorMessage: string = 'the value is not valid.'
): Engine {
    // @ts-ignore
    const that: Engine = this;
    value.test(that.value as string)
        ? that.passed.push(`regex: ${String(value)}`)
        : that.errors.push(errorMessage);
    return that;
}
