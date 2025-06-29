import { CountryInterface } from "../../interfaces/countryInterface"
import { getAllCountries } from "../../state/globalData"
import { renderCountries } from "../render/renderCountries"
import { renderSpecificCountries } from "../render/renderSpecificCountries"
import { countryClicked } from "./currentCountry"

function getFilterActive(): string {
    const $regions = Array.from(document.querySelectorAll<HTMLSpanElement>('.nav__filter__filters__continent'))

    const activeRegion = $regions.find(region => region.classList.contains('active__filter'))
    const filterName = activeRegion ? activeRegion.dataset.region : ''

    return filterName || ''
}

export function searchCountry(): void {
    const $searchField = document.querySelector('#search--countries') as HTMLInputElement
    const $countriesContainer = document.querySelector('#countries') as HTMLElement

    $searchField.addEventListener('input', async () => {
        const countrySearched = $searchField.value.trim().toLowerCase()
        const filter = getFilterActive()

        setTimeout(() => {
            if (countrySearched !== '' && filter === '') {
                $countriesContainer.innerHTML = ''
                searchByName(countrySearched)
            }

            if (countrySearched === '' && filter !== '') {
                $countriesContainer.innerHTML = ''
                searchByFilter(filter)
            }

            if (countrySearched !== '' && filter !== '') {
                $countriesContainer.innerHTML = ''
                searchByNameAndFilter(countrySearched, filter)
            }

            if (countrySearched === '' && filter === '') {
                $countriesContainer.innerHTML = ''
                renderSpecificCountries()
            }

            countryClicked()

        }, 500)
    })
}

export function searchByName(countrySearched: string): void {
    const allCountries = getAllCountries()
    const data = allCountries.filter(country => country.name.common.toLowerCase().trim().includes(countrySearched))
    renderCountry(data)
}

function searchByFilter(filter: string): void {
    const allCountries = getAllCountries()
    const data = allCountries.filter(country => country.region === filter)
    renderCountry(data)
}

function searchByNameAndFilter(countrySearched: string, filter: string): void {
    const allCountries = getAllCountries()
    const data = allCountries.filter(country => country.name.common.toLowerCase().trim().includes(countrySearched) && (!filter || country.region === filter))
    renderCountry(data)
}

function renderCountry(data: CountryInterface[]): void {
    const $message = document.querySelector('#message') as HTMLSpanElement

    if (data.length === 0) {
        $message.textContent = 'No results found.'
        return
    }

    $message.textContent = ''

    data.slice(0, 8).forEach((country: CountryInterface) => {
        const flag = country.flags.svg
        const name = country.name.common
        const population = country.population.toLocaleString('en-US')
        const region = country.region
        const capital = country.capital

        renderCountries(flag, name, population, region, capital)
    })
}