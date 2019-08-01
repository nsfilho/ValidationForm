import * as string from './string';
import * as number from './number';
import * as general from './general';

export interface Engine {
    value: string | number | boolean | object;
    passed: string[];
    errors: string[];
    string: {
        minSize: (size: number) => Engine;
        maxSize: (size: number) => Engine;
        regex: (reg: RegExp, errorMessage?: string) => Engine;
    };
    number: {
        isNumber: () => Engine;
        isInteger: () => Engine;
        isLessThan: (value: number) => Engine;
        isGreatherThan: (value: number) => Engine;
        isFloat: () => Engine;
        isEqual: (value: number) => Engine;
    };
    isNull: DeepEngine;
    isDefined: DeepEngine;
    isRequired: DeepEngine;
    not: {
        isNull: DeepEngine;
        isDefined: DeepEngine;
    };
}

export type DeepEngine = () => Engine;

// @ts-ignore
export const validation = (value: any): Engine => {
    const v: Partial<Engine> = {
        value,
        passed: [],
        errors: []
    };
    const f: Engine = v as Engine;
    v.string = {
        minSize: string.minSize(f),
        maxSize: string.maxSize(f),
        regex: string.regex(f)
    };
    v.number = {
        isNumber: number.isNumber(f),
        isInteger: number.isInteger(f),
        isLessThan: number.isLessThan(f),
        isGreatherThan: number.isGreatherThan(f),
        isFloat: number.isFloat(f),
        isEqual: number.isEqual(f)
    };
    v.isNull = general.isNull(f);
    v.isDefined = general.isDefined(f);
    v.isRequired = general.isRequired(f);
    v.not = {
        isNull: general.isNotNull(f),
        isDefined: general.isNotDefined(f)
    };
    return f;
};
