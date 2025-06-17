/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/styles/components/country.css":
/*!**************************************************!*\
  !*** ./src/assets/styles/components/country.css ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://rest-countries-api/./src/assets/styles/components/country.css?");

/***/ }),

/***/ "./src/assets/styles/components/header.css":
/*!*************************************************!*\
  !*** ./src/assets/styles/components/header.css ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://rest-countries-api/./src/assets/styles/components/header.css?");

/***/ }),

/***/ "./src/assets/styles/components/nav.css":
/*!**********************************************!*\
  !*** ./src/assets/styles/components/nav.css ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://rest-countries-api/./src/assets/styles/components/nav.css?");

/***/ }),

/***/ "./src/assets/styles/pages/index.css":
/*!*******************************************!*\
  !*** ./src/assets/styles/pages/index.css ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://rest-countries-api/./src/assets/styles/pages/index.css?");

/***/ }),

/***/ "./src/assets/styles/pages/overviewCountry.css":
/*!*****************************************************!*\
  !*** ./src/assets/styles/pages/overviewCountry.css ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://rest-countries-api/./src/assets/styles/pages/overviewCountry.css?");

/***/ }),

/***/ "./src/assets/styles/state/state.css":
/*!*******************************************!*\
  !*** ./src/assets/styles/state/state.css ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://rest-countries-api/./src/assets/styles/state/state.css?");

/***/ }),

/***/ "./src/assets/styles/utils/animations.css":
/*!************************************************!*\
  !*** ./src/assets/styles/utils/animations.css ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://rest-countries-api/./src/assets/styles/utils/animations.css?");

/***/ }),

/***/ "./src/assets/styles/utils/reset.css":
/*!*******************************************!*\
  !*** ./src/assets/styles/utils/reset.css ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://rest-countries-api/./src/assets/styles/utils/reset.css?");

/***/ }),

/***/ "./src/assets/styles/utils/variables.css":
/*!***********************************************!*\
  !*** ./src/assets/styles/utils/variables.css ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://rest-countries-api/./src/assets/styles/utils/variables.css?");

/***/ }),

/***/ "./src/scripts/api/getCountries.ts":
/*!*****************************************!*\
  !*** ./src/scripts/api/getCountries.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getCountries: () => (/* binding */ getCountries)\n/* harmony export */ });\n/* harmony import */ var _state_globalData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state/globalData */ \"./src/scripts/state/globalData.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\nfunction getCountries() {\n    return __awaiter(this, arguments, void 0, function* (endpoint = 'all') {\n        const hasFields = endpoint === 'all';\n        const baseUrl = `https://restcountries.com/v3.1/${endpoint}`;\n        const mainFields = 'flags,name,population,region,capital,cca3';\n        const url = hasFields ? `${baseUrl}?fields=${mainFields}` : baseUrl;\n        const $message = document.querySelector('#message');\n        try {\n            const resp = yield fetch(url, {\n                method: 'GET'\n            });\n            if (!resp.ok) {\n                throw new Error('No results found.');\n            }\n            $message.textContent = '';\n            const data = yield resp.json();\n            if (endpoint === 'all') {\n                (0,_state_globalData__WEBPACK_IMPORTED_MODULE_0__.setAllCountries)(data);\n            }\n            return data;\n        }\n        catch (err) {\n            console.log(err);\n            $message.textContent = err.message;\n        }\n    });\n}\n\n\n//# sourceURL=webpack://rest-countries-api/./src/scripts/api/getCountries.ts?");

/***/ }),

/***/ "./src/scripts/features/interactions/clearFilters.ts":
/*!***********************************************************!*\
  !*** ./src/scripts/features/interactions/clearFilters.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearFilters: () => (/* binding */ clearFilters)\n/* harmony export */ });\n/* harmony import */ var _navigation_searchCountry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../navigation/searchCountry */ \"./src/scripts/features/navigation/searchCountry.ts\");\n/* harmony import */ var _render_showCountries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../render/showCountries */ \"./src/scripts/features/render/showCountries.ts\");\n\n\nfunction clearFilters() {\n    const $countriesContainer = document.querySelector('#countries');\n    const $clearBtn = document.querySelector('.clear__filter');\n    const $regions = document.querySelectorAll('.nav__filter__filters__continent');\n    const $filterBtn = document.querySelector('#filter--btn');\n    const $filterModal = document.querySelector('.nav__filter__filters');\n    const $searchField = document.querySelector('#search--countries');\n    $clearBtn.addEventListener('click', () => {\n        $filterBtn.textContent = 'Filter by Region';\n        $filterBtn.classList.remove('active__filter');\n        $regions.forEach(r => r.classList.remove('active__filter'));\n        $filterModal.classList.toggle('open__filters__animation', false);\n        $filterModal.classList.toggle('close__filters__animation', true);\n        $countriesContainer.innerHTML = '';\n        if ($searchField.value !== '') {\n            (0,_navigation_searchCountry__WEBPACK_IMPORTED_MODULE_0__.performCountrySearch)();\n        }\n        else {\n            (0,_render_showCountries__WEBPACK_IMPORTED_MODULE_1__.showCountries)();\n        }\n    });\n}\n\n\n//# sourceURL=webpack://rest-countries-api/./src/scripts/features/interactions/clearFilters.ts?");

