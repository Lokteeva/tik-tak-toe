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

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./pages/styles.js\");\n/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Button/Button */ \"./components/Button/Button.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst GAME_SYMBOLS = {\n    ZERO: \"zero\",\n    CROSS: \"cross\"\n};\nfunction HomePage() {\n    _s();\n    const [cells, setCells] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>new Array(19 * 19).fill(null));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.Wrapper, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.Center, {\n                style: {\n                    fontSize: \"30px\"\n                }\n            }, void 0, false, {\n                fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.Grid, {\n                children: cells.map((_, index)=>{\n                    var _winnerSequence;\n                    const isWinner = (_winnerSequence = winnerSequence) === null || _winnerSequence === void 0 ? void 0 : _winnerSequence.includes(index);\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.Cell, {\n                        className: \"cell \".concat(isWinner ? \"cell--win\" : \"\")\n                    }, index, false, {\n                        fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                        lineNumber: 34,\n                        columnNumber: 13\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.Center, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button_Button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                    children: \"Новая игра\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n_s(HomePage, \"Q8gEie435c+JthAVXZTu0G/Ecfw=\");\n_c = HomePage;\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQWlDO0FBQ0U7QUFDa0I7QUFFckQsTUFBTUcsZUFBZTtJQUNuQkMsTUFBTTtJQUNOQyxPQUFPO0FBRVQ7QUFHZSxTQUFTQzs7SUFDdEIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdSLCtDQUFRQSxDQUFDLElBQUssSUFBSVMsTUFBTSxLQUFLLElBQUlDLElBQUksQ0FBQztJQVloRSxxQkFDRSw4REFBQ1QsNENBQWM7OzBCQUNiLDhEQUFDQSwyQ0FBYTtnQkFBQ1ksT0FBTztvQkFBRUMsVUFBVTtnQkFBTzs7Ozs7OzBCQUd6Qyw4REFBQ2IseUNBQVc7MEJBQ1RNLE1BQU1TLEdBQUcsQ0FBQyxDQUFDQyxHQUFHQzt3QkFDSUM7b0JBQWpCLE1BQU1DLFlBQVdELGtCQUFBQSw0QkFBQUEsc0NBQUFBLGdCQUFnQkUsUUFBUSxDQUFDSDtvQkFDMUMscUJBQ0UsOERBQUNqQix5Q0FBVzt3QkFFVnNCLFdBQVcsUUFBb0MsT0FBNUJILFdBQVcsY0FBYzt1QkFEdkNGOzs7OztnQkFPWDs7Ozs7OzBCQUVGLDhEQUFDakIsMkNBQWE7MEJBQ1osNEVBQUNDLDZEQUFNQTs4QkFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJakI7R0FyQ3dCSTtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qc3g/N2ZmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICogYXMgU3R5bGVkIGZyb20gXCIuL3N0eWxlc1wiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQnV0dG9uL0J1dHRvblwiO1xuXG5jb25zdCBHQU1FX1NZTUJPTFMgPSB7XG4gIFpFUk86IFwiemVyb1wiLFxuICBDUk9TUzogXCJjcm9zc1wiLFxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XG4gIGNvbnN0IFtjZWxscywgc2V0Q2VsbHNdID0gdXNlU3RhdGUoKCk9PiBuZXcgQXJyYXkoMTkgKiAxOSkuZmlsbChudWxsKSk7XG5cbiAgXG5cblxuXG4gXG5cblxuXG5cblxuICByZXR1cm4gKFxuICAgIDxTdHlsZWQuV3JhcHBlcj5cbiAgICAgIDxTdHlsZWQuQ2VudGVyIHN0eWxlPXt7IGZvbnRTaXplOiBcIjMwcHhcIiB9fT5cbiAgICAgICAgXG4gICAgICA8L1N0eWxlZC5DZW50ZXI+XG4gICAgICA8U3R5bGVkLkdyaWQ+XG4gICAgICAgIHtjZWxscy5tYXAoKF8sIGluZGV4KSA9PiB7XG4gICAgICAgICAgY29uc3QgaXNXaW5uZXIgPSB3aW5uZXJTZXF1ZW5jZT8uaW5jbHVkZXMoaW5kZXgpO1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8U3R5bGVkLkNlbGxcbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgY2VsbCAke2lzV2lubmVyID8gXCJjZWxsLS13aW5cIiA6IFwiXCJ9YH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDwvU3R5bGVkLkNlbGw+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L1N0eWxlZC5HcmlkPlxuICAgICAgPFN0eWxlZC5DZW50ZXI+XG4gICAgICAgIDxCdXR0b24gPtCd0L7QstCw0Y8g0LjQs9GA0LA8L0J1dHRvbj5cbiAgICAgIDwvU3R5bGVkLkNlbnRlcj5cbiAgICA8L1N0eWxlZC5XcmFwcGVyPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiU3R5bGVkIiwiQnV0dG9uIiwiR0FNRV9TWU1CT0xTIiwiWkVSTyIsIkNST1NTIiwiSG9tZVBhZ2UiLCJjZWxscyIsInNldENlbGxzIiwiQXJyYXkiLCJmaWxsIiwiV3JhcHBlciIsIkNlbnRlciIsInN0eWxlIiwiZm9udFNpemUiLCJHcmlkIiwibWFwIiwiXyIsImluZGV4Iiwid2lubmVyU2VxdWVuY2UiLCJpc1dpbm5lciIsImluY2x1ZGVzIiwiQ2VsbCIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ })

});