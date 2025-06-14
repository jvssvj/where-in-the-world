export async function getCountries(endpoint = 'all') {
    const hasFields = endpoint === 'all';
    const baseUrl = `https://restcountries.com/v3.1/${endpoint}`;
    const mainFields = 'flags,name,population,region,capital';
    const url = hasFields ? `${baseUrl}?fields=${mainFields}` : baseUrl;
    const $message = document.querySelector('#message');
    const $countriesContainer = document.querySelector('#countries');
    try {
        const resp = await fetch(url, {
            method: 'GET'
        });
        if (!resp.ok) {
            throw new Error('No results found.');
        }
        const data = await resp.json();
        $countriesContainer.innerHTML = '';
        $message.textContent = '';
        console.log(data);
        return data;
    }
    catch (err) {
        console.log(err);
        $message.textContent = err.message;
    }
}
// data.slice(0, 8).forEach((countrie: CountryInterface) => {
//     const flag = countrie.flags.svg
//     const name = countrie.name.common
//     const population = countrie.population.toLocaleString('en-US')
//     const region = countrie.region
//     const capital = countrie.capital
//     renderCountries(flag, name, population, region, capital)
// })
// selectRegion(data, 8)
// countryClicked()
