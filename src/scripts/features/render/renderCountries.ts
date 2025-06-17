export function renderCountries(
    flag: string,
    name: string,
    population: string,
    region: string,
    capital: string) {
    const countrieLink = document.createElement('a')
    const countrieContainer = document.createElement('div')
    const countrieFlag = document.createElement('img')
    const countrieName = document.createElement('h2')
    const countrieInfosContainer = document.createElement('div')
    const countriePopulationInfoTitle = document.createElement('span')
    const countriePopulationInfoData = document.createElement('span')
    const countrieRegionInfoTitle = document.createElement('span')
    const countrieRegionInfoData = document.createElement('span')
    const countrieCapitalInfoTitle = document.createElement('span')
    const countrieCapitalInfoData = document.createElement('span')

    countrieLink.classList.add('country__link')
    countrieContainer.classList.add('country')
    countrieContainer.dataset.name = `${name}`
    countrieFlag.classList.add('country__flag')
    countrieName.classList.add('country__name')
    countrieInfosContainer.classList.add('country__infos')
    const infoTitle = [countriePopulationInfoTitle, countrieRegionInfoTitle, countrieCapitalInfoTitle]
    const infoData = [countriePopulationInfoData, countrieRegionInfoData, countrieCapitalInfoData]

    infoTitle.forEach((title) => {
        title.classList.add('country__infos__info__title')
    })

    infoData.forEach((data) => {
        data.classList.add('country__infos__info__data')
    })

    countrieFlag.src = `${flag}`
    countrieFlag.alt = `Flag of the country ${name}`
    countrieName.textContent = `${name}`
    countriePopulationInfoTitle.textContent = `Population:`
    countriePopulationInfoData.textContent = `${population}`
    countrieRegionInfoTitle.textContent = `Region:`
    countrieRegionInfoData.textContent = `${region}`
    countrieCapitalInfoTitle.textContent = `Capital:`
    countrieCapitalInfoData.textContent = `${capital}`

    countriePopulationInfoTitle.append(countriePopulationInfoData)
    countrieRegionInfoTitle.append(countrieRegionInfoData)
    countrieCapitalInfoTitle.append(countrieCapitalInfoData)
    countrieInfosContainer.append(countrieName, ...infoTitle)
    countrieContainer.append(countrieLink, countrieFlag, countrieInfosContainer)

    document.querySelector('#countries').append(countrieContainer)
}
