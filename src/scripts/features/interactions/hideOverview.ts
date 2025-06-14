import { showCountries } from "../render/showCountries.js"

export function hideOverview() {
    const $body = document.querySelector('body') as HTMLBodyElement
    const $overviewContrieContainer = document.querySelector('#overview__countrie') as HTMLDivElement
    const countrieHeader = document.querySelector('.countries__header') as HTMLElement

    $body.style.overflow = 'unset'
    $overviewContrieContainer.classList.remove('visible')
    countrieHeader.style.position = 'relative'
}