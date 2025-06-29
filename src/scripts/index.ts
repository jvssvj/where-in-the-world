import { openAndCloseFilters } from "./features/interactions/openAndCloseFilters"
import { changeTheme } from "./features/interactions/theme"
import { searchCountry } from "./features/navigation/searchCountry"
import { selectRegion } from "./features/navigation/selectRegion"
import { renderSpecificCountries } from "./features/render/renderSpecificCountries"
import { clearFilters } from "./features/interactions/clearFilters"

import '../assets/styles/components/country.css'
import '../assets/styles/components/nav.css'
import '../assets/styles/components/header.css'

import '../assets/styles/pages/index.css'
import '../assets/styles/pages/overviewCountry.css'

import '../assets/styles/state/state.css'

import '../assets/styles/utils/animations.css'
import '../assets/styles/utils/reset.css'
import '../assets/styles/utils/variables.css'
import '../assets/styles/pages/index.css'

changeTheme()
openAndCloseFilters()
clearFilters()
searchCountry()
selectRegion()
renderSpecificCountries()