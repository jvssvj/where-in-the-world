export function renderCountries(flag = 'Not found', name = 'Not found', population = 'Not found', region = 'Not found', capital = 'Not found') {
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

    countrieLink.classList.add('countrie__link')
    countrieContainer.classList.add('countrie')
    countrieFlag.classList.add('countrie__flag')
    countrieName.classList.add('countrie__name')
    countrieInfosContainer.classList.add('countrie__infos')
    const infoTitle = [countriePopulationInfoTitle, countrieRegionInfoTitle, countrieCapitalInfoTitle]
    const infoData = [countriePopulationInfoData, countrieRegionInfoData, countrieCapitalInfoData]

    infoTitle.forEach((title) => {
        title.classList.add('countrie__infos__info__title')
    })

    infoData.forEach((data) => {
        data.classList.add('countrie__infos__info__data')
    })
    
    countrieFlag.src = `${flag}`
    countrieFlag.alt = `Flag of the country ${name}`
    countrieName.textContent = `${name}`
    countrieName.dataset.name = `${name}`
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
