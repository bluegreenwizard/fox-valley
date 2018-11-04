/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./node_modules/normalize.css/normalize.css":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./node_modules/normalize.css/normalize.css ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*! normalize.css v8.0.0 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml {\n  line-height: 1.15;\n  /* 1 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers.\n */\nbody {\n  margin: 0; }\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\n/* Grouping content\n   ========================================================================== */\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */ }\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Remove the gray background on active links in IE 10.\n */\na {\n  background-color: transparent; }\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  text-decoration: underline dotted;\n  /* 2 */ }\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder; }\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%; }\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsub {\n  bottom: -0.25em; }\n\nsup {\n  top: -0.5em; }\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove the border on images inside links in IE 10.\n */\nimg {\n  border-style: none; }\n\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  line-height: 1.15;\n  /* 1 */\n  margin: 0;\n  /* 2 */ }\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible; }\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none; }\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; }\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0; }\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText; }\n\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em; }\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */ }\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline; }\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\ntextarea {\n  overflow: auto; }\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */ }\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */ }\n\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\ndetails {\n  display: block; }\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item; }\n\n/* Misc\n   ========================================================================== */\n/**\n * Add the correct display in IE 10+.\n */\ntemplate {\n  display: none; }\n\n/**\n * Add the correct display in IE 10.\n */\n[hidden] {\n  display: none; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/style/style.sass":
/*!*************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./src/style/style.sass ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Aref+Ruqaa|Lora);", ""]);

// module
exports.push([module.i, "body {\n  background-color: #34252F;\n  font-size: 10px; }\n\n#content {\n  max-width: 100rem;\n  background-color: #BEC5AD; }\n\n.main-header {\n  background-color: #34252F;\n  padding: 0.5rem 2rem 5rem;\n  border-bottom: 0.5rem solid #34252F; }\n  .main-header__title {\n    font-size: 3.5rem;\n    font-family: 'Aref Ruqaa', serif;\n    margin: .5rem 0;\n    padding: 0; }\n  .main-header__title-link {\n    transition: color 1s ease-out; }\n  .main-header__nav {\n    background: #261B22; }\n  .main-header__nav-list {\n    float: right;\n    list-style: none; }\n  .main-header__nav-list-item {\n    font-size: 1rem; }\n  .main-header__nav-list-item-link, .main-header__title-link {\n    color: #6E5866;\n    text-decoration: none; }\n    .main-header__nav-list-item-link:hover, .main-header__title-link:hover {\n      color: #D6C9D2; }\n  .main-header__nav-list-item-link {\n    padding: 0 0.5rem; }\n    .main-header__nav-list-item-link--current {\n      color: #D6C9D2;\n      background-color: #6E5866; }\n\n#blitter {\n  position: relative; }\n  #blitter img.blitter {\n    z-index: 1;\n    position: absolute;\n    top: 0;\n    left: 0; }\n  #blitter img.spacer {\n    position: relative; }\n\n#blitter img.active {\n  z-index: 3; }\n\n#blitter img.next {\n  z-index: 2; }\n\n#events {\n  padding: 2em; }\n\n.generic-section-content {\n  margin-top: 5vh;\n  margin-right: 10vw;\n  margin-bottom: 5vh;\n  margin-left: 10vw; }\n  .generic-section-content p {\n    width: 100%;\n    margin-top: 2rem;\n    font-size: 1.6rem; }\n  .generic-section-content p.callout {\n    background: #656;\n    color: white;\n    padding: 2rem;\n    font-size: 1.75rem; }\n\nblockquote {\n  font-family: 'Aref Ruqaa';\n  margin: 60px auto;\n  padding: 20px 0 20px;\n  border-bottom: 1px solid #333;\n  border-top: 1px solid #333;\n  border-left: none;\n  width: 80%;\n  font-size: 1.4em;\n  color: #333;\n  background: none;\n  font-style: italic; }\n\n.home section {\n  width: 100% !important;\n  height: 400px;\n  clear: both;\n  margin: 0 !important; }\n\n#home-learn-more {\n  border-top: 5px solid #BEC5AD;\n  width: 100%;\n  background: url(" + escape(__webpack_require__(/*! ../images/flowers4.jpg */ "./src/images/flowers4.jpg")) + ") 0 center no-repeat;\n  background-size: cover;\n  color: white; }\n\n#home-learn-more-content {\n  padding: 5em;\n  height: 395px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column; }\n  #home-learn-more-content h2 {\n    width: 100%;\n    color: white;\n    background: rgba(0, 0, 0, 0.4);\n    margin: 0;\n    padding: 15px; }\n  #home-learn-more-content p {\n    padding: 1em;\n    width: 100%;\n    margin: 0;\n    background: rgba(0, 0, 0, 0.4); }\n\n#home-learn-more-cta {\n  background: rgba(0, 0, 0, 0.4);\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  flex-grow: none;\n  height: 395px; }\n\n#home-events {\n  position: relative;\n  height: 400px;\n  background: url(" + escape(__webpack_require__(/*! ../images/flowers1.jpg */ "./src/images/flowers1.jpg")) + ") 0 center no-repeat;\n  background-size: cover;\n  overflow: hidden; }\n\n#home-events-content {\n  background: rgba(255, 255, 255, 0.4);\n  padding: 5em;\n  height: 400px; }\n  #home-events-content h2 {\n    padding: 0 15px; }\n  #home-events-content ul {\n    list-style: none;\n    text-decoration: none;\n    padding: 15px; }\n    #home-events-content ul a {\n      color: #6E5866;\n      font-weight: bold;\n      font-size: 1.5em;\n      font-family: 'Lora'; }\n\n#activity-row {\n  position: absolute;\n  width: 100%;\n  top: 0;\n  left: 0;\n  margin: 0;\n  padding: 0; }\n\n.activity-div {\n  margin: 0;\n  position: absolute;\n  display: none;\n  left: 0;\n  top: 0;\n  padding: 40px 0;\n  height: 400px;\n  color: white;\n  background-color: #34252F;\n  opacity: 0;\n  animation: 0.7s slidein forwards;\n  z-index: 3; }\n  .activity-div h3 {\n    margin-top: 0; }\n  .activity-div div {\n    padding: 0 3em; }\n  .activity-div .activity-back a {\n    display: block;\n    position: absolute;\n    background-color: #261B22;\n    top: 0;\n    left: 0;\n    height: 25px;\n    width: 100%;\n    font-size: 25px;\n    line-height: 25px;\n    color: #ffffff; }\n  .activity-div .activity-back a:hover {\n    text-decoration: none;\n    color: #BEC5AD;\n    background-color: #1C1319; }\n\n@keyframes slidein {\n  from {\n    opacity: 0;\n    transform: translateY(100%); }\n  to {\n    opacity: 1;\n    transform: translateX(0%); } }\n\n.slidein {\n  display: block; }\n\n#smallcal {\n  padding: 2em; }\n  #smallcal .fc-scroller {\n    background: rgba(255, 255, 255, 0.4);\n    height: 300px !important; }\n\n#calendar {\n  clear: left;\n  width: 80%;\n  margin: 20px auto; }\n\n.fc-view-container {\n  background-color: rgba(255, 255, 255, 0.5); }\n\n#calendar-key {\n  list-style: none;\n  width: 80%;\n  margin: auto;\n  padding: 1em 0 0 0; }\n  #calendar-key li {\n    display: inline-block;\n    padding: 0.3em 0.5em;\n    font-size: 1.3em; }\n\n.color-key {\n  border-radius: 100%;\n  width: 20px;\n  height: 20px;\n  margin: 0 0.5em 0 0;\n  float: left; }\n\n#fondulac-color-key {\n  background-color: #4f7ed0; }\n\n#oshkosh-color-key {\n  background-color: #83d858; }\n\n#appleton-color-key {\n  background-color: #BF211E; }\n\n#page-footer {\n  background-color: #BEC5AD;\n  padding: 3em;\n  clear: both;\n  color: #6E5866;\n  text-align: right; }\n  #page-footer a {\n    color: #6E5866; }\n\n#faq-content section {\n  position: relative;\n  height: 100vh; }\n\n#faq-content a {\n  color: #dad;\n  font-weight: bold; }\n  #faq-content a:hover {\n    color: #848;\n    text-decoration: none; }\n\n#faq-content strong {\n  color: #8c8; }\n\n#start {\n  position: relative;\n  background: #BEC5AD;\n  height: 25vh; }\n\n#faq-links {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  background: rgba(0, 0, 0, 0.6);\n  padding: 20px 0;\n  margin: 0;\n  font-size: 1.8em;\n  font-family: 'Lora', serif;\n  z-index: 2;\n  transition: top ease-in-out 900ms; }\n  #faq-links a {\n    padding: 0 1em;\n    color: #fff;\n    text-decoration: none;\n    display: block; }\n    #faq-links a:hover {\n      color: black;\n      background: rgba(255, 255, 255, 0.4); }\n  #faq-links .current {\n    color: black;\n    background: rgba(255, 255, 255, 0.4); }\n\n#backtop {\n  display: none;\n  position: absolute;\n  text-align: right;\n  top: 0;\n  font-size: 0.7em;\n  width: 100%;\n  top: -2em; }\n\n#faq-content section p {\n  position: absolute;\n  right: 0;\n  color: white;\n  font-size: 1.2em;\n  width: 50%;\n  padding: 2em 4.5em 2em 2em;\n  background: rgba(0, 0, 0, 0.6);\n  z-index: 1;\n  height: 100vh; }\n\n#faq-content section img {\n  position: absolute;\n  top: 0;\n  z-index: 0; }\n\n#what1 {\n  background: url(" + escape(__webpack_require__(/*! ../images/community2.jpg */ "./src/images/community2.jpg")) + ") -110px; }\n\n#what2 {\n  background: url(" + escape(__webpack_require__(/*! ../images/community1.jpg */ "./src/images/community1.jpg")) + "); }\n\n#what3 {\n  background: url(" + escape(__webpack_require__(/*! ../images/community3.jpg */ "./src/images/community3.jpg")) + "); }\n\n#what4 {\n  background: url(" + escape(__webpack_require__(/*! ../images/temple3.jpg */ "./src/images/temple3.jpg")) + ") center; }\n\n#faq-content > .faq-item {\n  background-size: cover; }\n\n#contact-content {\n  background: url(" + escape(__webpack_require__(/*! ../images/temple3.jpg */ "./src/images/temple3.jpg")) + ") center;\n  background-size: cover;\n  margin: 0;\n  width: 100%;\n  padding: 5em; }\n\n#contact-us {\n  background: rgba(0, 0, 0, 0.4);\n  padding: 1.5em;\n  color: white; }\n  #contact-us fieldset {\n    border: 1px solid white;\n    margin: 1em 0;\n    padding-left: 1em;\n    background: rgba(0, 0, 0, 0.4); }\n  #contact-us legend {\n    width: auto;\n    font-size: 1.2em;\n    border: none;\n    margin-left: 1em;\n    color: white; }\n  #contact-us button {\n    color: black;\n    margin: 0 1em;\n    padding: 0.5em 2.5em; }\n\n#get-involved {\n  padding: 1.5em;\n  background: rgba(0, 0, 0, 0.8);\n  color: white;\n  margin: 0 0 1.5em 0; }\n  #get-involved strong {\n    color: #8c8; }\n\n#contact-notify {\n  position: fixed;\n  top: -100px;\n  height: 100px;\n  left: 0;\n  width: 100%;\n  overflow-y: hidden;\n  padding: 2em 10em;\n  font-weight: bold;\n  background: rgba(0, 0, 0, 0.9);\n  animation: 0.7s ease-in-out slidedown forwards;\n  z-index: 1; }\n  #contact-notify p {\n    margin: 0; }\n\n@keyframes slidedown {\n  to {\n    top: 0px; } }\n\n#hamburger {\n  position: absolute;\n  right: 20px;\n  top: 20px;\n  height: 3px;\n  width: 30px;\n  background: #6E5866;\n  box-shadow: 0 10px 0 0 #6E5866, 0 20px 0 0 #6E5866; }\n  #hamburger a {\n    position: absolute;\n    margin-left: -2px;\n    margin-top: -5px;\n    height: 30px;\n    width: 34px; }\n\n.mobile {\n  display: none; }\n\n@media (max-width: 767px) {\n  .mobile {\n    display: block; }\n  .desktop {\n    display: none  !important; }\n  header {\n    position: relative;\n    padding-bottom: 5px; }\n    header nav ul {\n      display: none;\n      position: absolute;\n      top: 100%;\n      right: 0;\n      z-index: 1;\n      text-align: right;\n      background: #BEC5AD; }\n    header nav li {\n      display: block !important;\n      padding: 0 !important;\n      border-bottom: 1px solid #313;\n      font-size: 1.5em; }\n    header nav a {\n      display: block;\n      border-radius: 0;\n      border-radius: 0px !important; }\n  #faq-content {\n    background: #656; }\n    #faq-content blockquote {\n      width: 100%;\n      height: 50vh;\n      margin: 0;\n      padding: 2em;\n      background-color: #BEC5AD; }\n  #start {\n    height: 20vh; }\n  #faq-links {\n    height: 20vh;\n    font-size: 1em; }\n    #faq-links li {\n      margin: 3px 0; }\n  #faq-content > .faq-item {\n    background-position: center 0;\n    background-size: 100% auto;\n    background-repeat: no-repeat; }\n    #faq-content > .faq-item > p {\n      width: 100%;\n      margin-top: 35vh;\n      height: 65vh; }\n  #contact-content {\n    background-position: center;\n    padding: 0;\n    margin: 0; }\n    #contact-content > #get-involved {\n      margin: 0; } }\n\n@media (max-width: 500px) {\n  header h1 {\n    font-size: 2em; }\n  blockquote {\n    font-size: 1em;\n    font-weight: bold;\n    margin: 20px; }\n  #home-learn-more {\n    height: auto; }\n  #home-learn-more-content {\n    padding: 120px 0;\n    height: auto;\n    background: rgba(0, 0, 0, 0.4); }\n    #home-learn-more-content h2, #home-learn-more-content p {\n      background: none; }\n  #home-events {\n    height: auto; }\n  #smallcal {\n    padding: 1em 0;\n    margin: 100px 0; }\n  #calendar {\n    padding: 1em 0;\n    margin: 20px auto;\n    width: 100%; }\n    #calendar .fc-scroller {\n      height: 500px !important; }\n    #calendar .fc-toolbar {\n      padding: 0 1em; }\n  #smallcal .fc-toolbar {\n    color: white;\n    padding: 0 0.5em; }\n  #calendar-key li {\n    display: block;\n    padding: 0; }\n  #faq-content > .faq-item > p {\n    font-size: 0.8em; } }\n\n.header-position {\n  position: relative;\n  z-index: 100; }\n\n.rotator-position {\n  position: relative;\n  z-index: 10; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/css-loader/lib/url/escape.js":
/*!***************************************************!*\
  !*** ./node_modules/css-loader/lib/url/escape.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),

/***/ "./node_modules/normalize.css/normalize.css":
/*!**************************************************!*\
  !*** ./node_modules/normalize.css/normalize.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../css-loader!../sass-loader/lib/loader.js!./normalize.css */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./node_modules/normalize.css/normalize.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/images/community1.jpg":