/***/ }),

/***/ "./src/scripts/features/interactions/hideOverview.ts":
/*!***********************************************************!*\
  !*** ./src/scripts/features/interactions/hideOverview.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   hideOverview: () => (/* binding */ hideOverview)\n/* harmony export */ });\nfunction hideOverview() {\n    const $body = document.querySelector('body');\n    const $overviewContrieContainer = document.querySelector('#country__overview');\n    const countrieHeader = document.querySelector('.header');\n    $body.style.overflow = 'unset';\n    $overviewContrieContainer.classList.remove('visible');\n    countrieHeader.style.position = 'relative';\n}\n\n\n//# sourceURL=webpack://rest-countries-api/./src/scripts/features/interactions/hideOverview.ts?");

/***/ }),

/***/ "./src/scripts/features/interactions/openAndCloseFilters.ts":
/*!******************************************************************!*\
  !*** ./src/scripts/features/interactions/openAndCloseFilters.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   openAndCloseFilters: () => (/* binding */ openAndCloseFilters)\n/* harmony export */ });\nfunction openAndCloseFilters() {\n    const $btnFilter = document.querySelector('.nav__filter__btn');\n    const $btnFilterArrows = document.querySelectorAll('.nav__filter__arrow');\n    const $filterModal = document.querySelector('.nav__filter__filters');\n    $filterModal.classList.add('close__filters__animation');\n    $btnFilter.addEventListener('click', () => {\n        $btnFilterArrows.forEach((arrow) => {\n            if (arrow.classList.contains('rotate__arrow')) {\n                arrow.classList.add('original__arrow');\n                arrow.classList.remove('rotate__arrow');\n            }\n            else {\n                arrow.classList.add('rotate__arrow');\n                arrow.classList.remove('original__arrow');\n            }\n        });\n        if ($filterModal.classList.contains('close__filters__animation')) {\n            $filterModal.classList.remove('close__filters__animation');\n            $filterModal.classList.add('open__filters__animation');\n        }\n        else {\n            $filterModal.classList.remove('open__filters__animation');\n            $filterModal.classList.add('close__filters__animation');\n        }\n    });\n}\n\n\n//# sourceURL=webpack://rest-countries-api/./src/scripts/features/interactions/openAndCloseFilters.ts?");

/***/ }),

/***/ "./src/scripts/features/interactions/showOverview.ts":
/*!***********************************************************!*\
  !*** ./src/scripts/features/interactions/showOverview.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   showOverview: () => (/* binding */ showOverview)\n/* harmony export */ });\nfunction showOverview() {\n    const $body = document.querySelector('body');\n    const $overviewContrieContainer = document.querySelector('#country__overview');\n    $overviewContrieContainer.classList.add('visible');\n    if ($overviewContrieContainer.classList.contains('visible')) {\n        const countrieHeader = document.querySelector('.header');\n        $body.style.overflow = 'hidden';\n        countrieHeader.style.position = 'fixed';\n        $overviewContrieContainer.innerHTML = '';\n    }\n}\n\n\n//# sourceURL=webpack://rest-countries-api/./src/scripts/features/interactions/showOverview.ts?");

/***/ }),

/***/ "./src/scripts/features/interactions/theme.ts":
/*!****************************************************!*\
  !*** ./src/scripts/features/interactions/theme.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   changeTheme: () => (/* binding */ changeTheme)\n/* harmony export */ });\nfunction changeTheme() {\n    const $btnChangeModeContainer = document.querySelector('.header__content__switch__theme');\n    const $btnChangeMode = document.querySelector('#dark--mode--btn');\n    const $moonInDarkMode = document.querySelector('.moon--dark-mode');\n    const $moonInLightMode = document.querySelector('.moon--light-mode');\n    const $darkArrow = document.querySelector('.filter--arrow--dark-mode');\n    const $lightArrow = document.querySelector('.filter--arrow--light-mode');\n    const $searchCountries = document.querySelector('#search--countries');\n    const $body = document.querySelector('body');\n    const savedTheme = localStorage.getItem('theme') || 'light';\n    applyTheme(savedTheme === 'dark');\n    $btnChangeModeContainer.addEventListener('click', () => {\n        const isDarkMode = !$body.classList.contains('dark-mode');\n        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');\n        applyTheme(isDarkMode);\n    });\n    function applyTheme(isDarkMode) {\n        $body.classList.toggle('dark-mode', isDarkMode);\n        $moonInLightMode.classList.toggle('visible', !isDarkMode);\n        $moonInLightMode.classList.toggle('hidden', isDarkMode);\n        $moonInDarkMode.classList.toggle('visible', isDarkMode);\n        $btnChangeMode.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';\n        if (isDarkMode) {\n            $searchCountries.style.backgroundImage = `url('./images/search-circle.svg')`;\n        }\n        else {\n            $searchCountries.style.backgroundImage = `url('./images/search-circle-outline.svg')`;\n        }\n        $lightArrow.classList.toggle('visible', !isDarkMode);\n        $lightArrow.classList.toggle('hidden', isDarkMode);\n        $darkArrow.classList.toggle('visible', isDarkMode);\n        $darkArrow.classList.toggle('hidden', !isDarkMode);\n    }\n}\n\n\n//# sourceURL=webpack://rest-countries-api/./src/scripts/features/interactions/theme.ts?");

/***/ }),

