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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Body: function() { return /* binding */ Body; },\n/* harmony export */   Btn: function() { return /* binding */ Btn; },\n/* harmony export */   Footer: function() { return /* binding */ Footer; },\n/* harmony export */   Header: function() { return /* binding */ Header; },\n/* harmony export */   Modal: function() { return /* binding */ Modal; },\n/* harmony export */   Wrapper: function() { return /* binding */ Wrapper; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nconst Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n    displayName: \"styles__Wrapper\",\n    componentId: \"sc-3d53d84c-0\"\n})([\n    \"display:flex;align-items:center;justify-content:center;position:absolute;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,0.3);backdrop-filter:blur(4px);overflow-:auto;\"\n]);\nconst Modal = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n    displayName: \"styles__Modal\",\n    componentId: \"sc-3d53d84c-1\"\n})([\n    \"display:flex;flex-direction:column;position:relative;width:600px;min-height:300px;background:#fff;border-radius:8px;padding:20px;\"\n]);\nconst Btn = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].button.withConfig({\n    displayName: \"styles__Btn\",\n    componentId: \"sc-3d53d84c-2\"\n})([\n    \"position:absolute;right:-30px;top:0;display:flex;align-items:center;justify-content:center;width:20px;height:20px;color:#fff;background:#555;border:none;border-radius:3px;&:hover{background:#777;}\"\n]);\nconst Header = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n    displayName: \"styles__Header\",\n    componentId: \"sc-3d53d84c-3\"\n})([\n    \"padding-bottom:10px;font-size:20px;font-weight:700;\"\n]);\nconst Body = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n    displayName: \"styles__Body\",\n    componentId: \"sc-3d53d84c-4\"\n})([\n    \"color:red;\"\n]);\nconst Footer = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n    displayName: \"styles__Footer\",\n    componentId: \"sc-3d53d84c-5\"\n})([\n    \"margin-top:auto;\"\n]);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91aS1raXQvc3R5bGVzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBdUM7QUFFaEMsTUFBTUMsVUFBVUQsNkRBQVU7Ozs7O0dBWS9CO0FBRUssTUFBTUcsUUFBUUgsNkRBQVU7Ozs7O0dBUzdCO0FBRUssTUFBTUksTUFBTUosZ0VBQWE7Ozs7O0dBaUI5QjtBQUVLLE1BQU1NLFNBQVNOLDZEQUFVOzs7OztHQUkvQjtBQUNNLE1BQU1PLE9BQU9QLDZEQUFVOzs7OztHQUU3QjtBQUNNLE1BQU1RLFNBQVNSLDZEQUFVOzs7OztHQUUvQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi91aS1raXQvc3R5bGVzLmpzPzcxOTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XHJcbiAgb3ZlcmZsb3ctOiBhdXRvO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1vZGFsID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiA2MDBweDtcclxuICBtaW4taGVpZ2h0OiAzMDBweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJ0biA9IHN0eWxlZC5idXR0b25gXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAtMzBweDtcclxuICB0b3A6IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kOiAjNTU1O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzc3NztcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSGVhZGVyID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuYFxyXG5leHBvcnQgY29uc3QgQm9keSA9IHN0eWxlZC5kaXZgXHJcbiAgY29sb3I6IHJlZDtcclxuYFxyXG5leHBvcnQgY29uc3QgRm9vdGVyID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW4tdG9wOiBhdXRvO1xyXG5gIl0sIm5hbWVzIjpbInN0eWxlZCIsIldyYXBwZXIiLCJkaXYiLCJNb2RhbCIsIkJ0biIsImJ1dHRvbiIsIkhlYWRlciIsIkJvZHkiLCJGb290ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./ui-kit/styles.js\n"));

/***/ })

});