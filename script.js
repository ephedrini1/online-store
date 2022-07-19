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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --background: black;\r\n  --red: #d60000;\r\n  --gold: #fdc854;\r\n }\r\n*{\r\n  box-sizing: border-box;\r\n}\r\n.filters-form {\r\n  width: 80vw;\r\n  background-color: rgba(0,0,0,0.5);\r\n  border-radius: 1em;\r\n  box-shadow: 0 0 20px var(--gold);\r\n  color: var(--gold);\r\n  padding: 1em;\r\n}\r\n\r\n.filters-container {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr 1fr;\r\n  grid-template-rows: 1fr ;\r\n  grid-template-areas: \" select  filter-color filter-country\"\r\n                       \"   button      .         button\";\r\n}\r\n\r\n.filter-name {\r\n  margin-bottom: 10px;\r\n}\r\n.country-filter {\r\n  grid-area: 'filter-country';\r\n}\r\n.color-filter {\r\n  grid-area: 'filter-color';\r\n}\r\n\r\n.sort {\r\n  grid-area: 'select';\r\n}\r\n\r\n.reset {\r\n  grid-area: 'button';\r\n  margin-right: auto;\r\n}\r\n\r\n.reset-filters {\r\n  grid-area: 'button';\r\n  margin-left: auto;\r\n}\r\ninput[type=\"checkbox\"] {\r\n  border-radius: 0;\r\n-webkit-appearence:none;\r\noutline: none;\r\n}\r\n\r\n.checkbox{\r\n  margin-bottom: 1.5em;\r\n  padding-left: 2.5em;\r\n  position: relative;\r\n}\r\n\r\ninput[type=\"checkbox\"],\r\n.checkbox label::before {\r\ncursor: pointer;\r\nheight: 24px;\r\nleft: 0;\r\nposition: absolute;\r\nwidth: 24px;\r\n}\r\n\r\ninput[type=\"checkbox\"]{\r\n  display: inline-block;\r\n  opacity: 0;\r\n  vertical-align: middle;\r\n}\r\n\r\n.checkbox label::before {\r\n  border: 2px solid var(--gold);\r\n  border-radius: 4px;\r\n  color: var(--gold);\r\n  content: '';\r\n  font-size: 1.2em;\r\n}\r\n\r\n.checkbox input[type=\"checkbox\"]:checked + label::before {\r\n  border-color: var(--gold);\r\n  content: '\\2714';\r\n}\r\nlabel {\r\n  display: block;\r\n}\r\n\r\nselect {\r\n  appearance: none;\r\n  outline: 0;\r\n  box-shadow: none;\r\n  flex: 1;\r\n  padding: 0 1em;\r\n  color: var(--gold);\r\n  background-color: var(--background);\r\n  background-image: none;\r\n  cursor: pointer;\r\n  padding: 6px;\r\n  font-size: 17px;\r\n  max-width: 20em;\r\n  border: 2px solid var(--gold);\r\n  border-radius: 10px;\r\n  box-shadow:  0 0 30px var(--gold);\r\n}\r\n/* Remove IE arrow */\r\nselect::-ms-expand {\r\n  display: none;\r\n}\r\n/* Custom Select wrapper */\r\nselect {\r\n  position: relative;\r\n  display: flex;\r\n  max-width: 20em;\r\n  height: 3em;\r\n  border-radius: .25em;\r\n  overflow: hidden;\r\n  background-color: var(--background);\r\n  padding: 6px;\r\n  font-size: 17px;\r\n  border: 2px solid var(--gold);\r\n  box-shadow:  0 0 30px var(--gold);\r\n  border-radius: 5px;\r\n}\r\n/* Arrow */\r\nselect::after {\r\n  content: '\\25BC';\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  padding: 1em;\r\n  background-color: var(--background);\r\n  transition: .25s all ease;\r\n  pointer-events: none;\r\n}\r\n/* Transition */\r\nselect:hover::after {\r\n  color: #f39c12;\r\n}\r\n\r\n.reset-filters {\r\n  width: 10em;\r\n  height: 3em;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 0.5em;\r\n}\r\n\r\n/* Other styles*/\r\n\r\n\r\n", "",{"version":3,"sources":["webpack://./src/components/filters/filters.css"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,cAAc;EACd,eAAe;CAChB;AACD;EACE,sBAAsB;AACxB;AACA;EACE,WAAW;EACX,iCAAiC;EACjC,kBAAkB;EAClB,gCAAgC;EAChC,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,kCAAkC;EAClC,wBAAwB;EACxB;wDACsD;AACxD;;AAEA;EACE,mBAAmB;AACrB;AACA;EACE,2BAA2B;AAC7B;AACA;EACE,yBAAyB;AAC3B;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;EACnB,iBAAiB;AACnB;AACA;EACE,gBAAgB;AAClB,uBAAuB;AACvB,aAAa;AACb;;AAEA;EACE,oBAAoB;EACpB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;;AAEA,eAAe;AACf,YAAY;AACZ,OAAO;AACP,kBAAkB;AAClB,WAAW;AACX;;AAEA;EACE,qBAAqB;EACrB,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,6BAA6B;EAC7B,kBAAkB;EAClB,kBAAkB;EAClB,WAAW;EACX,gBAAgB;AAClB;;AAEA;EACE,yBAAyB;EACzB,gBAAgB;AAClB;AACA;EACE,cAAc;AAChB;;AAEA;EACE,gBAAgB;EAChB,UAAU;EACV,gBAAgB;EAChB,OAAO;EACP,cAAc;EACd,kBAAkB;EAClB,mCAAmC;EACnC,sBAAsB;EACtB,eAAe;EACf,YAAY;EACZ,eAAe;EACf,eAAe;EACf,6BAA6B;EAC7B,mBAAmB;EACnB,iCAAiC;AACnC;AACA,oBAAoB;AACpB;EACE,aAAa;AACf;AACA,0BAA0B;AAC1B;EACE,kBAAkB;EAClB,aAAa;EACb,eAAe;EACf,WAAW;EACX,oBAAoB;EACpB,gBAAgB;EAChB,mCAAmC;EACnC,YAAY;EACZ,eAAe;EACf,6BAA6B;EAC7B,iCAAiC;EACjC,kBAAkB;AACpB;AACA,UAAU;AACV;EACE,gBAAgB;EAChB,kBAAkB;EAClB,MAAM;EACN,QAAQ;EACR,YAAY;EACZ,mCAAmC;EACnC,yBAAyB;EACzB,oBAAoB;AACtB;AACA,eAAe;AACf;EACE,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,WAAW;EACX,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,cAAc;AAChB;;AAEA,gBAAgB","sourcesContent":[":root {\r\n  --background: black;\r\n  --red: #d60000;\r\n  --gold: #fdc854;\r\n }\r\n*{\r\n  box-sizing: border-box;\r\n}\r\n.filters-form {\r\n  width: 80vw;\r\n  background-color: rgba(0,0,0,0.5);\r\n  border-radius: 1em;\r\n  box-shadow: 0 0 20px var(--gold);\r\n  color: var(--gold);\r\n  padding: 1em;\r\n}\r\n\r\n.filters-container {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr 1fr;\r\n  grid-template-rows: 1fr ;\r\n  grid-template-areas: \" select  filter-color filter-country\"\r\n                       \"   button      .         button\";\r\n}\r\n\r\n.filter-name {\r\n  margin-bottom: 10px;\r\n}\r\n.country-filter {\r\n  grid-area: 'filter-country';\r\n}\r\n.color-filter {\r\n  grid-area: 'filter-color';\r\n}\r\n\r\n.sort {\r\n  grid-area: 'select';\r\n}\r\n\r\n.reset {\r\n  grid-area: 'button';\r\n  margin-right: auto;\r\n}\r\n\r\n.reset-filters {\r\n  grid-area: 'button';\r\n  margin-left: auto;\r\n}\r\ninput[type=\"checkbox\"] {\r\n  border-radius: 0;\r\n-webkit-appearence:none;\r\noutline: none;\r\n}\r\n\r\n.checkbox{\r\n  margin-bottom: 1.5em;\r\n  padding-left: 2.5em;\r\n  position: relative;\r\n}\r\n\r\ninput[type=\"checkbox\"],\r\n.checkbox label::before {\r\ncursor: pointer;\r\nheight: 24px;\r\nleft: 0;\r\nposition: absolute;\r\nwidth: 24px;\r\n}\r\n\r\ninput[type=\"checkbox\"]{\r\n  display: inline-block;\r\n  opacity: 0;\r\n  vertical-align: middle;\r\n}\r\n\r\n.checkbox label::before {\r\n  border: 2px solid var(--gold);\r\n  border-radius: 4px;\r\n  color: var(--gold);\r\n  content: '';\r\n  font-size: 1.2em;\r\n}\r\n\r\n.checkbox input[type=\"checkbox\"]:checked + label::before {\r\n  border-color: var(--gold);\r\n  content: '\\2714';\r\n}\r\nlabel {\r\n  display: block;\r\n}\r\n\r\nselect {\r\n  appearance: none;\r\n  outline: 0;\r\n  box-shadow: none;\r\n  flex: 1;\r\n  padding: 0 1em;\r\n  color: var(--gold);\r\n  background-color: var(--background);\r\n  background-image: none;\r\n  cursor: pointer;\r\n  padding: 6px;\r\n  font-size: 17px;\r\n  max-width: 20em;\r\n  border: 2px solid var(--gold);\r\n  border-radius: 10px;\r\n  box-shadow:  0 0 30px var(--gold);\r\n}\r\n/* Remove IE arrow */\r\nselect::-ms-expand {\r\n  display: none;\r\n}\r\n/* Custom Select wrapper */\r\nselect {\r\n  position: relative;\r\n  display: flex;\r\n  max-width: 20em;\r\n  height: 3em;\r\n  border-radius: .25em;\r\n  overflow: hidden;\r\n  background-color: var(--background);\r\n  padding: 6px;\r\n  font-size: 17px;\r\n  border: 2px solid var(--gold);\r\n  box-shadow:  0 0 30px var(--gold);\r\n  border-radius: 5px;\r\n}\r\n/* Arrow */\r\nselect::after {\r\n  content: '\\25BC';\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  padding: 1em;\r\n  background-color: var(--background);\r\n  transition: .25s all ease;\r\n  pointer-events: none;\r\n}\r\n/* Transition */\r\nselect:hover::after {\r\n  color: #f39c12;\r\n}\r\n\r\n.reset-filters {\r\n  width: 10em;\r\n  height: 3em;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 0.5em;\r\n}\r\n\r\n/* Other styles*/\r\n\r\n\r\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n --background: black;\r\n --red: #d60000;\r\n --gold: #fdc854;\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\na {\r\n  text-decoration: none;\r\n  transition: 0.3s;\r\n\r\n}\r\n\r\nbody {\r\n  width: 100vw;\r\n  max-height: 100vh;\r\n  display: grid;\r\n  grid-template-areas:\r\n    'header header header'\r\n    'main main main'\r\n    'footer footer footer';\r\n  grid-row-gap: 1em;\r\n  grid-template-rows: auto 1fr auto;\r\n  grid-template-columns: 1fr 1fr 1fr;\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-attachment: fixed;\r\n  background-size: cover;\r\n  position: relative;\r\n}\r\n\r\nbutton {\r\n  background-color: var(--gold);\r\n  border: var(--gold);\r\n  color: var(--background);\r\n  text-shadow: 2px 2px 10px var(--background);\r\n  box-shadow: 10px 10px 20px var(--background);\r\n  border-radius: 5px;\r\n  padding: 1em;\r\n  cursor: pointer;\r\n  transition: 0.2s;\r\n}\r\n  .header {\r\n    grid-area: header;\r\n    height: 50px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    margin:  1em;\r\n  }\r\n\r\n  .search-container__input {\r\n    background-color: var(--background);\r\n    padding: 6px;\r\n    font-size: 17px;\r\n    border: 2px solid var(--gold);\r\n    box-shadow:  0 0 30px var(--gold);\r\n    border-radius: 5px;\r\n  }\r\n\r\n  .search-container__input:focus{\r\n    box-shadow: inset  0 0 30px var(--gold);\r\n    outline: none;\r\n  }\r\n\r\n  .header__cart {\r\n  position: relative;\r\n  width: 3em;\r\n  height: 3em;\r\n  transition: 0.3s;\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat center;\r\n  background-size: cover;\r\n  cursor: pointer;\r\n  }\r\n\r\n  .header__cart:hover {\r\n    transform: scale(1.1, 1.1);\r\n    transition: 0.3s;\r\n  }\r\n\r\n  .cart__products {\r\n    position: absolute;\r\n    top: 5px;\r\n    left: 5px;\r\n    display: block;\r\n    background-color: var(--red);\r\n    color: var(--gold);\r\n    border-radius: 50%;\r\n    padding: 1px 6px;\r\n    width: 20px;\r\n    height: 20px;\r\n  }\r\n\r\n  .main{\r\n    grid-area: main;\r\n    height: 100%;\r\n    max-width: 100%;\r\n    margin: 0 1em;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 1em;\r\n    background-attachment: fixed;\r\n  }\r\n\r\n  .overlay {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: var(--background);\r\n    opacity: 0.5;\r\n    z-index: 99;\r\n    display: none;\r\n\r\n  }\r\n\r\n  .overlay.active {\r\n    display: block;\r\n  }", "",{"version":3,"sources":["webpack://./src/global.css"],"names":[],"mappings":"AAAA;CACC,mBAAmB;CACnB,cAAc;CACd,eAAe;AAChB;;AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;AACA;EACE,qBAAqB;EACrB,gBAAgB;;AAElB;;AAEA;EACE,YAAY;EACZ,iBAAiB;EACjB,aAAa;EACb;;;0BAGwB;EACxB,iBAAiB;EACjB,iCAAiC;EACjC,kCAAkC;EAClC,yDAA6C;EAC7C,4BAA4B;EAC5B,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;EACE,6BAA6B;EAC7B,mBAAmB;EACnB,wBAAwB;EACxB,2CAA2C;EAC3C,4CAA4C;EAC5C,kBAAkB;EAClB,YAAY;EACZ,eAAe;EACf,gBAAgB;AAClB;EACE;IACE,iBAAiB;IACjB,YAAY;IACZ,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,YAAY;EACd;;EAEA;IACE,mCAAmC;IACnC,YAAY;IACZ,eAAe;IACf,6BAA6B;IAC7B,iCAAiC;IACjC,kBAAkB;EACpB;;EAEA;IACE,uCAAuC;IACvC,aAAa;EACf;;EAEA;EACA,kBAAkB;EAClB,UAAU;EACV,WAAW;EACX,gBAAgB;EAChB,oEAA8D;EAC9D,sBAAsB;EACtB,eAAe;EACf;;EAEA;IACE,0BAA0B;IAC1B,gBAAgB;EAClB;;EAEA;IACE,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,cAAc;IACd,4BAA4B;IAC5B,kBAAkB;IAClB,kBAAkB;IAClB,gBAAgB;IAChB,WAAW;IACX,YAAY;EACd;;EAEA;IACE,eAAe;IACf,YAAY;IACZ,eAAe;IACf,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,QAAQ;IACR,4BAA4B;EAC9B;;EAEA;IACE,eAAe;IACf,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,mCAAmC;IACnC,YAAY;IACZ,WAAW;IACX,aAAa;;EAEf;;EAEA;IACE,cAAc;EAChB","sourcesContent":[":root {\r\n --background: black;\r\n --red: #d60000;\r\n --gold: #fdc854;\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\na {\r\n  text-decoration: none;\r\n  transition: 0.3s;\r\n\r\n}\r\n\r\nbody {\r\n  width: 100vw;\r\n  max-height: 100vh;\r\n  display: grid;\r\n  grid-template-areas:\r\n    'header header header'\r\n    'main main main'\r\n    'footer footer footer';\r\n  grid-row-gap: 1em;\r\n  grid-template-rows: auto 1fr auto;\r\n  grid-template-columns: 1fr 1fr 1fr;\r\n  background-image: url('./assets/img/bg1.jpg');\r\n  background-attachment: fixed;\r\n  background-size: cover;\r\n  position: relative;\r\n}\r\n\r\nbutton {\r\n  background-color: var(--gold);\r\n  border: var(--gold);\r\n  color: var(--background);\r\n  text-shadow: 2px 2px 10px var(--background);\r\n  box-shadow: 10px 10px 20px var(--background);\r\n  border-radius: 5px;\r\n  padding: 1em;\r\n  cursor: pointer;\r\n  transition: 0.2s;\r\n}\r\n  .header {\r\n    grid-area: header;\r\n    height: 50px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    margin:  1em;\r\n  }\r\n\r\n  .search-container__input {\r\n    background-color: var(--background);\r\n    padding: 6px;\r\n    font-size: 17px;\r\n    border: 2px solid var(--gold);\r\n    box-shadow:  0 0 30px var(--gold);\r\n    border-radius: 5px;\r\n  }\r\n\r\n  .search-container__input:focus{\r\n    box-shadow: inset  0 0 30px var(--gold);\r\n    outline: none;\r\n  }\r\n\r\n  .header__cart {\r\n  position: relative;\r\n  width: 3em;\r\n  height: 3em;\r\n  transition: 0.3s;\r\n  background: url('./assets/img/cart-gold.svg') no-repeat center;\r\n  background-size: cover;\r\n  cursor: pointer;\r\n  }\r\n\r\n  .header__cart:hover {\r\n    transform: scale(1.1, 1.1);\r\n    transition: 0.3s;\r\n  }\r\n\r\n  .cart__products {\r\n    position: absolute;\r\n    top: 5px;\r\n    left: 5px;\r\n    display: block;\r\n    background-color: var(--red);\r\n    color: var(--gold);\r\n    border-radius: 50%;\r\n    padding: 1px 6px;\r\n    width: 20px;\r\n    height: 20px;\r\n  }\r\n\r\n  .main{\r\n    grid-area: main;\r\n    height: 100%;\r\n    max-width: 100%;\r\n    margin: 0 1em;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 1em;\r\n    background-attachment: fixed;\r\n  }\r\n\r\n  .overlay {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: var(--background);\r\n    opacity: 0.5;\r\n    z-index: 99;\r\n    display: none;\r\n\r\n  }\r\n\r\n  .overlay.active {\r\n    display: block;\r\n  }"],"sourceRoot":""}]);
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
        this.winecards.render(data);
        this.cartsettings.render();
        const colorFilters = document.querySelector('.color-filter');
        const countryFilters = document.querySelector('.country-filter');
        const filters = document.querySelector('#filters');
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
        if (localStorage.getItem('filter')) {
            this.filtersObj = _utils_localstorage__WEBPACK_IMPORTED_MODULE_0__.LocalStorage.getLocalStorage("filter" /* localStorageKeys.filter */) || '';
        }
        ;
        if (localStorage.getItem('filterArr')) {
            this.filterArr = _utils_localstorage__WEBPACK_IMPORTED_MODULE_0__.LocalStorage.getLocalStorage("filterArr" /* localStorageKeys.filterArr */) || '';
        }
        ;
        this.filtersObj = {
            color: [],
            country: [],
            year: [],
            price: [],
        };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7QUNBc0I7QUFDdEIsNERBQTREO0FBQzVELG1DQUFtQztBQUNLO0FBQ3hDLHFDQUFxQztBQUNyQywyQkFBMkI7QUFDM0IseURBQXlEO0FBQ3pELHlFQUF5RTtBQUN6RSwyQ0FBMkM7QUFDM0MsaUNBQWlDO0FBRU07QUFDakI7QUFFdEIsTUFBTSxHQUFHLEdBQUcsSUFBSSwyREFBRyxFQUFFLENBQUM7QUFDdEIsR0FBRyxDQUFDLEtBQUssQ0FBQyxrREFBSyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29tcG9uZW50cy9jYXJ0L2NhcnQuY3NzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL2ZpbHRlcnMvZmlsdGVycy5jc3MiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvd2luZWNhcmRzL3dpbmVjYXJkcy5jc3MiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2dsb2JhbC5jc3MiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL2NhcnQvY2FydC5jc3M/ZDI4NiIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29tcG9uZW50cy9maWx0ZXJzL2ZpbHRlcnMuY3NzP2UyZDkiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvd2luZWNhcmRzL3dpbmVjYXJkcy5jc3M/NzMwMyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvZ2xvYmFsLmNzcz9kM2JjIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvYXBwL2FwcC50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29tcG9uZW50cy9jYXJ0L2NhcnQudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvZmlsdGVycy9maWx0ZXJTZXR0aW5ncy50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29tcG9uZW50cy93aW5lY2FyZHMvd2luZWNhcmRzLnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb25zdGF0cy9nb29kcy50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvaHRtbC1jb21wb25lbnRzL2NhcnQtcG9wdXAvY2FydC1wb3B1cC50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvaHRtbC1jb21wb25lbnRzL2NhcnQvY2FydC50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvaHRtbC1jb21wb25lbnRzL2ZpbHRlcnMvZmlsdGVycy50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvaHRtbC1jb21wb25lbnRzL2hlYWRlci9oZWFkZXIudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2h0bWwtY29tcG9uZW50cy9tYWluL21haW4udHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2h0bWwtY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9odG1sLWNvbXBvbmVudHMvd2luZWNhcmRzL3dpbmVjYXJkcy50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvdXRpbHMvY29tcG9uZW50LnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy91dGlscy9sb2NhbHN0b3JhZ2UudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29ubGluZS1zdG9yZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29ubGluZS1zdG9yZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29ubGluZS1zdG9yZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29ubGluZS1zdG9yZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29ubGluZS1zdG9yZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLWJhY2tncm91bmQ6IGJsYWNrO1xcbiAgLS1yZWQ6ICNkNjAwMDA7XFxuICAtLWdvbGQ6ICNmZGM4NTQ7XFxuIH1cXG5cXG4uY2FydC1wb3B1cCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDEwdmg7XFxuICBsZWZ0OiAxMHZ3O1xcbiAgd2lkdGg6IDgwdnc7XFxuICBoZWlnaHQ6IDgwdmg7XFxuICBwYWRkaW5nOiAyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIHotaW5kZXg6IDEwMTtcXG4gIGNvbG9yOiB2YXIoLS1nb2xkKTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJveC1zaGFkb3c6IDAgMCAzMHB4IHZhcigtLWdvbGQpO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmNhcnQtcG9wdXAuYWN0aXZlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uY2FydC1wb3B1cF9fY29udGFpbmVyIHtcXG4gIGhlaWdodDogODAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMWVtO1xcbn1cXG5cXG4uY2xvc2UtcG9wdXAge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwYWRkaW5nOiAwLjFlbSAwLjVlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAxZW07XFxuICB0b3A6IDFlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IDAuMnM7XFxufVxcblxcbi5jbG9zZS1wb3B1cDpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSwgMS4xKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdvbGQpO1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCAxNXB4IHZhcigtLWdvbGQpO1xcbiAgdHJhbnNpdGlvbjogMC4ycztcXG59XFxuXFxuLmNsb3NlLXBvcHVwOmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi5jYXJ0LWl0ZW0ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiBhbGlnbi1pdGVtczogY2VudGVyO1xcbiBnYXA6IDFlbTtcXG59XFxuXFxuLmNhcnRfX251bWJlcntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDAuNWVtO1xcbn1cXG5cXG4uY2FydF9fZXJyb3Ige1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAxMHZoO1xcbiAgbGVmdDogMTB2dztcXG4gIHdpZHRoOiA4MHZ3O1xcbiAgaGVpZ2h0OiA4MHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpO1xcbiAgY29sb3I6IHZhcigtLWdvbGQpO1xcbiAgei1pbmRleDogMTAwO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmNhcnRfX2Vycm9yLmFjdGl2ZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG5cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9jYXJ0L2NhcnQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxlQUFlO0NBQ2hCOztBQUVEO0VBQ0UsZUFBZTtFQUNmLFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGdDQUFnQztFQUNoQyxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsUUFBUTtFQUNSLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsNkJBQTZCO0VBQzdCLG9DQUFvQztFQUNwQyxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtDQUFrQztDQUNuQyx1QkFBdUI7Q0FDdkIsbUJBQW1CO0NBQ25CLFFBQVE7QUFDVDs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGVBQWU7RUFDZixTQUFTO0VBQ1QsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLS1iYWNrZ3JvdW5kOiBibGFjaztcXG4gIC0tcmVkOiAjZDYwMDAwO1xcbiAgLS1nb2xkOiAjZmRjODU0O1xcbiB9XFxuXFxuLmNhcnQtcG9wdXAge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAxMHZoO1xcbiAgbGVmdDogMTB2dztcXG4gIHdpZHRoOiA4MHZ3O1xcbiAgaGVpZ2h0OiA4MHZoO1xcbiAgcGFkZGluZzogMmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICB6LWluZGV4OiAxMDE7XFxuICBjb2xvcjogdmFyKC0tZ29sZCk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3gtc2hhZG93OiAwIDAgMzBweCB2YXIoLS1nb2xkKTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5jYXJ0LXBvcHVwLmFjdGl2ZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmNhcnQtcG9wdXBfX2NvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDgwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDFlbTtcXG59XFxuXFxuLmNsb3NlLXBvcHVwIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcGFkZGluZzogMC4xZW0gMC41ZW07XFxuICBib3JkZXItcmFkaXVzOiAxMCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMWVtO1xcbiAgdG9wOiAxZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcbn1cXG5cXG4uY2xvc2UtcG9wdXA6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEsIDEuMSk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1nb2xkKTtcXG4gIGJveC1zaGFkb3c6IDJweCAycHggMTVweCB2YXIoLS1nb2xkKTtcXG4gIHRyYW5zaXRpb246IDAuMnM7XFxufVxcblxcbi5jbG9zZS1wb3B1cDphY3RpdmUge1xcbiAgdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4uY2FydC1pdGVtIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gZ2FwOiAxZW07XFxufVxcblxcbi5jYXJ0X19udW1iZXJ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjVlbTtcXG59XFxuXFxuLmNhcnRfX2Vycm9yIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMTB2aDtcXG4gIGxlZnQ6IDEwdnc7XFxuICB3aWR0aDogODB2dztcXG4gIGhlaWdodDogODB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXG4gIGNvbG9yOiB2YXIoLS1nb2xkKTtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5jYXJ0X19lcnJvci5hY3RpdmUge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcclxcbiAgLS1iYWNrZ3JvdW5kOiBibGFjaztcXHJcXG4gIC0tcmVkOiAjZDYwMDAwO1xcclxcbiAgLS1nb2xkOiAjZmRjODU0O1xcclxcbiB9XFxyXFxuKntcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcbi5maWx0ZXJzLWZvcm0ge1xcclxcbiAgd2lkdGg6IDgwdnc7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMjBweCB2YXIoLS1nb2xkKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1nb2xkKTtcXHJcXG4gIHBhZGRpbmc6IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmZpbHRlcnMtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcIiBzZWxlY3QgIGZpbHRlci1jb2xvciBmaWx0ZXItY291bnRyeVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgIFxcXCIgICBidXR0b24gICAgICAuICAgICAgICAgYnV0dG9uXFxcIjtcXHJcXG59XFxyXFxuXFxyXFxuLmZpbHRlci1uYW1lIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxufVxcclxcbi5jb3VudHJ5LWZpbHRlciB7XFxyXFxuICBncmlkLWFyZWE6ICdmaWx0ZXItY291bnRyeSc7XFxyXFxufVxcclxcbi5jb2xvci1maWx0ZXIge1xcclxcbiAgZ3JpZC1hcmVhOiAnZmlsdGVyLWNvbG9yJztcXHJcXG59XFxyXFxuXFxyXFxuLnNvcnQge1xcclxcbiAgZ3JpZC1hcmVhOiAnc2VsZWN0JztcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2V0IHtcXHJcXG4gIGdyaWQtYXJlYTogJ2J1dHRvbic7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5yZXNldC1maWx0ZXJzIHtcXHJcXG4gIGdyaWQtYXJlYTogJ2J1dHRvbic7XFxyXFxuICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG59XFxyXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwO1xcclxcbi13ZWJraXQtYXBwZWFyZW5jZTpub25lO1xcclxcbm91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jaGVja2JveHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEuNWVtO1xcclxcbiAgcGFkZGluZy1sZWZ0OiAyLjVlbTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXHJcXG4uY2hlY2tib3ggbGFiZWw6OmJlZm9yZSB7XFxyXFxuY3Vyc29yOiBwb2ludGVyO1xcclxcbmhlaWdodDogMjRweDtcXHJcXG5sZWZ0OiAwO1xcclxcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG53aWR0aDogMjRweDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXXtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2tib3ggbGFiZWw6OmJlZm9yZSB7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1nb2xkKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIGNvbG9yOiB2YXIoLS1nb2xkKTtcXHJcXG4gIGNvbnRlbnQ6ICcnO1xcclxcbiAgZm9udC1zaXplOiAxLjJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrYm94IGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCArIGxhYmVsOjpiZWZvcmUge1xcclxcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1nb2xkKTtcXHJcXG4gIGNvbnRlbnQ6ICdcXFxcMjcxNCc7XFxyXFxufVxcclxcbmxhYmVsIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG5zZWxlY3Qge1xcclxcbiAgYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gIG91dGxpbmU6IDA7XFxyXFxuICBib3gtc2hhZG93OiBub25lO1xcclxcbiAgZmxleDogMTtcXHJcXG4gIHBhZGRpbmc6IDAgMWVtO1xcclxcbiAgY29sb3I6IHZhcigtLWdvbGQpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgcGFkZGluZzogNnB4O1xcclxcbiAgZm9udC1zaXplOiAxN3B4O1xcclxcbiAgbWF4LXdpZHRoOiAyMGVtO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZ29sZCk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgYm94LXNoYWRvdzogIDAgMCAzMHB4IHZhcigtLWdvbGQpO1xcclxcbn1cXHJcXG4vKiBSZW1vdmUgSUUgYXJyb3cgKi9cXHJcXG5zZWxlY3Q6Oi1tcy1leHBhbmQge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuLyogQ3VzdG9tIFNlbGVjdCB3cmFwcGVyICovXFxyXFxuc2VsZWN0IHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBtYXgtd2lkdGg6IDIwZW07XFxyXFxuICBoZWlnaHQ6IDNlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IC4yNWVtO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcclxcbiAgcGFkZGluZzogNnB4O1xcclxcbiAgZm9udC1zaXplOiAxN3B4O1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZ29sZCk7XFxyXFxuICBib3gtc2hhZG93OiAgMCAwIDMwcHggdmFyKC0tZ29sZCk7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcbi8qIEFycm93ICovXFxyXFxuc2VsZWN0OjphZnRlciB7XFxyXFxuICBjb250ZW50OiAnXFxcXDI1QkMnO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBwYWRkaW5nOiAxZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXHJcXG4gIHRyYW5zaXRpb246IC4yNXMgYWxsIGVhc2U7XFxyXFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG59XFxyXFxuLyogVHJhbnNpdGlvbiAqL1xcclxcbnNlbGVjdDpob3Zlcjo6YWZ0ZXIge1xcclxcbiAgY29sb3I6ICNmMzljMTI7XFxyXFxufVxcclxcblxcclxcbi5yZXNldC1maWx0ZXJzIHtcXHJcXG4gIHdpZHRoOiAxMGVtO1xcclxcbiAgaGVpZ2h0OiAzZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMC41ZW07XFxyXFxufVxcclxcblxcclxcbi8qIE90aGVyIHN0eWxlcyovXFxyXFxuXFxyXFxuXFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvZmlsdGVycy9maWx0ZXJzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsZUFBZTtDQUNoQjtBQUNEO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsaUNBQWlDO0VBQ2pDLGtCQUFrQjtFQUNsQixnQ0FBZ0M7RUFDaEMsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMsd0JBQXdCO0VBQ3hCO3dEQUNzRDtBQUN4RDs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCLHVCQUF1QjtBQUN2QixhQUFhO0FBQ2I7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTs7QUFFQSxlQUFlO0FBQ2YsWUFBWTtBQUNaLE9BQU87QUFDUCxrQkFBa0I7QUFDbEIsV0FBVztBQUNYOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLE9BQU87RUFDUCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLG1DQUFtQztFQUNuQyxzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLFlBQVk7RUFDWixlQUFlO0VBQ2YsZUFBZTtFQUNmLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsaUNBQWlDO0FBQ25DO0FBQ0Esb0JBQW9CO0FBQ3BCO0VBQ0UsYUFBYTtBQUNmO0FBQ0EsMEJBQTBCO0FBQzFCO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixlQUFlO0VBQ2YsV0FBVztFQUNYLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsbUNBQW1DO0VBQ25DLFlBQVk7RUFDWixlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLGlDQUFpQztFQUNqQyxrQkFBa0I7QUFDcEI7QUFDQSxVQUFVO0FBQ1Y7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixRQUFRO0VBQ1IsWUFBWTtFQUNaLG1DQUFtQztFQUNuQyx5QkFBeUI7RUFDekIsb0JBQW9CO0FBQ3RCO0FBQ0EsZUFBZTtBQUNmO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFFQSxnQkFBZ0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcclxcbiAgLS1iYWNrZ3JvdW5kOiBibGFjaztcXHJcXG4gIC0tcmVkOiAjZDYwMDAwO1xcclxcbiAgLS1nb2xkOiAjZmRjODU0O1xcclxcbiB9XFxyXFxuKntcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcbi5maWx0ZXJzLWZvcm0ge1xcclxcbiAgd2lkdGg6IDgwdnc7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMjBweCB2YXIoLS1nb2xkKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1nb2xkKTtcXHJcXG4gIHBhZGRpbmc6IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmZpbHRlcnMtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcIiBzZWxlY3QgIGZpbHRlci1jb2xvciBmaWx0ZXItY291bnRyeVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgIFxcXCIgICBidXR0b24gICAgICAuICAgICAgICAgYnV0dG9uXFxcIjtcXHJcXG59XFxyXFxuXFxyXFxuLmZpbHRlci1uYW1lIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxufVxcclxcbi5jb3VudHJ5LWZpbHRlciB7XFxyXFxuICBncmlkLWFyZWE6ICdmaWx0ZXItY291bnRyeSc7XFxyXFxufVxcclxcbi5jb2xvci1maWx0ZXIge1xcclxcbiAgZ3JpZC1hcmVhOiAnZmlsdGVyLWNvbG9yJztcXHJcXG59XFxyXFxuXFxyXFxuLnNvcnQge1xcclxcbiAgZ3JpZC1hcmVhOiAnc2VsZWN0JztcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2V0IHtcXHJcXG4gIGdyaWQtYXJlYTogJ2J1dHRvbic7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5yZXNldC1maWx0ZXJzIHtcXHJcXG4gIGdyaWQtYXJlYTogJ2J1dHRvbic7XFxyXFxuICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG59XFxyXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwO1xcclxcbi13ZWJraXQtYXBwZWFyZW5jZTpub25lO1xcclxcbm91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jaGVja2JveHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEuNWVtO1xcclxcbiAgcGFkZGluZy1sZWZ0OiAyLjVlbTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXHJcXG4uY2hlY2tib3ggbGFiZWw6OmJlZm9yZSB7XFxyXFxuY3Vyc29yOiBwb2ludGVyO1xcclxcbmhlaWdodDogMjRweDtcXHJcXG5sZWZ0OiAwO1xcclxcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG53aWR0aDogMjRweDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXXtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2tib3ggbGFiZWw6OmJlZm9yZSB7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1nb2xkKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIGNvbG9yOiB2YXIoLS1nb2xkKTtcXHJcXG4gIGNvbnRlbnQ6ICcnO1xcclxcbiAgZm9udC1zaXplOiAxLjJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrYm94IGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCArIGxhYmVsOjpiZWZvcmUge1xcclxcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1nb2xkKTtcXHJcXG4gIGNvbnRlbnQ6ICdcXFxcMjcxNCc7XFxyXFxufVxcclxcbmxhYmVsIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG5zZWxlY3Qge1xcclxcbiAgYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gIG91dGxpbmU6IDA7XFxyXFxuICBib3gtc2hhZG93OiBub25lO1xcclxcbiAgZmxleDogMTtcXHJcXG4gIHBhZGRpbmc6IDAgMWVtO1xcclxcbiAgY29sb3I6IHZhcigtLWdvbGQpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgcGFkZGluZzogNnB4O1xcclxcbiAgZm9udC1zaXplOiAxN3B4O1xcclxcbiAgbWF4LXdpZHRoOiAyMGVtO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZ29sZCk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgYm94LXNoYWRvdzogIDAgMCAzMHB4IHZhcigtLWdvbGQpO1xcclxcbn1cXHJcXG4vKiBSZW1vdmUgSUUgYXJyb3cgKi9cXHJcXG5zZWxlY3Q6Oi1tcy1leHBhbmQge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuLyogQ3VzdG9tIFNlbGVjdCB3cmFwcGVyICovXFxyXFxuc2VsZWN0IHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBtYXgtd2lkdGg6IDIwZW07XFxyXFxuICBoZWlnaHQ6IDNlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IC4yNWVtO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcclxcbiAgcGFkZGluZzogNnB4O1xcclxcbiAgZm9udC1zaXplOiAxN3B4O1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZ29sZCk7XFxyXFxuICBib3gtc2hhZG93OiAgMCAwIDMwcHggdmFyKC0tZ29sZCk7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcbi8qIEFycm93ICovXFxyXFxuc2VsZWN0OjphZnRlciB7XFxyXFxuICBjb250ZW50OiAnXFxcXDI1QkMnO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBwYWRkaW5nOiAxZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXHJcXG4gIHRyYW5zaXRpb246IC4yNXMgYWxsIGVhc2U7XFxyXFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG59XFxyXFxuLyogVHJhbnNpdGlvbiAqL1xcclxcbnNlbGVjdDpob3Zlcjo6YWZ0ZXIge1xcclxcbiAgY29sb3I6ICNmMzljMTI7XFxyXFxufVxcclxcblxcclxcbi5yZXNldC1maWx0ZXJzIHtcXHJcXG4gIHdpZHRoOiAxMGVtO1xcclxcbiAgaGVpZ2h0OiAzZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMC41ZW07XFxyXFxufVxcclxcblxcclxcbi8qIE90aGVyIHN0eWxlcyovXFxyXFxuXFxyXFxuXFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcclxcbiAgLS1iYWNrZ3JvdW5kOiAjMTQwYTBhO1xcclxcbiAgLS1yZWQ6ICNkNjAwMDA7XFxyXFxuICAtLWdvbGQ6ICNmZGM4NTQ7XFxyXFxuIH1cXHJcXG5cXHJcXG4gLndpbmVjYXJkc3tcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIG1heC13aWR0aDogODByZW07XFxyXFxufVxcclxcblxcclxcbi53aW5lY2FyZHMtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdyaWQtY29sdW1uLWdhcDogM2VtO1xcclxcbiAgZ3JpZC1yb3ctZ2FwOiAzZW07XFxyXFxufVxcclxcblxcclxcbi53aW5lY2FyZHNfX2l0ZW0ge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgd2lkdGg6IDIwZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxyXFxuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcclxcbiAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogMTAwMHB4O1xcclxcbiAgICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ud2luZWNhcmRzX19mYWNlLFxcclxcbi53aW5lY2FyZHNfX2JhY2sge1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCAxMnB4IDAgdmFyKC0tZ29sZCk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAuN3MgY3ViaWMtYmV6aWVyKDAuNCwgMC4yLCAwLjIsIDEpO1xcclxcbiAgdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gLjdzIGN1YmljLWJlemllcigwLjQsIDAuMiwgMC4yLCAxKTtcXHJcXG4gIC1vLXRyYW5zaXRpb246IHRyYW5zZm9ybSAuN3MgY3ViaWMtYmV6aWVyKDAuNCwgMC4yLCAwLjIsIDEpO1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC43cyBjdWJpYy1iZXppZXIoMC40LCAwLjIsIDAuMiwgMSk7XFxyXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjdzIGN1YmljLWJlemllcigwLjQsIDAuMiwgMC4yLCAxKSwgLXdlYmtpdC10cmFuc2Zvcm0gLjdzIGN1YmljLWJlemllcigwLjQsIDAuMiwgMC4yLCAxKTtcXHJcXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtaW4taGVpZ2h0OiAzNTBweDtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIHRleHQtc2hhZG93OiAxMHB4IDEwcHggMTBweCB2YXIoLS1iYWNrZ3JvdW5kKTtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmluQ2FydCAud2luZWNhcmRzX19mYWNlLFxcclxcbi5pbkNhcnQgLndpbmVjYXJkc19fYmFjayB7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMTJweCAwIHZhcigtLXJlZCk7XFxyXFxufVxcclxcblxcclxcbi53aW5lY2FyZHNfX2JhY2t7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1nb2xkKTtcXHJcXG59XFxyXFxuXFxyXFxuLndpbmVjYXJkc19fZmFjZTphZnRlcntcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgY29udGVudDogJyc7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBvcGFjaXR5OiAuNTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxyXFxuICAgIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgICAgICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLndpbmVjYXJkc19faXRlbSAud2luZWNhcmRzX19mYWNlLFxcclxcbi53aW5lY2FyZHNfX2l0ZW0gLndpbmVjYXJkc19fYmFja3tcXHJcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAuN3MgY3ViaWMtYmV6aWVyKDAuNCwgMC4yLCAwLjIsIDEpO1xcclxcbiAgICB0cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAuN3MgY3ViaWMtYmV6aWVyKDAuNCwgMC4yLCAwLjIsIDEpO1xcclxcbiAgICAtby10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjdzIGN1YmljLWJlemllcigwLjQsIDAuMiwgMC4yLCAxKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC43cyBjdWJpYy1iZXppZXIoMC40LCAwLjIsIDAuMiwgMSk7XFxyXFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuN3MgY3ViaWMtYmV6aWVyKDAuNCwgMC4yLCAwLjIsIDEpLCAtd2Via2l0LXRyYW5zZm9ybSAuN3MgY3ViaWMtYmV6aWVyKDAuNCwgMC4yLCAwLjIsIDEpO1xcclxcbn1cXHJcXG5cXHJcXG4ud2luZWNhcmRzX19iYWNre1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgdGV4dC1zaGFkb3c6IDEwcHggMTBweCAxMHB4IHZhcigtLWdvbGQpO1xcclxcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxyXFxufVxcclxcblxcclxcbi53aW5lY2FyZHNfX2ZhY2UtZGV0YWlscyB7XFxyXFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSB0cmFuc2xhdGVaKDYwcHgpIHNjYWxlKDAuOTQpO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHRyYW5zbGF0ZVooNjBweCkgc2NhbGUoMC45NCk7XFxyXFxudG9wOiA1MCU7XFxyXFxucG9zaXRpb246IGFic29sdXRlO1xcclxcbmxlZnQ6IDA7XFxyXFxud2lkdGg6IDEwMCU7XFxyXFxucGFkZGluZzogMnJlbTtcXHJcXG4td2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbm91dGxpbmU6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4td2Via2l0LXBlcnNwZWN0aXZlOiBpbmhlcml0O1xcclxcbiAgcGVyc3BlY3RpdmU6IGluaGVyaXQ7XFxyXFxuei1pbmRleDogMztcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLndpbmVjYXJkc19faXRlbSAud2luZWNhcmRzX19iYWNre1xcclxcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcXHJcXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XFxyXFxuICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxyXFxuICAgICAgICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxyXFxufVxcclxcblxcclxcbi53aW5lY2FyZHNfX2l0ZW0gLndpbmVjYXJkc19fZmFjZXtcXHJcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xcclxcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XFxyXFxuICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxyXFxuICAgICAgICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxyXFxufVxcclxcblxcclxcbi53aW5lY2FyZHNfX2l0ZW06Zm9jdXMgLndpbmVjYXJkc19fYmFjayxcXHJcXG4ud2luZWNhcmRzX19pdGVtOmhvdmVyIC53aW5lY2FyZHNfX2JhY2t7XFxyXFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcXHJcXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xcclxcbiAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcclxcbiAgICAgICAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcclxcbn1cXHJcXG5cXHJcXG4ud2luZWNhcmRzX19pdGVtOmhvdmVyIC53aW5lY2FyZHNfX2ZhY2UsXFxyXFxuLndpbmVjYXJkc19faXRlbTpmb2N1cyAud2luZWNhcmRzX19mYWNle1xcclxcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoLTE4MGRlZyk7XFxyXFxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgtMTgwZGVnKTtcXHJcXG4gIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXHJcXG4gICAgICAgICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXHJcXG59XFxyXFxuXFxyXFxuLndpbmVjYXJkc19fZmFjZS1waG90b3tcXHJcXG4gIHdpZHRoOiAxMGVtO1xcclxcbiAgaGVpZ2h0OiAxMGVtO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb24teDogMTAwJTtcXHJcXG4gIG1hcmdpbjogMWVtO1xcclxcbn1cXHJcXG5cXHJcXG4ud2luZWNhcmRzX19iYWNrLW5hbWUge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xcclxcbiAgdGV4dC1zaGFkb3c6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FydF9fYnRuIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdvbGQpO1xcclxcbiAgYm9yZGVyOiB2YXIoLS1nb2xkKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXHJcXG4gIHRleHQtc2hhZG93OiAycHggMnB4IDEwcHggdmFyKC0tYmFja2dyb3VuZCk7XFxyXFxuICBib3gtc2hhZG93OiAxMHB4IDEwcHggMjBweCB2YXIoLS1iYWNrZ3JvdW5kKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIHBhZGRpbmc6IDFlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IDAuMnM7XFxyXFxuICBtYXJnaW4tdG9wOiAyZW07XFxyXFxufVxcclxcblxcclxcbi5jYXJ0X19idG46aG92ZXIsXFxyXFxuLmNhcnRfX2J0bjpmb2N1c3tcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcclxcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IDIwcHggdmFyKC0tZ29sZCk7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAgdmFyKC0tZ29sZCk7XFxyXFxuICBjb2xvcjogdmFyKC0tZ29sZCk7XFxyXFxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAxMHB4IHZhcigtLWdvbGQpO1xcclxcbiAgdHJhbnNpdGlvbjogMC4ycztcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvd2luZWNhcmRzL3dpbmVjYXJkcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztFQUNkLGVBQWU7Q0FDaEI7O0NBRUE7RUFDQyxVQUFVO0VBQ1YsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGVBQWU7RUFDZixvQ0FBb0M7RUFDcEMsNEJBQTRCO0VBQzVCLDJCQUEyQjtJQUN6QixtQkFBbUI7QUFDdkI7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLGtDQUFrQztFQUNsQyxtQkFBbUI7RUFDbkIsd0VBQXdFO0VBQ3hFLGdFQUFnRTtFQUNoRSwyREFBMkQ7RUFDM0Qsd0RBQXdEO0VBQ3hELDhHQUE4RztFQUM5RyxtQ0FBbUM7VUFDM0IsMkJBQTJCO0VBQ25DLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsNkNBQTZDO0VBQzdDLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLGtCQUFrQjtBQUNwQjs7QUFFQTtDQUNDLGtCQUFrQjtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsVUFBVTtJQUNWLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLGNBQWM7SUFDZCxXQUFXO0lBQ1gsbUNBQW1DO0lBQ25DLG1DQUFtQztZQUMzQiwyQkFBMkI7SUFDbkMsbUJBQW1CO0FBQ3ZCOzs7O0FBSUE7O0lBRUksd0VBQXdFO0lBQ3hFLGdFQUFnRTtJQUNoRSwyREFBMkQ7SUFDM0Qsd0RBQXdEO0lBQ3hELDhHQUE4RztBQUNsSDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCx1Q0FBdUM7RUFDdkMsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0VBQWdFO0VBQ2hFLHdEQUF3RDtBQUMxRCxRQUFRO0FBQ1Isa0JBQWtCO0FBQ2xCLE9BQU87QUFDUCxXQUFXO0FBQ1gsYUFBYTtBQUNiLDhCQUE4QjtFQUM1QixzQkFBc0I7QUFDeEIsOEJBQThCO0FBQzlCLDRCQUE0QjtFQUMxQixvQkFBb0I7QUFDdEIsVUFBVTtBQUNWOzs7QUFHQTtFQUNFLGtDQUFrQztVQUMxQiwwQkFBMEI7RUFDbEMsb0NBQW9DO1VBQzVCLDRCQUE0QjtBQUN0Qzs7QUFFQTtFQUNFLGdDQUFnQztVQUN4Qix3QkFBd0I7RUFDaEMsb0NBQW9DO1VBQzVCLDRCQUE0QjtBQUN0Qzs7QUFFQTs7RUFFRSxnQ0FBZ0M7VUFDeEIsd0JBQXdCO0VBQ2hDLG9DQUFvQztVQUM1Qiw0QkFBNEI7QUFDdEM7O0FBRUE7O0VBRUUsbUNBQW1DO1VBQzNCLDJCQUEyQjtFQUNuQyxvQ0FBb0M7VUFDNUIsNEJBQTRCO0FBQ3RDOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWix3QkFBd0I7RUFDeEIsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsd0JBQXdCO0VBQ3hCLDJDQUEyQztFQUMzQyw0Q0FBNEM7RUFDNUMsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsbUNBQW1DO0VBQ25DLHNDQUFzQztFQUN0Qyw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLHFDQUFxQztFQUNyQyxnQkFBZ0I7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcclxcbiAgLS1iYWNrZ3JvdW5kOiAjMTQwYTBhO1xcclxcbiAgLS1yZWQ6ICNkNjAwMDA7XFxyXFxuICAtLWdvbGQ6ICNmZGM4NTQ7XFxyXFxuIH1cXHJcXG5cXHJcXG4gLndpbmVjYXJkc3tcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIG1heC13aWR0aDogODByZW07XFxyXFxufVxcclxcblxcclxcbi53aW5lY2FyZHMtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdyaWQtY29sdW1uLWdhcDogM2VtO1xcclxcbiAgZ3JpZC1yb3ctZ2FwOiAzZW07XFxyXFxufVxcclxcblxcclxcbi53aW5lY2FyZHNfX2l0ZW0ge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgd2lkdGg6IDIwZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxyXFxuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcclxcbiAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogMTAwMHB4O1xcclxcbiAgICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ud2luZWNhcmRzX19mYWNlLFxcclxcbi53aW5lY2FyZHNfX2JhY2sge1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCAxMnB4IDAgdmFyKC0tZ29sZCk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAuN3MgY3ViaWMtYmV6aWVyKDAuNCwgMC4yLCAwLjIsIDEpO1xcclxcbiAgdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gLjdzIGN1YmljLWJlemllcigwLjQsIDAuMiwgMC4yLCAxKTtcXHJcXG4gIC1vLXRyYW5zaXRpb246IHRyYW5zZm9ybSAuN3MgY3ViaWMtYmV6aWVyKDAuNCwgMC4yLCAwLjIsIDEpO1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC43cyBjdWJpYy1iZXppZXIoMC40LCAwLjIsIDAuMiwgMSk7XFxyXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjdzIGN1YmljLWJlemllcigwLjQsIDAuMiwgMC4yLCAxKSwgLXdlYmtpdC10cmFuc2Zvcm0gLjdzIGN1YmljLWJlemllcigwLjQsIDAuMiwgMC4yLCAxKTtcXHJcXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtaW4taGVpZ2h0OiAzNTBweDtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIHRleHQtc2hhZG93OiAxMHB4IDEwcHggMTBweCB2YXIoLS1iYWNrZ3JvdW5kKTtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmluQ2FydCAud2luZWNhcmRzX19mYWNlLFxcclxcbi5pbkNhcnQgLndpbmVjYXJkc19fYmFjayB7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMTJweCAwIHZhcigtLXJlZCk7XFxyXFxufVxcclxcblxcclxcbi53aW5lY2FyZHNfX2JhY2t7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1nb2xkKTtcXHJcXG59XFxyXFxuXFxyXFxuLndpbmVjYXJkc19fZmFjZTphZnRlcntcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgY29udGVudDogJyc7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBvcGFjaXR5OiAuNTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxyXFxuICAgIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgICAgICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLndpbmVjYXJkc19faXRlbSAud2luZWNhcmRzX19mYWNlLFxcclxcbi53aW5lY2FyZHNfX2l0ZW0gLndpbmVjYXJkc19fYmFja3tcXHJcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAuN3MgY3ViaWMtYmV6aWVyKDAuNCwgMC4yLCAwLjIsIDEpO1xcclxcbiAgICB0cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAuN3MgY3ViaWMtYmV6aWVyKDAuNCwgMC4yLCAwLjIsIDEpO1xcclxcbiAgICAtby10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjdzIGN1YmljLWJlemllcigwLjQsIDAuMiwgMC4yLCAxKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC43cyBjdWJpYy1iZXppZXIoMC40LCAwLjIsIDAuMiwgMSk7XFxyXFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuN3MgY3ViaWMtYmV6aWVyKDAuNCwgMC4yLCAwLjIsIDEpLCAtd2Via2l0LXRyYW5zZm9ybSAuN3MgY3ViaWMtYmV6aWVyKDAuNCwgMC4yLCAwLjIsIDEpO1xcclxcbn1cXHJcXG5cXHJcXG4ud2luZWNhcmRzX19iYWNre1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgdGV4dC1zaGFkb3c6IDEwcHggMTBweCAxMHB4IHZhcigtLWdvbGQpO1xcclxcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxyXFxufVxcclxcblxcclxcbi53aW5lY2FyZHNfX2ZhY2UtZGV0YWlscyB7XFxyXFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSB0cmFuc2xhdGVaKDYwcHgpIHNjYWxlKDAuOTQpO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHRyYW5zbGF0ZVooNjBweCkgc2NhbGUoMC45NCk7XFxyXFxudG9wOiA1MCU7XFxyXFxucG9zaXRpb246IGFic29sdXRlO1xcclxcbmxlZnQ6IDA7XFxyXFxud2lkdGg6IDEwMCU7XFxyXFxucGFkZGluZzogMnJlbTtcXHJcXG4td2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbm91dGxpbmU6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4td2Via2l0LXBlcnNwZWN0aXZlOiBpbmhlcml0O1xcclxcbiAgcGVyc3BlY3RpdmU6IGluaGVyaXQ7XFxyXFxuei1pbmRleDogMztcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLndpbmVjYXJkc19faXRlbSAud2luZWNhcmRzX19iYWNre1xcclxcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcXHJcXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XFxyXFxuICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxyXFxuICAgICAgICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxyXFxufVxcclxcblxcclxcbi53aW5lY2FyZHNfX2l0ZW0gLndpbmVjYXJkc19fZmFjZXtcXHJcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xcclxcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XFxyXFxuICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxyXFxuICAgICAgICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxyXFxufVxcclxcblxcclxcbi53aW5lY2FyZHNfX2l0ZW06Zm9jdXMgLndpbmVjYXJkc19fYmFjayxcXHJcXG4ud2luZWNhcmRzX19pdGVtOmhvdmVyIC53aW5lY2FyZHNfX2JhY2t7XFxyXFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcXHJcXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xcclxcbiAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcclxcbiAgICAgICAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcclxcbn1cXHJcXG5cXHJcXG4ud2luZWNhcmRzX19pdGVtOmhvdmVyIC53aW5lY2FyZHNfX2ZhY2UsXFxyXFxuLndpbmVjYXJkc19faXRlbTpmb2N1cyAud2luZWNhcmRzX19mYWNle1xcclxcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoLTE4MGRlZyk7XFxyXFxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgtMTgwZGVnKTtcXHJcXG4gIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXHJcXG4gICAgICAgICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXHJcXG59XFxyXFxuXFxyXFxuLndpbmVjYXJkc19fZmFjZS1waG90b3tcXHJcXG4gIHdpZHRoOiAxMGVtO1xcclxcbiAgaGVpZ2h0OiAxMGVtO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb24teDogMTAwJTtcXHJcXG4gIG1hcmdpbjogMWVtO1xcclxcbn1cXHJcXG5cXHJcXG4ud2luZWNhcmRzX19iYWNrLW5hbWUge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xcclxcbiAgdGV4dC1zaGFkb3c6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FydF9fYnRuIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdvbGQpO1xcclxcbiAgYm9yZGVyOiB2YXIoLS1nb2xkKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXHJcXG4gIHRleHQtc2hhZG93OiAycHggMnB4IDEwcHggdmFyKC0tYmFja2dyb3VuZCk7XFxyXFxuICBib3gtc2hhZG93OiAxMHB4IDEwcHggMjBweCB2YXIoLS1iYWNrZ3JvdW5kKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIHBhZGRpbmc6IDFlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IDAuMnM7XFxyXFxuICBtYXJnaW4tdG9wOiAyZW07XFxyXFxufVxcclxcblxcclxcbi5jYXJ0X19idG46aG92ZXIsXFxyXFxuLmNhcnRfX2J0bjpmb2N1c3tcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcclxcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IDIwcHggdmFyKC0tZ29sZCk7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAgdmFyKC0tZ29sZCk7XFxyXFxuICBjb2xvcjogdmFyKC0tZ29sZCk7XFxyXFxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAxMHB4IHZhcigtLWdvbGQpO1xcclxcbiAgdHJhbnNpdGlvbjogMC4ycztcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9pbWcvYmcxLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ltZy9jYXJ0LWdvbGQuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXHJcXG4gLS1iYWNrZ3JvdW5kOiBibGFjaztcXHJcXG4gLS1yZWQ6ICNkNjAwMDA7XFxyXFxuIC0tZ29sZDogI2ZkYzg1NDtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIG1heC1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxyXFxuICAgICdoZWFkZXIgaGVhZGVyIGhlYWRlcidcXHJcXG4gICAgJ21haW4gbWFpbiBtYWluJ1xcclxcbiAgICAnZm9vdGVyIGZvb3RlciBmb290ZXInO1xcclxcbiAgZ3JpZC1yb3ctZ2FwOiAxZW07XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG87XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ29sZCk7XFxyXFxuICBib3JkZXI6IHZhcigtLWdvbGQpO1xcclxcbiAgY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcclxcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggMTBweCB2YXIoLS1iYWNrZ3JvdW5kKTtcXHJcXG4gIGJveC1zaGFkb3c6IDEwcHggMTBweCAyMHB4IHZhcigtLWJhY2tncm91bmQpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgcGFkZGluZzogMWVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNpdGlvbjogMC4ycztcXHJcXG59XFxyXFxuICAuaGVhZGVyIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBtYXJnaW46ICAxZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc2VhcmNoLWNvbnRhaW5lcl9faW5wdXQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXHJcXG4gICAgcGFkZGluZzogNnB4O1xcclxcbiAgICBmb250LXNpemU6IDE3cHg7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWdvbGQpO1xcclxcbiAgICBib3gtc2hhZG93OiAgMCAwIDMwcHggdmFyKC0tZ29sZCk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zZWFyY2gtY29udGFpbmVyX19pbnB1dDpmb2N1c3tcXHJcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgIDAgMCAzMHB4IHZhcigtLWdvbGQpO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmhlYWRlcl9fY2FydCB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB3aWR0aDogM2VtO1xcclxcbiAgaGVpZ2h0OiAzZW07XFxyXFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcclxcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBuby1yZXBlYXQgY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5oZWFkZXJfX2NhcnQ6aG92ZXIge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSwgMS4xKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jYXJ0X19wcm9kdWN0cyB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiA1cHg7XFxyXFxuICAgIGxlZnQ6IDVweDtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZCk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1nb2xkKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBwYWRkaW5nOiAxcHggNnB4O1xcclxcbiAgICB3aWR0aDogMjBweDtcXHJcXG4gICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1haW57XFxyXFxuICAgIGdyaWQtYXJlYTogbWFpbjtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1hcmdpbjogMCAxZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDFlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5vdmVybGF5IHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcclxcbiAgICBvcGFjaXR5OiAwLjU7XFxyXFxuICAgIHotaW5kZXg6IDk5O1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcblxcclxcbiAgfVxcclxcblxcclxcbiAgLm92ZXJsYXkuYWN0aXZlIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB9XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2dsb2JhbC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Q0FDQyxtQkFBbUI7Q0FDbkIsY0FBYztDQUNkLGVBQWU7QUFDaEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGdCQUFnQjs7QUFFbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYjs7OzBCQUd3QjtFQUN4QixpQkFBaUI7RUFDakIsaUNBQWlDO0VBQ2pDLGtDQUFrQztFQUNsQyx5REFBNkM7RUFDN0MsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLHdCQUF3QjtFQUN4QiwyQ0FBMkM7RUFDM0MsNENBQTRDO0VBQzVDLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjtFQUNFO0lBQ0UsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxtQ0FBbUM7SUFDbkMsWUFBWTtJQUNaLGVBQWU7SUFDZiw2QkFBNkI7SUFDN0IsaUNBQWlDO0lBQ2pDLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLHVDQUF1QztJQUN2QyxhQUFhO0VBQ2Y7O0VBRUE7RUFDQSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsb0VBQThEO0VBQzlELHNCQUFzQjtFQUN0QixlQUFlO0VBQ2Y7O0VBRUE7SUFDRSwwQkFBMEI7SUFDMUIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsY0FBYztJQUNkLDRCQUE0QjtJQUM1QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsWUFBWTtFQUNkOztFQUVBO0lBQ0UsZUFBZTtJQUNmLFlBQVk7SUFDWixlQUFlO0lBQ2YsYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixRQUFRO0lBQ1IsNEJBQTRCO0VBQzlCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWixtQ0FBbUM7SUFDbkMsWUFBWTtJQUNaLFdBQVc7SUFDWCxhQUFhOztFQUVmOztFQUVBO0lBQ0UsY0FBYztFQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxyXFxuIC0tYmFja2dyb3VuZDogYmxhY2s7XFxyXFxuIC0tcmVkOiAjZDYwMDAwO1xcclxcbiAtLWdvbGQ6ICNmZGM4NTQ7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcbmEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgdHJhbnNpdGlvbjogMC4zcztcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBtYXgtaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcclxcbiAgICAnaGVhZGVyIGhlYWRlciBoZWFkZXInXFxyXFxuICAgICdtYWluIG1haW4gbWFpbidcXHJcXG4gICAgJ2Zvb3RlciBmb290ZXIgZm9vdGVyJztcXHJcXG4gIGdyaWQtcm93LWdhcDogMWVtO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9hc3NldHMvaW1nL2JnMS5qcGcnKTtcXHJcXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ29sZCk7XFxyXFxuICBib3JkZXI6IHZhcigtLWdvbGQpO1xcclxcbiAgY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcclxcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggMTBweCB2YXIoLS1iYWNrZ3JvdW5kKTtcXHJcXG4gIGJveC1zaGFkb3c6IDEwcHggMTBweCAyMHB4IHZhcigtLWJhY2tncm91bmQpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgcGFkZGluZzogMWVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNpdGlvbjogMC4ycztcXHJcXG59XFxyXFxuICAuaGVhZGVyIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBtYXJnaW46ICAxZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc2VhcmNoLWNvbnRhaW5lcl9faW5wdXQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXHJcXG4gICAgcGFkZGluZzogNnB4O1xcclxcbiAgICBmb250LXNpemU6IDE3cHg7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWdvbGQpO1xcclxcbiAgICBib3gtc2hhZG93OiAgMCAwIDMwcHggdmFyKC0tZ29sZCk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zZWFyY2gtY29udGFpbmVyX19pbnB1dDpmb2N1c3tcXHJcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgIDAgMCAzMHB4IHZhcigtLWdvbGQpO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmhlYWRlcl9fY2FydCB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB3aWR0aDogM2VtO1xcclxcbiAgaGVpZ2h0OiAzZW07XFxyXFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcclxcbiAgYmFja2dyb3VuZDogdXJsKCcuL2Fzc2V0cy9pbWcvY2FydC1nb2xkLnN2ZycpIG5vLXJlcGVhdCBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmhlYWRlcl9fY2FydDpob3ZlciB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xLCAxLjEpO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNhcnRfX3Byb2R1Y3RzIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDVweDtcXHJcXG4gICAgbGVmdDogNXB4O1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWdvbGQpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIHBhZGRpbmc6IDFweCA2cHg7XFxyXFxuICAgIHdpZHRoOiAyMHB4O1xcclxcbiAgICBoZWlnaHQ6IDIwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubWFpbntcXHJcXG4gICAgZ3JpZC1hcmVhOiBtYWluO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIG1heC13aWR0aDogMTAwJTtcXHJcXG4gICAgbWFyZ2luOiAwIDFlbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMWVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm92ZXJsYXkge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxyXFxuICAgIG9wYWNpdHk6IDAuNTtcXHJcXG4gICAgei1pbmRleDogOTk7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuXFxyXFxuICB9XFxyXFxuXFxyXFxuICAub3ZlcmxheS5hY3RpdmUge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY2FydC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NhcnQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2ZpbHRlcnMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9maWx0ZXJzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi93aW5lY2FyZHMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi93aW5lY2FyZHMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dsb2JhbC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dsb2JhbC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgV2luZURldGFpbHMgfSBmcm9tIFwiLi4vLi4vdHlwZXMvaW50ZXJmYWNlc1wiO1xyXG5pbXBvcnQgeyBDYXJ0U2V0dGluZ3MgfSBmcm9tIFwiLi4vY2FydC9jYXJ0XCI7XHJcbmltcG9ydCBXaW5lQ2FyZHMgZnJvbSBcIi4uL3dpbmVjYXJkcy93aW5lY2FyZHNcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vLi4vaHRtbC1jb21wb25lbnRzL2hlYWRlci9oZWFkZXJcIjtcclxuaW1wb3J0IE1haW4gZnJvbSBcIi4uLy4uL2h0bWwtY29tcG9uZW50cy9tYWluL21haW5cIjtcclxuaW1wb3J0IEZpbHRlclNldHRpbmdzIGZyb20gXCIuLi9maWx0ZXJzL2ZpbHRlclNldHRpbmdzXCI7XHJcbmltcG9ydCBGaWx0ZXJzIGZyb20gXCIuLi8uLi9odG1sLWNvbXBvbmVudHMvZmlsdGVycy9maWx0ZXJzXCI7XHJcbmltcG9ydCB7IExvY2FsU3RvcmFnZSwgbG9jYWxTdG9yYWdlS2V5cyB9IGZyb20gXCIuLi8uLi91dGlscy9sb2NhbHN0b3JhZ2VcIjtcclxuaW1wb3J0IHsgZ29vZHMgfSBmcm9tIFwiLi4vLi4vY29uc3RhdHMvZ29vZHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCB7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgY29udGFpbmVyOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmJvZHk7XHJcbiAgcHJpdmF0ZSBoZWFkZXI6IEhlYWRlcjtcclxuICBwcml2YXRlIG1haW46IE1haW47XHJcbiAgY2FydHNldHRpbmdzOiBDYXJ0U2V0dGluZ3M7XHJcbiAgd2luZWNhcmRzOiBXaW5lQ2FyZHM7XHJcbiAgZmlsdGVyU2V0dGluZ3M6IEZpbHRlclNldHRpbmdzO1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gIFxyXG4gICAgdGhpcy5jYXJ0c2V0dGluZ3MgPSBuZXcgQ2FydFNldHRpbmdzKCk7XHJcbiAgICB0aGlzLndpbmVjYXJkcyA9IG5ldyBXaW5lQ2FyZHMoKTtcclxuICAgIHRoaXMuZmlsdGVyU2V0dGluZ3MgPSBuZXcgRmlsdGVyU2V0dGluZ3MoKTtcclxuICAgIHRoaXMuaGVhZGVyID0gbmV3IEhlYWRlcignaGVhZGVyJywgJ2hlYWRlcicpO1xyXG4gICAgdGhpcy5tYWluID0gbmV3IE1haW4oJ21haW4nLCAnbWFpbicpO1xyXG5cclxuICB9XHJcbiAgc3RhcnQoZGF0YTogV2luZURldGFpbHNbXSkge1xyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzb3J0ZWQnKSkge1xyXG4gICAgICBkYXRhID0gTG9jYWxTdG9yYWdlLmdldExvY2FsU3RvcmFnZShsb2NhbFN0b3JhZ2VLZXlzLnNvcnRlZCkgfHwgZGF0YTtcclxuICAgIH07XHJcbiAgICBBcHAuY29udGFpbmVyLmFwcGVuZCh0aGlzLmhlYWRlci5yZW5kZXIoKSk7XHJcbiAgICBBcHAuY29udGFpbmVyLmFwcGVuZCh0aGlzLm1haW4ucmVuZGVyKCkpO1xyXG4gICAgdGhpcy53aW5lY2FyZHMucmVuZGVyKGRhdGEpO1xyXG4gICAgdGhpcy5jYXJ0c2V0dGluZ3MucmVuZGVyKCk7XHJcbiAgICBjb25zdCBjb2xvckZpbHRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29sb3ItZmlsdGVyJylcclxuICAgIGNvbnN0IGNvdW50cnlGaWx0ZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvdW50cnktZmlsdGVyJylcclxuICAgIGNvbnN0IGZpbHRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmlsdGVycycpO1xyXG4gICAgY29sb3JGaWx0ZXJzIS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGV2ZW50ID0+IHtcclxuICAgICAgICB0aGlzLmZpbHRlclNldHRpbmdzLmZpbHRlckJ5Q29sb3IoZGF0YSk7XHJcbiAgICAgICAgdGhpcy53aW5lY2FyZHMucmVuZGVyKHRoaXMuZmlsdGVyU2V0dGluZ3MuZmlsdGVyZWQpO1xyXG4gICBcclxuICAgICAgfSlcclxuICAgICAgY291bnRyeUZpbHRlcnMhLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgdGhpcy5maWx0ZXJTZXR0aW5ncy5maWx0ZXJCeUNvdW50cnkoZGF0YSk7XHJcbiAgICAgICAgICB0aGlzLndpbmVjYXJkcy5yZW5kZXIodGhpcy5maWx0ZXJTZXR0aW5ncy5maWx0ZXJlZCk7XHJcbiAgIFxyXG4gICAgICAgIH0pXHJcbiAgICAgIGRvY3VtZW50XHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yKCcucmVzZXQtZmlsdGVycycpIVxyXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIHRoaXMuZmlsdGVyU2V0dGluZ3MucmVzZXRGaWx0ZXJzKCk7XHJcbiAgICAgICAgdGhpcy53aW5lY2FyZHMucmVuZGVyKGRhdGEpO1xyXG4gICAgICB9KVxyXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcclxuICAgICAgICBpZiAoKDxIVE1MRWxlbWVudD5ldmVudC50YXJnZXQpIS5jbGFzc0xpc3QuY29udGFpbnMoJ2NhcnRfX2FkZCcpKSB7XHJcbiAgICAgICAgICBsZXQgYXJ0aWN1bCA9IE51bWJlcigoPEhUTUxFbGVtZW50PmV2ZW50LnRhcmdldCkhLmRhdGFzZXRbJ2FydGljdWwnXSkhO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coYXJ0aWN1bClcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldClcclxuICAgICAgICAgIGlmICh0aGlzLmNhcnRzZXR0aW5ncy50b3RhbEl0ZW1zIDwgMjAgKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FydHNldHRpbmdzLmNhcnRBZGQoZGF0YSwgYXJ0aWN1bCk7XHJcbiAgICAgICAgICAgIHRoaXMuY2FydHNldHRpbmdzLnJlbmRlcigpO1xyXG4gICAgICAgICAgICB0aGlzLndpbmVjYXJkcy5yZW5kZXIoZGF0YSk7XHJcbiAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcnRfX2Vycm9yJykhLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheScpIS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG5cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG4gICAgICAgIGlmICgoPEhUTUxFbGVtZW50PmV2ZW50LnRhcmdldCkhLmNsYXNzTGlzdC5jb250YWlucygnY2FydF9fcmVtb3ZlJykpIHtcclxuICAgICAgICAgIGxldCBhcnRpY3VsID0gTnVtYmVyKCg8SFRNTEVsZW1lbnQ+ZXZlbnQudGFyZ2V0KSEuZGF0YXNldFsnYXJ0aWN1bCddKTtcclxuICAgICAgICAgIGlmICh0aGlzLmNhcnRzZXR0aW5ncy50b3RhbEl0ZW1zID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmNhcnRzZXR0aW5ncy5jYXJ0UmVtb3ZlKGRhdGEsIGFydGljdWwpO1xyXG4gICAgICAgICAgICB0aGlzLmNhcnRzZXR0aW5ncy5yZW5kZXIoKTtcclxuICAgICAgICAgICAgdGhpcy53aW5lY2FyZHMucmVuZGVyKGRhdGEpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgZG9jdW1lbnRcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5lcnJvcl9fYnRuJykhXHJcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcclxuICAgICAgICB0aGlzLmNhcnRzZXR0aW5ncy5jYXJ0T3BlbigpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0X19lcnJvcicpIS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdhdXRvJztcclxuICAgICAgfSlcclxuICAgICAgZG9jdW1lbnRcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0JykhXHJcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcclxuICAgICAgICB0aGlzLmNhcnRzZXR0aW5ncy5jYXJ0T3BlbigpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2F1dG8nO1xyXG4gICAgICB9KVxyXG4gICAgICBkb2N1bWVudFxyXG4gICAgICAucXVlcnlTZWxlY3RvcignLmNsb3NlLXBvcHVwJykhXHJcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcclxuICAgICAgICB0aGlzLmNhcnRzZXR0aW5ncy5jYXJ0Q2xvc2UoKTtcclxuICAgICAgfSlcclxuICAgICAgZG9jdW1lbnQuXHJcbiAgICAgIHF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3QnKSEuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZXZlbnQgPT4ge1xyXG4gICAgICAgIGlmKCg8SFRNTE9wdGlvbkVsZW1lbnQ+ZXZlbnQudGFyZ2V0KSEudmFsdWUgPT09ICdCeVByaWNlVXAnKXtcclxuICAgICAgICAgIHRoaXMuZmlsdGVyU2V0dGluZ3Muc29ydFByaWNlVXAoZGF0YSk7XHJcbiAgICAgICAgICB0aGlzLndpbmVjYXJkcy5yZW5kZXIodGhpcy5maWx0ZXJTZXR0aW5ncy5zb3J0ZWQpXHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgaWYoKDxIVE1MT3B0aW9uRWxlbWVudD5ldmVudC50YXJnZXQpIS52YWx1ZSA9PT0gJ0J5UHJpY2VEb3duJyl7XHJcbiAgICAgICAgICB0aGlzLmZpbHRlclNldHRpbmdzLnNvcnRQcmljZURvd24oZGF0YSk7XHJcbiAgICAgICAgICB0aGlzLndpbmVjYXJkcy5yZW5kZXIodGhpcy5maWx0ZXJTZXR0aW5ncy5zb3J0ZWQpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgZG9jdW1lbnRcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5yZXNldCcpIS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcclxuICAgICAgICB0aGlzLmZpbHRlclNldHRpbmdzLnJlc2V0QWxsKCk7XHJcbiAgICAgICAgdGhpcy53aW5lY2FyZHMucmVuZGVyKGRhdGEpO1xyXG4gICAgICB9KVxyXG4gIH1cclxufVxyXG5cclxuIiwiaW1wb3J0ICcuL2NhcnQuY3NzJ1xyXG5pbXBvcnQgeyAgV2luZURldGFpbHMgfSBmcm9tICcuLi8uLi90eXBlcy9pbnRlcmZhY2VzJztcclxuaW1wb3J0IHsgTG9jYWxTdG9yYWdlLCBsb2NhbFN0b3JhZ2VLZXlzIH0gZnJvbSAnLi4vLi4vdXRpbHMvbG9jYWxzdG9yYWdlJztcclxuaW1wb3J0IFdpbmVDYXJkcyBmcm9tICcuLi93aW5lY2FyZHMvd2luZWNhcmRzJ1xyXG5leHBvcnQgY2xhc3MgQ2FydFNldHRpbmdzIHtcclxuICBjYXJ0OiBXaW5lRGV0YWlsc1tdO1xyXG4gIHRvdGFsSXRlbXM6IG51bWJlcjtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuY2FydCA9IFtdO1xyXG4gICAgdGhpcy50b3RhbEl0ZW1zID0gdGhpcy50b3RhbEl0ZW1zID0gTG9jYWxTdG9yYWdlLmdldExvY2FsU3RvcmFnZShsb2NhbFN0b3JhZ2VLZXlzLnRvdGFsSXRlbXNJbkNhcnQpIHx8IDA7XHJcbiAgfVxyXG5cclxuICBjYXJ0QWRkKGRhdGE6IFdpbmVEZXRhaWxzW10sIGFydGljdWw6IG51bWJlcikge1xyXG4gICAgICAgICBjb25zb2xlLmxvZyhhcnRpY3VsKVxyXG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2FydCcpKSB7XHJcbiAgICAgICAgICB0aGlzLmNhcnQgPSBMb2NhbFN0b3JhZ2UuZ2V0TG9jYWxTdG9yYWdlKGxvY2FsU3RvcmFnZUtleXMuY2FydCkgfHwgJyc7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2dvb2RzJykpIHtcclxuICAgICAgICAgIGRhdGEgPSBMb2NhbFN0b3JhZ2UuZ2V0TG9jYWxTdG9yYWdlKGxvY2FsU3RvcmFnZUtleXMuZ29vZHMpIHx8IGRhdGE7XHJcbiAgICAgICAgfTtcclxuICAgICAgY29uc29sZS5sb2codGhpcy5jYXJ0KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGFydGljdWwpO1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5jYXJ0LmZpbmRJbmRleChlbGVtID0+IGVsZW0uaWQgPT09IGFydGljdWwpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGluZGV4KTtcclxuICAgICAgICBpZihpbmRleCA9PT0gLTEpIHtcclxuICAgICAgICAgIGRhdGFbYXJ0aWN1bF1bJ2NvdW50J10tLTtcclxuICAgICAgICAgIGRhdGFbYXJ0aWN1bF1bJ2luQ2FydCddKys7XHJcbiAgICAgICAgICB0aGlzLmNhcnQucHVzaChkYXRhW2FydGljdWxdKTtcclxuICAgICAgICAgIHRoaXMudG90YWxJdGVtcysrO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ2RhdGEgY291bnQgJyxkYXRhW2FydGljdWxdWydjb3VudCddKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdkYXRhIGluQ2FydCAnICxkYXRhW2FydGljdWxdWydpbkNhcnQnXSk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmNhcnQpXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICB0aGlzLnRvdGFsSXRlbXMrKztcclxuICAgICAgICAgIHRoaXMuY2FydFtpbmRleF1bJ2luQ2FydCddKys7XHJcbiAgICAgICAgICBkYXRhW2FydGljdWxdWydjb3VudCddLS07XHJcbiAgICAgICAgICBkYXRhW2FydGljdWxdWydpbkNhcnQnXSsrO1xyXG4gICAgICAgICAgdGhpcy5jYXJ0W2luZGV4XVsnY291bnQnXS0tO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ2NhcnQgQ291bnQgJyx0aGlzLmNhcnRbaW5kZXhdWydjb3VudCddKVxyXG4gICAgICAgICAgY29uc29sZS5sb2coJ2RhdGEgY291bnQgJyxkYXRhW2FydGljdWxdWydjb3VudCddKVxyXG4gICAgICAgICAgY29uc29sZS5sb2coJ2NhcnQgaW5DYXJ0ICcsdGhpcy5jYXJ0W2luZGV4XVsnaW5DYXJ0J10pXHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnZGF0YSBpbkNhcnQgJyxkYXRhW2FydGljdWxdWydpbkNhcnQnXSlcclxuICAgICAgICB9IFxyXG4gICAgICAgIGlmKGRhdGFbYXJ0aWN1bF1bJ2NvdW50J10gPT09IDApIHtcclxuICAgICAgICAgIGNvbnN0IHdpbmVjYXJkcyA9IG5ldyBXaW5lQ2FyZHMoKTtcclxuICAgICAgICAgIHdpbmVjYXJkcy5yZW5kZXIoZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIExvY2FsU3RvcmFnZS5zZXRMb2NhbFN0b3JhZ2UobG9jYWxTdG9yYWdlS2V5cy5jYXJ0LCB0aGlzLmNhcnQpXHJcbiAgICAgICAgTG9jYWxTdG9yYWdlLnNldExvY2FsU3RvcmFnZShsb2NhbFN0b3JhZ2VLZXlzLmdvb2RzLCBkYXRhKVxyXG4gICAgICAgIExvY2FsU3RvcmFnZS5zZXRMb2NhbFN0b3JhZ2UobG9jYWxTdG9yYWdlS2V5cy50b3RhbEl0ZW1zSW5DYXJ0LCB0aGlzLnRvdGFsSXRlbXMpXHJcbiAgICAgIH1cclxuICAgICAgY2FydFJlbW92ZShkYXRhOiBXaW5lRGV0YWlsc1tdLCBhcnRpY3VsOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhcnQnKSkge1xyXG4gICAgICAgICAgdGhpcy5jYXJ0ID0gTG9jYWxTdG9yYWdlLmdldExvY2FsU3RvcmFnZShsb2NhbFN0b3JhZ2VLZXlzLmNhcnQpIHx8ICcnO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdnb29kcycpKSB7XHJcbiAgICAgICAgICBkYXRhID0gTG9jYWxTdG9yYWdlLmdldExvY2FsU3RvcmFnZShsb2NhbFN0b3JhZ2VLZXlzLmdvb2RzKSB8fCBkYXRhO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc29sZS5sb2coYXJ0aWN1bCk7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmNhcnQuZmluZEluZGV4KGVsZW0gPT4gZWxlbS5pZCA9PT0gYXJ0aWN1bCk7XHJcbiAgICAgICAgaWYoaW5kZXggPj0gMCkge1xyXG4gICAgICAgICAgdGhpcy50b3RhbEl0ZW1zLS07XHJcbiAgICAgICAgICB0aGlzLmNhcnRbaW5kZXhdWydpbkNhcnQnXS0tO1xyXG4gICAgICAgICAgZGF0YVthcnRpY3VsXVsnY291bnQnXSsrO1xyXG4gICAgICAgICAgZGF0YVthcnRpY3VsXVsnaW5DYXJ0J10tLTtcclxuICAgICAgICAgIHRoaXMuY2FydFtpbmRleF1bJ2NvdW50J10rKztcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdjYXJ0IENvdW50ICcsdGhpcy5jYXJ0W2luZGV4XVsnY291bnQnXSlcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdkYXRhIGNvdW50ICcsZGF0YVthcnRpY3VsXVsnY291bnQnXSlcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdjYXJ0IGluQ2FydCAnLHRoaXMuY2FydFtpbmRleF1bJ2luQ2FydCddKVxyXG4gICAgICAgICAgY29uc29sZS5sb2coJ2RhdGEgaW5DYXJ0ICcsZGF0YVthcnRpY3VsXVsnaW5DYXJ0J10pXHJcbiAgICAgICAgXHJcbiAgICAgICAgfSBcclxuICAgICAgICBMb2NhbFN0b3JhZ2Uuc2V0TG9jYWxTdG9yYWdlKGxvY2FsU3RvcmFnZUtleXMuY2FydCwgdGhpcy5jYXJ0KVxyXG4gICAgICAgIExvY2FsU3RvcmFnZS5zZXRMb2NhbFN0b3JhZ2UobG9jYWxTdG9yYWdlS2V5cy5nb29kcywgZGF0YSlcclxuICAgICAgICBMb2NhbFN0b3JhZ2Uuc2V0TG9jYWxTdG9yYWdlKGxvY2FsU3RvcmFnZUtleXMudG90YWxJdGVtc0luQ2FydCwgdGhpcy50b3RhbEl0ZW1zKVxyXG4gICAgICBcclxuICAgICAgfVxyXG5cclxuICAgICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMuY2FydCA9IExvY2FsU3RvcmFnZS5nZXRMb2NhbFN0b3JhZ2UobG9jYWxTdG9yYWdlS2V5cy5jYXJ0KSB8fCBbXTtcclxuICAgICAgICBjb25zdCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuICAgICAgICBjb25zdCBjYXJ0SXRlbXNUZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhcnRJdGVtc1RlbXAnKSBhcyBIVE1MVGVtcGxhdGVFbGVtZW50O1xyXG4gICAgICAgIGNvbnN0IGJhZGdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcnRfX3Byb2R1Y3RzJyk7XHJcbiAgICAgICAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FydC1wb3B1cCcpO1xyXG4gICAgICAgIGxldCB0b3RhbFN1bSA9IDA7XHJcbiAgICAgICAgdGhpcy5jYXJ0LmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBjYXJ0SXRlbSA9IGNhcnRJdGVtc1RlbXAuY29udGVudC5jbG9uZU5vZGUodHJ1ZSkgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgICAoY2FydEl0ZW0ucXVlcnlTZWxlY3RvcignLmNhcnQtaXRlbV9fbmFtZScpKSEudGV4dENvbnRlbnQgPSBpdGVtLm5hbWU7XHJcbiAgICAgICAgICAoY2FydEl0ZW0ucXVlcnlTZWxlY3RvcignLmNhcnRfX2lucHV0JykpIS50ZXh0Q29udGVudCA9IGl0ZW0uaW5DYXJ0LnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICBjb25zdCBpdGVtc1ByaWNlID0gK2l0ZW0ucHJpY2UgKiBpdGVtLmluQ2FydDtcclxuICAgICAgICAgIHRvdGFsU3VtICs9IGl0ZW1zUHJpY2U7XHJcbiAgICAgICAgICAoY2FydEl0ZW0ucXVlcnlTZWxlY3RvcignLmNhcnQtaXRlbV9fcHJpY2UnKSkhLnRleHRDb250ZW50ID0gYCR7aXRlbXNQcmljZX1gO1xyXG4gICAgICAgICAgKGNhcnRJdGVtLnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0X19hZGQnKSkhLnNldEF0dHJpYnV0ZSgnZGF0YS1hcnRpY3VsJywgYCR7aXRlbS5pZH1gKTtcclxuICAgICAgICAgICAgaWYoaXRlbS5jb3VudCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgIChjYXJ0SXRlbS5xdWVyeVNlbGVjdG9yKCcuY2FydF9fYWRkJykgYXMgSFRNTEVsZW1lbnQpIS5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgIChjYXJ0SXRlbS5xdWVyeVNlbGVjdG9yKCcuY2FydF9fYWRkJykgYXMgSFRNTEVsZW1lbnQpIS5zdHlsZS5vcGFjaXR5ID0gJzAuNSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIChjYXJ0SXRlbS5xdWVyeVNlbGVjdG9yKCcuY2FydF9fcmVtb3ZlJykpIS5zZXRBdHRyaWJ1dGUoJ2RhdGEtYXJ0aWN1bCcsIGAke2l0ZW0uaWR9YCk7XHJcblxyXG4gICAgICAgICAgICBpZihpdGVtLmluQ2FydCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgIChjYXJ0SXRlbS5xdWVyeVNlbGVjdG9yKCcuY2FydF9fcmVtb3ZlJykgYXMgSFRNTEVsZW1lbnQpIS5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgIChjYXJ0SXRlbS5xdWVyeVNlbGVjdG9yKCcuY2FydF9fcmVtb3ZlJykgYXMgSFRNTEVsZW1lbnQpIS5zdHlsZS5vcGFjaXR5ID0gJzAuNSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0X190b3RhbCcpIS50ZXh0Q29udGVudCA9IGAke3RvdGFsU3VtfWBcclxuICAgICAgICBcclxuICAgICAgICAgIGZyYWdtZW50LmFwcGVuZChjYXJ0SXRlbSk7XHJcbiAgICAgICAgfSkgIFxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0X19wcm9kdWN0cycpIS50ZXh0Q29udGVudCA9IGAke3RoaXMudG90YWxJdGVtc31gXHJcbiAgXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcnQtcG9wdXBfX2NvbnRhaW5lcicpIS5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FydC1wb3B1cF9fY29udGFpbmVyJykhLmFwcGVuZENoaWxkKGZyYWdtZW50KTtcclxuICAgICAgfVxyXG4gICAgICBjYXJ0T3BlbigpIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FydC1wb3B1cCcpIS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheScpIS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgfVxyXG4gICAgICBjYXJ0Q2xvc2UoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcnQtcG9wdXAnKSEuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXknKSEuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQge0RlZmF1bHRGaWx0ZXJzLCAgV2luZURldGFpbHMgfSBmcm9tIFwiLi4vLi4vdHlwZXMvaW50ZXJmYWNlc1wiO1xyXG5pbXBvcnQgeyBMb2NhbFN0b3JhZ2UsIGxvY2FsU3RvcmFnZUtleXMgfSBmcm9tIFwiLi4vLi4vdXRpbHMvbG9jYWxzdG9yYWdlXCI7XHJcbmltcG9ydCAnLi9maWx0ZXJzLmNzcyc7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbHRlclNldHRpbmdzIHtcclxuICBmaWx0ZXJlZDogV2luZURldGFpbHNbXTtcclxuICBmaWx0ZXJBcnI6IFdpbmVEZXRhaWxzW107XHJcbiAgZmlsdGVyc09iaiA6IERlZmF1bHRGaWx0ZXJzO1xyXG4gIHNvcnRlZDogV2luZURldGFpbHNbXTtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuZmlsdGVyZWQgPSBbXTtcclxuICAgIHRoaXMuZmlsdGVyQXJyID0gW107XHJcbiAgICB0aGlzLnNvcnRlZCA9IFtdO1xyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmaWx0ZXInKSkge1xyXG4gICAgICB0aGlzLmZpbHRlcnNPYmogPSBMb2NhbFN0b3JhZ2UuZ2V0TG9jYWxTdG9yYWdlKGxvY2FsU3RvcmFnZUtleXMuZmlsdGVyKSB8fCAnJztcclxuICAgIH07XHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ZpbHRlckFycicpKSB7XHJcbiAgICAgIHRoaXMuZmlsdGVyQXJyID0gTG9jYWxTdG9yYWdlLmdldExvY2FsU3RvcmFnZShsb2NhbFN0b3JhZ2VLZXlzLmZpbHRlckFycikgfHwgJyc7XHJcbiAgICB9O1xyXG4gICAgdGhpcy5maWx0ZXJzT2JqID0ge1xyXG4gICAgICBjb2xvcjogW10sXHJcbiAgICAgIGNvdW50cnk6IFtdLFxyXG4gICAgICB5ZWFyOiBbXSxcclxuICAgICAgcHJpY2U6IFtdLFxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBmaWx0ZXJCeUNvdW50cnkoZGF0YTogV2luZURldGFpbHNbXSkge1xyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzb3J0ZWQnKSkge1xyXG4gICAgICBkYXRhID0gTG9jYWxTdG9yYWdlLmdldExvY2FsU3RvcmFnZShsb2NhbFN0b3JhZ2VLZXlzLnNvcnRlZCkgfHwgZGF0YTtcclxuICAgIH07XHJcbiAgIHRoaXMuZmlsdGVyZWQgPSBbXTtcclxuICBcclxuICBjb25zdCBmaWx0ZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZpbHRlcnMnKTtcclxuICB0aGlzLmZpbHRlcnNPYmouY291bnRyeSA9IFsuLi5maWx0ZXJzIS5xdWVyeVNlbGVjdG9yQWxsKCcjY291bnRyeSBpbnB1dDpjaGVja2VkJyldLm1hcChpdGVtID0+IChpdGVtIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlKTtcclxuICBjb25zb2xlLmxvZyh0aGlzLmZpbHRlcnNPYmouY291bnRyeSk7XHJcbiAgZGF0YS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgIGlmKHRoaXMuZmlsdGVyc09iai5jb3VudHJ5LmluY2x1ZGVzKGl0ZW0uY291bnRyeSkpe1xyXG4gICAgICB0aGlzLmZpbHRlcmVkLnB1c2goaXRlbSlcclxuICAgICAgY29uc29sZS5sb2codGhpcy5maWx0ZXJlZClcclxuICAgICB9XHJcbiAgfSlcclxuICBMb2NhbFN0b3JhZ2Uuc2V0TG9jYWxTdG9yYWdlKGxvY2FsU3RvcmFnZUtleXMuZmlsdGVyLCB0aGlzLmZpbHRlcnNPYmopXHJcbiAgTG9jYWxTdG9yYWdlLnNldExvY2FsU3RvcmFnZShsb2NhbFN0b3JhZ2VLZXlzLmZpbHRlckFyciwgdGhpcy5maWx0ZXJlZClcclxufVxyXG5cclxuZmlsdGVyQnlDb2xvcihkYXRhOiBXaW5lRGV0YWlsc1tdKSB7XHJcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzb3J0ZWQnKSkge1xyXG4gICAgZGF0YSA9IExvY2FsU3RvcmFnZS5nZXRMb2NhbFN0b3JhZ2UobG9jYWxTdG9yYWdlS2V5cy5zb3J0ZWQpIHx8IGRhdGE7XHJcbiAgfTtcclxuIFxyXG4gICB0aGlzLmZpbHRlcmVkID0gW107XHJcbiAgY29uc3QgZmlsdGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmaWx0ZXJzJyk7XHJcbiAgdGhpcy5maWx0ZXJzT2JqLmNvbG9yID0gWy4uLmZpbHRlcnMhLnF1ZXJ5U2VsZWN0b3JBbGwoJyNjb2xvciBpbnB1dDpjaGVja2VkJyldLm1hcChpdGVtID0+IChpdGVtIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlKTtcclxuICBjb25zb2xlLmxvZyh0aGlzLmZpbHRlcnNPYmouY29sb3IpXHJcbiAgZGF0YS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gIGlmKHRoaXMuZmlsdGVyc09iai5jb2xvci5pbmNsdWRlcyhpdGVtLmNvbG9yKSl7XHJcbiAgICB0aGlzLmZpbHRlcmVkLnB1c2goaXRlbSlcclxuICB9XHJcbn0pXHJcbkxvY2FsU3RvcmFnZS5zZXRMb2NhbFN0b3JhZ2UobG9jYWxTdG9yYWdlS2V5cy5maWx0ZXIsIHRoaXMuZmlsdGVyc09iailcclxuTG9jYWxTdG9yYWdlLnNldExvY2FsU3RvcmFnZShsb2NhbFN0b3JhZ2VLZXlzLmZpbHRlckFyciwgdGhpcy5maWx0ZXJlZClcclxufVxyXG5cclxucmVzZXRGaWx0ZXJzKCkge1xyXG50aGlzLmZpbHRlcnNPYmouY29sb3IgPSBbXTtcclxudGhpcy5maWx0ZXJzT2JqLmNvdW50cnkgPSBbXTtcclxuY29uc3QgZmlsdGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmaWx0ZXJzJyk7XHJcblsuLi5maWx0ZXJzIS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dDpjaGVja2VkJyldLm1hcChpdGVtID0+IChpdGVtIGFzIEhUTUxJbnB1dEVsZW1lbnQpLmNoZWNrZWQgPSBmYWxzZSk7XHJcbkxvY2FsU3RvcmFnZS5zZXRMb2NhbFN0b3JhZ2UobG9jYWxTdG9yYWdlS2V5cy5maWx0ZXJBcnIsIHRoaXMuZmlsdGVyQXJyKTtcclxuTG9jYWxTdG9yYWdlLnNldExvY2FsU3RvcmFnZShsb2NhbFN0b3JhZ2VLZXlzLmZpbHRlciwgdGhpcy5maWx0ZXJzT2JqKTtcclxuXHJcbn1cclxuXHJcbnJlc2V0QWxsKCkge1xyXG4gICBsb2NhbFN0b3JhZ2UuY2xlYXIoKVxyXG59XHJcblxyXG5zb3J0UHJpY2VVcChkYXRhOiBXaW5lRGV0YWlsc1tdKXtcclxuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NvcnRlZCcpKSB7XHJcbiAgICBkYXRhID0gTG9jYWxTdG9yYWdlLmdldExvY2FsU3RvcmFnZShsb2NhbFN0b3JhZ2VLZXlzLnNvcnRlZCkgfHwgZGF0YTtcclxuICB9O1xyXG4gIHRoaXMuc29ydGVkID0gZGF0YS5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICByZXR1cm4gK2EucHJpY2UgLSArYi5wcmljZTtcclxuICB9KVxyXG4gIGNvbnNvbGUubG9nKHRoaXMuc29ydGVkKTtcclxuICBMb2NhbFN0b3JhZ2Uuc2V0TG9jYWxTdG9yYWdlKGxvY2FsU3RvcmFnZUtleXMuc29ydGVkLCB0aGlzLnNvcnRlZClcclxufVxyXG5zb3J0UHJpY2VEb3duKGRhdGE6IFdpbmVEZXRhaWxzW10pe1xyXG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc29ydGVkJykpIHtcclxuICAgIGRhdGEgPSBMb2NhbFN0b3JhZ2UuZ2V0TG9jYWxTdG9yYWdlKGxvY2FsU3RvcmFnZUtleXMuc29ydGVkKSB8fCBkYXRhO1xyXG4gIH07XHJcbiAgdGhpcy5zb3J0ZWQgPSBkYXRhLnNvcnQoKGEsIGIpID0+IHtcclxuICAgIHJldHVybiArYi5wcmljZSAtICthLnByaWNlO1xyXG4gIH0pXHJcbiAgY29uc29sZS5sb2codGhpcy5zb3J0ZWQpO1xyXG4gIExvY2FsU3RvcmFnZS5zZXRMb2NhbFN0b3JhZ2UobG9jYWxTdG9yYWdlS2V5cy5zb3J0ZWQsIHRoaXMuc29ydGVkKVxyXG59XHJcblxyXG59XHJcbiIsImltcG9ydCAnLi93aW5lY2FyZHMuY3NzJztcclxuaW1wb3J0IHsgV2luZSwgV2luZURldGFpbHMgfSBmcm9tICcuLi8uLi90eXBlcy9pbnRlcmZhY2VzJ1xyXG5pbXBvcnQgeyBMb2NhbFN0b3JhZ2UsIGxvY2FsU3RvcmFnZUtleXMgfSBmcm9tICcuLi8uLi91dGlscy9sb2NhbHN0b3JhZ2UnO1xyXG5cclxuY2xhc3MgV2luZUNhcmRzIHtcclxuICByZW5kZXIoZGF0YTogV2luZURldGFpbHNbXSkge1xyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdnb29kcycpKSB7XHJcbiAgICAgIGRhdGEgPSBMb2NhbFN0b3JhZ2UuZ2V0TG9jYWxTdG9yYWdlKGxvY2FsU3RvcmFnZUtleXMuZ29vZHMpIHx8IGRhdGE7XHJcbiAgICB9O1xyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzb3J0ZWQnKSkge1xyXG4gICAgICBkYXRhID0gTG9jYWxTdG9yYWdlLmdldExvY2FsU3RvcmFnZShsb2NhbFN0b3JhZ2VLZXlzLnNvcnRlZCkgfHwgZGF0YTtcclxuICAgIH07XHJcbiAgICBjb25zdCB3aW5lcyA9IGRhdGE7XHJcbiAgICBjb25zdCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuICAgIGNvbnN0IHdpbmVDYXJkVGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3aW5lY2FyZHNJdGVtVGVtcCcpIGFzIEhUTUxUZW1wbGF0ZUVsZW1lbnQ7XHJcbiAgICB3aW5lcy5mb3JFYWNoKChpdGVtIDogV2luZURldGFpbHMsIGlkeCA6IG51bWJlcikgPT4ge1xyXG4gICAgICBjb25zdCB3aW5lQ2FyZCA9IHdpbmVDYXJkVGVtcC5jb250ZW50LmNsb25lTm9kZSh0cnVlKSBhcyBIVE1MRWxlbWVudDtcclxuXHJcbiAgICAgICh3aW5lQ2FyZC5xdWVyeVNlbGVjdG9yKCcud2luZWNhcmRzX19mYWNlLXBob3RvJykgYXMgSFRNTEVsZW1lbnQpIS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7aXRlbS5pbWFnZX0pYDtcclxuICAgICAgKHdpbmVDYXJkLnF1ZXJ5U2VsZWN0b3IoJy53aW5lY2FyZHNfX2ZhY2UtbmFtZScpKSEudGV4dENvbnRlbnQgPSBpdGVtLm5hbWU7XHJcbiAgICAgICh3aW5lQ2FyZC5xdWVyeVNlbGVjdG9yKCcud2luZWNhcmRzX19mYWNlLWNvdW50JykpIS50ZXh0Q29udGVudCA9IGDQkiDQvdCw0LvQuNGH0LjQuCA6ICR7aXRlbS5jb3VudH1gO1xyXG4gICAgICAod2luZUNhcmQucXVlcnlTZWxlY3RvcignLndpbmVjYXJkc19fZmFjZS1wcmljZScpKSEudGV4dENvbnRlbnQgPSBgJHtpdGVtLnByaWNlfSBCWU5gO1xyXG4gICAgICAod2luZUNhcmQucXVlcnlTZWxlY3RvcignLndpbmVjYXJkc19fYmFjay1uYW1lJykpIS50ZXh0Q29udGVudCA9IGl0ZW0ubmFtZTtcclxuICAgICAgKHdpbmVDYXJkLnF1ZXJ5U2VsZWN0b3IoJy53aW5lY2FyZHNfX2JhY2stbWFkZUJ5JykpIS50ZXh0Q29udGVudCA9IGDQn9GA0L7QuNC30LLQvtC00LjRgtC10LvRjCA6ICR7aXRlbS5tYWRlQnl9YDtcclxuICAgICAgKHdpbmVDYXJkLnF1ZXJ5U2VsZWN0b3IoJy53aW5lY2FyZHNfX2JhY2stY291bnRyeScpKSEudGV4dENvbnRlbnQgPSBg0KHRgtGA0LDQvdCwIDogJHtpdGVtLmNvdW50cnl9YDtcclxuICAgICAgKHdpbmVDYXJkLnF1ZXJ5U2VsZWN0b3IoJy53aW5lY2FyZHNfX2JhY2steWVhcicpKSEudGV4dENvbnRlbnQgPSBg0JPQvtC0IDogJHtpdGVtLnllYXJ9YDtcclxuICAgICAgKHdpbmVDYXJkLnF1ZXJ5U2VsZWN0b3IoJy53aW5lY2FyZHNfX2JhY2stY29sb3InKSkhLnRleHRDb250ZW50ID0gYNCm0LLQtdGCIDogJHtpdGVtLmNvbG9yfWA7XHJcbiAgICAgICh3aW5lQ2FyZC5xdWVyeVNlbGVjdG9yKCcud2luZWNhcmRzX19iYWNrLWFsY29ob2wnKSkhLnRleHRDb250ZW50ID0gYNCa0YDQtdC/0L7RgdGC0YwgOiAke2l0ZW0uYWxjb2hvbH0lYDtcclxuICAgICAgKHdpbmVDYXJkLnF1ZXJ5U2VsZWN0b3IoJy53aW5lY2FyZHNfX2JhY2stdm9sJykpIS50ZXh0Q29udGVudCA9IGDQntCx0YrQtdC8IDogJHtpdGVtLnZvbH3Qu2A7XHJcblxyXG5cclxuICAgICAgaWYgKCFpdGVtLmluU3RvY2sgfHwgaXRlbS5jb3VudCA9PT0gMCkge1xyXG4gICAgICAgICh3aW5lQ2FyZC5xdWVyeVNlbGVjdG9yKCcud2luZWNhcmRzX19pdGVtJykgYXMgSFRNTEVsZW1lbnQpIS5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xyXG4gICAgICAgICh3aW5lQ2FyZC5xdWVyeVNlbGVjdG9yKCcud2luZWNhcmRzX19pdGVtJykgYXMgSFRNTEVsZW1lbnQpIS5zdHlsZS5vcGFjaXR5ID0gJzAuNSc7XHJcbiAgICAgICAgKHdpbmVDYXJkLnF1ZXJ5U2VsZWN0b3IoJy53aW5lY2FyZHNfX2ZhY2UtY291bnQnKSkhLnRleHRDb250ZW50ID0gJ9Cd0LXRgiDQsiDQvdCw0LvQuNGH0LjQuCc7XHJcbiAgICAgICAgKHdpbmVDYXJkLnF1ZXJ5U2VsZWN0b3IoJy53aW5lY2FyZHNfX2ZhY2UtcHJpY2UnKSkhLnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKGl0ZW0uaW5DYXJ0ID4gMCkge1xyXG4gICAgICAgICh3aW5lQ2FyZC5xdWVyeVNlbGVjdG9yKCcud2luZWNhcmRzX19pdGVtJykgYXMgSFRNTEVsZW1lbnQpIS5jbGFzc0xpc3QuYWRkKCdpbkNhcnQnKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNle1xyXG4gICAgICAgICh3aW5lQ2FyZC5xdWVyeVNlbGVjdG9yKCcud2luZWNhcmRzX19pdGVtJykgYXMgSFRNTEVsZW1lbnQpIS5jbGFzc0xpc3QucmVtb3ZlKCdpbkNhcnQnKTtcclxuXHJcbiAgICAgIH1cclxuICAgICAgKHdpbmVDYXJkLnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0X19hZGQnKSkhLnNldEF0dHJpYnV0ZSgnZGF0YS1hcnRpY3VsJywgYCR7aWR4fWApXHJcbiAgICAgIGZyYWdtZW50LmFwcGVuZCh3aW5lQ2FyZCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbmVjYXJkcy1jb250YWluZXInKSkhLmlubmVySFRNTCA9ICcnO1xyXG4gICAgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5lY2FyZHMtY29udGFpbmVyJykpIS5hcHBlbmRDaGlsZChmcmFnbWVudCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXaW5lQ2FyZHM7IiwiZXhwb3J0ICBjb25zdCBnb29kcyA9IFtcbiAge1xuICAgIGlkOiAwLFxuICAgIG5hbWU6IFwiTmF0aW9uYWwgVmludGFnZSBQb3J0XCIsXG4gICAgbWFkZUJ5OiBcIlF1aW50YSBkbyBOb3ZhbFwiLFxuICAgIGNvdW50cnk6IFwi0J/QvtGA0YLRg9Cz0LDQu9C40Y9cIixcbiAgICB5ZWFyOiBcIjIwMTFcIixcbiAgICBhbGNvaG9sOiBcIjE5XCIsXG4gICAgdm9sOiBcIjAuNzVcIixcbiAgICBwcmljZTogXCIxMzgzMlwiLFxuICAgIGNvbG9yOiBcInJlZFwiLFxuICAgIGltYWdlOiAnLi9hc3NldHMvaW1nL3BvcnR2ZXluLXF1aW50YS1kby1ub3ZhbC1uYWNpb25hbC12aW50YWdlLXBvcnQtMjAxMS5wbmcnLFxuICAgIGNvdW50OiA1LFxuICAgIGluU3RvY2s6IHRydWUsXG4gICAgaW5DYXJ0OiAwLFxuICB9LFxuICB7XG4gICAgaWQ6IDEsXG4gICAgbmFtZTogXCJCbGF1ZnJhbmtpc2NoIENsYXNzaWNcIixcbiAgICBtYWRlQnk6IFwiSGFucyBJZ2xlclwiLFxuICAgIGNvdW50cnk6IFwi0JDQstGB0YLRgNC40Y9cIixcbiAgICB5ZWFyOiBcIjIwMTlcIixcbiAgICBhbGNvaG9sOiBcIjEzXCIsXG4gICAgdm9sOiBcIjAuNzVcIixcbiAgICBwcmljZTogJzE3NCcsXG4gICAgY29sb3I6ICdyZWQnLFxuICAgIGltYWdlOiAnLi9hc3NldHMvaW1nL2JsYXVmcmFua2lzY2gtY2xhc3NpYy5wbmcnLFxuICAgIGNvdW50OiA1LFxuICAgIGluU3RvY2s6IHRydWUsXG4gICAgaW5DYXJ0OiAwLFxuICB9LFxuICB7XG4gICAgaWQ6IDIsXG4gICAgbmFtZTogXCJSaGVpbmdhdSBSaWVzbGluZyBUcm9ja2VuXCIsXG4gICAgbWFkZUJ5OiBcIlJvYmVydCBXZWlsXCIsXG4gICAgY291bnRyeTogXCLQk9C10YDQvNCw0L3QuNGPXCIsXG4gICAgeWVhcjogXCIyMDE5XCIsXG4gICAgYWxjb2hvbDogXCIxMlwiLFxuICAgIHZvbDogXCIwLjc1XCIsXG4gICAgcHJpY2U6ICcyMDQnLFxuICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgIGltYWdlOiAnLi9hc3NldHMvaW1nL3JoZWluZ2F1LXJpZXNsaW5nLXRyb2NrZW4ucG5nJyxcbiAgICBjb3VudDogNSxcbiAgICBpblN0b2NrOiB0cnVlLFxuICAgIGluQ2FydDogMCxcbiAgfSxcbiAge1xuICAgIGlkOiAzLFxuICAgIG5hbWU6IFwiTWFsbGVvdXMgZGUgU2FuY2hvbWFydGluXCIsXG4gICAgbWFkZUJ5OiBcIkVtaWxpbyBNb3JvXCIsXG4gICAgY291bnRyeTogXCLQmNGB0L/QsNC90LjRj1wiLFxuICAgIHllYXI6IFwiMjAxOFwiLFxuICAgIGFsY29ob2w6IFwiMTRcIixcbiAgICB2b2w6IFwiMC43NVwiLFxuICAgIHByaWNlOiAnMTMwNycsXG4gICAgY29sb3I6ICdyZWQnLFxuICAgIGltYWdlOiAnLi9hc3NldHMvaW1nL21hbGxlb3VzLWRlLXNhbmNob21hcnRpbi5wbmcnLFxuICAgIGNvdW50OiA1LFxuICAgIGluU3RvY2s6IHRydWUsXG4gICAgaW5DYXJ0OiAwLFxuICB9LFxuICB7XG4gICAgaWQ6IDQsXG4gICAgbmFtZTogXCJHYXZpIGRlaSBHYXZpIChFdGljaGV0dGEgTmVyYSlcIixcbiAgICBtYWRlQnk6IFwibGEgU2NvbGNhXCIsXG4gICAgY291bnRyeTogXCLQmNGC0LDQu9C40Y9cIixcbiAgICB5ZWFyOiBcIjIwMjBcIixcbiAgICBhbGNvaG9sOiBcIjEyXCIsXG4gICAgdm9sOiBcIjAuNzVcIixcbiAgICBwcmljZTogJzMyNicsXG4gICAgY29sb3I6ICd3aGl0ZScsXG4gICAgaW1hZ2U6ICcuL2Fzc2V0cy9pbWcvZ2F2aS1kZWktZ2F2aS5wbmcnLFxuICAgIGNvdW50OiA1LFxuICAgIGluU3RvY2s6IHRydWUsXG4gICAgaW5DYXJ0OiAwLFxuICB9LFxuICB7XG4gICAgaWQ6IDUsXG4gICAgbmFtZTogXCJDaGFybHkgRHVkZXNcIixcbiAgICBtYWRlQnk6IFwiVHdvIEhhbmRzXCIsXG4gICAgY291bnRyeTogXCLQkNCy0YHRgtGA0LDQu9C40Y9cIixcbiAgICB5ZWFyOiBcIjIwMjBcIixcbiAgICBhbGNvaG9sOiBcIjE0XCIsXG4gICAgdm9sOiBcIjEuNVwiLFxuICAgIHByaWNlOiAnNDM1JyxcbiAgICBjb2xvcjogJ3JlZCcsXG4gICAgaW1hZ2U6IFwiLi9hc3NldHMvaW1nL2NoYXJsZXktZHVkZXMucG5nXCIsXG4gICAgY291bnQ6IDUsXG4gICAgaW5TdG9jazogdHJ1ZSxcbiAgICBpbkNhcnQ6IDAsXG4gIH0sXG4gIHtcbiAgICBpZDogNixcbiAgICBuYW1lOiBcIlJpY2hlYm91cmcgR3JhbmcgR3J1XCIsXG4gICAgbWFkZUJ5OiBcIkRvbWFpbmUgSmVhbiBHcml2b3RcIixcbiAgICBjb3VudHJ5OiBcItCk0YDQsNC90YbQuNGPXCIsXG4gICAgeWVhcjogXCIyMDE1XCIsXG4gICAgYWxjb2hvbDogXCIxM1wiLFxuICAgIHZvbDogXCIwLjc1XCIsXG4gICAgcHJpY2U6ICcxNjc3OCcsXG4gICAgY29sb3I6ICdyZWQnLFxuICAgIGltYWdlOiAnLi9hc3NldHMvaW1nL3JpY2hlYm91cmctZ3JhbmQtZ3J1LnBuZycsXG4gICAgY291bnQ6IDUsXG4gICAgaW5TdG9jazogdHJ1ZSxcbiAgICBpbkNhcnQ6IDAsXG4gIH0sXG4gIHtcbiAgICBpZDogNyxcbiAgICBuYW1lOiBcIkNoYWJsaXMgVmllaWxsZXMgVmlnaGVzIDE5NDZcIixcbiAgICBtYWRlQnk6IFwiSmVhbi1NYXJjIEJyb2NhcmQgKERvbWFpbmUgU2FpbnRlLUNsYWlyZSlcIixcbiAgICBjb3VudHJ5OiBcItCk0YDQsNC90YbQuNGPXCIsXG4gICAgeWVhcjogXCIyMDE4XCIsXG4gICAgYWxjb2hvbDogXCIxM1wiLFxuICAgIHZvbDogXCIwLjc1XCIsXG4gICAgcHJpY2U6ICczMTMnLFxuICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgIGltYWdlOiAnLi9hc3NldHMvaW1nL2NoYWJsaXMtdmllaWxsZXMtdmlnaGVzLTE5NDYucG5nJyxcbiAgICBjb3VudDogNSxcbiAgICBpblN0b2NrOiB0cnVlLFxuICAgIGluQ2FydDogMCxcbiAgfSxcbiAge1xuICAgIGlkOiA4LFxuICAgIG5hbWU6IFwiNTB4NTBcIixcbiAgICBtYWRlQnk6IFwiQ2FwYW5uZWxsZVwiLFxuICAgIGNvdW50cnk6IFwi0JjRgtCw0LvQuNGPXCIsXG4gICAgeWVhcjogXCIyMDE1XCIsXG4gICAgYWxjb2hvbDogXCIxM1wiLFxuICAgIHZvbDogXCIwLjc1XCIsXG4gICAgcHJpY2U6ICcyNTA1JyxcbiAgICBjb2xvcjogJ3JlZCcsXG4gICAgaW1hZ2U6ICcuL2Fzc2V0cy9pbWcvNTB4NTAucG5nJyxcbiAgICBjb3VudDogNSxcbiAgICBpblN0b2NrOiB0cnVlLFxuICAgIGluQ2FydDogMCxcbiAgfSxcbiAge1xuICAgIGlkOiA5LFxuICAgIG5hbWU6IFwiUGVuZm9sZHMgR3JhbmdlXCIsXG4gICAgbWFkZUJ5OiBcIlBlbmZvbGRzXCIsXG4gICAgY291bnRyeTogXCLQkNCy0YHRgtGA0LDQu9C40Y9cIixcbiAgICB5ZWFyOiBcIjIwMTZcIixcbiAgICBhbGNvaG9sOiBcIjE0XCIsXG4gICAgdm9sOiBcIjAuNzVcIixcbiAgICBwcmljZTogJzg3MScsXG4gICAgY29sb3I6ICdyZWQnLFxuICAgIGltYWdlOiAnLi9hc3NldHMvaW1nL3BlbmZvbGRzLWdyYW5nZS5wbmcnLFxuICAgIGNvdW50OiA1LFxuICAgIGluU3RvY2s6IHRydWUsXG4gICAgaW5DYXJ0OiAwLFxuICB9LFxuICB7XG4gICAgaWQ6IDEwLFxuICAgIG5hbWU6IFwiUGVuZm9sZHMgQmluIDM4OSBDYWJlcm5ldCBTaGlyYXpcIixcbiAgICBtYWRlQnk6IFwiUGVuZm9sZHNcIixcbiAgICBjb3VudHJ5OiBcItCQ0LLRgdGC0YDQsNC70LjRj1wiLFxuICAgIHllYXI6IFwiMjAxOVwiLFxuICAgIGFsY29ob2w6IFwiMTRcIixcbiAgICB2b2w6IFwiMC43NVwiLFxuICAgIHByaWNlOiAnODcxJyxcbiAgICBjb2xvcjogJ3JlZCcsXG4gICAgaW1hZ2U6ICcuL2Fzc2V0cy9pbWcvcGVuZm9sZHMtYmluLTM4OS1jYWJlcm5ldC1zaGlyYXoucG5nJyxcbiAgICBjb3VudDogNSxcbiAgICBpblN0b2NrOiB0cnVlLFxuICAgIGluQ2FydDogMCxcbiAgfSxcbiAge1xuICAgIGlkOiAxMSxcbiAgICBuYW1lOiBcIkt1cm5pXCIsXG4gICAgbWFkZUJ5OiBcIk9hc2kgZGVnbGkgQW5nZWxpXCIsXG4gICAgY291bnRyeTogXCLQmNGC0LDQu9C40Y9cIixcbiAgICB5ZWFyOiBcIjIwMThcIixcbiAgICBhbGNvaG9sOiBcIjE0XCIsXG4gICAgdm9sOiBcIjEuNVwiLFxuICAgIHByaWNlOiAnMTc0MicsXG4gICAgY29sb3I6ICdyZWQnLFxuICAgIGltYWdlOiAnLi9hc3NldHMvaW1nL2t1cm5pLnBuZycsXG4gICAgY291bnQ6IDUsXG4gICAgaW5TdG9jazogZmFsc2UsXG4gICAgaW5DYXJ0OiAwLFxuICB9LFxuXSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcnRQb3B1cCB7XG4gIHN0YXRpYyBjYXJ0UG9wdXAgPSBgXG4gIDxzcGFuIGNsYXNzPVwiY2xvc2UtcG9wdXBcIj5YPC9zcGFuPlxuICA8ZGl2IGNsYXNzPVwiY2FydC1wb3B1cF9fY29udGFpbmVyXCI+PC9kaXY+XG4gIDxwIGNsYXNzPVwiY2FydF9fdG90YWxcIj48L3A+XG4gIGA7XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FydCB7XG4gIHN0YXRpYyBjYXJ0ID0gYFxuICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiY2FydF9fbm90aWZpY2F0aW9uXCI+XG4gICAgPHNwYW4gY2xhc3M9XCJjYXJ0X19wcm9kdWN0c1wiPjA8L3NwYW4+XG4gIDwvYT5cbiAgYDtcbn0iLCJjbGFzcyBGaWx0ZXJzIHtcclxuICBzdGF0aWMgZmlsdGVycyA9IGBcclxuICA8Zm9ybSBhY3Rpb249XCIjXCIgY2xhc3M9XCJmaWx0ZXJzLWZvcm1cIj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwiZmlsdGVycy1jb250YWluZXJcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvdW50cnktZmlsdGVyXCI+XHJcbiAgICAgICAgPGg0IGNsYXNzPVwiZmlsdGVyLW5hbWVcIj7QodGC0YDQsNC90LA8L2g0PlxyXG4gICAgICAgIDxkaXYgaWQ9XCJjb3VudHJ5XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hlY2tib3hcIj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwiY2hlY2sxXCIgbmFtZT1cImNvdW50cnlcIiB2YWx1ZT1cItCQ0LLRgdGC0YDQsNC70LjRj1wiPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjaGVja2JveC1jb3VudHJ5XCJmb3I9XCJjaGVjazFcIj7QkNCy0YHRgtGA0LDQu9C40Y88L2xhYmVsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hlY2tib3hcIj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwiY2hlY2syXCIgbmFtZT1cImNvdW50cnlcIiB2YWx1ZT1cItCQ0LLRgdGC0YDQuNGPXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNoZWNrYm94LWNvdW50cnlcImZvcj1cImNoZWNrMlwiPtCQ0LLRgdGC0YDQuNGPPC9sYWJlbD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNoZWNrYm94XCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cImNoZWNrM1wiIG5hbWU9XCJjb3VudHJ5XCIgdmFsdWU9XCLQk9C10YDQvNCw0L3QuNGPXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNoZWNrYm94LWNvdW50cnlcImZvcj1cImNoZWNrM1wiPtCT0LXRgNC80LDQvdC40Y88L2xhYmVsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hlY2tib3hcIj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwiY2hlY2s0XCIgbmFtZT1cImNvdW50cnlcIiB2YWx1ZT1cItCY0YHQv9Cw0L3QuNGPXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNoZWNrYm94LWNvdW50cnlcImZvcj1cImNoZWNrNFwiPtCY0YHQv9Cw0L3QuNGPPC9sYWJlbD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNoZWNrYm94XCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cImNoZWNrNVwiIG5hbWU9XCJjb3VudHJ5XCIgdmFsdWU9XCLQmNGC0LDQu9C40Y9cIj5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY2hlY2tib3gtY291bnRyeVwiZm9yPVwiY2hlY2s1XCI+0JjRgtCw0LvQuNGPPC9sYWJlbD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNoZWNrYm94XCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cImNoZWNrNlwiIG5hbWU9XCJjb3VudHJ5XCIgdmFsdWU9XCLQn9C+0YDRgtGD0LPQsNC70LjRj1wiPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjaGVja2JveC1jb3VudHJ5XCJmb3I9XCJjaGVjazZcIj7Qn9C+0YDRgtGD0LPQsNC70LjRjzwvbGFiZWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGVja2JveFwiPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJjaGVjazdcIiBuYW1lPVwiY291bnRyeVwiIHZhbHVlPVwi0KTRgNCw0L3RhtC40Y9cIj5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY2hlY2tib3gtY291bnRyeVwiZm9yPVwiY2hlY2s3XCI+0KTRgNCw0L3RhtC40Y88L2xhYmVsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sb3ItZmlsdGVyXCI+XHJcbiAgICAgICAgPGg0IGNsYXNzPVwiZmlsdGVyLW5hbWVcIj7QptCy0LXRgjwvaDQ+XHJcbiAgICAgICAgPGRpdiBpZD1cImNvbG9yXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hlY2tib3hcIj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwiY2hlY2s4XCIgbmFtZT1cImNvbG9yXCIgdmFsdWU9XCJ3aGl0ZVwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjaGVja2JveC1jb2xvclwiZm9yPVwiY2hlY2s4XCI+0JHQtdC70L7QtTwvbGFiZWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGVja2JveFwiPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJjaGVjazlcIiBuYW1lPVwiY29sb3JcIiB2YWx1ZT1cInJlZFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjaGVja2JveC1jb2xvclwiZm9yPVwiY2hlY2s5XCI+0JrRgNCw0YHQvdC+0LU8L2xhYmVsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwic29ydC1jb250YWluZXJcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInNvcnRcIj5cclxuICAgICAgICA8aDQgY2xhc3M9XCJmaWx0ZXItbmFtZVwiPtCh0L7RgNGC0LjRgNC+0LLQutCwPC9oND5cclxuICAgICAgICA8c2VsZWN0IGNsYXNzPVwic2VsZWN0XCI+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkJ5UHJpY2VVcFwiPtCf0L4g0YbQtdC90LU6INC/0L4g0LLQvtC30YDQsNGB0YLQsNC90LjRjjwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJCeVByaWNlRG93blwiPtCf0L4g0YbQtdC90LU6INC/0L4g0YPQsdGL0LLQsNC90LjRjjwvb3B0aW9uPlxyXG4gICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgICBcclxuICAgIDxidXR0b24gY2xhc3M9XCJyZXNldC1maWx0ZXJzIGNsYXNzPVwiYnRuXCI+0KHQsdGA0L7RgdGC0Ywg0YTQuNC70YzRgtGA0Ys8L2J1dHRvbj5cclxuICAgIDxidXR0b24gY2xhc3M9XCJyZXNldC1maWx0ZXJzIHJlc2V0IGNsYXNzPVwiYnRuXCI+0J7Rh9C40YHRgtC40YLRjCDQuNGB0YLQvtGA0LjRjjwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9mb3JtPlxyXG5gO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJzOyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vLi4vdXRpbHMvY29tcG9uZW50JztcbmltcG9ydCBTZWFyY2hJbnB1dCBmcm9tICcuLi9zZWFyY2gvc2VhcmNoJztcbmltcG9ydCBDYXJ0IGZyb20gJy4uL2NhcnQvY2FydCdcbmltcG9ydCBDYXJ0UG9wdXAgZnJvbSAnLi4vY2FydC1wb3B1cC9jYXJ0LXBvcHVwJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcHJpdmF0ZSBjbGFzc05hbWU6IHN0cmluZztcbiAgcHJpdmF0ZSBzZWFyY2g6IENvbXBvbmVudDtcbiAgcHJpdmF0ZSBjYXJ0OiBDb21wb25lbnQ7XG4gIHByaXZhdGUgY2FydFBvcHVwOiBDb21wb25lbnQ7XG4gIGNvbnN0cnVjdG9yKHRhZ05hbWU6IHN0cmluZywgY2xhc3NOYW1lOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0YWdOYW1lLCBjbGFzc05hbWUpO1xuICAgIHRoaXMuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICAgIHRoaXMuc2VhcmNoID0gbmV3IENvbXBvbmVudCgnZGl2JywnaGVhZGVyX19zZWFyY2ggc2VhcmNoLWNvbnRhaW5lcicsJ3NlYXJjaC1pbnB1dCcpO1xuICAgIHRoaXMuY2FydCA9IG5ldyBDb21wb25lbnQoJ2RpdicsICdoZWFkZXJfX2NhcnQgY2FydCcsICdjYXJ0Jyk7XG4gICAgdGhpcy5jYXJ0UG9wdXAgPSBuZXcgQ29tcG9uZW50KCdkaXYnLCAnY2FydC1wb3B1cCcsICdjYXJ0LXBvcHVwJyk7XG4gIH1cbiAgICByZW5kZXJTZWFyY2goKSB7XG4gICAgICBjb25zdCBzZWFyY2hEaXY6IEhUTUxFbGVtZW50ID0gdGhpcy5zZWFyY2gucmVuZGVyKCk7XG4gICAgICBzZWFyY2hEaXYuaW5uZXJIVE1MID0gU2VhcmNoSW5wdXQuc2VhcmNoRm9ybTtcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZChzZWFyY2hEaXYpO1xuICAgIH1cblxuICAgIHJlbmRlckNhcnQoKSB7XG4gICAgICBjb25zdCBjYXJ0RGl2OiBIVE1MRWxlbWVudCA9IHRoaXMuY2FydC5yZW5kZXIoKTtcbiAgICAgIGNhcnREaXYuaW5uZXJIVE1MID0gQ2FydC5jYXJ0O1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kKGNhcnREaXYpO1xuICAgIH1cblxuICAgIHJlbmRlckNhcnRQb3B1cCgpIHtcbiAgICAgIGNvbnN0IGNhcnRQb3B1cERpdjogSFRNTEVsZW1lbnQgPSB0aGlzLmNhcnRQb3B1cC5yZW5kZXIoKTtcbiAgICAgIGNhcnRQb3B1cERpdi5pbm5lckhUTUwgPSBDYXJ0UG9wdXAuY2FydFBvcHVwO1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kKGNhcnRQb3B1cERpdik7XG4gICAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICB0aGlzLnJlbmRlclNlYXJjaCgpO1xuICAgICB0aGlzLnJlbmRlckNhcnQoKTtcbiAgICAgdGhpcy5yZW5kZXJDYXJ0UG9wdXAoKTtcbiAgICByZXR1cm4gdGhpcy5jb250YWluZXI7XG4gIH1cbn0iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uLy4uL3V0aWxzL2NvbXBvbmVudCc7XG5pbXBvcnQgV2luZWNhcmRzIGZyb20gJy4uL3dpbmVjYXJkcy93aW5lY2FyZHMnO1xuaW1wb3J0IEZpbHRlcnMgZnJvbSAnLi4vZmlsdGVycy9maWx0ZXJzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIHByaXZhdGUgY2xhc3NOYW1lOiBzdHJpbmc7XG4gIHByaXZhdGUgd2luZWNhcmRzOiBDb21wb25lbnQ7XG4gIHByaXZhdGUgZmlsdGVyczogQ29tcG9uZW50O1xuICBjb25zdHJ1Y3Rvcih0YWdOYW1lOiBzdHJpbmcsIGNsYXNzTmFtZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGFnTmFtZSwgY2xhc3NOYW1lKTtcbiAgICB0aGlzLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgICB0aGlzLndpbmVjYXJkcyA9IG5ldyBDb21wb25lbnQoJ3NlY3Rpb24nLCd3aW5lY2FyZHMnLCd3aW5lY2FyZHMnKTtcbiAgICB0aGlzLmZpbHRlcnMgPSBuZXcgQ29tcG9uZW50KCdzZWN0aW9uJywnZmlsdGVycycsJ2ZpbHRlcnMnKTtcbiAgfVxuICByZW5kZXJGaWx0ZXJzKCkge1xuICAgIGNvbnN0IGZpbHRlcnNTZWN0aW9uOiBIVE1MRWxlbWVudCA9IHRoaXMuZmlsdGVycy5yZW5kZXIoKTtcbiAgICBmaWx0ZXJzU2VjdGlvbi5pbm5lckhUTUwgPSBGaWx0ZXJzLmZpbHRlcnM7XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kKGZpbHRlcnNTZWN0aW9uKTtcbiAgfVxuXG4gICAgcmVuZGVyV2luZWNhcmRzKCkge1xuICAgICAgY29uc3Qgd2luZWNhcmRzU2VjdGlvbjogSFRNTEVsZW1lbnQgPSB0aGlzLndpbmVjYXJkcy5yZW5kZXIoKTtcbiAgICAgIHdpbmVjYXJkc1NlY3Rpb24uaW5uZXJIVE1MID0gV2luZWNhcmRzLndpbmVjYXJkcztcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZCh3aW5lY2FyZHNTZWN0aW9uKTtcbiAgICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHRoaXMucmVuZGVyRmlsdGVycygpO1xuICAgICB0aGlzLnJlbmRlcldpbmVjYXJkcygpO1xuICAgIHJldHVybiB0aGlzLmNvbnRhaW5lcjtcbiAgfVxufSIsImNsYXNzIFNlYXJjaElucHV0IHtcbiAgc3RhdGljIHNlYXJjaEZvcm0gPSBgXG4gICAgICA8aW5wdXRcbiAgICAgICAgY2xhc3M9XCJzZWFyY2gtY29udGFpbmVyX19pbnB1dFwiXG4gICAgICAgIHR5cGU9XCJzZWFyY2hcIlxuICAgICAgICBhdXRvY29tcGxldGU9XCJvZmZcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cItCf0L7QuNGB0LouLi5cIlxuICAgICAgICBuYW1lPVwic2VhcmNoXCJcbiAgICAgICAgYXV0b2ZvY3VzXG4gICAgICAvPlxuYDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoSW5wdXQ7IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2luZWNhcmRzIHtcbiAgc3RhdGljIHdpbmVjYXJkcyA9IGBcbiAgPGRpdiBjbGFzcz1cIndpbmVjYXJkcy1jb250YWluZXJcIj5cblxuICA8L2Rpdj5cbiAgYDtcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnQge1xuICBwcm90ZWN0ZWQgY29udGFpbmVyOiBIVE1MRWxlbWVudDtcblxuICBjb25zdHJ1Y3Rvcih0YWdOYW1lOiBzdHJpbmcsIGNsYXNzTmFtZTogc3RyaW5nID0gJycsIGlkPzogc3RyaW5nKSB7XG4gICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgICBpZCA/ICh0aGlzLmNvbnRhaW5lci5pZCA9IGlkKSA6IG51bGw7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGFpbmVyO1xuICB9XG59XG4iLCJpbXBvcnQgeyBXaW5lRGV0YWlscyB9IGZyb20gXCIuLi90eXBlcy9pbnRlcmZhY2VzXCI7XHJcblxyXG5jb25zdCBlbnVtIGxvY2FsU3RvcmFnZUtleXMge1xyXG4gIGZpbHRlciA9ICdmaWx0ZXInLFxyXG4gIGNhcnQgPSAnY2FydCcsXHJcbiAgZ29vZHMgID0gJ2dvb2RzJyxcclxuICB0b3RhbEl0ZW1zSW5DYXJ0ID0gJ3RvdGFsSXRlbXNJbkNhcnQnLFxyXG4gIGZpbHRlckFyciA9ICdmaWx0ZXJBcnInLFxyXG4gIHNvcnRlZCA9ICdzb3J0ZWQnLFxyXG59XHJcblxyXG5jbGFzcyBMb2NhbFN0b3JhZ2Uge1xyXG4gIFxyXG4gICAgc3RhdGljIHNldExvY2FsU3RvcmFnZShcclxuICAgICAgZGF0YUtleTogbG9jYWxTdG9yYWdlS2V5cyxcclxuICAgICAgZGF0YTogb2JqZWN0IHwgW10gfCBzdHJpbmcgfCBudW1iZXJcclxuICAgICk6IHZvaWQge1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShkYXRhS2V5LCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBzdGF0aWMgZ2V0TG9jYWxTdG9yYWdlKGRhdGE6IGxvY2FsU3RvcmFnZUtleXMpOiBhbnkge1xyXG4gICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oZGF0YSkpIHtcclxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShTdHJpbmcobG9jYWxTdG9yYWdlLmdldEl0ZW0oZGF0YSkpKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gXCJcIjtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgZXhwb3J0IHsgTG9jYWxTdG9yYWdlLCBsb2NhbFN0b3JhZ2VLZXlzIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9nbG9iYWwuY3NzJztcbi8vIGltcG9ydCBXaW5lQ2FyZHMgZnJvbSAnLi9jb21wb25lbnRzL3dpbmVjYXJkcy93aW5lY2FyZHMnO1xuLy8gaW1wb3J0ICcuL2NvbXBvbmVudHMvY2FydC9jYXJ0JztcbiBpbXBvcnQge2dvb2RzfSBmcm9tICcuL2NvbnN0YXRzL2dvb2RzJztcbi8vIGNvbnN0IHdpbmVjYXJkcyA9IG5ldyBXaW5lQ2FyZHMoKTtcbi8vIHdpbmVjYXJkcy5yZW5kZXIoZ29vZHMpO1xuLy8gaW1wb3J0IHsgQ2FydFNldHRpbmdzIH0gZnJvbSAnLi9jb21wb25lbnRzL2NhcnQvY2FydCc7XG4vLyBpbXBvcnQgeyBMb2NhbFN0b3JhZ2UsIGxvY2FsU3RvcmFnZUtleXMgfSBmcm9tICcuL3V0aWxzL2xvY2Fsc3RvcmFnZSc7XG4vLyBjb25zdCBjYXJ0c2V0dGluZ3MgPSBuZXcgQ2FydFNldHRpbmdzKCk7XG4vLyBjYXJ0c2V0dGluZ3MuYWRkVG9DYXJ0KGdvb2RzKTtcblxuaW1wb3J0IEFwcCBmcm9tICcuL2NvbXBvbmVudHMvYXBwL2FwcCc7XG5pbXBvcnQgJy4vZ2xvYmFsLmNzcyc7XG5cbmNvbnN0IGFwcCA9IG5ldyBBcHAoKTtcbmFwcC5zdGFydChnb29kcyk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9