/***/ "./src/scripts/features/navigation/currentCountry.ts":
/*!***********************************************************!*\
  !*** ./src/scripts/features/navigation/currentCountry.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   countryClicked: () => (/* binding */ countryClicked),\n/* harmony export */   currentCountry: () => (/* binding */ currentCountry)\n/* harmony export */ });\n/* harmony import */ var _interactions_hideOverview__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interactions/hideOverview */ \"./src/scripts/features/interactions/hideOverview.ts\");\n/* harmony import */ var _render_countryClickedRender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../render/countryClickedRender */ \"./src/scripts/features/render/countryClickedRender.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\nlet countriesClicked = [];\nlet currentIndex = -1;\nfunction countryClicked() {\n    const countrieLinks = document.querySelectorAll('.country__link');\n    countrieLinks.forEach((link) => {\n        link.addEventListener('click', (ev) => __awaiter(this, void 0, void 0, function* () {\n            ev.preventDefault();\n            const $countryDiv = link.closest('.country');\n            const countryName = $countryDiv === null || $countryDiv === void 0 ? void 0 : $countryDiv.dataset.name;\n            if (!countryName)\n                return;\n            if (countriesClicked.length === 0) {\n                countriesClicked.push(countryName);\n            }\n            (0,_render_countryClickedRender__WEBPACK_IMPORTED_MODULE_1__.countryClickedRender)(countryName);\n        }));\n    });\n}\nfunction getBorderCountryClicked() {\n    const clickedLink = document.querySelectorAll('.country__border__links__link');\n    clickedLink.forEach(link => {\n        link.addEventListener('click', (ev) => {\n            ev.preventDefault();\n            const countryName = link.textContent.trim();\n            countriesClicked.push(countryName);\n            currentIndex = countriesClicked.length - 1;\n            (0,_render_countryClickedRender__WEBPACK_IMPORTED_MODULE_1__.countryClickedRender)(countryName);\n            updateNextButtonVisibility();\n        });\n    });\n}\nfunction backCountry() {\n    const $buttonBack = document.querySelector('.button__back__overview');\n    $buttonBack.addEventListener('click', () => {\n        if (currentIndex > 0) {\n            currentIndex--;\n            const countryName = countriesClicked[currentIndex];\n            (0,_render_countryClickedRender__WEBPACK_IMPORTED_MODULE_1__.countryClickedRender)(countryName);\n            updateNextButtonVisibility();\n        }\n        else {\n            countriesClicked = [];\n            (0,_interactions_hideOverview__WEBPACK_IMPORTED_MODULE_0__.hideOverview)();\n        }\n    });\n}\nfunction nextCountry() {\n    const $buttonNext = document.querySelector('.button__next__overview');\n    $buttonNext.addEventListener('click', () => {\n        if (currentIndex < countriesClicked.length - 1) {\n            currentIndex++;\n            const nextCountry = countriesClicked[currentIndex];\n            (0,_render_countryClickedRender__WEBPACK_IMPORTED_MODULE_1__.countryClickedRender)(nextCountry);\n        }\n    });\n    updateNextButtonVisibility();\n}\nfunction updateNextButtonVisibility() {\n    const $buttonNext = document.querySelector('.button__next__overview');\n    if (!$buttonNext)\n        return;\n    if (countriesClicked.length === 1 || currentIndex >= countriesClicked.length - 1) {\n        $buttonNext.classList.add('hidden');\n    }\n    else {\n        $buttonNext.classList.remove('hidden');\n    }\n}\nfunction currentCountry() {\n    getBorderCountryClicked();\n    backCountry();\n    nextCountry();\n}\n\n\n//# sourceURL=webpack://rest-countries-api/./src/scripts/features/navigation/currentCountry.ts?");

/***/ }),

