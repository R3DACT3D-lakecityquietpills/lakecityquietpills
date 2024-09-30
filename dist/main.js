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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _loadPage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadPage.js */ \"./src/loadPage.js\");\n/* harmony import */ var _loadMenu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadMenu.js */ \"./src/loadMenu.js\");\n/* harmony import */ var _loadAbout_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadAbout.js */ \"./src/loadAbout.js\");\n/* harmony import */ var _loadSidebars_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loadSidebars.js */ \"./src/loadSidebars.js\");\n\n\n\n\n\n// loadHome();\n(0,_loadMenu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n// loadSidebars();\n\nconst homeBtn = document.getElementById('home');\nhomeBtn.addEventListener('click', _loadPage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\nconst menuBtn = document.getElementById('menu');\nmenuBtn.addEventListener('click', _loadMenu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\nconst aboutBtn = document.getElementById('about');\naboutBtn.addEventListener('click', _loadAbout_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/loadAbout.js":
/*!**************************!*\
  !*** ./src/loadAbout.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction loadAbout() {\n    //clear current content\n    document.getElementById('content').innerHTML = \"\";\n    const contentElement = document.getElementById(\"content\");\n\n    //create headline, append to div 1\n    const headline = document.createElement(\"h2\");\n    const headText = document.createTextNode(\"About\");\n    headline.appendChild(headText);\n    contentElement.appendChild(headline);\n\n    //create div container 1\n    const mydiv = document.createElement(\"div\");\n    mydiv.id = 'aboutDiv';\n    contentElement.appendChild(mydiv);\n\n    \n    \n\n\n    //create image, append to div 1\n    const homepageImage = document.createElement(\"img\");\n    homepageImage.setAttribute('src', './media/globe1.gif');\n    homepageImage.classList = \"homepageImg\";\n    // homepageImage.setAttribute('src', '../media/greyabstract.jpg')\n    // homepageImage.setAttribute('width', '100%');\n    mydiv.appendChild(homepageImage);\n\n    //create text, append to div 1\n    const homeText = document.createElement(\"p\");\n    const homeTextNode = document.createTextNode(\"Webcore (or Old Web) is an aesthetic expresses nostalgia for Internet culture of the early 1990s to Late 2000s (spanning from roughly the release of the World Wide Web up until Flat Design and smartphones were popularized, so around ~2015).\");\n    homeText.appendChild(homeTextNode);\n    mydiv.appendChild(homeText);\n\n    \n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadAbout);\n\n//# sourceURL=webpack://restaurant/./src/loadAbout.js?");

/***/ }),

