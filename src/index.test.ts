import { validation } from './index';

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
