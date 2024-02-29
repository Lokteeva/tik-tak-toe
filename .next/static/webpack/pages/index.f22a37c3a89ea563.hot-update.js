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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GameField; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./pages/styles.js\");\n/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Button/Button */ \"./components/Button/Button.jsx\");\n/* harmony import */ var _components_GemeSymbol__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/GemeSymbol */ \"./components/GemeSymbol.jsx\");\n/* harmony import */ var _components_useGameState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/useGameState */ \"./components/useGameState.jsx\");\n/* harmony import */ var _components_GameInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/GameInfo */ \"./components/GameInfo.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction GameField() {\n    _s();\n    const [playersCount] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(2);\n    const { cells, currentMove, nextMove, handleCellClick, winnerSequence } = (0,_components_useGameState__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(playersCount);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Wrapper, {\n                children: [\n                    \"........\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button_Button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                        children: \"Играть\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, this),\n                    \"........\"\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_GameInfo__WEBPACK_IMPORTED_MODULE_5__.GameInfo, {\n                playersCount: playersCount,\n                currentMove: currentMove\n            }, void 0, false, {\n                fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Wrapper, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Span, {\n                        children: [\n                            \"Ход: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_GemeSymbol__WEBPACK_IMPORTED_MODULE_3__.GemeSymbol, {\n                                symbol: currentMove\n                            }, void 0, false, {\n                                fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                                lineNumber: 23,\n                                columnNumber: 16\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            \"Следующий: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_GemeSymbol__WEBPACK_IMPORTED_MODULE_3__.GemeSymbol, {\n                                symbol: nextMove\n                            }, void 0, false, {\n                                fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                                lineNumber: 26,\n                                columnNumber: 22\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Wrapper, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Grid, {\n                        children: cells.map((symbol, index)=>{\n                            const isWinner = winnerSequence === null || winnerSequence === void 0 ? void 0 : winnerSequence.includes(index);\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Cell, {\n                                isWinner: isWinner,\n                                className: \" \".concat(isWinner ? \"red\" : \"\"),\n                                onClick: ()=>{\n                                    handleCellClick(index);\n                                },\n                                children: symbol && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_GemeSymbol__WEBPACK_IMPORTED_MODULE_3__.GemeSymbol, {\n                                    symbol: symbol\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 26\n                                }, this)\n                            }, index, false, {\n                                fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                                lineNumber: 35,\n                                columnNumber: 15\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Center, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button_Button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                children: \"Новая игра\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                                lineNumber: 49,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \" ........... \"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                                lineNumber: 50,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button_Button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                children: \"Сдаться\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(GameField, \"UzADp2Vw7/st9Z6yTPonHJUuti4=\", false, function() {\n    return [\n        _components_useGameState__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n_c = GameField;\nvar _c;\n$RefreshReg$(_c, \"GameField\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQW1DO0FBQ2tCO0FBQ0M7QUFDQTtBQUNKO0FBQ2pCO0FBRWxCLFNBQVNNOztJQUN0QixNQUFNLENBQUNDLGFBQWEsR0FBR0YsK0NBQVFBLENBQUM7SUFDaEMsTUFBTSxFQUFFRyxLQUFLLEVBQUVDLFdBQVcsRUFBRUMsUUFBUSxFQUFFQyxlQUFlLEVBQUVDLGNBQWMsRUFBRSxHQUFHVCxvRUFBWUEsQ0FBQ0k7SUFHdkYscUJBQ0U7OzBCQUNFLDhEQUFDUCw0Q0FBYzs7b0JBQUM7a0NBQ2QsOERBQUNDLDZEQUFNQTtrQ0FBQzs7Ozs7O29CQUFlOzs7Ozs7OzBCQUd6Qiw4REFBQ0csMERBQVFBO2dCQUFDRyxjQUFjQTtnQkFBY0UsYUFBYUE7Ozs7OzswQkFFbkQsOERBQUNULDRDQUFjOztrQ0FDYiw4REFBQ0EseUNBQVc7OzRCQUFDOzBDQUNOLDhEQUFDRSw4REFBVUE7Z0NBQUNhLFFBQVFOOzs7Ozs7Ozs7Ozs7a0NBRTNCLDhEQUFDTzs7NEJBQUk7MENBQ1EsOERBQUNkLDhEQUFVQTtnQ0FBQ2EsUUFBUUw7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFJbkMsOERBQUNWLDRDQUFjOztrQ0FDYiw4REFBQ0EseUNBQVc7a0NBQ1RRLE1BQU1VLEdBQUcsQ0FBQyxDQUFDSCxRQUFRSTs0QkFDcEIsTUFBTUMsV0FBV1IsMkJBQUFBLHFDQUFBQSxlQUFnQlMsUUFBUSxDQUFDRjs0QkFDeEMscUJBQ0UsOERBQUNuQix5Q0FBVztnQ0FFWm9CLFVBQVlBO2dDQUNaRyxXQUFXLElBQTBCLE9BQXRCSCxXQUFXLFFBQVE7Z0NBQ2xDSSxTQUFTO29DQUNQYixnQkFBZ0JRO2dDQUNsQjswQ0FDQ0osd0JBQVUsOERBQUNiLDhEQUFVQTtvQ0FBQ2EsUUFBUUE7Ozs7OzsrQkFOMUJJOzs7Ozt3QkFVUDs7Ozs7O2tDQUVKLDhEQUFDbkIsMkNBQWE7OzBDQUNaLDhEQUFDQyw2REFBTUE7MENBQUM7Ozs7OzswQ0FDUiw4REFBQ3lCOzBDQUFLOzs7Ozs7MENBQ04sOERBQUN6Qiw2REFBTUE7MENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2xCO0dBaER3Qks7O1FBRW9ESCxnRUFBWUE7OztLQUZoRUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4PzdmZmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgU3R5bGVkIGZyb20gJy4vc3R5bGVzJztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvQnV0dG9uL0J1dHRvbic7XG5pbXBvcnQgeyBHZW1lU3ltYm9sIH0gZnJvbSAnLi4vY29tcG9uZW50cy9HZW1lU3ltYm9sJztcbmltcG9ydCB1c2VHYW1lU3RhdGUgZnJvbSAnLi4vY29tcG9uZW50cy91c2VHYW1lU3RhdGUnO1xuaW1wb3J0IHsgR2FtZUluZm8gfSBmcm9tICcuLi9jb21wb25lbnRzL0dhbWVJbmZvJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYW1lRmllbGQoKSB7XG4gIGNvbnN0IFtwbGF5ZXJzQ291bnRdID0gdXNlU3RhdGUoMik7XG4gIGNvbnN0IHsgY2VsbHMsIGN1cnJlbnRNb3ZlLCBuZXh0TW92ZSwgaGFuZGxlQ2VsbENsaWNrLCB3aW5uZXJTZXF1ZW5jZSB9ID0gdXNlR2FtZVN0YXRlKHBsYXllcnNDb3VudCk7XG5cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8U3R5bGVkLldyYXBwZXI+Li4uLi4uLi5cbiAgICAgICAgPEJ1dHRvbj7QmNCz0YDQsNGC0Yw8L0J1dHRvbj4uLi4uLi4uLlxuICAgICAgPC9TdHlsZWQuV3JhcHBlcj5cblxuICAgICAgPEdhbWVJbmZvIHBsYXllcnNDb3VudD17cGxheWVyc0NvdW50fSBjdXJyZW50TW92ZT17Y3VycmVudE1vdmV9IC8+XG4gICAgICBcbiAgICAgIDxTdHlsZWQuV3JhcHBlcj5cbiAgICAgICAgPFN0eWxlZC5TcGFuPlxuICAgICAgICAgINCl0L7QtDogPEdlbWVTeW1ib2wgc3ltYm9sPXtjdXJyZW50TW92ZX0gLz5cbiAgICAgICAgPC9TdHlsZWQuU3Bhbj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICDQodC70LXQtNGD0Y7RidC40Lk6IDxHZW1lU3ltYm9sIHN5bWJvbD17bmV4dE1vdmV9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9TdHlsZWQuV3JhcHBlcj5cblxuICAgICAgPFN0eWxlZC5XcmFwcGVyPlxuICAgICAgICA8U3R5bGVkLkdyaWQ+XG4gICAgICAgICAge2NlbGxzLm1hcCgoc3ltYm9sLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGlzV2lubmVyID0gd2lubmVyU2VxdWVuY2U/LmluY2x1ZGVzKGluZGV4KTtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxTdHlsZWQuQ2VsbFxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICBpc1dpbm5lciA9IHtpc1dpbm5lcn1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgICR7aXNXaW5uZXIgPyAncmVkJyA6ICcnfWB9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICBoYW5kbGVDZWxsQ2xpY2soaW5kZXgpO1xuICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAge3N5bWJvbCAmJiA8R2VtZVN5bWJvbCBzeW1ib2w9e3N5bWJvbH0gLz59XG4gICAgICAgICAgICA8L1N0eWxlZC5DZWxsPlxuICAgICAgICAgICAgKVxuICAgICAgICAgICBcbiAgICAgICAgICAgIH0pfVxuICAgICAgICA8L1N0eWxlZC5HcmlkPlxuICAgICAgICA8U3R5bGVkLkNlbnRlcj5cbiAgICAgICAgICA8QnV0dG9uPtCd0L7QstCw0Y8g0LjQs9GA0LA8L0J1dHRvbj5cbiAgICAgICAgICA8c3Bhbj4gLi4uLi4uLi4uLi4gPC9zcGFuPlxuICAgICAgICAgIDxCdXR0b24+0KHQtNCw0YLRjNGB0Y88L0J1dHRvbj5cbiAgICAgICAgPC9TdHlsZWQuQ2VudGVyPlxuICAgICAgPC9TdHlsZWQuV3JhcHBlcj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJTdHlsZWQiLCJCdXR0b24iLCJHZW1lU3ltYm9sIiwidXNlR2FtZVN0YXRlIiwiR2FtZUluZm8iLCJ1c2VTdGF0ZSIsIkdhbWVGaWVsZCIsInBsYXllcnNDb3VudCIsImNlbGxzIiwiY3VycmVudE1vdmUiLCJuZXh0TW92ZSIsImhhbmRsZUNlbGxDbGljayIsIndpbm5lclNlcXVlbmNlIiwiV3JhcHBlciIsIlNwYW4iLCJzeW1ib2wiLCJkaXYiLCJHcmlkIiwibWFwIiwiaW5kZXgiLCJpc1dpbm5lciIsImluY2x1ZGVzIiwiQ2VsbCIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJDZW50ZXIiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ })

});