/***/ "./src/loadMenu.js":
/*!*************************!*\
  !*** ./src/loadMenu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction loadMenu() {\n    document.getElementById('content').innerHTML = \"\";\n    const contentElement = document.getElementById(\"content\");\n\n    //create headline\n    const headline = document.createElement(\"h2\");\n    const headText = document.createTextNode(\"Menu\");\n    headline.appendChild(headText);\n    contentElement.appendChild(headline);\n\n    //MENU\n\n        //create menu div\n        const menuContainer = document.createElement(\"div\");\n        menuContainer.id = \"menuContainer\";\n        contentElement.appendChild(menuContainer);\n\n        //FoodCard 1\n        //div\n        const foodCard1 = document.createElement(\"div\");\n        foodCard1.className = \"foodCard\";\n        menuContainer.appendChild(foodCard1)\n\n        //Image\n        const foodImage = document.createElement(\"img\");\n        foodImage.setAttribute('src', './media/burger.gif')\n        foodImage.setAttribute('width', '50%');\n        //append image to page\n        foodCard1.appendChild(foodImage);\n\n        //Text\n        const foodText = document.createElement(\"p\");\n        const foodTextNode = document.createTextNode(\"burger\");\n        foodText.appendChild(foodTextNode);\n        //append text to page\n        foodCard1.appendChild(foodText);\n\n\n        //FoodCard 2\n        //div\n        const foodCard2 = document.createElement(\"div\");\n        foodCard2.className = \"foodCard\";\n        menuContainer.appendChild(foodCard2)\n\n        //Image\n        const foodImage2 = document.createElement(\"img\");\n        foodImage2.setAttribute('src', './media/burger.gif')\n        foodImage2.setAttribute('width', '50%');\n        //append image to page\n        foodCard2.appendChild(foodImage2);\n\n        //Text\n        const foodText2 = document.createElement(\"p\");\n        const foodTextNode2 = document.createTextNode(\"another burger\");\n        foodText2.appendChild(foodTextNode2);\n        //append text to page\n        foodCard2.appendChild(foodText2);\n\n        //FoodCard 3\n        //div\n        const foodCard3 = document.createElement(\"div\");\n        foodCard3.className = \"foodCard\";\n        menuContainer.appendChild(foodCard3)\n\n        //Image\n        const foodImage3 = document.createElement(\"img\");\n        foodImage3.setAttribute('src', './media/burger.gif')\n        foodImage3.setAttribute('width', '50%');\n        //append image to page\n        foodCard3.appendChild(foodImage3);\n\n        //Text\n        const foodText3 = document.createElement(\"p\");\n        const foodTextNode3 = document.createTextNode(\"another burger\");\n        foodText3.appendChild(foodTextNode3);\n        //append text to page\n        foodCard3.appendChild(foodText3);\n\n        //FoodCard 4\n        //div\n        const foodCard4 = document.createElement(\"div\");\n        foodCard4.className = \"foodCard\";\n        menuContainer.appendChild(foodCard4)\n\n        //Image\n        const foodImage4 = document.createElement(\"img\");\n        foodImage4.setAttribute('src', './media/burger.gif')\n        foodImage4.setAttribute('width', '50%');\n        //append image to page\n        foodCard4.appendChild(foodImage4);\n\n        //Text\n        const foodText4 = document.createElement(\"p\");\n        const foodTextNode4 = document.createTextNode(\"another burger\");\n        foodText4.appendChild(foodTextNode4);\n        //append text to page\n        foodCard4.appendChild(foodText4);\n\n        //FoodCard 5\n        //div\n        const foodCard5 = document.createElement(\"div\");\n        foodCard5.className = \"foodCard\";\n        menuContainer.appendChild(foodCard5)\n\n        //Image\n        const foodImage5 = document.createElement(\"img\");\n        foodImage5.setAttribute('src', './media/burger.gif')\n        foodImage5.setAttribute('width', '50%');\n        //append image to page\n        foodCard5.appendChild(foodImage5);\n\n        //Text\n        const foodText5 = document.createElement(\"p\");\n        const foodTextNode5 = document.createTextNode(\"another burger\");\n        foodText5.appendChild(foodTextNode5);\n        //append text to page\n        foodCard5.appendChild(foodText5);\n\n        //FoodCard 6\n        //div\n        const foodCard6 = document.createElement(\"div\");\n        foodCard6.className = \"foodCard\";\n        menuContainer.appendChild(foodCard6)\n\n        //Image\n        const foodImage6 = document.createElement(\"img\");\n        foodImage6.setAttribute('src', './media/burger.gif')\n        foodImage6.setAttribute('width', '50%');\n        //append image to page\n        foodCard6.appendChild(foodImage6);\n\n        //Text\n        const foodText6 = document.createElement(\"p\");\n        const foodTextNode6 = document.createTextNode(\"another burger\");\n        foodText6.appendChild(foodTextNode6);\n        //append text to page\n        foodCard6.appendChild(foodText6);\n\n        //FoodCard 7\n        //div\n        const foodCard7 = document.createElement(\"div\");\n        foodCard7.className = \"foodCard\";\n        menuContainer.appendChild(foodCard7)\n\n        //Image\n        const foodImage7 = document.createElement(\"img\");\n        foodImage7.setAttribute('src', './media/burger.gif')\n        foodImage7.setAttribute('width', '50%');\n        //append image to page\n        foodCard7.appendChild(foodImage7);\n\n        //Text\n        const foodText7 = document.createElement(\"p\");\n        const foodTextNode7 = document.createTextNode(\"another burger\");\n        foodText7.appendChild(foodTextNode7);\n        //append text to page\n        foodCard7.appendChild(foodText7);\n\n        //FoodCard 8\n        //div\n        const foodCard8 = document.createElement(\"div\");\n        foodCard8.className = \"foodCard\";\n        menuContainer.appendChild(foodCard8)\n\n        //Image\n        const foodImage8 = document.createElement(\"img\");\n        foodImage8.setAttribute('src', './media/burger.gif')\n        foodImage8.setAttribute('width', '50%');\n        //append image to page\n        foodCard8.appendChild(foodImage8);\n\n        //Text\n        const foodText8 = document.createElement(\"p\");\n        const foodTextNode8 = document.createTextNode(\"another burger\");\n        foodText8.appendChild(foodTextNode8);\n        //append text to page\n        foodCard8.appendChild(foodText8);\n\n        \n    }\n    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\n\n//# sourceURL=webpack://restaurant/./src/loadMenu.js?");

/***/ }),

