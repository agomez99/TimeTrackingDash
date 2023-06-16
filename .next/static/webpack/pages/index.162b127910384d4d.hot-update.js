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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Container */ \"./node_modules/react-bootstrap/esm/Container.js\");\n/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Row */ \"./node_modules/react-bootstrap/esm/Row.js\");\n/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Col */ \"./node_modules/react-bootstrap/esm/Col.js\");\n/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/Card */ \"./node_modules/react-bootstrap/esm/Card.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.json */ \"./data.json\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst Home = ()=>{\n    _s();\n    const [selectedTimeframe, setSelectedTimeframe] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"daily\");\n    console.log(selectedTimeframe);\n    const getTimeframeData = (timefr, data)=>{\n        const { current , previous  } = data.reduce((acc, item)=>{\n            return {\n                current: acc.current + item.timeframes[timefr].current,\n                previous: acc.previous + item.timeframes[timefr].previous\n            };\n        }, {\n            current: 0,\n            previous: 0\n        });\n        return {\n            current,\n            previous\n        };\n    };\n    console.log(getTimeframeData(\"Work\", _data_json__WEBPACK_IMPORTED_MODULE_3__));\n    console.log(getTimeframeData(\"Exercise\", _data_json__WEBPACK_IMPORTED_MODULE_3__));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Create Next App\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().main),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    fluid: true,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().card),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_9__[\"default\"].Body, {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                src: \"/images/image-jeremy.png\",\n                                                alt: \"avatar\",\n                                                width: 100,\n                                                height: 100\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                                lineNumber: 49,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: \"Report for\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                                lineNumber: 50,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().card_title),\n                                                children: \"Jeremy Robson.\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                                lineNumber: 51,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().card_body),\n                                                children: [\n                                                    \"daily\",\n                                                    \"weekly\",\n                                                    \"monthly\"\n                                                ].map((timefr)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                            id: timefr,\n                                                            onClick: ()=>setSelectedTimeframe(timefr),\n                                                            className: timefr === selectedTimeframe ? (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().selected) : \"\",\n                                                            children: timefr\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                                            lineNumber: 55,\n                                                            columnNumber: 25\n                                                        }, undefined)\n                                                    }, timefr, false, {\n                                                        fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                                        lineNumber: 54,\n                                                        columnNumber: 23\n                                                    }, undefined))\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                                lineNumber: 52,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                        lineNumber: 48,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                    lineNumber: 47,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                lineNumber: 46,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().card1),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().card_background_work)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                                lineNumber: 70,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_9__[\"default\"].Body, {\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                                        children: \"Work\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                                        lineNumber: 74,\n                                                        columnNumber: 19\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        children: [\n                                                            getTimeframeData(\"Work\", _data_json__WEBPACK_IMPORTED_MODULE_3__).current,\n                                                            \"hrs\"\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                                        lineNumber: 75,\n                                                        columnNumber: 19\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        children: [\n                                                            \"Last Week - \",\n                                                            getTimeframeData(\"Work\", _data_json__WEBPACK_IMPORTED_MODULE_3__).previous,\n                                                            \"hrs\"\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                                        lineNumber: 76,\n                                                        columnNumber: 19\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                                lineNumber: 72,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                        lineNumber: 69,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().card2),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().card_background_exercise)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                                lineNumber: 80,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_9__[\"default\"].Body, {\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                                        children: \"Exercise\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                                        lineNumber: 83,\n                                                        columnNumber: 19\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        children: [\n                                                            getTimeframeData(\"Exercise\", _data_json__WEBPACK_IMPORTED_MODULE_3__).current,\n                                                            \"hrs\"\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                                        lineNumber: 84,\n                                                        columnNumber: 19\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        children: [\n                                                            \"Last Week - \",\n                                                            getTimeframeData(\"Exercise\", _data_json__WEBPACK_IMPORTED_MODULE_3__).previous,\n                                                            \"hrs\"\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                                        lineNumber: 85,\n                                                        columnNumber: 19\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                                lineNumber: 82,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                        lineNumber: 79,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                lineNumber: 68,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                        lineNumber: 45,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"yw/6EYhQtR/qk2xvcxebUldejpc=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qjs7NERBQUU7NERBQWFwQixpQkFBaUIsWUFBWVAsdUNBQUlBLEVBQUVVLFFBQVE7NERBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU3RFO0dBakZGUjtLQUFBQTtBQW1GRSwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbnRhaW5lcic7XHJcbmltcG9ydCBSb3cgZnJvbSAncmVhY3QtYm9vdHN0cmFwL1Jvdyc7XHJcbmltcG9ydCBDb2wgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbCc7XHJcbmltcG9ydCBDYXJkIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9DYXJkJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgZGF0YSBmcm9tIFwiLi4vZGF0YS5qc29uXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuXHJcblxyXG5jb25zdCBIb21lID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtzZWxlY3RlZFRpbWVmcmFtZSwgc2V0U2VsZWN0ZWRUaW1lZnJhbWVdID0gdXNlU3RhdGUoXCJkYWlseVwiKTtcclxuICBjb25zb2xlLmxvZyhzZWxlY3RlZFRpbWVmcmFtZSlcclxuICBcclxuICBjb25zdCBnZXRUaW1lZnJhbWVEYXRhID0gKHRpbWVmciwgZGF0YSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHsgY3VycmVudCwgcHJldmlvdXMgfSA9IGRhdGEucmVkdWNlKChhY2MsIGl0ZW0pID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBjdXJyZW50OiBhY2MuY3VycmVudCArIGl0ZW0udGltZWZyYW1lc1t0aW1lZnJdLmN1cnJlbnQsXHJcbiAgICAgICAgcHJldmlvdXM6IGFjYy5wcmV2aW91cyArIGl0ZW0udGltZWZyYW1lc1t0aW1lZnJdLnByZXZpb3VzXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICAgLCB7IGN1cnJlbnQ6IDAsIHByZXZpb3VzOiAwIH0pXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgY3VycmVudCxcclxuICAgICAgcHJldmlvdXNcclxuICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICB9XHJcbiAgY29uc29sZS5sb2coZ2V0VGltZWZyYW1lRGF0YShcIldvcmtcIiwgZGF0YSkpXHJcbiAgXHJcblxyXG4gIGNvbnNvbGUubG9nKGdldFRpbWVmcmFtZURhdGEoXCJFeGVyY2lzZVwiLCBkYXRhKSlcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+Q3JlYXRlIE5leHQgQXBwPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cclxuICAgICAgICA8Q29udGFpbmVyIGZsdWlkPlxyXG4gICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfT5cclxuICAgICAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvaW1hZ2VzL2ltYWdlLWplcmVteS5wbmdcIiBhbHQ9XCJhdmF0YXJcIiB3aWR0aD17MTAwfSBoZWlnaHQ9ezEwMH0gLz5cclxuICAgICAgICAgICAgICAgICAgPHA+UmVwb3J0IGZvcjwvcD5cclxuICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLmNhcmRfdGl0bGV9PkplcmVteSBSb2Jzb24uPC9oMT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkX2JvZHl9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtbJ2RhaWx5JywgJ3dlZWtseScsICdtb250aGx5J10ubWFwKHRpbWVmciA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCBrZXk9e3RpbWVmcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e3RpbWVmcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZFRpbWVmcmFtZSh0aW1lZnIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17dGltZWZyID09PSBzZWxlY3RlZFRpbWVmcmFtZSA/IHN0eWxlcy5zZWxlY3RlZCA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3RpbWVmcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZDF9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkX2JhY2tncm91bmRfd29ya30+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8aDU+V29yazwvaDU+XHJcbiAgICAgICAgICAgICAgICAgIDxwPntnZXRUaW1lZnJhbWVEYXRhKFwiV29ya1wiLCBkYXRhKS5jdXJyZW50fWhyczwvcD5cclxuICAgICAgICAgICAgICAgICAgPHA+TGFzdCBXZWVrIC0ge2dldFRpbWVmcmFtZURhdGEoXCJXb3JrXCIsIGRhdGEpLnByZXZpb3VzfWhyczwvcD5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9e3N0eWxlcy5jYXJkMn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmRfYmFja2dyb3VuZF9leGVyY2lzZX0+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgIDxoNT5FeGVyY2lzZTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgIDxwPntnZXRUaW1lZnJhbWVEYXRhKFwiRXhlcmNpc2VcIiwgZGF0YSkuY3VycmVudH1ocnM8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwPkxhc3QgV2VlayAtIHtnZXRUaW1lZnJhbWVEYXRhKFwiRXhlcmNpc2VcIiwgZGF0YSkucHJldmlvdXN9aHJzPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBleHBvcnQgZGVmYXVsdCBIb21lO1xyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJIZWFkIiwic3R5bGVzIiwiQ29udGFpbmVyIiwiUm93IiwiQ29sIiwiQ2FyZCIsIkltYWdlIiwiZGF0YSIsInVzZVN0YXRlIiwiSG9tZSIsInNlbGVjdGVkVGltZWZyYW1lIiwic2V0U2VsZWN0ZWRUaW1lZnJhbWUiLCJjb25zb2xlIiwibG9nIiwiZ2V0VGltZWZyYW1lRGF0YSIsInRpbWVmciIsImN1cnJlbnQiLCJwcmV2aW91cyIsInJlZHVjZSIsImFjYyIsIml0ZW0iLCJ0aW1lZnJhbWVzIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwidGl0bGUiLCJtYWluIiwiZmx1aWQiLCJjYXJkIiwiQm9keSIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwicCIsImgxIiwiY2FyZF90aXRsZSIsImNhcmRfYm9keSIsIm1hcCIsImEiLCJpZCIsIm9uQ2xpY2siLCJzZWxlY3RlZCIsImNhcmQxIiwiY2FyZF9iYWNrZ3JvdW5kX3dvcmsiLCJoNSIsImNhcmQyIiwiY2FyZF9iYWNrZ3JvdW5kX2V4ZXJjaXNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});