/***/ "./src/scripts/features/navigation/searchCountry.ts":
/*!**********************************************************!*\
  !*** ./src/scripts/features/navigation/searchCountry.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   performCountrySearch: () => (/* binding */ performCountrySearch),\n/* harmony export */   searchCountry: () => (/* binding */ searchCountry)\n/* harmony export */ });\n/* harmony import */ var _api_getCountries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/getCountries */ \"./src/scripts/api/getCountries.ts\");\n/* harmony import */ var _state_globalData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../state/globalData */ \"./src/scripts/state/globalData.ts\");\n/* harmony import */ var _render_renderCountries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../render/renderCountries */ \"./src/scripts/features/render/renderCountries.ts\");\n/* harmony import */ var _currentCountry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./currentCountry */ \"./src/scripts/features/navigation/currentCountry.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\n\nfunction searchCountry() {\n    const $searchField = document.querySelector('#search--countries');\n    const $countriesContainer = document.querySelector('#countries');\n    $searchField.addEventListener('input', () => __awaiter(this, void 0, void 0, function* () {\n        $countriesContainer.innerHTML = '';\n        if ($searchField.value !== '') {\n            performCountrySearch();\n        }\n        else {\n            getFilterActive();\n        }\n    }));\n}\nfunction performCountrySearch() {\n    return __awaiter(this, void 0, void 0, function* () {\n        const $searchField = document.querySelector('#search--countries');\n        const $countriesContainer = document.querySelector('#countries');\n        $countriesContainer.innerHTML = '';\n        const data = yield (0,_api_getCountries__WEBPACK_IMPORTED_MODULE_0__.getCountries)(`name/${$searchField.value}`);\n        data.slice(0, 8).forEach((country) => {\n            const flag = country.flags.svg;\n            const name = country.name.common;\n            const population = country.population.toLocaleString('en-US');\n            const region = country.region;\n            const capital = country.capital;\n            (0,_render_renderCountries__WEBPACK_IMPORTED_MODULE_2__.renderCountries)(flag, name, population, region, capital);\n        });\n        getFilterActive();\n        (0,_currentCountry__WEBPACK_IMPORTED_MODULE_3__.countryClicked)();\n    });\n}\nfunction getFilterActive() {\n    const $regions = Array.from(document.querySelectorAll('.nav__filter__filters__continent'));\n    const activeRegion = $regions.find(region => region.classList.contains('active__filter'));\n    const verify = activeRegion ? activeRegion.dataset.region : '';\n    filter(verify);\n}\nfunction filter(filter) {\n    const allCountries = (0,_state_globalData__WEBPACK_IMPORTED_MODULE_1__.getAllCountries)();\n    const $searchField = document.querySelector('#search--countries');\n    const $countriesContainer = document.querySelector('#countries');\n    const $message = document.querySelector('#message');\n    const value = $searchField.value.toLowerCase().trim();\n    if (value !== '' && filter !== '') {\n        const country = allCountries.filter(country => country.name.common.toLowerCase().includes(value) &&\n            (!filter || country.region === filter));\n        if (country.length === 0)\n            return $message.textContent = 'No results found.';\n        $countriesContainer.innerHTML = '';\n        $message.textContent = '';\n        country.slice(0, 8).forEach(country => {\n            const flag = country.flags.svg;\n            const name = country.name.common;\n            const population = country.population.toLocaleString('en-US');\n            const region = country.region;\n            const capital = country.capital;\n            (0,_render_renderCountries__WEBPACK_IMPORTED_MODULE_2__.renderCountries)(flag, name, population, region, capital);\n        });\n    }\n    if (value === '' && filter !== '') {\n        const country = allCountries.filter(country => country.region === filter);\n        if (country.length === 0)\n            return $message.textContent = 'No results found.';\n        $countriesContainer.innerHTML = '';\n        $message.textContent = '';\n        country.slice(0, 8).forEach(country => {\n            const flag = country.flags.svg;\n            const name = country.name.common;\n            const population = country.population.toLocaleString('en-US');\n            const region = country.region;\n            const capital = country.capital;\n            (0,_render_renderCountries__WEBPACK_IMPORTED_MODULE_2__.renderCountries)(flag, name, population, region, capital);\n        });\n    }\n}\n\n\n//# sourceURL=webpack://rest-countries-api/./src/scripts/features/navigation/searchCountry.ts?");

/***/ }),

/***/ "./src/scripts/features/navigation/selectRegion.ts":
/*!*********************************************************!*\
  !*** ./src/scripts/features/navigation/selectRegion.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   selectRegion: () => (/* binding */ selectRegion)\n/* harmony export */ });\n/* harmony import */ var _state_globalData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../state/globalData */ \"./src/scripts/state/globalData.ts\");\n/* harmony import */ var _render_renderCountries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../render/renderCountries */ \"./src/scripts/features/render/renderCountries.ts\");\n/* harmony import */ var _currentCountry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./currentCountry */ \"./src/scripts/features/navigation/currentCountry.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\nfunction selectRegion() {\n    const $filterModal = document.querySelector('.nav__filter__filters');\n    const $regions = document.querySelectorAll('.nav__filter__filters__continent');\n    const $countriesContainer = document.querySelector('#countries');\n    const $message = document.querySelector('#message');\n    const $searchField = document.querySelector('#search--countries');\n    const $buttonFilter = document.querySelector('#filter--btn');\n    $regions.forEach((region) => {\n        region.addEventListener('click', () => __awaiter(this, void 0, void 0, function* () {\n            const data = (0,_state_globalData__WEBPACK_IMPORTED_MODULE_0__.getAllCountries)();\n            $regions.forEach(r => r.classList.remove('active__filter'));\n            region.classList.add('active__filter');\n            $filterModal.classList.remove('open__filters__animation');\n            $filterModal.classList.add('close__filters__animation');\n            const nameRegion = region.dataset.region;\n            $buttonFilter.textContent = nameRegion;\n            $buttonFilter.classList.add('active__filter');\n            $countriesContainer.innerHTML = '';\n            $message.textContent = '';\n            const search = $searchField.value.toLowerCase();\n            const filteredCountries = data.filter((countrie) => {\n                const matchesContinent = countrie.region.toLowerCase() === nameRegion.toLowerCase();\n                const matchesName = countrie.name.common.toLowerCase().includes(search);\n                return matchesContinent && (search === '' || matchesName);\n            });\n            if (filteredCountries.length > 0) {\n                filteredCountries.slice(0, 8).forEach((countrie) => {\n                    (0,_render_renderCountries__WEBPACK_IMPORTED_MODULE_1__.renderCountries)(countrie.flags.svg, countrie.name.common, countrie.population.toLocaleString('en-US'), countrie.region, countrie.capital);\n                });\n            }\n            else {\n                $message.textContent = 'No results found.';\n            }\n            (0,_currentCountry__WEBPACK_IMPORTED_MODULE_2__.countryClicked)();\n        }));\n    });\n}\n\n\n//# sourceURL=webpack://rest-countries-api/./src/scripts/features/navigation/selectRegion.ts?");

