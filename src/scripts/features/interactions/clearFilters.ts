import { performCountrySearch } from "../navigation/searchCountry"
import { showCountries } from "../render/showCountries"

export function clearFilters() {
    const $countriesContainer = document.querySelector('#countries') as HTMLElement
    const $clearBtn = document.querySelector<HTMLSpanElement>('.clear__filter')
    const $regions = document.querySelectorAll<HTMLSpanElement>('.nav__filter__filters__continent')
    const $filterBtn = document.querySelector<HTMLButtonElement>('#filter--btn')
    const $filterModal = document.querySelector<HTMLDivElement>('.nav__filter__filters')
    const $searchField = document.querySelector('#search--countries') as HTMLInputElement

    $clearBtn.addEventListener('click', () => {
        $filterBtn.textContent = 'Filter by Region'
        $filterBtn.classList.remove('active__filter')
        $regions.forEach(r => r.classList.remove('active__filter'))

        $filterModal.classList.toggle('open__filters__animation', false)
        $filterModal.classList.toggle('close__filters__animation', true)

        $countriesContainer.innerHTML = ''

        if ($searchField.value !== '') {
            performCountrySearch()
        } else {
            showCountries()
        }
    })
}