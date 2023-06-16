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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data.json */ \"./data.json\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [selectedTimeframe, setSelectedTimeframe] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const timeframes = [\n        \"daily\",\n        \"weekly\",\n        \"monthly\"\n    ];\n    const handleTimeframeClick = (timeframe)=>{\n        setSelectedTimeframe(timeframe);\n    };\n    const displayWork = ()=>{\n        const timeframeData = _data_json__WEBPACK_IMPORTED_MODULE_4__[0].timeframes[selectedTimeframe];\n        return timeframeData ? timeframeData.current : null;\n    };\n    const displayPlay = ()=>{\n        const timeframeData = _data_json__WEBPACK_IMPORTED_MODULE_4__[1].timeframes[selectedTimeframe];\n        return timeframeData ? timeframeData.current : null;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Create Next App\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().main),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Container, {\n                    fluid: true,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Row, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Col, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Card, {\n                                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().card),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Card.Body, {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                src: \"/images/image-jeremy.png\",\n                                                alt: \"avatar\",\n                                                width: 100,\n                                                height: 100\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                                lineNumber: 41,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: \"Report for\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                                lineNumber: 42,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().card_title),\n                                                children: \"Jeremy Robson.\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                                lineNumber: 43,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().card_body),\n                                                children: timeframes.map((timefr)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                            id: timefr,\n                                                            onClick: ()=>handleTimeframeClick(timefr),\n                                                            className: timefr === selectedTimeframe ? (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().selected) : \"\",\n                                                            children: timefr\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                                            lineNumber: 47,\n                                                            columnNumber: 25\n                                                        }, this)\n                                                    }, timefr, false, {\n                                                        fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                                        lineNumber: 46,\n                                                        columnNumber: 23\n                                                    }, this))\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                                lineNumber: 44,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                        lineNumber: 40,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                    lineNumber: 39,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                lineNumber: 38,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Col, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Card, {\n                                        className: \"\".concat((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().card1), \" \"),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Card.Body, {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                                    children: [\n                                                        _data_json__WEBPACK_IMPORTED_MODULE_4__[0].title,\n                                                        \" \"\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                                    lineNumber: 63,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    children: [\n                                                        displayWork(),\n                                                        \"hrs\"\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                                    lineNumber: 64,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    children: [\n                                                        \"Last Week - \",\n                                                        previousData(),\n                                                        \" hrs\"\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                                    lineNumber: 65,\n                                                    columnNumber: 19\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                            lineNumber: 62,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                        lineNumber: 61,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Card, {\n                                        className: \"\".concat((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().card2), \" \"),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Card.Body, {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                                    children: _data_json__WEBPACK_IMPORTED_MODULE_4__[1].title\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                                    lineNumber: 70,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    children: [\n                                                        displayPlay(),\n                                                        \"hrs\"\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                                    lineNumber: 71,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    children: [\n                                                        \"Last Week -\",\n                                                        previousData(),\n                                                        \" hrs\"\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                                    lineNumber: 72,\n                                                    columnNumber: 19\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                            lineNumber: 69,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                        lineNumber: 68,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                lineNumber: 60,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"EzpMGHhwS7kTp+9/PBjL0yajoRs=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQTZCO0FBQ2tCO0FBQ2E7QUFDN0I7QUFDRTtBQUNEO0FBRWpCLFNBQVNTLE9BQU87O0lBQzdCLE1BQU0sQ0FBQ0MsbUJBQW1CQyxxQkFBcUIsR0FBR0osK0NBQVFBLENBQUM7SUFFM0QsTUFBTUssYUFBYTtRQUFDO1FBQVM7UUFBVTtLQUFVO0lBRWpELE1BQU1DLHVCQUF1QixDQUFDQyxZQUFjO1FBQzFDSCxxQkFBcUJHO0lBQ3ZCO0lBRUEsTUFBTUMsY0FBYSxJQUFNO1FBQ3ZCLE1BQU1DLGdCQUFnQlIscURBQWtCLENBQUNFLGtCQUFrQjtRQUMzRCxPQUFPTSxnQkFBZ0JBLGNBQWNDLE9BQU8sR0FBRyxJQUFJO0lBQ3JEO0lBRUQsTUFBTUMsY0FBYyxJQUFNO1FBQ3ZCLE1BQU1GLGdCQUFnQlIscURBQWtCLENBQUNFLGtCQUFrQjtRQUMzRCxPQUFPTSxnQkFBZ0JBLGNBQWNDLE9BQU8sR0FBRyxJQUFJO0lBQ3JEO0lBS0EscUJBQ0UsOERBQUNFO1FBQUlDLFdBQVduQiwwRUFBZ0I7OzBCQUM5Qiw4REFBQ0Qsa0RBQUlBOzBCQUNILDRFQUFDc0I7OEJBQU07Ozs7Ozs7Ozs7OzBCQUVULDhEQUFDQztnQkFBS0gsV0FBV25CLHFFQUFXOzBCQUMxQiw0RUFBQ0Msc0RBQVNBO29CQUFDc0IsS0FBSzs4QkFDZCw0RUFBQ3JCLGdEQUFHQTs7MENBQ0YsOERBQUNDLGdEQUFHQTswQ0FDRiw0RUFBQ0MsaURBQUlBO29DQUFDZSxXQUFXbkIscUVBQVc7OENBQzFCLDRFQUFDSSxzREFBUzs7MERBQ1IsOERBQUNDLG1EQUFLQTtnREFBQ3FCLEtBQUk7Z0RBQTJCQyxLQUFJO2dEQUFTQyxPQUFPO2dEQUFLQyxRQUFROzs7Ozs7MERBQ3ZFLDhEQUFDQzswREFBRTs7Ozs7OzBEQUNILDhEQUFDQztnREFBR1osV0FBV25CLDJFQUFpQjswREFBRTs7Ozs7OzBEQUNsQyw4REFBQ2tCO2dEQUFJQyxXQUFXbkIsMEVBQWdCOzBEQUM3QlcsV0FBV3VCLEdBQUcsQ0FBQyxDQUFDQyx1QkFDZiw4REFBQ0w7a0VBQ0MsNEVBQUNNOzREQUNDQyxJQUFJRjs0REFDSkcsU0FBUyxJQUFNMUIscUJBQXFCdUI7NERBQ3BDaEIsV0FBV2dCLFdBQVcxQixvQkFBb0JULHlFQUFlLEdBQUcsRUFBRTtzRUFFN0RtQzs7Ozs7O3VEQU5HQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBY2xCLDhEQUFDaEMsZ0RBQUdBOztrREFDRiw4REFBQ0MsaURBQUlBO3dDQUFDZSxXQUFXLEdBQWdCLE9BQWJuQixzRUFBWSxFQUFDO2tEQUMvQiw0RUFBQ0ksc0RBQVM7OzhEQUNSLDhEQUFDcUM7O3dEQUFJbEMsZ0RBQWE7d0RBQUM7Ozs7Ozs7OERBQ25CLDhEQUFDdUI7O3dEQUFHaEI7d0RBQWM7Ozs7Ozs7OERBQ2xCLDhEQUFDZ0I7O3dEQUFFO3dEQUFhWTt3REFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tEQUduQyw4REFBQ3RDLGlEQUFJQTt3Q0FBQ2UsV0FBVyxHQUFnQixPQUFibkIsc0VBQVksRUFBQztrREFDL0IsNEVBQUNJLHNEQUFTOzs4REFDUiw4REFBQ3FDOzhEQUFJbEMsZ0RBQWE7Ozs7Ozs4REFDbEIsOERBQUN1Qjs7d0RBQUdiO3dEQUFjOzs7Ozs7OzhEQUNsQiw4REFBQ2E7O3dEQUFFO3dEQUFZWTt3REFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNoRCxDQUFDO0dBekV1QmxDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJztcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3csIENvbCwgQ2FyZCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBkYXRhIGZyb20gJy4uL2RhdGEuanNvbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIGNvbnN0IFtzZWxlY3RlZFRpbWVmcmFtZSwgc2V0U2VsZWN0ZWRUaW1lZnJhbWVdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICBjb25zdCB0aW1lZnJhbWVzID0gWydkYWlseScsICd3ZWVrbHknLCAnbW9udGhseSddO1xyXG5cclxuICBjb25zdCBoYW5kbGVUaW1lZnJhbWVDbGljayA9ICh0aW1lZnJhbWUpID0+IHtcclxuICAgIHNldFNlbGVjdGVkVGltZWZyYW1lKHRpbWVmcmFtZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBkaXNwbGF5V29yaz0gKCkgPT4ge1xyXG4gICAgY29uc3QgdGltZWZyYW1lRGF0YSA9IGRhdGFbMF0udGltZWZyYW1lc1tzZWxlY3RlZFRpbWVmcmFtZV1cclxuICAgIHJldHVybiB0aW1lZnJhbWVEYXRhID8gdGltZWZyYW1lRGF0YS5jdXJyZW50IDogbnVsbDsgIFxyXG4gIH1cclxuXHJcbiBjb25zdCBkaXNwbGF5UGxheSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHRpbWVmcmFtZURhdGEgPSBkYXRhWzFdLnRpbWVmcmFtZXNbc2VsZWN0ZWRUaW1lZnJhbWVdXHJcbiAgICByZXR1cm4gdGltZWZyYW1lRGF0YSA/IHRpbWVmcmFtZURhdGEuY3VycmVudCA6IG51bGw7ICBcclxuICB9XHJcblxyXG5cclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5DcmVhdGUgTmV4dCBBcHA8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxyXG4gICAgICAgIDxDb250YWluZXIgZmx1aWQ+XHJcbiAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxyXG4gICAgICAgICAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9pbWFnZXMvaW1hZ2UtamVyZW15LnBuZ1wiIGFsdD1cImF2YXRhclwiIHdpZHRoPXsxMDB9IGhlaWdodD17MTAwfSAvPlxyXG4gICAgICAgICAgICAgICAgICA8cD5SZXBvcnQgZm9yPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZF90aXRsZX0+SmVyZW15IFJvYnNvbi48L2gxPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmRfYm9keX0+XHJcbiAgICAgICAgICAgICAgICAgICAge3RpbWVmcmFtZXMubWFwKCh0aW1lZnIpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxwIGtleT17dGltZWZyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17dGltZWZyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVRpbWVmcmFtZUNsaWNrKHRpbWVmcil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXt0aW1lZnIgPT09IHNlbGVjdGVkVGltZWZyYW1lID8gc3R5bGVzLnNlbGVjdGVkIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7dGltZWZyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9e2Ake3N0eWxlcy5jYXJkMX0gYH0+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICA8aDU+e2RhdGFbMF0udGl0bGV9IDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgIDxwPntkaXNwbGF5V29yaygpfWhyczwvcD5cclxuICAgICAgICAgICAgICAgICAgPHA+TGFzdCBXZWVrIC0ge3ByZXZpb3VzRGF0YSgpfSBocnM8L3A+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPXtgJHtzdHlsZXMuY2FyZDJ9IGB9PlxyXG4gICAgICAgICAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgPGg1PntkYXRhWzFdLnRpdGxlfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgIDxwPntkaXNwbGF5UGxheSgpfWhyczwvcD5cclxuICAgICAgICAgICAgICAgICAgPHA+TGFzdCBXZWVrIC17cHJldmlvdXNEYXRhKCl9IGhyczwvcD5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPC9tYWluPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiSGVhZCIsInN0eWxlcyIsIkNvbnRhaW5lciIsIlJvdyIsIkNvbCIsIkNhcmQiLCJJbWFnZSIsInVzZVN0YXRlIiwiZGF0YSIsIkhvbWUiLCJzZWxlY3RlZFRpbWVmcmFtZSIsInNldFNlbGVjdGVkVGltZWZyYW1lIiwidGltZWZyYW1lcyIsImhhbmRsZVRpbWVmcmFtZUNsaWNrIiwidGltZWZyYW1lIiwiZGlzcGxheVdvcmsiLCJ0aW1lZnJhbWVEYXRhIiwiY3VycmVudCIsImRpc3BsYXlQbGF5IiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwidGl0bGUiLCJtYWluIiwiZmx1aWQiLCJjYXJkIiwiQm9keSIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwicCIsImgxIiwiY2FyZF90aXRsZSIsImNhcmRfYm9keSIsIm1hcCIsInRpbWVmciIsImEiLCJpZCIsIm9uQ2xpY2siLCJzZWxlY3RlZCIsImNhcmQxIiwiaDUiLCJwcmV2aW91c0RhdGEiLCJjYXJkMiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});