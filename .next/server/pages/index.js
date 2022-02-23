"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @skynexui/components */ \"@skynexui/components\");\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction HomePage() {\n    const [imageApi, setImageApi] = react__WEBPACK_IMPORTED_MODULE_1___default().useState();\n    const url = 'https://cataas.com/cat/c';\n    async function getImage() {\n        await fetch(url).then((response)=>{\n            setImageApi(`${response.url}`);\n            console.log(response);\n        }).catch((err)=>{\n            console.log(err);\n        });\n    }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n            styleSheet: {\n                display: 'flex',\n                alignItems: 'center',\n                justifyContent: 'center',\n                backgroundImage: 'url(https://svgsilh.com/png-1024/1314467.png)',\n                backgroundRepeat: 'repeat',\n                backgroundSize: \"50px\",\n                backgroundPosition: \"10px\",\n                backgroundOrigin: 'content-box'\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                styleSheet: {\n                    backgroundColor: \"white\",\n                    borderRadius: \"40px\",\n                    maxWidth: \"600px\",\n                    maxHeight: \"400px\",\n                    width: \"100%\",\n                    height: \"100%\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: imageApi\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\cecil\\\\projects\\\\aCatPlease\\\\pages\\\\index.jsx\",\n                            lineNumber: 26,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\cecil\\\\projects\\\\aCatPlease\\\\pages\\\\index.jsx\",\n                        lineNumber: 25,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: getImage,\n                            children: \"Click Me\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\cecil\\\\projects\\\\aCatPlease\\\\pages\\\\index.jsx\",\n                            lineNumber: 29,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\cecil\\\\projects\\\\aCatPlease\\\\pages\\\\index.jsx\",\n                        lineNumber: 28,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\cecil\\\\projects\\\\aCatPlease\\\\pages\\\\index.jsx\",\n                lineNumber: 24,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\cecil\\\\projects\\\\aCatPlease\\\\pages\\\\index.jsx\",\n            lineNumber: 21,\n            columnNumber: 13\n        }, this)\n    }, void 0, false));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBeUI7QUFDaUQ7U0FFakVNLFFBQVEsR0FBRSxDQUFDO0lBQ3BCLEtBQUssRUFBRUMsUUFBUSxFQUFFQyxXQUFXLElBQUlSLHFEQUFjO0lBQzlDLEtBQUssQ0FBQ1UsR0FBRyxHQUFHLENBQTBCO21CQUV2QkMsUUFBUSxHQUFFLENBQUM7UUFDdkIsS0FBSyxDQUFDQyxLQUFLLENBQUNGLEdBQUcsRUFBRUcsSUFBSSxFQUNQQyxRQUFRLEdBQUssQ0FBQztZQUNYTixXQUFXLElBQUlNLFFBQVEsQ0FBQ0osR0FBRztZQUMzQkssT0FBTyxDQUFDQyxHQUFHLENBQUNGLFFBQVE7UUFDeEIsQ0FBQyxFQUNDRyxLQUFLLEVBQ0ZDLEdBQUcsR0FBSyxDQUFDO1lBQ05ILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRSxHQUFHO1FBQ25CLENBQUM7SUFDckIsQ0FBQztJQUNHLE1BQU0sNkVBQUM7OEZBRUVqQixxREFBRztZQUFDa0IsVUFBVSxFQUFFLENBQUNDO2dCQUFBQSxPQUFPLEVBQUUsQ0FBTTtnQkFBRUMsVUFBVSxFQUFFLENBQVE7Z0JBQUVDLGNBQWMsRUFBRSxDQUFRO2dCQUN4RkMsZUFBZSxFQUFFLENBQStDO2dCQUNoRUMsZ0JBQWdCLEVBQUUsQ0FBUTtnQkFBRUMsY0FBYyxFQUFFLENBQU07Z0JBQUVDLGtCQUFrQixFQUFFLENBQU07Z0JBQUVDLGdCQUFnQixFQUFFLENBQWE7WUFBQSxDQUFDO2tHQUNwRzFCLHFEQUFHO2dCQUFDa0IsVUFBVSxFQUFFLENBQUNTO29CQUFBQSxlQUFlLEVBQUUsQ0FBTztvQkFBRUMsWUFBWSxFQUFFLENBQU07b0JBQUVDLFFBQVEsRUFBRSxDQUFPO29CQUFFQyxTQUFTLEVBQUUsQ0FBTztvQkFBRUMsS0FBSyxFQUFFLENBQU07b0JBQUVDLE1BQU0sRUFBRSxDQUFNO2dCQUFBLENBQUM7O2dHQUNsSWhDLHFEQUFHOzhHQUNDaUMsQ0FBRzs0QkFBQ0MsR0FBRyxFQUFFNUIsUUFBUTs7Ozs7Ozs7Ozs7Z0dBRXJCTixxREFBRzs4R0FDQ21DLENBQU07NEJBQUNDLE9BQU8sRUFBRTFCLFFBQVE7c0NBQUUsQ0FBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNM0QsQ0FBQztBQUVELGlFQUFlTCxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qc3g/N2ZmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEJveCwgQnV0dG9uLCBUZXh0LCBUZXh0RmllbGQsIEltYWdlIH0gZnJvbSAnQHNreW5leHVpL2NvbXBvbmVudHMnO1xyXG5cclxuZnVuY3Rpb24gSG9tZVBhZ2UoKXtcclxuY29uc3QgW2ltYWdlQXBpLCBzZXRJbWFnZUFwaV0gPSBSZWFjdC51c2VTdGF0ZSgpXHJcbmNvbnN0IHVybCA9ICdodHRwczovL2NhdGFhcy5jb20vY2F0L2MnXHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRJbWFnZSgpe1xyXG4gICBhd2FpdCBmZXRjaCh1cmwpLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAocmVzcG9uc2UpID0+IHsgXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SW1hZ2VBcGkoYCR7cmVzcG9uc2UudXJsfWApXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApLmNhdGNoKFxyXG4gICAgICAgICAgICAgICAgICAgIChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbn1cclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8Qm94IHN0eWxlU2hlZXQ9e3tkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoaHR0cHM6Ly9zdmdzaWxoLmNvbS9wbmctMTAyNC8xMzE0NDY3LnBuZyknLFxyXG5cdFx0XHRcdFx0YmFja2dyb3VuZFJlcGVhdDogJ3JlcGVhdCcsIGJhY2tncm91bmRTaXplOiBcIjUwcHhcIiwgYmFja2dyb3VuZFBvc2l0aW9uOiBcIjEwcHhcIiwgYmFja2dyb3VuZE9yaWdpbjogJ2NvbnRlbnQtYm94J319PlxyXG4gICAgICAgICAgICAgICAgPEJveCBzdHlsZVNoZWV0PXt7YmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIsIGJvcmRlclJhZGl1czogXCI0MHB4XCIsIG1heFdpZHRoOiBcIjYwMHB4XCIsIG1heEhlaWdodDogXCI0MDBweFwiLCB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICA8Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2VBcGl9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICA8Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2dldEltYWdlfT5DbGljayBNZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTsiXSwibmFtZXMiOlsiUmVhY3QiLCJCb3giLCJCdXR0b24iLCJUZXh0IiwiVGV4dEZpZWxkIiwiSW1hZ2UiLCJIb21lUGFnZSIsImltYWdlQXBpIiwic2V0SW1hZ2VBcGkiLCJ1c2VTdGF0ZSIsInVybCIsImdldEltYWdlIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJlcnIiLCJzdHlsZVNoZWV0IiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRSZXBlYXQiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmRPcmlnaW4iLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJSYWRpdXMiLCJtYXhXaWR0aCIsIm1heEhlaWdodCIsIndpZHRoIiwiaGVpZ2h0IiwiaW1nIiwic3JjIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ }),

/***/ "@skynexui/components":
/*!***************************************!*\
  !*** external "@skynexui/components" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@skynexui/components");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.jsx"));
module.exports = __webpack_exports__;

})();