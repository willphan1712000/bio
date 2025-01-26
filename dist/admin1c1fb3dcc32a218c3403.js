/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./controllers/client/css/admin.css":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./controllers/client/css/admin.css ***!
  \***********************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `#template-container {
  border-radius: 20px;
  padding: 10px 20px;
  width: 100vw;
}

#avatar__container {
  position: relative;
}

#container {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  position: relative;
}

#container.touch-disabled {
  touch-action: none;
}

#admin {
  width: 100vw;
}

/* Configure not support screen */
#notSupported {
  width: 100%;
  height: 100vh;
  height: 100svh;
  height: 100dvh;
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

@media only screen and (min-width: 800px) {
  #container {
    display: none;
  }
  #notSupported {
    display: flex;
  }
}
a {
  overflow-wrap: anywhere;
}

.msg {
  position: fixed;
  top: 10px;
  right: 10px;
  width: auto;
  height: 50px;
  border-radius: 10px;
  transform: translateX(100%);
  transition: all 0.4s;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  color: #fff;
  z-index: 99;
  padding: 15px;
}

.msg i {
  margin-right: 5px;
}

.successMsg.active {
  transform: translateX(0px);
  background-color: #1b9a20;
}

.errorMsg.active {
  transform: translateX(0px);
  background-color: rgba(255, 0, 0, 0.6);
}

.notValidForm.active {
  transform: translateX(0px);
  background-color: #327e8f;
}

.adminSection {
  margin: 30px 0px;
  border-radius: 20px;
  width: 600px;
  background-color: #fff;
}

/* .info {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: auto;
  margin: 20px;
  padding: 10px;
  border: solid 1.5px #000;
  border-radius: 20px;
} */
/* .info__img--ava {
  width: 100%;
  height: -webkit-fill-available;
}
.info__img--location {
  overflow: hidden;
  width: 80%;
  border-radius: 50%;
  aspect-ratio: 1;
} */
/* .info__img img {
  object-fit: contain;
  width: 100%;
  cursor: pointer;
} */
/* .info .info__about > * {
  text-align: center;
} */
/* .info__img--choose {
  margin-top: 5px;
  height: 40px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--main-color);
  cursor: pointer;
  padding: 20px;
}
.info__img--remove {
  position: absolute;
  top: 20%;
  right: 20%;
  background-color: var(--main-color);
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
  aspect-ratio: 1;
  width: 40px;
  height: 40px;
  text-align: center;
  z-index: 1;
}
.info__about {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0px 10px;
  flex-grow: 1;
  width: 100%;
} */
/* .info__name {
  width: -webkit-fill-available;
}
.info__org {
  width: -webkit-fill-available;
  margin-top: 10px;
}
.info__des {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}
.info__des.admin {
  height: 150px;
} */
/* .info__des h3 {
  word-wrap: break-word;
} */
/* .info__about input {
  width: 100%;
  padding: 5px;
  height: auto;
  border-radius: 10px;
  border: solid #000 1px;
  font-size: 15px;
} */
/* .info__des textarea {
  width: 100%;
  flex: 1;
  border-radius: 10px;
  padding: 10px;
  font-size: 15px;
} */
textarea {
  border: none !important;
  resize: none !important;
  background: transparent !important;
  width: 80vw !important;
  height: 70px !important;
  text-align: center !important;
  margin: 0px !important;
  scrollbar-width: none !important;
}

.social {
  height: 100px;
  /* margin: 20px; */
  background-color: var(--main-color);
  border-radius: 20px;
  display: flex;
  flex-direction: row;
}

.social__img i {
  font-size: 50px !important;
}

.social__info label {
  margin-bottom: 5px;
}

.adminBtn {
  width: 50vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}

.adminBtn__ele {
  flex: 1;
  margin: 0px 15px;
  height: 60px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  cursor: pointer;
}

.adminBtn__ele i {
  margin: 0px 5px;
}

.adminBtn__ele.adminBtn__delete {
  width: auto;
  padding: 15px;
  font-size: 0.8rem;
}

.warning__parent {
  background-color: rgba(0, 0, 0, 0.168627451);
  width: 100vw;
  height: 100vh;
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

.warning__child p {
  text-align: center;
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

#share {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}

.share__btn {
  height: 50px;
  width: 100px;
  margin: 10px;
  background-color: var(--main-color);
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #000;
}

.share__btn i {
  margin-right: 5px;
}

.shareWindow_parent {
  background-color: rgba(0, 0, 0, 0.168627451);
  width: 100vw;
  height: 100vh;
  height: 100svh;
  height: 100dvh;
  backdrop-filter: blur(6px);
  position: fixed;
  display: flex;
  z-index: 99;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  visibility: hidden;
  opacity: 0;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.58, 1.4);
}

.shareWindow_parent.active {
  visibility: visible;
  opacity: 1;
}

.shareWindow_child {
  border-radius: 20px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  width: 600px;
  margin: 0px 10px;
}

/* .shareWindow_child .shareWindow__close {
    border-radius: 10px;
    background-color: var(--main-color);
    padding: 10px;
    margin-left: auto;
    cursor: pointer;
} */
.shareWindow_child .shareWindow__qr {
  width: 100%;
}

.shareWindow__btn {
  width: 100%;
  height: 50px;
  border-radius: 10px;
  background-color: var(--main-color);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 5px 0px;
}

.shareWindow__btn.shareWindow__download i {
  margin-right: 5px;
}

.shareWindow__btn.shareWindow__link input {
  background-color: var(--main-color);
  border: none;
  border-radius: 10px;
  padding: 10px;
}

.shareWindow__btn.shareWindow__link i {
  margin-left: 5px;
}

.shareWindow__btn.shareWindow__link i.check {
  display: none;
}

#copyright {
  border-radius: 20px;
  background-color: #fff;
  margin: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: -webkit-fill-available;
  height: 8vh;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

.inputWrapper {
  display: flex;
  flex-direction: row;
  position: relative;
}

/* .countryCode {
  flex-direction: row;
  border-radius: 10px;
  background-color: #fff;
  padding: 2px;
  height: auto;
  margin-right: 5px;
  cursor: pointer;
}
.countryCode > * {
  display: flex !important;
  align-items: center;
  padding: 2px;
}
.countryCode > .flag {
  width: 40px;
  padding: 5px;
}
.codeList {
  position: absolute !important;
  flex-direction: column;
  left: 0;
  top: calc(100% + 5px);
  width: 100%;
  height: 500%;
  background: #fff;
  border-radius: 10px;
  z-index: 1;
  padding: 5px;
  display: none;
}
.codeList.active {
  display: flex;
}
.codeList__list {
  overflow: auto;
  margin: 5px;
}
.codeList__list > .each {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px;
  cursor: pointer;
  border-radius: 10px;
}
.codeList__list > .each:hover {
  background-color: #d9d9d9;
} */
.backToBio {
  display: flex;
  justify-content: flex-end;
}

.backToBio > a {
  background-color: var(--main-color);
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
  aspect-ratio: 1;
  height: 40px;
  text-align: center;
  margin: 10px;
  margin-bottom: 0;
  color: #000;
}

/* New begins here */
.swiper-wrapper {
  display: flex;
}

/* .navigator {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  z-index: 10;
  padding: 5px;
} */
/* .navigator > * {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  padding: 15px;
  background: #fff;
  border-radius: 20px;
} */
/* .navigator .back {
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #000;
  cursor: pointer;
} */
/* .navigator .save {
  border-radius: 20px;
  cursor: pointer;
} */
.face-card-label {
  position: absolute;
  top: 2px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  padding: 0px 10px;
  background: #fff;
  border-radius: 20px;
  z-index: 1;
}

.card-container {
  width: 100vw;
  overflow-x: auto;
  overflow-y: hidden;
}

@media screen and (max-width: 600px) {
  .adminSection {
    width: 95%;
  }
  .info {
    flex-direction: column;
  }
  .social.info {
    flex-direction: row;
  }
  .adminBtn {
    flex-direction: column;
    width: 95%;
  }
  .adminBtn__ele {
    width: 100%;
    margin: 15px 0px;
    padding: 20px;
    font-size: 1rem;
  }
  .info__des h3 {
    text-align: center;
  }
}`, "",{"version":3,"sources":["webpack://./controllers/client/css/admin.css"],"names":[],"mappings":"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","sourcesContent":["#template-container {\n  border-radius: 20px;\n  padding: 10px 20px;\n  width: 100vw;\n}\n#avatar__container {\n  position: relative;\n}\n#container {\n  width: 100%;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-direction: column;\n  position: relative;\n}\n#container.touch-disabled {\n  touch-action: none;\n}\n#admin {\n  width: 100vw;\n}\n\n/* Configure not support screen */\n#notSupported {\n  width: 100%;\n  height: 100vh;\n  height: 100svh;\n  height: 100dvh;\n  display: none;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n@media only screen and (min-width: 800px) {\n  #container {\n    display: none;\n  }\n\n  #notSupported {\n    display: flex;\n  }\n}\na {\n  overflow-wrap: anywhere;\n}\n.msg {\n  position: fixed;\n  top: 10px;\n  right: 10px;\n  width: auto;\n  height: 50px;\n  border-radius: 10px;\n  transform: translateX(100%);\n  transition: all 0.4s;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  color: #fff;\n  z-index: 99;\n  padding: 15px;\n}\n.msg i {\n  margin-right: 5px;\n}\n.successMsg.active {\n  transform: translateX(0px);\n  background-color: #1b9a20;\n}\n.errorMsg.active {\n  transform: translateX(0px);\n  background-color: #ff000099;\n}\n.notValidForm.active {\n  transform: translateX(0px);\n  background-color: #327e8f;\n}\n.adminSection {\n  margin: 30px 0px;\n  border-radius: 20px;\n  width: 600px;\n  background-color: #fff;\n}\n/* .info {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  height: auto;\n  margin: 20px;\n  padding: 10px;\n  border: solid 1.5px #000;\n  border-radius: 20px;\n} */\n\n/* .info__img--ava {\n  width: 100%;\n  height: -webkit-fill-available;\n}\n.info__img--location {\n  overflow: hidden;\n  width: 80%;\n  border-radius: 50%;\n  aspect-ratio: 1;\n} */\n/* .info__img img {\n  object-fit: contain;\n  width: 100%;\n  cursor: pointer;\n} */\n/* .info .info__about > * {\n  text-align: center;\n} */\n/* .info__img--choose {\n  margin-top: 5px;\n  height: 40px;\n  border-radius: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--main-color);\n  cursor: pointer;\n  padding: 20px;\n}\n.info__img--remove {\n  position: absolute;\n  top: 20%;\n  right: 20%;\n  background-color: var(--main-color);\n  border-radius: 50%;\n  padding: 10px;\n  cursor: pointer;\n  aspect-ratio: 1;\n  width: 40px;\n  height: 40px;\n  text-align: center;\n  z-index: 1;\n}\n.info__about {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin: 0px 10px;\n  flex-grow: 1;\n  width: 100%;\n} */\n/* .info__name {\n  width: -webkit-fill-available;\n}\n.info__org {\n  width: -webkit-fill-available;\n  margin-top: 10px;\n}\n.info__des {\n  display: flex;\n  flex-direction: column;\n  margin-top: 20px;\n}\n.info__des.admin {\n  height: 150px;\n} */\n/* .info__des h3 {\n  word-wrap: break-word;\n} */\n/* .info__about input {\n  width: 100%;\n  padding: 5px;\n  height: auto;\n  border-radius: 10px;\n  border: solid #000 1px;\n  font-size: 15px;\n} */\n/* .info__des textarea {\n  width: 100%;\n  flex: 1;\n  border-radius: 10px;\n  padding: 10px;\n  font-size: 15px;\n} */\n\ntextarea {\n  border: none !important;\n  resize: none !important;\n  background: transparent !important;\n  width: 80vw !important;\n  height: 70px !important;\n  text-align: center !important;\n  margin: 0px !important;\n  scrollbar-width: none !important;\n}\n\n.social {\n  height: 100px;\n  /* margin: 20px; */\n  background-color: var(--main-color);\n  border-radius: 20px;\n  display: flex;\n  flex-direction: row;\n}\n.social__img i {\n  font-size: 50px !important;\n}\n.social__info label {\n  margin-bottom: 5px;\n}\n.adminBtn {\n  width: 50vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n}\n.adminBtn__ele {\n  flex: 1;\n  margin: 0px 15px;\n  height: 60px;\n  border-radius: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #fff;\n  cursor: pointer;\n}\n.adminBtn__ele i {\n  margin: 0px 5px;\n}\n.adminBtn__ele.adminBtn__delete {\n  width: auto;\n  padding: 15px;\n  font-size: 0.8rem;\n}\n.warning__parent {\n  background-color: #0000002b;\n  width: 100vw;\n  height: 100vh;\n  backdrop-filter: blur(6px);\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  visibility: hidden;\n  opacity: 0;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.58, 1.4);\n}\n.warning__parent.active {\n  opacity: 1;\n  visibility: visible;\n}\n.warning__child {\n  margin: 0px 10px;\n  border-radius: 20px;\n  background-color: #fff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  padding: 20px;\n  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n}\n.warning__child p {\n  text-align: center;\n}\n.warning__child i {\n  font-size: 45px;\n  color: red;\n  margin-bottom: 10px;\n}\n.warning__child .btn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  cursor: pointer;\n}\n.warning__child .btn__ele {\n  background-color: #f0f0f0;\n  border-radius: 10px;\n  padding: 15px;\n  margin: 10px 10px 0px 10px;\n}\n#share {\n  width: 100%;\n  height: 100px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n}\n.share__btn {\n  height: 50px;\n  width: 100px;\n  margin: 10px;\n  background-color: var(--main-color);\n  border-radius: 15px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  color: #000;\n}\n.share__btn i {\n  margin-right: 5px;\n}\n.shareWindow_parent {\n  background-color: #0000002b;\n  width: 100vw;\n  height: 100vh;\n  height: 100svh;\n  height: 100dvh;\n  backdrop-filter: blur(6px);\n  position: fixed;\n  display: flex;\n  z-index: 99;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  left: 0;\n  visibility: hidden;\n  opacity: 0;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.58, 1.4);\n}\n.shareWindow_parent.active {\n  visibility: visible;\n  opacity: 1;\n}\n.shareWindow_child {\n  border-radius: 20px;\n  background-color: #fff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  padding: 20px;\n  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n  width: 600px;\n  margin: 0px 10px;\n}\n/* .shareWindow_child .shareWindow__close {\n    border-radius: 10px;\n    background-color: var(--main-color);\n    padding: 10px;\n    margin-left: auto;\n    cursor: pointer;\n} */\n.shareWindow_child .shareWindow__qr {\n  width: 100%;\n}\n.shareWindow__btn {\n  width: 100%;\n  height: 50px;\n  border-radius: 10px;\n  background-color: var(--main-color);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  margin: 5px 0px;\n}\n.shareWindow__btn.shareWindow__download i {\n  margin-right: 5px;\n}\n.shareWindow__btn.shareWindow__link input {\n  background-color: var(--main-color);\n  border: none;\n  border-radius: 10px;\n  padding: 10px;\n}\n.shareWindow__btn.shareWindow__link i {\n  margin-left: 5px;\n}\n.shareWindow__btn.shareWindow__link i.check {\n  display: none;\n}\n\n#copyright {\n  border-radius: 20px;\n  background-color: #fff;\n  margin: 15px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: -webkit-fill-available;\n  height: 8vh;\n  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n}\n.inputWrapper {\n  display: flex;\n  flex-direction: row;\n  position: relative;\n}\n/* .countryCode {\n  flex-direction: row;\n  border-radius: 10px;\n  background-color: #fff;\n  padding: 2px;\n  height: auto;\n  margin-right: 5px;\n  cursor: pointer;\n}\n.countryCode > * {\n  display: flex !important;\n  align-items: center;\n  padding: 2px;\n}\n.countryCode > .flag {\n  width: 40px;\n  padding: 5px;\n}\n.codeList {\n  position: absolute !important;\n  flex-direction: column;\n  left: 0;\n  top: calc(100% + 5px);\n  width: 100%;\n  height: 500%;\n  background: #fff;\n  border-radius: 10px;\n  z-index: 1;\n  padding: 5px;\n  display: none;\n}\n.codeList.active {\n  display: flex;\n}\n.codeList__list {\n  overflow: auto;\n  margin: 5px;\n}\n.codeList__list > .each {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 5px;\n  cursor: pointer;\n  border-radius: 10px;\n}\n.codeList__list > .each:hover {\n  background-color: #d9d9d9;\n} */\n.backToBio {\n  display: flex;\n  justify-content: flex-end;\n}\n.backToBio > a {\n  background-color: var(--main-color);\n  border-radius: 50%;\n  padding: 10px;\n  cursor: pointer;\n  aspect-ratio: 1;\n  height: 40px;\n  text-align: center;\n  margin: 10px;\n  margin-bottom: 0;\n  color: #000;\n}\n\n/* New begins here */\n.swiper-wrapper {\n  display: flex;\n}\n\n/* .navigator {\n  position: fixed;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100vw;\n  z-index: 10;\n  padding: 5px;\n} */\n\n/* .navigator > * {\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,\n    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;\n  padding: 15px;\n  background: #fff;\n  border-radius: 20px;\n} */\n/* .navigator .back {\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-decoration: none;\n  color: #000;\n  cursor: pointer;\n} */\n/* .navigator .save {\n  border-radius: 20px;\n  cursor: pointer;\n} */\n\n.face-card-label {\n  position: absolute;\n  top: 2px;\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,\n    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;\n  padding: 0px 10px;\n  background: #fff;\n  border-radius: 20px;\n  z-index: 1;\n}\n.card-container {\n  width: 100vw;\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n\n@media screen and (max-width: 600px) {\n  .adminSection {\n    width: 95%;\n  }\n  .info {\n    flex-direction: column;\n  }\n  .social.info {\n    flex-direction: row;\n  }\n  .adminBtn {\n    flex-direction: column;\n    width: 95%;\n  }\n  .adminBtn__ele {\n    width: 100%;\n    margin: 15px 0px;\n    padding: 20px;\n    font-size: 1rem;\n  }\n  .info__des h3 {\n    text-align: center;\n  }\n}\n"],"sourceRoot":""}]);
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
/*!******************************************!*\
  !*** ./controllers/client/css/admin.css ***!
  \******************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_admin_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./admin.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./controllers/client/css/admin.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_admin_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_admin_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_admin_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_admin_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);

/******/ })()
;
//# sourceMappingURL=admin1c1fb3dcc32a218c3403.js.map