import { pt_BR } from './pt_BR';
import { en_US } from './en_US';

export interface Language {
    [index: string]: string;
}

interface Messages {
    [index: string]: Language;
}

interface Config {
    messages: Messages;
    language: string;
}

const config: Config = {
    messages: {
        pt_BR: pt_BR,
        en_US: en_US
    },
    language: 'en_US'
};

/**
 * Add a new language to system.
 * @param name language name (abbreviation)
 * @param language table of translation (content)
 */
export const addLanguage = (name: string, language: Language) => {
    config.messages[name] = language;
};

/**
 * Define language (table of translation) to use.
 * @param name language name (abbreviation)
 */
export const setLanguage = (name: string) => {
    if (!Object.keys(config.messages).includes(name))
        throw new Error(
            'Language does not exists yet. Add the language first.'
        );
    config.language = name;
};

export const txt = (name: string, defaultMessage?: string): string => {
    if (!Object.keys(config.messages[config.language]).includes(name)) {
        if (defaultMessage !== undefined) return defaultMessage;
        throw new Error(
            'The term does not exists in this language yet. Please translate it to use.'
        );
    }
    return config.messages[config.language][name];
};
