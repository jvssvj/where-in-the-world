import { renderCountries } from "../render/renderCountries.js";
export function selectRegion(data, changeQuantityToShow) {
    const $filterModal = document.querySelector('.countries__nav__filter__filters');
    const $regions = document.querySelectorAll('.countries__nav__filter__filters__continent');
    const $countriesContainer = document.querySelector('#countries');
    const $message = document.querySelector('#message');
    const $searchField = document.querySelector('#search--countries');
    const $buttonFilter = document.querySelector('#filter--btn');
    $regions.forEach((region) => {
        region.addEventListener('click', () => {
            $regions.forEach(r => r.classList.remove('active__filter'));
            region.classList.add('active__filter');
            $filterModal.classList.remove('open__filters__animation');
            $filterModal.classList.add('close__filters__animation');
            const continentName = region.dataset.continent || '';
            $buttonFilter.textContent = continentName;
            $buttonFilter.classList.add('active__filter');
            $countriesContainer.innerHTML = '';
            $message.textContent = '';
            const continent = continentName.toLowerCase();
            const search = $searchField.value.toLowerCase();
            const filteredCountries = data.filter((countrie) => {
                const matchesContinent = countrie.continents[0].toLowerCase() === continent;
                const matchesName = countrie.name.common.toLowerCase().includes(search);
                return matchesContinent && (search === '' || matchesName);
            });
            if (filteredCountries.length > 0) {
                filteredCountries.slice(0, changeQuantityToShow).forEach((countrie) => {
                    renderCountries(countrie.flags.svg, countrie.name.common, countrie.population.toLocaleString('en-US'), countrie.region, countrie.capital);
                });
            }
            else {
                $message.textContent = 'No results found.';
            }
            // countryClicked()
        });
    });
}