/***/ "./src/loadPage.js":
/*!*************************!*\
  !*** ./src/loadPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction loadHome() {\n    //clear current content\n    document.getElementById('content').innerHTML = \"\";\n    const contentElement = document.getElementById(\"content\");\n\n    //create headline, append to div 1\n    const headline = document.createElement(\"h2\");\n    const headText = document.createTextNode(\"Homepage\");\n    headline.appendChild(headText);\n    contentElement.appendChild(headline);\n\n    //create div container 1\n    const mydiv = document.createElement(\"div\");\n    mydiv.id = 'mydiv';\n    contentElement.appendChild(mydiv);\n\n    \n    \n\n\n    //create image, append to div 1\n    const homepageImage = document.createElement(\"img\");\n    homepageImage.setAttribute('src', './media/globe1.gif');\n    homepageImage.classList = \"homepageImg\";\n    // homepageImage.setAttribute('src', '../media/greyabstract.jpg')\n    // homepageImage.setAttribute('width', '100%');\n    mydiv.appendChild(homepageImage);\n\n    //create text, append to div 1\n    const homeText = document.createElement(\"p\");\n    const homeTextNode = document.createTextNode(\"Webcore (or Old Web) is an aesthetic expresses nostalgia for Internet culture of the early 1990s to Late 2000s (spanning from roughly the release of the World Wide Web up until Flat Design and smartphones were popularized, so around ~2015).\");\n    homeText.appendChild(homeTextNode);\n    mydiv.appendChild(homeText);\n\n    //create ad banner, append to main content\n    const ad = document.createElement('img');\n    ad.setAttribute('src', \"./media/simbanner.gif\");\n    ad.classList = \"banner\";\n    contentElement.appendChild(ad);\n\n    //create div container 2\n    const mydiv2 = document.createElement(\"div\");\n    mydiv2.id = 'mydiv2';\n    contentElement.appendChild(mydiv2);\n\n    // //create headline, append to div 2\n    // const header2 = document.createElement(\"h2\");\n    // const headerText2 = document.createTextNode(\"Woo hoo!\");\n    // header2.appendChild(headerText2);\n    // mydiv2.appendChild(header2);\n\n    //create image, append to div 2\n    const div2Img = document.createElement(\"img\");\n    div2Img.setAttribute('src', './media/gloves.gif');\n    div2Img.classList = \"homepageImg\";\n    // homepageImage.setAttribute('src', '../media/greyabstract.jpg')\n    // homepageImage.setAttribute('width', '100%');\n    mydiv2.appendChild(div2Img);\n\n    //create text, append to div 2\n    const divText2 = document.createElement(\"p\");\n    const divTextNode2 = document.createTextNode(\"A yellow sea sponge named SpongeBob SquarePants, who enjoys being a cook at Krusty Krab, lives in the Pacific Ocean. He embarks on various adventures with his friends at Bikini Bottom.\");\n    divText2.appendChild(divTextNode2);\n    mydiv2.appendChild(divText2);\n\n    //create ad banner 2, append to main content\n    const ad2 = document.createElement('img');\n    ad2.setAttribute('src', \"./media/sims2.gif\");\n    ad2.classList = \"banner\";\n    contentElement.appendChild(ad2);\n    \n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n\n//# sourceURL=webpack://restaurant/./src/loadPage.js?");

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