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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./pages/styles.js\");\n/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Button/Button */ \"./components/Button/Button.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst SYMBOL_X = \"X\";\nconst SYMBOL_O = \"O\";\nconst GAME_SYMBOLS = {\n    ZERO: \"zero\"\n};\nconst computeWinner = (cells)=>{\n    const lines = [\n        [\n            0,\n            1,\n            2\n        ],\n        [\n            3,\n            4,\n            5\n        ],\n        [\n            6,\n            7,\n            8\n        ],\n        [\n            0,\n            3,\n            6\n        ],\n        [\n            1,\n            4,\n            7\n        ],\n        [\n            2,\n            5,\n            8\n        ],\n        [\n            0,\n            4,\n            8\n        ],\n        [\n            2,\n            4,\n            6\n        ]\n    ];\n    for(let i = 0; i < lines.length; i++){\n        const [a, b, c] = lines[i];\n        if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {\n            return [\n                a,\n                b,\n                c\n            ];\n        }\n    }\n};\nfunction HomePage() {\n    _s();\n    const [cells, setCells] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        null,\n        null,\n        null,\n        null,\n        null,\n        null,\n        null,\n        null,\n        null\n    ]);\n    const [currentStep, setCurrentStep] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(SYMBOL_O);\n    const [winnerSequence, setWinnerSequence] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const handleCellClick = (index)=>{\n        if (cells[index] || winnerSequence || isDraw) {\n            return;\n        }\n        const cellsCopy = cells.slice();\n        cellsCopy[index] = currentStep;\n        const winner = computeWinner(cellsCopy);\n        setCells(cellsCopy);\n        setCurrentStep(currentStep === SYMBOL_O ? SYMBOL_X : SYMBOL_O);\n        setWinnerSequence(winner);\n    };\n    const getSymbolClassName = (symbol)=>{\n        if (symbol === SYMBOL_O) return \"symbol--o\";\n        if (symbol === SYMBOL_X) return \"symbol--x\";\n        return \"\";\n    };\n    const renderSymbol = (symbol)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.Span, {\n            className: \"symbol \".concat(getSymbolClassName(symbol)),\n            children: symbol\n        }, void 0, false, {\n            fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n            lineNumber: 68,\n            columnNumber: 5\n        }, this);\n    const winnerSymbol = winnerSequence ? cells[winnerSequence[0]] : undefined;\n    const isDraw = !winnerSequence && cells.filter((value)=>value).length === 9;\n    const newGame = ()=>{\n        setCells([\n            null,\n            null,\n            null,\n            null,\n            null,\n            null,\n            null,\n            null,\n            null\n        ]);\n        setCurrentStep(SYMBOL_X);\n        setWinnerSequence();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.Wrapper, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.Center, {\n                style: {\n                    fontSize: \"30px\"\n                },\n                children: [\n                    isDraw ? \"Ничья! \" : winnerSequence ? \"Победитель: \" : \"Ход: \",\n                    !isDraw && renderSymbol(winnerSymbol !== null && winnerSymbol !== void 0 ? winnerSymbol : currentStep)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.Grid, {\n                children: cells.map((symbol, index)=>{\n                    const isWinner = winnerSequence === null || winnerSequence === void 0 ? void 0 : winnerSequence.includes(index);\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.Cell, {\n                        className: \"cell \".concat(isWinner ? \"cell--win\" : \"\"),\n                        onClick: ()=>handleCellClick(index),\n                        children: symbol ? renderSymbol(symbol) : null\n                    }, index, false, {\n                        fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                        lineNumber: 92,\n                        columnNumber: 13\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.Center, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button_Button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                    onClick: newGame,\n                    children: \"Новая игра\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                    lineNumber: 103,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n                lineNumber: 102,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\pages\\\\index.jsx\",\n        lineNumber: 83,\n        columnNumber: 5\n    }, this);\n}\n_s(HomePage, \"BnXKDz9SQ9FKHEPaed9+aSwhWJU=\");\n_c = HomePage;\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LHFDQUFBQSxlQUFnQnlCLFFBQVEsQ0FBQ3RCO29CQUMxQyxxQkFDRSw4REFBQ3JCLHlDQUFXO3dCQUVWOEIsV0FBVyxRQUFvQyxPQUE1QlksV0FBVyxjQUFjO3dCQUM1Q0csU0FBUyxJQUFNekIsZ0JBQWdCQztrQ0FFOUJNLFNBQVNDLGFBQWFELFVBQVU7dUJBSjVCTjs7Ozs7Z0JBT1g7Ozs7OzswQkFFRiw4REFBQ3JCLDJDQUFhOzBCQUNaLDRFQUFDQyw2REFBTUE7b0JBQUM0QyxTQUFTVjs4QkFBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJbEM7R0ExRXdCckI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4PzdmZmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAqIGFzIFN0eWxlZCBmcm9tIFwiLi9zdHlsZXNcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCIuLi9jb21wb25lbnRzL0J1dHRvbi9CdXR0b25cIjtcblxuY29uc3QgU1lNQk9MX1ggPSBcIlhcIjtcbmNvbnN0IFNZTUJPTF9PID0gXCJPXCI7XG5cbmNvbnN0IEdBTUVfU1lNQk9MUyA9IHtcbiAgWkVSTzogXCJ6ZXJvXCIsXG4gIFxufVxuXG5jb25zdCBjb21wdXRlV2lubmVyID0gKGNlbGxzKSA9PiB7XG4gIGNvbnN0IGxpbmVzID0gW1xuICAgIFswLCAxLCAyXSxcbiAgICBbMywgNCwgNV0sXG4gICAgWzYsIDcsIDhdLFxuICAgIFswLCAzLCA2XSxcbiAgICBbMSwgNCwgN10sXG4gICAgWzIsIDUsIDhdLFxuICAgIFswLCA0LCA4XSxcbiAgICBbMiwgNCwgNl0sXG4gIF07XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IFthLCBiLCBjXSA9IGxpbmVzW2ldO1xuICAgIGlmIChjZWxsc1thXSAmJiBjZWxsc1thXSA9PT0gY2VsbHNbYl0gJiYgY2VsbHNbYV0gPT09IGNlbGxzW2NdKSB7XG4gICAgICByZXR1cm4gW2EsIGIsIGNdO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XG4gIGNvbnN0IFtjZWxscywgc2V0Q2VsbHNdID0gdXNlU3RhdGUoW1xuICAgIG51bGwsXG4gICAgbnVsbCxcbiAgICBudWxsLFxuICAgIG51bGwsXG4gICAgbnVsbCxcbiAgICBudWxsLFxuICAgIG51bGwsXG4gICAgbnVsbCxcbiAgICBudWxsLFxuICBdKTtcbiAgY29uc3QgW2N1cnJlbnRTdGVwLCBzZXRDdXJyZW50U3RlcF0gPSB1c2VTdGF0ZShTWU1CT0xfTyk7XG4gIGNvbnN0IFt3aW5uZXJTZXF1ZW5jZSwgc2V0V2lubmVyU2VxdWVuY2VdID0gdXNlU3RhdGUoKTtcblxuICBjb25zdCBoYW5kbGVDZWxsQ2xpY2sgPSAoaW5kZXgpID0+IHtcbiAgICBpZiAoY2VsbHNbaW5kZXhdIHx8IHdpbm5lclNlcXVlbmNlIHx8IGlzRHJhdykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBjZWxsc0NvcHkgPSBjZWxscy5zbGljZSgpO1xuICAgIGNlbGxzQ29weVtpbmRleF0gPSBjdXJyZW50U3RlcDtcbiAgICBjb25zdCB3aW5uZXIgPSBjb21wdXRlV2lubmVyKGNlbGxzQ29weSk7XG5cbiAgICBzZXRDZWxscyhjZWxsc0NvcHkpO1xuICAgIHNldEN1cnJlbnRTdGVwKGN1cnJlbnRTdGVwID09PSBTWU1CT0xfTyA/IFNZTUJPTF9YIDogU1lNQk9MX08pO1xuICAgIHNldFdpbm5lclNlcXVlbmNlKHdpbm5lcik7XG4gIH07XG5cbiAgY29uc3QgZ2V0U3ltYm9sQ2xhc3NOYW1lID0gKHN5bWJvbCkgPT4ge1xuICAgIGlmIChzeW1ib2wgPT09IFNZTUJPTF9PKSByZXR1cm4gXCJzeW1ib2wtLW9cIjtcbiAgICBpZiAoc3ltYm9sID09PSBTWU1CT0xfWCkgcmV0dXJuIFwic3ltYm9sLS14XCI7XG4gICAgcmV0dXJuIFwiXCI7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyU3ltYm9sID0gKHN5bWJvbCkgPT4gKFxuICAgIDxTdHlsZWQuU3BhbiBjbGFzc05hbWU9e2BzeW1ib2wgJHtnZXRTeW1ib2xDbGFzc05hbWUoc3ltYm9sKX1gfT5cbiAgICAgIHtzeW1ib2x9XG4gICAgPC9TdHlsZWQuU3Bhbj5cbiAgKTtcblxuICBjb25zdCB3aW5uZXJTeW1ib2wgPSB3aW5uZXJTZXF1ZW5jZSA/IGNlbGxzW3dpbm5lclNlcXVlbmNlWzBdXSA6IHVuZGVmaW5lZDtcbiAgY29uc3QgaXNEcmF3ID0gIXdpbm5lclNlcXVlbmNlICYmIGNlbGxzLmZpbHRlcigodmFsdWUpID0+IHZhbHVlKS5sZW5ndGggPT09IDk7XG5cbiAgY29uc3QgbmV3R2FtZSA9ICgpID0+IHtcbiAgICBzZXRDZWxscyhbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF0pO1xuICAgIHNldEN1cnJlbnRTdGVwKFNZTUJPTF9YKTtcbiAgICBzZXRXaW5uZXJTZXF1ZW5jZSgpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFN0eWxlZC5XcmFwcGVyPlxuICAgICAgPFN0eWxlZC5DZW50ZXIgc3R5bGU9e3sgZm9udFNpemU6IFwiMzBweFwiIH19PlxuICAgICAgICB7aXNEcmF3ID8gXCLQndC40YfRjNGPISBcIiA6IHdpbm5lclNlcXVlbmNlID8gXCLQn9C+0LHQtdC00LjRgtC10LvRjDogXCIgOiBcItCl0L7QtDogXCJ9XG4gICAgICAgIHshaXNEcmF3ICYmIHJlbmRlclN5bWJvbCh3aW5uZXJTeW1ib2wgPz8gY3VycmVudFN0ZXApfVxuICAgICAgPC9TdHlsZWQuQ2VudGVyPlxuICAgICAgPFN0eWxlZC5HcmlkPlxuICAgICAgICB7Y2VsbHMubWFwKChzeW1ib2wsIGluZGV4KSA9PiB7XG4gICAgICAgICAgY29uc3QgaXNXaW5uZXIgPSB3aW5uZXJTZXF1ZW5jZT8uaW5jbHVkZXMoaW5kZXgpO1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8U3R5bGVkLkNlbGxcbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgY2VsbCAke2lzV2lubmVyID8gXCJjZWxsLS13aW5cIiA6IFwiXCJ9YH1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ2VsbENsaWNrKGluZGV4KX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3N5bWJvbCA/IHJlbmRlclN5bWJvbChzeW1ib2wpIDogbnVsbH1cbiAgICAgICAgICAgIDwvU3R5bGVkLkNlbGw+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L1N0eWxlZC5HcmlkPlxuICAgICAgPFN0eWxlZC5DZW50ZXI+XG4gICAgICAgIDxCdXR0b24gb25DbGljaz17bmV3R2FtZX0+0J3QvtCy0LDRjyDQuNCz0YDQsDwvQnV0dG9uPlxuICAgICAgPC9TdHlsZWQuQ2VudGVyPlxuICAgIDwvU3R5bGVkLldyYXBwZXI+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJTdHlsZWQiLCJCdXR0b24iLCJTWU1CT0xfWCIsIlNZTUJPTF9PIiwiR0FNRV9TWU1CT0xTIiwiWkVSTyIsImNvbXB1dGVXaW5uZXIiLCJjZWxscyIsImxpbmVzIiwiaSIsImxlbmd0aCIsImEiLCJiIiwiYyIsIkhvbWVQYWdlIiwic2V0Q2VsbHMiLCJjdXJyZW50U3RlcCIsInNldEN1cnJlbnRTdGVwIiwid2lubmVyU2VxdWVuY2UiLCJzZXRXaW5uZXJTZXF1ZW5jZSIsImhhbmRsZUNlbGxDbGljayIsImluZGV4IiwiaXNEcmF3IiwiY2VsbHNDb3B5Iiwic2xpY2UiLCJ3aW5uZXIiLCJnZXRTeW1ib2xDbGFzc05hbWUiLCJzeW1ib2wiLCJyZW5kZXJTeW1ib2wiLCJTcGFuIiwiY2xhc3NOYW1lIiwid2lubmVyU3ltYm9sIiwidW5kZWZpbmVkIiwiZmlsdGVyIiwidmFsdWUiLCJuZXdHYW1lIiwiV3JhcHBlciIsIkNlbnRlciIsInN0eWxlIiwiZm9udFNpemUiLCJHcmlkIiwibWFwIiwiaXNXaW5uZXIiLCJpbmNsdWRlcyIsIkNlbGwiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ })

});