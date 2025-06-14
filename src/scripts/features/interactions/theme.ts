export function changeTheme() {
    const $btnChangeModeContainer = document.querySelector('.countries__header__content__switch__theme')
    const $btnChangeMode = document.querySelector('#dark--mode--btn')
    const $moonInDarkMode = document.querySelector('.moon--dark-mode')
    const $moonInLightMode = document.querySelector('.moon--light-mode')
    const $darkArrow = document.querySelector('.filter--arrow--dark-mode')
    const $lightArrow = document.querySelector('.filter--arrow--light-mode')
    const $searchCountries = document.querySelector('#search--countries') as HTMLInputElement
    const $body = document.querySelector('body')

    const savedTheme = localStorage.getItem('theme') || 'light'

    applyTheme(savedTheme === 'dark')

    $btnChangeModeContainer.addEventListener('click', () => {
        const isDarkMode = !$body.classList.contains('dark-mode')
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
        applyTheme(isDarkMode)
    })

    function applyTheme(isDarkMode) {
        $body.classList.toggle('dark-mode', isDarkMode)

        $moonInLightMode.classList.toggle('visible', !isDarkMode)
        $moonInLightMode.classList.toggle('hidden', isDarkMode)
        $moonInDarkMode.classList.toggle('visible', isDarkMode)

        $btnChangeMode.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode'

        if (isDarkMode) {
            $searchCountries.style.backgroundImage = `url('/images/search-circle.svg')`
        } else {
            $searchCountries.style.backgroundImage = `url('/images/search-circle-outline.svg')`
        }

        $lightArrow.classList.toggle('visible', !isDarkMode)
        $lightArrow.classList.toggle('hidden', isDarkMode)
        $darkArrow.classList.toggle('visible', isDarkMode)
        $darkArrow.classList.toggle('hidden', !isDarkMode)
    }
}