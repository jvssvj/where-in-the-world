import { getCountries } from "../../api/getCountries.js";
import { getAllCountries } from "../../state/globalData.js";
import { renderCountries } from "../render/renderCountries.js";
import { countryClicked } from "./currentCountry.js";
export function searchCountry() {
    const $searchField = document.querySelector('#search--countries');
    const $countriesContainer = document.querySelector('#countries');
    $searchField.addEventListener('input', async () => {
        $countriesContainer.innerHTML = '';
        if ($searchField.value !== '') {
            performCountrySearch();
        }
        else {
            getFilterActive();
        }
    });
}
export async function performCountrySearch() {
    const $searchField = document.querySelector('#search--countries');
    const $countriesContainer = document.querySelector('#countries');
    $countriesContainer.innerHTML = '';
    const data = await getCountries(`name/${$searchField.value}`);
    data.slice(0, 8).forEach((country) => {
        const flag = country.flags.svg;
        const name = country.name.common;
        const population = country.population.toLocaleString('en-US');
        const region = country.region;
        const capital = country.capital;
        renderCountries(flag, name, population, region, capital);
    });
    getFilterActive();
    countryClicked();
}
function getFilterActive() {
    const $regions = Array.from(document.querySelectorAll('.countries__nav__filter__filters__continent'));
    const activeRegion = $regions.find(region => region.classList.contains('active__filter'));
    const verify = activeRegion ? activeRegion.dataset.region : '';
    filter(verify);
}
function filter(filter) {
    const allCountries = getAllCountries();
    const $searchField = document.querySelector('#search--countries');
    const $countriesContainer = document.querySelector('#countries');
    const $message = document.querySelector('#message');
    const value = $searchField.value.toLowerCase().trim();
    if (value !== '' && filter !== '') {
        const country = allCountries.filter(country => country.name.common.toLowerCase().includes(value) &&
            (!filter || country.region === filter));
        if (country.length === 0)
            return $message.textContent = 'No results found.';
        $countriesContainer.innerHTML = '';
        $message.textContent = '';
        country.slice(0, 8).forEach(country => {
            const flag = country.flags.svg;
            const name = country.name.common;
            const population = country.population.toLocaleString('en-US');
            const region = country.region;
            const capital = country.capital;
            renderCountries(flag, name, population, region, capital);
        });
    }
    if (value === '' && filter !== '') {
        const country = allCountries.filter(country => country.region === filter);
        if (country.length === 0)
            return $message.textContent = 'No results found.';
        $countriesContainer.innerHTML = '';
        $message.textContent = '';
        country.slice(0, 8).forEach(country => {
            const flag = country.flags.svg;
            const name = country.name.common;
            const population = country.population.toLocaleString('en-US');
            const region = country.region;
            const capital = country.capital;
            renderCountries(flag, name, population, region, capital);
        });
    }
}
