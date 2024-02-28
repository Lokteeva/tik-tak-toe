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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameInfo: function() { return /* binding */ GameInfo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/styles */ \"./pages/styles.js\");\n/* harmony import */ var _components_GemeSymbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/GemeSymbol */ \"./components/GemeSymbol.jsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ \"./components/constants.jsx\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\nfunction GameInfo() {\n    _s();\n    const [playersCount] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(2);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pages_styles__WEBPACK_IMPORTED_MODULE_1__.Wrapper, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pages_styles__WEBPACK_IMPORTED_MODULE_1__.GameInfo, {\n            children: _constants__WEBPACK_IMPORTED_MODULE_5__.players.slice(0, playersCount).map((player)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PlayerInfo, {\n                        playerInfo: player\n                    }, player.id, false, {\n                        fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\components\\\\GameInfo.jsx\",\n                        lineNumber: 15,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false))\n        }, void 0, false, {\n            fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\components\\\\GameInfo.jsx\",\n            lineNumber: 12,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\components\\\\GameInfo.jsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n_s(GameInfo, \"MeE+GbZNW4H752MRP6+GCJDKdNc=\");\n_c = GameInfo;\nfunction PlayerInfo(param) {\n    let { playerInfo } = param;\n    _s1();\n    const [seconds, setSeconds] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(60);\n    const minutesString = String(Math.floor(seconds / 60)).padStart(2, \"0\");\n    const secondsString = String(seconds % 60).padStart(2, \"0\");\n    const isDanger = seconds <= 10;\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{});\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Profile, {\n                name: playerInfo.name,\n                rating: playerInfo.rating,\n                avatar: playerInfo.avatar\n            }, void 0, false, {\n                fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\components\\\\GameInfo.jsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pages_styles__WEBPACK_IMPORTED_MODULE_1__.Icon, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_GemeSymbol__WEBPACK_IMPORTED_MODULE_2__.GemeSymbol, {\n                    symbol: playerInfo.symbol\n                }, void 0, false, {\n                    fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\components\\\\GameInfo.jsx\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\components\\\\GameInfo.jsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            !isDanger && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pages_styles__WEBPACK_IMPORTED_MODULE_1__.Timer, {\n                children: [\n                    minutesString,\n                    \":\",\n                    secondsString\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\components\\\\GameInfo.jsx\",\n                lineNumber: 40,\n                columnNumber: 21\n            }, this),\n            isDanger && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pages_styles__WEBPACK_IMPORTED_MODULE_1__.Timer, {\n                isDanger: true,\n                children: [\n                    minutesString,\n                    \":\",\n                    secondsString\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\components\\\\GameInfo.jsx\",\n                lineNumber: 41,\n                columnNumber: 20\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\components\\\\GameInfo.jsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n_s1(PlayerInfo, \"T5PhQ9L5KSVb8XiZCZPVWhaJCbk=\");\n_c1 = PlayerInfo;\nfunction Profile(param) {\n    let { name, rating, avatar } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                src: avatar,\n                alt: \"foto\"\n            }, void 0, false, {\n                fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\components\\\\GameInfo.jsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pages_styles__WEBPACK_IMPORTED_MODULE_1__.Span, {\n                children: name\n            }, void 0, false, {\n                fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\components\\\\GameInfo.jsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pages_styles__WEBPACK_IMPORTED_MODULE_1__.Span, {\n                children: [\n                    \"Rating: \",\n                    rating\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\1. React\\\\tik-tak-toe\\\\components\\\\GameInfo.jsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c2 = Profile;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"GameInfo\");\n$RefreshReg$(_c1, \"PlayerInfo\");\n$RefreshReg$(_c2, \"Profile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0dhbWVJbmZvLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBMEM7QUFDWTtBQUN2QjtBQUNhO0FBQ047QUFFL0IsU0FBU007O0lBQ2QsTUFBTSxDQUFDQyxhQUFhLEdBQUdILCtDQUFRQSxDQUFDO0lBRWhDLHFCQUNFLDhEQUFDSixrREFBYztrQkFDYiw0RUFBQ0EsbURBQWU7c0JBQ2ZLLCtDQUFPQSxDQUFDSSxLQUFLLENBQUMsR0FBR0YsY0FBY0csR0FBRyxDQUFDLENBQUNDLHVCQUNuQzs4QkFDSSw0RUFBQ0M7d0JBQTJCQyxZQUFZRjt1QkFBdkJBLE9BQU9HLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNdEM7R0FkZ0JSO0tBQUFBO0FBZ0JoQixTQUFTTSxXQUFXLEtBQWM7UUFBZCxFQUFFQyxVQUFVLEVBQUUsR0FBZDs7SUFDbEIsTUFBTSxDQUFDRSxTQUFTQyxXQUFXLEdBQUdaLCtDQUFRQSxDQUFDO0lBRXZDLE1BQU1hLGdCQUFnQkMsT0FBT0MsS0FBS0MsS0FBSyxDQUFDTCxVQUFVLEtBQUtNLFFBQVEsQ0FBQyxHQUFHO0lBQ25FLE1BQU1DLGdCQUFnQkosT0FBT0gsVUFBVSxJQUFJTSxRQUFRLENBQUMsR0FBRztJQUV2RCxNQUFNRSxXQUFXUixXQUFXO0lBRTVCWixnREFBU0EsQ0FBQyxLQUFNO0lBRWhCLHFCQUNFLDhEQUFDcUI7OzBCQUNDLDhEQUFDQztnQkFBUUMsTUFBTWIsV0FBV2EsSUFBSTtnQkFBRUMsUUFBUWQsV0FBV2MsTUFBTTtnQkFBRUMsUUFBUWYsV0FBV2UsTUFBTTs7Ozs7OzBCQUNwRiw4REFBQzVCLCtDQUFXOzBCQUNWLDRFQUFDQyw4REFBVUE7b0JBQUM2QixRQUFRakIsV0FBV2lCLE1BQU07Ozs7Ozs7Ozs7O1lBR3RDLENBQUNQLDBCQUFZLDhEQUFDdkIsZ0RBQVk7O29CQUFHaUI7b0JBQWM7b0JBQUVLOzs7Ozs7O1lBQzdDQywwQkFBWSw4REFBQ3ZCLGdEQUFZO2dCQUFDdUIsUUFBUTs7b0JBQUVOO29CQUFjO29CQUFFSzs7Ozs7Ozs7Ozs7OztBQUczRDtJQXJCU1Y7TUFBQUE7QUF1QlQsU0FBU2EsUUFBUSxLQUF3QjtRQUF4QixFQUFFQyxJQUFJLEVBQUVDLE1BQU0sRUFBRUMsTUFBTSxFQUFFLEdBQXhCO0lBQ2YscUJBQ0U7OzBCQUNFLDhEQUFDMUIsbURBQUtBO2dCQUFDOEIsS0FBS0o7Z0JBQVFLLEtBQUk7Ozs7OzswQkFDeEIsOERBQUNqQywrQ0FBVzswQkFBRTBCOzs7Ozs7MEJBQ2QsOERBQUMxQiwrQ0FBVzs7b0JBQUM7b0JBQVMyQjs7Ozs7Ozs7O0FBRzVCO01BUlNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvR2FtZUluZm8uanN4P2MwYWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgU3R5bGVkIGZyb20gJy4uL3BhZ2VzL3N0eWxlcyc7XHJcbmltcG9ydCB7IEdlbWVTeW1ib2wgfSBmcm9tICcuLi9jb21wb25lbnRzL0dlbWVTeW1ib2wnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHBsYXllcnMgfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gR2FtZUluZm8oKSB7XHJcbiAgY29uc3QgW3BsYXllcnNDb3VudF0gPSB1c2VTdGF0ZSgyKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTdHlsZWQuV3JhcHBlcj5cclxuICAgICAgPFN0eWxlZC5HYW1lSW5mbz5cclxuICAgICAge3BsYXllcnMuc2xpY2UoMCwgcGxheWVyc0NvdW50KS5tYXAoKHBsYXllcikgPT4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxQbGF5ZXJJbmZvIGtleT17cGxheWVyLmlkfSBwbGF5ZXJJbmZvPXtwbGF5ZXJ9IC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICkpfVxyXG4gICAgICA8L1N0eWxlZC5HYW1lSW5mbz5cclxuICAgIDwvU3R5bGVkLldyYXBwZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gUGxheWVySW5mbyh7IHBsYXllckluZm8gfSkge1xyXG4gIGNvbnN0IFtzZWNvbmRzLCBzZXRTZWNvbmRzXSA9IHVzZVN0YXRlKDYwKTtcclxuICBcclxuICBjb25zdCBtaW51dGVzU3RyaW5nID0gU3RyaW5nKE1hdGguZmxvb3Ioc2Vjb25kcyAvIDYwKSkucGFkU3RhcnQoMiwgXCIwXCIpO1xyXG4gIGNvbnN0IHNlY29uZHNTdHJpbmcgPSBTdHJpbmcoc2Vjb25kcyAlIDYwKS5wYWRTdGFydCgyLCBcIjBcIik7XHJcbiAgXHJcbiAgY29uc3QgaXNEYW5nZXIgPSBzZWNvbmRzIDw9IDEwO1xyXG5cclxuICB1c2VFZmZlY3QoKCk9PiB7fSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxQcm9maWxlIG5hbWU9e3BsYXllckluZm8ubmFtZX0gcmF0aW5nPXtwbGF5ZXJJbmZvLnJhdGluZ30gYXZhdGFyPXtwbGF5ZXJJbmZvLmF2YXRhcn0gLz5cclxuICAgICAgPFN0eWxlZC5JY29uPlxyXG4gICAgICAgIDxHZW1lU3ltYm9sIHN5bWJvbD17cGxheWVySW5mby5zeW1ib2x9IC8+XHJcbiAgICAgIDwvU3R5bGVkLkljb24+XHJcbiAgICAgIHsvKiDQv9C10YDQtdC00LXQu9Cw0YLRjCDRg9GB0LvQvtCy0L3QvtC1INC+0YLQvtCx0YDQsNC20LXQvdC40LUgKi99XHJcbiAgICAgIHshaXNEYW5nZXIgJiYgPFN0eWxlZC5UaW1lciA+e21pbnV0ZXNTdHJpbmd9OntzZWNvbmRzU3RyaW5nfTwvU3R5bGVkLlRpbWVyPn1cclxuICAgICAge2lzRGFuZ2VyICYmIDxTdHlsZWQuVGltZXIgaXNEYW5nZXI+e21pbnV0ZXNTdHJpbmd9OntzZWNvbmRzU3RyaW5nfTwvU3R5bGVkLlRpbWVyPn1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFByb2ZpbGUoeyBuYW1lLCByYXRpbmcsIGF2YXRhciB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxJbWFnZSBzcmM9e2F2YXRhcn0gYWx0PVwiZm90b1wiIC8+XHJcbiAgICAgIDxTdHlsZWQuU3Bhbj57bmFtZX08L1N0eWxlZC5TcGFuPlxyXG4gICAgICA8U3R5bGVkLlNwYW4+UmF0aW5nOiB7cmF0aW5nfTwvU3R5bGVkLlNwYW4+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJTdHlsZWQiLCJHZW1lU3ltYm9sIiwiSW1hZ2UiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInBsYXllcnMiLCJHYW1lSW5mbyIsInBsYXllcnNDb3VudCIsIldyYXBwZXIiLCJzbGljZSIsIm1hcCIsInBsYXllciIsIlBsYXllckluZm8iLCJwbGF5ZXJJbmZvIiwiaWQiLCJzZWNvbmRzIiwic2V0U2Vjb25kcyIsIm1pbnV0ZXNTdHJpbmciLCJTdHJpbmciLCJNYXRoIiwiZmxvb3IiLCJwYWRTdGFydCIsInNlY29uZHNTdHJpbmciLCJpc0RhbmdlciIsImRpdiIsIlByb2ZpbGUiLCJuYW1lIiwicmF0aW5nIiwiYXZhdGFyIiwiSWNvbiIsInN5bWJvbCIsIlRpbWVyIiwic3JjIiwiYWx0IiwiU3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/GameInfo.jsx\n"));

/***/ })

});