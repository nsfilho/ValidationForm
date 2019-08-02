import { Language } from './index';

export const en_US: Language = {
    'general.isNull.errorMsg': 'The value specified is null.',
    'general.isNotNull.errorMsg': 'The value specified is not null',
    'general.isDefined.errorMsg': 'The value specified is defined.',
    'general.isNotDefined.errorMsg': 'The The value specified is not defined',
    'general.isRequired.errorMsg': 'The value specified is not requered.',

    'string.minSize.typeErrorMsg': 'The value is not a string',
    'string.minSize.passedMsg': 'Minimum size accepted',
    'string.minSize.lengthError': 'Maximum length exceeded',

    'string.maxSize.typeErrorMsg': 'The value is not a string',
    'string.maxSize.passedMsg': 'Maximum size accepted',

    'number.isNumber.errorMsg': 'The value is not number',
    'number.isNumber.passedMsg': 'The value is number',

    'number.isInteger.typeErrorMsg': 'The value is not number',
    'number.isInteger.errorMsg': 'The value is not integer',
    'number.isInteger.passedMsg': 'The value is integer',

    'number.isLessThan.typeErrorMsg': 'The value is not number',
    'number.isLessThan.errorMsg':
        'The received value is greater than expected value',
    'number.isLessThan.passedMsg': 'The value accepted',

    'number.isGreatherThan.typeErrorMsg': 'The value is not number',
    'number.isGreatherThan.errorMsg':
        'The received value is less than expected value',
    'number.isGreatherThan.passedMsg': 'The value accepted',

    'number.isFloat.typeErrorMsg': 'The value is not number',
    'number.isFloat.errorMsg': 'The value is not float',
    'number.isFloat.passedMsg': 'The value accepted',

    'number.isEqual.typeErrorMsg': 'The value is not number',
    'number.isEqual.errorMsg': 'The value is not equal',
    'number.isEqual.passedMsg': 'The value accepted'
};
