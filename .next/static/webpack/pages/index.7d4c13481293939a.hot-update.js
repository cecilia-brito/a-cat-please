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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_cecil_projects_aCatPlease_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_cecil_projects_aCatPlease_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_cecil_projects_aCatPlease_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @skynexui/components */ \"./node_modules/@skynexui/components/dist/esm/index.js\");\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction HomePage() {\n    _s();\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_2___default().useState(), 2), imageApi = ref[0], useImageApi = ref[1];\n    var url = 'https://cataas.com/cat/cute';\n    function getImage() {\n        return _getImage.apply(this, arguments);\n    }\n    function _getImage() {\n        _getImage = _asyncToGenerator(C_Users_cecil_projects_aCatPlease_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return C_Users_cecil_projects_aCatPlease_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        fetch(url, {\n                            method: 'get'\n                        }).then(function(response) {\n                            return response.json();\n                        });\n                        console.log(data);\n                    case 2:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _getImage.apply(this, arguments);\n    }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_3__.Box, {\n            styleSheet: {\n                display: 'flex',\n                alignItems: 'center',\n                justifyContent: 'center',\n                backgroundImage: 'url(https://svgsilh.com/png-1024/1314467.png)',\n                backgroundRepeat: 'repeat',\n                backgroundSize: \"50px\",\n                backgroundPosition: \"10px\",\n                backgroundOrigin: 'content-box'\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                styleSheet: {\n                    backgroundColor: \"white\",\n                    borderRadius: \"40px\",\n                    maxWidth: \"600px\",\n                    maxHeight: \"400px\",\n                    width: \"100%\",\n                    height: \"100%\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                            src: imageApi\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\cecil\\\\projects\\\\aCatPlease\\\\pages\\\\index.jsx\",\n                            lineNumber: 19,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\cecil\\\\projects\\\\aCatPlease\\\\pages\\\\index.jsx\",\n                        lineNumber: 18,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                            onClick: getImage,\n                            children: \"Click Me\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\cecil\\\\projects\\\\aCatPlease\\\\pages\\\\index.jsx\",\n                            lineNumber: 22,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\cecil\\\\projects\\\\aCatPlease\\\\pages\\\\index.jsx\",\n                        lineNumber: 21,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\cecil\\\\projects\\\\aCatPlease\\\\pages\\\\index.jsx\",\n                lineNumber: 17,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\cecil\\\\projects\\\\aCatPlease\\\\pages\\\\index.jsx\",\n            lineNumber: 14,\n            columnNumber: 13\n        }, this)\n    }, void 0, false));\n}\n_s(HomePage, \"k8vekuu0Xct0ydDowwOBdi4PnV0=\");\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF5QjtBQUNpRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FFakVNLFFBQVEsR0FBRSxDQUFDOztJQUNwQixHQUFLLENBQTJCTixHQUFnQixrQkFBaEJBLHFEQUFjLFFBQXZDUSxRQUFRLEdBQWlCUixHQUFnQixLQUEvQlMsV0FBVyxHQUFJVCxHQUFnQjtJQUNoRCxHQUFLLENBQUNVLEdBQUcsR0FBRyxDQUE2QjthQUUxQkMsUUFBUTtlQUFSQSxTQUFROzthQUFSQSxTQUFRO1FBQVJBLFNBQVEsa0tBQXZCLFFBQVEsV0FBaUIsQ0FBQzs7Ozt3QkFDckJDLEtBQUssQ0FBQ0YsR0FBRyxFQUFFLENBQUNHOzRCQUFBQSxNQUFNLEVBQUUsQ0FBSzt3QkFBQSxDQUFDLEVBQUVDLElBQUksQ0FBQ0MsUUFBUSxDQUFSQSxRQUFROzRCQUFJQSxNQUFNLENBQU5BLFFBQVEsQ0FBQ0MsSUFBSTs7d0JBQzNEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsSUFBSTs7Ozs7O1FBQ3BCLENBQUM7ZUFIY1IsU0FBUTs7SUFJbkIsTUFBTSw2RUFBQzs4RkFFRVYscURBQUc7WUFBQ21CLFVBQVUsRUFBRSxDQUFDQztnQkFBQUEsT0FBTyxFQUFFLENBQU07Z0JBQUVDLFVBQVUsRUFBRSxDQUFRO2dCQUFFQyxjQUFjLEVBQUUsQ0FBUTtnQkFDeEZDLGVBQWUsRUFBRSxDQUErQztnQkFDaEVDLGdCQUFnQixFQUFFLENBQVE7Z0JBQUVDLGNBQWMsRUFBRSxDQUFNO2dCQUFFQyxrQkFBa0IsRUFBRSxDQUFNO2dCQUFFQyxnQkFBZ0IsRUFBRSxDQUFhO1lBQUEsQ0FBQztrR0FDcEczQixxREFBRztnQkFBQ21CLFVBQVUsRUFBRSxDQUFDUztvQkFBQUEsZUFBZSxFQUFFLENBQU87b0JBQUVDLFlBQVksRUFBRSxDQUFNO29CQUFFQyxRQUFRLEVBQUUsQ0FBTztvQkFBRUMsU0FBUyxFQUFFLENBQU87b0JBQUVDLEtBQUssRUFBRSxDQUFNO29CQUFFQyxNQUFNLEVBQUUsQ0FBTTtnQkFBQSxDQUFDOztnR0FDbElqQyxxREFBRzs4R0FDQ2tDLENBQUc7NEJBQUNDLEdBQUcsRUFBRTVCLFFBQVE7Ozs7Ozs7Ozs7O2dHQUVyQlAscURBQUc7OEdBQ0NvQyxDQUFNOzRCQUFDQyxPQUFPLEVBQUUzQixRQUFRO3NDQUFFLENBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTNELENBQUM7R0F4QlFMLFFBQVE7S0FBUkEsUUFBUTtBQTBCakIsK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qc3g/N2ZmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEJveCwgQnV0dG9uLCBUZXh0LCBUZXh0RmllbGQsIEltYWdlIH0gZnJvbSAnQHNreW5leHVpL2NvbXBvbmVudHMnO1xyXG5cclxuZnVuY3Rpb24gSG9tZVBhZ2UoKXtcclxuY29uc3QgW2ltYWdlQXBpLCB1c2VJbWFnZUFwaV0gPSBSZWFjdC51c2VTdGF0ZSgpXHJcbmNvbnN0IHVybCA9ICdodHRwczovL2NhdGFhcy5jb20vY2F0L2N1dGUnXHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRJbWFnZSgpe1xyXG4gICAgIGZldGNoKHVybCwge21ldGhvZDogJ2dldCd9KS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbn1cclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8Qm94IHN0eWxlU2hlZXQ9e3tkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoaHR0cHM6Ly9zdmdzaWxoLmNvbS9wbmctMTAyNC8xMzE0NDY3LnBuZyknLFxyXG5cdFx0XHRcdFx0YmFja2dyb3VuZFJlcGVhdDogJ3JlcGVhdCcsIGJhY2tncm91bmRTaXplOiBcIjUwcHhcIiwgYmFja2dyb3VuZFBvc2l0aW9uOiBcIjEwcHhcIiwgYmFja2dyb3VuZE9yaWdpbjogJ2NvbnRlbnQtYm94J319PlxyXG4gICAgICAgICAgICAgICAgPEJveCBzdHlsZVNoZWV0PXt7YmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIsIGJvcmRlclJhZGl1czogXCI0MHB4XCIsIG1heFdpZHRoOiBcIjYwMHB4XCIsIG1heEhlaWdodDogXCI0MDBweFwiLCB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICA8Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2VBcGl9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICA8Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2dldEltYWdlfT5DbGljayBNZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTsiXSwibmFtZXMiOlsiUmVhY3QiLCJCb3giLCJCdXR0b24iLCJUZXh0IiwiVGV4dEZpZWxkIiwiSW1hZ2UiLCJIb21lUGFnZSIsInVzZVN0YXRlIiwiaW1hZ2VBcGkiLCJ1c2VJbWFnZUFwaSIsInVybCIsImdldEltYWdlIiwiZmV0Y2giLCJtZXRob2QiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJzdHlsZVNoZWV0IiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRSZXBlYXQiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmRPcmlnaW4iLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJSYWRpdXMiLCJtYXhXaWR0aCIsIm1heEhlaWdodCIsIndpZHRoIiwiaGVpZ2h0IiwiaW1nIiwic3JjIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ })

});