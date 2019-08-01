import { validation, setLanguage, addLanguage } from './index';

describe('Basic Tests', () => {
    it('Validate tests: string', () => {
        const results = validation('Meu campo de Texto')
            .not.isNull()
            .string.minSize(3)
            .string.maxSize(30).errors;
        expect(results.length).toBe(0);
    });

    it('Validate tests, error in minSize: string', () => {
        const results = validation('Do')
            .not.isNull()
            .string.minSize(3)
            .string.maxSize(30);
        expect(results.errors.length).toBe(1);
    });
    it('Validate tests, error in maxSize: string', () => {
        const results = validation('123456')
            .not.isNull()
            .string.minSize(3)
            .string.maxSize(5);
        expect(results.errors.length).toBe(1);
    });
    it('Validate tests, regex: string', () => {
        const results = validation('abcde')
            .not.isNull()
            .string.minSize(3)
            .string.maxSize(5)
            .string.regex(
                /[a-z]+/,
                'A string não está formatada corretamente.'
            );
        expect(results.errors.length).toBe(0);
    });
    it('Validate tests, regex with error: string', () => {
        const results = validation('abcde Abc')
            .not.isNull()
            .string.minSize(3)
            .string.maxSize(5)
            .string.regex(
                /^[a-z]+$/,
                'A string não está formatada corretamente.'
            );
        console.log(results.errors);
        expect(results.errors.length).toBe(2);
    });
});

describe('Number Tests', () => {
    it('isNumber', () => {
        const results = validation('i am not a number!').number.isNumber();
        expect(results.errors.length).toBe(1);
    });
    it('isInteger', () => {
        const results = validation(2.34).number.isInteger();
        expect(results.errors.length).toBe(1);
    });
    it('isLessThan', () => {
        const results = validation(4).number.isLessThan(5);
        expect(results.errors.length).toBe(1);
    });
    it('isLessThan', () => {
        const results = validation(4).number.isLessThan(5);
        expect(results.errors.length).toBe(1);
    });
    it('isGreather', () => {
        const results = validation(5).number.isGreatherThan(4);
        expect(results.errors.length).toBe(1);
    });
    it('isFloat', () => {
        const results = validation(10).number.isFloat();
        expect(results.errors.length).toBe(1);
    });
    it('isEqual', () => {
        const results = validation(10).number.isEqual(11);
        expect(results.errors.length).toBe(1);
    });
});

describe('Language Tests', () => {
    it('English', () => {
        setLanguage('en_US');
        const results = validation('myValue').isNull();
        expect(results.errors[0]).toBe('The value specified is not null.');
    });
    it('Portuguese', () => {
        setLanguage('pt_BR');
        const results = validation('myValue').isNull();
        expect(results.errors[0]).toBe('O valor específicado não é nulo.');
    });
    it('Adding a new language', () => {
        addLanguage('es_AR', {
            'general.isNull.errorMsg': 'El valor especificado no es null'
        });
        setLanguage('es_AR');
        const results = validation('myValue').isNull();
        expect(results.errors[0]).toBe('El valor especificado no es null');
    });
});
