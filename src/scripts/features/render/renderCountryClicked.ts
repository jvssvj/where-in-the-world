import { getCountries } from "../../api/getCountries"
import { getAllCountries } from "../../state/globalData"
import { initCountryDetailsReveal } from "../animation/animations"
import { showOverview } from "../interaction/showOverview"
import { currentCountry } from "../navigation/currentCountry"
import { renderDetailsCountry } from "./renderDetailsCountry"

export async function renderCountryClicked(countryName: string) {
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

    const currencies = country.currencies
    const countrieCurrencies = currencies
        ? (Object.values(currencies)[0] as { name: string })?.name || ''
        : ''

    const languages = country.languages
    const countrieLanguages = languages ? Object.values(languages).join(', ') : ''

    const countryBorders = country.borders || []
    const allCountries = getAllCountries()
    const countryCode = country.cca3

    const countrieBorders = countryBorders
        .filter((code: string) => code !== countryCode)
        .map((code: string) => allCountries.find(c => c.cca3 === code)?.name.common)
        .filter(Boolean) as string[]

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
        countrieCurrencies,
        countrieLanguages,
        countrieBorders
    )

    currentCountry()
    initCountryDetailsReveal()
}