/***/ }),

/***/ "./src/scripts/features/render/countryClickedRender.ts":
/*!*************************************************************!*\
  !*** ./src/scripts/features/render/countryClickedRender.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   countryClickedRender: () => (/* binding */ countryClickedRender)\n/* harmony export */ });\n/* harmony import */ var _api_getCountries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/getCountries */ \"./src/scripts/api/getCountries.ts\");\n/* harmony import */ var _state_globalData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../state/globalData */ \"./src/scripts/state/globalData.ts\");\n/* harmony import */ var _interactions_showOverview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../interactions/showOverview */ \"./src/scripts/features/interactions/showOverview.ts\");\n/* harmony import */ var _navigation_currentCountry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../navigation/currentCountry */ \"./src/scripts/features/navigation/currentCountry.ts\");\n/* harmony import */ var _renderDetailsCountry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./renderDetailsCountry */ \"./src/scripts/features/render/renderDetailsCountry.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\n\n\nfunction countryClickedRender(countryName) {\n    return __awaiter(this, void 0, void 0, function* () {\n        const data = yield (0,_api_getCountries__WEBPACK_IMPORTED_MODULE_0__.getCountries)(`name/${countryName}`);\n        if (!data || data.length === 0)\n            return;\n        const country = data[0];\n        const countrieFlag = country.flags.svg;\n        const countrieName = country.name.common;\n        const countrieNativeName = country.name.official;\n        const countriePopulation = country.population.toLocaleString('en-US');\n        const countrieRegion = country.region;\n        const countrieSubRegion = country.subregion;\n        const countrieCapital = country.capital;\n        const countrieTopLevelDomain = country.tld;\n        const countrieCurrencies = () => {\n            const currencies = country.currencies;\n            for (const type in currencies) {\n                const name = currencies[type].name;\n                return name;\n            }\n        };\n        const countrieLanguages = () => {\n            const languages = country.languages;\n            const languageValues = Object.values(languages);\n            return languageValues.join(', ');\n        };\n        const countrieBorders = () => {\n            const countryBorders = country.borders;\n            const allCountries = (0,_state_globalData__WEBPACK_IMPORTED_MODULE_1__.getAllCountries)();\n            const countryCode = country.cca3;\n            let countryBordersFound = [];\n            if (countryBorders) {\n                countryBorders.forEach((borderCode) => {\n                    if (borderCode === countryCode)\n                        return;\n                    const countries = allCountries.find(c => c.cca3 === borderCode);\n                    if (countries) {\n                        countryBordersFound.push(countries.name.common);\n                    }\n                });\n            }\n            return countryBordersFound;\n        };\n        (0,_interactions_showOverview__WEBPACK_IMPORTED_MODULE_2__.showOverview)();\n        (0,_renderDetailsCountry__WEBPACK_IMPORTED_MODULE_4__.renderDetailsCountry)(countrieFlag, countrieName, countrieNativeName, countriePopulation, countrieRegion, countrieSubRegion, countrieCapital, countrieTopLevelDomain, countrieCurrencies(), countrieLanguages(), countrieBorders());\n        (0,_navigation_currentCountry__WEBPACK_IMPORTED_MODULE_3__.currentCountry)();\n    });\n}\n\n\n//# sourceURL=webpack://rest-countries-api/./src/scripts/features/render/countryClickedRender.ts?");

/***/ }),

