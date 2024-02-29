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

/***/ "./components/useGameState.jsx":
/*!*************************************!*\
  !*** ./components/useGameState.jsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ useGameState; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./components/constants.jsx\");\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model */ \"./components/model.js\");\nvar _s = $RefreshSig$();\n\n\n\nfunction useGameState(plyersCount) {\n    _s();\n    const [{ cells, currentMove }, setGameState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>({\n            cells: new Array(19 * 19).fill(null),\n            currentMove: _constants__WEBPACK_IMPORTED_MODULE_1__.GAME_SYMBOLS.CROSS,\n            playersTimeOver: []\n        }));\n    // console.log(computeWinner(cells))\n    const winnerSequence = (0,_model__WEBPACK_IMPORTED_MODULE_2__.computeWinner)(cells);\n    const nextMove = (0,_model__WEBPACK_IMPORTED_MODULE_2__.getNextMove)(currentMove, plyersCount);\n    const handleCellClick = (index)=>{\n        setGameState((lastGameState)=>{\n            if (lastGameState.cells[index]) {\n                return lastGameState;\n            }\n            return {\n                ...lastGameState,\n                currentMove: (0,_model__WEBPACK_IMPORTED_MODULE_2__.getNextMove)(lastGameState.currentMove, plyersCount),\n                cells: lastGameState.cells.map((cell, i)=>i === index ? lastGameState.currentMove : cell)\n            };\n        });\n    };\n    const handlePlayerTimeOver = (symbol)=>{\n        setGameState((lastGameState)=>{\n            return {\n                ...lastGameState,\n                playersTimeOver: [\n                    ...lastGameState.playersTimeOver,\n                    symbol\n                ],\n                currentMove: (0,_model__WEBPACK_IMPORTED_MODULE_2__.getNextMove)(lastGameState.currentMove, plyersCount)\n            };\n        });\n    };\n    return {\n        cells,\n        currentMove,\n        nextMove,\n        handleCellClick,\n        winnerSequence,\n        handlePlayerTimeOver\n    };\n}\n_s(useGameState, \"nWH1DdwIPUmrZQYmVhcn/pJHDSg=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3VzZUdhbWVTdGF0ZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWlDO0FBQ1U7QUFDVTtBQUd0QyxTQUFTSSxhQUFhQyxXQUFXOztJQUM5QyxNQUFNLENBQUMsRUFBRUMsS0FBSyxFQUFFQyxXQUFXLEVBQUcsRUFBRUMsYUFBYSxHQUFHUiwrQ0FBUUEsQ0FBQyxJQUFPO1lBQzlETSxPQUFPLElBQUlHLE1BQU0sS0FBSyxJQUFJQyxJQUFJLENBQUM7WUFDL0JILGFBQWFOLG9EQUFZQSxDQUFDVSxLQUFLO1lBQy9CQyxpQkFBaUIsRUFBRTtRQUNyQjtJQUVBLG9DQUFvQztJQUVwQyxNQUFNQyxpQkFBaUJYLHFEQUFhQSxDQUFDSTtJQUVyQyxNQUFNUSxXQUFXWCxtREFBV0EsQ0FBQ0ksYUFBYUY7SUFFMUMsTUFBTVUsa0JBQWtCLENBQUNDO1FBQ3ZCUixhQUFhLENBQUNTO1lBQ1osSUFBSUEsY0FBY1gsS0FBSyxDQUFDVSxNQUFNLEVBQUU7Z0JBQzlCLE9BQU9DO1lBQ1Q7WUFFQSxPQUFPO2dCQUNMLEdBQUdBLGFBQWE7Z0JBQ2hCVixhQUFhSixtREFBV0EsQ0FBQ2MsY0FBY1YsV0FBVyxFQUFFRjtnQkFDcERDLE9BQU9XLGNBQWNYLEtBQUssQ0FBQ1ksR0FBRyxDQUFDLENBQUNDLE1BQU1DLElBQ3BDQSxNQUFNSixRQUFRQyxjQUFjVixXQUFXLEdBQUdZO1lBRTlDO1FBQ0Y7SUFDRjtJQUVBLE1BQU1FLHVCQUF1QixDQUFDQztRQUM1QmQsYUFBYSxDQUFDUztZQUNaLE9BQU87Z0JBQ0wsR0FBR0EsYUFBYTtnQkFDaEJMLGlCQUFpQjt1QkFBSUssY0FBY0wsZUFBZTtvQkFBRVU7aUJBQU87Z0JBQzNEZixhQUFhSixtREFBV0EsQ0FBQ2MsY0FBY1YsV0FBVyxFQUFFRjtZQUN0RDtRQUNGO0lBQ0Y7SUFFQSxPQUFPO1FBQ0xDO1FBQ0FDO1FBQ0FPO1FBQ0FDO1FBQ0FGO1FBQ0FRO0lBQ0Y7QUFDRjtHQS9Dd0JqQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3VzZUdhbWVTdGF0ZS5qc3g/OWRkMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgR0FNRV9TWU1CT0xTIH0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBjb21wdXRlV2lubmVyLCBnZXROZXh0TW92ZSB9IGZyb20gJy4vbW9kZWwnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUdhbWVTdGF0ZShwbHllcnNDb3VudCkge1xyXG4gIGNvbnN0IFt7IGNlbGxzLCBjdXJyZW50TW92ZSwgfSwgc2V0R2FtZVN0YXRlXSA9IHVzZVN0YXRlKCgpID0+ICh7XHJcbiAgICBjZWxsczogbmV3IEFycmF5KDE5ICogMTkpLmZpbGwobnVsbCksXHJcbiAgICBjdXJyZW50TW92ZTogR0FNRV9TWU1CT0xTLkNST1NTLFxyXG4gICAgcGxheWVyc1RpbWVPdmVyOiBbXSxcclxuICB9KSk7XHJcblxyXG4gIC8vIGNvbnNvbGUubG9nKGNvbXB1dGVXaW5uZXIoY2VsbHMpKVxyXG4gIFxyXG4gIGNvbnN0IHdpbm5lclNlcXVlbmNlID0gY29tcHV0ZVdpbm5lcihjZWxscyk7XHJcblxyXG4gIGNvbnN0IG5leHRNb3ZlID0gZ2V0TmV4dE1vdmUoY3VycmVudE1vdmUsIHBseWVyc0NvdW50KTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2VsbENsaWNrID0gKGluZGV4KSA9PiB7XHJcbiAgICBzZXRHYW1lU3RhdGUoKGxhc3RHYW1lU3RhdGUpID0+IHtcclxuICAgICAgaWYgKGxhc3RHYW1lU3RhdGUuY2VsbHNbaW5kZXhdKSB7XHJcbiAgICAgICAgcmV0dXJuIGxhc3RHYW1lU3RhdGU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4ubGFzdEdhbWVTdGF0ZSxcclxuICAgICAgICBjdXJyZW50TW92ZTogZ2V0TmV4dE1vdmUobGFzdEdhbWVTdGF0ZS5jdXJyZW50TW92ZSwgcGx5ZXJzQ291bnQpLFxyXG4gICAgICAgIGNlbGxzOiBsYXN0R2FtZVN0YXRlLmNlbGxzLm1hcCgoY2VsbCwgaSkgPT5cclxuICAgICAgICAgIGkgPT09IGluZGV4ID8gbGFzdEdhbWVTdGF0ZS5jdXJyZW50TW92ZSA6IGNlbGwsXHJcbiAgICAgICAgKSxcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVBsYXllclRpbWVPdmVyID0gKHN5bWJvbCkgPT4ge1xyXG4gICAgc2V0R2FtZVN0YXRlKChsYXN0R2FtZVN0YXRlKSA9PiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4ubGFzdEdhbWVTdGF0ZSxcclxuICAgICAgICBwbGF5ZXJzVGltZU92ZXI6IFsuLi5sYXN0R2FtZVN0YXRlLnBsYXllcnNUaW1lT3Zlciwgc3ltYm9sXSxcclxuICAgICAgICBjdXJyZW50TW92ZTogZ2V0TmV4dE1vdmUobGFzdEdhbWVTdGF0ZS5jdXJyZW50TW92ZSwgcGx5ZXJzQ291bnQpLFxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBjZWxscyxcclxuICAgIGN1cnJlbnRNb3ZlLFxyXG4gICAgbmV4dE1vdmUsXHJcbiAgICBoYW5kbGVDZWxsQ2xpY2ssXHJcbiAgICB3aW5uZXJTZXF1ZW5jZSxcclxuICAgIGhhbmRsZVBsYXllclRpbWVPdmVyXHJcbiAgfTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJHQU1FX1NZTUJPTFMiLCJjb21wdXRlV2lubmVyIiwiZ2V0TmV4dE1vdmUiLCJ1c2VHYW1lU3RhdGUiLCJwbHllcnNDb3VudCIsImNlbGxzIiwiY3VycmVudE1vdmUiLCJzZXRHYW1lU3RhdGUiLCJBcnJheSIsImZpbGwiLCJDUk9TUyIsInBsYXllcnNUaW1lT3ZlciIsIndpbm5lclNlcXVlbmNlIiwibmV4dE1vdmUiLCJoYW5kbGVDZWxsQ2xpY2siLCJpbmRleCIsImxhc3RHYW1lU3RhdGUiLCJtYXAiLCJjZWxsIiwiaSIsImhhbmRsZVBsYXllclRpbWVPdmVyIiwic3ltYm9sIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/useGameState.jsx\n"));

/***/ })

});