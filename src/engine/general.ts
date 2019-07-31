import { DeepEngine, Engine } from './index';

export function isNull() {
    // @ts-ignore
    const that: Engine = this;
    that.value === null
        ? that.passed.push('isNull')
        : that.errors.push(`the ${that.value} is not null`);
    return that;
}

export function isDefined() {
    // @ts-ignore
    const that: Engine = this;
    that.value !== undefined
        ? that.passed.push('isDefined')
        : that.errors.push(`the ${that.value} is not defined`);
    return that;
}

export function isNotNull() {
    // @ts-ignore
    const that: Engine = this;
    that.value !== null
        ? that.passed.push('isNotNull')
        : that.errors.push(`the ${that.value} is null`);
    return that;
}

export function isNotDefined() {
    // @ts-ignore
    const that: Engine = this;
    that.value === undefined
        ? that.passed.push('isNotDefined')
        : that.errors.push(`the ${that.value} is defined`);
    return that;
}
