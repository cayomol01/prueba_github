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

/***/ "./src/pages/page1/page1.css":
/*!***********************************!*\
  !*** ./src/pages/page1/page1.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://project/./src/pages/page1/page1.css?");

/***/ }),

/***/ "./src/app/card/newCard.js":
/*!*********************************!*\
  !*** ./src/app/card/newCard.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"newCard\": () => (/* binding */ newCard)\n/* harmony export */ });\nconst newCard = (title, description, container) => {\n  var card = document.createElement(\"div\");\n  card.classList.add(\"card\");\n  card.classList.add(\"mb-3\");\n  card.style.width = \"350px\";\n  card.style.margin = \"auto\";\n\n  var cardBody = document.createElement(\"div\");\n  cardBody.classList.add(\"card-body\");\n\n  var cardTitle = document.createElement(\"h5\");\n  cardTitle.classList.add(\"card-title\");\n  cardTitle.innerHTML = title;\n\n  var cardText = document.createElement(\"p\");\n  cardText.classList.add(\"card-text\");\n  cardText.innerHTML = description;\n\n  cardBody.appendChild(cardTitle);\n  cardBody.appendChild(cardText);\n  card.appendChild(cardBody);\n\n  container.appendChild(card);\n};\n\n\n//# sourceURL=webpack://project/./src/app/card/newCard.js?");

/***/ }),

/***/ "./src/app/structure1/structure1.js":
/*!******************************************!*\
  !*** ./src/app/structure1/structure1.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Structure1\": () => (/* binding */ Structure1)\n/* harmony export */ });\n/* harmony import */ var _card_newCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../card/newCard */ \"./src/app/card/newCard.js\");\n\nconst Structure1 = () => {\n  var row = document.createElement(\"div\");\n  row.classList.add(\"row\");\n\n  // Adding small cards\n  var col4 = document.createElement(\"div\");\n  col4.classList.add(\"col-4\");\n  (0,_card_newCard__WEBPACK_IMPORTED_MODULE_0__.newCard)(\"Index.html\", \"Index page\", col4);\n  (0,_card_newCard__WEBPACK_IMPORTED_MODULE_0__.newCard)(\"Style.css\", \"Style for index page\", col4);\n  (0,_card_newCard__WEBPACK_IMPORTED_MODULE_0__.newCard)(\"Bootstrap.js\", \"Styling library\", col4);\n  (0,_card_newCard__WEBPACK_IMPORTED_MODULE_0__.newCard)(\"Script.js\", \"Script element creator\", col4);\n  row.appendChild(col4);\n\n  var col4 = document.createElement(\"div\");\n  col4.classList.add(\"col-4\");\n  row.appendChild(col4);\n\n  var col4 = document.createElement(\"div\");\n  col4.classList.add(\"col-4\");\n  row.appendChild(col4);\n\n\n  return row;\n};\n\n\n//# sourceURL=webpack://project/./src/app/structure1/structure1.js?");

/***/ }),

/***/ "./src/pages/page1/page1.js":
/*!**********************************!*\
  !*** ./src/pages/page1/page1.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page1_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page1.css */ \"./src/pages/page1/page1.css\");\n/* harmony import */ var _app_structure1_structure1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app/structure1/structure1 */ \"./src/app/structure1/structure1.js\");\n\n\nlet newDiv = document.createElement('div');\nnewDiv.style.height= '100px';\nnewDiv.style.width = '300px';\nnewDiv.style.background = 'red';\n\nlet description = document.createElement('p');\ndescription.innerHTML = 'Text on page 1';\n\nnewDiv.appendChild(description);\n\ndocument.getElementById('page1').appendChild(newDiv);\n\n//# sourceURL=webpack://project/./src/pages/page1/page1.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/pages/page1/page1.js");
/******/ 	
/******/ })()
;