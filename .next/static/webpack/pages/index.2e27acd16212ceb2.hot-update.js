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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GameField; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./pages/styles.js\");\n/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Button/Button */ \"./components/Button/Button.jsx\");\n/* harmony import */ var _components_GemeSymbol__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/GemeSymbol */ \"./components/GemeSymbol.jsx\");\n/* harmony import */ var _components_useGameState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/useGameState */ \"./components/useGameState.jsx\");\n/* harmony import */ var _components_GameInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/GameInfo */ \"./components/GameInfo.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction GameField() {\n    _s();\n    const [playersCount] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(4);\n    const { cells, currentMove, nextMove, handleCellClick, winnerSequence, handlePlayerTimeOver, winnerSymbol } = (0,_components_useGameState__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(playersCount);\n    // console.log(winnerSequence + \"победа\")\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Wrapper, {\n                children: [\n                    \"........\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button_Button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                        children: \"Играть\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, this),\n                    \"........\"\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_GameInfo__WEBPACK_IMPORTED_MODULE_5__.GameInfo, {\n                playersCount: playersCount,\n                currentMove: currentMove,\n                isDisabled: !!winnerSymbol,\n                onPlayerTimeOver: handlePlayerTimeOver\n            }, void 0, false, {\n                fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Wrapper, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Span, {\n                        children: [\n                            \"Ход: \",\n                            !winnerSymbol && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_GemeSymbol__WEBPACK_IMPORTED_MODULE_3__.GemeSymbol, {\n                                symbol: currentMove\n                            }, void 0, false, {\n                                fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                                lineNumber: 24,\n                                columnNumber: 34\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"Следующий: \"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            \"Победитель:\",\n                            winnerSymbol && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_GemeSymbol__WEBPACK_IMPORTED_MODULE_3__.GemeSymbol, {\n                                symbol: winnerSymbol\n                            }, void 0, false, {\n                                fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                                lineNumber: 30,\n                                columnNumber: 28\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Wrapper, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Grid, {\n                        children: cells.map((symbol, index)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Cell, {\n                                $isWinner: winnerSequence === null || winnerSequence === void 0 ? void 0 : winnerSequence.includes(index),\n                                disabled: !!winnerSymbol,\n                                onClick: ()=>{\n                                    handleCellClick(index);\n                                },\n                                children: symbol && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_GemeSymbol__WEBPACK_IMPORTED_MODULE_3__.GemeSymbol, {\n                                    symbol: symbol\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 26\n                                }, this)\n                            }, index, false, {\n                                fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                                lineNumber: 38,\n                                columnNumber: 15\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Center, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button_Button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                children: \"Новая игра\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                                lineNumber: 50,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \" ........... \"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button_Button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                children: \"Сдаться\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                                lineNumber: 52,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(GameField, \"KI083tDtlj/D72xq+EPdnYE21x8=\", false, function() {\n    return [\n        _components_useGameState__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n_c = GameField;\nvar _c;\n$RefreshReg$(_c, \"GameField\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQW1DO0FBQ2tCO0FBQ0M7QUFDQTtBQUNKO0FBQ2pCO0FBRWxCLFNBQVNNOztJQUN0QixNQUFNLENBQUNDLGFBQWEsR0FBR0YsK0NBQVFBLENBQUM7SUFDaEMsTUFBTSxFQUFFRyxLQUFLLEVBQUVDLFdBQVcsRUFBRUMsUUFBUSxFQUFFQyxlQUFlLEVBQUVDLGNBQWMsRUFBRUMsb0JBQW9CLEVBQUVDLFlBQVksRUFBRSxHQUFHWCxvRUFBWUEsQ0FBQ0k7SUFFM0gseUNBQXlDO0lBRXpDLHFCQUNFOzswQkFDRSw4REFBQ1AsNENBQWM7O29CQUFDO2tDQUNkLDhEQUFDQyw2REFBTUE7a0NBQUM7Ozs7OztvQkFBZTs7Ozs7OzswQkFHekIsOERBQUNHLDBEQUFRQTtnQkFBQ0csY0FBY0E7Z0JBQWNFLGFBQWFBO2dCQUFhTyxZQUFZLENBQUMsQ0FBQ0Y7Z0JBQWNHLGtCQUFrQko7Ozs7OzswQkFFOUcsOERBQUNiLDRDQUFjOztrQ0FDYiw4REFBQ0EseUNBQVc7OzRCQUFDOzRCQUNMLENBQUNjLDhCQUFnQiw4REFBQ1osOERBQVVBO2dDQUFDaUIsUUFBUVY7Ozs7Ozs7Ozs7OztrQ0FFN0MsOERBQUNXO2tDQUFJOzs7Ozs7a0NBR0wsOERBQUNBOzs0QkFBSTs0QkFDRk4sOEJBQWdCLDhEQUFDWiw4REFBVUE7Z0NBQUNpQixRQUFRTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUl6Qyw4REFBQ2QsNENBQWM7O2tDQUNiLDhEQUFDQSx5Q0FBVztrQ0FDVFEsTUFBTWMsR0FBRyxDQUFDLENBQUNILFFBQVFJOzRCQUNsQixxQkFDRSw4REFBQ3ZCLHlDQUFXO2dDQUVaeUIsU0FBUyxFQUFJYiwyQkFBQUEscUNBQUFBLGVBQWdCYyxRQUFRLENBQUNIO2dDQUN0Q0ksVUFBVSxDQUFDLENBQUNiO2dDQUNaYyxTQUFTO29DQUNQakIsZ0JBQWdCWTtnQ0FDbEI7MENBQ0NKLHdCQUFVLDhEQUFDakIsOERBQVVBO29DQUFDaUIsUUFBUUE7Ozs7OzsrQkFOMUJJOzs7Ozt3QkFRTjs7Ozs7O2tDQUVMLDhEQUFDdkIsMkNBQWE7OzBDQUNaLDhEQUFDQyw2REFBTUE7MENBQUM7Ozs7OzswQ0FDUiw4REFBQzZCOzBDQUFLOzs7Ozs7MENBQ04sOERBQUM3Qiw2REFBTUE7MENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2xCO0dBakR3Qks7O1FBRXdGSCxnRUFBWUE7OztLQUZwR0ciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4PzdmZmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgU3R5bGVkIGZyb20gJy4vc3R5bGVzJztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvQnV0dG9uL0J1dHRvbic7XG5pbXBvcnQgeyBHZW1lU3ltYm9sIH0gZnJvbSAnLi4vY29tcG9uZW50cy9HZW1lU3ltYm9sJztcbmltcG9ydCB1c2VHYW1lU3RhdGUgZnJvbSAnLi4vY29tcG9uZW50cy91c2VHYW1lU3RhdGUnO1xuaW1wb3J0IHsgR2FtZUluZm8gfSBmcm9tICcuLi9jb21wb25lbnRzL0dhbWVJbmZvJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYW1lRmllbGQoKSB7XG4gIGNvbnN0IFtwbGF5ZXJzQ291bnRdID0gdXNlU3RhdGUoNCk7XG4gIGNvbnN0IHsgY2VsbHMsIGN1cnJlbnRNb3ZlLCBuZXh0TW92ZSwgaGFuZGxlQ2VsbENsaWNrLCB3aW5uZXJTZXF1ZW5jZSwgaGFuZGxlUGxheWVyVGltZU92ZXIsIHdpbm5lclN5bWJvbCB9ID0gdXNlR2FtZVN0YXRlKHBsYXllcnNDb3VudCk7XG5cbiAgLy8gY29uc29sZS5sb2cod2lubmVyU2VxdWVuY2UgKyBcItC/0L7QsdC10LTQsFwiKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxTdHlsZWQuV3JhcHBlcj4uLi4uLi4uLlxuICAgICAgICA8QnV0dG9uPtCY0LPRgNCw0YLRjDwvQnV0dG9uPi4uLi4uLi4uXG4gICAgICA8L1N0eWxlZC5XcmFwcGVyPlxuXG4gICAgICA8R2FtZUluZm8gcGxheWVyc0NvdW50PXtwbGF5ZXJzQ291bnR9IGN1cnJlbnRNb3ZlPXtjdXJyZW50TW92ZX0gaXNEaXNhYmxlZD17ISF3aW5uZXJTeW1ib2x9IG9uUGxheWVyVGltZU92ZXI9e2hhbmRsZVBsYXllclRpbWVPdmVyfS8+XG4gICAgICBcbiAgICAgIDxTdHlsZWQuV3JhcHBlcj5cbiAgICAgICAgPFN0eWxlZC5TcGFuPlxuICAgICAgICAgINCl0L7QtDogeyF3aW5uZXJTeW1ib2wgJiYgPEdlbWVTeW1ib2wgc3ltYm9sPXtjdXJyZW50TW92ZX0gLz59XG4gICAgICAgIDwvU3R5bGVkLlNwYW4+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAg0KHQu9C10LTRg9GO0YnQuNC5OiB7fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj7Qn9C+0LHQtdC00LjRgtC10LvRjDogXG4gICAgICAgICAge3dpbm5lclN5bWJvbCAmJiA8R2VtZVN5bWJvbCBzeW1ib2w9e3dpbm5lclN5bWJvbH0vPn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1N0eWxlZC5XcmFwcGVyPlxuXG4gICAgICA8U3R5bGVkLldyYXBwZXI+XG4gICAgICAgIDxTdHlsZWQuR3JpZD5cbiAgICAgICAgICB7Y2VsbHMubWFwKChzeW1ib2wsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8U3R5bGVkLkNlbGxcbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgJGlzV2lubmVyID0ge3dpbm5lclNlcXVlbmNlPy5pbmNsdWRlcyhpbmRleCl9XG4gICAgICAgICAgICAgIGRpc2FibGVkPXshIXdpbm5lclN5bWJvbH1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIGhhbmRsZUNlbGxDbGljayhpbmRleCk7XG4gICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICB7c3ltYm9sICYmIDxHZW1lU3ltYm9sIHN5bWJvbD17c3ltYm9sfSAvPn1cbiAgICAgICAgICAgIDwvU3R5bGVkLkNlbGw+XG4gICAgICAgICAgICApfSl9XG4gICAgICAgIDwvU3R5bGVkLkdyaWQ+XG4gICAgICAgIDxTdHlsZWQuQ2VudGVyPlxuICAgICAgICAgIDxCdXR0b24+0J3QvtCy0LDRjyDQuNCz0YDQsDwvQnV0dG9uPlxuICAgICAgICAgIDxzcGFuPiAuLi4uLi4uLi4uLiA8L3NwYW4+XG4gICAgICAgICAgPEJ1dHRvbj7QodC00LDRgtGM0YHRjzwvQnV0dG9uPlxuICAgICAgICA8L1N0eWxlZC5DZW50ZXI+XG4gICAgICA8L1N0eWxlZC5XcmFwcGVyPlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlN0eWxlZCIsIkJ1dHRvbiIsIkdlbWVTeW1ib2wiLCJ1c2VHYW1lU3RhdGUiLCJHYW1lSW5mbyIsInVzZVN0YXRlIiwiR2FtZUZpZWxkIiwicGxheWVyc0NvdW50IiwiY2VsbHMiLCJjdXJyZW50TW92ZSIsIm5leHRNb3ZlIiwiaGFuZGxlQ2VsbENsaWNrIiwid2lubmVyU2VxdWVuY2UiLCJoYW5kbGVQbGF5ZXJUaW1lT3ZlciIsIndpbm5lclN5bWJvbCIsIldyYXBwZXIiLCJpc0Rpc2FibGVkIiwib25QbGF5ZXJUaW1lT3ZlciIsIlNwYW4iLCJzeW1ib2wiLCJkaXYiLCJHcmlkIiwibWFwIiwiaW5kZXgiLCJDZWxsIiwiJGlzV2lubmVyIiwiaW5jbHVkZXMiLCJkaXNhYmxlZCIsIm9uQ2xpY2siLCJDZW50ZXIiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ })

});