/*!***********************************!*\
  !*** ./src/images/community1.jpg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/ba490e1d7a37c1ff48c196bd14f14926.jpg";

/***/ }),

/***/ "./src/images/community2.jpg":
/*!***********************************!*\
  !*** ./src/images/community2.jpg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/1171e91b401f7d5b9f0fe49c50c19ee0.jpg";

/***/ }),

/***/ "./src/images/community3.jpg":
/*!***********************************!*\
  !*** ./src/images/community3.jpg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/9479c8061265fa1516a63882318b1b1e.jpg";

/***/ }),

/***/ "./src/images/flowers1.jpg":
/*!*********************************!*\
  !*** ./src/images/flowers1.jpg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/9da49a5d054d6564083c2b06fc6b036a.jpg";

/***/ }),

/***/ "./src/images/flowers4.jpg":
/*!*********************************!*\
  !*** ./src/images/flowers4.jpg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/66005cd3f3bfd6b345230b7fb21ac4c2.jpg";

/***/ }),

/***/ "./src/images/temple3.jpg":
/*!********************************!*\
  !*** ./src/images/temple3.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/f4f558b8c5d5f2b3a9e9d5bd9fbb5308.jpg";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! normalize.css */ "./node_modules/normalize.css/normalize.css");
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(normalize_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_style_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style/style.sass */ "./src/style/style.sass");
/* harmony import */ var _style_style_sass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_style_sass__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./src/style/style.sass":
/*!******************************!*\
  !*** ./src/style/style.sass ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/sass-loader/lib/loader.js!./style.sass */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/style/style.sass");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

/******/ });
//# sourceMappingURL=main.js.map