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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ useGameState; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./components/constants.jsx\");\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model */ \"./components/model.js\");\nvar _s = $RefreshSig$();\n\n\n\n// function getNextMove(currentMove, playersCount) {\n//   const slicedMoveOrder = MOVE_ORDER.slice(0, playersCount);\n//   const nextMoveIndex = slicedMoveOrder.indexOf(currentMove) + 1;\n//   return slicedMoveOrder[nextMoveIndex] ?? slicedMoveOrder[0];\n// }\n// определение победителя\n// function computeWinner(cells, sequencesSize = 5, fieldSize = 19) {\n//   const gap = Math.floor(sequencesSize / 2);\n//   function compareElements(indexes) {\n//     let result = true;\n//     for (let i = 1; i < indexes.lenght; i++) {\n//       result &&= !!cells[indexes[i]];\n//       result &&= cells[indexes[i]] === cells[indexes[i - 1]];\n//     }\n//     return result;\n//   }\n//   function getSequenceIndexes(i) {\n//     const res = [\n//       [], // -\n//       [], // \\\n//       [], // /\n//       [], // |\n//     ];\n//     for (let j = 0; j < sequencesSize; j++) { \n//       res[0].push(j - gap + i);\n//       res[1].push(fieldSize * (j - gap) + (j - gap) + i);\n//       res[2].push(-fieldSize * (j - gap) + (j - gap) + i);\n//       res[3].push(fieldSize * (j - gap) + i);\n//     }\n//     return res;\n//   }\n//   for (let i = 0; i < cells.lenght; i++) {\n//     if (cells[i]) {\n//       const indexRows = getSequenceIndexes(i);\n//       const winnerIndexes = indexRows.find((row) => compareElements(row))\n//       if (winnerIndexes) {\n//         return winnerIndexes;\n//       }\n//     }\n//   }\n//   return undefined;\n// }\nfunction useGameState(plyersCount) {\n    _s();\n    const [{ cells, currentMove }, setGameState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>({\n            cells: new Array(19 * 19).fill(null),\n            currentMove: _constants__WEBPACK_IMPORTED_MODULE_1__.GAME_SYMBOLS.CROSS\n        }));\n    const winnerSequence = _model__WEBPACK_IMPORTED_MODULE_2__.computeWinner;\n    const nextMove = (0,_model__WEBPACK_IMPORTED_MODULE_2__.getNextMove)(currentMove, plyersCount);\n    const handleCellClick = (index)=>{\n        setGameState((lastGameState)=>{\n            if (lastGameState.cells[index]) {\n                return lastGameState;\n            }\n            return {\n                ...lastGameState,\n                currentMove: (0,_model__WEBPACK_IMPORTED_MODULE_2__.getNextMove)(lastGameState.currentMove, plyersCount),\n                cells: lastGameState.cells.map((cell, i)=>i === index ? lastGameState.currentMove : cell)\n            };\n        });\n    };\n    return {\n        cells,\n        currentMove,\n        nextMove,\n        handleCellClick,\n        winnerS\n    };\n}\n_s(useGameState, \"BgCJ0i32B65f5Z6f6I6kdW1AptQ=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3VzZUdhbWVTdGF0ZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWlDO0FBQ3NCO0FBQ0Y7QUFFckQsb0RBQW9EO0FBQ3BELCtEQUErRDtBQUUvRCxvRUFBb0U7QUFFcEUsaUVBQWlFO0FBQ2pFLElBQUk7QUFFSix5QkFBeUI7QUFDekIscUVBQXFFO0FBQ3JFLCtDQUErQztBQUUvQyx3Q0FBd0M7QUFDeEMseUJBQXlCO0FBRXpCLGlEQUFpRDtBQUNqRCx3Q0FBd0M7QUFDeEMsZ0VBQWdFO0FBQ2hFLFFBQVE7QUFFUixxQkFBcUI7QUFDckIsTUFBTTtBQUVOLHFDQUFxQztBQUNyQyxvQkFBb0I7QUFDcEIsaUJBQWlCO0FBQ2pCLGlCQUFpQjtBQUNqQixpQkFBaUI7QUFDakIsaUJBQWlCO0FBQ2pCLFNBQVM7QUFFVCxpREFBaUQ7QUFDakQsa0NBQWtDO0FBQ2xDLDREQUE0RDtBQUM1RCw2REFBNkQ7QUFDN0QsZ0RBQWdEO0FBQ2hELFFBQVE7QUFFUixrQkFBa0I7QUFDbEIsTUFBTTtBQUVOLDZDQUE2QztBQUM3QyxzQkFBc0I7QUFDdEIsaURBQWlEO0FBRWpELDRFQUE0RTtBQUU1RSw2QkFBNkI7QUFDN0IsZ0NBQWdDO0FBQ2hDLFVBQVU7QUFDVixRQUFRO0FBQ1IsTUFBTTtBQUNOLHNCQUFzQjtBQUN0QixJQUFJO0FBRVcsU0FBU0ssYUFBYUMsV0FBVzs7SUFDOUMsTUFBTSxDQUFDLEVBQUVDLEtBQUssRUFBRUMsV0FBVyxFQUFFLEVBQUVDLGFBQWEsR0FBR1QsK0NBQVFBLENBQUMsSUFBTztZQUM3RE8sT0FBTyxJQUFJRyxNQUFNLEtBQUssSUFBSUMsSUFBSSxDQUFDO1lBQy9CSCxhQUFhUCxvREFBWUEsQ0FBQ1csS0FBSztRQUNqQztJQUVBLE1BQU1DLGlCQUFpQlYsaURBQWFBO0lBRXBDLE1BQU1XLFdBQVdWLG1EQUFXQSxDQUFDSSxhQUFhRjtJQUUxQyxNQUFNUyxrQkFBa0IsQ0FBQ0M7UUFDdkJQLGFBQWEsQ0FBQ1E7WUFDWixJQUFJQSxjQUFjVixLQUFLLENBQUNTLE1BQU0sRUFBRTtnQkFDOUIsT0FBT0M7WUFDVDtZQUVBLE9BQU87Z0JBQ0wsR0FBR0EsYUFBYTtnQkFDaEJULGFBQWFKLG1EQUFXQSxDQUFDYSxjQUFjVCxXQUFXLEVBQUVGO2dCQUNwREMsT0FBT1UsY0FBY1YsS0FBSyxDQUFDVyxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsSUFDcENBLE1BQU1KLFFBQVFDLGNBQWNULFdBQVcsR0FBR1c7WUFFOUM7UUFDRjtJQUNGO0lBRUEsT0FBTztRQUNMWjtRQUNBQztRQUNBTTtRQUNBQztRQUNBTTtJQUNGO0FBQ0Y7R0FqQ3dCaEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91c2VHYW1lU3RhdGUuanN4PzlkZDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEdBTUVfU1lNQk9MUywgTU9WRV9PUkRFUiB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgY29tcHV0ZVdpbm5lciwgZ2V0TmV4dE1vdmUgfSBmcm9tICcuL21vZGVsJztcclxuXHJcbi8vIGZ1bmN0aW9uIGdldE5leHRNb3ZlKGN1cnJlbnRNb3ZlLCBwbGF5ZXJzQ291bnQpIHtcclxuLy8gICBjb25zdCBzbGljZWRNb3ZlT3JkZXIgPSBNT1ZFX09SREVSLnNsaWNlKDAsIHBsYXllcnNDb3VudCk7XHJcblxyXG4vLyAgIGNvbnN0IG5leHRNb3ZlSW5kZXggPSBzbGljZWRNb3ZlT3JkZXIuaW5kZXhPZihjdXJyZW50TW92ZSkgKyAxO1xyXG5cclxuLy8gICByZXR1cm4gc2xpY2VkTW92ZU9yZGVyW25leHRNb3ZlSW5kZXhdID8/IHNsaWNlZE1vdmVPcmRlclswXTtcclxuLy8gfVxyXG5cclxuLy8g0L7Qv9GA0LXQtNC10LvQtdC90LjQtSDQv9C+0LHQtdC00LjRgtC10LvRj1xyXG4vLyBmdW5jdGlvbiBjb21wdXRlV2lubmVyKGNlbGxzLCBzZXF1ZW5jZXNTaXplID0gNSwgZmllbGRTaXplID0gMTkpIHtcclxuLy8gICBjb25zdCBnYXAgPSBNYXRoLmZsb29yKHNlcXVlbmNlc1NpemUgLyAyKTtcclxuXHJcbi8vICAgZnVuY3Rpb24gY29tcGFyZUVsZW1lbnRzKGluZGV4ZXMpIHtcclxuLy8gICAgIGxldCByZXN1bHQgPSB0cnVlO1xyXG5cclxuLy8gICAgIGZvciAobGV0IGkgPSAxOyBpIDwgaW5kZXhlcy5sZW5naHQ7IGkrKykge1xyXG4vLyAgICAgICByZXN1bHQgJiY9ICEhY2VsbHNbaW5kZXhlc1tpXV07XHJcbi8vICAgICAgIHJlc3VsdCAmJj0gY2VsbHNbaW5kZXhlc1tpXV0gPT09IGNlbGxzW2luZGV4ZXNbaSAtIDFdXTtcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICByZXR1cm4gcmVzdWx0O1xyXG4vLyAgIH1cclxuXHJcbi8vICAgZnVuY3Rpb24gZ2V0U2VxdWVuY2VJbmRleGVzKGkpIHtcclxuLy8gICAgIGNvbnN0IHJlcyA9IFtcclxuLy8gICAgICAgW10sIC8vIC1cclxuLy8gICAgICAgW10sIC8vIFxcXHJcbi8vICAgICAgIFtdLCAvLyAvXHJcbi8vICAgICAgIFtdLCAvLyB8XHJcbi8vICAgICBdO1xyXG5cclxuLy8gICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2VxdWVuY2VzU2l6ZTsgaisrKSB7IFxyXG4vLyAgICAgICByZXNbMF0ucHVzaChqIC0gZ2FwICsgaSk7XHJcbi8vICAgICAgIHJlc1sxXS5wdXNoKGZpZWxkU2l6ZSAqIChqIC0gZ2FwKSArIChqIC0gZ2FwKSArIGkpO1xyXG4vLyAgICAgICByZXNbMl0ucHVzaCgtZmllbGRTaXplICogKGogLSBnYXApICsgKGogLSBnYXApICsgaSk7XHJcbi8vICAgICAgIHJlc1szXS5wdXNoKGZpZWxkU2l6ZSAqIChqIC0gZ2FwKSArIGkpO1xyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIHJldHVybiByZXM7XHJcbi8vICAgfVxyXG5cclxuLy8gICBmb3IgKGxldCBpID0gMDsgaSA8IGNlbGxzLmxlbmdodDsgaSsrKSB7XHJcbi8vICAgICBpZiAoY2VsbHNbaV0pIHtcclxuLy8gICAgICAgY29uc3QgaW5kZXhSb3dzID0gZ2V0U2VxdWVuY2VJbmRleGVzKGkpO1xyXG5cclxuLy8gICAgICAgY29uc3Qgd2lubmVySW5kZXhlcyA9IGluZGV4Um93cy5maW5kKChyb3cpID0+IGNvbXBhcmVFbGVtZW50cyhyb3cpKVxyXG5cclxuLy8gICAgICAgaWYgKHdpbm5lckluZGV4ZXMpIHtcclxuLy8gICAgICAgICByZXR1cm4gd2lubmVySW5kZXhlcztcclxuLy8gICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyAgIH1cclxuLy8gICByZXR1cm4gdW5kZWZpbmVkO1xyXG4vLyB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VHYW1lU3RhdGUocGx5ZXJzQ291bnQpIHtcclxuICBjb25zdCBbeyBjZWxscywgY3VycmVudE1vdmUgfSwgc2V0R2FtZVN0YXRlXSA9IHVzZVN0YXRlKCgpID0+ICh7XHJcbiAgICBjZWxsczogbmV3IEFycmF5KDE5ICogMTkpLmZpbGwobnVsbCksXHJcbiAgICBjdXJyZW50TW92ZTogR0FNRV9TWU1CT0xTLkNST1NTLFxyXG4gIH0pKTtcclxuXHJcbiAgY29uc3Qgd2lubmVyU2VxdWVuY2UgPSBjb21wdXRlV2lubmVyXHJcblxyXG4gIGNvbnN0IG5leHRNb3ZlID0gZ2V0TmV4dE1vdmUoY3VycmVudE1vdmUsIHBseWVyc0NvdW50KTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2VsbENsaWNrID0gKGluZGV4KSA9PiB7XHJcbiAgICBzZXRHYW1lU3RhdGUoKGxhc3RHYW1lU3RhdGUpID0+IHtcclxuICAgICAgaWYgKGxhc3RHYW1lU3RhdGUuY2VsbHNbaW5kZXhdKSB7XHJcbiAgICAgICAgcmV0dXJuIGxhc3RHYW1lU3RhdGU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4ubGFzdEdhbWVTdGF0ZSxcclxuICAgICAgICBjdXJyZW50TW92ZTogZ2V0TmV4dE1vdmUobGFzdEdhbWVTdGF0ZS5jdXJyZW50TW92ZSwgcGx5ZXJzQ291bnQpLFxyXG4gICAgICAgIGNlbGxzOiBsYXN0R2FtZVN0YXRlLmNlbGxzLm1hcCgoY2VsbCwgaSkgPT5cclxuICAgICAgICAgIGkgPT09IGluZGV4ID8gbGFzdEdhbWVTdGF0ZS5jdXJyZW50TW92ZSA6IGNlbGwsXHJcbiAgICAgICAgKSxcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBjZWxscyxcclxuICAgIGN1cnJlbnRNb3ZlLFxyXG4gICAgbmV4dE1vdmUsXHJcbiAgICBoYW5kbGVDZWxsQ2xpY2ssXHJcbiAgICB3aW5uZXJTXHJcbiAgfTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJHQU1FX1NZTUJPTFMiLCJNT1ZFX09SREVSIiwiY29tcHV0ZVdpbm5lciIsImdldE5leHRNb3ZlIiwidXNlR2FtZVN0YXRlIiwicGx5ZXJzQ291bnQiLCJjZWxscyIsImN1cnJlbnRNb3ZlIiwic2V0R2FtZVN0YXRlIiwiQXJyYXkiLCJmaWxsIiwiQ1JPU1MiLCJ3aW5uZXJTZXF1ZW5jZSIsIm5leHRNb3ZlIiwiaGFuZGxlQ2VsbENsaWNrIiwiaW5kZXgiLCJsYXN0R2FtZVN0YXRlIiwibWFwIiwiY2VsbCIsImkiLCJ3aW5uZXJTIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/useGameState.jsx\n"));

/***/ })

});