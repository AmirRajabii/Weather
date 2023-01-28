import { getLanguage } from "./language";

type dictionary = {
    fa: {},
    en: {}
}

class LanguageDictionary {
    private dic: dictionary;

    constructor(dic: dictionary) {
        this.dic = dic;
    }

    getText(key: string): string {
        let lang: string = getLanguage().language;
        return this.dic[lang][key];
    }
}

export { LanguageDictionary }