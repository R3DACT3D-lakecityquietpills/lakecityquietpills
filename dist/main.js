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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _loadPage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadPage.js */ \"./src/loadPage.js\");\n/* harmony import */ var _loadMenu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadMenu.js */ \"./src/loadMenu.js\");\n/* harmony import */ var _loadAbout_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadAbout.js */ \"./src/loadAbout.js\");\n/* harmony import */ var _loadSidebars_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loadSidebars.js */ \"./src/loadSidebars.js\");\n\n\n\n\n\n(0,_loadPage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_loadSidebars_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\nconst homeBtn = document.getElementById('home');\nhomeBtn.addEventListener('click', _loadPage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\nconst menuBtn = document.getElementById('menu');\nmenuBtn.addEventListener('click', _loadMenu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\nconst aboutBtn = document.getElementById('about');\naboutBtn.addEventListener('click', _loadAbout_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/loadAbout.js":
/*!**************************!*\
  !*** ./src/loadAbout.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction loadAbout() {\n    document.getElementById('content').innerHTML = \"\";\n    const contentElement = document.getElementById(\"content\");\n\n    //create headline\n    const headline = document.createElement(\"h2\");\n    const headText = document.createTextNode(\"About\");\n    headline.appendChild(headText);\n    //append headline to page\n    contentElement.appendChild(headline);\n\n    //create image\n    const homepageImage = document.createElement(\"img\");\n    homepageImage.setAttribute('src', '../media/greyabstract.jpg')\n    homepageImage.setAttribute('width', '50%');\n    //append image to page\n    contentElement.appendChild(homepageImage);\n\n    //create text\n    const homeText = document.createElement(\"p\");\n    const homeTextNode = document.createTextNode(\"sample text\");\n    homeText.appendChild(homeTextNode);\n    //append text to page\n    contentElement.appendChild(homeText);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadAbout);\n\n//# sourceURL=webpack://restaurant/./src/loadAbout.js?");

/***/ }),

/***/ "./src/loadMenu.js":
/*!*************************!*\
  !*** ./src/loadMenu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction loadMenu() {\n    document.getElementById('content').innerHTML = \"\";\n    const contentElement = document.getElementById(\"content\");\n\n    //create headline\n    const headline = document.createElement(\"h2\");\n    const headText = document.createTextNode(\"Menu\");\n    headline.appendChild(headText);\n    //append headline to page\n    contentElement.appendChild(headline);\n\n    //create image\n    const homepageImage = document.createElement(\"img\");\n    homepageImage.setAttribute('src', '../media/greyabstract.jpg')\n    homepageImage.setAttribute('width', '50%');\n    //append image to page\n    contentElement.appendChild(homepageImage);\n\n    //create text\n    const homeText = document.createElement(\"p\");\n    const homeTextNode = document.createTextNode(\"sample text\");\n    homeText.appendChild(homeTextNode);\n    //append text to page\n    contentElement.appendChild(homeText);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\n\n//# sourceURL=webpack://restaurant/./src/loadMenu.js?");

/***/ }),

/***/ "./src/loadPage.js":
/*!*************************!*\
  !*** ./src/loadPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction loadHome() {\n    //clear current content\n    document.getElementById('content').innerHTML = \"\";\n    const contentElement = document.getElementById(\"content\");\n\n    //create div container 1\n    const mydiv = document.createElement(\"div\");\n    mydiv.id = 'mydiv';\n    contentElement.appendChild(mydiv);\n\n    //create headline, append to div 1\n    const headline = document.createElement(\"h2\");\n    const headText = document.createTextNode(\"Homepage\");\n    headline.appendChild(headText);\n    mydiv.appendChild(headline);\n\n    //create image, append to div 1\n    const homepageImage = document.createElement(\"img\");\n    homepageImage.setAttribute('src', '../media/globe1.gif');\n    // homepageImage.setAttribute('src', '../media/greyabstract.jpg')\n    // homepageImage.setAttribute('width', '100%');\n    mydiv.appendChild(homepageImage);\n\n    //create text, append to div 1\n    const homeText = document.createElement(\"p\");\n    const homeTextNode = document.createTextNode(\"Webcore (or Old Web) is an aesthetic expresses nostalgia for Internet culture of the early 1990s to Late 2000s (spanning from roughly the release of the World Wide Web up until Flat Design and smartphones were popularized, so around ~2015).\");\n    homeText.appendChild(homeTextNode);\n    mydiv.appendChild(homeText);\n\n    //create ad banner, append to main content\n    const ad = document.createElement('img');\n    ad.setAttribute('src', \"../media/simbanner.gif\");\n    ad.classList = \"banner\";\n    contentElement.appendChild(ad);\n\n    //create div container 2\n    const mydiv2 = document.createElement(\"div\");\n    mydiv2.id = 'mydiv2';\n    contentElement.appendChild(mydiv2);\n\n    //create headline, append to div 2\n    const header2 = document.createElement(\"h2\");\n    const headerText2 = document.createTextNode(\"Woo hoo!\");\n    header2.appendChild(headerText2);\n    mydiv2.appendChild(header2);\n\n    //create image, append to div 2\n    const div2Img = document.createElement(\"img\");\n    div2Img.setAttribute('src', '../media/gloves.gif');\n    // homepageImage.setAttribute('src', '../media/greyabstract.jpg')\n    // homepageImage.setAttribute('width', '100%');\n    mydiv2.appendChild(div2Img);\n\n    //create text, append to div 2\n    const divText2 = document.createElement(\"p\");\n    const divTextNode2 = document.createTextNode(\"A yellow sea sponge named SpongeBob SquarePants, who enjoys being a cook at Krusty Krab, lives in the Pacific Ocean. He embarks on various adventures with his friends at Bikini Bottom.\");\n    divText2.appendChild(divTextNode2);\n    mydiv2.appendChild(divText2);\n\n    //create ad banner 2, append to main content\n    const ad2 = document.createElement('img');\n    ad2.setAttribute('src', \"../media/sims2.gif\");\n    ad2.classList = \"banner\";\n    contentElement.appendChild(ad2);\n\n    // const ufo = document.createElement(\"img\");\n    // ufo.setAttribute('src', '../media/ufobar.gif');\n    // contentElement.appendChild(ufo);\n    \n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n\n//# sourceURL=webpack://restaurant/./src/loadPage.js?");

/***/ }),

/***/ "./src/loadSidebars.js":
/*!*****************************!*\
  !*** ./src/loadSidebars.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nfunction loadSidebars() {\n    // const leftSidebarElement = document.getElementById(\"leftSidebar\");\n\n    // //create image\n    // const leftSidebarImage = document.createElement(\"img\");\n    // leftSidebarImage.setAttribute('src', '../media/oil_lamp.gif');\n    // //append image to page\n    // leftSidebarElement.appendChild(leftSidebarImage);\n\n    // const rightSidebarElement = document.getElementById(\"rightSidebar\");\n\n    // //create image\n    // const rightSidebarImage = document.createElement(\"img\");\n    // rightSidebarImage.setAttribute('src', '../media/oil_lamp.gif')\n    // // rightSidebarImage.width = \"130px\";\n    // // leftSidebarImage.setAttribute('width', '10%');\n    // //append image to page\n    // rightSidebarElement.appendChild(rightSidebarImage);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadSidebars);\n\n\n\n//# sourceURL=webpack://restaurant/./src/loadSidebars.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;