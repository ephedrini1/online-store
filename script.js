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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --background: black;\n  --red: #d60000;\n  --gold: #fdc854;\n }\n\n.cart-popup {\n  position: fixed;\n  top: 10vh;\n  left: 10vw;\n  width: 80vw;\n  height: 80vh;\n  padding: 2em;\n  background-color: black;\n  z-index: 101;\n  color: var(--gold);\n  text-align: center;\n  box-shadow: 0 0 30px var(--gold);\n  display: none;\n}\n\n.cart-popup.active {\n  display: block;\n}\n\n.cart-popup__container {\n  height: 80%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 1em;\n}\n\n.close-popup {\n  display: block;\n  padding: 0.1em 0.5em;\n  border-radius: 10%;\n  position: absolute;\n  right: 1em;\n  top: 1em;\n  cursor: pointer;\n  transition: 0.2s;\n}\n\n.close-popup:hover {\n  transform: scale(1.1, 1.1);\n  border: 1px solid var(--gold);\n  box-shadow: 2px 2px 15px var(--gold);\n  transition: 0.2s;\n}\n\n.close-popup:active {\n  transform: none;\n}\n\n.cart-item {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n justify-content: center;\n align-items: center;\n gap: 1em;\n}\n\n.cart__number{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 0.5em;\n}\n\n.cart__error {\n  position: fixed;\n  top: 10vh;\n  left: 10vw;\n  width: 80vw;\n  height: 80vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: 2em;\n  background: var(--background);\n  color: var(--gold);\n  z-index: 100;\n}\n\n\n\n\n", "",{"version":3,"sources":["webpack://./src/components/cart/cart.css"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,cAAc;EACd,eAAe;CAChB;;AAED;EACE,eAAe;EACf,SAAS;EACT,UAAU;EACV,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,uBAAuB;EACvB,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;EAClB,gCAAgC;EAChC,aAAa;AACf;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,QAAQ;AACV;;AAEA;EACE,cAAc;EACd,oBAAoB;EACpB,kBAAkB;EAClB,kBAAkB;EAClB,UAAU;EACV,QAAQ;EACR,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,0BAA0B;EAC1B,6BAA6B;EAC7B,oCAAoC;EACpC,gBAAgB;AAClB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,kCAAkC;CACnC,uBAAuB;CACvB,mBAAmB;CACnB,QAAQ;AACT;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,UAAU;AACZ;;AAEA;EACE,eAAe;EACf,SAAS;EACT,UAAU;EACV,WAAW;EACX,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,cAAc;EACd,6BAA6B;EAC7B,kBAAkB;EAClB,YAAY;AACd","sourcesContent":[":root {\n  --background: black;\n  --red: #d60000;\n  --gold: #fdc854;\n }\n\n.cart-popup {\n  position: fixed;\n  top: 10vh;\n  left: 10vw;\n  width: 80vw;\n  height: 80vh;\n  padding: 2em;\n  background-color: black;\n  z-index: 101;\n  color: var(--gold);\n  text-align: center;\n  box-shadow: 0 0 30px var(--gold);\n  display: none;\n}\n\n.cart-popup.active {\n  display: block;\n}\n\n.cart-popup__container {\n  height: 80%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 1em;\n}\n\n.close-popup {\n  display: block;\n  padding: 0.1em 0.5em;\n  border-radius: 10%;\n  position: absolute;\n  right: 1em;\n  top: 1em;\n  cursor: pointer;\n  transition: 0.2s;\n}\n\n.close-popup:hover {\n  transform: scale(1.1, 1.1);\n  border: 1px solid var(--gold);\n  box-shadow: 2px 2px 15px var(--gold);\n  transition: 0.2s;\n}\n\n.close-popup:active {\n  transform: none;\n}\n\n.cart-item {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n justify-content: center;\n align-items: center;\n gap: 1em;\n}\n\n.cart__number{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 0.5em;\n}\n\n.cart__error {\n  position: fixed;\n  top: 10vh;\n  left: 10vw;\n  width: 80vw;\n  height: 80vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: 2em;\n  background: var(--background);\n  color: var(--gold);\n  z-index: 100;\n}\n\n\n\n\n"],"sourceRoot":""}]);
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
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! assets/img/search_icon_153438.svg */ "./src/assets/img/search_icon_153438.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/img/cart-gold.svg */ "./src/assets/img/cart-gold.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n --background: black;\r\n --red: #d60000;\r\n --gold: #fdc854;\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\na {\r\n  text-decoration: none;\r\n  transition: 0.3s;\r\n\r\n}\r\n\r\nbody {\r\n  max-width: 100vw;\r\n  max-height: 100vh;\r\n  display: grid;\r\n  grid-template-areas:\r\n    'header header header'\r\n    'main main main'\r\n    'footer footer footer';\r\n  grid-row-gap: 1em;\r\n  grid-template-rows: auto 1fr auto;\r\n  grid-template-columns: 1fr 1fr 1fr;\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-attachment: fixed;\r\n  background-size: cover;\r\n  position: relative;\r\n}\r\n\r\nbutton {\r\n  background-color: var(--gold);\r\n  border: var(--gold);\r\n  color: var(--background);\r\n  text-shadow: 2px 2px 10px var(--background);\r\n  box-shadow: 10px 10px 20px var(--background);\r\n  border-radius: 5px;\r\n  padding: 1em;\r\n  cursor: pointer;\r\n  transition: 0.3s;\r\n}\r\nbutton:hover {\r\n  background-color: var(--background);\r\n  box-shadow: 10px 10px 20px var(--gold);\r\n  border: 1px solid  var(--gold);\r\n  color: var(--gold);\r\n  text-shadow: 2px 2px 10px var(--gold);\r\n  transition: 0.3s;\r\n}\r\n  .header {\r\n    grid-area: header;\r\n    height: 50px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    margin:  1em;\r\n  }\r\n  .search-container {\r\n    display: flex;\r\n    position: relative;\r\n    max-width: 300px;\r\n    align-items: center;\r\n  }\r\n\r\n  .search-list {\r\n    position: absolute;\r\n    top: 30px;\r\n    left: 0;\r\n  }\r\n.search-list li.hide {\r\n  display: none;\r\n}\r\n\r\n  .search-container__input {\r\n    background-color: var(--background);\r\n    padding: 6px;\r\n    font-size: 17px;\r\n    border: 2px solid var(--gold);\r\n    box-shadow:  0 0 30px var(--gold);\r\n    border-radius: 5px;\r\n  }\r\n\r\n  .search-container__input:focus{\r\n    box-shadow: inset  0 0 30px var(--gold);\r\n    outline: none;\r\n  }\r\n\r\n  .submit_button {\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat center;\r\n    width: 32px;\r\n    height: 32px;\r\n    border: none;\r\n    background-color: transparent;\r\n    cursor: pointer;\r\n    transition: 0.3s;\r\n    box-shadow: none;\r\n}\r\n\r\n.submit_button:hover {\r\n  transform: scale(1.4, 1.4);\r\n  transition: 0.3s;\r\n  border: none;\r\n  background-color: transparent;\r\n  box-shadow: none;\r\n}\r\n\r\n  .header__cart {\r\n  position: relative;\r\n  width: 3em;\r\n  height: 3em;\r\n  transition: 0.3s;\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") no-repeat center;\r\n  background-size: cover;\r\n  cursor: pointer;\r\n  }\r\n\r\n  .header__cart:hover {\r\n    transform: scale(1.1, 1.1);\r\n    transition: 0.3s;\r\n  }\r\n\r\n  .cart__products {\r\n    position: absolute;\r\n    top: 5px;\r\n    left: 5px;\r\n    display: block;\r\n    background-color: var(--red);\r\n    color: var(--gold);\r\n    border-radius: 50%;\r\n    padding: 1px 6px;\r\n    width: 20px;\r\n    height: 20px;\r\n  }\r\n\r\n  .main{\r\n    grid-area: main;\r\n    height: 100%;\r\n    max-width: 100%;\r\n    margin: 0 1em;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 1em;\r\n    background-attachment: fixed;\r\n  }\r\n\r\n  .overlay {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: var(--background);\r\n    opacity: 0.5;\r\n    z-index: 99;\r\n    display: none;\r\n\r\n  }\r\n\r\n  .overlay.active {\r\n    display: block;\r\n  }\r\n\r\n  .footer {\r\n    width: 100vw;\r\n    padding: 15px 0px;\r\n    color: var(--gold);\r\n}\r\na{\r\n  color: var(--gold);\r\n  text-decoration: none;\r\n}\r\n\r\n.footer_wrapper {\r\n  max-width: 80vw;\r\n  margin: 0 auto;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.rss {\r\n  width: 100px;\r\n  fill: var(--gold);\r\n}", "",{"version":3,"sources":["webpack://./src/global.css"],"names":[],"mappings":"AAAA;CACC,mBAAmB;CACnB,cAAc;CACd,eAAe;AAChB;;AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;AACA;EACE,qBAAqB;EACrB,gBAAgB;;AAElB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,aAAa;EACb;;;0BAGwB;EACxB,iBAAiB;EACjB,iCAAiC;EACjC,kCAAkC;EAClC,yDAA6C;EAC7C,4BAA4B;EAC5B,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;EACE,6BAA6B;EAC7B,mBAAmB;EACnB,wBAAwB;EACxB,2CAA2C;EAC3C,4CAA4C;EAC5C,kBAAkB;EAClB,YAAY;EACZ,eAAe;EACf,gBAAgB;AAClB;AACA;EACE,mCAAmC;EACnC,sCAAsC;EACtC,8BAA8B;EAC9B,kBAAkB;EAClB,qCAAqC;EACrC,gBAAgB;AAClB;EACE;IACE,iBAAiB;IACjB,YAAY;IACZ,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,YAAY;EACd;EACA;IACE,aAAa;IACb,kBAAkB;IAClB,gBAAgB;IAChB,mBAAmB;EACrB;;EAEA;IACE,kBAAkB;IAClB,SAAS;IACT,OAAO;EACT;AACF;EACE,aAAa;AACf;;EAEE;IACE,mCAAmC;IACnC,YAAY;IACZ,eAAe;IACf,6BAA6B;IAC7B,iCAAiC;IACjC,kBAAkB;EACpB;;EAEA;IACE,uCAAuC;IACvC,aAAa;EACf;;EAEA;IACE,oEAAmE;IACnE,WAAW;IACX,YAAY;IACZ,YAAY;IACZ,6BAA6B;IAC7B,eAAe;IACf,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;EACE,0BAA0B;EAC1B,gBAAgB;EAChB,YAAY;EACZ,6BAA6B;EAC7B,gBAAgB;AAClB;;EAEE;EACA,kBAAkB;EAClB,UAAU;EACV,WAAW;EACX,gBAAgB;EAChB,oEAA8D;EAC9D,sBAAsB;EACtB,eAAe;EACf;;EAEA;IACE,0BAA0B;IAC1B,gBAAgB;EAClB;;EAEA;IACE,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,cAAc;IACd,4BAA4B;IAC5B,kBAAkB;IAClB,kBAAkB;IAClB,gBAAgB;IAChB,WAAW;IACX,YAAY;EACd;;EAEA;IACE,eAAe;IACf,YAAY;IACZ,eAAe;IACf,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,QAAQ;IACR,4BAA4B;EAC9B;;EAEA;IACE,eAAe;IACf,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,mCAAmC;IACnC,YAAY;IACZ,WAAW;IACX,aAAa;;EAEf;;EAEA;IACE,cAAc;EAChB;;EAEA;IACE,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;AACtB;AACA;EACE,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,eAAe;EACf,cAAc;EACd,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,iBAAiB;AACnB","sourcesContent":[":root {\r\n --background: black;\r\n --red: #d60000;\r\n --gold: #fdc854;\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\na {\r\n  text-decoration: none;\r\n  transition: 0.3s;\r\n\r\n}\r\n\r\nbody {\r\n  max-width: 100vw;\r\n  max-height: 100vh;\r\n  display: grid;\r\n  grid-template-areas:\r\n    'header header header'\r\n    'main main main'\r\n    'footer footer footer';\r\n  grid-row-gap: 1em;\r\n  grid-template-rows: auto 1fr auto;\r\n  grid-template-columns: 1fr 1fr 1fr;\r\n  background-image: url('./assets/img/bg1.jpg');\r\n  background-attachment: fixed;\r\n  background-size: cover;\r\n  position: relative;\r\n}\r\n\r\nbutton {\r\n  background-color: var(--gold);\r\n  border: var(--gold);\r\n  color: var(--background);\r\n  text-shadow: 2px 2px 10px var(--background);\r\n  box-shadow: 10px 10px 20px var(--background);\r\n  border-radius: 5px;\r\n  padding: 1em;\r\n  cursor: pointer;\r\n  transition: 0.3s;\r\n}\r\nbutton:hover {\r\n  background-color: var(--background);\r\n  box-shadow: 10px 10px 20px var(--gold);\r\n  border: 1px solid  var(--gold);\r\n  color: var(--gold);\r\n  text-shadow: 2px 2px 10px var(--gold);\r\n  transition: 0.3s;\r\n}\r\n  .header {\r\n    grid-area: header;\r\n    height: 50px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    margin:  1em;\r\n  }\r\n  .search-container {\r\n    display: flex;\r\n    position: relative;\r\n    max-width: 300px;\r\n    align-items: center;\r\n  }\r\n\r\n  .search-list {\r\n    position: absolute;\r\n    top: 30px;\r\n    left: 0;\r\n  }\r\n.search-list li.hide {\r\n  display: none;\r\n}\r\n\r\n  .search-container__input {\r\n    background-color: var(--background);\r\n    padding: 6px;\r\n    font-size: 17px;\r\n    border: 2px solid var(--gold);\r\n    box-shadow:  0 0 30px var(--gold);\r\n    border-radius: 5px;\r\n  }\r\n\r\n  .search-container__input:focus{\r\n    box-shadow: inset  0 0 30px var(--gold);\r\n    outline: none;\r\n  }\r\n\r\n  .submit_button {\r\n    background: url(assets/img/search_icon_153438.svg) no-repeat center;\r\n    width: 32px;\r\n    height: 32px;\r\n    border: none;\r\n    background-color: transparent;\r\n    cursor: pointer;\r\n    transition: 0.3s;\r\n    box-shadow: none;\r\n}\r\n\r\n.submit_button:hover {\r\n  transform: scale(1.4, 1.4);\r\n  transition: 0.3s;\r\n  border: none;\r\n  background-color: transparent;\r\n  box-shadow: none;\r\n}\r\n\r\n  .header__cart {\r\n  position: relative;\r\n  width: 3em;\r\n  height: 3em;\r\n  transition: 0.3s;\r\n  background: url('./assets/img/cart-gold.svg') no-repeat center;\r\n  background-size: cover;\r\n  cursor: pointer;\r\n  }\r\n\r\n  .header__cart:hover {\r\n    transform: scale(1.1, 1.1);\r\n    transition: 0.3s;\r\n  }\r\n\r\n  .cart__products {\r\n    position: absolute;\r\n    top: 5px;\r\n    left: 5px;\r\n    display: block;\r\n    background-color: var(--red);\r\n    color: var(--gold);\r\n    border-radius: 50%;\r\n    padding: 1px 6px;\r\n    width: 20px;\r\n    height: 20px;\r\n  }\r\n\r\n  .main{\r\n    grid-area: main;\r\n    height: 100%;\r\n    max-width: 100%;\r\n    margin: 0 1em;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 1em;\r\n    background-attachment: fixed;\r\n  }\r\n\r\n  .overlay {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: var(--background);\r\n    opacity: 0.5;\r\n    z-index: 99;\r\n    display: none;\r\n\r\n  }\r\n\r\n  .overlay.active {\r\n    display: block;\r\n  }\r\n\r\n  .footer {\r\n    width: 100vw;\r\n    padding: 15px 0px;\r\n    color: var(--gold);\r\n}\r\na{\r\n  color: var(--gold);\r\n  text-decoration: none;\r\n}\r\n\r\n.footer_wrapper {\r\n  max-width: 80vw;\r\n  margin: 0 auto;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.rss {\r\n  width: 100px;\r\n  fill: var(--gold);\r\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _utils_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/component */ "./src/utils/component.ts");
/* harmony import */ var _search_search__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../search/search */ "./src/components/search/search.ts");
/* harmony import */ var _html_components_footer_footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../html-components/footer/footer */ "./src/html-components/footer/footer.ts");









class App {
    constructor() {
        this.cartsettings = new _cart_cart__WEBPACK_IMPORTED_MODULE_0__.CartSettings();
        this.winecards = new _winecards_winecards__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.filterSettings = new _filters_filterSettings__WEBPACK_IMPORTED_MODULE_4__["default"]();
        this.header = new _html_components_header_header__WEBPACK_IMPORTED_MODULE_2__["default"]('header', 'header');
        this.main = new _html_components_main_main__WEBPACK_IMPORTED_MODULE_3__["default"]('main', 'main');
        this.footer = new _html_components_footer_footer__WEBPACK_IMPORTED_MODULE_8__["default"]('footer', 'footer');
        this.search = new _search_search__WEBPACK_IMPORTED_MODULE_7__["default"]();
    }
    start(data) {
        if (localStorage.getItem('sorted')) {
            data = _utils_localstorage__WEBPACK_IMPORTED_MODULE_5__.LocalStorage.getLocalStorage("sorted" /* localStorageKeys.sorted */) || data;
        }
        ;
        if (localStorage.getItem('filter')) {
            this.filterSettings.filtersObj = _utils_localstorage__WEBPACK_IMPORTED_MODULE_5__.LocalStorage.getLocalStorage("filter" /* localStorageKeys.filter */) || '';
        }
        ;
        App.container.append(this.header.render());
        App.container.append(this.main.render());
        App.container.append(this.footer.render());
        const countryFilters = document.querySelector('.country-filter');
        const colorFilters = document.querySelector('.color-filter');
        this.winecards.render(data);
        this.cartsettings.render();
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
        document.querySelector('.search-container__input')
            .addEventListener('input', event => {
            this.search.search(data);
            console.log(this.search.searchData);
            this.winecards.render(this.search.searchData);
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
                    const errorDiv = new _utils_component__WEBPACK_IMPORTED_MODULE_6__["default"]('div', 'cart__error').render();
                    errorDiv.innerHTML = `
            <p class="error__message">Корзина заполнена, перейти в корзину?</p>
            <button class="error__btn cart__btn" >Ok</button>`;
                    document.body.append(errorDiv);
                    document.querySelector('.overlay').classList.add('active');
                    document.body.style.overflow = 'hidden';
                }
            }
            if (event.target.classList.contains('error__btn')) {
                if (event.target.classList.contains('cart__btn')) {
                    this.cartsettings.cartOpen();
                }
                const errorDiv = document.querySelector('.cart__error');
                document.body.removeChild(errorDiv);
                document.body.style.overflow = 'auto';
                document.querySelector('.overlay').classList.remove('active');
            }
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
            event.preventDefault();
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
        if (localStorage.getItem('cart')) {
            this.cart = _utils_localstorage__WEBPACK_IMPORTED_MODULE_1__.LocalStorage.getLocalStorage("cart" /* localStorageKeys.cart */) || '';
        }
        ;
        if (localStorage.getItem('goods')) {
            data = _utils_localstorage__WEBPACK_IMPORTED_MODULE_1__.LocalStorage.getLocalStorage("goods" /* localStorageKeys.goods */) || data;
        }
        ;
        const index = this.cart.findIndex(elem => elem.id === articul);
        if (index === -1) {
            data[articul]['count']--;
            data[articul]['inCart']++;
            this.cart.push(data[articul]);
            this.totalItems++;
        }
        else {
            this.totalItems++;
            this.cart[index]['inCart']++;
            data[articul]['count']--;
            data[articul]['inCart']++;
            this.cart[index]['count']--;
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
        const index = this.cart.findIndex(elem => elem.id === articul);
        if (index >= 0) {
            this.totalItems--;
            this.cart[index]['inCart']--;
            data[articul]['count']++;
            data[articul]['inCart']--;
            this.cart[index]['count']++;
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
        localStorage.removeItem("filterArr" /* localStorageKeys.filterArr */);
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

/***/ "./src/components/search/search.ts":
/*!*****************************************!*\
  !*** ./src/components/search/search.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Search)
/* harmony export */ });
/* harmony import */ var _utils_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/component */ "./src/utils/component.ts");
/* harmony import */ var _winecards_winecards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../winecards/winecards */ "./src/components/winecards/winecards.ts");


