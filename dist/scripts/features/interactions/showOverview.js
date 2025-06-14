export function showOverview() {
    const $body = document.querySelector('body');
    const $overviewContrieContainer = document.querySelector('#overview__countrie');
    $overviewContrieContainer.classList.add('visible');
    if ($overviewContrieContainer.classList.contains('visible')) {
        const countrieHeader = document.querySelector('.countries__header');
        $body.style.overflow = 'hidden';
        countrieHeader.style.position = 'fixed';
        $overviewContrieContainer.innerHTML = '';
    }
}
