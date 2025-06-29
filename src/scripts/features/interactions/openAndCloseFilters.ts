export function openAndCloseFilters() {
    const $btnFilter = document.querySelector('.nav__filter__btn') as HTMLButtonElement
    const $btnFilterArrows = document.querySelectorAll<HTMLImageElement>('.nav__filter__arrow')
    const $filterModal = document.querySelector('.nav__filter__filters') as HTMLDivElement

    $filterModal.classList.add('close__filters__animation')
    $btnFilter.addEventListener('click', () => {
        $btnFilterArrows.forEach((arrow) => {
            if (arrow.classList.contains('rotate__arrow')) {
                arrow.classList.add('original__arrow')
                arrow.classList.remove('rotate__arrow')
            } else {
                arrow.classList.add('rotate__arrow')
                arrow.classList.remove('original__arrow')
            }
        })

        if ($filterModal.classList.contains('close__filters__animation')) {
            $filterModal.classList.remove('close__filters__animation')
            $filterModal.classList.add('open__filters__animation')
        } else {
            $filterModal.classList.remove('open__filters__animation')
            $filterModal.classList.add('close__filters__animation')
        }
    })
}