/***/ "./src/scripts/features/render/renderCountries.ts":
/*!********************************************************!*\
  !*** ./src/scripts/features/render/renderCountries.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderCountries: () => (/* binding */ renderCountries)\n/* harmony export */ });\nfunction renderCountries(flag, name, population, region, capital) {\n    const countrieLink = document.createElement('a');\n    const countrieContainer = document.createElement('div');\n    const countrieFlag = document.createElement('img');\n    const countrieName = document.createElement('h2');\n    const countrieInfosContainer = document.createElement('div');\n    const countriePopulationInfoTitle = document.createElement('span');\n    const countriePopulationInfoData = document.createElement('span');\n    const countrieRegionInfoTitle = document.createElement('span');\n    const countrieRegionInfoData = document.createElement('span');\n    const countrieCapitalInfoTitle = document.createElement('span');\n    const countrieCapitalInfoData = document.createElement('span');\n    countrieLink.classList.add('country__link');\n    countrieContainer.classList.add('country');\n    countrieContainer.dataset.name = `${name}`;\n    countrieFlag.classList.add('country__flag');\n    countrieName.classList.add('country__name');\n    countrieInfosContainer.classList.add('country__infos');\n    const infoTitle = [countriePopulationInfoTitle, countrieRegionInfoTitle, countrieCapitalInfoTitle];\n    const infoData = [countriePopulationInfoData, countrieRegionInfoData, countrieCapitalInfoData];\n    infoTitle.forEach((title) => {\n        title.classList.add('country__infos__info__title');\n    });\n    infoData.forEach((data) => {\n        data.classList.add('country__infos__info__data');\n    });\n    countrieFlag.src = `${flag}`;\n    countrieFlag.alt = `Flag of the country ${name}`;\n    countrieName.textContent = `${name}`;\n    countriePopulationInfoTitle.textContent = `Population:`;\n    countriePopulationInfoData.textContent = `${population}`;\n    countrieRegionInfoTitle.textContent = `Region:`;\n    countrieRegionInfoData.textContent = `${region}`;\n    countrieCapitalInfoTitle.textContent = `Capital:`;\n    countrieCapitalInfoData.textContent = `${capital}`;\n    countriePopulationInfoTitle.append(countriePopulationInfoData);\n    countrieRegionInfoTitle.append(countrieRegionInfoData);\n    countrieCapitalInfoTitle.append(countrieCapitalInfoData);\n    countrieInfosContainer.append(countrieName, ...infoTitle);\n    countrieContainer.append(countrieLink, countrieFlag, countrieInfosContainer);\n    document.querySelector('#countries').append(countrieContainer);\n}\n\n\n//# sourceURL=webpack://rest-countries-api/./src/scripts/features/render/renderCountries.ts?");

/***/ }),