class Search {
    constructor() {
        this.searchData = [];
        this.winecards = new _winecards_winecards__WEBPACK_IMPORTED_MODULE_1__["default"]();
    }
    search(data) {
        let value = document.querySelector('.search-container__input').value;
        value = value.trim().toLowerCase();
        console.log(value);
        this.searchData = data;
        data.forEach((item, index) => {
            if (item.name.toLowerCase().search(value) == -1) {
                this.searchData.splice(index, 1);
            }
        });
        console.log(this.searchData);
        if (this.searchData.length === 0) {
            const errorDiv = new _utils_component__WEBPACK_IMPORTED_MODULE_0__["default"]('div', 'cart__error').render();
            errorDiv.innerHTML = `
        <p class="error__message">По данному запросу ничего не найдено</p>
        <button class="error__btn search__btn" >Ok</button>`;
            document.body.append(errorDiv);
            document.querySelector('.overlay').classList.add('active');
            document.body.style.overflow = 'hidden';
        }
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

/***/ "./src/html-components/footer/footer.ts":
/*!**********************************************!*\
  !*** ./src/html-components/footer/footer.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var _utils_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/component */ "./src/utils/component.ts");

class Footer extends _utils_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(tagName, className) {
        super(tagName, className);
        this.className = className;
        this.footerContainer = new _utils_component__WEBPACK_IMPORTED_MODULE_0__["default"]('div', 'footer-container');
    }
    renderContainer() {
        const footerContainer = new _utils_component__WEBPACK_IMPORTED_MODULE_0__["default"]('div', 'footer-container').render();
        footerContainer.innerHTML = `
  
      <div class="container">
          <div class="footer_wrapper">
              <a class="footer_link" href="https://github.com/ephedrini1/" target="_blank"> @ephedrini1</a>

              <p class="year">2022</p>
              <a class="footer_link" href="https://rs.school/js-stage0/" target="_blank"><img
                      src="assets/img/rs_school_js.svg" width="40" alt="geo"> Rolling Scopes School</a>
          </div>
      </div>

`;
        this.container.append(footerContainer);
    }
    render() {
        this.renderContainer();
        return this.container;
    }
}


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

/***/ }),

