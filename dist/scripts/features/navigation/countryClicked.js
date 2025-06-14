import { getCountries } from "../../api/getCountries.js";
import { getAllCountries } from "../../state/globalData.js";
import { showOverview } from "../interactions/showOverview.js";
import { renderDetailsCountry } from "../render/renderDetailsCountry.js";
import { currentCountry } from "./currentCountry.js";
export function countryClicked() {
    const countrieLinks = document.querySelectorAll('.countrie__link');
    countrieLinks.forEach((link) => {
        link.addEventListener('click', async (ev) => {
            ev.preventDefault();
            const $countrieDiv = link.closest('.countrie');
            const countryName = $countrieDiv?.dataset.name;
            if (countryName) {
                console.log(`País clicado: ${countryName}`);
                const data = await getCountries(`name/${countryName}`);
                const country = data.find((country) => country.name.common === countryName);
                if (country) {
                    console.log(country);
                }
                if (data && data.length > 0) {
                    countryClickedRender(data, countryName);
                }
            }
        });
    });
}
export function countryClickedRender(data, countryName) {
    const countrie = data.find((countrie) => countrie.name.common === countryName);
    if (countrie) {
        const countrieFlag = countrie.flags.svg;
        const countrieName = countrie.name.common;
        const countrieNativeName = countrie.name.official;
        const countriePopulation = countrie.population.toLocaleString('en-US');
        const countrieRegion = countrie.region;
        const countrieSubRegion = countrie.subregion;
        const countrieCapital = countrie.capital;
        const countrieTopLevelDomain = countrie.tld;
        const countrieCurrencies = () => {
            const currencies = countrie.currencies;
            for (const type in currencies) {
                const name = currencies[type].name;
                return name;
            }
        };
        const countrieLanguages = () => {
            const languages = countrie.languages;
            const languageValues = Object.values(languages);
            return languageValues.join(', ');
        };
        const countrieBorders = () => {
            const allCountries = getAllCountries();
            const countryBorders = countrie.borders;
            let countryBordersFound = [];
            if (countryBorders) {
                countryBorders.forEach((borderCode) => {
                    const borderCountry = allCountries.find(c => c.cca3 == borderCode);
                    if (borderCountry) {
                        countryBordersFound.push(borderCountry.name.common);
                    }
                });
                console.log('Bordas:', countryBordersFound);
                return countryBordersFound;
            }
        };
        showOverview();
        renderDetailsCountry(countrieFlag, countrieName, countrieNativeName, countriePopulation, countrieRegion, countrieSubRegion, countrieCapital, countrieTopLevelDomain, countrieCurrencies(), countrieLanguages(), countrieBorders());
        currentCountry();
    }
}
