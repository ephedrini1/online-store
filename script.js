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
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/img/cart-gold.svg */ "./src/assets/img/cart-gold.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n --background: black;\r\n --red: #d60000;\r\n --gold: #fdc854;\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\na {\r\n  text-decoration: none;\r\n  transition: 0.3s;\r\n\r\n}\r\n\r\nbody {\r\n  width: 100vw;\r\n  max-height: 100vh;\r\n  display: grid;\r\n  grid-template-areas:\r\n    'header header header'\r\n    'main main main'\r\n    'footer footer footer';\r\n  grid-row-gap: 1em;\r\n  grid-template-rows: auto 1fr auto;\r\n  grid-template-columns: 1fr 1fr 1fr;\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-attachment: fixed;\r\n  background-size: cover;\r\n  position: relative;\r\n}\r\n\r\nbutton {\r\n  background-color: var(--gold);\r\n  border: var(--gold);\r\n  color: var(--background);\r\n  text-shadow: 2px 2px 10px var(--background);\r\n  box-shadow: 10px 10px 20px var(--background);\r\n  border-radius: 5px;\r\n  padding: 1em;\r\n  cursor: pointer;\r\n  transition: 0.3s;\r\n}\r\nbutton:hover {\r\n  background-color: var(--background);\r\n  box-shadow: 10px 10px 20px var(--gold);\r\n  border: 1px solid  var(--gold);\r\n  color: var(--gold);\r\n  text-shadow: 2px 2px 10px var(--gold);\r\n  transition: 0.3s;\r\n}\r\n  .header {\r\n    grid-area: header;\r\n    height: 50px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    margin:  1em;\r\n  }\r\n\r\n  .search-container__input {\r\n    background-color: var(--background);\r\n    padding: 6px;\r\n    font-size: 17px;\r\n    border: 2px solid var(--gold);\r\n    box-shadow:  0 0 30px var(--gold);\r\n    border-radius: 5px;\r\n  }\r\n\r\n  .search-container__input:focus{\r\n    box-shadow: inset  0 0 30px var(--gold);\r\n    outline: none;\r\n  }\r\n\r\n  .header__cart {\r\n  position: relative;\r\n  width: 3em;\r\n  height: 3em;\r\n  transition: 0.3s;\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat center;\r\n  background-size: cover;\r\n  cursor: pointer;\r\n  }\r\n\r\n  .header__cart:hover {\r\n    transform: scale(1.1, 1.1);\r\n    transition: 0.3s;\r\n  }\r\n\r\n  .cart__products {\r\n    position: absolute;\r\n    top: 5px;\r\n    left: 5px;\r\n    display: block;\r\n    background-color: var(--red);\r\n    color: var(--gold);\r\n    border-radius: 50%;\r\n    padding: 1px 6px;\r\n    width: 20px;\r\n    height: 20px;\r\n  }\r\n\r\n  .main{\r\n    grid-area: main;\r\n    height: 100%;\r\n    max-width: 100%;\r\n    margin: 0 1em;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 1em;\r\n    background-attachment: fixed;\r\n  }\r\n\r\n  .overlay {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: var(--background);\r\n    opacity: 0.5;\r\n    z-index: 99;\r\n    display: none;\r\n\r\n  }\r\n\r\n  .overlay.active {\r\n    display: block;\r\n  }", "",{"version":3,"sources":["webpack://./src/global.css"],"names":[],"mappings":"AAAA;CACC,mBAAmB;CACnB,cAAc;CACd,eAAe;AAChB;;AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;AACA;EACE,qBAAqB;EACrB,gBAAgB;;AAElB;;AAEA;EACE,YAAY;EACZ,iBAAiB;EACjB,aAAa;EACb;;;0BAGwB;EACxB,iBAAiB;EACjB,iCAAiC;EACjC,kCAAkC;EAClC,yDAA6C;EAC7C,4BAA4B;EAC5B,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;EACE,6BAA6B;EAC7B,mBAAmB;EACnB,wBAAwB;EACxB,2CAA2C;EAC3C,4CAA4C;EAC5C,kBAAkB;EAClB,YAAY;EACZ,eAAe;EACf,gBAAgB;AAClB;AACA;EACE,mCAAmC;EACnC,sCAAsC;EACtC,8BAA8B;EAC9B,kBAAkB;EAClB,qCAAqC;EACrC,gBAAgB;AAClB;EACE;IACE,iBAAiB;IACjB,YAAY;IACZ,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,YAAY;EACd;;EAEA;IACE,mCAAmC;IACnC,YAAY;IACZ,eAAe;IACf,6BAA6B;IAC7B,iCAAiC;IACjC,kBAAkB;EACpB;;EAEA;IACE,uCAAuC;IACvC,aAAa;EACf;;EAEA;EACA,kBAAkB;EAClB,UAAU;EACV,WAAW;EACX,gBAAgB;EAChB,oEAA8D;EAC9D,sBAAsB;EACtB,eAAe;EACf;;EAEA;IACE,0BAA0B;IAC1B,gBAAgB;EAClB;;EAEA;IACE,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,cAAc;IACd,4BAA4B;IAC5B,kBAAkB;IAClB,kBAAkB;IAClB,gBAAgB;IAChB,WAAW;IACX,YAAY;EACd;;EAEA;IACE,eAAe;IACf,YAAY;IACZ,eAAe;IACf,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,QAAQ;IACR,4BAA4B;EAC9B;;EAEA;IACE,eAAe;IACf,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,mCAAmC;IACnC,YAAY;IACZ,WAAW;IACX,aAAa;;EAEf;;EAEA;IACE,cAAc;EAChB","sourcesContent":[":root {\r\n --background: black;\r\n --red: #d60000;\r\n --gold: #fdc854;\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\na {\r\n  text-decoration: none;\r\n  transition: 0.3s;\r\n\r\n}\r\n\r\nbody {\r\n  width: 100vw;\r\n  max-height: 100vh;\r\n  display: grid;\r\n  grid-template-areas:\r\n    'header header header'\r\n    'main main main'\r\n    'footer footer footer';\r\n  grid-row-gap: 1em;\r\n  grid-template-rows: auto 1fr auto;\r\n  grid-template-columns: 1fr 1fr 1fr;\r\n  background-image: url('./assets/img/bg1.jpg');\r\n  background-attachment: fixed;\r\n  background-size: cover;\r\n  position: relative;\r\n}\r\n\r\nbutton {\r\n  background-color: var(--gold);\r\n  border: var(--gold);\r\n  color: var(--background);\r\n  text-shadow: 2px 2px 10px var(--background);\r\n  box-shadow: 10px 10px 20px var(--background);\r\n  border-radius: 5px;\r\n  padding: 1em;\r\n  cursor: pointer;\r\n  transition: 0.3s;\r\n}\r\nbutton:hover {\r\n  background-color: var(--background);\r\n  box-shadow: 10px 10px 20px var(--gold);\r\n  border: 1px solid  var(--gold);\r\n  color: var(--gold);\r\n  text-shadow: 2px 2px 10px var(--gold);\r\n  transition: 0.3s;\r\n}\r\n  .header {\r\n    grid-area: header;\r\n    height: 50px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    margin:  1em;\r\n  }\r\n\r\n  .search-container__input {\r\n    background-color: var(--background);\r\n    padding: 6px;\r\n    font-size: 17px;\r\n    border: 2px solid var(--gold);\r\n    box-shadow:  0 0 30px var(--gold);\r\n    border-radius: 5px;\r\n  }\r\n\r\n  .search-container__input:focus{\r\n    box-shadow: inset  0 0 30px var(--gold);\r\n    outline: none;\r\n  }\r\n\r\n  .header__cart {\r\n  position: relative;\r\n  width: 3em;\r\n  height: 3em;\r\n  transition: 0.3s;\r\n  background: url('./assets/img/cart-gold.svg') no-repeat center;\r\n  background-size: cover;\r\n  cursor: pointer;\r\n  }\r\n\r\n  .header__cart:hover {\r\n    transform: scale(1.1, 1.1);\r\n    transition: 0.3s;\r\n  }\r\n\r\n  .cart__products {\r\n    position: absolute;\r\n    top: 5px;\r\n    left: 5px;\r\n    display: block;\r\n    background-color: var(--red);\r\n    color: var(--gold);\r\n    border-radius: 50%;\r\n    padding: 1px 6px;\r\n    width: 20px;\r\n    height: 20px;\r\n  }\r\n\r\n  .main{\r\n    grid-area: main;\r\n    height: 100%;\r\n    max-width: 100%;\r\n    margin: 0 1em;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 1em;\r\n    background-attachment: fixed;\r\n  }\r\n\r\n  .overlay {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: var(--background);\r\n    opacity: 0.5;\r\n    z-index: 99;\r\n    display: none;\r\n\r\n  }\r\n\r\n  .overlay.active {\r\n    display: block;\r\n  }"],"sourceRoot":""}]);
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
        if (localStorage.getItem('filter')) {
            this.filterSettings.filtersObj = _utils_localstorage__WEBPACK_IMPORTED_MODULE_5__.LocalStorage.getLocalStorage("filter" /* localStorageKeys.filter */) || '';
        }
        ;
        App.container.append(this.header.render());
        App.container.append(this.main.render());
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
                this.cartsettings.cartOpen();
                const errorDiv = document.querySelector('.cart__error');
                document.body.removeChild(errorDiv);
                document.body.style.overflow = 'auto';
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
        localStorage.removeItem("sorted" /* localStorageKeys.sorted */);
        localStorage.removeItem("filter" /* localStorageKeys.filter */);
        localStorage.removeItem("cart" /* localStorageKeys.cart */);
        localStorage.removeItem("goods" /* localStorageKeys.goods */);
        localStorage.removeItem("filterArr" /* localStorageKeys.filterArr */);
        localStorage.removeItem("totalItemsInCart" /* localStorageKeys.totalItemsInCart */);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7O0FDQXNCO0FBQ3RCLDREQUE0RDtBQUM1RCxtQ0FBbUM7QUFDSztBQUN4QyxxQ0FBcUM7QUFDckMsMkJBQTJCO0FBQzNCLHlEQUF5RDtBQUN6RCx5RUFBeUU7QUFDekUsMkNBQTJDO0FBQzNDLGlDQUFpQztBQUVNO0FBQ2pCO0FBRXRCLE1BQU0sR0FBRyxHQUFHLElBQUksMkRBQUcsRUFBRSxDQUFDO0FBQ3RCLEdBQUcsQ0FBQyxLQUFLLENBQUMsa0RBQUssQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvY2FydC9jYXJ0LmNzcyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29tcG9uZW50cy9maWx0ZXJzL2ZpbHRlcnMuY3NzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL3dpbmVjYXJkcy93aW5lY2FyZHMuY3NzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9nbG9iYWwuY3NzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29tcG9uZW50cy9jYXJ0L2NhcnQuY3NzP2QyODYiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvZmlsdGVycy9maWx0ZXJzLmNzcz9lMmQ5Iiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL3dpbmVjYXJkcy93aW5lY2FyZHMuY3NzPzczMDMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2dsb2JhbC5jc3M/ZDNiYyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL2FwcC9hcHAudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvY2FydC9jYXJ0LnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL2ZpbHRlcnMvZmlsdGVyU2V0dGluZ3MudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvd2luZWNhcmRzL3dpbmVjYXJkcy50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29uc3RhdHMvZ29vZHMudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2h0bWwtY29tcG9uZW50cy9jYXJ0LXBvcHVwL2NhcnQtcG9wdXAudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2h0bWwtY29tcG9uZW50cy9jYXJ0L2NhcnQudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2h0bWwtY29tcG9uZW50cy9maWx0ZXJzL2ZpbHRlcnMudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2h0bWwtY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9odG1sLWNvbXBvbmVudHMvbWFpbi9tYWluLnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9odG1sLWNvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvaHRtbC1jb21wb25lbnRzL3dpbmVjYXJkcy93aW5lY2FyZHMudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL3V0aWxzL2NvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvdXRpbHMvbG9jYWxzdG9yYWdlLnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL29ubGluZS1zdG9yZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1iYWNrZ3JvdW5kOiBibGFjaztcXG4gIC0tcmVkOiAjZDYwMDAwO1xcbiAgLS1nb2xkOiAjZmRjODU0O1xcbiB9XFxuXFxuLmNhcnQtcG9wdXAge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAxMHZoO1xcbiAgbGVmdDogMTB2dztcXG4gIHdpZHRoOiA4MHZ3O1xcbiAgaGVpZ2h0OiA4MHZoO1xcbiAgcGFkZGluZzogMmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICB6LWluZGV4OiAxMDE7XFxuICBjb2xvcjogdmFyKC0tZ29sZCk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3gtc2hhZG93OiAwIDAgMzBweCB2YXIoLS1nb2xkKTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5jYXJ0LXBvcHVwLmFjdGl2ZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmNhcnQtcG9wdXBfX2NvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDgwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDFlbTtcXG59XFxuXFxuLmNsb3NlLXBvcHVwIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcGFkZGluZzogMC4xZW0gMC41ZW07XFxuICBib3JkZXItcmFkaXVzOiAxMCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMWVtO1xcbiAgdG9wOiAxZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcbn1cXG5cXG4uY2xvc2UtcG9wdXA6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEsIDEuMSk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1nb2xkKTtcXG4gIGJveC1zaGFkb3c6IDJweCAycHggMTVweCB2YXIoLS1nb2xkKTtcXG4gIHRyYW5zaXRpb246IDAuMnM7XFxufVxcblxcbi5jbG9zZS1wb3B1cDphY3RpdmUge1xcbiAgdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4uY2FydC1pdGVtIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gZ2FwOiAxZW07XFxufVxcblxcbi5jYXJ0X19udW1iZXJ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjVlbTtcXG59XFxuXFxuLmNhcnRfX2Vycm9yIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMTB2aDtcXG4gIGxlZnQ6IDEwdnc7XFxuICB3aWR0aDogODB2dztcXG4gIGhlaWdodDogODB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXG4gIGNvbG9yOiB2YXIoLS1nb2xkKTtcXG4gIHotaW5kZXg6IDEwMDtcXG59XFxuXFxuXFxuXFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvY2FydC9jYXJ0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsZUFBZTtDQUNoQjs7QUFFRDtFQUNFLGVBQWU7RUFDZixTQUFTO0VBQ1QsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQ0FBZ0M7RUFDaEMsYUFBYTtBQUNmOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFFBQVE7RUFDUixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLDZCQUE2QjtFQUM3QixvQ0FBb0M7RUFDcEMsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQ0FBa0M7Q0FDbkMsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtDQUNuQixRQUFRO0FBQ1Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsU0FBUztFQUNULFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLS1iYWNrZ3JvdW5kOiBibGFjaztcXG4gIC0tcmVkOiAjZDYwMDAwO1xcbiAgLS1nb2xkOiAjZmRjODU0O1xcbiB9XFxuXFxuLmNhcnQtcG9wdXAge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAxMHZoO1xcbiAgbGVmdDogMTB2dztcXG4gIHdpZHRoOiA4MHZ3O1xcbiAgaGVpZ2h0OiA4MHZoO1xcbiAgcGFkZGluZzogMmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICB6LWluZGV4OiAxMDE7XFxuICBjb2xvcjogdmFyKC0tZ29sZCk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3gtc2hhZG93OiAwIDAgMzBweCB2YXIoLS1nb2xkKTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5jYXJ0LXBvcHVwLmFjdGl2ZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmNhcnQtcG9wdXBfX2NvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDgwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDFlbTtcXG59XFxuXFxuLmNsb3NlLXBvcHVwIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcGFkZGluZzogMC4xZW0gMC41ZW07XFxuICBib3JkZXItcmFkaXVzOiAxMCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMWVtO1xcbiAgdG9wOiAxZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcbn1cXG5cXG4uY2xvc2UtcG9wdXA6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEsIDEuMSk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1nb2xkKTtcXG4gIGJveC1zaGFkb3c6IDJweCAycHggMTVweCB2YXIoLS1nb2xkKTtcXG4gIHRyYW5zaXRpb246IDAuMnM7XFxufVxcblxcbi5jbG9zZS1wb3B1cDphY3RpdmUge1xcbiAgdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4uY2FydC1pdGVtIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gZ2FwOiAxZW07XFxufVxcblxcbi5jYXJ0X19udW1iZXJ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjVlbTtcXG59XFxuXFxuLmNhcnRfX2Vycm9yIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMTB2aDtcXG4gIGxlZnQ6IDEwdnc7XFxuICB3aWR0aDogODB2dztcXG4gIGhlaWdodDogODB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXG4gIGNvbG9yOiB2YXIoLS1nb2xkKTtcXG4gIHotaW5kZXg6IDEwMDtcXG59XFxuXFxuXFxuXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcclxcbiAgLS1iYWNrZ3JvdW5kOiBibGFjaztcXHJcXG4gIC0tcmVkOiAjZDYwMDAwO1xcclxcbiAgLS1nb2xkOiAjZmRjODU0O1xcclxcbiB9XFxyXFxuKntcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcbi5maWx0ZXJzLWZvcm0ge1xcclxcbiAgd2lkdGg6IDgwdnc7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMjBweCB2YXIoLS1nb2xkKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1nb2xkKTtcXHJcXG4gIHBhZGRpbmc6IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmZpbHRlcnMtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcIiBzZWxlY3QgIGZpbHRlci1jb2xvciBmaWx0ZXItY291bnRyeVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgIFxcXCIgICBidXR0b24gICAgICAuICAgICAgICAgYnV0dG9uXFxcIjtcXHJcXG59XFxyXFxuXFxyXFxuLmZpbHRlci1uYW1lIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxufVxcclxcbi5jb3VudHJ5LWZpbHRlciB7XFxyXFxuICBncmlkLWFyZWE6ICdmaWx0ZXItY291bnRyeSc7XFxyXFxufVxcclxcbi5jb2xvci1maWx0ZXIge1xcclxcbiAgZ3JpZC1hcmVhOiAnZmlsdGVyLWNvbG9yJztcXHJcXG59XFxyXFxuXFxyXFxuLnNvcnQge1xcclxcbiAgZ3JpZC1hcmVhOiAnc2VsZWN0JztcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2V0IHtcXHJcXG4gIGdyaWQtYXJlYTogJ2J1dHRvbic7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5yZXNldC1maWx0ZXJzIHtcXHJcXG4gIGdyaWQtYXJlYTogJ2J1dHRvbic7XFxyXFxuICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG59XFxyXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwO1xcclxcbi13ZWJraXQtYXBwZWFyZW5jZTpub25lO1xcclxcbm91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jaGVja2JveHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEuNWVtO1xcclxcbiAgcGFkZGluZy1sZWZ0OiAyLjVlbTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXHJcXG4uY2hlY2tib3ggbGFiZWw6OmJlZm9yZSB7XFxyXFxuY3Vyc29yOiBwb2ludGVyO1xcclxcbmhlaWdodDogMjRweDtcXHJcXG5sZWZ0OiAwO1xcclxcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG53aWR0aDogMjRweDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXXtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2tib3ggbGFiZWw6OmJlZm9yZSB7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1nb2xkKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIGNvbG9yOiB2YXIoLS1nb2xkKTtcXHJcXG4gIGNvbnRlbnQ6ICcnO1xcclxcbiAgZm9udC1zaXplOiAxLjJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrYm94IGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCArIGxhYmVsOjpiZWZvcmUge1xcclxcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1nb2xkKTtcXHJcXG4gIGNvbnRlbnQ6ICdcXFxcMjcxNCc7XFxyXFxufVxcclxcbmxhYmVsIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG5zZWxlY3Qge1xcclxcbiAgYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gIG91dGxpbmU6IDA7XFxyXFxuICBib3gtc2hhZG93OiBub25lO1xcclxcbiAgZmxleDogMTtcXHJcXG4gIHBhZGRpbmc6IDAgMWVtO1xcclxcbiAgY29sb3I6IHZhcigtLWdvbGQpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgcGFkZGluZzogNnB4O1xcclxcbiAgZm9udC1zaXplOiAxN3B4O1xcclxcbiAgbWF4LXdpZHRoOiAyMGVtO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZ29sZCk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgYm94LXNoYWRvdzogIDAgMCAzMHB4IHZhcigtLWdvbGQpO1xcclxcbn1cXHJcXG4vKiBSZW1vdmUgSUUgYXJyb3cgKi9cXHJcXG5zZWxlY3Q6Oi1tcy1leHBhbmQge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuLyogQ3VzdG9tIFNlbGVjdCB3cmFwcGVyICovXFxyXFxuc2VsZWN0IHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBtYXgtd2lkdGg6IDIwZW07XFxyXFxuICBoZWlnaHQ6IDJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IC4yNWVtO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcclxcbiAgZm9udC1zaXplOiAxN3B4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZ29sZCk7XFxyXFxuICBib3gtc2hhZG93OiAgMCAwIDMwcHggdmFyKC0tZ29sZCk7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcbi8qIEFycm93ICovXFxyXFxuc2VsZWN0OjphZnRlciB7XFxyXFxuICBjb250ZW50OiAnXFxcXDI1QkMnO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBwYWRkaW5nOiAxZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1nb2xkKTtcXHJcXG4gIHRyYW5zaXRpb246IC4yNXMgYWxsIGVhc2U7XFxyXFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG59XFxyXFxuLyogVHJhbnNpdGlvbiAqL1xcclxcbnNlbGVjdDpob3Zlcjo6YWZ0ZXIge1xcclxcbiAgY29sb3I6ICNmMzljMTI7XFxyXFxufVxcclxcblxcclxcbi5yZXNldC1maWx0ZXJzIHtcXHJcXG4gIHdpZHRoOiAxMGVtO1xcclxcbiAgaGVpZ2h0OiAzZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMC41ZW07XFxyXFxufVxcclxcblxcclxcbi8qIE90aGVyIHN0eWxlcyovXFxyXFxuXFxyXFxuXFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvZmlsdGVycy9maWx0ZXJzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsZUFBZTtDQUNoQjtBQUNEO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsaUNBQWlDO0VBQ2pDLGtCQUFrQjtFQUNsQixnQ0FBZ0M7RUFDaEMsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMsd0JBQXdCO0VBQ3hCO3dEQUNzRDtBQUN4RDs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCLHVCQUF1QjtBQUN2QixhQUFhO0FBQ2I7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTs7QUFFQSxlQUFlO0FBQ2YsWUFBWTtBQUNaLE9BQU87QUFDUCxrQkFBa0I7QUFDbEIsV0FBVztBQUNYOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLE9BQU87RUFDUCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLG1DQUFtQztFQUNuQyxzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLFlBQVk7RUFDWixlQUFlO0VBQ2YsZUFBZTtFQUNmLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsaUNBQWlDO0FBQ25DO0FBQ0Esb0JBQW9CO0FBQ3BCO0VBQ0UsYUFBYTtBQUNmO0FBQ0EsMEJBQTBCO0FBQzFCO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixlQUFlO0VBQ2YsV0FBVztFQUNYLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsbUNBQW1DO0VBQ25DLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsNkJBQTZCO0VBQzdCLGlDQUFpQztFQUNqQyxrQkFBa0I7QUFDcEI7QUFDQSxVQUFVO0FBQ1Y7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixRQUFRO0VBQ1IsWUFBWTtFQUNaLDZCQUE2QjtFQUM3Qix5QkFBeUI7RUFDekIsb0JBQW9CO0FBQ3RCO0FBQ0EsZUFBZTtBQUNmO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFFQSxnQkFBZ0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcclxcbiAgLS1iYWNrZ3JvdW5kOiBibGFjaztcXHJcXG4gIC0tcmVkOiAjZDYwMDAwO1xcclxcbiAgLS1nb2xkOiAjZmRjODU0O1xcclxcbiB9XFxyXFxuKntcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcbi5maWx0ZXJzLWZvcm0ge1xcclxcbiAgd2lkdGg6IDgwdnc7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMjBweCB2YXIoLS1nb2xkKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1nb2xkKTtcXHJcXG4gIHBhZGRpbmc6IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmZpbHRlcnMtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcIiBzZWxlY3QgIGZpbHRlci1jb2xvciBmaWx0ZXItY291bnRyeVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgIFxcXCIgICBidXR0b24gICAgICAuICAgICAgICAgYnV0dG9uXFxcIjtcXHJcXG59XFxyXFxuXFxyXFxuLmZpbHRlci1uYW1lIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxufVxcclxcbi5jb3VudHJ5LWZpbHRlciB7XFxyXFxuICBncmlkLWFyZWE6ICdmaWx0ZXItY291bnRyeSc7XFxyXFxufVxcclxcbi5jb2xvci1maWx0ZXIge1xcclxcbiAgZ3JpZC1hcmVhOiAnZmlsdGVyLWNvbG9yJztcXHJcXG59XFxyXFxuXFxyXFxuLnNvcnQge1xcclxcbiAgZ3JpZC1hcmVhOiAnc2VsZWN0JztcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2V0IHtcXHJcXG4gIGdyaWQtYXJlYTogJ2J1dHRvbic7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5yZXNldC1maWx0ZXJzIHtcXHJcXG4gIGdyaWQtYXJlYTogJ2J1dHRvbic7XFxyXFxuICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG59XFxyXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwO1xcclxcbi13ZWJraXQtYXBwZWFyZW5jZTpub25lO1xcclxcbm91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jaGVja2JveHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEuNWVtO1xcclxcbiAgcGFkZGluZy1sZWZ0OiAyLjVlbTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXHJcXG4uY2hlY2tib3ggbGFiZWw6OmJlZm9yZSB7XFxyXFxuY3Vyc29yOiBwb2ludGVyO1xcclxcbmhlaWdodDogMjRweDtcXHJcXG5sZWZ0OiAwO1xcclxcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG53aWR0aDogMjRweDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXXtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2tib3ggbGFiZWw6OmJlZm9yZSB7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1nb2xkKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIGNvbG9yOiB2YXIoLS1nb2xkKTtcXHJcXG4gIGNvbnRlbnQ6ICcnO1xcclxcbiAgZm9udC1zaXplOiAxLjJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrYm94IGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCArIGxhYmVsOjpiZWZvcmUge1xcclxcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1nb2xkKTtcXHJcXG4gIGNvbnRlbnQ6ICdcXFxcMjcxNCc7XFxyXFxufVxcclxcbmxhYmVsIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG5zZWxlY3Qge1xcclxcbiAgYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gIG91dGxpbmU6IDA7XFxyXFxuICBib3gtc2hhZG93OiBub25lO1xcclxcbiAgZmxleDogMTtcXHJcXG4gIHBhZGRpbmc6IDAgMWVtO1xcclxcbiAgY29sb3I6IHZhcigtLWdvbGQpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgcGFkZGluZzogNnB4O1xcclxcbiAgZm9udC1zaXplOiAxN3B4O1xcclxcbiAgbWF4LXdpZHRoOiAyMGVtO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZ29sZCk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgYm94LXNoYWRvdzogIDAgMCAzMHB4IHZhcigtLWdvbGQpO1xcclxcbn1cXHJcXG4vKiBSZW1vdmUgSUUgYXJyb3cgKi9cXHJcXG5zZWxlY3Q6Oi1tcy1leHBhbmQge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuLyogQ3VzdG9tIFNlbGVjdCB3cmFwcGVyICovXFxyXFxuc2VsZWN0IHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBtYXgtd2lkdGg6IDIwZW07XFxyXFxuICBoZWlnaHQ6IDJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IC4yNWVtO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcclxcbiAgZm9udC1zaXplOiAxN3B4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZ29sZCk7XFxyXFxuICBib3gtc2hhZG93OiAgMCAwIDMwcHggdmFyKC0tZ29sZCk7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcbi8qIEFycm93ICovXFxyXFxuc2VsZWN0OjphZnRlciB7XFxyXFxuICBjb250ZW50OiAnXFxcXDI1QkMnO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBwYWRkaW5nOiAxZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1nb2xkKTtcXHJcXG4gIHRyYW5zaXRpb246IC4yNXMgYWxsIGVhc2U7XFxyXFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG59XFxyXFxuLyogVHJhbnNpdGlvbiAqL1xcclxcbnNlbGVjdDpob3Zlcjo6YWZ0ZXIge1xcclxcbiAgY29sb3I6ICNmMzljMTI7XFxyXFxufVxcclxcblxcclxcbi5yZXNldC1maWx0ZXJzIHtcXHJcXG4gIHdpZHRoOiAxMGVtO1xcclxcbiAgaGVpZ2h0OiAzZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMC41ZW07XFxyXFxufVxcclxcblxcclxcbi8qIE90aGVyIHN0eWxlcyovXFxyXFxuXFxyXFxuXFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcclxcbiAgLS1iYWNrZ3JvdW5kOiAjMTQwYTBhO1xcclxcbiAgLS1yZWQ6ICNkNjAwMDA7XFxyXFxuICAtLWdvbGQ6ICNmZGM4NTQ7XFxyXFxuIH1cXHJcXG5cXHJcXG4gLndpbmVjYXJkc3tcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIG1heC13aWR0aDogODByZW07XFxyXFxufVxcclxcblxcclxcbi53aW5lY2FyZHMtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdyaWQtY29sdW1uLWdhcDogM2VtO1xcclxcbiAgZ3JpZC1yb3ctZ2FwOiAzZW07XFxyXFxufVxcclxcblxcclxcbi53aW5lY2FyZHNfX2l0ZW0ge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgd2lkdGg6IDIwZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxyXFxuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcclxcbiAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogMTAwMHB4O1xcclxcbiAgICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ud2luZWNhcmRzX19mYWNlLFxcclxcbi53aW5lY2FyZHNfX2JhY2sge1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCAxMnB4IDAgdmFyKC0tZ29sZCk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAuN3MgY3ViaWMtYmV6aWVyKDAuNCwgMC4yLCAwLjIsIDEpO1xcclxcbiAgdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gLjdzIGN1YmljLWJlemllcigwLjQsIDAuMiwgMC4yLCAxKTtcXHJcXG4gIC1vLXRyYW5zaXRpb246IHRyYW5zZm9ybSAuN3MgY3ViaWMtYmV6aWVyKDAuNCwgMC4yLCAwLjIsIDEpO1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC43cyBjdWJpYy1iZXppZXIoMC40LCAwLjIsIDAuMiwgMSk7XFxyXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjdzIGN1YmljLWJlemllcigwLjQsIDAuMiwgMC4yLCAxKSwgLXdlYmtpdC10cmFuc2Zvcm0gLjdzIGN1YmljLWJlemllcigwLjQsIDAuMiwgMC4yLCAxKTtcXHJcXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtaW4taGVpZ2h0OiAzNTBweDtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIHRleHQtc2hhZG93OiAxMHB4IDEwcHggMTBweCB2YXIoLS1iYWNrZ3JvdW5kKTtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmluQ2FydCAud2luZWNhcmRzX19mYWNlLFxcclxcbi5pbkNhcnQgLndpbmVjYXJkc19fYmFjayB7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMTJweCAwIHZhcigtLXJlZCk7XFxyXFxufVxcclxcblxcclxcbi53aW5lY2FyZHNfX2JhY2t7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1nb2xkKTtcXHJcXG59XFxyXFxuXFxyXFxuLndpbmVjYXJkc19fZmFjZTphZnRlcntcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgY29udGVudDogJyc7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBvcGFjaXR5OiAuNTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxyXFxuICAgIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgICAgICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLndpbmVjYXJkc19faXRlbSAud2luZWNhcmRzX19mYWNlLFxcclxcbi53aW5lY2FyZHNfX2l0ZW0gLndpbmVjYXJkc19fYmFja3tcXHJcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAuN3MgY3ViaWMtYmV6aWVyKDAuNCwgMC4yLCAwLjIsIDEpO1xcclxcbiAgICB0cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAuN3MgY3ViaWMtYmV6aWVyKDAuNCwgMC4yLCAwLjIsIDEpO1xcclxcbiAgICAtby10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjdzIGN1YmljLWJlemllcigwLjQsIDAuMiwgMC4yLCAxKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC43cyBjdWJpYy1iZXppZXIoMC40LCAwLjIsIDAuMiwgMSk7XFxyXFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuN3MgY3ViaWMtYmV6aWVyKDAuNCwgMC4yLCAwLjIsIDEpLCAtd2Via2l0LXRyYW5zZm9ybSAuN3MgY3ViaWMtYmV6aWVyKDAuNCwgMC4yLCAwLjIsIDEpO1xcclxcbn1cXHJcXG5cXHJcXG4ud2luZWNhcmRzX19iYWNre1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgdGV4dC1zaGFkb3c6IDEwcHggMTBweCAxMHB4IHZhcigtLWdvbGQpO1xcclxcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxyXFxufVxcclxcblxcclxcbi53aW5lY2FyZHNfX2ZhY2UtZGV0YWlscyB7XFxyXFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSB0cmFuc2xhdGVaKDYwcHgpIHNjYWxlKDAuOTQpO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHRyYW5zbGF0ZVooNjBweCkgc2NhbGUoMC45NCk7XFxyXFxudG9wOiA1MCU7XFxyXFxucG9zaXRpb246IGFic29sdXRlO1xcclxcbmxlZnQ6IDA7XFxyXFxud2lkdGg6IDEwMCU7XFxyXFxucGFkZGluZzogMnJlbTtcXHJcXG4td2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbm91dGxpbmU6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4td2Via2l0LXBlcnNwZWN0aXZlOiBpbmhlcml0O1xcclxcbiAgcGVyc3BlY3RpdmU6IGluaGVyaXQ7XFxyXFxuei1pbmRleDogMztcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLndpbmVjYXJkc19faXRlbSAud2luZWNhcmRzX19iYWNre1xcclxcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcXHJcXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XFxyXFxuICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxyXFxuICAgICAgICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxyXFxufVxcclxcblxcclxcbi53aW5lY2FyZHNfX2l0ZW0gLndpbmVjYXJkc19fZmFjZXtcXHJcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xcclxcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XFxyXFxuICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxyXFxuICAgICAgICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxyXFxufVxcclxcblxcclxcbi53aW5lY2FyZHNfX2l0ZW06Zm9jdXMgLndpbmVjYXJkc19fYmFjayxcXHJcXG4ud2luZWNhcmRzX19pdGVtOmhvdmVyIC53aW5lY2FyZHNfX2JhY2t7XFxyXFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcXHJcXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xcclxcbiAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcclxcbiAgICAgICAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcclxcbn1cXHJcXG5cXHJcXG4ud2luZWNhcmRzX19pdGVtOmhvdmVyIC53aW5lY2FyZHNfX2ZhY2UsXFxyXFxuLndpbmVjYXJkc19faXRlbTpmb2N1cyAud2luZWNhcmRzX19mYWNle1xcclxcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoLTE4MGRlZyk7XFxyXFxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgtMTgwZGVnKTtcXHJcXG4gIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXHJcXG4gICAgICAgICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXHJcXG59XFxyXFxuXFxyXFxuLndpbmVjYXJkc19fZmFjZS1waG90b3tcXHJcXG4gIHdpZHRoOiAxMGVtO1xcclxcbiAgaGVpZ2h0OiAxMGVtO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb24teDogMTAwJTtcXHJcXG4gIG1hcmdpbjogMWVtO1xcclxcbn1cXHJcXG5cXHJcXG4ud2luZWNhcmRzX19iYWNrLW5hbWUge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xcclxcbiAgdGV4dC1zaGFkb3c6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FydF9fYnRuIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdvbGQpO1xcclxcbiAgYm9yZGVyOiB2YXIoLS1nb2xkKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXHJcXG4gIHRleHQtc2hhZG93OiAycHggMnB4IDEwcHggdmFyKC0tYmFja2dyb3VuZCk7XFxyXFxuICBib3gtc2hhZG93OiAxMHB4IDEwcHggMjBweCB2YXIoLS1iYWNrZ3JvdW5kKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIHBhZGRpbmc6IDFlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IDAuMnM7XFxyXFxuICBtYXJnaW4tdG9wOiAyZW07XFxyXFxufVxcclxcblxcclxcbi5jYXJ0X19idG46aG92ZXIsXFxyXFxuLmNhcnRfX2J0bjpmb2N1c3tcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcclxcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IDIwcHggdmFyKC0tZ29sZCk7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAgdmFyKC0tZ29sZCk7XFxyXFxuICBjb2xvcjogdmFyKC0tZ29sZCk7XFxyXFxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAxMHB4IHZhcigtLWdvbGQpO1xcclxcbiAgdHJhbnNpdGlvbjogMC4ycztcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvd2luZWNhcmRzL3dpbmVjYXJkcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztFQUNkLGVBQWU7Q0FDaEI7O0NBRUE7RUFDQyxVQUFVO0VBQ1YsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGVBQWU7RUFDZixvQ0FBb0M7RUFDcEMsNEJBQTRCO0VBQzVCLDJCQUEyQjtJQUN6QixtQkFBbUI7QUFDdkI7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLGtDQUFrQztFQUNsQyxtQkFBbUI7RUFDbkIsd0VBQXdFO0VBQ3hFLGdFQUFnRTtFQUNoRSwyREFBMkQ7RUFDM0Qsd0RBQXdEO0VBQ3hELDhHQUE4RztFQUM5RyxtQ0FBbUM7VUFDM0IsMkJBQTJCO0VBQ25DLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsNkNBQTZDO0VBQzdDLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLGtCQUFrQjtBQUNwQjs7QUFFQTtDQUNDLGtCQUFrQjtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsVUFBVTtJQUNWLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLGNBQWM7SUFDZCxXQUFXO0lBQ1gsbUNBQW1DO0lBQ25DLG1DQUFtQztZQUMzQiwyQkFBMkI7SUFDbkMsbUJBQW1CO0FBQ3ZCOzs7O0FBSUE7O0lBRUksd0VBQXdFO0lBQ3hFLGdFQUFnRTtJQUNoRSwyREFBMkQ7SUFDM0Qsd0RBQXdEO0lBQ3hELDhHQUE4RztBQUNsSDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCx1Q0FBdUM7RUFDdkMsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0VBQWdFO0VBQ2hFLHdEQUF3RDtBQUMxRCxRQUFRO0FBQ1Isa0JBQWtCO0FBQ2xCLE9BQU87QUFDUCxXQUFXO0FBQ1gsYUFBYTtBQUNiLDhCQUE4QjtFQUM1QixzQkFBc0I7QUFDeEIsOEJBQThCO0FBQzlCLDRCQUE0QjtFQUMxQixvQkFBb0I7QUFDdEIsVUFBVTtBQUNWOzs7QUFHQTtFQUNFLGtDQUFrQztVQUMxQiwwQkFBMEI7RUFDbEMsb0NBQW9DO1VBQzVCLDRCQUE0QjtBQUN0Qzs7QUFFQTtFQUNFLGdDQUFnQztVQUN4Qix3QkFBd0I7RUFDaEMsb0NBQW9DO1VBQzVCLDRCQUE0QjtBQUN0Qzs7QUFFQTs7RUFFRSxnQ0FBZ0M7VUFDeEIsd0JBQXdCO0VBQ2hDLG9DQUFvQztVQUM1Qiw0QkFBNEI7QUFDdEM7O0FBRUE7O0VBRUUsbUNBQW1DO1VBQzNCLDJCQUEyQjtFQUNuQyxvQ0FBb0M7VUFDNUIsNEJBQTRCO0FBQ3RDOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWix3QkFBd0I7RUFDeEIsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsd0JBQXdCO0VBQ3hCLDJDQUEyQztFQUMzQyw0Q0FBNEM7RUFDNUMsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsbUNBQW1DO0VBQ25DLHNDQUFzQztFQUN0Qyw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLHFDQUFxQztFQUNyQyxnQkFBZ0I7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcclxcbiAgLS1iYWNrZ3JvdW5kOiAjMTQwYTBhO1xcclxcbiAgLS1yZWQ6ICNkNjAwMDA7XFxyXFxuICAtLWdvbGQ6ICNmZGM4NTQ7XFxyXFxuIH1cXHJcXG5cXHJcXG4gLndpbmVjYXJkc3tcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIG1heC13aWR0aDogODByZW07XFxyXFxufVxcclxcblxcclxcbi53aW5lY2FyZHMtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdyaWQtY29sdW1uLWdhcDogM2VtO1xcclxcbiAgZ3JpZC1yb3ctZ2FwOiAzZW07XFxyXFxufVxcclxcblxcclxcbi53aW5lY2FyZHNfX2l0ZW0ge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgd2lkdGg6IDIwZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxyXFxuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcclxcbiAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogMTAwMHB4O1xcclxcbiAgICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ud2luZWNhcmRzX19mYWNlLFxcclxcbi53aW5lY2FyZHNfX2JhY2sge1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCAxMnB4IDAgdmFyKC0tZ29sZCk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAuN3MgY3ViaWMtYmV6aWVyKDAuNCwgMC4yLCAwLjIsIDEpO1xcclxcbiAgdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gLjdzIGN1YmljLWJlemllcigwLjQsIDAuMiwgMC4yLCAxKTtcXHJcXG4gIC1vLXRyYW5zaXRpb246IHRyYW5zZm9ybSAuN3MgY3ViaWMtYmV6aWVyKDAuNCwgMC4yLCAwLjIsIDEpO1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC43cyBjdWJpYy1iZXppZXIoMC40LCAwLjIsIDAuMiwgMSk7XFxyXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjdzIGN1YmljLWJlemllcigwLjQsIDAuMiwgMC4yLCAxKSwgLXdlYmtpdC10cmFuc2Zvcm0gLjdzIGN1YmljLWJlemllcigwLjQsIDAuMiwgMC4yLCAxKTtcXHJcXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtaW4taGVpZ2h0OiAzNTBweDtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIHRleHQtc2hhZG93OiAxMHB4IDEwcHggMTBweCB2YXIoLS1iYWNrZ3JvdW5kKTtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmluQ2FydCAud2luZWNhcmRzX19mYWNlLFxcclxcbi5pbkNhcnQgLndpbmVjYXJkc19fYmFjayB7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMTJweCAwIHZhcigtLXJlZCk7XFxyXFxufVxcclxcblxcclxcbi53aW5lY2FyZHNfX2JhY2t7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1nb2xkKTtcXHJcXG59XFxyXFxuXFxyXFxuLndpbmVjYXJkc19fZmFjZTphZnRlcntcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgY29udGVudDogJyc7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBvcGFjaXR5OiAuNTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxyXFxuICAgIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgICAgICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLndpbmVjYXJkc19faXRlbSAud2luZWNhcmRzX19mYWNlLFxcclxcbi53aW5lY2FyZHNfX2l0ZW0gLndpbmVjYXJkc19fYmFja3tcXHJcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAuN3MgY3ViaWMtYmV6aWVyKDAuNCwgMC4yLCAwLjIsIDEpO1xcclxcbiAgICB0cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAuN3MgY3ViaWMtYmV6aWVyKDAuNCwgMC4yLCAwLjIsIDEpO1xcclxcbiAgICAtby10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjdzIGN1YmljLWJlemllcigwLjQsIDAuMiwgMC4yLCAxKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC43cyBjdWJpYy1iZXppZXIoMC40LCAwLjIsIDAuMiwgMSk7XFxyXFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuN3MgY3ViaWMtYmV6aWVyKDAuNCwgMC4yLCAwLjIsIDEpLCAtd2Via2l0LXRyYW5zZm9ybSAuN3MgY3ViaWMtYmV6aWVyKDAuNCwgMC4yLCAwLjIsIDEpO1xcclxcbn1cXHJcXG5cXHJcXG4ud2luZWNhcmRzX19iYWNre1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgdGV4dC1zaGFkb3c6IDEwcHggMTBweCAxMHB4IHZhcigtLWdvbGQpO1xcclxcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxyXFxufVxcclxcblxcclxcbi53aW5lY2FyZHNfX2ZhY2UtZGV0YWlscyB7XFxyXFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSB0cmFuc2xhdGVaKDYwcHgpIHNjYWxlKDAuOTQpO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHRyYW5zbGF0ZVooNjBweCkgc2NhbGUoMC45NCk7XFxyXFxudG9wOiA1MCU7XFxyXFxucG9zaXRpb246IGFic29sdXRlO1xcclxcbmxlZnQ6IDA7XFxyXFxud2lkdGg6IDEwMCU7XFxyXFxucGFkZGluZzogMnJlbTtcXHJcXG4td2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbm91dGxpbmU6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4td2Via2l0LXBlcnNwZWN0aXZlOiBpbmhlcml0O1xcclxcbiAgcGVyc3BlY3RpdmU6IGluaGVyaXQ7XFxyXFxuei1pbmRleDogMztcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLndpbmVjYXJkc19faXRlbSAud2luZWNhcmRzX19iYWNre1xcclxcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcXHJcXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XFxyXFxuICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxyXFxuICAgICAgICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxyXFxufVxcclxcblxcclxcbi53aW5lY2FyZHNfX2l0ZW0gLndpbmVjYXJkc19fZmFjZXtcXHJcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xcclxcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XFxyXFxuICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxyXFxuICAgICAgICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxyXFxufVxcclxcblxcclxcbi53aW5lY2FyZHNfX2l0ZW06Zm9jdXMgLndpbmVjYXJkc19fYmFjayxcXHJcXG4ud2luZWNhcmRzX19pdGVtOmhvdmVyIC53aW5lY2FyZHNfX2JhY2t7XFxyXFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcXHJcXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xcclxcbiAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcclxcbiAgICAgICAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcclxcbn1cXHJcXG5cXHJcXG4ud2luZWNhcmRzX19pdGVtOmhvdmVyIC53aW5lY2FyZHNfX2ZhY2UsXFxyXFxuLndpbmVjYXJkc19faXRlbTpmb2N1cyAud2luZWNhcmRzX19mYWNle1xcclxcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoLTE4MGRlZyk7XFxyXFxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgtMTgwZGVnKTtcXHJcXG4gIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXHJcXG4gICAgICAgICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXHJcXG59XFxyXFxuXFxyXFxuLndpbmVjYXJkc19fZmFjZS1waG90b3tcXHJcXG4gIHdpZHRoOiAxMGVtO1xcclxcbiAgaGVpZ2h0OiAxMGVtO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb24teDogMTAwJTtcXHJcXG4gIG1hcmdpbjogMWVtO1xcclxcbn1cXHJcXG5cXHJcXG4ud2luZWNhcmRzX19iYWNrLW5hbWUge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xcclxcbiAgdGV4dC1zaGFkb3c6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FydF9fYnRuIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdvbGQpO1xcclxcbiAgYm9yZGVyOiB2YXIoLS1nb2xkKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXHJcXG4gIHRleHQtc2hhZG93OiAycHggMnB4IDEwcHggdmFyKC0tYmFja2dyb3VuZCk7XFxyXFxuICBib3gtc2hhZG93OiAxMHB4IDEwcHggMjBweCB2YXIoLS1iYWNrZ3JvdW5kKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIHBhZGRpbmc6IDFlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IDAuMnM7XFxyXFxuICBtYXJnaW4tdG9wOiAyZW07XFxyXFxufVxcclxcblxcclxcbi5jYXJ0X19idG46aG92ZXIsXFxyXFxuLmNhcnRfX2J0bjpmb2N1c3tcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcclxcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IDIwcHggdmFyKC0tZ29sZCk7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAgdmFyKC0tZ29sZCk7XFxyXFxuICBjb2xvcjogdmFyKC0tZ29sZCk7XFxyXFxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAxMHB4IHZhcigtLWdvbGQpO1xcclxcbiAgdHJhbnNpdGlvbjogMC4ycztcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9pbWcvYmcxLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ltZy9jYXJ0LWdvbGQuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXHJcXG4gLS1iYWNrZ3JvdW5kOiBibGFjaztcXHJcXG4gLS1yZWQ6ICNkNjAwMDA7XFxyXFxuIC0tZ29sZDogI2ZkYzg1NDtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIG1heC1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxyXFxuICAgICdoZWFkZXIgaGVhZGVyIGhlYWRlcidcXHJcXG4gICAgJ21haW4gbWFpbiBtYWluJ1xcclxcbiAgICAnZm9vdGVyIGZvb3RlciBmb290ZXInO1xcclxcbiAgZ3JpZC1yb3ctZ2FwOiAxZW07XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG87XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ29sZCk7XFxyXFxuICBib3JkZXI6IHZhcigtLWdvbGQpO1xcclxcbiAgY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcclxcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggMTBweCB2YXIoLS1iYWNrZ3JvdW5kKTtcXHJcXG4gIGJveC1zaGFkb3c6IDEwcHggMTBweCAyMHB4IHZhcigtLWJhY2tncm91bmQpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgcGFkZGluZzogMWVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNpdGlvbjogMC4zcztcXHJcXG59XFxyXFxuYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcclxcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IDIwcHggdmFyKC0tZ29sZCk7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAgdmFyKC0tZ29sZCk7XFxyXFxuICBjb2xvcjogdmFyKC0tZ29sZCk7XFxyXFxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAxMHB4IHZhcigtLWdvbGQpO1xcclxcbiAgdHJhbnNpdGlvbjogMC4zcztcXHJcXG59XFxyXFxuICAuaGVhZGVyIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBtYXJnaW46ICAxZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc2VhcmNoLWNvbnRhaW5lcl9faW5wdXQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXHJcXG4gICAgcGFkZGluZzogNnB4O1xcclxcbiAgICBmb250LXNpemU6IDE3cHg7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWdvbGQpO1xcclxcbiAgICBib3gtc2hhZG93OiAgMCAwIDMwcHggdmFyKC0tZ29sZCk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zZWFyY2gtY29udGFpbmVyX19pbnB1dDpmb2N1c3tcXHJcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgIDAgMCAzMHB4IHZhcigtLWdvbGQpO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmhlYWRlcl9fY2FydCB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB3aWR0aDogM2VtO1xcclxcbiAgaGVpZ2h0OiAzZW07XFxyXFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcclxcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBuby1yZXBlYXQgY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5oZWFkZXJfX2NhcnQ6aG92ZXIge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSwgMS4xKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jYXJ0X19wcm9kdWN0cyB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiA1cHg7XFxyXFxuICAgIGxlZnQ6IDVweDtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZCk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1nb2xkKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBwYWRkaW5nOiAxcHggNnB4O1xcclxcbiAgICB3aWR0aDogMjBweDtcXHJcXG4gICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1haW57XFxyXFxuICAgIGdyaWQtYXJlYTogbWFpbjtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1hcmdpbjogMCAxZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDFlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5vdmVybGF5IHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcclxcbiAgICBvcGFjaXR5OiAwLjU7XFxyXFxuICAgIHotaW5kZXg6IDk5O1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcblxcclxcbiAgfVxcclxcblxcclxcbiAgLm92ZXJsYXkuYWN0aXZlIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB9XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2dsb2JhbC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Q0FDQyxtQkFBbUI7Q0FDbkIsY0FBYztDQUNkLGVBQWU7QUFDaEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGdCQUFnQjs7QUFFbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYjs7OzBCQUd3QjtFQUN4QixpQkFBaUI7RUFDakIsaUNBQWlDO0VBQ2pDLGtDQUFrQztFQUNsQyx5REFBNkM7RUFDN0MsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLHdCQUF3QjtFQUN4QiwyQ0FBMkM7RUFDM0MsNENBQTRDO0VBQzVDLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsbUNBQW1DO0VBQ25DLHNDQUFzQztFQUN0Qyw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLHFDQUFxQztFQUNyQyxnQkFBZ0I7QUFDbEI7RUFDRTtJQUNFLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsWUFBWTtFQUNkOztFQUVBO0lBQ0UsbUNBQW1DO0lBQ25DLFlBQVk7SUFDWixlQUFlO0lBQ2YsNkJBQTZCO0lBQzdCLGlDQUFpQztJQUNqQyxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSx1Q0FBdUM7SUFDdkMsYUFBYTtFQUNmOztFQUVBO0VBQ0Esa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLG9FQUE4RDtFQUM5RCxzQkFBc0I7RUFDdEIsZUFBZTtFQUNmOztFQUVBO0lBQ0UsMEJBQTBCO0lBQzFCLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULGNBQWM7SUFDZCw0QkFBNEI7SUFDNUIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGVBQWU7SUFDZixZQUFZO0lBQ1osZUFBZTtJQUNmLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsUUFBUTtJQUNSLDRCQUE0QjtFQUM5Qjs7RUFFQTtJQUNFLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUNBQW1DO0lBQ25DLFlBQVk7SUFDWixXQUFXO0lBQ1gsYUFBYTs7RUFFZjs7RUFFQTtJQUNFLGNBQWM7RUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcclxcbiAtLWJhY2tncm91bmQ6IGJsYWNrO1xcclxcbiAtLXJlZDogI2Q2MDAwMDtcXHJcXG4gLS1nb2xkOiAjZmRjODU0O1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5hIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgbWF4LWhlaWdodDogMTAwdmg7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXHJcXG4gICAgJ2hlYWRlciBoZWFkZXIgaGVhZGVyJ1xcclxcbiAgICAnbWFpbiBtYWluIG1haW4nXFxyXFxuICAgICdmb290ZXIgZm9vdGVyIGZvb3Rlcic7XFxyXFxuICBncmlkLXJvdy1nYXA6IDFlbTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0bztcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vYXNzZXRzL2ltZy9iZzEuanBnJyk7XFxyXFxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdvbGQpO1xcclxcbiAgYm9yZGVyOiB2YXIoLS1nb2xkKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXHJcXG4gIHRleHQtc2hhZG93OiAycHggMnB4IDEwcHggdmFyKC0tYmFja2dyb3VuZCk7XFxyXFxuICBib3gtc2hhZG93OiAxMHB4IDEwcHggMjBweCB2YXIoLS1iYWNrZ3JvdW5kKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIHBhZGRpbmc6IDFlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxyXFxufVxcclxcbmJ1dHRvbjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXHJcXG4gIGJveC1zaGFkb3c6IDEwcHggMTBweCAyMHB4IHZhcigtLWdvbGQpO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgIHZhcigtLWdvbGQpO1xcclxcbiAgY29sb3I6IHZhcigtLWdvbGQpO1xcclxcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggMTBweCB2YXIoLS1nb2xkKTtcXHJcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxyXFxufVxcclxcbiAgLmhlYWRlciB7XFxyXFxuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luOiAgMWVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNlYXJjaC1jb250YWluZXJfX2lucHV0IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxyXFxuICAgIHBhZGRpbmc6IDZweDtcXHJcXG4gICAgZm9udC1zaXplOiAxN3B4O1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1nb2xkKTtcXHJcXG4gICAgYm94LXNoYWRvdzogIDAgMCAzMHB4IHZhcigtLWdvbGQpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc2VhcmNoLWNvbnRhaW5lcl9faW5wdXQ6Zm9jdXN7XFxyXFxuICAgIGJveC1zaGFkb3c6IGluc2V0ICAwIDAgMzBweCB2YXIoLS1nb2xkKTtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5oZWFkZXJfX2NhcnQge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgd2lkdGg6IDNlbTtcXHJcXG4gIGhlaWdodDogM2VtO1xcclxcbiAgdHJhbnNpdGlvbjogMC4zcztcXHJcXG4gIGJhY2tncm91bmQ6IHVybCgnLi9hc3NldHMvaW1nL2NhcnQtZ29sZC5zdmcnKSBuby1yZXBlYXQgY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5oZWFkZXJfX2NhcnQ6aG92ZXIge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSwgMS4xKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jYXJ0X19wcm9kdWN0cyB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiA1cHg7XFxyXFxuICAgIGxlZnQ6IDVweDtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZCk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1nb2xkKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBwYWRkaW5nOiAxcHggNnB4O1xcclxcbiAgICB3aWR0aDogMjBweDtcXHJcXG4gICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1haW57XFxyXFxuICAgIGdyaWQtYXJlYTogbWFpbjtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1hcmdpbjogMCAxZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDFlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5vdmVybGF5IHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcclxcbiAgICBvcGFjaXR5OiAwLjU7XFxyXFxuICAgIHotaW5kZXg6IDk5O1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcblxcclxcbiAgfVxcclxcblxcclxcbiAgLm92ZXJsYXkuYWN0aXZlIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NhcnQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jYXJ0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9maWx0ZXJzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZmlsdGVycy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vd2luZWNhcmRzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vd2luZWNhcmRzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nbG9iYWwuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nbG9iYWwuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IFdpbmVEZXRhaWxzIH0gZnJvbSBcIi4uLy4uL3R5cGVzL2ludGVyZmFjZXNcIjtcclxuaW1wb3J0IHsgQ2FydFNldHRpbmdzIH0gZnJvbSBcIi4uL2NhcnQvY2FydFwiO1xyXG5pbXBvcnQgV2luZUNhcmRzIGZyb20gXCIuLi93aW5lY2FyZHMvd2luZWNhcmRzXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uLy4uL2h0bWwtY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyXCI7XHJcbmltcG9ydCBNYWluIGZyb20gXCIuLi8uLi9odG1sLWNvbXBvbmVudHMvbWFpbi9tYWluXCI7XHJcbmltcG9ydCBGaWx0ZXJTZXR0aW5ncyBmcm9tIFwiLi4vZmlsdGVycy9maWx0ZXJTZXR0aW5nc1wiO1xyXG5pbXBvcnQgRmlsdGVycyBmcm9tIFwiLi4vLi4vaHRtbC1jb21wb25lbnRzL2ZpbHRlcnMvZmlsdGVyc1wiO1xyXG5pbXBvcnQgeyBMb2NhbFN0b3JhZ2UsIGxvY2FsU3RvcmFnZUtleXMgfSBmcm9tIFwiLi4vLi4vdXRpbHMvbG9jYWxzdG9yYWdlXCI7XHJcbmltcG9ydCB7IGdvb2RzIH0gZnJvbSBcIi4uLy4uL2NvbnN0YXRzL2dvb2RzXCI7XHJcbmltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4uLy4uL3V0aWxzL2NvbXBvbmVudFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIHtcclxuICBwcml2YXRlIHN0YXRpYyBjb250YWluZXI6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuYm9keTtcclxuICBwcml2YXRlIGhlYWRlcjogSGVhZGVyO1xyXG4gIHByaXZhdGUgbWFpbjogTWFpbjtcclxuICBjYXJ0c2V0dGluZ3M6IENhcnRTZXR0aW5ncztcclxuICB3aW5lY2FyZHM6IFdpbmVDYXJkcztcclxuICBmaWx0ZXJTZXR0aW5nczogRmlsdGVyU2V0dGluZ3M7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmNhcnRzZXR0aW5ncyA9IG5ldyBDYXJ0U2V0dGluZ3MoKTtcclxuICAgIHRoaXMud2luZWNhcmRzID0gbmV3IFdpbmVDYXJkcygpO1xyXG4gICAgdGhpcy5maWx0ZXJTZXR0aW5ncyA9IG5ldyBGaWx0ZXJTZXR0aW5ncygpO1xyXG4gICAgdGhpcy5oZWFkZXIgPSBuZXcgSGVhZGVyKCdoZWFkZXInLCAnaGVhZGVyJyk7XHJcbiAgICB0aGlzLm1haW4gPSBuZXcgTWFpbignbWFpbicsICdtYWluJyk7XHJcbiAgfVxyXG5cclxuICBzdGFydChkYXRhOiBXaW5lRGV0YWlsc1tdKSB7XHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NvcnRlZCcpKSB7XHJcbiAgICAgIGRhdGEgPSBMb2NhbFN0b3JhZ2UuZ2V0TG9jYWxTdG9yYWdlKGxvY2FsU3RvcmFnZUtleXMuc29ydGVkKSB8fCBkYXRhO1xyXG4gICAgfTtcclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmlsdGVyJykpIHtcclxuICAgICAgdGhpcy5maWx0ZXJTZXR0aW5ncy5maWx0ZXJzT2JqID0gTG9jYWxTdG9yYWdlLmdldExvY2FsU3RvcmFnZShsb2NhbFN0b3JhZ2VLZXlzLmZpbHRlcikgfHwgJyc7XHJcbiAgICB9O1xyXG5cclxuICAgIEFwcC5jb250YWluZXIuYXBwZW5kKHRoaXMuaGVhZGVyLnJlbmRlcigpKTtcclxuICAgIEFwcC5jb250YWluZXIuYXBwZW5kKHRoaXMubWFpbi5yZW5kZXIoKSk7XHJcblxyXG4gICAgY29uc3QgY291bnRyeUZpbHRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY291bnRyeS1maWx0ZXInKTtcclxuICAgIGNvbnN0IGNvbG9yRmlsdGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb2xvci1maWx0ZXInKTtcclxuXHJcbiAgICB0aGlzLndpbmVjYXJkcy5yZW5kZXIoZGF0YSk7XHJcbiAgICB0aGlzLmNhcnRzZXR0aW5ncy5yZW5kZXIoKTtcclxuXHJcbiAgICBjb25zdCBmaWx0ZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZpbHRlcnMnKTtcclxuICAgIFsuLi5maWx0ZXJzIS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpXS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICBpZiAodGhpcy5maWx0ZXJTZXR0aW5ncy5maWx0ZXJzT2JqLmNvdW50cnkuaW5jbHVkZXMoaXRlbS52YWx1ZSkpIHtcclxuICAgICAgICBpdGVtLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZmlsdGVyU2V0dGluZ3MuZmlsdGVyQnlDb3VudHJ5KGRhdGEpO1xyXG4gICAgICAgIHRoaXMud2luZWNhcmRzLnJlbmRlcih0aGlzLmZpbHRlclNldHRpbmdzLmZpbHRlcmVkKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5maWx0ZXJTZXR0aW5ncy5maWx0ZXJzT2JqLmNvbG9yLmluY2x1ZGVzKGl0ZW0udmFsdWUpKSB7XHJcbiAgICAgICAgaXRlbS5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmZpbHRlclNldHRpbmdzLmZpbHRlckJ5Q29sb3IoZGF0YSk7XHJcbiAgICAgICAgdGhpcy53aW5lY2FyZHMucmVuZGVyKHRoaXMuZmlsdGVyU2V0dGluZ3MuZmlsdGVyZWQpO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIGNvbG9yRmlsdGVycyEuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBldmVudCA9PiB7XHJcbiAgICAgIHRoaXMuZmlsdGVyU2V0dGluZ3MuZmlsdGVyQnlDb2xvcihkYXRhKTtcclxuICAgICAgdGhpcy53aW5lY2FyZHMucmVuZGVyKHRoaXMuZmlsdGVyU2V0dGluZ3MuZmlsdGVyZWQpO1xyXG5cclxuICAgIH0pXHJcbiAgICBjb3VudHJ5RmlsdGVycyEuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBldmVudCA9PiB7XHJcbiAgICAgIHRoaXMuZmlsdGVyU2V0dGluZ3MuZmlsdGVyQnlDb3VudHJ5KGRhdGEpO1xyXG4gICAgICB0aGlzLndpbmVjYXJkcy5yZW5kZXIodGhpcy5maWx0ZXJTZXR0aW5ncy5maWx0ZXJlZCk7XHJcblxyXG4gICAgfSlcclxuXHJcbiAgICBkb2N1bWVudFxyXG4gICAgICAucXVlcnlTZWxlY3RvcignLnJlc2V0LWZpbHRlcnMnKSFcclxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICB0aGlzLmZpbHRlclNldHRpbmdzLnJlc2V0RmlsdGVycygpO1xyXG4gICAgICAgIHRoaXMud2luZWNhcmRzLnJlbmRlcihkYXRhKTtcclxuICAgICAgfSlcclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcclxuICAgICAgaWYgKCg8SFRNTEVsZW1lbnQ+ZXZlbnQudGFyZ2V0KSEuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYXJ0X19hZGQnKSkge1xyXG4gICAgICAgIGxldCBhcnRpY3VsID0gTnVtYmVyKCg8SFRNTEVsZW1lbnQ+ZXZlbnQudGFyZ2V0KSEuZGF0YXNldFsnYXJ0aWN1bCddKSE7XHJcbiAgICAgICAgY29uc29sZS5sb2coYXJ0aWN1bClcclxuICAgICAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQpXHJcbiAgICAgICAgaWYgKHRoaXMuY2FydHNldHRpbmdzLnRvdGFsSXRlbXMgPCAyMCkge1xyXG4gICAgICAgICAgdGhpcy5jYXJ0c2V0dGluZ3MuY2FydEFkZChkYXRhLCBhcnRpY3VsKTtcclxuICAgICAgICAgIHRoaXMuY2FydHNldHRpbmdzLnJlbmRlcigpO1xyXG4gICAgICAgICAgdGhpcy53aW5lY2FyZHMucmVuZGVyKGRhdGEpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVycm9yRGl2OiBIVE1MRWxlbWVudCA9IG5ldyBDb21wb25lbnQoJ2RpdicsICdjYXJ0X19lcnJvcicpLnJlbmRlcigpO1xyXG4gICAgICAgICAgICBlcnJvckRpdi5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgIDxwIGNsYXNzPVwiZXJyb3JfX21lc3NhZ2VcIj7QmtC+0YDQt9C40L3QsCDQt9Cw0L/QvtC70L3QtdC90LAsINC/0LXRgNC10LnRgtC4INCyINC60L7RgNC30LjQvdGDPzwvcD5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImVycm9yX19idG4gY2FydF9fYnRuXCIgPk9rPC9idXR0b24+YFxyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChlcnJvckRpdik7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5JykhLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmKCg8SFRNTEVsZW1lbnQ+ZXZlbnQudGFyZ2V0KSEuY2xhc3NMaXN0LmNvbnRhaW5zKCdlcnJvcl9fYnRuJykpe1xyXG4gICAgICAgIHRoaXMuY2FydHNldHRpbmdzLmNhcnRPcGVuKCk7XHJcbiAgICAgICAgY29uc3QgZXJyb3JEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FydF9fZXJyb3InKSFcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGVycm9yRGl2KTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2F1dG8nO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICgoPEhUTUxFbGVtZW50PmV2ZW50LnRhcmdldCkhLmNsYXNzTGlzdC5jb250YWlucygnY2FydF9fcmVtb3ZlJykpIHtcclxuICAgICAgICBsZXQgYXJ0aWN1bCA9IE51bWJlcigoPEhUTUxFbGVtZW50PmV2ZW50LnRhcmdldCkhLmRhdGFzZXRbJ2FydGljdWwnXSk7XHJcbiAgICAgICAgaWYgKHRoaXMuY2FydHNldHRpbmdzLnRvdGFsSXRlbXMgPiAwKSB7XHJcbiAgICAgICAgICB0aGlzLmNhcnRzZXR0aW5ncy5jYXJ0UmVtb3ZlKGRhdGEsIGFydGljdWwpO1xyXG4gICAgICAgICAgdGhpcy5jYXJ0c2V0dGluZ3MucmVuZGVyKCk7XHJcbiAgICAgICAgICB0aGlzLndpbmVjYXJkcy5yZW5kZXIoZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIGRvY3VtZW50XHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yKCcuY2FydCcpIVxyXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICAgICAgdGhpcy5jYXJ0c2V0dGluZ3MucmVuZGVyKCk7XHJcbiAgICAgICAgdGhpcy5jYXJ0c2V0dGluZ3MuY2FydE9wZW4oKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2F1dG8nO1xyXG4gICAgICB9KVxyXG5cclxuICAgIGRvY3VtZW50XHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtcG9wdXAnKSFcclxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG4gICAgICAgIHRoaXMuY2FydHNldHRpbmdzLmNhcnRDbG9zZSgpO1xyXG4gICAgICB9KVxyXG5cclxuICAgIGRvY3VtZW50LlxyXG4gICAgICBxdWVyeVNlbGVjdG9yKCcuc2VsZWN0JykhLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGV2ZW50ID0+IHtcclxuICAgICAgICBpZiAoKDxIVE1MT3B0aW9uRWxlbWVudD5ldmVudC50YXJnZXQpIS52YWx1ZSA9PT0gJ0J5UHJpY2VVcCcpIHtcclxuICAgICAgICAgIHRoaXMuZmlsdGVyU2V0dGluZ3Muc29ydFByaWNlVXAoZGF0YSk7XHJcbiAgICAgICAgICB0aGlzLndpbmVjYXJkcy5yZW5kZXIodGhpcy5maWx0ZXJTZXR0aW5ncy5zb3J0ZWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoKDxIVE1MT3B0aW9uRWxlbWVudD5ldmVudC50YXJnZXQpIS52YWx1ZSA9PT0gJ0J5UHJpY2VEb3duJykge1xyXG4gICAgICAgICAgdGhpcy5maWx0ZXJTZXR0aW5ncy5zb3J0UHJpY2VEb3duKGRhdGEpO1xyXG4gICAgICAgICAgdGhpcy53aW5lY2FyZHMucmVuZGVyKHRoaXMuZmlsdGVyU2V0dGluZ3Muc29ydGVkKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcblxyXG4gICAgZG9jdW1lbnRcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5yZXNldCcpIS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcclxuICAgICAgICB0aGlzLmZpbHRlclNldHRpbmdzLnJlc2V0QWxsKCk7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0aGlzLndpbmVjYXJkcy5yZW5kZXIoZGF0YSk7XHJcbiAgICAgIH0pXHJcbiAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQgJy4vY2FydC5jc3MnXHJcbmltcG9ydCB7ICBXaW5lRGV0YWlscyB9IGZyb20gJy4uLy4uL3R5cGVzL2ludGVyZmFjZXMnO1xyXG5pbXBvcnQgeyBMb2NhbFN0b3JhZ2UsIGxvY2FsU3RvcmFnZUtleXMgfSBmcm9tICcuLi8uLi91dGlscy9sb2NhbHN0b3JhZ2UnO1xyXG5pbXBvcnQgV2luZUNhcmRzIGZyb20gJy4uL3dpbmVjYXJkcy93aW5lY2FyZHMnXHJcbmV4cG9ydCBjbGFzcyBDYXJ0U2V0dGluZ3Mge1xyXG4gIGNhcnQ6IFdpbmVEZXRhaWxzW107XHJcbiAgdG90YWxJdGVtczogbnVtYmVyO1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5jYXJ0ID0gW107XHJcbiAgICB0aGlzLnRvdGFsSXRlbXMgPSB0aGlzLnRvdGFsSXRlbXMgPSBMb2NhbFN0b3JhZ2UuZ2V0TG9jYWxTdG9yYWdlKGxvY2FsU3RvcmFnZUtleXMudG90YWxJdGVtc0luQ2FydCkgfHwgMDtcclxuICB9XHJcblxyXG4gIGNhcnRBZGQoZGF0YTogV2luZURldGFpbHNbXSwgYXJ0aWN1bDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXJ0JykpIHtcclxuICAgICAgICAgIHRoaXMuY2FydCA9IExvY2FsU3RvcmFnZS5nZXRMb2NhbFN0b3JhZ2UobG9jYWxTdG9yYWdlS2V5cy5jYXJ0KSB8fCAnJztcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ29vZHMnKSkge1xyXG4gICAgICAgICAgZGF0YSA9IExvY2FsU3RvcmFnZS5nZXRMb2NhbFN0b3JhZ2UobG9jYWxTdG9yYWdlS2V5cy5nb29kcykgfHwgZGF0YTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5jYXJ0LmZpbmRJbmRleChlbGVtID0+IGVsZW0uaWQgPT09IGFydGljdWwpO1xyXG4gICAgICAgIGlmKGluZGV4ID09PSAtMSkge1xyXG4gICAgICAgICAgZGF0YVthcnRpY3VsXVsnY291bnQnXS0tO1xyXG4gICAgICAgICAgZGF0YVthcnRpY3VsXVsnaW5DYXJ0J10rKztcclxuICAgICAgICAgIHRoaXMuY2FydC5wdXNoKGRhdGFbYXJ0aWN1bF0pO1xyXG4gICAgICAgICAgdGhpcy50b3RhbEl0ZW1zKys7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICB0aGlzLnRvdGFsSXRlbXMrKztcclxuICAgICAgICAgIHRoaXMuY2FydFtpbmRleF1bJ2luQ2FydCddKys7XHJcbiAgICAgICAgICBkYXRhW2FydGljdWxdWydjb3VudCddLS07XHJcbiAgICAgICAgICBkYXRhW2FydGljdWxdWydpbkNhcnQnXSsrO1xyXG4gICAgICAgICAgdGhpcy5jYXJ0W2luZGV4XVsnY291bnQnXS0tO1xyXG4gICAgICAgIH0gXHJcbiAgICAgICAgaWYoZGF0YVthcnRpY3VsXVsnY291bnQnXSA9PT0gMCkge1xyXG4gICAgICAgICAgY29uc3Qgd2luZWNhcmRzID0gbmV3IFdpbmVDYXJkcygpO1xyXG4gICAgICAgICAgd2luZWNhcmRzLnJlbmRlcihkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgTG9jYWxTdG9yYWdlLnNldExvY2FsU3RvcmFnZShsb2NhbFN0b3JhZ2VLZXlzLmNhcnQsIHRoaXMuY2FydClcclxuICAgICAgICBMb2NhbFN0b3JhZ2Uuc2V0TG9jYWxTdG9yYWdlKGxvY2FsU3RvcmFnZUtleXMuZ29vZHMsIGRhdGEpXHJcbiAgICAgICAgTG9jYWxTdG9yYWdlLnNldExvY2FsU3RvcmFnZShsb2NhbFN0b3JhZ2VLZXlzLnRvdGFsSXRlbXNJbkNhcnQsIHRoaXMudG90YWxJdGVtcylcclxuICAgICAgfVxyXG5cclxuXHJcbiAgICAgIGNhcnRSZW1vdmUoZGF0YTogV2luZURldGFpbHNbXSwgYXJ0aWN1bDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXJ0JykpIHtcclxuICAgICAgICAgIHRoaXMuY2FydCA9IExvY2FsU3RvcmFnZS5nZXRMb2NhbFN0b3JhZ2UobG9jYWxTdG9yYWdlS2V5cy5jYXJ0KSB8fCAnJztcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ29vZHMnKSkge1xyXG4gICAgICAgICAgZGF0YSA9IExvY2FsU3RvcmFnZS5nZXRMb2NhbFN0b3JhZ2UobG9jYWxTdG9yYWdlS2V5cy5nb29kcykgfHwgZGF0YTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5jYXJ0LmZpbmRJbmRleChlbGVtID0+IGVsZW0uaWQgPT09IGFydGljdWwpO1xyXG4gICAgICAgIGlmKGluZGV4ID49IDApIHtcclxuICAgICAgICAgIHRoaXMudG90YWxJdGVtcy0tO1xyXG4gICAgICAgICAgdGhpcy5jYXJ0W2luZGV4XVsnaW5DYXJ0J10tLTtcclxuICAgICAgICAgIGRhdGFbYXJ0aWN1bF1bJ2NvdW50J10rKztcclxuICAgICAgICAgIGRhdGFbYXJ0aWN1bF1bJ2luQ2FydCddLS07XHJcbiAgICAgICAgICB0aGlzLmNhcnRbaW5kZXhdWydjb3VudCddKys7XHJcbiAgICAgICAgfSBcclxuICAgICAgICBMb2NhbFN0b3JhZ2Uuc2V0TG9jYWxTdG9yYWdlKGxvY2FsU3RvcmFnZUtleXMuY2FydCwgdGhpcy5jYXJ0KVxyXG4gICAgICAgIExvY2FsU3RvcmFnZS5zZXRMb2NhbFN0b3JhZ2UobG9jYWxTdG9yYWdlS2V5cy5nb29kcywgZGF0YSlcclxuICAgICAgICBMb2NhbFN0b3JhZ2Uuc2V0TG9jYWxTdG9yYWdlKGxvY2FsU3RvcmFnZUtleXMudG90YWxJdGVtc0luQ2FydCwgdGhpcy50b3RhbEl0ZW1zKVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdGhpcy5jYXJ0ID0gTG9jYWxTdG9yYWdlLmdldExvY2FsU3RvcmFnZShsb2NhbFN0b3JhZ2VLZXlzLmNhcnQpIHx8IFtdO1xyXG4gICAgICAgIGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG4gICAgICAgIGNvbnN0IGNhcnRJdGVtc1RlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FydEl0ZW1zVGVtcCcpIGFzIEhUTUxUZW1wbGF0ZUVsZW1lbnQ7XHJcbiAgICAgICAgY29uc3QgYmFkZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FydF9fcHJvZHVjdHMnKTtcclxuICAgICAgICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0LXBvcHVwJyk7XHJcbiAgICAgICAgbGV0IHRvdGFsU3VtID0gMDtcclxuICAgICAgICB0aGlzLmNhcnQuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgIGNvbnN0IGNhcnRJdGVtID0gY2FydEl0ZW1zVGVtcC5jb250ZW50LmNsb25lTm9kZSh0cnVlKSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICAgIChjYXJ0SXRlbS5xdWVyeVNlbGVjdG9yKCcuY2FydC1pdGVtX19uYW1lJykpIS50ZXh0Q29udGVudCA9IGl0ZW0ubmFtZTtcclxuICAgICAgICAgIChjYXJ0SXRlbS5xdWVyeVNlbGVjdG9yKCcuY2FydF9faW5wdXQnKSkhLnRleHRDb250ZW50ID0gaXRlbS5pbkNhcnQudG9TdHJpbmcoKTtcclxuICAgICAgICAgIGNvbnN0IGl0ZW1zUHJpY2UgPSAraXRlbS5wcmljZSAqIGl0ZW0uaW5DYXJ0O1xyXG4gICAgICAgICAgdG90YWxTdW0gKz0gaXRlbXNQcmljZTtcclxuICAgICAgICAgIChjYXJ0SXRlbS5xdWVyeVNlbGVjdG9yKCcuY2FydC1pdGVtX19wcmljZScpKSEudGV4dENvbnRlbnQgPSBgJHtpdGVtc1ByaWNlfWA7XHJcbiAgICAgICAgICAoY2FydEl0ZW0ucXVlcnlTZWxlY3RvcignLmNhcnRfX2FkZCcpKSEuc2V0QXR0cmlidXRlKCdkYXRhLWFydGljdWwnLCBgJHtpdGVtLmlkfWApO1xyXG4gICAgICAgICAgICBpZihpdGVtLmNvdW50ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgKGNhcnRJdGVtLnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0X19hZGQnKSBhcyBIVE1MRWxlbWVudCkhLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgKGNhcnRJdGVtLnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0X19hZGQnKSBhcyBIVE1MRWxlbWVudCkhLnN0eWxlLm9wYWNpdHkgPSAnMC41JztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgKGNhcnRJdGVtLnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0X19yZW1vdmUnKSkhLnNldEF0dHJpYnV0ZSgnZGF0YS1hcnRpY3VsJywgYCR7aXRlbS5pZH1gKTtcclxuXHJcbiAgICAgICAgICAgIGlmKGl0ZW0uaW5DYXJ0ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgKGNhcnRJdGVtLnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0X19yZW1vdmUnKSBhcyBIVE1MRWxlbWVudCkhLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgKGNhcnRJdGVtLnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0X19yZW1vdmUnKSBhcyBIVE1MRWxlbWVudCkhLnN0eWxlLm9wYWNpdHkgPSAnMC41JztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcnRfX3RvdGFsJykhLnRleHRDb250ZW50ID0gYCR7dG90YWxTdW19YFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgZnJhZ21lbnQuYXBwZW5kKGNhcnRJdGVtKTtcclxuICAgICAgICB9KSAgXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcnRfX3Byb2R1Y3RzJykhLnRleHRDb250ZW50ID0gYCR7dGhpcy50b3RhbEl0ZW1zfWBcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FydC1wb3B1cF9fY29udGFpbmVyJykhLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0LXBvcHVwX19jb250YWluZXInKSEuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xyXG4gICAgICB9XHJcblxyXG5cclxuICAgICAgY2FydE9wZW4oKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcnQtcG9wdXAnKSEuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXknKSEuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIFxyXG4gICAgICBjYXJ0Q2xvc2UoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcnQtcG9wdXAnKSEuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXknKSEuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQge0RlZmF1bHRGaWx0ZXJzLCAgV2luZURldGFpbHMgfSBmcm9tIFwiLi4vLi4vdHlwZXMvaW50ZXJmYWNlc1wiO1xyXG5pbXBvcnQgeyBMb2NhbFN0b3JhZ2UsIGxvY2FsU3RvcmFnZUtleXMgfSBmcm9tIFwiLi4vLi4vdXRpbHMvbG9jYWxzdG9yYWdlXCI7XHJcbmltcG9ydCB7IENhcnRTZXR0aW5ncyB9IGZyb20gXCIuLi9jYXJ0L2NhcnRcIjtcclxuaW1wb3J0ICcuL2ZpbHRlcnMuY3NzJztcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsdGVyU2V0dGluZ3Mge1xyXG4gIGZpbHRlcmVkOiBXaW5lRGV0YWlsc1tdO1xyXG4gIGZpbHRlckFycjogV2luZURldGFpbHNbXTtcclxuICBmaWx0ZXJzT2JqIDogRGVmYXVsdEZpbHRlcnM7XHJcbiAgc29ydGVkOiBXaW5lRGV0YWlsc1tdO1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5maWx0ZXJlZCA9IFtdO1xyXG4gICAgdGhpcy5maWx0ZXJBcnIgPSBbXTtcclxuICAgIHRoaXMuc29ydGVkID0gW107XHJcbiAgICB0aGlzLmZpbHRlcnNPYmogPSB7XHJcbiAgICAgIGNvbG9yOiBbXSxcclxuICAgICAgY291bnRyeTogW10sXHJcbiAgICAgIHllYXI6IFtdLFxyXG4gICAgICBwcmljZTogW10sXHJcbiAgICB9XHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ZpbHRlcicpKSB7XHJcbiAgICAgIHRoaXMuZmlsdGVyc09iaiA9IExvY2FsU3RvcmFnZS5nZXRMb2NhbFN0b3JhZ2UobG9jYWxTdG9yYWdlS2V5cy5maWx0ZXIpIHx8ICcnO1xyXG4gICAgfTtcclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmlsdGVyQXJyJykpIHtcclxuICAgICAgdGhpcy5maWx0ZXJBcnIgPSBMb2NhbFN0b3JhZ2UuZ2V0TG9jYWxTdG9yYWdlKGxvY2FsU3RvcmFnZUtleXMuZmlsdGVyQXJyKSB8fCAnJztcclxuICAgIH07XHJcblxyXG4gIH1cclxuICBcclxuICBmaWx0ZXJCeUNvdW50cnkoZGF0YTogV2luZURldGFpbHNbXSkge1xyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzb3J0ZWQnKSkge1xyXG4gICAgICBkYXRhID0gTG9jYWxTdG9yYWdlLmdldExvY2FsU3RvcmFnZShsb2NhbFN0b3JhZ2VLZXlzLnNvcnRlZCkgfHwgZGF0YTtcclxuICAgIH07XHJcbiAgXHJcbiAgIHRoaXMuZmlsdGVyZWQgPSBbXTtcclxuICBjb25zdCBmaWx0ZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZpbHRlcnMnKTtcclxuICB0aGlzLmZpbHRlcnNPYmouY291bnRyeSA9IFsuLi5maWx0ZXJzIS5xdWVyeVNlbGVjdG9yQWxsKCcjY291bnRyeSBpbnB1dDpjaGVja2VkJyldLm1hcChpdGVtID0+IChpdGVtIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlKTtcclxuICBjb25zb2xlLmxvZyh0aGlzLmZpbHRlcnNPYmouY291bnRyeSk7XHJcbiAgZGF0YS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgIGlmKHRoaXMuZmlsdGVyc09iai5jb3VudHJ5LmluY2x1ZGVzKGl0ZW0uY291bnRyeSkpe1xyXG4gICAgICB0aGlzLmZpbHRlcmVkLnB1c2goaXRlbSlcclxuICAgICAgY29uc29sZS5sb2codGhpcy5maWx0ZXJlZClcclxuICAgICB9XHJcbiAgfSlcclxuICBMb2NhbFN0b3JhZ2Uuc2V0TG9jYWxTdG9yYWdlKGxvY2FsU3RvcmFnZUtleXMuZmlsdGVyLCB0aGlzLmZpbHRlcnNPYmopXHJcbiAgTG9jYWxTdG9yYWdlLnNldExvY2FsU3RvcmFnZShsb2NhbFN0b3JhZ2VLZXlzLmZpbHRlckFyciwgdGhpcy5maWx0ZXJlZClcclxufVxyXG5cclxuZmlsdGVyQnlDb2xvcihkYXRhOiBXaW5lRGV0YWlsc1tdKSB7XHJcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzb3J0ZWQnKSkge1xyXG4gICAgZGF0YSA9IExvY2FsU3RvcmFnZS5nZXRMb2NhbFN0b3JhZ2UobG9jYWxTdG9yYWdlS2V5cy5zb3J0ZWQpIHx8IGRhdGE7XHJcbiAgfTtcclxuIFxyXG4gICB0aGlzLmZpbHRlcmVkID0gW107XHJcbiAgY29uc3QgZmlsdGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmaWx0ZXJzJyk7XHJcbiAgdGhpcy5maWx0ZXJzT2JqLmNvbG9yID0gWy4uLmZpbHRlcnMhLnF1ZXJ5U2VsZWN0b3JBbGwoJyNjb2xvciBpbnB1dDpjaGVja2VkJyldLm1hcChpdGVtID0+IChpdGVtIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlKTtcclxuICBjb25zb2xlLmxvZyh0aGlzLmZpbHRlcnNPYmouY29sb3IpXHJcbiAgZGF0YS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gIGlmKHRoaXMuZmlsdGVyc09iai5jb2xvci5pbmNsdWRlcyhpdGVtLmNvbG9yKSl7XHJcbiAgICB0aGlzLmZpbHRlcmVkLnB1c2goaXRlbSlcclxuICB9XHJcbn0pXHJcbkxvY2FsU3RvcmFnZS5zZXRMb2NhbFN0b3JhZ2UobG9jYWxTdG9yYWdlS2V5cy5maWx0ZXIsIHRoaXMuZmlsdGVyc09iailcclxuTG9jYWxTdG9yYWdlLnNldExvY2FsU3RvcmFnZShsb2NhbFN0b3JhZ2VLZXlzLmZpbHRlckFyciwgdGhpcy5maWx0ZXJlZClcclxufVxyXG5cclxucmVzZXRGaWx0ZXJzKCkge1xyXG50aGlzLmZpbHRlcnNPYmouY29sb3IgPSBbXTtcclxudGhpcy5maWx0ZXJzT2JqLmNvdW50cnkgPSBbXTtcclxuY29uc3QgZmlsdGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmaWx0ZXJzJyk7XHJcblsuLi5maWx0ZXJzIS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dDpjaGVja2VkJyldLm1hcChpdGVtID0+IChpdGVtIGFzIEhUTUxJbnB1dEVsZW1lbnQpLmNoZWNrZWQgPSBmYWxzZSk7XHJcbkxvY2FsU3RvcmFnZS5zZXRMb2NhbFN0b3JhZ2UobG9jYWxTdG9yYWdlS2V5cy5maWx0ZXJBcnIsIHRoaXMuZmlsdGVyQXJyKTtcclxuTG9jYWxTdG9yYWdlLnNldExvY2FsU3RvcmFnZShsb2NhbFN0b3JhZ2VLZXlzLmZpbHRlciwgdGhpcy5maWx0ZXJzT2JqKTtcclxuXHJcbn1cclxuXHJcbnJlc2V0QWxsKCkge1xyXG4gIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGxvY2FsU3RvcmFnZUtleXMuc29ydGVkKTtcclxuICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShsb2NhbFN0b3JhZ2VLZXlzLmZpbHRlcik7XHJcbiAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0obG9jYWxTdG9yYWdlS2V5cy5jYXJ0KTtcclxuICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShsb2NhbFN0b3JhZ2VLZXlzLmdvb2RzKTtcclxuICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShsb2NhbFN0b3JhZ2VLZXlzLmZpbHRlckFycik7XHJcbiAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0obG9jYWxTdG9yYWdlS2V5cy50b3RhbEl0ZW1zSW5DYXJ0KTtcclxufVxyXG5cclxuc29ydFByaWNlVXAoZGF0YTogV2luZURldGFpbHNbXSl7XHJcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzb3J0ZWQnKSkge1xyXG4gICAgZGF0YSA9IExvY2FsU3RvcmFnZS5nZXRMb2NhbFN0b3JhZ2UobG9jYWxTdG9yYWdlS2V5cy5zb3J0ZWQpIHx8IGRhdGE7XHJcbiAgfTtcclxuICB0aGlzLnNvcnRlZCA9IGRhdGEuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgcmV0dXJuICthLnByaWNlIC0gK2IucHJpY2U7XHJcbiAgfSlcclxuICBjb25zb2xlLmxvZyh0aGlzLnNvcnRlZCk7XHJcbiAgTG9jYWxTdG9yYWdlLnNldExvY2FsU3RvcmFnZShsb2NhbFN0b3JhZ2VLZXlzLnNvcnRlZCwgdGhpcy5zb3J0ZWQpXHJcbn1cclxuc29ydFByaWNlRG93bihkYXRhOiBXaW5lRGV0YWlsc1tdKXtcclxuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NvcnRlZCcpKSB7XHJcbiAgICBkYXRhID0gTG9jYWxTdG9yYWdlLmdldExvY2FsU3RvcmFnZShsb2NhbFN0b3JhZ2VLZXlzLnNvcnRlZCkgfHwgZGF0YTtcclxuICB9O1xyXG4gIHRoaXMuc29ydGVkID0gZGF0YS5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICByZXR1cm4gK2IucHJpY2UgLSArYS5wcmljZTtcclxuICB9KVxyXG4gIGNvbnNvbGUubG9nKHRoaXMuc29ydGVkKTtcclxuICBMb2NhbFN0b3JhZ2Uuc2V0TG9jYWxTdG9yYWdlKGxvY2FsU3RvcmFnZUtleXMuc29ydGVkLCB0aGlzLnNvcnRlZClcclxufVxyXG5cclxufVxyXG4iLCJpbXBvcnQgJy4vd2luZWNhcmRzLmNzcyc7XHJcbmltcG9ydCB7IFdpbmUsIFdpbmVEZXRhaWxzIH0gZnJvbSAnLi4vLi4vdHlwZXMvaW50ZXJmYWNlcydcclxuaW1wb3J0IHsgTG9jYWxTdG9yYWdlLCBsb2NhbFN0b3JhZ2VLZXlzIH0gZnJvbSAnLi4vLi4vdXRpbHMvbG9jYWxzdG9yYWdlJztcclxuXHJcbmNsYXNzIFdpbmVDYXJkcyB7XHJcbiAgcmVuZGVyKGRhdGE6IFdpbmVEZXRhaWxzW10pIHtcclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ29vZHMnKSkge1xyXG4gICAgICBkYXRhID0gTG9jYWxTdG9yYWdlLmdldExvY2FsU3RvcmFnZShsb2NhbFN0b3JhZ2VLZXlzLmdvb2RzKSB8fCBkYXRhO1xyXG4gICAgfTtcclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc29ydGVkJykpIHtcclxuICAgICAgZGF0YSA9IExvY2FsU3RvcmFnZS5nZXRMb2NhbFN0b3JhZ2UobG9jYWxTdG9yYWdlS2V5cy5zb3J0ZWQpIHx8IGRhdGE7XHJcbiAgICB9O1xyXG4gICAgY29uc3Qgd2luZXMgPSBkYXRhO1xyXG4gICAgY29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcbiAgICBjb25zdCB3aW5lQ2FyZFRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2luZWNhcmRzSXRlbVRlbXAnKSBhcyBIVE1MVGVtcGxhdGVFbGVtZW50O1xyXG4gICAgd2luZXMuZm9yRWFjaCgoaXRlbSA6IFdpbmVEZXRhaWxzLCBpZHggOiBudW1iZXIpID0+IHtcclxuICAgICAgY29uc3Qgd2luZUNhcmQgPSB3aW5lQ2FyZFRlbXAuY29udGVudC5jbG9uZU5vZGUodHJ1ZSkgYXMgSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgICAod2luZUNhcmQucXVlcnlTZWxlY3RvcignLndpbmVjYXJkc19fZmFjZS1waG90bycpIGFzIEhUTUxFbGVtZW50KSEuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2l0ZW0uaW1hZ2V9KWA7XHJcbiAgICAgICh3aW5lQ2FyZC5xdWVyeVNlbGVjdG9yKCcud2luZWNhcmRzX19mYWNlLW5hbWUnKSkhLnRleHRDb250ZW50ID0gaXRlbS5uYW1lO1xyXG4gICAgICAod2luZUNhcmQucXVlcnlTZWxlY3RvcignLndpbmVjYXJkc19fZmFjZS1jb3VudCcpKSEudGV4dENvbnRlbnQgPSBg0JIg0L3QsNC70LjRh9C40LggOiAke2l0ZW0uY291bnR9YDtcclxuICAgICAgKHdpbmVDYXJkLnF1ZXJ5U2VsZWN0b3IoJy53aW5lY2FyZHNfX2ZhY2UtcHJpY2UnKSkhLnRleHRDb250ZW50ID0gYCR7aXRlbS5wcmljZX0gQllOYDtcclxuICAgICAgKHdpbmVDYXJkLnF1ZXJ5U2VsZWN0b3IoJy53aW5lY2FyZHNfX2JhY2stbmFtZScpKSEudGV4dENvbnRlbnQgPSBpdGVtLm5hbWU7XHJcbiAgICAgICh3aW5lQ2FyZC5xdWVyeVNlbGVjdG9yKCcud2luZWNhcmRzX19iYWNrLW1hZGVCeScpKSEudGV4dENvbnRlbnQgPSBg0J/RgNC+0LjQt9Cy0L7QtNC40YLQtdC70YwgOiAke2l0ZW0ubWFkZUJ5fWA7XHJcbiAgICAgICh3aW5lQ2FyZC5xdWVyeVNlbGVjdG9yKCcud2luZWNhcmRzX19iYWNrLWNvdW50cnknKSkhLnRleHRDb250ZW50ID0gYNCh0YLRgNCw0L3QsCA6ICR7aXRlbS5jb3VudHJ5fWA7XHJcbiAgICAgICh3aW5lQ2FyZC5xdWVyeVNlbGVjdG9yKCcud2luZWNhcmRzX19iYWNrLXllYXInKSkhLnRleHRDb250ZW50ID0gYNCT0L7QtCA6ICR7aXRlbS55ZWFyfWA7XHJcbiAgICAgICh3aW5lQ2FyZC5xdWVyeVNlbGVjdG9yKCcud2luZWNhcmRzX19iYWNrLWNvbG9yJykpIS50ZXh0Q29udGVudCA9IGDQptCy0LXRgiA6ICR7aXRlbS5jb2xvcn1gO1xyXG4gICAgICAod2luZUNhcmQucXVlcnlTZWxlY3RvcignLndpbmVjYXJkc19fYmFjay1hbGNvaG9sJykpIS50ZXh0Q29udGVudCA9IGDQmtGA0LXQv9C+0YHRgtGMIDogJHtpdGVtLmFsY29ob2x9JWA7XHJcbiAgICAgICh3aW5lQ2FyZC5xdWVyeVNlbGVjdG9yKCcud2luZWNhcmRzX19iYWNrLXZvbCcpKSEudGV4dENvbnRlbnQgPSBg0J7QsdGK0LXQvCA6ICR7aXRlbS52b2x90LtgO1xyXG5cclxuXHJcbiAgICAgIGlmICghaXRlbS5pblN0b2NrIHx8IGl0ZW0uY291bnQgPT09IDApIHtcclxuICAgICAgICAod2luZUNhcmQucXVlcnlTZWxlY3RvcignLndpbmVjYXJkc19faXRlbScpIGFzIEhUTUxFbGVtZW50KSEuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcclxuICAgICAgICAod2luZUNhcmQucXVlcnlTZWxlY3RvcignLndpbmVjYXJkc19faXRlbScpIGFzIEhUTUxFbGVtZW50KSEuc3R5bGUub3BhY2l0eSA9ICcwLjUnO1xyXG4gICAgICAgICh3aW5lQ2FyZC5xdWVyeVNlbGVjdG9yKCcud2luZWNhcmRzX19mYWNlLWNvdW50JykpIS50ZXh0Q29udGVudCA9ICfQndC10YIg0LIg0L3QsNC70LjRh9C40LgnO1xyXG4gICAgICAgICh3aW5lQ2FyZC5xdWVyeVNlbGVjdG9yKCcud2luZWNhcmRzX19mYWNlLXByaWNlJykpIS50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZihpdGVtLmluQ2FydCA+IDApIHtcclxuICAgICAgICAod2luZUNhcmQucXVlcnlTZWxlY3RvcignLndpbmVjYXJkc19faXRlbScpIGFzIEhUTUxFbGVtZW50KSEuY2xhc3NMaXN0LmFkZCgnaW5DYXJ0Jyk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZXtcclxuICAgICAgICAod2luZUNhcmQucXVlcnlTZWxlY3RvcignLndpbmVjYXJkc19faXRlbScpIGFzIEhUTUxFbGVtZW50KSEuY2xhc3NMaXN0LnJlbW92ZSgnaW5DYXJ0Jyk7XHJcblxyXG4gICAgICB9XHJcbiAgICAgICh3aW5lQ2FyZC5xdWVyeVNlbGVjdG9yKCcuY2FydF9fYWRkJykpIS5zZXRBdHRyaWJ1dGUoJ2RhdGEtYXJ0aWN1bCcsIGAke2lkeH1gKVxyXG4gICAgICBmcmFnbWVudC5hcHBlbmQod2luZUNhcmQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5lY2FyZHMtY29udGFpbmVyJykpIS5pbm5lckhUTUwgPSAnJztcclxuICAgIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2luZWNhcmRzLWNvbnRhaW5lcicpKSEuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2luZUNhcmRzOyIsImV4cG9ydCAgY29uc3QgZ29vZHMgPSBbXG4gIHtcbiAgICBpZDogMCxcbiAgICBuYW1lOiBcIk5hdGlvbmFsIFZpbnRhZ2UgUG9ydFwiLFxuICAgIG1hZGVCeTogXCJRdWludGEgZG8gTm92YWxcIixcbiAgICBjb3VudHJ5OiBcItCf0L7RgNGC0YPQs9Cw0LvQuNGPXCIsXG4gICAgeWVhcjogXCIyMDExXCIsXG4gICAgYWxjb2hvbDogXCIxOVwiLFxuICAgIHZvbDogXCIwLjc1XCIsXG4gICAgcHJpY2U6IFwiMTM4MzJcIixcbiAgICBjb2xvcjogXCJyZWRcIixcbiAgICBpbWFnZTogJy4vYXNzZXRzL2ltZy9wb3J0dmV5bi1xdWludGEtZG8tbm92YWwtbmFjaW9uYWwtdmludGFnZS1wb3J0LTIwMTEucG5nJyxcbiAgICBjb3VudDogNSxcbiAgICBpblN0b2NrOiB0cnVlLFxuICAgIGluQ2FydDogMCxcbiAgfSxcbiAge1xuICAgIGlkOiAxLFxuICAgIG5hbWU6IFwiQmxhdWZyYW5raXNjaCBDbGFzc2ljXCIsXG4gICAgbWFkZUJ5OiBcIkhhbnMgSWdsZXJcIixcbiAgICBjb3VudHJ5OiBcItCQ0LLRgdGC0YDQuNGPXCIsXG4gICAgeWVhcjogXCIyMDE5XCIsXG4gICAgYWxjb2hvbDogXCIxM1wiLFxuICAgIHZvbDogXCIwLjc1XCIsXG4gICAgcHJpY2U6ICcxNzQnLFxuICAgIGNvbG9yOiAncmVkJyxcbiAgICBpbWFnZTogJy4vYXNzZXRzL2ltZy9ibGF1ZnJhbmtpc2NoLWNsYXNzaWMucG5nJyxcbiAgICBjb3VudDogNSxcbiAgICBpblN0b2NrOiB0cnVlLFxuICAgIGluQ2FydDogMCxcbiAgfSxcbiAge1xuICAgIGlkOiAyLFxuICAgIG5hbWU6IFwiUmhlaW5nYXUgUmllc2xpbmcgVHJvY2tlblwiLFxuICAgIG1hZGVCeTogXCJSb2JlcnQgV2VpbFwiLFxuICAgIGNvdW50cnk6IFwi0JPQtdGA0LzQsNC90LjRj1wiLFxuICAgIHllYXI6IFwiMjAxOVwiLFxuICAgIGFsY29ob2w6IFwiMTJcIixcbiAgICB2b2w6IFwiMC43NVwiLFxuICAgIHByaWNlOiAnMjA0JyxcbiAgICBjb2xvcjogJ3doaXRlJyxcbiAgICBpbWFnZTogJy4vYXNzZXRzL2ltZy9yaGVpbmdhdS1yaWVzbGluZy10cm9ja2VuLnBuZycsXG4gICAgY291bnQ6IDUsXG4gICAgaW5TdG9jazogdHJ1ZSxcbiAgICBpbkNhcnQ6IDAsXG4gIH0sXG4gIHtcbiAgICBpZDogMyxcbiAgICBuYW1lOiBcIk1hbGxlb3VzIGRlIFNhbmNob21hcnRpblwiLFxuICAgIG1hZGVCeTogXCJFbWlsaW8gTW9yb1wiLFxuICAgIGNvdW50cnk6IFwi0JjRgdC/0LDQvdC40Y9cIixcbiAgICB5ZWFyOiBcIjIwMThcIixcbiAgICBhbGNvaG9sOiBcIjE0XCIsXG4gICAgdm9sOiBcIjAuNzVcIixcbiAgICBwcmljZTogJzEzMDcnLFxuICAgIGNvbG9yOiAncmVkJyxcbiAgICBpbWFnZTogJy4vYXNzZXRzL2ltZy9tYWxsZW91cy1kZS1zYW5jaG9tYXJ0aW4ucG5nJyxcbiAgICBjb3VudDogNSxcbiAgICBpblN0b2NrOiB0cnVlLFxuICAgIGluQ2FydDogMCxcbiAgfSxcbiAge1xuICAgIGlkOiA0LFxuICAgIG5hbWU6IFwiR2F2aSBkZWkgR2F2aSAoRXRpY2hldHRhIE5lcmEpXCIsXG4gICAgbWFkZUJ5OiBcImxhIFNjb2xjYVwiLFxuICAgIGNvdW50cnk6IFwi0JjRgtCw0LvQuNGPXCIsXG4gICAgeWVhcjogXCIyMDIwXCIsXG4gICAgYWxjb2hvbDogXCIxMlwiLFxuICAgIHZvbDogXCIwLjc1XCIsXG4gICAgcHJpY2U6ICczMjYnLFxuICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgIGltYWdlOiAnLi9hc3NldHMvaW1nL2dhdmktZGVpLWdhdmkucG5nJyxcbiAgICBjb3VudDogNSxcbiAgICBpblN0b2NrOiB0cnVlLFxuICAgIGluQ2FydDogMCxcbiAgfSxcbiAge1xuICAgIGlkOiA1LFxuICAgIG5hbWU6IFwiQ2hhcmx5IER1ZGVzXCIsXG4gICAgbWFkZUJ5OiBcIlR3byBIYW5kc1wiLFxuICAgIGNvdW50cnk6IFwi0JDQstGB0YLRgNCw0LvQuNGPXCIsXG4gICAgeWVhcjogXCIyMDIwXCIsXG4gICAgYWxjb2hvbDogXCIxNFwiLFxuICAgIHZvbDogXCIxLjVcIixcbiAgICBwcmljZTogJzQzNScsXG4gICAgY29sb3I6ICdyZWQnLFxuICAgIGltYWdlOiBcIi4vYXNzZXRzL2ltZy9jaGFybGV5LWR1ZGVzLnBuZ1wiLFxuICAgIGNvdW50OiA1LFxuICAgIGluU3RvY2s6IHRydWUsXG4gICAgaW5DYXJ0OiAwLFxuICB9LFxuICB7XG4gICAgaWQ6IDYsXG4gICAgbmFtZTogXCJSaWNoZWJvdXJnIEdyYW5nIEdydVwiLFxuICAgIG1hZGVCeTogXCJEb21haW5lIEplYW4gR3Jpdm90XCIsXG4gICAgY291bnRyeTogXCLQpNGA0LDQvdGG0LjRj1wiLFxuICAgIHllYXI6IFwiMjAxNVwiLFxuICAgIGFsY29ob2w6IFwiMTNcIixcbiAgICB2b2w6IFwiMC43NVwiLFxuICAgIHByaWNlOiAnMTY3NzgnLFxuICAgIGNvbG9yOiAncmVkJyxcbiAgICBpbWFnZTogJy4vYXNzZXRzL2ltZy9yaWNoZWJvdXJnLWdyYW5kLWdydS5wbmcnLFxuICAgIGNvdW50OiA1LFxuICAgIGluU3RvY2s6IHRydWUsXG4gICAgaW5DYXJ0OiAwLFxuICB9LFxuICB7XG4gICAgaWQ6IDcsXG4gICAgbmFtZTogXCJDaGFibGlzIFZpZWlsbGVzIFZpZ2hlcyAxOTQ2XCIsXG4gICAgbWFkZUJ5OiBcIkplYW4tTWFyYyBCcm9jYXJkIChEb21haW5lIFNhaW50ZS1DbGFpcmUpXCIsXG4gICAgY291bnRyeTogXCLQpNGA0LDQvdGG0LjRj1wiLFxuICAgIHllYXI6IFwiMjAxOFwiLFxuICAgIGFsY29ob2w6IFwiMTNcIixcbiAgICB2b2w6IFwiMC43NVwiLFxuICAgIHByaWNlOiAnMzEzJyxcbiAgICBjb2xvcjogJ3doaXRlJyxcbiAgICBpbWFnZTogJy4vYXNzZXRzL2ltZy9jaGFibGlzLXZpZWlsbGVzLXZpZ2hlcy0xOTQ2LnBuZycsXG4gICAgY291bnQ6IDUsXG4gICAgaW5TdG9jazogdHJ1ZSxcbiAgICBpbkNhcnQ6IDAsXG4gIH0sXG4gIHtcbiAgICBpZDogOCxcbiAgICBuYW1lOiBcIjUweDUwXCIsXG4gICAgbWFkZUJ5OiBcIkNhcGFubmVsbGVcIixcbiAgICBjb3VudHJ5OiBcItCY0YLQsNC70LjRj1wiLFxuICAgIHllYXI6IFwiMjAxNVwiLFxuICAgIGFsY29ob2w6IFwiMTNcIixcbiAgICB2b2w6IFwiMC43NVwiLFxuICAgIHByaWNlOiAnMjUwNScsXG4gICAgY29sb3I6ICdyZWQnLFxuICAgIGltYWdlOiAnLi9hc3NldHMvaW1nLzUweDUwLnBuZycsXG4gICAgY291bnQ6IDUsXG4gICAgaW5TdG9jazogdHJ1ZSxcbiAgICBpbkNhcnQ6IDAsXG4gIH0sXG4gIHtcbiAgICBpZDogOSxcbiAgICBuYW1lOiBcIlBlbmZvbGRzIEdyYW5nZVwiLFxuICAgIG1hZGVCeTogXCJQZW5mb2xkc1wiLFxuICAgIGNvdW50cnk6IFwi0JDQstGB0YLRgNCw0LvQuNGPXCIsXG4gICAgeWVhcjogXCIyMDE2XCIsXG4gICAgYWxjb2hvbDogXCIxNFwiLFxuICAgIHZvbDogXCIwLjc1XCIsXG4gICAgcHJpY2U6ICc4NzEnLFxuICAgIGNvbG9yOiAncmVkJyxcbiAgICBpbWFnZTogJy4vYXNzZXRzL2ltZy9wZW5mb2xkcy1ncmFuZ2UucG5nJyxcbiAgICBjb3VudDogNSxcbiAgICBpblN0b2NrOiB0cnVlLFxuICAgIGluQ2FydDogMCxcbiAgfSxcbiAge1xuICAgIGlkOiAxMCxcbiAgICBuYW1lOiBcIlBlbmZvbGRzIEJpbiAzODkgQ2FiZXJuZXQgU2hpcmF6XCIsXG4gICAgbWFkZUJ5OiBcIlBlbmZvbGRzXCIsXG4gICAgY291bnRyeTogXCLQkNCy0YHRgtGA0LDQu9C40Y9cIixcbiAgICB5ZWFyOiBcIjIwMTlcIixcbiAgICBhbGNvaG9sOiBcIjE0XCIsXG4gICAgdm9sOiBcIjAuNzVcIixcbiAgICBwcmljZTogJzg3MScsXG4gICAgY29sb3I6ICdyZWQnLFxuICAgIGltYWdlOiAnLi9hc3NldHMvaW1nL3BlbmZvbGRzLWJpbi0zODktY2FiZXJuZXQtc2hpcmF6LnBuZycsXG4gICAgY291bnQ6IDUsXG4gICAgaW5TdG9jazogdHJ1ZSxcbiAgICBpbkNhcnQ6IDAsXG4gIH0sXG4gIHtcbiAgICBpZDogMTEsXG4gICAgbmFtZTogXCJLdXJuaVwiLFxuICAgIG1hZGVCeTogXCJPYXNpIGRlZ2xpIEFuZ2VsaVwiLFxuICAgIGNvdW50cnk6IFwi0JjRgtCw0LvQuNGPXCIsXG4gICAgeWVhcjogXCIyMDE4XCIsXG4gICAgYWxjb2hvbDogXCIxNFwiLFxuICAgIHZvbDogXCIxLjVcIixcbiAgICBwcmljZTogJzE3NDInLFxuICAgIGNvbG9yOiAncmVkJyxcbiAgICBpbWFnZTogJy4vYXNzZXRzL2ltZy9rdXJuaS5wbmcnLFxuICAgIGNvdW50OiA1LFxuICAgIGluU3RvY2s6IGZhbHNlLFxuICAgIGluQ2FydDogMCxcbiAgfSxcbl0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJ0UG9wdXAge1xuICBzdGF0aWMgY2FydFBvcHVwID0gYFxuICA8c3BhbiBjbGFzcz1cImNsb3NlLXBvcHVwXCI+WDwvc3Bhbj5cbiAgPGRpdiBjbGFzcz1cImNhcnQtcG9wdXBfX2NvbnRhaW5lclwiPjwvZGl2PlxuICA8cCBjbGFzcz1cImNhcnRfX3RvdGFsXCI+PC9wPlxuICBgO1xufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcnQge1xuICBzdGF0aWMgY2FydCA9IGBcbiAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImNhcnRfX25vdGlmaWNhdGlvblwiPlxuICAgIDxzcGFuIGNsYXNzPVwiY2FydF9fcHJvZHVjdHNcIj4wPC9zcGFuPlxuICA8L2E+XG4gIGA7XG59IiwiY2xhc3MgRmlsdGVycyB7XHJcbiAgc3RhdGljIGZpbHRlcnMgPSBgXHJcbiAgPGZvcm0gYWN0aW9uPVwiI1wiIGNsYXNzPVwiZmlsdGVycy1mb3JtXCI+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImZpbHRlcnMtY29udGFpbmVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb3VudHJ5LWZpbHRlclwiPlxyXG4gICAgICAgIDxoNCBjbGFzcz1cImZpbHRlci1uYW1lXCI+0KHRgtGA0LDQvdCwPC9oND5cclxuICAgICAgICA8ZGl2IGlkPVwiY291bnRyeVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNoZWNrYm94XCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cImNoZWNrMVwiIG5hbWU9XCJjb3VudHJ5XCIgdmFsdWU9XCLQkNCy0YHRgtGA0LDQu9C40Y9cIj5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY2hlY2tib3gtY291bnRyeVwiZm9yPVwiY2hlY2sxXCI+0JDQstGB0YLRgNCw0LvQuNGPPC9sYWJlbD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNoZWNrYm94XCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cImNoZWNrMlwiIG5hbWU9XCJjb3VudHJ5XCIgdmFsdWU9XCLQkNCy0YHRgtGA0LjRj1wiPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjaGVja2JveC1jb3VudHJ5XCJmb3I9XCJjaGVjazJcIj7QkNCy0YHRgtGA0LjRjzwvbGFiZWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGVja2JveFwiPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJjaGVjazNcIiBuYW1lPVwiY291bnRyeVwiIHZhbHVlPVwi0JPQtdGA0LzQsNC90LjRj1wiPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjaGVja2JveC1jb3VudHJ5XCJmb3I9XCJjaGVjazNcIj7Qk9C10YDQvNCw0L3QuNGPPC9sYWJlbD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNoZWNrYm94XCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cImNoZWNrNFwiIG5hbWU9XCJjb3VudHJ5XCIgdmFsdWU9XCLQmNGB0L/QsNC90LjRj1wiPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjaGVja2JveC1jb3VudHJ5XCJmb3I9XCJjaGVjazRcIj7QmNGB0L/QsNC90LjRjzwvbGFiZWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGVja2JveFwiPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJjaGVjazVcIiBuYW1lPVwiY291bnRyeVwiIHZhbHVlPVwi0JjRgtCw0LvQuNGPXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNoZWNrYm94LWNvdW50cnlcImZvcj1cImNoZWNrNVwiPtCY0YLQsNC70LjRjzwvbGFiZWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGVja2JveFwiPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJjaGVjazZcIiBuYW1lPVwiY291bnRyeVwiIHZhbHVlPVwi0J/QvtGA0YLRg9Cz0LDQu9C40Y9cIj5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY2hlY2tib3gtY291bnRyeVwiZm9yPVwiY2hlY2s2XCI+0J/QvtGA0YLRg9Cz0LDQu9C40Y88L2xhYmVsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hlY2tib3hcIj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwiY2hlY2s3XCIgbmFtZT1cImNvdW50cnlcIiB2YWx1ZT1cItCk0YDQsNC90YbQuNGPXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNoZWNrYm94LWNvdW50cnlcImZvcj1cImNoZWNrN1wiPtCk0YDQsNC90YbQuNGPPC9sYWJlbD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbG9yLWZpbHRlclwiPlxyXG4gICAgICAgIDxoNCBjbGFzcz1cImZpbHRlci1uYW1lXCI+0KbQstC10YI8L2g0PlxyXG4gICAgICAgIDxkaXYgaWQ9XCJjb2xvclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNoZWNrYm94XCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cImNoZWNrOFwiIG5hbWU9XCJjb2xvclwiIHZhbHVlPVwid2hpdGVcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY2hlY2tib3gtY29sb3JcImZvcj1cImNoZWNrOFwiPtCR0LXQu9C+0LU8L2xhYmVsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hlY2tib3hcIj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwiY2hlY2s5XCIgbmFtZT1cImNvbG9yXCIgdmFsdWU9XCJyZWRcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY2hlY2tib3gtY29sb3JcImZvcj1cImNoZWNrOVwiPtCa0YDQsNGB0L3QvtC1PC9sYWJlbD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cInNvcnQtY29udGFpbmVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJzb3J0XCI+XHJcbiAgICAgICAgPGg0IGNsYXNzPVwiZmlsdGVyLW5hbWVcIj7QodC+0YDRgtC40YDQvtCy0LrQsDwvaDQ+XHJcbiAgICAgICAgPHNlbGVjdCBjbGFzcz1cInNlbGVjdFwiPlxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj48L29wdGlvbj5cclxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQnlQcmljZVVwXCI+0J/QviDRhtC10L3QtTog0L/QviDQstC+0LfRgNCw0YHRgtCw0L3QuNGOPC9vcHRpb24+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkJ5UHJpY2VEb3duXCI+0J/QviDRhtC10L3QtTog0L/QviDRg9Cx0YvQstCw0L3QuNGOPC9vcHRpb24+XHJcbiAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICAgIFxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cInJlc2V0LWZpbHRlcnMgY2xhc3M9XCJidG5cIj7QodCx0YDQvtGB0YLRjCDRhNC40LvRjNGC0YDRizwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cInJlc2V0LWZpbHRlcnMgcmVzZXQgY2xhc3M9XCJidG5cIj7QntGH0LjRgdGC0LjRgtGMINC40YHRgtC+0YDQuNGOPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Zvcm0+XHJcbmA7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpbHRlcnM7IiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi8uLi91dGlscy9jb21wb25lbnQnO1xuaW1wb3J0IFNlYXJjaElucHV0IGZyb20gJy4uL3NlYXJjaC9zZWFyY2gnO1xuaW1wb3J0IENhcnQgZnJvbSAnLi4vY2FydC9jYXJ0J1xuaW1wb3J0IENhcnRQb3B1cCBmcm9tICcuLi9jYXJ0LXBvcHVwL2NhcnQtcG9wdXAnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBwcml2YXRlIGNsYXNzTmFtZTogc3RyaW5nO1xuICBwcml2YXRlIHNlYXJjaDogQ29tcG9uZW50O1xuICBwcml2YXRlIGNhcnQ6IENvbXBvbmVudDtcbiAgcHJpdmF0ZSBjYXJ0UG9wdXA6IENvbXBvbmVudDtcbiAgY29uc3RydWN0b3IodGFnTmFtZTogc3RyaW5nLCBjbGFzc05hbWU6IHN0cmluZykge1xuICAgIHN1cGVyKHRhZ05hbWUsIGNsYXNzTmFtZSk7XG4gICAgdGhpcy5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gICAgdGhpcy5zZWFyY2ggPSBuZXcgQ29tcG9uZW50KCdkaXYnLCdoZWFkZXJfX3NlYXJjaCBzZWFyY2gtY29udGFpbmVyJywnc2VhcmNoLWlucHV0Jyk7XG4gICAgdGhpcy5jYXJ0ID0gbmV3IENvbXBvbmVudCgnZGl2JywgJ2hlYWRlcl9fY2FydCBjYXJ0JywgJ2NhcnQnKTtcbiAgICB0aGlzLmNhcnRQb3B1cCA9IG5ldyBDb21wb25lbnQoJ2RpdicsICdjYXJ0LXBvcHVwJywgJ2NhcnQtcG9wdXAnKTtcbiAgfVxuICAgIHJlbmRlclNlYXJjaCgpIHtcbiAgICAgIGNvbnN0IHNlYXJjaERpdjogSFRNTEVsZW1lbnQgPSB0aGlzLnNlYXJjaC5yZW5kZXIoKTtcbiAgICAgIHNlYXJjaERpdi5pbm5lckhUTUwgPSBTZWFyY2hJbnB1dC5zZWFyY2hGb3JtO1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kKHNlYXJjaERpdik7XG4gICAgfVxuXG4gICAgcmVuZGVyQ2FydCgpIHtcbiAgICAgIGNvbnN0IGNhcnREaXY6IEhUTUxFbGVtZW50ID0gdGhpcy5jYXJ0LnJlbmRlcigpO1xuICAgICAgY2FydERpdi5pbm5lckhUTUwgPSBDYXJ0LmNhcnQ7XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmQoY2FydERpdik7XG4gICAgfVxuXG4gICAgcmVuZGVyQ2FydFBvcHVwKCkge1xuICAgICAgY29uc3QgY2FydFBvcHVwRGl2OiBIVE1MRWxlbWVudCA9IHRoaXMuY2FydFBvcHVwLnJlbmRlcigpO1xuICAgICAgY2FydFBvcHVwRGl2LmlubmVySFRNTCA9IENhcnRQb3B1cC5jYXJ0UG9wdXA7XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmQoY2FydFBvcHVwRGl2KTtcbiAgICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHRoaXMucmVuZGVyU2VhcmNoKCk7XG4gICAgIHRoaXMucmVuZGVyQ2FydCgpO1xuICAgICB0aGlzLnJlbmRlckNhcnRQb3B1cCgpO1xuICAgIHJldHVybiB0aGlzLmNvbnRhaW5lcjtcbiAgfVxufSIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vLi4vdXRpbHMvY29tcG9uZW50JztcbmltcG9ydCBXaW5lY2FyZHMgZnJvbSAnLi4vd2luZWNhcmRzL3dpbmVjYXJkcyc7XG5pbXBvcnQgRmlsdGVycyBmcm9tICcuLi9maWx0ZXJzL2ZpbHRlcnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcHJpdmF0ZSBjbGFzc05hbWU6IHN0cmluZztcbiAgcHJpdmF0ZSB3aW5lY2FyZHM6IENvbXBvbmVudDtcbiAgcHJpdmF0ZSBmaWx0ZXJzOiBDb21wb25lbnQ7XG4gIGNvbnN0cnVjdG9yKHRhZ05hbWU6IHN0cmluZywgY2xhc3NOYW1lOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0YWdOYW1lLCBjbGFzc05hbWUpO1xuICAgIHRoaXMuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICAgIHRoaXMud2luZWNhcmRzID0gbmV3IENvbXBvbmVudCgnc2VjdGlvbicsJ3dpbmVjYXJkcycsJ3dpbmVjYXJkcycpO1xuICAgIHRoaXMuZmlsdGVycyA9IG5ldyBDb21wb25lbnQoJ3NlY3Rpb24nLCdmaWx0ZXJzJywnZmlsdGVycycpO1xuICB9XG4gIHJlbmRlckZpbHRlcnMoKSB7XG4gICAgY29uc3QgZmlsdGVyc1NlY3Rpb246IEhUTUxFbGVtZW50ID0gdGhpcy5maWx0ZXJzLnJlbmRlcigpO1xuICAgIGZpbHRlcnNTZWN0aW9uLmlubmVySFRNTCA9IEZpbHRlcnMuZmlsdGVycztcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmQoZmlsdGVyc1NlY3Rpb24pO1xuICB9XG5cbiAgICByZW5kZXJXaW5lY2FyZHMoKSB7XG4gICAgICBjb25zdCB3aW5lY2FyZHNTZWN0aW9uOiBIVE1MRWxlbWVudCA9IHRoaXMud2luZWNhcmRzLnJlbmRlcigpO1xuICAgICAgd2luZWNhcmRzU2VjdGlvbi5pbm5lckhUTUwgPSBXaW5lY2FyZHMud2luZWNhcmRzO1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kKHdpbmVjYXJkc1NlY3Rpb24pO1xuICAgIH1cblxuICByZW5kZXIoKSB7XG4gICAgdGhpcy5yZW5kZXJGaWx0ZXJzKCk7XG4gICAgIHRoaXMucmVuZGVyV2luZWNhcmRzKCk7XG4gICAgcmV0dXJuIHRoaXMuY29udGFpbmVyO1xuICB9XG59IiwiY2xhc3MgU2VhcmNoSW5wdXQge1xuICBzdGF0aWMgc2VhcmNoRm9ybSA9IGBcbiAgICAgIDxpbnB1dFxuICAgICAgICBjbGFzcz1cInNlYXJjaC1jb250YWluZXJfX2lucHV0XCJcbiAgICAgICAgdHlwZT1cInNlYXJjaFwiXG4gICAgICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwi0J/QvtC40YHQui4uLlwiXG4gICAgICAgIG5hbWU9XCJzZWFyY2hcIlxuICAgICAgICBhdXRvZm9jdXNcbiAgICAgIC8+XG5gO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hJbnB1dDsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBXaW5lY2FyZHMge1xuICBzdGF0aWMgd2luZWNhcmRzID0gYFxuICA8ZGl2IGNsYXNzPVwid2luZWNhcmRzLWNvbnRhaW5lclwiPlxuXG4gIDwvZGl2PlxuICBgO1xufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudCB7XG4gIHByb3RlY3RlZCBjb250YWluZXI6IEhUTUxFbGVtZW50O1xuXG4gIGNvbnN0cnVjdG9yKHRhZ05hbWU6IHN0cmluZywgY2xhc3NOYW1lOiBzdHJpbmcgPSAnJywgaWQ/OiBzdHJpbmcpIHtcbiAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG4gICAgdGhpcy5jb250YWluZXIuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICAgIGlkID8gKHRoaXMuY29udGFpbmVyLmlkID0gaWQpIDogbnVsbDtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5jb250YWluZXI7XG4gIH1cbn1cbiIsImltcG9ydCB7IFdpbmVEZXRhaWxzIH0gZnJvbSBcIi4uL3R5cGVzL2ludGVyZmFjZXNcIjtcclxuXHJcbmNvbnN0IGVudW0gbG9jYWxTdG9yYWdlS2V5cyB7XHJcbiAgZmlsdGVyID0gJ2ZpbHRlcicsXHJcbiAgY2FydCA9ICdjYXJ0JyxcclxuICBnb29kcyAgPSAnZ29vZHMnLFxyXG4gIHRvdGFsSXRlbXNJbkNhcnQgPSAndG90YWxJdGVtc0luQ2FydCcsXHJcbiAgZmlsdGVyQXJyID0gJ2ZpbHRlckFycicsXHJcbiAgc29ydGVkID0gJ3NvcnRlZCcsXHJcbn1cclxuXHJcbmNsYXNzIExvY2FsU3RvcmFnZSB7XHJcbiAgXHJcbiAgICBzdGF0aWMgc2V0TG9jYWxTdG9yYWdlKFxyXG4gICAgICBkYXRhS2V5OiBsb2NhbFN0b3JhZ2VLZXlzLFxyXG4gICAgICBkYXRhOiBvYmplY3QgfCBbXSB8IHN0cmluZyB8IG51bWJlclxyXG4gICAgKTogdm9pZCB7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGRhdGFLZXksIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICAgIH1cclxuICBcclxuICAgIHN0YXRpYyBnZXRMb2NhbFN0b3JhZ2UoZGF0YTogbG9jYWxTdG9yYWdlS2V5cyk6IGFueSB7XHJcbiAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShkYXRhKSkge1xyXG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKFN0cmluZyhsb2NhbFN0b3JhZ2UuZ2V0SXRlbShkYXRhKSkpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBleHBvcnQgeyBMb2NhbFN0b3JhZ2UsIGxvY2FsU3RvcmFnZUtleXMgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL2dsb2JhbC5jc3MnO1xuLy8gaW1wb3J0IFdpbmVDYXJkcyBmcm9tICcuL2NvbXBvbmVudHMvd2luZWNhcmRzL3dpbmVjYXJkcyc7XG4vLyBpbXBvcnQgJy4vY29tcG9uZW50cy9jYXJ0L2NhcnQnO1xuIGltcG9ydCB7Z29vZHN9IGZyb20gJy4vY29uc3RhdHMvZ29vZHMnO1xuLy8gY29uc3Qgd2luZWNhcmRzID0gbmV3IFdpbmVDYXJkcygpO1xuLy8gd2luZWNhcmRzLnJlbmRlcihnb29kcyk7XG4vLyBpbXBvcnQgeyBDYXJ0U2V0dGluZ3MgfSBmcm9tICcuL2NvbXBvbmVudHMvY2FydC9jYXJ0Jztcbi8vIGltcG9ydCB7IExvY2FsU3RvcmFnZSwgbG9jYWxTdG9yYWdlS2V5cyB9IGZyb20gJy4vdXRpbHMvbG9jYWxzdG9yYWdlJztcbi8vIGNvbnN0IGNhcnRzZXR0aW5ncyA9IG5ldyBDYXJ0U2V0dGluZ3MoKTtcbi8vIGNhcnRzZXR0aW5ncy5hZGRUb0NhcnQoZ29vZHMpO1xuXG5pbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50cy9hcHAvYXBwJztcbmltcG9ydCAnLi9nbG9iYWwuY3NzJztcblxuY29uc3QgYXBwID0gbmV3IEFwcCgpO1xuYXBwLnN0YXJ0KGdvb2RzKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=