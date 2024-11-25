import { dataExport } from "./getCountries.js"
import { handleCountryClick } from "./nav.js"
export let arrCountrieBorderName = []

export function renderOverviewCountry (
    flag = 'Not found', name = 'Not found', 
    nativeName = 'Not found', 
    population = 'Not found', 
    region = 'Not found', 
    subRegion = 'Not found', 
    capital = 'Not found', 
    topLevelDomain = 'Not found', 
    currencies = 'Not found', 
    languages = 'Not found', 
    borders = undefined) {
    
    const countrieContainer = document.createElement('div')
    const countrieFlagContainer = document.createElement('div')
    const countrieButtonsNavContainer = document.createElement('div')
    const buttonBack = document.createElement('button')
    const buttonNext = document.createElement('button')
    const countrieFlag = document.createElement('img')
    const countrieDetails = document.createElement('div')
    const countrieName = document.createElement('h2')
    const countrieInfosContainer = document.createElement('div')
    const countrieInfosColumn1 = document.createElement('div')
    const countrieInfosColumn2 = document.createElement('div')

    const countrieNativeNameInfoTitle = document.createElement('span')
    const countrieNativeNameInfoData = document.createElement('span')
    const countriePopulationInfoTitle = document.createElement('span')
    const countriePopulationInfoData = document.createElement('span')
    const countrieRegionInfoTitle = document.createElement('span')
    const countrieRegionInfoData = document.createElement('span')
    const countrieSubregionInfoTitle = document.createElement('span')
    const countrieSubregionInfoData = document.createElement('span')
    const countrieCapitalInfoTitle = document.createElement('span')
    const countrieCapitalInfoData = document.createElement('span')

    const countrieTopLevelDomainInfoTitle = document.createElement('span')
    const countrieTopLevelDomainInfoData = document.createElement('span')
    const countrieCurrenciesInfoTitle = document.createElement('span')
    const countrieCurrenciesInfoData = document.createElement('span')
    const countrieLanguagesInfoTitle = document.createElement('span')
    const countrieLanguagesInfoData = document.createElement('span')

    countrieInfosColumn1.append()

    const column1Infos = [
        countrieNativeNameInfoTitle, 
        countriePopulationInfoTitle, 
        countrieRegionInfoTitle, 
        countrieSubregionInfoTitle, 
        countrieCapitalInfoTitle
    ]

    const column2Infos = [
        countrieTopLevelDomainInfoTitle, 
        countrieCurrenciesInfoTitle, 
        countrieLanguagesInfoTitle
    ]

    const infoTitle = [
        countrieNativeNameInfoTitle, 
        countriePopulationInfoTitle, 
        countrieRegionInfoTitle, 
        countrieSubregionInfoTitle, 
        countrieCapitalInfoTitle, 
        countrieTopLevelDomainInfoTitle, 
        countrieCurrenciesInfoTitle, 
        countrieLanguagesInfoTitle
    ]
    const infoData = [
        countrieNativeNameInfoData, 
        countriePopulationInfoData, 
        countrieRegionInfoData, 
        countrieSubregionInfoData, 
        countrieCapitalInfoData, 
        countrieTopLevelDomainInfoData, 
        countrieCurrenciesInfoData, 
        countrieLanguagesInfoData
    ]

    const countrieBorderContainerOverview = document.createElement('div')
    const countrieBorderTitleOverview = document.createElement('span')
    const countrieBorderLinksContainerOverview = document.createElement('div')


    countrieContainer.classList.add('countrie__overview')
    countrieFlagContainer.classList.add('countrie__flag__btn__overview')
    countrieButtonsNavContainer.classList.add('countrie__btn__nav__overview')
    buttonBack.classList.add('button__back__overview')
    buttonNext.classList.add('button__next__overview')
    countrieFlag.classList.add('countrie__flag__overview')
    countrieDetails.classList.add('countrie__details__overview')
    countrieName.classList.add('countrie__name__overview')
    countrieInfosContainer.classList.add('countrie__infos__overview')
    countrieInfosColumn1.classList.add('countrie__infos__overview__column1')
    countrieInfosColumn2.classList.add('countrie__infos__overview__column2')
    infoTitle.forEach((title) => {
        title.classList.add('countrie__infos__info__title__overview')
    })
    infoData.forEach((data) => {
        data.classList.add('countrie__infos__info__data__overview')
    })

    countrieBorderContainerOverview.classList.add('countrie__border__overview')
    countrieBorderTitleOverview.classList.add('countrie__border__title__overview')
    countrieBorderLinksContainerOverview.classList.add('countrie__border__links')

    if(!borders || borders.length === 0) {
        countrieBorderTitleOverview.textContent = 'Border Countries: None'
        countrieBorderLinksContainerOverview.classList.add('hidden')

    } else {
        countrieBorderTitleOverview.textContent = 'Border Countries:'
        countrieBorderLinksContainerOverview.classList.remove('hidden')
        countrieBorderLinksContainerOverview.innerHTML = ''

        for(let i = 0; i < borders.length; i++) {
            const border = document.createElement('a')
            border.classList.add('countrie__border__links__link')
            border.textContent = borders[i]
            border.dataset.name = borders[i]
            countrieBorderLinksContainerOverview.append(border)


            border.addEventListener('click', () => {
                const countrieDatasetName = border.dataset.name
                arrCountrieBorderName.push(countrieDatasetName)
                handleCountryClick(dataExport ,countrieDatasetName)
            })
        }
    }

    buttonBack.textContent = 'Back'
    buttonNext.textContent = 'Next'

    countrieFlag.src = `${flag}`
    countrieFlag.alt = `Flag of the country ${name}`

    countrieName.textContent = `${name}`
    countrieName.dataset.name = `${name}`

    countrieNativeNameInfoTitle.textContent = `Native Name:`
    countrieNativeNameInfoData.textContent = `${nativeName}`

    countriePopulationInfoTitle.textContent = `Population:`
    countriePopulationInfoData.textContent = `${population}`

    countrieRegionInfoTitle.textContent = `Region:`
    countrieRegionInfoData.textContent = `${region}`

    countrieSubregionInfoTitle.textContent = `Sub Region:`
    countrieSubregionInfoData.textContent = `${subRegion}`

    countrieCapitalInfoTitle.textContent = `Capital:`
    countrieCapitalInfoData.textContent = `${capital}`

    countrieTopLevelDomainInfoTitle.textContent = `Top Level Domain:`
    countrieTopLevelDomainInfoData.textContent = `${topLevelDomain}`

    countrieCurrenciesInfoTitle.textContent = `Currencies:`
    countrieCurrenciesInfoData.textContent = `${currencies}`
    
    countrieLanguagesInfoTitle.textContent = `Languages:`
    countrieLanguagesInfoData.textContent = `${languages}`

    countrieBorderContainerOverview.append(countrieBorderTitleOverview, countrieBorderLinksContainerOverview)

    countrieNativeNameInfoTitle.append(countrieNativeNameInfoData)
    countriePopulationInfoTitle.append(countriePopulationInfoData)
    countrieRegionInfoTitle.append(countrieRegionInfoData)
    countrieSubregionInfoTitle.append(countrieSubregionInfoData)
    countrieCapitalInfoTitle.append(countrieCapitalInfoData)
    countrieTopLevelDomainInfoTitle.append(countrieTopLevelDomainInfoData)
    countrieCurrenciesInfoTitle.append(countrieCurrenciesInfoData)
    countrieLanguagesInfoTitle.append(countrieLanguagesInfoData)

    countrieInfosColumn1.append(...column1Infos)
    countrieInfosColumn2.append(...column2Infos)

    countrieInfosContainer.append(countrieInfosColumn1, countrieInfosColumn2)

    countrieDetails.append(countrieName, countrieInfosContainer, countrieBorderContainerOverview)

    countrieButtonsNavContainer.append(buttonBack, buttonNext)
    countrieFlagContainer.append(countrieButtonsNavContainer ,countrieFlag)

    countrieContainer.append(countrieFlagContainer, countrieDetails)

    document.querySelector('#overview__countrie').append(countrieContainer)
}