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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GameField; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./pages/styles.js\");\n/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Button/Button */ \"./components/Button/Button.jsx\");\n/* harmony import */ var _components_GemeSymbol__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/GemeSymbol */ \"./components/GemeSymbol.jsx\");\n/* harmony import */ var _components_useGameState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/useGameState */ \"./components/useGameState.jsx\");\n/* harmony import */ var _components_GameInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/GameInfo */ \"./components/GameInfo.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction GameField() {\n    _s();\n    const [playersCount] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(2);\n    const { cells, currentMove, nextMove, handleCellClick, winnerSequence } = (0,_components_useGameState__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(playersCount);\n    console.log(winnerSequence + \"победа\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Wrapper, {\n                children: [\n                    \"........\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button_Button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                        children: \"Играть\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, this),\n                    \"........\"\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_GameInfo__WEBPACK_IMPORTED_MODULE_5__.GameInfo, {\n                playersCount: playersCount,\n                currentMove: currentMove\n            }, void 0, false, {\n                fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Wrapper, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Span, {\n                        children: [\n                            \"Ход: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_GemeSymbol__WEBPACK_IMPORTED_MODULE_3__.GemeSymbol, {\n                                symbol: currentMove\n                            }, void 0, false, {\n                                fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                                lineNumber: 25,\n                                columnNumber: 16\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            \"Следующий: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_GemeSymbol__WEBPACK_IMPORTED_MODULE_3__.GemeSymbol, {\n                                symbol: nextMove\n                            }, void 0, false, {\n                                fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                                lineNumber: 28,\n                                columnNumber: 22\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Wrapper, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Grid, {\n                        children: cells.map((symbol, index)=>{\n                            const isWinner = winnerSequence === null || winnerSequence === void 0 ? void 0 : winnerSequence.includes(index);\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Cell, {\n                                isWinner: \"{isWinner}\",\n                                // className={` ${isWinner ? 'red' : 'none'}`}\n                                onClick: ()=>{\n                                    handleCellClick(index);\n                                },\n                                children: symbol && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_GemeSymbol__WEBPACK_IMPORTED_MODULE_3__.GemeSymbol, {\n                                    symbol: symbol\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 26\n                                }, this)\n                            }, index, false, {\n                                fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                                lineNumber: 37,\n                                columnNumber: 15\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Center, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button_Button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                children: \"Новая игра\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \" ........... \"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                                lineNumber: 52,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button_Button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                children: \"Сдаться\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                                lineNumber: 53,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(GameField, \"UzADp2Vw7/st9Z6yTPonHJUuti4=\", false, function() {\n    return [\n        _components_useGameState__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n_c = GameField;\nvar _c;\n$RefreshReg$(_c, \"GameField\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQW1DO0FBQ2tCO0FBQ0M7QUFDQTtBQUNKO0FBQ2pCO0FBRWxCLFNBQVNNOztJQUN0QixNQUFNLENBQUNDLGFBQWEsR0FBR0YsK0NBQVFBLENBQUM7SUFDaEMsTUFBTSxFQUFFRyxLQUFLLEVBQUVDLFdBQVcsRUFBRUMsUUFBUSxFQUFFQyxlQUFlLEVBQUVDLGNBQWMsRUFBRSxHQUFHVCxvRUFBWUEsQ0FBQ0k7SUFFdkZNLFFBQVFDLEdBQUcsQ0FBQ0YsaUJBQWlCO0lBRzdCLHFCQUNFOzswQkFDRSw4REFBQ1osNENBQWM7O29CQUFDO2tDQUNkLDhEQUFDQyw2REFBTUE7a0NBQUM7Ozs7OztvQkFBZTs7Ozs7OzswQkFHekIsOERBQUNHLDBEQUFRQTtnQkFBQ0csY0FBY0E7Z0JBQWNFLGFBQWFBOzs7Ozs7MEJBRW5ELDhEQUFDVCw0Q0FBYzs7a0NBQ2IsOERBQUNBLHlDQUFXOzs0QkFBQzswQ0FDTiw4REFBQ0UsOERBQVVBO2dDQUFDZSxRQUFRUjs7Ozs7Ozs7Ozs7O2tDQUUzQiw4REFBQ1M7OzRCQUFJOzBDQUNRLDhEQUFDaEIsOERBQVVBO2dDQUFDZSxRQUFRUDs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUluQyw4REFBQ1YsNENBQWM7O2tDQUNiLDhEQUFDQSx5Q0FBVztrQ0FDVFEsTUFBTVksR0FBRyxDQUFDLENBQUNILFFBQVFJOzRCQUNwQixNQUFNQyxXQUFXViwyQkFBQUEscUNBQUFBLGVBQWdCVyxRQUFRLENBQUNGOzRCQUN4QyxxQkFDRSw4REFBQ3JCLHlDQUFXO2dDQUVac0IsVUFBVztnQ0FDWCw4Q0FBOEM7Z0NBQzlDRyxTQUFTO29DQUNQZCxnQkFBZ0JVO2dDQUNsQjswQ0FDQ0osd0JBQVUsOERBQUNmLDhEQUFVQTtvQ0FBQ2UsUUFBUUE7Ozs7OzsrQkFOMUJJOzs7Ozt3QkFVUDs7Ozs7O2tDQUVKLDhEQUFDckIsMkNBQWE7OzBDQUNaLDhEQUFDQyw2REFBTUE7MENBQUM7Ozs7OzswQ0FDUiw4REFBQzBCOzBDQUFLOzs7Ozs7MENBQ04sOERBQUMxQiw2REFBTUE7MENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2xCO0dBbER3Qks7O1FBRW9ESCxnRUFBWUE7OztLQUZoRUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4PzdmZmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgU3R5bGVkIGZyb20gJy4vc3R5bGVzJztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvQnV0dG9uL0J1dHRvbic7XG5pbXBvcnQgeyBHZW1lU3ltYm9sIH0gZnJvbSAnLi4vY29tcG9uZW50cy9HZW1lU3ltYm9sJztcbmltcG9ydCB1c2VHYW1lU3RhdGUgZnJvbSAnLi4vY29tcG9uZW50cy91c2VHYW1lU3RhdGUnO1xuaW1wb3J0IHsgR2FtZUluZm8gfSBmcm9tICcuLi9jb21wb25lbnRzL0dhbWVJbmZvJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYW1lRmllbGQoKSB7XG4gIGNvbnN0IFtwbGF5ZXJzQ291bnRdID0gdXNlU3RhdGUoMik7XG4gIGNvbnN0IHsgY2VsbHMsIGN1cnJlbnRNb3ZlLCBuZXh0TW92ZSwgaGFuZGxlQ2VsbENsaWNrLCB3aW5uZXJTZXF1ZW5jZSB9ID0gdXNlR2FtZVN0YXRlKHBsYXllcnNDb3VudCk7XG5cbiAgY29uc29sZS5sb2cod2lubmVyU2VxdWVuY2UgKyBcItC/0L7QsdC10LTQsFwiKVxuXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFN0eWxlZC5XcmFwcGVyPi4uLi4uLi4uXG4gICAgICAgIDxCdXR0b24+0JjQs9GA0LDRgtGMPC9CdXR0b24+Li4uLi4uLi5cbiAgICAgIDwvU3R5bGVkLldyYXBwZXI+XG5cbiAgICAgIDxHYW1lSW5mbyBwbGF5ZXJzQ291bnQ9e3BsYXllcnNDb3VudH0gY3VycmVudE1vdmU9e2N1cnJlbnRNb3ZlfSAvPlxuICAgICAgXG4gICAgICA8U3R5bGVkLldyYXBwZXI+XG4gICAgICAgIDxTdHlsZWQuU3Bhbj5cbiAgICAgICAgICDQpdC+0LQ6IDxHZW1lU3ltYm9sIHN5bWJvbD17Y3VycmVudE1vdmV9IC8+XG4gICAgICAgIDwvU3R5bGVkLlNwYW4+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAg0KHQu9C10LTRg9GO0YnQuNC5OiA8R2VtZVN5bWJvbCBzeW1ib2w9e25leHRNb3ZlfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvU3R5bGVkLldyYXBwZXI+XG5cbiAgICAgIDxTdHlsZWQuV3JhcHBlcj5cbiAgICAgICAgPFN0eWxlZC5HcmlkPlxuICAgICAgICAgIHtjZWxscy5tYXAoKHN5bWJvbCwgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCBpc1dpbm5lciA9IHdpbm5lclNlcXVlbmNlPy5pbmNsdWRlcyhpbmRleCk7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8U3R5bGVkLkNlbGxcbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgaXNXaW5uZXI9e2B7aXNXaW5uZXJ9YH1cbiAgICAgICAgICAgICAgLy8gY2xhc3NOYW1lPXtgICR7aXNXaW5uZXIgPyAncmVkJyA6ICdub25lJ31gfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgaGFuZGxlQ2VsbENsaWNrKGluZGV4KTtcbiAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgIHtzeW1ib2wgJiYgPEdlbWVTeW1ib2wgc3ltYm9sPXtzeW1ib2x9IC8+fVxuICAgICAgICAgICAgPC9TdHlsZWQuQ2VsbD5cbiAgICAgICAgICAgIClcbiAgICAgICAgICAgXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgPC9TdHlsZWQuR3JpZD5cbiAgICAgICAgPFN0eWxlZC5DZW50ZXI+XG4gICAgICAgICAgPEJ1dHRvbj7QndC+0LLQsNGPINC40LPRgNCwPC9CdXR0b24+XG4gICAgICAgICAgPHNwYW4+IC4uLi4uLi4uLi4uIDwvc3Bhbj5cbiAgICAgICAgICA8QnV0dG9uPtCh0LTQsNGC0YzRgdGPPC9CdXR0b24+XG4gICAgICAgIDwvU3R5bGVkLkNlbnRlcj5cbiAgICAgIDwvU3R5bGVkLldyYXBwZXI+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiU3R5bGVkIiwiQnV0dG9uIiwiR2VtZVN5bWJvbCIsInVzZUdhbWVTdGF0ZSIsIkdhbWVJbmZvIiwidXNlU3RhdGUiLCJHYW1lRmllbGQiLCJwbGF5ZXJzQ291bnQiLCJjZWxscyIsImN1cnJlbnRNb3ZlIiwibmV4dE1vdmUiLCJoYW5kbGVDZWxsQ2xpY2siLCJ3aW5uZXJTZXF1ZW5jZSIsImNvbnNvbGUiLCJsb2ciLCJXcmFwcGVyIiwiU3BhbiIsInN5bWJvbCIsImRpdiIsIkdyaWQiLCJtYXAiLCJpbmRleCIsImlzV2lubmVyIiwiaW5jbHVkZXMiLCJDZWxsIiwib25DbGljayIsIkNlbnRlciIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ })

});