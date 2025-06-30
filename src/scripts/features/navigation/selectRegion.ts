import { CountryInterface } from "../../interfaces/countryInterface"
import { getAllCountries } from "../../state/globalData"
import { initCountriesReveal } from "../animation/animations"
import { renderCountries } from "../render/renderCountries"
import { countryClicked } from "./currentCountry"

export function selectRegion() {
    const $filterModal = document.querySelector('.nav__filter__filters') as HTMLDivElement
    const $regions = document.querySelectorAll<HTMLSpanElement>('.nav__filter__filters__continent')
    const $countriesContainer = document.querySelector('#countries') as HTMLElement
    const $message = document.querySelector('#message') as HTMLSpanElement
    const $searchField = document.querySelector('#search--countries') as HTMLInputElement
    const $buttonFilter = document.querySelector('#filter--btn') as HTMLButtonElement

    $regions.forEach((region) => {
        region.addEventListener('click', async () => {
            const data = getAllCountries()

            $regions.forEach(r => r.classList.remove('active__filter'))

            region.classList.add('active__filter')

            $filterModal.classList.remove('open__filters__animation')
            $filterModal.classList.add('close__filters__animation')

            const nameRegion = region.dataset.region || ''
            $buttonFilter.textContent = nameRegion
            $buttonFilter.classList.add('active__filter')

            $countriesContainer.innerHTML = ''
            $message.textContent = ''

            const search = $searchField.value.toLowerCase()

            const filteredCountries = data.filter((countrie: CountryInterface) => {
                const matchesContinent = countrie.region.toLowerCase() === nameRegion.toLowerCase()
                const matchesName = countrie.name.common.toLowerCase().includes(search)
                return matchesContinent && (search === '' || matchesName)
            })

            if (filteredCountries.length > 0) {
                filteredCountries.slice(0, 8).forEach((countrie) => {
                    renderCountries(
                        countrie.flags.svg,
                        countrie.name.common,
                        countrie.population.toLocaleString('en-US'),
                        countrie.region,
                        countrie.capital
                    )
                })
            } else {
                $message.textContent = 'No results found.'
            }

            countryClicked()
            initCountriesReveal()
        })
    })
}