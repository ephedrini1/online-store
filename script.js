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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --background: #140a0a;\n  --red: #d60000;\n  --gold: #fdc854;\n }\n\n .winecards{\n  width: 90%;\n  margin: 0 auto;\n  max-width: 80rem;\n}\n\n.winecards-container {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  grid-column-gap: 3em;\n  grid-row-gap: 3em;\n}\n\n.winecards__item {\n  text-align: center;\n  width: 20em;\n  cursor: pointer;\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n  -webkit-perspective: 1000px;\n    perspective: 1000px;\n}\n\n.winecards__face,\n.winecards__back {\n  padding: 1rem;\n  box-shadow: 0 0 12px 0 var(--gold);\n  border-radius: 10px;\n  -webkit-transition: -webkit-transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);\n  transition: -webkit-transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);\n  -o-transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);\n  transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);\n  transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1), -webkit-transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  text-align: center;\n  min-height: 350px;\n  height: auto;\n  border-radius: 10px;\n  color: #fff;\n  text-shadow: 10px 10px 10px var(--background);\n  font-size: 1rem;\n}\n\n.winecards__back{\n  background: var(--background);\n  color: var(--gold);\n}\n\n.winecards__face:after{\n\tposition: absolute;\n    top: 0;\n    left: 0;\n    z-index: 1;\n    width: 100%;\n    height: 100%;\n    content: '';\n    display: block;\n    opacity: .5;\n    background-color: var(--background);\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    border-radius: 10px;\n}\n\n.winecards__item .winecards__face,\n.winecards__item .winecards__back{\n    -webkit-transition: -webkit-transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);\n    transition: -webkit-transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);\n    -o-transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);\n    transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);\n    transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1), -webkit-transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);\n}\n\n.winecards__back{\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  text-shadow: 10px 10px 10px var(--gold);\n  font-size: larger;\n}\n\n.winecards__face-details {\n  -webkit-transform: translateY(-50%) translateZ(60px) scale(0.94);\n  transform: translateY(-50%) translateZ(60px) scale(0.94);\ntop: 50%;\nposition: absolute;\nleft: 0;\nwidth: 100%;\npadding: 2rem;\n-webkit-box-sizing: border-box;\n  box-sizing: border-box;\noutline: 1px solid transparent;\n-webkit-perspective: inherit;\n  perspective: inherit;\nz-index: 3;\n}\n\n\n.winecards__item .winecards__back{\n  -webkit-transform: rotateY(180deg);\n          transform: rotateY(180deg);\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n}\n\n.winecards__item .winecards__face{\n  -webkit-transform: rotateY(0deg);\n          transform: rotateY(0deg);\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n}\n\n.winecards__item:focus .winecards__back,\n.winecards__item:hover .winecards__back{\n  -webkit-transform: rotateY(0deg);\n          transform: rotateY(0deg);\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n}\n\n.winecards__item:hover .winecards__face,\n.winecards__item:focus .winecards__face{\n  -webkit-transform: rotateY(-180deg);\n          transform: rotateY(-180deg);\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n}\n\n.winecards__face-photo{\n  width: 10em;\n  height: 10em;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position-x: 100%;\n  margin: 1em;\n}\n\n.winecards__back-name {\n  color: white;\n  margin-bottom: 1em;\n  text-shadow: white;\n}\n\n.cart__btn {\n  background-color: var(--gold);\n  border: var(--gold);\n  color: var(--background);\n  text-shadow: 2px 2px 10px var(--background);\n  box-shadow: 10px 10px 20px var(--background);\n  border-radius: 5px;\n  padding: 1em;\n  cursor: pointer;\n  transition: 0.2s;\n}\n\n.cart__btn:hover,\n.cart__btn:focus{\n  background-color: var(--background);\n  box-shadow: 10px 10px 20px var(--gold);\n  border: 1px solid  var(--gold);\n  color: var(--gold);\n  text-shadow: 2px 2px 10px var(--gold);\n  transition: 0.2s;\n}\n\n\n\n", "",{"version":3,"sources":["webpack://./src/components/winecards/winecards.css"],"names":[],"mappings":"AAAA;EACE,qBAAqB;EACrB,cAAc;EACd,eAAe;CAChB;;CAEA;EACC,UAAU;EACV,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,uBAAuB;EACvB,oBAAoB;EACpB,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,eAAe;EACf,oCAAoC;EACpC,4BAA4B;EAC5B,2BAA2B;IACzB,mBAAmB;AACvB;;AAEA;;EAEE,aAAa;EACb,kCAAkC;EAClC,mBAAmB;EACnB,wEAAwE;EACxE,gEAAgE;EAChE,2DAA2D;EAC3D,wDAAwD;EACxD,8GAA8G;EAC9G,mCAAmC;UAC3B,2BAA2B;EACnC,kBAAkB;EAClB,iBAAiB;EACjB,YAAY;EACZ,mBAAmB;EACnB,WAAW;EACX,6CAA6C;EAC7C,eAAe;AACjB;;AAEA;EACE,6BAA6B;EAC7B,kBAAkB;AACpB;;AAEA;CACC,kBAAkB;IACf,MAAM;IACN,OAAO;IACP,UAAU;IACV,WAAW;IACX,YAAY;IACZ,WAAW;IACX,cAAc;IACd,WAAW;IACX,mCAAmC;IACnC,mCAAmC;YAC3B,2BAA2B;IACnC,mBAAmB;AACvB;;AAEA;;IAEI,wEAAwE;IACxE,gEAAgE;IAChE,2DAA2D;IAC3D,wDAAwD;IACxD,8GAA8G;AAClH;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,WAAW;EACX,uCAAuC;EACvC,iBAAiB;AACnB;;AAEA;EACE,gEAAgE;EAChE,wDAAwD;AAC1D,QAAQ;AACR,kBAAkB;AAClB,OAAO;AACP,WAAW;AACX,aAAa;AACb,8BAA8B;EAC5B,sBAAsB;AACxB,8BAA8B;AAC9B,4BAA4B;EAC1B,oBAAoB;AACtB,UAAU;AACV;;;AAGA;EACE,kCAAkC;UAC1B,0BAA0B;EAClC,oCAAoC;UAC5B,4BAA4B;AACtC;;AAEA;EACE,gCAAgC;UACxB,wBAAwB;EAChC,oCAAoC;UAC5B,4BAA4B;AACtC;;AAEA;;EAEE,gCAAgC;UACxB,wBAAwB;EAChC,oCAAoC;UAC5B,4BAA4B;AACtC;;AAEA;;EAEE,mCAAmC;UAC3B,2BAA2B;EACnC,oCAAoC;UAC5B,4BAA4B;AACtC;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,wBAAwB;EACxB,4BAA4B;EAC5B,2BAA2B;EAC3B,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,6BAA6B;EAC7B,mBAAmB;EACnB,wBAAwB;EACxB,2CAA2C;EAC3C,4CAA4C;EAC5C,kBAAkB;EAClB,YAAY;EACZ,eAAe;EACf,gBAAgB;AAClB;;AAEA;;EAEE,mCAAmC;EACnC,sCAAsC;EACtC,8BAA8B;EAC9B,kBAAkB;EAClB,qCAAqC;EACrC,gBAAgB;AAClB","sourcesContent":[":root {\n  --background: #140a0a;\n  --red: #d60000;\n  --gold: #fdc854;\n }\n\n .winecards{\n  width: 90%;\n  margin: 0 auto;\n  max-width: 80rem;\n}\n\n.winecards-container {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  grid-column-gap: 3em;\n  grid-row-gap: 3em;\n}\n\n.winecards__item {\n  text-align: center;\n  width: 20em;\n  cursor: pointer;\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n  -webkit-perspective: 1000px;\n    perspective: 1000px;\n}\n\n.winecards__face,\n.winecards__back {\n  padding: 1rem;\n  box-shadow: 0 0 12px 0 var(--gold);\n  border-radius: 10px;\n  -webkit-transition: -webkit-transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);\n  transition: -webkit-transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);\n  -o-transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);\n  transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);\n  transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1), -webkit-transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  text-align: center;\n  min-height: 350px;\n  height: auto;\n  border-radius: 10px;\n  color: #fff;\n  text-shadow: 10px 10px 10px var(--background);\n  font-size: 1rem;\n}\n\n.winecards__back{\n  background: var(--background);\n  color: var(--gold);\n}\n\n.winecards__face:after{\n\tposition: absolute;\n    top: 0;\n    left: 0;\n    z-index: 1;\n    width: 100%;\n    height: 100%;\n    content: '';\n    display: block;\n    opacity: .5;\n    background-color: var(--background);\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    border-radius: 10px;\n}\n\n.winecards__item .winecards__face,\n.winecards__item .winecards__back{\n    -webkit-transition: -webkit-transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);\n    transition: -webkit-transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);\n    -o-transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);\n    transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);\n    transition: transform .7s cubic-bezier(0.4, 0.2, 0.2, 1), -webkit-transform .7s cubic-bezier(0.4, 0.2, 0.2, 1);\n}\n\n.winecards__back{\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  text-shadow: 10px 10px 10px var(--gold);\n  font-size: larger;\n}\n\n.winecards__face-details {\n  -webkit-transform: translateY(-50%) translateZ(60px) scale(0.94);\n  transform: translateY(-50%) translateZ(60px) scale(0.94);\ntop: 50%;\nposition: absolute;\nleft: 0;\nwidth: 100%;\npadding: 2rem;\n-webkit-box-sizing: border-box;\n  box-sizing: border-box;\noutline: 1px solid transparent;\n-webkit-perspective: inherit;\n  perspective: inherit;\nz-index: 3;\n}\n\n\n.winecards__item .winecards__back{\n  -webkit-transform: rotateY(180deg);\n          transform: rotateY(180deg);\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n}\n\n.winecards__item .winecards__face{\n  -webkit-transform: rotateY(0deg);\n          transform: rotateY(0deg);\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n}\n\n.winecards__item:focus .winecards__back,\n.winecards__item:hover .winecards__back{\n  -webkit-transform: rotateY(0deg);\n          transform: rotateY(0deg);\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n}\n\n.winecards__item:hover .winecards__face,\n.winecards__item:focus .winecards__face{\n  -webkit-transform: rotateY(-180deg);\n          transform: rotateY(-180deg);\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n}\n\n.winecards__face-photo{\n  width: 10em;\n  height: 10em;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position-x: 100%;\n  margin: 1em;\n}\n\n.winecards__back-name {\n  color: white;\n  margin-bottom: 1em;\n  text-shadow: white;\n}\n\n.cart__btn {\n  background-color: var(--gold);\n  border: var(--gold);\n  color: var(--background);\n  text-shadow: 2px 2px 10px var(--background);\n  box-shadow: 10px 10px 20px var(--background);\n  border-radius: 5px;\n  padding: 1em;\n  cursor: pointer;\n  transition: 0.2s;\n}\n\n.cart__btn:hover,\n.cart__btn:focus{\n  background-color: var(--background);\n  box-shadow: 10px 10px 20px var(--gold);\n  border: 1px solid  var(--gold);\n  color: var(--gold);\n  text-shadow: 2px 2px 10px var(--gold);\n  transition: 0.2s;\n}\n\n\n\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n --background: black;\n --red: #d60000;\n --gold: #fdc854;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\na {\n  text-decoration: none;\n  transition: 0.3s;\n\n}\n\nbody {\n  width: 100vw;\n  max-height: 100vh;\n  display: grid;\n  grid-template-areas:\n    'header header header'\n    'main main main'\n    'footer footer footer';\n  grid-row-gap: 1em;\n  grid-template-rows: auto 1fr auto;\n  grid-template-columns: 1fr 1fr 1fr;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-attachment: fixed;\n  background-size: cover;\n  position: relative;\n}\n  .header {\n    grid-area: header;\n    height: 50px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin:  1em;\n  }\n\n  .search-container__input {\n    background-color: var(--background);\n    padding: 6px;\n    font-size: 17px;\n    border: 2px solid var(--gold);\n    box-shadow:  0 0 30px var(--gold);\n    border-radius: 5px;\n  }\n\n  .search-container__input:focus{\n    box-shadow: inset  0 0 30px var(--gold);\n    outline: none;\n  }\n\n  .header__cart {\n  position: relative;\n  width: 3em;\n  height: 3em;\n  transition: 0.3s;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat center;\n  background-size: cover;\n  cursor: pointer;\n  }\n\n  .header__cart:hover {\n    transform: scale(1.1, 1.1);\n    transition: 0.3s;\n  }\n\n  .cart__products {\n    position: absolute;\n    top: 5px;\n    left: 5px;\n    display: block;\n    background-color: var(--red);\n    color: var(--gold);\n    border-radius: 50%;\n    padding: 1px 6px;\n    width: 20px;\n    height: 20px;\n  }\n\n  .main{\n    grid-area: main;\n    height: 100%;\n    max-width: 100%;\n    margin: 0 1em;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 1em;\n    background-attachment: fixed;\n  }\n\n  .overlay {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: var(--background);\n    opacity: 0.5;\n    z-index: 99;\n    display: none;\n\n  }\n\n  .overlay.active {\n    display: block;\n  }", "",{"version":3,"sources":["webpack://./src/global.css"],"names":[],"mappings":"AAAA;CACC,mBAAmB;CACnB,cAAc;CACd,eAAe;AAChB;;AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;AACA;EACE,qBAAqB;EACrB,gBAAgB;;AAElB;;AAEA;EACE,YAAY;EACZ,iBAAiB;EACjB,aAAa;EACb;;;0BAGwB;EACxB,iBAAiB;EACjB,iCAAiC;EACjC,kCAAkC;EAClC,yDAA6C;EAC7C,4BAA4B;EAC5B,sBAAsB;EACtB,kBAAkB;AACpB;EACE;IACE,iBAAiB;IACjB,YAAY;IACZ,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,YAAY;EACd;;EAEA;IACE,mCAAmC;IACnC,YAAY;IACZ,eAAe;IACf,6BAA6B;IAC7B,iCAAiC;IACjC,kBAAkB;EACpB;;EAEA;IACE,uCAAuC;IACvC,aAAa;EACf;;EAEA;EACA,kBAAkB;EAClB,UAAU;EACV,WAAW;EACX,gBAAgB;EAChB,oEAA8D;EAC9D,sBAAsB;EACtB,eAAe;EACf;;EAEA;IACE,0BAA0B;IAC1B,gBAAgB;EAClB;;EAEA;IACE,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,cAAc;IACd,4BAA4B;IAC5B,kBAAkB;IAClB,kBAAkB;IAClB,gBAAgB;IAChB,WAAW;IACX,YAAY;EACd;;EAEA;IACE,eAAe;IACf,YAAY;IACZ,eAAe;IACf,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,QAAQ;IACR,4BAA4B;EAC9B;;EAEA;IACE,eAAe;IACf,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,mCAAmC;IACnC,YAAY;IACZ,WAAW;IACX,aAAa;;EAEf;;EAEA;IACE,cAAc;EAChB","sourcesContent":[":root {\n --background: black;\n --red: #d60000;\n --gold: #fdc854;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\na {\n  text-decoration: none;\n  transition: 0.3s;\n\n}\n\nbody {\n  width: 100vw;\n  max-height: 100vh;\n  display: grid;\n  grid-template-areas:\n    'header header header'\n    'main main main'\n    'footer footer footer';\n  grid-row-gap: 1em;\n  grid-template-rows: auto 1fr auto;\n  grid-template-columns: 1fr 1fr 1fr;\n  background-image: url('./assets/img/bg1.jpg');\n  background-attachment: fixed;\n  background-size: cover;\n  position: relative;\n}\n  .header {\n    grid-area: header;\n    height: 50px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin:  1em;\n  }\n\n  .search-container__input {\n    background-color: var(--background);\n    padding: 6px;\n    font-size: 17px;\n    border: 2px solid var(--gold);\n    box-shadow:  0 0 30px var(--gold);\n    border-radius: 5px;\n  }\n\n  .search-container__input:focus{\n    box-shadow: inset  0 0 30px var(--gold);\n    outline: none;\n  }\n\n  .header__cart {\n  position: relative;\n  width: 3em;\n  height: 3em;\n  transition: 0.3s;\n  background: url('./assets/img/cart-gold.svg') no-repeat center;\n  background-size: cover;\n  cursor: pointer;\n  }\n\n  .header__cart:hover {\n    transform: scale(1.1, 1.1);\n    transition: 0.3s;\n  }\n\n  .cart__products {\n    position: absolute;\n    top: 5px;\n    left: 5px;\n    display: block;\n    background-color: var(--red);\n    color: var(--gold);\n    border-radius: 50%;\n    padding: 1px 6px;\n    width: 20px;\n    height: 20px;\n  }\n\n  .main{\n    grid-area: main;\n    height: 100%;\n    max-width: 100%;\n    margin: 0 1em;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 1em;\n    background-attachment: fixed;\n  }\n\n  .overlay {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: var(--background);\n    opacity: 0.5;\n    z-index: 99;\n    display: none;\n\n  }\n\n  .overlay.active {\n    display: block;\n  }"],"sourceRoot":""}]);
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





