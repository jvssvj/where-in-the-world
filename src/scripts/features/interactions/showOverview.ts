export function showOverview() {
    const $body = document.querySelector('body') as HTMLBodyElement
    const $overviewContrieContainer = document.querySelector('#overview__countrie') as HTMLDivElement
    $overviewContrieContainer.classList.add('visible')

    if ($overviewContrieContainer.classList.contains('visible')) {
        const countrieHeader = document.querySelector('.countries__header') as HTMLElement
        $body.style.overflow = 'hidden'
        countrieHeader.style.position = 'fixed'
        $overviewContrieContainer.innerHTML = ''
    }
}