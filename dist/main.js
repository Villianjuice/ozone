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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _moduls_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moduls/cart */ \"./src/moduls/cart.js\");\n/* harmony import */ var _moduls_second__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moduls/second */ \"./src/moduls/second.js\");\n\r\n\r\n\r\n(0,_moduls_cart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n;(0,_moduls_second__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n\n//# sourceURL=webpack://ozone/./src/index.js?");

/***/ }),

/***/ "./src/moduls/cart.js":
/*!****************************!*\
  !*** ./src/moduls/cart.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst cart = () => {\r\n    const cartBtn = document.getElementById('cart')\r\n    const cartModal = document.querySelector('.cart')\r\n    const cartCloseBtn = document.querySelector('.cart-close')\r\n\r\n    const openCart = () => {\r\n        cartModal.style.display = 'flex'\r\n    }\r\n    const closeCart = () => {\r\n        cartModal.style.display = 'none'\r\n    }\r\n\r\n    cartBtn.addEventListener('click', openCart)\r\n    cartCloseBtn.addEventListener('click', closeCart)\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cart);\n\n//# sourceURL=webpack://ozone/./src/moduls/cart.js?");

/***/ }),

/***/ "./src/moduls/getData.js":
/*!*******************************!*\
  !*** ./src/moduls/getData.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getData = (str) => {\r\n    return fetch('https://ozone-f530e-default-rtdb.firebaseio.com/goods.json')\r\n    .then((response) => {\r\n        return response.json()\r\n    })\r\n    \r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\n\n//# sourceURL=webpack://ozone/./src/moduls/getData.js?");

/***/ }),

/***/ "./src/moduls/postData.js":
/*!********************************!*\
  !*** ./src/moduls/postData.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst postData = () => {\r\n    return fetch('http://localhost:3000/goods', {\r\n        method: 'POST',\r\n        body: JSON.stringify({\r\n          title: \"?????????????? 3\",\r\n          price: 3000,\r\n          sale: true,\r\n          img: \"https://cdn1.ozone.ru/multimedia/c400/1023547851.jpg\",\r\n          category: \"???????? ?? ????????\"\r\n        }),\r\n        headers: {\r\n          'Content-type': 'application/json; charset=UTF-8',\r\n        },\r\n    })\r\n    .then(res => res.json())\r\n    \r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postData);\n\n//# sourceURL=webpack://ozone/./src/moduls/postData.js?");

/***/ }),

/***/ "./src/moduls/second.js":
/*!******************************!*\
  !*** ./src/moduls/second.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/moduls/getData.js\");\n/* harmony import */ var _postData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postData */ \"./src/moduls/postData.js\");\n\r\n\r\nconst second = () => {\r\n    const cartBtn = document.querySelector('.cart')\r\n    \r\n    ;(0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n        console.log(data);\r\n    })\r\n    \r\n    cartBtn.addEventListener('click', () => {\r\n        ;(0,_postData__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().then((data) => {\r\n            console.log(data);\r\n\r\n            \r\n        })\r\n        \r\n    })\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (second);\n\n//# sourceURL=webpack://ozone/./src/moduls/second.js?");

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