class App {
    constructor() {
        this.cartsettings = new _cart_cart__WEBPACK_IMPORTED_MODULE_0__.CartSettings();
        this.winecards = new _winecards_winecards__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.filterSettings = new _filters_filterSettings__WEBPACK_IMPORTED_MODULE_4__["default"]();
        this.header = new _html_components_header_header__WEBPACK_IMPORTED_MODULE_2__["default"]('header', 'header');
        this.main = new _html_components_main_main__WEBPACK_IMPORTED_MODULE_3__["default"]('main', 'main');
    }
    start(data) {
        App.container.append(this.header.render());
        App.container.append(this.main.render());
        this.winecards.render(data);
        this.cartsettings.render();
        const colorFilters = document.querySelector('.color-filter');
        const countryFilters = document.querySelector('.country-filter');
        const filters = document.querySelector('#filters');
        colorFilters.addEventListener('input', event => {
            if (this.filterSettings.filterArr.length === 0) {
                this.filterSettings.filterByColor(data);
                this.winecards.render(this.filterSettings.filtered);
            }
            else {
                this.filterSettings.filterByColor(this.filterSettings.filterArr);
                this.winecards.render(this.filterSettings.filtered);
            }
        });
        countryFilters.addEventListener('input', event => {
            if (this.filterSettings.filterArr.length === 0) {
                this.filterSettings.filterByCountry(data);
                this.winecards.render(this.filterSettings.filtered);
            }
            else {
                this.filterSettings.filterByCountry(this.filterSettings.filterArr);
                this.winecards.render(this.filterSettings.filtered);
            }
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
        console.log(articul);
        const index = this.cart.findIndex(elem => elem.id === articul);
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
        console.log(this.totalItems);
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

class FilterSettings {
    constructor() {
        this.filtered = [];
        this.filterArr = [];
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
        this.filtered = [];
        if (localStorage.getItem('filterArr')) {
            this.filterArr = _utils_localstorage__WEBPACK_IMPORTED_MODULE_0__.LocalStorage.getLocalStorage("filterArr" /* localStorageKeys.filterArr */) || '';
        }
        ;
        const filters = document.querySelector('#filters');
        this.filtersObj.country = [...filters.querySelectorAll('#country input:checked')].map(item => item.value);
        console.log(this.filtersObj.country);
        data.forEach(item => {
            if (this.filtersObj.country.includes(item.country)) {
                this.filtered.push(item);
            }
        });
        _utils_localstorage__WEBPACK_IMPORTED_MODULE_0__.LocalStorage.setLocalStorage("filter" /* localStorageKeys.filter */, this.filtersObj);
        _utils_localstorage__WEBPACK_IMPORTED_MODULE_0__.LocalStorage.setLocalStorage("filterArr" /* localStorageKeys.filterArr */, this.filtered);
    }
    filterByColor(data) {
        if (localStorage.getItem('filterArr')) {
            this.filterArr = _utils_localstorage__WEBPACK_IMPORTED_MODULE_0__.LocalStorage.getLocalStorage("filterArr" /* localStorageKeys.filterArr */) || '';
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
        this.filterArr = [];
        this.filtersObj.color = [];
        this.filtersObj.country = [];
        const filters = document.querySelector('#filters');
        [...filters.querySelectorAll('input:checked')].map(item => item.checked = false);
        _utils_localstorage__WEBPACK_IMPORTED_MODULE_0__.LocalStorage.setLocalStorage("filterArr" /* localStorageKeys.filterArr */, this.filterArr);
        _utils_localstorage__WEBPACK_IMPORTED_MODULE_0__.LocalStorage.setLocalStorage("filter" /* localStorageKeys.filter */, this.filtersObj);
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
    <div class="sort-container">
      <div class="sort">
        <button class="sort-btn">сортировать по цене<btn>
      </div>
    </div>
    <div class="filters-container">
      <div class="country-filter">
        <h4 class="country">Страна</h4>
        <div id="country">
          <div class="checkbox"><label><input type="checkbox" name="country" value="Австралия">Австралия</label></div>
          <div class="checkbox"><label><input type="checkbox" name="country" value="Австрия">Австрия</label></div>
          <div class="checkbox"><label><input type="checkbox" name="country" value="Германия">Германия</label></div>
          <div class="checkbox"><label><input type="checkbox" name="country" value="Испания">Испания</label></div>
          <div class="checkbox"><label><input type="checkbox" name="country" value="Италия">Италия</label></div>
          <div class="checkbox"><label><input type="checkbox" name="country" value="Португалия">Португалия</label></div>
          <div class="checkbox"><label><input type="checkbox" name="country" value="Франция">Франция</label></div>
        </div>
      </div>
      <div class="color-filter">
        <h4 class="color">Цвет</h4>
        <div id="color">
          <div class="checkbox"><label><input type="checkbox" name="color" value="white">Белое</label></div>
          <div class="checkbox"><label><input type="checkbox" name="color" value="red">Красное</label></div>
        </div>
      </div>
      <button class="reset-filters">Сбрость фильтры</button>
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ2dIO0FBQ2pCO0FBQy9GLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSxpREFBaUQsd0JBQXdCLG1CQUFtQixvQkFBb0IsSUFBSSxpQkFBaUIsb0JBQW9CLGNBQWMsZUFBZSxnQkFBZ0IsaUJBQWlCLGlCQUFpQiw0QkFBNEIsaUJBQWlCLHVCQUF1Qix1QkFBdUIscUNBQXFDLGtCQUFrQixHQUFHLHdCQUF3QixtQkFBbUIsR0FBRyw0QkFBNEIsZ0JBQWdCLGtCQUFrQiwyQkFBMkIsNEJBQTRCLGFBQWEsR0FBRyxrQkFBa0IsbUJBQW1CLHlCQUF5Qix1QkFBdUIsdUJBQXVCLGVBQWUsYUFBYSxvQkFBb0IscUJBQXFCLEdBQUcsd0JBQXdCLCtCQUErQixrQ0FBa0MseUNBQXlDLHFCQUFxQixHQUFHLHlCQUF5QixvQkFBb0IsR0FBRyxnQkFBZ0Isa0JBQWtCLHVDQUF1QywyQkFBMkIsdUJBQXVCLFlBQVksR0FBRyxrQkFBa0Isa0JBQWtCLDRCQUE0Qix3QkFBd0IsZUFBZSxHQUFHLGtCQUFrQixvQkFBb0IsY0FBYyxlQUFlLGdCQUFnQixpQkFBaUIsa0JBQWtCLDJCQUEyQix3QkFBd0IsNEJBQTRCLG1CQUFtQixrQ0FBa0MsdUJBQXVCLGlCQUFpQixrQkFBa0IsR0FBRyx5QkFBeUIsa0JBQWtCLEdBQUcsZUFBZSwrRkFBK0YsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsZ0NBQWdDLHdCQUF3QixtQkFBbUIsb0JBQW9CLElBQUksaUJBQWlCLG9CQUFvQixjQUFjLGVBQWUsZ0JBQWdCLGlCQUFpQixpQkFBaUIsNEJBQTRCLGlCQUFpQix1QkFBdUIsdUJBQXVCLHFDQUFxQyxrQkFBa0IsR0FBRyx3QkFBd0IsbUJBQW1CLEdBQUcsNEJBQTRCLGdCQUFnQixrQkFBa0IsMkJBQTJCLDRCQUE0QixhQUFhLEdBQUcsa0JBQWtCLG1CQUFtQix5QkFBeUIsdUJBQXVCLHVCQUF1QixlQUFlLGFBQWEsb0JBQW9CLHFCQUFxQixHQUFHLHdCQUF3QiwrQkFBK0Isa0NBQWtDLHlDQUF5QyxxQkFBcUIsR0FBRyx5QkFBeUIsb0JBQW9CLEdBQUcsZ0JBQWdCLGtCQUFrQix1Q0FBdUMsMkJBQTJCLHVCQUF1QixZQUFZLEdBQUcsa0JBQWtCLGtCQUFrQiw0QkFBNEIsd0JBQXdCLGVBQWUsR0FBRyxrQkFBa0Isb0JBQW9CLGNBQWMsZUFBZSxnQkFBZ0IsaUJBQWlCLGtCQUFrQiwyQkFBMkIsd0JBQXdCLDRCQUE0QixtQkFBbUIsa0NBQWtDLHVCQUF1QixpQkFBaUIsa0JBQWtCLEdBQUcseUJBQXlCLGtCQUFrQixHQUFHLDJCQUEyQjtBQUN0NEg7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1B2QztBQUNnSDtBQUNqQjtBQUMvRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsaURBQWlELDBCQUEwQixtQkFBbUIsb0JBQW9CLElBQUksZ0JBQWdCLGVBQWUsbUJBQW1CLHFCQUFxQixHQUFHLDBCQUEwQixrQkFBa0Isb0JBQW9CLDRCQUE0Qix5QkFBeUIsc0JBQXNCLEdBQUcsc0JBQXNCLHVCQUF1QixnQkFBZ0Isb0JBQW9CLHlDQUF5QyxpQ0FBaUMsZ0NBQWdDLDBCQUEwQixHQUFHLHlDQUF5QyxrQkFBa0IsdUNBQXVDLHdCQUF3Qiw2RUFBNkUscUVBQXFFLGdFQUFnRSw2REFBNkQsbUhBQW1ILHdDQUF3Qyx3Q0FBd0MsdUJBQXVCLHNCQUFzQixpQkFBaUIsd0JBQXdCLGdCQUFnQixrREFBa0Qsb0JBQW9CLEdBQUcscUJBQXFCLGtDQUFrQyx1QkFBdUIsR0FBRywyQkFBMkIsdUJBQXVCLGFBQWEsY0FBYyxpQkFBaUIsa0JBQWtCLG1CQUFtQixrQkFBa0IscUJBQXFCLGtCQUFrQiwwQ0FBMEMsMENBQTBDLDBDQUEwQywwQkFBMEIsR0FBRywwRUFBMEUsK0VBQStFLHVFQUF1RSxrRUFBa0UsK0RBQStELHFIQUFxSCxHQUFHLHFCQUFxQix1QkFBdUIsV0FBVyxZQUFZLGdCQUFnQiw0Q0FBNEMsc0JBQXNCLEdBQUcsOEJBQThCLHFFQUFxRSw2REFBNkQsV0FBVyxxQkFBcUIsVUFBVSxjQUFjLGdCQUFnQixpQ0FBaUMsMkJBQTJCLGlDQUFpQywrQkFBK0IseUJBQXlCLGFBQWEsR0FBRyx3Q0FBd0MsdUNBQXVDLHVDQUF1Qyx5Q0FBeUMseUNBQXlDLEdBQUcsc0NBQXNDLHFDQUFxQyxxQ0FBcUMseUNBQXlDLHlDQUF5QyxHQUFHLHNGQUFzRixxQ0FBcUMscUNBQXFDLHlDQUF5Qyx5Q0FBeUMsR0FBRyxzRkFBc0Ysd0NBQXdDLHdDQUF3Qyx5Q0FBeUMseUNBQXlDLEdBQUcsMkJBQTJCLGdCQUFnQixpQkFBaUIsNkJBQTZCLGlDQUFpQyxnQ0FBZ0MsZ0JBQWdCLEdBQUcsMkJBQTJCLGlCQUFpQix1QkFBdUIsdUJBQXVCLEdBQUcsZ0JBQWdCLGtDQUFrQyx3QkFBd0IsNkJBQTZCLGdEQUFnRCxpREFBaUQsdUJBQXVCLGlCQUFpQixvQkFBb0IscUJBQXFCLEdBQUcsd0NBQXdDLHdDQUF3QywyQ0FBMkMsbUNBQW1DLHVCQUF1QiwwQ0FBMEMscUJBQXFCLEdBQUcsZUFBZSx5R0FBeUcsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxpQ0FBaUMsMEJBQTBCLG1CQUFtQixvQkFBb0IsSUFBSSxnQkFBZ0IsZUFBZSxtQkFBbUIscUJBQXFCLEdBQUcsMEJBQTBCLGtCQUFrQixvQkFBb0IsNEJBQTRCLHlCQUF5QixzQkFBc0IsR0FBRyxzQkFBc0IsdUJBQXVCLGdCQUFnQixvQkFBb0IseUNBQXlDLGlDQUFpQyxnQ0FBZ0MsMEJBQTBCLEdBQUcseUNBQXlDLGtCQUFrQix1Q0FBdUMsd0JBQXdCLDZFQUE2RSxxRUFBcUUsZ0VBQWdFLDZEQUE2RCxtSEFBbUgsd0NBQXdDLHdDQUF3Qyx1QkFBdUIsc0JBQXNCLGlCQUFpQix3QkFBd0IsZ0JBQWdCLGtEQUFrRCxvQkFBb0IsR0FBRyxxQkFBcUIsa0NBQWtDLHVCQUF1QixHQUFHLDJCQUEyQix1QkFBdUIsYUFBYSxjQUFjLGlCQUFpQixrQkFBa0IsbUJBQW1CLGtCQUFrQixxQkFBcUIsa0JBQWtCLDBDQUEwQywwQ0FBMEMsMENBQTBDLDBCQUEwQixHQUFHLDBFQUEwRSwrRUFBK0UsdUVBQXVFLGtFQUFrRSwrREFBK0QscUhBQXFILEdBQUcscUJBQXFCLHVCQUF1QixXQUFXLFlBQVksZ0JBQWdCLDRDQUE0QyxzQkFBc0IsR0FBRyw4QkFBOEIscUVBQXFFLDZEQUE2RCxXQUFXLHFCQUFxQixVQUFVLGNBQWMsZ0JBQWdCLGlDQUFpQywyQkFBMkIsaUNBQWlDLCtCQUErQix5QkFBeUIsYUFBYSxHQUFHLHdDQUF3Qyx1Q0FBdUMsdUNBQXVDLHlDQUF5Qyx5Q0FBeUMsR0FBRyxzQ0FBc0MscUNBQXFDLHFDQUFxQyx5Q0FBeUMseUNBQXlDLEdBQUcsc0ZBQXNGLHFDQUFxQyxxQ0FBcUMseUNBQXlDLHlDQUF5QyxHQUFHLHNGQUFzRix3Q0FBd0Msd0NBQXdDLHlDQUF5Qyx5Q0FBeUMsR0FBRywyQkFBMkIsZ0JBQWdCLGlCQUFpQiw2QkFBNkIsaUNBQWlDLGdDQUFnQyxnQkFBZ0IsR0FBRywyQkFBMkIsaUJBQWlCLHVCQUF1Qix1QkFBdUIsR0FBRyxnQkFBZ0Isa0NBQWtDLHdCQUF3Qiw2QkFBNkIsZ0RBQWdELGlEQUFpRCx1QkFBdUIsaUJBQWlCLG9CQUFvQixxQkFBcUIsR0FBRyx3Q0FBd0Msd0NBQXdDLDJDQUEyQyxtQ0FBbUMsdUJBQXVCLDBDQUEwQyxxQkFBcUIsR0FBRywyQkFBMkI7QUFDaDNVO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1B2QztBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0QyxxSEFBdUM7QUFDbkYsNENBQTRDLGlJQUE2QztBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBLGlEQUFpRCx1QkFBdUIsa0JBQWtCLG1CQUFtQixHQUFHLE9BQU8sY0FBYyxlQUFlLDJCQUEyQixHQUFHLEtBQUssMEJBQTBCLHFCQUFxQixLQUFLLFVBQVUsaUJBQWlCLHNCQUFzQixrQkFBa0IsdUdBQXVHLHNCQUFzQixzQ0FBc0MsdUNBQXVDLHNFQUFzRSxpQ0FBaUMsMkJBQTJCLHVCQUF1QixHQUFHLGFBQWEsd0JBQXdCLG1CQUFtQixvQkFBb0IscUNBQXFDLDBCQUEwQixtQkFBbUIsS0FBSyxnQ0FBZ0MsMENBQTBDLG1CQUFtQixzQkFBc0Isb0NBQW9DLHdDQUF3Qyx5QkFBeUIsS0FBSyxxQ0FBcUMsOENBQThDLG9CQUFvQixLQUFLLHFCQUFxQix1QkFBdUIsZUFBZSxnQkFBZ0IscUJBQXFCLGlGQUFpRiwyQkFBMkIsb0JBQW9CLEtBQUssMkJBQTJCLGlDQUFpQyx1QkFBdUIsS0FBSyx1QkFBdUIseUJBQXlCLGVBQWUsZ0JBQWdCLHFCQUFxQixtQ0FBbUMseUJBQXlCLHlCQUF5Qix1QkFBdUIsa0JBQWtCLG1CQUFtQixLQUFLLFlBQVksc0JBQXNCLG1CQUFtQixzQkFBc0Isb0JBQW9CLG9CQUFvQiw2QkFBNkIsOEJBQThCLDBCQUEwQixlQUFlLG1DQUFtQyxLQUFLLGdCQUFnQixzQkFBc0IsYUFBYSxjQUFjLGtCQUFrQixtQkFBbUIsMENBQTBDLG1CQUFtQixrQkFBa0Isb0JBQW9CLE9BQU8sdUJBQXVCLHFCQUFxQixLQUFLLE9BQU8saUZBQWlGLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxjQUFjLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLE9BQU8sYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsaUNBQWlDLHVCQUF1QixrQkFBa0IsbUJBQW1CLEdBQUcsT0FBTyxjQUFjLGVBQWUsMkJBQTJCLEdBQUcsS0FBSywwQkFBMEIscUJBQXFCLEtBQUssVUFBVSxpQkFBaUIsc0JBQXNCLGtCQUFrQix1R0FBdUcsc0JBQXNCLHNDQUFzQyx1Q0FBdUMsa0RBQWtELGlDQUFpQywyQkFBMkIsdUJBQXVCLEdBQUcsYUFBYSx3QkFBd0IsbUJBQW1CLG9CQUFvQixxQ0FBcUMsMEJBQTBCLG1CQUFtQixLQUFLLGdDQUFnQywwQ0FBMEMsbUJBQW1CLHNCQUFzQixvQ0FBb0Msd0NBQXdDLHlCQUF5QixLQUFLLHFDQUFxQyw4Q0FBOEMsb0JBQW9CLEtBQUsscUJBQXFCLHVCQUF1QixlQUFlLGdCQUFnQixxQkFBcUIsbUVBQW1FLDJCQUEyQixvQkFBb0IsS0FBSywyQkFBMkIsaUNBQWlDLHVCQUF1QixLQUFLLHVCQUF1Qix5QkFBeUIsZUFBZSxnQkFBZ0IscUJBQXFCLG1DQUFtQyx5QkFBeUIseUJBQXlCLHVCQUF1QixrQkFBa0IsbUJBQW1CLEtBQUssWUFBWSxzQkFBc0IsbUJBQW1CLHNCQUFzQixvQkFBb0Isb0JBQW9CLDZCQUE2Qiw4QkFBOEIsMEJBQTBCLGVBQWUsbUNBQW1DLEtBQUssZ0JBQWdCLHNCQUFzQixhQUFhLGNBQWMsa0JBQWtCLG1CQUFtQiwwQ0FBMEMsbUJBQW1CLGtCQUFrQixvQkFBb0IsT0FBTyx1QkFBdUIscUJBQXFCLEtBQUssbUJBQW1CO0FBQzcySztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1oxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRDtBQUNyRDs7QUFFQTtBQUNBLGdEQUFnRDtBQUNoRDs7QUFFQTtBQUNBLHFGQUFxRjtBQUNyRjs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLEtBQUs7QUFDTCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIscUJBQXFCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ3JHYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsb0RBQW9EOztBQUVwRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUM1QmE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQSxNQUFxRztBQUNyRyxNQUEyRjtBQUMzRixNQUFrRztBQUNsRyxNQUFxSDtBQUNySCxNQUE4RztBQUM5RyxNQUE4RztBQUM5RyxNQUF3RztBQUN4RztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHFGQUFPOzs7O0FBSWtEO0FBQzFFLE9BQU8saUVBQWUscUZBQU8sSUFBSSw0RkFBYyxHQUFHLDRGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QjdFLE1BQXFHO0FBQ3JHLE1BQTJGO0FBQzNGLE1BQWtHO0FBQ2xHLE1BQXFIO0FBQ3JILE1BQThHO0FBQzlHLE1BQThHO0FBQzlHLE1BQTZHO0FBQzdHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsMEZBQU87Ozs7QUFJdUQ7QUFDL0UsT0FBTyxpRUFBZSwwRkFBTyxJQUFJLGlHQUFjLEdBQUcsaUdBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCN0UsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBb0c7QUFDcEc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyx1RkFBTzs7OztBQUk4QztBQUN0RSxPQUFPLGlFQUFlLHVGQUFPLElBQUksOEZBQWMsR0FBRyw4RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkNEM7QUFDRztBQUNVO0FBQ047QUFDSTtBQUd4QyxNQUFNLEdBQUc7SUFPdEI7UUFDRSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksb0RBQVksRUFBRSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSw0REFBUyxFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLCtEQUFjLEVBQUUsQ0FBQztRQUMzQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksc0VBQU0sQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLGtFQUFJLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBRXZDLENBQUM7SUFDRCxLQUFLLENBQUMsSUFBbUI7UUFDdkIsR0FBRyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQzNDLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzNCLE1BQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDO1FBQzVELE1BQU0sY0FBYyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUM7UUFDaEUsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNuRCxZQUFhLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxFQUFFO1lBQzlDLElBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtnQkFDN0MsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3hDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDckQ7aUJBQ0c7Z0JBQ0YsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDakUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUNyRDtRQUNELENBQUMsQ0FBQztRQUNGLGNBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLEVBQUU7WUFDaEQsSUFBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO2dCQUM3QyxJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDMUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUNyRDtpQkFDRztnQkFDRixJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUNuRSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ3JEO1FBQ0QsQ0FBQyxDQUFDO1FBQ0osUUFBUTthQUNQLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBRTthQUNoQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLEVBQUU7WUFDakMsS0FBSyxDQUFDLGNBQWMsRUFBRTtZQUN0QixJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ25DLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlCLENBQUMsQ0FBQztRQUNGLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLEVBQUU7WUFDekMsSUFBa0IsS0FBSyxDQUFDLE1BQVEsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFO2dCQUNoRSxJQUFJLE9BQU8sR0FBRyxNQUFNLENBQWUsS0FBSyxDQUFDLE1BQVEsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDdEUsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsR0FBRyxFQUFFLEVBQUc7b0JBQ3RDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztvQkFDekMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQztvQkFDM0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQzdCO3FCQUFJO29CQUNILFFBQVEsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDaEUsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUM1RCxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO2lCQUV6QzthQUNGO1FBQ0gsQ0FBQyxDQUFDO1FBQ0YsUUFBUSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsRUFBRTtZQUN6QyxJQUFrQixLQUFLLENBQUMsTUFBUSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEVBQUU7Z0JBQ25FLElBQUksT0FBTyxHQUFHLE1BQU0sQ0FBZSxLQUFLLENBQUMsTUFBUSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUN0RSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxHQUFHLENBQUMsRUFBRTtvQkFDcEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO29CQUM1QyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDO29CQUMzQixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDN0I7YUFDRjtRQUNILENBQUMsQ0FBQztRQUNGLFFBQVE7YUFDUCxhQUFhLENBQUMsYUFBYSxDQUFFO2FBQzdCLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsRUFBRTtZQUNqQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQzdCLFFBQVEsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFFLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMvRCxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO1FBQzVDLENBQUMsQ0FBQztRQUNGLFFBQVE7YUFDUCxhQUFhLENBQUMsT0FBTyxDQUFFO2FBQ3ZCLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsRUFBRTtZQUNqQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3pCLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7UUFDNUMsQ0FBQyxDQUFDO1FBQ0YsUUFBUTthQUNQLGFBQWEsQ0FBQyxjQUFjLENBQUU7YUFDOUIsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxFQUFFO1lBQ2pDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDaEMsQ0FBQyxDQUFDO0lBQ04sQ0FBQzs7QUE1RmMsYUFBUyxHQUFnQixRQUFRLENBQUMsSUFBSSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUckM7QUFFdUQ7QUFDNUI7QUFDdkMsTUFBTSxZQUFZO0lBR3ZCO1FBQ0UsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDZixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsNkVBQTRCLDREQUFtQyxJQUFJLENBQUMsQ0FBQztJQUMzRyxDQUFDO0lBRUQsT0FBTyxDQUFDLElBQW1CLEVBQUUsT0FBZTtRQUV0QyxJQUFJLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDaEMsSUFBSSxDQUFDLElBQUksR0FBRyw2RUFBNEIsb0NBQXVCLElBQUksRUFBRSxDQUFDO1NBQ3ZFO1FBQUEsQ0FBQztRQUNGLElBQUksWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNqQyxJQUFJLEdBQUcsNkVBQTRCLHNDQUF3QixJQUFJLElBQUksQ0FBQztTQUNyRTtRQUFBLENBQUM7UUFFRixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxPQUFPLENBQUMsQ0FBQztRQUMvRCxJQUFHLEtBQUssS0FBSyxDQUFDLENBQUMsRUFBRTtZQUNmLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO1lBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQzlCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNsRCxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNyRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7U0FDdkI7YUFBSTtZQUNILElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDekIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDcEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2pELE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3BEO1FBQ0QsSUFBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQy9CLE1BQU0sU0FBUyxHQUFHLElBQUksNERBQVMsRUFBRSxDQUFDO1lBQ2xDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDeEI7UUFDRCw2RUFBNEIscUNBQXdCLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDOUQsNkVBQTRCLHVDQUF5QixJQUFJLENBQUM7UUFDMUQsNkVBQTRCLDZEQUFvQyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ2xGLENBQUM7SUFDRCxVQUFVLENBQUMsSUFBbUIsRUFBRSxPQUFlO1FBQzdDLElBQUksWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNoQyxJQUFJLENBQUMsSUFBSSxHQUFHLDZFQUE0QixvQ0FBdUIsSUFBSSxFQUFFLENBQUM7U0FDdkU7UUFBQSxDQUFDO1FBQ0YsSUFBSSxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ2pDLElBQUksR0FBRyw2RUFBNEIsc0NBQXdCLElBQUksSUFBSSxDQUFDO1NBQ3JFO1FBQUEsQ0FBQztRQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLE9BQU8sQ0FBQyxDQUFDO1FBQy9ELElBQUcsS0FBSyxJQUFJLENBQUMsRUFBRTtZQUNiLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDekIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDcEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2pELE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3BEO1FBQ0QsNkVBQTRCLHFDQUF3QixJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzlELDZFQUE0Qix1Q0FBeUIsSUFBSSxDQUFDO1FBQzFELDZFQUE0Qiw2REFBb0MsSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUVsRixDQUFDO0lBRUQsTUFBTTtRQUNKLElBQUksQ0FBQyxJQUFJLEdBQUcsNkVBQTRCLG9DQUF1QixJQUFJLEVBQUUsQ0FBQztRQUN0RSxNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztRQUNuRCxNQUFNLGFBQWEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUF3QixDQUFDO1FBQ3RGLE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUN4RCxNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3BELElBQUksUUFBUSxHQUFHLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN2QixNQUFNLFFBQVEsR0FBRyxhQUFhLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQWdCLENBQUM7WUFDdEUsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLENBQUUsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztZQUN0RSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUUsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUMvRSxNQUFNLFVBQVUsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUM3QyxRQUFRLElBQUksVUFBVSxDQUFDO1lBQ3ZCLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFFLENBQUMsV0FBVyxHQUFHLEdBQUcsVUFBVSxFQUFFLENBQUM7WUFDN0UsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFFLENBQUMsWUFBWSxDQUFDLGNBQWMsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ2pGLElBQUcsSUFBSSxDQUFDLEtBQUssS0FBSyxDQUFDLEVBQUU7Z0JBQ2xCLFFBQVEsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFrQixDQUFDLEtBQUssQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDO2dCQUNuRixRQUFRLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBa0IsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQzthQUM5RTtZQUNILENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBRSxDQUFDLFlBQVksQ0FBQyxjQUFjLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUVwRixJQUFHLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO2dCQUNuQixRQUFRLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBa0IsQ0FBQyxLQUFLLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQztnQkFDdEYsUUFBUSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQWtCLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7YUFDakY7WUFDSCxRQUFRLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBRSxDQUFDLFdBQVcsR0FBRyxHQUFHLFFBQVEsRUFBRTtZQUVuRSxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzVCLENBQUMsQ0FBQztRQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzdCLFFBQVEsQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUUsQ0FBQyxXQUFXLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFO1FBRTdFLFFBQVEsQ0FBQyxhQUFhLENBQUMsd0JBQXdCLENBQUUsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2pFLFFBQVEsQ0FBQyxhQUFhLENBQUMsd0JBQXdCLENBQUUsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUNELFFBQVE7UUFDTixRQUFRLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDL0QsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFDRCxTQUFTO1FBQ1AsUUFBUSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2xFLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFFLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNqRSxDQUFDO0NBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0SHFFO0FBRTNELE1BQU0sY0FBYztJQUlqQztRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLElBQUksWUFBWSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNsQyxJQUFJLENBQUMsVUFBVSxHQUFHLDZFQUE0Qix3Q0FBeUIsSUFBSSxFQUFFLENBQUM7U0FDL0U7UUFBQSxDQUFDO1FBQ0YsSUFBSSxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQ3JDLElBQUksQ0FBQyxTQUFTLEdBQUcsNkVBQTRCLDhDQUE0QixJQUFJLEVBQUUsQ0FBQztTQUNqRjtRQUFBLENBQUM7UUFDRixJQUFJLENBQUMsVUFBVSxHQUFHO1lBQ2hCLEtBQUssRUFBRSxFQUFFO1lBQ1QsT0FBTyxFQUFFLEVBQUU7WUFDWCxJQUFJLEVBQUUsRUFBRTtZQUNSLEtBQUssRUFBRSxFQUFFO1NBQ1Y7SUFDSCxDQUFDO0lBRUQsZUFBZSxDQUFDLElBQW1CO1FBQ25DLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLElBQUksWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUNwQyxJQUFJLENBQUMsU0FBUyxHQUFHLDZFQUE0Qiw4Q0FBNEIsSUFBSSxFQUFFLENBQUM7U0FDakY7UUFBQSxDQUFDO1FBQ0osTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sR0FBRyxDQUFDLEdBQUcsT0FBUSxDQUFDLGdCQUFnQixDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBRSxJQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pJLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2pCLElBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBQztnQkFDakQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ3hCO1FBQ0osQ0FBQyxDQUFDO1FBQ0YsNkVBQTRCLHlDQUEwQixJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ3RFLDZFQUE0QiwrQ0FBNkIsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6RSxDQUFDO0lBQ0QsYUFBYSxDQUFDLElBQW1CO1FBQy9CLElBQUksWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUNyQyxJQUFJLENBQUMsU0FBUyxHQUFHLDZFQUE0Qiw4Q0FBNEIsSUFBSSxFQUFFLENBQUM7U0FDakY7UUFBQSxDQUFDO1FBQ0YsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbkIsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsT0FBUSxDQUFDLGdCQUFnQixDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBRSxJQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdILE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7UUFDbEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNwQixJQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUM7Z0JBQzVDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUN6QjtRQUNILENBQUMsQ0FBQztRQUNGLDZFQUE0Qix5Q0FBMEIsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUN0RSw2RUFBNEIsK0NBQTZCLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkUsQ0FBQztJQUVELFlBQVk7UUFDWixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQzdCLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbkQsQ0FBQyxHQUFHLE9BQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFFLElBQXlCLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxDQUFDO1FBQ3hHLDZFQUE0QiwrQ0FBNkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3pFLDZFQUE0Qix5Q0FBMEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBRXZFLENBQUM7Q0FFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRXdCO0FBRWlEO0FBRTFFLE1BQU0sU0FBUztJQUNiLE1BQU0sQ0FBQyxJQUFtQjtRQUN4QixJQUFJLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDakMsSUFBSSxHQUFHLDZFQUE0QixzQ0FBd0IsSUFBSSxJQUFJLENBQUM7U0FDckU7UUFBQSxDQUFDO1FBQ0YsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ25CLE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1FBQ25ELE1BQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsb0JBQW9CLENBQXdCLENBQUM7UUFDekYsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQWtCLEVBQUUsR0FBWSxFQUFFLEVBQUU7WUFDakQsTUFBTSxRQUFRLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFnQixDQUFDO1lBRXBFLFFBQVEsQ0FBQyxhQUFhLENBQUMsd0JBQXdCLENBQWtCLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxPQUFPLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQztZQUNoSCxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsdUJBQXVCLENBQUMsQ0FBRSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQzNFLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFFLENBQUMsV0FBVyxHQUFHLGVBQWUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzlGLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFFLENBQUMsV0FBVyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssTUFBTSxDQUFDO1lBQ3RGLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFFLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDM0UsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLHlCQUF5QixDQUFDLENBQUUsQ0FBQyxXQUFXLEdBQUcsbUJBQW1CLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNwRyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsMEJBQTBCLENBQUMsQ0FBRSxDQUFDLFdBQVcsR0FBRyxZQUFZLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUMvRixDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsdUJBQXVCLENBQUMsQ0FBRSxDQUFDLFdBQVcsR0FBRyxTQUFTLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUN0RixDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsd0JBQXdCLENBQUMsQ0FBRSxDQUFDLFdBQVcsR0FBRyxVQUFVLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUN6RixDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsMEJBQTBCLENBQUMsQ0FBRSxDQUFDLFdBQVcsR0FBRyxjQUFjLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQztZQUNsRyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsc0JBQXNCLENBQUMsQ0FBRSxDQUFDLFdBQVcsR0FBRyxXQUFXLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQztZQUd2RixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLENBQUMsRUFBRTtnQkFDcEMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBa0IsQ0FBQyxLQUFLLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQztnQkFDekYsUUFBUSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBa0IsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztnQkFDbkYsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLHdCQUF3QixDQUFDLENBQUUsQ0FBQyxXQUFXLEdBQUcsZUFBZSxDQUFDO2dCQUNsRixDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsd0JBQXdCLENBQUMsQ0FBRSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7YUFDdEU7WUFDRCxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUUsQ0FBQyxZQUFZLENBQUMsY0FBYyxFQUFFLEdBQUcsR0FBRyxFQUFFLENBQUM7WUFDOUUsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FBQztRQUVILENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFFLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNqRSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsc0JBQXNCLENBQUMsQ0FBRSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMxRSxDQUFDO0NBQ0Y7QUFFRCxpRUFBZSxTQUFTLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQzNDakIsTUFBTSxLQUFLLEdBQUc7SUFDcEI7UUFDRSxFQUFFLEVBQUUsQ0FBQztRQUNMLElBQUksRUFBRSx1QkFBdUI7UUFDN0IsTUFBTSxFQUFFLGlCQUFpQjtRQUN6QixPQUFPLEVBQUUsWUFBWTtRQUNyQixJQUFJLEVBQUUsTUFBTTtRQUNaLE9BQU8sRUFBRSxJQUFJO1FBQ2IsR0FBRyxFQUFFLE1BQU07UUFDWCxLQUFLLEVBQUUsT0FBTztRQUNkLEtBQUssRUFBRSxLQUFLO1FBQ1osS0FBSyxFQUFFLHNFQUFzRTtRQUM3RSxLQUFLLEVBQUUsQ0FBQztRQUNSLE9BQU8sRUFBRSxJQUFJO1FBQ2IsTUFBTSxFQUFFLENBQUM7S0FDVjtJQUNEO1FBQ0UsRUFBRSxFQUFFLENBQUM7UUFDTCxJQUFJLEVBQUUsdUJBQXVCO1FBQzdCLE1BQU0sRUFBRSxZQUFZO1FBQ3BCLE9BQU8sRUFBRSxTQUFTO1FBQ2xCLElBQUksRUFBRSxNQUFNO1FBQ1osT0FBTyxFQUFFLElBQUk7UUFDYixHQUFHLEVBQUUsTUFBTTtRQUNYLEtBQUssRUFBRSxLQUFLO1FBQ1osS0FBSyxFQUFFLEtBQUs7UUFDWixLQUFLLEVBQUUsd0NBQXdDO1FBQy9DLEtBQUssRUFBRSxDQUFDO1FBQ1IsT0FBTyxFQUFFLElBQUk7UUFDYixNQUFNLEVBQUUsQ0FBQztLQUNWO0lBQ0Q7UUFDRSxFQUFFLEVBQUUsQ0FBQztRQUNMLElBQUksRUFBRSwyQkFBMkI7UUFDakMsTUFBTSxFQUFFLGFBQWE7UUFDckIsT0FBTyxFQUFFLFVBQVU7UUFDbkIsSUFBSSxFQUFFLE1BQU07UUFDWixPQUFPLEVBQUUsSUFBSTtRQUNiLEdBQUcsRUFBRSxNQUFNO1FBQ1gsS0FBSyxFQUFFLEtBQUs7UUFDWixLQUFLLEVBQUUsT0FBTztRQUNkLEtBQUssRUFBRSw0Q0FBNEM7UUFDbkQsS0FBSyxFQUFFLENBQUM7UUFDUixPQUFPLEVBQUUsSUFBSTtRQUNiLE1BQU0sRUFBRSxDQUFDO0tBQ1Y7SUFDRDtRQUNFLEVBQUUsRUFBRSxDQUFDO1FBQ0wsSUFBSSxFQUFFLDBCQUEwQjtRQUNoQyxNQUFNLEVBQUUsYUFBYTtRQUNyQixPQUFPLEVBQUUsU0FBUztRQUNsQixJQUFJLEVBQUUsTUFBTTtRQUNaLE9BQU8sRUFBRSxJQUFJO1FBQ2IsR0FBRyxFQUFFLE1BQU07UUFDWCxLQUFLLEVBQUUsTUFBTTtRQUNiLEtBQUssRUFBRSxLQUFLO1FBQ1osS0FBSyxFQUFFLDJDQUEyQztRQUNsRCxLQUFLLEVBQUUsQ0FBQztRQUNSLE9BQU8sRUFBRSxJQUFJO1FBQ2IsTUFBTSxFQUFFLENBQUM7S0FDVjtJQUNEO1FBQ0UsRUFBRSxFQUFFLENBQUM7UUFDTCxJQUFJLEVBQUUsZ0NBQWdDO1FBQ3RDLE1BQU0sRUFBRSxXQUFXO1FBQ25CLE9BQU8sRUFBRSxRQUFRO1FBQ2pCLElBQUksRUFBRSxNQUFNO1FBQ1osT0FBTyxFQUFFLElBQUk7UUFDYixHQUFHLEVBQUUsTUFBTTtRQUNYLEtBQUssRUFBRSxLQUFLO1FBQ1osS0FBSyxFQUFFLE9BQU87UUFDZCxLQUFLLEVBQUUsZ0NBQWdDO1FBQ3ZDLEtBQUssRUFBRSxDQUFDO1FBQ1IsT0FBTyxFQUFFLElBQUk7UUFDYixNQUFNLEVBQUUsQ0FBQztLQUNWO0lBQ0Q7UUFDRSxFQUFFLEVBQUUsQ0FBQztRQUNMLElBQUksRUFBRSxjQUFjO1FBQ3BCLE1BQU0sRUFBRSxXQUFXO1FBQ25CLE9BQU8sRUFBRSxXQUFXO1FBQ3BCLElBQUksRUFBRSxNQUFNO1FBQ1osT0FBTyxFQUFFLElBQUk7UUFDYixHQUFHLEVBQUUsS0FBSztRQUNWLEtBQUssRUFBRSxLQUFLO1FBQ1osS0FBSyxFQUFFLEtBQUs7UUFDWixLQUFLLEVBQUUsZ0NBQWdDO1FBQ3ZDLEtBQUssRUFBRSxDQUFDO1FBQ1IsT0FBTyxFQUFFLElBQUk7UUFDYixNQUFNLEVBQUUsQ0FBQztLQUNWO0lBQ0Q7UUFDRSxFQUFFLEVBQUUsQ0FBQztRQUNMLElBQUksRUFBRSxzQkFBc0I7UUFDNUIsTUFBTSxFQUFFLHFCQUFxQjtRQUM3QixPQUFPLEVBQUUsU0FBUztRQUNsQixJQUFJLEVBQUUsTUFBTTtRQUNaLE9BQU8sRUFBRSxJQUFJO1FBQ2IsR0FBRyxFQUFFLE1BQU07UUFDWCxLQUFLLEVBQUUsT0FBTztRQUNkLEtBQUssRUFBRSxLQUFLO1FBQ1osS0FBSyxFQUFFLHVDQUF1QztRQUM5QyxLQUFLLEVBQUUsQ0FBQztRQUNSLE9BQU8sRUFBRSxJQUFJO1FBQ2IsTUFBTSxFQUFFLENBQUM7S0FDVjtJQUNEO1FBQ0UsRUFBRSxFQUFFLENBQUM7UUFDTCxJQUFJLEVBQUUsOEJBQThCO1FBQ3BDLE1BQU0sRUFBRSwyQ0FBMkM7UUFDbkQsT0FBTyxFQUFFLFNBQVM7UUFDbEIsSUFBSSxFQUFFLE1BQU07UUFDWixPQUFPLEVBQUUsSUFBSTtRQUNiLEdBQUcsRUFBRSxNQUFNO1FBQ1gsS0FBSyxFQUFFLEtBQUs7UUFDWixLQUFLLEVBQUUsT0FBTztRQUNkLEtBQUssRUFBRSwrQ0FBK0M7UUFDdEQsS0FBSyxFQUFFLENBQUM7UUFDUixPQUFPLEVBQUUsSUFBSTtRQUNiLE1BQU0sRUFBRSxDQUFDO0tBQ1Y7SUFDRDtRQUNFLEVBQUUsRUFBRSxDQUFDO1FBQ0wsSUFBSSxFQUFFLE9BQU87UUFDYixNQUFNLEVBQUUsWUFBWTtRQUNwQixPQUFPLEVBQUUsUUFBUTtRQUNqQixJQUFJLEVBQUUsTUFBTTtRQUNaLE9BQU8sRUFBRSxJQUFJO1FBQ2IsR0FBRyxFQUFFLE1BQU07UUFDWCxLQUFLLEVBQUUsTUFBTTtRQUNiLEtBQUssRUFBRSxLQUFLO1FBQ1osS0FBSyxFQUFFLHdCQUF3QjtRQUMvQixLQUFLLEVBQUUsQ0FBQztRQUNSLE9BQU8sRUFBRSxJQUFJO1FBQ2IsTUFBTSxFQUFFLENBQUM7S0FDVjtJQUNEO1FBQ0UsRUFBRSxFQUFFLENBQUM7UUFDTCxJQUFJLEVBQUUsaUJBQWlCO1FBQ3ZCLE1BQU0sRUFBRSxVQUFVO1FBQ2xCLE9BQU8sRUFBRSxXQUFXO1FBQ3BCLElBQUksRUFBRSxNQUFNO1FBQ1osT0FBTyxFQUFFLElBQUk7UUFDYixHQUFHLEVBQUUsTUFBTTtRQUNYLEtBQUssRUFBRSxLQUFLO1FBQ1osS0FBSyxFQUFFLEtBQUs7UUFDWixLQUFLLEVBQUUsa0NBQWtDO1FBQ3pDLEtBQUssRUFBRSxDQUFDO1FBQ1IsT0FBTyxFQUFFLElBQUk7UUFDYixNQUFNLEVBQUUsQ0FBQztLQUNWO0lBQ0Q7UUFDRSxFQUFFLEVBQUUsRUFBRTtRQUNOLElBQUksRUFBRSxrQ0FBa0M7UUFDeEMsTUFBTSxFQUFFLFVBQVU7UUFDbEIsT0FBTyxFQUFFLFdBQVc7UUFDcEIsSUFBSSxFQUFFLE1BQU07UUFDWixPQUFPLEVBQUUsSUFBSTtRQUNiLEdBQUcsRUFBRSxNQUFNO1FBQ1gsS0FBSyxFQUFFLEtBQUs7UUFDWixLQUFLLEVBQUUsS0FBSztRQUNaLEtBQUssRUFBRSxtREFBbUQ7UUFDMUQsS0FBSyxFQUFFLENBQUM7UUFDUixPQUFPLEVBQUUsSUFBSTtRQUNiLE1BQU0sRUFBRSxDQUFDO0tBQ1Y7SUFDRDtRQUNFLEVBQUUsRUFBRSxFQUFFO1FBQ04sSUFBSSxFQUFFLE9BQU87UUFDYixNQUFNLEVBQUUsbUJBQW1CO1FBQzNCLE9BQU8sRUFBRSxRQUFRO1FBQ2pCLElBQUksRUFBRSxNQUFNO1FBQ1osT0FBTyxFQUFFLElBQUk7UUFDYixHQUFHLEVBQUUsS0FBSztRQUNWLEtBQUssRUFBRSxNQUFNO1FBQ2IsS0FBSyxFQUFFLEtBQUs7UUFDWixLQUFLLEVBQUUsd0JBQXdCO1FBQy9CLEtBQUssRUFBRSxDQUFDO1FBQ1IsT0FBTyxFQUFFLEtBQUs7UUFDZCxNQUFNLEVBQUUsQ0FBQztLQUNWO0NBQ0Y7Ozs7Ozs7Ozs7Ozs7OztBQ3JMYyxNQUFNLFNBQVM7O0FBQ3JCLG1CQUFTLEdBQUc7Ozs7R0FJbEIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDTFcsTUFBTSxJQUFJOztBQUNoQixTQUFJLEdBQUc7Ozs7R0FJYixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNMSixNQUFNLE9BQU87O0FBQ0osZUFBTyxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0E4QmxCLENBQUM7QUFHRixpRUFBZSxPQUFPLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ3VCO0FBQ0g7QUFDWjtBQUNrQjtBQUVsQyxNQUFNLE1BQU8sU0FBUSx3REFBUztJQUszQyxZQUFZLE9BQWUsRUFBRSxTQUFpQjtRQUM1QyxLQUFLLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSx3REFBUyxDQUFDLEtBQUssRUFBQyxpQ0FBaUMsRUFBQyxjQUFjLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksd0RBQVMsQ0FBQyxLQUFLLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLHdEQUFTLENBQUMsS0FBSyxFQUFFLFlBQVksRUFBRSxZQUFZLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBQ0MsWUFBWTtRQUNWLE1BQU0sU0FBUyxHQUFnQixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3BELFNBQVMsQ0FBQyxTQUFTLEdBQUcsaUVBQXNCLENBQUM7UUFDN0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELFVBQVU7UUFDUixNQUFNLE9BQU8sR0FBZ0IsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNoRCxPQUFPLENBQUMsU0FBUyxHQUFHLHVEQUFTLENBQUM7UUFDOUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELGVBQWU7UUFDYixNQUFNLFlBQVksR0FBZ0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUMxRCxZQUFZLENBQUMsU0FBUyxHQUFHLHdFQUFtQixDQUFDO1FBQzdDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFSCxNQUFNO1FBQ0osSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7Q0FDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekM2QztBQUNDO0FBQ047QUFFMUIsTUFBTSxJQUFLLFNBQVEsd0RBQVM7SUFJekMsWUFBWSxPQUFlLEVBQUUsU0FBaUI7UUFDNUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksd0RBQVMsQ0FBQyxTQUFTLEVBQUMsV0FBVyxFQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2xFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSx3REFBUyxDQUFDLFNBQVMsRUFBQyxTQUFTLEVBQUMsU0FBUyxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUNELGFBQWE7UUFDWCxNQUFNLGNBQWMsR0FBZ0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUMxRCxjQUFjLENBQUMsU0FBUyxHQUFHLGdFQUFlLENBQUM7UUFDM0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVDLGVBQWU7UUFDYixNQUFNLGdCQUFnQixHQUFnQixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzlELGdCQUFnQixDQUFDLFNBQVMsR0FBRyxzRUFBbUIsQ0FBQztRQUNqRCxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFSCxNQUFNO1FBQ0osSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztDQUNGOzs7Ozs7Ozs7Ozs7Ozs7QUMvQkQsTUFBTSxXQUFXOztBQUNSLHNCQUFVLEdBQUc7Ozs7Ozs7OztDQVNyQixDQUFDO0FBR0YsaUVBQWUsV0FBVyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNiWixNQUFNLFNBQVM7O0FBQ3JCLG1CQUFTLEdBQUc7Ozs7R0FJbEIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDTFcsTUFBTSxTQUFTO0lBRzVCLFlBQVksT0FBZSxFQUFFLFlBQW9CLEVBQUUsRUFBRSxFQUFXO1FBQzlELElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDckMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDdkMsQ0FBQztJQUVELE1BQU07UUFDSixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztDQUNGOzs7Ozs7Ozs7Ozs7Ozs7QUNGRCxNQUFNLFlBQVk7SUFFZCxNQUFNLENBQUMsZUFBZSxDQUNwQixPQUF5QixFQUN6QixJQUFtQztRQUVuQyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVELE1BQU0sQ0FBQyxlQUFlLENBQUMsSUFBc0I7UUFDM0MsSUFBSSxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzlCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdkQ7UUFDRCxPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7Q0FDRjtBQUV5Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDM0I1QztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7O0FDQXNCO0FBQ3RCLDREQUE0RDtBQUM1RCxtQ0FBbUM7QUFDSztBQUN4QyxxQ0FBcUM7QUFDckMsMkJBQTJCO0FBQzNCLHlEQUF5RDtBQUN6RCx5RUFBeUU7QUFDekUsMkNBQTJDO0FBQzNDLGlDQUFpQztBQUVNO0FBQ2pCO0FBRXRCLE1BQU0sR0FBRyxHQUFHLElBQUksMkRBQUcsRUFBRSxDQUFDO0FBQ3RCLEdBQUcsQ0FBQyxLQUFLLENBQUMsa0RBQUssQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvY2FydC9jYXJ0LmNzcyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29tcG9uZW50cy93aW5lY2FyZHMvd2luZWNhcmRzLmNzcyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvZ2xvYmFsLmNzcyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvY2FydC9jYXJ0LmNzcz9kMjg2Iiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL3dpbmVjYXJkcy93aW5lY2FyZHMuY3NzPzczMDMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2dsb2JhbC5jc3M/ZDNiYyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL2FwcC9hcHAudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvY2FydC9jYXJ0LnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL2ZpbHRlcnMvZmlsdGVyU2V0dGluZ3MudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvd2luZWNhcmRzL3dpbmVjYXJkcy50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29uc3RhdHMvZ29vZHMudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2h0bWwtY29tcG9uZW50cy9jYXJ0LXBvcHVwL2NhcnQtcG9wdXAudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2h0bWwtY29tcG9uZW50cy9jYXJ0L2NhcnQudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2h0bWwtY29tcG9uZW50cy9maWx0ZXJzL2ZpbHRlcnMudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2h0bWwtY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9odG1sLWNvbXBvbmVudHMvbWFpbi9tYWluLnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9odG1sLWNvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvaHRtbC1jb21wb25lbnRzL3dpbmVjYXJkcy93aW5lY2FyZHMudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL3V0aWxzL2NvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvdXRpbHMvbG9jYWxzdG9yYWdlLnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL29ubGluZS1zdG9yZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1iYWNrZ3JvdW5kOiBibGFjaztcXG4gIC0tcmVkOiAjZDYwMDAwO1xcbiAgLS1nb2xkOiAjZmRjODU0O1xcbiB9XFxuXFxuLmNhcnQtcG9wdXAge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAxMHZoO1xcbiAgbGVmdDogMTB2dztcXG4gIHdpZHRoOiA4MHZ3O1xcbiAgaGVpZ2h0OiA4MHZoO1xcbiAgcGFkZGluZzogMmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICB6LWluZGV4OiAxMDE7XFxuICBjb2xvcjogdmFyKC0tZ29sZCk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3gtc2hhZG93OiAwIDAgMzBweCB2YXIoLS1nb2xkKTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5jYXJ0LXBvcHVwLmFjdGl2ZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmNhcnQtcG9wdXBfX2NvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDgwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDFlbTtcXG59XFxuXFxuLmNsb3NlLXBvcHVwIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcGFkZGluZzogMC4xZW0gMC41ZW07XFxuICBib3JkZXItcmFkaXVzOiAxMCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMWVtO1xcbiAgdG9wOiAxZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcbn1cXG5cXG4uY2xvc2UtcG9wdXA6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEsIDEuMSk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1nb2xkKTtcXG4gIGJveC1zaGFkb3c6IDJweCAycHggMTVweCB2YXIoLS1nb2xkKTtcXG4gIHRyYW5zaXRpb246IDAuMnM7XFxufVxcblxcbi5jbG9zZS1wb3B1cDphY3RpdmUge1xcbiAgdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4uY2FydC1pdGVtIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gZ2FwOiAxZW07XFxufVxcblxcbi5jYXJ0X19udW1iZXJ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjVlbTtcXG59XFxuXFxuLmNhcnRfX2Vycm9yIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMTB2aDtcXG4gIGxlZnQ6IDEwdnc7XFxuICB3aWR0aDogODB2dztcXG4gIGhlaWdodDogODB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXG4gIGNvbG9yOiB2YXIoLS1nb2xkKTtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5jYXJ0X19lcnJvci5hY3RpdmUge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuXFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvY2FydC9jYXJ0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsZUFBZTtDQUNoQjs7QUFFRDtFQUNFLGVBQWU7RUFDZixTQUFTO0VBQ1QsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQ0FBZ0M7RUFDaEMsYUFBYTtBQUNmOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFFBQVE7RUFDUixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLDZCQUE2QjtFQUM3QixvQ0FBb0M7RUFDcEMsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQ0FBa0M7Q0FDbkMsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtDQUNuQixRQUFRO0FBQ1Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsU0FBUztFQUNULFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0tYmFja2dyb3VuZDogYmxhY2s7XFxuICAtLXJlZDogI2Q2MDAwMDtcXG4gIC0tZ29sZDogI2ZkYzg1NDtcXG4gfVxcblxcbi5jYXJ0LXBvcHVwIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMTB2aDtcXG4gIGxlZnQ6IDEwdnc7XFxuICB3aWR0aDogODB2dztcXG4gIGhlaWdodDogODB2aDtcXG4gIHBhZGRpbmc6IDJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgei1pbmRleDogMTAxO1xcbiAgY29sb3I6IHZhcigtLWdvbGQpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm94LXNoYWRvdzogMCAwIDMwcHggdmFyKC0tZ29sZCk7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uY2FydC1wb3B1cC5hY3RpdmUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5jYXJ0LXBvcHVwX19jb250YWluZXIge1xcbiAgaGVpZ2h0OiA4MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxZW07XFxufVxcblxcbi5jbG9zZS1wb3B1cCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmc6IDAuMWVtIDAuNWVtO1xcbiAgYm9yZGVyLXJhZGl1czogMTAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDFlbTtcXG4gIHRvcDogMWVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogMC4ycztcXG59XFxuXFxuLmNsb3NlLXBvcHVwOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xLCAxLjEpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ29sZCk7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDE1cHggdmFyKC0tZ29sZCk7XFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcbn1cXG5cXG4uY2xvc2UtcG9wdXA6YWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLmNhcnQtaXRlbSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuIGdhcDogMWVtO1xcbn1cXG5cXG4uY2FydF9fbnVtYmVye1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC41ZW07XFxufVxcblxcbi5jYXJ0X19lcnJvciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDEwdmg7XFxuICBsZWZ0OiAxMHZ3O1xcbiAgd2lkdGg6IDgwdnc7XFxuICBoZWlnaHQ6IDgwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCk7XFxuICBjb2xvcjogdmFyKC0tZ29sZCk7XFxuICB6LWluZGV4OiAxMDA7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uY2FydF9fZXJyb3IuYWN0aXZlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcblxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tYmFja2dyb3VuZDogIzE0MGEwYTtcXG4gIC0tcmVkOiAjZDYwMDAwO1xcbiAgLS1nb2xkOiAjZmRjODU0O1xcbiB9XFxuXFxuIC53aW5lY2FyZHN7XFxuICB3aWR0aDogOTAlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBtYXgtd2lkdGg6IDgwcmVtO1xcbn1cXG5cXG4ud2luZWNhcmRzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBncmlkLWNvbHVtbi1nYXA6IDNlbTtcXG4gIGdyaWQtcm93LWdhcDogM2VtO1xcbn1cXG5cXG4ud2luZWNhcmRzX19pdGVtIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAyMGVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXG4gIC13ZWJraXQtcGVyc3BlY3RpdmU6IDEwMDBweDtcXG4gICAgcGVyc3BlY3RpdmU6IDEwMDBweDtcXG59XFxuXFxuLndpbmVjYXJkc19fZmFjZSxcXG4ud2luZWNhcmRzX19iYWNrIHtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBib3gtc2hhZG93OiAwIDAgMTJweCAwIHZhcigtLWdvbGQpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gLjdzIGN1YmljLWJlemllcigwLjQsIDAuMiwgMC4yLCAxKTtcXG4gIHRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIC43cyBjdWJpYy1iZXppZXIoMC40LCAwLjIsIDAuMiwgMSk7XFxuICAtby10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjdzIGN1YmljLWJlemllcigwLjQsIDAuMiwgMC4yLCAxKTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuN3MgY3ViaWMtYmV6aWVyKDAuNCwgMC4yLCAwLjIsIDEpO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC43cyBjdWJpYy1iZXppZXIoMC40LCAwLjIsIDAuMiwgMSksIC13ZWJraXQtdHJhbnNmb3JtIC43cyBjdWJpYy1iZXppZXIoMC40LCAwLjIsIDAuMiwgMSk7XFxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWluLWhlaWdodDogMzUwcHg7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgY29sb3I6ICNmZmY7XFxuICB0ZXh0LXNoYWRvdzogMTBweCAxMHB4IDEwcHggdmFyKC0tYmFja2dyb3VuZCk7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi53aW5lY2FyZHNfX2JhY2t7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXG4gIGNvbG9yOiB2YXIoLS1nb2xkKTtcXG59XFxuXFxuLndpbmVjYXJkc19fZmFjZTphZnRlcntcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgei1pbmRleDogMTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBvcGFjaXR5OiAuNTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxuICAgIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICAgICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLndpbmVjYXJkc19faXRlbSAud2luZWNhcmRzX19mYWNlLFxcbi53aW5lY2FyZHNfX2l0ZW0gLndpbmVjYXJkc19fYmFja3tcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAuN3MgY3ViaWMtYmV6aWVyKDAuNCwgMC4yLCAwLjIsIDEpO1xcbiAgICB0cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAuN3MgY3ViaWMtYmV6aWVyKDAuNCwgMC4yLCAwLjIsIDEpO1xcbiAgICAtby10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjdzIGN1YmljLWJlemllcigwLjQsIDAuMiwgMC4yLCAxKTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC43cyBjdWJpYy1iZXppZXIoMC40LCAwLjIsIDAuMiwgMSk7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuN3MgY3ViaWMtYmV6aWVyKDAuNCwgMC4yLCAwLjIsIDEpLCAtd2Via2l0LXRyYW5zZm9ybSAuN3MgY3ViaWMtYmV6aWVyKDAuNCwgMC4yLCAwLjIsIDEpO1xcbn1cXG5cXG4ud2luZWNhcmRzX19iYWNre1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1zaGFkb3c6IDEwcHggMTBweCAxMHB4IHZhcigtLWdvbGQpO1xcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxufVxcblxcbi53aW5lY2FyZHNfX2ZhY2UtZGV0YWlscyB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSB0cmFuc2xhdGVaKDYwcHgpIHNjYWxlKDAuOTQpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHRyYW5zbGF0ZVooNjBweCkgc2NhbGUoMC45NCk7XFxudG9wOiA1MCU7XFxucG9zaXRpb246IGFic29sdXRlO1xcbmxlZnQ6IDA7XFxud2lkdGg6IDEwMCU7XFxucGFkZGluZzogMnJlbTtcXG4td2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbm91dGxpbmU6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4td2Via2l0LXBlcnNwZWN0aXZlOiBpbmhlcml0O1xcbiAgcGVyc3BlY3RpdmU6IGluaGVyaXQ7XFxuei1pbmRleDogMztcXG59XFxuXFxuXFxuLndpbmVjYXJkc19faXRlbSAud2luZWNhcmRzX19iYWNre1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XFxuICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxuICAgICAgICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxufVxcblxcbi53aW5lY2FyZHNfX2l0ZW0gLndpbmVjYXJkc19fZmFjZXtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XFxuICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxuICAgICAgICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxufVxcblxcbi53aW5lY2FyZHNfX2l0ZW06Zm9jdXMgLndpbmVjYXJkc19fYmFjayxcXG4ud2luZWNhcmRzX19pdGVtOmhvdmVyIC53aW5lY2FyZHNfX2JhY2t7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcbiAgICAgICAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcbn1cXG5cXG4ud2luZWNhcmRzX19pdGVtOmhvdmVyIC53aW5lY2FyZHNfX2ZhY2UsXFxuLndpbmVjYXJkc19faXRlbTpmb2N1cyAud2luZWNhcmRzX19mYWNle1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoLTE4MGRlZyk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgtMTgwZGVnKTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXG4gICAgICAgICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXG59XFxuXFxuLndpbmVjYXJkc19fZmFjZS1waG90b3tcXG4gIHdpZHRoOiAxMGVtO1xcbiAgaGVpZ2h0OiAxMGVtO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb24teDogMTAwJTtcXG4gIG1hcmdpbjogMWVtO1xcbn1cXG5cXG4ud2luZWNhcmRzX19iYWNrLW5hbWUge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbiAgdGV4dC1zaGFkb3c6IHdoaXRlO1xcbn1cXG5cXG4uY2FydF9fYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdvbGQpO1xcbiAgYm9yZGVyOiB2YXIoLS1nb2xkKTtcXG4gIGNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXG4gIHRleHQtc2hhZG93OiAycHggMnB4IDEwcHggdmFyKC0tYmFja2dyb3VuZCk7XFxuICBib3gtc2hhZG93OiAxMHB4IDEwcHggMjBweCB2YXIoLS1iYWNrZ3JvdW5kKTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IDAuMnM7XFxufVxcblxcbi5jYXJ0X19idG46aG92ZXIsXFxuLmNhcnRfX2J0bjpmb2N1c3tcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IDIwcHggdmFyKC0tZ29sZCk7XFxuICBib3JkZXI6IDFweCBzb2xpZCAgdmFyKC0tZ29sZCk7XFxuICBjb2xvcjogdmFyKC0tZ29sZCk7XFxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAxMHB4IHZhcigtLWdvbGQpO1xcbiAgdHJhbnNpdGlvbjogMC4ycztcXG59XFxuXFxuXFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvd2luZWNhcmRzL3dpbmVjYXJkcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztFQUNkLGVBQWU7Q0FDaEI7O0NBRUE7RUFDQyxVQUFVO0VBQ1YsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGVBQWU7RUFDZixvQ0FBb0M7RUFDcEMsNEJBQTRCO0VBQzVCLDJCQUEyQjtJQUN6QixtQkFBbUI7QUFDdkI7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLGtDQUFrQztFQUNsQyxtQkFBbUI7RUFDbkIsd0VBQXdFO0VBQ3hFLGdFQUFnRTtFQUNoRSwyREFBMkQ7RUFDM0Qsd0RBQXdEO0VBQ3hELDhHQUE4RztFQUM5RyxtQ0FBbUM7VUFDM0IsMkJBQTJCO0VBQ25DLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsNkNBQTZDO0VBQzdDLGVBQWU7QUFDakI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0Isa0JBQWtCO0FBQ3BCOztBQUVBO0NBQ0Msa0JBQWtCO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1gsY0FBYztJQUNkLFdBQVc7SUFDWCxtQ0FBbUM7SUFDbkMsbUNBQW1DO1lBQzNCLDJCQUEyQjtJQUNuQyxtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksd0VBQXdFO0lBQ3hFLGdFQUFnRTtJQUNoRSwyREFBMkQ7SUFDM0Qsd0RBQXdEO0lBQ3hELDhHQUE4RztBQUNsSDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCx1Q0FBdUM7RUFDdkMsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0VBQWdFO0VBQ2hFLHdEQUF3RDtBQUMxRCxRQUFRO0FBQ1Isa0JBQWtCO0FBQ2xCLE9BQU87QUFDUCxXQUFXO0FBQ1gsYUFBYTtBQUNiLDhCQUE4QjtFQUM1QixzQkFBc0I7QUFDeEIsOEJBQThCO0FBQzlCLDRCQUE0QjtFQUMxQixvQkFBb0I7QUFDdEIsVUFBVTtBQUNWOzs7QUFHQTtFQUNFLGtDQUFrQztVQUMxQiwwQkFBMEI7RUFDbEMsb0NBQW9DO1VBQzVCLDRCQUE0QjtBQUN0Qzs7QUFFQTtFQUNFLGdDQUFnQztVQUN4Qix3QkFBd0I7RUFDaEMsb0NBQW9DO1VBQzVCLDRCQUE0QjtBQUN0Qzs7QUFFQTs7RUFFRSxnQ0FBZ0M7VUFDeEIsd0JBQXdCO0VBQ2hDLG9DQUFvQztVQUM1Qiw0QkFBNEI7QUFDdEM7O0FBRUE7O0VBRUUsbUNBQW1DO1VBQzNCLDJCQUEyQjtFQUNuQyxvQ0FBb0M7VUFDNUIsNEJBQTRCO0FBQ3RDOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWix3QkFBd0I7RUFDeEIsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsd0JBQXdCO0VBQ3hCLDJDQUEyQztFQUMzQyw0Q0FBNEM7RUFDNUMsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBOztFQUVFLG1DQUFtQztFQUNuQyxzQ0FBc0M7RUFDdEMsOEJBQThCO0VBQzlCLGtCQUFrQjtFQUNsQixxQ0FBcUM7RUFDckMsZ0JBQWdCO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0tYmFja2dyb3VuZDogIzE0MGEwYTtcXG4gIC0tcmVkOiAjZDYwMDAwO1xcbiAgLS1nb2xkOiAjZmRjODU0O1xcbiB9XFxuXFxuIC53aW5lY2FyZHN7XFxuICB3aWR0aDogOTAlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBtYXgtd2lkdGg6IDgwcmVtO1xcbn1cXG5cXG4ud2luZWNhcmRzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBncmlkLWNvbHVtbi1nYXA6IDNlbTtcXG4gIGdyaWQtcm93LWdhcDogM2VtO1xcbn1cXG5cXG4ud2luZWNhcmRzX19pdGVtIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAyMGVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXG4gIC13ZWJraXQtcGVyc3BlY3RpdmU6IDEwMDBweDtcXG4gICAgcGVyc3BlY3RpdmU6IDEwMDBweDtcXG59XFxuXFxuLndpbmVjYXJkc19fZmFjZSxcXG4ud2luZWNhcmRzX19iYWNrIHtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBib3gtc2hhZG93OiAwIDAgMTJweCAwIHZhcigtLWdvbGQpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gLjdzIGN1YmljLWJlemllcigwLjQsIDAuMiwgMC4yLCAxKTtcXG4gIHRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIC43cyBjdWJpYy1iZXppZXIoMC40LCAwLjIsIDAuMiwgMSk7XFxuICAtby10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjdzIGN1YmljLWJlemllcigwLjQsIDAuMiwgMC4yLCAxKTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuN3MgY3ViaWMtYmV6aWVyKDAuNCwgMC4yLCAwLjIsIDEpO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC43cyBjdWJpYy1iZXppZXIoMC40LCAwLjIsIDAuMiwgMSksIC13ZWJraXQtdHJhbnNmb3JtIC43cyBjdWJpYy1iZXppZXIoMC40LCAwLjIsIDAuMiwgMSk7XFxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWluLWhlaWdodDogMzUwcHg7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgY29sb3I6ICNmZmY7XFxuICB0ZXh0LXNoYWRvdzogMTBweCAxMHB4IDEwcHggdmFyKC0tYmFja2dyb3VuZCk7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi53aW5lY2FyZHNfX2JhY2t7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXG4gIGNvbG9yOiB2YXIoLS1nb2xkKTtcXG59XFxuXFxuLndpbmVjYXJkc19fZmFjZTphZnRlcntcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgei1pbmRleDogMTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBvcGFjaXR5OiAuNTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxuICAgIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICAgICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLndpbmVjYXJkc19faXRlbSAud2luZWNhcmRzX19mYWNlLFxcbi53aW5lY2FyZHNfX2l0ZW0gLndpbmVjYXJkc19fYmFja3tcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAuN3MgY3ViaWMtYmV6aWVyKDAuNCwgMC4yLCAwLjIsIDEpO1xcbiAgICB0cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAuN3MgY3ViaWMtYmV6aWVyKDAuNCwgMC4yLCAwLjIsIDEpO1xcbiAgICAtby10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjdzIGN1YmljLWJlemllcigwLjQsIDAuMiwgMC4yLCAxKTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC43cyBjdWJpYy1iZXppZXIoMC40LCAwLjIsIDAuMiwgMSk7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuN3MgY3ViaWMtYmV6aWVyKDAuNCwgMC4yLCAwLjIsIDEpLCAtd2Via2l0LXRyYW5zZm9ybSAuN3MgY3ViaWMtYmV6aWVyKDAuNCwgMC4yLCAwLjIsIDEpO1xcbn1cXG5cXG4ud2luZWNhcmRzX19iYWNre1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1zaGFkb3c6IDEwcHggMTBweCAxMHB4IHZhcigtLWdvbGQpO1xcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxufVxcblxcbi53aW5lY2FyZHNfX2ZhY2UtZGV0YWlscyB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSB0cmFuc2xhdGVaKDYwcHgpIHNjYWxlKDAuOTQpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHRyYW5zbGF0ZVooNjBweCkgc2NhbGUoMC45NCk7XFxudG9wOiA1MCU7XFxucG9zaXRpb246IGFic29sdXRlO1xcbmxlZnQ6IDA7XFxud2lkdGg6IDEwMCU7XFxucGFkZGluZzogMnJlbTtcXG4td2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbm91dGxpbmU6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4td2Via2l0LXBlcnNwZWN0aXZlOiBpbmhlcml0O1xcbiAgcGVyc3BlY3RpdmU6IGluaGVyaXQ7XFxuei1pbmRleDogMztcXG59XFxuXFxuXFxuLndpbmVjYXJkc19faXRlbSAud2luZWNhcmRzX19iYWNre1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XFxuICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxuICAgICAgICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxufVxcblxcbi53aW5lY2FyZHNfX2l0ZW0gLndpbmVjYXJkc19fZmFjZXtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XFxuICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxuICAgICAgICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxufVxcblxcbi53aW5lY2FyZHNfX2l0ZW06Zm9jdXMgLndpbmVjYXJkc19fYmFjayxcXG4ud2luZWNhcmRzX19pdGVtOmhvdmVyIC53aW5lY2FyZHNfX2JhY2t7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcbiAgICAgICAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcbn1cXG5cXG4ud2luZWNhcmRzX19pdGVtOmhvdmVyIC53aW5lY2FyZHNfX2ZhY2UsXFxuLndpbmVjYXJkc19faXRlbTpmb2N1cyAud2luZWNhcmRzX19mYWNle1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoLTE4MGRlZyk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgtMTgwZGVnKTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXG4gICAgICAgICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXG59XFxuXFxuLndpbmVjYXJkc19fZmFjZS1waG90b3tcXG4gIHdpZHRoOiAxMGVtO1xcbiAgaGVpZ2h0OiAxMGVtO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb24teDogMTAwJTtcXG4gIG1hcmdpbjogMWVtO1xcbn1cXG5cXG4ud2luZWNhcmRzX19iYWNrLW5hbWUge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbiAgdGV4dC1zaGFkb3c6IHdoaXRlO1xcbn1cXG5cXG4uY2FydF9fYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdvbGQpO1xcbiAgYm9yZGVyOiB2YXIoLS1nb2xkKTtcXG4gIGNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXG4gIHRleHQtc2hhZG93OiAycHggMnB4IDEwcHggdmFyKC0tYmFja2dyb3VuZCk7XFxuICBib3gtc2hhZG93OiAxMHB4IDEwcHggMjBweCB2YXIoLS1iYWNrZ3JvdW5kKTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IDAuMnM7XFxufVxcblxcbi5jYXJ0X19idG46aG92ZXIsXFxuLmNhcnRfX2J0bjpmb2N1c3tcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IDIwcHggdmFyKC0tZ29sZCk7XFxuICBib3JkZXI6IDFweCBzb2xpZCAgdmFyKC0tZ29sZCk7XFxuICBjb2xvcjogdmFyKC0tZ29sZCk7XFxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAxMHB4IHZhcigtLWdvbGQpO1xcbiAgdHJhbnNpdGlvbjogMC4ycztcXG59XFxuXFxuXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9pbWcvYmcxLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ltZy9jYXJ0LWdvbGQuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gLS1iYWNrZ3JvdW5kOiBibGFjaztcXG4gLS1yZWQ6ICNkNjAwMDA7XFxuIC0tZ29sZDogI2ZkYzg1NDtcXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcblxcbn1cXG5cXG5ib2R5IHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIG1heC1oZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICdoZWFkZXIgaGVhZGVyIGhlYWRlcidcXG4gICAgJ21haW4gbWFpbiBtYWluJ1xcbiAgICAnZm9vdGVyIGZvb3RlciBmb290ZXInO1xcbiAgZ3JpZC1yb3ctZ2FwOiAxZW07XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG87XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4gIC5oZWFkZXIge1xcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogIDFlbTtcXG4gIH1cXG5cXG4gIC5zZWFyY2gtY29udGFpbmVyX19pbnB1dCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcbiAgICBwYWRkaW5nOiA2cHg7XFxuICAgIGZvbnQtc2l6ZTogMTdweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZ29sZCk7XFxuICAgIGJveC1zaGFkb3c6ICAwIDAgMzBweCB2YXIoLS1nb2xkKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgfVxcblxcbiAgLnNlYXJjaC1jb250YWluZXJfX2lucHV0OmZvY3Vze1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAgMCAwIDMwcHggdmFyKC0tZ29sZCk7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICB9XFxuXFxuICAuaGVhZGVyX19jYXJ0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAzZW07XFxuICBoZWlnaHQ6IDNlbTtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIG5vLXJlcGVhdCBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcblxcbiAgLmhlYWRlcl9fY2FydDpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xLCAxLjEpO1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgfVxcblxcbiAgLmNhcnRfX3Byb2R1Y3RzIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDVweDtcXG4gICAgbGVmdDogNXB4O1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkKTtcXG4gICAgY29sb3I6IHZhcigtLWdvbGQpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHBhZGRpbmc6IDFweCA2cHg7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICB9XFxuXFxuICAubWFpbntcXG4gICAgZ3JpZC1hcmVhOiBtYWluO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiAwIDFlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMWVtO1xcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgfVxcblxcbiAgLm92ZXJsYXkge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgei1pbmRleDogOTk7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuXFxuICB9XFxuXFxuICAub3ZlcmxheS5hY3RpdmUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvZ2xvYmFsLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtDQUNDLG1CQUFtQjtDQUNuQixjQUFjO0NBQ2QsZUFBZTtBQUNoQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsZ0JBQWdCOztBQUVsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsYUFBYTtFQUNiOzs7MEJBR3dCO0VBQ3hCLGlCQUFpQjtFQUNqQixpQ0FBaUM7RUFDakMsa0NBQWtDO0VBQ2xDLHlEQUE2QztFQUM3Qyw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjtFQUNFO0lBQ0UsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxtQ0FBbUM7SUFDbkMsWUFBWTtJQUNaLGVBQWU7SUFDZiw2QkFBNkI7SUFDN0IsaUNBQWlDO0lBQ2pDLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLHVDQUF1QztJQUN2QyxhQUFhO0VBQ2Y7O0VBRUE7RUFDQSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsb0VBQThEO0VBQzlELHNCQUFzQjtFQUN0QixlQUFlO0VBQ2Y7O0VBRUE7SUFDRSwwQkFBMEI7SUFDMUIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsY0FBYztJQUNkLDRCQUE0QjtJQUM1QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsWUFBWTtFQUNkOztFQUVBO0lBQ0UsZUFBZTtJQUNmLFlBQVk7SUFDWixlQUFlO0lBQ2YsYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixRQUFRO0lBQ1IsNEJBQTRCO0VBQzlCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWixtQ0FBbUM7SUFDbkMsWUFBWTtJQUNaLFdBQVc7SUFDWCxhQUFhOztFQUVmOztFQUVBO0lBQ0UsY0FBYztFQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuIC0tYmFja2dyb3VuZDogYmxhY2s7XFxuIC0tcmVkOiAjZDYwMDAwO1xcbiAtLWdvbGQ6ICNmZGM4NTQ7XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG5cXG59XFxuXFxuYm9keSB7XFxuICB3aWR0aDogMTAwdnc7XFxuICBtYXgtaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAnaGVhZGVyIGhlYWRlciBoZWFkZXInXFxuICAgICdtYWluIG1haW4gbWFpbidcXG4gICAgJ2Zvb3RlciBmb290ZXIgZm9vdGVyJztcXG4gIGdyaWQtcm93LWdhcDogMWVtO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9hc3NldHMvaW1nL2JnMS5qcGcnKTtcXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4gIC5oZWFkZXIge1xcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogIDFlbTtcXG4gIH1cXG5cXG4gIC5zZWFyY2gtY29udGFpbmVyX19pbnB1dCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcbiAgICBwYWRkaW5nOiA2cHg7XFxuICAgIGZvbnQtc2l6ZTogMTdweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZ29sZCk7XFxuICAgIGJveC1zaGFkb3c6ICAwIDAgMzBweCB2YXIoLS1nb2xkKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgfVxcblxcbiAgLnNlYXJjaC1jb250YWluZXJfX2lucHV0OmZvY3Vze1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAgMCAwIDMwcHggdmFyKC0tZ29sZCk7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICB9XFxuXFxuICAuaGVhZGVyX19jYXJ0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAzZW07XFxuICBoZWlnaHQ6IDNlbTtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxuICBiYWNrZ3JvdW5kOiB1cmwoJy4vYXNzZXRzL2ltZy9jYXJ0LWdvbGQuc3ZnJykgbm8tcmVwZWF0IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxuXFxuICAuaGVhZGVyX19jYXJ0OmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEsIDEuMSk7XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxuICB9XFxuXFxuICAuY2FydF9fcHJvZHVjdHMge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNXB4O1xcbiAgICBsZWZ0OiA1cHg7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQpO1xcbiAgICBjb2xvcjogdmFyKC0tZ29sZCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgcGFkZGluZzogMXB4IDZweDtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG4gIH1cXG5cXG4gIC5tYWlue1xcbiAgICBncmlkLWFyZWE6IG1haW47XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW46IDAgMWVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxZW07XFxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICB9XFxuXFxuICAub3ZlcmxheSB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXG4gICAgb3BhY2l0eTogMC41O1xcbiAgICB6LWluZGV4OiA5OTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG5cXG4gIH1cXG5cXG4gIC5vdmVybGF5LmFjdGl2ZSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jYXJ0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY2FydC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vd2luZWNhcmRzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vd2luZWNhcmRzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nbG9iYWwuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nbG9iYWwuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IFdpbmVEZXRhaWxzIH0gZnJvbSBcIi4uLy4uL3R5cGVzL2ludGVyZmFjZXNcIjtcbmltcG9ydCB7IENhcnRTZXR0aW5ncyB9IGZyb20gXCIuLi9jYXJ0L2NhcnRcIjtcbmltcG9ydCBXaW5lQ2FyZHMgZnJvbSBcIi4uL3dpbmVjYXJkcy93aW5lY2FyZHNcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uLy4uL2h0bWwtY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyXCI7XG5pbXBvcnQgTWFpbiBmcm9tIFwiLi4vLi4vaHRtbC1jb21wb25lbnRzL21haW4vbWFpblwiO1xuaW1wb3J0IEZpbHRlclNldHRpbmdzIGZyb20gXCIuLi9maWx0ZXJzL2ZpbHRlclNldHRpbmdzXCI7XG5pbXBvcnQgRmlsdGVycyBmcm9tIFwiLi4vLi4vaHRtbC1jb21wb25lbnRzL2ZpbHRlcnMvZmlsdGVyc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAge1xuICBwcml2YXRlIHN0YXRpYyBjb250YWluZXI6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuYm9keTtcbiAgcHJpdmF0ZSBoZWFkZXI6IEhlYWRlcjtcbiAgcHJpdmF0ZSBtYWluOiBNYWluO1xuICBjYXJ0c2V0dGluZ3M6IENhcnRTZXR0aW5ncztcbiAgd2luZWNhcmRzOiBXaW5lQ2FyZHM7XG4gIGZpbHRlclNldHRpbmdzOiBGaWx0ZXJTZXR0aW5ncztcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jYXJ0c2V0dGluZ3MgPSBuZXcgQ2FydFNldHRpbmdzKCk7XG4gICAgdGhpcy53aW5lY2FyZHMgPSBuZXcgV2luZUNhcmRzKCk7XG4gICAgdGhpcy5maWx0ZXJTZXR0aW5ncyA9IG5ldyBGaWx0ZXJTZXR0aW5ncygpO1xuICAgIHRoaXMuaGVhZGVyID0gbmV3IEhlYWRlcignaGVhZGVyJywgJ2hlYWRlcicpO1xuICAgIHRoaXMubWFpbiA9IG5ldyBNYWluKCdtYWluJywgJ21haW4nKTtcblxuICB9XG4gIHN0YXJ0KGRhdGE6IFdpbmVEZXRhaWxzW10pIHtcbiAgICBBcHAuY29udGFpbmVyLmFwcGVuZCh0aGlzLmhlYWRlci5yZW5kZXIoKSk7XG4gICAgQXBwLmNvbnRhaW5lci5hcHBlbmQodGhpcy5tYWluLnJlbmRlcigpKTtcbiAgICB0aGlzLndpbmVjYXJkcy5yZW5kZXIoZGF0YSk7XG4gICAgdGhpcy5jYXJ0c2V0dGluZ3MucmVuZGVyKCk7XG4gICAgY29uc3QgY29sb3JGaWx0ZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbG9yLWZpbHRlcicpXG4gICAgY29uc3QgY291bnRyeUZpbHRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY291bnRyeS1maWx0ZXInKVxuICAgIGNvbnN0IGZpbHRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmlsdGVycycpO1xuICAgIGNvbG9yRmlsdGVycyEuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBldmVudCA9PiB7XG4gICAgICBpZih0aGlzLmZpbHRlclNldHRpbmdzLmZpbHRlckFyci5sZW5ndGggPT09IDAgKXtcbiAgICAgICAgdGhpcy5maWx0ZXJTZXR0aW5ncy5maWx0ZXJCeUNvbG9yKGRhdGEpO1xuICAgICAgICB0aGlzLndpbmVjYXJkcy5yZW5kZXIodGhpcy5maWx0ZXJTZXR0aW5ncy5maWx0ZXJlZCk7XG4gICAgICB9XG4gICAgICBlbHNle1xuICAgICAgICB0aGlzLmZpbHRlclNldHRpbmdzLmZpbHRlckJ5Q29sb3IodGhpcy5maWx0ZXJTZXR0aW5ncy5maWx0ZXJBcnIpO1xuICAgICAgICB0aGlzLndpbmVjYXJkcy5yZW5kZXIodGhpcy5maWx0ZXJTZXR0aW5ncy5maWx0ZXJlZCk7XG4gICAgICB9XG4gICAgICB9KVxuICAgICAgY291bnRyeUZpbHRlcnMhLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZXZlbnQgPT4ge1xuICAgICAgICBpZih0aGlzLmZpbHRlclNldHRpbmdzLmZpbHRlckFyci5sZW5ndGggPT09IDAgKXtcbiAgICAgICAgICB0aGlzLmZpbHRlclNldHRpbmdzLmZpbHRlckJ5Q291bnRyeShkYXRhKTtcbiAgICAgICAgICB0aGlzLndpbmVjYXJkcy5yZW5kZXIodGhpcy5maWx0ZXJTZXR0aW5ncy5maWx0ZXJlZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICB0aGlzLmZpbHRlclNldHRpbmdzLmZpbHRlckJ5Q291bnRyeSh0aGlzLmZpbHRlclNldHRpbmdzLmZpbHRlckFycik7XG4gICAgICAgICAgdGhpcy53aW5lY2FyZHMucmVuZGVyKHRoaXMuZmlsdGVyU2V0dGluZ3MuZmlsdGVyZWQpO1xuICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5yZXNldC1maWx0ZXJzJykhXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgdGhpcy5maWx0ZXJTZXR0aW5ncy5yZXNldEZpbHRlcnMoKTtcbiAgICAgICAgdGhpcy53aW5lY2FyZHMucmVuZGVyKGRhdGEpO1xuICAgICAgfSlcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICBpZiAoKDxIVE1MRWxlbWVudD5ldmVudC50YXJnZXQpIS5jbGFzc0xpc3QuY29udGFpbnMoJ2NhcnRfX2FkZCcpKSB7XG4gICAgICAgICAgbGV0IGFydGljdWwgPSBOdW1iZXIoKDxIVE1MRWxlbWVudD5ldmVudC50YXJnZXQpIS5kYXRhc2V0WydhcnRpY3VsJ10pO1xuICAgICAgICAgIGlmICh0aGlzLmNhcnRzZXR0aW5ncy50b3RhbEl0ZW1zIDwgMjAgKSB7XG4gICAgICAgICAgICB0aGlzLmNhcnRzZXR0aW5ncy5jYXJ0QWRkKGRhdGEsIGFydGljdWwpO1xuICAgICAgICAgICAgdGhpcy5jYXJ0c2V0dGluZ3MucmVuZGVyKCk7XG4gICAgICAgICAgICB0aGlzLndpbmVjYXJkcy5yZW5kZXIoZGF0YSk7XG4gICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FydF9fZXJyb3InKSEuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheScpIS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcblxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICBpZiAoKDxIVE1MRWxlbWVudD5ldmVudC50YXJnZXQpIS5jbGFzc0xpc3QuY29udGFpbnMoJ2NhcnRfX3JlbW92ZScpKSB7XG4gICAgICAgICAgbGV0IGFydGljdWwgPSBOdW1iZXIoKDxIVE1MRWxlbWVudD5ldmVudC50YXJnZXQpIS5kYXRhc2V0WydhcnRpY3VsJ10pO1xuICAgICAgICAgIGlmICh0aGlzLmNhcnRzZXR0aW5ncy50b3RhbEl0ZW1zID4gMCkge1xuICAgICAgICAgICAgdGhpcy5jYXJ0c2V0dGluZ3MuY2FydFJlbW92ZShkYXRhLCBhcnRpY3VsKTtcbiAgICAgICAgICAgIHRoaXMuY2FydHNldHRpbmdzLnJlbmRlcigpO1xuICAgICAgICAgICAgdGhpcy53aW5lY2FyZHMucmVuZGVyKGRhdGEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcignLmVycm9yX19idG4nKSFcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgdGhpcy5jYXJ0c2V0dGluZ3MuY2FydE9wZW4oKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcnRfX2Vycm9yJykhLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdhdXRvJztcbiAgICAgIH0pXG4gICAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0JykhXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgIHRoaXMuY2FydHNldHRpbmdzLmNhcnRPcGVuKCk7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2F1dG8nO1xuICAgICAgfSlcbiAgICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcignLmNsb3NlLXBvcHVwJykhXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgIHRoaXMuY2FydHNldHRpbmdzLmNhcnRDbG9zZSgpO1xuICAgICAgfSlcbiAgfVxufVxuXG4iLCJpbXBvcnQgJy4vY2FydC5jc3MnXG5pbXBvcnQgeyAgV2luZURldGFpbHMgfSBmcm9tICcuLi8uLi90eXBlcy9pbnRlcmZhY2VzJztcbmltcG9ydCB7IExvY2FsU3RvcmFnZSwgbG9jYWxTdG9yYWdlS2V5cyB9IGZyb20gJy4uLy4uL3V0aWxzL2xvY2Fsc3RvcmFnZSc7XG5pbXBvcnQgV2luZUNhcmRzIGZyb20gJy4uL3dpbmVjYXJkcy93aW5lY2FyZHMnXG5leHBvcnQgY2xhc3MgQ2FydFNldHRpbmdzIHtcbiAgY2FydDogV2luZURldGFpbHNbXTtcbiAgdG90YWxJdGVtczogbnVtYmVyO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNhcnQgPSBbXTtcbiAgICB0aGlzLnRvdGFsSXRlbXMgPSB0aGlzLnRvdGFsSXRlbXMgPSBMb2NhbFN0b3JhZ2UuZ2V0TG9jYWxTdG9yYWdlKGxvY2FsU3RvcmFnZUtleXMudG90YWxJdGVtc0luQ2FydCkgfHwgMDtcbiAgfVxuXG4gIGNhcnRBZGQoZGF0YTogV2luZURldGFpbHNbXSwgYXJ0aWN1bDogbnVtYmVyKSB7XG5cbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXJ0JykpIHtcbiAgICAgICAgICB0aGlzLmNhcnQgPSBMb2NhbFN0b3JhZ2UuZ2V0TG9jYWxTdG9yYWdlKGxvY2FsU3RvcmFnZUtleXMuY2FydCkgfHwgJyc7XG4gICAgICAgIH07XG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ29vZHMnKSkge1xuICAgICAgICAgIGRhdGEgPSBMb2NhbFN0b3JhZ2UuZ2V0TG9jYWxTdG9yYWdlKGxvY2FsU3RvcmFnZUtleXMuZ29vZHMpIHx8IGRhdGE7XG4gICAgICAgIH07XG4gICAgICBcbiAgICAgICAgY29uc29sZS5sb2coYXJ0aWN1bCk7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5jYXJ0LmZpbmRJbmRleChlbGVtID0+IGVsZW0uaWQgPT09IGFydGljdWwpO1xuICAgICAgICBpZihpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICBkYXRhW2FydGljdWxdWydjb3VudCddLS07XG4gICAgICAgICAgZGF0YVthcnRpY3VsXVsnaW5DYXJ0J10rKztcbiAgICAgICAgICB0aGlzLmNhcnQucHVzaChkYXRhW2FydGljdWxdKTtcbiAgICAgICAgICB0aGlzLnRvdGFsSXRlbXMrKztcbiAgICAgICAgICBjb25zb2xlLmxvZygnZGF0YSBjb3VudCAnLGRhdGFbYXJ0aWN1bF1bJ2NvdW50J10pO1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdkYXRhIGluQ2FydCAnICxkYXRhW2FydGljdWxdWydpbkNhcnQnXSk7XG4gICAgICAgICAgY29uc29sZS5sb2codGhpcy5jYXJ0KVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICB0aGlzLnRvdGFsSXRlbXMrKztcbiAgICAgICAgICB0aGlzLmNhcnRbaW5kZXhdWydpbkNhcnQnXSsrO1xuICAgICAgICAgIGRhdGFbYXJ0aWN1bF1bJ2NvdW50J10tLTtcbiAgICAgICAgICBkYXRhW2FydGljdWxdWydpbkNhcnQnXSsrO1xuICAgICAgICAgIHRoaXMuY2FydFtpbmRleF1bJ2NvdW50J10tLTtcbiAgICAgICAgICBjb25zb2xlLmxvZygnY2FydCBDb3VudCAnLHRoaXMuY2FydFtpbmRleF1bJ2NvdW50J10pXG4gICAgICAgICAgY29uc29sZS5sb2coJ2RhdGEgY291bnQgJyxkYXRhW2FydGljdWxdWydjb3VudCddKVxuICAgICAgICAgIGNvbnNvbGUubG9nKCdjYXJ0IGluQ2FydCAnLHRoaXMuY2FydFtpbmRleF1bJ2luQ2FydCddKVxuICAgICAgICAgIGNvbnNvbGUubG9nKCdkYXRhIGluQ2FydCAnLGRhdGFbYXJ0aWN1bF1bJ2luQ2FydCddKVxuICAgICAgICB9IFxuICAgICAgICBpZihkYXRhW2FydGljdWxdWydjb3VudCddID09PSAwKSB7XG4gICAgICAgICAgY29uc3Qgd2luZWNhcmRzID0gbmV3IFdpbmVDYXJkcygpO1xuICAgICAgICAgIHdpbmVjYXJkcy5yZW5kZXIoZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgTG9jYWxTdG9yYWdlLnNldExvY2FsU3RvcmFnZShsb2NhbFN0b3JhZ2VLZXlzLmNhcnQsIHRoaXMuY2FydClcbiAgICAgICAgTG9jYWxTdG9yYWdlLnNldExvY2FsU3RvcmFnZShsb2NhbFN0b3JhZ2VLZXlzLmdvb2RzLCBkYXRhKVxuICAgICAgICBMb2NhbFN0b3JhZ2Uuc2V0TG9jYWxTdG9yYWdlKGxvY2FsU3RvcmFnZUtleXMudG90YWxJdGVtc0luQ2FydCwgdGhpcy50b3RhbEl0ZW1zKVxuICAgICAgfVxuICAgICAgY2FydFJlbW92ZShkYXRhOiBXaW5lRGV0YWlsc1tdLCBhcnRpY3VsOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXJ0JykpIHtcbiAgICAgICAgICB0aGlzLmNhcnQgPSBMb2NhbFN0b3JhZ2UuZ2V0TG9jYWxTdG9yYWdlKGxvY2FsU3RvcmFnZUtleXMuY2FydCkgfHwgJyc7XG4gICAgICAgIH07XG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ29vZHMnKSkge1xuICAgICAgICAgIGRhdGEgPSBMb2NhbFN0b3JhZ2UuZ2V0TG9jYWxTdG9yYWdlKGxvY2FsU3RvcmFnZUtleXMuZ29vZHMpIHx8IGRhdGE7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnNvbGUubG9nKGFydGljdWwpO1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuY2FydC5maW5kSW5kZXgoZWxlbSA9PiBlbGVtLmlkID09PSBhcnRpY3VsKTtcbiAgICAgICAgaWYoaW5kZXggPj0gMCkge1xuICAgICAgICAgIHRoaXMudG90YWxJdGVtcy0tO1xuICAgICAgICAgIHRoaXMuY2FydFtpbmRleF1bJ2luQ2FydCddLS07XG4gICAgICAgICAgZGF0YVthcnRpY3VsXVsnY291bnQnXSsrO1xuICAgICAgICAgIGRhdGFbYXJ0aWN1bF1bJ2luQ2FydCddLS07XG4gICAgICAgICAgdGhpcy5jYXJ0W2luZGV4XVsnY291bnQnXSsrO1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdjYXJ0IENvdW50ICcsdGhpcy5jYXJ0W2luZGV4XVsnY291bnQnXSlcbiAgICAgICAgICBjb25zb2xlLmxvZygnZGF0YSBjb3VudCAnLGRhdGFbYXJ0aWN1bF1bJ2NvdW50J10pXG4gICAgICAgICAgY29uc29sZS5sb2coJ2NhcnQgaW5DYXJ0ICcsdGhpcy5jYXJ0W2luZGV4XVsnaW5DYXJ0J10pXG4gICAgICAgICAgY29uc29sZS5sb2coJ2RhdGEgaW5DYXJ0ICcsZGF0YVthcnRpY3VsXVsnaW5DYXJ0J10pXG4gICAgICAgIH0gXG4gICAgICAgIExvY2FsU3RvcmFnZS5zZXRMb2NhbFN0b3JhZ2UobG9jYWxTdG9yYWdlS2V5cy5jYXJ0LCB0aGlzLmNhcnQpXG4gICAgICAgIExvY2FsU3RvcmFnZS5zZXRMb2NhbFN0b3JhZ2UobG9jYWxTdG9yYWdlS2V5cy5nb29kcywgZGF0YSlcbiAgICAgICAgTG9jYWxTdG9yYWdlLnNldExvY2FsU3RvcmFnZShsb2NhbFN0b3JhZ2VLZXlzLnRvdGFsSXRlbXNJbkNhcnQsIHRoaXMudG90YWxJdGVtcylcbiAgICAgIFxuICAgICAgfVxuXG4gICAgICByZW5kZXIoKSB7XG4gICAgICAgIHRoaXMuY2FydCA9IExvY2FsU3RvcmFnZS5nZXRMb2NhbFN0b3JhZ2UobG9jYWxTdG9yYWdlS2V5cy5jYXJ0KSB8fCBbXTtcbiAgICAgICAgY29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgICAgIGNvbnN0IGNhcnRJdGVtc1RlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FydEl0ZW1zVGVtcCcpIGFzIEhUTUxUZW1wbGF0ZUVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IGJhZGdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcnRfX3Byb2R1Y3RzJyk7XG4gICAgICAgIGNvbnN0IHBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcnQtcG9wdXAnKTtcbiAgICAgICAgbGV0IHRvdGFsU3VtID0gMDtcbiAgICAgICAgdGhpcy5jYXJ0LmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgY29uc3QgY2FydEl0ZW0gPSBjYXJ0SXRlbXNUZW1wLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpIGFzIEhUTUxFbGVtZW50O1xuICAgICAgICAgIChjYXJ0SXRlbS5xdWVyeVNlbGVjdG9yKCcuY2FydC1pdGVtX19uYW1lJykpIS50ZXh0Q29udGVudCA9IGl0ZW0ubmFtZTtcbiAgICAgICAgICAoY2FydEl0ZW0ucXVlcnlTZWxlY3RvcignLmNhcnRfX2lucHV0JykpIS50ZXh0Q29udGVudCA9IGl0ZW0uaW5DYXJ0LnRvU3RyaW5nKCk7XG4gICAgICAgICAgY29uc3QgaXRlbXNQcmljZSA9ICtpdGVtLnByaWNlICogaXRlbS5pbkNhcnQ7XG4gICAgICAgICAgdG90YWxTdW0gKz0gaXRlbXNQcmljZTtcbiAgICAgICAgICAoY2FydEl0ZW0ucXVlcnlTZWxlY3RvcignLmNhcnQtaXRlbV9fcHJpY2UnKSkhLnRleHRDb250ZW50ID0gYCR7aXRlbXNQcmljZX1gO1xuICAgICAgICAgIChjYXJ0SXRlbS5xdWVyeVNlbGVjdG9yKCcuY2FydF9fYWRkJykpIS5zZXRBdHRyaWJ1dGUoJ2RhdGEtYXJ0aWN1bCcsIGAke2l0ZW0uaWR9YCk7XG4gICAgICAgICAgICBpZihpdGVtLmNvdW50ID09PSAwKSB7XG4gICAgICAgICAgICAgIChjYXJ0SXRlbS5xdWVyeVNlbGVjdG9yKCcuY2FydF9fYWRkJykgYXMgSFRNTEVsZW1lbnQpIS5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICAgICAgICAgICAgICAoY2FydEl0ZW0ucXVlcnlTZWxlY3RvcignLmNhcnRfX2FkZCcpIGFzIEhUTUxFbGVtZW50KSEuc3R5bGUub3BhY2l0eSA9ICcwLjUnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIChjYXJ0SXRlbS5xdWVyeVNlbGVjdG9yKCcuY2FydF9fcmVtb3ZlJykpIS5zZXRBdHRyaWJ1dGUoJ2RhdGEtYXJ0aWN1bCcsIGAke2l0ZW0uaWR9YCk7XG5cbiAgICAgICAgICAgIGlmKGl0ZW0uaW5DYXJ0ID09PSAwKSB7XG4gICAgICAgICAgICAgIChjYXJ0SXRlbS5xdWVyeVNlbGVjdG9yKCcuY2FydF9fcmVtb3ZlJykgYXMgSFRNTEVsZW1lbnQpIS5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICAgICAgICAgICAgICAoY2FydEl0ZW0ucXVlcnlTZWxlY3RvcignLmNhcnRfX3JlbW92ZScpIGFzIEhUTUxFbGVtZW50KSEuc3R5bGUub3BhY2l0eSA9ICcwLjUnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0X190b3RhbCcpIS50ZXh0Q29udGVudCA9IGAke3RvdGFsU3VtfWBcbiAgICAgICAgXG4gICAgICAgICAgZnJhZ21lbnQuYXBwZW5kKGNhcnRJdGVtKTtcbiAgICAgICAgfSkgIFxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnRvdGFsSXRlbXMpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FydF9fcHJvZHVjdHMnKSEudGV4dENvbnRlbnQgPSBgJHt0aGlzLnRvdGFsSXRlbXN9YFxuICBcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcnQtcG9wdXBfX2NvbnRhaW5lcicpIS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcnQtcG9wdXBfX2NvbnRhaW5lcicpIS5hcHBlbmRDaGlsZChmcmFnbWVudCk7XG4gICAgICB9XG4gICAgICBjYXJ0T3BlbigpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcnQtcG9wdXAnKSEuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5JykhLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgfVxuICAgICAgY2FydENsb3NlKCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FydC1wb3B1cCcpIS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXknKSEuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICB9XG4gICAgfVxuICBcblxuXG5cblxuXG4iLCJpbXBvcnQge0RlZmF1bHRGaWx0ZXJzLCAgV2luZURldGFpbHMgfSBmcm9tIFwiLi4vLi4vdHlwZXMvaW50ZXJmYWNlc1wiO1xuaW1wb3J0IHsgTG9jYWxTdG9yYWdlLCBsb2NhbFN0b3JhZ2VLZXlzIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2xvY2Fsc3RvcmFnZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWx0ZXJTZXR0aW5ncyB7XG4gIGZpbHRlcmVkOiBXaW5lRGV0YWlsc1tdO1xuICBmaWx0ZXJBcnI6IFdpbmVEZXRhaWxzW107XG4gIGZpbHRlcnNPYmogOiBEZWZhdWx0RmlsdGVycztcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5maWx0ZXJlZCA9IFtdO1xuICAgIHRoaXMuZmlsdGVyQXJyID0gW107XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmaWx0ZXInKSkge1xuICAgICAgdGhpcy5maWx0ZXJzT2JqID0gTG9jYWxTdG9yYWdlLmdldExvY2FsU3RvcmFnZShsb2NhbFN0b3JhZ2VLZXlzLmZpbHRlcikgfHwgJyc7XG4gICAgfTtcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ZpbHRlckFycicpKSB7XG4gICAgICB0aGlzLmZpbHRlckFyciA9IExvY2FsU3RvcmFnZS5nZXRMb2NhbFN0b3JhZ2UobG9jYWxTdG9yYWdlS2V5cy5maWx0ZXJBcnIpIHx8ICcnO1xuICAgIH07XG4gICAgdGhpcy5maWx0ZXJzT2JqID0ge1xuICAgICAgY29sb3I6IFtdLFxuICAgICAgY291bnRyeTogW10sXG4gICAgICB5ZWFyOiBbXSxcbiAgICAgIHByaWNlOiBbXSxcbiAgICB9XG4gIH1cbiAgXG4gIGZpbHRlckJ5Q291bnRyeShkYXRhOiBXaW5lRGV0YWlsc1tdKSB7XG4gIHRoaXMuZmlsdGVyZWQgPSBbXTtcbiAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmlsdGVyQXJyJykpIHtcbiAgICAgIHRoaXMuZmlsdGVyQXJyID0gTG9jYWxTdG9yYWdlLmdldExvY2FsU3RvcmFnZShsb2NhbFN0b3JhZ2VLZXlzLmZpbHRlckFycikgfHwgJyc7XG4gICAgfTtcbiAgY29uc3QgZmlsdGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmaWx0ZXJzJyk7XG4gIHRoaXMuZmlsdGVyc09iai5jb3VudHJ5ID0gWy4uLmZpbHRlcnMhLnF1ZXJ5U2VsZWN0b3JBbGwoJyNjb3VudHJ5IGlucHV0OmNoZWNrZWQnKV0ubWFwKGl0ZW0gPT4gKGl0ZW0gYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUpO1xuICBjb25zb2xlLmxvZyh0aGlzLmZpbHRlcnNPYmouY291bnRyeSk7XG4gIGRhdGEuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgaWYodGhpcy5maWx0ZXJzT2JqLmNvdW50cnkuaW5jbHVkZXMoaXRlbS5jb3VudHJ5KSl7XG4gICAgICB0aGlzLmZpbHRlcmVkLnB1c2goaXRlbSlcbiAgICAgfVxuICB9KVxuICBMb2NhbFN0b3JhZ2Uuc2V0TG9jYWxTdG9yYWdlKGxvY2FsU3RvcmFnZUtleXMuZmlsdGVyLCB0aGlzLmZpbHRlcnNPYmopXG4gIExvY2FsU3RvcmFnZS5zZXRMb2NhbFN0b3JhZ2UobG9jYWxTdG9yYWdlS2V5cy5maWx0ZXJBcnIsIHRoaXMuZmlsdGVyZWQpXG59XG5maWx0ZXJCeUNvbG9yKGRhdGE6IFdpbmVEZXRhaWxzW10pIHtcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmaWx0ZXJBcnInKSkge1xuICAgIHRoaXMuZmlsdGVyQXJyID0gTG9jYWxTdG9yYWdlLmdldExvY2FsU3RvcmFnZShsb2NhbFN0b3JhZ2VLZXlzLmZpbHRlckFycikgfHwgJyc7XG4gIH07XG4gIHRoaXMuZmlsdGVyZWQgPSBbXTtcbiAgY29uc3QgZmlsdGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmaWx0ZXJzJyk7XG4gIHRoaXMuZmlsdGVyc09iai5jb2xvciA9IFsuLi5maWx0ZXJzIS5xdWVyeVNlbGVjdG9yQWxsKCcjY29sb3IgaW5wdXQ6Y2hlY2tlZCcpXS5tYXAoaXRlbSA9PiAoaXRlbSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSk7XG4gIGNvbnNvbGUubG9nKHRoaXMuZmlsdGVyc09iai5jb2xvcilcbiAgZGF0YS5mb3JFYWNoKGl0ZW0gPT4ge1xuICBpZih0aGlzLmZpbHRlcnNPYmouY29sb3IuaW5jbHVkZXMoaXRlbS5jb2xvcikpe1xuICAgIHRoaXMuZmlsdGVyZWQucHVzaChpdGVtKVxuICB9XG59KVxuTG9jYWxTdG9yYWdlLnNldExvY2FsU3RvcmFnZShsb2NhbFN0b3JhZ2VLZXlzLmZpbHRlciwgdGhpcy5maWx0ZXJzT2JqKVxuTG9jYWxTdG9yYWdlLnNldExvY2FsU3RvcmFnZShsb2NhbFN0b3JhZ2VLZXlzLmZpbHRlckFyciwgdGhpcy5maWx0ZXJlZClcbn1cblxucmVzZXRGaWx0ZXJzKCkge1xudGhpcy5maWx0ZXJBcnIgPSBbXTtcbnRoaXMuZmlsdGVyc09iai5jb2xvciA9IFtdO1xudGhpcy5maWx0ZXJzT2JqLmNvdW50cnkgPSBbXTtcbmNvbnN0IGZpbHRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmlsdGVycycpO1xuWy4uLmZpbHRlcnMhLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0OmNoZWNrZWQnKV0ubWFwKGl0ZW0gPT4gKGl0ZW0gYXMgSFRNTElucHV0RWxlbWVudCkuY2hlY2tlZCA9IGZhbHNlKTtcbkxvY2FsU3RvcmFnZS5zZXRMb2NhbFN0b3JhZ2UobG9jYWxTdG9yYWdlS2V5cy5maWx0ZXJBcnIsIHRoaXMuZmlsdGVyQXJyKTtcbkxvY2FsU3RvcmFnZS5zZXRMb2NhbFN0b3JhZ2UobG9jYWxTdG9yYWdlS2V5cy5maWx0ZXIsIHRoaXMuZmlsdGVyc09iaik7XG5cbn1cblxufVxuIiwiaW1wb3J0ICcuL3dpbmVjYXJkcy5jc3MnO1xuaW1wb3J0IHsgV2luZSwgV2luZURldGFpbHMgfSBmcm9tICcuLi8uLi90eXBlcy9pbnRlcmZhY2VzJ1xuaW1wb3J0IHsgTG9jYWxTdG9yYWdlLCBsb2NhbFN0b3JhZ2VLZXlzIH0gZnJvbSAnLi4vLi4vdXRpbHMvbG9jYWxzdG9yYWdlJztcblxuY2xhc3MgV2luZUNhcmRzIHtcbiAgcmVuZGVyKGRhdGE6IFdpbmVEZXRhaWxzW10pIHtcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2dvb2RzJykpIHtcbiAgICAgIGRhdGEgPSBMb2NhbFN0b3JhZ2UuZ2V0TG9jYWxTdG9yYWdlKGxvY2FsU3RvcmFnZUtleXMuZ29vZHMpIHx8IGRhdGE7XG4gICAgfTtcbiAgICBjb25zdCB3aW5lcyA9IGRhdGE7XG4gICAgY29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgY29uc3Qgd2luZUNhcmRUZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dpbmVjYXJkc0l0ZW1UZW1wJykgYXMgSFRNTFRlbXBsYXRlRWxlbWVudDtcbiAgICB3aW5lcy5mb3JFYWNoKChpdGVtIDogV2luZURldGFpbHMsIGlkeCA6IG51bWJlcikgPT4ge1xuICAgICAgY29uc3Qgd2luZUNhcmQgPSB3aW5lQ2FyZFRlbXAuY29udGVudC5jbG9uZU5vZGUodHJ1ZSkgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICAgICh3aW5lQ2FyZC5xdWVyeVNlbGVjdG9yKCcud2luZWNhcmRzX19mYWNlLXBob3RvJykgYXMgSFRNTEVsZW1lbnQpIS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7aXRlbS5pbWFnZX0pYDtcbiAgICAgICh3aW5lQ2FyZC5xdWVyeVNlbGVjdG9yKCcud2luZWNhcmRzX19mYWNlLW5hbWUnKSkhLnRleHRDb250ZW50ID0gaXRlbS5uYW1lO1xuICAgICAgKHdpbmVDYXJkLnF1ZXJ5U2VsZWN0b3IoJy53aW5lY2FyZHNfX2ZhY2UtY291bnQnKSkhLnRleHRDb250ZW50ID0gYNCSINC90LDQu9C40YfQuNC4IDogJHtpdGVtLmNvdW50fWA7XG4gICAgICAod2luZUNhcmQucXVlcnlTZWxlY3RvcignLndpbmVjYXJkc19fZmFjZS1wcmljZScpKSEudGV4dENvbnRlbnQgPSBgJHtpdGVtLnByaWNlfSBCWU5gO1xuICAgICAgKHdpbmVDYXJkLnF1ZXJ5U2VsZWN0b3IoJy53aW5lY2FyZHNfX2JhY2stbmFtZScpKSEudGV4dENvbnRlbnQgPSBpdGVtLm5hbWU7XG4gICAgICAod2luZUNhcmQucXVlcnlTZWxlY3RvcignLndpbmVjYXJkc19fYmFjay1tYWRlQnknKSkhLnRleHRDb250ZW50ID0gYNCf0YDQvtC40LfQstC+0LTQuNGC0LXQu9GMIDogJHtpdGVtLm1hZGVCeX1gO1xuICAgICAgKHdpbmVDYXJkLnF1ZXJ5U2VsZWN0b3IoJy53aW5lY2FyZHNfX2JhY2stY291bnRyeScpKSEudGV4dENvbnRlbnQgPSBg0KHRgtGA0LDQvdCwIDogJHtpdGVtLmNvdW50cnl9YDtcbiAgICAgICh3aW5lQ2FyZC5xdWVyeVNlbGVjdG9yKCcud2luZWNhcmRzX19iYWNrLXllYXInKSkhLnRleHRDb250ZW50ID0gYNCT0L7QtCA6ICR7aXRlbS55ZWFyfWA7XG4gICAgICAod2luZUNhcmQucXVlcnlTZWxlY3RvcignLndpbmVjYXJkc19fYmFjay1jb2xvcicpKSEudGV4dENvbnRlbnQgPSBg0KbQstC10YIgOiAke2l0ZW0uY29sb3J9YDtcbiAgICAgICh3aW5lQ2FyZC5xdWVyeVNlbGVjdG9yKCcud2luZWNhcmRzX19iYWNrLWFsY29ob2wnKSkhLnRleHRDb250ZW50ID0gYNCa0YDQtdC/0L7RgdGC0YwgOiAke2l0ZW0uYWxjb2hvbH0lYDtcbiAgICAgICh3aW5lQ2FyZC5xdWVyeVNlbGVjdG9yKCcud2luZWNhcmRzX19iYWNrLXZvbCcpKSEudGV4dENvbnRlbnQgPSBg0J7QsdGK0LXQvCA6ICR7aXRlbS52b2x90LtgO1xuXG5cbiAgICAgIGlmICghaXRlbS5pblN0b2NrIHx8IGl0ZW0uY291bnQgPT09IDApIHtcbiAgICAgICAgKHdpbmVDYXJkLnF1ZXJ5U2VsZWN0b3IoJy53aW5lY2FyZHNfX2l0ZW0nKSBhcyBIVE1MRWxlbWVudCkhLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG4gICAgICAgICh3aW5lQ2FyZC5xdWVyeVNlbGVjdG9yKCcud2luZWNhcmRzX19pdGVtJykgYXMgSFRNTEVsZW1lbnQpIS5zdHlsZS5vcGFjaXR5ID0gJzAuNSc7XG4gICAgICAgICh3aW5lQ2FyZC5xdWVyeVNlbGVjdG9yKCcud2luZWNhcmRzX19mYWNlLWNvdW50JykpIS50ZXh0Q29udGVudCA9ICfQndC10YIg0LIg0L3QsNC70LjRh9C40LgnO1xuICAgICAgICAod2luZUNhcmQucXVlcnlTZWxlY3RvcignLndpbmVjYXJkc19fZmFjZS1wcmljZScpKSEudGV4dENvbnRlbnQgPSAnJztcbiAgICAgIH1cbiAgICAgICh3aW5lQ2FyZC5xdWVyeVNlbGVjdG9yKCcuY2FydF9fYWRkJykpIS5zZXRBdHRyaWJ1dGUoJ2RhdGEtYXJ0aWN1bCcsIGAke2lkeH1gKVxuICAgICAgZnJhZ21lbnQuYXBwZW5kKHdpbmVDYXJkKTtcbiAgICB9KTtcblxuICAgIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2luZWNhcmRzLWNvbnRhaW5lcicpKSEuaW5uZXJIVE1MID0gJyc7XG4gICAgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5lY2FyZHMtY29udGFpbmVyJykpIS5hcHBlbmRDaGlsZChmcmFnbWVudCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgV2luZUNhcmRzOyIsImV4cG9ydCAgY29uc3QgZ29vZHMgPSBbXG4gIHtcbiAgICBpZDogMCxcbiAgICBuYW1lOiBcIk5hdGlvbmFsIFZpbnRhZ2UgUG9ydFwiLFxuICAgIG1hZGVCeTogXCJRdWludGEgZG8gTm92YWxcIixcbiAgICBjb3VudHJ5OiBcItCf0L7RgNGC0YPQs9Cw0LvQuNGPXCIsXG4gICAgeWVhcjogXCIyMDExXCIsXG4gICAgYWxjb2hvbDogXCIxOVwiLFxuICAgIHZvbDogXCIwLjc1XCIsXG4gICAgcHJpY2U6IFwiMTM4MzJcIixcbiAgICBjb2xvcjogXCJyZWRcIixcbiAgICBpbWFnZTogJy4vYXNzZXRzL2ltZy9wb3J0dmV5bi1xdWludGEtZG8tbm92YWwtbmFjaW9uYWwtdmludGFnZS1wb3J0LTIwMTEucG5nJyxcbiAgICBjb3VudDogNSxcbiAgICBpblN0b2NrOiB0cnVlLFxuICAgIGluQ2FydDogMCxcbiAgfSxcbiAge1xuICAgIGlkOiAxLFxuICAgIG5hbWU6IFwiQmxhdWZyYW5raXNjaCBDbGFzc2ljXCIsXG4gICAgbWFkZUJ5OiBcIkhhbnMgSWdsZXJcIixcbiAgICBjb3VudHJ5OiBcItCQ0LLRgdGC0YDQuNGPXCIsXG4gICAgeWVhcjogXCIyMDE5XCIsXG4gICAgYWxjb2hvbDogXCIxM1wiLFxuICAgIHZvbDogXCIwLjc1XCIsXG4gICAgcHJpY2U6ICcxNzQnLFxuICAgIGNvbG9yOiAncmVkJyxcbiAgICBpbWFnZTogJy4vYXNzZXRzL2ltZy9ibGF1ZnJhbmtpc2NoLWNsYXNzaWMucG5nJyxcbiAgICBjb3VudDogNSxcbiAgICBpblN0b2NrOiB0cnVlLFxuICAgIGluQ2FydDogMCxcbiAgfSxcbiAge1xuICAgIGlkOiAyLFxuICAgIG5hbWU6IFwiUmhlaW5nYXUgUmllc2xpbmcgVHJvY2tlblwiLFxuICAgIG1hZGVCeTogXCJSb2JlcnQgV2VpbFwiLFxuICAgIGNvdW50cnk6IFwi0JPQtdGA0LzQsNC90LjRj1wiLFxuICAgIHllYXI6IFwiMjAxOVwiLFxuICAgIGFsY29ob2w6IFwiMTJcIixcbiAgICB2b2w6IFwiMC43NVwiLFxuICAgIHByaWNlOiAnMjA0JyxcbiAgICBjb2xvcjogJ3doaXRlJyxcbiAgICBpbWFnZTogJy4vYXNzZXRzL2ltZy9yaGVpbmdhdS1yaWVzbGluZy10cm9ja2VuLnBuZycsXG4gICAgY291bnQ6IDUsXG4gICAgaW5TdG9jazogdHJ1ZSxcbiAgICBpbkNhcnQ6IDAsXG4gIH0sXG4gIHtcbiAgICBpZDogMyxcbiAgICBuYW1lOiBcIk1hbGxlb3VzIGRlIFNhbmNob21hcnRpblwiLFxuICAgIG1hZGVCeTogXCJFbWlsaW8gTW9yb1wiLFxuICAgIGNvdW50cnk6IFwi0JjRgdC/0LDQvdC40Y9cIixcbiAgICB5ZWFyOiBcIjIwMThcIixcbiAgICBhbGNvaG9sOiBcIjE0XCIsXG4gICAgdm9sOiBcIjAuNzVcIixcbiAgICBwcmljZTogJzEzMDcnLFxuICAgIGNvbG9yOiAncmVkJyxcbiAgICBpbWFnZTogJy4vYXNzZXRzL2ltZy9tYWxsZW91cy1kZS1zYW5jaG9tYXJ0aW4ucG5nJyxcbiAgICBjb3VudDogNSxcbiAgICBpblN0b2NrOiB0cnVlLFxuICAgIGluQ2FydDogMCxcbiAgfSxcbiAge1xuICAgIGlkOiA0LFxuICAgIG5hbWU6IFwiR2F2aSBkZWkgR2F2aSAoRXRpY2hldHRhIE5lcmEpXCIsXG4gICAgbWFkZUJ5OiBcImxhIFNjb2xjYVwiLFxuICAgIGNvdW50cnk6IFwi0JjRgtCw0LvQuNGPXCIsXG4gICAgeWVhcjogXCIyMDIwXCIsXG4gICAgYWxjb2hvbDogXCIxMlwiLFxuICAgIHZvbDogXCIwLjc1XCIsXG4gICAgcHJpY2U6ICczMjYnLFxuICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgIGltYWdlOiAnLi9hc3NldHMvaW1nL2dhdmktZGVpLWdhdmkucG5nJyxcbiAgICBjb3VudDogNSxcbiAgICBpblN0b2NrOiB0cnVlLFxuICAgIGluQ2FydDogMCxcbiAgfSxcbiAge1xuICAgIGlkOiA1LFxuICAgIG5hbWU6IFwiQ2hhcmx5IER1ZGVzXCIsXG4gICAgbWFkZUJ5OiBcIlR3byBIYW5kc1wiLFxuICAgIGNvdW50cnk6IFwi0JDQstGB0YLRgNCw0LvQuNGPXCIsXG4gICAgeWVhcjogXCIyMDIwXCIsXG4gICAgYWxjb2hvbDogXCIxNFwiLFxuICAgIHZvbDogXCIxLjVcIixcbiAgICBwcmljZTogJzQzNScsXG4gICAgY29sb3I6ICdyZWQnLFxuICAgIGltYWdlOiBcIi4vYXNzZXRzL2ltZy9jaGFybGV5LWR1ZGVzLnBuZ1wiLFxuICAgIGNvdW50OiA1LFxuICAgIGluU3RvY2s6IHRydWUsXG4gICAgaW5DYXJ0OiAwLFxuICB9LFxuICB7XG4gICAgaWQ6IDYsXG4gICAgbmFtZTogXCJSaWNoZWJvdXJnIEdyYW5nIEdydVwiLFxuICAgIG1hZGVCeTogXCJEb21haW5lIEplYW4gR3Jpdm90XCIsXG4gICAgY291bnRyeTogXCLQpNGA0LDQvdGG0LjRj1wiLFxuICAgIHllYXI6IFwiMjAxNVwiLFxuICAgIGFsY29ob2w6IFwiMTNcIixcbiAgICB2b2w6IFwiMC43NVwiLFxuICAgIHByaWNlOiAnMTY3NzgnLFxuICAgIGNvbG9yOiAncmVkJyxcbiAgICBpbWFnZTogJy4vYXNzZXRzL2ltZy9yaWNoZWJvdXJnLWdyYW5kLWdydS5wbmcnLFxuICAgIGNvdW50OiA1LFxuICAgIGluU3RvY2s6IHRydWUsXG4gICAgaW5DYXJ0OiAwLFxuICB9LFxuICB7XG4gICAgaWQ6IDcsXG4gICAgbmFtZTogXCJDaGFibGlzIFZpZWlsbGVzIFZpZ2hlcyAxOTQ2XCIsXG4gICAgbWFkZUJ5OiBcIkplYW4tTWFyYyBCcm9jYXJkIChEb21haW5lIFNhaW50ZS1DbGFpcmUpXCIsXG4gICAgY291bnRyeTogXCLQpNGA0LDQvdGG0LjRj1wiLFxuICAgIHllYXI6IFwiMjAxOFwiLFxuICAgIGFsY29ob2w6IFwiMTNcIixcbiAgICB2b2w6IFwiMC43NVwiLFxuICAgIHByaWNlOiAnMzEzJyxcbiAgICBjb2xvcjogJ3doaXRlJyxcbiAgICBpbWFnZTogJy4vYXNzZXRzL2ltZy9jaGFibGlzLXZpZWlsbGVzLXZpZ2hlcy0xOTQ2LnBuZycsXG4gICAgY291bnQ6IDUsXG4gICAgaW5TdG9jazogdHJ1ZSxcbiAgICBpbkNhcnQ6IDAsXG4gIH0sXG4gIHtcbiAgICBpZDogOCxcbiAgICBuYW1lOiBcIjUweDUwXCIsXG4gICAgbWFkZUJ5OiBcIkNhcGFubmVsbGVcIixcbiAgICBjb3VudHJ5OiBcItCY0YLQsNC70LjRj1wiLFxuICAgIHllYXI6IFwiMjAxNVwiLFxuICAgIGFsY29ob2w6IFwiMTNcIixcbiAgICB2b2w6IFwiMC43NVwiLFxuICAgIHByaWNlOiAnMjUwNScsXG4gICAgY29sb3I6ICdyZWQnLFxuICAgIGltYWdlOiAnLi9hc3NldHMvaW1nLzUweDUwLnBuZycsXG4gICAgY291bnQ6IDUsXG4gICAgaW5TdG9jazogdHJ1ZSxcbiAgICBpbkNhcnQ6IDAsXG4gIH0sXG4gIHtcbiAgICBpZDogOSxcbiAgICBuYW1lOiBcIlBlbmZvbGRzIEdyYW5nZVwiLFxuICAgIG1hZGVCeTogXCJQZW5mb2xkc1wiLFxuICAgIGNvdW50cnk6IFwi0JDQstGB0YLRgNCw0LvQuNGPXCIsXG4gICAgeWVhcjogXCIyMDE2XCIsXG4gICAgYWxjb2hvbDogXCIxNFwiLFxuICAgIHZvbDogXCIwLjc1XCIsXG4gICAgcHJpY2U6ICc4NzEnLFxuICAgIGNvbG9yOiAncmVkJyxcbiAgICBpbWFnZTogJy4vYXNzZXRzL2ltZy9wZW5mb2xkcy1ncmFuZ2UucG5nJyxcbiAgICBjb3VudDogNSxcbiAgICBpblN0b2NrOiB0cnVlLFxuICAgIGluQ2FydDogMCxcbiAgfSxcbiAge1xuICAgIGlkOiAxMCxcbiAgICBuYW1lOiBcIlBlbmZvbGRzIEJpbiAzODkgQ2FiZXJuZXQgU2hpcmF6XCIsXG4gICAgbWFkZUJ5OiBcIlBlbmZvbGRzXCIsXG4gICAgY291bnRyeTogXCLQkNCy0YHRgtGA0LDQu9C40Y9cIixcbiAgICB5ZWFyOiBcIjIwMTlcIixcbiAgICBhbGNvaG9sOiBcIjE0XCIsXG4gICAgdm9sOiBcIjAuNzVcIixcbiAgICBwcmljZTogJzg3MScsXG4gICAgY29sb3I6ICdyZWQnLFxuICAgIGltYWdlOiAnLi9hc3NldHMvaW1nL3BlbmZvbGRzLWJpbi0zODktY2FiZXJuZXQtc2hpcmF6LnBuZycsXG4gICAgY291bnQ6IDUsXG4gICAgaW5TdG9jazogdHJ1ZSxcbiAgICBpbkNhcnQ6IDAsXG4gIH0sXG4gIHtcbiAgICBpZDogMTEsXG4gICAgbmFtZTogXCJLdXJuaVwiLFxuICAgIG1hZGVCeTogXCJPYXNpIGRlZ2xpIEFuZ2VsaVwiLFxuICAgIGNvdW50cnk6IFwi0JjRgtCw0LvQuNGPXCIsXG4gICAgeWVhcjogXCIyMDE4XCIsXG4gICAgYWxjb2hvbDogXCIxNFwiLFxuICAgIHZvbDogXCIxLjVcIixcbiAgICBwcmljZTogJzE3NDInLFxuICAgIGNvbG9yOiAncmVkJyxcbiAgICBpbWFnZTogJy4vYXNzZXRzL2ltZy9rdXJuaS5wbmcnLFxuICAgIGNvdW50OiA1LFxuICAgIGluU3RvY2s6IGZhbHNlLFxuICAgIGluQ2FydDogMCxcbiAgfSxcbl0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJ0UG9wdXAge1xuICBzdGF0aWMgY2FydFBvcHVwID0gYFxuICA8c3BhbiBjbGFzcz1cImNsb3NlLXBvcHVwXCI+WDwvc3Bhbj5cbiAgPGRpdiBjbGFzcz1cImNhcnQtcG9wdXBfX2NvbnRhaW5lclwiPjwvZGl2PlxuICA8cCBjbGFzcz1cImNhcnRfX3RvdGFsXCI+PC9wPlxuICBgO1xufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcnQge1xuICBzdGF0aWMgY2FydCA9IGBcbiAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImNhcnRfX25vdGlmaWNhdGlvblwiPlxuICAgIDxzcGFuIGNsYXNzPVwiY2FydF9fcHJvZHVjdHNcIj4wPC9zcGFuPlxuICA8L2E+XG4gIGA7XG59IiwiY2xhc3MgRmlsdGVycyB7XG4gIHN0YXRpYyBmaWx0ZXJzID0gYFxuICA8Zm9ybSBhY3Rpb249XCIjXCIgY2xhc3M9XCJmaWx0ZXJzLWZvcm1cIj5cbiAgICA8ZGl2IGNsYXNzPVwic29ydC1jb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJzb3J0XCI+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJzb3J0LWJ0blwiPtGB0L7RgNGC0LjRgNC+0LLQsNGC0Ywg0L/QviDRhtC10L3QtTxidG4+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZmlsdGVycy1jb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb3VudHJ5LWZpbHRlclwiPlxuICAgICAgICA8aDQgY2xhc3M9XCJjb3VudHJ5XCI+0KHRgtGA0LDQvdCwPC9oND5cbiAgICAgICAgPGRpdiBpZD1cImNvdW50cnlcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hlY2tib3hcIj48bGFiZWw+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJjb3VudHJ5XCIgdmFsdWU9XCLQkNCy0YHRgtGA0LDQu9C40Y9cIj7QkNCy0YHRgtGA0LDQu9C40Y88L2xhYmVsPjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGVja2JveFwiPjxsYWJlbD48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImNvdW50cnlcIiB2YWx1ZT1cItCQ0LLRgdGC0YDQuNGPXCI+0JDQstGB0YLRgNC40Y88L2xhYmVsPjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGVja2JveFwiPjxsYWJlbD48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImNvdW50cnlcIiB2YWx1ZT1cItCT0LXRgNC80LDQvdC40Y9cIj7Qk9C10YDQvNCw0L3QuNGPPC9sYWJlbD48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hlY2tib3hcIj48bGFiZWw+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJjb3VudHJ5XCIgdmFsdWU9XCLQmNGB0L/QsNC90LjRj1wiPtCY0YHQv9Cw0L3QuNGPPC9sYWJlbD48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hlY2tib3hcIj48bGFiZWw+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJjb3VudHJ5XCIgdmFsdWU9XCLQmNGC0LDQu9C40Y9cIj7QmNGC0LDQu9C40Y88L2xhYmVsPjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGVja2JveFwiPjxsYWJlbD48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImNvdW50cnlcIiB2YWx1ZT1cItCf0L7RgNGC0YPQs9Cw0LvQuNGPXCI+0J/QvtGA0YLRg9Cz0LDQu9C40Y88L2xhYmVsPjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGVja2JveFwiPjxsYWJlbD48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImNvdW50cnlcIiB2YWx1ZT1cItCk0YDQsNC90YbQuNGPXCI+0KTRgNCw0L3RhtC40Y88L2xhYmVsPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNvbG9yLWZpbHRlclwiPlxuICAgICAgICA8aDQgY2xhc3M9XCJjb2xvclwiPtCm0LLQtdGCPC9oND5cbiAgICAgICAgPGRpdiBpZD1cImNvbG9yXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNoZWNrYm94XCI+PGxhYmVsPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiY29sb3JcIiB2YWx1ZT1cIndoaXRlXCI+0JHQtdC70L7QtTwvbGFiZWw+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNoZWNrYm94XCI+PGxhYmVsPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiY29sb3JcIiB2YWx1ZT1cInJlZFwiPtCa0YDQsNGB0L3QvtC1PC9sYWJlbD48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJyZXNldC1maWx0ZXJzXCI+0KHQsdGA0L7RgdGC0Ywg0YTQuNC70YzRgtGA0Ys8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgPC9mb3JtPlxuYDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyczsiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uLy4uL3V0aWxzL2NvbXBvbmVudCc7XG5pbXBvcnQgU2VhcmNoSW5wdXQgZnJvbSAnLi4vc2VhcmNoL3NlYXJjaCc7XG5pbXBvcnQgQ2FydCBmcm9tICcuLi9jYXJ0L2NhcnQnXG5pbXBvcnQgQ2FydFBvcHVwIGZyb20gJy4uL2NhcnQtcG9wdXAvY2FydC1wb3B1cCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHByaXZhdGUgY2xhc3NOYW1lOiBzdHJpbmc7XG4gIHByaXZhdGUgc2VhcmNoOiBDb21wb25lbnQ7XG4gIHByaXZhdGUgY2FydDogQ29tcG9uZW50O1xuICBwcml2YXRlIGNhcnRQb3B1cDogQ29tcG9uZW50O1xuICBjb25zdHJ1Y3Rvcih0YWdOYW1lOiBzdHJpbmcsIGNsYXNzTmFtZTogc3RyaW5nKSB7XG4gICAgc3VwZXIodGFnTmFtZSwgY2xhc3NOYW1lKTtcbiAgICB0aGlzLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgICB0aGlzLnNlYXJjaCA9IG5ldyBDb21wb25lbnQoJ2RpdicsJ2hlYWRlcl9fc2VhcmNoIHNlYXJjaC1jb250YWluZXInLCdzZWFyY2gtaW5wdXQnKTtcbiAgICB0aGlzLmNhcnQgPSBuZXcgQ29tcG9uZW50KCdkaXYnLCAnaGVhZGVyX19jYXJ0IGNhcnQnLCAnY2FydCcpO1xuICAgIHRoaXMuY2FydFBvcHVwID0gbmV3IENvbXBvbmVudCgnZGl2JywgJ2NhcnQtcG9wdXAnLCAnY2FydC1wb3B1cCcpO1xuICB9XG4gICAgcmVuZGVyU2VhcmNoKCkge1xuICAgICAgY29uc3Qgc2VhcmNoRGl2OiBIVE1MRWxlbWVudCA9IHRoaXMuc2VhcmNoLnJlbmRlcigpO1xuICAgICAgc2VhcmNoRGl2LmlubmVySFRNTCA9IFNlYXJjaElucHV0LnNlYXJjaEZvcm07XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmQoc2VhcmNoRGl2KTtcbiAgICB9XG5cbiAgICByZW5kZXJDYXJ0KCkge1xuICAgICAgY29uc3QgY2FydERpdjogSFRNTEVsZW1lbnQgPSB0aGlzLmNhcnQucmVuZGVyKCk7XG4gICAgICBjYXJ0RGl2LmlubmVySFRNTCA9IENhcnQuY2FydDtcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZChjYXJ0RGl2KTtcbiAgICB9XG5cbiAgICByZW5kZXJDYXJ0UG9wdXAoKSB7XG4gICAgICBjb25zdCBjYXJ0UG9wdXBEaXY6IEhUTUxFbGVtZW50ID0gdGhpcy5jYXJ0UG9wdXAucmVuZGVyKCk7XG4gICAgICBjYXJ0UG9wdXBEaXYuaW5uZXJIVE1MID0gQ2FydFBvcHVwLmNhcnRQb3B1cDtcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZChjYXJ0UG9wdXBEaXYpO1xuICAgIH1cblxuICByZW5kZXIoKSB7XG4gICAgdGhpcy5yZW5kZXJTZWFyY2goKTtcbiAgICAgdGhpcy5yZW5kZXJDYXJ0KCk7XG4gICAgIHRoaXMucmVuZGVyQ2FydFBvcHVwKCk7XG4gICAgcmV0dXJuIHRoaXMuY29udGFpbmVyO1xuICB9XG59IiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi8uLi91dGlscy9jb21wb25lbnQnO1xuaW1wb3J0IFdpbmVjYXJkcyBmcm9tICcuLi93aW5lY2FyZHMvd2luZWNhcmRzJztcbmltcG9ydCBGaWx0ZXJzIGZyb20gJy4uL2ZpbHRlcnMvZmlsdGVycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW4gZXh0ZW5kcyBDb21wb25lbnQge1xuICBwcml2YXRlIGNsYXNzTmFtZTogc3RyaW5nO1xuICBwcml2YXRlIHdpbmVjYXJkczogQ29tcG9uZW50O1xuICBwcml2YXRlIGZpbHRlcnM6IENvbXBvbmVudDtcbiAgY29uc3RydWN0b3IodGFnTmFtZTogc3RyaW5nLCBjbGFzc05hbWU6IHN0cmluZykge1xuICAgIHN1cGVyKHRhZ05hbWUsIGNsYXNzTmFtZSk7XG4gICAgdGhpcy5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gICAgdGhpcy53aW5lY2FyZHMgPSBuZXcgQ29tcG9uZW50KCdzZWN0aW9uJywnd2luZWNhcmRzJywnd2luZWNhcmRzJyk7XG4gICAgdGhpcy5maWx0ZXJzID0gbmV3IENvbXBvbmVudCgnc2VjdGlvbicsJ2ZpbHRlcnMnLCdmaWx0ZXJzJyk7XG4gIH1cbiAgcmVuZGVyRmlsdGVycygpIHtcbiAgICBjb25zdCBmaWx0ZXJzU2VjdGlvbjogSFRNTEVsZW1lbnQgPSB0aGlzLmZpbHRlcnMucmVuZGVyKCk7XG4gICAgZmlsdGVyc1NlY3Rpb24uaW5uZXJIVE1MID0gRmlsdGVycy5maWx0ZXJzO1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZChmaWx0ZXJzU2VjdGlvbik7XG4gIH1cblxuICAgIHJlbmRlcldpbmVjYXJkcygpIHtcbiAgICAgIGNvbnN0IHdpbmVjYXJkc1NlY3Rpb246IEhUTUxFbGVtZW50ID0gdGhpcy53aW5lY2FyZHMucmVuZGVyKCk7XG4gICAgICB3aW5lY2FyZHNTZWN0aW9uLmlubmVySFRNTCA9IFdpbmVjYXJkcy53aW5lY2FyZHM7XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmQod2luZWNhcmRzU2VjdGlvbik7XG4gICAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICB0aGlzLnJlbmRlckZpbHRlcnMoKTtcbiAgICAgdGhpcy5yZW5kZXJXaW5lY2FyZHMoKTtcbiAgICByZXR1cm4gdGhpcy5jb250YWluZXI7XG4gIH1cbn0iLCJjbGFzcyBTZWFyY2hJbnB1dCB7XG4gIHN0YXRpYyBzZWFyY2hGb3JtID0gYFxuICAgICAgPGlucHV0XG4gICAgICAgIGNsYXNzPVwic2VhcmNoLWNvbnRhaW5lcl9faW5wdXRcIlxuICAgICAgICB0eXBlPVwic2VhcmNoXCJcbiAgICAgICAgYXV0b2NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCLQn9C+0LjRgdC6Li4uXCJcbiAgICAgICAgbmFtZT1cInNlYXJjaFwiXG4gICAgICAgIGF1dG9mb2N1c1xuICAgICAgLz5cbmA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaElucHV0OyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFdpbmVjYXJkcyB7XG4gIHN0YXRpYyB3aW5lY2FyZHMgPSBgXG4gIDxkaXYgY2xhc3M9XCJ3aW5lY2FyZHMtY29udGFpbmVyXCI+XG5cbiAgPC9kaXY+XG4gIGA7XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50IHtcbiAgcHJvdGVjdGVkIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XG5cbiAgY29uc3RydWN0b3IodGFnTmFtZTogc3RyaW5nLCBjbGFzc05hbWU6IHN0cmluZyA9ICcnLCBpZD86IHN0cmluZykge1xuICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcbiAgICB0aGlzLmNvbnRhaW5lci5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gICAgaWQgPyAodGhpcy5jb250YWluZXIuaWQgPSBpZCkgOiBudWxsO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRhaW5lcjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgV2luZURldGFpbHMgfSBmcm9tIFwiLi4vdHlwZXMvaW50ZXJmYWNlc1wiO1xuXG5jb25zdCBlbnVtIGxvY2FsU3RvcmFnZUtleXMge1xuICBmaWx0ZXIgPSAnZmlsdGVyJyxcbiAgY2FydCA9ICdjYXJ0JyxcbiAgZ29vZHMgID0gJ2dvb2RzJyxcbiAgdG90YWxJdGVtc0luQ2FydCA9ICd0b3RhbEl0ZW1zSW5DYXJ0JyxcbiAgZmlsdGVyQXJyID0gJ2ZpbHRlckFycicsXG59XG5cbmNsYXNzIExvY2FsU3RvcmFnZSB7XG4gIFxuICAgIHN0YXRpYyBzZXRMb2NhbFN0b3JhZ2UoXG4gICAgICBkYXRhS2V5OiBsb2NhbFN0b3JhZ2VLZXlzLFxuICAgICAgZGF0YTogb2JqZWN0IHwgW10gfCBzdHJpbmcgfCBudW1iZXJcbiAgICApOiB2b2lkIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGRhdGFLZXksIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICB9XG4gIFxuICAgIHN0YXRpYyBnZXRMb2NhbFN0b3JhZ2UoZGF0YTogbG9jYWxTdG9yYWdlS2V5cyk6IGFueSB7XG4gICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oZGF0YSkpIHtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoU3RyaW5nKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGRhdGEpKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG4gIH1cbiAgXG4gIGV4cG9ydCB7IExvY2FsU3RvcmFnZSwgbG9jYWxTdG9yYWdlS2V5cyB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vZ2xvYmFsLmNzcyc7XG4vLyBpbXBvcnQgV2luZUNhcmRzIGZyb20gJy4vY29tcG9uZW50cy93aW5lY2FyZHMvd2luZWNhcmRzJztcbi8vIGltcG9ydCAnLi9jb21wb25lbnRzL2NhcnQvY2FydCc7XG4gaW1wb3J0IHtnb29kc30gZnJvbSAnLi9jb25zdGF0cy9nb29kcyc7XG4vLyBjb25zdCB3aW5lY2FyZHMgPSBuZXcgV2luZUNhcmRzKCk7XG4vLyB3aW5lY2FyZHMucmVuZGVyKGdvb2RzKTtcbi8vIGltcG9ydCB7IENhcnRTZXR0aW5ncyB9IGZyb20gJy4vY29tcG9uZW50cy9jYXJ0L2NhcnQnO1xuLy8gaW1wb3J0IHsgTG9jYWxTdG9yYWdlLCBsb2NhbFN0b3JhZ2VLZXlzIH0gZnJvbSAnLi91dGlscy9sb2NhbHN0b3JhZ2UnO1xuLy8gY29uc3QgY2FydHNldHRpbmdzID0gbmV3IENhcnRTZXR0aW5ncygpO1xuLy8gY2FydHNldHRpbmdzLmFkZFRvQ2FydChnb29kcyk7XG5cbmltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL2FwcC9hcHAnO1xuaW1wb3J0ICcuL2dsb2JhbC5jc3MnO1xuXG5jb25zdCBhcHAgPSBuZXcgQXBwKCk7XG5hcHAuc3RhcnQoZ29vZHMpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==