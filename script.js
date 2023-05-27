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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --background: black;\r\n  --red: #d60000;\r\n  --gold: #fdc854;\r\n }\r\n\r\n.cart-popup {\r\n  position: fixed;\r\n  top: 10vh;\r\n  left: 10vw;\r\n  width: 80vw;\r\n  height: 80vh;\r\n  padding: 2em;\r\n  background-color: black;\r\n  z-index: 101;\r\n  color: var(--gold);\r\n  text-align: center;\r\n  box-shadow: 0 0 30px var(--gold);\r\n  display: none;\r\n}\r\n\r\n.cart-popup.active {\r\n  display: block;\r\n}\r\n\r\n.cart-popup__container {\r\n  height: 80%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  gap: 1em;\r\n}\r\n\r\n.close-popup {\r\n  display: block;\r\n  padding: 0.1em 0.5em;\r\n  border-radius: 10%;\r\n  position: absolute;\r\n  right: 1em;\r\n  top: 1em;\r\n  cursor: pointer;\r\n  transition: 0.2s;\r\n}\r\n\r\n.close-popup:hover {\r\n  transform: scale(1.1, 1.1);\r\n  border: 1px solid var(--gold);\r\n  box-shadow: 2px 2px 15px var(--gold);\r\n  transition: 0.2s;\r\n}\r\n\r\n.close-popup:active {\r\n  transform: none;\r\n}\r\n\r\n.cart-item {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr 1fr;\r\n justify-content: center;\r\n align-items: center;\r\n gap: 1em;\r\n}\r\n\r\n.cart__number{\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 0.5em;\r\n}\r\n\r\n.cart__error {\r\n  position: fixed;\r\n  top: 10vh;\r\n  left: 10vw;\r\n  width: 80vw;\r\n  height: 80vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 2em;\r\n  background: var(--background);\r\n  color: var(--gold);\r\n  z-index: 100;\r\n}\r\n\r\n\r\n\r\n\r\n", "",{"version":3,"sources":["webpack://./src/components/cart/cart.css"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,cAAc;EACd,eAAe;CAChB;;AAED;EACE,eAAe;EACf,SAAS;EACT,UAAU;EACV,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,uBAAuB;EACvB,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;EAClB,gCAAgC;EAChC,aAAa;AACf;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,QAAQ;AACV;;AAEA;EACE,cAAc;EACd,oBAAoB;EACpB,kBAAkB;EAClB,kBAAkB;EAClB,UAAU;EACV,QAAQ;EACR,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,0BAA0B;EAC1B,6BAA6B;EAC7B,oCAAoC;EACpC,gBAAgB;AAClB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,kCAAkC;CACnC,uBAAuB;CACvB,mBAAmB;CACnB,QAAQ;AACT;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,UAAU;AACZ;;AAEA;EACE,eAAe;EACf,SAAS;EACT,UAAU;EACV,WAAW;EACX,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,cAAc;EACd,6BAA6B;EAC7B,kBAAkB;EAClB,YAAY;AACd","sourcesContent":[":root {\r\n  --background: black;\r\n  --red: #d60000;\r\n  --gold: #fdc854;\r\n }\r\n\r\n.cart-popup {\r\n  position: fixed;\r\n  top: 10vh;\r\n  left: 10vw;\r\n  width: 80vw;\r\n  height: 80vh;\r\n  padding: 2em;\r\n  background-color: black;\r\n  z-index: 101;\r\n  color: var(--gold);\r\n  text-align: center;\r\n  box-shadow: 0 0 30px var(--gold);\r\n  display: none;\r\n}\r\n\r\n.cart-popup.active {\r\n  display: block;\r\n}\r\n\r\n.cart-popup__container {\r\n  height: 80%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  gap: 1em;\r\n}\r\n\r\n.close-popup {\r\n  display: block;\r\n  padding: 0.1em 0.5em;\r\n  border-radius: 10%;\r\n  position: absolute;\r\n  right: 1em;\r\n  top: 1em;\r\n  cursor: pointer;\r\n  transition: 0.2s;\r\n}\r\n\r\n.close-popup:hover {\r\n  transform: scale(1.1, 1.1);\r\n  border: 1px solid var(--gold);\r\n  box-shadow: 2px 2px 15px var(--gold);\r\n  transition: 0.2s;\r\n}\r\n\r\n.close-popup:active {\r\n  transform: none;\r\n}\r\n\r\n.cart-item {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr 1fr;\r\n justify-content: center;\r\n align-items: center;\r\n gap: 1em;\r\n}\r\n\r\n.cart__number{\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 0.5em;\r\n}\r\n\r\n.cart__error {\r\n  position: fixed;\r\n  top: 10vh;\r\n  left: 10vw;\r\n  width: 80vw;\r\n  height: 80vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 2em;\r\n  background: var(--background);\r\n  color: var(--gold);\r\n  z-index: 100;\r\n}\r\n\r\n\r\n\r\n\r\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  box-sizing: border-box;\r\n}\r\n.filters-form {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-between;\r\n  gap: 1em;\r\n  width: 80vw;\r\n  margin: 1em auto;\r\n  background-color: rgba(0, 0, 0, 0.8);\r\n  border-radius: 1em;\r\n  box-shadow: 0 0 20px var(--gold);\r\n  color: var(--gold);\r\n  padding: 1em;\r\n}\r\n\r\n.filters-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 1em;\r\n}\r\n.filter-name {\r\n  margin-bottom: 10px;\r\n}\r\n.country-filter {\r\n  grid-area: \"filter-country\";\r\n}\r\n.color-filter {\r\n  grid-area: \"filter-color\";\r\n}\r\n\r\n.sort {\r\n  grid-area: \"select\";\r\n}\r\n\r\n.btns-panel {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-self: start;\r\n  gap: 1em;\r\n  padding: 1em;\r\n}\r\n\r\n.reset {\r\n  grid-area: \"button\";\r\n  margin: auto;\r\n}\r\n\r\n.reset-filters {\r\n  grid-area: \"button\";\r\n  margin: auto;\r\n}\r\ninput[type=\"checkbox\"] {\r\n  border-radius: 0;\r\n  -webkit-appearence: none;\r\n  outline: none;\r\n}\r\n\r\n.checkbox {\r\n  margin-bottom: 1.5em;\r\n  padding-left: 2.5em;\r\n  position: relative;\r\n}\r\n\r\ninput[type=\"checkbox\"],\r\n.checkbox label::before {\r\n  cursor: pointer;\r\n  height: 24px;\r\n  left: 0;\r\n  position: absolute;\r\n  width: 24px;\r\n}\r\n\r\ninput[type=\"checkbox\"] {\r\n  display: inline-block;\r\n  opacity: 0;\r\n  vertical-align: middle;\r\n}\r\n\r\n.checkbox label::before {\r\n  border: 2px solid var(--gold);\r\n  border-radius: 4px;\r\n  color: var(--gold);\r\n  content: \"\";\r\n  font-size: 1.2em;\r\n}\r\n\r\n.checkbox input[type=\"checkbox\"]:checked + label::before {\r\n  border-color: var(--gold);\r\n  content: \"\\2714\";\r\n}\r\nlabel {\r\n  display: block;\r\n}\r\n\r\nselect {\r\n  appearance: none;\r\n  outline: 0;\r\n  box-shadow: none;\r\n  flex: 1;\r\n  padding: 0 1em;\r\n  color: var(--gold);\r\n  background-color: var(--background);\r\n  background-image: none;\r\n  cursor: pointer;\r\n  padding: 6px;\r\n  font-size: 17px;\r\n  max-width: 20em;\r\n  border: 2px solid var(--gold);\r\n  border-radius: 10px;\r\n  box-shadow: 0 0 30px var(--gold);\r\n}\r\n/* Remove IE arrow */\r\nselect::-ms-expand {\r\n  display: none;\r\n}\r\n/* Custom Select wrapper */\r\nselect {\r\n  position: relative;\r\n  display: flex;\r\n  max-width: 20em;\r\n  height: 2em;\r\n  border-radius: 0.25em;\r\n  overflow: hidden;\r\n  background-color: var(--background);\r\n  font-size: 17px;\r\n  text-align: center;\r\n  border: 2px solid var(--gold);\r\n  box-shadow: 0 0 30px var(--gold);\r\n  border-radius: 5px;\r\n}\r\n/* Arrow */\r\nselect::after {\r\n  content: \"\\25BC\";\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  padding: 1em;\r\n  background-color: var(--gold);\r\n  transition: 0.25s all ease;\r\n  pointer-events: none;\r\n}\r\n/* Transition */\r\nselect:hover::after {\r\n  color: #f39c12;\r\n}\r\n\r\n.reset-filters {\r\n  width: 10em;\r\n  height: 3em;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 0.5em;\r\n}\r\n\r\n/* Other styles*/\r\n", "",{"version":3,"sources":["webpack://./src/components/filters/filters.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;AACxB;AACA;EACE,aAAa;EACb,eAAe;EACf,8BAA8B;EAC9B,QAAQ;EACR,WAAW;EACX,gBAAgB;EAChB,oCAAoC;EACpC,kBAAkB;EAClB,gCAAgC;EAChC,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,QAAQ;AACV;AACA;EACE,mBAAmB;AACrB;AACA;EACE,2BAA2B;AAC7B;AACA;EACE,yBAAyB;AAC3B;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,iBAAiB;EACjB,QAAQ;EACR,YAAY;AACd;;AAEA;EACE,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,mBAAmB;EACnB,YAAY;AACd;AACA;EACE,gBAAgB;EAChB,wBAAwB;EACxB,aAAa;AACf;;AAEA;EACE,oBAAoB;EACpB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;;EAEE,eAAe;EACf,YAAY;EACZ,OAAO;EACP,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,qBAAqB;EACrB,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,6BAA6B;EAC7B,kBAAkB;EAClB,kBAAkB;EAClB,WAAW;EACX,gBAAgB;AAClB;;AAEA;EACE,yBAAyB;EACzB,gBAAgB;AAClB;AACA;EACE,cAAc;AAChB;;AAEA;EACE,gBAAgB;EAChB,UAAU;EACV,gBAAgB;EAChB,OAAO;EACP,cAAc;EACd,kBAAkB;EAClB,mCAAmC;EACnC,sBAAsB;EACtB,eAAe;EACf,YAAY;EACZ,eAAe;EACf,eAAe;EACf,6BAA6B;EAC7B,mBAAmB;EACnB,gCAAgC;AAClC;AACA,oBAAoB;AACpB;EACE,aAAa;AACf;AACA,0BAA0B;AAC1B;EACE,kBAAkB;EAClB,aAAa;EACb,eAAe;EACf,WAAW;EACX,qBAAqB;EACrB,gBAAgB;EAChB,mCAAmC;EACnC,eAAe;EACf,kBAAkB;EAClB,6BAA6B;EAC7B,gCAAgC;EAChC,kBAAkB;AACpB;AACA,UAAU;AACV;EACE,gBAAgB;EAChB,kBAAkB;EAClB,MAAM;EACN,QAAQ;EACR,YAAY;EACZ,6BAA6B;EAC7B,0BAA0B;EAC1B,oBAAoB;AACtB;AACA,eAAe;AACf;EACE,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,WAAW;EACX,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,cAAc;AAChB;;AAEA,gBAAgB","sourcesContent":["* {\r\n  box-sizing: border-box;\r\n}\r\n.filters-form {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-between;\r\n  gap: 1em;\r\n  width: 80vw;\r\n  margin: 1em auto;\r\n  background-color: rgba(0, 0, 0, 0.8);\r\n  border-radius: 1em;\r\n  box-shadow: 0 0 20px var(--gold);\r\n  color: var(--gold);\r\n  padding: 1em;\r\n}\r\n\r\n.filters-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 1em;\r\n}\r\n.filter-name {\r\n  margin-bottom: 10px;\r\n}\r\n.country-filter {\r\n  grid-area: \"filter-country\";\r\n}\r\n.color-filter {\r\n  grid-area: \"filter-color\";\r\n}\r\n\r\n.sort {\r\n  grid-area: \"select\";\r\n}\r\n\r\n.btns-panel {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-self: start;\r\n  gap: 1em;\r\n  padding: 1em;\r\n}\r\n\r\n.reset {\r\n  grid-area: \"button\";\r\n  margin: auto;\r\n}\r\n\r\n.reset-filters {\r\n  grid-area: \"button\";\r\n  margin: auto;\r\n}\r\ninput[type=\"checkbox\"] {\r\n  border-radius: 0;\r\n  -webkit-appearence: none;\r\n  outline: none;\r\n}\r\n\r\n.checkbox {\r\n  margin-bottom: 1.5em;\r\n  padding-left: 2.5em;\r\n  position: relative;\r\n}\r\n\r\ninput[type=\"checkbox\"],\r\n.checkbox label::before {\r\n  cursor: pointer;\r\n  height: 24px;\r\n  left: 0;\r\n  position: absolute;\r\n  width: 24px;\r\n}\r\n\r\ninput[type=\"checkbox\"] {\r\n  display: inline-block;\r\n  opacity: 0;\r\n  vertical-align: middle;\r\n}\r\n\r\n.checkbox label::before {\r\n  border: 2px solid var(--gold);\r\n  border-radius: 4px;\r\n  color: var(--gold);\r\n  content: \"\";\r\n  font-size: 1.2em;\r\n}\r\n\r\n.checkbox input[type=\"checkbox\"]:checked + label::before {\r\n  border-color: var(--gold);\r\n  content: \"\\2714\";\r\n}\r\nlabel {\r\n  display: block;\r\n}\r\n\r\nselect {\r\n  appearance: none;\r\n  outline: 0;\r\n  box-shadow: none;\r\n  flex: 1;\r\n  padding: 0 1em;\r\n  color: var(--gold);\r\n  background-color: var(--background);\r\n  background-image: none;\r\n  cursor: pointer;\r\n  padding: 6px;\r\n  font-size: 17px;\r\n  max-width: 20em;\r\n  border: 2px solid var(--gold);\r\n  border-radius: 10px;\r\n  box-shadow: 0 0 30px var(--gold);\r\n}\r\n/* Remove IE arrow */\r\nselect::-ms-expand {\r\n  display: none;\r\n}\r\n/* Custom Select wrapper */\r\nselect {\r\n  position: relative;\r\n  display: flex;\r\n  max-width: 20em;\r\n  height: 2em;\r\n  border-radius: 0.25em;\r\n  overflow: hidden;\r\n  background-color: var(--background);\r\n  font-size: 17px;\r\n  text-align: center;\r\n  border: 2px solid var(--gold);\r\n  box-shadow: 0 0 30px var(--gold);\r\n  border-radius: 5px;\r\n}\r\n/* Arrow */\r\nselect::after {\r\n  content: \"\\25BC\";\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  padding: 1em;\r\n  background-color: var(--gold);\r\n  transition: 0.25s all ease;\r\n  pointer-events: none;\r\n}\r\n/* Transition */\r\nselect:hover::after {\r\n  color: #f39c12;\r\n}\r\n\r\n.reset-filters {\r\n  width: 10em;\r\n  height: 3em;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 0.5em;\r\n}\r\n\r\n/* Other styles*/\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/footer/footer.css":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/footer/footer.css ***!
  \********************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".footer {\r\n  background-color: rgba(0, 0, 0, 0.6);\r\n  padding: 1em 0;\r\n  color: var(--gold);\r\n}\r\n\r\n.footer_wrapper {\r\n  max-width: 80vw;\r\n  margin: 0 auto;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.rss {\r\n  width: 100px;\r\n  fill: var(--gold);\r\n}", "",{"version":3,"sources":["webpack://./src/components/footer/footer.css"],"names":[],"mappings":"AAAA;EACE,oCAAoC;EACpC,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,cAAc;EACd,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,iBAAiB;AACnB","sourcesContent":[".footer {\r\n  background-color: rgba(0, 0, 0, 0.6);\r\n  padding: 1em 0;\r\n  color: var(--gold);\r\n}\r\n\r\n.footer_wrapper {\r\n  max-width: 80vw;\r\n  margin: 0 auto;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.rss {\r\n  width: 100px;\r\n  fill: var(--gold);\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/header/header.css":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/header/header.css ***!
  \********************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".header {\r\n  max-width: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 1em;\r\n  background-color: rgba(0, 0, 0, 0.6);\r\n}", "",{"version":3,"sources":["webpack://./src/components/header/header.css"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,YAAY;EACZ,oCAAoC;AACtC","sourcesContent":[".header {\r\n  max-width: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 1em;\r\n  background-color: rgba(0, 0, 0, 0.6);\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/search/search.css":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/search/search.css ***!
  \********************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --background: black;\r\n  --red: #d60000;\r\n  --gold: #fdc854;\r\n}\r\n\r\n.search-container__input {\r\n  background-color: var(--background);\r\n  padding: 6px;\r\n  font-size: 17px;\r\n  border: 2px solid var(--gold);\r\n  box-shadow: 0 0 30px var(--gold);\r\n  border-radius: 5px;\r\n}\r\n\r\n.search-container__input:focus {\r\n  box-shadow: inset 0 0 30px var(--gold);\r\n  outline: none;\r\n}", "",{"version":3,"sources":["webpack://./src/components/search/search.css"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,mCAAmC;EACnC,YAAY;EACZ,eAAe;EACf,6BAA6B;EAC7B,gCAAgC;EAChC,kBAAkB;AACpB;;AAEA;EACE,sCAAsC;EACtC,aAAa;AACf","sourcesContent":[":root {\r\n  --background: black;\r\n  --red: #d60000;\r\n  --gold: #fdc854;\r\n}\r\n\r\n.search-container__input {\r\n  background-color: var(--background);\r\n  padding: 6px;\r\n  font-size: 17px;\r\n  border: 2px solid var(--gold);\r\n  box-shadow: 0 0 30px var(--gold);\r\n  border-radius: 5px;\r\n}\r\n\r\n.search-container__input:focus {\r\n  box-shadow: inset 0 0 30px var(--gold);\r\n  outline: none;\r\n}"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --background: #140a0a;\r\n  --red: #d60000;\r\n  --gold: #fdc854;\r\n }\r\n\r\n .winecards{\r\n  width: 90%;\r\n  margin: 0 auto;\r\n  max-width: 80rem;\r\n  padding: 1em 0;\r\n}\r\n\r\n.winecards-container {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  align-content: center;\r\n  gap: 3em;\r\n}\r\n\r\n.winecards__item {\r\n  text-align: center;\r\n  width: 20em;\r\n  cursor: pointer;\r\n  -webkit-transform-style: preserve-3d;\r\n  transform-style: preserve-3d;\r\n  -webkit-perspective: 1000px;\r\n    perspective: 1000px;\r\n}\r\n\r\n.winecards-face,\r\n.winecards-back {\r\n  padding: 1rem;\r\n  box-shadow: 0 0 12px 0 var(--gold);\r\n  border-radius: 10px;\r\n  -webkit-transition: -webkit-transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);\r\n  transition: -webkit-transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);\r\n  -o-transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);\r\n  transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);\r\n  transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1), -webkit-transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);\r\n  -webkit-backface-visibility: hidden;\r\n          backface-visibility: hidden;\r\n  text-align: center;\r\n  min-height: 350px;\r\n  height: auto;\r\n  border-radius: 10px;\r\n  color: #fff;\r\n  text-shadow: 10px 10px 10px var(--background);\r\n  font-size: 1rem;\r\n}\r\n\r\n.winecards-back{\r\n  background: var(--background);\r\n  color: var(--gold);\r\n}\r\n\r\n.winecards-face:after{\r\n\tposition: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 1;\r\n    width: 100%;\r\n    height: 100%;\r\n    content: '';\r\n    display: block;\r\n    opacity: .8;\r\n    background-color: var(--background);\r\n    -webkit-backface-visibility: hidden;\r\n            backface-visibility: hidden;\r\n    border-radius: 10px;\r\n}\r\n\r\n\r\n\r\n.winecards__item .winecards-face,\r\n.winecards__item .winecards-back{\r\n    -webkit-transition: -webkit-transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);\r\n    transition: -webkit-transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);\r\n    -o-transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);\r\n    transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);\r\n    transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1), -webkit-transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);\r\n}\r\n\r\n.winecards-back{\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  text-shadow: 10px 10px 10px var(--gold);\r\n  font-size: larger;\r\n}\r\n\r\n.winecards-face__details {\r\n  -webkit-transform: translateY(-50%) translateZ(60px) scale(0.94);\r\n  transform: translateY(-50%) translateZ(60px) scale(0.94);\r\ntop: 50%;\r\nposition: absolute;\r\nleft: 0;\r\nwidth: 100%;\r\npadding: 2rem;\r\n-webkit-box-sizing: border-box;\r\n  box-sizing: border-box;\r\noutline: 1px solid transparent;\r\n-webkit-perspective: inherit;\r\n  perspective: inherit;\r\nz-index: 3;\r\n}\r\n\r\n\r\n.winecards__item .winecards-back{\r\n  -webkit-transform: rotateY(180deg);\r\n          transform: rotateY(180deg);\r\n  -webkit-transform-style: preserve-3d;\r\n          transform-style: preserve-3d;\r\n}\r\n\r\n.winecards__item .winecards-face{\r\n  -webkit-transform: rotateY(0deg);\r\n          transform: rotateY(0deg);\r\n  -webkit-transform-style: preserve-3d;\r\n          transform-style: preserve-3d;\r\n}\r\n\r\n.winecards__item:focus .winecards-back,\r\n.winecards__item:hover .winecards-back{\r\n  -webkit-transform: rotateY(0deg);\r\n          transform: rotateY(0deg);\r\n  -webkit-transform-style: preserve-3d;\r\n          transform-style: preserve-3d;\r\n}\r\n\r\n.winecards__item:hover .winecards-face,\r\n.winecards__item:focus .winecards-face{\r\n  -webkit-transform: rotateY(-180deg);\r\n          transform: rotateY(-180deg);\r\n  -webkit-transform-style: preserve-3d;\r\n          transform-style: preserve-3d;\r\n}\r\n\r\n.winecards-face__photo{\r\n  width: 10em;\r\n  height: 10em;\r\n  background-size: contain;\r\n  background-repeat: no-repeat;\r\n  background-position-x: 100%;\r\n  margin: 1em;\r\n}\r\n\r\n.winecards-back__name {\r\n  color: white;\r\n  margin-bottom: 1em;\r\n  text-shadow: white;\r\n}\r\n\r\n.cart__btn {\r\n  background-color: var(--gold);\r\n  border: var(--gold);\r\n  color: var(--background);\r\n  text-shadow: 2px 2px 10px var(--background);\r\n  box-shadow: 10px 10px 20px var(--background);\r\n  border-radius: 5px;\r\n  padding: 1em;\r\n  cursor: pointer;\r\n  transition: 0.2s;\r\n  margin-top: 2em;\r\n}\r\n\r\n.cart__btn:hover,\r\n.cart__btn:focus{\r\n  background-color: var(--background);\r\n  box-shadow: 10px 10px 20px var(--gold);\r\n  border: 1px solid  var(--gold);\r\n  color: var(--gold);\r\n  text-shadow: 2px 2px 10px var(--gold);\r\n  transition: 0.2s;\r\n}\r\n\r\n\r\n\r\n", "",{"version":3,"sources":["webpack://./src/components/winecards/winecards.css"],"names":[],"mappings":"AAAA;EACE,qBAAqB;EACrB,cAAc;EACd,eAAe;CAChB;;CAEA;EACC,UAAU;EACV,cAAc;EACd,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,uBAAuB;EACvB,qBAAqB;EACrB,QAAQ;AACV;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,eAAe;EACf,oCAAoC;EACpC,4BAA4B;EAC5B,2BAA2B;IACzB,mBAAmB;AACvB;;AAEA;;EAEE,aAAa;EACb,kCAAkC;EAClC,mBAAmB;EACnB,wEAAwE;EACxE,gEAAgE;EAChE,2DAA2D;EAC3D,wDAAwD;EACxD,8GAA8G;EAC9G,mCAAmC;UAC3B,2BAA2B;EACnC,kBAAkB;EAClB,iBAAiB;EACjB,YAAY;EACZ,mBAAmB;EACnB,WAAW;EACX,6CAA6C;EAC7C,eAAe;AACjB;;AAEA;EACE,6BAA6B;EAC7B,kBAAkB;AACpB;;AAEA;CACC,kBAAkB;IACf,MAAM;IACN,OAAO;IACP,UAAU;IACV,WAAW;IACX,YAAY;IACZ,WAAW;IACX,cAAc;IACd,WAAW;IACX,mCAAmC;IACnC,mCAAmC;YAC3B,2BAA2B;IACnC,mBAAmB;AACvB;;;;AAIA;;IAEI,wEAAwE;IACxE,gEAAgE;IAChE,2DAA2D;IAC3D,wDAAwD;IACxD,8GAA8G;AAClH;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,WAAW;EACX,uCAAuC;EACvC,iBAAiB;AACnB;;AAEA;EACE,gEAAgE;EAChE,wDAAwD;AAC1D,QAAQ;AACR,kBAAkB;AAClB,OAAO;AACP,WAAW;AACX,aAAa;AACb,8BAA8B;EAC5B,sBAAsB;AACxB,8BAA8B;AAC9B,4BAA4B;EAC1B,oBAAoB;AACtB,UAAU;AACV;;;AAGA;EACE,kCAAkC;UAC1B,0BAA0B;EAClC,oCAAoC;UAC5B,4BAA4B;AACtC;;AAEA;EACE,gCAAgC;UACxB,wBAAwB;EAChC,oCAAoC;UAC5B,4BAA4B;AACtC;;AAEA;;EAEE,gCAAgC;UACxB,wBAAwB;EAChC,oCAAoC;UAC5B,4BAA4B;AACtC;;AAEA;;EAEE,mCAAmC;UAC3B,2BAA2B;EACnC,oCAAoC;UAC5B,4BAA4B;AACtC;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,wBAAwB;EACxB,4BAA4B;EAC5B,2BAA2B;EAC3B,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,6BAA6B;EAC7B,mBAAmB;EACnB,wBAAwB;EACxB,2CAA2C;EAC3C,4CAA4C;EAC5C,kBAAkB;EAClB,YAAY;EACZ,eAAe;EACf,gBAAgB;EAChB,eAAe;AACjB;;AAEA;;EAEE,mCAAmC;EACnC,sCAAsC;EACtC,8BAA8B;EAC9B,kBAAkB;EAClB,qCAAqC;EACrC,gBAAgB;AAClB","sourcesContent":[":root {\r\n  --background: #140a0a;\r\n  --red: #d60000;\r\n  --gold: #fdc854;\r\n }\r\n\r\n .winecards{\r\n  width: 90%;\r\n  margin: 0 auto;\r\n  max-width: 80rem;\r\n  padding: 1em 0;\r\n}\r\n\r\n.winecards-container {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  align-content: center;\r\n  gap: 3em;\r\n}\r\n\r\n.winecards__item {\r\n  text-align: center;\r\n  width: 20em;\r\n  cursor: pointer;\r\n  -webkit-transform-style: preserve-3d;\r\n  transform-style: preserve-3d;\r\n  -webkit-perspective: 1000px;\r\n    perspective: 1000px;\r\n}\r\n\r\n.winecards-face,\r\n.winecards-back {\r\n  padding: 1rem;\r\n  box-shadow: 0 0 12px 0 var(--gold);\r\n  border-radius: 10px;\r\n  -webkit-transition: -webkit-transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);\r\n  transition: -webkit-transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);\r\n  -o-transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);\r\n  transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);\r\n  transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1), -webkit-transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);\r\n  -webkit-backface-visibility: hidden;\r\n          backface-visibility: hidden;\r\n  text-align: center;\r\n  min-height: 350px;\r\n  height: auto;\r\n  border-radius: 10px;\r\n  color: #fff;\r\n  text-shadow: 10px 10px 10px var(--background);\r\n  font-size: 1rem;\r\n}\r\n\r\n.winecards-back{\r\n  background: var(--background);\r\n  color: var(--gold);\r\n}\r\n\r\n.winecards-face:after{\r\n\tposition: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 1;\r\n    width: 100%;\r\n    height: 100%;\r\n    content: '';\r\n    display: block;\r\n    opacity: .8;\r\n    background-color: var(--background);\r\n    -webkit-backface-visibility: hidden;\r\n            backface-visibility: hidden;\r\n    border-radius: 10px;\r\n}\r\n\r\n\r\n\r\n.winecards__item .winecards-face,\r\n.winecards__item .winecards-back{\r\n    -webkit-transition: -webkit-transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);\r\n    transition: -webkit-transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);\r\n    -o-transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);\r\n    transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);\r\n    transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1), -webkit-transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);\r\n}\r\n\r\n.winecards-back{\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  text-shadow: 10px 10px 10px var(--gold);\r\n  font-size: larger;\r\n}\r\n\r\n.winecards-face__details {\r\n  -webkit-transform: translateY(-50%) translateZ(60px) scale(0.94);\r\n  transform: translateY(-50%) translateZ(60px) scale(0.94);\r\ntop: 50%;\r\nposition: absolute;\r\nleft: 0;\r\nwidth: 100%;\r\npadding: 2rem;\r\n-webkit-box-sizing: border-box;\r\n  box-sizing: border-box;\r\noutline: 1px solid transparent;\r\n-webkit-perspective: inherit;\r\n  perspective: inherit;\r\nz-index: 3;\r\n}\r\n\r\n\r\n.winecards__item .winecards-back{\r\n  -webkit-transform: rotateY(180deg);\r\n          transform: rotateY(180deg);\r\n  -webkit-transform-style: preserve-3d;\r\n          transform-style: preserve-3d;\r\n}\r\n\r\n.winecards__item .winecards-face{\r\n  -webkit-transform: rotateY(0deg);\r\n          transform: rotateY(0deg);\r\n  -webkit-transform-style: preserve-3d;\r\n          transform-style: preserve-3d;\r\n}\r\n\r\n.winecards__item:focus .winecards-back,\r\n.winecards__item:hover .winecards-back{\r\n  -webkit-transform: rotateY(0deg);\r\n          transform: rotateY(0deg);\r\n  -webkit-transform-style: preserve-3d;\r\n          transform-style: preserve-3d;\r\n}\r\n\r\n.winecards__item:hover .winecards-face,\r\n.winecards__item:focus .winecards-face{\r\n  -webkit-transform: rotateY(-180deg);\r\n          transform: rotateY(-180deg);\r\n  -webkit-transform-style: preserve-3d;\r\n          transform-style: preserve-3d;\r\n}\r\n\r\n.winecards-face__photo{\r\n  width: 10em;\r\n  height: 10em;\r\n  background-size: contain;\r\n  background-repeat: no-repeat;\r\n  background-position-x: 100%;\r\n  margin: 1em;\r\n}\r\n\r\n.winecards-back__name {\r\n  color: white;\r\n  margin-bottom: 1em;\r\n  text-shadow: white;\r\n}\r\n\r\n.cart__btn {\r\n  background-color: var(--gold);\r\n  border: var(--gold);\r\n  color: var(--background);\r\n  text-shadow: 2px 2px 10px var(--background);\r\n  box-shadow: 10px 10px 20px var(--background);\r\n  border-radius: 5px;\r\n  padding: 1em;\r\n  cursor: pointer;\r\n  transition: 0.2s;\r\n  margin-top: 2em;\r\n}\r\n\r\n.cart__btn:hover,\r\n.cart__btn:focus{\r\n  background-color: var(--background);\r\n  box-shadow: 10px 10px 20px var(--gold);\r\n  border: 1px solid  var(--gold);\r\n  color: var(--gold);\r\n  text-shadow: 2px 2px 10px var(--gold);\r\n  transition: 0.2s;\r\n}\r\n\r\n\r\n\r\n"],"sourceRoot":""}]);
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/img/bg.jpg */ "./src/assets/img/bg.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/img/cart-gold.svg */ "./src/assets/img/cart-gold.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --background: black;\r\n  --red: #d60000;\r\n  --gold: #fdc854;\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  transition: 0.3s;\r\n\r\n}\r\n\r\nbody {\r\n  max-width: 100%;\r\n  max-height: 100vh;\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-attachment: fixed;\r\n  background-size: cover;\r\n}\r\n\r\nbutton {\r\n  background-color: var(--gold);\r\n  border: var(--gold);\r\n  color: var(--background);\r\n  text-shadow: 2px 2px 10px var(--background);\r\n  box-shadow: 10px 10px 20px var(--background);\r\n  border-radius: 5px;\r\n  padding: 1em;\r\n  cursor: pointer;\r\n  transition: 0.3s;\r\n}\r\n\r\nbutton:hover {\r\n  background-color: var(--background);\r\n  box-shadow: 10px 10px 20px var(--gold);\r\n  border: 1px solid var(--gold);\r\n  color: var(--gold);\r\n  text-shadow: 2px 2px 10px var(--gold);\r\n  transition: 0.3s;\r\n}\r\n\r\n.header__cart {\r\n  position: relative;\r\n  width: 3em;\r\n  height: 3em;\r\n  transition: 0.3s;\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat center;\r\n  background-size: cover;\r\n  cursor: pointer;\r\n}\r\n\r\n.header__cart:hover {\r\n  transform: scale(1.1, 1.1);\r\n  transition: 0.3s;\r\n}\r\n\r\n.cart__products {\r\n  position: absolute;\r\n  top: 5px;\r\n  left: 5px;\r\n  display: block;\r\n  background-color: var(--red);\r\n  color: var(--gold);\r\n  border-radius: 50%;\r\n  padding: 1px 6px;\r\n  width: 20px;\r\n  height: 20px;\r\n}\r\n\r\n.overlay {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: var(--background);\r\n  opacity: 0.5;\r\n  z-index: 99;\r\n  display: none;\r\n\r\n}\r\n\r\n.overlay.active {\r\n  display: block;\r\n}\r\n\r\n\r\na {\r\n  color: var(--gold);\r\n  text-decoration: none;\r\n}", "",{"version":3,"sources":["webpack://./src/global.css"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,qBAAqB;EACrB,gBAAgB;;AAElB;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,yDAA4C;EAC5C,4BAA4B;EAC5B,sBAAsB;AACxB;;AAEA;EACE,6BAA6B;EAC7B,mBAAmB;EACnB,wBAAwB;EACxB,2CAA2C;EAC3C,4CAA4C;EAC5C,kBAAkB;EAClB,YAAY;EACZ,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,mCAAmC;EACnC,sCAAsC;EACtC,6BAA6B;EAC7B,kBAAkB;EAClB,qCAAqC;EACrC,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,WAAW;EACX,gBAAgB;EAChB,oEAA8D;EAC9D,sBAAsB;EACtB,eAAe;AACjB;;AAEA;EACE,0BAA0B;EAC1B,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,cAAc;EACd,4BAA4B;EAC5B,kBAAkB;EAClB,kBAAkB;EAClB,gBAAgB;EAChB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,eAAe;EACf,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;EACZ,mCAAmC;EACnC,YAAY;EACZ,WAAW;EACX,aAAa;;AAEf;;AAEA;EACE,cAAc;AAChB;;;AAGA;EACE,kBAAkB;EAClB,qBAAqB;AACvB","sourcesContent":[":root {\r\n  --background: black;\r\n  --red: #d60000;\r\n  --gold: #fdc854;\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  transition: 0.3s;\r\n\r\n}\r\n\r\nbody {\r\n  max-width: 100%;\r\n  max-height: 100vh;\r\n  background-image: url('./assets/img/bg.jpg');\r\n  background-attachment: fixed;\r\n  background-size: cover;\r\n}\r\n\r\nbutton {\r\n  background-color: var(--gold);\r\n  border: var(--gold);\r\n  color: var(--background);\r\n  text-shadow: 2px 2px 10px var(--background);\r\n  box-shadow: 10px 10px 20px var(--background);\r\n  border-radius: 5px;\r\n  padding: 1em;\r\n  cursor: pointer;\r\n  transition: 0.3s;\r\n}\r\n\r\nbutton:hover {\r\n  background-color: var(--background);\r\n  box-shadow: 10px 10px 20px var(--gold);\r\n  border: 1px solid var(--gold);\r\n  color: var(--gold);\r\n  text-shadow: 2px 2px 10px var(--gold);\r\n  transition: 0.3s;\r\n}\r\n\r\n.header__cart {\r\n  position: relative;\r\n  width: 3em;\r\n  height: 3em;\r\n  transition: 0.3s;\r\n  background: url('./assets/img/cart-gold.svg') no-repeat center;\r\n  background-size: cover;\r\n  cursor: pointer;\r\n}\r\n\r\n.header__cart:hover {\r\n  transform: scale(1.1, 1.1);\r\n  transition: 0.3s;\r\n}\r\n\r\n.cart__products {\r\n  position: absolute;\r\n  top: 5px;\r\n  left: 5px;\r\n  display: block;\r\n  background-color: var(--red);\r\n  color: var(--gold);\r\n  border-radius: 50%;\r\n  padding: 1px 6px;\r\n  width: 20px;\r\n  height: 20px;\r\n}\r\n\r\n.overlay {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: var(--background);\r\n  opacity: 0.5;\r\n  z-index: 99;\r\n  display: none;\r\n\r\n}\r\n\r\n.overlay.active {\r\n  display: block;\r\n}\r\n\r\n\r\na {\r\n  color: var(--gold);\r\n  text-decoration: none;\r\n}"],"sourceRoot":""}]);
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

/***/ "./src/components/footer/footer.css":
/*!******************************************!*\
  !*** ./src/components/footer/footer.css ***!
  \******************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./footer.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/footer/footer.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/header/header.css":
/*!******************************************!*\
  !*** ./src/components/header/header.css ***!
  \******************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./header.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/header/header.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/search/search.css":
/*!******************************************!*\
  !*** ./src/components/search/search.css ***!
  \******************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_search_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./search.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/search/search.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_search_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_search_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_search_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_search_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var _components_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/page */ "./src/components/page.ts");
/* harmony import */ var _global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global.css */ "./src/global.css");


class App {
    constructor() {
        this.container = document.body;
        this.page = new _components_page__WEBPACK_IMPORTED_MODULE_0__["default"](document.body);
    }
}


/***/ }),

/***/ "./src/components/cart/cart.ts":
/*!*************************************!*\
  !*** ./src/components/cart/cart.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cart": () => (/* binding */ Cart)
