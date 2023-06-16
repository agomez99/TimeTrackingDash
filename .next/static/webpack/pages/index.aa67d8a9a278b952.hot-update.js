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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data.json */ \"./data.json\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [selectedTimeframe, setSelectedTimeframe] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const timeframes = [\n        \"daily\",\n        \"weekly\",\n        \"monthly\"\n    ];\n    const handleTimeframeClick = (timeframe)=>{\n        setSelectedTimeframe(timeframe);\n    };\n    const { title: workTitle , timeframes: workTimeframes  } = _data_json__WEBPACK_IMPORTED_MODULE_4__[0];\n    const { title: playTitle , timeframes: playTimeframes  } = _data_json__WEBPACK_IMPORTED_MODULE_4__[1];\n    const { title: studyTitle , timeframes: studyTimeframes  } = _data_json__WEBPACK_IMPORTED_MODULE_4__[2];\n    const { title: exerciseTitle , timeframes: exerciseTimeframes  } = _data_json__WEBPACK_IMPORTED_MODULE_4__[3];\n    const { title: socialTitle , timeframes: socialTimeframes  } = _data_json__WEBPACK_IMPORTED_MODULE_4__[4];\n    const { title: selfCareTitle , timeframes: selfCareTimeframes  } = _data_json__WEBPACK_IMPORTED_MODULE_4__[5];\n    const displayData = (data, title)=>{\n        const timeframeData = data[selectedTimeframe];\n        const currentValue = timeframeData ? timeframeData.current : null;\n        const previousValue = timeframeData ? timeframeData.previous : null;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Card, {\n            className: \"\".concat((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().card1), \" \").concat(title.toLowerCase()),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    class: \"card_background_work\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                    lineNumber: 32,\n                    columnNumber: 19\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Card.Body, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                            children: title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                currentValue,\n                                \"hrs\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Last Week - \",\n                                previousValue,\n                                \"hrs\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n            lineNumber: 31,\n            columnNumber: 7\n        }, this);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Create Next App\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().main),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Container, {\n                    fluid: true,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Row, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Card, {\n                                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().card),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Card.Body, {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                src: \"/images/image-jeremy.png\",\n                                                alt: \"avatar\",\n                                                width: 100,\n                                                height: 100\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                                lineNumber: 55,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: \"Report for\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                                lineNumber: 56,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().card_title),\n                                                children: \"Jeremy Robson.\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                                lineNumber: 57,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().card_body),\n                                                children: timeframes.map((timefr)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                            id: timefr,\n                                                            onClick: ()=>handleTimeframeClick(timefr),\n                                                            className: timefr === selectedTimeframe ? (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().selected) : \"\",\n                                                            children: timefr\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                                            lineNumber: 61,\n                                                            columnNumber: 25\n                                                        }, this)\n                                                    }, timefr, false, {\n                                                        fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                                        lineNumber: 60,\n                                                        columnNumber: 23\n                                                    }, this))\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                                lineNumber: 58,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                        lineNumber: 54,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                    lineNumber: 53,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                lineNumber: 52,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {\n                                children: [\n                                    displayData(workTimeframes, workTitle),\n                                    displayData(playTimeframes, playTitle)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                lineNumber: 74,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {\n                                children: [\n                                    displayData(studyTimeframes, studyTitle),\n                                    displayData(exerciseTimeframes, exerciseTitle)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                lineNumber: 79,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {\n                                children: [\n                                    displayData(socialTimeframes, socialTitle),\n                                    displayData(selfCareTimeframes, selfCareTitle)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                lineNumber: 83,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                        lineNumber: 51,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"EzpMGHhwS7kTp+9/PBjL0yajoRs=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGdEQUFHQTs7b0NBQ0R3QixZQUFZUCxpQkFBaUJEO29DQUM3QlEsWUFBWUwsb0JBQW9CRDs7Ozs7OzswQ0FFakMsOERBQUNsQixnREFBR0E7O29DQUNId0IsWUFBWUgsa0JBQWtCRDtvQ0FDOUJJLFlBQVlELG9CQUFvQkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTy9DLENBQUM7R0FwRnVCakI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIFJvdywgQ29sLCBDYXJkIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGRhdGEgZnJvbSAnLi4vZGF0YS5qc29uJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgW3NlbGVjdGVkVGltZWZyYW1lLCBzZXRTZWxlY3RlZFRpbWVmcmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIGNvbnN0IHRpbWVmcmFtZXMgPSBbJ2RhaWx5JywgJ3dlZWtseScsICdtb250aGx5J107XHJcblxyXG4gIGNvbnN0IGhhbmRsZVRpbWVmcmFtZUNsaWNrID0gKHRpbWVmcmFtZSkgPT4ge1xyXG4gICAgc2V0U2VsZWN0ZWRUaW1lZnJhbWUodGltZWZyYW1lKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHsgdGl0bGU6IHdvcmtUaXRsZSwgdGltZWZyYW1lczogd29ya1RpbWVmcmFtZXMgfSA9IGRhdGFbMF07XHJcbiAgY29uc3QgeyB0aXRsZTogcGxheVRpdGxlLCB0aW1lZnJhbWVzOiBwbGF5VGltZWZyYW1lcyB9ID0gZGF0YVsxXTtcclxuICBjb25zdCB7IHRpdGxlOiBzdHVkeVRpdGxlLCB0aW1lZnJhbWVzOiBzdHVkeVRpbWVmcmFtZXMgfSA9IGRhdGFbMl07XHJcbiAgY29uc3QgeyB0aXRsZTogZXhlcmNpc2VUaXRsZSwgdGltZWZyYW1lczogZXhlcmNpc2VUaW1lZnJhbWVzIH0gPSBkYXRhWzNdO1xyXG4gIGNvbnN0IHsgdGl0bGU6IHNvY2lhbFRpdGxlLCB0aW1lZnJhbWVzOiBzb2NpYWxUaW1lZnJhbWVzIH0gPSBkYXRhWzRdO1xyXG4gIGNvbnN0IHsgdGl0bGU6IHNlbGZDYXJlVGl0bGUsIHRpbWVmcmFtZXM6IHNlbGZDYXJlVGltZWZyYW1lcyB9ID0gZGF0YVs1XTtcclxuXHJcbiAgXHJcbiAgY29uc3QgZGlzcGxheURhdGEgPSAoZGF0YSwgdGl0bGUpID0+IHtcclxuICAgIGNvbnN0IHRpbWVmcmFtZURhdGEgPSBkYXRhW3NlbGVjdGVkVGltZWZyYW1lXTtcclxuICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IHRpbWVmcmFtZURhdGEgPyB0aW1lZnJhbWVEYXRhLmN1cnJlbnQgOiBudWxsO1xyXG4gICAgY29uc3QgcHJldmlvdXNWYWx1ZSA9IHRpbWVmcmFtZURhdGEgPyB0aW1lZnJhbWVEYXRhLnByZXZpb3VzIDogbnVsbDtcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPENhcmQgY2xhc3NOYW1lPXtgJHtzdHlsZXMuY2FyZDF9ICR7dGl0bGUudG9Mb3dlckNhc2UoKX1gfT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRfYmFja2dyb3VuZF93b3JrXCI+XHJcblxyXG48L2Rpdj5cclxuICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgPGg1Pnt0aXRsZX08L2g1PlxyXG4gICAgICAgICAgPHA+e2N1cnJlbnRWYWx1ZX1ocnM8L3A+XHJcbiAgICAgICAgICA8cD5MYXN0IFdlZWsgLSB7cHJldmlvdXNWYWx1ZX1ocnM8L3A+XHJcbiAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgIDwvQ2FyZD5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+Q3JlYXRlIE5leHQgQXBwPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cclxuICAgICAgICA8Q29udGFpbmVyIGZsdWlkPlxyXG4gICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfT5cclxuICAgICAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvaW1hZ2VzL2ltYWdlLWplcmVteS5wbmdcIiBhbHQ9XCJhdmF0YXJcIiB3aWR0aD17MTAwfSBoZWlnaHQ9ezEwMH0gLz5cclxuICAgICAgICAgICAgICAgICAgPHA+UmVwb3J0IGZvcjwvcD5cclxuICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLmNhcmRfdGl0bGV9PkplcmVteSBSb2Jzb24uPC9oMT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkX2JvZHl9PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aW1lZnJhbWVzLm1hcCgodGltZWZyKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCBrZXk9e3RpbWVmcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e3RpbWVmcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVUaW1lZnJhbWVDbGljayh0aW1lZnIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17dGltZWZyID09PSBzZWxlY3RlZFRpbWVmcmFtZSA/IHN0eWxlcy5zZWxlY3RlZCA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3RpbWVmcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2w+XHJcblxyXG4gICAgICAgICAgICAgIHtkaXNwbGF5RGF0YSh3b3JrVGltZWZyYW1lcywgd29ya1RpdGxlKX1cclxuICAgICAgICAgICAgICB7ZGlzcGxheURhdGEocGxheVRpbWVmcmFtZXMsIHBsYXlUaXRsZSl9XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgIHtkaXNwbGF5RGF0YShzdHVkeVRpbWVmcmFtZXMsIHN0dWR5VGl0bGUpfVxyXG4gICAgICAgICAgICAgIHtkaXNwbGF5RGF0YShleGVyY2lzZVRpbWVmcmFtZXMsIGV4ZXJjaXNlVGl0bGUpfVxyXG4gICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAge2Rpc3BsYXlEYXRhKHNvY2lhbFRpbWVmcmFtZXMsIHNvY2lhbFRpdGxlKX1cclxuICAgICAgICAgICAgICB7ZGlzcGxheURhdGEoc2VsZkNhcmVUaW1lZnJhbWVzLCBzZWxmQ2FyZVRpdGxlKX1cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPC9tYWluPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiSGVhZCIsInN0eWxlcyIsIkNvbnRhaW5lciIsIlJvdyIsIkNvbCIsIkNhcmQiLCJJbWFnZSIsInVzZVN0YXRlIiwiZGF0YSIsIkhvbWUiLCJzZWxlY3RlZFRpbWVmcmFtZSIsInNldFNlbGVjdGVkVGltZWZyYW1lIiwidGltZWZyYW1lcyIsImhhbmRsZVRpbWVmcmFtZUNsaWNrIiwidGltZWZyYW1lIiwidGl0bGUiLCJ3b3JrVGl0bGUiLCJ3b3JrVGltZWZyYW1lcyIsInBsYXlUaXRsZSIsInBsYXlUaW1lZnJhbWVzIiwic3R1ZHlUaXRsZSIsInN0dWR5VGltZWZyYW1lcyIsImV4ZXJjaXNlVGl0bGUiLCJleGVyY2lzZVRpbWVmcmFtZXMiLCJzb2NpYWxUaXRsZSIsInNvY2lhbFRpbWVmcmFtZXMiLCJzZWxmQ2FyZVRpdGxlIiwic2VsZkNhcmVUaW1lZnJhbWVzIiwiZGlzcGxheURhdGEiLCJ0aW1lZnJhbWVEYXRhIiwiY3VycmVudFZhbHVlIiwiY3VycmVudCIsInByZXZpb3VzVmFsdWUiLCJwcmV2aW91cyIsImNsYXNzTmFtZSIsImNhcmQxIiwidG9Mb3dlckNhc2UiLCJkaXYiLCJjbGFzcyIsIkJvZHkiLCJoNSIsInAiLCJjb250YWluZXIiLCJtYWluIiwiZmx1aWQiLCJjYXJkIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJoMSIsImNhcmRfdGl0bGUiLCJjYXJkX2JvZHkiLCJtYXAiLCJ0aW1lZnIiLCJhIiwiaWQiLCJvbkNsaWNrIiwic2VsZWN0ZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});