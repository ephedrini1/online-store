/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/cart/cart.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/cart/cart.css ***!
  \****************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --background: black;\n  --red: #d60000;\n  --gold: #fdc854;\n }\n\n.cart-popup {\n  position: fixed;\n  top: 10vh;\n  left: 10vw;\n  width: 80vw;\n  height: 80vh;\n  padding: 2em;\n  background-color: black;\n  z-index: 101;\n  color: var(--gold);\n  text-align: center;\n  box-shadow: 0 0 30px var(--gold);\n  display: none;\n}\n\n.cart-popup.active {\n  display: block;\n}\n\n.cart-popup__container {\n  height: 80%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 1em;\n}\n\n.close-popup {\n  display: block;\n  padding: 0.1em 0.5em;\n  border-radius: 10%;\n  position: absolute;\n  right: 1em;\n  top: 1em;\n  cursor: pointer;\n  transition: 0.2s;\n}\n\n.close-popup:hover {\n  transform: scale(1.1, 1.1);\n  border: 1px solid var(--gold);\n  box-shadow: 2px 2px 15px var(--gold);\n  transition: 0.2s;\n}\n\n.close-popup:active {\n  transform: none;\n}\n\n.cart-item {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n justify-content: center;\n align-items: center;\n gap: 1em;\n}\n\n.cart__number{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 0.5em;\n}\n\n.cart__error {\n  position: fixed;\n  top: 10vh;\n  left: 10vw;\n  width: 80vw;\n  height: 80vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: 2em;\n  background: var(--background);\n  color: var(--gold);\n  z-index: 100;\n  display: none;\n}\n\n.cart__error.active {\n  display: flex;\n}\n\n\n\n", "",{"version":3,"sources":["webpack://./src/components/cart/cart.css"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,cAAc;EACd,eAAe;CAChB;;AAED;EACE,eAAe;EACf,SAAS;EACT,UAAU;EACV,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,uBAAuB;EACvB,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;EAClB,gCAAgC;EAChC,aAAa;AACf;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,QAAQ;AACV;;AAEA;EACE,cAAc;EACd,oBAAoB;EACpB,kBAAkB;EAClB,kBAAkB;EAClB,UAAU;EACV,QAAQ;EACR,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,0BAA0B;EAC1B,6BAA6B;EAC7B,oCAAoC;EACpC,gBAAgB;AAClB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,kCAAkC;CACnC,uBAAuB;CACvB,mBAAmB;CACnB,QAAQ;AACT;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,UAAU;AACZ;;AAEA;EACE,eAAe;EACf,SAAS;EACT,UAAU;EACV,WAAW;EACX,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,cAAc;EACd,6BAA6B;EAC7B,kBAAkB;EAClB,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,aAAa;AACf","sourcesContent":[":root {\n  --background: black;\n  --red: #d60000;\n  --gold: #fdc854;\n }\n\n.cart-popup {\n  position: fixed;\n  top: 10vh;\n  left: 10vw;\n  width: 80vw;\n  height: 80vh;\n  padding: 2em;\n  background-color: black;\n  z-index: 101;\n  color: var(--gold);\n  text-align: center;\n  box-shadow: 0 0 30px var(--gold);\n  display: none;\n}\n\n.cart-popup.active {\n  display: block;\n}\n\n.cart-popup__container {\n  height: 80%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 1em;\n}\n\n.close-popup {\n  display: block;\n  padding: 0.1em 0.5em;\n  border-radius: 10%;\n  position: absolute;\n  right: 1em;\n  top: 1em;\n  cursor: pointer;\n  transition: 0.2s;\n}\n\n.close-popup:hover {\n  transform: scale(1.1, 1.1);\n  border: 1px solid var(--gold);\n  box-shadow: 2px 2px 15px var(--gold);\n  transition: 0.2s;\n}\n\n.close-popup:active {\n  transform: none;\n}\n\n.cart-item {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n justify-content: center;\n align-items: center;\n gap: 1em;\n}\n\n.cart__number{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 0.5em;\n}\n\n.cart__error {\n  position: fixed;\n  top: 10vh;\n  left: 10vw;\n  width: 80vw;\n  height: 80vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: 2em;\n  background: var(--background);\n  color: var(--gold);\n  z-index: 100;\n  display: none;\n}\n\n.cart__error.active {\n  display: flex;\n}\n\n\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/filters/filters.css":
/*!**********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/filters/filters.css ***!
  \**********************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --background: black;\r\n  --red: #d60000;\r\n  --gold: #fdc854;\r\n }\r\n*{\r\n  box-sizing: border-box;\r\n}\r\n.filters-form {\r\n  width: 80vw;\r\n  background-color: rgba(0,0,0,0.5);\r\n  border-radius: 1em;\r\n  box-shadow: 0 0 20px var(--gold);\r\n  color: var(--gold);\r\n  padding: 1em;\r\n}\r\n\r\n.filters-container {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr 1fr;\r\n  grid-template-rows: 1fr ;\r\n  grid-template-areas: \" select  filter-color filter-country\"\r\n                       \"   button      .         button\";\r\n}\r\n\r\n.filter-name {\r\n  margin-bottom: 10px;\r\n}\r\n.country-filter {\r\n  grid-area: 'filter-country';\r\n}\r\n.color-filter {\r\n  grid-area: 'filter-color';\r\n}\r\n\r\n.sort {\r\n  grid-area: 'select';\r\n}\r\n\r\n.reset {\r\n  grid-area: 'button';\r\n  margin-right: auto;\r\n}\r\n\r\n.reset-filters {\r\n  grid-area: 'button';\r\n  margin-left: auto;\r\n}\r\ninput[type=\"checkbox\"] {\r\n  border-radius: 0;\r\n-webkit-appearence:none;\r\noutline: none;\r\n}\r\n\r\n.checkbox{\r\n  margin-bottom: 1.5em;\r\n  padding-left: 2.5em;\r\n  position: relative;\r\n}\r\n\r\ninput[type=\"checkbox\"],\r\n.checkbox label::before {\r\ncursor: pointer;\r\nheight: 24px;\r\nleft: 0;\r\nposition: absolute;\r\nwidth: 24px;\r\n}\r\n\r\ninput[type=\"checkbox\"]{\r\n  display: inline-block;\r\n  opacity: 0;\r\n  vertical-align: middle;\r\n}\r\n\r\n.checkbox label::before {\r\n  border: 2px solid var(--gold);\r\n  border-radius: 4px;\r\n  color: var(--gold);\r\n  content: '';\r\n  font-size: 1.2em;\r\n}\r\n\r\n.checkbox input[type=\"checkbox\"]:checked + label::before {\r\n  border-color: var(--gold);\r\n  content: '\\2714';\r\n}\r\nlabel {\r\n  display: block;\r\n}\r\n\r\nselect {\r\n  appearance: none;\r\n  outline: 0;\r\n  box-shadow: none;\r\n  flex: 1;\r\n  padding: 0 1em;\r\n  color: var(--gold);\r\n  background-color: var(--background);\r\n  background-image: none;\r\n  cursor: pointer;\r\n  padding: 6px;\r\n  font-size: 17px;\r\n  max-width: 20em;\r\n  border: 2px solid var(--gold);\r\n  border-radius: 10px;\r\n  box-shadow:  0 0 30px var(--gold);\r\n}\r\n/* Remove IE arrow */\r\nselect::-ms-expand {\r\n  display: none;\r\n}\r\n/* Custom Select wrapper */\r\nselect {\r\n  position: relative;\r\n  display: flex;\r\n  max-width: 20em;\r\n  height: 2em;\r\n  border-radius: .25em;\r\n  overflow: hidden;\r\n  background-color: var(--background);\r\n  font-size: 17px;\r\n  text-align: center;\r\n  border: 2px solid var(--gold);\r\n  box-shadow:  0 0 30px var(--gold);\r\n  border-radius: 5px;\r\n}\r\n/* Arrow */\r\nselect::after {\r\n  content: '\\25BC';\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  padding: 1em;\r\n  background-color: var(--gold);\r\n  transition: .25s all ease;\r\n  pointer-events: none;\r\n}\r\n/* Transition */\r\nselect:hover::after {\r\n  color: #f39c12;\r\n}\r\n\r\n.reset-filters {\r\n  width: 10em;\r\n  height: 3em;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 0.5em;\r\n}\r\n\r\n/* Other styles*/\r\n\r\n\r\n", "",{"version":3,"sources":["webpack://./src/components/filters/filters.css"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,cAAc;EACd,eAAe;CAChB;AACD;EACE,sBAAsB;AACxB;AACA;EACE,WAAW;EACX,iCAAiC;EACjC,kBAAkB;EAClB,gCAAgC;EAChC,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,kCAAkC;EAClC,wBAAwB;EACxB;wDACsD;AACxD;;AAEA;EACE,mBAAmB;AACrB;AACA;EACE,2BAA2B;AAC7B;AACA;EACE,yBAAyB;AAC3B;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;EACnB,iBAAiB;AACnB;AACA;EACE,gBAAgB;AAClB,uBAAuB;AACvB,aAAa;AACb;;AAEA;EACE,oBAAoB;EACpB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;;AAEA,eAAe;AACf,YAAY;AACZ,OAAO;AACP,kBAAkB;AAClB,WAAW;AACX;;AAEA;EACE,qBAAqB;EACrB,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,6BAA6B;EAC7B,kBAAkB;EAClB,kBAAkB;EAClB,WAAW;EACX,gBAAgB;AAClB;;AAEA;EACE,yBAAyB;EACzB,gBAAgB;AAClB;AACA;EACE,cAAc;AAChB;;AAEA;EACE,gBAAgB;EAChB,UAAU;EACV,gBAAgB;EAChB,OAAO;EACP,cAAc;EACd,kBAAkB;EAClB,mCAAmC;EACnC,sBAAsB;EACtB,eAAe;EACf,YAAY;EACZ,eAAe;EACf,eAAe;EACf,6BAA6B;EAC7B,mBAAmB;EACnB,iCAAiC;AACnC;AACA,oBAAoB;AACpB;EACE,aAAa;AACf;AACA,0BAA0B;AAC1B;EACE,kBAAkB;EAClB,aAAa;EACb,eAAe;EACf,WAAW;EACX,oBAAoB;EACpB,gBAAgB;EAChB,mCAAmC;EACnC,eAAe;EACf,kBAAkB;EAClB,6BAA6B;EAC7B,iCAAiC;EACjC,kBAAkB;AACpB;AACA,UAAU;AACV;EACE,gBAAgB;EAChB,kBAAkB;EAClB,MAAM;EACN,QAAQ;EACR,YAAY;EACZ,6BAA6B;EAC7B,yBAAyB;EACzB,oBAAoB;AACtB;AACA,eAAe;AACf;EACE,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,WAAW;EACX,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,cAAc;AAChB;;AAEA,gBAAgB","sourcesContent":[":root {\r\n  --background: black;\r\n  --red: #d60000;\r\n  --gold: #fdc854;\r\n }\r\n*{\r\n  box-sizing: border-box;\r\n}\r\n.filters-form {\r\n  width: 80vw;\r\n  background-color: rgba(0,0,0,0.5);\r\n  border-radius: 1em;\r\n  box-shadow: 0 0 20px var(--gold);\r\n  color: var(--gold);\r\n  padding: 1em;\r\n}\r\n\r\n.filters-container {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr 1fr;\r\n  grid-template-rows: 1fr ;\r\n  grid-template-areas: \" select  filter-color filter-country\"\r\n                       \"   button      .         button\";\r\n}\r\n\r\n.filter-name {\r\n  margin-bottom: 10px;\r\n}\r\n.country-filter {\r\n  grid-area: 'filter-country';\r\n}\r\n.color-filter {\r\n  grid-area: 'filter-color';\r\n}\r\n\r\n.sort {\r\n  grid-area: 'select';\r\n}\r\n\r\n.reset {\r\n  grid-area: 'button';\r\n  margin-right: auto;\r\n}\r\n\r\n.reset-filters {\r\n  grid-area: 'button';\r\n  margin-left: auto;\r\n}\r\ninput[type=\"checkbox\"] {\r\n  border-radius: 0;\r\n-webkit-appearence:none;\r\noutline: none;\r\n}\r\n\r\n.checkbox{\r\n  margin-bottom: 1.5em;\r\n  padding-left: 2.5em;\r\n  position: relative;\r\n}\r\n\r\ninput[type=\"checkbox\"],\r\n.checkbox label::before {\r\ncursor: pointer;\r\nheight: 24px;\r\nleft: 0;\r\nposition: absolute;\r\nwidth: 24px;\r\n}\r\n\r\ninput[type=\"checkbox\"]{\r\n  display: inline-block;\r\n  opacity: 0;\r\n  vertical-align: middle;\r\n}\r\n\r\n.checkbox label::before {\r\n  border: 2px solid var(--gold);\r\n  border-radius: 4px;\r\n  color: var(--gold);\r\n  content: '';\r\n  font-size: 1.2em;\r\n}\r\n\r\n.checkbox input[type=\"checkbox\"]:checked + label::before {\r\n  border-color: var(--gold);\r\n  content: '\\2714';\r\n}\r\nlabel {\r\n  display: block;\r\n}\r\n\r\nselect {\r\n  appearance: none;\r\n  outline: 0;\r\n  box-shadow: none;\r\n  flex: 1;\r\n  padding: 0 1em;\r\n  color: var(--gold);\r\n  background-color: var(--background);\r\n  background-image: none;\r\n  cursor: pointer;\r\n  padding: 6px;\r\n  font-size: 17px;\r\n  max-width: 20em;\r\n  border: 2px solid var(--gold);\r\n  border-radius: 10px;\r\n  box-shadow:  0 0 30px var(--gold);\r\n}\r\n/* Remove IE arrow */\r\nselect::-ms-expand {\r\n  display: none;\r\n}\r\n/* Custom Select wrapper */\r\nselect {\r\n  position: relative;\r\n  display: flex;\r\n  max-width: 20em;\r\n  height: 2em;\r\n  border-radius: .25em;\r\n  overflow: hidden;\r\n  background-color: var(--background);\r\n  font-size: 17px;\r\n  text-align: center;\r\n  border: 2px solid var(--gold);\r\n  box-shadow:  0 0 30px var(--gold);\r\n  border-radius: 5px;\r\n}\r\n/* Arrow */\r\nselect::after {\r\n  content: '\\25BC';\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  padding: 1em;\r\n  background-color: var(--gold);\r\n  transition: .25s all ease;\r\n  pointer-events: none;\r\n}\r\n/* Transition */\r\nselect:hover::after {\r\n  color: #f39c12;\r\n}\r\n\r\n.reset-filters {\r\n  width: 10em;\r\n  height: 3em;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 0.5em;\r\n}\r\n\r\n/* Other styles*/\r\n\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/winecards/winecards.css":
/*!**************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/winecards/winecards.css ***!
  \**************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --background: #140a0a;\r\n  --red: #d60000;\r\n  --gold: #fdc854;\r\n }\r\n\r\n .winecards{\r\n  width: 90%;\r\n  margin: 0 auto;\r\n  max-width: 80rem;\r\n}\r\n\r\n.winecards-container {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  grid-column-gap: 3em;\r\n  grid-row-gap: 3em;\r\n}\r\n\r\n.winecards__item {\r\n  text-align: center;\r\n  width: 20em;\r\n  cursor: pointer;\r\n  -webkit-transform-style: preserve-3d;\r\n  transform-style: preserve-3d;\r\n  -webkit-perspective: 1000px;\r\n    perspective: 1000px;\r\n}\r\n\r\n.winecards__face,\r\n.winecards__back {\r\n  padding: 1rem;\r\n  box-shadow: 0 0 12px 0 var(--gold);\r\n  border-radius: 10px;\r\n  -webkit-transition: -webkit-transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);\r\n  transition: -webkit-transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);\r\n  -o-transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);\r\n  transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);\r\n  transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1), -webkit-transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);\r\n  -webkit-backface-visibility: hidden;\r\n          backface-visibility: hidden;\r\n  text-align: center;\r\n  min-height: 350px;\r\n  height: auto;\r\n  border-radius: 10px;\r\n  color: #fff;\r\n  text-shadow: 10px 10px 10px var(--background);\r\n  font-size: 1rem;\r\n}\r\n\r\n.inCart .winecards__face,\r\n.inCart .winecards__back {\r\n  box-shadow: 0 0 12px 0 var(--red);\r\n}\r\n\r\n.winecards__back{\r\n  background: var(--background);\r\n  color: var(--gold);\r\n}\r\n\r\n.winecards__face:after{\r\n\tposition: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 1;\r\n    width: 100%;\r\n    height: 100%;\r\n    content: '';\r\n    display: block;\r\n    opacity: .5;\r\n    background-color: var(--background);\r\n    -webkit-backface-visibility: hidden;\r\n            backface-visibility: hidden;\r\n    border-radius: 10px;\r\n}\r\n\r\n\r\n\r\n.winecards__item .winecards__face,\r\n.winecards__item .winecards__back{\r\n    -webkit-transition: -webkit-transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);\r\n    transition: -webkit-transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);\r\n    -o-transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);\r\n    transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);\r\n    transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1), -webkit-transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);\r\n}\r\n\r\n.winecards__back{\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  text-shadow: 10px 10px 10px var(--gold);\r\n  font-size: larger;\r\n}\r\n\r\n.winecards__face-details {\r\n  -webkit-transform: translateY(-50%) translateZ(60px) scale(0.94);\r\n  transform: translateY(-50%) translateZ(60px) scale(0.94);\r\ntop: 50%;\r\nposition: absolute;\r\nleft: 0;\r\nwidth: 100%;\r\npadding: 2rem;\r\n-webkit-box-sizing: border-box;\r\n  box-sizing: border-box;\r\noutline: 1px solid transparent;\r\n-webkit-perspective: inherit;\r\n  perspective: inherit;\r\nz-index: 3;\r\n}\r\n\r\n\r\n.winecards__item .winecards__back{\r\n  -webkit-transform: rotateY(180deg);\r\n          transform: rotateY(180deg);\r\n  -webkit-transform-style: preserve-3d;\r\n          transform-style: preserve-3d;\r\n}\r\n\r\n.winecards__item .winecards__face{\r\n  -webkit-transform: rotateY(0deg);\r\n          transform: rotateY(0deg);\r\n  -webkit-transform-style: preserve-3d;\r\n          transform-style: preserve-3d;\r\n}\r\n\r\n.winecards__item:focus .winecards__back,\r\n.winecards__item:hover .winecards__back{\r\n  -webkit-transform: rotateY(0deg);\r\n          transform: rotateY(0deg);\r\n  -webkit-transform-style: preserve-3d;\r\n          transform-style: preserve-3d;\r\n}\r\n\r\n.winecards__item:hover .winecards__face,\r\n.winecards__item:focus .winecards__face{\r\n  -webkit-transform: rotateY(-180deg);\r\n          transform: rotateY(-180deg);\r\n  -webkit-transform-style: preserve-3d;\r\n          transform-style: preserve-3d;\r\n}\r\n\r\n.winecards__face-photo{\r\n  width: 10em;\r\n  height: 10em;\r\n  background-size: contain;\r\n  background-repeat: no-repeat;\r\n  background-position-x: 100%;\r\n  margin: 1em;\r\n}\r\n\r\n.winecards__back-name {\r\n  color: white;\r\n  margin-bottom: 1em;\r\n  text-shadow: white;\r\n}\r\n\r\n.cart__btn {\r\n  background-color: var(--gold);\r\n  border: var(--gold);\r\n  color: var(--background);\r\n  text-shadow: 2px 2px 10px var(--background);\r\n  box-shadow: 10px 10px 20px var(--background);\r\n  border-radius: 5px;\r\n  padding: 1em;\r\n  cursor: pointer;\r\n  transition: 0.2s;\r\n  margin-top: 2em;\r\n}\r\n\r\n.cart__btn:hover,\r\n.cart__btn:focus{\r\n  background-color: var(--background);\r\n  box-shadow: 10px 10px 20px var(--gold);\r\n  border: 1px solid  var(--gold);\r\n  color: var(--gold);\r\n  text-shadow: 2px 2px 10px var(--gold);\r\n  transition: 0.2s;\r\n}\r\n\r\n\r\n\r\n", "",{"version":3,"sources":["webpack://./src/components/winecards/winecards.css"],"names":[],"mappings":"AAAA;EACE,qBAAqB;EACrB,cAAc;EACd,eAAe;CAChB;;CAEA;EACC,UAAU;EACV,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,uBAAuB;EACvB,oBAAoB;EACpB,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,eAAe;EACf,oCAAoC;EACpC,4BAA4B;EAC5B,2BAA2B;IACzB,mBAAmB;AACvB;;AAEA;;EAEE,aAAa;EACb,kCAAkC;EAClC,mBAAmB;EACnB,wEAAwE;EACxE,gEAAgE;EAChE,2DAA2D;EAC3D,wDAAwD;EACxD,8GAA8G;EAC9G,mCAAmC;UAC3B,2BAA2B;EACnC,kBAAkB;EAClB,iBAAiB;EACjB,YAAY;EACZ,mBAAmB;EACnB,WAAW;EACX,6CAA6C;EAC7C,eAAe;AACjB;;AAEA;;EAEE,iCAAiC;AACnC;;AAEA;EACE,6BAA6B;EAC7B,kBAAkB;AACpB;;AAEA;CACC,kBAAkB;IACf,MAAM;IACN,OAAO;IACP,UAAU;IACV,WAAW;IACX,YAAY;IACZ,WAAW;IACX,cAAc;IACd,WAAW;IACX,mCAAmC;IACnC,mCAAmC;YAC3B,2BAA2B;IACnC,mBAAmB;AACvB;;;;AAIA;;IAEI,wEAAwE;IACxE,gEAAgE;IAChE,2DAA2D;IAC3D,wDAAwD;IACxD,8GAA8G;AAClH;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,WAAW;EACX,uCAAuC;EACvC,iBAAiB;AACnB;;AAEA;EACE,gEAAgE;EAChE,wDAAwD;AAC1D,QAAQ;AACR,kBAAkB;AAClB,OAAO;AACP,WAAW;AACX,aAAa;AACb,8BAA8B;EAC5B,sBAAsB;AACxB,8BAA8B;AAC9B,4BAA4B;EAC1B,oBAAoB;AACtB,UAAU;AACV;;;AAGA;EACE,kCAAkC;UAC1B,0BAA0B;EAClC,oCAAoC;UAC5B,4BAA4B;AACtC;;AAEA;EACE,gCAAgC;UACxB,wBAAwB;EAChC,oCAAoC;UAC5B,4BAA4B;AACtC;;AAEA;;EAEE,gCAAgC;UACxB,wBAAwB;EAChC,oCAAoC;UAC5B,4BAA4B;AACtC;;AAEA;;EAEE,mCAAmC;UAC3B,2BAA2B;EACnC,oCAAoC;UAC5B,4BAA4B;AACtC;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,wBAAwB;EACxB,4BAA4B;EAC5B,2BAA2B;EAC3B,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,6BAA6B;EAC7B,mBAAmB;EACnB,wBAAwB;EACxB,2CAA2C;EAC3C,4CAA4C;EAC5C,kBAAkB;EAClB,YAAY;EACZ,eAAe;EACf,gBAAgB;EAChB,eAAe;AACjB;;AAEA;;EAEE,mCAAmC;EACnC,sCAAsC;EACtC,8BAA8B;EAC9B,kBAAkB;EAClB,qCAAqC;EACrC,gBAAgB;AAClB","sourcesContent":[":root {\r\n  --background: #140a0a;\r\n  --red: #d60000;\r\n  --gold: #fdc854;\r\n }\r\n\r\n .winecards{\r\n  width: 90%;\r\n  margin: 0 auto;\r\n  max-width: 80rem;\r\n}\r\n\r\n.winecards-container {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  grid-column-gap: 3em;\r\n  grid-row-gap: 3em;\r\n}\r\n\r\n.winecards__item {\r\n  text-align: center;\r\n  width: 20em;\r\n  cursor: pointer;\r\n  -webkit-transform-style: preserve-3d;\r\n  transform-style: preserve-3d;\r\n  -webkit-perspective: 1000px;\r\n    perspective: 1000px;\r\n}\r\n\r\n.winecards__face,\r\n.winecards__back {\r\n  padding: 1rem;\r\n  box-shadow: 0 0 12px 0 var(--gold);\r\n  border-radius: 10px;\r\n  -webkit-transition: -webkit-transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);\r\n  transition: -webkit-transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);\r\n  -o-transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);\r\n  transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);\r\n  transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1), -webkit-transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);\r\n  -webkit-backface-visibility: hidden;\r\n          backface-visibility: hidden;\r\n  text-align: center;\r\n  min-height: 350px;\r\n  height: auto;\r\n  border-radius: 10px;\r\n  color: #fff;\r\n  text-shadow: 10px 10px 10px var(--background);\r\n  font-size: 1rem;\r\n}\r\n\r\n.inCart .winecards__face,\r\n.inCart .winecards__back {\r\n  box-shadow: 0 0 12px 0 var(--red);\r\n}\r\n\r\n.winecards__back{\r\n  background: var(--background);\r\n  color: var(--gold);\r\n}\r\n\r\n.winecards__face:after{\r\n\tposition: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 1;\r\n    width: 100%;\r\n    height: 100%;\r\n    content: '';\r\n    display: block;\r\n    opacity: .5;\r\n    background-color: var(--background);\r\n    -webkit-backface-visibility: hidden;\r\n            backface-visibility: hidden;\r\n    border-radius: 10px;\r\n}\r\n\r\n\r\n\r\n.winecards__item .winecards__face,\r\n.winecards__item .winecards__back{\r\n    -webkit-transition: -webkit-transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);\r\n    transition: -webkit-transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);\r\n    -o-transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);\r\n    transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);\r\n    transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1), -webkit-transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);\r\n}\r\n\r\n.winecards__back{\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  text-shadow: 10px 10px 10px var(--gold);\r\n  font-size: larger;\r\n}\r\n\r\n.winecards__face-details {\r\n  -webkit-transform: translateY(-50%) translateZ(60px) scale(0.94);\r\n  transform: translateY(-50%) translateZ(60px) scale(0.94);\r\ntop: 50%;\r\nposition: absolute;\r\nleft: 0;\r\nwidth: 100%;\r\npadding: 2rem;\r\n-webkit-box-sizing: border-box;\r\n  box-sizing: border-box;\r\noutline: 1px solid transparent;\r\n-webkit-perspective: inherit;\r\n  perspective: inherit;\r\nz-index: 3;\r\n}\r\n\r\n\r\n.winecards__item .winecards__back{\r\n  -webkit-transform: rotateY(180deg);\r\n          transform: rotateY(180deg);\r\n  -webkit-transform-style: preserve-3d;\r\n          transform-style: preserve-3d;\r\n}\r\n\r\n.winecards__item .winecards__face{\r\n  -webkit-transform: rotateY(0deg);\r\n          transform: rotateY(0deg);\r\n  -webkit-transform-style: preserve-3d;\r\n          transform-style: preserve-3d;\r\n}\r\n\r\n.winecards__item:focus .winecards__back,\r\n.winecards__item:hover .winecards__back{\r\n  -webkit-transform: rotateY(0deg);\r\n          transform: rotateY(0deg);\r\n  -webkit-transform-style: preserve-3d;\r\n          transform-style: preserve-3d;\r\n}\r\n\r\n.winecards__item:hover .winecards__face,\r\n.winecards__item:focus .winecards__face{\r\n  -webkit-transform: rotateY(-180deg);\r\n          transform: rotateY(-180deg);\r\n  -webkit-transform-style: preserve-3d;\r\n          transform-style: preserve-3d;\r\n}\r\n\r\n.winecards__face-photo{\r\n  width: 10em;\r\n  height: 10em;\r\n  background-size: contain;\r\n  background-repeat: no-repeat;\r\n  background-position-x: 100%;\r\n  margin: 1em;\r\n}\r\n\r\n.winecards__back-name {\r\n  color: white;\r\n  margin-bottom: 1em;\r\n  text-shadow: white;\r\n}\r\n\r\n.cart__btn {\r\n  background-color: var(--gold);\r\n  border: var(--gold);\r\n  color: var(--background);\r\n  text-shadow: 2px 2px 10px var(--background);\r\n  box-shadow: 10px 10px 20px var(--background);\r\n  border-radius: 5px;\r\n  padding: 1em;\r\n  cursor: pointer;\r\n  transition: 0.2s;\r\n  margin-top: 2em;\r\n}\r\n\r\n.cart__btn:hover,\r\n.cart__btn:focus{\r\n  background-color: var(--background);\r\n  box-shadow: 10px 10px 20px var(--gold);\r\n  border: 1px solid  var(--gold);\r\n  color: var(--gold);\r\n  text-shadow: 2px 2px 10px var(--gold);\r\n  transition: 0.2s;\r\n}\r\n\r\n\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/global.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/global.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/img/bg1.jpg */ "./src/assets/img/bg1.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/img/cart-gold.svg */ "./src/assets/img/cart-gold.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n --background: black;\r\n --red: #d60000;\r\n --gold: #fdc854;\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\na {\r\n  text-decoration: none;\r\n  transition: 0.3s;\r\n\r\n}\r\n\r\nbody {\r\n  width: 100vw;\r\n  max-height: 100vh;\r\n  display: grid;\r\n  grid-template-areas:\r\n    'header header header'\r\n    'main main main'\r\n    'footer footer footer';\r\n  grid-row-gap: 1em;\r\n  grid-template-rows: auto 1fr auto;\r\n  grid-template-columns: 1fr 1fr 1fr;\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-attachment: fixed;\r\n  background-size: cover;\r\n  position: relative;\r\n}\r\n\r\nbutton {\r\n  background-color: var(--gold);\r\n  border: var(--gold);\r\n  color: var(--background);\r\n  text-shadow: 2px 2px 10px var(--background);\r\n  box-shadow: 10px 10px 20px var(--background);\r\n  border-radius: 5px;\r\n  padding: 1em;\r\n  cursor: pointer;\r\n  transition: 0.3s;\r\n}\r\nbutton:hover,\r\nbutton:focus {\r\n  background-color: var(--background);\r\n  box-shadow: 10px 10px 20px var(--gold);\r\n  border: 1px solid  var(--gold);\r\n  color: var(--gold);\r\n  text-shadow: 2px 2px 10px var(--gold);\r\n  transition: 0.3s;\r\n}\r\n  .header {\r\n    grid-area: header;\r\n    height: 50px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    margin:  1em;\r\n  }\r\n\r\n  .search-container__input {\r\n    background-color: var(--background);\r\n    padding: 6px;\r\n    font-size: 17px;\r\n    border: 2px solid var(--gold);\r\n    box-shadow:  0 0 30px var(--gold);\r\n    border-radius: 5px;\r\n  }\r\n\r\n  .search-container__input:focus{\r\n    box-shadow: inset  0 0 30px var(--gold);\r\n    outline: none;\r\n  }\r\n\r\n  .header__cart {\r\n  position: relative;\r\n  width: 3em;\r\n  height: 3em;\r\n  transition: 0.3s;\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat center;\r\n  background-size: cover;\r\n  cursor: pointer;\r\n  }\r\n\r\n  .header__cart:hover {\r\n    transform: scale(1.1, 1.1);\r\n    transition: 0.3s;\r\n  }\r\n\r\n  .cart__products {\r\n    position: absolute;\r\n    top: 5px;\r\n    left: 5px;\r\n    display: block;\r\n    background-color: var(--red);\r\n    color: var(--gold);\r\n    border-radius: 50%;\r\n    padding: 1px 6px;\r\n    width: 20px;\r\n    height: 20px;\r\n  }\r\n\r\n  .main{\r\n    grid-area: main;\r\n    height: 100%;\r\n    max-width: 100%;\r\n    margin: 0 1em;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 1em;\r\n    background-attachment: fixed;\r\n  }\r\n\r\n  .overlay {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: var(--background);\r\n    opacity: 0.5;\r\n    z-index: 99;\r\n    display: none;\r\n\r\n  }\r\n\r\n  .overlay.active {\r\n    display: block;\r\n  }", "",{"version":3,"sources":["webpack://./src/global.css"],"names":[],"mappings":"AAAA;CACC,mBAAmB;CACnB,cAAc;CACd,eAAe;AAChB;;AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;AACA;EACE,qBAAqB;EACrB,gBAAgB;;AAElB;;AAEA;EACE,YAAY;EACZ,iBAAiB;EACjB,aAAa;EACb;;;0BAGwB;EACxB,iBAAiB;EACjB,iCAAiC;EACjC,kCAAkC;EAClC,yDAA6C;EAC7C,4BAA4B;EAC5B,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;EACE,6BAA6B;EAC7B,mBAAmB;EACnB,wBAAwB;EACxB,2CAA2C;EAC3C,4CAA4C;EAC5C,kBAAkB;EAClB,YAAY;EACZ,eAAe;EACf,gBAAgB;AAClB;AACA;;EAEE,mCAAmC;EACnC,sCAAsC;EACtC,8BAA8B;EAC9B,kBAAkB;EAClB,qCAAqC;EACrC,gBAAgB;AAClB;EACE;IACE,iBAAiB;IACjB,YAAY;IACZ,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,YAAY;EACd;;EAEA;IACE,mCAAmC;IACnC,YAAY;IACZ,eAAe;IACf,6BAA6B;IAC7B,iCAAiC;IACjC,kBAAkB;EACpB;;EAEA;IACE,uCAAuC;IACvC,aAAa;EACf;;EAEA;EACA,kBAAkB;EAClB,UAAU;EACV,WAAW;EACX,gBAAgB;EAChB,oEAA8D;EAC9D,sBAAsB;EACtB,eAAe;EACf;;EAEA;IACE,0BAA0B;IAC1B,gBAAgB;EAClB;;EAEA;IACE,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,cAAc;IACd,4BAA4B;IAC5B,kBAAkB;IAClB,kBAAkB;IAClB,gBAAgB;IAChB,WAAW;IACX,YAAY;EACd;;EAEA;IACE,eAAe;IACf,YAAY;IACZ,eAAe;IACf,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,QAAQ;IACR,4BAA4B;EAC9B;;EAEA;IACE,eAAe;IACf,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,mCAAmC;IACnC,YAAY;IACZ,WAAW;IACX,aAAa;;EAEf;;EAEA;IACE,cAAc;EAChB","sourcesContent":[":root {\r\n --background: black;\r\n --red: #d60000;\r\n --gold: #fdc854;\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\na {\r\n  text-decoration: none;\r\n  transition: 0.3s;\r\n\r\n}\r\n\r\nbody {\r\n  width: 100vw;\r\n  max-height: 100vh;\r\n  display: grid;\r\n  grid-template-areas:\r\n    'header header header'\r\n    'main main main'\r\n    'footer footer footer';\r\n  grid-row-gap: 1em;\r\n  grid-template-rows: auto 1fr auto;\r\n  grid-template-columns: 1fr 1fr 1fr;\r\n  background-image: url('./assets/img/bg1.jpg');\r\n  background-attachment: fixed;\r\n  background-size: cover;\r\n  position: relative;\r\n}\r\n\r\nbutton {\r\n  background-color: var(--gold);\r\n  border: var(--gold);\r\n  color: var(--background);\r\n  text-shadow: 2px 2px 10px var(--background);\r\n  box-shadow: 10px 10px 20px var(--background);\r\n  border-radius: 5px;\r\n  padding: 1em;\r\n  cursor: pointer;\r\n  transition: 0.3s;\r\n}\r\nbutton:hover,\r\nbutton:focus {\r\n  background-color: var(--background);\r\n  box-shadow: 10px 10px 20px var(--gold);\r\n  border: 1px solid  var(--gold);\r\n  color: var(--gold);\r\n  text-shadow: 2px 2px 10px var(--gold);\r\n  transition: 0.3s;\r\n}\r\n  .header {\r\n    grid-area: header;\r\n    height: 50px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    margin:  1em;\r\n  }\r\n\r\n  .search-container__input {\r\n    background-color: var(--background);\r\n    padding: 6px;\r\n    font-size: 17px;\r\n    border: 2px solid var(--gold);\r\n    box-shadow:  0 0 30px var(--gold);\r\n    border-radius: 5px;\r\n  }\r\n\r\n  .search-container__input:focus{\r\n    box-shadow: inset  0 0 30px var(--gold);\r\n    outline: none;\r\n  }\r\n\r\n  .header__cart {\r\n  position: relative;\r\n  width: 3em;\r\n  height: 3em;\r\n  transition: 0.3s;\r\n  background: url('./assets/img/cart-gold.svg') no-repeat center;\r\n  background-size: cover;\r\n  cursor: pointer;\r\n  }\r\n\r\n  .header__cart:hover {\r\n    transform: scale(1.1, 1.1);\r\n    transition: 0.3s;\r\n  }\r\n\r\n  .cart__products {\r\n    position: absolute;\r\n    top: 5px;\r\n    left: 5px;\r\n    display: block;\r\n    background-color: var(--red);\r\n    color: var(--gold);\r\n    border-radius: 50%;\r\n    padding: 1px 6px;\r\n    width: 20px;\r\n    height: 20px;\r\n  }\r\n\r\n  .main{\r\n    grid-area: main;\r\n    height: 100%;\r\n    max-width: 100%;\r\n    margin: 0 1em;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 1em;\r\n    background-attachment: fixed;\r\n  }\r\n\r\n  .overlay {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: var(--background);\r\n    opacity: 0.5;\r\n    z-index: 99;\r\n    display: none;\r\n\r\n  }\r\n\r\n  .overlay.active {\r\n    display: block;\r\n  }"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/components/cart/cart.css":
/*!**************************************!*\
  !*** ./src/components/cart/cart.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_cart_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./cart.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/cart/cart.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_cart_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_cart_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_cart_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_cart_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/filters/filters.css":
/*!********************************************!*\
  !*** ./src/components/filters/filters.css ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_filters_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./filters.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/filters/filters.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_filters_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_filters_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_filters_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_filters_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/winecards/winecards.css":
/*!************************************************!*\
  !*** ./src/components/winecards/winecards.css ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_winecards_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./winecards.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/winecards/winecards.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_winecards_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_winecards_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_winecards_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_winecards_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/global.css":
/*!************************!*\
  !*** ./src/global.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_global_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./global.css */ "./node_modules/css-loader/dist/cjs.js!./src/global.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_global_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_global_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_global_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_global_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ }),

/***/ "./src/components/app/app.ts":
/*!***********************************!*\
  !*** ./src/components/app/app.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var _cart_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cart/cart */ "./src/components/cart/cart.ts");
