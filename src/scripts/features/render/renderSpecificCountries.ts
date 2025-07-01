import { getCountries } from "../../api/getCountries"
import { CountryInterface } from "../../interfaces/countryInterface"
import { initCountriesReveal } from "../animation/animations"
import { countryClicked } from "../navigation/currentCountry"
import { renderCountries } from "./renderCountries"

export async function renderSpecificCountries() {
    const data = await getCountries()
    const specificCountries = ["Germany", "United States", "Brazil", "Iceland", "Afghanistan", "Åland Islands", "Albania", "Algeria"]

    const countriesMap = new Map<string, CountryInterface>()
    data.forEach((country: CountryInterface) => {
        countriesMap.set(country.name.common, country)
    })

    specificCountries.forEach((countryName) => {
        const country = countriesMap.get(countryName)

        if (country) {
            const flag = country.flags.svg
            const name = country.name.common
            const population = country.population.toLocaleString('en-US')
            const region = country.region
            const capital = country.capital

            renderCountries(flag, name, population, region, capital)
        }
    })

    countryClicked()

    initCountriesReveal()
}