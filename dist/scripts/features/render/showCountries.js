import { getCountries } from "../../api/getCountries.js";
import { countryClicked } from "../navigation/currentCountry.js";
import { renderCountries } from "./renderCountries.js";
export async function showCountries() {
    const data = await getCountries();
    const specificCountries = ["Germany", "United States", "Brazil", "Iceland", "Afghanistan", "Åland Islands", "Albania", "Algeria"];
    specificCountries.forEach((countryName) => {
        const country = data.find((c) => c.name.common === countryName);
        if (country) {
            const flag = country.flags.svg;
            const name = country.name.common;
            const population = country.population.toLocaleString('en-US');
            const region = country.region;
            const capital = country.capital;
            renderCountries(flag, name, population, region, capital);
        }
    });
    countryClicked();
}
