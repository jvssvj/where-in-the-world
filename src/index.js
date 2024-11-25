import { getCountries } from "./getCountries.js"

function changeTheme() {
    const $btnChangeModeContainer = document.querySelector('.countries__header__content__switch__theme')
    const $btnChangeMode = document.querySelector('#dark--mode--btn')
    const $moonInDarkMode = document.querySelector('.moon--dark-mode')
    const $moonInLightMode = document.querySelector('.moon--light-mode')
    const $darkArrow = document.querySelector('.filter--arrow--dark-mode')
    const $lightArrow = document.querySelector('.filter--arrow--light-mode')
    const $searchCountries = document.querySelector('#search--countries')
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

        const suffix = isDarkMode ? '' : '-outline'
        $searchCountries.style.backgroundImage = `url(../images/search-circle${suffix}.svg)`

        $lightArrow.classList.toggle('visible', !isDarkMode)
        $lightArrow.classList.toggle('hidden', isDarkMode)
        $darkArrow.classList.toggle('visible', isDarkMode)
        $darkArrow.classList.toggle('hidden', !isDarkMode)
    }
}


function openCloseFilters() {
    const $btnFilter = document.querySelector('.countries__nav__filter__btn')
    const $btnFilterArrows = document.querySelectorAll('.countries__nav__filter__arrow')
    const $filterModal = document.querySelector('.countries__nav__filter__filters')
    
    $filterModal.classList.add('close__filters__animation')
    $btnFilter.addEventListener('click', () => {
        $btnFilterArrows.forEach((arrow) => {
            if(arrow.classList.contains('rotate__arrow')) {
                arrow.classList.add('original__arrow')
                arrow.classList.remove('rotate__arrow')
            } else {
                arrow.classList.add('rotate__arrow')
                arrow.classList.remove('original__arrow')     
            }
        })


        if($filterModal.classList.contains('close__filters__animation')) {
            $filterModal.classList.remove('close__filters__animation')
            $filterModal.classList.add('open__filters__animation')
        } else {
            $filterModal.classList.remove('open__filters__animation')
            $filterModal.classList.add('close__filters__animation')
        }
    })
}

changeTheme()
openCloseFilters()
getCountries('all')