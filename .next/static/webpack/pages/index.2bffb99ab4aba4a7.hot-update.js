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

/***/ "./pages/styles.js":
/*!*************************!*\
  !*** ./pages/styles.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Cell: function() { return /* binding */ Cell; },\n/* harmony export */   Center: function() { return /* binding */ Center; },\n/* harmony export */   GameInfo: function() { return /* binding */ GameInfo; },\n/* harmony export */   Grid: function() { return /* binding */ Grid; },\n/* harmony export */   Icon: function() { return /* binding */ Icon; },\n/* harmony export */   Span: function() { return /* binding */ Span; },\n/* harmony export */   Timer: function() { return /* binding */ Timer; },\n/* harmony export */   Wrapper: function() { return /* binding */ Wrapper; }\n/* harmony export */ });\n/* harmony import */ var randomcolor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! randomcolor */ \"./node_modules/randomcolor/randomColor.js\");\n/* harmony import */ var randomcolor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(randomcolor__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nconst Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n    displayName: \"styles__Wrapper\",\n    componentId: \"sc-d445f725-0\"\n})([\n    \"padding:10px;margin:10px;width:570px;background:#222;color:#fff;border-radius:8px;\"\n]);\nconst Center = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n    displayName: \"styles__Center\",\n    componentId: \"sc-d445f725-1\"\n})([\n    \"display:flex;justify-content:center;\"\n]);\nconst Grid = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n    displayName: \"styles__Grid\",\n    componentId: \"sc-d445f725-2\"\n})([\n    \"display:grid;grid-template-columns:repeat(19,25px);grid-template-rows:repeat(19,25px);justify-content:center;margin:0 0 20px 0;\"\n]);\nconst Cell = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].button.withConfig({\n    displayName: \"styles__Cell\",\n    componentId: \"sc-d445f725-3\"\n})([\n    \"border:1px solid #aaa;display:grid;justify-content:center;align-items:center;background:\",\n    \";cursor:pointer;&.cell--win{background:#565656;}\"\n], (props)=>props.$isWinner ? \"rgb(232,173,133)\" : \"#fff\");\nconst Span = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].span.withConfig({\n    displayName: \"styles__Span\",\n    componentId: \"sc-d445f725-4\"\n})([\n    \"display:flex;padding-bottom:7px;\"\n]);\nconst Icon = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n    displayName: \"styles__Icon\",\n    componentId: \"sc-d445f725-5\"\n})([\n    \"border-radius:50%;background-color:#fff;width:35px;height:35px;color:#333;align-items:center;justify-content:center;display:flex;\"\n]);\nconst GameInfo = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n    displayName: \"styles__GameInfo\",\n    componentId: \"sc-d445f725-6\"\n})([\n    \"display:grid;grid-template-columns:1fr 1fr;gap:50px;\"\n]);\nconst Timer = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n    displayName: \"styles__Timer\",\n    componentId: \"sc-d445f725-7\"\n})([\n    \"color:\",\n    \";\"\n], (props)=>props.$isTimerRunning ? props.$isDanger ? \"red\" : \"#fff\" : \"gray\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zdHlsZXMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFDQztBQUVoQyxNQUFNRSxVQUFVRCw2REFBVTs7Ozs7R0FRL0I7QUFFSyxNQUFNRyxTQUFTSCw2REFBVTs7Ozs7R0FHOUI7QUFFSyxNQUFNSSxPQUFPSiw2REFBVTs7Ozs7R0FNNUI7QUFFSyxNQUFNSyxPQUFPTCxnRUFBYTs7Ozs7O0dBTWpCLENBQUNPLFFBQVdBLE1BQU1DLFNBQVMsR0FBRyxxQkFBcUIsUUFPakU7QUFFSyxNQUFNQyxPQUFPVCw4REFBVzs7Ozs7R0FHN0I7QUFFSyxNQUFNVyxPQUFPWCw2REFBVTs7Ozs7R0FTNUI7QUFFSyxNQUFNWSxXQUFXWiw2REFBVTs7Ozs7R0FJaEM7QUFFSyxNQUFNYSxRQUFRYiw2REFBVTs7Ozs7O0dBQ3BCLENBQUNPLFFBQVdBLE1BQU1PLGVBQWUsR0FBSVAsTUFBTVEsU0FBUyxHQUFHLFFBQVEsU0FBVSxRQUNsRiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zdHlsZXMuanM/NmU0OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmFuZG9tQ29sb3IgZnJvbSAncmFuZG9tY29sb3InO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmV4cG9ydCBjb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luOiAxMHB4O1xuICB3aWR0aDogNTcwcHg7XG4gIGJhY2tncm91bmQ6ICMyMjI7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIC8vIG1hcmdpbjogMCBhdXRvO1xuYDtcblxuZXhwb3J0IGNvbnN0IENlbnRlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuYDtcblxuZXhwb3J0IGNvbnN0IEdyaWQgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxOSwgMjVweCk7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDE5LCAyNXB4KTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogMCAwIDIwcHggMDtcbmA7XG5cbmV4cG9ydCBjb25zdCBDZWxsID0gc3R5bGVkLmJ1dHRvbmBcbiAgYm9yZGVyOiAxcHggc29saWQgI2FhYTtcbiAgZGlzcGxheTogZ3JpZDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC8vIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICR7KHByb3BzKSA9PiAocHJvcHMuJGlzV2lubmVyID8gJ3JnYigyMzIsMTczLDEzMyknIDogJyNmZmYnKX07XG4gIFxuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgJi5jZWxsLS13aW4ge1xuICAgIGJhY2tncm91bmQ6ICM1NjU2NTY7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBTcGFuID0gc3R5bGVkLnNwYW5gXG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmctYm90dG9tOiA3cHg7XG5gO1xuXG5leHBvcnQgY29uc3QgSWNvbiA9IHN0eWxlZC5kaXZgXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgd2lkdGg6IDM1cHg7XG4gIGhlaWdodDogMzVweDtcbiAgY29sb3I6ICMzMzM7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuYDtcblxuZXhwb3J0IGNvbnN0IEdhbWVJbmZvID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBnYXA6IDUwcHg7XG5gO1xuXG5leHBvcnQgY29uc3QgVGltZXIgPSBzdHlsZWQuZGl2YFxuICBjb2xvcjogJHsocHJvcHMpID0+IChwcm9wcy4kaXNUaW1lclJ1bm5pbmcgPyAocHJvcHMuJGlzRGFuZ2VyID8gJ3JlZCcgOiAnI2ZmZicpIDogJ2dyYXknKX07XG5gO1xuIl0sIm5hbWVzIjpbInJhbmRvbUNvbG9yIiwic3R5bGVkIiwiV3JhcHBlciIsImRpdiIsIkNlbnRlciIsIkdyaWQiLCJDZWxsIiwiYnV0dG9uIiwicHJvcHMiLCIkaXNXaW5uZXIiLCJTcGFuIiwic3BhbiIsIkljb24iLCJHYW1lSW5mbyIsIlRpbWVyIiwiJGlzVGltZXJSdW5uaW5nIiwiJGlzRGFuZ2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/styles.js\n"));

/***/ })

});