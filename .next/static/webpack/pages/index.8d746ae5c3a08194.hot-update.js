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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Cell: function() { return /* binding */ Cell; },\n/* harmony export */   Center: function() { return /* binding */ Center; },\n/* harmony export */   GameInfo: function() { return /* binding */ GameInfo; },\n/* harmony export */   Grid: function() { return /* binding */ Grid; },\n/* harmony export */   Icon: function() { return /* binding */ Icon; },\n/* harmony export */   Span: function() { return /* binding */ Span; },\n/* harmony export */   Wrapper: function() { return /* binding */ Wrapper; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var randomcolor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! randomcolor */ \"./node_modules/randomcolor/randomColor.js\");\n/* harmony import */ var randomcolor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(randomcolor__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  padding: 10px;\\n  margin: 10px;\\n  width: 570px;\\n  background: #222;\\n  color: #fff;\\n  border-radius: 8px;\\n  // margin: 0 auto;\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  display: flex;\\n  justify-content: center;\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  display: grid;\\n  grid-template-columns: repeat(19, 25px);\\n  grid-template-rows: repeat(19, 25px);\\n  justify-content: center;\\n  margin: 0 0 20px 0;\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  border: 1px solid #aaa;\\n  display: grid;\\n  justify-content: center;\\n  align-items: center;\\n  background: none;\\n  cursor: pointer;\\n\\n  &.cell--win {\\n    background: #565656;\\n  }\\n\"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  display: flex;\\n  padding-bottom: 7px;\\n\"\n    ]);\n    _templateObject4 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  border-radius: 50%;\\n  background-color: #fff;\\n  width: 35px;\\n  height: 35px;\\n  color: #333;\\n  align-items: center;\\n  justify-content: center;\\n  display: flex;\\n\"\n    ]);\n    _templateObject5 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject6() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n  gap: 50px;\\n\"\n    ]);\n    _templateObject6 = function() {\n        return data;\n    };\n    return data;\n}\n\n\nconst Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject());\nconst Center = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject1());\nconst Grid = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject2());\nconst Cell = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].button(_templateObject3());\nconst Span = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].span(_templateObject4());\nconst Icon = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject5());\nconst GameInfo = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject6());\nучзщке;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zdHlsZXMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNDO0FBQ0M7QUFFaEMsTUFBTUUsVUFBVUQsNkRBQVUsb0JBUS9CO0FBRUssTUFBTUcsU0FBU0gsNkRBQVUscUJBRzlCO0FBRUssTUFBTUksT0FBT0osNkRBQVUscUJBTTVCO0FBRUssTUFBTUssT0FBT0wsZ0VBQWEscUJBVy9CO0FBRUssTUFBTU8sT0FBT1AsOERBQVcscUJBRzdCO0FBRUssTUFBTVMsT0FBT1QsNkRBQVUscUJBUzVCO0FBRUssTUFBTVUsV0FBV1YsNkRBQVUscUJBSWhDO0FBRUZXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3N0eWxlcy5qcz82ZTQ5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByYW5kb21Db2xvciBmcm9tICdyYW5kb21jb2xvcic7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuZXhwb3J0IGNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW46IDEwcHg7XG4gIHdpZHRoOiA1NzBweDtcbiAgYmFja2dyb3VuZDogIzIyMjtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgLy8gbWFyZ2luOiAwIGF1dG87XG5gO1xuXG5leHBvcnQgY29uc3QgQ2VudGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5gO1xuXG5leHBvcnQgY29uc3QgR3JpZCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDE5LCAyNXB4KTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTksIDI1cHgpO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiAwIDAgMjBweCAwO1xuYDtcblxuZXhwb3J0IGNvbnN0IENlbGwgPSBzdHlsZWQuYnV0dG9uYFxuICBib3JkZXI6IDFweCBzb2xpZCAjYWFhO1xuICBkaXNwbGF5OiBncmlkO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICYuY2VsbC0td2luIHtcbiAgICBiYWNrZ3JvdW5kOiAjNTY1NjU2O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgU3BhbiA9IHN0eWxlZC5zcGFuYFxuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nLWJvdHRvbTogN3B4O1xuYDtcblxuZXhwb3J0IGNvbnN0IEljb24gPSBzdHlsZWQuZGl2YFxuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHdpZHRoOiAzNXB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIGNvbG9yOiAjMzMzO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbmA7XG5cbmV4cG9ydCBjb25zdCBHYW1lSW5mbyA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgZ2FwOiA1MHB4O1xuYDtcblxu0YPRh9C30YnQutC1Il0sIm5hbWVzIjpbInJhbmRvbUNvbG9yIiwic3R5bGVkIiwiV3JhcHBlciIsImRpdiIsIkNlbnRlciIsIkdyaWQiLCJDZWxsIiwiYnV0dG9uIiwiU3BhbiIsInNwYW4iLCJJY29uIiwiR2FtZUluZm8iLCLRg9GH0LfRidC60LUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/styles.js\n"));

/***/ })

});