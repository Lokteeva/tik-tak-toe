"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./ui-kit/styles.js":
/*!**************************!*\
  !*** ./ui-kit/styles.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Body: function() { return /* binding */ Body; },\n/* harmony export */   Btn: function() { return /* binding */ Btn; },\n/* harmony export */   Footer: function() { return /* binding */ Footer; },\n/* harmony export */   Header: function() { return /* binding */ Header; },\n/* harmony export */   Modal: function() { return /* binding */ Modal; },\n/* harmony export */   Wrapper: function() { return /* binding */ Wrapper; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nconst Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n    displayName: \"styles__Wrapper\",\n    componentId: \"sc-491e7af3-0\"\n})([\n    \"display:flex;align-items:center;justify-content:center;position:absolute;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,0.3);backdrop-filter:blur(4px);\"\n]);\nconst Modal = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n    displayName: \"styles__Modal\",\n    componentId: \"sc-491e7af3-1\"\n})([\n    \"display:flex;flex-direction:column;position:relative;width:600px;min-height:300px;background:#fff;border-radius:8px;padding:20px;\"\n]);\nconst Btn = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].button.withConfig({\n    displayName: \"styles__Btn\",\n    componentId: \"sc-491e7af3-2\"\n})([\n    \"position:absolute;right:-30px;top:0;display:flex;align-items:center;justify-content:center;width:20px;height:20px;color:#fff;background:#555;border:none;border-radius:3px;&:hover{background:#777;}\"\n]);\nconst Header = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n    displayName: \"styles__Header\",\n    componentId: \"sc-491e7af3-3\"\n})([\n    \"padding-bottom:10px;font-size\"\n]);\nconst Body = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n    displayName: \"styles__Body\",\n    componentId: \"sc-491e7af3-4\"\n})([\n    \"color:red;\"\n]);\nconst Footer = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n    displayName: \"styles__Footer\",\n    componentId: \"sc-491e7af3-5\"\n})([\n    \"margin-top:auto;\"\n]);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91aS1raXQvc3R5bGVzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBdUM7QUFFaEMsTUFBTUMsVUFBVUQsNkRBQVU7Ozs7O0dBVy9CO0FBRUssTUFBTUcsUUFBUUgsNkRBQVU7Ozs7O0dBUzdCO0FBRUssTUFBTUksTUFBTUosZ0VBQWE7Ozs7O0dBaUI5QjtBQUVLLE1BQU1NLFNBQVNOLDZEQUFVOzs7OztHQUcvQjtBQUNNLE1BQU1PLE9BQU9QLDZEQUFVOzs7OztHQUU3QjtBQUNNLE1BQU1RLFNBQVNSLDZEQUFVOzs7OztHQUUvQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi91aS1raXQvc3R5bGVzLmpzPzcxOTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTW9kYWwgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDYwMHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDMwMHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQnRuID0gc3R5bGVkLmJ1dHRvbmBcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IC0zMHB4O1xyXG4gIHRvcDogMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQ6ICM1NTU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNzc3O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBIZWFkZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZVxyXG5gXHJcbmV4cG9ydCBjb25zdCBCb2R5ID0gc3R5bGVkLmRpdmBcclxuICBjb2xvcjogcmVkO1xyXG5gXHJcbmV4cG9ydCBjb25zdCBGb290ZXIgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbi10b3A6IGF1dG87XHJcbmAiXSwibmFtZXMiOlsic3R5bGVkIiwiV3JhcHBlciIsImRpdiIsIk1vZGFsIiwiQnRuIiwiYnV0dG9uIiwiSGVhZGVyIiwiQm9keSIsIkZvb3RlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./ui-kit/styles.js\n"));

/***/ })

});