export function showOverview() {
    const $body = document.querySelector('body') as HTMLBodyElement
    const $overviewContrieContainer = document.querySelector('#country__overview') as HTMLDivElement
    $overviewContrieContainer.classList.add('visible')

    if ($overviewContrieContainer.classList.contains('visible')) {
        const countrieHeader = document.querySelector('.header') as HTMLElement
        $body.style.overflow = 'hidden'
        countrieHeader.style.position = 'fixed'
        $overviewContrieContainer.innerHTML = ''
    }
}