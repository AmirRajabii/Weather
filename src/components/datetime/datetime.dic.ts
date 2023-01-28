import { generalDictionary } from "$lib/languages/general.dic";
import { LanguageDictionary } from "$lib/languages/LanguageDictionary";
const dictionary = {
    fa: {
        general: generalDictionary.fa,
    },
    en: {
        general: generalDictionary.en,
    }
}

let languageDictionary: LanguageDictionary = null;
function getLanguageDictionary(): LanguageDictionary {
    if (languageDictionary == null) {
        languageDictionary = new LanguageDictionary(dictionary);
    }
    return languageDictionary;
}

export function getText(text: string): string {
    return getLanguageDictionary().getText(text);
}