/* harmony import */ var _winecards_winecards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../winecards/winecards */ "./src/components/winecards/winecards.ts");
/* harmony import */ var _html_components_header_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../html-components/header/header */ "./src/html-components/header/header.ts");
/* harmony import */ var _html_components_main_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../html-components/main/main */ "./src/html-components/main/main.ts");
/* harmony import */ var _filters_filterSettings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../filters/filterSettings */ "./src/components/filters/filterSettings.ts");
/* harmony import */ var _utils_localstorage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/localstorage */ "./src/utils/localstorage.ts");






class App {
    constructor() {
        this.cartsettings = new _cart_cart__WEBPACK_IMPORTED_MODULE_0__.CartSettings();
        this.winecards = new _winecards_winecards__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.filterSettings = new _filters_filterSettings__WEBPACK_IMPORTED_MODULE_4__["default"]();
        this.header = new _html_components_header_header__WEBPACK_IMPORTED_MODULE_2__["default"]('header', 'header');
        this.main = new _html_components_main_main__WEBPACK_IMPORTED_MODULE_3__["default"]('main', 'main');
    }
    start(data) {
        if (localStorage.getItem('sorted')) {
            data = _utils_localstorage__WEBPACK_IMPORTED_MODULE_5__.LocalStorage.getLocalStorage("sorted" /* localStorageKeys.sorted */) || data;
        }
        ;
        App.container.append(this.header.render());
        App.container.append(this.main.render());
        const countryFilters = document.querySelector('.country-filter');
        const colorFilters = document.querySelector('.color-filter');
        this.winecards.render(data);
        this.cartsettings.render();
        if (localStorage.getItem('filter')) {
            this.filterSettings.filtersObj = _utils_localstorage__WEBPACK_IMPORTED_MODULE_5__.LocalStorage.getLocalStorage("filter" /* localStorageKeys.filter */) || '';
        }
        ;
        const filters = document.querySelector('#filters');
        [...filters.querySelectorAll('input')].forEach(item => {
            if (this.filterSettings.filtersObj.country.includes(item.value)) {
                item.checked = true;
                this.filterSettings.filterByCountry(data);
                this.winecards.render(this.filterSettings.filtered);
            }
            if (this.filterSettings.filtersObj.color.includes(item.value)) {
                item.checked = true;
                this.filterSettings.filterByColor(data);
                this.winecards.render(this.filterSettings.filtered);
            }
        });
        colorFilters.addEventListener('input', event => {
            this.filterSettings.filterByColor(data);
            this.winecards.render(this.filterSettings.filtered);
        });
        countryFilters.addEventListener('input', event => {
            this.filterSettings.filterByCountry(data);
            this.winecards.render(this.filterSettings.filtered);
        });
        document
            .querySelector('.reset-filters')
            .addEventListener('click', event => {
            event.preventDefault();
            this.filterSettings.resetFilters();
            this.winecards.render(data);
        });
        document.addEventListener('click', event => {
            if (event.target.classList.contains('cart__add')) {
                let articul = Number(event.target.dataset['articul']);
                console.log(articul);
                console.log(event.target);
                if (this.cartsettings.totalItems < 20) {
                    this.cartsettings.cartAdd(data, articul);
                    this.cartsettings.render();
                    this.winecards.render(data);
                }
                else {
                    document.querySelector('.cart__error').classList.add('active');
                    document.querySelector('.overlay').classList.add('active');
                    document.body.style.overflow = 'hidden';
                }
            }
        });
        document.addEventListener('click', event => {
            if (event.target.classList.contains('cart__remove')) {
                let articul = Number(event.target.dataset['articul']);
                if (this.cartsettings.totalItems > 0) {
                    this.cartsettings.cartRemove(data, articul);
                    this.cartsettings.render();
                    this.winecards.render(data);
                }
            }
        });
        document
            .querySelector('.error__btn')
            .addEventListener('click', event => {
            this.cartsettings.cartOpen();
            document.querySelector('.cart__error').classList.remove('active');
            document.body.style.overflow = 'auto';
        });
        document
            .querySelector('.cart')
            .addEventListener('click', event => {
            this.cartsettings.render();
            this.cartsettings.cartOpen();
            document.body.style.overflow = 'auto';
        });
        document
            .querySelector('.close-popup')
            .addEventListener('click', event => {
            this.cartsettings.cartClose();
        });
        document.
            querySelector('.select').addEventListener('change', event => {
            if (event.target.value === 'ByPriceUp') {
                this.filterSettings.sortPriceUp(data);
                this.winecards.render(this.filterSettings.sorted);
            }
            if (event.target.value === 'ByPriceDown') {
                this.filterSettings.sortPriceDown(data);
                this.winecards.render(this.filterSettings.sorted);
            }
        });
        document
            .querySelector('.reset').addEventListener('click', event => {
            this.filterSettings.resetAll();
            this.winecards.render(data);
        });
    }
}
App.container = document.body;


/***/ }),

/***/ "./src/components/cart/cart.ts":
/*!*************************************!*\
  !*** ./src/components/cart/cart.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartSettings": () => (/* binding */ CartSettings)
/* harmony export */ });
/* harmony import */ var _cart_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart.css */ "./src/components/cart/cart.css");
/* harmony import */ var _utils_localstorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/localstorage */ "./src/utils/localstorage.ts");
/* harmony import */ var _winecards_winecards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../winecards/winecards */ "./src/components/winecards/winecards.ts");



class CartSettings {
    constructor() {
        this.cart = [];
        this.totalItems = this.totalItems = _utils_localstorage__WEBPACK_IMPORTED_MODULE_1__.LocalStorage.getLocalStorage("totalItemsInCart" /* localStorageKeys.totalItemsInCart */) || 0;
    }
    cartAdd(data, articul) {
        console.log(articul);
        if (localStorage.getItem('cart')) {
            this.cart = _utils_localstorage__WEBPACK_IMPORTED_MODULE_1__.LocalStorage.getLocalStorage("cart" /* localStorageKeys.cart */) || '';
        }
        ;
        if (localStorage.getItem('goods')) {
            data = _utils_localstorage__WEBPACK_IMPORTED_MODULE_1__.LocalStorage.getLocalStorage("goods" /* localStorageKeys.goods */) || data;
        }
        ;
        console.log(this.cart);
        console.log(articul);
        const index = this.cart.findIndex(elem => elem.id === articul);
        console.log(index);
        if (index === -1) {
            data[articul]['count']--;
            data[articul]['inCart']++;
            this.cart.push(data[articul]);
            this.totalItems++;
            console.log('data count ', data[articul]['count']);
            console.log('data inCart ', data[articul]['inCart']);
            console.log(this.cart);
        }
        else {
            this.totalItems++;
            this.cart[index]['inCart']++;
            data[articul]['count']--;
            data[articul]['inCart']++;
            this.cart[index]['count']--;
            console.log('cart Count ', this.cart[index]['count']);
            console.log('data count ', data[articul]['count']);
            console.log('cart inCart ', this.cart[index]['inCart']);
            console.log('data inCart ', data[articul]['inCart']);
        }
        if (data[articul]['count'] === 0) {
            const winecards = new _winecards_winecards__WEBPACK_IMPORTED_MODULE_2__["default"]();
            winecards.render(data);
        }
        _utils_localstorage__WEBPACK_IMPORTED_MODULE_1__.LocalStorage.setLocalStorage("cart" /* localStorageKeys.cart */, this.cart);
        _utils_localstorage__WEBPACK_IMPORTED_MODULE_1__.LocalStorage.setLocalStorage("goods" /* localStorageKeys.goods */, data);
        _utils_localstorage__WEBPACK_IMPORTED_MODULE_1__.LocalStorage.setLocalStorage("totalItemsInCart" /* localStorageKeys.totalItemsInCart */, this.totalItems);
    }
    cartRemove(data, articul) {
        if (localStorage.getItem('cart')) {
            this.cart = _utils_localstorage__WEBPACK_IMPORTED_MODULE_1__.LocalStorage.getLocalStorage("cart" /* localStorageKeys.cart */) || '';
        }
        ;
        if (localStorage.getItem('goods')) {
            data = _utils_localstorage__WEBPACK_IMPORTED_MODULE_1__.LocalStorage.getLocalStorage("goods" /* localStorageKeys.goods */) || data;
        }
        ;
        console.log(articul);
        const index = this.cart.findIndex(elem => elem.id === articul);
        if (index >= 0) {
            this.totalItems--;
            this.cart[index]['inCart']--;
            data[articul]['count']++;
            data[articul]['inCart']--;
            this.cart[index]['count']++;
            console.log('cart Count ', this.cart[index]['count']);
            console.log('data count ', data[articul]['count']);
            console.log('cart inCart ', this.cart[index]['inCart']);
            console.log('data inCart ', data[articul]['inCart']);
        }
        _utils_localstorage__WEBPACK_IMPORTED_MODULE_1__.LocalStorage.setLocalStorage("cart" /* localStorageKeys.cart */, this.cart);
        _utils_localstorage__WEBPACK_IMPORTED_MODULE_1__.LocalStorage.setLocalStorage("goods" /* localStorageKeys.goods */, data);
        _utils_localstorage__WEBPACK_IMPORTED_MODULE_1__.LocalStorage.setLocalStorage("totalItemsInCart" /* localStorageKeys.totalItemsInCart */, this.totalItems);
    }
    render() {
        this.cart = _utils_localstorage__WEBPACK_IMPORTED_MODULE_1__.LocalStorage.getLocalStorage("cart" /* localStorageKeys.cart */) || [];
        const fragment = document.createDocumentFragment();
        const cartItemsTemp = document.querySelector('#cartItemsTemp');
        const badge = document.querySelector('.cart__products');
        const popup = document.querySelector('.cart-popup');
        let totalSum = 0;
        this.cart.forEach(item => {
            const cartItem = cartItemsTemp.content.cloneNode(true);
            (cartItem.querySelector('.cart-item__name')).textContent = item.name;
            (cartItem.querySelector('.cart__input')).textContent = item.inCart.toString();
            const itemsPrice = +item.price * item.inCart;
            totalSum += itemsPrice;
            (cartItem.querySelector('.cart-item__price')).textContent = `${itemsPrice}`;
            (cartItem.querySelector('.cart__add')).setAttribute('data-articul', `${item.id}`);
            if (item.count === 0) {
                cartItem.querySelector('.cart__add').style.pointerEvents = 'none';
                cartItem.querySelector('.cart__add').style.opacity = '0.5';
            }
            (cartItem.querySelector('.cart__remove')).setAttribute('data-articul', `${item.id}`);
            if (item.inCart === 0) {
                cartItem.querySelector('.cart__remove').style.pointerEvents = 'none';
                cartItem.querySelector('.cart__remove').style.opacity = '0.5';
            }
            document.querySelector('.cart__total').textContent = `${totalSum}`;
            fragment.append(cartItem);
        });
        document.querySelector('.cart__products').textContent = `${this.totalItems}`;
        document.querySelector('.cart-popup__container').innerHTML = '';
        document.querySelector('.cart-popup__container').appendChild(fragment);
    }
    cartOpen() {
        document.querySelector('.cart-popup').classList.add('active');
        document.querySelector('.overlay').classList.add('active');
    }
    cartClose() {
        document.querySelector('.cart-popup').classList.remove('active');
        document.querySelector('.overlay').classList.remove('active');
    }
}


