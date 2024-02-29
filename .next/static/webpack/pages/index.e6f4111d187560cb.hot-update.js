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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GameField; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./pages/styles.js\");\n/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Button/Button */ \"./components/Button/Button.jsx\");\n/* harmony import */ var _components_GemeSymbol__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/GemeSymbol */ \"./components/GemeSymbol.jsx\");\n/* harmony import */ var _components_useGameState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/useGameState */ \"./components/useGameState.jsx\");\n/* harmony import */ var _components_GameInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/GameInfo */ \"./components/GameInfo.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/model */ \"./components/model.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction GameField() {\n    _s();\n    const [playersCount] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(2);\n    const { cells, currentMove, nextMove, handleCellClick } = (0,_components_useGameState__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(playersCount);\n    // окрас победных ячеек\n    const winnerSequence = (0,_components_model__WEBPACK_IMPORTED_MODULE_7__.computeWinner)(cells);\n    let isWinner = false;\n    if (winnerSequence) {\n        isWinner = true;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Wrapper, {\n                children: [\n                    \"........\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button_Button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                        children: \"Играть\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, this),\n                    \"........\"\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_GameInfo__WEBPACK_IMPORTED_MODULE_5__.GameInfo, {\n                playersCount: playersCount,\n                currentMove: currentMove\n            }, void 0, false, {\n                fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Wrapper, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Span, {\n                        children: [\n                            \"Ход: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_GemeSymbol__WEBPACK_IMPORTED_MODULE_3__.GemeSymbol, {\n                                symbol: currentMove\n                            }, void 0, false, {\n                                fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                                lineNumber: 31,\n                                columnNumber: 16\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            \"Следующий: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_GemeSymbol__WEBPACK_IMPORTED_MODULE_3__.GemeSymbol, {\n                                symbol: nextMove\n                            }, void 0, false, {\n                                fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                                lineNumber: 34,\n                                columnNumber: 22\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Wrapper, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Grid, {\n                        children: cells.map((symbol, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Cell, {\n                                // isWinner = {winnerSequence?.includes(index)}\n                                isWinner: isWinner,\n                                onClick: ()=>{\n                                    handleCellClick(index);\n                                },\n                                children: symbol && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_GemeSymbol__WEBPACK_IMPORTED_MODULE_3__.GemeSymbol, {\n                                    symbol: symbol\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 26\n                                }, this)\n                            }, index, false, {\n                                fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                                lineNumber: 41,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Center, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button_Button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                children: \"Новая игра\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                                lineNumber: 54,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \" ........... \"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                                lineNumber: 55,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button_Button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                children: \"Сдаться\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                                lineNumber: 56,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(GameField, \"oqnu0bHsnUZsWbA/jRh0eQz1n9E=\", false, function() {\n    return [\n        _components_useGameState__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n_c = GameField;\nvar _c;\n$RefreshReg$(_c, \"GameField\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFtQztBQUNrQjtBQUNDO0FBQ0E7QUFDSjtBQUNqQjtBQUNtQjtBQUVyQyxTQUFTTzs7SUFDdEIsTUFBTSxDQUFDQyxhQUFhLEdBQUdILCtDQUFRQSxDQUFDO0lBQ2hDLE1BQU0sRUFBRUksS0FBSyxFQUFFQyxXQUFXLEVBQUVDLFFBQVEsRUFBRUMsZUFBZSxFQUFFLEdBQUdULG9FQUFZQSxDQUFDSztJQUV2RSx1QkFBdUI7SUFDdkIsTUFBTUssaUJBQWlCUCxnRUFBYUEsQ0FBQ0c7SUFDckMsSUFBSUssV0FBVztJQUVmLElBQUlELGdCQUFnQjtRQUNsQkMsV0FBVztJQUNiO0lBRUEscUJBQ0U7OzBCQUNFLDhEQUFDZCw0Q0FBYzs7b0JBQUM7a0NBQ2QsOERBQUNDLDZEQUFNQTtrQ0FBQzs7Ozs7O29CQUFlOzs7Ozs7OzBCQUd6Qiw4REFBQ0csMERBQVFBO2dCQUFDSSxjQUFjQTtnQkFBY0UsYUFBYUE7Ozs7OzswQkFFbkQsOERBQUNWLDRDQUFjOztrQ0FDYiw4REFBQ0EseUNBQVc7OzRCQUFDOzBDQUNOLDhEQUFDRSw4REFBVUE7Z0NBQUNlLFFBQVFQOzs7Ozs7Ozs7Ozs7a0NBRTNCLDhEQUFDUTs7NEJBQUk7MENBQ1EsOERBQUNoQiw4REFBVUE7Z0NBQUNlLFFBQVFOOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSW5DLDhEQUFDWCw0Q0FBYzs7a0NBQ2IsOERBQUNBLHlDQUFXO2tDQUNUUyxNQUFNVyxHQUFHLENBQUMsQ0FBQ0gsUUFBUUksc0JBQ2xCLDhEQUFDckIseUNBQVc7Z0NBRVYsK0NBQStDO2dDQUMvQ2MsVUFBWUE7Z0NBRVpTLFNBQVM7b0NBQ1BYLGdCQUFnQlM7Z0NBQ2xCOzBDQUNDSix3QkFBVSw4REFBQ2YsOERBQVVBO29DQUFDZSxRQUFRQTs7Ozs7OytCQVAxQkk7Ozs7Ozs7Ozs7a0NBV1gsOERBQUNyQiwyQ0FBYTs7MENBQ1osOERBQUNDLDZEQUFNQTswQ0FBQzs7Ozs7OzBDQUNSLDhEQUFDd0I7MENBQUs7Ozs7OzswQ0FDTiw4REFBQ3hCLDZEQUFNQTswQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLbEI7R0FwRHdCTTs7UUFFb0NKLGdFQUFZQTs7O0tBRmhESSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qc3g/N2ZmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBTdHlsZWQgZnJvbSAnLi9zdHlsZXMnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vY29tcG9uZW50cy9CdXR0b24vQnV0dG9uJztcbmltcG9ydCB7IEdlbWVTeW1ib2wgfSBmcm9tICcuLi9jb21wb25lbnRzL0dlbWVTeW1ib2wnO1xuaW1wb3J0IHVzZUdhbWVTdGF0ZSBmcm9tICcuLi9jb21wb25lbnRzL3VzZUdhbWVTdGF0ZSc7XG5pbXBvcnQgeyBHYW1lSW5mbyB9IGZyb20gJy4uL2NvbXBvbmVudHMvR2FtZUluZm8nO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb21wdXRlV2lubmVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9tb2RlbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdhbWVGaWVsZCgpIHtcbiAgY29uc3QgW3BsYXllcnNDb3VudF0gPSB1c2VTdGF0ZSgyKTtcbiAgY29uc3QgeyBjZWxscywgY3VycmVudE1vdmUsIG5leHRNb3ZlLCBoYW5kbGVDZWxsQ2xpY2sgfSA9IHVzZUdhbWVTdGF0ZShwbGF5ZXJzQ291bnQpO1xuXG4gIC8vINC+0LrRgNCw0YEg0L/QvtCx0LXQtNC90YvRhSDRj9GH0LXQtdC6XG4gIGNvbnN0IHdpbm5lclNlcXVlbmNlID0gY29tcHV0ZVdpbm5lcihjZWxscyk7XG4gIGxldCBpc1dpbm5lciA9IGZhbHNlO1xuXG4gIGlmICh3aW5uZXJTZXF1ZW5jZSkge1xuICAgIGlzV2lubmVyID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxTdHlsZWQuV3JhcHBlcj4uLi4uLi4uLlxuICAgICAgICA8QnV0dG9uPtCY0LPRgNCw0YLRjDwvQnV0dG9uPi4uLi4uLi4uXG4gICAgICA8L1N0eWxlZC5XcmFwcGVyPlxuXG4gICAgICA8R2FtZUluZm8gcGxheWVyc0NvdW50PXtwbGF5ZXJzQ291bnR9IGN1cnJlbnRNb3ZlPXtjdXJyZW50TW92ZX0gLz5cbiAgICAgIFxuICAgICAgPFN0eWxlZC5XcmFwcGVyPlxuICAgICAgICA8U3R5bGVkLlNwYW4+XG4gICAgICAgICAg0KXQvtC0OiA8R2VtZVN5bWJvbCBzeW1ib2w9e2N1cnJlbnRNb3ZlfSAvPlxuICAgICAgICA8L1N0eWxlZC5TcGFuPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgINCh0LvQtdC00YPRjtGJ0LjQuTogPEdlbWVTeW1ib2wgc3ltYm9sPXtuZXh0TW92ZX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1N0eWxlZC5XcmFwcGVyPlxuXG4gICAgICA8U3R5bGVkLldyYXBwZXI+XG4gICAgICAgIDxTdHlsZWQuR3JpZD5cbiAgICAgICAgICB7Y2VsbHMubWFwKChzeW1ib2wsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8U3R5bGVkLkNlbGxcbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgLy8gaXNXaW5uZXIgPSB7d2lubmVyU2VxdWVuY2U/LmluY2x1ZGVzKGluZGV4KX1cbiAgICAgICAgICAgICAgaXNXaW5uZXIgPSB7aXNXaW5uZXJ9XG5cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIGhhbmRsZUNlbGxDbGljayhpbmRleCk7XG4gICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICB7c3ltYm9sICYmIDxHZW1lU3ltYm9sIHN5bWJvbD17c3ltYm9sfSAvPn1cbiAgICAgICAgICAgIDwvU3R5bGVkLkNlbGw+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvU3R5bGVkLkdyaWQ+XG4gICAgICAgIDxTdHlsZWQuQ2VudGVyPlxuICAgICAgICAgIDxCdXR0b24+0J3QvtCy0LDRjyDQuNCz0YDQsDwvQnV0dG9uPlxuICAgICAgICAgIDxzcGFuPiAuLi4uLi4uLi4uLiA8L3NwYW4+XG4gICAgICAgICAgPEJ1dHRvbj7QodC00LDRgtGM0YHRjzwvQnV0dG9uPlxuICAgICAgICA8L1N0eWxlZC5DZW50ZXI+XG4gICAgICA8L1N0eWxlZC5XcmFwcGVyPlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlN0eWxlZCIsIkJ1dHRvbiIsIkdlbWVTeW1ib2wiLCJ1c2VHYW1lU3RhdGUiLCJHYW1lSW5mbyIsInVzZVN0YXRlIiwiY29tcHV0ZVdpbm5lciIsIkdhbWVGaWVsZCIsInBsYXllcnNDb3VudCIsImNlbGxzIiwiY3VycmVudE1vdmUiLCJuZXh0TW92ZSIsImhhbmRsZUNlbGxDbGljayIsIndpbm5lclNlcXVlbmNlIiwiaXNXaW5uZXIiLCJXcmFwcGVyIiwiU3BhbiIsInN5bWJvbCIsImRpdiIsIkdyaWQiLCJtYXAiLCJpbmRleCIsIkNlbGwiLCJvbkNsaWNrIiwiQ2VudGVyIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ })

});