import { getAllCountries } from "../../state/globalData.js";
import { renderCountries } from "../render/renderCountries.js";
import { countryClicked } from "./currentCountry.js";
export function selectRegion() {
    const $filterModal = document.querySelector('.countries__nav__filter__filters');
    const $regions = document.querySelectorAll('.countries__nav__filter__filters__continent');
    const $countriesContainer = document.querySelector('#countries');
    const $message = document.querySelector('#message');
    const $searchField = document.querySelector('#search--countries');
    const $buttonFilter = document.querySelector('#filter--btn');
    $regions.forEach((region) => {
        region.addEventListener('click', async () => {
            const data = getAllCountries();
            $regions.forEach(r => r.classList.remove('active__filter'));
            region.classList.add('active__filter');
            $filterModal.classList.remove('open__filters__animation');
            $filterModal.classList.add('close__filters__animation');
            const nameRegion = region.dataset.region;
            $buttonFilter.textContent = nameRegion;
            $buttonFilter.classList.add('active__filter');
            $countriesContainer.innerHTML = '';
            $message.textContent = '';
            const search = $searchField.value.toLowerCase();
            const filteredCountries = data.filter((countrie) => {
                const matchesContinent = countrie.region.toLowerCase() === nameRegion.toLowerCase();
                const matchesName = countrie.name.common.toLowerCase().includes(search);
                return matchesContinent && (search === '' || matchesName);
            });
            if (filteredCountries.length > 0) {
                filteredCountries.slice(0, 8).forEach((countrie) => {
                    renderCountries(countrie.flags.svg, countrie.name.common, countrie.population.toLocaleString('en-US'), countrie.region, countrie.capital);
                });
            }
            else {
                $message.textContent = 'No results found.';
            }
            countryClicked();
        });
    });
}
