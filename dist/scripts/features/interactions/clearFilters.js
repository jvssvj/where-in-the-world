import { getCountries } from "../../api/getCountries.js";
export function clearFilters() {
    const $countriesContainer = document.querySelector('#countries');
    const $clearBtn = document.querySelector('.clear__filter');
    const $regions = document.querySelectorAll('.countries__nav__filter__filters__continent');
    const $filterBtn = document.querySelector('#filter--btn');
    const $filterModal = document.querySelector('.countries__nav__filter__filters');
    const $searchField = document.querySelector('#search--countries');
    $clearBtn.addEventListener('click', () => {
        $filterBtn.textContent = 'Filter by Region';
        $filterBtn.classList.remove('active__filter');
        $regions.forEach(r => r.classList.remove('active__filter'));
        $filterModal.classList.toggle('open__filters__animation', false);
        $filterModal.classList.toggle('close__filters__animation', true);
        $countriesContainer.innerHTML = '';
        if ($searchField.value !== '') {
            getCountries(`name/${$searchField.value}`);
        }
        else {
            getCountries();
        }
    });
}
