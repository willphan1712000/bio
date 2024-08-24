/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./css/template.css":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./css/template.css ***!
  \*******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `#container {
  width: 100vw;
}

h2, h5 {
  text-align: center;
  margin: 10px 0px;
}

.swiper-container {
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: auto;
  flex-wrap: nowrap;
  width: 100%;
  height: 80vh;
  margin-top: 10vh;
}

.logo {
  height: 10vh;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
  background: transparent;
  transition: all 0.3s linear;
}

.logo .btn-box {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.logo .btn-ele {
  padding: 5px 15px;
  margin: 10px;
  text-decoration: none;
  color: #000;
  background-color: #d4d4d4;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 100%;
  transition: all 0.3s linear;
}

.logo .btn-ele .img {
  height: 100%;
  aspect-ratio: 1;
}

.logo .btn-ele img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.logo .btn-ele > * {
  margin-right: 5px;
}

.logo .btn-ele.signin {
  position: fixed;
  left: 10px;
  bottom: 10px;
  height: 60px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}

.logo .btn-ele.signin.admin {
  left: 34%;
}

.logo .btn-ele.cart {
  position: fixed;
  right: 10px;
  bottom: 10px;
  height: 60px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}

.filter {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
}

.filter .type {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  gap: 20px;
}

.filter .type a {
  text-decoration: none;
  color: #000;
}

.heading {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 10vh;
}

.template-wrapper {
  background-color: #fff;
  width: 100%;
  height: 100% !important;
}

.notHaveTemplate {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px;
}

.notHaveTemplate > p {
  text-align: center;
}

/* cart style overwritting */
.cart .count {
  top: -7px;
}

.cart_parent .cart_item-img {
  border-radius: 40px;
  background-color: #fff;
}

.logo .cart_parent .cart_item-img > img {
  border-radius: 40px !important;
}

.logo .cart_parent .cart_checkout {
  max-width: 240px;
  cursor: pointer;
}

.logo .cart_parent .cart_items {
  width: auto !important;
  height: auto !important;
  aspect-ratio: 9/16 !important;
  padding: 0px !important;
}

.logo .cart_parent .cart_item {
  height: calc(100% - 50px);
  position: relative;
}

.logo .cart_parent .cart_item-remove {
  text-align: center;
  position: absolute;
  top: -15px;
  left: -15px;
}

.logo .cart_parent .cart_items .cart_empty_msg {
  padding: 40px;
}

#copyright {
  border-radius: 20px;
  background-color: #fff;
  margin: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  width: -webkit-fill-available;
  height: 8vh;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

/* Web responsive */
@media screen and (max-width: 600px) {
  .heading h1 {
    font-size: 20px;
  }
  .signupParent {
    height: 68vh;
  }
  .signupChild {
    height: 100%;
  }
  .signupChild h1 {
    margin-bottom: 20px;
  }
}
@media screen and (min-width: 600px) {
  .logo .btn-ele.signin {
    top: 10px;
  }
  .logo .btn-ele.cart {
    top: 10px;
  }
}`, "",{"version":3,"sources":["webpack://./css/template.css"],"names":[],"mappings":"AAAA;EACI,YAAA;AACJ;;AACA;EACI,kBAAA;EACA,gBAAA;AAEJ;;AAAA;EACI,aAAA;EACA,sBAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;EACA,WAAA;EACA,YAAA;EACA,gBAAA;AAGJ;;AADA;EACI,YAAA;EACA,aAAA;EACA,8BAAA;EACA,aAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,UAAA;EACA,uBAAA;EACA,2BAAA;AAIJ;;AAFA;EACI,aAAA;EACA,yBAAA;EACA,mBAAA;AAKJ;;AAHA;EACI,iBAAA;EACA,YAAA;EACA,qBAAA;EACA,WAAA;EACA,yBAAA;EACA,mBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,mBAAA;EACA,WAAA;EACA,YAAA;EACA,2BAAA;AAMJ;;AAJA;EACI,YAAA;EACA,eAAA;AAOJ;;AALA;EACI,WAAA;EACA,YAAA;EACA,kBAAA;AAQJ;;AANA;EACI,iBAAA;AASJ;;AAPA;EACI,eAAA;EACA,UAAA;EACA,YAAA;EACA,YAAA;EACA,yFAAA;AAUJ;;AARA;EACI,SAAA;AAWJ;;AATA;EACI,eAAA;EACA,WAAA;EACA,YAAA;EACA,YAAA;EACA,yFAAA;AAYJ;;AAVA;EACI,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,mBAAA;AAaJ;;AAXA;EACI,aAAA;EACA,mBAAA;EACA,6BAAA;EACA,mBAAA;EACA,SAAA;AAcJ;;AAZA;EACI,qBAAA;EACA,WAAA;AAeJ;;AAbA;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,mBAAA;EACA,YAAA;AAgBJ;;AAdA;EACI,sBAAA;EACA,WAAA;EACA,uBAAA;AAiBJ;;AAfA;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,cAAA;AAkBJ;;AAhBA;EACI,kBAAA;AAmBJ;;AAjBA,4BAAA;AACA;EACI,SAAA;AAoBJ;;AAlBA;EACI,mBAAA;EACA,sBAAA;AAqBJ;;AAnBA;EACI,8BAAA;AAsBJ;;AApBA;EACI,gBAAA;EACA,eAAA;AAuBJ;;AArBA;EACI,sBAAA;EACA,uBAAA;EACA,6BAAA;EACA,uBAAA;AAwBJ;;AAtBA;EACI,yBAAA;EACA,kBAAA;AAyBJ;;AAvBA;EACI,kBAAA;EACA,kBAAA;EACA,UAAA;EACA,WAAA;AA0BJ;;AAxBA;EACI,aAAA;AA2BJ;;AAzBA;EACI,mBAAA;EACA,sBAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,SAAA;EACA,6BAAA;EACA,WAAA;EACA,qDAAA;AA4BJ;;AA1BA,mBAAA;AACA;EACI;IACI,eAAA;EA6BN;EA3BE;IACI,YAAA;EA6BN;EA3BE;IACI,YAAA;EA6BN;EA3BE;IACI,mBAAA;EA6BN;AACF;AA1BA;EACI;IACI,SAAA;EA4BN;EA1BE;IACI,SAAA;EA4BN;AACF","sourcesContent":["#container {\n    width: 100vw;\n}\nh2, h5 {\n    text-align: center;\n    margin: 10px 0px;\n}\n.swiper-container {\n    display: flex;\n    flex-direction: column;\n    overflow-x: hidden;\n    overflow-y: auto;\n    flex-wrap: nowrap;\n    width: 100%;\n    height: 80vh;\n    margin-top: 10vh;\n}\n.logo {\n    height: 10vh;\n    display: flex;\n    justify-content: space-between;\n    padding: 10px;\n    top: 0;\n    left: 0;\n    width: 100%;\n    z-index: 2;\n    background:transparent;\n    transition: all .3s linear;\n}\n.logo .btn-box {\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n}\n.logo .btn-ele {\n    padding: 5px 15px;\n    margin: 10px;\n    text-decoration: none;\n    color: #000;\n    background-color: #d4d4d4;\n    border-radius: 20px;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    width: auto;\n    height: 100%;\n    transition: all .3s linear;\n}\n.logo .btn-ele .img {\n    height: 100%;\n    aspect-ratio: 1;\n}\n.logo .btn-ele img {\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n}\n.logo .btn-ele > * {\n    margin-right: 5px;\n}\n.logo .btn-ele.signin {\n    position: fixed;\n    left: 10px;\n    bottom: 10px;\n    height: 60px;\n    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;\n}\n.logo .btn-ele.signin.admin {\n    left: 34%;\n}\n.logo .btn-ele.cart {\n    position: fixed;\n    right: 10px;\n    bottom: 10px;\n    height: 60px;\n    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;\n}\n.filter {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin-bottom: 10px;\n}\n.filter .type {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n    align-items: center;\n    gap: 20px;\n}\n.filter .type a {\n    text-decoration: none;\n    color: #000;\n}\n.heading {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: row;\n    height: 10vh;\n}\n.template-wrapper {\n    background-color: #fff;\n    width: 100%;\n    height: 100% !important;\n}\n.notHaveTemplate {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 100px;\n}\n.notHaveTemplate > p {\n    text-align: center;\n}\n/* cart style overwritting */\n.cart .count {\n    top: -7px;\n}\n.cart_parent .cart_item-img {\n    border-radius: 40px;\n    background-color: #fff;\n}\n.logo .cart_parent .cart_item-img > img {\n    border-radius: 40px !important;\n}\n.logo .cart_parent .cart_checkout {\n    max-width: 240px;\n    cursor: pointer;\n}\n.logo .cart_parent .cart_items {\n    width: auto !important;\n    height: auto !important;\n    aspect-ratio: 9/16 !important;\n    padding: 0px !important;\n}\n.logo .cart_parent .cart_item {\n    height: calc(100% - 50px);\n    position: relative;\n}\n.logo .cart_parent .cart_item-remove {\n    text-align: center;\n    position: absolute;\n    top: -15px;\n    left: -15px;\n}\n.logo .cart_parent .cart_items .cart_empty_msg {\n    padding: 40px;\n}\n#copyright {\n    border-radius: 20px;\n    background-color: #fff;\n    margin: 15px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    bottom: 0;\n    width: -webkit-fill-available;\n    height: 8vh;\n    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n}\n/* Web responsive */\n@media screen and (max-width: 600px) {\n    .heading h1 {\n        font-size: 20px;\n    }\n    .signupParent {\n        height: 68vh;\n    }\n    .signupChild {\n        height: 100%;\n    }\n    .signupChild h1 {\n        margin-bottom: 20px;\n    }\n    \n}\n@media screen and (min-width: 600px) {\n    .logo .btn-ele.signin {\n        top: 10px;\n    }\n    .logo .btn-ele.cart {\n        top: 10px;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**************************!*\
  !*** ./css/template.css ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_template_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./template.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./css/template.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_template_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_template_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_template_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_template_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);

/******/ })()
;
//# sourceMappingURL=templatea4a8ed49c857dab7c03c.js.map