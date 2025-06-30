export function changeTheme() {
    const $btnChangeModeContainer = document.querySelector('.header__content__switch__theme') as HTMLDivElement
    const $btnChangeMode = document.querySelector('#dark--mode--btn') as HTMLButtonElement
    const $moonInDarkMode = document.querySelector('.moon--dark-mode') as HTMLImageElement
    const $moonInLightMode = document.querySelector('.moon--light-mode') as HTMLImageElement
    const $darkArrow = document.querySelector('.filter--arrow--dark-mode') as HTMLImageElement
    const $lightArrow = document.querySelector('.filter--arrow--light-mode') as HTMLImageElement
    const $searchCountries = document.querySelector('#search--countries') as HTMLInputElement
    const $body = document.querySelector('body') as HTMLBodyElement

    const savedTheme = localStorage.getItem('theme') || 'light'

    applyTheme(savedTheme === 'dark')

    $btnChangeModeContainer.addEventListener('click', () => {
        const isDarkMode = !$body.classList.contains('dark-mode')
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
        applyTheme(isDarkMode)
    })

    function applyTheme(isDarkMode: boolean) {
        $body.classList.toggle('dark-mode', isDarkMode)

        $moonInLightMode.classList.toggle('visible', !isDarkMode)
        $moonInLightMode.classList.toggle('hidden', isDarkMode)
        $moonInDarkMode.classList.toggle('visible', isDarkMode)

        if (isDarkMode) {
            $btnChangeMode.textContent = 'Dark Mode'
            $searchCountries.style.backgroundImage = `url('./images/search-circle.svg')`
        } else {
            $btnChangeMode.textContent = 'Light Mode'
            $searchCountries.style.backgroundImage = `url('./images/search-circle-outline.svg')`
        }

        $lightArrow.classList.toggle('visible', !isDarkMode)
        $lightArrow.classList.toggle('hidden', isDarkMode)
        $darkArrow.classList.toggle('visible', isDarkMode)
        $darkArrow.classList.toggle('hidden', !isDarkMode)
    }
}