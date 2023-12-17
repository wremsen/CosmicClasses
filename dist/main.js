/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_example__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/example */ \"./src/scripts/example.js\");\n/* harmony import */ var _scripts_star_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/star.js */ \"./src/scripts/star.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const main = document.getElementById(\"main\");\n  // debugger;\n  new _scripts_example__WEBPACK_IMPORTED_MODULE_0__[\"default\"](main);\n  console.log(\"hello world\");\n});\nlet options = {\n  method: 'GET',\n  headers: {\n    'x-api-key': 'V5JuNaDQpyt7KUdxNy9K0w==rYDridkfG3Qn0ZSZ'\n  }\n};\nlet url = 'https://api.api-ninjas.com/v1/stars?name=proxima';\nfetch(url, options).then(res => res.json()).then(data => {\n  console.log(data);\n  console.log(typeof data[0].distance_light_year);\n}).catch(err => {\n  console.log(`error ${err}`);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7O0FBQXdDO0FBQ0g7QUFFckNFLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUNoRCxNQUFNQyxJQUFJLEdBQUdGLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLE1BQU0sQ0FBQztFQUM1QztFQUNBLElBQUlMLHdEQUFPLENBQUNJLElBQUksQ0FBQztFQUNqQkUsT0FBTyxDQUFDQyxHQUFHLENBQUMsYUFBYSxDQUFDO0FBQzlCLENBQUMsQ0FBQztBQUVGLElBQUlDLE9BQU8sR0FBRztFQUNWQyxNQUFNLEVBQUUsS0FBSztFQUNiQyxPQUFPLEVBQUU7SUFBRSxXQUFXLEVBQUU7RUFBMkM7QUFDckUsQ0FBQztBQUVILElBQUlDLEdBQUcsR0FBRyxrREFBa0Q7QUFHNURDLEtBQUssQ0FBQ0QsR0FBRyxFQUFDSCxPQUFPLENBQUMsQ0FDYkssSUFBSSxDQUFDQyxHQUFHLElBQUlBLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUN2QkYsSUFBSSxDQUFDRyxJQUFJLElBQUk7RUFDVlYsT0FBTyxDQUFDQyxHQUFHLENBQUNTLElBQUksQ0FBQztFQUNqQlYsT0FBTyxDQUFDQyxHQUFHLENBQUMsT0FBT1MsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDQyxtQkFBbUIsQ0FBQztBQUNuRCxDQUFDLENBQUMsQ0FDREMsS0FBSyxDQUFDQyxHQUFHLElBQUk7RUFDVmIsT0FBTyxDQUFDQyxHQUFHLENBQUUsU0FBUVksR0FBSSxFQUFDLENBQUM7QUFDbkMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW50ZXJzdGVsbGFybmVpZ2hib3JzLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEV4YW1wbGUgZnJvbSBcIi4vc2NyaXB0cy9leGFtcGxlXCI7XHJcbmltcG9ydCBTdGFyIGZyb20gXCIuL3NjcmlwdHMvc3Rhci5qc1wiO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xyXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcclxuICAgIC8vIGRlYnVnZ2VyO1xyXG4gICAgbmV3IEV4YW1wbGUobWFpbik7XHJcbiAgICBjb25zb2xlLmxvZyhcImhlbGxvIHdvcmxkXCIpO1xyXG59KTtcclxuXHJcbmxldCBvcHRpb25zID0ge1xyXG4gICAgbWV0aG9kOiAnR0VUJyxcclxuICAgIGhlYWRlcnM6IHsgJ3gtYXBpLWtleSc6ICdWNUp1TmFEUXB5dDdLVWR4Tnk5SzB3PT1yWURyaWRrZkczUW4wWlNaJyB9XHJcbiAgfVxyXG4gIFxyXG5sZXQgdXJsID0gJ2h0dHBzOi8vYXBpLmFwaS1uaW5qYXMuY29tL3YxL3N0YXJzP25hbWU9cHJveGltYSdcclxuICBcclxuICBcclxuZmV0Y2godXJsLG9wdGlvbnMpXHJcbiAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHR5cGVvZiBkYXRhWzBdLmRpc3RhbmNlX2xpZ2h0X3llYXIpXHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYGVycm9yICR7ZXJyfWApXHJcbn0pO1xyXG5cclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbIkV4YW1wbGUiLCJTdGFyIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwibWFpbiIsImdldEVsZW1lbnRCeUlkIiwiY29uc29sZSIsImxvZyIsIm9wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXJzIiwidXJsIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJkaXN0YW5jZV9saWdodF95ZWFyIiwiY2F0Y2giLCJlcnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/example.js":
/*!********************************!*\
  !*** ./src/scripts/example.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Example {\n  constructor(ele) {\n    this.ele = ele;\n    this.ele.innerHTML = \"<h1>INTERSTELLAR NEIGHBORS</h1>\";\n    // debugger;\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Example);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9leGFtcGxlLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxPQUFPLENBQUM7RUFDVkMsV0FBV0EsQ0FBQ0MsR0FBRyxFQUFFO0lBQ2IsSUFBSSxDQUFDQSxHQUFHLEdBQUdBLEdBQUc7SUFDZCxJQUFJLENBQUNBLEdBQUcsQ0FBQ0MsU0FBUyxHQUFHLGlDQUFpQztJQUN0RDtFQUNKO0FBQ0o7QUFFQSwrREFBZUgsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL2ludGVyc3RlbGxhcm5laWdoYm9ycy8uL3NyYy9zY3JpcHRzL2V4YW1wbGUuanM/ZmNlZSJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBFeGFtcGxlIHtcclxuICAgIGNvbnN0cnVjdG9yKGVsZSkge1xyXG4gICAgICAgIHRoaXMuZWxlID0gZWxlO1xyXG4gICAgICAgIHRoaXMuZWxlLmlubmVySFRNTCA9IFwiPGgxPklOVEVSU1RFTExBUiBORUlHSEJPUlM8L2gxPlwiO1xyXG4gICAgICAgIC8vIGRlYnVnZ2VyO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFeGFtcGxlOyJdLCJuYW1lcyI6WyJFeGFtcGxlIiwiY29uc3RydWN0b3IiLCJlbGUiLCJpbm5lckhUTUwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/example.js\n");

/***/ }),