/* harmony export */ });
/* harmony import */ var _cart_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart.css */ "./src/components/cart/cart.css");
/* harmony import */ var _utils_localstorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/localstorage */ "./src/utils/localstorage.ts");
/* harmony import */ var _utils_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/component */ "./src/utils/component.ts");
/* harmony import */ var _constants_goods__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/goods */ "./src/constants/goods.ts");




class Cart extends _utils_component__WEBPACK_IMPORTED_MODULE_2__["default"] {
    constructor(parentNode) {
        super(parentNode, "div", "header__cart cart");
        this.notification = new _utils_component__WEBPACK_IMPORTED_MODULE_2__["default"](this.node, "a", "cart__notification");
        this.cartList = _utils_localstorage__WEBPACK_IMPORTED_MODULE_1__.LocalStorage.getLocalStorage("cart" /* localStorageKeys.cart */) || [];
        this.totalItems =
            this.cartList.reduce((acc, el) => acc + el.inCart, 0) || 0;
        this.data = _utils_localstorage__WEBPACK_IMPORTED_MODULE_1__.LocalStorage.getLocalStorage("goods" /* localStorageKeys.goods */) || _constants_goods__WEBPACK_IMPORTED_MODULE_3__.goods;
        this.totalLabel = new _utils_component__WEBPACK_IMPORTED_MODULE_2__["default"](this.node, "span", "cart__products", `${this.totalItems}`);
        this.cartPopup = new _utils_component__WEBPACK_IMPORTED_MODULE_2__["default"](document.body, "div", "cart-popup");
        this.cartPopupContainer = new _utils_component__WEBPACK_IMPORTED_MODULE_2__["default"](this.cartPopup.node, "div", "cart-popup__container");
        this.total = new _utils_component__WEBPACK_IMPORTED_MODULE_2__["default"](this.cartPopup.node, "p", "cart__total");
    }
    cartAdd(articul) {
        const index = this.cartList.findIndex((elem) => elem.id === articul);
        if (index === -1) {
            this.cartList.push(this.data[articul]);
            this.data[articul]["inCart"]++;
            this.data[articul]["count"]--;
        }
        else {
            this.data[articul]["inCart"]++;
            this.data[articul]["count"]--;
            this.cartList[index]["inCart"]++;
            this.cartList[index]["count"]--;
        }
        _utils_localstorage__WEBPACK_IMPORTED_MODULE_1__.LocalStorage.setLocalStorage("cart" /* localStorageKeys.cart */, this.cartList);
        _utils_localstorage__WEBPACK_IMPORTED_MODULE_1__.LocalStorage.setLocalStorage("goods" /* localStorageKeys.goods */, this.data);
        _utils_localstorage__WEBPACK_IMPORTED_MODULE_1__.LocalStorage.setLocalStorage("onPage" /* localStorageKeys.onPage */, this.data);
    }
    cartRemove(articul) {
        this.cartList = _utils_localstorage__WEBPACK_IMPORTED_MODULE_1__.LocalStorage.getLocalStorage("cart" /* localStorageKeys.cart */) || [];
        this.data = _utils_localstorage__WEBPACK_IMPORTED_MODULE_1__.LocalStorage.getLocalStorage("goods" /* localStorageKeys.goods */) || _constants_goods__WEBPACK_IMPORTED_MODULE_3__.goods;
        const index = this.cartList.findIndex((elem) => elem.id === articul);
        if (index >= 0 && this.cartList[index]["inCart"] > 0) {
            this.cartList[index]["inCart"]--;
            this.data[articul]["count"]++;
            this.data[articul]["inCart"]--;
            this.cartList[index]["count"]++;
        }
        _utils_localstorage__WEBPACK_IMPORTED_MODULE_1__.LocalStorage.setLocalStorage("cart" /* localStorageKeys.cart */, this.cartList);
        _utils_localstorage__WEBPACK_IMPORTED_MODULE_1__.LocalStorage.setLocalStorage("goods" /* localStorageKeys.goods */, this.data);
        _utils_localstorage__WEBPACK_IMPORTED_MODULE_1__.LocalStorage.setLocalStorage("onPage" /* localStorageKeys.onPage */, this.data);
    }
    render() {
        this.cartList = _utils_localstorage__WEBPACK_IMPORTED_MODULE_1__.LocalStorage.getLocalStorage("cart" /* localStorageKeys.cart */) || [];
        let totalSum = 0;
        this.cartPopupContainer.node.innerHTML = "";
        this.total.node.innerHTML = "";
        const closePopup = new _utils_component__WEBPACK_IMPORTED_MODULE_2__["default"](this.cartPopup.node, "span", "close-popup", "X");
        if (this.cartList.length === 0)
            this.cartPopupContainer.node.textContent = "Корзина пуста";
        this.cartList.forEach((item) => {
            const cartItem = new _utils_component__WEBPACK_IMPORTED_MODULE_2__["default"](this.cartPopupContainer.node, "div", "cart-item");
            cartItem.node.setAttribute("id", `${item.id}`);
            const cartItemName = new _utils_component__WEBPACK_IMPORTED_MODULE_2__["default"](cartItem.node, "p", "cart-item__name", `${item.name}`);
            const cartNumber = new _utils_component__WEBPACK_IMPORTED_MODULE_2__["default"](cartItem.node, "div", "cart__number");
            const removeBtn = new _utils_component__WEBPACK_IMPORTED_MODULE_2__["default"](cartNumber.node, "button", "cart__remove cart__btn", "-");
            removeBtn.node.setAttribute("data-articul", `${item.id}`);
            const cartInput = new _utils_component__WEBPACK_IMPORTED_MODULE_2__["default"](cartNumber.node, "p", "cart__input", `${item.inCart.toString()}`);
            const addBtn = new _utils_component__WEBPACK_IMPORTED_MODULE_2__["default"](cartNumber.node, "button", "cart__add cart__btn", "+");
            addBtn.node.setAttribute("data-articul", `${item.id}`);
            const itemsPrice = +item.price * item.inCart;
            totalSum += itemsPrice;
            this.total.node.textContent = `${totalSum}`;
            const cartItemPrice = new _utils_component__WEBPACK_IMPORTED_MODULE_2__["default"](cartItem.node, "p", "cart-item__price", `${itemsPrice}`);
            if (item.count === 0) {
                addBtn.node.style.pointerEvents = "none";
                addBtn.node.style.opacity = "0.5";
            }
            if (item.inCart === 0) {
                removeBtn.node.style.pointerEvents = "none";
                removeBtn.node.style.opacity = "0.5";
                this.cartList = this.cartList.filter((el) => el.inCart !== 0);
                _utils_localstorage__WEBPACK_IMPORTED_MODULE_1__.LocalStorage.setLocalStorage("cart" /* localStorageKeys.cart */, this.cartList);
            }
        });
    }
    cartOpen() {
        this.cartPopup.node.classList.add("active");
        this.render();
    }
    cartClose() {
        this.cartPopup.node.classList.remove("active");
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
/* harmony import */ var _constants_goods__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/goods */ "./src/constants/goods.ts");
/* harmony import */ var _utils_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/component */ "./src/utils/component.ts");
/* harmony import */ var _utils_localstorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/localstorage */ "./src/utils/localstorage.ts");



class FilterSettings {
    constructor() {
        this.filtered = _utils_localstorage__WEBPACK_IMPORTED_MODULE_2__.LocalStorage.getLocalStorage("filtered" /* localStorageKeys.filtered */) || [];
        this.filterPopup = new _utils_component__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.filterPopupContainer = new _utils_component__WEBPACK_IMPORTED_MODULE_1__["default"](this.filterPopup.node, 'div', 'search-popup__container');
    }
    sortPriceUp(data) {
        const sorted = data.sort((a, b) => {
            return +a.price - +b.price;
        });
        console.log('onpage', sorted);
        _utils_localstorage__WEBPACK_IMPORTED_MODULE_2__.LocalStorage.setLocalStorage("onPage" /* localStorageKeys.onPage */, sorted);
        _utils_localstorage__WEBPACK_IMPORTED_MODULE_2__.LocalStorage.setLocalStorage("sorted" /* localStorageKeys.sorted */, sorted);
    }
    sortPriceDown(data) {
        const sorted = data.sort((a, b) => {
            return +b.price - +a.price;
        });
        _utils_localstorage__WEBPACK_IMPORTED_MODULE_2__.LocalStorage.setLocalStorage("onPage" /* localStorageKeys.onPage */, sorted);
        _utils_localstorage__WEBPACK_IMPORTED_MODULE_2__.LocalStorage.setLocalStorage("sorted" /* localStorageKeys.sorted */, sorted);
    }
    getFilters() {
        let filters;
        const countryFilters = [];
        const colorFilters = [];
        const countrycheckedCheckboxes = Array.from(document.querySelectorAll('input[type="checkbox"]:checked.country'));
        const colorcheckedCheckboxes = Array.from(document.querySelectorAll('input[type="checkbox"]:checked.color'));
        countrycheckedCheckboxes.forEach(item => countryFilters.push(item.value));
        colorcheckedCheckboxes.forEach(item => colorFilters.push(item.value));
        _utils_localstorage__WEBPACK_IMPORTED_MODULE_2__.LocalStorage.setLocalStorage("filters" /* localStorageKeys.filters */, { country: countryFilters, color: colorFilters });
        return filters = { country: countryFilters, color: colorFilters };
    }
    filter() {
        const filters = this.getFilters();
        let filtered = [];
        const filterCountry = filters.country;
        const filterColor = filters.color;
        const data = _constants_goods__WEBPACK_IMPORTED_MODULE_0__.goods;
        if (!filterColor.length && !filterCountry.length) {
            filtered = _constants_goods__WEBPACK_IMPORTED_MODULE_0__.goods;
        }
        else if (!filterCountry.length) {
            data.forEach(() => {
                filtered = data.filter(item => filterColor.includes(item.color));
            });
        }
        else if (!filterColor.length) {
            data.forEach(() => {
                filtered = data.filter(item => filterCountry.includes(item.country));
            });
        }
        else {
            data.forEach(() => {
                filtered = data.filter(item => filterCountry.includes(item.country) && filterColor.includes(item.color));
            });
        }
        _utils_localstorage__WEBPACK_IMPORTED_MODULE_2__.LocalStorage.setLocalStorage("onPage" /* localStorageKeys.onPage */, filtered);
    }
    openPopup() {
        this.filterPopupContainer = new _utils_component__WEBPACK_IMPORTED_MODULE_1__["default"](document.body, 'div', 'cart__error');
        this.filterPopupContainer.node.innerHTML = `
      <p class="error__message">По данному запросу ничего не найдено</p>
      <button class="error__btn filter__btn" >Ok</button>`;
        document.querySelector('.overlay').classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    popupClose() {
        this.filterPopupContainer.destroy();
        document.querySelector('.overlay').classList.remove('active');
        document.body.style.overflow = 'scroll';
    }
    resetAll() {
        localStorage.clear();
    }
    resetFilters() {
        localStorage.removeItem("filters" /* localStorageKeys.filters */);
        localStorage.removeItem("onPage" /* localStorageKeys.onPage */);
        location.reload();
    }
}


/***/ }),

/***/ "./src/components/filters/filters.ts":
/*!*******************************************!*\
  !*** ./src/components/filters/filters.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Filters": () => (/* binding */ Filters)
/* harmony export */ });
/* harmony import */ var _filters_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filters.css */ "./src/components/filters/filters.css");
/* harmony import */ var _utils_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/component */ "./src/utils/component.ts");
/* harmony import */ var _utils_localstorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/localstorage */ "./src/utils/localstorage.ts");
/* harmony import */ var _constants_goods__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/goods */ "./src/constants/goods.ts");
/* harmony import */ var _filterSettings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filterSettings */ "./src/components/filters/filterSettings.ts");





function getCountryList() {
    const countryList = [];
    _constants_goods__WEBPACK_IMPORTED_MODULE_3__.goods.forEach((item) => {
        if (!countryList.includes(item.country)) {
            countryList.push(item.country);
        }
    });
    return countryList;
}
function getColorList() {
    const colorList = [];
    _constants_goods__WEBPACK_IMPORTED_MODULE_3__.goods.forEach((item) => {
        if (!colorList.includes(item.color)) {
            colorList.push(item.color);
        }
    });
    return colorList;
}
class Filters extends _utils_component__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor(parentNode) {
        super(parentNode, "form", "filters-form");
        this.form = this.node;
        this.settings = new _filterSettings__WEBPACK_IMPORTED_MODULE_4__["default"]();
        this.form.action = "#";
        this.filtersContainer = new _utils_component__WEBPACK_IMPORTED_MODULE_1__["default"](this.node, "div", "filters-container");
        this.countryFilter = new _utils_component__WEBPACK_IMPORTED_MODULE_1__["default"](this.filtersContainer.node, "div", "country-filters");
        this.colorFilter = new _utils_component__WEBPACK_IMPORTED_MODULE_1__["default"](this.filtersContainer.node, "div", "color-filters");
        this.sortContainer = new _utils_component__WEBPACK_IMPORTED_MODULE_1__["default"](this.node, "div", "sort-container");
        this.sort = new _utils_component__WEBPACK_IMPORTED_MODULE_1__["default"](this.sortContainer.node, "div", "sort");
        this.sortTitle = new _utils_component__WEBPACK_IMPORTED_MODULE_1__["default"](this.sort.node, "filter-name", "sort", "Сортировка");
        this.select = new _utils_component__WEBPACK_IMPORTED_MODULE_1__["default"](this.sort.node, "select", "select");
        this.filtersBtns = new _utils_component__WEBPACK_IMPORTED_MODULE_1__["default"](this.node, "div", "btns-panel");
        this.resetFilters = new _utils_component__WEBPACK_IMPORTED_MODULE_1__["default"](this.filtersBtns.node, "button", "reset-filters btn", "Сбросить фильтры");
        this.clearHistory = new _utils_component__WEBPACK_IMPORTED_MODULE_1__["default"](this.filtersBtns.node, "button", "reset-filters reset btn", "Очистить историю");
    }
    render() {
        const filters = _utils_localstorage__WEBPACK_IMPORTED_MODULE_2__.LocalStorage.getLocalStorage("filters" /* localStorageKeys.filters */);
        const countryList = getCountryList();
        const colorList = getColorList();
        const countryTitle = new _utils_component__WEBPACK_IMPORTED_MODULE_1__["default"](this.countryFilter.node, "h4", "filter-name", "Страна");
        const countryDiv = new _utils_component__WEBPACK_IMPORTED_MODULE_1__["default"](this.countryFilter.node, "div", "country-filter");
        countryList.forEach((item, index) => {
            const checkBoxDiv = new _utils_component__WEBPACK_IMPORTED_MODULE_1__["default"](countryDiv.node, "div", "checkbox");
            checkBoxDiv.node.innerHTML = `<div class="checkboxDiv id="country">
                  <input type="checkbox" class="country" id="check${index}" name="country" value="${item}">
                  <label class="checkbox-country"for="check${index}">${item}</label>
               </div>`;
            if (filters && filters.country.includes(item)) {
                const cb = checkBoxDiv.node.querySelector('input[type="checkbox"]');
                cb.checked = true;
            }
        });
        const colorTitle = new _utils_component__WEBPACK_IMPORTED_MODULE_1__["default"](this.colorFilter.node, "h4", "filter-name", "Цвет");
        const colorDiv = new _utils_component__WEBPACK_IMPORTED_MODULE_1__["default"](this.colorFilter.node, "div", "color-filter");
        colorList.forEach((item, index) => {
            const checkBoxDiv = new _utils_component__WEBPACK_IMPORTED_MODULE_1__["default"](colorDiv.node, "div", "checkbox");
            checkBoxDiv.node.innerHTML = `<div class="checkboxDiv">
                  <input type="checkbox" class="color" id="check${index + countryList.length}" name="color" value="${item}">
                  <label class="checkbox-country"for="check${index + countryList.length}">${item}</label>
               </div>`;
            if (filters && filters.color.includes(item)) {
                const cb = checkBoxDiv.node.querySelector('input[type="checkbox"]');
                cb.checked = true;
            }
        });
        this.select.node.innerHTML = `<option value=""></option>
             <option value="ByPriceUp">По цене: по возрастанию</option>
             <option value="ByPriceDown">По цене: по убыванию</option>
           </div>`;
    }
}


/***/ }),

/***/ "./src/components/footer/footer.ts":
/*!*****************************************!*\
  !*** ./src/components/footer/footer.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var _footer_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.css */ "./src/components/footer/footer.css");
/* harmony import */ var _utils_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/component */ "./src/utils/component.ts");


class Footer extends _utils_component__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor(parentNode) {
        super(document.body, 'footer', 'footer');
        this.footerContainer = new _utils_component__WEBPACK_IMPORTED_MODULE_1__["default"](this.node, 'div', 'footer-container');
        this.renderContainer();
    }
    renderContainer() {
        this.footerContainer.node.innerHTML = `
      <div class="container">
          <div class="footer_wrapper">
              <a class="footer_link" href="https://github.com/ephedrini1/" target="_blank"> @ephedrini1</a>
              <p class="year">2022</p>
              <a class="footer_link" href="https://rs.school/js-stage0/" target="_blank"><img
                      src="assets/img/rs_school_js.svg" width="40" alt="geo"> Rolling Scopes School</a>
          </div>
      </div>
`;
    }
}


/***/ }),

/***/ "./src/components/header/header.ts":
/*!*****************************************!*\
  !*** ./src/components/header/header.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var _header_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.css */ "./src/components/header/header.css");
/* harmony import */ var _utils_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/component */ "./src/utils/component.ts");
/* harmony import */ var _search_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../search/search */ "./src/components/search/search.ts");
/* harmony import */ var _cart_cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cart/cart */ "./src/components/cart/cart.ts");




class Header extends _utils_component__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor(parentNode) {
        super(parentNode, 'header', 'header');
        this.search = new _search_search__WEBPACK_IMPORTED_MODULE_2__["default"](this.node);
        this.cart = new _cart_cart__WEBPACK_IMPORTED_MODULE_3__.Cart(this.node);
    }
}


/***/ }),

/***/ "./src/components/page.ts":
/*!********************************!*\
  !*** ./src/components/page.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Page)
/* harmony export */ });
/* harmony import */ var _utils_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/component */ "./src/utils/component.ts");
/* harmony import */ var _header_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header */ "./src/components/header/header.ts");
/* harmony import */ var _winecards_winecards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./winecards/winecards */ "./src/components/winecards/winecards.ts");
/* harmony import */ var _constants_goods__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/goods */ "./src/constants/goods.ts");
/* harmony import */ var _footer_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer */ "./src/components/footer/footer.ts");
/* harmony import */ var _filters_filters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filters/filters */ "./src/components/filters/filters.ts");
/* harmony import */ var _filters_filterSettings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./filters/filterSettings */ "./src/components/filters/filterSettings.ts");
/* harmony import */ var _utils_localstorage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/localstorage */ "./src/utils/localstorage.ts");








class Page extends _utils_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(parentNode) {
        super(parentNode, "div");
        this.header = new _header_header__WEBPACK_IMPORTED_MODULE_1__["default"](this.node);
        this.filters = new _filters_filters__WEBPACK_IMPORTED_MODULE_5__.Filters(this.node);
        this.filterSettings = new _filters_filterSettings__WEBPACK_IMPORTED_MODULE_6__["default"]();
        this.winecards = new _winecards_winecards__WEBPACK_IMPORTED_MODULE_2__["default"](this.node);
        this.filters.render();
        this.filterSettings.filter();
        this.setEventListeners();
        this.totalItems =
            this.header.cart.cartList.reduce((acc, el) => acc + el.inCart, 0) || 0;
        this.footer = new _footer_footer__WEBPACK_IMPORTED_MODULE_4__["default"](this.node);
    }
    setEventListeners() {
        let articul;
        document.addEventListener("click", (event) => {
            if (event.target) {
                if (event.target.classList.contains("cart__add")) {
                    articul = Number(event.target.dataset["articul"]);
                    this.header.cart.cartAdd(articul);
                    this.winecards.rerender();
                    this.header.cart.render();
                    if (this.totalItems < 20) {
                        this.totalItems += 1;
                        this.header.cart.totalLabel.node.textContent = `${this.totalItems}`;
                    }
                }
                if (event.target.classList.contains("cart__remove")) {
                    articul = Number(event.target.dataset["articul"]);
                    this.header.cart.cartRemove(articul);
                    this.winecards.rerender();
                    this.header.cart.render();
                    if (this.totalItems > 0) {
                        this.totalItems -= 1;
                        this.header.cart.totalLabel.node.textContent = `${this.totalItems}`;
                    }
                }
                if (event.target.classList.contains("close-popup")) {
                    this.header.cart.cartClose();
                }
                if (event.target.classList.contains("error__btn")) {
                    if (event.target.classList.contains("search__btn")) {
                        this.header.search.popupClose();
                        this.winecards.rerender();
                    }
                    if (event.target.classList.contains("filter__btn")) {
                        this.filterSettings.resetFilters();
                        this.filterSettings.popupClose();
                    }
                }
            }
            this.header.cart.node.onclick = () => {
                this.header.cart.cartOpen();
            };
        });
        this.header.search.searchInput.addEventListener("input", () => {
            this.header.search.search(_constants_goods__WEBPACK_IMPORTED_MODULE_3__.goods);
            this.winecards.rerender(this.header.search.searchData);
        });
        this.filters.select.node.addEventListener("change", () => {
            this.sort();
            this.winecards.rerender(_utils_localstorage__WEBPACK_IMPORTED_MODULE_7__.LocalStorage.getLocalStorage("onPage" /* localStorageKeys.onPage */));
        });
        this.filters.clearHistory.node.addEventListener("click", () => {
            this.filterSettings.resetAll();
            this.winecards.rerender(_constants_goods__WEBPACK_IMPORTED_MODULE_3__.goods);
        });
        this.filters.resetFilters.node.addEventListener("click", () => {
            this.filterSettings.resetFilters();
            this.winecards.rerender(_utils_localstorage__WEBPACK_IMPORTED_MODULE_7__.LocalStorage.getLocalStorage("onPage" /* localStorageKeys.onPage */));
        });
        this.filters.filtersContainer.node.addEventListener("change", () => {
            this.filterSettings.filter();
            if (!_utils_localstorage__WEBPACK_IMPORTED_MODULE_7__.LocalStorage.getLocalStorage("onPage" /* localStorageKeys.onPage */).length) {
                this.filterSettings.openPopup();
            }
            this.sort();
            this.winecards.rerender(_utils_localstorage__WEBPACK_IMPORTED_MODULE_7__.LocalStorage.getLocalStorage("onPage" /* localStorageKeys.onPage */));
        });
    }
    sort() {
        const select = this.filters.select.node;
        const item = select.value;
        if (item === "ByPriceUp") {
            this.filterSettings.sortPriceUp(_utils_localstorage__WEBPACK_IMPORTED_MODULE_7__.LocalStorage.getLocalStorage("onPage" /* localStorageKeys.onPage */) || _constants_goods__WEBPACK_IMPORTED_MODULE_3__.goods);
        }
        if (item === "ByPriceDown") {
            this.filterSettings.sortPriceDown(_utils_localstorage__WEBPACK_IMPORTED_MODULE_7__.LocalStorage.getLocalStorage("onPage" /* localStorageKeys.onPage */) || _constants_goods__WEBPACK_IMPORTED_MODULE_3__.goods);
        }
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
/* harmony import */ var _search_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.css */ "./src/components/search/search.css");
/* harmony import */ var _utils_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/component */ "./src/utils/component.ts");
/* harmony import */ var _winecards_winecards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../winecards/winecards */ "./src/components/winecards/winecards.ts");
/* harmony import */ var _utils_localstorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/localstorage */ "./src/utils/localstorage.ts");
/* harmony import */ var _constants_goods__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/goods */ "./src/constants/goods.ts");





class Search extends _utils_component__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor(parentNode) {
        super(parentNode, 'div', 'search-container');
        this.input = new _utils_component__WEBPACK_IMPORTED_MODULE_1__["default"](this.node, 'input', 'search-container__input');
        this.searchInput = this.input.node;
        this.searchInput.autocomplete = 'off';
        this.searchInput.placeholder = 'Поиск...';
        this.searchInput.type = 'search';
        this.searchInput.focus();
        this.searchData = _utils_localstorage__WEBPACK_IMPORTED_MODULE_3__.LocalStorage.getLocalStorage("goods" /* localStorageKeys.goods */) || _constants_goods__WEBPACK_IMPORTED_MODULE_4__.goods;
        this.winecards = new _winecards_winecards__WEBPACK_IMPORTED_MODULE_2__["default"]();
        this.searchPopup = new _utils_component__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.searchPopupContainer = new _utils_component__WEBPACK_IMPORTED_MODULE_1__["default"](this.searchPopup.node, 'div', 'search-popup__container');
    }
    search(data) {
        let value = this.searchInput.value.trim();
        value = value.toLowerCase();
        this.searchData = [];
        if (value != '') {
            data.forEach((item) => {
                if (item.name.toLowerCase().startsWith(value)) {
                    this.searchData.push(item);
                }
            });
            if (this.searchData.length === 0) {
                this.searchInput.readOnly = true;
                this.searchPopupContainer = new _utils_component__WEBPACK_IMPORTED_MODULE_1__["default"](document.body, 'div', 'cart__error');
                this.searchPopupContainer.node.innerHTML = `
        <p class="error__message">По данному запросу ничего не найдено</p>
        <button class="error__btn search__btn" >Ok</button>`;
                document.querySelector('.overlay').classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        }
        else {
            this.searchData = data;
        }
    }
    popupClose() {
        this.searchPopupContainer.destroy();
        document.querySelector('.overlay').classList.remove('active');
        document.body.style.overflow = 'scroll';
        this.searchInput.readOnly = false;
        this.searchInput.value = '';
    }
}


/***/ }),

/***/ "./src/components/winecards/card.ts":
/*!******************************************!*\
  !*** ./src/components/winecards/card.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Card)
/* harmony export */ });
/* harmony import */ var _utils_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/component */ "./src/utils/component.ts");
/* harmony import */ var _winecard_btn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./winecard-btn */ "./src/components/winecards/winecard-btn.ts");


