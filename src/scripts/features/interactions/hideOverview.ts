export function hideOverview() {
    const $body = document.querySelector('body') as HTMLBodyElement
    const $overviewContrieContainer = document.querySelector('#country__overview') as HTMLDivElement
    const countrieHeader = document.querySelector('.header') as HTMLElement

    $body.style.overflow = 'unset'
    $overviewContrieContainer.classList.remove('visible')
    countrieHeader.style.position = 'relative'
}