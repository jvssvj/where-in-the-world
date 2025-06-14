import { clearFilters } from "./features/interactions/clearFilters.js"
import { openAndCloseFilters } from "./features/interactions/openAndCloseFilters.js"
import { changeTheme } from "./features/interactions/theme.js"
import { countryClicked } from "./features/navigation/countryClicked.js"
import { searchCountry } from "./features/navigation/searchCountry.js"
import { showCountries } from "./features/render/showCountries.js"

changeTheme()
openAndCloseFilters()
clearFilters()
searchCountry()
showCountries()