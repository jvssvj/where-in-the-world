import { renderCountries } from "./renderCountries.js"
import { handleClickContinent, handleCountryClickInNavigation } from "./nav.js"
export let dataExport;
export let changeQuantityToShow = 8
export let $message = document.querySelector('#message')

export async function getCountries(endpoints = '') {
    let url = `https://restcountries.com/v3.1/${endpoints}`

    try {
        const resp = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if(!resp.ok) {
            throw new Error('No results found.')
        }

        $message.textContent = ''
        const data = await resp.json()
        dataExport = data

        const quantityToShow = data.slice(0, changeQuantityToShow) 
        quantityToShow.forEach((countrie) => {
            const flag = countrie.flags.svg
            const name = countrie.name.common
            const population = parseFloat(countrie.population).toLocaleString('en-US')
            const region = countrie.region
            const capital = countrie.capital
            renderCountries(flag, name, population, region, capital)
        })

        handleClickContinent(data, changeQuantityToShow)
        handleCountryClickInNavigation()

    } catch (err) {
        $message.textContent = err.message
    }
}