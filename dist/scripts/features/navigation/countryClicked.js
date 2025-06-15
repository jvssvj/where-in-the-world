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
                const data = await getCountries(`name/${countryName}`);
                if (data && data.length > 0) {
                    countryClickedRender(data, countryName);
                }
            }
        });
    });
}
export function countryClickedRender(data, countryName) {
    const country = data.find((countrie) => countrie.name.common === countryName);
    if (country) {
        const countrieFlag = country.flags.svg;
        const countrieName = country.name.common;
        const countrieNativeName = country.name.official;
        const countriePopulation = country.population.toLocaleString('en-US');
        const countrieRegion = country.region;
        const countrieSubRegion = country.subregion;
        const countrieCapital = country.capital;
        const countrieTopLevelDomain = country.tld;
        const countrieCurrencies = () => {
            const currencies = country.currencies;
            for (const type in currencies) {
                const name = currencies[type].name;
                return name;
            }
        };
        const countrieLanguages = () => {
            const languages = country.languages;
            const languageValues = Object.values(languages);
            return languageValues.join(', ');
        };
        const countrieBorders = () => {
            const countryBorders = country.borders;
            const allCountries = getAllCountries();
            let countryBordersFound = [];
            if (countryBorders) {
                countryBorders.forEach((borderCode) => {
                    const countries = allCountries.find(c => c.cca3 === borderCode);
                    if (countries) {
                        countryBordersFound.push(countries.name.common);
                    }
                });
            }
            return countryBordersFound;
        };
        showOverview();
        renderDetailsCountry(countrieFlag, countrieName, countrieNativeName, countriePopulation, countrieRegion, countrieSubRegion, countrieCapital, countrieTopLevelDomain, countrieCurrencies(), countrieLanguages(), countrieBorders());
        currentCountry();
    }
}
