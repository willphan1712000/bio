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

/***/ "./secrets/serects.js":
/*!****************************!*\
  !*** ./secrets/serects.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   publishableKey: () => (/* binding */ publishableKey)\n/* harmony export */ });\n// Stripe publishable key\nconst publishableKey = \"pk_test_51PAMO1BBsUVJd6T4Eic1w4bC9mNx3g1ztStSqJkms3slrzO4W2G6X2vwOiQFPoYT6jxHg1D6wUnQnkrzvaTg4lwh00ZaNPiUyb\";\n\n//# sourceURL=webpack://htdocs/./secrets/serects.js?");

/***/ }),

/***/ "./src/checkout.js":
/*!*************************!*\
  !*** ./src/checkout.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _secrets_serects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../secrets/serects.js */ \"./secrets/serects.js\");\n\n\nlet cart = JSON.parse(localStorage.getItem(\"cart\")); // get cart from local storage\nconst items = []; // items object will be sent over the server for processing\n// Check if there is a single checkout\nif(singleCheckout !== \"\") {\n  cart = {};\n  cart[singleCheckout] = true\n}\n// for loop to make the items object complete\nfor(const key in cart) {\n  items.push({\n    id: key,\n    quantity: 1,\n  })\n}\n\n// This is your test secret API key.\nconst stripe = Stripe(_secrets_serects_js__WEBPACK_IMPORTED_MODULE_0__.publishableKey);\n\ninitialize();\n\n// Create a Checkout Session\nasync function initialize() {\n  const fetchClientSecret = async () => {\n    const response = await fetch(\"/data/checkout.php\", {\n      method: \"POST\",\n      headers: { \"Content-Type\": \"application/json\" },\n      body: JSON.stringify({ items }),\n    });\n    const { clientSecret } = await response.json();\n    return clientSecret;\n  };\n\n  const checkout = await stripe.initEmbeddedCheckout({\n    fetchClientSecret,\n  });\n\n  // Mount Checkout\n  checkout.mount('#checkout');\n}\n\n//# sourceURL=webpack://htdocs/./src/checkout.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/checkout.js");
/******/ 	
/******/ })()
;