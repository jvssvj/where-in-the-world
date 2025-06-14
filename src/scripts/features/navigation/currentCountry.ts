import { hideOverview } from "../interactions/hideOverview.js"
import { countryClickedRender } from "./countryClicked.js"
const allCountries = [] //await getCountries()

let countryClicked = []
let currentIndex = -1
// getCountryClicked()

// function getCountryClicked() {
//     const container = document.querySelector('#overview__countrie')
//     let isClickListenerAttached = false

//     if (container && !isClickListenerAttached) {
//         isClickListenerAttached = true

//         container.addEventListener('click', (ev) => {
//             const target = ev.target as HTMLElement
//             const clickedLink = target.closest('.countrie__border__links__link') as HTMLAnchorElement | null

//             if (clickedLink) {
//                 ev.preventDefault()
//                 const countryName = clickedLink.textContent.trim()
//                 countryClicked.push(countryName)
//                 currentIndex = countryClicked.length - 1

//                 countryClickedRender(allCountries, countryName)
//                 updateNextButtonVisibility()
//             }
//         })
//     }
// }

function backCountry() {
    const $buttonBack = document.querySelector('.button__back__overview') as HTMLButtonElement

    $buttonBack.addEventListener('click', () => {
        hideOverview()
        console.clear()
        // if (currentIndex > 0) {
        //     currentIndex--
        //     const countryName = countryClicked[currentIndex]
        //     countryClickedRender(allCountries, countryName)
        //     updateNextButtonVisibility()
        // } else {
        //     countryClicked = []
        //     hideOverview()
        // }
    })
}

function nextCountry() {
    const $buttonNext = document.querySelector('.button__next__overview') as HTMLButtonElement
    $buttonNext.classList.add('hidden')

    $buttonNext.addEventListener('click', () => {
        if (currentIndex < countryClicked.length - 1) {
            currentIndex++
            const nextCountry = countryClicked[currentIndex]
            countryClickedRender(allCountries, nextCountry)
            updateNextButtonVisibility()
        }
    })
}

function updateNextButtonVisibility() {
    const $buttonNext = document.querySelector('.button__next__overview') as HTMLButtonElement

    if (currentIndex >= countryClicked.length - 1) {
        $buttonNext.classList.add('hidden')
    } else {
        $buttonNext.classList.remove('hidden')
    }
}

export function currentCountry() {
    backCountry()
    nextCountry()
}