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

/***/ "./ui-kit/Modal.jsx":
/*!**************************!*\
  !*** ./ui-kit/Modal.jsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Modal: function() { return /* binding */ Modal; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./ui-kit/styles.js\");\n\n\n/**\r\n * \r\n * @param {{\r\n * isOpen: boolean\r\n * onClose: Function\r\n * }} props \r\n * @returns \r\n */ function Modal(param) {\n    let { children, isOpen = false, onClose } = param;\n    if (!isOpen) {\n        return null;\n    }\n    const handleClick = (e)=>{\n        console.log(e.ta);\n        onClose();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Wrapper, {\n        onClick: handleClick,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Modal, {\n            \"data-id\": \"modal\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Btn, {\n                onClick: onClose,\n                children: \"X\"\n            }, void 0, false, {\n                fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\ui-kit\\\\Modal.jsx\",\n                lineNumber: 26,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\ui-kit\\\\Modal.jsx\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\ui-kit\\\\Modal.jsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n}\n_c = Modal;\nvar _c;\n$RefreshReg$(_c, \"Modal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91aS1raXQvTW9kYWwuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQW1DO0FBRW5DOzs7Ozs7O0NBT0MsR0FFTSxTQUFTQyxNQUFNLEtBQWtDO1FBQWxDLEVBQUNDLFFBQVEsRUFBRUMsU0FBUSxLQUFLLEVBQUVDLE9BQU8sRUFBQyxHQUFsQztJQUNwQixJQUFJLENBQUNELFFBQVE7UUFDWCxPQUFPO0lBQ1Q7SUFFQSxNQUFNRSxjQUFjLENBQUNDO1FBQ25CQyxRQUFRQyxHQUFHLENBQUNGLEVBQUVHLEVBQUU7UUFDaEJMO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0osNENBQWM7UUFBQ1csU0FBU047a0JBQ3ZCLDRFQUFDTCwwQ0FBWTtZQUFDWSxXQUFRO3NCQUVwQiw0RUFBQ1osd0NBQVU7Z0JBQUNXLFNBQVNQOzBCQUFTOzs7Ozs7Ozs7Ozs7Ozs7O0FBSXRDO0tBbEJnQkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdWkta2l0L01vZGFsLmpzeD8wYmE3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFN0eWxlZCBmcm9tICcuL3N0eWxlcyc7XHJcblxyXG4vKipcclxuICogXHJcbiAqIEBwYXJhbSB7e1xyXG4gKiBpc09wZW46IGJvb2xlYW5cclxuICogb25DbG9zZTogRnVuY3Rpb25cclxuICogfX0gcHJvcHMgXHJcbiAqIEByZXR1cm5zIFxyXG4gKi9cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBNb2RhbCh7Y2hpbGRyZW4sIGlzT3Blbj0gZmFsc2UsIG9uQ2xvc2V9KSB7XHJcbiAgaWYgKCFpc09wZW4pIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZS50YSlcclxuICAgIG9uQ2xvc2UoKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U3R5bGVkLldyYXBwZXIgb25DbGljaz17aGFuZGxlQ2xpY2t9PlxyXG4gICAgICA8U3R5bGVkLk1vZGFsIGRhdGEtaWQ9XCJtb2RhbFwiPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxTdHlsZWQuQnRuIG9uQ2xpY2s9e29uQ2xvc2V9Plg8L1N0eWxlZC5CdG4+XHJcbiAgICAgIDwvU3R5bGVkLk1vZGFsPlxyXG4gICAgPC9TdHlsZWQuV3JhcHBlcj5cclxuICApO1xyXG59XHJcblxyXG4iXSwibmFtZXMiOlsiU3R5bGVkIiwiTW9kYWwiLCJjaGlsZHJlbiIsImlzT3BlbiIsIm9uQ2xvc2UiLCJoYW5kbGVDbGljayIsImUiLCJjb25zb2xlIiwibG9nIiwidGEiLCJXcmFwcGVyIiwib25DbGljayIsImRhdGEtaWQiLCJCdG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./ui-kit/Modal.jsx\n"));

/***/ })

});