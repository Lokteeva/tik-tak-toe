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

/***/ "./components/model.js":
/*!*****************************!*\
  !*** ./components/model.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   computeWinner: function() { return /* binding */ computeWinner; },\n/* harmony export */   getNextMove: function() { return /* binding */ getNextMove; }\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./components/constants.jsx\");\n\nfunction getNextMove(currentMove, playersCount, playersTimeOver) {\n    const slicedMoveOrder = _constants__WEBPACK_IMPORTED_MODULE_0__.MOVE_ORDER.slice(0, playersCount).fi;\n    const nextMoveIndex = slicedMoveOrder.indexOf(currentMove) + 1;\n    var _slicedMoveOrder_nextMoveIndex;\n    return (_slicedMoveOrder_nextMoveIndex = slicedMoveOrder[nextMoveIndex]) !== null && _slicedMoveOrder_nextMoveIndex !== void 0 ? _slicedMoveOrder_nextMoveIndex : slicedMoveOrder[0];\n}\nfunction computeWinner(cells) {\n    let sequenceSize = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 3, fieldSize = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 19;\n    const gap = Math.floor(sequenceSize / 2);\n    function compareElements(indexes) {\n        let result = true;\n        for(let i = 1; i < indexes.length; i++){\n            result && (result = !!cells[indexes[i]]);\n            result && (result = cells[indexes[i]] === cells[indexes[i - 1]]);\n        }\n        return result;\n    }\n    function getSequenceIndexes(i) {\n        const res = [\n            [],\n            [],\n            [],\n            []\n        ];\n        for(let j = 0; j < sequenceSize; j++){\n            res[0].push(j - gap + i);\n            res[1].push(fieldSize * (j - gap) + (j - gap) + i);\n            res[2].push(-fieldSize * (j - gap) + (j - gap) + i);\n            res[3].push(fieldSize * (j - gap) + i);\n        }\n        const x = i % fieldSize;\n        if (x < gap || x >= fieldSize - gap) {\n            res.shift();\n            res.shift();\n            res.shift();\n        }\n        return res;\n    }\n    for(let i = 0; i < cells.length; i++){\n        if (cells[i]) {\n            const indexRows = getSequenceIndexes(i);\n            const winnerIndexes = indexRows.find((row)=>compareElements(row));\n            if (winnerIndexes) {\n                return winnerIndexes;\n            }\n        }\n    }\n    return undefined;\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21vZGVsLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF5QztBQUVsQyxTQUFTQyxZQUFZQyxXQUFXLEVBQUVDLFlBQVksRUFBRUMsZUFBZTtJQUNwRSxNQUFNQyxrQkFBa0JMLGtEQUFVQSxDQUFDTSxLQUFLLENBQUMsR0FBR0gsY0FBY0ksRUFBRTtJQUU1RCxNQUFNQyxnQkFBZ0JILGdCQUFnQkksT0FBTyxDQUFDUCxlQUFlO1FBQ3RERztJQUFQLE9BQU9BLENBQUFBLGlDQUFBQSxlQUFlLENBQUNHLGNBQWMsY0FBOUJILDRDQUFBQSxpQ0FBa0NBLGVBQWUsQ0FBQyxFQUFFO0FBQzdEO0FBRU8sU0FBU0ssY0FBY0MsS0FBSztRQUFFQyxlQUFBQSxpRUFBZSxHQUFHQyxZQUFBQSxpRUFBWTtJQUNqRSxNQUFNQyxNQUFNQyxLQUFLQyxLQUFLLENBQUNKLGVBQWU7SUFFdEMsU0FBU0ssZ0JBQWdCQyxPQUFPO1FBQzlCLElBQUlDLFNBQVM7UUFFYixJQUFLLElBQUlDLElBQUksR0FBR0EsSUFBSUYsUUFBUUcsTUFBTSxFQUFFRCxJQUFLO1lBQ3ZDRCxXQUFBQSxTQUFXLENBQUMsQ0FBQ1IsS0FBSyxDQUFDTyxPQUFPLENBQUNFLEVBQUUsQ0FBQztZQUM5QkQsV0FBQUEsU0FBV1IsS0FBSyxDQUFDTyxPQUFPLENBQUNFLEVBQUUsQ0FBQyxLQUFLVCxLQUFLLENBQUNPLE9BQU8sQ0FBQ0UsSUFBSSxFQUFFLENBQUM7UUFDeEQ7UUFFQSxPQUFPRDtJQUNUO0lBRUEsU0FBU0csbUJBQW1CRixDQUFDO1FBQzNCLE1BQU1HLE1BQU07WUFDVixFQUFFO1lBQ0YsRUFBRTtZQUNGLEVBQUU7WUFDRixFQUFFO1NBQ0g7UUFFRCxJQUFLLElBQUlDLElBQUksR0FBR0EsSUFBSVosY0FBY1ksSUFBSztZQUNyQ0QsR0FBRyxDQUFDLEVBQUUsQ0FBQ0UsSUFBSSxDQUFDRCxJQUFJVixNQUFNTTtZQUN0QkcsR0FBRyxDQUFDLEVBQUUsQ0FBQ0UsSUFBSSxDQUFDWixZQUFhVyxDQUFBQSxJQUFJVixHQUFFLElBQU1VLENBQUFBLElBQUlWLEdBQUUsSUFBS007WUFDaERHLEdBQUcsQ0FBQyxFQUFFLENBQUNFLElBQUksQ0FBQyxDQUFDWixZQUFhVyxDQUFBQSxJQUFJVixHQUFFLElBQU1VLENBQUFBLElBQUlWLEdBQUUsSUFBS007WUFDakRHLEdBQUcsQ0FBQyxFQUFFLENBQUNFLElBQUksQ0FBQ1osWUFBYVcsQ0FBQUEsSUFBSVYsR0FBRSxJQUFLTTtRQUN0QztRQUVBLE1BQU1NLElBQUlOLElBQUlQO1FBQ2QsSUFBSWEsSUFBS1osT0FBT1ksS0FBS2IsWUFBWUMsS0FBSztZQUNwQ1MsSUFBSUksS0FBSztZQUNUSixJQUFJSSxLQUFLO1lBQ1RKLElBQUlJLEtBQUs7UUFDWDtRQUVBLE9BQU9KO0lBQ1Q7SUFFQSxJQUFLLElBQUlILElBQUksR0FBR0EsSUFBSVQsTUFBTVUsTUFBTSxFQUFFRCxJQUFLO1FBQ3JDLElBQUlULEtBQUssQ0FBQ1MsRUFBRSxFQUFFO1lBQ1osTUFBTVEsWUFBWU4sbUJBQW1CRjtZQUVyQyxNQUFNUyxnQkFBZ0JELFVBQVVFLElBQUksQ0FBQyxDQUFDQyxNQUFRZCxnQkFBZ0JjO1lBRTlELElBQUlGLGVBQWU7Z0JBQ2pCLE9BQU9BO1lBQ1Q7UUFDRjtJQUNGO0lBRUEsT0FBT0c7QUFDVCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL21vZGVsLmpzP2Y2NDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTU9WRV9PUkRFUiB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TmV4dE1vdmUoY3VycmVudE1vdmUsIHBsYXllcnNDb3VudCwgcGxheWVyc1RpbWVPdmVyKSB7XG4gIGNvbnN0IHNsaWNlZE1vdmVPcmRlciA9IE1PVkVfT1JERVIuc2xpY2UoMCwgcGxheWVyc0NvdW50KS5maTtcblxuICBjb25zdCBuZXh0TW92ZUluZGV4ID0gc2xpY2VkTW92ZU9yZGVyLmluZGV4T2YoY3VycmVudE1vdmUpICsgMTtcbiAgcmV0dXJuIHNsaWNlZE1vdmVPcmRlcltuZXh0TW92ZUluZGV4XSA/PyBzbGljZWRNb3ZlT3JkZXJbMF07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wdXRlV2lubmVyKGNlbGxzLCBzZXF1ZW5jZVNpemUgPSAzLCBmaWVsZFNpemUgPSAxOSkge1xuICBjb25zdCBnYXAgPSBNYXRoLmZsb29yKHNlcXVlbmNlU2l6ZSAvIDIpO1xuXG4gIGZ1bmN0aW9uIGNvbXBhcmVFbGVtZW50cyhpbmRleGVzKSB7XG4gICAgbGV0IHJlc3VsdCA9IHRydWU7XG5cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IGluZGV4ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHJlc3VsdCAmJj0gISFjZWxsc1tpbmRleGVzW2ldXTtcbiAgICAgIHJlc3VsdCAmJj0gY2VsbHNbaW5kZXhlc1tpXV0gPT09IGNlbGxzW2luZGV4ZXNbaSAtIDFdXTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0U2VxdWVuY2VJbmRleGVzKGkpIHtcbiAgICBjb25zdCByZXMgPSBbXG4gICAgICBbXSwgLy8gLVxuICAgICAgW10sIC8vIFxcXG4gICAgICBbXSwgLy8gL1xuICAgICAgW10sIC8vIHxcbiAgICBdO1xuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBzZXF1ZW5jZVNpemU7IGorKykge1xuICAgICAgcmVzWzBdLnB1c2goaiAtIGdhcCArIGkpO1xuICAgICAgcmVzWzFdLnB1c2goZmllbGRTaXplICogKGogLSBnYXApICsgKGogLSBnYXApICsgaSk7XG4gICAgICByZXNbMl0ucHVzaCgtZmllbGRTaXplICogKGogLSBnYXApICsgKGogLSBnYXApICsgaSk7XG4gICAgICByZXNbM10ucHVzaChmaWVsZFNpemUgKiAoaiAtIGdhcCkgKyBpKTtcbiAgICB9XG5cbiAgICBjb25zdCB4ID0gaSAlIGZpZWxkU2l6ZTtcbiAgICBpZiAoeCA8ICBnYXAgfHwgeCA+PSBmaWVsZFNpemUgLSBnYXApIHtcbiAgICAgIHJlcy5zaGlmdCgpO1xuICAgICAgcmVzLnNoaWZ0KCk7XG4gICAgICByZXMuc2hpZnQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjZWxscy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChjZWxsc1tpXSkge1xuICAgICAgY29uc3QgaW5kZXhSb3dzID0gZ2V0U2VxdWVuY2VJbmRleGVzKGkpO1xuXG4gICAgICBjb25zdCB3aW5uZXJJbmRleGVzID0gaW5kZXhSb3dzLmZpbmQoKHJvdykgPT4gY29tcGFyZUVsZW1lbnRzKHJvdykpO1xuXG4gICAgICBpZiAod2lubmVySW5kZXhlcykge1xuICAgICAgICByZXR1cm4gd2lubmVySW5kZXhlcztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuIl0sIm5hbWVzIjpbIk1PVkVfT1JERVIiLCJnZXROZXh0TW92ZSIsImN1cnJlbnRNb3ZlIiwicGxheWVyc0NvdW50IiwicGxheWVyc1RpbWVPdmVyIiwic2xpY2VkTW92ZU9yZGVyIiwic2xpY2UiLCJmaSIsIm5leHRNb3ZlSW5kZXgiLCJpbmRleE9mIiwiY29tcHV0ZVdpbm5lciIsImNlbGxzIiwic2VxdWVuY2VTaXplIiwiZmllbGRTaXplIiwiZ2FwIiwiTWF0aCIsImZsb29yIiwiY29tcGFyZUVsZW1lbnRzIiwiaW5kZXhlcyIsInJlc3VsdCIsImkiLCJsZW5ndGgiLCJnZXRTZXF1ZW5jZUluZGV4ZXMiLCJyZXMiLCJqIiwicHVzaCIsIngiLCJzaGlmdCIsImluZGV4Um93cyIsIndpbm5lckluZGV4ZXMiLCJmaW5kIiwicm93IiwidW5kZWZpbmVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/model.js\n"));

/***/ })

});