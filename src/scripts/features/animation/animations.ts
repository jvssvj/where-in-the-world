import ScrollReveal from 'scrollreveal';
const sr = ScrollReveal()

export function initUIReveal() {
    sr.reveal('.header__content__t', {
        origin: 'left',
        distance: '50px',
        duration: 700,
        easing: 'ease-in-out',
    });

    sr.reveal('.header__content__switch__theme', {
        origin: 'right',
        distance: '50px',
        duration: 700,
        easing: 'ease-in-out',
    });

    sr.reveal('#countries', {
        origin: 'top',
        distance: '70px',
        duration: 700,
        easing: 'ease-in-out',
        delay: 700
    });
}

export function initCountriesReveal() {
    const cards = document.querySelectorAll('.country');
    cards.forEach((el) => {
        el.removeAttribute('data-sr-id');
        el.classList.remove('sr');
    });

    sr.reveal('.country', {
        origin: 'left',
        distance: '70px',
        duration: 700,
        easing: 'ease-in-out',
        reset: true
    });
}

export function initCountryDetailsReveal() {
    sr.reveal('.country__flag__btn__overview', {
        origin: 'left',
        distance: '70px',
        duration: 700,
        easing: 'ease-in-out',
    });

    sr.reveal('.country__details__overview', {
        origin: 'right',
        distance: '70px',
        duration: 700,
        easing: 'ease-in-out',
    });
}