/***/ "./src/scripts/features/render/renderDetailsCountry.ts":
/*!*************************************************************!*\
  !*** ./src/scripts/features/render/renderDetailsCountry.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderDetailsCountry: () => (/* binding */ renderDetailsCountry)\n/* harmony export */ });\nfunction renderDetailsCountry(flag, name, nativeName, population, region, subRegion, capital, topLevelDomain, currencies, languages, borders) {\n    const countrieContainer = document.createElement('div');\n    const countrieFlagContainer = document.createElement('div');\n    const countrieButtonsNavContainer = document.createElement('div');\n    const buttonBack = document.createElement('button');\n    const buttonNext = document.createElement('button');\n    const countrieFlag = document.createElement('img');\n    const countrieDetails = document.createElement('div');\n    const countrieName = document.createElement('h2');\n    const countrieInfosContainer = document.createElement('div');\n    const countrieInfosColumn1 = document.createElement('div');\n    const countrieInfosColumn2 = document.createElement('div');\n    const countrieNativeNameInfoTitle = document.createElement('span');\n    const countrieNativeNameInfoData = document.createElement('span');\n    const countriePopulationInfoTitle = document.createElement('span');\n    const countriePopulationInfoData = document.createElement('span');\n    const countrieRegionInfoTitle = document.createElement('span');\n    const countrieRegionInfoData = document.createElement('span');\n    const countrieSubregionInfoTitle = document.createElement('span');\n    const countrieSubregionInfoData = document.createElement('span');\n    const countrieCapitalInfoTitle = document.createElement('span');\n    const countrieCapitalInfoData = document.createElement('span');\n    const countrieTopLevelDomainInfoTitle = document.createElement('span');\n    const countrieTopLevelDomainInfoData = document.createElement('span');\n    const countrieCurrenciesInfoTitle = document.createElement('span');\n    const countrieCurrenciesInfoData = document.createElement('span');\n    const countrieLanguagesInfoTitle = document.createElement('span');\n    const countrieLanguagesInfoData = document.createElement('span');\n    countrieInfosColumn1.append();\n    const column1Infos = [\n        countrieNativeNameInfoTitle,\n        countriePopulationInfoTitle,\n        countrieRegionInfoTitle,\n        countrieSubregionInfoTitle,\n        countrieCapitalInfoTitle\n    ];\n    const column2Infos = [\n        countrieTopLevelDomainInfoTitle,\n        countrieCurrenciesInfoTitle,\n        countrieLanguagesInfoTitle\n    ];\n    const infoTitle = [\n        countrieNativeNameInfoTitle,\n        countriePopulationInfoTitle,\n        countrieRegionInfoTitle,\n        countrieSubregionInfoTitle,\n        countrieCapitalInfoTitle,\n        countrieTopLevelDomainInfoTitle,\n        countrieCurrenciesInfoTitle,\n        countrieLanguagesInfoTitle\n    ];\n    const infoData = [\n        countrieNativeNameInfoData,\n        countriePopulationInfoData,\n        countrieRegionInfoData,\n        countrieSubregionInfoData,\n        countrieCapitalInfoData,\n        countrieTopLevelDomainInfoData,\n        countrieCurrenciesInfoData,\n        countrieLanguagesInfoData\n    ];\n    const countrieBorderContainerOverview = document.createElement('div');\n    const countrieBorderTitleOverview = document.createElement('span');\n    const countrieBorderLinksContainerOverview = document.createElement('div');\n    countrieContainer.classList.add('country__overview');\n    countrieFlagContainer.classList.add('country__flag__btn__overview');\n    countrieButtonsNavContainer.classList.add('country__btn__nav__overview');\n    buttonBack.classList.add('button__back__overview');\n    buttonNext.classList.add('button__next__overview');\n    countrieFlag.classList.add('country__flag__overview');\n    countrieDetails.classList.add('country__details__overview');\n    countrieName.classList.add('country__name__overview');\n    countrieInfosContainer.classList.add('country__infos__overview');\n    countrieInfosColumn1.classList.add('country__infos__overview__column1');\n    countrieInfosColumn2.classList.add('country__infos__overview__column2');\n    infoTitle.forEach((title) => {\n        title.classList.add('country__infos__info__title__overview');\n    });\n    infoData.forEach((data) => {\n        data.classList.add('country__infos__info__data__overview');\n    });\n    countrieBorderContainerOverview.classList.add('country__border__overview');\n    countrieBorderTitleOverview.classList.add('country__border__title__overview');\n    countrieBorderLinksContainerOverview.classList.add('country__border__links');\n    if (!borders || borders.length === 0) {\n        countrieBorderTitleOverview.textContent = 'Border Countries: None';\n        countrieBorderLinksContainerOverview.classList.add('hidden');\n    }\n    else {\n        countrieBorderTitleOverview.textContent = 'Border Countries:';\n        countrieBorderLinksContainerOverview.classList.remove('hidden');\n        countrieBorderLinksContainerOverview.innerHTML = '';\n        for (let i = 0; i < borders.length; i++) {\n            const border = document.createElement('a');\n            border.classList.add('country__border__links__link');\n            border.textContent = borders[i];\n            border.dataset.name = borders[i];\n            countrieBorderLinksContainerOverview.append(border);\n        }\n    }\n    buttonBack.textContent = 'Back';\n    buttonNext.textContent = 'Next';\n    countrieFlag.src = `${flag}`;\n    countrieFlag.alt = `Flag of the country ${name}`;\n    countrieName.textContent = `${name}`;\n    countrieName.dataset.name = `${name}`;\n    countrieNativeNameInfoTitle.textContent = `Native Name:`;\n    countrieNativeNameInfoData.textContent = `${nativeName}`;\n    countriePopulationInfoTitle.textContent = `Population:`;\n    countriePopulationInfoData.textContent = `${population}`;\n    countrieRegionInfoTitle.textContent = `Region:`;\n    countrieRegionInfoData.textContent = `${region}`;\n    countrieSubregionInfoTitle.textContent = `Sub Region:`;\n    countrieSubregionInfoData.textContent = `${subRegion}`;\n    countrieCapitalInfoTitle.textContent = `Capital:`;\n    countrieCapitalInfoData.textContent = `${capital}`;\n    countrieTopLevelDomainInfoTitle.textContent = `Top Level Domain:`;\n    countrieTopLevelDomainInfoData.textContent = `${topLevelDomain}`;\n    countrieCurrenciesInfoTitle.textContent = `Currencies:`;\n    countrieCurrenciesInfoData.textContent = `${currencies}`;\n    countrieLanguagesInfoTitle.textContent = `Languages:`;\n    countrieLanguagesInfoData.textContent = `${languages}`;\n    countrieBorderContainerOverview.append(countrieBorderTitleOverview, countrieBorderLinksContainerOverview);\n    countrieNativeNameInfoTitle.append(countrieNativeNameInfoData);\n    countriePopulationInfoTitle.append(countriePopulationInfoData);\n    countrieRegionInfoTitle.append(countrieRegionInfoData);\n    countrieSubregionInfoTitle.append(countrieSubregionInfoData);\n    countrieCapitalInfoTitle.append(countrieCapitalInfoData);\n    countrieTopLevelDomainInfoTitle.append(countrieTopLevelDomainInfoData);\n    countrieCurrenciesInfoTitle.append(countrieCurrenciesInfoData);\n    countrieLanguagesInfoTitle.append(countrieLanguagesInfoData);\n    countrieInfosColumn1.append(...column1Infos);\n    countrieInfosColumn2.append(...column2Infos);\n    countrieInfosContainer.append(countrieInfosColumn1, countrieInfosColumn2);\n    countrieDetails.append(countrieName, countrieInfosContainer, countrieBorderContainerOverview);\n    countrieButtonsNavContainer.append(buttonBack, buttonNext);\n    countrieFlagContainer.append(countrieButtonsNavContainer, countrieFlag);\n    countrieContainer.append(countrieFlagContainer, countrieDetails);\n    const $container = document.querySelector('#country__overview');\n    $container.innerHTML = '';\n    $container.append(countrieContainer);\n}\n\n\n//# sourceURL=webpack://rest-countries-api/./src/scripts/features/render/renderDetailsCountry.ts?");

/***/ }),

