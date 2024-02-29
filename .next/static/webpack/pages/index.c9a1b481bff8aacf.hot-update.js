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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GameField; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./pages/styles.js\");\n/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Button/Button */ \"./components/Button/Button.jsx\");\n/* harmony import */ var _components_GemeSymbol__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/GemeSymbol */ \"./components/GemeSymbol.jsx\");\n/* harmony import */ var _components_useGameState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/useGameState */ \"./components/useGameState.jsx\");\n/* harmony import */ var _components_GameInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/GameInfo */ \"./components/GameInfo.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/model */ \"./components/model.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction GameField() {\n    _s();\n    const [playersCount] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(2);\n    const { cells, currentMove, nextMove, handleCellClick } = (0,_components_useGameState__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(playersCount);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Wrapper, {\n                children: [\n                    \"........\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button_Button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                        children: \"Играть\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, this),\n                    \"........\"\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_GameInfo__WEBPACK_IMPORTED_MODULE_5__.GameInfo, {\n                playersCount: playersCount,\n                currentMove: currentMove\n            }, void 0, false, {\n                fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Wrapper, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Span, {\n                        children: [\n                            \"Ход: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_GemeSymbol__WEBPACK_IMPORTED_MODULE_3__.GemeSymbol, {\n                                symbol: currentMove\n                            }, void 0, false, {\n                                fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                                lineNumber: 24,\n                                columnNumber: 16\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            \"Следующий: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_GemeSymbol__WEBPACK_IMPORTED_MODULE_3__.GemeSymbol, {\n                                symbol: nextMove\n                            }, void 0, false, {\n                                fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                                lineNumber: 27,\n                                columnNumber: 22\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Wrapper, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Grid, {\n                        children: cells.map((symbol, index)=>{\n                            var _winnerSequenc;\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Cell, {\n                                isWinner: (_winnerSequenc = winnerSequenc) === null || _winnerSequenc === void 0 ? void 0 : _winnerSequenc.includes(index),\n                                onClick: ()=>{\n                                    handleCellClick(index);\n                                },\n                                children: symbol && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_GemeSymbol__WEBPACK_IMPORTED_MODULE_3__.GemeSymbol, {\n                                    symbol: symbol\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 26\n                                }, this)\n                            }, index, false, {\n                                fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                                lineNumber: 34,\n                                columnNumber: 13\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Center, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button_Button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                children: \"Новая игра\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                                lineNumber: 46,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \" ........... \"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                                lineNumber: 47,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button_Button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                children: \"Сдаться\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                                lineNumber: 48,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(GameField, \"oqnu0bHsnUZsWbA/jRh0eQz1n9E=\", false, function() {\n    return [\n        _components_useGameState__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n_c = GameField;\nvar _c;\n$RefreshReg$(_c, \"GameField\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFtQztBQUNrQjtBQUNDO0FBQ0E7QUFDSjtBQUNqQjtBQUNtQjtBQUVyQyxTQUFTTzs7SUFDdEIsTUFBTSxDQUFDQyxhQUFhLEdBQUdILCtDQUFRQSxDQUFDO0lBQ2hDLE1BQU0sRUFBRUksS0FBSyxFQUFFQyxXQUFXLEVBQUVDLFFBQVEsRUFBRUMsZUFBZSxFQUFFLEdBQUdULG9FQUFZQSxDQUFDSztJQUd2RSxxQkFDRTs7MEJBQ0UsOERBQUNSLDRDQUFjOztvQkFBQztrQ0FDZCw4REFBQ0MsNkRBQU1BO2tDQUFDOzs7Ozs7b0JBQWU7Ozs7Ozs7MEJBR3pCLDhEQUFDRywwREFBUUE7Z0JBQUNJLGNBQWNBO2dCQUFjRSxhQUFhQTs7Ozs7OzBCQUVuRCw4REFBQ1YsNENBQWM7O2tDQUNiLDhEQUFDQSx5Q0FBVzs7NEJBQUM7MENBQ04sOERBQUNFLDhEQUFVQTtnQ0FBQ2EsUUFBUUw7Ozs7Ozs7Ozs7OztrQ0FFM0IsOERBQUNNOzs0QkFBSTswQ0FDUSw4REFBQ2QsOERBQVVBO2dDQUFDYSxRQUFRSjs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUluQyw4REFBQ1gsNENBQWM7O2tDQUNiLDhEQUFDQSx5Q0FBVztrQ0FDVFMsTUFBTVMsR0FBRyxDQUFDLENBQUNILFFBQVFJO2dDQUdKQztpREFGZCw4REFBQ3BCLHlDQUFXO2dDQUVWc0IsUUFBUSxHQUFJRixpQkFBQUEsMkJBQUFBLHFDQUFBQSxlQUFlRyxRQUFRLENBQUNKO2dDQUVwQ0ssU0FBUztvQ0FDUFosZ0JBQWdCTztnQ0FDbEI7MENBQ0NKLHdCQUFVLDhEQUFDYiw4REFBVUE7b0NBQUNhLFFBQVFBOzs7Ozs7K0JBTjFCSTs7Ozs7Ozs7Ozs7a0NBVVgsOERBQUNuQiwyQ0FBYTs7MENBQ1osOERBQUNDLDZEQUFNQTswQ0FBQzs7Ozs7OzBDQUNSLDhEQUFDeUI7MENBQUs7Ozs7OzswQ0FDTiw4REFBQ3pCLDZEQUFNQTswQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLbEI7R0E1Q3dCTTs7UUFFb0NKLGdFQUFZQTs7O0tBRmhESSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qc3g/N2ZmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBTdHlsZWQgZnJvbSAnLi9zdHlsZXMnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vY29tcG9uZW50cy9CdXR0b24vQnV0dG9uJztcbmltcG9ydCB7IEdlbWVTeW1ib2wgfSBmcm9tICcuLi9jb21wb25lbnRzL0dlbWVTeW1ib2wnO1xuaW1wb3J0IHVzZUdhbWVTdGF0ZSBmcm9tICcuLi9jb21wb25lbnRzL3VzZUdhbWVTdGF0ZSc7XG5pbXBvcnQgeyBHYW1lSW5mbyB9IGZyb20gJy4uL2NvbXBvbmVudHMvR2FtZUluZm8nO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb21wdXRlV2lubmVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9tb2RlbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdhbWVGaWVsZCgpIHtcbiAgY29uc3QgW3BsYXllcnNDb3VudF0gPSB1c2VTdGF0ZSgyKTtcbiAgY29uc3QgeyBjZWxscywgY3VycmVudE1vdmUsIG5leHRNb3ZlLCBoYW5kbGVDZWxsQ2xpY2sgfSA9IHVzZUdhbWVTdGF0ZShwbGF5ZXJzQ291bnQpO1xuXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFN0eWxlZC5XcmFwcGVyPi4uLi4uLi4uXG4gICAgICAgIDxCdXR0b24+0JjQs9GA0LDRgtGMPC9CdXR0b24+Li4uLi4uLi5cbiAgICAgIDwvU3R5bGVkLldyYXBwZXI+XG5cbiAgICAgIDxHYW1lSW5mbyBwbGF5ZXJzQ291bnQ9e3BsYXllcnNDb3VudH0gY3VycmVudE1vdmU9e2N1cnJlbnRNb3ZlfSAvPlxuICAgICAgXG4gICAgICA8U3R5bGVkLldyYXBwZXI+XG4gICAgICAgIDxTdHlsZWQuU3Bhbj5cbiAgICAgICAgICDQpdC+0LQ6IDxHZW1lU3ltYm9sIHN5bWJvbD17Y3VycmVudE1vdmV9IC8+XG4gICAgICAgIDwvU3R5bGVkLlNwYW4+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAg0KHQu9C10LTRg9GO0YnQuNC5OiA8R2VtZVN5bWJvbCBzeW1ib2w9e25leHRNb3ZlfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvU3R5bGVkLldyYXBwZXI+XG5cbiAgICAgIDxTdHlsZWQuV3JhcHBlcj5cbiAgICAgICAgPFN0eWxlZC5HcmlkPlxuICAgICAgICAgIHtjZWxscy5tYXAoKHN5bWJvbCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxTdHlsZWQuQ2VsbFxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICBpc1dpbm5lciA9IHt3aW5uZXJTZXF1ZW5jPy5pbmNsdWRlcyhpbmRleCl9XG5cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIGhhbmRsZUNlbGxDbGljayhpbmRleCk7XG4gICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICB7c3ltYm9sICYmIDxHZW1lU3ltYm9sIHN5bWJvbD17c3ltYm9sfSAvPn1cbiAgICAgICAgICAgIDwvU3R5bGVkLkNlbGw+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvU3R5bGVkLkdyaWQ+XG4gICAgICAgIDxTdHlsZWQuQ2VudGVyPlxuICAgICAgICAgIDxCdXR0b24+0J3QvtCy0LDRjyDQuNCz0YDQsDwvQnV0dG9uPlxuICAgICAgICAgIDxzcGFuPiAuLi4uLi4uLi4uLiA8L3NwYW4+XG4gICAgICAgICAgPEJ1dHRvbj7QodC00LDRgtGM0YHRjzwvQnV0dG9uPlxuICAgICAgICA8L1N0eWxlZC5DZW50ZXI+XG4gICAgICA8L1N0eWxlZC5XcmFwcGVyPlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlN0eWxlZCIsIkJ1dHRvbiIsIkdlbWVTeW1ib2wiLCJ1c2VHYW1lU3RhdGUiLCJHYW1lSW5mbyIsInVzZVN0YXRlIiwiY29tcHV0ZVdpbm5lciIsIkdhbWVGaWVsZCIsInBsYXllcnNDb3VudCIsImNlbGxzIiwiY3VycmVudE1vdmUiLCJuZXh0TW92ZSIsImhhbmRsZUNlbGxDbGljayIsIldyYXBwZXIiLCJTcGFuIiwic3ltYm9sIiwiZGl2IiwiR3JpZCIsIm1hcCIsImluZGV4Iiwid2lubmVyU2VxdWVuYyIsIkNlbGwiLCJpc1dpbm5lciIsImluY2x1ZGVzIiwib25DbGljayIsIkNlbnRlciIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ })

});