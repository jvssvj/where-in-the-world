import { setAllCountries } from "../state/globalData"

export async function getCountries(endpoint = 'all') {
    const hasFields = endpoint === 'all'
    const baseUrl = `https://restcountries.com/v3.1/${endpoint}`
    const mainFields = 'flags,name,population,region,capital,cca3'
    const spinner = document.querySelector('.loader') as HTMLSpanElement

    const url = hasFields ? `${baseUrl}?fields=${mainFields}` : baseUrl

    const $message = document.querySelector('#message') as HTMLSpanElement

    try {
        spinner.classList.remove('hidden')
        const resp = await fetch(url, {
            method: 'GET'
        })

        if (!resp.ok) {
            throw new Error('No results found.')
        }
        $message.textContent = ''
        const data = await resp.json()
        if (endpoint === 'all') {
            setAllCountries(data)
        }

        return data

    } catch (err) {
        const error = err as Error
        $message.textContent = error.message
    } finally {
        setTimeout(() => {
            spinner.classList.add('hidden')
        }, 300)
    }
}