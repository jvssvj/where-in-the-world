import { $message, dataExport, getCountries, changeQuantityToShow } from "./getCountries.js"
import { renderCountries } from "./renderCountries.js"
import { arrCountrieBorderName, renderOverviewCountry } from "./renderOverviewCountry.js"
const $overviewContrieContainer = document.querySelector('#overview__countrie')
const $countriesContainer = document.querySelector('#countries')
const $searchField = document.querySelector('#search--countries')
let continentValue = ''
let countriesRemoved = []

let debounceTimeout
$searchField.addEventListener('input', () => {
    $countriesContainer.innerHTML = ''
    $message.textContent = ''
    clearTimeout(debounceTimeout)
    debounceTimeout = setTimeout(() => {
        searchCountrie(dataExport, $searchField.value)
    }, 300)
})

function searchCountrie(data, countrieSearched = '') {
    $countriesContainer.innerHTML = ''

    const filterCountrie = data.filter((countrie) => {
        const matchesContinent = !continentValue || countrie.continents[0]?.toLowerCase().trim() === continentValue.toLowerCase().trim()
        const matchsName = countrie.name.common.toLowerCase().includes(countrieSearched.toLowerCase())
        return matchesContinent && (countrieSearched === '' || matchsName)
    })

    if (filterCountrie.length > 0) {
        filterCountrie.slice(0, changeQuantityToShow).forEach((countrie) => {
            renderCountries(
                countrie.flags.svg,
                countrie.name.common,
                parseFloat(countrie.population).toLocaleString('en-US'),
                countrie.region,
                countrie.capital
            )
        })
    } else {
        $message.textContent = 'No results found.'
    }

    handleCountryClickInNavigation()
}


function backCountrie() {
    const buttonBack = document.querySelector('.button__back__overview')
    buttonBack.addEventListener('click', () => {
        if(arrCountrieBorderName.length > 0)  {
            const countrieDatasetName = arrCountrieBorderName[arrCountrieBorderName.length -2]
            const countrieRemoved = arrCountrieBorderName.pop()
            countriesRemoved.unshift(countrieRemoved)


            handleCountryClick(dataExport, countrieDatasetName)
        }

        if (arrCountrieBorderName.length < 1) {
            countriesRemoved = []
            hideOverview()
        }
    })
}


function nextCountrie() {
    const buttonNext = document.querySelector('.button__next__overview')
    buttonNext.classList.add('hidden')

    if(countriesRemoved.length > 0) {
        buttonNext.classList.remove('hidden')
    }

    buttonNext.addEventListener('click', () => {
        if(countriesRemoved.length > 0) {
            const countrieDatasetName = countriesRemoved[0]
            const countrieRemoved = countriesRemoved.shift()
            arrCountrieBorderName.push(countrieRemoved)

            handleCountryClick(dataExport, countrieDatasetName)
        }
    })
}

export function handleCountryClick(data, countrieDatasetName) {
    const countrie = data.find((countrie) => countrie.name.common === countrieDatasetName)

    if(countrie) {
        const countrieFlag = countrie.flags.svg
        const countrieName = countrie.name.common
        const countrieNativeName = countrie.name.official
        const countriePopulation = parseFloat(countrie.population).toLocaleString('en-US')
        const countrieRegion = countrie.region
        const countrieSubRegion = countrie.subregion
        const countrieCapital = countrie.capital 
        const countrieTopLevelDomain = countrie.tld
        const countrieCurrencies = function() {
            const currencies = countrie.currencies
            for(const type in currencies) {
                const name = currencies[type].name
                return name
            }
        }
        const countrieLanguages = function () {
            const languages = countrie.languages
            const languageValues = Object.values(languages)
            return languageValues.join(', ')
        }
        const countrieBorders = function() {
            const countrieBorders = countrie.borders
            let countriesBordersFound = []
            if(countrieBorders) {
                countrieBorders.forEach((border) => {
                    const countrie = data.find((countrie) => countrie.fifa === border)
    
                    countrie ? countriesBordersFound.push(countrie.name.common) : ''
    
                })
    
                return countriesBordersFound
            }
        }
        
        $overviewContrieContainer.innerHTML = ''

        showOverview()

        renderOverviewCountry (
            countrieFlag, 
            countrieName, 
            countrieNativeName, 
            countriePopulation, 
            countrieRegion, 
            countrieSubRegion, 
            countrieCapital, 
            countrieTopLevelDomain, 
            countrieCurrencies(), 
            countrieLanguages(), 
            countrieBorders()
        )
    
        backCountrie()
        nextCountrie()
    }
}