/***/ }),

/***/ "./src/components/filters/filterSettings.ts":
/*!**************************************************!*\
  !*** ./src/components/filters/filterSettings.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FilterSettings)
/* harmony export */ });
/* harmony import */ var _utils_localstorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/localstorage */ "./src/utils/localstorage.ts");
/* harmony import */ var _filters_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filters.css */ "./src/components/filters/filters.css");


class FilterSettings {
    constructor() {
        this.filtered = [];
        this.filterArr = [];
        this.sorted = [];
        this.filtersObj = {
            color: [],
            country: [],
            year: [],
            price: [],
        };
        if (localStorage.getItem('filter')) {
            this.filtersObj = _utils_localstorage__WEBPACK_IMPORTED_MODULE_0__.LocalStorage.getLocalStorage("filter" /* localStorageKeys.filter */) || '';
        }
        ;
        if (localStorage.getItem('filterArr')) {
            this.filterArr = _utils_localstorage__WEBPACK_IMPORTED_MODULE_0__.LocalStorage.getLocalStorage("filterArr" /* localStorageKeys.filterArr */) || '';
        }
        ;
    }
    filterByCountry(data) {
        if (localStorage.getItem('sorted')) {
            data = _utils_localstorage__WEBPACK_IMPORTED_MODULE_0__.LocalStorage.getLocalStorage("sorted" /* localStorageKeys.sorted */) || data;
        }
        ;
        this.filtered = [];
        const filters = document.querySelector('#filters');
        this.filtersObj.country = [...filters.querySelectorAll('#country input:checked')].map(item => item.value);
        console.log(this.filtersObj.country);
        data.forEach(item => {
            if (this.filtersObj.country.includes(item.country)) {
                this.filtered.push(item);
                console.log(this.filtered);
            }
        });
        _utils_localstorage__WEBPACK_IMPORTED_MODULE_0__.LocalStorage.setLocalStorage("filter" /* localStorageKeys.filter */, this.filtersObj);
        _utils_localstorage__WEBPACK_IMPORTED_MODULE_0__.LocalStorage.setLocalStorage("filterArr" /* localStorageKeys.filterArr */, this.filtered);
    }
    filterByColor(data) {
        if (localStorage.getItem('sorted')) {
            data = _utils_localstorage__WEBPACK_IMPORTED_MODULE_0__.LocalStorage.getLocalStorage("sorted" /* localStorageKeys.sorted */) || data;
        }
        ;
        this.filtered = [];
        const filters = document.querySelector('#filters');
        this.filtersObj.color = [...filters.querySelectorAll('#color input:checked')].map(item => item.value);
        console.log(this.filtersObj.color);
        data.forEach(item => {
            if (this.filtersObj.color.includes(item.color)) {
                this.filtered.push(item);
            }
        });
        _utils_localstorage__WEBPACK_IMPORTED_MODULE_0__.LocalStorage.setLocalStorage("filter" /* localStorageKeys.filter */, this.filtersObj);
        _utils_localstorage__WEBPACK_IMPORTED_MODULE_0__.LocalStorage.setLocalStorage("filterArr" /* localStorageKeys.filterArr */, this.filtered);
    }
    resetFilters() {
        this.filtersObj.color = [];
        this.filtersObj.country = [];
        const filters = document.querySelector('#filters');
        [...filters.querySelectorAll('input:checked')].map(item => item.checked = false);
        _utils_localstorage__WEBPACK_IMPORTED_MODULE_0__.LocalStorage.setLocalStorage("filterArr" /* localStorageKeys.filterArr */, this.filterArr);
        _utils_localstorage__WEBPACK_IMPORTED_MODULE_0__.LocalStorage.setLocalStorage("filter" /* localStorageKeys.filter */, this.filtersObj);
    }
    resetAll() {
        localStorage.clear();
    }
    sortPriceUp(data) {
        if (localStorage.getItem('sorted')) {
            data = _utils_localstorage__WEBPACK_IMPORTED_MODULE_0__.LocalStorage.getLocalStorage("sorted" /* localStorageKeys.sorted */) || data;
        }
        ;
        this.sorted = data.sort((a, b) => {
            return +a.price - +b.price;
        });
        console.log(this.sorted);
        _utils_localstorage__WEBPACK_IMPORTED_MODULE_0__.LocalStorage.setLocalStorage("sorted" /* localStorageKeys.sorted */, this.sorted);
    }
    sortPriceDown(data) {
        if (localStorage.getItem('sorted')) {
            data = _utils_localstorage__WEBPACK_IMPORTED_MODULE_0__.LocalStorage.getLocalStorage("sorted" /* localStorageKeys.sorted */) || data;
        }
        ;
        this.sorted = data.sort((a, b) => {
            return +b.price - +a.price;
        });
        console.log(this.sorted);
        _utils_localstorage__WEBPACK_IMPORTED_MODULE_0__.LocalStorage.setLocalStorage("sorted" /* localStorageKeys.sorted */, this.sorted);
    }
}


/***/ }),

/***/ "./src/components/winecards/winecards.ts":
/*!***********************************************!*\
  !*** ./src/components/winecards/winecards.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _winecards_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./winecards.css */ "./src/components/winecards/winecards.css");
/* harmony import */ var _utils_localstorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/localstorage */ "./src/utils/localstorage.ts");


class WineCards {
    render(data) {
        if (localStorage.getItem('goods')) {
            data = _utils_localstorage__WEBPACK_IMPORTED_MODULE_1__.LocalStorage.getLocalStorage("goods" /* localStorageKeys.goods */) || data;
        }
        ;
        if (localStorage.getItem('sorted')) {
            data = _utils_localstorage__WEBPACK_IMPORTED_MODULE_1__.LocalStorage.getLocalStorage("sorted" /* localStorageKeys.sorted */) || data;
        }
        ;
        const wines = data;
        const fragment = document.createDocumentFragment();
        const wineCardTemp = document.querySelector('#winecardsItemTemp');
        wines.forEach((item, idx) => {
            const wineCard = wineCardTemp.content.cloneNode(true);
            wineCard.querySelector('.winecards__face-photo').style.backgroundImage = `url(${item.image})`;
            (wineCard.querySelector('.winecards__face-name')).textContent = item.name;
            (wineCard.querySelector('.winecards__face-count')).textContent = `В наличии : ${item.count}`;
            (wineCard.querySelector('.winecards__face-price')).textContent = `${item.price} BYN`;
            (wineCard.querySelector('.winecards__back-name')).textContent = item.name;
            (wineCard.querySelector('.winecards__back-madeBy')).textContent = `Производитель : ${item.madeBy}`;
            (wineCard.querySelector('.winecards__back-country')).textContent = `Страна : ${item.country}`;
            (wineCard.querySelector('.winecards__back-year')).textContent = `Год : ${item.year}`;
            (wineCard.querySelector('.winecards__back-color')).textContent = `Цвет : ${item.color}`;
            (wineCard.querySelector('.winecards__back-alcohol')).textContent = `Крепость : ${item.alcohol}%`;
            (wineCard.querySelector('.winecards__back-vol')).textContent = `Объем : ${item.vol}л`;
            if (!item.inStock || item.count === 0) {
                wineCard.querySelector('.winecards__item').style.pointerEvents = 'none';
                wineCard.querySelector('.winecards__item').style.opacity = '0.5';
                (wineCard.querySelector('.winecards__face-count')).textContent = 'Нет в наличии';
                (wineCard.querySelector('.winecards__face-price')).textContent = '';
            }
            if (item.inCart > 0) {
                wineCard.querySelector('.winecards__item').classList.add('inCart');
            }
            else {
                wineCard.querySelector('.winecards__item').classList.remove('inCart');
            }
            (wineCard.querySelector('.cart__add')).setAttribute('data-articul', `${idx}`);
            fragment.append(wineCard);
        });
        (document.querySelector('.winecards-container')).innerHTML = '';
        (document.querySelector('.winecards-container')).appendChild(fragment);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WineCards);


/***/ }),

/***/ "./src/constats/goods.ts":
/*!*******************************!*\
  !*** ./src/constats/goods.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "goods": () => (/* binding */ goods)
/* harmony export */ });
const goods = [
    {
        id: 0,
        name: "National Vintage Port",
        madeBy: "Quinta do Noval",
        country: "Португалия",
        year: "2011",
        alcohol: "19",
        vol: "0.75",
        price: "13832",
        color: "red",
        image: './assets/img/portveyn-quinta-do-noval-nacional-vintage-port-2011.png',
        count: 5,
        inStock: true,
        inCart: 0,
    },
    {
        id: 1,
        name: "Blaufrankisch Classic",
        madeBy: "Hans Igler",
        country: "Австрия",
        year: "2019",
        alcohol: "13",
        vol: "0.75",
        price: '174',
        color: 'red',
        image: './assets/img/blaufrankisch-classic.png',
        count: 5,
        inStock: true,
        inCart: 0,
    },
    {
        id: 2,
        name: "Rheingau Riesling Trocken",
        madeBy: "Robert Weil",
        country: "Германия",
        year: "2019",
        alcohol: "12",
        vol: "0.75",
        price: '204',
        color: 'white',
        image: './assets/img/rheingau-riesling-trocken.png',
        count: 5,
        inStock: true,
        inCart: 0,
    },
    {
        id: 3,
        name: "Malleous de Sanchomartin",
        madeBy: "Emilio Moro",
        country: "Испания",
        year: "2018",
        alcohol: "14",
        vol: "0.75",
        price: '1307',
        color: 'red',
        image: './assets/img/malleous-de-sanchomartin.png',
        count: 5,
        inStock: true,
        inCart: 0,
    },
    {
        id: 4,
        name: "Gavi dei Gavi (Etichetta Nera)",
        madeBy: "la Scolca",
        country: "Италия",
        year: "2020",
        alcohol: "12",
        vol: "0.75",
        price: '326',
        color: 'white',
        image: './assets/img/gavi-dei-gavi.png',
        count: 5,
        inStock: true,
        inCart: 0,
    },
    {
        id: 5,
        name: "Charly Dudes",
        madeBy: "Two Hands",
        country: "Австралия",
        year: "2020",
        alcohol: "14",
        vol: "1.5",
        price: '435',
        color: 'red',
        image: "./assets/img/charley-dudes.png",
        count: 5,
        inStock: true,
        inCart: 0,
    },
    {
        id: 6,
        name: "Richebourg Grang Gru",
        madeBy: "Domaine Jean Grivot",
        country: "Франция",
        year: "2015",
        alcohol: "13",
        vol: "0.75",
        price: '16778',
        color: 'red',
        image: './assets/img/richebourg-grand-gru.png',
        count: 5,
        inStock: true,
        inCart: 0,
    },
    {
        id: 7,
        name: "Chablis Vieilles Vighes 1946",
        madeBy: "Jean-Marc Brocard (Domaine Sainte-Claire)",
        country: "Франция",
        year: "2018",
        alcohol: "13",
        vol: "0.75",
        price: '313',
        color: 'white',
        image: './assets/img/chablis-vieilles-vighes-1946.png',
        count: 5,
        inStock: true,
        inCart: 0,
    },
    {
        id: 8,
        name: "50x50",
        madeBy: "Capannelle",
        country: "Италия",
        year: "2015",
        alcohol: "13",
        vol: "0.75",
        price: '2505',
        color: 'red',
        image: './assets/img/50x50.png',
        count: 5,
        inStock: true,
        inCart: 0,
    },
    {
        id: 9,
        name: "Penfolds Grange",
        madeBy: "Penfolds",
        country: "Австралия",
        year: "2016",
        alcohol: "14",
        vol: "0.75",
        price: '871',
        color: 'red',
        image: './assets/img/penfolds-grange.png',
        count: 5,
        inStock: true,
        inCart: 0,
    },
    {
        id: 10,
        name: "Penfolds Bin 389 Cabernet Shiraz",
        madeBy: "Penfolds",
        country: "Австралия",
        year: "2019",
        alcohol: "14",
        vol: "0.75",
        price: '871',
        color: 'red',
        image: './assets/img/penfolds-bin-389-cabernet-shiraz.png',
        count: 5,
        inStock: true,
        inCart: 0,
    },
    {
        id: 11,
        name: "Kurni",
        madeBy: "Oasi degli Angeli",
        country: "Италия",
        year: "2018",
        alcohol: "14",
        vol: "1.5",
        price: '1742',
        color: 'red',
        image: './assets/img/kurni.png',
        count: 5,
        inStock: false,
        inCart: 0,
    },
];


/***/ }),

/***/ "./src/html-components/cart-popup/cart-popup.ts":
/*!******************************************************!*\
  !*** ./src/html-components/cart-popup/cart-popup.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CartPopup)
/* harmony export */ });
class CartPopup {
}
CartPopup.cartPopup = `
  <span class="close-popup">X</span>
  <div class="cart-popup__container"></div>
  <p class="cart__total"></p>
  `;


/***/ }),

/***/ "./src/html-components/cart/cart.ts":
/*!******************************************!*\
  !*** ./src/html-components/cart/cart.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Cart)
/* harmony export */ });
class Cart {
}
Cart.cart = `
  <a href="#" class="cart__notification">
    <span class="cart__products">0</span>
  </a>
  `;


/***/ }),

/***/ "./src/html-components/filters/filters.ts":
/*!************************************************!*\
  !*** ./src/html-components/filters/filters.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Filters {
}
Filters.filters = `
  <form action="#" class="filters-form">

    <div class="filters-container">
      <div class="country-filter">
        <h4 class="filter-name">Страна</h4>
        <div id="country">
          <div class="checkbox">
            <input type="checkbox" id="check1" name="country" value="Австралия">
            <label class="checkbox-country"for="check1">Австралия</label>
          </div>
          <div class="checkbox">
            <input type="checkbox" id="check2" name="country" value="Австрия">
            <label class="checkbox-country"for="check2">Австрия</label>
          </div>
          <div class="checkbox">
            <input type="checkbox" id="check3" name="country" value="Германия">
            <label class="checkbox-country"for="check3">Германия</label>
          </div>
          <div class="checkbox">
            <input type="checkbox" id="check4" name="country" value="Испания">
            <label class="checkbox-country"for="check4">Испания</label>
          </div>
          <div class="checkbox">
            <input type="checkbox" id="check5" name="country" value="Италия">
            <label class="checkbox-country"for="check5">Италия</label>
          </div>
          <div class="checkbox">
            <input type="checkbox" id="check6" name="country" value="Португалия">
            <label class="checkbox-country"for="check6">Португалия</label>
          </div>
          <div class="checkbox">
            <input type="checkbox" id="check7" name="country" value="Франция">
            <label class="checkbox-country"for="check7">Франция</label>
          </div>
        </div>
      </div>
      <div class="color-filter">
        <h4 class="filter-name">Цвет</h4>
        <div id="color">
          <div class="checkbox">
            <input type="checkbox" id="check8" name="color" value="white">
            <label class="checkbox-color"for="check8">Белое</label>
          </div>
          <div class="checkbox">
            <input type="checkbox" id="check9" name="color" value="red">
            <label class="checkbox-color"for="check9">Красное</label>
          </div>
        </div>
      </div>
      <div class="sort-container">
      <div class="sort">
        <h4 class="filter-name">Сортировка</h4>
        <select class="select">
        <option value=""></option>
        <option value="ByPriceUp">По цене: по возрастанию</option>
        <option value="ByPriceDown">По цене: по убыванию</option>
        </select>
      </div>
    </div>
      
    <button class="reset-filters class="btn">Сбрость фильтры</button>
    <button class="reset-filters reset class="btn">Очистить историю</button>
    </div>
  </form>
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Filters);


/***/ }),

/***/ "./src/html-components/header/header.ts":
/*!**********************************************!*\
  !*** ./src/html-components/header/header.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var _utils_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/component */ "./src/utils/component.ts");
/* harmony import */ var _search_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../search/search */ "./src/html-components/search/search.ts");
/* harmony import */ var _cart_cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cart/cart */ "./src/html-components/cart/cart.ts");
/* harmony import */ var _cart_popup_cart_popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cart-popup/cart-popup */ "./src/html-components/cart-popup/cart-popup.ts");




class Header extends _utils_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(tagName, className) {
        super(tagName, className);
        this.className = className;
        this.search = new _utils_component__WEBPACK_IMPORTED_MODULE_0__["default"]('div', 'header__search search-container', 'search-input');
        this.cart = new _utils_component__WEBPACK_IMPORTED_MODULE_0__["default"]('div', 'header__cart cart', 'cart');
        this.cartPopup = new _utils_component__WEBPACK_IMPORTED_MODULE_0__["default"]('div', 'cart-popup', 'cart-popup');
    }
    renderSearch() {
        const searchDiv = this.search.render();
        searchDiv.innerHTML = _search_search__WEBPACK_IMPORTED_MODULE_1__["default"].searchForm;
        this.container.append(searchDiv);
    }
    renderCart() {
        const cartDiv = this.cart.render();
        cartDiv.innerHTML = _cart_cart__WEBPACK_IMPORTED_MODULE_2__["default"].cart;
        this.container.append(cartDiv);
    }
    renderCartPopup() {
        const cartPopupDiv = this.cartPopup.render();
        cartPopupDiv.innerHTML = _cart_popup_cart_popup__WEBPACK_IMPORTED_MODULE_3__["default"].cartPopup;
        this.container.append(cartPopupDiv);
    }
    render() {
        this.renderSearch();
        this.renderCart();
        this.renderCartPopup();
        return this.container;
    }
}


/***/ }),

/***/ "./src/html-components/main/main.ts":
/*!******************************************!*\
  !*** ./src/html-components/main/main.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Main)
/* harmony export */ });
/* harmony import */ var _utils_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/component */ "./src/utils/component.ts");
/* harmony import */ var _winecards_winecards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../winecards/winecards */ "./src/html-components/winecards/winecards.ts");
/* harmony import */ var _filters_filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../filters/filters */ "./src/html-components/filters/filters.ts");



class Main extends _utils_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(tagName, className) {
        super(tagName, className);
        this.className = className;
        this.winecards = new _utils_component__WEBPACK_IMPORTED_MODULE_0__["default"]('section', 'winecards', 'winecards');
        this.filters = new _utils_component__WEBPACK_IMPORTED_MODULE_0__["default"]('section', 'filters', 'filters');
    }
    renderFilters() {
        const filtersSection = this.filters.render();
        filtersSection.innerHTML = _filters_filters__WEBPACK_IMPORTED_MODULE_2__["default"].filters;
        this.container.append(filtersSection);
    }
    renderWinecards() {
        const winecardsSection = this.winecards.render();
        winecardsSection.innerHTML = _winecards_winecards__WEBPACK_IMPORTED_MODULE_1__["default"].winecards;
        this.container.append(winecardsSection);
    }
    render() {
        this.renderFilters();
        this.renderWinecards();
        return this.container;
    }
}


/***/ }),

/***/ "./src/html-components/search/search.ts":
/*!**********************************************!*\
  !*** ./src/html-components/search/search.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class SearchInput {
}
SearchInput.searchForm = `
      <input
        class="search-container__input"
        type="search"
        autocomplete="off"
        placeholder="Поиск..."
        name="search"
        autofocus
      />
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchInput);


/***/ }),

/***/ "./src/html-components/winecards/winecards.ts":
/*!****************************************************!*\
  !*** ./src/html-components/winecards/winecards.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Winecards)
/* harmony export */ });
class Winecards {
}
Winecards.winecards = `
  <div class="winecards-container">

  </div>
  `;


/***/ }),

/***/ "./src/utils/component.ts":
/*!********************************!*\
  !*** ./src/utils/component.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Component)
/* harmony export */ });
class Component {
    constructor(tagName, className = '', id) {
        this.container = document.createElement(tagName);
        this.container.className = className;
        id ? (this.container.id = id) : null;
    }
    render() {
        return this.container;
    }
}


/***/ }),

/***/ "./src/utils/localstorage.ts":
/*!***********************************!*\
  !*** ./src/utils/localstorage.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalStorage": () => (/* binding */ LocalStorage)
/* harmony export */ });
class LocalStorage {
    static setLocalStorage(dataKey, data) {
        localStorage.setItem(dataKey, JSON.stringify(data));
    }
    static getLocalStorage(data) {
        if (localStorage.getItem(data)) {
            return JSON.parse(String(localStorage.getItem(data)));
        }
        return "";
    }
}



/***/ }),

/***/ "./src/assets/img/bg1.jpg":
/*!********************************!*\
  !*** ./src/assets/img/bg1.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/bg1.jpg";

/***/ }),

/***/ "./src/assets/img/cart-gold.svg":
/*!**************************************!*\
  !*** ./src/assets/img/cart-gold.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/cart-gold.svg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _global_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global.css */ "./src/global.css");
/* harmony import */ var _constats_goods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constats/goods */ "./src/constats/goods.ts");
/* harmony import */ var _components_app_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/app/app */ "./src/components/app/app.ts");

// import WineCards from './components/winecards/winecards';
// import './components/cart/cart';

// const winecards = new WineCards();
// winecards.render(goods);
// import { CartSettings } from './components/cart/cart';
// import { LocalStorage, localStorageKeys } from './utils/localstorage';
// const cartsettings = new CartSettings();
// cartsettings.addToCart(goods);


