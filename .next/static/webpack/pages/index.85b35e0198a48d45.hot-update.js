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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data.json */ \"./data.json\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [selectedTimeframe, setSelectedTimeframe] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const timeframes = [\n        \"daily\",\n        \"weekly\",\n        \"monthly\"\n    ];\n    const handleTimeframeClick = (timeframe)=>{\n        setSelectedTimeframe(timeframe);\n    };\n    const { title: workTitle , timeframes: workTimeframes  } = _data_json__WEBPACK_IMPORTED_MODULE_4__[0];\n    const { title: playTitle , timeframes: playTimeframes  } = _data_json__WEBPACK_IMPORTED_MODULE_4__[1];\n    const { title: studyTitle , timeframes: studyTimeframes  } = _data_json__WEBPACK_IMPORTED_MODULE_4__[2];\n    const displayData = (data, title)=>{\n        const timeframeData = data[selectedTimeframe];\n        const currentValue = timeframeData ? timeframeData.current : null;\n        const previousValue = timeframeData ? timeframeData.previous : null;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Card, {\n            className: \"\".concat((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().card1), \" \").concat(title.toLowerCase()),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Card.Body, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            currentValue,\n                            \"hrs\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                        lineNumber: 31,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Last Week - \",\n                            previousValue,\n                            \"hrs\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                        lineNumber: 32,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                lineNumber: 29,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n            lineNumber: 28,\n            columnNumber: 7\n        }, this);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Create Next App\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().main),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Container, {\n                    fluid: true,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Row, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Card, {\n                                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().card),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Card.Body, {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                src: \"/images/image-jeremy.png\",\n                                                alt: \"avatar\",\n                                                width: 100,\n                                                height: 100\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                                lineNumber: 49,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: \"Report for\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                                lineNumber: 50,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().card_title),\n                                                children: \"Jeremy Robson.\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                                lineNumber: 51,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().card_body),\n                                                children: timeframes.map((timefr)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                            id: timefr,\n                                                            onClick: ()=>handleTimeframeClick(timefr),\n                                                            className: timefr === selectedTimeframe ? (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().selected) : \"\",\n                                                            children: timefr\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                                            lineNumber: 55,\n                                                            columnNumber: 25\n                                                        }, this)\n                                                    }, timefr, false, {\n                                                        fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                                        lineNumber: 54,\n                                                        columnNumber: 23\n                                                    }, this))\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                                lineNumber: 52,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                        lineNumber: 48,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                    lineNumber: 47,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                lineNumber: 46,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {\n                                children: [\n                                    displayData(workTimeframes, workTitle),\n                                    displayData(playTimeframes, playTitle),\n                                    displayData(studyTimeframes, studyTitle)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                lineNumber: 68,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                        lineNumber: 45,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"EzpMGHhwS7kTp+9/PBjL0yajoRs=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQTZCO0FBQ2tCO0FBQ2E7QUFDN0I7QUFDRTtBQUNEO0FBRWpCLFNBQVNTLE9BQU87O0lBQzdCLE1BQU0sQ0FBQ0MsbUJBQW1CQyxxQkFBcUIsR0FBR0osK0NBQVFBLENBQUM7SUFFM0QsTUFBTUssYUFBYTtRQUFDO1FBQVM7UUFBVTtLQUFVO0lBRWpELE1BQU1DLHVCQUF1QixDQUFDQyxZQUFjO1FBQzFDSCxxQkFBcUJHO0lBQ3ZCO0lBRUEsTUFBTSxFQUFFQyxPQUFPQyxVQUFTLEVBQUVKLFlBQVlLLGVBQWMsRUFBRSxHQUFHVCwwQ0FBTztJQUNoRSxNQUFNLEVBQUVPLE9BQU9HLFVBQVMsRUFBRU4sWUFBWU8sZUFBYyxFQUFFLEdBQUdYLDBDQUFPO0lBQ2hFLE1BQU0sRUFBRU8sT0FBT0ssV0FBVSxFQUFFUixZQUFZUyxnQkFBZSxFQUFFLEdBQUdiLDBDQUFPO0lBR2xFLE1BQU1jLGNBQWMsQ0FBQ2QsTUFBTU8sUUFBVTtRQUNuQyxNQUFNUSxnQkFBZ0JmLElBQUksQ0FBQ0Usa0JBQWtCO1FBQzdDLE1BQU1jLGVBQWVELGdCQUFnQkEsY0FBY0UsT0FBTyxHQUFHLElBQUk7UUFDakUsTUFBTUMsZ0JBQWdCSCxnQkFBZ0JBLGNBQWNJLFFBQVEsR0FBRyxJQUFJO1FBRW5FLHFCQUNFLDhEQUFDdEIsaURBQUlBO1lBQUN1QixXQUFXLEdBQW1CYixPQUFoQmQsc0VBQVksRUFBQyxLQUF1QixPQUFwQmMsTUFBTWUsV0FBVztzQkFDbkQsNEVBQUN6QixzREFBUzs7a0NBQ1IsOERBQUMyQjtrQ0FBSWpCOzs7Ozs7a0NBQ0wsOERBQUNrQjs7NEJBQUdUOzRCQUFhOzs7Ozs7O2tDQUNqQiw4REFBQ1M7OzRCQUFFOzRCQUFhUDs0QkFBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSXRDO0lBRUEscUJBQ0UsOERBQUNRO1FBQUlOLFdBQVczQiwwRUFBZ0I7OzBCQUM5Qiw4REFBQ0Qsa0RBQUlBOzBCQUNILDRFQUFDZTs4QkFBTTs7Ozs7Ozs7Ozs7MEJBRVQsOERBQUNxQjtnQkFBS1IsV0FBVzNCLHFFQUFXOzBCQUMxQiw0RUFBQ0Msc0RBQVNBO29CQUFDbUMsS0FBSzs4QkFDZCw0RUFBQ2xDLGdEQUFHQTs7MENBQ0YsOERBQUNDLGdEQUFHQTswQ0FDRiw0RUFBQ0MsaURBQUlBO29DQUFDdUIsV0FBVzNCLHFFQUFXOzhDQUMxQiw0RUFBQ0ksc0RBQVM7OzBEQUNSLDhEQUFDQyxtREFBS0E7Z0RBQUNpQyxLQUFJO2dEQUEyQkMsS0FBSTtnREFBU0MsT0FBTztnREFBS0MsUUFBUTs7Ozs7OzBEQUN2RSw4REFBQ1Q7MERBQUU7Ozs7OzswREFDSCw4REFBQ1U7Z0RBQUdmLFdBQVczQiwyRUFBaUI7MERBQUU7Ozs7OzswREFDbEMsOERBQUNpQztnREFBSU4sV0FBVzNCLDBFQUFnQjswREFDN0JXLFdBQVdrQyxHQUFHLENBQUMsQ0FBQ0MsdUJBQ2YsOERBQUNkO2tFQUNDLDRFQUFDZTs0REFDQ0MsSUFBSUY7NERBQ0pHLFNBQVMsSUFBTXJDLHFCQUFxQmtDOzREQUNwQ25CLFdBQVdtQixXQUFXckMsb0JBQW9CVCx5RUFBZSxHQUFHLEVBQUU7c0VBRTdEOEM7Ozs7Ozt1REFOR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQWNsQiw4REFBQzNDLGdEQUFHQTs7b0NBQ0RrQixZQUFZTCxnQkFBZ0JEO29DQUM1Qk0sWUFBWUgsZ0JBQWdCRDtvQ0FDNUJJLFlBQVlELGlCQUFpQkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTzVDLENBQUM7R0F0RXVCWDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcyc7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDb2wsIENhcmQgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgZGF0YSBmcm9tICcuLi9kYXRhLmpzb24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICBjb25zdCBbc2VsZWN0ZWRUaW1lZnJhbWUsIHNldFNlbGVjdGVkVGltZWZyYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgY29uc3QgdGltZWZyYW1lcyA9IFsnZGFpbHknLCAnd2Vla2x5JywgJ21vbnRobHknXTtcclxuXHJcbiAgY29uc3QgaGFuZGxlVGltZWZyYW1lQ2xpY2sgPSAodGltZWZyYW1lKSA9PiB7XHJcbiAgICBzZXRTZWxlY3RlZFRpbWVmcmFtZSh0aW1lZnJhbWUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgeyB0aXRsZTogd29ya1RpdGxlLCB0aW1lZnJhbWVzOiB3b3JrVGltZWZyYW1lcyB9ID0gZGF0YVswXTtcclxuICBjb25zdCB7IHRpdGxlOiBwbGF5VGl0bGUsIHRpbWVmcmFtZXM6IHBsYXlUaW1lZnJhbWVzIH0gPSBkYXRhWzFdO1xyXG4gIGNvbnN0IHsgdGl0bGU6IHN0dWR5VGl0bGUsIHRpbWVmcmFtZXM6IHN0dWR5VGltZWZyYW1lcyB9ID0gZGF0YVsyXTtcclxuXHJcbiAgXHJcbiAgY29uc3QgZGlzcGxheURhdGEgPSAoZGF0YSwgdGl0bGUpID0+IHtcclxuICAgIGNvbnN0IHRpbWVmcmFtZURhdGEgPSBkYXRhW3NlbGVjdGVkVGltZWZyYW1lXTtcclxuICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IHRpbWVmcmFtZURhdGEgPyB0aW1lZnJhbWVEYXRhLmN1cnJlbnQgOiBudWxsO1xyXG4gICAgY29uc3QgcHJldmlvdXNWYWx1ZSA9IHRpbWVmcmFtZURhdGEgPyB0aW1lZnJhbWVEYXRhLnByZXZpb3VzIDogbnVsbDtcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPENhcmQgY2xhc3NOYW1lPXtgJHtzdHlsZXMuY2FyZDF9ICR7dGl0bGUudG9Mb3dlckNhc2UoKX1gfT5cclxuICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgPGg1Pnt0aXRsZX08L2g1PlxyXG4gICAgICAgICAgPHA+e2N1cnJlbnRWYWx1ZX1ocnM8L3A+XHJcbiAgICAgICAgICA8cD5MYXN0IFdlZWsgLSB7cHJldmlvdXNWYWx1ZX1ocnM8L3A+XHJcbiAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgIDwvQ2FyZD5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+Q3JlYXRlIE5leHQgQXBwPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cclxuICAgICAgICA8Q29udGFpbmVyIGZsdWlkPlxyXG4gICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfT5cclxuICAgICAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvaW1hZ2VzL2ltYWdlLWplcmVteS5wbmdcIiBhbHQ9XCJhdmF0YXJcIiB3aWR0aD17MTAwfSBoZWlnaHQ9ezEwMH0gLz5cclxuICAgICAgICAgICAgICAgICAgPHA+UmVwb3J0IGZvcjwvcD5cclxuICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLmNhcmRfdGl0bGV9PkplcmVteSBSb2Jzb24uPC9oMT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkX2JvZHl9PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aW1lZnJhbWVzLm1hcCgodGltZWZyKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCBrZXk9e3RpbWVmcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e3RpbWVmcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVUaW1lZnJhbWVDbGljayh0aW1lZnIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17dGltZWZyID09PSBzZWxlY3RlZFRpbWVmcmFtZSA/IHN0eWxlcy5zZWxlY3RlZCA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3RpbWVmcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAge2Rpc3BsYXlEYXRhKHdvcmtUaW1lZnJhbWVzLCB3b3JrVGl0bGUpfVxyXG4gICAgICAgICAgICAgIHtkaXNwbGF5RGF0YShwbGF5VGltZWZyYW1lcywgcGxheVRpdGxlKX1cclxuICAgICAgICAgICAgICB7ZGlzcGxheURhdGEoc3R1ZHlUaW1lZnJhbWVzLCBzdHVkeVRpdGxlKX1cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPC9tYWluPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiSGVhZCIsInN0eWxlcyIsIkNvbnRhaW5lciIsIlJvdyIsIkNvbCIsIkNhcmQiLCJJbWFnZSIsInVzZVN0YXRlIiwiZGF0YSIsIkhvbWUiLCJzZWxlY3RlZFRpbWVmcmFtZSIsInNldFNlbGVjdGVkVGltZWZyYW1lIiwidGltZWZyYW1lcyIsImhhbmRsZVRpbWVmcmFtZUNsaWNrIiwidGltZWZyYW1lIiwidGl0bGUiLCJ3b3JrVGl0bGUiLCJ3b3JrVGltZWZyYW1lcyIsInBsYXlUaXRsZSIsInBsYXlUaW1lZnJhbWVzIiwic3R1ZHlUaXRsZSIsInN0dWR5VGltZWZyYW1lcyIsImRpc3BsYXlEYXRhIiwidGltZWZyYW1lRGF0YSIsImN1cnJlbnRWYWx1ZSIsImN1cnJlbnQiLCJwcmV2aW91c1ZhbHVlIiwicHJldmlvdXMiLCJjbGFzc05hbWUiLCJjYXJkMSIsInRvTG93ZXJDYXNlIiwiQm9keSIsImg1IiwicCIsImRpdiIsImNvbnRhaW5lciIsIm1haW4iLCJmbHVpZCIsImNhcmQiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImgxIiwiY2FyZF90aXRsZSIsImNhcmRfYm9keSIsIm1hcCIsInRpbWVmciIsImEiLCJpZCIsIm9uQ2xpY2siLCJzZWxlY3RlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});