export function handleCountryClickInNavigation () {
    const countrieLinks = document.querySelectorAll('.countrie__link')
    countrieLinks.forEach((link) => {
        link.addEventListener('click', (ev) => {
            ev.preventDefault()
            
            const $countrieDiv = link.closest('.countrie')
            const $countrieInfos = $countrieDiv.querySelector('.countrie__infos')
            const countrieDatasetName = $countrieInfos.querySelector('.countrie__name').dataset.name
            arrCountrieBorderName.push(countrieDatasetName)

            handleCountryClick(dataExport, countrieDatasetName)
        })
    })
}

export function handleClickContinent(data, changeQuantityToShow) {
    const $filterModal = document.querySelector('.countries__nav__filter__filters')
    const $continents = document.querySelectorAll('.countries__nav__filter__filters__continent')

    $continents.forEach((continent) => {

        continent.addEventListener('click', () => {
            $continents.forEach((cont) => cont.classList.remove('active__filter'))
            $filterModal.classList.remove('open__filters__animation')
            $filterModal.classList.add('close__filters__animation')
            continent.classList.add('active__filter')

            const continentName = continent.dataset.continent
            const $buttonFilter = document.querySelector('#filter--btn')
            $buttonFilter.textContent = continentName
            $buttonFilter.classList.add('active__filter')

            continentValue = continentName

            $countriesContainer.innerHTML = ''
            $message.textContent = ''

            if($searchField) {

                const filterCountrie = data.filter((countrie) => {
                    const matchesContinent = countrie.continents[0].toLowerCase() === continentValue.toLowerCase()
                    const matchsName = countrie.name.common.toLowerCase().includes($searchField.value.toLowerCase())
                    return matchesContinent && ($searchField.value === '' || matchsName)
                })
    
                if(filterCountrie.length > 0) {
                    filterCountrie.slice(0, changeQuantityToShow).forEach((countrie) => {
                        renderCountries(
                            countrie.flags.svg,
                            countrie.name.common, 
                            parseFloat(countrie.population).toLocaleString('en-US'), 
                            countrie.region, 
                            countrie.capital)
                    })
    
                } else {
                    $message.textContent = 'No results found.'
                }

            }

            handleCountryClickInNavigation()
        })
        
    })
}

function hideOverview() {
    $overviewContrieContainer.classList.remove('visible')
    document.querySelector('body').style.overflow = 'unset'
    document.querySelector('.countries__header').style.position = 'relative'
} 

function showOverview() {
    $overviewContrieContainer.classList.add('visible')
    if($overviewContrieContainer.classList.contains('visible')) {
        document.querySelector('body').style.overflow = 'hidden'
        document.querySelector('.countries__header').style.position = 'fixed'
    }
}

(function () {
    const clearFilterBtn = document.querySelector('.clear__filter')
    const $continents = document.querySelectorAll('.countries__nav__filter__filters__continent')
    const $buttonFilter = document.querySelector('#filter--btn')
    const $filterModal = document.querySelector('.countries__nav__filter__filters')

    clearFilterBtn.addEventListener('click', () => {
        $countriesContainer.innerHTML = ''
        $buttonFilter.textContent = 'Filter by Region'
        $buttonFilter.classList.remove('active__filter')
        $continents.forEach((continent) => continent.classList.remove('active__filter'))
        $filterModal.classList.remove('open__filters__animation')
        $filterModal.classList.add('close__filters__animation')
        continentValue = ''

        if($searchField.value == '') {
            getCountries('all')
        } else {
            getCountries(`name/${$searchField.value}`)
        }
    })
})()