const app = new _components_app_app__WEBPACK_IMPORTED_MODULE_2__["default"]();
app.start(_constats_goods__WEBPACK_IMPORTED_MODULE_1__.goods);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7O0FDQXNCO0FBQ3RCLDREQUE0RDtBQUM1RCxtQ0FBbUM7QUFDSztBQUN4QyxxQ0FBcUM7QUFDckMsMkJBQTJCO0FBQzNCLHlEQUF5RDtBQUN6RCx5RUFBeUU7QUFDekUsMkNBQTJDO0FBQzNDLGlDQUFpQztBQUVNO0FBQ2pCO0FBRXRCLE1BQU0sR0FBRyxHQUFHLElBQUksMkRBQUcsRUFBRSxDQUFDO0FBQ3RCLEdBQUcsQ0FBQyxLQUFLLENBQUMsa0RBQUssQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvY2FydC9jYXJ0LmNzcyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29tcG9uZW50cy9maWx0ZXJzL2ZpbHRlcnMuY3NzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL3dpbmVjYXJkcy93aW5lY2FyZHMuY3NzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9nbG9iYWwuY3NzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29tcG9uZW50cy9jYXJ0L2NhcnQuY3NzP2QyODYiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvZmlsdGVycy9maWx0ZXJzLmNzcz9lMmQ5Iiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL3dpbmVjYXJkcy93aW5lY2FyZHMuY3NzPzczMDMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2dsb2JhbC5jc3M/ZDNiYyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL2FwcC9hcHAudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvY2FydC9jYXJ0LnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL2ZpbHRlcnMvZmlsdGVyU2V0dGluZ3MudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvd2luZWNhcmRzL3dpbmVjYXJkcy50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29uc3RhdHMvZ29vZHMudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2h0bWwtY29tcG9uZW50cy9jYXJ0LXBvcHVwL2NhcnQtcG9wdXAudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2h0bWwtY29tcG9uZW50cy9jYXJ0L2NhcnQudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2h0bWwtY29tcG9uZW50cy9maWx0ZXJzL2ZpbHRlcnMudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2h0bWwtY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9odG1sLWNvbXBvbmVudHMvbWFpbi9tYWluLnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9odG1sLWNvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvaHRtbC1jb21wb25lbnRzL3dpbmVjYXJkcy93aW5lY2FyZHMudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL3V0aWxzL2NvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvdXRpbHMvbG9jYWxzdG9yYWdlLnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL29ubGluZS1zdG9yZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1iYWNrZ3JvdW5kOiBibGFjaztcXG4gIC0tcmVkOiAjZDYwMDAwO1xcbiAgLS1nb2xkOiAjZmRjODU0O1xcbiB9XFxuXFxuLmNhcnQtcG9wdXAge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAxMHZoO1xcbiAgbGVmdDogMTB2dztcXG4gIHdpZHRoOiA4MHZ3O1xcbiAgaGVpZ2h0OiA4MHZoO1xcbiAgcGFkZGluZzogMmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICB6LWluZGV4OiAxMDE7XFxuICBjb2xvcjogdmFyKC0tZ29sZCk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3gtc2hhZG93OiAwIDAgMzBweCB2YXIoLS1nb2xkKTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5jYXJ0LXBvcHVwLmFjdGl2ZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmNhcnQtcG9wdXBfX2NvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDgwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDFlbTtcXG59XFxuXFxuLmNsb3NlLXBvcHVwIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcGFkZGluZzogMC4xZW0gMC41ZW07XFxuICBib3JkZXItcmFkaXVzOiAxMCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMWVtO1xcbiAgdG9wOiAxZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcbn1cXG5cXG4uY2xvc2UtcG9wdXA6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEsIDEuMSk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1nb2xkKTtcXG4gIGJveC1zaGFkb3c6IDJweCAycHggMTVweCB2YXIoLS1nb2xkKTtcXG4gIHRyYW5zaXRpb246IDAuMnM7XFxufVxcblxcbi5jbG9zZS1wb3B1cDphY3RpdmUge1xcbiAgdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4uY2FydC1pdGVtIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gZ2FwOiAxZW07XFxufVxcblxcbi5jYXJ0X19udW1iZXJ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjVlbTtcXG59XFxuXFxuLmNhcnRfX2Vycm9yIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMTB2aDtcXG4gIGxlZnQ6IDEwdnc7XFxuICB3aWR0aDogODB2dztcXG4gIGhlaWdodDogODB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXG4gIGNvbG9yOiB2YXIoLS1nb2xkKTtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5jYXJ0X19lcnJvci5hY3RpdmUge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuXFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvY2FydC9jYXJ0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsZUFBZTtDQUNoQjs7QUFFRDtFQUNFLGVBQWU7RUFDZixTQUFTO0VBQ1QsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQ0FBZ0M7RUFDaEMsYUFBYTtBQUNmOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFFBQVE7RUFDUixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLDZCQUE2QjtFQUM3QixvQ0FBb0M7RUFDcEMsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQ0FBa0M7Q0FDbkMsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtDQUNuQixRQUFRO0FBQ1Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsU0FBUztFQUNULFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0tYmFja2dyb3VuZDogYmxhY2s7XFxuICAtLXJlZDogI2Q2MDAwMDtcXG4gIC0tZ29sZDogI2ZkYzg1NDtcXG4gfVxcblxcbi5jYXJ0LXBvcHVwIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMTB2aDtcXG4gIGxlZnQ6IDEwdnc7XFxuICB3aWR0aDogODB2dztcXG4gIGhlaWdodDogODB2aDtcXG4gIHBhZGRpbmc6IDJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgei1pbmRleDogMTAxO1xcbiAgY29sb3I6IHZhcigtLWdvbGQpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm94LXNoYWRvdzogMCAwIDMwcHggdmFyKC0tZ29sZCk7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uY2FydC1wb3B1cC5hY3RpdmUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5jYXJ0LXBvcHVwX19jb250YWluZXIge1xcbiAgaGVpZ2h0OiA4MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxZW07XFxufVxcblxcbi5jbG9zZS1wb3B1cCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmc6IDAuMWVtIDAuNWVtO1xcbiAgYm9yZGVyLXJhZGl1czogMTAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDFlbTtcXG4gIHRvcDogMWVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogMC4ycztcXG59XFxuXFxuLmNsb3NlLXBvcHVwOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xLCAxLjEpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ29sZCk7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDE1cHggdmFyKC0tZ29sZCk7XFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcbn1cXG5cXG4uY2xvc2UtcG9wdXA6YWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLmNhcnQtaXRlbSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuIGdhcDogMWVtO1xcbn1cXG5cXG4uY2FydF9fbnVtYmVye1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC41ZW07XFxufVxcblxcbi5jYXJ0X19lcnJvciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDEwdmg7XFxuICBsZWZ0OiAxMHZ3O1xcbiAgd2lkdGg6IDgwdnc7XFxuICBoZWlnaHQ6IDgwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCk7XFxuICBjb2xvcjogdmFyKC0tZ29sZCk7XFxuICB6LWluZGV4OiAxMDA7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uY2FydF9fZXJyb3IuYWN0aXZlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcblxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXHJcXG4gIC0tYmFja2dyb3VuZDogYmxhY2s7XFxyXFxuICAtLXJlZDogI2Q2MDAwMDtcXHJcXG4gIC0tZ29sZDogI2ZkYzg1NDtcXHJcXG4gfVxcclxcbip7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG4uZmlsdGVycy1mb3JtIHtcXHJcXG4gIHdpZHRoOiA4MHZ3O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjUpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggdmFyKC0tZ29sZCk7XFxyXFxuICBjb2xvcjogdmFyKC0tZ29sZCk7XFxyXFxuICBwYWRkaW5nOiAxZW07XFxyXFxufVxcclxcblxcclxcbi5maWx0ZXJzLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCIgc2VsZWN0ICBmaWx0ZXItY29sb3IgZmlsdGVyLWNvdW50cnlcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICBcXFwiICAgYnV0dG9uICAgICAgLiAgICAgICAgIGJ1dHRvblxcXCI7XFxyXFxufVxcclxcblxcclxcbi5maWx0ZXItbmFtZSB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbn1cXHJcXG4uY291bnRyeS1maWx0ZXIge1xcclxcbiAgZ3JpZC1hcmVhOiAnZmlsdGVyLWNvdW50cnknO1xcclxcbn1cXHJcXG4uY29sb3ItZmlsdGVyIHtcXHJcXG4gIGdyaWQtYXJlYTogJ2ZpbHRlci1jb2xvcic7XFxyXFxufVxcclxcblxcclxcbi5zb3J0IHtcXHJcXG4gIGdyaWQtYXJlYTogJ3NlbGVjdCc7XFxyXFxufVxcclxcblxcclxcbi5yZXNldCB7XFxyXFxuICBncmlkLWFyZWE6ICdidXR0b24nO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXQtZmlsdGVycyB7XFxyXFxuICBncmlkLWFyZWE6ICdidXR0b24nO1xcclxcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxufVxcclxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMDtcXHJcXG4td2Via2l0LWFwcGVhcmVuY2U6bm9uZTtcXHJcXG5vdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2tib3h7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxLjVlbTtcXHJcXG4gIHBhZGRpbmctbGVmdDogMi41ZW07XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0sXFxyXFxuLmNoZWNrYm94IGxhYmVsOjpiZWZvcmUge1xcclxcbmN1cnNvcjogcG9pbnRlcjtcXHJcXG5oZWlnaHQ6IDI0cHg7XFxyXFxubGVmdDogMDtcXHJcXG5wb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxud2lkdGg6IDI0cHg7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl17XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrYm94IGxhYmVsOjpiZWZvcmUge1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZ29sZCk7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICBjb2xvcjogdmFyKC0tZ29sZCk7XFxyXFxuICBjb250ZW50OiAnJztcXHJcXG4gIGZvbnQtc2l6ZTogMS4yZW07XFxyXFxufVxcclxcblxcclxcbi5jaGVja2JveCBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQgKyBsYWJlbDo6YmVmb3JlIHtcXHJcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZ29sZCk7XFxyXFxuICBjb250ZW50OiAnXFxcXDI3MTQnO1xcclxcbn1cXHJcXG5sYWJlbCB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuc2VsZWN0IHtcXHJcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiAwO1xcclxcbiAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG4gIGZsZXg6IDE7XFxyXFxuICBwYWRkaW5nOiAwIDFlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1nb2xkKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDZweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTdweDtcXHJcXG4gIG1heC13aWR0aDogMjBlbTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWdvbGQpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGJveC1zaGFkb3c6ICAwIDAgMzBweCB2YXIoLS1nb2xkKTtcXHJcXG59XFxyXFxuLyogUmVtb3ZlIElFIGFycm93ICovXFxyXFxuc2VsZWN0OjotbXMtZXhwYW5kIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcbi8qIEN1c3RvbSBTZWxlY3Qgd3JhcHBlciAqL1xcclxcbnNlbGVjdCB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgbWF4LXdpZHRoOiAyMGVtO1xcclxcbiAgaGVpZ2h0OiAyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAuMjVlbTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXHJcXG4gIGZvbnQtc2l6ZTogMTdweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWdvbGQpO1xcclxcbiAgYm94LXNoYWRvdzogIDAgMCAzMHB4IHZhcigtLWdvbGQpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG4vKiBBcnJvdyAqL1xcclxcbnNlbGVjdDo6YWZ0ZXIge1xcclxcbiAgY29udGVudDogJ1xcXFwyNUJDJztcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgcGFkZGluZzogMWVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ29sZCk7XFxyXFxuICB0cmFuc2l0aW9uOiAuMjVzIGFsbCBlYXNlO1xcclxcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxufVxcclxcbi8qIFRyYW5zaXRpb24gKi9cXHJcXG5zZWxlY3Q6aG92ZXI6OmFmdGVyIHtcXHJcXG4gIGNvbG9yOiAjZjM5YzEyO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXQtZmlsdGVycyB7XFxyXFxuICB3aWR0aDogMTBlbTtcXHJcXG4gIGhlaWdodDogM2VtO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDAuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBPdGhlciBzdHlsZXMqL1xcclxcblxcclxcblxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL2ZpbHRlcnMvZmlsdGVycy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGVBQWU7Q0FDaEI7QUFDRDtFQUNFLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsV0FBVztFQUNYLGlDQUFpQztFQUNqQyxrQkFBa0I7RUFDbEIsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLHdCQUF3QjtFQUN4Qjt3REFDc0Q7QUFDeEQ7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQix1QkFBdUI7QUFDdkIsYUFBYTtBQUNiOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7O0FBRUEsZUFBZTtBQUNmLFlBQVk7QUFDWixPQUFPO0FBQ1Asa0JBQWtCO0FBQ2xCLFdBQVc7QUFDWDs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixPQUFPO0VBQ1AsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixtQ0FBbUM7RUFDbkMsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixZQUFZO0VBQ1osZUFBZTtFQUNmLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLGlDQUFpQztBQUNuQztBQUNBLG9CQUFvQjtBQUNwQjtFQUNFLGFBQWE7QUFDZjtBQUNBLDBCQUEwQjtBQUMxQjtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsZUFBZTtFQUNmLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLG1DQUFtQztFQUNuQyxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3QixpQ0FBaUM7RUFDakMsa0JBQWtCO0FBQ3BCO0FBQ0EsVUFBVTtBQUNWO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sUUFBUTtFQUNSLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IseUJBQXlCO0VBQ3pCLG9CQUFvQjtBQUN0QjtBQUNBLGVBQWU7QUFDZjtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBRUEsZ0JBQWdCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXHJcXG4gIC0tYmFja2dyb3VuZDogYmxhY2s7XFxyXFxuICAtLXJlZDogI2Q2MDAwMDtcXHJcXG4gIC0tZ29sZDogI2ZkYzg1NDtcXHJcXG4gfVxcclxcbip7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG4uZmlsdGVycy1mb3JtIHtcXHJcXG4gIHdpZHRoOiA4MHZ3O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjUpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggdmFyKC0tZ29sZCk7XFxyXFxuICBjb2xvcjogdmFyKC0tZ29sZCk7XFxyXFxuICBwYWRkaW5nOiAxZW07XFxyXFxufVxcclxcblxcclxcbi5maWx0ZXJzLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCIgc2VsZWN0ICBmaWx0ZXItY29sb3IgZmlsdGVyLWNvdW50cnlcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICBcXFwiICAgYnV0dG9uICAgICAgLiAgICAgICAgIGJ1dHRvblxcXCI7XFxyXFxufVxcclxcblxcclxcbi5maWx0ZXItbmFtZSB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbn1cXHJcXG4uY291bnRyeS1maWx0ZXIge1xcclxcbiAgZ3JpZC1hcmVhOiAnZmlsdGVyLWNvdW50cnknO1xcclxcbn1cXHJcXG4uY29sb3ItZmlsdGVyIHtcXHJcXG4gIGdyaWQtYXJlYTogJ2ZpbHRlci1jb2xvcic7XFxyXFxufVxcclxcblxcclxcbi5zb3J0IHtcXHJcXG4gIGdyaWQtYXJlYTogJ3NlbGVjdCc7XFxyXFxufVxcclxcblxcclxcbi5yZXNldCB7XFxyXFxuICBncmlkLWFyZWE6ICdidXR0b24nO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXQtZmlsdGVycyB7XFxyXFxuICBncmlkLWFyZWE6ICdidXR0b24nO1xcclxcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxufVxcclxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMDtcXHJcXG4td2Via2l0LWFwcGVhcmVuY2U6bm9uZTtcXHJcXG5vdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2tib3h7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxLjVlbTtcXHJcXG4gIHBhZGRpbmctbGVmdDogMi41ZW07XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0sXFxyXFxuLmNoZWNrYm94IGxhYmVsOjpiZWZvcmUge1xcclxcbmN1cnNvcjogcG9pbnRlcjtcXHJcXG5oZWlnaHQ6IDI0cHg7XFxyXFxubGVmdDogMDtcXHJcXG5wb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxud2lkdGg6IDI0cHg7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl17XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrYm94IGxhYmVsOjpiZWZvcmUge1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZ29sZCk7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICBjb2xvcjogdmFyKC0tZ29sZCk7XFxyXFxuICBjb250ZW50OiAnJztcXHJcXG4gIGZvbnQtc2l6ZTogMS4yZW07XFxyXFxufVxcclxcblxcclxcbi5jaGVja2JveCBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQgKyBsYWJlbDo6YmVmb3JlIHtcXHJcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZ29sZCk7XFxyXFxuICBjb250ZW50OiAnXFxcXDI3MTQnO1xcclxcbn1cXHJcXG5sYWJlbCB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuc2VsZWN0IHtcXHJcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiAwO1xcclxcbiAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG4gIGZsZXg6IDE7XFxyXFxuICBwYWRkaW5nOiAwIDFlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1nb2xkKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDZweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTdweDtcXHJcXG4gIG1heC13aWR0aDogMjBlbTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWdvbGQpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGJveC1zaGFkb3c6ICAwIDAgMzBweCB2YXIoLS1nb2xkKTtcXHJcXG59XFxyXFxuLyogUmVtb3ZlIElFIGFycm93ICovXFxyXFxuc2VsZWN0OjotbXMtZXhwYW5kIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcbi8qIEN1c3RvbSBTZWxlY3Qgd3JhcHBlciAqL1xcclxcbnNlbGVjdCB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgbWF4LXdpZHRoOiAyMGVtO1xcclxcbiAgaGVpZ2h0OiAyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAuMjVlbTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXHJcXG4gIGZvbnQtc2l6ZTogMTdweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWdvbGQpO1xcclxcbiAgYm94LXNoYWRvdzogIDAgMCAzMHB4IHZhcigtLWdvbGQpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG4vKiBBcnJvdyAqL1xcclxcbnNlbGVjdDo6YWZ0ZXIge1xcclxcbiAgY29udGVudDogJ1xcXFwyNUJDJztcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgcGFkZGluZzogMWVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ29sZCk7XFxyXFxuICB0cmFuc2l0aW9uOiAuMjVzIGFsbCBlYXNlO1xcclxcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxufVxcclxcbi8qIFRyYW5zaXRpb24gKi9cXHJcXG5zZWxlY3Q6aG92ZXI6OmFmdGVyIHtcXHJcXG4gIGNvbG9yOiAjZjM5YzEyO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXQtZmlsdGVycyB7XFxyXFxuICB3aWR0aDogMTBlbTtcXHJcXG4gIGhlaWdodDogM2VtO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDAuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBPdGhlciBzdHlsZXMqL1xcclxcblxcclxcblxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXHJcXG4gIC0tYmFja2dyb3VuZDogIzE0MGEwYTtcXHJcXG4gIC0tcmVkOiAjZDYwMDAwO1xcclxcbiAgLS1nb2xkOiAjZmRjODU0O1xcclxcbiB9XFxyXFxuXFxyXFxuIC53aW5lY2FyZHN7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBtYXgtd2lkdGg6IDgwcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ud2luZWNhcmRzLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBncmlkLWNvbHVtbi1nYXA6IDNlbTtcXHJcXG4gIGdyaWQtcm93LWdhcDogM2VtO1xcclxcbn1cXHJcXG5cXHJcXG4ud2luZWNhcmRzX19pdGVtIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAyMGVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcclxcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXHJcXG4gIC13ZWJraXQtcGVyc3BlY3RpdmU6IDEwMDBweDtcXHJcXG4gICAgcGVyc3BlY3RpdmU6IDEwMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLndpbmVjYXJkc19fZmFjZSxcXHJcXG4ud2luZWNhcmRzX19iYWNrIHtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMTJweCAwIHZhcigtLWdvbGQpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gLjdzIGN1YmljLWJlemllcigwLjQsIDAuMiwgMC4yLCAxKTtcXHJcXG4gIHRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIC43cyBjdWJpYy1iZXppZXIoMC40LCAwLjIsIDAuMiwgMSk7XFxyXFxuICAtby10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjdzIGN1YmljLWJlemllcigwLjQsIDAuMiwgMC4yLCAxKTtcXHJcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuN3MgY3ViaWMtYmV6aWVyKDAuNCwgMC4yLCAwLjIsIDEpO1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC43cyBjdWJpYy1iZXppZXIoMC40LCAwLjIsIDAuMiwgMSksIC13ZWJraXQtdHJhbnNmb3JtIC43cyBjdWJpYy1iZXppZXIoMC40LCAwLjIsIDAuMiwgMSk7XFxyXFxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gICAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbWluLWhlaWdodDogMzUwcHg7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICB0ZXh0LXNoYWRvdzogMTBweCAxMHB4IDEwcHggdmFyKC0tYmFja2dyb3VuZCk7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5pbkNhcnQgLndpbmVjYXJkc19fZmFjZSxcXHJcXG4uaW5DYXJ0IC53aW5lY2FyZHNfX2JhY2sge1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDEycHggMCB2YXIoLS1yZWQpO1xcclxcbn1cXHJcXG5cXHJcXG4ud2luZWNhcmRzX19iYWNre1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCk7XFxyXFxuICBjb2xvcjogdmFyKC0tZ29sZCk7XFxyXFxufVxcclxcblxcclxcbi53aW5lY2FyZHNfX2ZhY2U6YWZ0ZXJ7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgb3BhY2l0eTogLjU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcclxcbiAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gICAgICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi53aW5lY2FyZHNfX2l0ZW0gLndpbmVjYXJkc19fZmFjZSxcXHJcXG4ud2luZWNhcmRzX19pdGVtIC53aW5lY2FyZHNfX2JhY2t7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gLjdzIGN1YmljLWJlemllcigwLjQsIDAuMiwgMC4yLCAxKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gLjdzIGN1YmljLWJlemllcigwLjQsIDAuMiwgMC4yLCAxKTtcXHJcXG4gICAgLW8tdHJhbnNpdGlvbjogdHJhbnNmb3JtIC43cyBjdWJpYy1iZXppZXIoMC40LCAwLjIsIDAuMiwgMSk7XFxyXFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuN3MgY3ViaWMtYmV6aWVyKDAuNCwgMC4yLCAwLjIsIDEpO1xcclxcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjdzIGN1YmljLWJlemllcigwLjQsIDAuMiwgMC4yLCAxKSwgLXdlYmtpdC10cmFuc2Zvcm0gLjdzIGN1YmljLWJlemllcigwLjQsIDAuMiwgMC4yLCAxKTtcXHJcXG59XFxyXFxuXFxyXFxuLndpbmVjYXJkc19fYmFja3tcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHRleHQtc2hhZG93OiAxMHB4IDEwcHggMTBweCB2YXIoLS1nb2xkKTtcXHJcXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xcclxcbn1cXHJcXG5cXHJcXG4ud2luZWNhcmRzX19mYWNlLWRldGFpbHMge1xcclxcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgdHJhbnNsYXRlWig2MHB4KSBzY2FsZSgwLjk0KTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSB0cmFuc2xhdGVaKDYwcHgpIHNjYWxlKDAuOTQpO1xcclxcbnRvcDogNTAlO1xcclxcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5sZWZ0OiAwO1xcclxcbndpZHRoOiAxMDAlO1xcclxcbnBhZGRpbmc6IDJyZW07XFxyXFxuLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG5vdXRsaW5lOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuLXdlYmtpdC1wZXJzcGVjdGl2ZTogaW5oZXJpdDtcXHJcXG4gIHBlcnNwZWN0aXZlOiBpbmhlcml0O1xcclxcbnotaW5kZXg6IDM7XFxyXFxufVxcclxcblxcclxcblxcclxcbi53aW5lY2FyZHNfX2l0ZW0gLndpbmVjYXJkc19fYmFja3tcXHJcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XFxyXFxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xcclxcbiAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcclxcbiAgICAgICAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcclxcbn1cXHJcXG5cXHJcXG4ud2luZWNhcmRzX19pdGVtIC53aW5lY2FyZHNfX2ZhY2V7XFxyXFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcXHJcXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xcclxcbiAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcclxcbiAgICAgICAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcclxcbn1cXHJcXG5cXHJcXG4ud2luZWNhcmRzX19pdGVtOmZvY3VzIC53aW5lY2FyZHNfX2JhY2ssXFxyXFxuLndpbmVjYXJkc19faXRlbTpob3ZlciAud2luZWNhcmRzX19iYWNre1xcclxcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XFxyXFxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcXHJcXG4gIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXHJcXG4gICAgICAgICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXHJcXG59XFxyXFxuXFxyXFxuLndpbmVjYXJkc19faXRlbTpob3ZlciAud2luZWNhcmRzX19mYWNlLFxcclxcbi53aW5lY2FyZHNfX2l0ZW06Zm9jdXMgLndpbmVjYXJkc19fZmFjZXtcXHJcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKC0xODBkZWcpO1xcclxcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTE4MGRlZyk7XFxyXFxuICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxyXFxuICAgICAgICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxyXFxufVxcclxcblxcclxcbi53aW5lY2FyZHNfX2ZhY2UtcGhvdG97XFxyXFxuICB3aWR0aDogMTBlbTtcXHJcXG4gIGhlaWdodDogMTBlbTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDEwMCU7XFxyXFxuICBtYXJnaW46IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuLndpbmVjYXJkc19fYmFjay1uYW1lIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcXHJcXG4gIHRleHQtc2hhZG93OiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcnRfX2J0biB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1nb2xkKTtcXHJcXG4gIGJvcmRlcjogdmFyKC0tZ29sZCk7XFxyXFxuICBjb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxyXFxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAxMHB4IHZhcigtLWJhY2tncm91bmQpO1xcclxcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IDIwcHggdmFyKC0tYmFja2dyb3VuZCk7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBwYWRkaW5nOiAxZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcclxcbiAgbWFyZ2luLXRvcDogMmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FydF9fYnRuOmhvdmVyLFxcclxcbi5jYXJ0X19idG46Zm9jdXN7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXHJcXG4gIGJveC1zaGFkb3c6IDEwcHggMTBweCAyMHB4IHZhcigtLWdvbGQpO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgIHZhcigtLWdvbGQpO1xcclxcbiAgY29sb3I6IHZhcigtLWdvbGQpO1xcclxcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggMTBweCB2YXIoLS1nb2xkKTtcXHJcXG4gIHRyYW5zaXRpb246IDAuMnM7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL3dpbmVjYXJkcy93aW5lY2FyZHMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxlQUFlO0NBQ2hCOztDQUVBO0VBQ0MsVUFBVTtFQUNWLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysb0NBQW9DO0VBQ3BDLDRCQUE0QjtFQUM1QiwyQkFBMkI7SUFDekIsbUJBQW1CO0FBQ3ZCOztBQUVBOztFQUVFLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMsbUJBQW1CO0VBQ25CLHdFQUF3RTtFQUN4RSxnRUFBZ0U7RUFDaEUsMkRBQTJEO0VBQzNELHdEQUF3RDtFQUN4RCw4R0FBOEc7RUFDOUcsbUNBQW1DO1VBQzNCLDJCQUEyQjtFQUNuQyxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLDZDQUE2QztFQUM3QyxlQUFlO0FBQ2pCOztBQUVBOztFQUVFLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixrQkFBa0I7QUFDcEI7O0FBRUE7Q0FDQyxrQkFBa0I7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCxjQUFjO0lBQ2QsV0FBVztJQUNYLG1DQUFtQztJQUNuQyxtQ0FBbUM7WUFDM0IsMkJBQTJCO0lBQ25DLG1CQUFtQjtBQUN2Qjs7OztBQUlBOztJQUVJLHdFQUF3RTtJQUN4RSxnRUFBZ0U7SUFDaEUsMkRBQTJEO0lBQzNELHdEQUF3RDtJQUN4RCw4R0FBOEc7QUFDbEg7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsdUNBQXVDO0VBQ3ZDLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdFQUFnRTtFQUNoRSx3REFBd0Q7QUFDMUQsUUFBUTtBQUNSLGtCQUFrQjtBQUNsQixPQUFPO0FBQ1AsV0FBVztBQUNYLGFBQWE7QUFDYiw4QkFBOEI7RUFDNUIsc0JBQXNCO0FBQ3hCLDhCQUE4QjtBQUM5Qiw0QkFBNEI7RUFDMUIsb0JBQW9CO0FBQ3RCLFVBQVU7QUFDVjs7O0FBR0E7RUFDRSxrQ0FBa0M7VUFDMUIsMEJBQTBCO0VBQ2xDLG9DQUFvQztVQUM1Qiw0QkFBNEI7QUFDdEM7O0FBRUE7RUFDRSxnQ0FBZ0M7VUFDeEIsd0JBQXdCO0VBQ2hDLG9DQUFvQztVQUM1Qiw0QkFBNEI7QUFDdEM7O0FBRUE7O0VBRUUsZ0NBQWdDO1VBQ3hCLHdCQUF3QjtFQUNoQyxvQ0FBb0M7VUFDNUIsNEJBQTRCO0FBQ3RDOztBQUVBOztFQUVFLG1DQUFtQztVQUMzQiwyQkFBMkI7RUFDbkMsb0NBQW9DO1VBQzVCLDRCQUE0QjtBQUN0Qzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osd0JBQXdCO0VBQ3hCLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0IsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLHdCQUF3QjtFQUN4QiwyQ0FBMkM7RUFDM0MsNENBQTRDO0VBQzVDLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBOztFQUVFLG1DQUFtQztFQUNuQyxzQ0FBc0M7RUFDdEMsOEJBQThCO0VBQzlCLGtCQUFrQjtFQUNsQixxQ0FBcUM7RUFDckMsZ0JBQWdCO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXHJcXG4gIC0tYmFja2dyb3VuZDogIzE0MGEwYTtcXHJcXG4gIC0tcmVkOiAjZDYwMDAwO1xcclxcbiAgLS1nb2xkOiAjZmRjODU0O1xcclxcbiB9XFxyXFxuXFxyXFxuIC53aW5lY2FyZHN7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBtYXgtd2lkdGg6IDgwcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ud2luZWNhcmRzLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBncmlkLWNvbHVtbi1nYXA6IDNlbTtcXHJcXG4gIGdyaWQtcm93LWdhcDogM2VtO1xcclxcbn1cXHJcXG5cXHJcXG4ud2luZWNhcmRzX19pdGVtIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAyMGVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcclxcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXHJcXG4gIC13ZWJraXQtcGVyc3BlY3RpdmU6IDEwMDBweDtcXHJcXG4gICAgcGVyc3BlY3RpdmU6IDEwMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLndpbmVjYXJkc19fZmFjZSxcXHJcXG4ud2luZWNhcmRzX19iYWNrIHtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMTJweCAwIHZhcigtLWdvbGQpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gLjdzIGN1YmljLWJlemllcigwLjQsIDAuMiwgMC4yLCAxKTtcXHJcXG4gIHRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIC43cyBjdWJpYy1iZXppZXIoMC40LCAwLjIsIDAuMiwgMSk7XFxyXFxuICAtby10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjdzIGN1YmljLWJlemllcigwLjQsIDAuMiwgMC4yLCAxKTtcXHJcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuN3MgY3ViaWMtYmV6aWVyKDAuNCwgMC4yLCAwLjIsIDEpO1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC43cyBjdWJpYy1iZXppZXIoMC40LCAwLjIsIDAuMiwgMSksIC13ZWJraXQtdHJhbnNmb3JtIC43cyBjdWJpYy1iZXppZXIoMC40LCAwLjIsIDAuMiwgMSk7XFxyXFxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gICAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbWluLWhlaWdodDogMzUwcHg7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICB0ZXh0LXNoYWRvdzogMTBweCAxMHB4IDEwcHggdmFyKC0tYmFja2dyb3VuZCk7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5pbkNhcnQgLndpbmVjYXJkc19fZmFjZSxcXHJcXG4uaW5DYXJ0IC53aW5lY2FyZHNfX2JhY2sge1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDEycHggMCB2YXIoLS1yZWQpO1xcclxcbn1cXHJcXG5cXHJcXG4ud2luZWNhcmRzX19iYWNre1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCk7XFxyXFxuICBjb2xvcjogdmFyKC0tZ29sZCk7XFxyXFxufVxcclxcblxcclxcbi53aW5lY2FyZHNfX2ZhY2U6YWZ0ZXJ7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgb3BhY2l0eTogLjU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcclxcbiAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gICAgICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi53aW5lY2FyZHNfX2l0ZW0gLndpbmVjYXJkc19fZmFjZSxcXHJcXG4ud2luZWNhcmRzX19pdGVtIC53aW5lY2FyZHNfX2JhY2t7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gLjdzIGN1YmljLWJlemllcigwLjQsIDAuMiwgMC4yLCAxKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gLjdzIGN1YmljLWJlemllcigwLjQsIDAuMiwgMC4yLCAxKTtcXHJcXG4gICAgLW8tdHJhbnNpdGlvbjogdHJhbnNmb3JtIC43cyBjdWJpYy1iZXppZXIoMC40LCAwLjIsIDAuMiwgMSk7XFxyXFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuN3MgY3ViaWMtYmV6aWVyKDAuNCwgMC4yLCAwLjIsIDEpO1xcclxcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjdzIGN1YmljLWJlemllcigwLjQsIDAuMiwgMC4yLCAxKSwgLXdlYmtpdC10cmFuc2Zvcm0gLjdzIGN1YmljLWJlemllcigwLjQsIDAuMiwgMC4yLCAxKTtcXHJcXG59XFxyXFxuXFxyXFxuLndpbmVjYXJkc19fYmFja3tcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHRleHQtc2hhZG93OiAxMHB4IDEwcHggMTBweCB2YXIoLS1nb2xkKTtcXHJcXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xcclxcbn1cXHJcXG5cXHJcXG4ud2luZWNhcmRzX19mYWNlLWRldGFpbHMge1xcclxcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgdHJhbnNsYXRlWig2MHB4KSBzY2FsZSgwLjk0KTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSB0cmFuc2xhdGVaKDYwcHgpIHNjYWxlKDAuOTQpO1xcclxcbnRvcDogNTAlO1xcclxcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5sZWZ0OiAwO1xcclxcbndpZHRoOiAxMDAlO1xcclxcbnBhZGRpbmc6IDJyZW07XFxyXFxuLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG5vdXRsaW5lOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuLXdlYmtpdC1wZXJzcGVjdGl2ZTogaW5oZXJpdDtcXHJcXG4gIHBlcnNwZWN0aXZlOiBpbmhlcml0O1xcclxcbnotaW5kZXg6IDM7XFxyXFxufVxcclxcblxcclxcblxcclxcbi53aW5lY2FyZHNfX2l0ZW0gLndpbmVjYXJkc19fYmFja3tcXHJcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XFxyXFxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xcclxcbiAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcclxcbiAgICAgICAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcclxcbn1cXHJcXG5cXHJcXG4ud2luZWNhcmRzX19pdGVtIC53aW5lY2FyZHNfX2ZhY2V7XFxyXFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcXHJcXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xcclxcbiAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcclxcbiAgICAgICAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcclxcbn1cXHJcXG5cXHJcXG4ud2luZWNhcmRzX19pdGVtOmZvY3VzIC53aW5lY2FyZHNfX2JhY2ssXFxyXFxuLndpbmVjYXJkc19faXRlbTpob3ZlciAud2luZWNhcmRzX19iYWNre1xcclxcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XFxyXFxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcXHJcXG4gIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXHJcXG4gICAgICAgICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXHJcXG59XFxyXFxuXFxyXFxuLndpbmVjYXJkc19faXRlbTpob3ZlciAud2luZWNhcmRzX19mYWNlLFxcclxcbi53aW5lY2FyZHNfX2l0ZW06Zm9jdXMgLndpbmVjYXJkc19fZmFjZXtcXHJcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKC0xODBkZWcpO1xcclxcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTE4MGRlZyk7XFxyXFxuICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxyXFxuICAgICAgICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxyXFxufVxcclxcblxcclxcbi53aW5lY2FyZHNfX2ZhY2UtcGhvdG97XFxyXFxuICB3aWR0aDogMTBlbTtcXHJcXG4gIGhlaWdodDogMTBlbTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDEwMCU7XFxyXFxuICBtYXJnaW46IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuLndpbmVjYXJkc19fYmFjay1uYW1lIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcXHJcXG4gIHRleHQtc2hhZG93OiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcnRfX2J0biB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1nb2xkKTtcXHJcXG4gIGJvcmRlcjogdmFyKC0tZ29sZCk7XFxyXFxuICBjb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxyXFxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAxMHB4IHZhcigtLWJhY2tncm91bmQpO1xcclxcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IDIwcHggdmFyKC0tYmFja2dyb3VuZCk7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBwYWRkaW5nOiAxZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcclxcbiAgbWFyZ2luLXRvcDogMmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FydF9fYnRuOmhvdmVyLFxcclxcbi5jYXJ0X19idG46Zm9jdXN7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXHJcXG4gIGJveC1zaGFkb3c6IDEwcHggMTBweCAyMHB4IHZhcigtLWdvbGQpO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgIHZhcigtLWdvbGQpO1xcclxcbiAgY29sb3I6IHZhcigtLWdvbGQpO1xcclxcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggMTBweCB2YXIoLS1nb2xkKTtcXHJcXG4gIHRyYW5zaXRpb246IDAuMnM7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvaW1nL2JnMS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9pbWcvY2FydC1nb2xkLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxyXFxuIC0tYmFja2dyb3VuZDogYmxhY2s7XFxyXFxuIC0tcmVkOiAjZDYwMDAwO1xcclxcbiAtLWdvbGQ6ICNmZGM4NTQ7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcbmEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgdHJhbnNpdGlvbjogMC4zcztcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBtYXgtaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcclxcbiAgICAnaGVhZGVyIGhlYWRlciBoZWFkZXInXFxyXFxuICAgICdtYWluIG1haW4gbWFpbidcXHJcXG4gICAgJ2Zvb3RlciBmb290ZXIgZm9vdGVyJztcXHJcXG4gIGdyaWQtcm93LWdhcDogMWVtO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdvbGQpO1xcclxcbiAgYm9yZGVyOiB2YXIoLS1nb2xkKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXHJcXG4gIHRleHQtc2hhZG93OiAycHggMnB4IDEwcHggdmFyKC0tYmFja2dyb3VuZCk7XFxyXFxuICBib3gtc2hhZG93OiAxMHB4IDEwcHggMjBweCB2YXIoLS1iYWNrZ3JvdW5kKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIHBhZGRpbmc6IDFlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxyXFxufVxcclxcbmJ1dHRvbjpob3ZlcixcXHJcXG5idXR0b246Zm9jdXMge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxyXFxuICBib3gtc2hhZG93OiAxMHB4IDEwcHggMjBweCB2YXIoLS1nb2xkKTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICB2YXIoLS1nb2xkKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1nb2xkKTtcXHJcXG4gIHRleHQtc2hhZG93OiAycHggMnB4IDEwcHggdmFyKC0tZ29sZCk7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcclxcbn1cXHJcXG4gIC5oZWFkZXIge1xcclxcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogIDFlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zZWFyY2gtY29udGFpbmVyX19pbnB1dCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcclxcbiAgICBwYWRkaW5nOiA2cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTdweDtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZ29sZCk7XFxyXFxuICAgIGJveC1zaGFkb3c6ICAwIDAgMzBweCB2YXIoLS1nb2xkKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNlYXJjaC1jb250YWluZXJfX2lucHV0OmZvY3Vze1xcclxcbiAgICBib3gtc2hhZG93OiBpbnNldCAgMCAwIDMwcHggdmFyKC0tZ29sZCk7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaGVhZGVyX19jYXJ0IHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHdpZHRoOiAzZW07XFxyXFxuICBoZWlnaHQ6IDNlbTtcXHJcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIG5vLXJlcGVhdCBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmhlYWRlcl9fY2FydDpob3ZlciB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xLCAxLjEpO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNhcnRfX3Byb2R1Y3RzIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDVweDtcXHJcXG4gICAgbGVmdDogNXB4O1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWdvbGQpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIHBhZGRpbmc6IDFweCA2cHg7XFxyXFxuICAgIHdpZHRoOiAyMHB4O1xcclxcbiAgICBoZWlnaHQ6IDIwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubWFpbntcXHJcXG4gICAgZ3JpZC1hcmVhOiBtYWluO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIG1heC13aWR0aDogMTAwJTtcXHJcXG4gICAgbWFyZ2luOiAwIDFlbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMWVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm92ZXJsYXkge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxyXFxuICAgIG9wYWNpdHk6IDAuNTtcXHJcXG4gICAgei1pbmRleDogOTk7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuXFxyXFxuICB9XFxyXFxuXFxyXFxuICAub3ZlcmxheS5hY3RpdmUge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIH1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvZ2xvYmFsLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtDQUNDLG1CQUFtQjtDQUNuQixjQUFjO0NBQ2QsZUFBZTtBQUNoQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsZ0JBQWdCOztBQUVsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsYUFBYTtFQUNiOzs7MEJBR3dCO0VBQ3hCLGlCQUFpQjtFQUNqQixpQ0FBaUM7RUFDakMsa0NBQWtDO0VBQ2xDLHlEQUE2QztFQUM3Qyw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsd0JBQXdCO0VBQ3hCLDJDQUEyQztFQUMzQyw0Q0FBNEM7RUFDNUMsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCO0FBQ0E7O0VBRUUsbUNBQW1DO0VBQ25DLHNDQUFzQztFQUN0Qyw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLHFDQUFxQztFQUNyQyxnQkFBZ0I7QUFDbEI7RUFDRTtJQUNFLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsWUFBWTtFQUNkOztFQUVBO0lBQ0UsbUNBQW1DO0lBQ25DLFlBQVk7SUFDWixlQUFlO0lBQ2YsNkJBQTZCO0lBQzdCLGlDQUFpQztJQUNqQyxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSx1Q0FBdUM7SUFDdkMsYUFBYTtFQUNmOztFQUVBO0VBQ0Esa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLG9FQUE4RDtFQUM5RCxzQkFBc0I7RUFDdEIsZUFBZTtFQUNmOztFQUVBO0lBQ0UsMEJBQTBCO0lBQzFCLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULGNBQWM7SUFDZCw0QkFBNEI7SUFDNUIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGVBQWU7SUFDZixZQUFZO0lBQ1osZUFBZTtJQUNmLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsUUFBUTtJQUNSLDRCQUE0QjtFQUM5Qjs7RUFFQTtJQUNFLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUNBQW1DO0lBQ25DLFlBQVk7SUFDWixXQUFXO0lBQ1gsYUFBYTs7RUFFZjs7RUFFQTtJQUNFLGNBQWM7RUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcclxcbiAtLWJhY2tncm91bmQ6IGJsYWNrO1xcclxcbiAtLXJlZDogI2Q2MDAwMDtcXHJcXG4gLS1nb2xkOiAjZmRjODU0O1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5hIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgbWF4LWhlaWdodDogMTAwdmg7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXHJcXG4gICAgJ2hlYWRlciBoZWFkZXIgaGVhZGVyJ1xcclxcbiAgICAnbWFpbiBtYWluIG1haW4nXFxyXFxuICAgICdmb290ZXIgZm9vdGVyIGZvb3Rlcic7XFxyXFxuICBncmlkLXJvdy1nYXA6IDFlbTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0bztcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vYXNzZXRzL2ltZy9iZzEuanBnJyk7XFxyXFxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdvbGQpO1xcclxcbiAgYm9yZGVyOiB2YXIoLS1nb2xkKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXHJcXG4gIHRleHQtc2hhZG93OiAycHggMnB4IDEwcHggdmFyKC0tYmFja2dyb3VuZCk7XFxyXFxuICBib3gtc2hhZG93OiAxMHB4IDEwcHggMjBweCB2YXIoLS1iYWNrZ3JvdW5kKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIHBhZGRpbmc6IDFlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxyXFxufVxcclxcbmJ1dHRvbjpob3ZlcixcXHJcXG5idXR0b246Zm9jdXMge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxyXFxuICBib3gtc2hhZG93OiAxMHB4IDEwcHggMjBweCB2YXIoLS1nb2xkKTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICB2YXIoLS1nb2xkKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1nb2xkKTtcXHJcXG4gIHRleHQtc2hhZG93OiAycHggMnB4IDEwcHggdmFyKC0tZ29sZCk7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcclxcbn1cXHJcXG4gIC5oZWFkZXIge1xcclxcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogIDFlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zZWFyY2gtY29udGFpbmVyX19pbnB1dCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcclxcbiAgICBwYWRkaW5nOiA2cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTdweDtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZ29sZCk7XFxyXFxuICAgIGJveC1zaGFkb3c6ICAwIDAgMzBweCB2YXIoLS1nb2xkKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNlYXJjaC1jb250YWluZXJfX2lucHV0OmZvY3Vze1xcclxcbiAgICBib3gtc2hhZG93OiBpbnNldCAgMCAwIDMwcHggdmFyKC0tZ29sZCk7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaGVhZGVyX19jYXJ0IHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHdpZHRoOiAzZW07XFxyXFxuICBoZWlnaHQ6IDNlbTtcXHJcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoJy4vYXNzZXRzL2ltZy9jYXJ0LWdvbGQuc3ZnJykgbm8tcmVwZWF0IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaGVhZGVyX19jYXJ0OmhvdmVyIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEsIDEuMSk7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY2FydF9fcHJvZHVjdHMge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogNXB4O1xcclxcbiAgICBsZWZ0OiA1cHg7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tZ29sZCk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgcGFkZGluZzogMXB4IDZweDtcXHJcXG4gICAgd2lkdGg6IDIwcHg7XFxyXFxuICAgIGhlaWdodDogMjBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tYWlue1xcclxcbiAgICBncmlkLWFyZWE6IG1haW47XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgICBtYXJnaW46IDAgMWVtO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxZW07XFxyXFxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAub3ZlcmxheSB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXHJcXG4gICAgb3BhY2l0eTogMC41O1xcclxcbiAgICB6LWluZGV4OiA5OTtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG5cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5vdmVybGF5LmFjdGl2ZSB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgfVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jYXJ0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY2FydC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZmlsdGVycy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2ZpbHRlcnMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3dpbmVjYXJkcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3dpbmVjYXJkcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2xvYmFsLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2xvYmFsLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBXaW5lRGV0YWlscyB9IGZyb20gXCIuLi8uLi90eXBlcy9pbnRlcmZhY2VzXCI7XHJcbmltcG9ydCB7IENhcnRTZXR0aW5ncyB9IGZyb20gXCIuLi9jYXJ0L2NhcnRcIjtcclxuaW1wb3J0IFdpbmVDYXJkcyBmcm9tIFwiLi4vd2luZWNhcmRzL3dpbmVjYXJkc1wiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi8uLi9odG1sLWNvbXBvbmVudHMvaGVhZGVyL2hlYWRlclwiO1xyXG5pbXBvcnQgTWFpbiBmcm9tIFwiLi4vLi4vaHRtbC1jb21wb25lbnRzL21haW4vbWFpblwiO1xyXG5pbXBvcnQgRmlsdGVyU2V0dGluZ3MgZnJvbSBcIi4uL2ZpbHRlcnMvZmlsdGVyU2V0dGluZ3NcIjtcclxuaW1wb3J0IEZpbHRlcnMgZnJvbSBcIi4uLy4uL2h0bWwtY29tcG9uZW50cy9maWx0ZXJzL2ZpbHRlcnNcIjtcclxuaW1wb3J0IHsgTG9jYWxTdG9yYWdlLCBsb2NhbFN0b3JhZ2VLZXlzIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2xvY2Fsc3RvcmFnZVwiO1xyXG5pbXBvcnQgeyBnb29kcyB9IGZyb20gXCIuLi8uLi9jb25zdGF0cy9nb29kc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIHtcclxuICBwcml2YXRlIHN0YXRpYyBjb250YWluZXI6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuYm9keTtcclxuICBwcml2YXRlIGhlYWRlcjogSGVhZGVyO1xyXG4gIHByaXZhdGUgbWFpbjogTWFpbjtcclxuICBjYXJ0c2V0dGluZ3M6IENhcnRTZXR0aW5ncztcclxuICB3aW5lY2FyZHM6IFdpbmVDYXJkcztcclxuICBmaWx0ZXJTZXR0aW5nczogRmlsdGVyU2V0dGluZ3M7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgXHJcbiAgICB0aGlzLmNhcnRzZXR0aW5ncyA9IG5ldyBDYXJ0U2V0dGluZ3MoKTtcclxuICAgIHRoaXMud2luZWNhcmRzID0gbmV3IFdpbmVDYXJkcygpO1xyXG4gICAgdGhpcy5maWx0ZXJTZXR0aW5ncyA9IG5ldyBGaWx0ZXJTZXR0aW5ncygpO1xyXG4gICAgdGhpcy5oZWFkZXIgPSBuZXcgSGVhZGVyKCdoZWFkZXInLCAnaGVhZGVyJyk7XHJcbiAgICB0aGlzLm1haW4gPSBuZXcgTWFpbignbWFpbicsICdtYWluJyk7XHJcblxyXG4gIH1cclxuICBzdGFydChkYXRhOiBXaW5lRGV0YWlsc1tdKSB7XHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NvcnRlZCcpKSB7XHJcbiAgICAgIGRhdGEgPSBMb2NhbFN0b3JhZ2UuZ2V0TG9jYWxTdG9yYWdlKGxvY2FsU3RvcmFnZUtleXMuc29ydGVkKSB8fCBkYXRhO1xyXG4gICAgfTtcclxuICAgIEFwcC5jb250YWluZXIuYXBwZW5kKHRoaXMuaGVhZGVyLnJlbmRlcigpKTtcclxuICAgIEFwcC5jb250YWluZXIuYXBwZW5kKHRoaXMubWFpbi5yZW5kZXIoKSk7XHJcbiAgICBjb25zdCBjb3VudHJ5RmlsdGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3VudHJ5LWZpbHRlcicpXHJcbiAgICBjb25zdCBjb2xvckZpbHRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29sb3ItZmlsdGVyJylcclxuICAgIHRoaXMud2luZWNhcmRzLnJlbmRlcihkYXRhKTtcclxuICAgIHRoaXMuY2FydHNldHRpbmdzLnJlbmRlcigpO1xyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmaWx0ZXInKSkge1xyXG4gICAgICB0aGlzLmZpbHRlclNldHRpbmdzLmZpbHRlcnNPYmogPSBMb2NhbFN0b3JhZ2UuZ2V0TG9jYWxTdG9yYWdlKGxvY2FsU3RvcmFnZUtleXMuZmlsdGVyKSB8fCAnJztcclxuICAgIH07XHJcbiAgICBjb25zdCBmaWx0ZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZpbHRlcnMnKTtcclxuICAgIFsuLi5maWx0ZXJzIS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpXS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICBpZih0aGlzLmZpbHRlclNldHRpbmdzLmZpbHRlcnNPYmouY291bnRyeS5pbmNsdWRlcyhpdGVtLnZhbHVlKSl7XHJcbiAgICAgICAgaXRlbS5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmZpbHRlclNldHRpbmdzLmZpbHRlckJ5Q291bnRyeShkYXRhKTtcclxuICAgICAgICB0aGlzLndpbmVjYXJkcy5yZW5kZXIodGhpcy5maWx0ZXJTZXR0aW5ncy5maWx0ZXJlZClcclxuICAgICAgfVxyXG4gICAgICBpZih0aGlzLmZpbHRlclNldHRpbmdzLmZpbHRlcnNPYmouY29sb3IuaW5jbHVkZXMoaXRlbS52YWx1ZSkpIHtcclxuICAgICAgICBpdGVtLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZmlsdGVyU2V0dGluZ3MuZmlsdGVyQnlDb2xvcihkYXRhKTtcclxuICAgICAgICB0aGlzLndpbmVjYXJkcy5yZW5kZXIodGhpcy5maWx0ZXJTZXR0aW5ncy5maWx0ZXJlZClcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIFxyXG5cclxuICAgIFxyXG5cclxuICBcclxuICAgIGNvbG9yRmlsdGVycyEuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBldmVudCA9PiB7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJTZXR0aW5ncy5maWx0ZXJCeUNvbG9yKGRhdGEpO1xyXG4gICAgICAgIHRoaXMud2luZWNhcmRzLnJlbmRlcih0aGlzLmZpbHRlclNldHRpbmdzLmZpbHRlcmVkKTtcclxuICAgXHJcbiAgICAgIH0pXHJcbiAgICAgIGNvdW50cnlGaWx0ZXJzIS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGV2ZW50ID0+IHtcclxuICAgICAgICAgIHRoaXMuZmlsdGVyU2V0dGluZ3MuZmlsdGVyQnlDb3VudHJ5KGRhdGEpO1xyXG4gICAgICAgICAgdGhpcy53aW5lY2FyZHMucmVuZGVyKHRoaXMuZmlsdGVyU2V0dGluZ3MuZmlsdGVyZWQpO1xyXG4gICBcclxuICAgICAgICB9KVxyXG4gICAgICBkb2N1bWVudFxyXG4gICAgICAucXVlcnlTZWxlY3RvcignLnJlc2V0LWZpbHRlcnMnKSFcclxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICB0aGlzLmZpbHRlclNldHRpbmdzLnJlc2V0RmlsdGVycygpO1xyXG4gICAgICAgIHRoaXMud2luZWNhcmRzLnJlbmRlcihkYXRhKTtcclxuICAgICAgfSlcclxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICAgICAgaWYgKCg8SFRNTEVsZW1lbnQ+ZXZlbnQudGFyZ2V0KSEuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYXJ0X19hZGQnKSkge1xyXG4gICAgICAgICAgbGV0IGFydGljdWwgPSBOdW1iZXIoKDxIVE1MRWxlbWVudD5ldmVudC50YXJnZXQpIS5kYXRhc2V0WydhcnRpY3VsJ10pITtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGFydGljdWwpXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQpXHJcbiAgICAgICAgICBpZiAodGhpcy5jYXJ0c2V0dGluZ3MudG90YWxJdGVtcyA8IDIwICkge1xyXG4gICAgICAgICAgICB0aGlzLmNhcnRzZXR0aW5ncy5jYXJ0QWRkKGRhdGEsIGFydGljdWwpO1xyXG4gICAgICAgICAgICB0aGlzLmNhcnRzZXR0aW5ncy5yZW5kZXIoKTtcclxuICAgICAgICAgICAgdGhpcy53aW5lY2FyZHMucmVuZGVyKGRhdGEpO1xyXG4gICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0X19lcnJvcicpIS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXknKSEuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcclxuICAgICAgICBpZiAoKDxIVE1MRWxlbWVudD5ldmVudC50YXJnZXQpIS5jbGFzc0xpc3QuY29udGFpbnMoJ2NhcnRfX3JlbW92ZScpKSB7XHJcbiAgICAgICAgICBsZXQgYXJ0aWN1bCA9IE51bWJlcigoPEhUTUxFbGVtZW50PmV2ZW50LnRhcmdldCkhLmRhdGFzZXRbJ2FydGljdWwnXSk7XHJcbiAgICAgICAgICBpZiAodGhpcy5jYXJ0c2V0dGluZ3MudG90YWxJdGVtcyA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5jYXJ0c2V0dGluZ3MuY2FydFJlbW92ZShkYXRhLCBhcnRpY3VsKTtcclxuICAgICAgICAgICAgdGhpcy5jYXJ0c2V0dGluZ3MucmVuZGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMud2luZWNhcmRzLnJlbmRlcihkYXRhKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIGRvY3VtZW50XHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yKCcuZXJyb3JfX2J0bicpIVxyXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICAgICAgdGhpcy5jYXJ0c2V0dGluZ3MuY2FydE9wZW4oKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FydF9fZXJyb3InKSEuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnYXV0byc7XHJcbiAgICAgIH0pXHJcbiAgICAgIGRvY3VtZW50XHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yKCcuY2FydCcpIVxyXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICAgICAgdGhpcy5jYXJ0c2V0dGluZ3MucmVuZGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuY2FydHNldHRpbmdzLmNhcnRPcGVuKCk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdhdXRvJztcclxuICAgICAgfSlcclxuICAgICAgZG9jdW1lbnRcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1wb3B1cCcpIVxyXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICAgICAgdGhpcy5jYXJ0c2V0dGluZ3MuY2FydENsb3NlKCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIGRvY3VtZW50LlxyXG4gICAgICBxdWVyeVNlbGVjdG9yKCcuc2VsZWN0JykhLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGV2ZW50ID0+IHtcclxuICAgICAgICBpZigoPEhUTUxPcHRpb25FbGVtZW50PmV2ZW50LnRhcmdldCkhLnZhbHVlID09PSAnQnlQcmljZVVwJyl7XHJcbiAgICAgICAgICB0aGlzLmZpbHRlclNldHRpbmdzLnNvcnRQcmljZVVwKGRhdGEpO1xyXG4gICAgICAgICAgdGhpcy53aW5lY2FyZHMucmVuZGVyKHRoaXMuZmlsdGVyU2V0dGluZ3Muc29ydGVkKVxyXG4gICAgICAgIH1cclxuICAgICAgICAgIGlmKCg8SFRNTE9wdGlvbkVsZW1lbnQ+ZXZlbnQudGFyZ2V0KSEudmFsdWUgPT09ICdCeVByaWNlRG93bicpe1xyXG4gICAgICAgICAgdGhpcy5maWx0ZXJTZXR0aW5ncy5zb3J0UHJpY2VEb3duKGRhdGEpO1xyXG4gICAgICAgICAgdGhpcy53aW5lY2FyZHMucmVuZGVyKHRoaXMuZmlsdGVyU2V0dGluZ3Muc29ydGVkKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuXHJcbiAgICAgIGRvY3VtZW50XHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yKCcucmVzZXQnKSEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJTZXR0aW5ncy5yZXNldEFsbCgpO1xyXG4gICAgICAgIHRoaXMud2luZWNhcmRzLnJlbmRlcihkYXRhKTtcclxuICAgICAgfSlcclxuICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCAnLi9jYXJ0LmNzcydcclxuaW1wb3J0IHsgIFdpbmVEZXRhaWxzIH0gZnJvbSAnLi4vLi4vdHlwZXMvaW50ZXJmYWNlcyc7XHJcbmltcG9ydCB7IExvY2FsU3RvcmFnZSwgbG9jYWxTdG9yYWdlS2V5cyB9IGZyb20gJy4uLy4uL3V0aWxzL2xvY2Fsc3RvcmFnZSc7XHJcbmltcG9ydCBXaW5lQ2FyZHMgZnJvbSAnLi4vd2luZWNhcmRzL3dpbmVjYXJkcydcclxuZXhwb3J0IGNsYXNzIENhcnRTZXR0aW5ncyB7XHJcbiAgY2FydDogV2luZURldGFpbHNbXTtcclxuICB0b3RhbEl0ZW1zOiBudW1iZXI7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmNhcnQgPSBbXTtcclxuICAgIHRoaXMudG90YWxJdGVtcyA9IHRoaXMudG90YWxJdGVtcyA9IExvY2FsU3RvcmFnZS5nZXRMb2NhbFN0b3JhZ2UobG9jYWxTdG9yYWdlS2V5cy50b3RhbEl0ZW1zSW5DYXJ0KSB8fCAwO1xyXG4gIH1cclxuXHJcbiAgY2FydEFkZChkYXRhOiBXaW5lRGV0YWlsc1tdLCBhcnRpY3VsOiBudW1iZXIpIHtcclxuICAgICAgICAgY29uc29sZS5sb2coYXJ0aWN1bClcclxuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhcnQnKSkge1xyXG4gICAgICAgICAgdGhpcy5jYXJ0ID0gTG9jYWxTdG9yYWdlLmdldExvY2FsU3RvcmFnZShsb2NhbFN0b3JhZ2VLZXlzLmNhcnQpIHx8ICcnO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdnb29kcycpKSB7XHJcbiAgICAgICAgICBkYXRhID0gTG9jYWxTdG9yYWdlLmdldExvY2FsU3RvcmFnZShsb2NhbFN0b3JhZ2VLZXlzLmdvb2RzKSB8fCBkYXRhO1xyXG4gICAgICAgIH07XHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuY2FydClcclxuICAgICAgICBjb25zb2xlLmxvZyhhcnRpY3VsKTtcclxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuY2FydC5maW5kSW5kZXgoZWxlbSA9PiBlbGVtLmlkID09PSBhcnRpY3VsKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhpbmRleCk7XHJcbiAgICAgICAgaWYoaW5kZXggPT09IC0xKSB7XHJcbiAgICAgICAgICBkYXRhW2FydGljdWxdWydjb3VudCddLS07XHJcbiAgICAgICAgICBkYXRhW2FydGljdWxdWydpbkNhcnQnXSsrO1xyXG4gICAgICAgICAgdGhpcy5jYXJ0LnB1c2goZGF0YVthcnRpY3VsXSk7XHJcbiAgICAgICAgICB0aGlzLnRvdGFsSXRlbXMrKztcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdkYXRhIGNvdW50ICcsZGF0YVthcnRpY3VsXVsnY291bnQnXSk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnZGF0YSBpbkNhcnQgJyAsZGF0YVthcnRpY3VsXVsnaW5DYXJ0J10pO1xyXG4gICAgICAgICAgY29uc29sZS5sb2codGhpcy5jYXJ0KVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgdGhpcy50b3RhbEl0ZW1zKys7XHJcbiAgICAgICAgICB0aGlzLmNhcnRbaW5kZXhdWydpbkNhcnQnXSsrO1xyXG4gICAgICAgICAgZGF0YVthcnRpY3VsXVsnY291bnQnXS0tO1xyXG4gICAgICAgICAgZGF0YVthcnRpY3VsXVsnaW5DYXJ0J10rKztcclxuICAgICAgICAgIHRoaXMuY2FydFtpbmRleF1bJ2NvdW50J10tLTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdjYXJ0IENvdW50ICcsdGhpcy5jYXJ0W2luZGV4XVsnY291bnQnXSlcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdkYXRhIGNvdW50ICcsZGF0YVthcnRpY3VsXVsnY291bnQnXSlcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdjYXJ0IGluQ2FydCAnLHRoaXMuY2FydFtpbmRleF1bJ2luQ2FydCddKVxyXG4gICAgICAgICAgY29uc29sZS5sb2coJ2RhdGEgaW5DYXJ0ICcsZGF0YVthcnRpY3VsXVsnaW5DYXJ0J10pXHJcbiAgICAgICAgfSBcclxuICAgICAgICBpZihkYXRhW2FydGljdWxdWydjb3VudCddID09PSAwKSB7XHJcbiAgICAgICAgICBjb25zdCB3aW5lY2FyZHMgPSBuZXcgV2luZUNhcmRzKCk7XHJcbiAgICAgICAgICB3aW5lY2FyZHMucmVuZGVyKGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBMb2NhbFN0b3JhZ2Uuc2V0TG9jYWxTdG9yYWdlKGxvY2FsU3RvcmFnZUtleXMuY2FydCwgdGhpcy5jYXJ0KVxyXG4gICAgICAgIExvY2FsU3RvcmFnZS5zZXRMb2NhbFN0b3JhZ2UobG9jYWxTdG9yYWdlS2V5cy5nb29kcywgZGF0YSlcclxuICAgICAgICBMb2NhbFN0b3JhZ2Uuc2V0TG9jYWxTdG9yYWdlKGxvY2FsU3RvcmFnZUtleXMudG90YWxJdGVtc0luQ2FydCwgdGhpcy50b3RhbEl0ZW1zKVxyXG4gICAgICB9XHJcbiAgICAgIGNhcnRSZW1vdmUoZGF0YTogV2luZURldGFpbHNbXSwgYXJ0aWN1bDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXJ0JykpIHtcclxuICAgICAgICAgIHRoaXMuY2FydCA9IExvY2FsU3RvcmFnZS5nZXRMb2NhbFN0b3JhZ2UobG9jYWxTdG9yYWdlS2V5cy5jYXJ0KSB8fCAnJztcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ29vZHMnKSkge1xyXG4gICAgICAgICAgZGF0YSA9IExvY2FsU3RvcmFnZS5nZXRMb2NhbFN0b3JhZ2UobG9jYWxTdG9yYWdlS2V5cy5nb29kcykgfHwgZGF0YTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGFydGljdWwpO1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5jYXJ0LmZpbmRJbmRleChlbGVtID0+IGVsZW0uaWQgPT09IGFydGljdWwpO1xyXG4gICAgICAgIGlmKGluZGV4ID49IDApIHtcclxuICAgICAgICAgIHRoaXMudG90YWxJdGVtcy0tO1xyXG4gICAgICAgICAgdGhpcy5jYXJ0W2luZGV4XVsnaW5DYXJ0J10tLTtcclxuICAgICAgICAgIGRhdGFbYXJ0aWN1bF1bJ2NvdW50J10rKztcclxuICAgICAgICAgIGRhdGFbYXJ0aWN1bF1bJ2luQ2FydCddLS07XHJcbiAgICAgICAgICB0aGlzLmNhcnRbaW5kZXhdWydjb3VudCddKys7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnY2FydCBDb3VudCAnLHRoaXMuY2FydFtpbmRleF1bJ2NvdW50J10pXHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnZGF0YSBjb3VudCAnLGRhdGFbYXJ0aWN1bF1bJ2NvdW50J10pXHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnY2FydCBpbkNhcnQgJyx0aGlzLmNhcnRbaW5kZXhdWydpbkNhcnQnXSlcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdkYXRhIGluQ2FydCAnLGRhdGFbYXJ0aWN1bF1bJ2luQ2FydCddKVxyXG4gICAgICAgIFxyXG4gICAgICAgIH0gXHJcbiAgICAgICAgTG9jYWxTdG9yYWdlLnNldExvY2FsU3RvcmFnZShsb2NhbFN0b3JhZ2VLZXlzLmNhcnQsIHRoaXMuY2FydClcclxuICAgICAgICBMb2NhbFN0b3JhZ2Uuc2V0TG9jYWxTdG9yYWdlKGxvY2FsU3RvcmFnZUtleXMuZ29vZHMsIGRhdGEpXHJcbiAgICAgICAgTG9jYWxTdG9yYWdlLnNldExvY2FsU3RvcmFnZShsb2NhbFN0b3JhZ2VLZXlzLnRvdGFsSXRlbXNJbkNhcnQsIHRoaXMudG90YWxJdGVtcylcclxuICAgICAgXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJlbmRlcigpIHtcclxuICAgICAgICB0aGlzLmNhcnQgPSBMb2NhbFN0b3JhZ2UuZ2V0TG9jYWxTdG9yYWdlKGxvY2FsU3RvcmFnZUtleXMuY2FydCkgfHwgW107XHJcbiAgICAgICAgY29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcbiAgICAgICAgY29uc3QgY2FydEl0ZW1zVGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYXJ0SXRlbXNUZW1wJykgYXMgSFRNTFRlbXBsYXRlRWxlbWVudDtcclxuICAgICAgICBjb25zdCBiYWRnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0X19wcm9kdWN0cycpO1xyXG4gICAgICAgIGNvbnN0IHBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcnQtcG9wdXAnKTtcclxuICAgICAgICBsZXQgdG90YWxTdW0gPSAwO1xyXG4gICAgICAgIHRoaXMuY2FydC5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgY29uc3QgY2FydEl0ZW0gPSBjYXJ0SXRlbXNUZW1wLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgICAgKGNhcnRJdGVtLnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0LWl0ZW1fX25hbWUnKSkhLnRleHRDb250ZW50ID0gaXRlbS5uYW1lO1xyXG4gICAgICAgICAgKGNhcnRJdGVtLnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0X19pbnB1dCcpKSEudGV4dENvbnRlbnQgPSBpdGVtLmluQ2FydC50b1N0cmluZygpO1xyXG4gICAgICAgICAgY29uc3QgaXRlbXNQcmljZSA9ICtpdGVtLnByaWNlICogaXRlbS5pbkNhcnQ7XHJcbiAgICAgICAgICB0b3RhbFN1bSArPSBpdGVtc1ByaWNlO1xyXG4gICAgICAgICAgKGNhcnRJdGVtLnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0LWl0ZW1fX3ByaWNlJykpIS50ZXh0Q29udGVudCA9IGAke2l0ZW1zUHJpY2V9YDtcclxuICAgICAgICAgIChjYXJ0SXRlbS5xdWVyeVNlbGVjdG9yKCcuY2FydF9fYWRkJykpIS5zZXRBdHRyaWJ1dGUoJ2RhdGEtYXJ0aWN1bCcsIGAke2l0ZW0uaWR9YCk7XHJcbiAgICAgICAgICAgIGlmKGl0ZW0uY291bnQgPT09IDApIHtcclxuICAgICAgICAgICAgICAoY2FydEl0ZW0ucXVlcnlTZWxlY3RvcignLmNhcnRfX2FkZCcpIGFzIEhUTUxFbGVtZW50KSEuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcclxuICAgICAgICAgICAgICAoY2FydEl0ZW0ucXVlcnlTZWxlY3RvcignLmNhcnRfX2FkZCcpIGFzIEhUTUxFbGVtZW50KSEuc3R5bGUub3BhY2l0eSA9ICcwLjUnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAoY2FydEl0ZW0ucXVlcnlTZWxlY3RvcignLmNhcnRfX3JlbW92ZScpKSEuc2V0QXR0cmlidXRlKCdkYXRhLWFydGljdWwnLCBgJHtpdGVtLmlkfWApO1xyXG5cclxuICAgICAgICAgICAgaWYoaXRlbS5pbkNhcnQgPT09IDApIHtcclxuICAgICAgICAgICAgICAoY2FydEl0ZW0ucXVlcnlTZWxlY3RvcignLmNhcnRfX3JlbW92ZScpIGFzIEhUTUxFbGVtZW50KSEuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcclxuICAgICAgICAgICAgICAoY2FydEl0ZW0ucXVlcnlTZWxlY3RvcignLmNhcnRfX3JlbW92ZScpIGFzIEhUTUxFbGVtZW50KSEuc3R5bGUub3BhY2l0eSA9ICcwLjUnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FydF9fdG90YWwnKSEudGV4dENvbnRlbnQgPSBgJHt0b3RhbFN1bX1gXHJcbiAgICAgICAgXHJcbiAgICAgICAgICBmcmFnbWVudC5hcHBlbmQoY2FydEl0ZW0pO1xyXG4gICAgICAgIH0pICBcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FydF9fcHJvZHVjdHMnKSEudGV4dENvbnRlbnQgPSBgJHt0aGlzLnRvdGFsSXRlbXN9YFxyXG4gIFxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0LXBvcHVwX19jb250YWluZXInKSEuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcnQtcG9wdXBfX2NvbnRhaW5lcicpIS5hcHBlbmRDaGlsZChmcmFnbWVudCk7XHJcbiAgICAgIH1cclxuICAgICAgY2FydE9wZW4oKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcnQtcG9wdXAnKSEuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXknKSEuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgIH1cclxuICAgICAgY2FydENsb3NlKCkge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0LXBvcHVwJykhLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5JykhLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IHtEZWZhdWx0RmlsdGVycywgIFdpbmVEZXRhaWxzIH0gZnJvbSBcIi4uLy4uL3R5cGVzL2ludGVyZmFjZXNcIjtcclxuaW1wb3J0IHsgTG9jYWxTdG9yYWdlLCBsb2NhbFN0b3JhZ2VLZXlzIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2xvY2Fsc3RvcmFnZVwiO1xyXG5pbXBvcnQgeyBDYXJ0U2V0dGluZ3MgfSBmcm9tIFwiLi4vY2FydC9jYXJ0XCI7XHJcbmltcG9ydCAnLi9maWx0ZXJzLmNzcyc7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbHRlclNldHRpbmdzIHtcclxuICBmaWx0ZXJlZDogV2luZURldGFpbHNbXTtcclxuICBmaWx0ZXJBcnI6IFdpbmVEZXRhaWxzW107XHJcbiAgZmlsdGVyc09iaiA6IERlZmF1bHRGaWx0ZXJzO1xyXG4gIHNvcnRlZDogV2luZURldGFpbHNbXTtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuZmlsdGVyZWQgPSBbXTtcclxuICAgIHRoaXMuZmlsdGVyQXJyID0gW107XHJcbiAgICB0aGlzLnNvcnRlZCA9IFtdO1xyXG4gICAgdGhpcy5maWx0ZXJzT2JqID0ge1xyXG4gICAgICBjb2xvcjogW10sXHJcbiAgICAgIGNvdW50cnk6IFtdLFxyXG4gICAgICB5ZWFyOiBbXSxcclxuICAgICAgcHJpY2U6IFtdLFxyXG4gICAgfVxyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmaWx0ZXInKSkge1xyXG4gICAgICB0aGlzLmZpbHRlcnNPYmogPSBMb2NhbFN0b3JhZ2UuZ2V0TG9jYWxTdG9yYWdlKGxvY2FsU3RvcmFnZUtleXMuZmlsdGVyKSB8fCAnJztcclxuICAgIH07XHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ZpbHRlckFycicpKSB7XHJcbiAgICAgIHRoaXMuZmlsdGVyQXJyID0gTG9jYWxTdG9yYWdlLmdldExvY2FsU3RvcmFnZShsb2NhbFN0b3JhZ2VLZXlzLmZpbHRlckFycikgfHwgJyc7XHJcbiAgICB9O1xyXG5cclxuICB9XHJcbiAgXHJcbiAgZmlsdGVyQnlDb3VudHJ5KGRhdGE6IFdpbmVEZXRhaWxzW10pIHtcclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc29ydGVkJykpIHtcclxuICAgICAgZGF0YSA9IExvY2FsU3RvcmFnZS5nZXRMb2NhbFN0b3JhZ2UobG9jYWxTdG9yYWdlS2V5cy5zb3J0ZWQpIHx8IGRhdGE7XHJcbiAgICB9O1xyXG4gIFxyXG4gICB0aGlzLmZpbHRlcmVkID0gW107XHJcbiAgY29uc3QgZmlsdGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmaWx0ZXJzJyk7XHJcbiAgdGhpcy5maWx0ZXJzT2JqLmNvdW50cnkgPSBbLi4uZmlsdGVycyEucXVlcnlTZWxlY3RvckFsbCgnI2NvdW50cnkgaW5wdXQ6Y2hlY2tlZCcpXS5tYXAoaXRlbSA9PiAoaXRlbSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSk7XHJcbiAgY29uc29sZS5sb2codGhpcy5maWx0ZXJzT2JqLmNvdW50cnkpO1xyXG4gIGRhdGEuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICBpZih0aGlzLmZpbHRlcnNPYmouY291bnRyeS5pbmNsdWRlcyhpdGVtLmNvdW50cnkpKXtcclxuICAgICAgdGhpcy5maWx0ZXJlZC5wdXNoKGl0ZW0pXHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuZmlsdGVyZWQpXHJcbiAgICAgfVxyXG4gIH0pXHJcbiAgTG9jYWxTdG9yYWdlLnNldExvY2FsU3RvcmFnZShsb2NhbFN0b3JhZ2VLZXlzLmZpbHRlciwgdGhpcy5maWx0ZXJzT2JqKVxyXG4gIExvY2FsU3RvcmFnZS5zZXRMb2NhbFN0b3JhZ2UobG9jYWxTdG9yYWdlS2V5cy5maWx0ZXJBcnIsIHRoaXMuZmlsdGVyZWQpXHJcbn1cclxuXHJcbmZpbHRlckJ5Q29sb3IoZGF0YTogV2luZURldGFpbHNbXSkge1xyXG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc29ydGVkJykpIHtcclxuICAgIGRhdGEgPSBMb2NhbFN0b3JhZ2UuZ2V0TG9jYWxTdG9yYWdlKGxvY2FsU3RvcmFnZUtleXMuc29ydGVkKSB8fCBkYXRhO1xyXG4gIH07XHJcbiBcclxuICAgdGhpcy5maWx0ZXJlZCA9IFtdO1xyXG4gIGNvbnN0IGZpbHRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmlsdGVycycpO1xyXG4gIHRoaXMuZmlsdGVyc09iai5jb2xvciA9IFsuLi5maWx0ZXJzIS5xdWVyeVNlbGVjdG9yQWxsKCcjY29sb3IgaW5wdXQ6Y2hlY2tlZCcpXS5tYXAoaXRlbSA9PiAoaXRlbSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSk7XHJcbiAgY29uc29sZS5sb2codGhpcy5maWx0ZXJzT2JqLmNvbG9yKVxyXG4gIGRhdGEuZm9yRWFjaChpdGVtID0+IHtcclxuICBpZih0aGlzLmZpbHRlcnNPYmouY29sb3IuaW5jbHVkZXMoaXRlbS5jb2xvcikpe1xyXG4gICAgdGhpcy5maWx0ZXJlZC5wdXNoKGl0ZW0pXHJcbiAgfVxyXG59KVxyXG5Mb2NhbFN0b3JhZ2Uuc2V0TG9jYWxTdG9yYWdlKGxvY2FsU3RvcmFnZUtleXMuZmlsdGVyLCB0aGlzLmZpbHRlcnNPYmopXHJcbkxvY2FsU3RvcmFnZS5zZXRMb2NhbFN0b3JhZ2UobG9jYWxTdG9yYWdlS2V5cy5maWx0ZXJBcnIsIHRoaXMuZmlsdGVyZWQpXHJcbn1cclxuXHJcbnJlc2V0RmlsdGVycygpIHtcclxudGhpcy5maWx0ZXJzT2JqLmNvbG9yID0gW107XHJcbnRoaXMuZmlsdGVyc09iai5jb3VudHJ5ID0gW107XHJcbmNvbnN0IGZpbHRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmlsdGVycycpO1xyXG5bLi4uZmlsdGVycyEucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQ6Y2hlY2tlZCcpXS5tYXAoaXRlbSA9PiAoaXRlbSBhcyBIVE1MSW5wdXRFbGVtZW50KS5jaGVja2VkID0gZmFsc2UpO1xyXG5Mb2NhbFN0b3JhZ2Uuc2V0TG9jYWxTdG9yYWdlKGxvY2FsU3RvcmFnZUtleXMuZmlsdGVyQXJyLCB0aGlzLmZpbHRlckFycik7XHJcbkxvY2FsU3RvcmFnZS5zZXRMb2NhbFN0b3JhZ2UobG9jYWxTdG9yYWdlS2V5cy5maWx0ZXIsIHRoaXMuZmlsdGVyc09iaik7XHJcblxyXG59XHJcblxyXG5yZXNldEFsbCgpIHtcclxuICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxufVxyXG5cclxuc29ydFByaWNlVXAoZGF0YTogV2luZURldGFpbHNbXSl7XHJcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzb3J0ZWQnKSkge1xyXG4gICAgZGF0YSA9IExvY2FsU3RvcmFnZS5nZXRMb2NhbFN0b3JhZ2UobG9jYWxTdG9yYWdlS2V5cy5zb3J0ZWQpIHx8IGRhdGE7XHJcbiAgfTtcclxuICB0aGlzLnNvcnRlZCA9IGRhdGEuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgcmV0dXJuICthLnByaWNlIC0gK2IucHJpY2U7XHJcbiAgfSlcclxuICBjb25zb2xlLmxvZyh0aGlzLnNvcnRlZCk7XHJcbiAgTG9jYWxTdG9yYWdlLnNldExvY2FsU3RvcmFnZShsb2NhbFN0b3JhZ2VLZXlzLnNvcnRlZCwgdGhpcy5zb3J0ZWQpXHJcbn1cclxuc29ydFByaWNlRG93bihkYXRhOiBXaW5lRGV0YWlsc1tdKXtcclxuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NvcnRlZCcpKSB7XHJcbiAgICBkYXRhID0gTG9jYWxTdG9yYWdlLmdldExvY2FsU3RvcmFnZShsb2NhbFN0b3JhZ2VLZXlzLnNvcnRlZCkgfHwgZGF0YTtcclxuICB9O1xyXG4gIHRoaXMuc29ydGVkID0gZGF0YS5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICByZXR1cm4gK2IucHJpY2UgLSArYS5wcmljZTtcclxuICB9KVxyXG4gIGNvbnNvbGUubG9nKHRoaXMuc29ydGVkKTtcclxuICBMb2NhbFN0b3JhZ2Uuc2V0TG9jYWxTdG9yYWdlKGxvY2FsU3RvcmFnZUtleXMuc29ydGVkLCB0aGlzLnNvcnRlZClcclxufVxyXG5cclxufVxyXG4iLCJpbXBvcnQgJy4vd2luZWNhcmRzLmNzcyc7XHJcbmltcG9ydCB7IFdpbmUsIFdpbmVEZXRhaWxzIH0gZnJvbSAnLi4vLi4vdHlwZXMvaW50ZXJmYWNlcydcclxuaW1wb3J0IHsgTG9jYWxTdG9yYWdlLCBsb2NhbFN0b3JhZ2VLZXlzIH0gZnJvbSAnLi4vLi4vdXRpbHMvbG9jYWxzdG9yYWdlJztcclxuXHJcbmNsYXNzIFdpbmVDYXJkcyB7XHJcbiAgcmVuZGVyKGRhdGE6IFdpbmVEZXRhaWxzW10pIHtcclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ29vZHMnKSkge1xyXG4gICAgICBkYXRhID0gTG9jYWxTdG9yYWdlLmdldExvY2FsU3RvcmFnZShsb2NhbFN0b3JhZ2VLZXlzLmdvb2RzKSB8fCBkYXRhO1xyXG4gICAgfTtcclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc29ydGVkJykpIHtcclxuICAgICAgZGF0YSA9IExvY2FsU3RvcmFnZS5nZXRMb2NhbFN0b3JhZ2UobG9jYWxTdG9yYWdlS2V5cy5zb3J0ZWQpIHx8IGRhdGE7XHJcbiAgICB9O1xyXG4gICAgY29uc3Qgd2luZXMgPSBkYXRhO1xyXG4gICAgY29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcbiAgICBjb25zdCB3aW5lQ2FyZFRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2luZWNhcmRzSXRlbVRlbXAnKSBhcyBIVE1MVGVtcGxhdGVFbGVtZW50O1xyXG4gICAgd2luZXMuZm9yRWFjaCgoaXRlbSA6IFdpbmVEZXRhaWxzLCBpZHggOiBudW1iZXIpID0+IHtcclxuICAgICAgY29uc3Qgd2luZUNhcmQgPSB3aW5lQ2FyZFRlbXAuY29udGVudC5jbG9uZU5vZGUodHJ1ZSkgYXMgSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgICAod2luZUNhcmQucXVlcnlTZWxlY3RvcignLndpbmVjYXJkc19fZmFjZS1waG90bycpIGFzIEhUTUxFbGVtZW50KSEuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2l0ZW0uaW1hZ2V9KWA7XHJcbiAgICAgICh3aW5lQ2FyZC5xdWVyeVNlbGVjdG9yKCcud2luZWNhcmRzX19mYWNlLW5hbWUnKSkhLnRleHRDb250ZW50ID0gaXRlbS5uYW1lO1xyXG4gICAgICAod2luZUNhcmQucXVlcnlTZWxlY3RvcignLndpbmVjYXJkc19fZmFjZS1jb3VudCcpKSEudGV4dENvbnRlbnQgPSBg0JIg0L3QsNC70LjRh9C40LggOiAke2l0ZW0uY291bnR9YDtcclxuICAgICAgKHdpbmVDYXJkLnF1ZXJ5U2VsZWN0b3IoJy53aW5lY2FyZHNfX2ZhY2UtcHJpY2UnKSkhLnRleHRDb250ZW50ID0gYCR7aXRlbS5wcmljZX0gQllOYDtcclxuICAgICAgKHdpbmVDYXJkLnF1ZXJ5U2VsZWN0b3IoJy53aW5lY2FyZHNfX2JhY2stbmFtZScpKSEudGV4dENvbnRlbnQgPSBpdGVtLm5hbWU7XHJcbiAgICAgICh3aW5lQ2FyZC5xdWVyeVNlbGVjdG9yKCcud2luZWNhcmRzX19iYWNrLW1hZGVCeScpKSEudGV4dENvbnRlbnQgPSBg0J/RgNC+0LjQt9Cy0L7QtNC40YLQtdC70YwgOiAke2l0ZW0ubWFkZUJ5fWA7XHJcbiAgICAgICh3aW5lQ2FyZC5xdWVyeVNlbGVjdG9yKCcud2luZWNhcmRzX19iYWNrLWNvdW50cnknKSkhLnRleHRDb250ZW50ID0gYNCh0YLRgNCw0L3QsCA6ICR7aXRlbS5jb3VudHJ5fWA7XHJcbiAgICAgICh3aW5lQ2FyZC5xdWVyeVNlbGVjdG9yKCcud2luZWNhcmRzX19iYWNrLXllYXInKSkhLnRleHRDb250ZW50ID0gYNCT0L7QtCA6ICR7aXRlbS55ZWFyfWA7XHJcbiAgICAgICh3aW5lQ2FyZC5xdWVyeVNlbGVjdG9yKCcud2luZWNhcmRzX19iYWNrLWNvbG9yJykpIS50ZXh0Q29udGVudCA9IGDQptCy0LXRgiA6ICR7aXRlbS5jb2xvcn1gO1xyXG4gICAgICAod2luZUNhcmQucXVlcnlTZWxlY3RvcignLndpbmVjYXJkc19fYmFjay1hbGNvaG9sJykpIS50ZXh0Q29udGVudCA9IGDQmtGA0LXQv9C+0YHRgtGMIDogJHtpdGVtLmFsY29ob2x9JWA7XHJcbiAgICAgICh3aW5lQ2FyZC5xdWVyeVNlbGVjdG9yKCcud2luZWNhcmRzX19iYWNrLXZvbCcpKSEudGV4dENvbnRlbnQgPSBg0J7QsdGK0LXQvCA6ICR7aXRlbS52b2x90LtgO1xyXG5cclxuXHJcbiAgICAgIGlmICghaXRlbS5pblN0b2NrIHx8IGl0ZW0uY291bnQgPT09IDApIHtcclxuICAgICAgICAod2luZUNhcmQucXVlcnlTZWxlY3RvcignLndpbmVjYXJkc19faXRlbScpIGFzIEhUTUxFbGVtZW50KSEuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcclxuICAgICAgICAod2luZUNhcmQucXVlcnlTZWxlY3RvcignLndpbmVjYXJkc19faXRlbScpIGFzIEhUTUxFbGVtZW50KSEuc3R5bGUub3BhY2l0eSA9ICcwLjUnO1xyXG4gICAgICAgICh3aW5lQ2FyZC5xdWVyeVNlbGVjdG9yKCcud2luZWNhcmRzX19mYWNlLWNvdW50JykpIS50ZXh0Q29udGVudCA9ICfQndC10YIg0LIg0L3QsNC70LjRh9C40LgnO1xyXG4gICAgICAgICh3aW5lQ2FyZC5xdWVyeVNlbGVjdG9yKCcud2luZWNhcmRzX19mYWNlLXByaWNlJykpIS50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZihpdGVtLmluQ2FydCA+IDApIHtcclxuICAgICAgICAod2luZUNhcmQucXVlcnlTZWxlY3RvcignLndpbmVjYXJkc19faXRlbScpIGFzIEhUTUxFbGVtZW50KSEuY2xhc3NMaXN0LmFkZCgnaW5DYXJ0Jyk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZXtcclxuICAgICAgICAod2luZUNhcmQucXVlcnlTZWxlY3RvcignLndpbmVjYXJkc19faXRlbScpIGFzIEhUTUxFbGVtZW50KSEuY2xhc3NMaXN0LnJlbW92ZSgnaW5DYXJ0Jyk7XHJcblxyXG4gICAgICB9XHJcbiAgICAgICh3aW5lQ2FyZC5xdWVyeVNlbGVjdG9yKCcuY2FydF9fYWRkJykpIS5zZXRBdHRyaWJ1dGUoJ2RhdGEtYXJ0aWN1bCcsIGAke2lkeH1gKVxyXG4gICAgICBmcmFnbWVudC5hcHBlbmQod2luZUNhcmQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5lY2FyZHMtY29udGFpbmVyJykpIS5pbm5lckhUTUwgPSAnJztcclxuICAgIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2luZWNhcmRzLWNvbnRhaW5lcicpKSEuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2luZUNhcmRzOyIsImV4cG9ydCAgY29uc3QgZ29vZHMgPSBbXG4gIHtcbiAgICBpZDogMCxcbiAgICBuYW1lOiBcIk5hdGlvbmFsIFZpbnRhZ2UgUG9ydFwiLFxuICAgIG1hZGVCeTogXCJRdWludGEgZG8gTm92YWxcIixcbiAgICBjb3VudHJ5OiBcItCf0L7RgNGC0YPQs9Cw0LvQuNGPXCIsXG4gICAgeWVhcjogXCIyMDExXCIsXG4gICAgYWxjb2hvbDogXCIxOVwiLFxuICAgIHZvbDogXCIwLjc1XCIsXG4gICAgcHJpY2U6IFwiMTM4MzJcIixcbiAgICBjb2xvcjogXCJyZWRcIixcbiAgICBpbWFnZTogJy4vYXNzZXRzL2ltZy9wb3J0dmV5bi1xdWludGEtZG8tbm92YWwtbmFjaW9uYWwtdmludGFnZS1wb3J0LTIwMTEucG5nJyxcbiAgICBjb3VudDogNSxcbiAgICBpblN0b2NrOiB0cnVlLFxuICAgIGluQ2FydDogMCxcbiAgfSxcbiAge1xuICAgIGlkOiAxLFxuICAgIG5hbWU6IFwiQmxhdWZyYW5raXNjaCBDbGFzc2ljXCIsXG4gICAgbWFkZUJ5OiBcIkhhbnMgSWdsZXJcIixcbiAgICBjb3VudHJ5OiBcItCQ0LLRgdGC0YDQuNGPXCIsXG4gICAgeWVhcjogXCIyMDE5XCIsXG4gICAgYWxjb2hvbDogXCIxM1wiLFxuICAgIHZvbDogXCIwLjc1XCIsXG4gICAgcHJpY2U6ICcxNzQnLFxuICAgIGNvbG9yOiAncmVkJyxcbiAgICBpbWFnZTogJy4vYXNzZXRzL2ltZy9ibGF1ZnJhbmtpc2NoLWNsYXNzaWMucG5nJyxcbiAgICBjb3VudDogNSxcbiAgICBpblN0b2NrOiB0cnVlLFxuICAgIGluQ2FydDogMCxcbiAgfSxcbiAge1xuICAgIGlkOiAyLFxuICAgIG5hbWU6IFwiUmhlaW5nYXUgUmllc2xpbmcgVHJvY2tlblwiLFxuICAgIG1hZGVCeTogXCJSb2JlcnQgV2VpbFwiLFxuICAgIGNvdW50cnk6IFwi0JPQtdGA0LzQsNC90LjRj1wiLFxuICAgIHllYXI6IFwiMjAxOVwiLFxuICAgIGFsY29ob2w6IFwiMTJcIixcbiAgICB2b2w6IFwiMC43NVwiLFxuICAgIHByaWNlOiAnMjA0JyxcbiAgICBjb2xvcjogJ3doaXRlJyxcbiAgICBpbWFnZTogJy4vYXNzZXRzL2ltZy9yaGVpbmdhdS1yaWVzbGluZy10cm9ja2VuLnBuZycsXG4gICAgY291bnQ6IDUsXG4gICAgaW5TdG9jazogdHJ1ZSxcbiAgICBpbkNhcnQ6IDAsXG4gIH0sXG4gIHtcbiAgICBpZDogMyxcbiAgICBuYW1lOiBcIk1hbGxlb3VzIGRlIFNhbmNob21hcnRpblwiLFxuICAgIG1hZGVCeTogXCJFbWlsaW8gTW9yb1wiLFxuICAgIGNvdW50cnk6IFwi0JjRgdC/0LDQvdC40Y9cIixcbiAgICB5ZWFyOiBcIjIwMThcIixcbiAgICBhbGNvaG9sOiBcIjE0XCIsXG4gICAgdm9sOiBcIjAuNzVcIixcbiAgICBwcmljZTogJzEzMDcnLFxuICAgIGNvbG9yOiAncmVkJyxcbiAgICBpbWFnZTogJy4vYXNzZXRzL2ltZy9tYWxsZW91cy1kZS1zYW5jaG9tYXJ0aW4ucG5nJyxcbiAgICBjb3VudDogNSxcbiAgICBpblN0b2NrOiB0cnVlLFxuICAgIGluQ2FydDogMCxcbiAgfSxcbiAge1xuICAgIGlkOiA0LFxuICAgIG5hbWU6IFwiR2F2aSBkZWkgR2F2aSAoRXRpY2hldHRhIE5lcmEpXCIsXG4gICAgbWFkZUJ5OiBcImxhIFNjb2xjYVwiLFxuICAgIGNvdW50cnk6IFwi0JjRgtCw0LvQuNGPXCIsXG4gICAgeWVhcjogXCIyMDIwXCIsXG4gICAgYWxjb2hvbDogXCIxMlwiLFxuICAgIHZvbDogXCIwLjc1XCIsXG4gICAgcHJpY2U6ICczMjYnLFxuICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgIGltYWdlOiAnLi9hc3NldHMvaW1nL2dhdmktZGVpLWdhdmkucG5nJyxcbiAgICBjb3VudDogNSxcbiAgICBpblN0b2NrOiB0cnVlLFxuICAgIGluQ2FydDogMCxcbiAgfSxcbiAge1xuICAgIGlkOiA1LFxuICAgIG5hbWU6IFwiQ2hhcmx5IER1ZGVzXCIsXG4gICAgbWFkZUJ5OiBcIlR3byBIYW5kc1wiLFxuICAgIGNvdW50cnk6IFwi0JDQstGB0YLRgNCw0LvQuNGPXCIsXG4gICAgeWVhcjogXCIyMDIwXCIsXG4gICAgYWxjb2hvbDogXCIxNFwiLFxuICAgIHZvbDogXCIxLjVcIixcbiAgICBwcmljZTogJzQzNScsXG4gICAgY29sb3I6ICdyZWQnLFxuICAgIGltYWdlOiBcIi4vYXNzZXRzL2ltZy9jaGFybGV5LWR1ZGVzLnBuZ1wiLFxuICAgIGNvdW50OiA1LFxuICAgIGluU3RvY2s6IHRydWUsXG4gICAgaW5DYXJ0OiAwLFxuICB9LFxuICB7XG4gICAgaWQ6IDYsXG4gICAgbmFtZTogXCJSaWNoZWJvdXJnIEdyYW5nIEdydVwiLFxuICAgIG1hZGVCeTogXCJEb21haW5lIEplYW4gR3Jpdm90XCIsXG4gICAgY291bnRyeTogXCLQpNGA0LDQvdGG0LjRj1wiLFxuICAgIHllYXI6IFwiMjAxNVwiLFxuICAgIGFsY29ob2w6IFwiMTNcIixcbiAgICB2b2w6IFwiMC43NVwiLFxuICAgIHByaWNlOiAnMTY3NzgnLFxuICAgIGNvbG9yOiAncmVkJyxcbiAgICBpbWFnZTogJy4vYXNzZXRzL2ltZy9yaWNoZWJvdXJnLWdyYW5kLWdydS5wbmcnLFxuICAgIGNvdW50OiA1LFxuICAgIGluU3RvY2s6IHRydWUsXG4gICAgaW5DYXJ0OiAwLFxuICB9LFxuICB7XG4gICAgaWQ6IDcsXG4gICAgbmFtZTogXCJDaGFibGlzIFZpZWlsbGVzIFZpZ2hlcyAxOTQ2XCIsXG4gICAgbWFkZUJ5OiBcIkplYW4tTWFyYyBCcm9jYXJkIChEb21haW5lIFNhaW50ZS1DbGFpcmUpXCIsXG4gICAgY291bnRyeTogXCLQpNGA0LDQvdGG0LjRj1wiLFxuICAgIHllYXI6IFwiMjAxOFwiLFxuICAgIGFsY29ob2w6IFwiMTNcIixcbiAgICB2b2w6IFwiMC43NVwiLFxuICAgIHByaWNlOiAnMzEzJyxcbiAgICBjb2xvcjogJ3doaXRlJyxcbiAgICBpbWFnZTogJy4vYXNzZXRzL2ltZy9jaGFibGlzLXZpZWlsbGVzLXZpZ2hlcy0xOTQ2LnBuZycsXG4gICAgY291bnQ6IDUsXG4gICAgaW5TdG9jazogdHJ1ZSxcbiAgICBpbkNhcnQ6IDAsXG4gIH0sXG4gIHtcbiAgICBpZDogOCxcbiAgICBuYW1lOiBcIjUweDUwXCIsXG4gICAgbWFkZUJ5OiBcIkNhcGFubmVsbGVcIixcbiAgICBjb3VudHJ5OiBcItCY0YLQsNC70LjRj1wiLFxuICAgIHllYXI6IFwiMjAxNVwiLFxuICAgIGFsY29ob2w6IFwiMTNcIixcbiAgICB2b2w6IFwiMC43NVwiLFxuICAgIHByaWNlOiAnMjUwNScsXG4gICAgY29sb3I6ICdyZWQnLFxuICAgIGltYWdlOiAnLi9hc3NldHMvaW1nLzUweDUwLnBuZycsXG4gICAgY291bnQ6IDUsXG4gICAgaW5TdG9jazogdHJ1ZSxcbiAgICBpbkNhcnQ6IDAsXG4gIH0sXG4gIHtcbiAgICBpZDogOSxcbiAgICBuYW1lOiBcIlBlbmZvbGRzIEdyYW5nZVwiLFxuICAgIG1hZGVCeTogXCJQZW5mb2xkc1wiLFxuICAgIGNvdW50cnk6IFwi0JDQstGB0YLRgNCw0LvQuNGPXCIsXG4gICAgeWVhcjogXCIyMDE2XCIsXG4gICAgYWxjb2hvbDogXCIxNFwiLFxuICAgIHZvbDogXCIwLjc1XCIsXG4gICAgcHJpY2U6ICc4NzEnLFxuICAgIGNvbG9yOiAncmVkJyxcbiAgICBpbWFnZTogJy4vYXNzZXRzL2ltZy9wZW5mb2xkcy1ncmFuZ2UucG5nJyxcbiAgICBjb3VudDogNSxcbiAgICBpblN0b2NrOiB0cnVlLFxuICAgIGluQ2FydDogMCxcbiAgfSxcbiAge1xuICAgIGlkOiAxMCxcbiAgICBuYW1lOiBcIlBlbmZvbGRzIEJpbiAzODkgQ2FiZXJuZXQgU2hpcmF6XCIsXG4gICAgbWFkZUJ5OiBcIlBlbmZvbGRzXCIsXG4gICAgY291bnRyeTogXCLQkNCy0YHRgtGA0LDQu9C40Y9cIixcbiAgICB5ZWFyOiBcIjIwMTlcIixcbiAgICBhbGNvaG9sOiBcIjE0XCIsXG4gICAgdm9sOiBcIjAuNzVcIixcbiAgICBwcmljZTogJzg3MScsXG4gICAgY29sb3I6ICdyZWQnLFxuICAgIGltYWdlOiAnLi9hc3NldHMvaW1nL3BlbmZvbGRzLWJpbi0zODktY2FiZXJuZXQtc2hpcmF6LnBuZycsXG4gICAgY291bnQ6IDUsXG4gICAgaW5TdG9jazogdHJ1ZSxcbiAgICBpbkNhcnQ6IDAsXG4gIH0sXG4gIHtcbiAgICBpZDogMTEsXG4gICAgbmFtZTogXCJLdXJuaVwiLFxuICAgIG1hZGVCeTogXCJPYXNpIGRlZ2xpIEFuZ2VsaVwiLFxuICAgIGNvdW50cnk6IFwi0JjRgtCw0LvQuNGPXCIsXG4gICAgeWVhcjogXCIyMDE4XCIsXG4gICAgYWxjb2hvbDogXCIxNFwiLFxuICAgIHZvbDogXCIxLjVcIixcbiAgICBwcmljZTogJzE3NDInLFxuICAgIGNvbG9yOiAncmVkJyxcbiAgICBpbWFnZTogJy4vYXNzZXRzL2ltZy9rdXJuaS5wbmcnLFxuICAgIGNvdW50OiA1LFxuICAgIGluU3RvY2s6IGZhbHNlLFxuICAgIGluQ2FydDogMCxcbiAgfSxcbl0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJ0UG9wdXAge1xuICBzdGF0aWMgY2FydFBvcHVwID0gYFxuICA8c3BhbiBjbGFzcz1cImNsb3NlLXBvcHVwXCI+WDwvc3Bhbj5cbiAgPGRpdiBjbGFzcz1cImNhcnQtcG9wdXBfX2NvbnRhaW5lclwiPjwvZGl2PlxuICA8cCBjbGFzcz1cImNhcnRfX3RvdGFsXCI+PC9wPlxuICBgO1xufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcnQge1xuICBzdGF0aWMgY2FydCA9IGBcbiAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImNhcnRfX25vdGlmaWNhdGlvblwiPlxuICAgIDxzcGFuIGNsYXNzPVwiY2FydF9fcHJvZHVjdHNcIj4wPC9zcGFuPlxuICA8L2E+XG4gIGA7XG59IiwiY2xhc3MgRmlsdGVycyB7XHJcbiAgc3RhdGljIGZpbHRlcnMgPSBgXHJcbiAgPGZvcm0gYWN0aW9uPVwiI1wiIGNsYXNzPVwiZmlsdGVycy1mb3JtXCI+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImZpbHRlcnMtY29udGFpbmVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb3VudHJ5LWZpbHRlclwiPlxyXG4gICAgICAgIDxoNCBjbGFzcz1cImZpbHRlci1uYW1lXCI+0KHRgtGA0LDQvdCwPC9oND5cclxuICAgICAgICA8ZGl2IGlkPVwiY291bnRyeVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNoZWNrYm94XCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cImNoZWNrMVwiIG5hbWU9XCJjb3VudHJ5XCIgdmFsdWU9XCLQkNCy0YHRgtGA0LDQu9C40Y9cIj5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY2hlY2tib3gtY291bnRyeVwiZm9yPVwiY2hlY2sxXCI+0JDQstGB0YLRgNCw0LvQuNGPPC9sYWJlbD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNoZWNrYm94XCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cImNoZWNrMlwiIG5hbWU9XCJjb3VudHJ5XCIgdmFsdWU9XCLQkNCy0YHRgtGA0LjRj1wiPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjaGVja2JveC1jb3VudHJ5XCJmb3I9XCJjaGVjazJcIj7QkNCy0YHRgtGA0LjRjzwvbGFiZWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGVja2JveFwiPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJjaGVjazNcIiBuYW1lPVwiY291bnRyeVwiIHZhbHVlPVwi0JPQtdGA0LzQsNC90LjRj1wiPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjaGVja2JveC1jb3VudHJ5XCJmb3I9XCJjaGVjazNcIj7Qk9C10YDQvNCw0L3QuNGPPC9sYWJlbD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNoZWNrYm94XCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cImNoZWNrNFwiIG5hbWU9XCJjb3VudHJ5XCIgdmFsdWU9XCLQmNGB0L/QsNC90LjRj1wiPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjaGVja2JveC1jb3VudHJ5XCJmb3I9XCJjaGVjazRcIj7QmNGB0L/QsNC90LjRjzwvbGFiZWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGVja2JveFwiPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJjaGVjazVcIiBuYW1lPVwiY291bnRyeVwiIHZhbHVlPVwi0JjRgtCw0LvQuNGPXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNoZWNrYm94LWNvdW50cnlcImZvcj1cImNoZWNrNVwiPtCY0YLQsNC70LjRjzwvbGFiZWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGVja2JveFwiPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJjaGVjazZcIiBuYW1lPVwiY291bnRyeVwiIHZhbHVlPVwi0J/QvtGA0YLRg9Cz0LDQu9C40Y9cIj5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY2hlY2tib3gtY291bnRyeVwiZm9yPVwiY2hlY2s2XCI+0J/QvtGA0YLRg9Cz0LDQu9C40Y88L2xhYmVsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hlY2tib3hcIj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwiY2hlY2s3XCIgbmFtZT1cImNvdW50cnlcIiB2YWx1ZT1cItCk0YDQsNC90YbQuNGPXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNoZWNrYm94LWNvdW50cnlcImZvcj1cImNoZWNrN1wiPtCk0YDQsNC90YbQuNGPPC9sYWJlbD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbG9yLWZpbHRlclwiPlxyXG4gICAgICAgIDxoNCBjbGFzcz1cImZpbHRlci1uYW1lXCI+0KbQstC10YI8L2g0PlxyXG4gICAgICAgIDxkaXYgaWQ9XCJjb2xvclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNoZWNrYm94XCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cImNoZWNrOFwiIG5hbWU9XCJjb2xvclwiIHZhbHVlPVwid2hpdGVcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY2hlY2tib3gtY29sb3JcImZvcj1cImNoZWNrOFwiPtCR0LXQu9C+0LU8L2xhYmVsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hlY2tib3hcIj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwiY2hlY2s5XCIgbmFtZT1cImNvbG9yXCIgdmFsdWU9XCJyZWRcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY2hlY2tib3gtY29sb3JcImZvcj1cImNoZWNrOVwiPtCa0YDQsNGB0L3QvtC1PC9sYWJlbD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cInNvcnQtY29udGFpbmVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJzb3J0XCI+XHJcbiAgICAgICAgPGg0IGNsYXNzPVwiZmlsdGVyLW5hbWVcIj7QodC+0YDRgtC40YDQvtCy0LrQsDwvaDQ+XHJcbiAgICAgICAgPHNlbGVjdCBjbGFzcz1cInNlbGVjdFwiPlxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj48L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQnlQcmljZVVwXCI+0J/QviDRhtC10L3QtTog0L/QviDQstC+0LfRgNCw0YHRgtCw0L3QuNGOPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkJ5UHJpY2VEb3duXCI+0J/QviDRhtC10L3QtTog0L/QviDRg9Cx0YvQstCw0L3QuNGOPC9vcHRpb24+XHJcbiAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICAgIFxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cInJlc2V0LWZpbHRlcnMgY2xhc3M9XCJidG5cIj7QodCx0YDQvtGB0YLRjCDRhNC40LvRjNGC0YDRizwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cInJlc2V0LWZpbHRlcnMgcmVzZXQgY2xhc3M9XCJidG5cIj7QntGH0LjRgdGC0LjRgtGMINC40YHRgtC+0YDQuNGOPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Zvcm0+XHJcbmA7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpbHRlcnM7IiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi8uLi91dGlscy9jb21wb25lbnQnO1xuaW1wb3J0IFNlYXJjaElucHV0IGZyb20gJy4uL3NlYXJjaC9zZWFyY2gnO1xuaW1wb3J0IENhcnQgZnJvbSAnLi4vY2FydC9jYXJ0J1xuaW1wb3J0IENhcnRQb3B1cCBmcm9tICcuLi9jYXJ0LXBvcHVwL2NhcnQtcG9wdXAnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBwcml2YXRlIGNsYXNzTmFtZTogc3RyaW5nO1xuICBwcml2YXRlIHNlYXJjaDogQ29tcG9uZW50O1xuICBwcml2YXRlIGNhcnQ6IENvbXBvbmVudDtcbiAgcHJpdmF0ZSBjYXJ0UG9wdXA6IENvbXBvbmVudDtcbiAgY29uc3RydWN0b3IodGFnTmFtZTogc3RyaW5nLCBjbGFzc05hbWU6IHN0cmluZykge1xuICAgIHN1cGVyKHRhZ05hbWUsIGNsYXNzTmFtZSk7XG4gICAgdGhpcy5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gICAgdGhpcy5zZWFyY2ggPSBuZXcgQ29tcG9uZW50KCdkaXYnLCdoZWFkZXJfX3NlYXJjaCBzZWFyY2gtY29udGFpbmVyJywnc2VhcmNoLWlucHV0Jyk7XG4gICAgdGhpcy5jYXJ0ID0gbmV3IENvbXBvbmVudCgnZGl2JywgJ2hlYWRlcl9fY2FydCBjYXJ0JywgJ2NhcnQnKTtcbiAgICB0aGlzLmNhcnRQb3B1cCA9IG5ldyBDb21wb25lbnQoJ2RpdicsICdjYXJ0LXBvcHVwJywgJ2NhcnQtcG9wdXAnKTtcbiAgfVxuICAgIHJlbmRlclNlYXJjaCgpIHtcbiAgICAgIGNvbnN0IHNlYXJjaERpdjogSFRNTEVsZW1lbnQgPSB0aGlzLnNlYXJjaC5yZW5kZXIoKTtcbiAgICAgIHNlYXJjaERpdi5pbm5lckhUTUwgPSBTZWFyY2hJbnB1dC5zZWFyY2hGb3JtO1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kKHNlYXJjaERpdik7XG4gICAgfVxuXG4gICAgcmVuZGVyQ2FydCgpIHtcbiAgICAgIGNvbnN0IGNhcnREaXY6IEhUTUxFbGVtZW50ID0gdGhpcy5jYXJ0LnJlbmRlcigpO1xuICAgICAgY2FydERpdi5pbm5lckhUTUwgPSBDYXJ0LmNhcnQ7XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmQoY2FydERpdik7XG4gICAgfVxuXG4gICAgcmVuZGVyQ2FydFBvcHVwKCkge1xuICAgICAgY29uc3QgY2FydFBvcHVwRGl2OiBIVE1MRWxlbWVudCA9IHRoaXMuY2FydFBvcHVwLnJlbmRlcigpO1xuICAgICAgY2FydFBvcHVwRGl2LmlubmVySFRNTCA9IENhcnRQb3B1cC5jYXJ0UG9wdXA7XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmQoY2FydFBvcHVwRGl2KTtcbiAgICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHRoaXMucmVuZGVyU2VhcmNoKCk7XG4gICAgIHRoaXMucmVuZGVyQ2FydCgpO1xuICAgICB0aGlzLnJlbmRlckNhcnRQb3B1cCgpO1xuICAgIHJldHVybiB0aGlzLmNvbnRhaW5lcjtcbiAgfVxufSIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vLi4vdXRpbHMvY29tcG9uZW50JztcbmltcG9ydCBXaW5lY2FyZHMgZnJvbSAnLi4vd2luZWNhcmRzL3dpbmVjYXJkcyc7XG5pbXBvcnQgRmlsdGVycyBmcm9tICcuLi9maWx0ZXJzL2ZpbHRlcnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcHJpdmF0ZSBjbGFzc05hbWU6IHN0cmluZztcbiAgcHJpdmF0ZSB3aW5lY2FyZHM6IENvbXBvbmVudDtcbiAgcHJpdmF0ZSBmaWx0ZXJzOiBDb21wb25lbnQ7XG4gIGNvbnN0cnVjdG9yKHRhZ05hbWU6IHN0cmluZywgY2xhc3NOYW1lOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0YWdOYW1lLCBjbGFzc05hbWUpO1xuICAgIHRoaXMuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICAgIHRoaXMud2luZWNhcmRzID0gbmV3IENvbXBvbmVudCgnc2VjdGlvbicsJ3dpbmVjYXJkcycsJ3dpbmVjYXJkcycpO1xuICAgIHRoaXMuZmlsdGVycyA9IG5ldyBDb21wb25lbnQoJ3NlY3Rpb24nLCdmaWx0ZXJzJywnZmlsdGVycycpO1xuICB9XG4gIHJlbmRlckZpbHRlcnMoKSB7XG4gICAgY29uc3QgZmlsdGVyc1NlY3Rpb246IEhUTUxFbGVtZW50ID0gdGhpcy5maWx0ZXJzLnJlbmRlcigpO1xuICAgIGZpbHRlcnNTZWN0aW9uLmlubmVySFRNTCA9IEZpbHRlcnMuZmlsdGVycztcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmQoZmlsdGVyc1NlY3Rpb24pO1xuICB9XG5cbiAgICByZW5kZXJXaW5lY2FyZHMoKSB7XG4gICAgICBjb25zdCB3aW5lY2FyZHNTZWN0aW9uOiBIVE1MRWxlbWVudCA9IHRoaXMud2luZWNhcmRzLnJlbmRlcigpO1xuICAgICAgd2luZWNhcmRzU2VjdGlvbi5pbm5lckhUTUwgPSBXaW5lY2FyZHMud2luZWNhcmRzO1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kKHdpbmVjYXJkc1NlY3Rpb24pO1xuICAgIH1cblxuICByZW5kZXIoKSB7XG4gICAgdGhpcy5yZW5kZXJGaWx0ZXJzKCk7XG4gICAgIHRoaXMucmVuZGVyV2luZWNhcmRzKCk7XG4gICAgcmV0dXJuIHRoaXMuY29udGFpbmVyO1xuICB9XG59IiwiY2xhc3MgU2VhcmNoSW5wdXQge1xuICBzdGF0aWMgc2VhcmNoRm9ybSA9IGBcbiAgICAgIDxpbnB1dFxuICAgICAgICBjbGFzcz1cInNlYXJjaC1jb250YWluZXJfX2lucHV0XCJcbiAgICAgICAgdHlwZT1cInNlYXJjaFwiXG4gICAgICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwi0J/QvtC40YHQui4uLlwiXG4gICAgICAgIG5hbWU9XCJzZWFyY2hcIlxuICAgICAgICBhdXRvZm9jdXNcbiAgICAgIC8+XG5gO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hJbnB1dDsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBXaW5lY2FyZHMge1xuICBzdGF0aWMgd2luZWNhcmRzID0gYFxuICA8ZGl2IGNsYXNzPVwid2luZWNhcmRzLWNvbnRhaW5lclwiPlxuXG4gIDwvZGl2PlxuICBgO1xufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudCB7XG4gIHByb3RlY3RlZCBjb250YWluZXI6IEhUTUxFbGVtZW50O1xuXG4gIGNvbnN0cnVjdG9yKHRhZ05hbWU6IHN0cmluZywgY2xhc3NOYW1lOiBzdHJpbmcgPSAnJywgaWQ/OiBzdHJpbmcpIHtcbiAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG4gICAgdGhpcy5jb250YWluZXIuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICAgIGlkID8gKHRoaXMuY29udGFpbmVyLmlkID0gaWQpIDogbnVsbDtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5jb250YWluZXI7XG4gIH1cbn1cbiIsImltcG9ydCB7IFdpbmVEZXRhaWxzIH0gZnJvbSBcIi4uL3R5cGVzL2ludGVyZmFjZXNcIjtcclxuXHJcbmNvbnN0IGVudW0gbG9jYWxTdG9yYWdlS2V5cyB7XHJcbiAgZmlsdGVyID0gJ2ZpbHRlcicsXHJcbiAgY2FydCA9ICdjYXJ0JyxcclxuICBnb29kcyAgPSAnZ29vZHMnLFxyXG4gIHRvdGFsSXRlbXNJbkNhcnQgPSAndG90YWxJdGVtc0luQ2FydCcsXHJcbiAgZmlsdGVyQXJyID0gJ2ZpbHRlckFycicsXHJcbiAgc29ydGVkID0gJ3NvcnRlZCcsXHJcbn1cclxuXHJcbmNsYXNzIExvY2FsU3RvcmFnZSB7XHJcbiAgXHJcbiAgICBzdGF0aWMgc2V0TG9jYWxTdG9yYWdlKFxyXG4gICAgICBkYXRhS2V5OiBsb2NhbFN0b3JhZ2VLZXlzLFxyXG4gICAgICBkYXRhOiBvYmplY3QgfCBbXSB8IHN0cmluZyB8IG51bWJlclxyXG4gICAgKTogdm9pZCB7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGRhdGFLZXksIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICAgIH1cclxuICBcclxuICAgIHN0YXRpYyBnZXRMb2NhbFN0b3JhZ2UoZGF0YTogbG9jYWxTdG9yYWdlS2V5cyk6IGFueSB7XHJcbiAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShkYXRhKSkge1xyXG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKFN0cmluZyhsb2NhbFN0b3JhZ2UuZ2V0SXRlbShkYXRhKSkpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBleHBvcnQgeyBMb2NhbFN0b3JhZ2UsIGxvY2FsU3RvcmFnZUtleXMgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL2dsb2JhbC5jc3MnO1xuLy8gaW1wb3J0IFdpbmVDYXJkcyBmcm9tICcuL2NvbXBvbmVudHMvd2luZWNhcmRzL3dpbmVjYXJkcyc7XG4vLyBpbXBvcnQgJy4vY29tcG9uZW50cy9jYXJ0L2NhcnQnO1xuIGltcG9ydCB7Z29vZHN9IGZyb20gJy4vY29uc3RhdHMvZ29vZHMnO1xuLy8gY29uc3Qgd2luZWNhcmRzID0gbmV3IFdpbmVDYXJkcygpO1xuLy8gd2luZWNhcmRzLnJlbmRlcihnb29kcyk7XG4vLyBpbXBvcnQgeyBDYXJ0U2V0dGluZ3MgfSBmcm9tICcuL2NvbXBvbmVudHMvY2FydC9jYXJ0Jztcbi8vIGltcG9ydCB7IExvY2FsU3RvcmFnZSwgbG9jYWxTdG9yYWdlS2V5cyB9IGZyb20gJy4vdXRpbHMvbG9jYWxzdG9yYWdlJztcbi8vIGNvbnN0IGNhcnRzZXR0aW5ncyA9IG5ldyBDYXJ0U2V0dGluZ3MoKTtcbi8vIGNhcnRzZXR0aW5ncy5hZGRUb0NhcnQoZ29vZHMpO1xuXG5pbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50cy9hcHAvYXBwJztcbmltcG9ydCAnLi9nbG9iYWwuY3NzJztcblxuY29uc3QgYXBwID0gbmV3IEFwcCgpO1xuYXBwLnN0YXJ0KGdvb2RzKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=