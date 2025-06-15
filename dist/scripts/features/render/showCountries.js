import { getCountries } from "../../api/getCountries.js";
import { countryClicked } from "../navigation/countryClicked.js";
import { renderCountries } from "./renderCountries.js";
export async function showCountries() {
    const data = await getCountries();
    data.slice(0, 8).forEach((country) => {
        const flag = country.flags.svg;
        const name = country.name.common;
        const population = country.population.toLocaleString('en-US');
        const region = country.region;
        const capital = country.capital;
        renderCountries(flag, name, population, region, capital);
    });
    countryClicked();
}