/***/ "./src/scripts/star.js":
/*!*****************************!*\
  !*** ./src/scripts/star.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Star {\n  constructor(options) {\n    this.name = options[0].name, this.apparentMagnitude = options[0].apparent_magnitude;\n    this.absoluteMagnitude = options[0].absolute_magnitude;\n    this.distance = options[0].distance_light_year;\n    this.declination = options[0].declination;\n    this.rightAscension = options[0].right_ascension;\n    this.constellation = options[0].constellation;\n    this.spectralClass = options[0].spectral_class;\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Star);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9zdGFyLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxJQUFJLENBQUM7RUFDUEMsV0FBV0EsQ0FBQ0MsT0FBTyxFQUFFO0lBQ2pCLElBQUksQ0FBQ0MsSUFBSSxHQUFHRCxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUNDLElBQUksRUFDM0IsSUFBSSxDQUFDQyxpQkFBaUIsR0FBR0YsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDRyxrQkFBa0I7SUFDdEQsSUFBSSxDQUFDQyxpQkFBaUIsR0FBR0osT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDSyxrQkFBa0I7SUFDdEQsSUFBSSxDQUFDQyxRQUFRLEdBQUdOLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQ08sbUJBQW1CO0lBQzlDLElBQUksQ0FBQ0MsV0FBVyxHQUFHUixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUNRLFdBQVc7SUFDekMsSUFBSSxDQUFDQyxjQUFjLEdBQUdULE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQ1UsZUFBZTtJQUNoRCxJQUFJLENBQUNDLGFBQWEsR0FBR1gsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDVyxhQUFhO0lBQzdDLElBQUksQ0FBQ0MsYUFBYSxHQUFHWixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUNhLGNBQWM7RUFDbEQ7QUFDSjtBQUVBLCtEQUFlZixJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW50ZXJzdGVsbGFybmVpZ2hib3JzLy4vc3JjL3NjcmlwdHMvc3Rhci5qcz9iOTg4Il0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFN0YXIge1xyXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG9wdGlvbnNbMF0ubmFtZSxcclxuICAgICAgICB0aGlzLmFwcGFyZW50TWFnbml0dWRlID0gb3B0aW9uc1swXS5hcHBhcmVudF9tYWduaXR1ZGU7XHJcbiAgICAgICAgdGhpcy5hYnNvbHV0ZU1hZ25pdHVkZSA9IG9wdGlvbnNbMF0uYWJzb2x1dGVfbWFnbml0dWRlO1xyXG4gICAgICAgIHRoaXMuZGlzdGFuY2UgPSBvcHRpb25zWzBdLmRpc3RhbmNlX2xpZ2h0X3llYXI7XHJcbiAgICAgICAgdGhpcy5kZWNsaW5hdGlvbiA9IG9wdGlvbnNbMF0uZGVjbGluYXRpb247XHJcbiAgICAgICAgdGhpcy5yaWdodEFzY2Vuc2lvbiA9IG9wdGlvbnNbMF0ucmlnaHRfYXNjZW5zaW9uO1xyXG4gICAgICAgIHRoaXMuY29uc3RlbGxhdGlvbiA9IG9wdGlvbnNbMF0uY29uc3RlbGxhdGlvbjtcclxuICAgICAgICB0aGlzLnNwZWN0cmFsQ2xhc3MgPSBvcHRpb25zWzBdLnNwZWN0cmFsX2NsYXNzO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdGFyOyJdLCJuYW1lcyI6WyJTdGFyIiwiY29uc3RydWN0b3IiLCJvcHRpb25zIiwibmFtZSIsImFwcGFyZW50TWFnbml0dWRlIiwiYXBwYXJlbnRfbWFnbml0dWRlIiwiYWJzb2x1dGVNYWduaXR1ZGUiLCJhYnNvbHV0ZV9tYWduaXR1ZGUiLCJkaXN0YW5jZSIsImRpc3RhbmNlX2xpZ2h0X3llYXIiLCJkZWNsaW5hdGlvbiIsInJpZ2h0QXNjZW5zaW9uIiwicmlnaHRfYXNjZW5zaW9uIiwiY29uc3RlbGxhdGlvbiIsInNwZWN0cmFsQ2xhc3MiLCJzcGVjdHJhbF9jbGFzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/star.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2NzcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbnRlcnN0ZWxsYXJuZWlnaGJvcnMvLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;