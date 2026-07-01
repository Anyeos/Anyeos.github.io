var translations = {};

async function loadTranslations() {
    try {
        const response = await fetch('translations.json');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        translations = await response.json();
        //console.log(text);
    } catch (error) {
        console.error('Failed to load file:', error);
    }
}

loadTranslations();
const userLang = new Intl.Locale(navigator.language).language;
const languageSelector = document.getElementById("languageSelector");
languageSelector.value = userLang;

localjs.init(languageSelector.value, translations);
languageSelector.addEventListener("change", function() {
  localjs.update(languageSelector.value, translations);
});
