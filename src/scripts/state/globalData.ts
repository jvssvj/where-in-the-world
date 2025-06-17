import { CountryInterface } from "../interfaces/countryInterface"

export let allCountries: CountryInterface[] = []

export function setAllCountries(data: CountryInterface[]) {
    allCountries = data
}

export function getAllCountries(): CountryInterface[] {
    return allCountries
}
