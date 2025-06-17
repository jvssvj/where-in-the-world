import { hideOverview } from "../interactions/hideOverview"
import { countryClickedRender } from "../render/countryClickedRender"
let countriesClicked: string[] = []
let currentIndex = -1

export function countryClicked() {
    const countrieLinks = document.querySelectorAll<HTMLAnchorElement>('.country__link')

    countrieLinks.forEach((link) => {
        link.addEventListener('click', async (ev: MouseEvent) => {
            ev.preventDefault()

            const $countryDiv = link.closest('.country') as HTMLElement | null
            const countryName = $countryDiv?.dataset.name

            if (!countryName) return

            if (countriesClicked.length === 0) {
                countriesClicked.push(countryName)
            }

            countryClickedRender(countryName)
        })
    })
}


function getBorderCountryClicked() {
    const clickedLink = document.querySelectorAll('.country__border__links__link')
    clickedLink.forEach(link => {
        link.addEventListener('click', (ev) => {
            ev.preventDefault()
            const countryName = link.textContent.trim()
            countriesClicked.push(countryName)
            currentIndex = countriesClicked.length - 1

            countryClickedRender(countryName)
            updateNextButtonVisibility()
        })
    })
}

function backCountry() {
    const $buttonBack = document.querySelector('.button__back__overview') as HTMLButtonElement

    $buttonBack.addEventListener('click', () => {

        if (currentIndex > 0) {
            currentIndex--
            const countryName = countriesClicked[currentIndex]
            countryClickedRender(countryName)
            updateNextButtonVisibility()
        } else {
            countriesClicked = []
            hideOverview()
        }
    })
}

function nextCountry() {
    const $buttonNext = document.querySelector('.button__next__overview') as HTMLButtonElement
    $buttonNext.addEventListener('click', () => {

        if (currentIndex < countriesClicked.length - 1) {
            currentIndex++
            const nextCountry = countriesClicked[currentIndex]
            countryClickedRender(nextCountry)
        }
    })

    updateNextButtonVisibility()
}

function updateNextButtonVisibility() {
    const $buttonNext = document.querySelector('.button__next__overview') as HTMLButtonElement

    if (!$buttonNext) return

    if (countriesClicked.length === 1 || currentIndex >= countriesClicked.length - 1) {
        $buttonNext.classList.add('hidden')
    } else {
        $buttonNext.classList.remove('hidden')
    }
}

export function currentCountry() {
    getBorderCountryClicked()
    backCountry()
    nextCountry()
}