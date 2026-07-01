var translations = {};
const userLang = new Intl.Locale(navigator.language).language;
const languageSelector = document.getElementById("languageSelector");

async function loadTranslations() {
    try {
        const response = await fetch('translations.json');
        if (!response.ok) {
          languageSelector.remove();
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        translations = await response.json();

        languageSelector.value = userLang;

        localjs.init(languageSelector.value, translations);
        languageSelector.addEventListener("change", function() {
          localjs.update(languageSelector.value, translations);
        });

    } catch (error) {
      languageSelector.remove();
      console.error('Failed to load file:', error);
    }
}

loadTranslations();
