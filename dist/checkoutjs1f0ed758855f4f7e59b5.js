/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./secrets/serects.js":
/*!****************************!*\
  !*** ./secrets/serects.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   publishableKey: () => (/* binding */ publishableKey)
/* harmony export */ });
// Stripe publishable key
const publishableKey = "pk_test_51PAMO1BBsUVJd6T4Eic1w4bC9mNx3g1ztStSqJkms3slrzO4W2G6X2vwOiQFPoYT6jxHg1D6wUnQnkrzvaTg4lwh00ZaNPiUyb";

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
var __webpack_exports__ = {};
/*!*************************!*\
  !*** ./src/checkout.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _secrets_serects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../secrets/serects.js */ "./secrets/serects.js");


let cart = JSON.parse(localStorage.getItem("cart")); // get cart from local storage
const items = []; // items object will be sent over the server for processing

// Check if there is a single checkout
if(singleCheckout !== "null") {
  cart = {}
  cart[singleCheckout] = true
}

// for loop to make the items object complete
for(const key in cart) {
  items.push({
    id: key,
    quantity: cart[key] ? 1 : cart[key],
  })
}

// Convert items to string
let r = '';
items.forEach(e => {
  r += e.id + ",";
})

// This is your test secret API key.
const stripe = Stripe(_secrets_serects_js__WEBPACK_IMPORTED_MODULE_0__.publishableKey);

initialize();

// Create a Checkout Session
async function initialize() {
  const fetchClientSecret = async () => {
    const response = await fetch("/data/stripe/checkout.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items, username, firstItem: r}),
    });
    const { clientSecret } = await response.json();
    return clientSecret;
  };

  const checkout = await stripe.initEmbeddedCheckout({
    fetchClientSecret,
  });

  // Mount Checkout
  checkout.mount('#checkout');
}
/******/ })()
;
//# sourceMappingURL=checkoutjs1f0ed758855f4f7e59b5.js.map