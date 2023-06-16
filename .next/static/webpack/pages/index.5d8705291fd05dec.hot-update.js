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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data.json */ \"./data.json\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [selectedTimeframe, setSelectedTimeframe] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const timeframes = [\n        \"daily\",\n        \"weekly\",\n        \"monthly\"\n    ];\n    const handleTimeframeClick = (timeframe)=>{\n        setSelectedTimeframe(timeframe);\n    };\n    const { title: workTitle , timeframes: workTimeframes , \".card_background_play\": workCardstyle  } = _data_json__WEBPACK_IMPORTED_MODULE_4__[0];\n    const { title: playTitle , timeframes: playTimeframes  } = _data_json__WEBPACK_IMPORTED_MODULE_4__[1];\n    const { title: studyTitle , timeframes: studyTimeframes  } = _data_json__WEBPACK_IMPORTED_MODULE_4__[2];\n    const { title: exerciseTitle , timeframes: exerciseTimeframes  } = _data_json__WEBPACK_IMPORTED_MODULE_4__[3];\n    const { title: socialTitle , timeframes: socialTimeframes  } = _data_json__WEBPACK_IMPORTED_MODULE_4__[4];\n    const { title: selfCareTitle , timeframes: selfCareTimeframes  } = _data_json__WEBPACK_IMPORTED_MODULE_4__[5];\n    const displayData = (data, title)=>{\n        const timeframeData = data[selectedTimeframe];\n        const currentValue = timeframeData ? timeframeData.current : null;\n        const previousValue = timeframeData ? timeframeData.previous : null;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().card_background_work)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                    lineNumber: 36,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Card, {\n                    className: \"\".concat((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().card1), \" \").concat(title.toLowerCase()),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Card.Body, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                children: title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                lineNumber: 41,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    currentValue,\n                                    \"hrs\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                lineNumber: 42,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Last Week - \",\n                                    previousValue,\n                                    \"hrs\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                lineNumber: 43,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                    lineNumber: 39,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n            lineNumber: 35,\n            columnNumber: 7\n        }, this);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Create Next App\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().main),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Container, {\n                    fluid: true,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Row, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Col, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Card, {\n                                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().card),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Card.Body, {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                src: \"/images/image-jeremy.png\",\n                                                alt: \"avatar\",\n                                                width: 100,\n                                                height: 100\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                                lineNumber: 61,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: \"Report for\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                                lineNumber: 62,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().card_title),\n                                                children: \"Jeremy Robson.\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                                lineNumber: 63,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().card_body),\n                                                children: timeframes.map((timefr)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                            id: timefr,\n                                                            onClick: ()=>handleTimeframeClick(timefr),\n                                                            className: timefr === selectedTimeframe ? (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().selected) : \"\",\n                                                            children: timefr\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                                            lineNumber: 67,\n                                                            columnNumber: 25\n                                                        }, this)\n                                                    }, timefr, false, {\n                                                        fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                                        lineNumber: 66,\n                                                        columnNumber: 23\n                                                    }, this))\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                                lineNumber: 64,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                        lineNumber: 60,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                    lineNumber: 59,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                lineNumber: 58,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Col, {\n                                children: [\n                                    displayData(workTimeframes, workTitle, workCardstyle),\n                                    displayData(playTimeframes, playTitle)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                lineNumber: 80,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Col, {\n                                children: [\n                                    displayData(studyTimeframes, studyTitle),\n                                    displayData(exerciseTimeframes, exerciseTitle)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                lineNumber: 84,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Col, {\n                                children: [\n                                    displayData(socialTimeframes, socialTitle),\n                                    displayData(selfCareTimeframes, selfCareTitle)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                lineNumber: 88,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                        lineNumber: 57,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"EzpMGHhwS7kTp+9/PBjL0yajoRs=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWdCRCxXQUFXRTtvQ0FDdkNXLFlBQVlULGdCQUFnQkQ7Ozs7Ozs7MENBRS9CLDhEQUFDZixnREFBR0E7O29DQUNEeUIsWUFBWVAsaUJBQWlCRDtvQ0FDN0JRLFlBQVlMLG9CQUFvQkQ7Ozs7Ozs7MENBRWpDLDhEQUFDbkIsZ0RBQUdBOztvQ0FDSHlCLFlBQVlILGtCQUFrQkQ7b0NBQzlCSSxZQUFZRCxvQkFBb0JEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU8vQyxDQUFDO0dBekZ1QmxCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJztcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3csIENvbCwgQ2FyZCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBkYXRhIGZyb20gJy4uL2RhdGEuanNvbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIGNvbnN0IFtzZWxlY3RlZFRpbWVmcmFtZSwgc2V0U2VsZWN0ZWRUaW1lZnJhbWVdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICBjb25zdCB0aW1lZnJhbWVzID0gWydkYWlseScsICd3ZWVrbHknLCAnbW9udGhseSddO1xyXG5cclxuICBjb25zdCBoYW5kbGVUaW1lZnJhbWVDbGljayA9ICh0aW1lZnJhbWUpID0+IHtcclxuICAgIHNldFNlbGVjdGVkVGltZWZyYW1lKHRpbWVmcmFtZSk7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIGNvbnN0IHsgdGl0bGU6IHdvcmtUaXRsZSwgdGltZWZyYW1lczogd29ya1RpbWVmcmFtZXMsIFwiLmNhcmRfYmFja2dyb3VuZF9wbGF5XCI6IHdvcmtDYXJkc3R5bGUgIH0gPSBkYXRhWzBdO1xyXG4gIGNvbnN0IHsgdGl0bGU6IHBsYXlUaXRsZSwgdGltZWZyYW1lczogcGxheVRpbWVmcmFtZXMgfSA9IGRhdGFbMV07XHJcbiAgY29uc3QgeyB0aXRsZTogc3R1ZHlUaXRsZSwgdGltZWZyYW1lczogc3R1ZHlUaW1lZnJhbWVzIH0gPSBkYXRhWzJdO1xyXG4gIGNvbnN0IHsgdGl0bGU6IGV4ZXJjaXNlVGl0bGUsIHRpbWVmcmFtZXM6IGV4ZXJjaXNlVGltZWZyYW1lcyB9ID0gZGF0YVszXTtcclxuICBjb25zdCB7IHRpdGxlOiBzb2NpYWxUaXRsZSwgdGltZWZyYW1lczogc29jaWFsVGltZWZyYW1lcyB9ID0gZGF0YVs0XTtcclxuICBjb25zdCB7IHRpdGxlOiBzZWxmQ2FyZVRpdGxlLCB0aW1lZnJhbWVzOiBzZWxmQ2FyZVRpbWVmcmFtZXMgfSA9IGRhdGFbNV07XHJcblxyXG4gIFxyXG4gIGNvbnN0IGRpc3BsYXlEYXRhID0gKGRhdGEsIHRpdGxlKSA9PiB7XHJcbiAgICBjb25zdCB0aW1lZnJhbWVEYXRhID0gZGF0YVtzZWxlY3RlZFRpbWVmcmFtZV07XHJcblxyXG4gICAgY29uc3QgY3VycmVudFZhbHVlID0gdGltZWZyYW1lRGF0YSA/IHRpbWVmcmFtZURhdGEuY3VycmVudCA6IG51bGw7XHJcbiAgICBjb25zdCBwcmV2aW91c1ZhbHVlID0gdGltZWZyYW1lRGF0YSA/IHRpbWVmcmFtZURhdGEucHJldmlvdXMgOiBudWxsO1xyXG5cclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZF9iYWNrZ3JvdW5kX3dvcmt9PlxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxDYXJkIGNsYXNzTmFtZT17YCR7c3R5bGVzLmNhcmQxfSAke3RpdGxlLnRvTG93ZXJDYXNlKCl9YH0+XHJcbiAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgIDxoNT57dGl0bGV9PC9oNT5cclxuICAgICAgICAgIDxwPntjdXJyZW50VmFsdWV9aHJzPC9wPlxyXG4gICAgICAgICAgPHA+TGFzdCBXZWVrIC0ge3ByZXZpb3VzVmFsdWV9aHJzPC9wPlxyXG4gICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICA8L0NhcmQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5DcmVhdGUgTmV4dCBBcHA8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxyXG4gICAgICAgIDxDb250YWluZXIgZmx1aWQ+XHJcbiAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxyXG4gICAgICAgICAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9pbWFnZXMvaW1hZ2UtamVyZW15LnBuZ1wiIGFsdD1cImF2YXRhclwiIHdpZHRoPXsxMDB9IGhlaWdodD17MTAwfSAvPlxyXG4gICAgICAgICAgICAgICAgICA8cD5SZXBvcnQgZm9yPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZF90aXRsZX0+SmVyZW15IFJvYnNvbi48L2gxPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmRfYm9keX0+XHJcbiAgICAgICAgICAgICAgICAgICAge3RpbWVmcmFtZXMubWFwKCh0aW1lZnIpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxwIGtleT17dGltZWZyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17dGltZWZyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVRpbWVmcmFtZUNsaWNrKHRpbWVmcil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXt0aW1lZnIgPT09IHNlbGVjdGVkVGltZWZyYW1lID8gc3R5bGVzLnNlbGVjdGVkIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7dGltZWZyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICB7ZGlzcGxheURhdGEod29ya1RpbWVmcmFtZXMsIHdvcmtUaXRsZSwgd29ya0NhcmRzdHlsZSl9XHJcbiAgICAgICAgICAgICAge2Rpc3BsYXlEYXRhKHBsYXlUaW1lZnJhbWVzLCBwbGF5VGl0bGUpfVxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICB7ZGlzcGxheURhdGEoc3R1ZHlUaW1lZnJhbWVzLCBzdHVkeVRpdGxlKX1cclxuICAgICAgICAgICAgICB7ZGlzcGxheURhdGEoZXhlcmNpc2VUaW1lZnJhbWVzLCBleGVyY2lzZVRpdGxlKX1cclxuICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgIHtkaXNwbGF5RGF0YShzb2NpYWxUaW1lZnJhbWVzLCBzb2NpYWxUaXRsZSl9XHJcbiAgICAgICAgICAgICAge2Rpc3BsYXlEYXRhKHNlbGZDYXJlVGltZWZyYW1lcywgc2VsZkNhcmVUaXRsZSl9XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkhlYWQiLCJzdHlsZXMiLCJDb250YWluZXIiLCJSb3ciLCJDb2wiLCJDYXJkIiwiSW1hZ2UiLCJ1c2VTdGF0ZSIsImRhdGEiLCJIb21lIiwic2VsZWN0ZWRUaW1lZnJhbWUiLCJzZXRTZWxlY3RlZFRpbWVmcmFtZSIsInRpbWVmcmFtZXMiLCJoYW5kbGVUaW1lZnJhbWVDbGljayIsInRpbWVmcmFtZSIsInRpdGxlIiwid29ya1RpdGxlIiwid29ya1RpbWVmcmFtZXMiLCJ3b3JrQ2FyZHN0eWxlIiwicGxheVRpdGxlIiwicGxheVRpbWVmcmFtZXMiLCJzdHVkeVRpdGxlIiwic3R1ZHlUaW1lZnJhbWVzIiwiZXhlcmNpc2VUaXRsZSIsImV4ZXJjaXNlVGltZWZyYW1lcyIsInNvY2lhbFRpdGxlIiwic29jaWFsVGltZWZyYW1lcyIsInNlbGZDYXJlVGl0bGUiLCJzZWxmQ2FyZVRpbWVmcmFtZXMiLCJkaXNwbGF5RGF0YSIsInRpbWVmcmFtZURhdGEiLCJjdXJyZW50VmFsdWUiLCJjdXJyZW50IiwicHJldmlvdXNWYWx1ZSIsInByZXZpb3VzIiwiZGl2IiwiY2xhc3NOYW1lIiwiY2FyZF9iYWNrZ3JvdW5kX3dvcmsiLCJjYXJkMSIsInRvTG93ZXJDYXNlIiwiQm9keSIsImg1IiwicCIsImNvbnRhaW5lciIsIm1haW4iLCJmbHVpZCIsImNhcmQiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImgxIiwiY2FyZF90aXRsZSIsImNhcmRfYm9keSIsIm1hcCIsInRpbWVmciIsImEiLCJpZCIsIm9uQ2xpY2siLCJzZWxlY3RlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});