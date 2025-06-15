import { setAllCountries } from "../state/globalData.js";
export async function getCountries(endpoint = 'all') {
    const hasFields = endpoint === 'all';
    const baseUrl = `https://restcountries.com/v3.1/${endpoint}`;
    const mainFields = 'flags,name,population,region,capital,cca3';
    const url = hasFields ? `${baseUrl}?fields=${mainFields}` : baseUrl;
    const $message = document.querySelector('#message');
    try {
        const resp = await fetch(url, {
            method: 'GET'
        });
        if (!resp.ok) {
            throw new Error('No results found.');
        }
        const data = await resp.json();
        if (endpoint === 'all') {
            setAllCountries(data);
        }
        return data;
    }
    catch (err) {
        console.log(err);
        $message.textContent = err.message;
    }
}
