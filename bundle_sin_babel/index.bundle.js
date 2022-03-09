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

/***/ "./node_modules/bootstrap/dist/css/bootstrap.css":
/*!*******************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.css ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://project/./node_modules/bootstrap/dist/css/bootstrap.css?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://project/./src/css/style.css?");

/***/ }),

/***/ "./src/app/app.js":
/*!************************!*\
  !*** ./src/app/app.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"startApp\": () => (/* binding */ startApp)\n/* harmony export */ });\n/* harmony import */ var _structure1_structure1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./structure1/structure1 */ \"./src/app/structure1/structure1.js\");\n/* harmony import */ var _structure2_structure2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./structure2/structure2 */ \"./src/app/structure2/structure2.js\");\n\n\n\nconst startApp = () => {\n\n\n  let cities = {\n    city: 'Guatemala',\n    zone: '2',\n    address: {\n      primary: 'zona 2',\n      secondary: 'Torre C'\n    }\n  }\n  let person = {\n    name: 'Ludwing',\n    description: 'Software Engineer'\n  }\n  document.getElementById(\"structure\").appendChild((0,_structure1_structure1__WEBPACK_IMPORTED_MODULE_0__.Structure1)());\n  document.getElementById(\"structure2\").appendChild((0,_structure2_structure2__WEBPACK_IMPORTED_MODULE_1__.Structure2)());\n  let city = cities.address?.primaryAddress ?? 'No Address';\n  let newDivCity = document.createElement(\"div\").innerHTML(city);\n  let user = person?.name ?? 'Otto';\n  let newDivUser = document.createElement(\"div\").innerHTML(user);\n  document.body.appendChild(newDivCity);\n  document.body.appendChild(newDivUser);\n}\n\n//# sourceURL=webpack://project/./src/app/app.js?");

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

/***/ "./src/app/structure2/structure2.js":
/*!******************************************!*\
  !*** ./src/app/structure2/structure2.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Structure2\": () => (/* binding */ Structure2)\n/* harmony export */ });\n/* harmony import */ var _card_newCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../card/newCard */ \"./src/app/card/newCard.js\");\n\n\nconst Structure2 = () => {\n  var row = document.createElement(\"div\");\n  row.classList.add(\"row\");\n\n  // Adding small cards\n  var col4 = document.createElement(\"div\");\n  col4.classList.add(\"col-4\");\n  (0,_card_newCard__WEBPACK_IMPORTED_MODULE_0__.newCard)(\"Index.html\", \"Index page\", col4);\n  (0,_card_newCard__WEBPACK_IMPORTED_MODULE_0__.newCard)(\"Style.css\", \"Style for index page\", col4);\n  (0,_card_newCard__WEBPACK_IMPORTED_MODULE_0__.newCard)(\"Bootstrap.js\", \"Styling library\", col4);\n  (0,_card_newCard__WEBPACK_IMPORTED_MODULE_0__.newCard)(\"Script.js\", \"Script element creator\", col4);\n  row.appendChild(col4);\n\n  var col4 = document.createElement(\"div\");\n  col4.classList.add(\"col-4\");\n  col4.style.margin = \"auto\";\n  col4.style.textAlign = \"center\";\n  var imgWebpack = document.createElement(\"img\");\n  imgWebpack.src =\n    \"https://thumbs.gfycat.com/HighlevelWindingGemsbok-size_restricted.gif\";\n  //   imgWebpack.width=\"250\";\n  col4.appendChild(imgWebpack);\n  row.appendChild(col4);\n\n  var col4 = document.createElement(\"div\");\n  col4.classList.add(\"col-4\");\n  col4.style.margin = \"auto\";\n\n  (0,_card_newCard__WEBPACK_IMPORTED_MODULE_0__.newCard)(\n    \"app.bundle.js\",\n    \"Webpack bundle with all our assets (style.css, script.js, bootstrap.css.min\",\n    col4\n  );\n  row.appendChild(col4);\n  return row;\n};\n\n\n//# sourceURL=webpack://project/./src/app/structure2/structure2.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app */ \"./src/app/app.js\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"./node_modules/bootstrap/dist/css/bootstrap.css\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n\n\n \n(0,_app_app__WEBPACK_IMPORTED_MODULE_0__.startApp)()\n\n//# sourceURL=webpack://project/./src/index.js?");

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