/***/ "./src/scripts/features/render/showCountries.ts":
/*!******************************************************!*\
  !*** ./src/scripts/features/render/showCountries.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   showCountries: () => (/* binding */ showCountries)\n/* harmony export */ });\n/* harmony import */ var _api_getCountries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/getCountries */ \"./src/scripts/api/getCountries.ts\");\n/* harmony import */ var _navigation_currentCountry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navigation/currentCountry */ \"./src/scripts/features/navigation/currentCountry.ts\");\n/* harmony import */ var _renderCountries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderCountries */ \"./src/scripts/features/render/renderCountries.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\nfunction showCountries() {\n    return __awaiter(this, void 0, void 0, function* () {\n        const data = yield (0,_api_getCountries__WEBPACK_IMPORTED_MODULE_0__.getCountries)();\n        const specificCountries = [\"Germany\", \"United States\", \"Brazil\", \"Iceland\", \"Afghanistan\", \"Åland Islands\", \"Albania\", \"Algeria\"];\n        specificCountries.forEach((countryName) => {\n            const country = data.find((c) => c.name.common === countryName);\n            if (country) {\n                const flag = country.flags.svg;\n                const name = country.name.common;\n                const population = country.population.toLocaleString('en-US');\n                const region = country.region;\n                const capital = country.capital;\n                (0,_renderCountries__WEBPACK_IMPORTED_MODULE_2__.renderCountries)(flag, name, population, region, capital);\n            }\n        });\n        (0,_navigation_currentCountry__WEBPACK_IMPORTED_MODULE_1__.countryClicked)();\n    });\n}\n\n\n//# sourceURL=webpack://rest-countries-api/./src/scripts/features/render/showCountries.ts?");

/***/ }),

/***/ "./src/scripts/index.ts":
/*!******************************!*\
  !*** ./src/scripts/index.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _features_interactions_openAndCloseFilters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./features/interactions/openAndCloseFilters */ \"./src/scripts/features/interactions/openAndCloseFilters.ts\");\n/* harmony import */ var _features_interactions_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./features/interactions/theme */ \"./src/scripts/features/interactions/theme.ts\");\n/* harmony import */ var _features_navigation_searchCountry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./features/navigation/searchCountry */ \"./src/scripts/features/navigation/searchCountry.ts\");\n/* harmony import */ var _features_navigation_selectRegion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./features/navigation/selectRegion */ \"./src/scripts/features/navigation/selectRegion.ts\");\n/* harmony import */ var _features_render_showCountries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./features/render/showCountries */ \"./src/scripts/features/render/showCountries.ts\");\n/* harmony import */ var _features_interactions_clearFilters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./features/interactions/clearFilters */ \"./src/scripts/features/interactions/clearFilters.ts\");\n/* harmony import */ var _assets_styles_components_country_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/styles/components/country.css */ \"./src/assets/styles/components/country.css\");\n/* harmony import */ var _assets_styles_components_nav_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/styles/components/nav.css */ \"./src/assets/styles/components/nav.css\");\n/* harmony import */ var _assets_styles_components_header_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/styles/components/header.css */ \"./src/assets/styles/components/header.css\");\n/* harmony import */ var _assets_styles_pages_index_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/styles/pages/index.css */ \"./src/assets/styles/pages/index.css\");\n/* harmony import */ var _assets_styles_pages_overviewCountry_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/styles/pages/overviewCountry.css */ \"./src/assets/styles/pages/overviewCountry.css\");\n/* harmony import */ var _assets_styles_state_state_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/styles/state/state.css */ \"./src/assets/styles/state/state.css\");\n/* harmony import */ var _assets_styles_utils_animations_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../assets/styles/utils/animations.css */ \"./src/assets/styles/utils/animations.css\");\n/* harmony import */ var _assets_styles_utils_reset_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../assets/styles/utils/reset.css */ \"./src/assets/styles/utils/reset.css\");\n/* harmony import */ var _assets_styles_utils_variables_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../assets/styles/utils/variables.css */ \"./src/assets/styles/utils/variables.css\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n(0,_features_interactions_theme__WEBPACK_IMPORTED_MODULE_1__.changeTheme)();\n(0,_features_interactions_openAndCloseFilters__WEBPACK_IMPORTED_MODULE_0__.openAndCloseFilters)();\n(0,_features_interactions_clearFilters__WEBPACK_IMPORTED_MODULE_5__.clearFilters)();\n(0,_features_navigation_searchCountry__WEBPACK_IMPORTED_MODULE_2__.searchCountry)();\n(0,_features_navigation_selectRegion__WEBPACK_IMPORTED_MODULE_3__.selectRegion)();\n(0,_features_render_showCountries__WEBPACK_IMPORTED_MODULE_4__.showCountries)();\n\n\n//# sourceURL=webpack://rest-countries-api/./src/scripts/index.ts?");

/***/ }),

/***/ "./src/scripts/state/globalData.ts":
/*!*****************************************!*\
  !*** ./src/scripts/state/globalData.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   allCountries: () => (/* binding */ allCountries),\n/* harmony export */   getAllCountries: () => (/* binding */ getAllCountries),\n/* harmony export */   setAllCountries: () => (/* binding */ setAllCountries)\n/* harmony export */ });\nlet allCountries = [];\nfunction setAllCountries(data) {\n    allCountries = data;\n}\nfunction getAllCountries() {\n    return allCountries;\n}\n\n\n//# sourceURL=webpack://rest-countries-api/./src/scripts/state/globalData.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/index.ts");
/******/ 	
/******/ })()
;