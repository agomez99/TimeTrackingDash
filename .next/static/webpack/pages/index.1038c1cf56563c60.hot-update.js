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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Container */ \"./node_modules/react-bootstrap/esm/Container.js\");\n/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Row */ \"./node_modules/react-bootstrap/esm/Row.js\");\n/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Col */ \"./node_modules/react-bootstrap/esm/Col.js\");\n/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/Card */ \"./node_modules/react-bootstrap/esm/Card.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.json */ \"./data.json\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst Home = ()=>{\n    _s();\n    const [selectedTimeframe, setSelectedTimeframe] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"daily\");\n    const getTimeframeData = (timefr, data)=>{\n        const { current , previous  } = data.filter((item)=>item.timeframe === timefr).reduce((acc, item)=>{\n            return {\n                current: acc.current + item.current,\n                previous: acc.previous + item.previous\n            };\n        }, {\n            current: 0,\n            previous: 0\n        });\n        return {\n            current: current,\n            previous: previous\n        };\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Create Next App\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().main),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    fluid: true,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().card),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_9__[\"default\"].Body, {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                src: \"/images/image-jeremy.png\",\n                                                alt: \"avatar\",\n                                                width: 100,\n                                                height: 100\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                                lineNumber: 42,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: \"Report for\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                                lineNumber: 43,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().card_title),\n                                                children: \"Jeremy Robson.\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                                lineNumber: 44,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().card_body),\n                                                children: [\n                                                    \"daily\",\n                                                    \"weekly\",\n                                                    \"monthly\"\n                                                ].map((timefr)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                            id: timefr,\n                                                            onClick: ()=>setSelectedTimeframe(timefr),\n                                                            className: timefr === selectedTimeframe ? (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().selected) : \"\",\n                                                            children: timefr\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                                            lineNumber: 48,\n                                                            columnNumber: 25\n                                                        }, undefined)\n                                                    }, timefr, false, {\n                                                        fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                                        lineNumber: 47,\n                                                        columnNumber: 23\n                                                    }, undefined))\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                                lineNumber: 45,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                        lineNumber: 41,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                    lineNumber: 40,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                lineNumber: 39,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().card1),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().card_background_work)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                                lineNumber: 63,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_9__[\"default\"].Body, {\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                                        children: \"Work\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                                        lineNumber: 67,\n                                                        columnNumber: 19\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        children: [\n                                                            getTimeframeData(\"Work\", _data_json__WEBPACK_IMPORTED_MODULE_3__).current,\n                                                            \"hrs\"\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                                        lineNumber: 68,\n                                                        columnNumber: 19\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        children: [\n                                                            \"Last Week - \",\n                                                            getTimeframeData(\"Work\", _data_json__WEBPACK_IMPORTED_MODULE_3__).previous,\n                                                            \"hrs\"\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                                        lineNumber: 69,\n                                                        columnNumber: 19\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                                lineNumber: 65,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                        lineNumber: 62,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().card2),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().card_background_exercise)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                                lineNumber: 73,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_9__[\"default\"].Body, {\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                                        children: \"Exercise\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                                        lineNumber: 76,\n                                                        columnNumber: 19\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        children: [\n                                                            getTimeframeData(\"Exercise\", _data_json__WEBPACK_IMPORTED_MODULE_3__).current,\n                                                            \"hrs\"\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                                        lineNumber: 77,\n                                                        columnNumber: 19\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        children: [\n                                                            \"Last Week - \",\n                                                            getTimeframeData(\"Exercise\", _data_json__WEBPACK_IMPORTED_MODULE_3__).previous,\n                                                            \"hrs\"\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                                        lineNumber: 78,\n                                                        columnNumber: 19\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                                lineNumber: 75,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                        lineNumber: 72,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                lineNumber: 61,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                        lineNumber: 38,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"yw/6EYhQtR/qk2xvcxebUldejpc=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7OztBQVN0RTtHQTFFRk47S0FBQUE7QUE0RUUsK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db250YWluZXInO1xyXG5pbXBvcnQgUm93IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Sb3cnO1xyXG5pbXBvcnQgQ29sIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db2wnO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICdyZWFjdC1ib290c3RyYXAvQ2FyZCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IGRhdGEgZnJvbSBcIi4uL2RhdGEuanNvblwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcblxyXG5cclxuY29uc3QgSG9tZSA9ICgpID0+IHtcclxuICBjb25zdCBbc2VsZWN0ZWRUaW1lZnJhbWUsIHNldFNlbGVjdGVkVGltZWZyYW1lXSA9IHVzZVN0YXRlKFwiZGFpbHlcIik7XHJcbiAgY29uc3QgZ2V0VGltZWZyYW1lRGF0YSA9ICh0aW1lZnIsIGRhdGEpID0+IHtcclxuICAgIGNvbnN0IHsgY3VycmVudCwgcHJldmlvdXMgfSA9IGRhdGFcclxuICAgICAgLmZpbHRlcihpdGVtID0+IGl0ZW0udGltZWZyYW1lID09PSB0aW1lZnIpXHJcbiAgICAgIC5yZWR1Y2UoKGFjYywgaXRlbSkgPT4ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBjdXJyZW50OiBhY2MuY3VycmVudCArIGl0ZW0uY3VycmVudCxcclxuICAgICAgICAgIHByZXZpb3VzOiBhY2MucHJldmlvdXMgKyBpdGVtLnByZXZpb3VzXHJcbiAgICAgICAgfVxyXG4gICAgICB9LCB7IGN1cnJlbnQ6IDAsIHByZXZpb3VzOiAwIH0pO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGN1cnJlbnQ6IGN1cnJlbnQsXHJcbiAgICAgIHByZXZpb3VzOiBwcmV2aW91c1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPkNyZWF0ZSBOZXh0IEFwcDwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XHJcbiAgICAgICAgPENvbnRhaW5lciBmbHVpZD5cclxuICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2ltYWdlcy9pbWFnZS1qZXJlbXkucG5nXCIgYWx0PVwiYXZhdGFyXCIgd2lkdGg9ezEwMH0gaGVpZ2h0PXsxMDB9IC8+XHJcbiAgICAgICAgICAgICAgICAgIDxwPlJlcG9ydCBmb3I8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5jYXJkX3RpdGxlfT5KZXJlbXkgUm9ic29uLjwvaDE+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZF9ib2R5fT5cclxuICAgICAgICAgICAgICAgICAgICB7WydkYWlseScsICd3ZWVrbHknLCAnbW9udGhseSddLm1hcCh0aW1lZnIgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAga2V5PXt0aW1lZnJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXt0aW1lZnJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWRUaW1lZnJhbWUodGltZWZyKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3RpbWVmciA9PT0gc2VsZWN0ZWRUaW1lZnJhbWUgPyBzdHlsZXMuc2VsZWN0ZWQgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt0aW1lZnJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT17c3R5bGVzLmNhcmQxfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZF9iYWNrZ3JvdW5kX3dvcmt9PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG5cclxuICAgICAgICAgICAgICAgICAgPGg1Pldvcms8L2g1PlxyXG4gICAgICAgICAgICAgICAgICA8cD57Z2V0VGltZWZyYW1lRGF0YShcIldvcmtcIiwgZGF0YSkuY3VycmVudH1ocnM8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwPkxhc3QgV2VlayAtIHtnZXRUaW1lZnJhbWVEYXRhKFwiV29ya1wiLCBkYXRhKS5wcmV2aW91c31ocnM8L3A+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZDJ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkX2JhY2tncm91bmRfZXhlcmNpc2V9PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICA8aDU+RXhlcmNpc2U8L2g1PlxyXG4gICAgICAgICAgICAgICAgICA8cD57Z2V0VGltZWZyYW1lRGF0YShcIkV4ZXJjaXNlXCIsIGRhdGEpLmN1cnJlbnR9aHJzPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cD5MYXN0IFdlZWsgLSB7Z2V0VGltZWZyYW1lRGF0YShcIkV4ZXJjaXNlXCIsIGRhdGEpLnByZXZpb3VzfWhyczwvcD5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8L21haW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuXHJcblxyXG4iXSwibmFtZXMiOlsiSGVhZCIsInN0eWxlcyIsIkNvbnRhaW5lciIsIlJvdyIsIkNvbCIsIkNhcmQiLCJJbWFnZSIsImRhdGEiLCJ1c2VTdGF0ZSIsIkhvbWUiLCJzZWxlY3RlZFRpbWVmcmFtZSIsInNldFNlbGVjdGVkVGltZWZyYW1lIiwiZ2V0VGltZWZyYW1lRGF0YSIsInRpbWVmciIsImN1cnJlbnQiLCJwcmV2aW91cyIsImZpbHRlciIsIml0ZW0iLCJ0aW1lZnJhbWUiLCJyZWR1Y2UiLCJhY2MiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJ0aXRsZSIsIm1haW4iLCJmbHVpZCIsImNhcmQiLCJCb2R5Iiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJwIiwiaDEiLCJjYXJkX3RpdGxlIiwiY2FyZF9ib2R5IiwibWFwIiwiYSIsImlkIiwib25DbGljayIsInNlbGVjdGVkIiwiY2FyZDEiLCJjYXJkX2JhY2tncm91bmRfd29yayIsImg1IiwiY2FyZDIiLCJjYXJkX2JhY2tncm91bmRfZXhlcmNpc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});