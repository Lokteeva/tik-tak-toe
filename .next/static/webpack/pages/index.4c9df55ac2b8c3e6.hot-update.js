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

/***/ "./components/GameInfo.jsx":
/*!*********************************!*\
  !*** ./components/GameInfo.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameInfo: function() { return /* binding */ GameInfo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/styles */ \"./pages/styles.js\");\n/* harmony import */ var _components_GemeSymbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/GemeSymbol */ \"./components/GemeSymbol.jsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ \"./components/constants.jsx\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\nfunction GameInfo() {\n    _s();\n    const [playersCount] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(2);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pages_styles__WEBPACK_IMPORTED_MODULE_1__.Wrapper, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pages_styles__WEBPACK_IMPORTED_MODULE_1__.GameInfo, {\n            children: _constants__WEBPACK_IMPORTED_MODULE_5__.players.slice(0, playersCount).map((player)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PlayerInfo, {\n                        playerInfo: player\n                    }, player.id, false, {\n                        fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\components\\\\GameInfo.jsx\",\n                        lineNumber: 15,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false))\n        }, void 0, false, {\n            fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\components\\\\GameInfo.jsx\",\n            lineNumber: 12,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\components\\\\GameInfo.jsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n_s(GameInfo, \"MeE+GbZNW4H752MRP6+GCJDKdNc=\");\n_c = GameInfo;\nfunction PlayerInfo(param) {\n    let { playerInfo } = param;\n    _s1();\n    const [seconds, setSeconds] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(8);\n    const isDanger = seconds < 10;\n    const minutesString = String(Math.floor(seconds / 60)).padStart(2, \"0\");\n    const secondsString = String(seconds % 60).padStart(2, \"0\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Profile, {\n                name: playerInfo.name,\n                rating: playerInfo.rating,\n                avatar: playerInfo.avatar\n            }, void 0, false, {\n                fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\components\\\\GameInfo.jsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pages_styles__WEBPACK_IMPORTED_MODULE_1__.Icon, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_GemeSymbol__WEBPACK_IMPORTED_MODULE_2__.GemeSymbol, {\n                    symbol: playerInfo.symbol\n                }, void 0, false, {\n                    fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\components\\\\GameInfo.jsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\components\\\\GameInfo.jsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            !isDanger && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pages_styles__WEBPACK_IMPORTED_MODULE_1__.Timer, {\n                children: [\n                    minutesString,\n                    \":\",\n                    secondsString\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\components\\\\GameInfo.jsx\",\n                lineNumber: 37,\n                columnNumber: 21\n            }, this),\n            isDanger && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pages_styles__WEBPACK_IMPORTED_MODULE_1__.Timer, {\n                isDanger: true,\n                children: [\n                    minutesString,\n                    \":\",\n                    secondsString\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\components\\\\GameInfo.jsx\",\n                lineNumber: 38,\n                columnNumber: 20\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\components\\\\GameInfo.jsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n_s1(PlayerInfo, \"96/JjFLhHMYxW4LmiMcYM1vrk40=\");\n_c1 = PlayerInfo;\nfunction Profile(param) {\n    let { name, rating, avatar } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                src: avatar,\n                alt: \"foto\"\n            }, void 0, false, {\n                fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\components\\\\GameInfo.jsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pages_styles__WEBPACK_IMPORTED_MODULE_1__.Span, {\n                children: name\n            }, void 0, false, {\n                fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\components\\\\GameInfo.jsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pages_styles__WEBPACK_IMPORTED_MODULE_1__.Span, {\n                children: [\n                    \"Rating: \",\n                    rating\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\components\\\\GameInfo.jsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c2 = Profile;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"GameInfo\");\n$RefreshReg$(_c1, \"PlayerInfo\");\n$RefreshReg$(_c2, \"Profile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0dhbWVJbmZvLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBMEM7QUFDWTtBQUN2QjtBQUNFO0FBQ0s7QUFFL0IsU0FBU0s7O0lBQ2QsTUFBTSxDQUFDQyxhQUFhLEdBQUdILCtDQUFRQSxDQUFDO0lBRWhDLHFCQUNFLDhEQUFDSCxrREFBYztrQkFDYiw0RUFBQ0EsbURBQWU7c0JBQ2ZJLCtDQUFPQSxDQUFDSSxLQUFLLENBQUMsR0FBR0YsY0FBY0csR0FBRyxDQUFDLENBQUNDLHVCQUNuQzs4QkFDSSw0RUFBQ0M7d0JBQTJCQyxZQUFZRjt1QkFBdkJBLE9BQU9HLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNdEM7R0FkZ0JSO0tBQUFBO0FBZ0JoQixTQUFTTSxXQUFXLEtBQWM7UUFBZCxFQUFFQyxVQUFVLEVBQUUsR0FBZDs7SUFDbEIsTUFBTSxDQUFDRSxTQUFTQyxXQUFXLEdBQUdaLCtDQUFRQSxDQUFDO0lBRXZDLE1BQU1hLFdBQVdGLFVBQVU7SUFFM0IsTUFBTUcsZ0JBQWdCQyxPQUFPQyxLQUFLQyxLQUFLLENBQUNOLFVBQVUsS0FBS08sUUFBUSxDQUFDLEdBQUc7SUFDbkUsTUFBTUMsZ0JBQWdCSixPQUFPSixVQUFVLElBQUlPLFFBQVEsQ0FBQyxHQUFHO0lBRXZELHFCQUNFLDhEQUFDRTs7MEJBQ0MsOERBQUNDO2dCQUFRQyxNQUFNYixXQUFXYSxJQUFJO2dCQUFFQyxRQUFRZCxXQUFXYyxNQUFNO2dCQUFFQyxRQUFRZixXQUFXZSxNQUFNOzs7Ozs7MEJBQ3BGLDhEQUFDM0IsK0NBQVc7MEJBQ1YsNEVBQUNDLDhEQUFVQTtvQkFBQzRCLFFBQVFqQixXQUFXaUIsTUFBTTs7Ozs7Ozs7Ozs7WUFFdEMsQ0FBQ2IsMEJBQVksOERBQUNoQixnREFBWTs7b0JBQUdpQjtvQkFBYztvQkFBRUs7Ozs7Ozs7WUFDN0NOLDBCQUFZLDhEQUFDaEIsZ0RBQVk7Z0JBQUNnQixRQUFROztvQkFBRUM7b0JBQWM7b0JBQUVLOzs7Ozs7Ozs7Ozs7O0FBRzNEO0lBbEJTWDtNQUFBQTtBQW9CVCxTQUFTYSxRQUFRLEtBQXdCO1FBQXhCLEVBQUVDLElBQUksRUFBRUMsTUFBTSxFQUFFQyxNQUFNLEVBQUUsR0FBeEI7SUFDZixxQkFDRTs7MEJBQ0UsOERBQUN6QixtREFBS0E7Z0JBQUM2QixLQUFLSjtnQkFBUUssS0FBSTs7Ozs7OzBCQUN4Qiw4REFBQ2hDLCtDQUFXOzBCQUFFeUI7Ozs7OzswQkFDZCw4REFBQ3pCLCtDQUFXOztvQkFBQztvQkFBUzBCOzs7Ozs7Ozs7QUFHNUI7TUFSU0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HYW1lSW5mby5qc3g/YzBhZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBTdHlsZWQgZnJvbSAnLi4vcGFnZXMvc3R5bGVzJztcclxuaW1wb3J0IHsgR2VtZVN5bWJvbCB9IGZyb20gJy4uL2NvbXBvbmVudHMvR2VtZVN5bWJvbCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHBsYXllcnMgfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gR2FtZUluZm8oKSB7XHJcbiAgY29uc3QgW3BsYXllcnNDb3VudF0gPSB1c2VTdGF0ZSgyKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTdHlsZWQuV3JhcHBlcj5cclxuICAgICAgPFN0eWxlZC5HYW1lSW5mbz5cclxuICAgICAge3BsYXllcnMuc2xpY2UoMCwgcGxheWVyc0NvdW50KS5tYXAoKHBsYXllcikgPT4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxQbGF5ZXJJbmZvIGtleT17cGxheWVyLmlkfSBwbGF5ZXJJbmZvPXtwbGF5ZXJ9IC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICkpfVxyXG4gICAgICA8L1N0eWxlZC5HYW1lSW5mbz5cclxuICAgIDwvU3R5bGVkLldyYXBwZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gUGxheWVySW5mbyh7IHBsYXllckluZm8gfSkge1xyXG4gIGNvbnN0IFtzZWNvbmRzLCBzZXRTZWNvbmRzXSA9IHVzZVN0YXRlKDgpO1xyXG5cclxuICBjb25zdCBpc0RhbmdlciA9IHNlY29uZHMgPCAxMDtcclxuXHJcbiAgY29uc3QgbWludXRlc1N0cmluZyA9IFN0cmluZyhNYXRoLmZsb29yKHNlY29uZHMgLyA2MCkpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcclxuICBjb25zdCBzZWNvbmRzU3RyaW5nID0gU3RyaW5nKHNlY29uZHMgJSA2MCkucGFkU3RhcnQoMiwgXCIwXCIpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPFByb2ZpbGUgbmFtZT17cGxheWVySW5mby5uYW1lfSByYXRpbmc9e3BsYXllckluZm8ucmF0aW5nfSBhdmF0YXI9e3BsYXllckluZm8uYXZhdGFyfSAvPlxyXG4gICAgICA8U3R5bGVkLkljb24+XHJcbiAgICAgICAgPEdlbWVTeW1ib2wgc3ltYm9sPXtwbGF5ZXJJbmZvLnN5bWJvbH0gLz5cclxuICAgICAgPC9TdHlsZWQuSWNvbj5cclxuICAgICAgeyFpc0RhbmdlciAmJiA8U3R5bGVkLlRpbWVyID57bWludXRlc1N0cmluZ306e3NlY29uZHNTdHJpbmd9PC9TdHlsZWQuVGltZXI+fVxyXG4gICAgICB7aXNEYW5nZXIgJiYgPFN0eWxlZC5UaW1lciBpc0Rhbmdlcj57bWludXRlc1N0cmluZ306e3NlY29uZHNTdHJpbmd9PC9TdHlsZWQuVGltZXI+fVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gUHJvZmlsZSh7IG5hbWUsIHJhdGluZywgYXZhdGFyIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEltYWdlIHNyYz17YXZhdGFyfSBhbHQ9XCJmb3RvXCIgLz5cclxuICAgICAgPFN0eWxlZC5TcGFuPntuYW1lfTwvU3R5bGVkLlNwYW4+XHJcbiAgICAgIDxTdHlsZWQuU3Bhbj5SYXRpbmc6IHtyYXRpbmd9PC9TdHlsZWQuU3Bhbj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlN0eWxlZCIsIkdlbWVTeW1ib2wiLCJJbWFnZSIsInVzZVN0YXRlIiwicGxheWVycyIsIkdhbWVJbmZvIiwicGxheWVyc0NvdW50IiwiV3JhcHBlciIsInNsaWNlIiwibWFwIiwicGxheWVyIiwiUGxheWVySW5mbyIsInBsYXllckluZm8iLCJpZCIsInNlY29uZHMiLCJzZXRTZWNvbmRzIiwiaXNEYW5nZXIiLCJtaW51dGVzU3RyaW5nIiwiU3RyaW5nIiwiTWF0aCIsImZsb29yIiwicGFkU3RhcnQiLCJzZWNvbmRzU3RyaW5nIiwiZGl2IiwiUHJvZmlsZSIsIm5hbWUiLCJyYXRpbmciLCJhdmF0YXIiLCJJY29uIiwic3ltYm9sIiwiVGltZXIiLCJzcmMiLCJhbHQiLCJTcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/GameInfo.jsx\n"));

/***/ })

});