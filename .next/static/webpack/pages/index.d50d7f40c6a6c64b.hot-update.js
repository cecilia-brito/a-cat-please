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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_cecil_projects_aCatPlease_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_cecil_projects_aCatPlease_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_cecil_projects_aCatPlease_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @skynexui/components */ \"./node_modules/@skynexui/components/dist/esm/index.js\");\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction HomePage() {\n    _s();\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_2___default().useState(), 2), imageApi = ref[0], useImageApi = ref[1];\n    var url = 'https://cataas.com/cat/cute';\n    function getImage() {\n        return _getImage.apply(this, arguments);\n    }\n    function _getImage() {\n        _getImage = _asyncToGenerator(C_Users_cecil_projects_aCatPlease_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var data;\n            return C_Users_cecil_projects_aCatPlease_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return fetch(url).then(function(response) {\n                            return response.json();\n                        });\n                    case 2:\n                        data = _ctx.sent;\n                    case 3:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _getImage.apply(this, arguments);\n    }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_3__.Box, {\n            styleSheet: {\n                display: 'flex',\n                alignItems: 'center',\n                justifyContent: 'center',\n                backgroundImage: 'url(https://svgsilh.com/png-1024/1314467.png)',\n                backgroundRepeat: 'repeat',\n                backgroundSize: \"50px\",\n                backgroundPosition: \"10px\",\n                backgroundOrigin: 'content-box'\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                styleSheet: {\n                    backgroundColor: \"white\",\n                    borderRadius: \"40px\",\n                    maxWidth: \"600px\",\n                    maxHeight: \"400px\",\n                    width: \"100%\",\n                    height: \"100%\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                            src: imageApi\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\cecil\\\\projects\\\\aCatPlease\\\\pages\\\\index.jsx\",\n                            lineNumber: 18,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\cecil\\\\projects\\\\aCatPlease\\\\pages\\\\index.jsx\",\n                        lineNumber: 17,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                            children: \"Click Me\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\cecil\\\\projects\\\\aCatPlease\\\\pages\\\\index.jsx\",\n                            lineNumber: 21,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\cecil\\\\projects\\\\aCatPlease\\\\pages\\\\index.jsx\",\n                        lineNumber: 20,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\cecil\\\\projects\\\\aCatPlease\\\\pages\\\\index.jsx\",\n                lineNumber: 16,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\cecil\\\\projects\\\\aCatPlease\\\\pages\\\\index.jsx\",\n            lineNumber: 13,\n            columnNumber: 13\n        }, this)\n    }, void 0, false));\n}\n_s(HomePage, \"k8vekuu0Xct0ydDowwOBdi4PnV0=\");\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF5QjtBQUNpRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FFakVNLFFBQVEsR0FBRSxDQUFDOztJQUNwQixHQUFLLENBQTJCTixHQUFnQixrQkFBaEJBLHFEQUFjLFFBQXZDUSxRQUFRLEdBQWlCUixHQUFnQixLQUEvQlMsV0FBVyxHQUFJVCxHQUFnQjtJQUNoRCxHQUFLLENBQUNVLEdBQUcsR0FBRyxDQUE2QjthQUUxQkMsUUFBUTtlQUFSQSxTQUFROzthQUFSQSxTQUFRO1FBQVJBLFNBQVEsa0tBQXZCLFFBQVEsV0FBaUIsQ0FBQztnQkFDaEJDLElBQUk7Ozs7OytCQUFTQyxLQUFLLENBQUNILEdBQUcsRUFBRUksSUFBSSxDQUFDQyxRQUFRLENBQVJBLFFBQVE7NEJBQUlBLE1BQU0sQ0FBTkEsUUFBUSxDQUFDQyxJQUFJOzs7d0JBQXRESixJQUFJOzs7Ozs7UUFDZCxDQUFDO2VBRmNELFNBQVE7O0lBR25CLE1BQU0sNkVBQUM7OEZBRUVWLHFEQUFHO1lBQUNnQixVQUFVLEVBQUUsQ0FBQ0M7Z0JBQUFBLE9BQU8sRUFBRSxDQUFNO2dCQUFFQyxVQUFVLEVBQUUsQ0FBUTtnQkFBRUMsY0FBYyxFQUFFLENBQVE7Z0JBQ3hGQyxlQUFlLEVBQUUsQ0FBK0M7Z0JBQ2hFQyxnQkFBZ0IsRUFBRSxDQUFRO2dCQUFFQyxjQUFjLEVBQUUsQ0FBTTtnQkFBRUMsa0JBQWtCLEVBQUUsQ0FBTTtnQkFBRUMsZ0JBQWdCLEVBQUUsQ0FBYTtZQUFBLENBQUM7a0dBQ3BHeEIscURBQUc7Z0JBQUNnQixVQUFVLEVBQUUsQ0FBQ1M7b0JBQUFBLGVBQWUsRUFBRSxDQUFPO29CQUFFQyxZQUFZLEVBQUUsQ0FBTTtvQkFBRUMsUUFBUSxFQUFFLENBQU87b0JBQUVDLFNBQVMsRUFBRSxDQUFPO29CQUFFQyxLQUFLLEVBQUUsQ0FBTTtvQkFBRUMsTUFBTSxFQUFFLENBQU07Z0JBQUEsQ0FBQzs7Z0dBQ2xJOUIscURBQUc7OEdBQ0MrQixDQUFHOzRCQUFDQyxHQUFHLEVBQUV6QixRQUFROzs7Ozs7Ozs7OztnR0FFckJQLHFEQUFHOzhHQUNDaUMsQ0FBTTtzQ0FBQyxDQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU14QyxDQUFDO0dBdkJRNUIsUUFBUTtLQUFSQSxRQUFRO0FBeUJqQiwrREFBZUEsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzeD83ZmZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQm94LCBCdXR0b24sIFRleHQsIFRleHRGaWVsZCwgSW1hZ2UgfSBmcm9tICdAc2t5bmV4dWkvY29tcG9uZW50cyc7XHJcblxyXG5mdW5jdGlvbiBIb21lUGFnZSgpe1xyXG5jb25zdCBbaW1hZ2VBcGksIHVzZUltYWdlQXBpXSA9IFJlYWN0LnVzZVN0YXRlKClcclxuY29uc3QgdXJsID0gJ2h0dHBzOi8vY2F0YWFzLmNvbS9jYXQvY3V0ZSdcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldEltYWdlKCl7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2godXJsKS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxufVxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxCb3ggc3R5bGVTaGVldD17e2Rpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuXHRcdFx0XHRcdGJhY2tncm91bmRJbWFnZTogJ3VybChodHRwczovL3N2Z3NpbGguY29tL3BuZy0xMDI0LzEzMTQ0NjcucG5nKScsXHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kUmVwZWF0OiAncmVwZWF0JywgYmFja2dyb3VuZFNpemU6IFwiNTBweFwiLCBiYWNrZ3JvdW5kUG9zaXRpb246IFwiMTBweFwiLCBiYWNrZ3JvdW5kT3JpZ2luOiAnY29udGVudC1ib3gnfX0+XHJcbiAgICAgICAgICAgICAgICA8Qm94IHN0eWxlU2hlZXQ9e3tiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIiwgYm9yZGVyUmFkaXVzOiBcIjQwcHhcIiwgbWF4V2lkdGg6IFwiNjAwcHhcIiwgbWF4SGVpZ2h0OiBcIjQwMHB4XCIsIHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZUFwaX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24+Q2xpY2sgTWU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7Il0sIm5hbWVzIjpbIlJlYWN0IiwiQm94IiwiQnV0dG9uIiwiVGV4dCIsIlRleHRGaWVsZCIsIkltYWdlIiwiSG9tZVBhZ2UiLCJ1c2VTdGF0ZSIsImltYWdlQXBpIiwidXNlSW1hZ2VBcGkiLCJ1cmwiLCJnZXRJbWFnZSIsImRhdGEiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJzdHlsZVNoZWV0IiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRSZXBlYXQiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmRPcmlnaW4iLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJSYWRpdXMiLCJtYXhXaWR0aCIsIm1heEhlaWdodCIsIndpZHRoIiwiaGVpZ2h0IiwiaW1nIiwic3JjIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ })

});