/***/ "./src/assets/img/search_icon_153438.svg":
/*!***********************************************!*\
  !*** ./src/assets/img/search_icon_153438.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/search_icon_153438.svg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QjVDO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7QUNBc0I7QUFDdEIsNERBQTREO0FBQzVELG1DQUFtQztBQUNLO0FBQ3hDLHFDQUFxQztBQUNyQywyQkFBMkI7QUFDM0IseURBQXlEO0FBQ3pELHlFQUF5RTtBQUN6RSwyQ0FBMkM7QUFDM0MsaUNBQWlDO0FBRU07QUFDakI7QUFFdEIsTUFBTSxHQUFHLEdBQUcsSUFBSSwyREFBRyxFQUFFLENBQUM7QUFDdEIsR0FBRyxDQUFDLEtBQUssQ0FBQyxrREFBSyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29tcG9uZW50cy9jYXJ0L2NhcnQuY3NzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL2ZpbHRlcnMvZmlsdGVycy5jc3MiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvd2luZWNhcmRzL3dpbmVjYXJkcy5jc3MiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2dsb2JhbC5jc3MiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL2NhcnQvY2FydC5jc3M/ZDI4NiIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29tcG9uZW50cy9maWx0ZXJzL2ZpbHRlcnMuY3NzP2UyZDkiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvd2luZWNhcmRzL3dpbmVjYXJkcy5jc3M/NzMwMyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvZ2xvYmFsLmNzcz9kM2JjIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvYXBwL2FwcC50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29tcG9uZW50cy9jYXJ0L2NhcnQudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvZmlsdGVycy9maWx0ZXJTZXR0aW5ncy50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL3dpbmVjYXJkcy93aW5lY2FyZHMudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbnN0YXRzL2dvb2RzLnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9odG1sLWNvbXBvbmVudHMvY2FydC1wb3B1cC9jYXJ0LXBvcHVwLnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9odG1sLWNvbXBvbmVudHMvY2FydC9jYXJ0LnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9odG1sLWNvbXBvbmVudHMvZmlsdGVycy9maWx0ZXJzLnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9odG1sLWNvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvaHRtbC1jb21wb25lbnRzL2hlYWRlci9oZWFkZXIudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2h0bWwtY29tcG9uZW50cy9tYWluL21haW4udHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2h0bWwtY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9odG1sLWNvbXBvbmVudHMvd2luZWNhcmRzL3dpbmVjYXJkcy50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvdXRpbHMvY29tcG9uZW50LnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy91dGlscy9sb2NhbHN0b3JhZ2UudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29ubGluZS1zdG9yZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29ubGluZS1zdG9yZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29ubGluZS1zdG9yZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29ubGluZS1zdG9yZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29ubGluZS1zdG9yZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLWJhY2tncm91bmQ6IGJsYWNrO1xcbiAgLS1yZWQ6ICNkNjAwMDA7XFxuICAtLWdvbGQ6ICNmZGM4NTQ7XFxuIH1cXG5cXG4uY2FydC1wb3B1cCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDEwdmg7XFxuICBsZWZ0OiAxMHZ3O1xcbiAgd2lkdGg6IDgwdnc7XFxuICBoZWlnaHQ6IDgwdmg7XFxuICBwYWRkaW5nOiAyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIHotaW5kZXg6IDEwMTtcXG4gIGNvbG9yOiB2YXIoLS1nb2xkKTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJveC1zaGFkb3c6IDAgMCAzMHB4IHZhcigtLWdvbGQpO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmNhcnQtcG9wdXAuYWN0aXZlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uY2FydC1wb3B1cF9fY29udGFpbmVyIHtcXG4gIGhlaWdodDogODAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMWVtO1xcbn1cXG5cXG4uY2xvc2UtcG9wdXAge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwYWRkaW5nOiAwLjFlbSAwLjVlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAxZW07XFxuICB0b3A6IDFlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IDAuMnM7XFxufVxcblxcbi5jbG9zZS1wb3B1cDpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSwgMS4xKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdvbGQpO1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCAxNXB4IHZhcigtLWdvbGQpO1xcbiAgdHJhbnNpdGlvbjogMC4ycztcXG59XFxuXFxuLmNsb3NlLXBvcHVwOmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi5jYXJ0LWl0ZW0ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiBhbGlnbi1pdGVtczogY2VudGVyO1xcbiBnYXA6IDFlbTtcXG59XFxuXFxuLmNhcnRfX251bWJlcntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDAuNWVtO1xcbn1cXG5cXG4uY2FydF9fZXJyb3Ige1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAxMHZoO1xcbiAgbGVmdDogMTB2dztcXG4gIHdpZHRoOiA4MHZ3O1xcbiAgaGVpZ2h0OiA4MHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpO1xcbiAgY29sb3I6IHZhcigtLWdvbGQpO1xcbiAgei1pbmRleDogMTAwO1xcbn1cXG5cXG5cXG5cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9jYXJ0L2NhcnQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxlQUFlO0NBQ2hCOztBQUVEO0VBQ0UsZUFBZTtFQUNmLFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGdDQUFnQztFQUNoQyxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsUUFBUTtFQUNSLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsNkJBQTZCO0VBQzdCLG9DQUFvQztFQUNwQyxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtDQUFrQztDQUNuQyx1QkFBdUI7Q0FDdkIsbUJBQW1CO0NBQ25CLFFBQVE7QUFDVDs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGVBQWU7RUFDZixTQUFTO0VBQ1QsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAtLWJhY2tncm91bmQ6IGJsYWNrO1xcbiAgLS1yZWQ6ICNkNjAwMDA7XFxuICAtLWdvbGQ6ICNmZGM4NTQ7XFxuIH1cXG5cXG4uY2FydC1wb3B1cCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDEwdmg7XFxuICBsZWZ0OiAxMHZ3O1xcbiAgd2lkdGg6IDgwdnc7XFxuICBoZWlnaHQ6IDgwdmg7XFxuICBwYWRkaW5nOiAyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIHotaW5kZXg6IDEwMTtcXG4gIGNvbG9yOiB2YXIoLS1nb2xkKTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJveC1zaGFkb3c6IDAgMCAzMHB4IHZhcigtLWdvbGQpO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmNhcnQtcG9wdXAuYWN0aXZlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uY2FydC1wb3B1cF9fY29udGFpbmVyIHtcXG4gIGhlaWdodDogODAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMWVtO1xcbn1cXG5cXG4uY2xvc2UtcG9wdXAge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwYWRkaW5nOiAwLjFlbSAwLjVlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAxZW07XFxuICB0b3A6IDFlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IDAuMnM7XFxufVxcblxcbi5jbG9zZS1wb3B1cDpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSwgMS4xKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdvbGQpO1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCAxNXB4IHZhcigtLWdvbGQpO1xcbiAgdHJhbnNpdGlvbjogMC4ycztcXG59XFxuXFxuLmNsb3NlLXBvcHVwOmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi5jYXJ0LWl0ZW0ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiBhbGlnbi1pdGVtczogY2VudGVyO1xcbiBnYXA6IDFlbTtcXG59XFxuXFxuLmNhcnRfX251bWJlcntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDAuNWVtO1xcbn1cXG5cXG4uY2FydF9fZXJyb3Ige1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAxMHZoO1xcbiAgbGVmdDogMTB2dztcXG4gIHdpZHRoOiA4MHZ3O1xcbiAgaGVpZ2h0OiA4MHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpO1xcbiAgY29sb3I6IHZhcigtLWdvbGQpO1xcbiAgei1pbmRleDogMTAwO1xcbn1cXG5cXG5cXG5cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxyXFxuICAtLWJhY2tncm91bmQ6IGJsYWNrO1xcclxcbiAgLS1yZWQ6ICNkNjAwMDA7XFxyXFxuICAtLWdvbGQ6ICNmZGM4NTQ7XFxyXFxuIH1cXHJcXG4qe1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuLmZpbHRlcnMtZm9ybSB7XFxyXFxuICB3aWR0aDogODB2dztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC41KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IHZhcigtLWdvbGQpO1xcclxcbiAgY29sb3I6IHZhcigtLWdvbGQpO1xcclxcbiAgcGFkZGluZzogMWVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZmlsdGVycy1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA7XFxyXFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiIHNlbGVjdCAgZmlsdGVyLWNvbG9yIGZpbHRlci1jb3VudHJ5XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgXFxcIiAgIGJ1dHRvbiAgICAgIC4gICAgICAgICBidXR0b25cXFwiO1xcclxcbn1cXHJcXG5cXHJcXG4uZmlsdGVyLW5hbWUge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG59XFxyXFxuLmNvdW50cnktZmlsdGVyIHtcXHJcXG4gIGdyaWQtYXJlYTogJ2ZpbHRlci1jb3VudHJ5JztcXHJcXG59XFxyXFxuLmNvbG9yLWZpbHRlciB7XFxyXFxuICBncmlkLWFyZWE6ICdmaWx0ZXItY29sb3InO1xcclxcbn1cXHJcXG5cXHJcXG4uc29ydCB7XFxyXFxuICBncmlkLWFyZWE6ICdzZWxlY3QnO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXQge1xcclxcbiAgZ3JpZC1hcmVhOiAnYnV0dG9uJztcXHJcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2V0LWZpbHRlcnMge1xcclxcbiAgZ3JpZC1hcmVhOiAnYnV0dG9uJztcXHJcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbn1cXHJcXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxyXFxuLXdlYmtpdC1hcHBlYXJlbmNlOm5vbmU7XFxyXFxub3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrYm94e1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMS41ZW07XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDIuNWVtO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdLFxcclxcbi5jaGVja2JveCBsYWJlbDo6YmVmb3JlIHtcXHJcXG5jdXJzb3I6IHBvaW50ZXI7XFxyXFxuaGVpZ2h0OiAyNHB4O1xcclxcbmxlZnQ6IDA7XFxyXFxucG9zaXRpb246IGFic29sdXRlO1xcclxcbndpZHRoOiAyNHB4O1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJde1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxufVxcclxcblxcclxcbi5jaGVja2JveCBsYWJlbDo6YmVmb3JlIHtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWdvbGQpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgY29sb3I6IHZhcigtLWdvbGQpO1xcclxcbiAgY29udGVudDogJyc7XFxyXFxuICBmb250LXNpemU6IDEuMmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2tib3ggaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkICsgbGFiZWw6OmJlZm9yZSB7XFxyXFxuICBib3JkZXItY29sb3I6IHZhcigtLWdvbGQpO1xcclxcbiAgY29udGVudDogJ1xcXFwyNzE0JztcXHJcXG59XFxyXFxubGFiZWwge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbnNlbGVjdCB7XFxyXFxuICBhcHBlYXJhbmNlOiBub25lO1xcclxcbiAgb3V0bGluZTogMDtcXHJcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxuICBmbGV4OiAxO1xcclxcbiAgcGFkZGluZzogMCAxZW07XFxyXFxuICBjb2xvcjogdmFyKC0tZ29sZCk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBwYWRkaW5nOiA2cHg7XFxyXFxuICBmb250LXNpemU6IDE3cHg7XFxyXFxuICBtYXgtd2lkdGg6IDIwZW07XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1nb2xkKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBib3gtc2hhZG93OiAgMCAwIDMwcHggdmFyKC0tZ29sZCk7XFxyXFxufVxcclxcbi8qIFJlbW92ZSBJRSBhcnJvdyAqL1xcclxcbnNlbGVjdDo6LW1zLWV4cGFuZCB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG4vKiBDdXN0b20gU2VsZWN0IHdyYXBwZXIgKi9cXHJcXG5zZWxlY3Qge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIG1heC13aWR0aDogMjBlbTtcXHJcXG4gIGhlaWdodDogMmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogLjI1ZW07XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxyXFxuICBmb250LXNpemU6IDE3cHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1nb2xkKTtcXHJcXG4gIGJveC1zaGFkb3c6ICAwIDAgMzBweCB2YXIoLS1nb2xkKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuLyogQXJyb3cgKi9cXHJcXG5zZWxlY3Q6OmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6ICdcXFxcMjVCQyc7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIHBhZGRpbmc6IDFlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdvbGQpO1xcclxcbiAgdHJhbnNpdGlvbjogLjI1cyBhbGwgZWFzZTtcXHJcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbn1cXHJcXG4vKiBUcmFuc2l0aW9uICovXFxyXFxuc2VsZWN0OmhvdmVyOjphZnRlciB7XFxyXFxuICBjb2xvcjogI2YzOWMxMjtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2V0LWZpbHRlcnMge1xcclxcbiAgd2lkdGg6IDEwZW07XFxyXFxuICBoZWlnaHQ6IDNlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAwLjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogT3RoZXIgc3R5bGVzKi9cXHJcXG5cXHJcXG5cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9maWx0ZXJzL2ZpbHRlcnMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxlQUFlO0NBQ2hCO0FBQ0Q7RUFDRSxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxpQ0FBaUM7RUFDakMsa0JBQWtCO0VBQ2xCLGdDQUFnQztFQUNoQyxrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtDQUFrQztFQUNsQyx3QkFBd0I7RUFDeEI7d0RBQ3NEO0FBQ3hEOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEIsdUJBQXVCO0FBQ3ZCLGFBQWE7QUFDYjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBOztBQUVBLGVBQWU7QUFDZixZQUFZO0FBQ1osT0FBTztBQUNQLGtCQUFrQjtBQUNsQixXQUFXO0FBQ1g7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsT0FBTztFQUNQLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsbUNBQW1DO0VBQ25DLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsWUFBWTtFQUNaLGVBQWU7RUFDZixlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixpQ0FBaUM7QUFDbkM7QUFDQSxvQkFBb0I7QUFDcEI7RUFDRSxhQUFhO0FBQ2Y7QUFDQSwwQkFBMEI7QUFDMUI7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGVBQWU7RUFDZixXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixtQ0FBbUM7RUFDbkMsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQiw2QkFBNkI7RUFDN0IsaUNBQWlDO0VBQ2pDLGtCQUFrQjtBQUNwQjtBQUNBLFVBQVU7QUFDVjtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFFBQVE7RUFDUixZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLHlCQUF5QjtFQUN6QixvQkFBb0I7QUFDdEI7QUFDQSxlQUFlO0FBQ2Y7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCOztBQUVBLGdCQUFnQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxyXFxuICAtLWJhY2tncm91bmQ6IGJsYWNrO1xcclxcbiAgLS1yZWQ6ICNkNjAwMDA7XFxyXFxuICAtLWdvbGQ6ICNmZGM4NTQ7XFxyXFxuIH1cXHJcXG4qe1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuLmZpbHRlcnMtZm9ybSB7XFxyXFxuICB3aWR0aDogODB2dztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC41KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IHZhcigtLWdvbGQpO1xcclxcbiAgY29sb3I6IHZhcigtLWdvbGQpO1xcclxcbiAgcGFkZGluZzogMWVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZmlsdGVycy1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA7XFxyXFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiIHNlbGVjdCAgZmlsdGVyLWNvbG9yIGZpbHRlci1jb3VudHJ5XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgXFxcIiAgIGJ1dHRvbiAgICAgIC4gICAgICAgICBidXR0b25cXFwiO1xcclxcbn1cXHJcXG5cXHJcXG4uZmlsdGVyLW5hbWUge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG59XFxyXFxuLmNvdW50cnktZmlsdGVyIHtcXHJcXG4gIGdyaWQtYXJlYTogJ2ZpbHRlci1jb3VudHJ5JztcXHJcXG59XFxyXFxuLmNvbG9yLWZpbHRlciB7XFxyXFxuICBncmlkLWFyZWE6ICdmaWx0ZXItY29sb3InO1xcclxcbn1cXHJcXG5cXHJcXG4uc29ydCB7XFxyXFxuICBncmlkLWFyZWE6ICdzZWxlY3QnO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXQge1xcclxcbiAgZ3JpZC1hcmVhOiAnYnV0dG9uJztcXHJcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2V0LWZpbHRlcnMge1xcclxcbiAgZ3JpZC1hcmVhOiAnYnV0dG9uJztcXHJcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbn1cXHJcXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxyXFxuLXdlYmtpdC1hcHBlYXJlbmNlOm5vbmU7XFxyXFxub3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrYm94e1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMS41ZW07XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDIuNWVtO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdLFxcclxcbi5jaGVja2JveCBsYWJlbDo6YmVmb3JlIHtcXHJcXG5jdXJzb3I6IHBvaW50ZXI7XFxyXFxuaGVpZ2h0OiAyNHB4O1xcclxcbmxlZnQ6IDA7XFxyXFxucG9zaXRpb246IGFic29sdXRlO1xcclxcbndpZHRoOiAyNHB4O1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJde1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxufVxcclxcblxcclxcbi5jaGVja2JveCBsYWJlbDo6YmVmb3JlIHtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWdvbGQpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgY29sb3I6IHZhcigtLWdvbGQpO1xcclxcbiAgY29udGVudDogJyc7XFxyXFxuICBmb250LXNpemU6IDEuMmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2tib3ggaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkICsgbGFiZWw6OmJlZm9yZSB7XFxyXFxuICBib3JkZXItY29sb3I6IHZhcigtLWdvbGQpO1xcclxcbiAgY29udGVudDogJ1xcXFwyNzE0JztcXHJcXG59XFxyXFxubGFiZWwge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbnNlbGVjdCB7XFxyXFxuICBhcHBlYXJhbmNlOiBub25lO1xcclxcbiAgb3V0bGluZTogMDtcXHJcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxuICBmbGV4OiAxO1xcclxcbiAgcGFkZGluZzogMCAxZW07XFxyXFxuICBjb2xvcjogdmFyKC0tZ29sZCk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBwYWRkaW5nOiA2cHg7XFxyXFxuICBmb250LXNpemU6IDE3cHg7XFxyXFxuICBtYXgtd2lkdGg6IDIwZW07XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1nb2xkKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBib3gtc2hhZG93OiAgMCAwIDMwcHggdmFyKC0tZ29sZCk7XFxyXFxufVxcclxcbi8qIFJlbW92ZSBJRSBhcnJvdyAqL1xcclxcbnNlbGVjdDo6LW1zLWV4cGFuZCB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG4vKiBDdXN0b20gU2VsZWN0IHdyYXBwZXIgKi9cXHJcXG5zZWxlY3Qge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIG1heC13aWR0aDogMjBlbTtcXHJcXG4gIGhlaWdodDogMmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogLjI1ZW07XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxyXFxuICBmb250LXNpemU6IDE3cHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1nb2xkKTtcXHJcXG4gIGJveC1zaGFkb3c6ICAwIDAgMzBweCB2YXIoLS1nb2xkKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuLyogQXJyb3cgKi9cXHJcXG5zZWxlY3Q6OmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6ICdcXFxcMjVCQyc7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIHBhZGRpbmc6IDFlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdvbGQpO1xcclxcbiAgdHJhbnNpdGlvbjogLjI1cyBhbGwgZWFzZTtcXHJcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbn1cXHJcXG4vKiBUcmFuc2l0aW9uICovXFxyXFxuc2VsZWN0OmhvdmVyOjphZnRlciB7XFxyXFxuICBjb2xvcjogI2YzOWMxMjtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2V0LWZpbHRlcnMge1xcclxcbiAgd2lkdGg6IDEwZW07XFxyXFxuICBoZWlnaHQ6IDNlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAwLjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogT3RoZXIgc3R5bGVzKi9cXHJcXG5cXHJcXG5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxyXFxuICAtLWJhY2tncm91bmQ6ICMxNDBhMGE7XFxyXFxuICAtLXJlZDogI2Q2MDAwMDtcXHJcXG4gIC0tZ29sZDogI2ZkYzg1NDtcXHJcXG4gfVxcclxcblxcclxcbiAud2luZWNhcmRze1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgbWF4LXdpZHRoOiA4MHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLndpbmVjYXJkcy1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAzZW07XFxyXFxuICBncmlkLXJvdy1nYXA6IDNlbTtcXHJcXG59XFxyXFxuXFxyXFxuLndpbmVjYXJkc19faXRlbSB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMjBlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXHJcXG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxyXFxuICAtd2Via2l0LXBlcnNwZWN0aXZlOiAxMDAwcHg7XFxyXFxuICAgIHBlcnNwZWN0aXZlOiAxMDAwcHg7XFxyXFxufVxcclxcblxcclxcbi53aW5lY2FyZHNfX2ZhY2UsXFxyXFxuLndpbmVjYXJkc19fYmFjayB7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDEycHggMCB2YXIoLS1nb2xkKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIC43cyBjdWJpYy1iZXppZXIoMC40LCAwLjIsIDAuMiwgMSk7XFxyXFxuICB0cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAuN3MgY3ViaWMtYmV6aWVyKDAuNCwgMC4yLCAwLjIsIDEpO1xcclxcbiAgLW8tdHJhbnNpdGlvbjogdHJhbnNmb3JtIC43cyBjdWJpYy1iZXppZXIoMC40LCAwLjIsIDAuMiwgMSk7XFxyXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjdzIGN1YmljLWJlemllcigwLjQsIDAuMiwgMC4yLCAxKTtcXHJcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuN3MgY3ViaWMtYmV6aWVyKDAuNCwgMC4yLCAwLjIsIDEpLCAtd2Via2l0LXRyYW5zZm9ybSAuN3MgY3ViaWMtYmV6aWVyKDAuNCwgMC4yLCAwLjIsIDEpO1xcclxcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICAgICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIG1pbi1oZWlnaHQ6IDM1MHB4O1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgdGV4dC1zaGFkb3c6IDEwcHggMTBweCAxMHB4IHZhcigtLWJhY2tncm91bmQpO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5DYXJ0IC53aW5lY2FyZHNfX2ZhY2UsXFxyXFxuLmluQ2FydCAud2luZWNhcmRzX19iYWNrIHtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCAxMnB4IDAgdmFyKC0tcmVkKTtcXHJcXG59XFxyXFxuXFxyXFxuLndpbmVjYXJkc19fYmFja3tcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpO1xcclxcbiAgY29sb3I6IHZhcigtLWdvbGQpO1xcclxcbn1cXHJcXG5cXHJcXG4ud2luZWNhcmRzX19mYWNlOmFmdGVye1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBjb250ZW50OiAnJztcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIG9wYWNpdHk6IC41O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXHJcXG4gICAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICAgICAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4ud2luZWNhcmRzX19pdGVtIC53aW5lY2FyZHNfX2ZhY2UsXFxyXFxuLndpbmVjYXJkc19faXRlbSAud2luZWNhcmRzX19iYWNre1xcclxcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIC43cyBjdWJpYy1iZXppZXIoMC40LCAwLjIsIDAuMiwgMSk7XFxyXFxuICAgIHRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIC43cyBjdWJpYy1iZXppZXIoMC40LCAwLjIsIDAuMiwgMSk7XFxyXFxuICAgIC1vLXRyYW5zaXRpb246IHRyYW5zZm9ybSAuN3MgY3ViaWMtYmV6aWVyKDAuNCwgMC4yLCAwLjIsIDEpO1xcclxcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjdzIGN1YmljLWJlemllcigwLjQsIDAuMiwgMC4yLCAxKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC43cyBjdWJpYy1iZXppZXIoMC40LCAwLjIsIDAuMiwgMSksIC13ZWJraXQtdHJhbnNmb3JtIC43cyBjdWJpYy1iZXppZXIoMC40LCAwLjIsIDAuMiwgMSk7XFxyXFxufVxcclxcblxcclxcbi53aW5lY2FyZHNfX2JhY2t7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICB0ZXh0LXNoYWRvdzogMTBweCAxMHB4IDEwcHggdmFyKC0tZ29sZCk7XFxyXFxuICBmb250LXNpemU6IGxhcmdlcjtcXHJcXG59XFxyXFxuXFxyXFxuLndpbmVjYXJkc19fZmFjZS1kZXRhaWxzIHtcXHJcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHRyYW5zbGF0ZVooNjBweCkgc2NhbGUoMC45NCk7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgdHJhbnNsYXRlWig2MHB4KSBzY2FsZSgwLjk0KTtcXHJcXG50b3A6IDUwJTtcXHJcXG5wb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxubGVmdDogMDtcXHJcXG53aWR0aDogMTAwJTtcXHJcXG5wYWRkaW5nOiAycmVtO1xcclxcbi13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxub3V0bGluZTogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbi13ZWJraXQtcGVyc3BlY3RpdmU6IGluaGVyaXQ7XFxyXFxuICBwZXJzcGVjdGl2ZTogaW5oZXJpdDtcXHJcXG56LWluZGV4OiAzO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ud2luZWNhcmRzX19pdGVtIC53aW5lY2FyZHNfX2JhY2t7XFxyXFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xcclxcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcXHJcXG4gIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXHJcXG4gICAgICAgICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXHJcXG59XFxyXFxuXFxyXFxuLndpbmVjYXJkc19faXRlbSAud2luZWNhcmRzX19mYWNle1xcclxcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XFxyXFxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcXHJcXG4gIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXHJcXG4gICAgICAgICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXHJcXG59XFxyXFxuXFxyXFxuLndpbmVjYXJkc19faXRlbTpmb2N1cyAud2luZWNhcmRzX19iYWNrLFxcclxcbi53aW5lY2FyZHNfX2l0ZW06aG92ZXIgLndpbmVjYXJkc19fYmFja3tcXHJcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xcclxcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XFxyXFxuICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxyXFxuICAgICAgICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxyXFxufVxcclxcblxcclxcbi53aW5lY2FyZHNfX2l0ZW06aG92ZXIgLndpbmVjYXJkc19fZmFjZSxcXHJcXG4ud2luZWNhcmRzX19pdGVtOmZvY3VzIC53aW5lY2FyZHNfX2ZhY2V7XFxyXFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgtMTgwZGVnKTtcXHJcXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKC0xODBkZWcpO1xcclxcbiAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcclxcbiAgICAgICAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcclxcbn1cXHJcXG5cXHJcXG4ud2luZWNhcmRzX19mYWNlLXBob3Rve1xcclxcbiAgd2lkdGg6IDEwZW07XFxyXFxuICBoZWlnaHQ6IDEwZW07XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiAxMDAlO1xcclxcbiAgbWFyZ2luOiAxZW07XFxyXFxufVxcclxcblxcclxcbi53aW5lY2FyZHNfX2JhY2stbmFtZSB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxZW07XFxyXFxuICB0ZXh0LXNoYWRvdzogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5jYXJ0X19idG4ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ29sZCk7XFxyXFxuICBib3JkZXI6IHZhcigtLWdvbGQpO1xcclxcbiAgY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcclxcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggMTBweCB2YXIoLS1iYWNrZ3JvdW5kKTtcXHJcXG4gIGJveC1zaGFkb3c6IDEwcHggMTBweCAyMHB4IHZhcigtLWJhY2tncm91bmQpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgcGFkZGluZzogMWVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNpdGlvbjogMC4ycztcXHJcXG4gIG1hcmdpbi10b3A6IDJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcnRfX2J0bjpob3ZlcixcXHJcXG4uY2FydF9fYnRuOmZvY3Vze1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxyXFxuICBib3gtc2hhZG93OiAxMHB4IDEwcHggMjBweCB2YXIoLS1nb2xkKTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICB2YXIoLS1nb2xkKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1nb2xkKTtcXHJcXG4gIHRleHQtc2hhZG93OiAycHggMnB4IDEwcHggdmFyKC0tZ29sZCk7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy93aW5lY2FyZHMvd2luZWNhcmRzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsZUFBZTtDQUNoQjs7Q0FFQTtFQUNDLFVBQVU7RUFDVixjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsb0JBQW9CO0VBQ3BCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZUFBZTtFQUNmLG9DQUFvQztFQUNwQyw0QkFBNEI7RUFDNUIsMkJBQTJCO0lBQ3pCLG1CQUFtQjtBQUN2Qjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLG1CQUFtQjtFQUNuQix3RUFBd0U7RUFDeEUsZ0VBQWdFO0VBQ2hFLDJEQUEyRDtFQUMzRCx3REFBd0Q7RUFDeEQsOEdBQThHO0VBQzlHLG1DQUFtQztVQUMzQiwyQkFBMkI7RUFDbkMsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCw2Q0FBNkM7RUFDN0MsZUFBZTtBQUNqQjs7QUFFQTs7RUFFRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0Isa0JBQWtCO0FBQ3BCOztBQUVBO0NBQ0Msa0JBQWtCO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1gsY0FBYztJQUNkLFdBQVc7SUFDWCxtQ0FBbUM7SUFDbkMsbUNBQW1DO1lBQzNCLDJCQUEyQjtJQUNuQyxtQkFBbUI7QUFDdkI7Ozs7QUFJQTs7SUFFSSx3RUFBd0U7SUFDeEUsZ0VBQWdFO0lBQ2hFLDJEQUEyRDtJQUMzRCx3REFBd0Q7SUFDeEQsOEdBQThHO0FBQ2xIOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLHVDQUF1QztFQUN2QyxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnRUFBZ0U7RUFDaEUsd0RBQXdEO0FBQzFELFFBQVE7QUFDUixrQkFBa0I7QUFDbEIsT0FBTztBQUNQLFdBQVc7QUFDWCxhQUFhO0FBQ2IsOEJBQThCO0VBQzVCLHNCQUFzQjtBQUN4Qiw4QkFBOEI7QUFDOUIsNEJBQTRCO0VBQzFCLG9CQUFvQjtBQUN0QixVQUFVO0FBQ1Y7OztBQUdBO0VBQ0Usa0NBQWtDO1VBQzFCLDBCQUEwQjtFQUNsQyxvQ0FBb0M7VUFDNUIsNEJBQTRCO0FBQ3RDOztBQUVBO0VBQ0UsZ0NBQWdDO1VBQ3hCLHdCQUF3QjtFQUNoQyxvQ0FBb0M7VUFDNUIsNEJBQTRCO0FBQ3RDOztBQUVBOztFQUVFLGdDQUFnQztVQUN4Qix3QkFBd0I7RUFDaEMsb0NBQW9DO1VBQzVCLDRCQUE0QjtBQUN0Qzs7QUFFQTs7RUFFRSxtQ0FBbUM7VUFDM0IsMkJBQTJCO0VBQ25DLG9DQUFvQztVQUM1Qiw0QkFBNEI7QUFDdEM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHdCQUF3QjtFQUN4Qiw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQix3QkFBd0I7RUFDeEIsMkNBQTJDO0VBQzNDLDRDQUE0QztFQUM1QyxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTs7RUFFRSxtQ0FBbUM7RUFDbkMsc0NBQXNDO0VBQ3RDLDhCQUE4QjtFQUM5QixrQkFBa0I7RUFDbEIscUNBQXFDO0VBQ3JDLGdCQUFnQjtBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxyXFxuICAtLWJhY2tncm91bmQ6ICMxNDBhMGE7XFxyXFxuICAtLXJlZDogI2Q2MDAwMDtcXHJcXG4gIC0tZ29sZDogI2ZkYzg1NDtcXHJcXG4gfVxcclxcblxcclxcbiAud2luZWNhcmRze1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgbWF4LXdpZHRoOiA4MHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLndpbmVjYXJkcy1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAzZW07XFxyXFxuICBncmlkLXJvdy1nYXA6IDNlbTtcXHJcXG59XFxyXFxuXFxyXFxuLndpbmVjYXJkc19faXRlbSB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMjBlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXHJcXG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxyXFxuICAtd2Via2l0LXBlcnNwZWN0aXZlOiAxMDAwcHg7XFxyXFxuICAgIHBlcnNwZWN0aXZlOiAxMDAwcHg7XFxyXFxufVxcclxcblxcclxcbi53aW5lY2FyZHNfX2ZhY2UsXFxyXFxuLndpbmVjYXJkc19fYmFjayB7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDEycHggMCB2YXIoLS1nb2xkKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIC43cyBjdWJpYy1iZXppZXIoMC40LCAwLjIsIDAuMiwgMSk7XFxyXFxuICB0cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAuN3MgY3ViaWMtYmV6aWVyKDAuNCwgMC4yLCAwLjIsIDEpO1xcclxcbiAgLW8tdHJhbnNpdGlvbjogdHJhbnNmb3JtIC43cyBjdWJpYy1iZXppZXIoMC40LCAwLjIsIDAuMiwgMSk7XFxyXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjdzIGN1YmljLWJlemllcigwLjQsIDAuMiwgMC4yLCAxKTtcXHJcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuN3MgY3ViaWMtYmV6aWVyKDAuNCwgMC4yLCAwLjIsIDEpLCAtd2Via2l0LXRyYW5zZm9ybSAuN3MgY3ViaWMtYmV6aWVyKDAuNCwgMC4yLCAwLjIsIDEpO1xcclxcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICAgICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIG1pbi1oZWlnaHQ6IDM1MHB4O1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgdGV4dC1zaGFkb3c6IDEwcHggMTBweCAxMHB4IHZhcigtLWJhY2tncm91bmQpO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5DYXJ0IC53aW5lY2FyZHNfX2ZhY2UsXFxyXFxuLmluQ2FydCAud2luZWNhcmRzX19iYWNrIHtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCAxMnB4IDAgdmFyKC0tcmVkKTtcXHJcXG59XFxyXFxuXFxyXFxuLndpbmVjYXJkc19fYmFja3tcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpO1xcclxcbiAgY29sb3I6IHZhcigtLWdvbGQpO1xcclxcbn1cXHJcXG5cXHJcXG4ud2luZWNhcmRzX19mYWNlOmFmdGVye1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBjb250ZW50OiAnJztcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIG9wYWNpdHk6IC41O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXHJcXG4gICAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICAgICAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4ud2luZWNhcmRzX19pdGVtIC53aW5lY2FyZHNfX2ZhY2UsXFxyXFxuLndpbmVjYXJkc19faXRlbSAud2luZWNhcmRzX19iYWNre1xcclxcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIC43cyBjdWJpYy1iZXppZXIoMC40LCAwLjIsIDAuMiwgMSk7XFxyXFxuICAgIHRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIC43cyBjdWJpYy1iZXppZXIoMC40LCAwLjIsIDAuMiwgMSk7XFxyXFxuICAgIC1vLXRyYW5zaXRpb246IHRyYW5zZm9ybSAuN3MgY3ViaWMtYmV6aWVyKDAuNCwgMC4yLCAwLjIsIDEpO1xcclxcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjdzIGN1YmljLWJlemllcigwLjQsIDAuMiwgMC4yLCAxKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC43cyBjdWJpYy1iZXppZXIoMC40LCAwLjIsIDAuMiwgMSksIC13ZWJraXQtdHJhbnNmb3JtIC43cyBjdWJpYy1iZXppZXIoMC40LCAwLjIsIDAuMiwgMSk7XFxyXFxufVxcclxcblxcclxcbi53aW5lY2FyZHNfX2JhY2t7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICB0ZXh0LXNoYWRvdzogMTBweCAxMHB4IDEwcHggdmFyKC0tZ29sZCk7XFxyXFxuICBmb250LXNpemU6IGxhcmdlcjtcXHJcXG59XFxyXFxuXFxyXFxuLndpbmVjYXJkc19fZmFjZS1kZXRhaWxzIHtcXHJcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHRyYW5zbGF0ZVooNjBweCkgc2NhbGUoMC45NCk7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgdHJhbnNsYXRlWig2MHB4KSBzY2FsZSgwLjk0KTtcXHJcXG50b3A6IDUwJTtcXHJcXG5wb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxubGVmdDogMDtcXHJcXG53aWR0aDogMTAwJTtcXHJcXG5wYWRkaW5nOiAycmVtO1xcclxcbi13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxub3V0bGluZTogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbi13ZWJraXQtcGVyc3BlY3RpdmU6IGluaGVyaXQ7XFxyXFxuICBwZXJzcGVjdGl2ZTogaW5oZXJpdDtcXHJcXG56LWluZGV4OiAzO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ud2luZWNhcmRzX19pdGVtIC53aW5lY2FyZHNfX2JhY2t7XFxyXFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xcclxcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcXHJcXG4gIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXHJcXG4gICAgICAgICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXHJcXG59XFxyXFxuXFxyXFxuLndpbmVjYXJkc19faXRlbSAud2luZWNhcmRzX19mYWNle1xcclxcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XFxyXFxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcXHJcXG4gIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXHJcXG4gICAgICAgICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXHJcXG59XFxyXFxuXFxyXFxuLndpbmVjYXJkc19faXRlbTpmb2N1cyAud2luZWNhcmRzX19iYWNrLFxcclxcbi53aW5lY2FyZHNfX2l0ZW06aG92ZXIgLndpbmVjYXJkc19fYmFja3tcXHJcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xcclxcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XFxyXFxuICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxyXFxuICAgICAgICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxyXFxufVxcclxcblxcclxcbi53aW5lY2FyZHNfX2l0ZW06aG92ZXIgLndpbmVjYXJkc19fZmFjZSxcXHJcXG4ud2luZWNhcmRzX19pdGVtOmZvY3VzIC53aW5lY2FyZHNfX2ZhY2V7XFxyXFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgtMTgwZGVnKTtcXHJcXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKC0xODBkZWcpO1xcclxcbiAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcclxcbiAgICAgICAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcclxcbn1cXHJcXG5cXHJcXG4ud2luZWNhcmRzX19mYWNlLXBob3Rve1xcclxcbiAgd2lkdGg6IDEwZW07XFxyXFxuICBoZWlnaHQ6IDEwZW07XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiAxMDAlO1xcclxcbiAgbWFyZ2luOiAxZW07XFxyXFxufVxcclxcblxcclxcbi53aW5lY2FyZHNfX2JhY2stbmFtZSB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxZW07XFxyXFxuICB0ZXh0LXNoYWRvdzogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5jYXJ0X19idG4ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ29sZCk7XFxyXFxuICBib3JkZXI6IHZhcigtLWdvbGQpO1xcclxcbiAgY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcclxcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggMTBweCB2YXIoLS1iYWNrZ3JvdW5kKTtcXHJcXG4gIGJveC1zaGFkb3c6IDEwcHggMTBweCAyMHB4IHZhcigtLWJhY2tncm91bmQpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgcGFkZGluZzogMWVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNpdGlvbjogMC4ycztcXHJcXG4gIG1hcmdpbi10b3A6IDJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcnRfX2J0bjpob3ZlcixcXHJcXG4uY2FydF9fYnRuOmZvY3Vze1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxyXFxuICBib3gtc2hhZG93OiAxMHB4IDEwcHggMjBweCB2YXIoLS1nb2xkKTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICB2YXIoLS1nb2xkKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1nb2xkKTtcXHJcXG4gIHRleHQtc2hhZG93OiAycHggMnB4IDEwcHggdmFyKC0tZ29sZCk7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ltZy9iZzEuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiYXNzZXRzL2ltZy9zZWFyY2hfaWNvbl8xNTM0Mzguc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvaW1nL2NhcnQtZ29sZC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXHJcXG4gLS1iYWNrZ3JvdW5kOiBibGFjaztcXHJcXG4gLS1yZWQ6ICNkNjAwMDA7XFxyXFxuIC0tZ29sZDogI2ZkYzg1NDtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIG1heC13aWR0aDogMTAwdnc7XFxyXFxuICBtYXgtaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcclxcbiAgICAnaGVhZGVyIGhlYWRlciBoZWFkZXInXFxyXFxuICAgICdtYWluIG1haW4gbWFpbidcXHJcXG4gICAgJ2Zvb3RlciBmb290ZXIgZm9vdGVyJztcXHJcXG4gIGdyaWQtcm93LWdhcDogMWVtO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdvbGQpO1xcclxcbiAgYm9yZGVyOiB2YXIoLS1nb2xkKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXHJcXG4gIHRleHQtc2hhZG93OiAycHggMnB4IDEwcHggdmFyKC0tYmFja2dyb3VuZCk7XFxyXFxuICBib3gtc2hhZG93OiAxMHB4IDEwcHggMjBweCB2YXIoLS1iYWNrZ3JvdW5kKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIHBhZGRpbmc6IDFlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxyXFxufVxcclxcbmJ1dHRvbjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXHJcXG4gIGJveC1zaGFkb3c6IDEwcHggMTBweCAyMHB4IHZhcigtLWdvbGQpO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgIHZhcigtLWdvbGQpO1xcclxcbiAgY29sb3I6IHZhcigtLWdvbGQpO1xcclxcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggMTBweCB2YXIoLS1nb2xkKTtcXHJcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxyXFxufVxcclxcbiAgLmhlYWRlciB7XFxyXFxuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luOiAgMWVtO1xcclxcbiAgfVxcclxcbiAgLnNlYXJjaC1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIG1heC13aWR0aDogMzAwcHg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc2VhcmNoLWxpc3Qge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMzBweDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gIH1cXHJcXG4uc2VhcmNoLWxpc3QgbGkuaGlkZSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4gIC5zZWFyY2gtY29udGFpbmVyX19pbnB1dCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcclxcbiAgICBwYWRkaW5nOiA2cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTdweDtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZ29sZCk7XFxyXFxuICAgIGJveC1zaGFkb3c6ICAwIDAgMzBweCB2YXIoLS1nb2xkKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNlYXJjaC1jb250YWluZXJfX2lucHV0OmZvY3Vze1xcclxcbiAgICBib3gtc2hhZG93OiBpbnNldCAgMCAwIDMwcHggdmFyKC0tZ29sZCk7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc3VibWl0X2J1dHRvbiB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgbm8tcmVwZWF0IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDMycHg7XFxyXFxuICAgIGhlaWdodDogMzJweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcclxcbiAgICBib3gtc2hhZG93OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uc3VibWl0X2J1dHRvbjpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuNCwgMS40KTtcXHJcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiAgLmhlYWRlcl9fY2FydCB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB3aWR0aDogM2VtO1xcclxcbiAgaGVpZ2h0OiAzZW07XFxyXFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcclxcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKSBuby1yZXBlYXQgY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5oZWFkZXJfX2NhcnQ6aG92ZXIge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSwgMS4xKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jYXJ0X19wcm9kdWN0cyB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiA1cHg7XFxyXFxuICAgIGxlZnQ6IDVweDtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZCk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1nb2xkKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBwYWRkaW5nOiAxcHggNnB4O1xcclxcbiAgICB3aWR0aDogMjBweDtcXHJcXG4gICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1haW57XFxyXFxuICAgIGdyaWQtYXJlYTogbWFpbjtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1hcmdpbjogMCAxZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDFlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5vdmVybGF5IHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcclxcbiAgICBvcGFjaXR5OiAwLjU7XFxyXFxuICAgIHotaW5kZXg6IDk5O1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcblxcclxcbiAgfVxcclxcblxcclxcbiAgLm92ZXJsYXkuYWN0aXZlIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZm9vdGVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICBwYWRkaW5nOiAxNXB4IDBweDtcXHJcXG4gICAgY29sb3I6IHZhcigtLWdvbGQpO1xcclxcbn1cXHJcXG5he1xcclxcbiAgY29sb3I6IHZhcigtLWdvbGQpO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyX3dyYXBwZXIge1xcclxcbiAgbWF4LXdpZHRoOiA4MHZ3O1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnJzcyB7XFxyXFxuICB3aWR0aDogMTAwcHg7XFxyXFxuICBmaWxsOiB2YXIoLS1nb2xkKTtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJz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O1xcclxcbiAtLXJlZDogI2Q2MDAwMDtcXHJcXG4gLS1nb2xkOiAjZmRjODU0O1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5hIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgbWF4LXdpZHRoOiAxMDB2dztcXHJcXG4gIG1heC1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxyXFxuICAgICdoZWFkZXIgaGVhZGVyIGhlYWRlcidcXHJcXG4gICAgJ21haW4gbWFpbiBtYWluJ1xcclxcbiAgICAnZm9vdGVyIGZvb3RlciBmb290ZXInO1xcclxcbiAgZ3JpZC1yb3ctZ2FwOiAxZW07XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG87XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2Fzc2V0cy9pbWcvYmcxLmpwZycpO1xcclxcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1nb2xkKTtcXHJcXG4gIGJvcmRlcjogdmFyKC0tZ29sZCk7XFxyXFxuICBjb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxyXFxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAxMHB4IHZhcigtLWJhY2tncm91bmQpO1xcclxcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IDIwcHggdmFyKC0tYmFja2dyb3VuZCk7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBwYWRkaW5nOiAxZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcclxcbn1cXHJcXG5idXR0b246aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxyXFxuICBib3gtc2hhZG93OiAxMHB4IDEwcHggMjBweCB2YXIoLS1nb2xkKTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICB2YXIoLS1nb2xkKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1nb2xkKTtcXHJcXG4gIHRleHQtc2hhZG93OiAycHggMnB4IDEwcHggdmFyKC0tZ29sZCk7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcclxcbn1cXHJcXG4gIC5oZWFkZXIge1xcclxcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogIDFlbTtcXHJcXG4gIH1cXHJcXG4gIC5zZWFyY2gtY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNlYXJjaC1saXN0IHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDMwcHg7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICB9XFxyXFxuLnNlYXJjaC1saXN0IGxpLmhpZGUge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuICAuc2VhcmNoLWNvbnRhaW5lcl9faW5wdXQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXHJcXG4gICAgcGFkZGluZzogNnB4O1xcclxcbiAgICBmb250LXNpemU6IDE3cHg7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWdvbGQpO1xcclxcbiAgICBib3gtc2hhZG93OiAgMCAwIDMwcHggdmFyKC0tZ29sZCk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zZWFyY2gtY29udGFpbmVyX19pbnB1dDpmb2N1c3tcXHJcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgIDAgMCAzMHB4IHZhcigtLWdvbGQpO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnN1Ym1pdF9idXR0b24ge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoYXNzZXRzL2ltZy9zZWFyY2hfaWNvbl8xNTM0Mzguc3ZnKSBuby1yZXBlYXQgY2VudGVyO1xcclxcbiAgICB3aWR0aDogMzJweDtcXHJcXG4gICAgaGVpZ2h0OiAzMnB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxyXFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5zdWJtaXRfYnV0dG9uOmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS40LCAxLjQpO1xcclxcbiAgdHJhbnNpdGlvbjogMC4zcztcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuICAuaGVhZGVyX19jYXJ0IHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHdpZHRoOiAzZW07XFxyXFxuICBoZWlnaHQ6IDNlbTtcXHJcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoJy4vYXNzZXRzL2ltZy9jYXJ0LWdvbGQuc3ZnJykgbm8tcmVwZWF0IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaGVhZGVyX19jYXJ0OmhvdmVyIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEsIDEuMSk7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY2FydF9fcHJvZHVjdHMge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogNXB4O1xcclxcbiAgICBsZWZ0OiA1cHg7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tZ29sZCk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgcGFkZGluZzogMXB4IDZweDtcXHJcXG4gICAgd2lkdGg6IDIwcHg7XFxyXFxuICAgIGhlaWdodDogMjBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tYWlue1xcclxcbiAgICBncmlkLWFyZWE6IG1haW47XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgICBtYXJnaW46IDAgMWVtO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxZW07XFxyXFxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAub3ZlcmxheSB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXHJcXG4gICAgb3BhY2l0eTogMC41O1xcclxcbiAgICB6LWluZGV4OiA5OTtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG5cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5vdmVybGF5LmFjdGl2ZSB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmZvb3RlciB7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgcGFkZGluZzogMTVweCAwcHg7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1nb2xkKTtcXHJcXG59XFxyXFxuYXtcXHJcXG4gIGNvbG9yOiB2YXIoLS1nb2xkKTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlcl93cmFwcGVyIHtcXHJcXG4gIG1heC13aWR0aDogODB2dztcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5yc3Mge1xcclxcbiAgd2lkdGg6IDEwMHB4O1xcclxcbiAgZmlsbDogdmFyKC0tZ29sZCk7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jYXJ0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY2FydC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZmlsdGVycy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2ZpbHRlcnMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3dpbmVjYXJkcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3dpbmVjYXJkcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2xvYmFsLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2xvYmFsLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBXaW5lRGV0YWlscyB9IGZyb20gXCIuLi8uLi90eXBlcy9pbnRlcmZhY2VzXCI7XHJcbmltcG9ydCB7IENhcnRTZXR0aW5ncyB9IGZyb20gXCIuLi9jYXJ0L2NhcnRcIjtcclxuaW1wb3J0IFdpbmVDYXJkcyBmcm9tIFwiLi4vd2luZWNhcmRzL3dpbmVjYXJkc1wiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi8uLi9odG1sLWNvbXBvbmVudHMvaGVhZGVyL2hlYWRlclwiO1xyXG5pbXBvcnQgTWFpbiBmcm9tIFwiLi4vLi4vaHRtbC1jb21wb25lbnRzL21haW4vbWFpblwiO1xyXG5pbXBvcnQgRmlsdGVyU2V0dGluZ3MgZnJvbSBcIi4uL2ZpbHRlcnMvZmlsdGVyU2V0dGluZ3NcIjtcclxuaW1wb3J0IEZpbHRlcnMgZnJvbSBcIi4uLy4uL2h0bWwtY29tcG9uZW50cy9maWx0ZXJzL2ZpbHRlcnNcIjtcclxuaW1wb3J0IHsgTG9jYWxTdG9yYWdlLCBsb2NhbFN0b3JhZ2VLZXlzIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2xvY2Fsc3RvcmFnZVwiO1xyXG5pbXBvcnQgeyBnb29kcyB9IGZyb20gXCIuLi8uLi9jb25zdGF0cy9nb29kc1wiO1xyXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuLi8uLi91dGlscy9jb21wb25lbnRcIjtcclxuaW1wb3J0IFNlYXJjaCBmcm9tIFwiLi4vc2VhcmNoL3NlYXJjaFwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi8uLi9odG1sLWNvbXBvbmVudHMvZm9vdGVyL2Zvb3RlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIHtcclxuICBwcml2YXRlIHN0YXRpYyBjb250YWluZXI6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuYm9keTtcclxuICBwcml2YXRlIGhlYWRlcjogSGVhZGVyO1xyXG4gIHByaXZhdGUgbWFpbjogTWFpbjtcclxuICBwcml2YXRlIGZvb3RlcjogRm9vdGVyO1xyXG4gIGNhcnRzZXR0aW5nczogQ2FydFNldHRpbmdzO1xyXG4gIHdpbmVjYXJkczogV2luZUNhcmRzO1xyXG4gIGZpbHRlclNldHRpbmdzOiBGaWx0ZXJTZXR0aW5ncztcclxuICBzZWFyY2g6IFNlYXJjaDtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuY2FydHNldHRpbmdzID0gbmV3IENhcnRTZXR0aW5ncygpO1xyXG4gICAgdGhpcy53aW5lY2FyZHMgPSBuZXcgV2luZUNhcmRzKCk7XHJcbiAgICB0aGlzLmZpbHRlclNldHRpbmdzID0gbmV3IEZpbHRlclNldHRpbmdzKCk7XHJcbiAgICB0aGlzLmhlYWRlciA9IG5ldyBIZWFkZXIoJ2hlYWRlcicsICdoZWFkZXInKTtcclxuICAgIHRoaXMubWFpbiA9IG5ldyBNYWluKCdtYWluJywgJ21haW4nKTtcclxuICAgIHRoaXMuZm9vdGVyID0gbmV3IEZvb3RlcignZm9vdGVyJywgJ2Zvb3RlcicpO1xyXG4gICAgdGhpcy5zZWFyY2ggPSBuZXcgU2VhcmNoKCk7XHJcbiAgfVxyXG5cclxuICBzdGFydChkYXRhOiBXaW5lRGV0YWlsc1tdKSB7XHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NvcnRlZCcpKSB7XHJcbiAgICAgIGRhdGEgPSBMb2NhbFN0b3JhZ2UuZ2V0TG9jYWxTdG9yYWdlKGxvY2FsU3RvcmFnZUtleXMuc29ydGVkKSB8fCBkYXRhO1xyXG4gICAgfTtcclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmlsdGVyJykpIHtcclxuICAgICAgdGhpcy5maWx0ZXJTZXR0aW5ncy5maWx0ZXJzT2JqID0gTG9jYWxTdG9yYWdlLmdldExvY2FsU3RvcmFnZShsb2NhbFN0b3JhZ2VLZXlzLmZpbHRlcikgfHwgJyc7XHJcbiAgICB9O1xyXG5cclxuICAgIEFwcC5jb250YWluZXIuYXBwZW5kKHRoaXMuaGVhZGVyLnJlbmRlcigpKTtcclxuICAgIEFwcC5jb250YWluZXIuYXBwZW5kKHRoaXMubWFpbi5yZW5kZXIoKSk7XHJcbiAgICBBcHAuY29udGFpbmVyLmFwcGVuZCh0aGlzLmZvb3Rlci5yZW5kZXIoKSk7XHJcblxyXG4gICAgY29uc3QgY291bnRyeUZpbHRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY291bnRyeS1maWx0ZXInKTtcclxuICAgIGNvbnN0IGNvbG9yRmlsdGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb2xvci1maWx0ZXInKTtcclxuXHJcbiAgICB0aGlzLndpbmVjYXJkcy5yZW5kZXIoZGF0YSk7XHJcbiAgICB0aGlzLmNhcnRzZXR0aW5ncy5yZW5kZXIoKTtcclxuXHJcbiAgICBjb25zdCBmaWx0ZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZpbHRlcnMnKTtcclxuICAgIFsuLi5maWx0ZXJzIS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpXS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICBpZiAodGhpcy5maWx0ZXJTZXR0aW5ncy5maWx0ZXJzT2JqLmNvdW50cnkuaW5jbHVkZXMoaXRlbS52YWx1ZSkpIHtcclxuICAgICAgICBpdGVtLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZmlsdGVyU2V0dGluZ3MuZmlsdGVyQnlDb3VudHJ5KGRhdGEpO1xyXG4gICAgICAgIHRoaXMud2luZWNhcmRzLnJlbmRlcih0aGlzLmZpbHRlclNldHRpbmdzLmZpbHRlcmVkKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5maWx0ZXJTZXR0aW5ncy5maWx0ZXJzT2JqLmNvbG9yLmluY2x1ZGVzKGl0ZW0udmFsdWUpKSB7XHJcbiAgICAgICAgaXRlbS5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmZpbHRlclNldHRpbmdzLmZpbHRlckJ5Q29sb3IoZGF0YSk7XHJcbiAgICAgICAgdGhpcy53aW5lY2FyZHMucmVuZGVyKHRoaXMuZmlsdGVyU2V0dGluZ3MuZmlsdGVyZWQpO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIGNvbG9yRmlsdGVycyEuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBldmVudCA9PiB7XHJcbiAgICAgIHRoaXMuZmlsdGVyU2V0dGluZ3MuZmlsdGVyQnlDb2xvcihkYXRhKTtcclxuICAgICAgdGhpcy53aW5lY2FyZHMucmVuZGVyKHRoaXMuZmlsdGVyU2V0dGluZ3MuZmlsdGVyZWQpO1xyXG5cclxuICAgIH0pXHJcbiAgICBjb3VudHJ5RmlsdGVycyEuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBldmVudCA9PiB7XHJcbiAgICAgIHRoaXMuZmlsdGVyU2V0dGluZ3MuZmlsdGVyQnlDb3VudHJ5KGRhdGEpO1xyXG4gICAgICB0aGlzLndpbmVjYXJkcy5yZW5kZXIodGhpcy5maWx0ZXJTZXR0aW5ncy5maWx0ZXJlZCk7XHJcblxyXG4gICAgfSlcclxuICAgXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWNvbnRhaW5lcl9faW5wdXQnKSFcclxuICAgIC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGV2ZW50ID0+IHtcclxuICAgICAgdGhpcy5zZWFyY2guc2VhcmNoKGRhdGEpO1xyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnNlYXJjaC5zZWFyY2hEYXRhKVxyXG4gICAgICB0aGlzLndpbmVjYXJkcy5yZW5kZXIodGhpcy5zZWFyY2guc2VhcmNoRGF0YSk7XHJcbiAgICB9KVxyXG4gICAgZG9jdW1lbnRcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5yZXNldC1maWx0ZXJzJykhXHJcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgdGhpcy5maWx0ZXJTZXR0aW5ncy5yZXNldEZpbHRlcnMoKTtcclxuICAgICAgICB0aGlzLndpbmVjYXJkcy5yZW5kZXIoZGF0YSk7XHJcbiAgICAgIH0pXHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICAgIGlmICgoPEhUTUxFbGVtZW50PmV2ZW50LnRhcmdldCkhLmNsYXNzTGlzdC5jb250YWlucygnY2FydF9fYWRkJykpIHtcclxuICAgICAgICBsZXQgYXJ0aWN1bCA9IE51bWJlcigoPEhUTUxFbGVtZW50PmV2ZW50LnRhcmdldCkhLmRhdGFzZXRbJ2FydGljdWwnXSkhO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGFydGljdWwpXHJcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0KVxyXG4gICAgICAgIGlmICh0aGlzLmNhcnRzZXR0aW5ncy50b3RhbEl0ZW1zIDwgMjApIHtcclxuICAgICAgICAgIHRoaXMuY2FydHNldHRpbmdzLmNhcnRBZGQoZGF0YSwgYXJ0aWN1bCk7XHJcbiAgICAgICAgICB0aGlzLmNhcnRzZXR0aW5ncy5yZW5kZXIoKTtcclxuICAgICAgICAgIHRoaXMud2luZWNhcmRzLnJlbmRlcihkYXRhKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBlcnJvckRpdjogSFRNTEVsZW1lbnQgPSBuZXcgQ29tcG9uZW50KCdkaXYnLCAnY2FydF9fZXJyb3InKS5yZW5kZXIoKTtcclxuICAgICAgICAgICAgZXJyb3JEaXYuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICA8cCBjbGFzcz1cImVycm9yX19tZXNzYWdlXCI+0JrQvtGA0LfQuNC90LAg0LfQsNC/0L7Qu9C90LXQvdCwLCDQv9C10YDQtdC50YLQuCDQsiDQutC+0YDQt9C40L3Rgz88L3A+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJlcnJvcl9fYnRuIGNhcnRfX2J0blwiID5PazwvYnV0dG9uPmBcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoZXJyb3JEaXYpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheScpIS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZigoPEhUTUxFbGVtZW50PmV2ZW50LnRhcmdldCkhLmNsYXNzTGlzdC5jb250YWlucygnZXJyb3JfX2J0bicpKXtcclxuICAgICAgICBpZigoPEhUTUxFbGVtZW50PmV2ZW50LnRhcmdldCkhLmNsYXNzTGlzdC5jb250YWlucygnY2FydF9fYnRuJykpe1xyXG4gICAgICAgIHRoaXMuY2FydHNldHRpbmdzLmNhcnRPcGVuKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGVycm9yRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcnRfX2Vycm9yJykhXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChlcnJvckRpdik7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdhdXRvJztcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheScpIS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4gICAgICB9XHJcbiAgICAgIGlmICgoPEhUTUxFbGVtZW50PmV2ZW50LnRhcmdldCkhLmNsYXNzTGlzdC5jb250YWlucygnY2FydF9fcmVtb3ZlJykpIHtcclxuICAgICAgICBsZXQgYXJ0aWN1bCA9IE51bWJlcigoPEhUTUxFbGVtZW50PmV2ZW50LnRhcmdldCkhLmRhdGFzZXRbJ2FydGljdWwnXSk7XHJcbiAgICAgICAgaWYgKHRoaXMuY2FydHNldHRpbmdzLnRvdGFsSXRlbXMgPiAwKSB7XHJcbiAgICAgICAgICB0aGlzLmNhcnRzZXR0aW5ncy5jYXJ0UmVtb3ZlKGRhdGEsIGFydGljdWwpO1xyXG4gICAgICAgICAgdGhpcy5jYXJ0c2V0dGluZ3MucmVuZGVyKCk7XHJcbiAgICAgICAgICB0aGlzLndpbmVjYXJkcy5yZW5kZXIoZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIGRvY3VtZW50XHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yKCcuY2FydCcpIVxyXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICAgICAgdGhpcy5jYXJ0c2V0dGluZ3MucmVuZGVyKCk7XHJcbiAgICAgICAgdGhpcy5jYXJ0c2V0dGluZ3MuY2FydE9wZW4oKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2F1dG8nO1xyXG4gICAgICB9KVxyXG5cclxuICAgIGRvY3VtZW50XHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtcG9wdXAnKSFcclxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG4gICAgICAgIHRoaXMuY2FydHNldHRpbmdzLmNhcnRDbG9zZSgpO1xyXG4gICAgICB9KVxyXG5cclxuICAgIGRvY3VtZW50LlxyXG4gICAgICBxdWVyeVNlbGVjdG9yKCcuc2VsZWN0JykhLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGV2ZW50ID0+IHtcclxuICAgICAgICBpZiAoKDxIVE1MT3B0aW9uRWxlbWVudD5ldmVudC50YXJnZXQpIS52YWx1ZSA9PT0gJ0J5UHJpY2VVcCcpIHtcclxuICAgICAgICAgIHRoaXMuZmlsdGVyU2V0dGluZ3Muc29ydFByaWNlVXAoZGF0YSk7XHJcbiAgICAgICAgICB0aGlzLndpbmVjYXJkcy5yZW5kZXIodGhpcy5maWx0ZXJTZXR0aW5ncy5zb3J0ZWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoKDxIVE1MT3B0aW9uRWxlbWVudD5ldmVudC50YXJnZXQpIS52YWx1ZSA9PT0gJ0J5UHJpY2VEb3duJykge1xyXG4gICAgICAgICAgdGhpcy5maWx0ZXJTZXR0aW5ncy5zb3J0UHJpY2VEb3duKGRhdGEpO1xyXG4gICAgICAgICAgdGhpcy53aW5lY2FyZHMucmVuZGVyKHRoaXMuZmlsdGVyU2V0dGluZ3Muc29ydGVkKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcblxyXG4gICAgZG9jdW1lbnRcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5yZXNldCcpIS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcclxuICAgICAgICB0aGlzLmZpbHRlclNldHRpbmdzLnJlc2V0QWxsKCk7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0aGlzLndpbmVjYXJkcy5yZW5kZXIoZGF0YSk7XHJcbiAgICAgIH0pXHJcbiAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQgJy4vY2FydC5jc3MnXHJcbmltcG9ydCB7ICBXaW5lRGV0YWlscyB9IGZyb20gJy4uLy4uL3R5cGVzL2ludGVyZmFjZXMnO1xyXG5pbXBvcnQgeyBMb2NhbFN0b3JhZ2UsIGxvY2FsU3RvcmFnZUtleXMgfSBmcm9tICcuLi8uLi91dGlscy9sb2NhbHN0b3JhZ2UnO1xyXG5pbXBvcnQgV2luZUNhcmRzIGZyb20gJy4uL3dpbmVjYXJkcy93aW5lY2FyZHMnXHJcbmV4cG9ydCBjbGFzcyBDYXJ0U2V0dGluZ3Mge1xyXG4gIGNhcnQ6IFdpbmVEZXRhaWxzW107XHJcbiAgdG90YWxJdGVtczogbnVtYmVyO1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5jYXJ0ID0gW107XHJcbiAgICB0aGlzLnRvdGFsSXRlbXMgPSB0aGlzLnRvdGFsSXRlbXMgPSBMb2NhbFN0b3JhZ2UuZ2V0TG9jYWxTdG9yYWdlKGxvY2FsU3RvcmFnZUtleXMudG90YWxJdGVtc0luQ2FydCkgfHwgMDtcclxuICB9XHJcblxyXG4gIGNhcnRBZGQoZGF0YTogV2luZURldGFpbHNbXSwgYXJ0aWN1bDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXJ0JykpIHtcclxuICAgICAgICAgIHRoaXMuY2FydCA9IExvY2FsU3RvcmFnZS5nZXRMb2NhbFN0b3JhZ2UobG9jYWxTdG9yYWdlS2V5cy5jYXJ0KSB8fCAnJztcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ29vZHMnKSkge1xyXG4gICAgICAgICAgZGF0YSA9IExvY2FsU3RvcmFnZS5nZXRMb2NhbFN0b3JhZ2UobG9jYWxTdG9yYWdlS2V5cy5nb29kcykgfHwgZGF0YTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5jYXJ0LmZpbmRJbmRleChlbGVtID0+IGVsZW0uaWQgPT09IGFydGljdWwpO1xyXG4gICAgICAgIGlmKGluZGV4ID09PSAtMSkge1xyXG4gICAgICAgICAgZGF0YVthcnRpY3VsXVsnY291bnQnXS0tO1xyXG4gICAgICAgICAgZGF0YVthcnRpY3VsXVsnaW5DYXJ0J10rKztcclxuICAgICAgICAgIHRoaXMuY2FydC5wdXNoKGRhdGFbYXJ0aWN1bF0pO1xyXG4gICAgICAgICAgdGhpcy50b3RhbEl0ZW1zKys7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICB0aGlzLnRvdGFsSXRlbXMrKztcclxuICAgICAgICAgIHRoaXMuY2FydFtpbmRleF1bJ2luQ2FydCddKys7XHJcbiAgICAgICAgICBkYXRhW2FydGljdWxdWydjb3VudCddLS07XHJcbiAgICAgICAgICBkYXRhW2FydGljdWxdWydpbkNhcnQnXSsrO1xyXG4gICAgICAgICAgdGhpcy5jYXJ0W2luZGV4XVsnY291bnQnXS0tO1xyXG4gICAgICAgIH0gXHJcbiAgICAgICAgaWYoZGF0YVthcnRpY3VsXVsnY291bnQnXSA9PT0gMCkge1xyXG4gICAgICAgICAgY29uc3Qgd2luZWNhcmRzID0gbmV3IFdpbmVDYXJkcygpO1xyXG4gICAgICAgICAgd2luZWNhcmRzLnJlbmRlcihkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgTG9jYWxTdG9yYWdlLnNldExvY2FsU3RvcmFnZShsb2NhbFN0b3JhZ2VLZXlzLmNhcnQsIHRoaXMuY2FydClcclxuICAgICAgICBMb2NhbFN0b3JhZ2Uuc2V0TG9jYWxTdG9yYWdlKGxvY2FsU3RvcmFnZUtleXMuZ29vZHMsIGRhdGEpXHJcbiAgICAgICAgTG9jYWxTdG9yYWdlLnNldExvY2FsU3RvcmFnZShsb2NhbFN0b3JhZ2VLZXlzLnRvdGFsSXRlbXNJbkNhcnQsIHRoaXMudG90YWxJdGVtcylcclxuICAgICAgfVxyXG5cclxuXHJcbiAgICAgIGNhcnRSZW1vdmUoZGF0YTogV2luZURldGFpbHNbXSwgYXJ0aWN1bDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXJ0JykpIHtcclxuICAgICAgICAgIHRoaXMuY2FydCA9IExvY2FsU3RvcmFnZS5nZXRMb2NhbFN0b3JhZ2UobG9jYWxTdG9yYWdlS2V5cy5jYXJ0KSB8fCAnJztcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ29vZHMnKSkge1xyXG4gICAgICAgICAgZGF0YSA9IExvY2FsU3RvcmFnZS5nZXRMb2NhbFN0b3JhZ2UobG9jYWxTdG9yYWdlS2V5cy5nb29kcykgfHwgZGF0YTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5jYXJ0LmZpbmRJbmRleChlbGVtID0+IGVsZW0uaWQgPT09IGFydGljdWwpO1xyXG4gICAgICAgIGlmKGluZGV4ID49IDApIHtcclxuICAgICAgICAgIHRoaXMudG90YWxJdGVtcy0tO1xyXG4gICAgICAgICAgdGhpcy5jYXJ0W2luZGV4XVsnaW5DYXJ0J10tLTtcclxuICAgICAgICAgIGRhdGFbYXJ0aWN1bF1bJ2NvdW50J10rKztcclxuICAgICAgICAgIGRhdGFbYXJ0aWN1bF1bJ2luQ2FydCddLS07XHJcbiAgICAgICAgICB0aGlzLmNhcnRbaW5kZXhdWydjb3VudCddKys7XHJcbiAgICAgICAgfSBcclxuICAgICAgICBMb2NhbFN0b3JhZ2Uuc2V0TG9jYWxTdG9yYWdlKGxvY2FsU3RvcmFnZUtleXMuY2FydCwgdGhpcy5jYXJ0KVxyXG4gICAgICAgIExvY2FsU3RvcmFnZS5zZXRMb2NhbFN0b3JhZ2UobG9jYWxTdG9yYWdlS2V5cy5nb29kcywgZGF0YSlcclxuICAgICAgICBMb2NhbFN0b3JhZ2Uuc2V0TG9jYWxTdG9yYWdlKGxvY2FsU3RvcmFnZUtleXMudG90YWxJdGVtc0luQ2FydCwgdGhpcy50b3RhbEl0ZW1zKVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdGhpcy5jYXJ0ID0gTG9jYWxTdG9yYWdlLmdldExvY2FsU3RvcmFnZShsb2NhbFN0b3JhZ2VLZXlzLmNhcnQpIHx8IFtdO1xyXG4gICAgICAgIGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG4gICAgICAgIGNvbnN0IGNhcnRJdGVtc1RlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FydEl0ZW1zVGVtcCcpIGFzIEhUTUxUZW1wbGF0ZUVsZW1lbnQ7XHJcbiAgICAgICAgY29uc3QgYmFkZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FydF9fcHJvZHVjdHMnKTtcclxuICAgICAgICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0LXBvcHVwJyk7XHJcbiAgICAgICAgbGV0IHRvdGFsU3VtID0gMDtcclxuICAgICAgICB0aGlzLmNhcnQuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgIGNvbnN0IGNhcnRJdGVtID0gY2FydEl0ZW1zVGVtcC5jb250ZW50LmNsb25lTm9kZSh0cnVlKSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICAgIChjYXJ0SXRlbS5xdWVyeVNlbGVjdG9yKCcuY2FydC1pdGVtX19uYW1lJykpIS50ZXh0Q29udGVudCA9IGl0ZW0ubmFtZTtcclxuICAgICAgICAgIChjYXJ0SXRlbS5xdWVyeVNlbGVjdG9yKCcuY2FydF9faW5wdXQnKSkhLnRleHRDb250ZW50ID0gaXRlbS5pbkNhcnQudG9TdHJpbmcoKTtcclxuICAgICAgICAgIGNvbnN0IGl0ZW1zUHJpY2UgPSAraXRlbS5wcmljZSAqIGl0ZW0uaW5DYXJ0O1xyXG4gICAgICAgICAgdG90YWxTdW0gKz0gaXRlbXNQcmljZTtcclxuICAgICAgICAgIChjYXJ0SXRlbS5xdWVyeVNlbGVjdG9yKCcuY2FydC1pdGVtX19wcmljZScpKSEudGV4dENvbnRlbnQgPSBgJHtpdGVtc1ByaWNlfWA7XHJcbiAgICAgICAgICAoY2FydEl0ZW0ucXVlcnlTZWxlY3RvcignLmNhcnRfX2FkZCcpKSEuc2V0QXR0cmlidXRlKCdkYXRhLWFydGljdWwnLCBgJHtpdGVtLmlkfWApO1xyXG4gICAgICAgICAgICBpZihpdGVtLmNvdW50ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgKGNhcnRJdGVtLnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0X19hZGQnKSBhcyBIVE1MRWxlbWVudCkhLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgKGNhcnRJdGVtLnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0X19hZGQnKSBhcyBIVE1MRWxlbWVudCkhLnN0eWxlLm9wYWNpdHkgPSAnMC41JztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgKGNhcnRJdGVtLnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0X19yZW1vdmUnKSkhLnNldEF0dHJpYnV0ZSgnZGF0YS1hcnRpY3VsJywgYCR7aXRlbS5pZH1gKTtcclxuXHJcbiAgICAgICAgICAgIGlmKGl0ZW0uaW5DYXJ0ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgKGNhcnRJdGVtLnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0X19yZW1vdmUnKSBhcyBIVE1MRWxlbWVudCkhLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgKGNhcnRJdGVtLnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0X19yZW1vdmUnKSBhcyBIVE1MRWxlbWVudCkhLnN0eWxlLm9wYWNpdHkgPSAnMC41JztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcnRfX3RvdGFsJykhLnRleHRDb250ZW50ID0gYCR7dG90YWxTdW19YFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgZnJhZ21lbnQuYXBwZW5kKGNhcnRJdGVtKTtcclxuICAgICAgICB9KSAgXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcnRfX3Byb2R1Y3RzJykhLnRleHRDb250ZW50ID0gYCR7dGhpcy50b3RhbEl0ZW1zfWBcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FydC1wb3B1cF9fY29udGFpbmVyJykhLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0LXBvcHVwX19jb250YWluZXInKSEuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xyXG4gICAgICB9XHJcblxyXG5cclxuICAgICAgY2FydE9wZW4oKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcnQtcG9wdXAnKSEuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXknKSEuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIFxyXG4gICAgICBjYXJ0Q2xvc2UoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcnQtcG9wdXAnKSEuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXknKSEuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQge0RlZmF1bHRGaWx0ZXJzLCAgV2luZURldGFpbHMgfSBmcm9tIFwiLi4vLi4vdHlwZXMvaW50ZXJmYWNlc1wiO1xyXG5pbXBvcnQgeyBMb2NhbFN0b3JhZ2UsIGxvY2FsU3RvcmFnZUtleXMgfSBmcm9tIFwiLi4vLi4vdXRpbHMvbG9jYWxzdG9yYWdlXCI7XHJcbmltcG9ydCB7IENhcnRTZXR0aW5ncyB9IGZyb20gXCIuLi9jYXJ0L2NhcnRcIjtcclxuaW1wb3J0ICcuL2ZpbHRlcnMuY3NzJztcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsdGVyU2V0dGluZ3Mge1xyXG4gIGZpbHRlcmVkOiBXaW5lRGV0YWlsc1tdO1xyXG4gIGZpbHRlckFycjogV2luZURldGFpbHNbXTtcclxuICBmaWx0ZXJzT2JqIDogRGVmYXVsdEZpbHRlcnM7XHJcbiAgc29ydGVkOiBXaW5lRGV0YWlsc1tdO1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5maWx0ZXJlZCA9IFtdO1xyXG4gICAgdGhpcy5maWx0ZXJBcnIgPSBbXTtcclxuICAgIHRoaXMuc29ydGVkID0gW107XHJcbiAgICB0aGlzLmZpbHRlcnNPYmogPSB7XHJcbiAgICAgIGNvbG9yOiBbXSxcclxuICAgICAgY291bnRyeTogW10sXHJcbiAgICAgIHllYXI6IFtdLFxyXG4gICAgICBwcmljZTogW10sXHJcbiAgICB9XHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ZpbHRlcicpKSB7XHJcbiAgICAgIHRoaXMuZmlsdGVyc09iaiA9IExvY2FsU3RvcmFnZS5nZXRMb2NhbFN0b3JhZ2UobG9jYWxTdG9yYWdlS2V5cy5maWx0ZXIpIHx8ICcnO1xyXG4gICAgfTtcclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmlsdGVyQXJyJykpIHtcclxuICAgICAgdGhpcy5maWx0ZXJBcnIgPSBMb2NhbFN0b3JhZ2UuZ2V0TG9jYWxTdG9yYWdlKGxvY2FsU3RvcmFnZUtleXMuZmlsdGVyQXJyKSB8fCAnJztcclxuICAgIH07XHJcblxyXG4gIH1cclxuICBcclxuICBmaWx0ZXJCeUNvdW50cnkoZGF0YTogV2luZURldGFpbHNbXSkge1xyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzb3J0ZWQnKSkge1xyXG4gICAgICBkYXRhID0gTG9jYWxTdG9yYWdlLmdldExvY2FsU3RvcmFnZShsb2NhbFN0b3JhZ2VLZXlzLnNvcnRlZCkgfHwgZGF0YTtcclxuICAgIH07XHJcbiAgXHJcbiAgIHRoaXMuZmlsdGVyZWQgPSBbXTtcclxuICBjb25zdCBmaWx0ZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZpbHRlcnMnKTtcclxuICB0aGlzLmZpbHRlcnNPYmouY291bnRyeSA9IFsuLi5maWx0ZXJzIS5xdWVyeVNlbGVjdG9yQWxsKCcjY291bnRyeSBpbnB1dDpjaGVja2VkJyldLm1hcChpdGVtID0+IChpdGVtIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlKTtcclxuICBjb25zb2xlLmxvZyh0aGlzLmZpbHRlcnNPYmouY291bnRyeSk7XHJcbiAgZGF0YS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgIGlmKHRoaXMuZmlsdGVyc09iai5jb3VudHJ5LmluY2x1ZGVzKGl0ZW0uY291bnRyeSkpe1xyXG4gICAgICB0aGlzLmZpbHRlcmVkLnB1c2goaXRlbSlcclxuICAgICAgY29uc29sZS5sb2codGhpcy5maWx0ZXJlZClcclxuICAgICB9XHJcbiAgfSlcclxuICBMb2NhbFN0b3JhZ2Uuc2V0TG9jYWxTdG9yYWdlKGxvY2FsU3RvcmFnZUtleXMuZmlsdGVyLCB0aGlzLmZpbHRlcnNPYmopXHJcbiAgTG9jYWxTdG9yYWdlLnNldExvY2FsU3RvcmFnZShsb2NhbFN0b3JhZ2VLZXlzLmZpbHRlckFyciwgdGhpcy5maWx0ZXJlZClcclxufVxyXG5cclxuZmlsdGVyQnlDb2xvcihkYXRhOiBXaW5lRGV0YWlsc1tdKSB7XHJcbiAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0obG9jYWxTdG9yYWdlS2V5cy5maWx0ZXJBcnIpO1xyXG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc29ydGVkJykpIHtcclxuICAgIGRhdGEgPSBMb2NhbFN0b3JhZ2UuZ2V0TG9jYWxTdG9yYWdlKGxvY2FsU3RvcmFnZUtleXMuc29ydGVkKSB8fCBkYXRhO1xyXG4gIH07XHJcbiBcclxuICAgdGhpcy5maWx0ZXJlZCA9IFtdO1xyXG4gIGNvbnN0IGZpbHRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmlsdGVycycpO1xyXG4gIHRoaXMuZmlsdGVyc09iai5jb2xvciA9IFsuLi5maWx0ZXJzIS5xdWVyeVNlbGVjdG9yQWxsKCcjY29sb3IgaW5wdXQ6Y2hlY2tlZCcpXS5tYXAoaXRlbSA9PiAoaXRlbSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSk7XHJcbiAgY29uc29sZS5sb2codGhpcy5maWx0ZXJzT2JqLmNvbG9yKVxyXG4gIGRhdGEuZm9yRWFjaChpdGVtID0+IHtcclxuICBpZih0aGlzLmZpbHRlcnNPYmouY29sb3IuaW5jbHVkZXMoaXRlbS5jb2xvcikpe1xyXG4gICAgdGhpcy5maWx0ZXJlZC5wdXNoKGl0ZW0pXHJcbiAgfVxyXG59KVxyXG5Mb2NhbFN0b3JhZ2Uuc2V0TG9jYWxTdG9yYWdlKGxvY2FsU3RvcmFnZUtleXMuZmlsdGVyLCB0aGlzLmZpbHRlcnNPYmopXHJcbkxvY2FsU3RvcmFnZS5zZXRMb2NhbFN0b3JhZ2UobG9jYWxTdG9yYWdlS2V5cy5maWx0ZXJBcnIsIHRoaXMuZmlsdGVyZWQpXHJcbn1cclxuXHJcbnJlc2V0RmlsdGVycygpIHtcclxudGhpcy5maWx0ZXJzT2JqLmNvbG9yID0gW107XHJcbnRoaXMuZmlsdGVyc09iai5jb3VudHJ5ID0gW107XHJcbmNvbnN0IGZpbHRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmlsdGVycycpO1xyXG5bLi4uZmlsdGVycyEucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQ6Y2hlY2tlZCcpXS5tYXAoaXRlbSA9PiAoaXRlbSBhcyBIVE1MSW5wdXRFbGVtZW50KS5jaGVja2VkID0gZmFsc2UpO1xyXG5Mb2NhbFN0b3JhZ2Uuc2V0TG9jYWxTdG9yYWdlKGxvY2FsU3RvcmFnZUtleXMuZmlsdGVyQXJyLCB0aGlzLmZpbHRlckFycik7XHJcbkxvY2FsU3RvcmFnZS5zZXRMb2NhbFN0b3JhZ2UobG9jYWxTdG9yYWdlS2V5cy5maWx0ZXIsIHRoaXMuZmlsdGVyc09iaik7XHJcblxyXG59XHJcblxyXG5yZXNldEFsbCgpIHtcclxuIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG59XHJcblxyXG5zb3J0UHJpY2VVcChkYXRhOiBXaW5lRGV0YWlsc1tdKXtcclxuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NvcnRlZCcpKSB7XHJcbiAgICBkYXRhID0gTG9jYWxTdG9yYWdlLmdldExvY2FsU3RvcmFnZShsb2NhbFN0b3JhZ2VLZXlzLnNvcnRlZCkgfHwgZGF0YTtcclxuICB9O1xyXG4gIHRoaXMuc29ydGVkID0gZGF0YS5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICByZXR1cm4gK2EucHJpY2UgLSArYi5wcmljZTtcclxuICB9KVxyXG4gIGNvbnNvbGUubG9nKHRoaXMuc29ydGVkKTtcclxuICBMb2NhbFN0b3JhZ2Uuc2V0TG9jYWxTdG9yYWdlKGxvY2FsU3RvcmFnZUtleXMuc29ydGVkLCB0aGlzLnNvcnRlZClcclxufVxyXG5zb3J0UHJpY2VEb3duKGRhdGE6IFdpbmVEZXRhaWxzW10pe1xyXG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc29ydGVkJykpIHtcclxuICAgIGRhdGEgPSBMb2NhbFN0b3JhZ2UuZ2V0TG9jYWxTdG9yYWdlKGxvY2FsU3RvcmFnZUtleXMuc29ydGVkKSB8fCBkYXRhO1xyXG4gIH07XHJcbiAgdGhpcy5zb3J0ZWQgPSBkYXRhLnNvcnQoKGEsIGIpID0+IHtcclxuICAgIHJldHVybiArYi5wcmljZSAtICthLnByaWNlO1xyXG4gIH0pXHJcbiAgY29uc29sZS5sb2codGhpcy5zb3J0ZWQpO1xyXG4gIExvY2FsU3RvcmFnZS5zZXRMb2NhbFN0b3JhZ2UobG9jYWxTdG9yYWdlS2V5cy5zb3J0ZWQsIHRoaXMuc29ydGVkKVxyXG59XHJcblxyXG59XHJcbiIsImltcG9ydCB7IFdpbmVEZXRhaWxzIH0gZnJvbSBcIi4uLy4uL3R5cGVzL2ludGVyZmFjZXNcIjtcclxuaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi4vLi4vdXRpbHMvY29tcG9uZW50XCI7XHJcbmltcG9ydCBXaW5lQ2FyZHMgZnJvbSBcIi4uL3dpbmVjYXJkcy93aW5lY2FyZHNcIjtcclxuaW1wb3J0IHsgTG9jYWxTdG9yYWdlLCBsb2NhbFN0b3JhZ2VLZXlzIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2xvY2Fsc3RvcmFnZVwiO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2gge1xyXG4gIHNlYXJjaERhdGE6IFdpbmVEZXRhaWxzW107XHJcbiAgd2luZWNhcmRzIDogV2luZUNhcmRzO1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5zZWFyY2hEYXRhID0gW107XHJcbiAgICB0aGlzLndpbmVjYXJkcyA9IG5ldyBXaW5lQ2FyZHMoKTtcclxuICB9XHJcblxyXG4gIHNlYXJjaChkYXRhOiBXaW5lRGV0YWlsc1tdKSB7XHJcbiAgICBsZXQgdmFsdWUgPSAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1jb250YWluZXJfX2lucHV0JykgYXMgSFRNTElucHV0RWxlbWVudCkhLnZhbHVlO1xyXG4gICAgdmFsdWUgPSB2YWx1ZS50cmltKCkudG9Mb3dlckNhc2UoKTtcclxuICAgIGNvbnNvbGUubG9nKHZhbHVlKVxyXG4gICAgdGhpcy5zZWFyY2hEYXRhID0gZGF0YTtcclxuICAgIGRhdGEuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICBpZihpdGVtLm5hbWUudG9Mb3dlckNhc2UoKS5zZWFyY2godmFsdWUpID09IC0xKXtcclxuICAgICAgICAgIHRoaXMuc2VhcmNoRGF0YS5zcGxpY2UoaW5kZXgsIDEpXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc2VhcmNoRGF0YSlcclxuXHJcbiAgICBpZiAodGhpcy5zZWFyY2hEYXRhLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICBjb25zdCBlcnJvckRpdjogSFRNTEVsZW1lbnQgPSBuZXcgQ29tcG9uZW50KCdkaXYnLCAnY2FydF9fZXJyb3InKS5yZW5kZXIoKTtcclxuICAgICAgZXJyb3JEaXYuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgIDxwIGNsYXNzPVwiZXJyb3JfX21lc3NhZ2VcIj7Qn9C+INC00LDQvdC90L7QvNGDINC30LDQv9GA0L7RgdGDINC90LjRh9C10LPQviDQvdC1INC90LDQudC00LXQvdC+PC9wPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJlcnJvcl9fYnRuIHNlYXJjaF9fYnRuXCIgPk9rPC9idXR0b24+YFxyXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChlcnJvckRpdik7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5JykhLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCAnLi93aW5lY2FyZHMuY3NzJztcclxuaW1wb3J0IHsgV2luZSwgV2luZURldGFpbHMgfSBmcm9tICcuLi8uLi90eXBlcy9pbnRlcmZhY2VzJ1xyXG5pbXBvcnQgeyBMb2NhbFN0b3JhZ2UsIGxvY2FsU3RvcmFnZUtleXMgfSBmcm9tICcuLi8uLi91dGlscy9sb2NhbHN0b3JhZ2UnO1xyXG5cclxuY2xhc3MgV2luZUNhcmRzIHtcclxuICByZW5kZXIoZGF0YTogV2luZURldGFpbHNbXSkge1xyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdnb29kcycpKSB7XHJcbiAgICAgIGRhdGEgPSBMb2NhbFN0b3JhZ2UuZ2V0TG9jYWxTdG9yYWdlKGxvY2FsU3RvcmFnZUtleXMuZ29vZHMpIHx8IGRhdGE7XHJcbiAgICB9O1xyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzb3J0ZWQnKSkge1xyXG4gICAgICBkYXRhID0gTG9jYWxTdG9yYWdlLmdldExvY2FsU3RvcmFnZShsb2NhbFN0b3JhZ2VLZXlzLnNvcnRlZCkgfHwgZGF0YTtcclxuICAgIH07XHJcbiAgICBjb25zdCB3aW5lcyA9IGRhdGE7XHJcbiAgICBjb25zdCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuICAgIGNvbnN0IHdpbmVDYXJkVGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3aW5lY2FyZHNJdGVtVGVtcCcpIGFzIEhUTUxUZW1wbGF0ZUVsZW1lbnQ7XHJcbiAgICB3aW5lcy5mb3JFYWNoKChpdGVtIDogV2luZURldGFpbHMsIGlkeCA6IG51bWJlcikgPT4ge1xyXG4gICAgICBjb25zdCB3aW5lQ2FyZCA9IHdpbmVDYXJkVGVtcC5jb250ZW50LmNsb25lTm9kZSh0cnVlKSBhcyBIVE1MRWxlbWVudDtcclxuXHJcbiAgICAgICh3aW5lQ2FyZC5xdWVyeVNlbGVjdG9yKCcud2luZWNhcmRzX19mYWNlLXBob3RvJykgYXMgSFRNTEVsZW1lbnQpIS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7aXRlbS5pbWFnZX0pYDtcclxuICAgICAgKHdpbmVDYXJkLnF1ZXJ5U2VsZWN0b3IoJy53aW5lY2FyZHNfX2ZhY2UtbmFtZScpKSEudGV4dENvbnRlbnQgPSBpdGVtLm5hbWU7XHJcbiAgICAgICh3aW5lQ2FyZC5xdWVyeVNlbGVjdG9yKCcud2luZWNhcmRzX19mYWNlLWNvdW50JykpIS50ZXh0Q29udGVudCA9IGDQkiDQvdCw0LvQuNGH0LjQuCA6ICR7aXRlbS5jb3VudH1gO1xyXG4gICAgICAod2luZUNhcmQucXVlcnlTZWxlY3RvcignLndpbmVjYXJkc19fZmFjZS1wcmljZScpKSEudGV4dENvbnRlbnQgPSBgJHtpdGVtLnByaWNlfSBCWU5gO1xyXG4gICAgICAod2luZUNhcmQucXVlcnlTZWxlY3RvcignLndpbmVjYXJkc19fYmFjay1uYW1lJykpIS50ZXh0Q29udGVudCA9IGl0ZW0ubmFtZTtcclxuICAgICAgKHdpbmVDYXJkLnF1ZXJ5U2VsZWN0b3IoJy53aW5lY2FyZHNfX2JhY2stbWFkZUJ5JykpIS50ZXh0Q29udGVudCA9IGDQn9GA0L7QuNC30LLQvtC00LjRgtC10LvRjCA6ICR7aXRlbS5tYWRlQnl9YDtcclxuICAgICAgKHdpbmVDYXJkLnF1ZXJ5U2VsZWN0b3IoJy53aW5lY2FyZHNfX2JhY2stY291bnRyeScpKSEudGV4dENvbnRlbnQgPSBg0KHRgtGA0LDQvdCwIDogJHtpdGVtLmNvdW50cnl9YDtcclxuICAgICAgKHdpbmVDYXJkLnF1ZXJ5U2VsZWN0b3IoJy53aW5lY2FyZHNfX2JhY2steWVhcicpKSEudGV4dENvbnRlbnQgPSBg0JPQvtC0IDogJHtpdGVtLnllYXJ9YDtcclxuICAgICAgKHdpbmVDYXJkLnF1ZXJ5U2VsZWN0b3IoJy53aW5lY2FyZHNfX2JhY2stY29sb3InKSkhLnRleHRDb250ZW50ID0gYNCm0LLQtdGCIDogJHtpdGVtLmNvbG9yfWA7XHJcbiAgICAgICh3aW5lQ2FyZC5xdWVyeVNlbGVjdG9yKCcud2luZWNhcmRzX19iYWNrLWFsY29ob2wnKSkhLnRleHRDb250ZW50ID0gYNCa0YDQtdC/0L7RgdGC0YwgOiAke2l0ZW0uYWxjb2hvbH0lYDtcclxuICAgICAgKHdpbmVDYXJkLnF1ZXJ5U2VsZWN0b3IoJy53aW5lY2FyZHNfX2JhY2stdm9sJykpIS50ZXh0Q29udGVudCA9IGDQntCx0YrQtdC8IDogJHtpdGVtLnZvbH3Qu2A7XHJcblxyXG5cclxuICAgICAgaWYgKCFpdGVtLmluU3RvY2sgfHwgaXRlbS5jb3VudCA9PT0gMCkge1xyXG4gICAgICAgICh3aW5lQ2FyZC5xdWVyeVNlbGVjdG9yKCcud2luZWNhcmRzX19pdGVtJykgYXMgSFRNTEVsZW1lbnQpIS5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xyXG4gICAgICAgICh3aW5lQ2FyZC5xdWVyeVNlbGVjdG9yKCcud2luZWNhcmRzX19pdGVtJykgYXMgSFRNTEVsZW1lbnQpIS5zdHlsZS5vcGFjaXR5ID0gJzAuNSc7XHJcbiAgICAgICAgKHdpbmVDYXJkLnF1ZXJ5U2VsZWN0b3IoJy53aW5lY2FyZHNfX2ZhY2UtY291bnQnKSkhLnRleHRDb250ZW50ID0gJ9Cd0LXRgiDQsiDQvdCw0LvQuNGH0LjQuCc7XHJcbiAgICAgICAgKHdpbmVDYXJkLnF1ZXJ5U2VsZWN0b3IoJy53aW5lY2FyZHNfX2ZhY2UtcHJpY2UnKSkhLnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKGl0ZW0uaW5DYXJ0ID4gMCkge1xyXG4gICAgICAgICh3aW5lQ2FyZC5xdWVyeVNlbGVjdG9yKCcud2luZWNhcmRzX19pdGVtJykgYXMgSFRNTEVsZW1lbnQpIS5jbGFzc0xpc3QuYWRkKCdpbkNhcnQnKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNle1xyXG4gICAgICAgICh3aW5lQ2FyZC5xdWVyeVNlbGVjdG9yKCcud2luZWNhcmRzX19pdGVtJykgYXMgSFRNTEVsZW1lbnQpIS5jbGFzc0xpc3QucmVtb3ZlKCdpbkNhcnQnKTtcclxuXHJcbiAgICAgIH1cclxuICAgICAgKHdpbmVDYXJkLnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0X19hZGQnKSkhLnNldEF0dHJpYnV0ZSgnZGF0YS1hcnRpY3VsJywgYCR7aWR4fWApXHJcbiAgICAgIGZyYWdtZW50LmFwcGVuZCh3aW5lQ2FyZCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbmVjYXJkcy1jb250YWluZXInKSkhLmlubmVySFRNTCA9ICcnO1xyXG4gICAgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5lY2FyZHMtY29udGFpbmVyJykpIS5hcHBlbmRDaGlsZChmcmFnbWVudCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXaW5lQ2FyZHM7IiwiZXhwb3J0ICBjb25zdCBnb29kcyA9IFtcbiAge1xuICAgIGlkOiAwLFxuICAgIG5hbWU6IFwiTmF0aW9uYWwgVmludGFnZSBQb3J0XCIsXG4gICAgbWFkZUJ5OiBcIlF1aW50YSBkbyBOb3ZhbFwiLFxuICAgIGNvdW50cnk6IFwi0J/QvtGA0YLRg9Cz0LDQu9C40Y9cIixcbiAgICB5ZWFyOiBcIjIwMTFcIixcbiAgICBhbGNvaG9sOiBcIjE5XCIsXG4gICAgdm9sOiBcIjAuNzVcIixcbiAgICBwcmljZTogXCIxMzgzMlwiLFxuICAgIGNvbG9yOiBcInJlZFwiLFxuICAgIGltYWdlOiAnLi9hc3NldHMvaW1nL3BvcnR2ZXluLXF1aW50YS1kby1ub3ZhbC1uYWNpb25hbC12aW50YWdlLXBvcnQtMjAxMS5wbmcnLFxuICAgIGNvdW50OiA1LFxuICAgIGluU3RvY2s6IHRydWUsXG4gICAgaW5DYXJ0OiAwLFxuICB9LFxuICB7XG4gICAgaWQ6IDEsXG4gICAgbmFtZTogXCJCbGF1ZnJhbmtpc2NoIENsYXNzaWNcIixcbiAgICBtYWRlQnk6IFwiSGFucyBJZ2xlclwiLFxuICAgIGNvdW50cnk6IFwi0JDQstGB0YLRgNC40Y9cIixcbiAgICB5ZWFyOiBcIjIwMTlcIixcbiAgICBhbGNvaG9sOiBcIjEzXCIsXG4gICAgdm9sOiBcIjAuNzVcIixcbiAgICBwcmljZTogJzE3NCcsXG4gICAgY29sb3I6ICdyZWQnLFxuICAgIGltYWdlOiAnLi9hc3NldHMvaW1nL2JsYXVmcmFua2lzY2gtY2xhc3NpYy5wbmcnLFxuICAgIGNvdW50OiA1LFxuICAgIGluU3RvY2s6IHRydWUsXG4gICAgaW5DYXJ0OiAwLFxuICB9LFxuICB7XG4gICAgaWQ6IDIsXG4gICAgbmFtZTogXCJSaGVpbmdhdSBSaWVzbGluZyBUcm9ja2VuXCIsXG4gICAgbWFkZUJ5OiBcIlJvYmVydCBXZWlsXCIsXG4gICAgY291bnRyeTogXCLQk9C10YDQvNCw0L3QuNGPXCIsXG4gICAgeWVhcjogXCIyMDE5XCIsXG4gICAgYWxjb2hvbDogXCIxMlwiLFxuICAgIHZvbDogXCIwLjc1XCIsXG4gICAgcHJpY2U6ICcyMDQnLFxuICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgIGltYWdlOiAnLi9hc3NldHMvaW1nL3JoZWluZ2F1LXJpZXNsaW5nLXRyb2NrZW4ucG5nJyxcbiAgICBjb3VudDogNSxcbiAgICBpblN0b2NrOiB0cnVlLFxuICAgIGluQ2FydDogMCxcbiAgfSxcbiAge1xuICAgIGlkOiAzLFxuICAgIG5hbWU6IFwiTWFsbGVvdXMgZGUgU2FuY2hvbWFydGluXCIsXG4gICAgbWFkZUJ5OiBcIkVtaWxpbyBNb3JvXCIsXG4gICAgY291bnRyeTogXCLQmNGB0L/QsNC90LjRj1wiLFxuICAgIHllYXI6IFwiMjAxOFwiLFxuICAgIGFsY29ob2w6IFwiMTRcIixcbiAgICB2b2w6IFwiMC43NVwiLFxuICAgIHByaWNlOiAnMTMwNycsXG4gICAgY29sb3I6ICdyZWQnLFxuICAgIGltYWdlOiAnLi9hc3NldHMvaW1nL21hbGxlb3VzLWRlLXNhbmNob21hcnRpbi5wbmcnLFxuICAgIGNvdW50OiA1LFxuICAgIGluU3RvY2s6IHRydWUsXG4gICAgaW5DYXJ0OiAwLFxuICB9LFxuICB7XG4gICAgaWQ6IDQsXG4gICAgbmFtZTogXCJHYXZpIGRlaSBHYXZpIChFdGljaGV0dGEgTmVyYSlcIixcbiAgICBtYWRlQnk6IFwibGEgU2NvbGNhXCIsXG4gICAgY291bnRyeTogXCLQmNGC0LDQu9C40Y9cIixcbiAgICB5ZWFyOiBcIjIwMjBcIixcbiAgICBhbGNvaG9sOiBcIjEyXCIsXG4gICAgdm9sOiBcIjAuNzVcIixcbiAgICBwcmljZTogJzMyNicsXG4gICAgY29sb3I6ICd3aGl0ZScsXG4gICAgaW1hZ2U6ICcuL2Fzc2V0cy9pbWcvZ2F2aS1kZWktZ2F2aS5wbmcnLFxuICAgIGNvdW50OiA1LFxuICAgIGluU3RvY2s6IHRydWUsXG4gICAgaW5DYXJ0OiAwLFxuICB9LFxuICB7XG4gICAgaWQ6IDUsXG4gICAgbmFtZTogXCJDaGFybHkgRHVkZXNcIixcbiAgICBtYWRlQnk6IFwiVHdvIEhhbmRzXCIsXG4gICAgY291bnRyeTogXCLQkNCy0YHRgtGA0LDQu9C40Y9cIixcbiAgICB5ZWFyOiBcIjIwMjBcIixcbiAgICBhbGNvaG9sOiBcIjE0XCIsXG4gICAgdm9sOiBcIjEuNVwiLFxuICAgIHByaWNlOiAnNDM1JyxcbiAgICBjb2xvcjogJ3JlZCcsXG4gICAgaW1hZ2U6IFwiLi9hc3NldHMvaW1nL2NoYXJsZXktZHVkZXMucG5nXCIsXG4gICAgY291bnQ6IDUsXG4gICAgaW5TdG9jazogdHJ1ZSxcbiAgICBpbkNhcnQ6IDAsXG4gIH0sXG4gIHtcbiAgICBpZDogNixcbiAgICBuYW1lOiBcIlJpY2hlYm91cmcgR3JhbmcgR3J1XCIsXG4gICAgbWFkZUJ5OiBcIkRvbWFpbmUgSmVhbiBHcml2b3RcIixcbiAgICBjb3VudHJ5OiBcItCk0YDQsNC90YbQuNGPXCIsXG4gICAgeWVhcjogXCIyMDE1XCIsXG4gICAgYWxjb2hvbDogXCIxM1wiLFxuICAgIHZvbDogXCIwLjc1XCIsXG4gICAgcHJpY2U6ICcxNjc3OCcsXG4gICAgY29sb3I6ICdyZWQnLFxuICAgIGltYWdlOiAnLi9hc3NldHMvaW1nL3JpY2hlYm91cmctZ3JhbmQtZ3J1LnBuZycsXG4gICAgY291bnQ6IDUsXG4gICAgaW5TdG9jazogdHJ1ZSxcbiAgICBpbkNhcnQ6IDAsXG4gIH0sXG4gIHtcbiAgICBpZDogNyxcbiAgICBuYW1lOiBcIkNoYWJsaXMgVmllaWxsZXMgVmlnaGVzIDE5NDZcIixcbiAgICBtYWRlQnk6IFwiSmVhbi1NYXJjIEJyb2NhcmQgKERvbWFpbmUgU2FpbnRlLUNsYWlyZSlcIixcbiAgICBjb3VudHJ5OiBcItCk0YDQsNC90YbQuNGPXCIsXG4gICAgeWVhcjogXCIyMDE4XCIsXG4gICAgYWxjb2hvbDogXCIxM1wiLFxuICAgIHZvbDogXCIwLjc1XCIsXG4gICAgcHJpY2U6ICczMTMnLFxuICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgIGltYWdlOiAnLi9hc3NldHMvaW1nL2NoYWJsaXMtdmllaWxsZXMtdmlnaGVzLTE5NDYucG5nJyxcbiAgICBjb3VudDogNSxcbiAgICBpblN0b2NrOiB0cnVlLFxuICAgIGluQ2FydDogMCxcbiAgfSxcbiAge1xuICAgIGlkOiA4LFxuICAgIG5hbWU6IFwiNTB4NTBcIixcbiAgICBtYWRlQnk6IFwiQ2FwYW5uZWxsZVwiLFxuICAgIGNvdW50cnk6IFwi0JjRgtCw0LvQuNGPXCIsXG4gICAgeWVhcjogXCIyMDE1XCIsXG4gICAgYWxjb2hvbDogXCIxM1wiLFxuICAgIHZvbDogXCIwLjc1XCIsXG4gICAgcHJpY2U6ICcyNTA1JyxcbiAgICBjb2xvcjogJ3JlZCcsXG4gICAgaW1hZ2U6ICcuL2Fzc2V0cy9pbWcvNTB4NTAucG5nJyxcbiAgICBjb3VudDogNSxcbiAgICBpblN0b2NrOiB0cnVlLFxuICAgIGluQ2FydDogMCxcbiAgfSxcbiAge1xuICAgIGlkOiA5LFxuICAgIG5hbWU6IFwiUGVuZm9sZHMgR3JhbmdlXCIsXG4gICAgbWFkZUJ5OiBcIlBlbmZvbGRzXCIsXG4gICAgY291bnRyeTogXCLQkNCy0YHRgtGA0LDQu9C40Y9cIixcbiAgICB5ZWFyOiBcIjIwMTZcIixcbiAgICBhbGNvaG9sOiBcIjE0XCIsXG4gICAgdm9sOiBcIjAuNzVcIixcbiAgICBwcmljZTogJzg3MScsXG4gICAgY29sb3I6ICdyZWQnLFxuICAgIGltYWdlOiAnLi9hc3NldHMvaW1nL3BlbmZvbGRzLWdyYW5nZS5wbmcnLFxuICAgIGNvdW50OiA1LFxuICAgIGluU3RvY2s6IHRydWUsXG4gICAgaW5DYXJ0OiAwLFxuICB9LFxuICB7XG4gICAgaWQ6IDEwLFxuICAgIG5hbWU6IFwiUGVuZm9sZHMgQmluIDM4OSBDYWJlcm5ldCBTaGlyYXpcIixcbiAgICBtYWRlQnk6IFwiUGVuZm9sZHNcIixcbiAgICBjb3VudHJ5OiBcItCQ0LLRgdGC0YDQsNC70LjRj1wiLFxuICAgIHllYXI6IFwiMjAxOVwiLFxuICAgIGFsY29ob2w6IFwiMTRcIixcbiAgICB2b2w6IFwiMC43NVwiLFxuICAgIHByaWNlOiAnODcxJyxcbiAgICBjb2xvcjogJ3JlZCcsXG4gICAgaW1hZ2U6ICcuL2Fzc2V0cy9pbWcvcGVuZm9sZHMtYmluLTM4OS1jYWJlcm5ldC1zaGlyYXoucG5nJyxcbiAgICBjb3VudDogNSxcbiAgICBpblN0b2NrOiB0cnVlLFxuICAgIGluQ2FydDogMCxcbiAgfSxcbiAge1xuICAgIGlkOiAxMSxcbiAgICBuYW1lOiBcIkt1cm5pXCIsXG4gICAgbWFkZUJ5OiBcIk9hc2kgZGVnbGkgQW5nZWxpXCIsXG4gICAgY291bnRyeTogXCLQmNGC0LDQu9C40Y9cIixcbiAgICB5ZWFyOiBcIjIwMThcIixcbiAgICBhbGNvaG9sOiBcIjE0XCIsXG4gICAgdm9sOiBcIjEuNVwiLFxuICAgIHByaWNlOiAnMTc0MicsXG4gICAgY29sb3I6ICdyZWQnLFxuICAgIGltYWdlOiAnLi9hc3NldHMvaW1nL2t1cm5pLnBuZycsXG4gICAgY291bnQ6IDUsXG4gICAgaW5TdG9jazogZmFsc2UsXG4gICAgaW5DYXJ0OiAwLFxuICB9LFxuXSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcnRQb3B1cCB7XG4gIHN0YXRpYyBjYXJ0UG9wdXAgPSBgXG4gIDxzcGFuIGNsYXNzPVwiY2xvc2UtcG9wdXBcIj5YPC9zcGFuPlxuICA8ZGl2IGNsYXNzPVwiY2FydC1wb3B1cF9fY29udGFpbmVyXCI+PC9kaXY+XG4gIDxwIGNsYXNzPVwiY2FydF9fdG90YWxcIj48L3A+XG4gIGA7XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FydCB7XG4gIHN0YXRpYyBjYXJ0ID0gYFxuICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiY2FydF9fbm90aWZpY2F0aW9uXCI+XG4gICAgPHNwYW4gY2xhc3M9XCJjYXJ0X19wcm9kdWN0c1wiPjA8L3NwYW4+XG4gIDwvYT5cbiAgYDtcbn0iLCJjbGFzcyBGaWx0ZXJzIHtcclxuICBzdGF0aWMgZmlsdGVycyA9IGBcclxuICA8Zm9ybSBhY3Rpb249XCIjXCIgY2xhc3M9XCJmaWx0ZXJzLWZvcm1cIj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwiZmlsdGVycy1jb250YWluZXJcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvdW50cnktZmlsdGVyXCI+XHJcbiAgICAgICAgPGg0IGNsYXNzPVwiZmlsdGVyLW5hbWVcIj7QodGC0YDQsNC90LA8L2g0PlxyXG4gICAgICAgIDxkaXYgaWQ9XCJjb3VudHJ5XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hlY2tib3hcIj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwiY2hlY2sxXCIgbmFtZT1cImNvdW50cnlcIiB2YWx1ZT1cItCQ0LLRgdGC0YDQsNC70LjRj1wiPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjaGVja2JveC1jb3VudHJ5XCJmb3I9XCJjaGVjazFcIj7QkNCy0YHRgtGA0LDQu9C40Y88L2xhYmVsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hlY2tib3hcIj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwiY2hlY2syXCIgbmFtZT1cImNvdW50cnlcIiB2YWx1ZT1cItCQ0LLRgdGC0YDQuNGPXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNoZWNrYm94LWNvdW50cnlcImZvcj1cImNoZWNrMlwiPtCQ0LLRgdGC0YDQuNGPPC9sYWJlbD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNoZWNrYm94XCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cImNoZWNrM1wiIG5hbWU9XCJjb3VudHJ5XCIgdmFsdWU9XCLQk9C10YDQvNCw0L3QuNGPXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNoZWNrYm94LWNvdW50cnlcImZvcj1cImNoZWNrM1wiPtCT0LXRgNC80LDQvdC40Y88L2xhYmVsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hlY2tib3hcIj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwiY2hlY2s0XCIgbmFtZT1cImNvdW50cnlcIiB2YWx1ZT1cItCY0YHQv9Cw0L3QuNGPXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNoZWNrYm94LWNvdW50cnlcImZvcj1cImNoZWNrNFwiPtCY0YHQv9Cw0L3QuNGPPC9sYWJlbD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNoZWNrYm94XCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cImNoZWNrNVwiIG5hbWU9XCJjb3VudHJ5XCIgdmFsdWU9XCLQmNGC0LDQu9C40Y9cIj5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY2hlY2tib3gtY291bnRyeVwiZm9yPVwiY2hlY2s1XCI+0JjRgtCw0LvQuNGPPC9sYWJlbD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNoZWNrYm94XCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cImNoZWNrNlwiIG5hbWU9XCJjb3VudHJ5XCIgdmFsdWU9XCLQn9C+0YDRgtGD0LPQsNC70LjRj1wiPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjaGVja2JveC1jb3VudHJ5XCJmb3I9XCJjaGVjazZcIj7Qn9C+0YDRgtGD0LPQsNC70LjRjzwvbGFiZWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGVja2JveFwiPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJjaGVjazdcIiBuYW1lPVwiY291bnRyeVwiIHZhbHVlPVwi0KTRgNCw0L3RhtC40Y9cIj5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY2hlY2tib3gtY291bnRyeVwiZm9yPVwiY2hlY2s3XCI+0KTRgNCw0L3RhtC40Y88L2xhYmVsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sb3ItZmlsdGVyXCI+XHJcbiAgICAgICAgPGg0IGNsYXNzPVwiZmlsdGVyLW5hbWVcIj7QptCy0LXRgjwvaDQ+XHJcbiAgICAgICAgPGRpdiBpZD1cImNvbG9yXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hlY2tib3hcIj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwiY2hlY2s4XCIgbmFtZT1cImNvbG9yXCIgdmFsdWU9XCJ3aGl0ZVwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjaGVja2JveC1jb2xvclwiZm9yPVwiY2hlY2s4XCI+0JHQtdC70L7QtTwvbGFiZWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGVja2JveFwiPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJjaGVjazlcIiBuYW1lPVwiY29sb3JcIiB2YWx1ZT1cInJlZFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjaGVja2JveC1jb2xvclwiZm9yPVwiY2hlY2s5XCI+0JrRgNCw0YHQvdC+0LU8L2xhYmVsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwic29ydC1jb250YWluZXJcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInNvcnRcIj5cclxuICAgICAgICA8aDQgY2xhc3M9XCJmaWx0ZXItbmFtZVwiPtCh0L7RgNGC0LjRgNC+0LLQutCwPC9oND5cclxuICAgICAgICA8c2VsZWN0IGNsYXNzPVwic2VsZWN0XCI+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPjwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJCeVByaWNlVXBcIj7Qn9C+INGG0LXQvdC1OiDQv9C+INCy0L7Qt9GA0LDRgdGC0LDQvdC40Y48L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQnlQcmljZURvd25cIj7Qn9C+INGG0LXQvdC1OiDQv9C+INGD0LHRi9Cy0LDQvdC40Y48L29wdGlvbj5cclxuICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgICAgXHJcbiAgICA8YnV0dG9uIGNsYXNzPVwicmVzZXQtZmlsdGVycyBjbGFzcz1cImJ0blwiPtCh0LHRgNC+0YHRgtGMINGE0LjQu9GM0YLRgNGLPC9idXR0b24+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwicmVzZXQtZmlsdGVycyByZXNldCBjbGFzcz1cImJ0blwiPtCe0YfQuNGB0YLQuNGC0Ywg0LjRgdGC0L7RgNC40Y48L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZm9ybT5cclxuYDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyczsiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uLy4uL3V0aWxzL2NvbXBvbmVudCc7XHJcbmltcG9ydCBTZWFyY2hJbnB1dCBmcm9tICcuLi9zZWFyY2gvc2VhcmNoJztcclxuaW1wb3J0IENhcnQgZnJvbSAnLi4vY2FydC9jYXJ0J1xyXG5pbXBvcnQgQ2FydFBvcHVwIGZyb20gJy4uL2NhcnQtcG9wdXAvY2FydC1wb3B1cCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb290ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHByaXZhdGUgY2xhc3NOYW1lOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBmb290ZXJDb250YWluZXI6IENvbXBvbmVudDtcclxuXHJcbiAgY29uc3RydWN0b3IodGFnTmFtZTogc3RyaW5nLCBjbGFzc05hbWU6IHN0cmluZykge1xyXG4gICAgc3VwZXIodGFnTmFtZSwgY2xhc3NOYW1lKTtcclxuICAgIHRoaXMuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xyXG4gICAgdGhpcy5mb290ZXJDb250YWluZXIgPSBuZXcgQ29tcG9uZW50KCdkaXYnLCdmb290ZXItY29udGFpbmVyJyk7XHJcbiAgICBcclxuICB9XHJcbiAgICByZW5kZXJDb250YWluZXIoKSB7XHJcbiAgICAgIGNvbnN0IGZvb3RlckNvbnRhaW5lcjogSFRNTEVsZW1lbnQgPSBuZXcgQ29tcG9uZW50KCdkaXYnLCAnZm9vdGVyLWNvbnRhaW5lcicpLnJlbmRlcigpO1xyXG4gICAgICBmb290ZXJDb250YWluZXIuaW5uZXJIVE1MID0gYFxyXG4gIFxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyX3dyYXBwZXJcIj5cclxuICAgICAgICAgICAgICA8YSBjbGFzcz1cImZvb3Rlcl9saW5rXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9lcGhlZHJpbmkxL1wiIHRhcmdldD1cIl9ibGFua1wiPiBAZXBoZWRyaW5pMTwvYT5cclxuXHJcbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ5ZWFyXCI+MjAyMjwvcD5cclxuICAgICAgICAgICAgICA8YSBjbGFzcz1cImZvb3Rlcl9saW5rXCIgaHJlZj1cImh0dHBzOi8vcnMuc2Nob29sL2pzLXN0YWdlMC9cIiB0YXJnZXQ9XCJfYmxhbmtcIj48aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJhc3NldHMvaW1nL3JzX3NjaG9vbF9qcy5zdmdcIiB3aWR0aD1cIjQwXCIgYWx0PVwiZ2VvXCI+IFJvbGxpbmcgU2NvcGVzIFNjaG9vbDwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbmA7XHJcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZChmb290ZXJDb250YWluZXIpO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICB0aGlzLnJlbmRlckNvbnRhaW5lcigpO1xyXG4gICAgICByZXR1cm4gdGhpcy5jb250YWluZXI7XHJcbiAgICB9XHJcbiAgfSIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vLi4vdXRpbHMvY29tcG9uZW50JztcbmltcG9ydCBTZWFyY2hJbnB1dCBmcm9tICcuLi9zZWFyY2gvc2VhcmNoJztcbmltcG9ydCBDYXJ0IGZyb20gJy4uL2NhcnQvY2FydCdcbmltcG9ydCBDYXJ0UG9wdXAgZnJvbSAnLi4vY2FydC1wb3B1cC9jYXJ0LXBvcHVwJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcHJpdmF0ZSBjbGFzc05hbWU6IHN0cmluZztcbiAgcHJpdmF0ZSBzZWFyY2g6IENvbXBvbmVudDtcbiAgcHJpdmF0ZSBjYXJ0OiBDb21wb25lbnQ7XG4gIHByaXZhdGUgY2FydFBvcHVwOiBDb21wb25lbnQ7XG4gIGNvbnN0cnVjdG9yKHRhZ05hbWU6IHN0cmluZywgY2xhc3NOYW1lOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0YWdOYW1lLCBjbGFzc05hbWUpO1xuICAgIHRoaXMuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICAgIHRoaXMuc2VhcmNoID0gbmV3IENvbXBvbmVudCgnZGl2JywnaGVhZGVyX19zZWFyY2ggc2VhcmNoLWNvbnRhaW5lcicsJ3NlYXJjaC1pbnB1dCcpO1xuICAgIHRoaXMuY2FydCA9IG5ldyBDb21wb25lbnQoJ2RpdicsICdoZWFkZXJfX2NhcnQgY2FydCcsICdjYXJ0Jyk7XG4gICAgdGhpcy5jYXJ0UG9wdXAgPSBuZXcgQ29tcG9uZW50KCdkaXYnLCAnY2FydC1wb3B1cCcsICdjYXJ0LXBvcHVwJyk7XG4gIH1cbiAgICByZW5kZXJTZWFyY2goKSB7XG4gICAgICBjb25zdCBzZWFyY2hEaXY6IEhUTUxFbGVtZW50ID0gdGhpcy5zZWFyY2gucmVuZGVyKCk7XG4gICAgICBzZWFyY2hEaXYuaW5uZXJIVE1MID0gU2VhcmNoSW5wdXQuc2VhcmNoRm9ybTtcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZChzZWFyY2hEaXYpO1xuICAgIH1cblxuICAgIHJlbmRlckNhcnQoKSB7XG4gICAgICBjb25zdCBjYXJ0RGl2OiBIVE1MRWxlbWVudCA9IHRoaXMuY2FydC5yZW5kZXIoKTtcbiAgICAgIGNhcnREaXYuaW5uZXJIVE1MID0gQ2FydC5jYXJ0O1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kKGNhcnREaXYpO1xuICAgIH1cblxuICAgIHJlbmRlckNhcnRQb3B1cCgpIHtcbiAgICAgIGNvbnN0IGNhcnRQb3B1cERpdjogSFRNTEVsZW1lbnQgPSB0aGlzLmNhcnRQb3B1cC5yZW5kZXIoKTtcbiAgICAgIGNhcnRQb3B1cERpdi5pbm5lckhUTUwgPSBDYXJ0UG9wdXAuY2FydFBvcHVwO1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kKGNhcnRQb3B1cERpdik7XG4gICAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICB0aGlzLnJlbmRlclNlYXJjaCgpO1xuICAgICB0aGlzLnJlbmRlckNhcnQoKTtcbiAgICAgdGhpcy5yZW5kZXJDYXJ0UG9wdXAoKTtcbiAgICByZXR1cm4gdGhpcy5jb250YWluZXI7XG4gIH1cbn0iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uLy4uL3V0aWxzL2NvbXBvbmVudCc7XG5pbXBvcnQgV2luZWNhcmRzIGZyb20gJy4uL3dpbmVjYXJkcy93aW5lY2FyZHMnO1xuaW1wb3J0IEZpbHRlcnMgZnJvbSAnLi4vZmlsdGVycy9maWx0ZXJzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIHByaXZhdGUgY2xhc3NOYW1lOiBzdHJpbmc7XG4gIHByaXZhdGUgd2luZWNhcmRzOiBDb21wb25lbnQ7XG4gIHByaXZhdGUgZmlsdGVyczogQ29tcG9uZW50O1xuICBjb25zdHJ1Y3Rvcih0YWdOYW1lOiBzdHJpbmcsIGNsYXNzTmFtZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGFnTmFtZSwgY2xhc3NOYW1lKTtcbiAgICB0aGlzLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgICB0aGlzLndpbmVjYXJkcyA9IG5ldyBDb21wb25lbnQoJ3NlY3Rpb24nLCd3aW5lY2FyZHMnLCd3aW5lY2FyZHMnKTtcbiAgICB0aGlzLmZpbHRlcnMgPSBuZXcgQ29tcG9uZW50KCdzZWN0aW9uJywnZmlsdGVycycsJ2ZpbHRlcnMnKTtcbiAgfVxuICByZW5kZXJGaWx0ZXJzKCkge1xuICAgIGNvbnN0IGZpbHRlcnNTZWN0aW9uOiBIVE1MRWxlbWVudCA9IHRoaXMuZmlsdGVycy5yZW5kZXIoKTtcbiAgICBmaWx0ZXJzU2VjdGlvbi5pbm5lckhUTUwgPSBGaWx0ZXJzLmZpbHRlcnM7XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kKGZpbHRlcnNTZWN0aW9uKTtcbiAgfVxuXG4gICAgcmVuZGVyV2luZWNhcmRzKCkge1xuICAgICAgY29uc3Qgd2luZWNhcmRzU2VjdGlvbjogSFRNTEVsZW1lbnQgPSB0aGlzLndpbmVjYXJkcy5yZW5kZXIoKTtcbiAgICAgIHdpbmVjYXJkc1NlY3Rpb24uaW5uZXJIVE1MID0gV2luZWNhcmRzLndpbmVjYXJkcztcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZCh3aW5lY2FyZHNTZWN0aW9uKTtcbiAgICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHRoaXMucmVuZGVyRmlsdGVycygpO1xuICAgICB0aGlzLnJlbmRlcldpbmVjYXJkcygpO1xuICAgIHJldHVybiB0aGlzLmNvbnRhaW5lcjtcbiAgfVxufSIsImNsYXNzIFNlYXJjaElucHV0IHtcbiAgc3RhdGljIHNlYXJjaEZvcm0gPSBgXG4gICAgICA8aW5wdXRcbiAgICAgICAgY2xhc3M9XCJzZWFyY2gtY29udGFpbmVyX19pbnB1dFwiXG4gICAgICAgIHR5cGU9XCJzZWFyY2hcIlxuICAgICAgICBhdXRvY29tcGxldGU9XCJvZmZcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cItCf0L7QuNGB0LouLi5cIlxuICAgICAgICBuYW1lPVwic2VhcmNoXCJcbiAgICAgICAgYXV0b2ZvY3VzXG4gICAgICAvPlxuYDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoSW5wdXQ7IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2luZWNhcmRzIHtcbiAgc3RhdGljIHdpbmVjYXJkcyA9IGBcbiAgPGRpdiBjbGFzcz1cIndpbmVjYXJkcy1jb250YWluZXJcIj5cblxuICA8L2Rpdj5cbiAgYDtcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnQge1xuICBwcm90ZWN0ZWQgY29udGFpbmVyOiBIVE1MRWxlbWVudDtcblxuICBjb25zdHJ1Y3Rvcih0YWdOYW1lOiBzdHJpbmcsIGNsYXNzTmFtZTogc3RyaW5nID0gJycsIGlkPzogc3RyaW5nKSB7XG4gICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgICBpZCA/ICh0aGlzLmNvbnRhaW5lci5pZCA9IGlkKSA6IG51bGw7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGFpbmVyO1xuICB9XG59XG4iLCJpbXBvcnQgeyBXaW5lRGV0YWlscyB9IGZyb20gXCIuLi90eXBlcy9pbnRlcmZhY2VzXCI7XHJcblxyXG5jb25zdCBlbnVtIGxvY2FsU3RvcmFnZUtleXMge1xyXG4gIGZpbHRlciA9ICdmaWx0ZXInLFxyXG4gIGNhcnQgPSAnY2FydCcsXHJcbiAgZ29vZHMgID0gJ2dvb2RzJyxcclxuICB0b3RhbEl0ZW1zSW5DYXJ0ID0gJ3RvdGFsSXRlbXNJbkNhcnQnLFxyXG4gIGZpbHRlckFyciA9ICdmaWx0ZXJBcnInLFxyXG4gIHNvcnRlZCA9ICdzb3J0ZWQnLFxyXG59XHJcblxyXG5jbGFzcyBMb2NhbFN0b3JhZ2Uge1xyXG4gIFxyXG4gICAgc3RhdGljIHNldExvY2FsU3RvcmFnZShcclxuICAgICAgZGF0YUtleTogbG9jYWxTdG9yYWdlS2V5cyxcclxuICAgICAgZGF0YTogb2JqZWN0IHwgW10gfCBzdHJpbmcgfCBudW1iZXJcclxuICAgICk6IHZvaWQge1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShkYXRhS2V5LCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBzdGF0aWMgZ2V0TG9jYWxTdG9yYWdlKGRhdGE6IGxvY2FsU3RvcmFnZUtleXMpOiBhbnkge1xyXG4gICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oZGF0YSkpIHtcclxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShTdHJpbmcobG9jYWxTdG9yYWdlLmdldEl0ZW0oZGF0YSkpKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gXCJcIjtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgZXhwb3J0IHsgTG9jYWxTdG9yYWdlLCBsb2NhbFN0b3JhZ2VLZXlzIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9nbG9iYWwuY3NzJztcbi8vIGltcG9ydCBXaW5lQ2FyZHMgZnJvbSAnLi9jb21wb25lbnRzL3dpbmVjYXJkcy93aW5lY2FyZHMnO1xuLy8gaW1wb3J0ICcuL2NvbXBvbmVudHMvY2FydC9jYXJ0JztcbiBpbXBvcnQge2dvb2RzfSBmcm9tICcuL2NvbnN0YXRzL2dvb2RzJztcbi8vIGNvbnN0IHdpbmVjYXJkcyA9IG5ldyBXaW5lQ2FyZHMoKTtcbi8vIHdpbmVjYXJkcy5yZW5kZXIoZ29vZHMpO1xuLy8gaW1wb3J0IHsgQ2FydFNldHRpbmdzIH0gZnJvbSAnLi9jb21wb25lbnRzL2NhcnQvY2FydCc7XG4vLyBpbXBvcnQgeyBMb2NhbFN0b3JhZ2UsIGxvY2FsU3RvcmFnZUtleXMgfSBmcm9tICcuL3V0aWxzL2xvY2Fsc3RvcmFnZSc7XG4vLyBjb25zdCBjYXJ0c2V0dGluZ3MgPSBuZXcgQ2FydFNldHRpbmdzKCk7XG4vLyBjYXJ0c2V0dGluZ3MuYWRkVG9DYXJ0KGdvb2RzKTtcblxuaW1wb3J0IEFwcCBmcm9tICcuL2NvbXBvbmVudHMvYXBwL2FwcCc7XG5pbXBvcnQgJy4vZ2xvYmFsLmNzcyc7XG5cbmNvbnN0IGFwcCA9IG5ldyBBcHAoKTtcbmFwcC5zdGFydChnb29kcyk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9