import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle';

type language = {
    language: string;
    dir: string;
    font: string;
}

const getLanguage = (): language => {
    let result: language = JSON.parse(localStorage.getItem("language"));

    if (result == null) {
        result = { language: "fa", dir: "rtl", font: "assets/fonts/yekan/Far_Yekan.css" };
        localStorage.setItem("language", JSON.stringify(result));
    }

    return result;
}

const changeLanguageToFa = () => {
    let result: language = { language: "fa", dir: "rtl", font: "assets/fonts/yekan/Far_Yekan.css" };
    localStorage.setItem("language", JSON.stringify(result));
    setUpPage();
    location.reload();
};

const changeLanguageToEn = () => {
    let result: language = { language: "en", dir: "ltr", font: "assets/fonts/roboto/Roboto.css" };
    localStorage.setItem("language", JSON.stringify(result));
    setUpPage();
    location.reload();
};

const setUpPage = (): void => {
    let langObj: language = getLanguage();
    let htmlElement = document.getElementById("html"); 
    let bodyElement = document.getElementById("body");
    let headElement = document.getElementById("head");
    //set html tag {
    htmlElement.setAttribute("lang", langObj.language);
    htmlElement.setAttribute("dir", langObj.dir);
    //}


    if(langObj.dir === 'rtl'){
        import('bootstrap/dist/css/bootstrap.rtl.min.css');
    }else{
        import('bootstrap/dist/css/bootstrap.min.css');
    }

    const linkNodeFont = document.createElement("link");
    linkNodeFont.setAttribute("rel", "stylesheet");
    linkNodeFont.setAttribute("href", langObj.font);

    headElement.appendChild(linkNodeFont);
    //set body tag {
    bodyElement.setAttribute("style", "font-family:" + (langObj.language === "en" ? "Roboto" : "Far_Yekan"));
    //}


}

export { getLanguage, changeLanguageToFa, changeLanguageToEn, setUpPage };
