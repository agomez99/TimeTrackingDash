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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data.json */ \"./data.json\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [selectedTimeframe, setSelectedTimeframe] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const timeframes = [\n        \"daily\",\n        \"weekly\",\n        \"monthly\"\n    ];\n    const handleTimeframeClick = (timeframe)=>{\n        setSelectedTimeframe(timeframe);\n    };\n    const { title: workTitle , timeframes: workTimeframes , cardstyle: card_background_work  } = _data_json__WEBPACK_IMPORTED_MODULE_4__[0];\n    const { title: playTitle , timeframes: playTimeframes  } = _data_json__WEBPACK_IMPORTED_MODULE_4__[1];\n    const { title: studyTitle , timeframes: studyTimeframes  } = _data_json__WEBPACK_IMPORTED_MODULE_4__[2];\n    const { title: exerciseTitle , timeframes: exerciseTimeframes  } = _data_json__WEBPACK_IMPORTED_MODULE_4__[3];\n    const { title: socialTitle , timeframes: socialTimeframes  } = _data_json__WEBPACK_IMPORTED_MODULE_4__[4];\n    const { title: selfCareTitle , timeframes: selfCareTimeframes  } = _data_json__WEBPACK_IMPORTED_MODULE_4__[5];\n    const displayData = (data, title)=>{\n        const timeframeData = data[selectedTimeframe];\n        const currentValue = timeframeData ? timeframeData.current : null;\n        const previousValue = timeframeData ? timeframeData.previous : null;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().card_background_work)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                    lineNumber: 32,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Card, {\n                    className: \"\".concat((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().card1), \" \").concat(title.toLowerCase(), \" \").concat(\".\" + card_background_work),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Card.Body, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                children: title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                lineNumber: 38,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    currentValue,\n                                    \"hrs\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Last Week - \",\n                                    previousValue,\n                                    \"hrs\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                lineNumber: 40,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                    lineNumber: 35,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n            lineNumber: 31,\n            columnNumber: 7\n        }, this);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Create Next App\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().main),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Container, {\n                    fluid: true,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Row, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Col, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Card, {\n                                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().card),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Card.Body, {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                src: \"/images/image-jeremy.png\",\n                                                alt: \"avatar\",\n                                                width: 100,\n                                                height: 100\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                                lineNumber: 58,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: \"Report for\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                                lineNumber: 59,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().card_title),\n                                                children: \"Jeremy Robson.\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                                lineNumber: 60,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().card_body),\n                                                children: timeframes.map((timefr)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                            id: timefr,\n                                                            onClick: ()=>handleTimeframeClick(timefr),\n                                                            className: timefr === selectedTimeframe ? (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().selected) : \"\",\n                                                            children: timefr\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                                            lineNumber: 64,\n                                                            columnNumber: 25\n                                                        }, this)\n                                                    }, timefr, false, {\n                                                        fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                                        lineNumber: 63,\n                                                        columnNumber: 23\n                                                    }, this))\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                                lineNumber: 61,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                        lineNumber: 57,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                    lineNumber: 56,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                lineNumber: 55,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Col, {\n                                children: [\n                                    displayData(workTimeframes, workTitle),\n                                    displayData(playTimeframes, playTitle)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                lineNumber: 77,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Col, {\n                                children: [\n                                    displayData(studyTimeframes, studyTitle),\n                                    displayData(exerciseTimeframes, exerciseTitle)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                lineNumber: 82,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Col, {\n                                children: [\n                                    displayData(socialTimeframes, socialTitle),\n                                    displayData(selfCareTimeframes, selfCareTitle)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                lineNumber: 86,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                        lineNumber: 54,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"EzpMGHhwS7kTp+9/PBjL0yajoRs=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGdEQUFHQTs7b0NBRUQwQixZQUFZYixnQkFBZ0JEO29DQUM1QmMsWUFBWVQsZ0JBQWdCRDs7Ozs7OzswQ0FFL0IsOERBQUNoQixnREFBR0E7O29DQUNEMEIsWUFBWVAsaUJBQWlCRDtvQ0FDN0JRLFlBQVlMLG9CQUFvQkQ7Ozs7Ozs7MENBRWpDLDhEQUFDcEIsZ0RBQUdBOztvQ0FDSDBCLFlBQVlILGtCQUFrQkQ7b0NBQzlCSSxZQUFZRCxvQkFBb0JEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU8vQyxDQUFDO0dBdkZ1Qm5CO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJztcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3csIENvbCwgQ2FyZCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBkYXRhIGZyb20gJy4uL2RhdGEuanNvbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIGNvbnN0IFtzZWxlY3RlZFRpbWVmcmFtZSwgc2V0U2VsZWN0ZWRUaW1lZnJhbWVdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICBjb25zdCB0aW1lZnJhbWVzID0gWydkYWlseScsICd3ZWVrbHknLCAnbW9udGhseSddO1xyXG5cclxuICBjb25zdCBoYW5kbGVUaW1lZnJhbWVDbGljayA9ICh0aW1lZnJhbWUpID0+IHtcclxuICAgIHNldFNlbGVjdGVkVGltZWZyYW1lKHRpbWVmcmFtZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCB7IHRpdGxlOiB3b3JrVGl0bGUsIHRpbWVmcmFtZXM6IHdvcmtUaW1lZnJhbWVzLCBjYXJkc3R5bGU6IGNhcmRfYmFja2dyb3VuZF93b3JrIH0gPSBkYXRhWzBdO1xyXG4gIGNvbnN0IHsgdGl0bGU6IHBsYXlUaXRsZSwgdGltZWZyYW1lczogcGxheVRpbWVmcmFtZXMgfSA9IGRhdGFbMV07XHJcbiAgY29uc3QgeyB0aXRsZTogc3R1ZHlUaXRsZSwgdGltZWZyYW1lczogc3R1ZHlUaW1lZnJhbWVzIH0gPSBkYXRhWzJdO1xyXG4gIGNvbnN0IHsgdGl0bGU6IGV4ZXJjaXNlVGl0bGUsIHRpbWVmcmFtZXM6IGV4ZXJjaXNlVGltZWZyYW1lcyB9ID0gZGF0YVszXTtcclxuICBjb25zdCB7IHRpdGxlOiBzb2NpYWxUaXRsZSwgdGltZWZyYW1lczogc29jaWFsVGltZWZyYW1lcyB9ID0gZGF0YVs0XTtcclxuICBjb25zdCB7IHRpdGxlOiBzZWxmQ2FyZVRpdGxlLCB0aW1lZnJhbWVzOiBzZWxmQ2FyZVRpbWVmcmFtZXMgfSA9IGRhdGFbNV07XHJcblxyXG4gIFxyXG4gIGNvbnN0IGRpc3BsYXlEYXRhID0gKGRhdGEsIHRpdGxlKSA9PiB7XHJcbiAgICBjb25zdCB0aW1lZnJhbWVEYXRhID0gZGF0YVtzZWxlY3RlZFRpbWVmcmFtZV07XHJcbiAgICBjb25zdCBjdXJyZW50VmFsdWUgPSB0aW1lZnJhbWVEYXRhID8gdGltZWZyYW1lRGF0YS5jdXJyZW50IDogbnVsbDtcclxuICAgIGNvbnN0IHByZXZpb3VzVmFsdWUgPSB0aW1lZnJhbWVEYXRhID8gdGltZWZyYW1lRGF0YS5wcmV2aW91cyA6IG51bGw7XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmRfYmFja2dyb3VuZF93b3JrfT5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8Q2FyZCBjbGFzc05hbWU9e2Ake3N0eWxlcy5jYXJkMX0gJHt0aXRsZS50b0xvd2VyQ2FzZSgpfSAke1wiLlwiK2NhcmRfYmFja2dyb3VuZF93b3JrfWB9PlxyXG4gICAgICBcclxuICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgPGg1Pnt0aXRsZX08L2g1PlxyXG4gICAgICAgICAgPHA+e2N1cnJlbnRWYWx1ZX1ocnM8L3A+XHJcbiAgICAgICAgICA8cD5MYXN0IFdlZWsgLSB7cHJldmlvdXNWYWx1ZX1ocnM8L3A+XHJcbiAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgIDwvQ2FyZD5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPkNyZWF0ZSBOZXh0IEFwcDwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XHJcbiAgICAgICAgPENvbnRhaW5lciBmbHVpZD5cclxuICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2ltYWdlcy9pbWFnZS1qZXJlbXkucG5nXCIgYWx0PVwiYXZhdGFyXCIgd2lkdGg9ezEwMH0gaGVpZ2h0PXsxMDB9IC8+XHJcbiAgICAgICAgICAgICAgICAgIDxwPlJlcG9ydCBmb3I8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5jYXJkX3RpdGxlfT5KZXJlbXkgUm9ic29uLjwvaDE+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZF9ib2R5fT5cclxuICAgICAgICAgICAgICAgICAgICB7dGltZWZyYW1lcy5tYXAoKHRpbWVmcikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAga2V5PXt0aW1lZnJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXt0aW1lZnJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlVGltZWZyYW1lQ2xpY2sodGltZWZyKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3RpbWVmciA9PT0gc2VsZWN0ZWRUaW1lZnJhbWUgPyBzdHlsZXMuc2VsZWN0ZWQgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt0aW1lZnJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sPlxyXG5cclxuICAgICAgICAgICAgICB7ZGlzcGxheURhdGEod29ya1RpbWVmcmFtZXMsIHdvcmtUaXRsZSl9XHJcbiAgICAgICAgICAgICAge2Rpc3BsYXlEYXRhKHBsYXlUaW1lZnJhbWVzLCBwbGF5VGl0bGUpfVxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICB7ZGlzcGxheURhdGEoc3R1ZHlUaW1lZnJhbWVzLCBzdHVkeVRpdGxlKX1cclxuICAgICAgICAgICAgICB7ZGlzcGxheURhdGEoZXhlcmNpc2VUaW1lZnJhbWVzLCBleGVyY2lzZVRpdGxlKX1cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgIHtkaXNwbGF5RGF0YShzb2NpYWxUaW1lZnJhbWVzLCBzb2NpYWxUaXRsZSl9XHJcbiAgICAgICAgICAgICAge2Rpc3BsYXlEYXRhKHNlbGZDYXJlVGltZWZyYW1lcywgc2VsZkNhcmVUaXRsZSl9XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkhlYWQiLCJzdHlsZXMiLCJDb250YWluZXIiLCJSb3ciLCJDb2wiLCJDYXJkIiwiSW1hZ2UiLCJ1c2VTdGF0ZSIsImRhdGEiLCJIb21lIiwic2VsZWN0ZWRUaW1lZnJhbWUiLCJzZXRTZWxlY3RlZFRpbWVmcmFtZSIsInRpbWVmcmFtZXMiLCJoYW5kbGVUaW1lZnJhbWVDbGljayIsInRpbWVmcmFtZSIsInRpdGxlIiwid29ya1RpdGxlIiwid29ya1RpbWVmcmFtZXMiLCJjYXJkc3R5bGUiLCJjYXJkX2JhY2tncm91bmRfd29yayIsInBsYXlUaXRsZSIsInBsYXlUaW1lZnJhbWVzIiwic3R1ZHlUaXRsZSIsInN0dWR5VGltZWZyYW1lcyIsImV4ZXJjaXNlVGl0bGUiLCJleGVyY2lzZVRpbWVmcmFtZXMiLCJzb2NpYWxUaXRsZSIsInNvY2lhbFRpbWVmcmFtZXMiLCJzZWxmQ2FyZVRpdGxlIiwic2VsZkNhcmVUaW1lZnJhbWVzIiwiZGlzcGxheURhdGEiLCJ0aW1lZnJhbWVEYXRhIiwiY3VycmVudFZhbHVlIiwiY3VycmVudCIsInByZXZpb3VzVmFsdWUiLCJwcmV2aW91cyIsImRpdiIsImNsYXNzTmFtZSIsImNhcmQxIiwidG9Mb3dlckNhc2UiLCJCb2R5IiwiaDUiLCJwIiwiY29udGFpbmVyIiwibWFpbiIsImZsdWlkIiwiY2FyZCIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwiaDEiLCJjYXJkX3RpdGxlIiwiY2FyZF9ib2R5IiwibWFwIiwidGltZWZyIiwiYSIsImlkIiwib25DbGljayIsInNlbGVjdGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});