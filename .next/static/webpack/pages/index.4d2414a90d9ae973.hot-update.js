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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ useGameState; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./components/constants.jsx\");\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model */ \"./components/model.js\");\nvar _s = $RefreshSig$();\n\n\n\n// function getNextMove(currentMove, playersCount) {\n//   const slicedMoveOrder = MOVE_ORDER.slice(0, playersCount);\n//   const nextMoveIndex = slicedMoveOrder.indexOf(currentMove) + 1;\n//   return slicedMoveOrder[nextMoveIndex] ?? slicedMoveOrder[0];\n// }\n// определение победителя\n// function computeWinner(cells, sequencesSize = 5, fieldSize = 19) {\n//   const gap = Math.floor(sequencesSize / 2);\n//   function compareElements(indexes) {\n//     let result = true;\n//     for (let i = 1; i < indexes.lenght; i++) {\n//       result &&= !!cells[indexes[i]];\n//       result &&= cells[indexes[i]] === cells[indexes[i - 1]];\n//     }\n//     return result;\n//   }\n//   function getSequenceIndexes(i) {\n//     const res = [\n//       [], // -\n//       [], // \\\n//       [], // /\n//       [], // |\n//     ];\n//     for (let j = 0; j < sequencesSize; j++) { \n//       res[0].push(j - gap + i);\n//       res[1].push(fieldSize * (j - gap) + (j - gap) + i);\n//       res[2].push(-fieldSize * (j - gap) + (j - gap) + i);\n//       res[3].push(fieldSize * (j - gap) + i);\n//     }\n//     return res;\n//   }\n//   for (let i = 0; i < cells.lenght; i++) {\n//     if (cells[i]) {\n//       const indexRows = getSequenceIndexes(i);\n//       const winnerIndexes = indexRows.find((row) => compareElements(row))\n//       if (winnerIndexes) {\n//         return winnerIndexes;\n//       }\n//     }\n//   }\n//   return undefined;\n// }\nfunction useGameState(plyersCount) {\n    _s();\n    const [{ cells, currentMove }, setGameState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>({\n            cells: new Array(19 * 19).fill(null),\n            currentMove: _constants__WEBPACK_IMPORTED_MODULE_1__.GAME_SYMBOLS.CROSS\n        }));\n    const winnerSequence = co;\n    const nextMove = (0,_model__WEBPACK_IMPORTED_MODULE_2__.getNextMove)(currentMove, plyersCount);\n    const handleCellClick = (index)=>{\n        setGameState((lastGameState)=>{\n            if (lastGameState.cells[index]) {\n                return lastGameState;\n            }\n            return {\n                ...lastGameState,\n                currentMove: (0,_model__WEBPACK_IMPORTED_MODULE_2__.getNextMove)(lastGameState.currentMove, plyersCount),\n                cells: lastGameState.cells.map((cell, i)=>i === index ? lastGameState.currentMove : cell)\n            };\n        });\n    };\n    return {\n        cells,\n        currentMove,\n        nextMove,\n        handleCellClick,\n        winnerS\n    };\n}\n_s(useGameState, \"BgCJ0i32B65f5Z6f6I6kdW1AptQ=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3VzZUdhbWVTdGF0ZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWlDO0FBQ3NCO0FBQ0Y7QUFFckQsb0RBQW9EO0FBQ3BELCtEQUErRDtBQUUvRCxvRUFBb0U7QUFFcEUsaUVBQWlFO0FBQ2pFLElBQUk7QUFFSix5QkFBeUI7QUFDekIscUVBQXFFO0FBQ3JFLCtDQUErQztBQUUvQyx3Q0FBd0M7QUFDeEMseUJBQXlCO0FBRXpCLGlEQUFpRDtBQUNqRCx3Q0FBd0M7QUFDeEMsZ0VBQWdFO0FBQ2hFLFFBQVE7QUFFUixxQkFBcUI7QUFDckIsTUFBTTtBQUVOLHFDQUFxQztBQUNyQyxvQkFBb0I7QUFDcEIsaUJBQWlCO0FBQ2pCLGlCQUFpQjtBQUNqQixpQkFBaUI7QUFDakIsaUJBQWlCO0FBQ2pCLFNBQVM7QUFFVCxpREFBaUQ7QUFDakQsa0NBQWtDO0FBQ2xDLDREQUE0RDtBQUM1RCw2REFBNkQ7QUFDN0QsZ0RBQWdEO0FBQ2hELFFBQVE7QUFFUixrQkFBa0I7QUFDbEIsTUFBTTtBQUVOLDZDQUE2QztBQUM3QyxzQkFBc0I7QUFDdEIsaURBQWlEO0FBRWpELDRFQUE0RTtBQUU1RSw2QkFBNkI7QUFDN0IsZ0NBQWdDO0FBQ2hDLFVBQVU7QUFDVixRQUFRO0FBQ1IsTUFBTTtBQUNOLHNCQUFzQjtBQUN0QixJQUFJO0FBRVcsU0FBU0ssYUFBYUMsV0FBVzs7SUFDOUMsTUFBTSxDQUFDLEVBQUVDLEtBQUssRUFBRUMsV0FBVyxFQUFFLEVBQUVDLGFBQWEsR0FBR1QsK0NBQVFBLENBQUMsSUFBTztZQUM3RE8sT0FBTyxJQUFJRyxNQUFNLEtBQUssSUFBSUMsSUFBSSxDQUFDO1lBQy9CSCxhQUFhUCxvREFBWUEsQ0FBQ1csS0FBSztRQUNqQztJQUVBLE1BQU1DLGlCQUFpQkM7SUFFdkIsTUFBTUMsV0FBV1gsbURBQVdBLENBQUNJLGFBQWFGO0lBRTFDLE1BQU1VLGtCQUFrQixDQUFDQztRQUN2QlIsYUFBYSxDQUFDUztZQUNaLElBQUlBLGNBQWNYLEtBQUssQ0FBQ1UsTUFBTSxFQUFFO2dCQUM5QixPQUFPQztZQUNUO1lBRUEsT0FBTztnQkFDTCxHQUFHQSxhQUFhO2dCQUNoQlYsYUFBYUosbURBQVdBLENBQUNjLGNBQWNWLFdBQVcsRUFBRUY7Z0JBQ3BEQyxPQUFPVyxjQUFjWCxLQUFLLENBQUNZLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxJQUNwQ0EsTUFBTUosUUFBUUMsY0FBY1YsV0FBVyxHQUFHWTtZQUU5QztRQUNGO0lBQ0Y7SUFFQSxPQUFPO1FBQ0xiO1FBQ0FDO1FBQ0FPO1FBQ0FDO1FBQ0FNO0lBQ0Y7QUFDRjtHQWpDd0JqQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3VzZUdhbWVTdGF0ZS5qc3g/OWRkMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgR0FNRV9TWU1CT0xTLCBNT1ZFX09SREVSIH0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBjb21wdXRlV2lubmVyLCBnZXROZXh0TW92ZSB9IGZyb20gJy4vbW9kZWwnO1xyXG5cclxuLy8gZnVuY3Rpb24gZ2V0TmV4dE1vdmUoY3VycmVudE1vdmUsIHBsYXllcnNDb3VudCkge1xyXG4vLyAgIGNvbnN0IHNsaWNlZE1vdmVPcmRlciA9IE1PVkVfT1JERVIuc2xpY2UoMCwgcGxheWVyc0NvdW50KTtcclxuXHJcbi8vICAgY29uc3QgbmV4dE1vdmVJbmRleCA9IHNsaWNlZE1vdmVPcmRlci5pbmRleE9mKGN1cnJlbnRNb3ZlKSArIDE7XHJcblxyXG4vLyAgIHJldHVybiBzbGljZWRNb3ZlT3JkZXJbbmV4dE1vdmVJbmRleF0gPz8gc2xpY2VkTW92ZU9yZGVyWzBdO1xyXG4vLyB9XHJcblxyXG4vLyDQvtC/0YDQtdC00LXQu9C10L3QuNC1INC/0L7QsdC10LTQuNGC0LXQu9GPXHJcbi8vIGZ1bmN0aW9uIGNvbXB1dGVXaW5uZXIoY2VsbHMsIHNlcXVlbmNlc1NpemUgPSA1LCBmaWVsZFNpemUgPSAxOSkge1xyXG4vLyAgIGNvbnN0IGdhcCA9IE1hdGguZmxvb3Ioc2VxdWVuY2VzU2l6ZSAvIDIpO1xyXG5cclxuLy8gICBmdW5jdGlvbiBjb21wYXJlRWxlbWVudHMoaW5kZXhlcykge1xyXG4vLyAgICAgbGV0IHJlc3VsdCA9IHRydWU7XHJcblxyXG4vLyAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBpbmRleGVzLmxlbmdodDsgaSsrKSB7XHJcbi8vICAgICAgIHJlc3VsdCAmJj0gISFjZWxsc1tpbmRleGVzW2ldXTtcclxuLy8gICAgICAgcmVzdWx0ICYmPSBjZWxsc1tpbmRleGVzW2ldXSA9PT0gY2VsbHNbaW5kZXhlc1tpIC0gMV1dO1xyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIHJldHVybiByZXN1bHQ7XHJcbi8vICAgfVxyXG5cclxuLy8gICBmdW5jdGlvbiBnZXRTZXF1ZW5jZUluZGV4ZXMoaSkge1xyXG4vLyAgICAgY29uc3QgcmVzID0gW1xyXG4vLyAgICAgICBbXSwgLy8gLVxyXG4vLyAgICAgICBbXSwgLy8gXFxcclxuLy8gICAgICAgW10sIC8vIC9cclxuLy8gICAgICAgW10sIC8vIHxcclxuLy8gICAgIF07XHJcblxyXG4vLyAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzZXF1ZW5jZXNTaXplOyBqKyspIHsgXHJcbi8vICAgICAgIHJlc1swXS5wdXNoKGogLSBnYXAgKyBpKTtcclxuLy8gICAgICAgcmVzWzFdLnB1c2goZmllbGRTaXplICogKGogLSBnYXApICsgKGogLSBnYXApICsgaSk7XHJcbi8vICAgICAgIHJlc1syXS5wdXNoKC1maWVsZFNpemUgKiAoaiAtIGdhcCkgKyAoaiAtIGdhcCkgKyBpKTtcclxuLy8gICAgICAgcmVzWzNdLnB1c2goZmllbGRTaXplICogKGogLSBnYXApICsgaSk7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgcmV0dXJuIHJlcztcclxuLy8gICB9XHJcblxyXG4vLyAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2VsbHMubGVuZ2h0OyBpKyspIHtcclxuLy8gICAgIGlmIChjZWxsc1tpXSkge1xyXG4vLyAgICAgICBjb25zdCBpbmRleFJvd3MgPSBnZXRTZXF1ZW5jZUluZGV4ZXMoaSk7XHJcblxyXG4vLyAgICAgICBjb25zdCB3aW5uZXJJbmRleGVzID0gaW5kZXhSb3dzLmZpbmQoKHJvdykgPT4gY29tcGFyZUVsZW1lbnRzKHJvdykpXHJcblxyXG4vLyAgICAgICBpZiAod2lubmVySW5kZXhlcykge1xyXG4vLyAgICAgICAgIHJldHVybiB3aW5uZXJJbmRleGVzO1xyXG4vLyAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vICAgfVxyXG4vLyAgIHJldHVybiB1bmRlZmluZWQ7XHJcbi8vIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUdhbWVTdGF0ZShwbHllcnNDb3VudCkge1xyXG4gIGNvbnN0IFt7IGNlbGxzLCBjdXJyZW50TW92ZSB9LCBzZXRHYW1lU3RhdGVdID0gdXNlU3RhdGUoKCkgPT4gKHtcclxuICAgIGNlbGxzOiBuZXcgQXJyYXkoMTkgKiAxOSkuZmlsbChudWxsKSxcclxuICAgIGN1cnJlbnRNb3ZlOiBHQU1FX1NZTUJPTFMuQ1JPU1MsXHJcbiAgfSkpO1xyXG5cclxuICBjb25zdCB3aW5uZXJTZXF1ZW5jZSA9IGNvXHJcblxyXG4gIGNvbnN0IG5leHRNb3ZlID0gZ2V0TmV4dE1vdmUoY3VycmVudE1vdmUsIHBseWVyc0NvdW50KTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2VsbENsaWNrID0gKGluZGV4KSA9PiB7XHJcbiAgICBzZXRHYW1lU3RhdGUoKGxhc3RHYW1lU3RhdGUpID0+IHtcclxuICAgICAgaWYgKGxhc3RHYW1lU3RhdGUuY2VsbHNbaW5kZXhdKSB7XHJcbiAgICAgICAgcmV0dXJuIGxhc3RHYW1lU3RhdGU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4ubGFzdEdhbWVTdGF0ZSxcclxuICAgICAgICBjdXJyZW50TW92ZTogZ2V0TmV4dE1vdmUobGFzdEdhbWVTdGF0ZS5jdXJyZW50TW92ZSwgcGx5ZXJzQ291bnQpLFxyXG4gICAgICAgIGNlbGxzOiBsYXN0R2FtZVN0YXRlLmNlbGxzLm1hcCgoY2VsbCwgaSkgPT5cclxuICAgICAgICAgIGkgPT09IGluZGV4ID8gbGFzdEdhbWVTdGF0ZS5jdXJyZW50TW92ZSA6IGNlbGwsXHJcbiAgICAgICAgKSxcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBjZWxscyxcclxuICAgIGN1cnJlbnRNb3ZlLFxyXG4gICAgbmV4dE1vdmUsXHJcbiAgICBoYW5kbGVDZWxsQ2xpY2ssXHJcbiAgICB3aW5uZXJTXHJcbiAgfTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJHQU1FX1NZTUJPTFMiLCJNT1ZFX09SREVSIiwiY29tcHV0ZVdpbm5lciIsImdldE5leHRNb3ZlIiwidXNlR2FtZVN0YXRlIiwicGx5ZXJzQ291bnQiLCJjZWxscyIsImN1cnJlbnRNb3ZlIiwic2V0R2FtZVN0YXRlIiwiQXJyYXkiLCJmaWxsIiwiQ1JPU1MiLCJ3aW5uZXJTZXF1ZW5jZSIsImNvIiwibmV4dE1vdmUiLCJoYW5kbGVDZWxsQ2xpY2siLCJpbmRleCIsImxhc3RHYW1lU3RhdGUiLCJtYXAiLCJjZWxsIiwiaSIsIndpbm5lclMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/useGameState.jsx\n"));

/***/ })

});