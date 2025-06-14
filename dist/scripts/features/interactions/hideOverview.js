export function hideOverview() {
    const $body = document.querySelector('body');
    const $overviewContrieContainer = document.querySelector('#overview__countrie');
    const countrieHeader = document.querySelector('.countries__header');
    $body.style.overflow = 'unset';
    $overviewContrieContainer.classList.remove('visible');
    countrieHeader.style.position = 'relative';
}
