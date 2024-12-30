/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./controllers/client/css/main.css":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./controllers/client/css/main.css ***!
  \**********************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `#container {
  width: 100vw;
  height: 100vh;
  height: 100svh;
}

#aic {
  width: 100vw;
}

h2,
h5 {
  text-align: center;
  margin: 10px 0px;
}

.heading {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 60vh;
}

.heading h1 {
  transform: scale(2);
}

.heading img {
  height: 50%;
  margin-top: 30px;
}

.register {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-bottom: 20px;
}

.signupParent {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75vh;
}

.signupChild {
  width: 80%;
  max-width: 500px;
  height: 90%;
  border-radius: 20px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

.signupChild.inactive {
  display: none;
}

.passRequirements {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 99;
  border-radius: 20px;
  margin: 10px;
  margin-top: 4px;
  background-color: beige;
  padding: 15px;
  width: 215px;
  font-size: 13px;
  height: 45px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.2s;
}

.passRequirements.dropdown {
  height: auto;
}

.signupChild__error {
  color: red;
  height: 30px;
}

.signupChild h1 {
  margin-bottom: 10px;
  text-align: center;
}

.signupChild .inputField {
  margin: 5px 0px 15px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.signupChild label {
  margin-bottom: 5px;
}

.signupChild input {
  padding: 10px;
  border: solid #000 1px;
  border-radius: 10px;
  width: 250px;
  height: 36px;
}

.signupChild form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.signupChild__confirm,
.signupChild__confirm--php {
  width: 100px;
  height: 50px;
  border-radius: 20px;
  background-color: var(--main-deepColor);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  color: #000;
}

.signupChild__msg {
  margin-top: 10px;
}

.signupChild__msg a {
  text-decoration: none;
}

.signupSuccess {
  display: none;
}

.signupSuccess.active {
  display: flex;
}

.signupSuccess__logo {
  font-size: 70px;
  margin-bottom: 10px;
}

.signupSuccess__logo i {
  color: #41c34a;
  border: solid #41c34a 10px;
  border-radius: 50%;
  padding: 10px;
  width: 110px;
  height: 110px;
}

.signupSuccess__text {
  text-align: center;
}

.signupSuccess__btn {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}

.signupChild.result {
  display: none;
  overflow: auto;
  justify-content: normal;
  padding: 30px;
}

.signupChild.emailSent {
  display: none;
}

.signupChild.passwordResetSuccess {
  display: none;
}

.signupChild.result.active {
  display: flex;
}

.signupChild.emailSent.active {
  display: flex;
}

.signupChild.passwordResetSuccess.active {
  display: flex;
}

.aicBtn {
  padding: 10px;
  margin: 19px;
  border: none;
  border-radius: 10px;
  color: #000;
  cursor: pointer;
  background-color: #fff;
}

.aicBtn.migration {
  margin: 0px 10px 0px 0px;
}

#code404 {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 60%;
}

#code404 img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

#code404 a {
  text-decoration: none;
  font-size: 20px;
}

#userData {
  width: -webkit-fill-available;
  margin: 20px;
  padding: 20px;
  border-radius: 20px;
  background-color: #f0f0f0;
  overflow-x: auto;
}

#userData table {
  width: 100%;
  border-spacing: 0px;
  border-collapse: separate;
  text-align: left;
}

#userData table tr:first-child {
  background-color: #040622;
  color: #fff;
  height: 60px;
}

#userData table tr > * {
  padding: 10px;
}

#userData button {
  border: none;
  background-color: #d73333;
  color: #fff;
  border-radius: 20px;
  padding: 10px;
  cursor: pointer;
}

.warning__parent {
  background-color: rgba(0, 0, 0, 0.168627451);
  width: 100vw;
  height: 100vh;
  height: 100svh;
  height: 100dvh;
  backdrop-filter: blur(6px);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  z-index: 1;
  visibility: hidden;
  opacity: 0;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.58, 1.4);
}

.warning__parent.active {
  opacity: 1;
  visibility: visible;
}

.warning__child {
  margin: 0px 10px;
  border-radius: 20px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}

.warning__child i {
  font-size: 45px;
  color: red;
  margin-bottom: 10px;
}

.warning__child .btn {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  cursor: pointer;
}

.warning__child .btn__ele {
  background-color: #f0f0f0;
  border-radius: 10px;
  padding: 15px;
  margin: 10px 10px 0px 10px;
}

.restore__msg {
  text-align: center;
  padding: 10px;
}

.btn__restore {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.btn__ele {
  background-color: var(--main-deepColor);
  border-radius: 20px;
  padding: 20px;
  margin: 20px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.search-area {
  margin: 20px 20px 0px 20px;
}

.search-area #search {
  border-radius: 20px;
  border: none;
  padding: 15px;
  width: 100%;
  max-width: 500px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  font-size: 15px;
}

/* Web responsive */
@media screen and (max-width: 600px) {
  .heading {
    height: 40vh;
  }
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
}`, "",{"version":3,"sources":["webpack://./controllers/client/css/main.css"],"names":[],"mappings":"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","sourcesContent":["#container {\n  width: 100vw;\n  height: 100vh;\n  height: 100svh;\n}\n#aic {\n  width: 100vw;\n}\nh2,\nh5 {\n  text-align: center;\n  margin: 10px 0px;\n}\n.heading {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  height: 60vh;\n}\n.heading h1 {\n  transform: scale(2);\n}\n.heading img {\n  height: 50%;\n  margin-top: 30px;\n}\n.register {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  margin-bottom: 20px;\n}\n.signupParent {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 75vh;\n}\n.signupChild {\n  width: 80%;\n  max-width: 500px;\n  height: 90%;\n  border-radius: 20px;\n  background-color: #fff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n}\n.signupChild.inactive {\n  display: none;\n}\n.passRequirements {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 99;\n  border-radius: 20px;\n  margin: 10px;\n  margin-top: 4px;\n  background-color: beige;\n  padding: 15px;\n  width: 215px;\n  font-size: 13px;\n  height: 45px;\n  overflow: hidden;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.passRequirements.dropdown {\n  height: auto;\n}\n.signupChild__error {\n  color: red;\n  height: 30px;\n}\n.signupChild h1 {\n  margin-bottom: 10px;\n  text-align: center;\n}\n.signupChild .inputField {\n  margin: 5px 0px 15px 0px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.signupChild label {\n  margin-bottom: 5px;\n}\n.signupChild input {\n  padding: 10px;\n  border: solid #000 1px;\n  border-radius: 10px;\n  width: 250px;\n  height: 36px;\n}\n.signupChild form {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.signupChild__confirm,\n.signupChild__confirm--php {\n  width: 100px;\n  height: 50px;\n  border-radius: 20px;\n  background-color: var(--main-deepColor);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  border: none;\n  color: #000;\n}\n.signupChild__msg {\n  margin-top: 10px;\n}\n.signupChild__msg a {\n  text-decoration: none;\n}\n.signupSuccess {\n  display: none;\n}\n.signupSuccess.active {\n  display: flex;\n}\n.signupSuccess__logo {\n  font-size: 70px;\n  margin-bottom: 10px;\n}\n.signupSuccess__logo i {\n  color: #41c34a;\n  border: solid #41c34a 10px;\n  border-radius: 50%;\n  padding: 10px;\n  width: 110px;\n  height: 110px;\n}\n.signupSuccess__text {\n  text-align: center;\n}\n.signupSuccess__btn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n}\n.signupChild.result {\n  display: none;\n  overflow: auto;\n  justify-content: normal;\n  padding: 30px;\n}\n.signupChild.emailSent {\n  display: none;\n}\n.signupChild.passwordResetSuccess {\n  display: none;\n}\n.signupChild.result.active {\n  display: flex;\n}\n.signupChild.emailSent.active {\n  display: flex;\n}\n.signupChild.passwordResetSuccess.active {\n  display: flex;\n}\n.aicBtn {\n  padding: 10px;\n  margin: 19px;\n  border: none;\n  border-radius: 10px;\n  color: #000;\n  cursor: pointer;\n  background-color: #fff;\n}\n.aicBtn.migration {\n  margin: 0px 10px 0px 0px;\n}\n#code404 {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  width: 100%;\n  height: 60%;\n}\n#code404 img {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n#code404 a {\n  text-decoration: none;\n  font-size: 20px;\n}\n#userData {\n  width: -webkit-fill-available;\n  margin: 20px;\n  padding: 20px;\n  border-radius: 20px;\n  background-color: #f0f0f0;\n  overflow-x: auto;\n}\n#userData table {\n  width: 100%;\n  border-spacing: 0px;\n  border-collapse: separate;\n  text-align: left;\n}\n#userData table tr:first-child {\n  background-color: #040622;\n  color: #fff;\n  height: 60px;\n}\n#userData table tr > * {\n  padding: 10px;\n}\n#userData button {\n  border: none;\n  background-color: #d73333;\n  color: #fff;\n  border-radius: 20px;\n  padding: 10px;\n  cursor: pointer;\n}\n.warning__parent {\n  background-color: #0000002b;\n  width: 100vw;\n  height: 100vh;\n  height: 100svh;\n  height: 100dvh;\n  backdrop-filter: blur(6px);\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  visibility: hidden;\n  opacity: 0;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.58, 1.4);\n}\n.warning__parent.active {\n  opacity: 1;\n  visibility: visible;\n}\n.warning__child {\n  margin: 0px 10px;\n  border-radius: 20px;\n  background-color: #fff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  padding: 20px;\n  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n}\n.warning__child i {\n  font-size: 45px;\n  color: red;\n  margin-bottom: 10px;\n}\n.warning__child .btn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  cursor: pointer;\n}\n.warning__child .btn__ele {\n  background-color: #f0f0f0;\n  border-radius: 10px;\n  padding: 15px;\n  margin: 10px 10px 0px 10px;\n}\n\n.restore__msg {\n  text-align: center;\n  padding: 10px;\n}\n.btn__restore {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n.btn__ele {\n  background-color: var(--main-deepColor);\n  border-radius: 20px;\n  padding: 20px;\n  margin: 20px;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n.search-area {\n  margin: 20px 20px 0px 20px;\n}\n.search-area #search {\n  border-radius: 20px;\n  border: none;\n  padding: 15px;\n  width: 100%;\n  max-width: 500px;\n  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n  font-size: 15px;\n}\n/* Web responsive */\n@media screen and (max-width: 600px) {\n  .heading {\n    height: 40vh;\n  }\n  .heading h1 {\n    font-size: 20px;\n  }\n  .signupParent {\n    height: 68vh;\n  }\n  .signupChild {\n    height: 100%;\n  }\n  .signupChild h1 {\n    margin-bottom: 20px;\n  }\n}\n"],"sourceRoot":""}]);
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
/*!*****************************************!*\
  !*** ./controllers/client/css/main.css ***!
  \*****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./controllers/client/css/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);

/******/ })()
;
//# sourceMappingURL=main2de405685c1c2e9eadba.js.map