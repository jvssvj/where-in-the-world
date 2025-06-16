import { getCountries } from "../../api/getCountries.js";
import { renderCountries } from "../render/renderCountries.js";
import { countryClicked } from "./currentCountry.js";
export function searchCountry() {
    const $searchField = document.querySelector('#search--countries');
    const $regions = document.querySelectorAll('.countries__nav__filter__filters__continent');
    const $countriesContainer = document.querySelector('#countries');
    $searchField.addEventListener('input', async () => {
        if ($searchField.value !== '') {
            $countriesContainer.innerHTML = '';
            const data = await getCountries(`name/${$searchField.value}`);
            data.slice(0, 8).forEach((country) => {
                const flag = country.flags.svg;
                const name = country.name.common;
                const population = country.population.toLocaleString('en-US');
                const region = country.region;
                const capital = country.capital;
                renderCountries(flag, name, population, region, capital);
                countryClicked();
            });
        }
    });
}
function filter() {
}