class Card extends _utils_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(parentNode, cardData) {
        super(parentNode, 'div', 'winecards__item', '');
        this.render(cardData);
    }
    render(cardData) {
        Card.wineCardFace = new _utils_component__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'div', 'winecards-face');
        Card.wineCardFaceDetails = new _utils_component__WEBPACK_IMPORTED_MODULE_0__["default"](Card.wineCardFace.node, 'div', 'winecards-face__details');
        Card.wineCardFaceName = new _utils_component__WEBPACK_IMPORTED_MODULE_0__["default"](Card.wineCardFaceDetails.node, 'h2', 'winecards-face__name', `${cardData.name}`);
        Card.wineCardFacePhoto = new _utils_component__WEBPACK_IMPORTED_MODULE_0__["default"](Card.wineCardFaceDetails.node, 'div', 'winecards-face__photo');
        Card.wineCardFacePhoto.node.style.backgroundImage = `url(${cardData.image})`;
        Card.wineCardFaceCount = new _utils_component__WEBPACK_IMPORTED_MODULE_0__["default"](Card.wineCardFaceDetails.node, 'h3', 'winecards-face__count', `В наличии : ${cardData.count}`);
        Card.wineCardFacePrice = new _utils_component__WEBPACK_IMPORTED_MODULE_0__["default"](Card.wineCardFaceDetails.node, 'h3', 'winecards-face__price', `${cardData.price} BYN`);
        Card.wineCardBack = new _utils_component__WEBPACK_IMPORTED_MODULE_0__["default"](this.node, 'div', 'winecards-back');
        Card.wineCardBackDetails = new _utils_component__WEBPACK_IMPORTED_MODULE_0__["default"](Card.wineCardBack.node, 'div', 'winecards-back__details');
        Card.wineCardBackName = new _utils_component__WEBPACK_IMPORTED_MODULE_0__["default"](Card.wineCardBackDetails.node, 'h2', 'winecards-back__name', `${cardData.name}`);
        Card.wineCardBackMadeBy = new _utils_component__WEBPACK_IMPORTED_MODULE_0__["default"](Card.wineCardBackDetails.node, 'p', 'winecards-back__madeBy', `Производитель : ${cardData.madeBy}`);
        Card.wineCardBackCountry = new _utils_component__WEBPACK_IMPORTED_MODULE_0__["default"](Card.wineCardBackDetails.node, 'p', 'winecards-back__country', `Страна : ${cardData.country}`);
        Card.wineCardBackYear = new _utils_component__WEBPACK_IMPORTED_MODULE_0__["default"](Card.wineCardBackDetails.node, 'p', 'winecards-back__year', `Год : ${cardData.year}`);
        Card.wineCardBackColor = new _utils_component__WEBPACK_IMPORTED_MODULE_0__["default"](Card.wineCardBackDetails.node, 'p', 'winecards-back__color', `Цвет : ${cardData.color}`);
        Card.wineCardBackAlcohol = new _utils_component__WEBPACK_IMPORTED_MODULE_0__["default"](Card.wineCardBackDetails.node, 'p', 'winecards-back__alcohol', `Крепость : ${cardData.alcohol}%`);
        Card.wineCardBackVol = new _utils_component__WEBPACK_IMPORTED_MODULE_0__["default"](Card.wineCardBackDetails.node, 'p', '.winecards-back__vol', `Объем : ${cardData.vol}л`);
        Card.btn = new _winecard_btn__WEBPACK_IMPORTED_MODULE_1__["default"](Card.wineCardBackDetails.node);
        Card.btn.node.setAttribute('data-articul', `${cardData.id}`);
        if (!cardData.inStock || cardData.count === 0) {
            this.node.style.pointerEvents = 'none';
            this.node.style.opacity = '0.5';
            Card.wineCardFaceCount.node.textContent = 'Нет в наличии';
        }
        cardData.count === 0 ? cardData.inStock = false : cardData.inStock = true;
    }
}


/***/ }),

/***/ "./src/components/winecards/winecard-btn.ts":
/*!**************************************************!*\
  !*** ./src/components/winecards/winecard-btn.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ToCartBtn)
/* harmony export */ });
/* harmony import */ var _utils_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/component */ "./src/utils/component.ts");

class ToCartBtn extends _utils_component__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(parentNode) {
        super(parentNode, 'button', 'cart__add cart__btn', 'в корзину');
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
/* harmony import */ var _constants_goods__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/goods */ "./src/constants/goods.ts");
/* harmony import */ var _utils_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/component */ "./src/utils/component.ts");
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./card */ "./src/components/winecards/card.ts");





class WineCards extends _utils_component__WEBPACK_IMPORTED_MODULE_3__["default"] {
    constructor(parentNode) {
        super(parentNode, 'div', 'winecards');
        this.wineContainer = new _utils_component__WEBPACK_IMPORTED_MODULE_3__["default"]();
        this.data = _utils_localstorage__WEBPACK_IMPORTED_MODULE_1__.LocalStorage.getLocalStorage("onPage" /* localStorageKeys.onPage */) ||
            _constants_goods__WEBPACK_IMPORTED_MODULE_2__.goods;
        this.renderCards();
    }
    renderCards(data) {
        this.data = data || _utils_localstorage__WEBPACK_IMPORTED_MODULE_1__.LocalStorage.getLocalStorage("onPage" /* localStorageKeys.onPage */) || _constants_goods__WEBPACK_IMPORTED_MODULE_2__.goods;
        this.wineContainer = new _utils_component__WEBPACK_IMPORTED_MODULE_3__["default"](this.node, 'div', 'winecards-container');
        this.data.forEach((item, idx) => {
            this.wineCard = new _card__WEBPACK_IMPORTED_MODULE_4__["default"](this.wineContainer.node, item);
            this.wineCard.node.setAttribute('data-articul', `${idx}`);
        });
    }
    rerender(data) {
        this.wineContainer.destroy();
        this.renderCards(data);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WineCards);


/***/ }),

/***/ "./src/constants/goods.ts":
/*!********************************!*\
  !*** ./src/constants/goods.ts ***!
  \********************************/
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

