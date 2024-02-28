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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameInfo: function() { return /* binding */ GameInfo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/styles */ \"./pages/styles.js\");\n/* harmony import */ var _components_GemeSymbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/GemeSymbol */ \"./components/GemeSymbol.jsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ \"./components/constants.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction GameInfo(cells, ne) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pages_styles__WEBPACK_IMPORTED_MODULE_1__.Wrapper, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pages_styles__WEBPACK_IMPORTED_MODULE_1__.GameInfo, {\n            children: _constants__WEBPACK_IMPORTED_MODULE_5__.players.slice(0, playersCount).map((player)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PlayerInfo, {\n                        playerInfo: player\n                    }, player.id, false, {\n                        fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\components\\\\GameInfo.jsx\",\n                        lineNumber: 14,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false))\n        }, void 0, false, {\n            fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\components\\\\GameInfo.jsx\",\n            lineNumber: 11,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\components\\\\GameInfo.jsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n_c = GameInfo;\nfunction PlayerInfo(param) {\n    let { playerInfo } = param;\n    _s();\n    const [seconds, setSeconds] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(6);\n    const minutesString = String(Math.floor(seconds / 60)).padStart(2, \"0\");\n    const secondsString = String(seconds % 60).padStart(2, \"0\");\n    const isDanger = seconds <= 10;\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        setInterval(()=>{\n            setSeconds((s)=>Math.max(s - 1, 0));\n        }, 1000);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Profile, {\n                name: playerInfo.name,\n                rating: playerInfo.rating,\n                avatar: playerInfo.avatar\n            }, void 0, false, {\n                fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\components\\\\GameInfo.jsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pages_styles__WEBPACK_IMPORTED_MODULE_1__.Icon, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_GemeSymbol__WEBPACK_IMPORTED_MODULE_2__.GemeSymbol, {\n                    symbol: playerInfo.symbol\n                }, void 0, false, {\n                    fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\components\\\\GameInfo.jsx\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\components\\\\GameInfo.jsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            !isDanger && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pages_styles__WEBPACK_IMPORTED_MODULE_1__.Timer, {\n                children: [\n                    minutesString,\n                    \":\",\n                    secondsString\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\components\\\\GameInfo.jsx\",\n                lineNumber: 44,\n                columnNumber: 9\n            }, this),\n            isDanger && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pages_styles__WEBPACK_IMPORTED_MODULE_1__.Timer, {\n                isDanger: true,\n                children: [\n                    minutesString,\n                    \":\",\n                    secondsString\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\components\\\\GameInfo.jsx\",\n                lineNumber: 49,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\components\\\\GameInfo.jsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this);\n}\n_s(PlayerInfo, \"6/P9w/Sv1uaHGQoXaLlR29COu7M=\");\n_c1 = PlayerInfo;\nfunction Profile(param) {\n    let { name, rating, avatar } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                src: avatar,\n                alt: \"foto\"\n            }, void 0, false, {\n                fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\components\\\\GameInfo.jsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pages_styles__WEBPACK_IMPORTED_MODULE_1__.Span, {\n                children: name\n            }, void 0, false, {\n                fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\components\\\\GameInfo.jsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pages_styles__WEBPACK_IMPORTED_MODULE_1__.Span, {\n                children: [\n                    \"Rating: \",\n                    rating\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\components\\\\GameInfo.jsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c2 = Profile;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"GameInfo\");\n$RefreshReg$(_c1, \"PlayerInfo\");\n$RefreshReg$(_c2, \"Profile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0dhbWVJbmZvLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBMEM7QUFDWTtBQUN2QjtBQUNhO0FBQ047QUFFL0IsU0FBU00sU0FBU0MsS0FBSyxFQUFFQyxFQUFFO0lBRWhDLHFCQUNFLDhEQUFDUixrREFBYztrQkFDYiw0RUFBQ0EsbURBQWU7c0JBQ2JLLCtDQUFPQSxDQUFDSyxLQUFLLENBQUMsR0FBR0MsY0FBY0MsR0FBRyxDQUFDLENBQUNDLHVCQUNuQzs4QkFDRSw0RUFBQ0M7d0JBQTJCQyxZQUFZRjt1QkFBdkJBLE9BQU9HLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNdEM7S0FiZ0JWO0FBZWhCLFNBQVNRLFdBQVcsS0FBYztRQUFkLEVBQUVDLFVBQVUsRUFBRSxHQUFkOztJQUNsQixNQUFNLENBQUNFLFNBQVNDLFdBQVcsR0FBR2QsK0NBQVFBLENBQUM7SUFFdkMsTUFBTWUsZ0JBQWdCQyxPQUFPQyxLQUFLQyxLQUFLLENBQUNMLFVBQVUsS0FBS00sUUFBUSxDQUFDLEdBQUc7SUFDbkUsTUFBTUMsZ0JBQWdCSixPQUFPSCxVQUFVLElBQUlNLFFBQVEsQ0FBQyxHQUFHO0lBRXZELE1BQU1FLFdBQVdSLFdBQVc7SUFFNUJkLGdEQUFTQSxDQUFDO1FBQ1J1QixZQUFZO1lBQ1ZSLFdBQVcsQ0FBQ1MsSUFBTU4sS0FBS08sR0FBRyxDQUFDRCxJQUFJLEdBQUc7UUFDcEMsR0FBRztJQUNMLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDRTs7MEJBQ0MsOERBQUNDO2dCQUFRQyxNQUFNaEIsV0FBV2dCLElBQUk7Z0JBQUVDLFFBQVFqQixXQUFXaUIsTUFBTTtnQkFBRUMsUUFBUWxCLFdBQVdrQixNQUFNOzs7Ozs7MEJBQ3BGLDhEQUFDakMsK0NBQVc7MEJBQ1YsNEVBQUNDLDhEQUFVQTtvQkFBQ2tDLFFBQVFwQixXQUFXb0IsTUFBTTs7Ozs7Ozs7Ozs7WUFHdEMsQ0FBQ1YsMEJBQ0EsOERBQUN6QixnREFBWTs7b0JBQ1ZtQjtvQkFBYztvQkFBRUs7Ozs7Ozs7WUFHcEJDLDBCQUNDLDhEQUFDekIsZ0RBQVk7Z0JBQUN5QixRQUFROztvQkFDbkJOO29CQUFjO29CQUFFSzs7Ozs7Ozs7Ozs7OztBQUszQjtHQWpDU1Y7TUFBQUE7QUFtQ1QsU0FBU2dCLFFBQVEsS0FBd0I7UUFBeEIsRUFBRUMsSUFBSSxFQUFFQyxNQUFNLEVBQUVDLE1BQU0sRUFBRSxHQUF4QjtJQUNmLHFCQUNFOzswQkFDRSw4REFBQy9CLG1EQUFLQTtnQkFBQ21DLEtBQUtKO2dCQUFRSyxLQUFJOzs7Ozs7MEJBQ3hCLDhEQUFDdEMsK0NBQVc7MEJBQUUrQjs7Ozs7OzBCQUNkLDhEQUFDL0IsK0NBQVc7O29CQUFDO29CQUFTZ0M7Ozs7Ozs7OztBQUc1QjtNQVJTRiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0dhbWVJbmZvLmpzeD9jMGFlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFN0eWxlZCBmcm9tICcuLi9wYWdlcy9zdHlsZXMnO1xyXG5pbXBvcnQgeyBHZW1lU3ltYm9sIH0gZnJvbSAnLi4vY29tcG9uZW50cy9HZW1lU3ltYm9sJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBwbGF5ZXJzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdhbWVJbmZvKGNlbGxzLCBuZSkge1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFN0eWxlZC5XcmFwcGVyPlxyXG4gICAgICA8U3R5bGVkLkdhbWVJbmZvPlxyXG4gICAgICAgIHtwbGF5ZXJzLnNsaWNlKDAsIHBsYXllcnNDb3VudCkubWFwKChwbGF5ZXIpID0+IChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxQbGF5ZXJJbmZvIGtleT17cGxheWVyLmlkfSBwbGF5ZXJJbmZvPXtwbGF5ZXJ9IC8+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9TdHlsZWQuR2FtZUluZm8+XHJcbiAgICA8L1N0eWxlZC5XcmFwcGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFBsYXllckluZm8oeyBwbGF5ZXJJbmZvIH0pIHtcclxuICBjb25zdCBbc2Vjb25kcywgc2V0U2Vjb25kc10gPSB1c2VTdGF0ZSg2KTtcclxuXHJcbiAgY29uc3QgbWludXRlc1N0cmluZyA9IFN0cmluZyhNYXRoLmZsb29yKHNlY29uZHMgLyA2MCkpLnBhZFN0YXJ0KDIsICcwJyk7XHJcbiAgY29uc3Qgc2Vjb25kc1N0cmluZyA9IFN0cmluZyhzZWNvbmRzICUgNjApLnBhZFN0YXJ0KDIsICcwJyk7XHJcblxyXG4gIGNvbnN0IGlzRGFuZ2VyID0gc2Vjb25kcyA8PSAxMDtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgc2V0U2Vjb25kcygocykgPT4gTWF0aC5tYXgocyAtIDEsIDApKTtcclxuICAgIH0sIDEwMDApO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxQcm9maWxlIG5hbWU9e3BsYXllckluZm8ubmFtZX0gcmF0aW5nPXtwbGF5ZXJJbmZvLnJhdGluZ30gYXZhdGFyPXtwbGF5ZXJJbmZvLmF2YXRhcn0gLz5cclxuICAgICAgPFN0eWxlZC5JY29uPlxyXG4gICAgICAgIDxHZW1lU3ltYm9sIHN5bWJvbD17cGxheWVySW5mby5zeW1ib2x9IC8+XHJcbiAgICAgIDwvU3R5bGVkLkljb24+XHJcbiAgICAgIHsvKiDQv9C10YDQtdC00LXQu9Cw0YLRjCDRg9GB0LvQvtCy0L3QvtC1INC+0YLQvtCx0YDQsNC20LXQvdC40LUgKi99XHJcbiAgICAgIHshaXNEYW5nZXIgJiYgKFxyXG4gICAgICAgIDxTdHlsZWQuVGltZXI+XHJcbiAgICAgICAgICB7bWludXRlc1N0cmluZ306e3NlY29uZHNTdHJpbmd9XHJcbiAgICAgICAgPC9TdHlsZWQuVGltZXI+XHJcbiAgICAgICl9XHJcbiAgICAgIHtpc0RhbmdlciAmJiAoXHJcbiAgICAgICAgPFN0eWxlZC5UaW1lciBpc0Rhbmdlcj5cclxuICAgICAgICAgIHttaW51dGVzU3RyaW5nfTp7c2Vjb25kc1N0cmluZ31cclxuICAgICAgICA8L1N0eWxlZC5UaW1lcj5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFByb2ZpbGUoeyBuYW1lLCByYXRpbmcsIGF2YXRhciB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxJbWFnZSBzcmM9e2F2YXRhcn0gYWx0PVwiZm90b1wiIC8+XHJcbiAgICAgIDxTdHlsZWQuU3Bhbj57bmFtZX08L1N0eWxlZC5TcGFuPlxyXG4gICAgICA8U3R5bGVkLlNwYW4+UmF0aW5nOiB7cmF0aW5nfTwvU3R5bGVkLlNwYW4+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJTdHlsZWQiLCJHZW1lU3ltYm9sIiwiSW1hZ2UiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInBsYXllcnMiLCJHYW1lSW5mbyIsImNlbGxzIiwibmUiLCJXcmFwcGVyIiwic2xpY2UiLCJwbGF5ZXJzQ291bnQiLCJtYXAiLCJwbGF5ZXIiLCJQbGF5ZXJJbmZvIiwicGxheWVySW5mbyIsImlkIiwic2Vjb25kcyIsInNldFNlY29uZHMiLCJtaW51dGVzU3RyaW5nIiwiU3RyaW5nIiwiTWF0aCIsImZsb29yIiwicGFkU3RhcnQiLCJzZWNvbmRzU3RyaW5nIiwiaXNEYW5nZXIiLCJzZXRJbnRlcnZhbCIsInMiLCJtYXgiLCJkaXYiLCJQcm9maWxlIiwibmFtZSIsInJhdGluZyIsImF2YXRhciIsIkljb24iLCJzeW1ib2wiLCJUaW1lciIsInNyYyIsImFsdCIsIlNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/GameInfo.jsx\n"));

/***/ })

});