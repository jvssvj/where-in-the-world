import { getCountries } from "../../api/getCountries.js"
import { CountryInterface } from "../../interfaces/countryInterface.js"
import { setAllCountries } from "../../state/globalData.js"
import { countryClicked } from "../navigation/countryClicked.js"
import { renderCountries } from "./renderCountries.js"

export async function showCountries() {
    const data = await getCountries()
    setAllCountries(data)

    data.slice(0, 8).forEach((country: CountryInterface) => {
        const flag = country.flags.svg
        const name = country.name.common
        const population = country.population.toLocaleString('en-US')
        const region = country.region
        const capital = country.capital

        renderCountries(flag, name, population, region, capital)

    })

    countryClicked()
}