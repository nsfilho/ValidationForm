import * as string from './string';
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
    isNull: DeepEngine;
    isDefined: DeepEngine;
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
    v.string = {
        minSize: string.minSize.bind(v),
        maxSize: string.maxSize.bind(v),
        regex: string.regex.bind(v)
    };
    v.isNull = general.isNull.bind(v);
    v.isDefined = general.isDefined.bind(v);
    v.not = {
        isNull: general.isNotNull.bind(v),
        isDefined: general.isNotDefined.bind(v)
    };
    return v as Engine;
};
