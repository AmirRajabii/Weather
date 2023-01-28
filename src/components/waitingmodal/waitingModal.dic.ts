import { LanguageDictionary } from "$lib/languages/LanguageDictionary";
const dictionary = {
    fa: {
        loading: "در حال پردازش درخواست شما ...",
        pleaseWait: "لطفا شکیبا باشید",
    },
    en: {
        loading: "Processing your request ...",
        pleaseWait: "Plase waite ",
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