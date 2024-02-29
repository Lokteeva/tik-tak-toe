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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GameField; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./pages/styles.js\");\n/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Button/Button */ \"./components/Button/Button.jsx\");\n/* harmony import */ var _components_GemeSymbol__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/GemeSymbol */ \"./components/GemeSymbol.jsx\");\n/* harmony import */ var _components_useGameState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/useGameState */ \"./components/useGameState.jsx\");\n/* harmony import */ var _components_GameInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/GameInfo */ \"./components/GameInfo.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction GameField() {\n    _s();\n    const [playersCount] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(2);\n    const { cells, currentMove, nextMove, handleCellClick, winnerSequence } = (0,_components_useGameState__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(playersCount);\n    console.log(winnerSequence + \"eee\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Wrapper, {\n                children: [\n                    \"........\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button_Button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                        children: \"Играть\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, this),\n                    \"........\"\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_GameInfo__WEBPACK_IMPORTED_MODULE_5__.GameInfo, {\n                playersCount: playersCount,\n                currentMove: currentMove\n            }, void 0, false, {\n                fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Wrapper, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Span, {\n                        children: [\n                            \"Ход: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_GemeSymbol__WEBPACK_IMPORTED_MODULE_3__.GemeSymbol, {\n                                symbol: currentMove\n                            }, void 0, false, {\n                                fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                                lineNumber: 25,\n                                columnNumber: 16\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            \"Следующий: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_GemeSymbol__WEBPACK_IMPORTED_MODULE_3__.GemeSymbol, {\n                                symbol: nextMove\n                            }, void 0, false, {\n                                fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                                lineNumber: 28,\n                                columnNumber: 22\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Wrapper, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Grid, {\n                        children: cells.map((symbol, index)=>{\n                            const isWinner = winnerSequence === null || winnerSequence === void 0 ? void 0 : winnerSequence.includes(index);\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Cell, {\n                                isWinner: isWinner,\n                                // className={` ${isWinner ? 'red' : 'none'}`}\n                                onClick: ()=>{\n                                    handleCellClick(index);\n                                },\n                                children: symbol && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_GemeSymbol__WEBPACK_IMPORTED_MODULE_3__.GemeSymbol, {\n                                    symbol: symbol\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 26\n                                }, this)\n                            }, index, false, {\n                                fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                                lineNumber: 37,\n                                columnNumber: 15\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Center, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button_Button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                children: \"Новая игра\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \" ........... \"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                                lineNumber: 52,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button_Button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                children: \"Сдаться\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                                lineNumber: 53,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(GameField, \"UzADp2Vw7/st9Z6yTPonHJUuti4=\", false, function() {\n    return [\n        _components_useGameState__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n_c = GameField;\nvar _c;\n$RefreshReg$(_c, \"GameField\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQW1DO0FBQ2tCO0FBQ0M7QUFDQTtBQUNKO0FBQ2pCO0FBRWxCLFNBQVNNOztJQUN0QixNQUFNLENBQUNDLGFBQWEsR0FBR0YsK0NBQVFBLENBQUM7SUFDaEMsTUFBTSxFQUFFRyxLQUFLLEVBQUVDLFdBQVcsRUFBRUMsUUFBUSxFQUFFQyxlQUFlLEVBQUVDLGNBQWMsRUFBRSxHQUFHVCxvRUFBWUEsQ0FBQ0k7SUFFdkZNLFFBQVFDLEdBQUcsQ0FBQ0YsaUJBQWlCO0lBRzdCLHFCQUNFOzswQkFDRSw4REFBQ1osNENBQWM7O29CQUFDO2tDQUNkLDhEQUFDQyw2REFBTUE7a0NBQUM7Ozs7OztvQkFBZTs7Ozs7OzswQkFHekIsOERBQUNHLDBEQUFRQTtnQkFBQ0csY0FBY0E7Z0JBQWNFLGFBQWFBOzs7Ozs7MEJBRW5ELDhEQUFDVCw0Q0FBYzs7a0NBQ2IsOERBQUNBLHlDQUFXOzs0QkFBQzswQ0FDTiw4REFBQ0UsOERBQVVBO2dDQUFDZSxRQUFRUjs7Ozs7Ozs7Ozs7O2tDQUUzQiw4REFBQ1M7OzRCQUFJOzBDQUNRLDhEQUFDaEIsOERBQVVBO2dDQUFDZSxRQUFRUDs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUluQyw4REFBQ1YsNENBQWM7O2tDQUNiLDhEQUFDQSx5Q0FBVztrQ0FDVFEsTUFBTVksR0FBRyxDQUFDLENBQUNILFFBQVFJOzRCQUNwQixNQUFNQyxXQUFXViwyQkFBQUEscUNBQUFBLGVBQWdCVyxRQUFRLENBQUNGOzRCQUN4QyxxQkFDRSw4REFBQ3JCLHlDQUFXO2dDQUVac0IsVUFBWUE7Z0NBQ1osOENBQThDO2dDQUM5Q0csU0FBUztvQ0FDUGQsZ0JBQWdCVTtnQ0FDbEI7MENBQ0NKLHdCQUFVLDhEQUFDZiw4REFBVUE7b0NBQUNlLFFBQVFBOzs7Ozs7K0JBTjFCSTs7Ozs7d0JBVVA7Ozs7OztrQ0FFSiw4REFBQ3JCLDJDQUFhOzswQ0FDWiw4REFBQ0MsNkRBQU1BOzBDQUFDOzs7Ozs7MENBQ1IsOERBQUMwQjswQ0FBSzs7Ozs7OzBDQUNOLDhEQUFDMUIsNkRBQU1BOzBDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtsQjtHQWxEd0JLOztRQUVvREgsZ0VBQVlBOzs7S0FGaEVHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzeD83ZmZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFN0eWxlZCBmcm9tICcuL3N0eWxlcyc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuLi9jb21wb25lbnRzL0J1dHRvbi9CdXR0b24nO1xuaW1wb3J0IHsgR2VtZVN5bWJvbCB9IGZyb20gJy4uL2NvbXBvbmVudHMvR2VtZVN5bWJvbCc7XG5pbXBvcnQgdXNlR2FtZVN0YXRlIGZyb20gJy4uL2NvbXBvbmVudHMvdXNlR2FtZVN0YXRlJztcbmltcG9ydCB7IEdhbWVJbmZvIH0gZnJvbSAnLi4vY29tcG9uZW50cy9HYW1lSW5mbyc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2FtZUZpZWxkKCkge1xuICBjb25zdCBbcGxheWVyc0NvdW50XSA9IHVzZVN0YXRlKDIpO1xuICBjb25zdCB7IGNlbGxzLCBjdXJyZW50TW92ZSwgbmV4dE1vdmUsIGhhbmRsZUNlbGxDbGljaywgd2lubmVyU2VxdWVuY2UgfSA9IHVzZUdhbWVTdGF0ZShwbGF5ZXJzQ291bnQpO1xuXG4gIGNvbnNvbGUubG9nKHdpbm5lclNlcXVlbmNlICsgXCJlZWVcIilcblxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxTdHlsZWQuV3JhcHBlcj4uLi4uLi4uLlxuICAgICAgICA8QnV0dG9uPtCY0LPRgNCw0YLRjDwvQnV0dG9uPi4uLi4uLi4uXG4gICAgICA8L1N0eWxlZC5XcmFwcGVyPlxuXG4gICAgICA8R2FtZUluZm8gcGxheWVyc0NvdW50PXtwbGF5ZXJzQ291bnR9IGN1cnJlbnRNb3ZlPXtjdXJyZW50TW92ZX0gLz5cbiAgICAgIFxuICAgICAgPFN0eWxlZC5XcmFwcGVyPlxuICAgICAgICA8U3R5bGVkLlNwYW4+XG4gICAgICAgICAg0KXQvtC0OiA8R2VtZVN5bWJvbCBzeW1ib2w9e2N1cnJlbnRNb3ZlfSAvPlxuICAgICAgICA8L1N0eWxlZC5TcGFuPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgINCh0LvQtdC00YPRjtGJ0LjQuTogPEdlbWVTeW1ib2wgc3ltYm9sPXtuZXh0TW92ZX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1N0eWxlZC5XcmFwcGVyPlxuXG4gICAgICA8U3R5bGVkLldyYXBwZXI+XG4gICAgICAgIDxTdHlsZWQuR3JpZD5cbiAgICAgICAgICB7Y2VsbHMubWFwKChzeW1ib2wsIGluZGV4KSA9PiB7XG4gICAgICAgICAgY29uc3QgaXNXaW5uZXIgPSB3aW5uZXJTZXF1ZW5jZT8uaW5jbHVkZXMoaW5kZXgpO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPFN0eWxlZC5DZWxsXG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgIGlzV2lubmVyID0ge2lzV2lubmVyfVxuICAgICAgICAgICAgICAvLyBjbGFzc05hbWU9e2AgJHtpc1dpbm5lciA/ICdyZWQnIDogJ25vbmUnfWB9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICBoYW5kbGVDZWxsQ2xpY2soaW5kZXgpO1xuICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAge3N5bWJvbCAmJiA8R2VtZVN5bWJvbCBzeW1ib2w9e3N5bWJvbH0gLz59XG4gICAgICAgICAgICA8L1N0eWxlZC5DZWxsPlxuICAgICAgICAgICAgKVxuICAgICAgICAgICBcbiAgICAgICAgICAgIH0pfVxuICAgICAgICA8L1N0eWxlZC5HcmlkPlxuICAgICAgICA8U3R5bGVkLkNlbnRlcj5cbiAgICAgICAgICA8QnV0dG9uPtCd0L7QstCw0Y8g0LjQs9GA0LA8L0J1dHRvbj5cbiAgICAgICAgICA8c3Bhbj4gLi4uLi4uLi4uLi4gPC9zcGFuPlxuICAgICAgICAgIDxCdXR0b24+0KHQtNCw0YLRjNGB0Y88L0J1dHRvbj5cbiAgICAgICAgPC9TdHlsZWQuQ2VudGVyPlxuICAgICAgPC9TdHlsZWQuV3JhcHBlcj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJTdHlsZWQiLCJCdXR0b24iLCJHZW1lU3ltYm9sIiwidXNlR2FtZVN0YXRlIiwiR2FtZUluZm8iLCJ1c2VTdGF0ZSIsIkdhbWVGaWVsZCIsInBsYXllcnNDb3VudCIsImNlbGxzIiwiY3VycmVudE1vdmUiLCJuZXh0TW92ZSIsImhhbmRsZUNlbGxDbGljayIsIndpbm5lclNlcXVlbmNlIiwiY29uc29sZSIsImxvZyIsIldyYXBwZXIiLCJTcGFuIiwic3ltYm9sIiwiZGl2IiwiR3JpZCIsIm1hcCIsImluZGV4IiwiaXNXaW5uZXIiLCJpbmNsdWRlcyIsIkNlbGwiLCJvbkNsaWNrIiwiQ2VudGVyIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ })

});