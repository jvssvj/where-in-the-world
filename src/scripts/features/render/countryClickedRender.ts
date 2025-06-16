import { getCountries } from "../../api/getCountries.js"
import { getAllCountries } from "../../state/globalData.js"
import { showOverview } from "../interactions/showOverview.js"
import { currentCountry } from "../navigation/currentCountry.js"
import { renderDetailsCountry } from "./renderDetailsCountry.js"

export async function countryClickedRender(countryName: string) {
    const data = await getCountries(`name/${countryName}`)
    if (!data || data.length === 0) return

    const country = data[0]

    const countrieFlag = country.flags.svg
    const countrieName = country.name.common
    const countrieNativeName = country.name.official
    const countriePopulation = country.population.toLocaleString('en-US')
    const countrieRegion = country.region
    const countrieSubRegion = country.subregion
    const countrieCapital = country.capital
    const countrieTopLevelDomain = country.tld
    const countrieCurrencies = () => {
        const currencies = country.currencies
        for (const type in currencies) {
            const name = currencies[type].name
            return name
        }
    }
    const countrieLanguages = () => {
        const languages = country.languages
        const languageValues = Object.values(languages)
        return languageValues.join(', ')
    }
    const countrieBorders = (): string[] => {
        const countryBorders = country.borders
        const allCountries = getAllCountries()
        const countryCode = country.cca3
        let countryBordersFound: string[] = []

        if (countryBorders) {
            countryBorders.forEach((borderCode) => {
                if (borderCode === countryCode) return

                const countries = allCountries.find(c => c.cca3 === borderCode)
                if (countries) {
                    countryBordersFound.push(countries.name.common)
                }
            })
        }
        return countryBordersFound
    }

    showOverview()

    renderDetailsCountry(
        countrieFlag,
        countrieName,
        countrieNativeName,
        countriePopulation,
        countrieRegion,
        countrieSubRegion,
        countrieCapital,
        countrieTopLevelDomain,
        countrieCurrencies(),
        countrieLanguages(),
        countrieBorders()
    )

    currentCountry()
}