/***/ "./src/utils/component.ts":
/*!********************************!*\
  !*** ./src/utils/component.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Component)
/* harmony export */ });
// export default class Component {
//   protected element: HTMLElement;
//   constructor(tagName: string, className: string = '', id?: string) {
//     this.element = document.createElement(tagName);
//     this.element.className = className;
//     id ? (this.element.id = id) : null;
//   }
//   render() {
//     return this.element;
//   }
// }
class Component {
    constructor(parentNode, tagName = 'div', className = '', content = '') {
        const element = document.createElement(tagName);
        element.className = className;
        element.textContent = content;
        if (parentNode) {
            parentNode.append(element);
        }
        this.node = element;
    }
    destroy() {
        this.node.remove();
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

/***/ "./src/assets/img/bg.jpg":
/*!*******************************!*\
  !*** ./src/assets/img/bg.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/img/bg.jpg";

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
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./src/app.ts");
/* harmony import */ var _global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global.css */ "./src/global.css");


const app = new _app__WEBPACK_IMPORTED_MODULE_0__["default"]();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ2dIO0FBQ2pCO0FBQy9GLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSxpREFBaUQsMEJBQTBCLHFCQUFxQixzQkFBc0IsTUFBTSxxQkFBcUIsc0JBQXNCLGdCQUFnQixpQkFBaUIsa0JBQWtCLG1CQUFtQixtQkFBbUIsOEJBQThCLG1CQUFtQix5QkFBeUIseUJBQXlCLHVDQUF1QyxvQkFBb0IsS0FBSyw0QkFBNEIscUJBQXFCLEtBQUssZ0NBQWdDLGtCQUFrQixvQkFBb0IsNkJBQTZCLDhCQUE4QixlQUFlLEtBQUssc0JBQXNCLHFCQUFxQiwyQkFBMkIseUJBQXlCLHlCQUF5QixpQkFBaUIsZUFBZSxzQkFBc0IsdUJBQXVCLEtBQUssNEJBQTRCLGlDQUFpQyxvQ0FBb0MsMkNBQTJDLHVCQUF1QixLQUFLLDZCQUE2QixzQkFBc0IsS0FBSyxvQkFBb0Isb0JBQW9CLHlDQUF5Qyw2QkFBNkIseUJBQXlCLGNBQWMsS0FBSyxzQkFBc0Isb0JBQW9CLDhCQUE4QiwwQkFBMEIsaUJBQWlCLEtBQUssc0JBQXNCLHNCQUFzQixnQkFBZ0IsaUJBQWlCLGtCQUFrQixtQkFBbUIsb0JBQW9CLDZCQUE2QiwwQkFBMEIsOEJBQThCLHFCQUFxQixvQ0FBb0MseUJBQXlCLG1CQUFtQixLQUFLLDJCQUEyQiwrRkFBK0YsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLGdDQUFnQywwQkFBMEIscUJBQXFCLHNCQUFzQixNQUFNLHFCQUFxQixzQkFBc0IsZ0JBQWdCLGlCQUFpQixrQkFBa0IsbUJBQW1CLG1CQUFtQiw4QkFBOEIsbUJBQW1CLHlCQUF5Qix5QkFBeUIsdUNBQXVDLG9CQUFvQixLQUFLLDRCQUE0QixxQkFBcUIsS0FBSyxnQ0FBZ0Msa0JBQWtCLG9CQUFvQiw2QkFBNkIsOEJBQThCLGVBQWUsS0FBSyxzQkFBc0IscUJBQXFCLDJCQUEyQix5QkFBeUIseUJBQXlCLGlCQUFpQixlQUFlLHNCQUFzQix1QkFBdUIsS0FBSyw0QkFBNEIsaUNBQWlDLG9DQUFvQywyQ0FBMkMsdUJBQXVCLEtBQUssNkJBQTZCLHNCQUFzQixLQUFLLG9CQUFvQixvQkFBb0IseUNBQXlDLDZCQUE2Qix5QkFBeUIsY0FBYyxLQUFLLHNCQUFzQixvQkFBb0IsOEJBQThCLDBCQUEwQixpQkFBaUIsS0FBSyxzQkFBc0Isc0JBQXNCLGdCQUFnQixpQkFBaUIsa0JBQWtCLG1CQUFtQixvQkFBb0IsNkJBQTZCLDBCQUEwQiw4QkFBOEIscUJBQXFCLG9DQUFvQyx5QkFBeUIsbUJBQW1CLEtBQUssdUNBQXVDO0FBQy9rSTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUHZDO0FBQ2dIO0FBQ2pCO0FBQy9GLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSw2Q0FBNkMsNkJBQTZCLEtBQUssbUJBQW1CLG9CQUFvQixzQkFBc0IscUNBQXFDLGVBQWUsa0JBQWtCLHVCQUF1QiwyQ0FBMkMseUJBQXlCLHVDQUF1Qyx5QkFBeUIsbUJBQW1CLEtBQUssNEJBQTRCLG9CQUFvQiw4QkFBOEIsZUFBZSxLQUFLLGtCQUFrQiwwQkFBMEIsS0FBSyxxQkFBcUIsb0NBQW9DLEtBQUssbUJBQW1CLGtDQUFrQyxLQUFLLGVBQWUsNEJBQTRCLEtBQUsscUJBQXFCLG9CQUFvQiw2QkFBNkIsd0JBQXdCLGVBQWUsbUJBQW1CLEtBQUssZ0JBQWdCLDRCQUE0QixtQkFBbUIsS0FBSyx3QkFBd0IsNEJBQTRCLG1CQUFtQixLQUFLLDhCQUE4Qix1QkFBdUIsK0JBQStCLG9CQUFvQixLQUFLLG1CQUFtQiwyQkFBMkIsMEJBQTBCLHlCQUF5QixLQUFLLDhEQUE4RCxzQkFBc0IsbUJBQW1CLGNBQWMseUJBQXlCLGtCQUFrQixLQUFLLGtDQUFrQyw0QkFBNEIsaUJBQWlCLDZCQUE2QixLQUFLLGlDQUFpQyxvQ0FBb0MseUJBQXlCLHlCQUF5QixvQkFBb0IsdUJBQXVCLEtBQUssb0VBQW9FLGdDQUFnQywwQkFBMEIsS0FBSyxXQUFXLHFCQUFxQixLQUFLLGdCQUFnQix1QkFBdUIsaUJBQWlCLHVCQUF1QixjQUFjLHFCQUFxQix5QkFBeUIsMENBQTBDLDZCQUE2QixzQkFBc0IsbUJBQW1CLHNCQUFzQixzQkFBc0Isb0NBQW9DLDBCQUEwQix1Q0FBdUMsS0FBSyxpREFBaUQsb0JBQW9CLEtBQUssMkNBQTJDLHlCQUF5QixvQkFBb0Isc0JBQXNCLGtCQUFrQiw0QkFBNEIsdUJBQXVCLDBDQUEwQyxzQkFBc0IseUJBQXlCLG9DQUFvQyx1Q0FBdUMseUJBQXlCLEtBQUssa0NBQWtDLDBCQUEwQix5QkFBeUIsYUFBYSxlQUFlLG1CQUFtQixvQ0FBb0MsaUNBQWlDLDJCQUEyQixLQUFLLDZDQUE2QyxxQkFBcUIsS0FBSyx3QkFBd0Isa0JBQWtCLGtCQUFrQixvQkFBb0IsOEJBQThCLDBCQUEwQixxQkFBcUIsS0FBSyxvQ0FBb0MscUdBQXFHLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sWUFBWSxNQUFNLFVBQVUsS0FBSyxZQUFZLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxVQUFVLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sVUFBVSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sbUNBQW1DLDZCQUE2QixLQUFLLG1CQUFtQixvQkFBb0Isc0JBQXNCLHFDQUFxQyxlQUFlLGtCQUFrQix1QkFBdUIsMkNBQTJDLHlCQUF5Qix1Q0FBdUMseUJBQXlCLG1CQUFtQixLQUFLLDRCQUE0QixvQkFBb0IsOEJBQThCLGVBQWUsS0FBSyxrQkFBa0IsMEJBQTBCLEtBQUsscUJBQXFCLG9DQUFvQyxLQUFLLG1CQUFtQixrQ0FBa0MsS0FBSyxlQUFlLDRCQUE0QixLQUFLLHFCQUFxQixvQkFBb0IsNkJBQTZCLHdCQUF3QixlQUFlLG1CQUFtQixLQUFLLGdCQUFnQiw0QkFBNEIsbUJBQW1CLEtBQUssd0JBQXdCLDRCQUE0QixtQkFBbUIsS0FBSyw4QkFBOEIsdUJBQXVCLCtCQUErQixvQkFBb0IsS0FBSyxtQkFBbUIsMkJBQTJCLDBCQUEwQix5QkFBeUIsS0FBSyw4REFBOEQsc0JBQXNCLG1CQUFtQixjQUFjLHlCQUF5QixrQkFBa0IsS0FBSyxrQ0FBa0MsNEJBQTRCLGlCQUFpQiw2QkFBNkIsS0FBSyxpQ0FBaUMsb0NBQW9DLHlCQUF5Qix5QkFBeUIsb0JBQW9CLHVCQUF1QixLQUFLLG9FQUFvRSxnQ0FBZ0MsMEJBQTBCLEtBQUssV0FBVyxxQkFBcUIsS0FBSyxnQkFBZ0IsdUJBQXVCLGlCQUFpQix1QkFBdUIsY0FBYyxxQkFBcUIseUJBQXlCLDBDQUEwQyw2QkFBNkIsc0JBQXNCLG1CQUFtQixzQkFBc0Isc0JBQXNCLG9DQUFvQywwQkFBMEIsdUNBQXVDLEtBQUssaURBQWlELG9CQUFvQixLQUFLLDJDQUEyQyx5QkFBeUIsb0JBQW9CLHNCQUFzQixrQkFBa0IsNEJBQTRCLHVCQUF1QiwwQ0FBMEMsc0JBQXNCLHlCQUF5QixvQ0FBb0MsdUNBQXVDLHlCQUF5QixLQUFLLGtDQUFrQywwQkFBMEIseUJBQXlCLGFBQWEsZUFBZSxtQkFBbUIsb0NBQW9DLGlDQUFpQywyQkFBMkIsS0FBSyw2Q0FBNkMscUJBQXFCLEtBQUssd0JBQXdCLGtCQUFrQixrQkFBa0Isb0JBQW9CLDhCQUE4QiwwQkFBMEIscUJBQXFCLEtBQUssZ0RBQWdEO0FBQzltUDtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUHZDO0FBQ2dIO0FBQ2pCO0FBQy9GLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSxtREFBbUQsMkNBQTJDLHFCQUFxQix5QkFBeUIsS0FBSyx5QkFBeUIsc0JBQXNCLHFCQUFxQixvQkFBb0IscUNBQXFDLDBCQUEwQixLQUFLLGNBQWMsbUJBQW1CLHdCQUF3QixLQUFLLE9BQU8sbUdBQW1HLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxtQ0FBbUMsMkNBQTJDLHFCQUFxQix5QkFBeUIsS0FBSyx5QkFBeUIsc0JBQXNCLHFCQUFxQixvQkFBb0IscUNBQXFDLDBCQUEwQixLQUFLLGNBQWMsbUJBQW1CLHdCQUF3QixLQUFLLG1CQUFtQjtBQUMzOEI7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1B2QztBQUNnSDtBQUNqQjtBQUMvRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsbURBQW1ELHNCQUFzQixvQkFBb0IscUNBQXFDLDBCQUEwQixtQkFBbUIsMkNBQTJDLEtBQUssT0FBTyxtR0FBbUcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksbUNBQW1DLHNCQUFzQixvQkFBb0IscUNBQXFDLDBCQUEwQixtQkFBbUIsMkNBQTJDLEtBQUssbUJBQW1CO0FBQy9tQjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUHZDO0FBQ2dIO0FBQ2pCO0FBQy9GLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSxpREFBaUQsMEJBQTBCLHFCQUFxQixzQkFBc0IsS0FBSyxrQ0FBa0MsMENBQTBDLG1CQUFtQixzQkFBc0Isb0NBQW9DLHVDQUF1Qyx5QkFBeUIsS0FBSyx3Q0FBd0MsNkNBQTZDLG9CQUFvQixLQUFLLE9BQU8sbUdBQW1HLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLGdDQUFnQywwQkFBMEIscUJBQXFCLHNCQUFzQixLQUFLLGtDQUFrQywwQ0FBMEMsbUJBQW1CLHNCQUFzQixvQ0FBb0MsdUNBQXVDLHlCQUF5QixLQUFLLHdDQUF3Qyw2Q0FBNkMsb0JBQW9CLEtBQUssbUJBQW1CO0FBQ2pwQztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUHZDO0FBQ2dIO0FBQ2pCO0FBQy9GLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSxpREFBaUQsNEJBQTRCLHFCQUFxQixzQkFBc0IsTUFBTSxvQkFBb0IsaUJBQWlCLHFCQUFxQix1QkFBdUIscUJBQXFCLEtBQUssOEJBQThCLG9CQUFvQixzQkFBc0IsOEJBQThCLDRCQUE0QixlQUFlLEtBQUssMEJBQTBCLHlCQUF5QixrQkFBa0Isc0JBQXNCLDJDQUEyQyxtQ0FBbUMsa0NBQWtDLDRCQUE0QixLQUFLLDZDQUE2QyxvQkFBb0IseUNBQXlDLDBCQUEwQiwrRUFBK0UsdUVBQXVFLGtFQUFrRSwrREFBK0QscUhBQXFILDBDQUEwQywwQ0FBMEMseUJBQXlCLHdCQUF3QixtQkFBbUIsMEJBQTBCLGtCQUFrQixvREFBb0Qsc0JBQXNCLEtBQUssd0JBQXdCLG9DQUFvQyx5QkFBeUIsS0FBSyw4QkFBOEIseUJBQXlCLGVBQWUsZ0JBQWdCLG1CQUFtQixvQkFBb0IscUJBQXFCLG9CQUFvQix1QkFBdUIsb0JBQW9CLDRDQUE0Qyw0Q0FBNEMsNENBQTRDLDRCQUE0QixLQUFLLHNGQUFzRixpRkFBaUYseUVBQXlFLG9FQUFvRSxpRUFBaUUsdUhBQXVILEtBQUssd0JBQXdCLHlCQUF5QixhQUFhLGNBQWMsa0JBQWtCLDhDQUE4Qyx3QkFBd0IsS0FBSyxrQ0FBa0MsdUVBQXVFLCtEQUErRCxhQUFhLHVCQUF1QixZQUFZLGdCQUFnQixrQkFBa0IsbUNBQW1DLDZCQUE2QixtQ0FBbUMsaUNBQWlDLDJCQUEyQixlQUFlLEtBQUssNkNBQTZDLHlDQUF5Qyx5Q0FBeUMsMkNBQTJDLDJDQUEyQyxLQUFLLHlDQUF5Qyx1Q0FBdUMsdUNBQXVDLDJDQUEyQywyQ0FBMkMsS0FBSywwRkFBMEYsdUNBQXVDLHVDQUF1QywyQ0FBMkMsMkNBQTJDLEtBQUssMEZBQTBGLDBDQUEwQywwQ0FBMEMsMkNBQTJDLDJDQUEyQyxLQUFLLCtCQUErQixrQkFBa0IsbUJBQW1CLCtCQUErQixtQ0FBbUMsa0NBQWtDLGtCQUFrQixLQUFLLCtCQUErQixtQkFBbUIseUJBQXlCLHlCQUF5QixLQUFLLG9CQUFvQixvQ0FBb0MsMEJBQTBCLCtCQUErQixrREFBa0QsbURBQW1ELHlCQUF5QixtQkFBbUIsc0JBQXNCLHVCQUF1QixzQkFBc0IsS0FBSyw4Q0FBOEMsMENBQTBDLDZDQUE2QyxxQ0FBcUMseUJBQXlCLDRDQUE0Qyx1QkFBdUIsS0FBSyx1QkFBdUIseUdBQXlHLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFNBQVMsTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGlDQUFpQyw0QkFBNEIscUJBQXFCLHNCQUFzQixNQUFNLG9CQUFvQixpQkFBaUIscUJBQXFCLHVCQUF1QixxQkFBcUIsS0FBSyw4QkFBOEIsb0JBQW9CLHNCQUFzQiw4QkFBOEIsNEJBQTRCLGVBQWUsS0FBSywwQkFBMEIseUJBQXlCLGtCQUFrQixzQkFBc0IsMkNBQTJDLG1DQUFtQyxrQ0FBa0MsNEJBQTRCLEtBQUssNkNBQTZDLG9CQUFvQix5Q0FBeUMsMEJBQTBCLCtFQUErRSx1RUFBdUUsa0VBQWtFLCtEQUErRCxxSEFBcUgsMENBQTBDLDBDQUEwQyx5QkFBeUIsd0JBQXdCLG1CQUFtQiwwQkFBMEIsa0JBQWtCLG9EQUFvRCxzQkFBc0IsS0FBSyx3QkFBd0Isb0NBQW9DLHlCQUF5QixLQUFLLDhCQUE4Qix5QkFBeUIsZUFBZSxnQkFBZ0IsbUJBQW1CLG9CQUFvQixxQkFBcUIsb0JBQW9CLHVCQUF1QixvQkFBb0IsNENBQTRDLDRDQUE0Qyw0Q0FBNEMsNEJBQTRCLEtBQUssc0ZBQXNGLGlGQUFpRix5RUFBeUUsb0VBQW9FLGlFQUFpRSx1SEFBdUgsS0FBSyx3QkFBd0IseUJBQXlCLGFBQWEsY0FBYyxrQkFBa0IsOENBQThDLHdCQUF3QixLQUFLLGtDQUFrQyx1RUFBdUUsK0RBQStELGFBQWEsdUJBQXVCLFlBQVksZ0JBQWdCLGtCQUFrQixtQ0FBbUMsNkJBQTZCLG1DQUFtQyxpQ0FBaUMsMkJBQTJCLGVBQWUsS0FBSyw2Q0FBNkMseUNBQXlDLHlDQUF5QywyQ0FBMkMsMkNBQTJDLEtBQUsseUNBQXlDLHVDQUF1Qyx1Q0FBdUMsMkNBQTJDLDJDQUEyQyxLQUFLLDBGQUEwRix1Q0FBdUMsdUNBQXVDLDJDQUEyQywyQ0FBMkMsS0FBSywwRkFBMEYsMENBQTBDLDBDQUEwQywyQ0FBMkMsMkNBQTJDLEtBQUssK0JBQStCLGtCQUFrQixtQkFBbUIsK0JBQStCLG1DQUFtQyxrQ0FBa0Msa0JBQWtCLEtBQUssK0JBQStCLG1CQUFtQix5QkFBeUIseUJBQXlCLEtBQUssb0JBQW9CLG9DQUFvQywwQkFBMEIsK0JBQStCLGtEQUFrRCxtREFBbUQseUJBQXlCLG1CQUFtQixzQkFBc0IsdUJBQXVCLHNCQUFzQixLQUFLLDhDQUE4QywwQ0FBMEMsNkNBQTZDLHFDQUFxQyx5QkFBeUIsNENBQTRDLHVCQUF1QixLQUFLLG1DQUFtQztBQUNqb1c7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUHZDO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLG1IQUFzQztBQUNsRiw0Q0FBNEMsaUlBQTZDO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0EsaURBQWlELDBCQUEwQixxQkFBcUIsc0JBQXNCLEtBQUssV0FBVyxnQkFBZ0IsaUJBQWlCLDZCQUE2QixLQUFLLFdBQVcsNEJBQTRCLHVCQUF1QixTQUFTLGNBQWMsc0JBQXNCLHdCQUF3Qix3RUFBd0UsbUNBQW1DLDZCQUE2QixLQUFLLGdCQUFnQixvQ0FBb0MsMEJBQTBCLCtCQUErQixrREFBa0QsbURBQW1ELHlCQUF5QixtQkFBbUIsc0JBQXNCLHVCQUF1QixLQUFLLHNCQUFzQiwwQ0FBMEMsNkNBQTZDLG9DQUFvQyx5QkFBeUIsNENBQTRDLHVCQUF1QixLQUFLLHVCQUF1Qix5QkFBeUIsaUJBQWlCLGtCQUFrQix1QkFBdUIsbUZBQW1GLDZCQUE2QixzQkFBc0IsS0FBSyw2QkFBNkIsaUNBQWlDLHVCQUF1QixLQUFLLHlCQUF5Qix5QkFBeUIsZUFBZSxnQkFBZ0IscUJBQXFCLG1DQUFtQyx5QkFBeUIseUJBQXlCLHVCQUF1QixrQkFBa0IsbUJBQW1CLEtBQUssa0JBQWtCLHNCQUFzQixhQUFhLGNBQWMsa0JBQWtCLG1CQUFtQiwwQ0FBMEMsbUJBQW1CLGtCQUFrQixvQkFBb0IsU0FBUyx5QkFBeUIscUJBQXFCLEtBQUssZUFBZSx5QkFBeUIsNEJBQTRCLEtBQUssT0FBTyxpRkFBaUYsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGNBQWMsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFFBQVEsS0FBSyxZQUFZLGFBQWEsaUNBQWlDLDBCQUEwQixxQkFBcUIsc0JBQXNCLEtBQUssV0FBVyxnQkFBZ0IsaUJBQWlCLDZCQUE2QixLQUFLLFdBQVcsNEJBQTRCLHVCQUF1QixTQUFTLGNBQWMsc0JBQXNCLHdCQUF3QixtREFBbUQsbUNBQW1DLDZCQUE2QixLQUFLLGdCQUFnQixvQ0FBb0MsMEJBQTBCLCtCQUErQixrREFBa0QsbURBQW1ELHlCQUF5QixtQkFBbUIsc0JBQXNCLHVCQUF1QixLQUFLLHNCQUFzQiwwQ0FBMEMsNkNBQTZDLG9DQUFvQyx5QkFBeUIsNENBQTRDLHVCQUF1QixLQUFLLHVCQUF1Qix5QkFBeUIsaUJBQWlCLGtCQUFrQix1QkFBdUIscUVBQXFFLDZCQUE2QixzQkFBc0IsS0FBSyw2QkFBNkIsaUNBQWlDLHVCQUF1QixLQUFLLHlCQUF5Qix5QkFBeUIsZUFBZSxnQkFBZ0IscUJBQXFCLG1DQUFtQyx5QkFBeUIseUJBQXlCLHVCQUF1QixrQkFBa0IsbUJBQW1CLEtBQUssa0JBQWtCLHNCQUFzQixhQUFhLGNBQWMsa0JBQWtCLG1CQUFtQiwwQ0FBMEMsbUJBQW1CLGtCQUFrQixvQkFBb0IsU0FBUyx5QkFBeUIscUJBQXFCLEtBQUssZUFBZSx5QkFBeUIsNEJBQTRCLEtBQUssbUJBQW1CO0FBQ3pwSjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1oxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRDtBQUNyRDs7QUFFQTtBQUNBLGdEQUFnRDtBQUNoRDs7QUFFQTtBQUNBLHFGQUFxRjtBQUNyRjs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLEtBQUs7QUFDTCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIscUJBQXFCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ3JHYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsb0RBQW9EOztBQUVwRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUM1QmE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQSxNQUFxRztBQUNyRyxNQUEyRjtBQUMzRixNQUFrRztBQUNsRyxNQUFxSDtBQUNySCxNQUE4RztBQUM5RyxNQUE4RztBQUM5RyxNQUF3RztBQUN4RztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHFGQUFPOzs7O0FBSWtEO0FBQzFFLE9BQU8saUVBQWUscUZBQU8sSUFBSSw0RkFBYyxHQUFHLDRGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QjdFLE1BQXFHO0FBQ3JHLE1BQTJGO0FBQzNGLE1BQWtHO0FBQ2xHLE1BQXFIO0FBQ3JILE1BQThHO0FBQzlHLE1BQThHO0FBQzlHLE1BQTJHO0FBQzNHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsd0ZBQU87Ozs7QUFJcUQ7QUFDN0UsT0FBTyxpRUFBZSx3RkFBTyxJQUFJLCtGQUFjLEdBQUcsK0ZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCN0UsTUFBcUc7QUFDckcsTUFBMkY7QUFDM0YsTUFBa0c7QUFDbEcsTUFBcUg7QUFDckgsTUFBOEc7QUFDOUcsTUFBOEc7QUFDOUcsTUFBMEc7QUFDMUc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyx1RkFBTzs7OztBQUlvRDtBQUM1RSxPQUFPLGlFQUFlLHVGQUFPLElBQUksOEZBQWMsR0FBRyw4RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekI3RSxNQUFxRztBQUNyRyxNQUEyRjtBQUMzRixNQUFrRztBQUNsRyxNQUFxSDtBQUNySCxNQUE4RztBQUM5RyxNQUE4RztBQUM5RyxNQUEwRztBQUMxRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHVGQUFPOzs7O0FBSW9EO0FBQzVFLE9BQU8saUVBQWUsdUZBQU8sSUFBSSw4RkFBYyxHQUFHLDhGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QjdFLE1BQXFHO0FBQ3JHLE1BQTJGO0FBQzNGLE1BQWtHO0FBQ2xHLE1BQXFIO0FBQ3JILE1BQThHO0FBQzlHLE1BQThHO0FBQzlHLE1BQTBHO0FBQzFHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsdUZBQU87Ozs7QUFJb0Q7QUFDNUUsT0FBTyxpRUFBZSx1RkFBTyxJQUFJLDhGQUFjLEdBQUcsOEZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCN0UsTUFBcUc7QUFDckcsTUFBMkY7QUFDM0YsTUFBa0c7QUFDbEcsTUFBcUg7QUFDckgsTUFBOEc7QUFDOUcsTUFBOEc7QUFDOUcsTUFBNkc7QUFDN0c7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQywwRkFBTzs7OztBQUl1RDtBQUMvRSxPQUFPLGlFQUFlLDBGQUFPLElBQUksaUdBQWMsR0FBRyxpR0FBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekI3RSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFvRztBQUNwRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHVGQUFPOzs7O0FBSThDO0FBQ3RFLE9BQU8saUVBQWUsdUZBQU8sSUFBSSw4RkFBYyxHQUFHLDhGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZxQztBQUNmO0FBRVAsTUFBTSxHQUFHO0lBR3BCO1FBRlEsY0FBUyxHQUFnQixRQUFRLENBQUMsSUFBSSxDQUFDO1FBRzNDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSx3REFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QyxDQUFDO0NBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUbUI7QUFFc0Q7QUFDNUI7QUFDQTtBQUV2QyxNQUFNLElBQUssU0FBUSx3REFBUztJQVNqQyxZQUFZLFVBQXVCO1FBQ2pDLEtBQUssQ0FBQyxVQUFVLEVBQUUsS0FBSyxFQUFFLG1CQUFtQixDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLHdEQUFTLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztRQUN4RSxJQUFJLENBQUMsUUFBUSxHQUFHLDZFQUE0QixvQ0FBdUIsSUFBSSxFQUFFLENBQUM7UUFDMUUsSUFBSSxDQUFDLFVBQVU7WUFDYixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQVcsRUFBRSxFQUFRLEVBQUUsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzRSxJQUFJLENBQUMsSUFBSSxHQUFHLDZFQUE0QixzQ0FBd0IsSUFBSSxtREFBSyxDQUFDO1FBQzFFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSx3REFBUyxDQUM3QixJQUFJLENBQUMsSUFBSSxFQUNULE1BQU0sRUFDTixnQkFBZ0IsRUFDaEIsR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQ3JCLENBQUM7UUFDRixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksd0RBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxZQUFZLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSx3REFBUyxDQUNyQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFDbkIsS0FBSyxFQUNMLHVCQUF1QixDQUN4QixDQUFDO1FBQ0YsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLHdEQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFFRCxPQUFPLENBQUMsT0FBZTtRQUNyQixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxPQUFPLENBQUMsQ0FBQztRQUVyRSxJQUFJLEtBQUssS0FBSyxDQUFDLENBQUMsRUFBRTtZQUNoQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO1lBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztTQUMvQjthQUFNO1lBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO1lBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUM5QixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFDakMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1NBQ2pDO1FBQ0QsNkVBQTRCLHFDQUF3QixJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbkUsNkVBQTRCLHVDQUF5QixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEUsNkVBQTRCLHlDQUEwQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVELFVBQVUsQ0FBQyxPQUFlO1FBQ3hCLElBQUksQ0FBQyxRQUFRLEdBQUcsNkVBQTRCLG9DQUF1QixJQUFJLEVBQUUsQ0FBQztRQUMxRSxJQUFJLENBQUMsSUFBSSxHQUFHLDZFQUE0QixzQ0FBd0IsSUFBSSxtREFBSyxDQUFDO1FBQzFFLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLE9BQU8sQ0FBQyxDQUFDO1FBQ3JFLElBQUksS0FBSyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNwRCxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUMvQixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7U0FDakM7UUFDRCw2RUFBNEIscUNBQXdCLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNuRSw2RUFBNEIsdUNBQXlCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoRSw2RUFBNEIseUNBQTBCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBRUQsTUFBTTtRQUNKLElBQUksQ0FBQyxRQUFRLEdBQUcsNkVBQTRCLG9DQUF1QixJQUFJLEVBQUUsQ0FBQztRQUMxRSxJQUFJLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQzVDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDL0IsTUFBTSxVQUFVLEdBQUcsSUFBSSx3REFBUyxDQUM5QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFDbkIsTUFBTSxFQUNOLGFBQWEsRUFDYixHQUFHLENBQ0osQ0FBQztRQUVGLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEtBQUssQ0FBQztZQUM1QixJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxlQUFlLENBQUM7UUFFN0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUM3QixNQUFNLFFBQVEsR0FBRyxJQUFJLHdEQUFTLENBQzVCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEVBQzVCLEtBQUssRUFDTCxXQUFXLENBQ1osQ0FBQztZQUNGLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQy9DLE1BQU0sWUFBWSxHQUFHLElBQUksd0RBQVMsQ0FDaEMsUUFBUSxDQUFDLElBQUksRUFDYixHQUFHLEVBQ0gsaUJBQWlCLEVBQ2pCLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUNmLENBQUM7WUFDRixNQUFNLFVBQVUsR0FBRyxJQUFJLHdEQUFTLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsY0FBYyxDQUFDLENBQUM7WUFDdkUsTUFBTSxTQUFTLEdBQUcsSUFBSSx3REFBUyxDQUM3QixVQUFVLENBQUMsSUFBSSxFQUNmLFFBQVEsRUFDUix3QkFBd0IsRUFDeEIsR0FBRyxDQUNKLENBQUM7WUFDRixTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUMxRCxNQUFNLFNBQVMsR0FBRyxJQUFJLHdEQUFTLENBQzdCLFVBQVUsQ0FBQyxJQUFJLEVBQ2YsR0FBRyxFQUNILGFBQWEsRUFDYixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FDNUIsQ0FBQztZQUNGLE1BQU0sTUFBTSxHQUFHLElBQUksd0RBQVMsQ0FDMUIsVUFBVSxDQUFDLElBQUksRUFDZixRQUFRLEVBQ1IscUJBQXFCLEVBQ3JCLEdBQUcsQ0FDSixDQUFDO1lBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDdkQsTUFBTSxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDN0MsUUFBUSxJQUFJLFVBQVUsQ0FBQztZQUN2QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxRQUFRLEVBQUUsQ0FBQztZQUM1QyxNQUFNLGFBQWEsR0FBRyxJQUFJLHdEQUFTLENBQ2pDLFFBQVEsQ0FBQyxJQUFJLEVBQ2IsR0FBRyxFQUNILGtCQUFrQixFQUNsQixHQUFHLFVBQVUsRUFBRSxDQUNoQixDQUFDO1lBRUYsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLENBQUMsRUFBRTtnQkFDcEIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQztnQkFDekMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQzthQUNuQztZQUVELElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBQ3JCLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUM7Z0JBQzVDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7Z0JBQ3JDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQzlELDZFQUE0QixxQ0FBd0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ3BFO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxTQUFTO1FBQ1AsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNqRCxDQUFDO0NBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZKNkM7QUFFQTtBQUM0QjtBQUUzRCxNQUFNLGNBQWM7SUFJL0I7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLDZFQUE0Qiw0Q0FBMkIsSUFBSSxFQUFFLENBQUM7UUFDOUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLHdEQUFTLEVBQUUsQ0FBQztRQUNuQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSx3REFBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSx5QkFBeUIsQ0FBQyxDQUFDO0lBQ3ZHLENBQUM7SUFFRCxXQUFXLENBQUMsSUFBWTtRQUNwQixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzlCLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUMvQixDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzdCLDZFQUE0Qix5Q0FBMEIsTUFBTSxDQUFDLENBQUM7UUFDOUQsNkVBQTRCLHlDQUEwQixNQUFNLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRUQsYUFBYSxDQUFDLElBQVk7UUFDdEIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM5QixPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUM7UUFDSCw2RUFBNEIseUNBQTBCLE1BQU0sQ0FBQyxDQUFDO1FBQzlELDZFQUE0Qix5Q0FBMEIsTUFBTSxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVELFVBQVU7UUFDTixJQUFJLE9BQU8sQ0FBQztRQUNaLE1BQU0sY0FBYyxHQUFhLEVBQUUsQ0FBQztRQUNwQyxNQUFNLFlBQVksR0FBYSxFQUFFLENBQUM7UUFDbEMsTUFBTSx3QkFBd0IsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDLENBQUM7UUFDakgsTUFBTSxzQkFBc0IsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDLENBQUM7UUFDN0csd0JBQXdCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBRSxJQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDaEcsc0JBQXNCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBRSxJQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDNUYsNkVBQTRCLDJDQUEyQixFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxDQUFDLENBQUM7UUFDekcsT0FBTyxPQUFPLEdBQUcsRUFBRSxPQUFPLEVBQUUsY0FBYyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsQ0FBQztJQUN0RSxDQUFDO0lBRUQsTUFBTTtRQUNGLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQyxJQUFJLFFBQVEsR0FBVyxFQUFFLENBQUM7UUFDMUIsTUFBTSxhQUFhLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQztRQUN0QyxNQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQ2xDLE1BQU0sSUFBSSxHQUFXLG1EQUFLLENBQUM7UUFFM0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFO1lBQzlDLFFBQVEsR0FBRyxtREFBSyxDQUFDO1NBQ3BCO2FBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUU7WUFDNUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUU7Z0JBQ2QsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3JFLENBQUMsQ0FBQyxDQUFDO1NBQ047YUFDSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRTtZQUMxQixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRTtnQkFDZCxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDekUsQ0FBQyxDQUFDLENBQUM7U0FDTjthQUNJO1lBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUU7Z0JBQ2QsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQzdHLENBQUMsQ0FBQyxDQUFDO1NBQ047UUFDRCw2RUFBNEIseUNBQTBCLFFBQVEsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFRCxTQUFTO1FBQ0wsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksd0RBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxhQUFhLENBQUMsQ0FBQztRQUMvRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRzs7MERBRU8sQ0FBQztRQUNyRCxRQUFRLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDNUQsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUMxQyxDQUFDO0lBRUQsVUFBVTtRQUNOLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN4QyxRQUFRLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBRSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDL0QsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUN4QyxDQUFDO0lBRUQsUUFBUTtRQUNKLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQsWUFBWTtRQUNSLFlBQVksQ0FBQyxVQUFVLDBDQUEwQixDQUFDO1FBQ2xELFlBQVksQ0FBQyxVQUFVLHdDQUF5QixDQUFDO1FBQ2pELFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUN0QixDQUFDO0NBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEdzQjtBQUN1QjtBQUM0QjtBQUM1QjtBQUNBO0FBRTlDLFNBQVMsY0FBYztJQUNyQixNQUFNLFdBQVcsR0FBYSxFQUFFLENBQUM7SUFDakMsMkRBQWEsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1FBQ3JCLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUN2QyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNoQztJQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0gsT0FBTyxXQUFXLENBQUM7QUFDckIsQ0FBQztBQUVELFNBQVMsWUFBWTtJQUNuQixNQUFNLFNBQVMsR0FBYSxFQUFFLENBQUM7SUFDL0IsMkRBQWEsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1FBQ3JCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNuQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM1QjtJQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0gsT0FBTyxTQUFTLENBQUM7QUFDbkIsQ0FBQztBQUVNLE1BQU0sT0FBUSxTQUFRLHdEQUFTO0lBY3BDLFlBQVksVUFBd0I7UUFDbEMsS0FBSyxDQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBdUIsQ0FBQztRQUN6QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksdURBQWMsRUFBRSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUN2QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSx3REFBUyxDQUNuQyxJQUFJLENBQUMsSUFBSSxFQUNULEtBQUssRUFDTCxtQkFBbUIsQ0FDcEIsQ0FBQztRQUNGLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSx3REFBUyxDQUNoQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUMxQixLQUFLLEVBQ0wsaUJBQWlCLENBQ2xCLENBQUM7UUFDRixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksd0RBQVMsQ0FDOUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFDMUIsS0FBSyxFQUNMLGVBQWUsQ0FDaEIsQ0FBQztRQUNGLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSx3REFBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLGdCQUFnQixDQUFDLENBQUM7UUFDdkUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLHdEQUFTLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ2xFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSx3REFBUyxDQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFDZCxhQUFhLEVBQ2IsTUFBTSxFQUNOLFlBQVksQ0FDYixDQUFDO1FBQ0YsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLHdEQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSx3REFBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSx3REFBUyxDQUMvQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFDckIsUUFBUSxFQUNSLG1CQUFtQixFQUNuQixrQkFBa0IsQ0FDbkIsQ0FBQztRQUNGLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSx3REFBUyxDQUMvQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFDckIsUUFBUSxFQUNSLHlCQUF5QixFQUN6QixrQkFBa0IsQ0FDbkIsQ0FBQztJQUNKLENBQUM7SUFFRCxNQUFNO1FBQ0osTUFBTSxPQUFPLEdBQUcsNkVBQTRCLDBDQUEwQixDQUFDO1FBQ3ZFLE1BQU0sV0FBVyxHQUFHLGNBQWMsRUFBRSxDQUFDO1FBQ3JDLE1BQU0sU0FBUyxHQUFHLFlBQVksRUFBRSxDQUFDO1FBRWpDLE1BQU0sWUFBWSxHQUFHLElBQUksd0RBQVMsQ0FDaEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQ3ZCLElBQUksRUFDSixhQUFhLEVBQ2IsUUFBUSxDQUNULENBQUM7UUFDRixNQUFNLFVBQVUsR0FBRyxJQUFJLHdEQUFTLENBQzlCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUN2QixLQUFLLEVBQ0wsZ0JBQWdCLENBQ2pCLENBQUM7UUFDRixXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQ2xDLE1BQU0sV0FBVyxHQUFHLElBQUksd0RBQVMsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxVQUFVLENBQUMsQ0FBQztZQUN0RSxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRztvRUFDaUMsS0FBSywyQkFBMkIsSUFBSTs2REFDM0MsS0FBSyxLQUFLLElBQUk7c0JBQ3JELENBQUM7WUFDakIsSUFBSSxPQUFPLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQzdDLE1BQU0sRUFBRSxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLHdCQUF3QixDQUFDLENBQUM7Z0JBQ25FLEVBQXVCLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQzthQUN6QztRQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxVQUFVLEdBQUcsSUFBSSx3REFBUyxDQUM5QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFDckIsSUFBSSxFQUNKLGFBQWEsRUFDYixNQUFNLENBQ1AsQ0FBQztRQUNGLE1BQU0sUUFBUSxHQUFHLElBQUksd0RBQVMsQ0FDNUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQ3JCLEtBQUssRUFDTCxjQUFjLENBQ2YsQ0FBQztRQUNGLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDaEMsTUFBTSxXQUFXLEdBQUcsSUFBSSx3REFBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBQ3BFLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHO2tFQUVmLEtBQUssR0FBRyxXQUFXLENBQUMsTUFDdEIseUJBQXlCLElBQUk7NkRBRTNCLEtBQUssR0FBRyxXQUFXLENBQUMsTUFDdEIsS0FBSyxJQUFJO3NCQUNMLENBQUM7WUFDakIsSUFBSSxPQUFPLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQzNDLE1BQU0sRUFBRSxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLHdCQUF3QixDQUFDLENBQUM7Z0JBQ25FLEVBQXVCLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQzthQUN6QztRQUNILENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHOzs7a0JBR2YsQ0FBQztJQUNqQixDQUFDO0NBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0lxQjtBQUN3QjtBQUUvQixNQUFNLE1BQU8sU0FBUSx3REFBUztJQUd6QyxZQUFZLFVBQXVCO1FBQy9CLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksd0RBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQzNFLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBQ0QsZUFBZTtRQUNYLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRzs7Ozs7Ozs7O0NBUzdDLENBQUM7SUFDRSxDQUFDO0NBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QnFCO0FBQ3dCO0FBQ1I7QUFDRjtBQUVyQixNQUFNLE1BQU8sU0FBUSx3REFBUztJQUd6QyxZQUFZLFVBQXVCO1FBQy9CLEtBQUssQ0FBQyxVQUFVLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxzREFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksNENBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFFLENBQUM7SUFDckMsQ0FBQztDQUVKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2QwQztBQUNOO0FBQ1M7QUFFSDtBQUNOO0FBQ087QUFDVTtBQUNpQjtBQUV4RCxNQUFNLElBQUssU0FBUSx3REFBUztJQVF6QyxZQUFZLFVBQXVCO1FBQ2pDLEtBQUssQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLHNEQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxxREFBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksK0RBQWMsRUFBRSxDQUFDO1FBQzNDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSw0REFBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFVBQVU7WUFDYixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUM5QixDQUFDLEdBQVcsRUFBRSxFQUFRLEVBQUUsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsTUFBTSxFQUMxQyxDQUFDLENBQ0YsSUFBSSxDQUFDLENBQUM7UUFDVCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksc0RBQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELGlCQUFpQjtRQUNmLElBQUksT0FBZSxDQUFDO1FBQ3BCLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUMzQyxJQUFJLEtBQUssQ0FBQyxNQUFNLEVBQUU7Z0JBQ2hCLElBQWtCLEtBQUssQ0FBQyxNQUFPLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsRUFBRTtvQkFDL0QsT0FBTyxHQUFHLE1BQU0sQ0FBZSxLQUFLLENBQUMsTUFBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO29CQUNqRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ2xDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO29CQUMxQixJQUFJLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxFQUFFO3dCQUN4QixJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsQ0FBQzt3QkFDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7cUJBQ3JFO2lCQUNGO2dCQUNELElBQWtCLEtBQUssQ0FBQyxNQUFPLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsRUFBRTtvQkFDbEUsT0FBTyxHQUFHLE1BQU0sQ0FBZSxLQUFLLENBQUMsTUFBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO29CQUNqRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ3JDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO29CQUMxQixJQUFJLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxFQUFFO3dCQUN2QixJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsQ0FBQzt3QkFDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7cUJBQ3JFO2lCQUNGO2dCQUVELElBQWtCLEtBQUssQ0FBQyxNQUFPLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsRUFBRTtvQkFDakUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7aUJBQzlCO2dCQUVELElBQWtCLEtBQUssQ0FBQyxNQUFPLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBRTtvQkFDaEUsSUFBa0IsS0FBSyxDQUFDLE1BQU8sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxFQUFFO3dCQUNqRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQzt3QkFDaEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztxQkFDM0I7b0JBQ0QsSUFBa0IsS0FBSyxDQUFDLE1BQU8sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxFQUFFO3dCQUNqRSxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksRUFBRSxDQUFDO3dCQUNuQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsRUFBRSxDQUFDO3FCQUNsQztpQkFDRjthQUNGO1lBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLEVBQUU7Z0JBQ25DLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQzlCLENBQUMsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7WUFDNUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLG1EQUFLLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN6RCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFO1lBQ3ZELElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNaLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUNyQiw2RUFBNEIsd0NBQXlCLENBQ3RELENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO1lBQzVELElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDL0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsbURBQUssQ0FBQyxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7WUFDNUQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNuQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FDckIsNkVBQTRCLHdDQUF5QixDQUN0RCxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFO1lBQ2pFLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDN0IsSUFBSSxDQUFDLDZFQUE0Qix3Q0FBeUIsQ0FBQyxNQUFNLEVBQUU7Z0JBQ2pFLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDakM7WUFDRCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDWixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FDckIsNkVBQTRCLHdDQUF5QixDQUN0RCxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsSUFBSTtRQUNGLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQXlCLENBQUM7UUFDN0QsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUMxQixJQUFJLElBQUksS0FBSyxXQUFXLEVBQUU7WUFDeEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQzdCLDZFQUE0Qix3Q0FBeUIsSUFBSSxtREFBSyxDQUMvRCxDQUFDO1NBQ0g7UUFDRCxJQUFJLElBQUksS0FBSyxhQUFhLEVBQUU7WUFDMUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQy9CLDZFQUE0Qix3Q0FBeUIsSUFBSSxtREFBSyxDQUMvRCxDQUFDO1NBQ0g7SUFDSCxDQUFDO0NBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbElxQjtBQUV3QjtBQUNDO0FBQzJCO0FBQzVCO0FBRS9CLE1BQU0sTUFBTyxTQUFRLHdEQUFTO0lBT3pDLFlBQVksVUFBdUI7UUFDL0IsS0FBSyxDQUFDLFVBQVUsRUFBRSxLQUFLLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksd0RBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSx5QkFBeUIsQ0FBQyxDQUFDO1FBQzFFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUF3QixDQUFDO1FBQ3ZELElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUN0QyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7UUFDMUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFVBQVUsR0FBRyw2RUFBNEIsc0NBQXdCLElBQUcsbURBQUssQ0FBQztRQUMvRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksNERBQVMsRUFBRSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSx3REFBUyxFQUFFLENBQUM7UUFDbkMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksd0RBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUseUJBQXlCLENBQUMsQ0FBQztJQUN2RyxDQUFDO0lBRUQsTUFBTSxDQUFDLElBQVk7UUFDZixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMxQyxLQUFLLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLElBQUksS0FBSyxJQUFJLEVBQUUsRUFBRTtZQUNiLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDbEIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBRTtvQkFDM0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQzlCO1lBQ0wsQ0FBQyxDQUFDLENBQUM7WUFFSCxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtnQkFDOUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2dCQUNqQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSx3REFBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLGFBQWEsQ0FBQyxDQUFDO2dCQUMvRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRzs7NERBRUMsQ0FBQztnQkFDdkQsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUM1RCxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO2FBQ2pDO1NBQ0o7YUFBTTtZQUNILElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1NBQzFCO0lBQ0wsQ0FBQztJQUVELFVBQVU7UUFDTixJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDeEMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQy9ELFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDeEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUM1QixDQUFDO0NBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUQ2QztBQUVQO0FBRXhCLE1BQU0sSUFBSyxTQUFRLHdEQUFTO0lBaUJ2QyxZQUFZLFVBQXVCLEVBQUUsUUFBYztRQUMvQyxLQUFLLENBQUMsVUFBVSxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFRCxNQUFNLENBQUMsUUFBYztRQUNqQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksd0RBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLHdEQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLHlCQUF5QixDQUFDLENBQUM7UUFDbkcsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksd0RBQVMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxzQkFBc0IsRUFBRSxHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZILElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLHdEQUFTLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsdUJBQXVCLENBQUMsQ0FBQztRQUN0RyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsT0FBTyxRQUFRLENBQUMsS0FBSyxHQUFHLENBQUM7UUFDN0UsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksd0RBQVMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSx1QkFBdUIsRUFBRSxlQUFlLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQ3RJLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLHdEQUFTLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsdUJBQXVCLEVBQUUsR0FBRyxRQUFRLENBQUMsS0FBSyxNQUFNLENBQUMsQ0FBQztRQUM5SCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksd0RBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLHdEQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLHlCQUF5QixDQUFDLENBQUM7UUFDbkcsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksd0RBQVMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxzQkFBc0IsRUFBRSxHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZILElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLHdEQUFTLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsd0JBQXdCLEVBQUUsbUJBQW1CLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQzVJLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLHdEQUFTLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUseUJBQXlCLEVBQUUsWUFBWSxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUN4SSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSx3REFBUyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLHNCQUFzQixFQUFFLFNBQVMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFDNUgsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksd0RBQVMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSx1QkFBdUIsRUFBRSxVQUFVLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQ2hJLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLHdEQUFTLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUseUJBQXlCLEVBQUUsY0FBYyxRQUFRLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUMzSSxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksd0RBQVMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxzQkFBc0IsRUFBRSxXQUFXLFFBQVEsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQzdILElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxxREFBUyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxFQUFFLEdBQUcsUUFBUSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLElBQUksUUFBUSxDQUFDLEtBQUssS0FBSyxDQUFDLEVBQUU7WUFDM0MsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQztZQUN2QyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLGVBQWUsQ0FBQztTQUM3RDtRQUVELFFBQVEsQ0FBQyxLQUFLLEtBQUssQ0FBQyxFQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBRTdFLENBQUM7Q0FDSjs7Ozs7Ozs7Ozs7Ozs7OztBQ3RENkM7QUFFL0IsTUFBTSxTQUFVLFNBQVEsd0RBQVM7SUFDNUMsWUFBWSxVQUF1QjtRQUMvQixLQUFLLENBQUMsVUFBVSxFQUFFLFFBQVEsRUFBRSxxQkFBcUIsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUNwRSxDQUFDO0NBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTndCO0FBRWlEO0FBQzVCO0FBQ0E7QUFDcEI7QUFFMUIsTUFBTSxTQUFVLFNBQVEsd0RBQVM7SUFJN0IsWUFBWSxVQUF3QjtRQUNoQyxLQUFLLENBQUMsVUFBVSxFQUFFLEtBQUssRUFBRSxXQUFXLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksd0RBQVMsRUFBRSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxJQUFJLEdBQUcsNkVBQTRCLHdDQUF5QjtZQUNyRSxtREFBSyxDQUFDO1FBQ0YsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxXQUFXLENBQUMsSUFBYTtRQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSw2RUFBNEIsd0NBQXlCLElBQUksbURBQUssQ0FBQztRQUNuRixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksd0RBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO1FBRTVFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBVSxFQUFFLEdBQVcsRUFBRSxFQUFFO1lBQzFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSw2Q0FBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3hELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLEVBQUUsR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQzlELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELFFBQVEsQ0FBQyxJQUFjO1FBQ25CLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQixDQUFDO0NBQ0o7QUFFRCxpRUFBZSxTQUFTLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ25DbEIsTUFBTSxLQUFLLEdBQUc7SUFDakI7UUFDSSxFQUFFLEVBQUUsQ0FBQztRQUNMLElBQUksRUFBRSx1QkFBdUI7UUFDN0IsTUFBTSxFQUFFLGlCQUFpQjtRQUN6QixPQUFPLEVBQUUsWUFBWTtRQUNyQixJQUFJLEVBQUUsTUFBTTtRQUNaLE9BQU8sRUFBRSxJQUFJO1FBQ2IsR0FBRyxFQUFFLE1BQU07UUFDWCxLQUFLLEVBQUUsT0FBTztRQUNkLEtBQUssRUFBRSxLQUFLO1FBQ1osS0FBSyxFQUFFLHNFQUFzRTtRQUM3RSxLQUFLLEVBQUUsQ0FBQztRQUNSLE9BQU8sRUFBRSxJQUFJO1FBQ2IsTUFBTSxFQUFFLENBQUM7S0FDWjtJQUNEO1FBQ0ksRUFBRSxFQUFFLENBQUM7UUFDTCxJQUFJLEVBQUUsdUJBQXVCO1FBQzdCLE1BQU0sRUFBRSxZQUFZO1FBQ3BCLE9BQU8sRUFBRSxTQUFTO1FBQ2xCLElBQUksRUFBRSxNQUFNO1FBQ1osT0FBTyxFQUFFLElBQUk7UUFDYixHQUFHLEVBQUUsTUFBTTtRQUNYLEtBQUssRUFBRSxLQUFLO1FBQ1osS0FBSyxFQUFFLEtBQUs7UUFDWixLQUFLLEVBQUUsd0NBQXdDO1FBQy9DLEtBQUssRUFBRSxDQUFDO1FBQ1IsT0FBTyxFQUFFLElBQUk7UUFDYixNQUFNLEVBQUUsQ0FBQztLQUNaO0lBQ0Q7UUFDSSxFQUFFLEVBQUUsQ0FBQztRQUNMLElBQUksRUFBRSwyQkFBMkI7UUFDakMsTUFBTSxFQUFFLGFBQWE7UUFDckIsT0FBTyxFQUFFLFVBQVU7UUFDbkIsSUFBSSxFQUFFLE1BQU07UUFDWixPQUFPLEVBQUUsSUFBSTtRQUNiLEdBQUcsRUFBRSxNQUFNO1FBQ1gsS0FBSyxFQUFFLEtBQUs7UUFDWixLQUFLLEVBQUUsT0FBTztRQUNkLEtBQUssRUFBRSw0Q0FBNEM7UUFDbkQsS0FBSyxFQUFFLENBQUM7UUFDUixPQUFPLEVBQUUsSUFBSTtRQUNiLE1BQU0sRUFBRSxDQUFDO0tBQ1o7SUFDRDtRQUNJLEVBQUUsRUFBRSxDQUFDO1FBQ0wsSUFBSSxFQUFFLDBCQUEwQjtRQUNoQyxNQUFNLEVBQUUsYUFBYTtRQUNyQixPQUFPLEVBQUUsU0FBUztRQUNsQixJQUFJLEVBQUUsTUFBTTtRQUNaLE9BQU8sRUFBRSxJQUFJO1FBQ2IsR0FBRyxFQUFFLE1BQU07UUFDWCxLQUFLLEVBQUUsTUFBTTtRQUNiLEtBQUssRUFBRSxLQUFLO1FBQ1osS0FBSyxFQUFFLDJDQUEyQztRQUNsRCxLQUFLLEVBQUUsQ0FBQztRQUNSLE9BQU8sRUFBRSxJQUFJO1FBQ2IsTUFBTSxFQUFFLENBQUM7S0FDWjtJQUNEO1FBQ0ksRUFBRSxFQUFFLENBQUM7UUFDTCxJQUFJLEVBQUUsZ0NBQWdDO1FBQ3RDLE1BQU0sRUFBRSxXQUFXO1FBQ25CLE9BQU8sRUFBRSxRQUFRO1FBQ2pCLElBQUksRUFBRSxNQUFNO1FBQ1osT0FBTyxFQUFFLElBQUk7UUFDYixHQUFHLEVBQUUsTUFBTTtRQUNYLEtBQUssRUFBRSxLQUFLO1FBQ1osS0FBSyxFQUFFLE9BQU87UUFDZCxLQUFLLEVBQUUsZ0NBQWdDO1FBQ3ZDLEtBQUssRUFBRSxDQUFDO1FBQ1IsT0FBTyxFQUFFLElBQUk7UUFDYixNQUFNLEVBQUUsQ0FBQztLQUNaO0lBQ0Q7UUFDSSxFQUFFLEVBQUUsQ0FBQztRQUNMLElBQUksRUFBRSxjQUFjO1FBQ3BCLE1BQU0sRUFBRSxXQUFXO1FBQ25CLE9BQU8sRUFBRSxXQUFXO1FBQ3BCLElBQUksRUFBRSxNQUFNO1FBQ1osT0FBTyxFQUFFLElBQUk7UUFDYixHQUFHLEVBQUUsS0FBSztRQUNWLEtBQUssRUFBRSxLQUFLO1FBQ1osS0FBSyxFQUFFLEtBQUs7UUFDWixLQUFLLEVBQUUsZ0NBQWdDO1FBQ3ZDLEtBQUssRUFBRSxDQUFDO1FBQ1IsT0FBTyxFQUFFLElBQUk7UUFDYixNQUFNLEVBQUUsQ0FBQztLQUNaO0lBQ0Q7UUFDSSxFQUFFLEVBQUUsQ0FBQztRQUNMLElBQUksRUFBRSxzQkFBc0I7UUFDNUIsTUFBTSxFQUFFLHFCQUFxQjtRQUM3QixPQUFPLEVBQUUsU0FBUztRQUNsQixJQUFJLEVBQUUsTUFBTTtRQUNaLE9BQU8sRUFBRSxJQUFJO1FBQ2IsR0FBRyxFQUFFLE1BQU07UUFDWCxLQUFLLEVBQUUsT0FBTztRQUNkLEtBQUssRUFBRSxLQUFLO1FBQ1osS0FBSyxFQUFFLHVDQUF1QztRQUM5QyxLQUFLLEVBQUUsQ0FBQztRQUNSLE9BQU8sRUFBRSxJQUFJO1FBQ2IsTUFBTSxFQUFFLENBQUM7S0FDWjtJQUNEO1FBQ0ksRUFBRSxFQUFFLENBQUM7UUFDTCxJQUFJLEVBQUUsOEJBQThCO1FBQ3BDLE1BQU0sRUFBRSwyQ0FBMkM7UUFDbkQsT0FBTyxFQUFFLFNBQVM7UUFDbEIsSUFBSSxFQUFFLE1BQU07UUFDWixPQUFPLEVBQUUsSUFBSTtRQUNiLEdBQUcsRUFBRSxNQUFNO1FBQ1gsS0FBSyxFQUFFLEtBQUs7UUFDWixLQUFLLEVBQUUsT0FBTztRQUNkLEtBQUssRUFBRSwrQ0FBK0M7UUFDdEQsS0FBSyxFQUFFLENBQUM7UUFDUixPQUFPLEVBQUUsSUFBSTtRQUNiLE1BQU0sRUFBRSxDQUFDO0tBQ1o7SUFDRDtRQUNJLEVBQUUsRUFBRSxDQUFDO1FBQ0wsSUFBSSxFQUFFLE9BQU87UUFDYixNQUFNLEVBQUUsWUFBWTtRQUNwQixPQUFPLEVBQUUsUUFBUTtRQUNqQixJQUFJLEVBQUUsTUFBTTtRQUNaLE9BQU8sRUFBRSxJQUFJO1FBQ2IsR0FBRyxFQUFFLE1BQU07UUFDWCxLQUFLLEVBQUUsTUFBTTtRQUNiLEtBQUssRUFBRSxLQUFLO1FBQ1osS0FBSyxFQUFFLHdCQUF3QjtRQUMvQixLQUFLLEVBQUUsQ0FBQztRQUNSLE9BQU8sRUFBRSxJQUFJO1FBQ2IsTUFBTSxFQUFFLENBQUM7S0FDWjtJQUNEO1FBQ0ksRUFBRSxFQUFFLENBQUM7UUFDTCxJQUFJLEVBQUUsaUJBQWlCO1FBQ3ZCLE1BQU0sRUFBRSxVQUFVO1FBQ2xCLE9BQU8sRUFBRSxXQUFXO1FBQ3BCLElBQUksRUFBRSxNQUFNO1FBQ1osT0FBTyxFQUFFLElBQUk7UUFDYixHQUFHLEVBQUUsTUFBTTtRQUNYLEtBQUssRUFBRSxLQUFLO1FBQ1osS0FBSyxFQUFFLEtBQUs7UUFDWixLQUFLLEVBQUUsa0NBQWtDO1FBQ3pDLEtBQUssRUFBRSxDQUFDO1FBQ1IsT0FBTyxFQUFFLElBQUk7UUFDYixNQUFNLEVBQUUsQ0FBQztLQUNaO0lBQ0Q7UUFDSSxFQUFFLEVBQUUsRUFBRTtRQUNOLElBQUksRUFBRSxrQ0FBa0M7UUFDeEMsTUFBTSxFQUFFLFVBQVU7UUFDbEIsT0FBTyxFQUFFLFdBQVc7UUFDcEIsSUFBSSxFQUFFLE1BQU07UUFDWixPQUFPLEVBQUUsSUFBSTtRQUNiLEdBQUcsRUFBRSxNQUFNO1FBQ1gsS0FBSyxFQUFFLEtBQUs7UUFDWixLQUFLLEVBQUUsS0FBSztRQUNaLEtBQUssRUFBRSxtREFBbUQ7UUFDMUQsS0FBSyxFQUFFLENBQUM7UUFDUixPQUFPLEVBQUUsSUFBSTtRQUNiLE1BQU0sRUFBRSxDQUFDO0tBQ1o7SUFDRDtRQUNJLEVBQUUsRUFBRSxFQUFFO1FBQ04sSUFBSSxFQUFFLE9BQU87UUFDYixNQUFNLEVBQUUsbUJBQW1CO1FBQzNCLE9BQU8sRUFBRSxRQUFRO1FBQ2pCLElBQUksRUFBRSxNQUFNO1FBQ1osT0FBTyxFQUFFLElBQUk7UUFDYixHQUFHLEVBQUUsS0FBSztRQUNWLEtBQUssRUFBRSxNQUFNO1FBQ2IsS0FBSyxFQUFFLEtBQUs7UUFDWixLQUFLLEVBQUUsd0JBQXdCO1FBQy9CLEtBQUssRUFBRSxDQUFDO1FBQ1IsT0FBTyxFQUFFLEtBQUs7UUFDZCxNQUFNLEVBQUUsQ0FBQztLQUNaO0NBQ0osQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDckxGLG1DQUFtQztBQUNuQyxvQ0FBb0M7QUFFcEMsd0VBQXdFO0FBQ3hFLHNEQUFzRDtBQUN0RCwwQ0FBMEM7QUFDMUMsMENBQTBDO0FBQzFDLE1BQU07QUFFTixlQUFlO0FBQ2YsMkJBQTJCO0FBQzNCLE1BQU07QUFDTixJQUFJO0FBRVcsTUFBTSxTQUFTO0lBRTFCLFlBQVksVUFBd0IsRUFBRSxPQUFPLEdBQUcsS0FBSyxFQUFFLFNBQVMsR0FBRyxFQUFFLEVBQUUsT0FBTyxHQUFHLEVBQUU7UUFDL0UsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNoRCxPQUFPLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUM5QixPQUFPLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQztRQUM5QixJQUFJLFVBQVUsRUFBRTtZQUNaLFVBQVUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDOUI7UUFDRCxJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztJQUN4QixDQUFDO0lBRUQsT0FBTztRQUNILElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDdkIsQ0FBQztDQUNKOzs7Ozs7Ozs7Ozs7Ozs7QUNuQkQsTUFBTSxZQUFZO0lBRWQsTUFBTSxDQUFDLGVBQWUsQ0FDbEIsT0FBeUIsRUFDekIsSUFBbUM7UUFFbkMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFRCxNQUFNLENBQUMsZUFBZSxDQUFDLElBQXNCO1FBQ3pDLElBQUksWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUM1QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3pEO1FBQ0QsT0FBTyxFQUFFLENBQUM7SUFDZCxDQUFDO0NBQ0o7QUFFeUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzNCMUM7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7O0FDQXdCO0FBQ0Y7QUFFdEIsTUFBTSxHQUFHLEdBQUcsSUFBSSw0Q0FBRyxFQUFFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29tcG9uZW50cy9jYXJ0L2NhcnQuY3NzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL2ZpbHRlcnMvZmlsdGVycy5jc3MiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jc3MiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jc3MiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5jc3MiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvd2luZWNhcmRzL3dpbmVjYXJkcy5jc3MiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2dsb2JhbC5jc3MiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL2NhcnQvY2FydC5jc3M/ZDI4NiIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29tcG9uZW50cy9maWx0ZXJzL2ZpbHRlcnMuY3NzP2UyZDkiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jc3M/Yjc4OSIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNzcz9mN2ZhIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2guY3NzP2Q0ZmQiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvd2luZWNhcmRzL3dpbmVjYXJkcy5jc3M/NzMwMyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvZ2xvYmFsLmNzcz9kM2JjIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2FwcC50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29tcG9uZW50cy9jYXJ0L2NhcnQudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvZmlsdGVycy9maWx0ZXJTZXR0aW5ncy50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29tcG9uZW50cy9maWx0ZXJzL2ZpbHRlcnMudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL3BhZ2UudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29tcG9uZW50cy93aW5lY2FyZHMvY2FyZC50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29tcG9uZW50cy93aW5lY2FyZHMvd2luZWNhcmQtYnRuLnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL3dpbmVjYXJkcy93aW5lY2FyZHMudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbnN0YW50cy9nb29kcy50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvdXRpbHMvY29tcG9uZW50LnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy91dGlscy9sb2NhbHN0b3JhZ2UudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29ubGluZS1zdG9yZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29ubGluZS1zdG9yZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29ubGluZS1zdG9yZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29ubGluZS1zdG9yZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29ubGluZS1zdG9yZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxyXFxuICAtLWJhY2tncm91bmQ6IGJsYWNrO1xcclxcbiAgLS1yZWQ6ICNkNjAwMDA7XFxyXFxuICAtLWdvbGQ6ICNmZGM4NTQ7XFxyXFxuIH1cXHJcXG5cXHJcXG4uY2FydC1wb3B1cCB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDEwdmg7XFxyXFxuICBsZWZ0OiAxMHZ3O1xcclxcbiAgd2lkdGg6IDgwdnc7XFxyXFxuICBoZWlnaHQ6IDgwdmg7XFxyXFxuICBwYWRkaW5nOiAyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gIHotaW5kZXg6IDEwMTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1nb2xkKTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCAzMHB4IHZhcigtLWdvbGQpO1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcnQtcG9wdXAuYWN0aXZlIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FydC1wb3B1cF9fY29udGFpbmVyIHtcXHJcXG4gIGhlaWdodDogODAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogMWVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2UtcG9wdXAge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBwYWRkaW5nOiAwLjFlbSAwLjVlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHJpZ2h0OiAxZW07XFxyXFxuICB0b3A6IDFlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IDAuMnM7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZS1wb3B1cDpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSwgMS4xKTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdvbGQpO1xcclxcbiAgYm94LXNoYWRvdzogMnB4IDJweCAxNXB4IHZhcigtLWdvbGQpO1xcclxcbiAgdHJhbnNpdGlvbjogMC4ycztcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlLXBvcHVwOmFjdGl2ZSB7XFxyXFxuICB0cmFuc2Zvcm06IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jYXJ0LWl0ZW0ge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxyXFxuIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiBnYXA6IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcnRfX251bWJlcntcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDAuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FydF9fZXJyb3Ige1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAxMHZoO1xcclxcbiAgbGVmdDogMTB2dztcXHJcXG4gIHdpZHRoOiA4MHZ3O1xcclxcbiAgaGVpZ2h0OiA4MHZoO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDJlbTtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpO1xcclxcbiAgY29sb3I6IHZhcigtLWdvbGQpO1xcclxcbiAgei1pbmRleDogMTAwO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9jYXJ0L2NhcnQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxlQUFlO0NBQ2hCOztBQUVEO0VBQ0UsZUFBZTtFQUNmLFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGdDQUFnQztFQUNoQyxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsUUFBUTtFQUNSLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsNkJBQTZCO0VBQzdCLG9DQUFvQztFQUNwQyxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtDQUFrQztDQUNuQyx1QkFBdUI7Q0FDdkIsbUJBQW1CO0NBQ25CLFFBQVE7QUFDVDs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGVBQWU7RUFDZixTQUFTO0VBQ1QsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxyXFxuICAtLWJhY2tncm91bmQ6IGJsYWNrO1xcclxcbiAgLS1yZWQ6ICNkNjAwMDA7XFxyXFxuICAtLWdvbGQ6ICNmZGM4NTQ7XFxyXFxuIH1cXHJcXG5cXHJcXG4uY2FydC1wb3B1cCB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDEwdmg7XFxyXFxuICBsZWZ0OiAxMHZ3O1xcclxcbiAgd2lkdGg6IDgwdnc7XFxyXFxuICBoZWlnaHQ6IDgwdmg7XFxyXFxuICBwYWRkaW5nOiAyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gIHotaW5kZXg6IDEwMTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1nb2xkKTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCAzMHB4IHZhcigtLWdvbGQpO1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcnQtcG9wdXAuYWN0aXZlIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FydC1wb3B1cF9fY29udGFpbmVyIHtcXHJcXG4gIGhlaWdodDogODAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogMWVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2UtcG9wdXAge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBwYWRkaW5nOiAwLjFlbSAwLjVlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHJpZ2h0OiAxZW07XFxyXFxuICB0b3A6IDFlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IDAuMnM7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZS1wb3B1cDpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSwgMS4xKTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdvbGQpO1xcclxcbiAgYm94LXNoYWRvdzogMnB4IDJweCAxNXB4IHZhcigtLWdvbGQpO1xcclxcbiAgdHJhbnNpdGlvbjogMC4ycztcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlLXBvcHVwOmFjdGl2ZSB7XFxyXFxuICB0cmFuc2Zvcm06IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jYXJ0LWl0ZW0ge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxyXFxuIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiBnYXA6IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcnRfX251bWJlcntcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDAuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FydF9fZXJyb3Ige1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAxMHZoO1xcclxcbiAgbGVmdDogMTB2dztcXHJcXG4gIHdpZHRoOiA4MHZ3O1xcclxcbiAgaGVpZ2h0OiA4MHZoO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDJlbTtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpO1xcclxcbiAgY29sb3I6IHZhcigtLWdvbGQpO1xcclxcbiAgei1pbmRleDogMTAwO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcbi5maWx0ZXJzLWZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGdhcDogMWVtO1xcclxcbiAgd2lkdGg6IDgwdnc7XFxyXFxuICBtYXJnaW46IDFlbSBhdXRvO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggdmFyKC0tZ29sZCk7XFxyXFxuICBjb2xvcjogdmFyKC0tZ29sZCk7XFxyXFxuICBwYWRkaW5nOiAxZW07XFxyXFxufVxcclxcblxcclxcbi5maWx0ZXJzLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBnYXA6IDFlbTtcXHJcXG59XFxyXFxuLmZpbHRlci1uYW1lIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxufVxcclxcbi5jb3VudHJ5LWZpbHRlciB7XFxyXFxuICBncmlkLWFyZWE6IFxcXCJmaWx0ZXItY291bnRyeVxcXCI7XFxyXFxufVxcclxcbi5jb2xvci1maWx0ZXIge1xcclxcbiAgZ3JpZC1hcmVhOiBcXFwiZmlsdGVyLWNvbG9yXFxcIjtcXHJcXG59XFxyXFxuXFxyXFxuLnNvcnQge1xcclxcbiAgZ3JpZC1hcmVhOiBcXFwic2VsZWN0XFxcIjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bnMtcGFuZWwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1zZWxmOiBzdGFydDtcXHJcXG4gIGdhcDogMWVtO1xcclxcbiAgcGFkZGluZzogMWVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXQge1xcclxcbiAgZ3JpZC1hcmVhOiBcXFwiYnV0dG9uXFxcIjtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2V0LWZpbHRlcnMge1xcclxcbiAgZ3JpZC1hcmVhOiBcXFwiYnV0dG9uXFxcIjtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG59XFxyXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwO1xcclxcbiAgLXdlYmtpdC1hcHBlYXJlbmNlOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrYm94IHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEuNWVtO1xcclxcbiAgcGFkZGluZy1sZWZ0OiAyLjVlbTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXHJcXG4uY2hlY2tib3ggbGFiZWw6OmJlZm9yZSB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBoZWlnaHQ6IDI0cHg7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgd2lkdGg6IDI0cHg7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxufVxcclxcblxcclxcbi5jaGVja2JveCBsYWJlbDo6YmVmb3JlIHtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWdvbGQpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgY29sb3I6IHZhcigtLWdvbGQpO1xcclxcbiAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICBmb250LXNpemU6IDEuMmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2tib3ggaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkICsgbGFiZWw6OmJlZm9yZSB7XFxyXFxuICBib3JkZXItY29sb3I6IHZhcigtLWdvbGQpO1xcclxcbiAgY29udGVudDogXFxcIlxcXFwyNzE0XFxcIjtcXHJcXG59XFxyXFxubGFiZWwge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbnNlbGVjdCB7XFxyXFxuICBhcHBlYXJhbmNlOiBub25lO1xcclxcbiAgb3V0bGluZTogMDtcXHJcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxuICBmbGV4OiAxO1xcclxcbiAgcGFkZGluZzogMCAxZW07XFxyXFxuICBjb2xvcjogdmFyKC0tZ29sZCk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBwYWRkaW5nOiA2cHg7XFxyXFxuICBmb250LXNpemU6IDE3cHg7XFxyXFxuICBtYXgtd2lkdGg6IDIwZW07XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1nb2xkKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMzBweCB2YXIoLS1nb2xkKTtcXHJcXG59XFxyXFxuLyogUmVtb3ZlIElFIGFycm93ICovXFxyXFxuc2VsZWN0OjotbXMtZXhwYW5kIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcbi8qIEN1c3RvbSBTZWxlY3Qgd3JhcHBlciAqL1xcclxcbnNlbGVjdCB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgbWF4LXdpZHRoOiAyMGVtO1xcclxcbiAgaGVpZ2h0OiAyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxyXFxuICBmb250LXNpemU6IDE3cHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1nb2xkKTtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCAzMHB4IHZhcigtLWdvbGQpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG4vKiBBcnJvdyAqL1xcclxcbnNlbGVjdDo6YWZ0ZXIge1xcclxcbiAgY29udGVudDogXFxcIlxcXFwyNUJDXFxcIjtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgcGFkZGluZzogMWVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ29sZCk7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjI1cyBhbGwgZWFzZTtcXHJcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbn1cXHJcXG4vKiBUcmFuc2l0aW9uICovXFxyXFxuc2VsZWN0OmhvdmVyOjphZnRlciB7XFxyXFxuICBjb2xvcjogI2YzOWMxMjtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2V0LWZpbHRlcnMge1xcclxcbiAgd2lkdGg6IDEwZW07XFxyXFxuICBoZWlnaHQ6IDNlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAwLjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogT3RoZXIgc3R5bGVzKi9cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9maWx0ZXJzL2ZpbHRlcnMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLDhCQUE4QjtFQUM5QixRQUFRO0VBQ1IsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixvQ0FBb0M7RUFDcEMsa0JBQWtCO0VBQ2xCLGdDQUFnQztFQUNoQyxrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixRQUFRO0FBQ1Y7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixRQUFRO0VBQ1IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIsYUFBYTtBQUNmOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUsZUFBZTtFQUNmLFlBQVk7RUFDWixPQUFPO0VBQ1Asa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixPQUFPO0VBQ1AsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixtQ0FBbUM7RUFDbkMsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixZQUFZO0VBQ1osZUFBZTtFQUNmLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLGdDQUFnQztBQUNsQztBQUNBLG9CQUFvQjtBQUNwQjtFQUNFLGFBQWE7QUFDZjtBQUNBLDBCQUEwQjtBQUMxQjtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsZUFBZTtFQUNmLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLG1DQUFtQztFQUNuQyxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3QixnQ0FBZ0M7RUFDaEMsa0JBQWtCO0FBQ3BCO0FBQ0EsVUFBVTtBQUNWO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sUUFBUTtFQUNSLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IsMEJBQTBCO0VBQzFCLG9CQUFvQjtBQUN0QjtBQUNBLGVBQWU7QUFDZjtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBRUEsZ0JBQWdCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuLmZpbHRlcnMtZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgZ2FwOiAxZW07XFxyXFxuICB3aWR0aDogODB2dztcXHJcXG4gIG1hcmdpbjogMWVtIGF1dG87XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxZW07XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMjBweCB2YXIoLS1nb2xkKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1nb2xkKTtcXHJcXG4gIHBhZGRpbmc6IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmZpbHRlcnMtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogMWVtO1xcclxcbn1cXHJcXG4uZmlsdGVyLW5hbWUge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG59XFxyXFxuLmNvdW50cnktZmlsdGVyIHtcXHJcXG4gIGdyaWQtYXJlYTogXFxcImZpbHRlci1jb3VudHJ5XFxcIjtcXHJcXG59XFxyXFxuLmNvbG9yLWZpbHRlciB7XFxyXFxuICBncmlkLWFyZWE6IFxcXCJmaWx0ZXItY29sb3JcXFwiO1xcclxcbn1cXHJcXG5cXHJcXG4uc29ydCB7XFxyXFxuICBncmlkLWFyZWE6IFxcXCJzZWxlY3RcXFwiO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRucy1wYW5lbCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xcclxcbiAgZ2FwOiAxZW07XFxyXFxuICBwYWRkaW5nOiAxZW07XFxyXFxufVxcclxcblxcclxcbi5yZXNldCB7XFxyXFxuICBncmlkLWFyZWE6IFxcXCJidXR0b25cXFwiO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXQtZmlsdGVycyB7XFxyXFxuICBncmlkLWFyZWE6IFxcXCJidXR0b25cXFwiO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbn1cXHJcXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxyXFxuICAtd2Via2l0LWFwcGVhcmVuY2U6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2tib3gge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMS41ZW07XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDIuNWVtO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdLFxcclxcbi5jaGVja2JveCBsYWJlbDo6YmVmb3JlIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGhlaWdodDogMjRweDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB3aWR0aDogMjRweDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrYm94IGxhYmVsOjpiZWZvcmUge1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZ29sZCk7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICBjb2xvcjogdmFyKC0tZ29sZCk7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gIGZvbnQtc2l6ZTogMS4yZW07XFxyXFxufVxcclxcblxcclxcbi5jaGVja2JveCBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQgKyBsYWJlbDo6YmVmb3JlIHtcXHJcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZ29sZCk7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXDI3MTRcXFwiO1xcclxcbn1cXHJcXG5sYWJlbCB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuc2VsZWN0IHtcXHJcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiAwO1xcclxcbiAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG4gIGZsZXg6IDE7XFxyXFxuICBwYWRkaW5nOiAwIDFlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1nb2xkKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDZweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTdweDtcXHJcXG4gIG1heC13aWR0aDogMjBlbTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWdvbGQpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCAzMHB4IHZhcigtLWdvbGQpO1xcclxcbn1cXHJcXG4vKiBSZW1vdmUgSUUgYXJyb3cgKi9cXHJcXG5zZWxlY3Q6Oi1tcy1leHBhbmQge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuLyogQ3VzdG9tIFNlbGVjdCB3cmFwcGVyICovXFxyXFxuc2VsZWN0IHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBtYXgtd2lkdGg6IDIwZW07XFxyXFxuICBoZWlnaHQ6IDJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXHJcXG4gIGZvbnQtc2l6ZTogMTdweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWdvbGQpO1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDMwcHggdmFyKC0tZ29sZCk7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcbi8qIEFycm93ICovXFxyXFxuc2VsZWN0OjphZnRlciB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXDI1QkNcXFwiO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBwYWRkaW5nOiAxZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1nb2xkKTtcXHJcXG4gIHRyYW5zaXRpb246IDAuMjVzIGFsbCBlYXNlO1xcclxcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxufVxcclxcbi8qIFRyYW5zaXRpb24gKi9cXHJcXG5zZWxlY3Q6aG92ZXI6OmFmdGVyIHtcXHJcXG4gIGNvbG9yOiAjZjM5YzEyO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXQtZmlsdGVycyB7XFxyXFxuICB3aWR0aDogMTBlbTtcXHJcXG4gIGhlaWdodDogM2VtO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDAuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBPdGhlciBzdHlsZXMqL1xcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5mb290ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xcclxcbiAgcGFkZGluZzogMWVtIDA7XFxyXFxuICBjb2xvcjogdmFyKC0tZ29sZCk7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXJfd3JhcHBlciB7XFxyXFxuICBtYXgtd2lkdGg6IDgwdnc7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucnNzIHtcXHJcXG4gIHdpZHRoOiAxMDBweDtcXHJcXG4gIGZpbGw6IHZhcigtLWdvbGQpO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLG9DQUFvQztFQUNwQyxjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmZvb3RlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XFxyXFxuICBwYWRkaW5nOiAxZW0gMDtcXHJcXG4gIGNvbG9yOiB2YXIoLS1nb2xkKTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlcl93cmFwcGVyIHtcXHJcXG4gIG1heC13aWR0aDogODB2dztcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5yc3Mge1xcclxcbiAgd2lkdGg6IDEwMHB4O1xcclxcbiAgZmlsbDogdmFyKC0tZ29sZCk7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5oZWFkZXIge1xcclxcbiAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixvQ0FBb0M7QUFDdENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmhlYWRlciB7XFxyXFxuICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDFlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcclxcbiAgLS1iYWNrZ3JvdW5kOiBibGFjaztcXHJcXG4gIC0tcmVkOiAjZDYwMDAwO1xcclxcbiAgLS1nb2xkOiAjZmRjODU0O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLWNvbnRhaW5lcl9faW5wdXQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxyXFxuICBwYWRkaW5nOiA2cHg7XFxyXFxuICBmb250LXNpemU6IDE3cHg7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1nb2xkKTtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCAzMHB4IHZhcigtLWdvbGQpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLWNvbnRhaW5lcl9faW5wdXQ6Zm9jdXMge1xcclxcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDMwcHggdmFyKC0tZ29sZCk7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyxZQUFZO0VBQ1osZUFBZTtFQUNmLDZCQUE2QjtFQUM3QixnQ0FBZ0M7RUFDaEMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usc0NBQXNDO0VBQ3RDLGFBQWE7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxyXFxuICAtLWJhY2tncm91bmQ6IGJsYWNrO1xcclxcbiAgLS1yZWQ6ICNkNjAwMDA7XFxyXFxuICAtLWdvbGQ6ICNmZGM4NTQ7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtY29udGFpbmVyX19pbnB1dCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXHJcXG4gIHBhZGRpbmc6IDZweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTdweDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWdvbGQpO1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDMwcHggdmFyKC0tZ29sZCk7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtY29udGFpbmVyX19pbnB1dDpmb2N1cyB7XFxyXFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMzBweCB2YXIoLS1nb2xkKTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXHJcXG4gIC0tYmFja2dyb3VuZDogIzE0MGEwYTtcXHJcXG4gIC0tcmVkOiAjZDYwMDAwO1xcclxcbiAgLS1nb2xkOiAjZmRjODU0O1xcclxcbiB9XFxyXFxuXFxyXFxuIC53aW5lY2FyZHN7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBtYXgtd2lkdGg6IDgwcmVtO1xcclxcbiAgcGFkZGluZzogMWVtIDA7XFxyXFxufVxcclxcblxcclxcbi53aW5lY2FyZHMtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogM2VtO1xcclxcbn1cXHJcXG5cXHJcXG4ud2luZWNhcmRzX19pdGVtIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAyMGVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcclxcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXHJcXG4gIC13ZWJraXQtcGVyc3BlY3RpdmU6IDEwMDBweDtcXHJcXG4gICAgcGVyc3BlY3RpdmU6IDEwMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLndpbmVjYXJkcy1mYWNlLFxcclxcbi53aW5lY2FyZHMtYmFjayB7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDEycHggMCB2YXIoLS1nb2xkKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIC43cyBjdWJpYy1iZXppZXIoMC40LCAwLjIsIDAuMiwgMSk7XFxyXFxuICB0cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAuN3MgY3ViaWMtYmV6aWVyKDAuNCwgMC4yLCAwLjIsIDEpO1xcclxcbiAgLW8tdHJhbnNpdGlvbjogdHJhbnNmb3JtIC43cyBjdWJpYy1iZXppZXIoMC40LCAwLjIsIDAuMiwgMSk7XFxyXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjdzIGN1YmljLWJlemllcigwLjQsIDAuMiwgMC4yLCAxKTtcXHJcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuN3MgY3ViaWMtYmV6aWVyKDAuNCwgMC4yLCAwLjIsIDEpLCAtd2Via2l0LXRyYW5zZm9ybSAuN3MgY3ViaWMtYmV6aWVyKDAuNCwgMC4yLCAwLjIsIDEpO1xcclxcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICAgICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIG1pbi1oZWlnaHQ6IDM1MHB4O1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgdGV4dC1zaGFkb3c6IDEwcHggMTBweCAxMHB4IHZhcigtLWJhY2tncm91bmQpO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ud2luZWNhcmRzLWJhY2t7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1nb2xkKTtcXHJcXG59XFxyXFxuXFxyXFxuLndpbmVjYXJkcy1mYWNlOmFmdGVye1xcclxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBjb250ZW50OiAnJztcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIG9wYWNpdHk6IC44O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXHJcXG4gICAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICAgICAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4ud2luZWNhcmRzX19pdGVtIC53aW5lY2FyZHMtZmFjZSxcXHJcXG4ud2luZWNhcmRzX19pdGVtIC53aW5lY2FyZHMtYmFja3tcXHJcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAuN3MgY3ViaWMtYmV6aWVyKDAuNCwgMC4yLCAwLjIsIDEpO1xcclxcbiAgICB0cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAuN3MgY3ViaWMtYmV6aWVyKDAuNCwgMC4yLCAwLjIsIDEpO1xcclxcbiAgICAtby10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjdzIGN1YmljLWJlemllcigwLjQsIDAuMiwgMC4yLCAxKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC43cyBjdWJpYy1iZXppZXIoMC40LCAwLjIsIDAuMiwgMSk7XFxyXFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuN3MgY3ViaWMtYmV6aWVyKDAuNCwgMC4yLCAwLjIsIDEpLCAtd2Via2l0LXRyYW5zZm9ybSAuN3MgY3ViaWMtYmV6aWVyKDAuNCwgMC4yLCAwLjIsIDEpO1xcclxcbn1cXHJcXG5cXHJcXG4ud2luZWNhcmRzLWJhY2t7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICB0ZXh0LXNoYWRvdzogMTBweCAxMHB4IDEwcHggdmFyKC0tZ29sZCk7XFxyXFxuICBmb250LXNpemU6IGxhcmdlcjtcXHJcXG59XFxyXFxuXFxyXFxuLndpbmVjYXJkcy1mYWNlX19kZXRhaWxzIHtcXHJcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHRyYW5zbGF0ZVooNjBweCkgc2NhbGUoMC45NCk7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgdHJhbnNsYXRlWig2MHB4KSBzY2FsZSgwLjk0KTtcXHJcXG50b3A6IDUwJTtcXHJcXG5wb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxubGVmdDogMDtcXHJcXG53aWR0aDogMTAwJTtcXHJcXG5wYWRkaW5nOiAycmVtO1xcclxcbi13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxub3V0bGluZTogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbi13ZWJraXQtcGVyc3BlY3RpdmU6IGluaGVyaXQ7XFxyXFxuICBwZXJzcGVjdGl2ZTogaW5oZXJpdDtcXHJcXG56LWluZGV4OiAzO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ud2luZWNhcmRzX19pdGVtIC53aW5lY2FyZHMtYmFja3tcXHJcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XFxyXFxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xcclxcbiAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcclxcbiAgICAgICAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcclxcbn1cXHJcXG5cXHJcXG4ud2luZWNhcmRzX19pdGVtIC53aW5lY2FyZHMtZmFjZXtcXHJcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xcclxcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XFxyXFxuICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxyXFxuICAgICAgICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxyXFxufVxcclxcblxcclxcbi53aW5lY2FyZHNfX2l0ZW06Zm9jdXMgLndpbmVjYXJkcy1iYWNrLFxcclxcbi53aW5lY2FyZHNfX2l0ZW06aG92ZXIgLndpbmVjYXJkcy1iYWNre1xcclxcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XFxyXFxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcXHJcXG4gIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXHJcXG4gICAgICAgICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXHJcXG59XFxyXFxuXFxyXFxuLndpbmVjYXJkc19faXRlbTpob3ZlciAud2luZWNhcmRzLWZhY2UsXFxyXFxuLndpbmVjYXJkc19faXRlbTpmb2N1cyAud2luZWNhcmRzLWZhY2V7XFxyXFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgtMTgwZGVnKTtcXHJcXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKC0xODBkZWcpO1xcclxcbiAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcclxcbiAgICAgICAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcclxcbn1cXHJcXG5cXHJcXG4ud2luZWNhcmRzLWZhY2VfX3Bob3Rve1xcclxcbiAgd2lkdGg6IDEwZW07XFxyXFxuICBoZWlnaHQ6IDEwZW07XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiAxMDAlO1xcclxcbiAgbWFyZ2luOiAxZW07XFxyXFxufVxcclxcblxcclxcbi53aW5lY2FyZHMtYmFja19fbmFtZSB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxZW07XFxyXFxuICB0ZXh0LXNoYWRvdzogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5jYXJ0X19idG4ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ29sZCk7XFxyXFxuICBib3JkZXI6IHZhcigtLWdvbGQpO1xcclxcbiAgY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcclxcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggMTBweCB2YXIoLS1iYWNrZ3JvdW5kKTtcXHJcXG4gIGJveC1zaGFkb3c6IDEwcHggMTBweCAyMHB4IHZhcigtLWJhY2tncm91bmQpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgcGFkZGluZzogMWVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNpdGlvbjogMC4ycztcXHJcXG4gIG1hcmdpbi10b3A6IDJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcnRfX2J0bjpob3ZlcixcXHJcXG4uY2FydF9fYnRuOmZvY3Vze1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxyXFxuICBib3gtc2hhZG93OiAxMHB4IDEwcHggMjBweCB2YXIoLS1nb2xkKTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICB2YXIoLS1nb2xkKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1nb2xkKTtcXHJcXG4gIHRleHQtc2hhZG93OiAycHggMnB4IDEwcHggdmFyKC0tZ29sZCk7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy93aW5lY2FyZHMvd2luZWNhcmRzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsZUFBZTtDQUNoQjs7Q0FFQTtFQUNDLFVBQVU7RUFDVixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsUUFBUTtBQUNWOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysb0NBQW9DO0VBQ3BDLDRCQUE0QjtFQUM1QiwyQkFBMkI7SUFDekIsbUJBQW1CO0FBQ3ZCOztBQUVBOztFQUVFLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMsbUJBQW1CO0VBQ25CLHdFQUF3RTtFQUN4RSxnRUFBZ0U7RUFDaEUsMkRBQTJEO0VBQzNELHdEQUF3RDtFQUN4RCw4R0FBOEc7RUFDOUcsbUNBQW1DO1VBQzNCLDJCQUEyQjtFQUNuQyxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLDZDQUE2QztFQUM3QyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLGtCQUFrQjtBQUNwQjs7QUFFQTtDQUNDLGtCQUFrQjtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsVUFBVTtJQUNWLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLGNBQWM7SUFDZCxXQUFXO0lBQ1gsbUNBQW1DO0lBQ25DLG1DQUFtQztZQUMzQiwyQkFBMkI7SUFDbkMsbUJBQW1CO0FBQ3ZCOzs7O0FBSUE7O0lBRUksd0VBQXdFO0lBQ3hFLGdFQUFnRTtJQUNoRSwyREFBMkQ7SUFDM0Qsd0RBQXdEO0lBQ3hELDhHQUE4RztBQUNsSDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCx1Q0FBdUM7RUFDdkMsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0VBQWdFO0VBQ2hFLHdEQUF3RDtBQUMxRCxRQUFRO0FBQ1Isa0JBQWtCO0FBQ2xCLE9BQU87QUFDUCxXQUFXO0FBQ1gsYUFBYTtBQUNiLDhCQUE4QjtFQUM1QixzQkFBc0I7QUFDeEIsOEJBQThCO0FBQzlCLDRCQUE0QjtFQUMxQixvQkFBb0I7QUFDdEIsVUFBVTtBQUNWOzs7QUFHQTtFQUNFLGtDQUFrQztVQUMxQiwwQkFBMEI7RUFDbEMsb0NBQW9DO1VBQzVCLDRCQUE0QjtBQUN0Qzs7QUFFQTtFQUNFLGdDQUFnQztVQUN4Qix3QkFBd0I7RUFDaEMsb0NBQW9DO1VBQzVCLDRCQUE0QjtBQUN0Qzs7QUFFQTs7RUFFRSxnQ0FBZ0M7VUFDeEIsd0JBQXdCO0VBQ2hDLG9DQUFvQztVQUM1Qiw0QkFBNEI7QUFDdEM7O0FBRUE7O0VBRUUsbUNBQW1DO1VBQzNCLDJCQUEyQjtFQUNuQyxvQ0FBb0M7VUFDNUIsNEJBQTRCO0FBQ3RDOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWix3QkFBd0I7RUFDeEIsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsd0JBQXdCO0VBQ3hCLDJDQUEyQztFQUMzQyw0Q0FBNEM7RUFDNUMsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsbUNBQW1DO0VBQ25DLHNDQUFzQztFQUN0Qyw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLHFDQUFxQztFQUNyQyxnQkFBZ0I7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcclxcbiAgLS1iYWNrZ3JvdW5kOiAjMTQwYTBhO1xcclxcbiAgLS1yZWQ6ICNkNjAwMDA7XFxyXFxuICAtLWdvbGQ6ICNmZGM4NTQ7XFxyXFxuIH1cXHJcXG5cXHJcXG4gLndpbmVjYXJkc3tcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIG1heC13aWR0aDogODByZW07XFxyXFxuICBwYWRkaW5nOiAxZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLndpbmVjYXJkcy1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcclxcbiAgZ2FwOiAzZW07XFxyXFxufVxcclxcblxcclxcbi53aW5lY2FyZHNfX2l0ZW0ge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgd2lkdGg6IDIwZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxyXFxuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcclxcbiAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogMTAwMHB4O1xcclxcbiAgICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ud2luZWNhcmRzLWZhY2UsXFxyXFxuLndpbmVjYXJkcy1iYWNrIHtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMTJweCAwIHZhcigtLWdvbGQpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gLjdzIGN1YmljLWJlemllcigwLjQsIDAuMiwgMC4yLCAxKTtcXHJcXG4gIHRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIC43cyBjdWJpYy1iZXppZXIoMC40LCAwLjIsIDAuMiwgMSk7XFxyXFxuICAtby10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjdzIGN1YmljLWJlemllcigwLjQsIDAuMiwgMC4yLCAxKTtcXHJcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuN3MgY3ViaWMtYmV6aWVyKDAuNCwgMC4yLCAwLjIsIDEpO1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC43cyBjdWJpYy1iZXppZXIoMC40LCAwLjIsIDAuMiwgMSksIC13ZWJraXQtdHJhbnNmb3JtIC43cyBjdWJpYy1iZXppZXIoMC40LCAwLjIsIDAuMiwgMSk7XFxyXFxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gICAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbWluLWhlaWdodDogMzUwcHg7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICB0ZXh0LXNoYWRvdzogMTBweCAxMHB4IDEwcHggdmFyKC0tYmFja2dyb3VuZCk7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi53aW5lY2FyZHMtYmFja3tcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpO1xcclxcbiAgY29sb3I6IHZhcigtLWdvbGQpO1xcclxcbn1cXHJcXG5cXHJcXG4ud2luZWNhcmRzLWZhY2U6YWZ0ZXJ7XFxyXFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgb3BhY2l0eTogLjg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcclxcbiAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gICAgICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi53aW5lY2FyZHNfX2l0ZW0gLndpbmVjYXJkcy1mYWNlLFxcclxcbi53aW5lY2FyZHNfX2l0ZW0gLndpbmVjYXJkcy1iYWNre1xcclxcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIC43cyBjdWJpYy1iZXppZXIoMC40LCAwLjIsIDAuMiwgMSk7XFxyXFxuICAgIHRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIC43cyBjdWJpYy1iZXppZXIoMC40LCAwLjIsIDAuMiwgMSk7XFxyXFxuICAgIC1vLXRyYW5zaXRpb246IHRyYW5zZm9ybSAuN3MgY3ViaWMtYmV6aWVyKDAuNCwgMC4yLCAwLjIsIDEpO1xcclxcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjdzIGN1YmljLWJlemllcigwLjQsIDAuMiwgMC4yLCAxKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC43cyBjdWJpYy1iZXppZXIoMC40LCAwLjIsIDAuMiwgMSksIC13ZWJraXQtdHJhbnNmb3JtIC43cyBjdWJpYy1iZXppZXIoMC40LCAwLjIsIDAuMiwgMSk7XFxyXFxufVxcclxcblxcclxcbi53aW5lY2FyZHMtYmFja3tcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHRleHQtc2hhZG93OiAxMHB4IDEwcHggMTBweCB2YXIoLS1nb2xkKTtcXHJcXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xcclxcbn1cXHJcXG5cXHJcXG4ud2luZWNhcmRzLWZhY2VfX2RldGFpbHMge1xcclxcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgdHJhbnNsYXRlWig2MHB4KSBzY2FsZSgwLjk0KTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSB0cmFuc2xhdGVaKDYwcHgpIHNjYWxlKDAuOTQpO1xcclxcbnRvcDogNTAlO1xcclxcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5sZWZ0OiAwO1xcclxcbndpZHRoOiAxMDAlO1xcclxcbnBhZGRpbmc6IDJyZW07XFxyXFxuLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG5vdXRsaW5lOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuLXdlYmtpdC1wZXJzcGVjdGl2ZTogaW5oZXJpdDtcXHJcXG4gIHBlcnNwZWN0aXZlOiBpbmhlcml0O1xcclxcbnotaW5kZXg6IDM7XFxyXFxufVxcclxcblxcclxcblxcclxcbi53aW5lY2FyZHNfX2l0ZW0gLndpbmVjYXJkcy1iYWNre1xcclxcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcXHJcXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XFxyXFxuICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxyXFxuICAgICAgICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxyXFxufVxcclxcblxcclxcbi53aW5lY2FyZHNfX2l0ZW0gLndpbmVjYXJkcy1mYWNle1xcclxcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XFxyXFxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcXHJcXG4gIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXHJcXG4gICAgICAgICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXHJcXG59XFxyXFxuXFxyXFxuLndpbmVjYXJkc19faXRlbTpmb2N1cyAud2luZWNhcmRzLWJhY2ssXFxyXFxuLndpbmVjYXJkc19faXRlbTpob3ZlciAud2luZWNhcmRzLWJhY2t7XFxyXFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcXHJcXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xcclxcbiAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcclxcbiAgICAgICAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcclxcbn1cXHJcXG5cXHJcXG4ud2luZWNhcmRzX19pdGVtOmhvdmVyIC53aW5lY2FyZHMtZmFjZSxcXHJcXG4ud2luZWNhcmRzX19pdGVtOmZvY3VzIC53aW5lY2FyZHMtZmFjZXtcXHJcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKC0xODBkZWcpO1xcclxcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTE4MGRlZyk7XFxyXFxuICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxyXFxuICAgICAgICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxyXFxufVxcclxcblxcclxcbi53aW5lY2FyZHMtZmFjZV9fcGhvdG97XFxyXFxuICB3aWR0aDogMTBlbTtcXHJcXG4gIGhlaWdodDogMTBlbTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDEwMCU7XFxyXFxuICBtYXJnaW46IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuLndpbmVjYXJkcy1iYWNrX19uYW1lIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcXHJcXG4gIHRleHQtc2hhZG93OiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcnRfX2J0biB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1nb2xkKTtcXHJcXG4gIGJvcmRlcjogdmFyKC0tZ29sZCk7XFxyXFxuICBjb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxyXFxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAxMHB4IHZhcigtLWJhY2tncm91bmQpO1xcclxcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IDIwcHggdmFyKC0tYmFja2dyb3VuZCk7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBwYWRkaW5nOiAxZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcclxcbiAgbWFyZ2luLXRvcDogMmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FydF9fYnRuOmhvdmVyLFxcclxcbi5jYXJ0X19idG46Zm9jdXN7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXHJcXG4gIGJveC1zaGFkb3c6IDEwcHggMTBweCAyMHB4IHZhcigtLWdvbGQpO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgIHZhcigtLWdvbGQpO1xcclxcbiAgY29sb3I6IHZhcigtLWdvbGQpO1xcclxcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggMTBweCB2YXIoLS1nb2xkKTtcXHJcXG4gIHRyYW5zaXRpb246IDAuMnM7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvaW1nL2JnLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ltZy9jYXJ0LWdvbGQuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXHJcXG4gIC0tYmFja2dyb3VuZDogYmxhY2s7XFxyXFxuICAtLXJlZDogI2Q2MDAwMDtcXHJcXG4gIC0tZ29sZDogI2ZkYzg1NDtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIG1heC13aWR0aDogMTAwJTtcXHJcXG4gIG1heC1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ29sZCk7XFxyXFxuICBib3JkZXI6IHZhcigtLWdvbGQpO1xcclxcbiAgY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcclxcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggMTBweCB2YXIoLS1iYWNrZ3JvdW5kKTtcXHJcXG4gIGJveC1zaGFkb3c6IDEwcHggMTBweCAyMHB4IHZhcigtLWJhY2tncm91bmQpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgcGFkZGluZzogMWVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNpdGlvbjogMC4zcztcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcclxcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IDIwcHggdmFyKC0tZ29sZCk7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1nb2xkKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1nb2xkKTtcXHJcXG4gIHRleHQtc2hhZG93OiAycHggMnB4IDEwcHggdmFyKC0tZ29sZCk7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyX19jYXJ0IHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHdpZHRoOiAzZW07XFxyXFxuICBoZWlnaHQ6IDNlbTtcXHJcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIG5vLXJlcGVhdCBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyX19jYXJ0OmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xLCAxLjEpO1xcclxcbiAgdHJhbnNpdGlvbjogMC4zcztcXHJcXG59XFxyXFxuXFxyXFxuLmNhcnRfX3Byb2R1Y3RzIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogNXB4O1xcclxcbiAgbGVmdDogNXB4O1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQpO1xcclxcbiAgY29sb3I6IHZhcigtLWdvbGQpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgcGFkZGluZzogMXB4IDZweDtcXHJcXG4gIHdpZHRoOiAyMHB4O1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ub3ZlcmxheSB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXHJcXG4gIG9wYWNpdHk6IDAuNTtcXHJcXG4gIHotaW5kZXg6IDk5O1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLm92ZXJsYXkuYWN0aXZlIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5hIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1nb2xkKTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2dsb2JhbC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7O0FBRWxCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQix5REFBNEM7RUFDNUMsNEJBQTRCO0VBQzVCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsd0JBQXdCO0VBQ3hCLDJDQUEyQztFQUMzQyw0Q0FBNEM7RUFDNUMsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLHNDQUFzQztFQUN0Qyw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLHFDQUFxQztFQUNyQyxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsb0VBQThEO0VBQzlELHNCQUFzQjtFQUN0QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGNBQWM7RUFDZCw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUNBQW1DO0VBQ25DLFlBQVk7RUFDWixXQUFXO0VBQ1gsYUFBYTs7QUFFZjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7OztBQUdBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxyXFxuICAtLWJhY2tncm91bmQ6IGJsYWNrO1xcclxcbiAgLS1yZWQ6ICNkNjAwMDA7XFxyXFxuICAtLWdvbGQ6ICNmZGM4NTQ7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgdHJhbnNpdGlvbjogMC4zcztcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICBtYXgtaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9hc3NldHMvaW1nL2JnLmpwZycpO1xcclxcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1nb2xkKTtcXHJcXG4gIGJvcmRlcjogdmFyKC0tZ29sZCk7XFxyXFxuICBjb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxyXFxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAxMHB4IHZhcigtLWJhY2tncm91bmQpO1xcclxcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IDIwcHggdmFyKC0tYmFja2dyb3VuZCk7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBwYWRkaW5nOiAxZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b246aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxyXFxuICBib3gtc2hhZG93OiAxMHB4IDEwcHggMjBweCB2YXIoLS1nb2xkKTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdvbGQpO1xcclxcbiAgY29sb3I6IHZhcigtLWdvbGQpO1xcclxcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggMTBweCB2YXIoLS1nb2xkKTtcXHJcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXJfX2NhcnQge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgd2lkdGg6IDNlbTtcXHJcXG4gIGhlaWdodDogM2VtO1xcclxcbiAgdHJhbnNpdGlvbjogMC4zcztcXHJcXG4gIGJhY2tncm91bmQ6IHVybCgnLi9hc3NldHMvaW1nL2NhcnQtZ29sZC5zdmcnKSBuby1yZXBlYXQgY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlcl9fY2FydDpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSwgMS4xKTtcXHJcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxyXFxufVxcclxcblxcclxcbi5jYXJ0X19wcm9kdWN0cyB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDVweDtcXHJcXG4gIGxlZnQ6IDVweDtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1nb2xkKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIHBhZGRpbmc6IDFweCA2cHg7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG4gIGhlaWdodDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm92ZXJsYXkge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxyXFxuICBvcGFjaXR5OiAwLjU7XFxyXFxuICB6LWluZGV4OiA5OTtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5vdmVybGF5LmFjdGl2ZSB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuYSB7XFxyXFxuICBjb2xvcjogdmFyKC0tZ29sZCk7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jYXJ0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY2FydC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZmlsdGVycy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2ZpbHRlcnMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Zvb3Rlci5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Zvb3Rlci5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaGVhZGVyLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaGVhZGVyLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zZWFyY2guY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zZWFyY2guY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3dpbmVjYXJkcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3dpbmVjYXJkcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2xvYmFsLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2xvYmFsLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgUGFnZSBmcm9tIFwiLi9jb21wb25lbnRzL3BhZ2VcIjtcclxuaW1wb3J0ICcuL2dsb2JhbC5jc3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIHtcclxuICAgIHByaXZhdGUgY29udGFpbmVyOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmJvZHk7XHJcbiAgICBwYWdlOiBQYWdlO1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5wYWdlID0gbmV3IFBhZ2UoZG9jdW1lbnQuYm9keSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4iLCJpbXBvcnQgXCIuL2NhcnQuY3NzXCI7XHJcbmltcG9ydCB7IFdpbmUgfSBmcm9tIFwiLi4vLi4vdHlwZXMvcHJvZHVjdHNcIjtcclxuaW1wb3J0IHsgTG9jYWxTdG9yYWdlLCBsb2NhbFN0b3JhZ2VLZXlzIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2xvY2Fsc3RvcmFnZVwiO1xyXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuLi8uLi91dGlscy9jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgZ29vZHMgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzL2dvb2RzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2FydCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY2FydExpc3Q6IFdpbmVbXTtcclxuICBkYXRhOiBXaW5lW107XHJcbiAgdG90YWxJdGVtczogbnVtYmVyO1xyXG4gIHRvdGFsTGFiZWw6IENvbXBvbmVudDtcclxuICB0b3RhbDogQ29tcG9uZW50O1xyXG4gIG5vdGlmaWNhdGlvbjogQ29tcG9uZW50O1xyXG4gIGNhcnRQb3B1cDogQ29tcG9uZW50O1xyXG4gIGNhcnRQb3B1cENvbnRhaW5lcjogQ29tcG9uZW50O1xyXG4gIGNvbnN0cnVjdG9yKHBhcmVudE5vZGU6IEhUTUxFbGVtZW50KSB7XHJcbiAgICBzdXBlcihwYXJlbnROb2RlLCBcImRpdlwiLCBcImhlYWRlcl9fY2FydCBjYXJ0XCIpO1xyXG4gICAgdGhpcy5ub3RpZmljYXRpb24gPSBuZXcgQ29tcG9uZW50KHRoaXMubm9kZSwgXCJhXCIsIFwiY2FydF9fbm90aWZpY2F0aW9uXCIpO1xyXG4gICAgdGhpcy5jYXJ0TGlzdCA9IExvY2FsU3RvcmFnZS5nZXRMb2NhbFN0b3JhZ2UobG9jYWxTdG9yYWdlS2V5cy5jYXJ0KSB8fCBbXTtcclxuICAgIHRoaXMudG90YWxJdGVtcyA9XHJcbiAgICAgIHRoaXMuY2FydExpc3QucmVkdWNlKChhY2M6IG51bWJlciwgZWw6IFdpbmUpID0+IGFjYyArIGVsLmluQ2FydCwgMCkgfHwgMDtcclxuICAgIHRoaXMuZGF0YSA9IExvY2FsU3RvcmFnZS5nZXRMb2NhbFN0b3JhZ2UobG9jYWxTdG9yYWdlS2V5cy5nb29kcykgfHwgZ29vZHM7XHJcbiAgICB0aGlzLnRvdGFsTGFiZWwgPSBuZXcgQ29tcG9uZW50KFxyXG4gICAgICB0aGlzLm5vZGUsXHJcbiAgICAgIFwic3BhblwiLFxyXG4gICAgICBcImNhcnRfX3Byb2R1Y3RzXCIsXHJcbiAgICAgIGAke3RoaXMudG90YWxJdGVtc31gXHJcbiAgICApO1xyXG4gICAgdGhpcy5jYXJ0UG9wdXAgPSBuZXcgQ29tcG9uZW50KGRvY3VtZW50LmJvZHksIFwiZGl2XCIsIFwiY2FydC1wb3B1cFwiKTtcclxuICAgIHRoaXMuY2FydFBvcHVwQ29udGFpbmVyID0gbmV3IENvbXBvbmVudChcclxuICAgICAgdGhpcy5jYXJ0UG9wdXAubm9kZSxcclxuICAgICAgXCJkaXZcIixcclxuICAgICAgXCJjYXJ0LXBvcHVwX19jb250YWluZXJcIlxyXG4gICAgKTtcclxuICAgIHRoaXMudG90YWwgPSBuZXcgQ29tcG9uZW50KHRoaXMuY2FydFBvcHVwLm5vZGUsIFwicFwiLCBcImNhcnRfX3RvdGFsXCIpO1xyXG4gIH1cclxuXHJcbiAgY2FydEFkZChhcnRpY3VsOiBudW1iZXIpIHtcclxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5jYXJ0TGlzdC5maW5kSW5kZXgoKGVsZW0pID0+IGVsZW0uaWQgPT09IGFydGljdWwpO1xyXG5cclxuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcclxuICAgICAgdGhpcy5jYXJ0TGlzdC5wdXNoKHRoaXMuZGF0YVthcnRpY3VsXSk7XHJcbiAgICAgIHRoaXMuZGF0YVthcnRpY3VsXVtcImluQ2FydFwiXSsrO1xyXG4gICAgICB0aGlzLmRhdGFbYXJ0aWN1bF1bXCJjb3VudFwiXS0tO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5kYXRhW2FydGljdWxdW1wiaW5DYXJ0XCJdKys7XHJcbiAgICAgIHRoaXMuZGF0YVthcnRpY3VsXVtcImNvdW50XCJdLS07XHJcbiAgICAgIHRoaXMuY2FydExpc3RbaW5kZXhdW1wiaW5DYXJ0XCJdKys7XHJcbiAgICAgIHRoaXMuY2FydExpc3RbaW5kZXhdW1wiY291bnRcIl0tLTtcclxuICAgIH1cclxuICAgIExvY2FsU3RvcmFnZS5zZXRMb2NhbFN0b3JhZ2UobG9jYWxTdG9yYWdlS2V5cy5jYXJ0LCB0aGlzLmNhcnRMaXN0KTtcclxuICAgIExvY2FsU3RvcmFnZS5zZXRMb2NhbFN0b3JhZ2UobG9jYWxTdG9yYWdlS2V5cy5nb29kcywgdGhpcy5kYXRhKTtcclxuICAgIExvY2FsU3RvcmFnZS5zZXRMb2NhbFN0b3JhZ2UobG9jYWxTdG9yYWdlS2V5cy5vblBhZ2UsIHRoaXMuZGF0YSk7XHJcbiAgfVxyXG5cclxuICBjYXJ0UmVtb3ZlKGFydGljdWw6IG51bWJlcikge1xyXG4gICAgdGhpcy5jYXJ0TGlzdCA9IExvY2FsU3RvcmFnZS5nZXRMb2NhbFN0b3JhZ2UobG9jYWxTdG9yYWdlS2V5cy5jYXJ0KSB8fCBbXTtcclxuICAgIHRoaXMuZGF0YSA9IExvY2FsU3RvcmFnZS5nZXRMb2NhbFN0b3JhZ2UobG9jYWxTdG9yYWdlS2V5cy5nb29kcykgfHwgZ29vZHM7XHJcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuY2FydExpc3QuZmluZEluZGV4KChlbGVtKSA9PiBlbGVtLmlkID09PSBhcnRpY3VsKTtcclxuICAgIGlmIChpbmRleCA+PSAwICYmIHRoaXMuY2FydExpc3RbaW5kZXhdW1wiaW5DYXJ0XCJdID4gMCkge1xyXG4gICAgICB0aGlzLmNhcnRMaXN0W2luZGV4XVtcImluQ2FydFwiXS0tO1xyXG4gICAgICB0aGlzLmRhdGFbYXJ0aWN1bF1bXCJjb3VudFwiXSsrO1xyXG4gICAgICB0aGlzLmRhdGFbYXJ0aWN1bF1bXCJpbkNhcnRcIl0tLTtcclxuICAgICAgdGhpcy5jYXJ0TGlzdFtpbmRleF1bXCJjb3VudFwiXSsrO1xyXG4gICAgfVxyXG4gICAgTG9jYWxTdG9yYWdlLnNldExvY2FsU3RvcmFnZShsb2NhbFN0b3JhZ2VLZXlzLmNhcnQsIHRoaXMuY2FydExpc3QpO1xyXG4gICAgTG9jYWxTdG9yYWdlLnNldExvY2FsU3RvcmFnZShsb2NhbFN0b3JhZ2VLZXlzLmdvb2RzLCB0aGlzLmRhdGEpO1xyXG4gICAgTG9jYWxTdG9yYWdlLnNldExvY2FsU3RvcmFnZShsb2NhbFN0b3JhZ2VLZXlzLm9uUGFnZSwgdGhpcy5kYXRhKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHRoaXMuY2FydExpc3QgPSBMb2NhbFN0b3JhZ2UuZ2V0TG9jYWxTdG9yYWdlKGxvY2FsU3RvcmFnZUtleXMuY2FydCkgfHwgW107XHJcbiAgICBsZXQgdG90YWxTdW0gPSAwO1xyXG4gICAgdGhpcy5jYXJ0UG9wdXBDb250YWluZXIubm9kZS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgdGhpcy50b3RhbC5ub2RlLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBjb25zdCBjbG9zZVBvcHVwID0gbmV3IENvbXBvbmVudChcclxuICAgICAgdGhpcy5jYXJ0UG9wdXAubm9kZSxcclxuICAgICAgXCJzcGFuXCIsXHJcbiAgICAgIFwiY2xvc2UtcG9wdXBcIixcclxuICAgICAgXCJYXCJcclxuICAgICk7XHJcblxyXG4gICAgaWYgKHRoaXMuY2FydExpc3QubGVuZ3RoID09PSAwKVxyXG4gICAgICB0aGlzLmNhcnRQb3B1cENvbnRhaW5lci5ub2RlLnRleHRDb250ZW50ID0gXCLQmtC+0YDQt9C40L3QsCDQv9GD0YHRgtCwXCI7XHJcblxyXG4gICAgdGhpcy5jYXJ0TGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgIGNvbnN0IGNhcnRJdGVtID0gbmV3IENvbXBvbmVudChcclxuICAgICAgICB0aGlzLmNhcnRQb3B1cENvbnRhaW5lci5ub2RlLFxyXG4gICAgICAgIFwiZGl2XCIsXHJcbiAgICAgICAgXCJjYXJ0LWl0ZW1cIlxyXG4gICAgICApO1xyXG4gICAgICBjYXJ0SXRlbS5ub2RlLnNldEF0dHJpYnV0ZShcImlkXCIsIGAke2l0ZW0uaWR9YCk7XHJcbiAgICAgIGNvbnN0IGNhcnRJdGVtTmFtZSA9IG5ldyBDb21wb25lbnQoXHJcbiAgICAgICAgY2FydEl0ZW0ubm9kZSxcclxuICAgICAgICBcInBcIixcclxuICAgICAgICBcImNhcnQtaXRlbV9fbmFtZVwiLFxyXG4gICAgICAgIGAke2l0ZW0ubmFtZX1gXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IGNhcnROdW1iZXIgPSBuZXcgQ29tcG9uZW50KGNhcnRJdGVtLm5vZGUsIFwiZGl2XCIsIFwiY2FydF9fbnVtYmVyXCIpO1xyXG4gICAgICBjb25zdCByZW1vdmVCdG4gPSBuZXcgQ29tcG9uZW50KFxyXG4gICAgICAgIGNhcnROdW1iZXIubm9kZSxcclxuICAgICAgICBcImJ1dHRvblwiLFxyXG4gICAgICAgIFwiY2FydF9fcmVtb3ZlIGNhcnRfX2J0blwiLFxyXG4gICAgICAgIFwiLVwiXHJcbiAgICAgICk7XHJcbiAgICAgIHJlbW92ZUJ0bi5ub2RlLnNldEF0dHJpYnV0ZShcImRhdGEtYXJ0aWN1bFwiLCBgJHtpdGVtLmlkfWApO1xyXG4gICAgICBjb25zdCBjYXJ0SW5wdXQgPSBuZXcgQ29tcG9uZW50KFxyXG4gICAgICAgIGNhcnROdW1iZXIubm9kZSxcclxuICAgICAgICBcInBcIixcclxuICAgICAgICBcImNhcnRfX2lucHV0XCIsXHJcbiAgICAgICAgYCR7aXRlbS5pbkNhcnQudG9TdHJpbmcoKX1gXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IGFkZEJ0biA9IG5ldyBDb21wb25lbnQoXHJcbiAgICAgICAgY2FydE51bWJlci5ub2RlLFxyXG4gICAgICAgIFwiYnV0dG9uXCIsXHJcbiAgICAgICAgXCJjYXJ0X19hZGQgY2FydF9fYnRuXCIsXHJcbiAgICAgICAgXCIrXCJcclxuICAgICAgKTtcclxuICAgICAgYWRkQnRuLm5vZGUuc2V0QXR0cmlidXRlKFwiZGF0YS1hcnRpY3VsXCIsIGAke2l0ZW0uaWR9YCk7XHJcbiAgICAgIGNvbnN0IGl0ZW1zUHJpY2UgPSAraXRlbS5wcmljZSAqIGl0ZW0uaW5DYXJ0O1xyXG4gICAgICB0b3RhbFN1bSArPSBpdGVtc1ByaWNlO1xyXG4gICAgICB0aGlzLnRvdGFsLm5vZGUudGV4dENvbnRlbnQgPSBgJHt0b3RhbFN1bX1gO1xyXG4gICAgICBjb25zdCBjYXJ0SXRlbVByaWNlID0gbmV3IENvbXBvbmVudChcclxuICAgICAgICBjYXJ0SXRlbS5ub2RlLFxyXG4gICAgICAgIFwicFwiLFxyXG4gICAgICAgIFwiY2FydC1pdGVtX19wcmljZVwiLFxyXG4gICAgICAgIGAke2l0ZW1zUHJpY2V9YFxyXG4gICAgICApO1xyXG5cclxuICAgICAgaWYgKGl0ZW0uY291bnQgPT09IDApIHtcclxuICAgICAgICBhZGRCdG4ubm9kZS5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XHJcbiAgICAgICAgYWRkQnRuLm5vZGUuc3R5bGUub3BhY2l0eSA9IFwiMC41XCI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChpdGVtLmluQ2FydCA9PT0gMCkge1xyXG4gICAgICAgIHJlbW92ZUJ0bi5ub2RlLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcclxuICAgICAgICByZW1vdmVCdG4ubm9kZS5zdHlsZS5vcGFjaXR5ID0gXCIwLjVcIjtcclxuICAgICAgICB0aGlzLmNhcnRMaXN0ID0gdGhpcy5jYXJ0TGlzdC5maWx0ZXIoKGVsKSA9PiBlbC5pbkNhcnQgIT09IDApO1xyXG4gICAgICAgIExvY2FsU3RvcmFnZS5zZXRMb2NhbFN0b3JhZ2UobG9jYWxTdG9yYWdlS2V5cy5jYXJ0LCB0aGlzLmNhcnRMaXN0KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjYXJ0T3BlbigpIHtcclxuICAgIHRoaXMuY2FydFBvcHVwLm5vZGUuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgfVxyXG5cclxuICBjYXJ0Q2xvc2UoKSB7XHJcbiAgICB0aGlzLmNhcnRQb3B1cC5ub2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IGdvb2RzIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50cy9nb29kc1wiO1xyXG5pbXBvcnQgeyBXaW5lIH0gZnJvbSBcIi4uLy4uL3R5cGVzL3Byb2R1Y3RzXCI7XHJcbmltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4uLy4uL3V0aWxzL2NvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBMb2NhbFN0b3JhZ2UsIGxvY2FsU3RvcmFnZUtleXMgfSBmcm9tIFwiLi4vLi4vdXRpbHMvbG9jYWxzdG9yYWdlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWx0ZXJTZXR0aW5ncyB7XHJcbiAgICBmaWx0ZXJlZDogV2luZVtdO1xyXG4gICAgZmlsdGVyUG9wdXA6IENvbXBvbmVudDtcclxuICAgIGZpbHRlclBvcHVwQ29udGFpbmVyOiBDb21wb25lbnQ7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmZpbHRlcmVkID0gTG9jYWxTdG9yYWdlLmdldExvY2FsU3RvcmFnZShsb2NhbFN0b3JhZ2VLZXlzLmZpbHRlcmVkKSB8fCBbXTtcclxuICAgICAgICB0aGlzLmZpbHRlclBvcHVwID0gbmV3IENvbXBvbmVudCgpO1xyXG4gICAgICAgIHRoaXMuZmlsdGVyUG9wdXBDb250YWluZXIgPSBuZXcgQ29tcG9uZW50KHRoaXMuZmlsdGVyUG9wdXAubm9kZSwgJ2RpdicsICdzZWFyY2gtcG9wdXBfX2NvbnRhaW5lcicpO1xyXG4gICAgfVxyXG5cclxuICAgIHNvcnRQcmljZVVwKGRhdGE6IFdpbmVbXSkge1xyXG4gICAgICAgIGNvbnN0IHNvcnRlZCA9IGRhdGEuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gK2EucHJpY2UgLSArYi5wcmljZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zb2xlLmxvZygnb25wYWdlJyxzb3J0ZWQpO1xyXG4gICAgICAgIExvY2FsU3RvcmFnZS5zZXRMb2NhbFN0b3JhZ2UobG9jYWxTdG9yYWdlS2V5cy5vblBhZ2UsIHNvcnRlZCk7XHJcbiAgICAgICAgTG9jYWxTdG9yYWdlLnNldExvY2FsU3RvcmFnZShsb2NhbFN0b3JhZ2VLZXlzLnNvcnRlZCwgc29ydGVkKTtcclxuICAgIH1cclxuXHJcbiAgICBzb3J0UHJpY2VEb3duKGRhdGE6IFdpbmVbXSkge1xyXG4gICAgICAgIGNvbnN0IHNvcnRlZCA9IGRhdGEuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gK2IucHJpY2UgLSArYS5wcmljZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBMb2NhbFN0b3JhZ2Uuc2V0TG9jYWxTdG9yYWdlKGxvY2FsU3RvcmFnZUtleXMub25QYWdlLCBzb3J0ZWQpO1xyXG4gICAgICAgIExvY2FsU3RvcmFnZS5zZXRMb2NhbFN0b3JhZ2UobG9jYWxTdG9yYWdlS2V5cy5zb3J0ZWQsIHNvcnRlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RmlsdGVycygpIHtcclxuICAgICAgICBsZXQgZmlsdGVycztcclxuICAgICAgICBjb25zdCBjb3VudHJ5RmlsdGVyczogc3RyaW5nW10gPSBbXTtcclxuICAgICAgICBjb25zdCBjb2xvckZpbHRlcnM6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgY29uc3QgY291bnRyeWNoZWNrZWRDaGVja2JveGVzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZC5jb3VudHJ5JykpO1xyXG4gICAgICAgIGNvbnN0IGNvbG9yY2hlY2tlZENoZWNrYm94ZXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkLmNvbG9yJykpO1xyXG4gICAgICAgIGNvdW50cnljaGVja2VkQ2hlY2tib3hlcy5mb3JFYWNoKGl0ZW0gPT4gY291bnRyeUZpbHRlcnMucHVzaCgoaXRlbSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSkpO1xyXG4gICAgICAgIGNvbG9yY2hlY2tlZENoZWNrYm94ZXMuZm9yRWFjaChpdGVtID0+IGNvbG9yRmlsdGVycy5wdXNoKChpdGVtIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlKSk7XHJcbiAgICAgICAgTG9jYWxTdG9yYWdlLnNldExvY2FsU3RvcmFnZShsb2NhbFN0b3JhZ2VLZXlzLmZpbHRlcnMsIHsgY291bnRyeTogY291bnRyeUZpbHRlcnMsIGNvbG9yOiBjb2xvckZpbHRlcnMgfSk7XHJcbiAgICAgICAgcmV0dXJuIGZpbHRlcnMgPSB7IGNvdW50cnk6IGNvdW50cnlGaWx0ZXJzLCBjb2xvcjogY29sb3JGaWx0ZXJzIH07XHJcbiAgICB9XHJcblxyXG4gICAgZmlsdGVyKCkge1xyXG4gICAgICAgIGNvbnN0IGZpbHRlcnMgPSB0aGlzLmdldEZpbHRlcnMoKTtcclxuICAgICAgICBsZXQgZmlsdGVyZWQ6IFdpbmVbXSA9IFtdO1xyXG4gICAgICAgIGNvbnN0IGZpbHRlckNvdW50cnkgPSBmaWx0ZXJzLmNvdW50cnk7XHJcbiAgICAgICAgY29uc3QgZmlsdGVyQ29sb3IgPSBmaWx0ZXJzLmNvbG9yO1xyXG4gICAgICAgIGNvbnN0IGRhdGE6IFdpbmVbXSA9IGdvb2RzO1xyXG4gIFxyXG4gICAgICAgIGlmICghZmlsdGVyQ29sb3IubGVuZ3RoICYmICFmaWx0ZXJDb3VudHJ5Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICBmaWx0ZXJlZCA9IGdvb2RzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICghZmlsdGVyQ291bnRyeS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgZGF0YS5mb3JFYWNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGZpbHRlcmVkID0gZGF0YS5maWx0ZXIoaXRlbSA9PiBmaWx0ZXJDb2xvci5pbmNsdWRlcyhpdGVtLmNvbG9yKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICghZmlsdGVyQ29sb3IubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGRhdGEuZm9yRWFjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBmaWx0ZXJlZCA9IGRhdGEuZmlsdGVyKGl0ZW0gPT4gZmlsdGVyQ291bnRyeS5pbmNsdWRlcyhpdGVtLmNvdW50cnkpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBkYXRhLmZvckVhY2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZmlsdGVyZWQgPSBkYXRhLmZpbHRlcihpdGVtID0+IGZpbHRlckNvdW50cnkuaW5jbHVkZXMoaXRlbS5jb3VudHJ5KSAmJiBmaWx0ZXJDb2xvci5pbmNsdWRlcyhpdGVtLmNvbG9yKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBMb2NhbFN0b3JhZ2Uuc2V0TG9jYWxTdG9yYWdlKGxvY2FsU3RvcmFnZUtleXMub25QYWdlLCBmaWx0ZXJlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgb3BlblBvcHVwKCkge1xyXG4gICAgICAgIHRoaXMuZmlsdGVyUG9wdXBDb250YWluZXIgPSBuZXcgQ29tcG9uZW50KGRvY3VtZW50LmJvZHksICdkaXYnLCAnY2FydF9fZXJyb3InKTtcclxuICAgICAgICB0aGlzLmZpbHRlclBvcHVwQ29udGFpbmVyLm5vZGUuaW5uZXJIVE1MID0gYFxyXG4gICAgICA8cCBjbGFzcz1cImVycm9yX19tZXNzYWdlXCI+0J/QviDQtNCw0L3QvdC+0LzRgyDQt9Cw0L/RgNC+0YHRgyDQvdC40YfQtdCz0L4g0L3QtSDQvdCw0LnQtNC10L3QvjwvcD5cclxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImVycm9yX19idG4gZmlsdGVyX19idG5cIiA+T2s8L2J1dHRvbj5gO1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheScpIS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG4gICAgfVxyXG5cclxuICAgIHBvcHVwQ2xvc2UoKSB7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJQb3B1cENvbnRhaW5lci5kZXN0cm95KCk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheScpIS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnc2Nyb2xsJztcclxuICAgIH1cclxuXHJcbiAgICByZXNldEFsbCgpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXNldEZpbHRlcnMoKSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0obG9jYWxTdG9yYWdlS2V5cy5maWx0ZXJzKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShsb2NhbFN0b3JhZ2VLZXlzLm9uUGFnZSk7XHJcbiAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IFwiLi9maWx0ZXJzLmNzc1wiO1xyXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuLi8uLi91dGlscy9jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTG9jYWxTdG9yYWdlLCBsb2NhbFN0b3JhZ2VLZXlzIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2xvY2Fsc3RvcmFnZVwiO1xyXG5pbXBvcnQgeyBnb29kcyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHMvZ29vZHNcIjtcclxuaW1wb3J0IEZpbHRlclNldHRpbmdzIGZyb20gXCIuL2ZpbHRlclNldHRpbmdzXCI7XHJcblxyXG5mdW5jdGlvbiBnZXRDb3VudHJ5TGlzdCgpIHtcclxuICBjb25zdCBjb3VudHJ5TGlzdDogc3RyaW5nW10gPSBbXTtcclxuICBnb29kcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICBpZiAoIWNvdW50cnlMaXN0LmluY2x1ZGVzKGl0ZW0uY291bnRyeSkpIHtcclxuICAgICAgY291bnRyeUxpc3QucHVzaChpdGVtLmNvdW50cnkpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIHJldHVybiBjb3VudHJ5TGlzdDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Q29sb3JMaXN0KCkge1xyXG4gIGNvbnN0IGNvbG9yTGlzdDogc3RyaW5nW10gPSBbXTtcclxuICBnb29kcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICBpZiAoIWNvbG9yTGlzdC5pbmNsdWRlcyhpdGVtLmNvbG9yKSkge1xyXG4gICAgICBjb2xvckxpc3QucHVzaChpdGVtLmNvbG9yKTtcclxuICAgIH1cclxuICB9KTtcclxuICByZXR1cm4gY29sb3JMaXN0O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRmlsdGVycyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgZm9ybTogSFRNTEZvcm1FbGVtZW50O1xyXG4gIGZpbHRlcnNDb250YWluZXI6IENvbXBvbmVudDtcclxuICBjb3VudHJ5RmlsdGVyOiBDb21wb25lbnQ7XHJcbiAgY29sb3JGaWx0ZXI6IENvbXBvbmVudDtcclxuICBzb3J0Q29udGFpbmVyOiBDb21wb25lbnQ7XHJcbiAgZmlsdGVyc0J0bnM6IENvbXBvbmVudDtcclxuICByZXNldEZpbHRlcnM6IENvbXBvbmVudDtcclxuICBjbGVhckhpc3Rvcnk6IENvbXBvbmVudDtcclxuICBzb3J0OiBDb21wb25lbnQ7XHJcbiAgc29ydFRpdGxlOiBDb21wb25lbnQ7XHJcbiAgc2VsZWN0OiBDb21wb25lbnQ7XHJcbiAgc2V0dGluZ3M6IEZpbHRlclNldHRpbmdzO1xyXG5cclxuICBjb25zdHJ1Y3RvcihwYXJlbnROb2RlPzogSFRNTEVsZW1lbnQpIHtcclxuICAgIHN1cGVyKHBhcmVudE5vZGUsIFwiZm9ybVwiLCBcImZpbHRlcnMtZm9ybVwiKTtcclxuICAgIHRoaXMuZm9ybSA9IHRoaXMubm9kZSBhcyBIVE1MRm9ybUVsZW1lbnQ7XHJcbiAgICB0aGlzLnNldHRpbmdzID0gbmV3IEZpbHRlclNldHRpbmdzKCk7XHJcbiAgICB0aGlzLmZvcm0uYWN0aW9uID0gXCIjXCI7XHJcbiAgICB0aGlzLmZpbHRlcnNDb250YWluZXIgPSBuZXcgQ29tcG9uZW50KFxyXG4gICAgICB0aGlzLm5vZGUsXHJcbiAgICAgIFwiZGl2XCIsXHJcbiAgICAgIFwiZmlsdGVycy1jb250YWluZXJcIlxyXG4gICAgKTtcclxuICAgIHRoaXMuY291bnRyeUZpbHRlciA9IG5ldyBDb21wb25lbnQoXHJcbiAgICAgIHRoaXMuZmlsdGVyc0NvbnRhaW5lci5ub2RlLFxyXG4gICAgICBcImRpdlwiLFxyXG4gICAgICBcImNvdW50cnktZmlsdGVyc1wiXHJcbiAgICApO1xyXG4gICAgdGhpcy5jb2xvckZpbHRlciA9IG5ldyBDb21wb25lbnQoXHJcbiAgICAgIHRoaXMuZmlsdGVyc0NvbnRhaW5lci5ub2RlLFxyXG4gICAgICBcImRpdlwiLFxyXG4gICAgICBcImNvbG9yLWZpbHRlcnNcIlxyXG4gICAgKTtcclxuICAgIHRoaXMuc29ydENvbnRhaW5lciA9IG5ldyBDb21wb25lbnQodGhpcy5ub2RlLCBcImRpdlwiLCBcInNvcnQtY29udGFpbmVyXCIpO1xyXG4gICAgdGhpcy5zb3J0ID0gbmV3IENvbXBvbmVudCh0aGlzLnNvcnRDb250YWluZXIubm9kZSwgXCJkaXZcIiwgXCJzb3J0XCIpO1xyXG4gICAgdGhpcy5zb3J0VGl0bGUgPSBuZXcgQ29tcG9uZW50KFxyXG4gICAgICB0aGlzLnNvcnQubm9kZSxcclxuICAgICAgXCJmaWx0ZXItbmFtZVwiLFxyXG4gICAgICBcInNvcnRcIixcclxuICAgICAgXCLQodC+0YDRgtC40YDQvtCy0LrQsFwiXHJcbiAgICApO1xyXG4gICAgdGhpcy5zZWxlY3QgPSBuZXcgQ29tcG9uZW50KHRoaXMuc29ydC5ub2RlLCBcInNlbGVjdFwiLCBcInNlbGVjdFwiKTtcclxuICAgIHRoaXMuZmlsdGVyc0J0bnMgPSBuZXcgQ29tcG9uZW50KHRoaXMubm9kZSwgXCJkaXZcIiwgXCJidG5zLXBhbmVsXCIpO1xyXG4gICAgdGhpcy5yZXNldEZpbHRlcnMgPSBuZXcgQ29tcG9uZW50KFxyXG4gICAgICB0aGlzLmZpbHRlcnNCdG5zLm5vZGUsXHJcbiAgICAgIFwiYnV0dG9uXCIsXHJcbiAgICAgIFwicmVzZXQtZmlsdGVycyBidG5cIixcclxuICAgICAgXCLQodCx0YDQvtGB0LjRgtGMINGE0LjQu9GM0YLRgNGLXCJcclxuICAgICk7XHJcbiAgICB0aGlzLmNsZWFySGlzdG9yeSA9IG5ldyBDb21wb25lbnQoXHJcbiAgICAgIHRoaXMuZmlsdGVyc0J0bnMubm9kZSxcclxuICAgICAgXCJidXR0b25cIixcclxuICAgICAgXCJyZXNldC1maWx0ZXJzIHJlc2V0IGJ0blwiLFxyXG4gICAgICBcItCe0YfQuNGB0YLQuNGC0Ywg0LjRgdGC0L7RgNC40Y5cIlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IGZpbHRlcnMgPSBMb2NhbFN0b3JhZ2UuZ2V0TG9jYWxTdG9yYWdlKGxvY2FsU3RvcmFnZUtleXMuZmlsdGVycyk7XHJcbiAgICBjb25zdCBjb3VudHJ5TGlzdCA9IGdldENvdW50cnlMaXN0KCk7XHJcbiAgICBjb25zdCBjb2xvckxpc3QgPSBnZXRDb2xvckxpc3QoKTtcclxuXHJcbiAgICBjb25zdCBjb3VudHJ5VGl0bGUgPSBuZXcgQ29tcG9uZW50KFxyXG4gICAgICB0aGlzLmNvdW50cnlGaWx0ZXIubm9kZSxcclxuICAgICAgXCJoNFwiLFxyXG4gICAgICBcImZpbHRlci1uYW1lXCIsXHJcbiAgICAgIFwi0KHRgtGA0LDQvdCwXCJcclxuICAgICk7XHJcbiAgICBjb25zdCBjb3VudHJ5RGl2ID0gbmV3IENvbXBvbmVudChcclxuICAgICAgdGhpcy5jb3VudHJ5RmlsdGVyLm5vZGUsXHJcbiAgICAgIFwiZGl2XCIsXHJcbiAgICAgIFwiY291bnRyeS1maWx0ZXJcIlxyXG4gICAgKTtcclxuICAgIGNvdW50cnlMaXN0LmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgIGNvbnN0IGNoZWNrQm94RGl2ID0gbmV3IENvbXBvbmVudChjb3VudHJ5RGl2Lm5vZGUsIFwiZGl2XCIsIFwiY2hlY2tib3hcIik7XHJcbiAgICAgIGNoZWNrQm94RGl2Lm5vZGUuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJjaGVja2JveERpdiBpZD1cImNvdW50cnlcIj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiY291bnRyeVwiIGlkPVwiY2hlY2ske2luZGV4fVwiIG5hbWU9XCJjb3VudHJ5XCIgdmFsdWU9XCIke2l0ZW19XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNoZWNrYm94LWNvdW50cnlcImZvcj1cImNoZWNrJHtpbmRleH1cIj4ke2l0ZW19PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgPC9kaXY+YDtcclxuICAgICAgaWYgKGZpbHRlcnMgJiYgZmlsdGVycy5jb3VudHJ5LmluY2x1ZGVzKGl0ZW0pKSB7XHJcbiAgICAgICAgY29uc3QgY2IgPSBjaGVja0JveERpdi5ub2RlLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpO1xyXG4gICAgICAgIChjYiBhcyBIVE1MSW5wdXRFbGVtZW50KS5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBjb2xvclRpdGxlID0gbmV3IENvbXBvbmVudChcclxuICAgICAgdGhpcy5jb2xvckZpbHRlci5ub2RlLFxyXG4gICAgICBcImg0XCIsXHJcbiAgICAgIFwiZmlsdGVyLW5hbWVcIixcclxuICAgICAgXCLQptCy0LXRglwiXHJcbiAgICApO1xyXG4gICAgY29uc3QgY29sb3JEaXYgPSBuZXcgQ29tcG9uZW50KFxyXG4gICAgICB0aGlzLmNvbG9yRmlsdGVyLm5vZGUsXHJcbiAgICAgIFwiZGl2XCIsXHJcbiAgICAgIFwiY29sb3ItZmlsdGVyXCJcclxuICAgICk7XHJcbiAgICBjb2xvckxpc3QuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgY29uc3QgY2hlY2tCb3hEaXYgPSBuZXcgQ29tcG9uZW50KGNvbG9yRGl2Lm5vZGUsIFwiZGl2XCIsIFwiY2hlY2tib3hcIik7XHJcbiAgICAgIGNoZWNrQm94RGl2Lm5vZGUuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJjaGVja2JveERpdlwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJjb2xvclwiIGlkPVwiY2hlY2ske1xyXG4gICAgICAgICAgICAgICAgICAgIGluZGV4ICsgY291bnRyeUxpc3QubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICAgIH1cIiBuYW1lPVwiY29sb3JcIiB2YWx1ZT1cIiR7aXRlbX1cIj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY2hlY2tib3gtY291bnRyeVwiZm9yPVwiY2hlY2ske1xyXG4gICAgICAgICAgICAgICAgICAgIGluZGV4ICsgY291bnRyeUxpc3QubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICAgIH1cIj4ke2l0ZW19PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgPC9kaXY+YDtcclxuICAgICAgaWYgKGZpbHRlcnMgJiYgZmlsdGVycy5jb2xvci5pbmNsdWRlcyhpdGVtKSkge1xyXG4gICAgICAgIGNvbnN0IGNiID0gY2hlY2tCb3hEaXYubm9kZS5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKTtcclxuICAgICAgICAoY2IgYXMgSFRNTElucHV0RWxlbWVudCkuY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuc2VsZWN0Lm5vZGUuaW5uZXJIVE1MID0gYDxvcHRpb24gdmFsdWU9XCJcIj48L29wdGlvbj5cclxuICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJCeVByaWNlVXBcIj7Qn9C+INGG0LXQvdC1OiDQv9C+INCy0L7Qt9GA0LDRgdGC0LDQvdC40Y48L29wdGlvbj5cclxuICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJCeVByaWNlRG93blwiPtCf0L4g0YbQtdC90LU6INC/0L4g0YPQsdGL0LLQsNC90LjRjjwvb3B0aW9uPlxyXG4gICAgICAgICAgIDwvZGl2PmA7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCAnLi9mb290ZXIuY3NzJztcclxuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi8uLi91dGlscy9jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9vdGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHByaXZhdGUgZm9vdGVyQ29udGFpbmVyOiBDb21wb25lbnQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IocGFyZW50Tm9kZTogSFRNTEVsZW1lbnQpIHtcclxuICAgICAgICBzdXBlcihkb2N1bWVudC5ib2R5LCAnZm9vdGVyJywgJ2Zvb3RlcicpO1xyXG4gICAgICAgIHRoaXMuZm9vdGVyQ29udGFpbmVyID0gbmV3IENvbXBvbmVudCh0aGlzLm5vZGUsICdkaXYnLCAnZm9vdGVyLWNvbnRhaW5lcicpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyQ29udGFpbmVyKCk7XHJcbiAgICB9XHJcbiAgICByZW5kZXJDb250YWluZXIoKSB7XHJcbiAgICAgICAgdGhpcy5mb290ZXJDb250YWluZXIubm9kZS5pbm5lckhUTUwgPSBgXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb290ZXJfd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzPVwiZm9vdGVyX2xpbmtcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2VwaGVkcmluaTEvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+IEBlcGhlZHJpbmkxPC9hPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzPVwieWVhclwiPjIwMjI8L3A+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3M9XCJmb290ZXJfbGlua1wiIGhyZWY9XCJodHRwczovL3JzLnNjaG9vbC9qcy1zdGFnZTAvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+PGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPVwiYXNzZXRzL2ltZy9yc19zY2hvb2xfanMuc3ZnXCIgd2lkdGg9XCI0MFwiIGFsdD1cImdlb1wiPiBSb2xsaW5nIFNjb3BlcyBTY2hvb2w8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbmA7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgJy4vaGVhZGVyLmNzcyc7XHJcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vLi4vdXRpbHMvY29tcG9uZW50JztcclxuaW1wb3J0IFNlYXJjaCBmcm9tICcuLi9zZWFyY2gvc2VhcmNoJztcclxuaW1wb3J0IHsgQ2FydCB9IGZyb20gJy4uL2NhcnQvY2FydCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY2FydDogQ2FydDtcclxuICAgIHNlYXJjaDogU2VhcmNoO1xyXG4gICAgY29uc3RydWN0b3IocGFyZW50Tm9kZTogSFRNTEVsZW1lbnQpIHtcclxuICAgICAgICBzdXBlcihwYXJlbnROb2RlLCAnaGVhZGVyJywgJ2hlYWRlcicpO1xyXG4gICAgICAgIHRoaXMuc2VhcmNoID0gbmV3IFNlYXJjaCh0aGlzLm5vZGUpO1xyXG4gICAgICAgIHRoaXMuY2FydCA9IG5ldyBDYXJ0KHRoaXMubm9kZSwpO1xyXG4gICAgfVxyXG4gXHJcbn0iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuLi91dGlscy9jb21wb25lbnRcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9oZWFkZXIvaGVhZGVyXCI7XHJcbmltcG9ydCBXaW5lQ2FyZHMgZnJvbSBcIi4vd2luZWNhcmRzL3dpbmVjYXJkc1wiO1xyXG5pbXBvcnQgeyBXaW5lIH0gZnJvbSBcIi4uL3R5cGVzL3Byb2R1Y3RzXCI7XHJcbmltcG9ydCB7IGdvb2RzIH0gZnJvbSBcIi4uL2NvbnN0YW50cy9nb29kc1wiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL2Zvb3Rlci9mb290ZXJcIjtcclxuaW1wb3J0IHsgRmlsdGVycyB9IGZyb20gXCIuL2ZpbHRlcnMvZmlsdGVyc1wiO1xyXG5pbXBvcnQgRmlsdGVyU2V0dGluZ3MgZnJvbSBcIi4vZmlsdGVycy9maWx0ZXJTZXR0aW5nc1wiO1xyXG5pbXBvcnQgeyBMb2NhbFN0b3JhZ2UsIGxvY2FsU3RvcmFnZUtleXMgfSBmcm9tIFwiLi4vdXRpbHMvbG9jYWxzdG9yYWdlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBoZWFkZXI6IEhlYWRlcjtcclxuICBmaWx0ZXJzOiBGaWx0ZXJzO1xyXG4gIGZpbHRlclNldHRpbmdzOiBGaWx0ZXJTZXR0aW5ncztcclxuICB3aW5lY2FyZHM6IFdpbmVDYXJkcztcclxuICB0b3RhbEl0ZW1zOiBudW1iZXI7XHJcbiAgZm9vdGVyOiBGb290ZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHBhcmVudE5vZGU6IEhUTUxFbGVtZW50KSB7XHJcbiAgICBzdXBlcihwYXJlbnROb2RlLCBcImRpdlwiKTtcclxuICAgIHRoaXMuaGVhZGVyID0gbmV3IEhlYWRlcih0aGlzLm5vZGUpO1xyXG4gICAgdGhpcy5maWx0ZXJzID0gbmV3IEZpbHRlcnModGhpcy5ub2RlKTtcclxuICAgIHRoaXMuZmlsdGVyU2V0dGluZ3MgPSBuZXcgRmlsdGVyU2V0dGluZ3MoKTtcclxuICAgIHRoaXMud2luZWNhcmRzID0gbmV3IFdpbmVDYXJkcyh0aGlzLm5vZGUpO1xyXG4gICAgdGhpcy5maWx0ZXJzLnJlbmRlcigpO1xyXG4gICAgdGhpcy5maWx0ZXJTZXR0aW5ncy5maWx0ZXIoKTtcclxuICAgIHRoaXMuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgIHRoaXMudG90YWxJdGVtcyA9XHJcbiAgICAgIHRoaXMuaGVhZGVyLmNhcnQuY2FydExpc3QucmVkdWNlKFxyXG4gICAgICAgIChhY2M6IG51bWJlciwgZWw6IFdpbmUpID0+IGFjYyArIGVsLmluQ2FydCxcclxuICAgICAgICAwXHJcbiAgICAgICkgfHwgMDtcclxuICAgIHRoaXMuZm9vdGVyID0gbmV3IEZvb3Rlcih0aGlzLm5vZGUpO1xyXG4gIH1cclxuXHJcbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICBsZXQgYXJ0aWN1bDogbnVtYmVyO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG4gICAgICBpZiAoZXZlbnQudGFyZ2V0KSB7XHJcbiAgICAgICAgaWYgKCg8SFRNTEVsZW1lbnQ+ZXZlbnQudGFyZ2V0KS5jbGFzc0xpc3QuY29udGFpbnMoXCJjYXJ0X19hZGRcIikpIHtcclxuICAgICAgICAgIGFydGljdWwgPSBOdW1iZXIoKDxIVE1MRWxlbWVudD5ldmVudC50YXJnZXQpLmRhdGFzZXRbXCJhcnRpY3VsXCJdKTtcclxuICAgICAgICAgIHRoaXMuaGVhZGVyLmNhcnQuY2FydEFkZChhcnRpY3VsKTtcclxuICAgICAgICAgIHRoaXMud2luZWNhcmRzLnJlcmVuZGVyKCk7XHJcbiAgICAgICAgICB0aGlzLmhlYWRlci5jYXJ0LnJlbmRlcigpO1xyXG4gICAgICAgICAgaWYgKHRoaXMudG90YWxJdGVtcyA8IDIwKSB7XHJcbiAgICAgICAgICAgIHRoaXMudG90YWxJdGVtcyArPSAxO1xyXG4gICAgICAgICAgICB0aGlzLmhlYWRlci5jYXJ0LnRvdGFsTGFiZWwubm9kZS50ZXh0Q29udGVudCA9IGAke3RoaXMudG90YWxJdGVtc31gO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoKDxIVE1MRWxlbWVudD5ldmVudC50YXJnZXQpLmNsYXNzTGlzdC5jb250YWlucyhcImNhcnRfX3JlbW92ZVwiKSkge1xyXG4gICAgICAgICAgYXJ0aWN1bCA9IE51bWJlcigoPEhUTUxFbGVtZW50PmV2ZW50LnRhcmdldCkuZGF0YXNldFtcImFydGljdWxcIl0pO1xyXG4gICAgICAgICAgdGhpcy5oZWFkZXIuY2FydC5jYXJ0UmVtb3ZlKGFydGljdWwpO1xyXG4gICAgICAgICAgdGhpcy53aW5lY2FyZHMucmVyZW5kZXIoKTtcclxuICAgICAgICAgIHRoaXMuaGVhZGVyLmNhcnQucmVuZGVyKCk7XHJcbiAgICAgICAgICBpZiAodGhpcy50b3RhbEl0ZW1zID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnRvdGFsSXRlbXMgLT0gMTtcclxuICAgICAgICAgICAgdGhpcy5oZWFkZXIuY2FydC50b3RhbExhYmVsLm5vZGUudGV4dENvbnRlbnQgPSBgJHt0aGlzLnRvdGFsSXRlbXN9YDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICgoPEhUTUxFbGVtZW50PmV2ZW50LnRhcmdldCkuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2xvc2UtcG9wdXBcIikpIHtcclxuICAgICAgICAgIHRoaXMuaGVhZGVyLmNhcnQuY2FydENsb3NlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoKDxIVE1MRWxlbWVudD5ldmVudC50YXJnZXQpLmNsYXNzTGlzdC5jb250YWlucyhcImVycm9yX19idG5cIikpIHtcclxuICAgICAgICAgIGlmICgoPEhUTUxFbGVtZW50PmV2ZW50LnRhcmdldCkuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2VhcmNoX19idG5cIikpIHtcclxuICAgICAgICAgICAgdGhpcy5oZWFkZXIuc2VhcmNoLnBvcHVwQ2xvc2UoKTtcclxuICAgICAgICAgICAgdGhpcy53aW5lY2FyZHMucmVyZW5kZXIoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmICgoPEhUTUxFbGVtZW50PmV2ZW50LnRhcmdldCkuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZmlsdGVyX19idG5cIikpIHtcclxuICAgICAgICAgICAgdGhpcy5maWx0ZXJTZXR0aW5ncy5yZXNldEZpbHRlcnMoKTtcclxuICAgICAgICAgICAgdGhpcy5maWx0ZXJTZXR0aW5ncy5wb3B1cENsb3NlKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuaGVhZGVyLmNhcnQubm9kZS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuaGVhZGVyLmNhcnQuY2FydE9wZW4oKTtcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuaGVhZGVyLnNlYXJjaC5zZWFyY2hJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xyXG4gICAgICB0aGlzLmhlYWRlci5zZWFyY2guc2VhcmNoKGdvb2RzKTtcclxuICAgICAgdGhpcy53aW5lY2FyZHMucmVyZW5kZXIodGhpcy5oZWFkZXIuc2VhcmNoLnNlYXJjaERhdGEpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5maWx0ZXJzLnNlbGVjdC5ub2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xyXG4gICAgICB0aGlzLnNvcnQoKTtcclxuICAgICAgdGhpcy53aW5lY2FyZHMucmVyZW5kZXIoXHJcbiAgICAgICAgTG9jYWxTdG9yYWdlLmdldExvY2FsU3RvcmFnZShsb2NhbFN0b3JhZ2VLZXlzLm9uUGFnZSlcclxuICAgICAgKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZmlsdGVycy5jbGVhckhpc3Rvcnkubm9kZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICB0aGlzLmZpbHRlclNldHRpbmdzLnJlc2V0QWxsKCk7XHJcbiAgICAgIHRoaXMud2luZWNhcmRzLnJlcmVuZGVyKGdvb2RzKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZmlsdGVycy5yZXNldEZpbHRlcnMubm9kZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICB0aGlzLmZpbHRlclNldHRpbmdzLnJlc2V0RmlsdGVycygpO1xyXG4gICAgICB0aGlzLndpbmVjYXJkcy5yZXJlbmRlcihcclxuICAgICAgICBMb2NhbFN0b3JhZ2UuZ2V0TG9jYWxTdG9yYWdlKGxvY2FsU3RvcmFnZUtleXMub25QYWdlKVxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5maWx0ZXJzLmZpbHRlcnNDb250YWluZXIubm9kZS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcclxuICAgICAgdGhpcy5maWx0ZXJTZXR0aW5ncy5maWx0ZXIoKTtcclxuICAgICAgaWYgKCFMb2NhbFN0b3JhZ2UuZ2V0TG9jYWxTdG9yYWdlKGxvY2FsU3RvcmFnZUtleXMub25QYWdlKS5sZW5ndGgpIHtcclxuICAgICAgICB0aGlzLmZpbHRlclNldHRpbmdzLm9wZW5Qb3B1cCgpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc29ydCgpO1xyXG4gICAgICB0aGlzLndpbmVjYXJkcy5yZXJlbmRlcihcclxuICAgICAgICBMb2NhbFN0b3JhZ2UuZ2V0TG9jYWxTdG9yYWdlKGxvY2FsU3RvcmFnZUtleXMub25QYWdlKVxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzb3J0KCkge1xyXG4gICAgY29uc3Qgc2VsZWN0ID0gdGhpcy5maWx0ZXJzLnNlbGVjdC5ub2RlIGFzIEhUTUxTZWxlY3RFbGVtZW50O1xyXG4gICAgY29uc3QgaXRlbSA9IHNlbGVjdC52YWx1ZTtcclxuICAgIGlmIChpdGVtID09PSBcIkJ5UHJpY2VVcFwiKSB7XHJcbiAgICAgIHRoaXMuZmlsdGVyU2V0dGluZ3Muc29ydFByaWNlVXAoXHJcbiAgICAgICAgTG9jYWxTdG9yYWdlLmdldExvY2FsU3RvcmFnZShsb2NhbFN0b3JhZ2VLZXlzLm9uUGFnZSkgfHwgZ29vZHNcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIGlmIChpdGVtID09PSBcIkJ5UHJpY2VEb3duXCIpIHtcclxuICAgICAgdGhpcy5maWx0ZXJTZXR0aW5ncy5zb3J0UHJpY2VEb3duKFxyXG4gICAgICAgIExvY2FsU3RvcmFnZS5nZXRMb2NhbFN0b3JhZ2UobG9jYWxTdG9yYWdlS2V5cy5vblBhZ2UpIHx8IGdvb2RzXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCAnLi9zZWFyY2guY3NzJztcclxuaW1wb3J0IHsgV2luZSB9IGZyb20gXCIuLi8uLi90eXBlcy9wcm9kdWN0c1wiO1xyXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuLi8uLi91dGlscy9jb21wb25lbnRcIjtcclxuaW1wb3J0IFdpbmVDYXJkcyBmcm9tIFwiLi4vd2luZWNhcmRzL3dpbmVjYXJkc1wiO1xyXG5pbXBvcnQgeyBMb2NhbFN0b3JhZ2UsIGxvY2FsU3RvcmFnZUtleXMgfSBmcm9tIFwiLi4vLi4vdXRpbHMvbG9jYWxzdG9yYWdlXCI7XHJcbmltcG9ydCB7IGdvb2RzIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50cy9nb29kc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHNlYXJjaERhdGE6IFdpbmVbXTtcclxuICAgIHNlYXJjaElucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgaW5wdXQ6IENvbXBvbmVudDtcclxuICAgIHdpbmVjYXJkczogV2luZUNhcmRzO1xyXG4gICAgc2VhcmNoUG9wdXA6IENvbXBvbmVudDtcclxuICAgIHNlYXJjaFBvcHVwQ29udGFpbmVyOiBDb21wb25lbnQ7XHJcbiAgICBjb25zdHJ1Y3RvcihwYXJlbnROb2RlOiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgIHN1cGVyKHBhcmVudE5vZGUsICdkaXYnLCAnc2VhcmNoLWNvbnRhaW5lcicpO1xyXG4gICAgICAgIHRoaXMuaW5wdXQgPSBuZXcgQ29tcG9uZW50KHRoaXMubm9kZSwgJ2lucHV0JywgJ3NlYXJjaC1jb250YWluZXJfX2lucHV0Jyk7XHJcbiAgICAgICAgdGhpcy5zZWFyY2hJbnB1dCA9IHRoaXMuaW5wdXQubm9kZSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgIHRoaXMuc2VhcmNoSW5wdXQuYXV0b2NvbXBsZXRlID0gJ29mZic7XHJcbiAgICAgICAgdGhpcy5zZWFyY2hJbnB1dC5wbGFjZWhvbGRlciA9ICfQn9C+0LjRgdC6Li4uJztcclxuICAgICAgICB0aGlzLnNlYXJjaElucHV0LnR5cGUgPSAnc2VhcmNoJztcclxuICAgICAgICB0aGlzLnNlYXJjaElucHV0LmZvY3VzKCk7XHJcbiAgICAgICAgdGhpcy5zZWFyY2hEYXRhID0gTG9jYWxTdG9yYWdlLmdldExvY2FsU3RvcmFnZShsb2NhbFN0b3JhZ2VLZXlzLmdvb2RzKSB8fGdvb2RzO1xyXG4gICAgICAgIHRoaXMud2luZWNhcmRzID0gbmV3IFdpbmVDYXJkcygpO1xyXG4gICAgICAgIHRoaXMuc2VhcmNoUG9wdXAgPSBuZXcgQ29tcG9uZW50KCk7XHJcbiAgICAgICAgdGhpcy5zZWFyY2hQb3B1cENvbnRhaW5lciA9IG5ldyBDb21wb25lbnQodGhpcy5zZWFyY2hQb3B1cC5ub2RlLCAnZGl2JywgJ3NlYXJjaC1wb3B1cF9fY29udGFpbmVyJyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2VhcmNoKGRhdGE6IFdpbmVbXSkge1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IHRoaXMuc2VhcmNoSW5wdXQudmFsdWUudHJpbSgpO1xyXG4gICAgICAgIHZhbHVlID0gdmFsdWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICB0aGlzLnNlYXJjaERhdGEgPSBbXTtcclxuICAgICAgICBpZiAodmFsdWUgIT0gJycpIHtcclxuICAgICAgICAgICAgZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5uYW1lLnRvTG93ZXJDYXNlKCkuc3RhcnRzV2l0aCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaERhdGEucHVzaChpdGVtKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgIFxyXG4gICAgICAgICAgICBpZiAodGhpcy5zZWFyY2hEYXRhLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hJbnB1dC5yZWFkT25seSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaFBvcHVwQ29udGFpbmVyID0gbmV3IENvbXBvbmVudChkb2N1bWVudC5ib2R5LCAnZGl2JywgJ2NhcnRfX2Vycm9yJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaFBvcHVwQ29udGFpbmVyLm5vZGUuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgIDxwIGNsYXNzPVwiZXJyb3JfX21lc3NhZ2VcIj7Qn9C+INC00LDQvdC90L7QvNGDINC30LDQv9GA0L7RgdGDINC90LjRh9C10LPQviDQvdC1INC90LDQudC00LXQvdC+PC9wPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJlcnJvcl9fYnRuIHNlYXJjaF9fYnRuXCIgPk9rPC9idXR0b24+YDtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXknKSEuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoRGF0YSA9IGRhdGE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHBvcHVwQ2xvc2UoKSB7XHJcbiAgICAgICAgdGhpcy5zZWFyY2hQb3B1cENvbnRhaW5lci5kZXN0cm95KCk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheScpIS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnc2Nyb2xsJztcclxuICAgIHRoaXMuc2VhcmNoSW5wdXQucmVhZE9ubHkgPSBmYWxzZTtcclxuICAgIHRoaXMuc2VhcmNoSW5wdXQudmFsdWUgPSAnJztcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uLy4uL3V0aWxzL2NvbXBvbmVudCc7XHJcbmltcG9ydCB7IFdpbmUgfSBmcm9tICcuLi8uLi90eXBlcy9wcm9kdWN0cyc7XHJcbmltcG9ydCBUb0NhcnRCdG4gZnJvbSAnLi93aW5lY2FyZC1idG4nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgd2luZUNhcmRGYWNlOiBDb21wb25lbnQ7XHJcbiAgICBzdGF0aWMgd2luZUNhcmRGYWNlRGV0YWlsczogQ29tcG9uZW50O1xyXG4gICAgc3RhdGljIHdpbmVDYXJkRmFjZU5hbWU6IENvbXBvbmVudDtcclxuICAgIHN0YXRpYyB3aW5lQ2FyZEZhY2VQaG90bzogQ29tcG9uZW50O1xyXG4gICAgc3RhdGljIHdpbmVDYXJkRmFjZUNvdW50OiBDb21wb25lbnQ7XHJcbiAgICBzdGF0aWMgd2luZUNhcmRGYWNlUHJpY2U6IENvbXBvbmVudDtcclxuICAgIHN0YXRpYyB3aW5lQ2FyZEJhY2s6IENvbXBvbmVudDtcclxuICAgIHN0YXRpYyB3aW5lQ2FyZEJhY2tEZXRhaWxzOiBDb21wb25lbnQ7XHJcbiAgICBzdGF0aWMgd2luZUNhcmRCYWNrTmFtZTogQ29tcG9uZW50O1xyXG4gICAgc3RhdGljIHdpbmVDYXJkQmFja01hZGVCeTogQ29tcG9uZW50O1xyXG4gICAgc3RhdGljIHdpbmVDYXJkQmFja0NvdW50cnk6IENvbXBvbmVudDtcclxuICAgIHN0YXRpYyB3aW5lQ2FyZEJhY2tZZWFyOiBDb21wb25lbnQ7XHJcbiAgICBzdGF0aWMgd2luZUNhcmRCYWNrQWxjb2hvbDogQ29tcG9uZW50O1xyXG4gICAgc3RhdGljIHdpbmVDYXJkQmFja1ZvbDogQ29tcG9uZW50O1xyXG4gICAgc3RhdGljIHdpbmVDYXJkQmFja0NvbG9yOiBDb21wb25lbnQ7XHJcbiAgICBzdGF0aWMgYnRuOiBDb21wb25lbnQ7XHJcbiAgICBjb25zdHJ1Y3RvcihwYXJlbnROb2RlOiBIVE1MRWxlbWVudCwgY2FyZERhdGE6IFdpbmUpIHtcclxuICAgICAgICBzdXBlcihwYXJlbnROb2RlLCAnZGl2JywgJ3dpbmVjYXJkc19faXRlbScsICcnKTtcclxuICAgICAgICB0aGlzLnJlbmRlcihjYXJkRGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKGNhcmREYXRhOiBXaW5lKSB7XHJcbiAgICAgICAgQ2FyZC53aW5lQ2FyZEZhY2UgPSBuZXcgQ29tcG9uZW50KHRoaXMubm9kZSwgJ2RpdicsICd3aW5lY2FyZHMtZmFjZScpO1xyXG4gICAgICAgIENhcmQud2luZUNhcmRGYWNlRGV0YWlscyA9IG5ldyBDb21wb25lbnQoQ2FyZC53aW5lQ2FyZEZhY2Uubm9kZSwgJ2RpdicsICd3aW5lY2FyZHMtZmFjZV9fZGV0YWlscycpO1xyXG4gICAgICAgIENhcmQud2luZUNhcmRGYWNlTmFtZSA9IG5ldyBDb21wb25lbnQoQ2FyZC53aW5lQ2FyZEZhY2VEZXRhaWxzLm5vZGUsICdoMicsICd3aW5lY2FyZHMtZmFjZV9fbmFtZScsIGAke2NhcmREYXRhLm5hbWV9YCk7XHJcbiAgICAgICAgQ2FyZC53aW5lQ2FyZEZhY2VQaG90byA9IG5ldyBDb21wb25lbnQoQ2FyZC53aW5lQ2FyZEZhY2VEZXRhaWxzLm5vZGUsICdkaXYnLCAnd2luZWNhcmRzLWZhY2VfX3Bob3RvJyk7XHJcbiAgICAgICAgQ2FyZC53aW5lQ2FyZEZhY2VQaG90by5ub2RlLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtjYXJkRGF0YS5pbWFnZX0pYDtcclxuICAgICAgICBDYXJkLndpbmVDYXJkRmFjZUNvdW50ID0gbmV3IENvbXBvbmVudChDYXJkLndpbmVDYXJkRmFjZURldGFpbHMubm9kZSwgJ2gzJywgJ3dpbmVjYXJkcy1mYWNlX19jb3VudCcsIGDQkiDQvdCw0LvQuNGH0LjQuCA6ICR7Y2FyZERhdGEuY291bnR9YCk7XHJcbiAgICAgICAgQ2FyZC53aW5lQ2FyZEZhY2VQcmljZSA9IG5ldyBDb21wb25lbnQoQ2FyZC53aW5lQ2FyZEZhY2VEZXRhaWxzLm5vZGUsICdoMycsICd3aW5lY2FyZHMtZmFjZV9fcHJpY2UnLCBgJHtjYXJkRGF0YS5wcmljZX0gQllOYCk7XHJcbiAgICAgICAgQ2FyZC53aW5lQ2FyZEJhY2sgPSBuZXcgQ29tcG9uZW50KHRoaXMubm9kZSwgJ2RpdicsICd3aW5lY2FyZHMtYmFjaycpO1xyXG4gICAgICAgIENhcmQud2luZUNhcmRCYWNrRGV0YWlscyA9IG5ldyBDb21wb25lbnQoQ2FyZC53aW5lQ2FyZEJhY2subm9kZSwgJ2RpdicsICd3aW5lY2FyZHMtYmFja19fZGV0YWlscycpO1xyXG4gICAgICAgIENhcmQud2luZUNhcmRCYWNrTmFtZSA9IG5ldyBDb21wb25lbnQoQ2FyZC53aW5lQ2FyZEJhY2tEZXRhaWxzLm5vZGUsICdoMicsICd3aW5lY2FyZHMtYmFja19fbmFtZScsIGAke2NhcmREYXRhLm5hbWV9YCk7XHJcbiAgICAgICAgQ2FyZC53aW5lQ2FyZEJhY2tNYWRlQnkgPSBuZXcgQ29tcG9uZW50KENhcmQud2luZUNhcmRCYWNrRGV0YWlscy5ub2RlLCAncCcsICd3aW5lY2FyZHMtYmFja19fbWFkZUJ5JywgYNCf0YDQvtC40LfQstC+0LTQuNGC0LXQu9GMIDogJHtjYXJkRGF0YS5tYWRlQnl9YCk7XHJcbiAgICAgICAgQ2FyZC53aW5lQ2FyZEJhY2tDb3VudHJ5ID0gbmV3IENvbXBvbmVudChDYXJkLndpbmVDYXJkQmFja0RldGFpbHMubm9kZSwgJ3AnLCAnd2luZWNhcmRzLWJhY2tfX2NvdW50cnknLCBg0KHRgtGA0LDQvdCwIDogJHtjYXJkRGF0YS5jb3VudHJ5fWApO1xyXG4gICAgICAgIENhcmQud2luZUNhcmRCYWNrWWVhciA9IG5ldyBDb21wb25lbnQoQ2FyZC53aW5lQ2FyZEJhY2tEZXRhaWxzLm5vZGUsICdwJywgJ3dpbmVjYXJkcy1iYWNrX195ZWFyJywgYNCT0L7QtCA6ICR7Y2FyZERhdGEueWVhcn1gKTtcclxuICAgICAgICBDYXJkLndpbmVDYXJkQmFja0NvbG9yID0gbmV3IENvbXBvbmVudChDYXJkLndpbmVDYXJkQmFja0RldGFpbHMubm9kZSwgJ3AnLCAnd2luZWNhcmRzLWJhY2tfX2NvbG9yJywgYNCm0LLQtdGCIDogJHtjYXJkRGF0YS5jb2xvcn1gKTtcclxuICAgICAgICBDYXJkLndpbmVDYXJkQmFja0FsY29ob2wgPSBuZXcgQ29tcG9uZW50KENhcmQud2luZUNhcmRCYWNrRGV0YWlscy5ub2RlLCAncCcsICd3aW5lY2FyZHMtYmFja19fYWxjb2hvbCcsIGDQmtGA0LXQv9C+0YHRgtGMIDogJHtjYXJkRGF0YS5hbGNvaG9sfSVgKTtcclxuICAgICAgICBDYXJkLndpbmVDYXJkQmFja1ZvbCA9IG5ldyBDb21wb25lbnQoQ2FyZC53aW5lQ2FyZEJhY2tEZXRhaWxzLm5vZGUsICdwJywgJy53aW5lY2FyZHMtYmFja19fdm9sJywgYNCe0LHRitC10LwgOiAke2NhcmREYXRhLnZvbH3Qu2ApO1xyXG4gICAgICAgIENhcmQuYnRuID0gbmV3IFRvQ2FydEJ0bihDYXJkLndpbmVDYXJkQmFja0RldGFpbHMubm9kZSk7XHJcbiAgICAgICAgQ2FyZC5idG4ubm9kZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtYXJ0aWN1bCcsIGAke2NhcmREYXRhLmlkfWApO1xyXG4gICAgICAgIGlmICghY2FyZERhdGEuaW5TdG9jayB8fCBjYXJkRGF0YS5jb3VudCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnN0eWxlLm9wYWNpdHkgPSAnMC41JztcclxuICAgICAgICAgICAgQ2FyZC53aW5lQ2FyZEZhY2VDb3VudC5ub2RlLnRleHRDb250ZW50ID0gJ9Cd0LXRgiDQsiDQvdCw0LvQuNGH0LjQuCc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjYXJkRGF0YS5jb3VudCA9PT0gMD8gY2FyZERhdGEuaW5TdG9jayA9IGZhbHNlIDogY2FyZERhdGEuaW5TdG9jayA9IHRydWU7XHJcbiAgIFxyXG4gICAgfVxyXG59IiwiaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi4vLi4vdXRpbHMvY29tcG9uZW50XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb0NhcnRCdG4gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocGFyZW50Tm9kZTogSFRNTEVsZW1lbnQpIHtcclxuICAgICAgICBzdXBlcihwYXJlbnROb2RlICwnYnV0dG9uJyAsJ2NhcnRfX2FkZCBjYXJ0X19idG4nLCAn0LIg0LrQvtGA0LfQuNC90YMnKTtcclxuICAgIH1cclxufSIsImltcG9ydCAnLi93aW5lY2FyZHMuY3NzJztcclxuaW1wb3J0IHsgV2luZSB9IGZyb20gJy4uLy4uL3R5cGVzL3Byb2R1Y3RzJztcclxuaW1wb3J0IHsgTG9jYWxTdG9yYWdlLCBsb2NhbFN0b3JhZ2VLZXlzIH0gZnJvbSAnLi4vLi4vdXRpbHMvbG9jYWxzdG9yYWdlJztcclxuaW1wb3J0IHsgZ29vZHMgfSBmcm9tICcuLi8uLi9jb25zdGFudHMvZ29vZHMnO1xyXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uLy4uL3V0aWxzL2NvbXBvbmVudCc7XHJcbmltcG9ydCBDYXJkIGZyb20gJy4vY2FyZCc7XHJcblxyXG5jbGFzcyBXaW5lQ2FyZHMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgd2luZUNvbnRhaW5lcjogQ29tcG9uZW50O1xyXG4gICAgZGF0YTogV2luZVtdO1xyXG4gICAgd2luZUNhcmQ/OiBDYXJkO1xyXG4gICAgY29uc3RydWN0b3IocGFyZW50Tm9kZT86IEhUTUxFbGVtZW50KSB7XHJcbiAgICAgICAgc3VwZXIocGFyZW50Tm9kZSwgJ2RpdicsICd3aW5lY2FyZHMnKTtcclxuICAgICAgICB0aGlzLndpbmVDb250YWluZXIgPSBuZXcgQ29tcG9uZW50KCk7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gTG9jYWxTdG9yYWdlLmdldExvY2FsU3RvcmFnZShsb2NhbFN0b3JhZ2VLZXlzLm9uUGFnZSkgfHxcclxuICAgIGdvb2RzO1xyXG4gICAgICAgIHRoaXMucmVuZGVyQ2FyZHMoKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJDYXJkcyhkYXRhPzogV2luZVtdKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YSB8fCBMb2NhbFN0b3JhZ2UuZ2V0TG9jYWxTdG9yYWdlKGxvY2FsU3RvcmFnZUtleXMub25QYWdlKSB8fCBnb29kcztcclxuICAgICAgICB0aGlzLndpbmVDb250YWluZXIgPSBuZXcgQ29tcG9uZW50KHRoaXMubm9kZSwgJ2RpdicsICd3aW5lY2FyZHMtY29udGFpbmVyJyk7XHJcbiAgXHJcbiAgICAgICAgdGhpcy5kYXRhLmZvckVhY2goKGl0ZW06IFdpbmUsIGlkeDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMud2luZUNhcmQgPSBuZXcgQ2FyZCh0aGlzLndpbmVDb250YWluZXIubm9kZSwgaXRlbSk7XHJcbiAgICAgICAgICAgIHRoaXMud2luZUNhcmQubm9kZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtYXJ0aWN1bCcsIGAke2lkeH1gKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXJlbmRlcihkYXRhPyA6IFdpbmVbXSkge1xyXG4gICAgICAgIHRoaXMud2luZUNvbnRhaW5lci5kZXN0cm95KCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJDYXJkcyhkYXRhKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2luZUNhcmRzOyIsImV4cG9ydCBjb25zdCBnb29kcyA9IFtcclxuICAgIHtcclxuICAgICAgICBpZDogMCxcclxuICAgICAgICBuYW1lOiBcIk5hdGlvbmFsIFZpbnRhZ2UgUG9ydFwiLFxyXG4gICAgICAgIG1hZGVCeTogXCJRdWludGEgZG8gTm92YWxcIixcclxuICAgICAgICBjb3VudHJ5OiBcItCf0L7RgNGC0YPQs9Cw0LvQuNGPXCIsXHJcbiAgICAgICAgeWVhcjogXCIyMDExXCIsXHJcbiAgICAgICAgYWxjb2hvbDogXCIxOVwiLFxyXG4gICAgICAgIHZvbDogXCIwLjc1XCIsXHJcbiAgICAgICAgcHJpY2U6IFwiMTM4MzJcIixcclxuICAgICAgICBjb2xvcjogXCJyZWRcIixcclxuICAgICAgICBpbWFnZTogJy4vYXNzZXRzL2ltZy9wb3J0dmV5bi1xdWludGEtZG8tbm92YWwtbmFjaW9uYWwtdmludGFnZS1wb3J0LTIwMTEucG5nJyxcclxuICAgICAgICBjb3VudDogNSxcclxuICAgICAgICBpblN0b2NrOiB0cnVlLFxyXG4gICAgICAgIGluQ2FydDogMCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgbmFtZTogXCJCbGF1ZnJhbmtpc2NoIENsYXNzaWNcIixcclxuICAgICAgICBtYWRlQnk6IFwiSGFucyBJZ2xlclwiLFxyXG4gICAgICAgIGNvdW50cnk6IFwi0JDQstGB0YLRgNC40Y9cIixcclxuICAgICAgICB5ZWFyOiBcIjIwMTlcIixcclxuICAgICAgICBhbGNvaG9sOiBcIjEzXCIsXHJcbiAgICAgICAgdm9sOiBcIjAuNzVcIixcclxuICAgICAgICBwcmljZTogJzE3NCcsXHJcbiAgICAgICAgY29sb3I6ICdyZWQnLFxyXG4gICAgICAgIGltYWdlOiAnLi9hc3NldHMvaW1nL2JsYXVmcmFua2lzY2gtY2xhc3NpYy5wbmcnLFxyXG4gICAgICAgIGNvdW50OiA1LFxyXG4gICAgICAgIGluU3RvY2s6IHRydWUsXHJcbiAgICAgICAgaW5DYXJ0OiAwLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogMixcclxuICAgICAgICBuYW1lOiBcIlJoZWluZ2F1IFJpZXNsaW5nIFRyb2NrZW5cIixcclxuICAgICAgICBtYWRlQnk6IFwiUm9iZXJ0IFdlaWxcIixcclxuICAgICAgICBjb3VudHJ5OiBcItCT0LXRgNC80LDQvdC40Y9cIixcclxuICAgICAgICB5ZWFyOiBcIjIwMTlcIixcclxuICAgICAgICBhbGNvaG9sOiBcIjEyXCIsXHJcbiAgICAgICAgdm9sOiBcIjAuNzVcIixcclxuICAgICAgICBwcmljZTogJzIwNCcsXHJcbiAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgaW1hZ2U6ICcuL2Fzc2V0cy9pbWcvcmhlaW5nYXUtcmllc2xpbmctdHJvY2tlbi5wbmcnLFxyXG4gICAgICAgIGNvdW50OiA1LFxyXG4gICAgICAgIGluU3RvY2s6IHRydWUsXHJcbiAgICAgICAgaW5DYXJ0OiAwLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogMyxcclxuICAgICAgICBuYW1lOiBcIk1hbGxlb3VzIGRlIFNhbmNob21hcnRpblwiLFxyXG4gICAgICAgIG1hZGVCeTogXCJFbWlsaW8gTW9yb1wiLFxyXG4gICAgICAgIGNvdW50cnk6IFwi0JjRgdC/0LDQvdC40Y9cIixcclxuICAgICAgICB5ZWFyOiBcIjIwMThcIixcclxuICAgICAgICBhbGNvaG9sOiBcIjE0XCIsXHJcbiAgICAgICAgdm9sOiBcIjAuNzVcIixcclxuICAgICAgICBwcmljZTogJzEzMDcnLFxyXG4gICAgICAgIGNvbG9yOiAncmVkJyxcclxuICAgICAgICBpbWFnZTogJy4vYXNzZXRzL2ltZy9tYWxsZW91cy1kZS1zYW5jaG9tYXJ0aW4ucG5nJyxcclxuICAgICAgICBjb3VudDogNSxcclxuICAgICAgICBpblN0b2NrOiB0cnVlLFxyXG4gICAgICAgIGluQ2FydDogMCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDQsXHJcbiAgICAgICAgbmFtZTogXCJHYXZpIGRlaSBHYXZpIChFdGljaGV0dGEgTmVyYSlcIixcclxuICAgICAgICBtYWRlQnk6IFwibGEgU2NvbGNhXCIsXHJcbiAgICAgICAgY291bnRyeTogXCLQmNGC0LDQu9C40Y9cIixcclxuICAgICAgICB5ZWFyOiBcIjIwMjBcIixcclxuICAgICAgICBhbGNvaG9sOiBcIjEyXCIsXHJcbiAgICAgICAgdm9sOiBcIjAuNzVcIixcclxuICAgICAgICBwcmljZTogJzMyNicsXHJcbiAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgaW1hZ2U6ICcuL2Fzc2V0cy9pbWcvZ2F2aS1kZWktZ2F2aS5wbmcnLFxyXG4gICAgICAgIGNvdW50OiA1LFxyXG4gICAgICAgIGluU3RvY2s6IHRydWUsXHJcbiAgICAgICAgaW5DYXJ0OiAwLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogNSxcclxuICAgICAgICBuYW1lOiBcIkNoYXJseSBEdWRlc1wiLFxyXG4gICAgICAgIG1hZGVCeTogXCJUd28gSGFuZHNcIixcclxuICAgICAgICBjb3VudHJ5OiBcItCQ0LLRgdGC0YDQsNC70LjRj1wiLFxyXG4gICAgICAgIHllYXI6IFwiMjAyMFwiLFxyXG4gICAgICAgIGFsY29ob2w6IFwiMTRcIixcclxuICAgICAgICB2b2w6IFwiMS41XCIsXHJcbiAgICAgICAgcHJpY2U6ICc0MzUnLFxyXG4gICAgICAgIGNvbG9yOiAncmVkJyxcclxuICAgICAgICBpbWFnZTogXCIuL2Fzc2V0cy9pbWcvY2hhcmxleS1kdWRlcy5wbmdcIixcclxuICAgICAgICBjb3VudDogNSxcclxuICAgICAgICBpblN0b2NrOiB0cnVlLFxyXG4gICAgICAgIGluQ2FydDogMCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDYsXHJcbiAgICAgICAgbmFtZTogXCJSaWNoZWJvdXJnIEdyYW5nIEdydVwiLFxyXG4gICAgICAgIG1hZGVCeTogXCJEb21haW5lIEplYW4gR3Jpdm90XCIsXHJcbiAgICAgICAgY291bnRyeTogXCLQpNGA0LDQvdGG0LjRj1wiLFxyXG4gICAgICAgIHllYXI6IFwiMjAxNVwiLFxyXG4gICAgICAgIGFsY29ob2w6IFwiMTNcIixcclxuICAgICAgICB2b2w6IFwiMC43NVwiLFxyXG4gICAgICAgIHByaWNlOiAnMTY3NzgnLFxyXG4gICAgICAgIGNvbG9yOiAncmVkJyxcclxuICAgICAgICBpbWFnZTogJy4vYXNzZXRzL2ltZy9yaWNoZWJvdXJnLWdyYW5kLWdydS5wbmcnLFxyXG4gICAgICAgIGNvdW50OiA1LFxyXG4gICAgICAgIGluU3RvY2s6IHRydWUsXHJcbiAgICAgICAgaW5DYXJ0OiAwLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogNyxcclxuICAgICAgICBuYW1lOiBcIkNoYWJsaXMgVmllaWxsZXMgVmlnaGVzIDE5NDZcIixcclxuICAgICAgICBtYWRlQnk6IFwiSmVhbi1NYXJjIEJyb2NhcmQgKERvbWFpbmUgU2FpbnRlLUNsYWlyZSlcIixcclxuICAgICAgICBjb3VudHJ5OiBcItCk0YDQsNC90YbQuNGPXCIsXHJcbiAgICAgICAgeWVhcjogXCIyMDE4XCIsXHJcbiAgICAgICAgYWxjb2hvbDogXCIxM1wiLFxyXG4gICAgICAgIHZvbDogXCIwLjc1XCIsXHJcbiAgICAgICAgcHJpY2U6ICczMTMnLFxyXG4gICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgIGltYWdlOiAnLi9hc3NldHMvaW1nL2NoYWJsaXMtdmllaWxsZXMtdmlnaGVzLTE5NDYucG5nJyxcclxuICAgICAgICBjb3VudDogNSxcclxuICAgICAgICBpblN0b2NrOiB0cnVlLFxyXG4gICAgICAgIGluQ2FydDogMCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDgsXHJcbiAgICAgICAgbmFtZTogXCI1MHg1MFwiLFxyXG4gICAgICAgIG1hZGVCeTogXCJDYXBhbm5lbGxlXCIsXHJcbiAgICAgICAgY291bnRyeTogXCLQmNGC0LDQu9C40Y9cIixcclxuICAgICAgICB5ZWFyOiBcIjIwMTVcIixcclxuICAgICAgICBhbGNvaG9sOiBcIjEzXCIsXHJcbiAgICAgICAgdm9sOiBcIjAuNzVcIixcclxuICAgICAgICBwcmljZTogJzI1MDUnLFxyXG4gICAgICAgIGNvbG9yOiAncmVkJyxcclxuICAgICAgICBpbWFnZTogJy4vYXNzZXRzL2ltZy81MHg1MC5wbmcnLFxyXG4gICAgICAgIGNvdW50OiA1LFxyXG4gICAgICAgIGluU3RvY2s6IHRydWUsXHJcbiAgICAgICAgaW5DYXJ0OiAwLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogOSxcclxuICAgICAgICBuYW1lOiBcIlBlbmZvbGRzIEdyYW5nZVwiLFxyXG4gICAgICAgIG1hZGVCeTogXCJQZW5mb2xkc1wiLFxyXG4gICAgICAgIGNvdW50cnk6IFwi0JDQstGB0YLRgNCw0LvQuNGPXCIsXHJcbiAgICAgICAgeWVhcjogXCIyMDE2XCIsXHJcbiAgICAgICAgYWxjb2hvbDogXCIxNFwiLFxyXG4gICAgICAgIHZvbDogXCIwLjc1XCIsXHJcbiAgICAgICAgcHJpY2U6ICc4NzEnLFxyXG4gICAgICAgIGNvbG9yOiAncmVkJyxcclxuICAgICAgICBpbWFnZTogJy4vYXNzZXRzL2ltZy9wZW5mb2xkcy1ncmFuZ2UucG5nJyxcclxuICAgICAgICBjb3VudDogNSxcclxuICAgICAgICBpblN0b2NrOiB0cnVlLFxyXG4gICAgICAgIGluQ2FydDogMCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDEwLFxyXG4gICAgICAgIG5hbWU6IFwiUGVuZm9sZHMgQmluIDM4OSBDYWJlcm5ldCBTaGlyYXpcIixcclxuICAgICAgICBtYWRlQnk6IFwiUGVuZm9sZHNcIixcclxuICAgICAgICBjb3VudHJ5OiBcItCQ0LLRgdGC0YDQsNC70LjRj1wiLFxyXG4gICAgICAgIHllYXI6IFwiMjAxOVwiLFxyXG4gICAgICAgIGFsY29ob2w6IFwiMTRcIixcclxuICAgICAgICB2b2w6IFwiMC43NVwiLFxyXG4gICAgICAgIHByaWNlOiAnODcxJyxcclxuICAgICAgICBjb2xvcjogJ3JlZCcsXHJcbiAgICAgICAgaW1hZ2U6ICcuL2Fzc2V0cy9pbWcvcGVuZm9sZHMtYmluLTM4OS1jYWJlcm5ldC1zaGlyYXoucG5nJyxcclxuICAgICAgICBjb3VudDogNSxcclxuICAgICAgICBpblN0b2NrOiB0cnVlLFxyXG4gICAgICAgIGluQ2FydDogMCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDExLFxyXG4gICAgICAgIG5hbWU6IFwiS3VybmlcIixcclxuICAgICAgICBtYWRlQnk6IFwiT2FzaSBkZWdsaSBBbmdlbGlcIixcclxuICAgICAgICBjb3VudHJ5OiBcItCY0YLQsNC70LjRj1wiLFxyXG4gICAgICAgIHllYXI6IFwiMjAxOFwiLFxyXG4gICAgICAgIGFsY29ob2w6IFwiMTRcIixcclxuICAgICAgICB2b2w6IFwiMS41XCIsXHJcbiAgICAgICAgcHJpY2U6ICcxNzQyJyxcclxuICAgICAgICBjb2xvcjogJ3JlZCcsXHJcbiAgICAgICAgaW1hZ2U6ICcuL2Fzc2V0cy9pbWcva3VybmkucG5nJyxcclxuICAgICAgICBjb3VudDogNSxcclxuICAgICAgICBpblN0b2NrOiBmYWxzZSxcclxuICAgICAgICBpbkNhcnQ6IDAsXHJcbiAgICB9LFxyXG5dOyIsIi8vIGV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudCB7XHJcbi8vICAgcHJvdGVjdGVkIGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG5cclxuLy8gICBjb25zdHJ1Y3Rvcih0YWdOYW1lOiBzdHJpbmcsIGNsYXNzTmFtZTogc3RyaW5nID0gJycsIGlkPzogc3RyaW5nKSB7XHJcbi8vICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xyXG4vLyAgICAgdGhpcy5lbGVtZW50LmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcclxuLy8gICAgIGlkID8gKHRoaXMuZWxlbWVudC5pZCA9IGlkKSA6IG51bGw7XHJcbi8vICAgfVxyXG5cclxuLy8gICByZW5kZXIoKSB7XHJcbi8vICAgICByZXR1cm4gdGhpcy5lbGVtZW50O1xyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50IHtcclxuICAgIG5vZGU6IEhUTUxFbGVtZW50O1xyXG4gICAgY29uc3RydWN0b3IocGFyZW50Tm9kZT86IEhUTUxFbGVtZW50LCB0YWdOYW1lID0gJ2RpdicsIGNsYXNzTmFtZSA9ICcnLCBjb250ZW50ID0gJycpIHtcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcclxuICAgICAgICBlbGVtZW50LmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcclxuICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gY29udGVudDtcclxuICAgICAgICBpZiAocGFyZW50Tm9kZSkge1xyXG4gICAgICAgICAgICBwYXJlbnROb2RlLmFwcGVuZChlbGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ub2RlID0gZWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBkZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5yZW1vdmUoKTtcclxuICAgIH1cclxufVxyXG4iLCJjb25zdCBlbnVtIGxvY2FsU3RvcmFnZUtleXMge1xyXG4gIGZpbHRlcnMgPSAnZmlsdGVycycsXHJcbiAgY2FydCA9ICdjYXJ0JyxcclxuICBnb29kcyA9ICdnb29kcycsXHJcbiAgdG90YWxJdGVtc0luQ2FydCA9ICd0b3RhbEl0ZW1zSW5DYXJ0JyxcclxuICBmaWx0ZXJlZCA9ICdmaWx0ZXJlZCcsXHJcbiAgc29ydGVkID0gJ3NvcnRlZCcsXHJcbiAgb25QYWdlID0gJ29uUGFnZScsXHJcbn1cclxuXHJcbmNsYXNzIExvY2FsU3RvcmFnZSB7XHJcbiAgXHJcbiAgICBzdGF0aWMgc2V0TG9jYWxTdG9yYWdlKFxyXG4gICAgICAgIGRhdGFLZXk6IGxvY2FsU3RvcmFnZUtleXMsXHJcbiAgICAgICAgZGF0YTogb2JqZWN0IHwgW10gfCBzdHJpbmcgfCBudW1iZXJcclxuICAgICk6IHZvaWQge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGRhdGFLZXksIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICAgIH1cclxuICBcclxuICAgIHN0YXRpYyBnZXRMb2NhbFN0b3JhZ2UoZGF0YTogbG9jYWxTdG9yYWdlS2V5cyl7XHJcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGRhdGEpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKFN0cmluZyhsb2NhbFN0b3JhZ2UuZ2V0SXRlbShkYXRhKSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgIH1cclxufVxyXG4gIFxyXG5leHBvcnQgeyBMb2NhbFN0b3JhZ2UsIGxvY2FsU3RvcmFnZUtleXMgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IEFwcCBmcm9tICcuL2FwcCc7XHJcbmltcG9ydCAnLi9nbG9iYWwuY3NzJztcclxuXHJcbmNvbnN0IGFwcCA9IG5ldyBBcHAoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=