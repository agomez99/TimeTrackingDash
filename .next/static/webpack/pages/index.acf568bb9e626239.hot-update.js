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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data.json */ \"./data.json\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [selectedTimeframe, setSelectedTimeframe] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const timeframes = [\n        \"daily\",\n        \"weekly\",\n        \"monthly\"\n    ];\n    const handleTimeframeClick = (timeframe)=>{\n        setSelectedTimeframe(timeframe);\n    };\n    const [work, play, study, exercise, social, selfCare] = _data_json__WEBPACK_IMPORTED_MODULE_4__;\n    const workTitle = work.title;\n    const workTimeframes = work.timeframes;\n    const workStyle = work.style || {\n        backgroundColor: \"white\"\n    };\n    const playTitle = play.title;\n    const playTimeframes = play.timeframes;\n    const studyTitle = study.title;\n    const studyTimeframes = study.timeframes;\n    const exerciseTitle = exercise.title;\n    const exerciseTimeframes = exercise.timeframes;\n    const socialTitle = social.title;\n    const socialTimeframes = social.timeframes;\n    const selfCareTitle = selfCare.title;\n    const selfCareTimeframes = selfCare.timeframes;\n    const displayData = (data, title)=>{\n        const timeframeData = data[selectedTimeframe];\n        const currentValue = timeframeData ? timeframeData.current : null;\n        const previousValue = timeframeData ? timeframeData.previous : null;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().card_background_work)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                    lineNumber: 50,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Card, {\n                    className: \"\".concat((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().card1), \" \").concat(title.toLowerCase()),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Card.Body, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                children: title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                lineNumber: 55,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    currentValue,\n                                    \"hrs\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                lineNumber: 56,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Last Week - \",\n                                    previousValue,\n                                    \"hrs\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                lineNumber: 57,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                    lineNumber: 53,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n            lineNumber: 49,\n            columnNumber: 7\n        }, this);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Create Next App\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                    lineNumber: 67,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().main),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Container, {\n                    fluid: true,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Row, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Col, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Card, {\n                                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().card),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Card.Body, {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                src: \"/images/image-jeremy.png\",\n                                                alt: \"avatar\",\n                                                width: 100,\n                                                height: 100\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                                lineNumber: 75,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: \"Report for\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                                lineNumber: 76,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().card_title),\n                                                children: \"Jeremy Robson.\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                                lineNumber: 77,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().card_body),\n                                                children: timeframes.map((timefr)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                            id: timefr,\n                                                            onClick: ()=>handleTimeframeClick(timefr),\n                                                            className: timefr === selectedTimeframe ? (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().selected) : \"\",\n                                                            children: timefr\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                                            lineNumber: 81,\n                                                            columnNumber: 25\n                                                        }, this)\n                                                    }, timefr, false, {\n                                                        fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                                        lineNumber: 80,\n                                                        columnNumber: 23\n                                                    }, this))\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                                lineNumber: 78,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                        lineNumber: 74,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                    lineNumber: 73,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                lineNumber: 72,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Col, {\n                                children: [\n                                    displayData(workTimeframes, workTitle, workStyle),\n                                    displayData(playTimeframes, playTitle)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                lineNumber: 94,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Col, {\n                                children: [\n                                    displayData(studyTimeframes, studyTitle),\n                                    displayData(exerciseTimeframes, exerciseTitle)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                lineNumber: 98,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Col, {\n                                children: [\n                                    displayData(socialTimeframes, socialTitle),\n                                    displayData(selfCareTimeframes, selfCareTitle)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                                lineNumber: 102,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                        lineNumber: 71,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                    lineNumber: 70,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\austinePC\\\\Desktop\\\\front end mentor\\\\TimeTrackingDash\\\\pages\\\\index.js\",\n        lineNumber: 65,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"EzpMGHhwS7kTp+9/PBjL0yajoRs=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUU7c0VBRTdEOEQ7Ozs7Ozt1REFOR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQWNsQiw4REFBQzNELGdEQUFHQTs7b0NBQ0RpQyxZQUFZZCxnQkFBZ0JGLFdBQVdHO29DQUN2Q2EsWUFBWVQsZ0JBQWdCRDs7Ozs7OzswQ0FFL0IsOERBQUN2QixnREFBR0E7O29DQUNEaUMsWUFBWVAsaUJBQWlCRDtvQ0FDN0JRLFlBQVlMLG9CQUFvQkQ7Ozs7Ozs7MENBRWpDLDhEQUFDM0IsZ0RBQUdBOztvQ0FDSGlDLFlBQVlILGtCQUFrQkQ7b0NBQzlCSSxZQUFZRCxvQkFBb0JEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU8vQyxDQUFDO0dBdkd1QjFCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJztcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3csIENvbCwgQ2FyZCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBkYXRhIGZyb20gJy4uL2RhdGEuanNvbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIGNvbnN0IFtzZWxlY3RlZFRpbWVmcmFtZSwgc2V0U2VsZWN0ZWRUaW1lZnJhbWVdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICBjb25zdCB0aW1lZnJhbWVzID0gWydkYWlseScsICd3ZWVrbHknLCAnbW9udGhseSddO1xyXG5cclxuICBjb25zdCBoYW5kbGVUaW1lZnJhbWVDbGljayA9ICh0aW1lZnJhbWUpID0+IHtcclxuICAgIHNldFNlbGVjdGVkVGltZWZyYW1lKHRpbWVmcmFtZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBbd29yaywgcGxheSwgc3R1ZHksIGV4ZXJjaXNlLCBzb2NpYWwsIHNlbGZDYXJlXSA9IGRhdGE7XHJcblxyXG4gIGNvbnN0IHdvcmtUaXRsZSA9IHdvcmsudGl0bGU7XHJcbiAgY29uc3Qgd29ya1RpbWVmcmFtZXMgPSB3b3JrLnRpbWVmcmFtZXM7XHJcbiAgY29uc3Qgd29ya1N0eWxlID0gd29yay5zdHlsZSB8fCB7IGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9O1xyXG4gIFxyXG4gIGNvbnN0IHBsYXlUaXRsZSA9IHBsYXkudGl0bGU7XHJcbiAgY29uc3QgcGxheVRpbWVmcmFtZXMgPSBwbGF5LnRpbWVmcmFtZXM7XHJcbiAgXHJcbiAgY29uc3Qgc3R1ZHlUaXRsZSA9IHN0dWR5LnRpdGxlO1xyXG4gIGNvbnN0IHN0dWR5VGltZWZyYW1lcyA9IHN0dWR5LnRpbWVmcmFtZXM7XHJcbiAgXHJcbiAgY29uc3QgZXhlcmNpc2VUaXRsZSA9IGV4ZXJjaXNlLnRpdGxlO1xyXG4gIGNvbnN0IGV4ZXJjaXNlVGltZWZyYW1lcyA9IGV4ZXJjaXNlLnRpbWVmcmFtZXM7XHJcbiAgXHJcbiAgY29uc3Qgc29jaWFsVGl0bGUgPSBzb2NpYWwudGl0bGU7XHJcbiAgY29uc3Qgc29jaWFsVGltZWZyYW1lcyA9IHNvY2lhbC50aW1lZnJhbWVzO1xyXG4gIFxyXG4gIGNvbnN0IHNlbGZDYXJlVGl0bGUgPSBzZWxmQ2FyZS50aXRsZTtcclxuICBjb25zdCBzZWxmQ2FyZVRpbWVmcmFtZXMgPSBzZWxmQ2FyZS50aW1lZnJhbWVzO1xyXG4gIFxyXG5cclxuXHJcbiAgXHJcbiAgY29uc3QgZGlzcGxheURhdGEgPSAoZGF0YSwgdGl0bGUpID0+IHtcclxuICAgIGNvbnN0IHRpbWVmcmFtZURhdGEgPSBkYXRhW3NlbGVjdGVkVGltZWZyYW1lXTtcclxuXHJcbiAgICBjb25zdCBjdXJyZW50VmFsdWUgPSB0aW1lZnJhbWVEYXRhID8gdGltZWZyYW1lRGF0YS5jdXJyZW50IDogbnVsbDtcclxuICAgIGNvbnN0IHByZXZpb3VzVmFsdWUgPSB0aW1lZnJhbWVEYXRhID8gdGltZWZyYW1lRGF0YS5wcmV2aW91cyA6IG51bGw7XHJcblxyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2ID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkX2JhY2tncm91bmRfd29ya30+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPENhcmQgY2xhc3NOYW1lPXtgJHtzdHlsZXMuY2FyZDF9ICR7dGl0bGUudG9Mb3dlckNhc2UoKX1gfT5cclxuICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgPGg1Pnt0aXRsZX08L2g1PlxyXG4gICAgICAgICAgPHA+e2N1cnJlbnRWYWx1ZX1ocnM8L3A+XHJcbiAgICAgICAgICA8cD5MYXN0IFdlZWsgLSB7cHJldmlvdXNWYWx1ZX1ocnM8L3A+XHJcbiAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgIDwvQ2FyZD5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPkNyZWF0ZSBOZXh0IEFwcDwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XHJcbiAgICAgICAgPENvbnRhaW5lciBmbHVpZD5cclxuICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2ltYWdlcy9pbWFnZS1qZXJlbXkucG5nXCIgYWx0PVwiYXZhdGFyXCIgd2lkdGg9ezEwMH0gaGVpZ2h0PXsxMDB9IC8+XHJcbiAgICAgICAgICAgICAgICAgIDxwPlJlcG9ydCBmb3I8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5jYXJkX3RpdGxlfT5KZXJlbXkgUm9ic29uLjwvaDE+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZF9ib2R5fT5cclxuICAgICAgICAgICAgICAgICAgICB7dGltZWZyYW1lcy5tYXAoKHRpbWVmcikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAga2V5PXt0aW1lZnJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXt0aW1lZnJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlVGltZWZyYW1lQ2xpY2sodGltZWZyKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3RpbWVmciA9PT0gc2VsZWN0ZWRUaW1lZnJhbWUgPyBzdHlsZXMuc2VsZWN0ZWQgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt0aW1lZnJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgIHtkaXNwbGF5RGF0YSh3b3JrVGltZWZyYW1lcywgd29ya1RpdGxlLCB3b3JrU3R5bGUpfVxyXG4gICAgICAgICAgICAgIHtkaXNwbGF5RGF0YShwbGF5VGltZWZyYW1lcywgcGxheVRpdGxlKX1cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAge2Rpc3BsYXlEYXRhKHN0dWR5VGltZWZyYW1lcywgc3R1ZHlUaXRsZSl9XHJcbiAgICAgICAgICAgICAge2Rpc3BsYXlEYXRhKGV4ZXJjaXNlVGltZWZyYW1lcywgZXhlcmNpc2VUaXRsZSl9XHJcbiAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICB7ZGlzcGxheURhdGEoc29jaWFsVGltZWZyYW1lcywgc29jaWFsVGl0bGUpfVxyXG4gICAgICAgICAgICAgIHtkaXNwbGF5RGF0YShzZWxmQ2FyZVRpbWVmcmFtZXMsIHNlbGZDYXJlVGl0bGUpfVxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8L21haW4+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJIZWFkIiwic3R5bGVzIiwiQ29udGFpbmVyIiwiUm93IiwiQ29sIiwiQ2FyZCIsIkltYWdlIiwidXNlU3RhdGUiLCJkYXRhIiwiSG9tZSIsInNlbGVjdGVkVGltZWZyYW1lIiwic2V0U2VsZWN0ZWRUaW1lZnJhbWUiLCJ0aW1lZnJhbWVzIiwiaGFuZGxlVGltZWZyYW1lQ2xpY2siLCJ0aW1lZnJhbWUiLCJ3b3JrIiwicGxheSIsInN0dWR5IiwiZXhlcmNpc2UiLCJzb2NpYWwiLCJzZWxmQ2FyZSIsIndvcmtUaXRsZSIsInRpdGxlIiwid29ya1RpbWVmcmFtZXMiLCJ3b3JrU3R5bGUiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsInBsYXlUaXRsZSIsInBsYXlUaW1lZnJhbWVzIiwic3R1ZHlUaXRsZSIsInN0dWR5VGltZWZyYW1lcyIsImV4ZXJjaXNlVGl0bGUiLCJleGVyY2lzZVRpbWVmcmFtZXMiLCJzb2NpYWxUaXRsZSIsInNvY2lhbFRpbWVmcmFtZXMiLCJzZWxmQ2FyZVRpdGxlIiwic2VsZkNhcmVUaW1lZnJhbWVzIiwiZGlzcGxheURhdGEiLCJ0aW1lZnJhbWVEYXRhIiwiY3VycmVudFZhbHVlIiwiY3VycmVudCIsInByZXZpb3VzVmFsdWUiLCJwcmV2aW91cyIsImRpdiIsImNsYXNzTmFtZSIsImNhcmRfYmFja2dyb3VuZF93b3JrIiwiY2FyZDEiLCJ0b0xvd2VyQ2FzZSIsIkJvZHkiLCJoNSIsInAiLCJjb250YWluZXIiLCJtYWluIiwiZmx1aWQiLCJjYXJkIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJoMSIsImNhcmRfdGl0bGUiLCJjYXJkX2JvZHkiLCJtYXAiLCJ0aW1lZnIiLCJhIiwiaWQiLCJvbkNsaWNrIiwic2VsZWN0ZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});