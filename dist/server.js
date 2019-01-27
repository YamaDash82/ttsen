/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/routes/data-access.ts":
/*!***********************************!*\
  !*** ./src/routes/data-access.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _yycomp_request_receiver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../yycomp/request-receiver */ \"./src/yycomp/request-receiver.ts\");\n\r\n\r\nvar router = express__WEBPACK_IMPORTED_MODULE_0__[\"Router\"]();\r\nvar dummyRequestData = {\r\n    requests: [\r\n        {\r\n            queryName: \"M_ボートレーサー\",\r\n            source: \"SELECT * FROM BoatRace.dbo.M_ボートレーサー\"\r\n        },\r\n        {\r\n            queryName: \"M_ボートレース場\",\r\n            source: \"SELECT * FROM BoatRace.dbo.M_ボートレース場\"\r\n        }\r\n    ]\r\n};\r\nrouter.get('/', function (req, res, next) {\r\n    var requestReceiver = new _yycomp_request_receiver__WEBPACK_IMPORTED_MODULE_1__[\"RequestReceiver\"](JSON.stringify(dummyRequestData), res);\r\n    requestReceiver.execute();\r\n});\r\nrouter.post('/', function (req, res, next) {\r\n    var requestedData = {\r\n        requests: [\r\n            req.body\r\n        ]\r\n    };\r\n    var requestReceiver = new _yycomp_request_receiver__WEBPACK_IMPORTED_MODULE_1__[\"RequestReceiver\"](JSON.stringify(requestedData), res);\r\n    requestReceiver.execute();\r\n});\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL2RhdGEtYWNjZXNzLnRzP2VlOTkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbUM7QUFFMEI7QUFDN0QsSUFBTSxNQUFNLEdBQUcsOENBQWMsRUFBRSxDQUFDO0FBR2hDLElBQU0sZ0JBQWdCLEdBQWtCO0lBQ3RDLFFBQVEsRUFBRTtRQUNSO1lBQ0UsU0FBUyxFQUFFLFdBQVc7WUFDdEIsTUFBTSxFQUFFLHNDQUFzQztTQUMvQztRQUNEO1lBQ0UsU0FBUyxFQUFFLFdBQVc7WUFDdEIsTUFBTSxFQUFFLHNDQUFzQztTQUMvQztLQUNGO0NBQ0YsQ0FBQztBQUVGLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFVBQUMsR0FBb0IsRUFBRSxHQUFxQixFQUFFLElBQTBCO0lBRXRGLElBQU0sZUFBZSxHQUFHLElBQUksd0VBQWUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFFbkYsZUFBZSxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQzVCLENBQUMsQ0FBQyxDQUFDO0FBRUgsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsVUFBQyxHQUFvQixFQUFFLEdBQXFCLEVBQUUsSUFBMEI7SUFFdkYsSUFBSSxhQUFhLEdBQWtCO1FBQ2pDLFFBQVEsRUFBRTtZQUNSLEdBQUcsQ0FBQyxJQUFJO1NBQ1Q7S0FDRixDQUFDO0lBRUYsSUFBTSxlQUFlLEdBQUcsSUFBSSx3RUFBZSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFFaEYsZUFBZSxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQzVCLENBQUMsQ0FBQyxDQUFDO0FBRVkscUVBQU0sRUFBQyIsImZpbGUiOiIuL3NyYy9yb3V0ZXMvZGF0YS1hY2Nlc3MudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBFeHByZXNzIGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgeyBSZXF1ZXN0ZWREYXRhIH0gZnJvbSAnLi4veXljb21wL2RlY2xhcmF0aW9ucyc7XHJcbmltcG9ydCB7IFJlcXVlc3RSZWNlaXZlciB9IGZyb20gJy4uL3l5Y29tcC9yZXF1ZXN0LXJlY2VpdmVyJztcclxuY29uc3Qgcm91dGVyID0gRXhwcmVzcy5Sb3V0ZXIoKTtcclxuXHJcbi8v44OA44Of44O844Gu44Oq44Kv44Ko44K544OI44OH44O844K/XHJcbmNvbnN0IGR1bW15UmVxdWVzdERhdGE6IFJlcXVlc3RlZERhdGEgPSB7XHJcbiAgcmVxdWVzdHM6IFtcclxuICAgIHtcclxuICAgICAgcXVlcnlOYW1lOiBcIk1f44Oc44O844OI44Os44O844K144O8XCIsIFxyXG4gICAgICBzb3VyY2U6IFwiU0VMRUNUICogRlJPTSBCb2F0UmFjZS5kYm8uTV/jg5zjg7zjg4jjg6zjg7zjgrXjg7xcIlxyXG4gICAgfSwgXHJcbiAgICB7XHJcbiAgICAgIHF1ZXJ5TmFtZTogXCJNX+ODnOODvOODiOODrOODvOOCueWgtFwiLCBcclxuICAgICAgc291cmNlOiBcIlNFTEVDVCAqIEZST00gQm9hdFJhY2UuZGJvLk1f44Oc44O844OI44Os44O844K55aC0XCJcclxuICAgIH1cclxuICBdXHJcbn07XHJcblxyXG5yb3V0ZXIuZ2V0KCcvJywgKHJlcTogRXhwcmVzcy5SZXF1ZXN0LCByZXM6IEV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IEV4cHJlc3MuTmV4dEZ1bmN0aW9uKSA9PiB7XHJcbiAgLy9SZXF1ZXN0UmVjZWl2ZXLjgq/jg6njgrnjga7jgqTjg7Pjgrnjgr/jg7PjgrnjgpLnlJ/miJDjgZnjgovjgIJcclxuICBjb25zdCByZXF1ZXN0UmVjZWl2ZXIgPSBuZXcgUmVxdWVzdFJlY2VpdmVyKEpTT04uc3RyaW5naWZ5KGR1bW15UmVxdWVzdERhdGEpLCByZXMpO1xyXG4gIC8v5Yem55CG44KS5a6f6KGM44GZ44KL44CCcmVxdWVzdFJlY2VpdmVy44Gr5rih44GX44GfUmVzcG9uc2Xjgavlj5blvpfjgZfjgZ/jg4fjg7zjgr/jgpLmuKHjgZfjgabjg5Xjg63jg7Pjg4jjgavov5TjgZfjgabjgYTjgovjgIJcclxuICByZXF1ZXN0UmVjZWl2ZXIuZXhlY3V0ZSgpO1xyXG59KTtcclxuXHJcbnJvdXRlci5wb3N0KCcvJywgKHJlcTogRXhwcmVzcy5SZXF1ZXN0LCByZXM6IEV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IEV4cHJlc3MuTmV4dEZ1bmN0aW9uKSA9PiB7XHJcbiAgLy9SZXF1ZXN0UmVjZWl2ZXLjgq/jg6njgrnjga7jgqTjg7Pjgrnjgr/jg7PjgrnjgpLnlJ/miJDjgZnjgovjgIJcclxuICBsZXQgcmVxdWVzdGVkRGF0YTogUmVxdWVzdGVkRGF0YSA9IHtcclxuICAgIHJlcXVlc3RzOiBbXHJcbiAgICAgIHJlcS5ib2R5XHJcbiAgICBdXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVxdWVzdFJlY2VpdmVyID0gbmV3IFJlcXVlc3RSZWNlaXZlcihKU09OLnN0cmluZ2lmeShyZXF1ZXN0ZWREYXRhKSwgcmVzKTtcclxuICAvL+WHpueQhuOCkuWun+ihjOOBmeOCi+OAgnJlcXVlc3RSZWNlaXZlcuOBq+a4oeOBl+OBn1Jlc3BvbnNl44Gr5Y+W5b6X44GX44Gf44OH44O844K/44KS5rih44GX44Gm44OV44Ot44Oz44OI44Gr6L+U44GX44Gm44GE44KL44CCXHJcbiAgcmVxdWVzdFJlY2VpdmVyLmV4ZWN1dGUoKTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/routes/data-access.ts\n");

/***/ }),

/***/ "./src/routes/query-input.ts":
/*!***********************************!*\
  !*** ./src/routes/query-input.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n\r\nvar router = express__WEBPACK_IMPORTED_MODULE_0__[\"Router\"]();\r\nrouter.get('/', function (req, res, next) {\r\n    res.render('query-input.ejs', {});\r\n});\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL3F1ZXJ5LWlucHV0LnRzP2RiYjEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQW1DO0FBQ25DLElBQU0sTUFBTSxHQUFHLDhDQUFjLEVBQUUsQ0FBQztBQUVoQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxVQUFDLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxJQUEwQjtJQUN0RixHQUFHLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3BDLENBQUMsQ0FBQyxDQUFDO0FBRVkscUVBQU0sRUFBQyIsImZpbGUiOiIuL3NyYy9yb3V0ZXMvcXVlcnktaW5wdXQudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBFeHByZXNzIGZyb20gJ2V4cHJlc3MnO1xyXG5jb25zdCByb3V0ZXIgPSBFeHByZXNzLlJvdXRlcigpO1xyXG5cclxucm91dGVyLmdldCgnLycsIChyZXE6IEV4cHJlc3MuUmVxdWVzdCwgcmVzOiBFeHByZXNzLlJlc3BvbnNlLCBuZXh0OiBFeHByZXNzLk5leHRGdW5jdGlvbikgPT4ge1xyXG4gIHJlcy5yZW5kZXIoJ3F1ZXJ5LWlucHV0LmVqcycsIHt9KTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/routes/query-input.ts\n");

/***/ }),

/***/ "./src/server.ts":
/*!***********************!*\
  !*** ./src/server.ts ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _routes_data_access__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes/data-access */ \"./src/routes/data-access.ts\");\n/* harmony import */ var _routes_query_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes/query-input */ \"./src/routes/query-input.ts\");\n\r\n\r\n\r\n\r\n\r\nvar cookieParser = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\r\nvar app = express__WEBPACK_IMPORTED_MODULE_0__();\r\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_1__[\"json\"]());\r\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_1__[\"urlencoded\"]({ extended: false }));\r\napp.use(cookieParser());\r\napp.use(express__WEBPACK_IMPORTED_MODULE_0__[\"static\"](path__WEBPACK_IMPORTED_MODULE_2__[\"join\"](__dirname, 'public')));\r\napp.use('/data-access', _routes_data_access__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\r\napp.use('/query-input', _routes_query_input__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\r\napp.get('/', function (req, res, next) {\r\n    return res.send('Hello Nyanko.');\r\n});\r\napp.listen(3000, function () {\r\n    console.log('Listen on port 3000.');\r\n});\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (app);\r\n\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyLnRzPzk2YmIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1DO0FBR087QUFDYjtBQUNpQjtBQUNBO0FBRzlDLElBQU0sWUFBWSxHQUFHLG1CQUFPLENBQUMsb0NBQWUsQ0FBQyxDQUFDO0FBRTlDLElBQU0sR0FBRyxHQUFHLG9DQUFPLEVBQUUsQ0FBQztBQUV0QixHQUFHLENBQUMsR0FBRyxDQUFDLGdEQUFlLEVBQUUsQ0FBQyxDQUFDO0FBQzNCLEdBQUcsQ0FBQyxHQUFHLENBQUMsc0RBQXFCLENBQUMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ25ELEdBQUcsQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztBQUN4QixHQUFHLENBQUMsR0FBRyxDQUFDLDhDQUFjLENBQUMseUNBQVMsQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBR3hELEdBQUcsQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLDJEQUFVLENBQUMsQ0FBQztBQUNwQyxHQUFHLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSwyREFBVSxDQUFDLENBQUM7QUFDcEMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsVUFBQyxHQUFvQixFQUFFLEdBQXFCLEVBQUUsSUFBMEI7SUFDakYsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQ3JDLENBQUMsQ0FBQyxDQUFDO0FBRUgsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7SUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFDeEMsQ0FBQyxDQUFDLENBQUM7QUFFWSxrRUFBRyxFQUFDIiwiZmlsZSI6Ii4vc3JjL3NlcnZlci50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIEV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XHJcbi8vY29uc3QgYm9keVBhcnNlciA9IHJlcXVpcmUoJ2JvZHktcGFyc2VyJyk7XHJcbi8vY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcclxuaW1wb3J0ICogYXMgYm9keVBhcnNlciBmcm9tICdib2R5LXBhcnNlcic7XHJcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XHJcbmltcG9ydCBkYXRhQWNjZXNzIGZyb20gJy4vcm91dGVzL2RhdGEtYWNjZXNzJztcclxuaW1wb3J0IHF1ZXJ5SW5wdXQgZnJvbSAnLi9yb3V0ZXMvcXVlcnktaW5wdXQnO1xyXG5cclxuLy9pbXBvcnQgeyBjb29raWVQYXJzZXIgfSBmcm9tICdjb29raWUtcGFyc2VyJztcclxuY29uc3QgY29va2llUGFyc2VyID0gcmVxdWlyZSgnY29va2llLXBhcnNlcicpO1xyXG5cclxuY29uc3QgYXBwID0gRXhwcmVzcygpO1xyXG5cclxuYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSk7XHJcbmFwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IGZhbHNlfSkpO1xyXG5hcHAudXNlKGNvb2tpZVBhcnNlcigpKTtcclxuYXBwLnVzZShFeHByZXNzLnN0YXRpYyhwYXRoLmpvaW4oX19kaXJuYW1lLCAncHVibGljJykpKTtcclxuXHJcbi8v5Lul5LiL44Or44O844OG44Kj44Oz44KwXHJcbmFwcC51c2UoJy9kYXRhLWFjY2VzcycsIGRhdGFBY2Nlc3MpO1xyXG5hcHAudXNlKCcvcXVlcnktaW5wdXQnLCBxdWVyeUlucHV0KTtcclxuYXBwLmdldCgnLycsIChyZXE6IEV4cHJlc3MuUmVxdWVzdCwgcmVzOiBFeHByZXNzLlJlc3BvbnNlLCBuZXh0OiBFeHByZXNzLk5leHRGdW5jdGlvbikgPT4ge1xyXG4gICAgcmV0dXJuIHJlcy5zZW5kKCdIZWxsbyBOeWFua28uJyk7XHJcbn0pO1xyXG5cclxuYXBwLmxpc3RlbigzMDAwLCAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnTGlzdGVuIG9uIHBvcnQgMzAwMC4nKTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhcHA7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/server.ts\n");

/***/ }),

/***/ "./src/yycomp/connection-factory.ts":
/*!******************************************!*\
  !*** ./src/yycomp/connection-factory.ts ***!
  \******************************************/
/*! exports provided: ConnectionFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ConnectionFactory\", function() { return ConnectionFactory; });\n/* harmony import */ var tedious__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tedious */ \"tedious\");\n/* harmony import */ var tedious__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tedious__WEBPACK_IMPORTED_MODULE_0__);\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\nvar ConnectionFactory = (function (_super) {\r\n    __extends(ConnectionFactory, _super);\r\n    function ConnectionFactory() {\r\n        return _super !== null && _super.apply(this, arguments) || this;\r\n    }\r\n    ConnectionFactory.getConnection = function () {\r\n        return new tedious__WEBPACK_IMPORTED_MODULE_0__[\"Connection\"](this.config);\r\n    };\r\n    ConnectionFactory.config = {\r\n        userName: 'sa',\r\n        password: '',\r\n        server: 'localhost',\r\n        options: {\r\n            database: 'BoatRace',\r\n            port: 1433,\r\n            encrypt: false\r\n        }\r\n    };\r\n    return ConnectionFactory;\r\n}(tedious__WEBPACK_IMPORTED_MODULE_0__[\"Connection\"]));\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMveXljb21wL2Nvbm5lY3Rpb24tZmFjdG9yeS50cz80ZmUxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1DO0FBRW5DO0lBQXVDLHFDQUFrQjtJQUF6RDs7SUFlQSxDQUFDO0lBSGUsK0JBQWEsR0FBM0I7UUFDRSxPQUFPLElBQUksa0RBQWtCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFiYyx3QkFBTSxHQUE2QjtRQUNoRCxRQUFRLEVBQUUsSUFBSTtRQUNkLFFBQVEsRUFBRSxFQUFFO1FBQ1osTUFBTSxFQUFFLFdBQVc7UUFDbkIsT0FBTyxFQUFFO1lBQ1AsUUFBUSxFQUFFLFVBQVU7WUFDcEIsSUFBSSxFQUFFLElBQUk7WUFDVixPQUFPLEVBQUUsS0FBSztTQUNmO0tBQ0YsQ0FBQztJQUtKLHdCQUFDO0NBQUEsQ0Fmc0Msa0RBQWtCLEdBZXhEO0FBZjZCIiwiZmlsZSI6Ii4vc3JjL3l5Y29tcC9jb25uZWN0aW9uLWZhY3RvcnkudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBUZWRpb3VzIGZyb20gJ3RlZGlvdXMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbm5lY3Rpb25GYWN0b3J5IGV4dGVuZHMgVGVkaW91cy5Db25uZWN0aW9uIHtcclxuICBwcml2YXRlIHN0YXRpYyBjb25maWc6IFRlZGlvdXMuQ29ubmVjdGlvbkNvbmZpZyA9IHtcclxuICAgIHVzZXJOYW1lOiAnc2EnLCBcclxuICAgIHBhc3N3b3JkOiAnJywgXHJcbiAgICBzZXJ2ZXI6ICdsb2NhbGhvc3QnLCBcclxuICAgIG9wdGlvbnM6IHtcclxuICAgICAgZGF0YWJhc2U6ICdCb2F0UmFjZScsIFxyXG4gICAgICBwb3J0OiAxNDMzLCBcclxuICAgICAgZW5jcnlwdDogZmFsc2VcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldENvbm5lY3Rpb24oKTogVGVkaW91cy5Db25uZWN0aW9uIHtcclxuICAgIHJldHVybiBuZXcgVGVkaW91cy5Db25uZWN0aW9uKHRoaXMuY29uZmlnKTtcclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/yycomp/connection-factory.ts\n");

/***/ }),

/***/ "./src/yycomp/declarations.ts":
/*!************************************!*\
  !*** ./src/yycomp/declarations.ts ***!
  \************************************/
/*! exports provided: ResultData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ResultData\", function() { return ResultData; });\nvar ResultData = (function () {\r\n    function ResultData() {\r\n        this.queryName = \"\";\r\n        this.records = [];\r\n    }\r\n    return ResultData;\r\n}());\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMveXljb21wL2RlY2xhcmF0aW9ucy50cz9jY2ZkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVlBO0FBQUE7QUFBQTtJQUlFO1FBQ0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUNILGlCQUFDO0FBQUQsQ0FBQyIsImZpbGUiOiIuL3NyYy95eWNvbXAvZGVjbGFyYXRpb25zLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy/opoHmsYLjgq/jgqjjg6pcclxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0ZWRRdWVyeSB7XHJcbiAgcXVlcnlOYW1lOiBzdHJpbmc7XHJcbiAgc291cmNlOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8v6KaB5rGC44OH44O844K/XHJcbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdGVkRGF0YSB7XHJcbiAgcmVxdWVzdHM6IFJlcXVlc3RlZFF1ZXJ5W107XHJcbn1cclxuXHJcbi8v57WQ5p6c44OH44O844K/XHJcbmV4cG9ydCBjbGFzcyBSZXN1bHREYXRhIHtcclxuICBxdWVyeU5hbWU6IHN0cmluZztcclxuICByZWNvcmRzOiBhbnlbXTtcclxuXHJcbiAgY29uc3RydWN0b3IoKXtcclxuICAgIHRoaXMucXVlcnlOYW1lID0gXCJcIjtcclxuICAgIHRoaXMucmVjb3JkcyA9IFtdO1xyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/yycomp/declarations.ts\n");

/***/ }),

/***/ "./src/yycomp/request-receiver.ts":
/*!****************************************!*\
  !*** ./src/yycomp/request-receiver.ts ***!
  \****************************************/
/*! exports provided: RequestReceiver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RequestReceiver\", function() { return RequestReceiver; });\n/* harmony import */ var _connection_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./connection-factory */ \"./src/yycomp/connection-factory.ts\");\n/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./request */ \"./src/yycomp/request.ts\");\n\r\n\r\nvar RequestReceiver = (function () {\r\n    function RequestReceiver(receivedData, res) {\r\n        var _this = this;\r\n        this.receivedData = receivedData;\r\n        this.requestedData = JSON.parse(receivedData);\r\n        console.log(JSON.stringify(this.requestedData));\r\n        this.conn = _connection_factory__WEBPACK_IMPORTED_MODULE_0__[\"ConnectionFactory\"].getConnection();\r\n        this.requests = [];\r\n        this.currentExecute = 0;\r\n        this.resultDatas = [];\r\n        this.requestedData.requests.forEach(function (requestedQuery) {\r\n            var request = new _request__WEBPACK_IMPORTED_MODULE_1__[\"RequestManager\"](requestedQuery.queryName, requestedQuery.source);\r\n            request.prepare(function (resultData) {\r\n                _this.resultDatas.push(resultData);\r\n                if (++_this.currentExecute in _this.requests) {\r\n                    _this.conn.execSql(_this.requests[_this.currentExecute].request);\r\n                }\r\n                else {\r\n                    res.json(_this.resultDatas);\r\n                }\r\n            });\r\n            _this.requests.push(request);\r\n        });\r\n    }\r\n    RequestReceiver.prototype.execute = function () {\r\n        var _this = this;\r\n        this.conn.on('connect', function (error) {\r\n            if (error) {\r\n                console.log(error);\r\n            }\r\n            _this.conn.execSql(_this.requests[0].request);\r\n        });\r\n    };\r\n    return RequestReceiver;\r\n}());\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMveXljb21wL3JlcXVlc3QtcmVjZWl2ZXIudHM/Mzk4ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtBQUFBO0FBQUE7QUFBQTtBQUF5RDtBQUNkO0FBRzNDO0lBV0UseUJBQW9CLFlBQWlCLEVBQUUsR0FBcUI7UUFBNUQsaUJBK0JDO1FBL0JtQixpQkFBWSxHQUFaLFlBQVksQ0FBSztRQUVuQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDOUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBR2hELElBQUksQ0FBQyxJQUFJLEdBQUcscUVBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7UUFHOUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFFbkIsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7UUFFeEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFHdEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsY0FBOEI7WUFDakUsSUFBTSxPQUFPLEdBQUcsSUFBSSx1REFBYyxDQUFDLGNBQWMsQ0FBQyxTQUFTLEVBQUUsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRXBGLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQyxVQUFzQjtnQkFDckMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBRWxDLElBQUcsRUFBRSxLQUFJLENBQUMsY0FBYyxJQUFJLEtBQUksQ0FBQyxRQUFRLEVBQUU7b0JBQ3pDLEtBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUMvRDtxQkFBTTtvQkFDTCxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztpQkFDNUI7WUFDSCxDQUFDLENBQUMsQ0FBQztZQUVILEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUdNLGlDQUFPLEdBQWQ7UUFBQSxpQkFTQztRQVBDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxVQUFDLEtBQXNCO1lBQzdDLElBQUcsS0FBSyxFQUFDO2dCQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDcEI7WUFFRCxLQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FBQyIsImZpbGUiOiIuL3NyYy95eWNvbXAvcmVxdWVzdC1yZWNlaXZlci50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlcXVlc3RlZERhdGEsIFJlcXVlc3RlZFF1ZXJ5LCBSZXN1bHREYXRhIH0gZnJvbSAnLi9kZWNsYXJhdGlvbnMnO1xyXG5pbXBvcnQgeyBDb25uZWN0aW9uRXJyb3IgfSBmcm9tICd0ZWRpb3VzJztcclxuaW1wb3J0IHsgQ29ubmVjdGlvbkZhY3RvcnkgfSBmcm9tICcuL2Nvbm5lY3Rpb24tZmFjdG9yeSc7IFxyXG5pbXBvcnQgeyBSZXF1ZXN0TWFuYWdlciB9IGZyb20gJy4vcmVxdWVzdCc7XHJcbmltcG9ydCAqIGFzIEV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgUmVxdWVzdFJlY2VpdmVyIHtcclxuICAvL+ODleOCo+ODvOODq+ODiVxyXG4gIC8v6KaB5rGC44OH44O844K/XHJcbiAgcHJpdmF0ZSByZXF1ZXN0ZWREYXRhOiBSZXF1ZXN0ZWREYXRhO1xyXG4gIHByaXZhdGUgY29ubjogQ29ubmVjdGlvbkZhY3Rvcnk7XHJcbiAgcHJpdmF0ZSByZXF1ZXN0czogUmVxdWVzdE1hbmFnZXJbXTtcclxuICBwcml2YXRlIGN1cnJlbnRFeGVjdXRlOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSByZXN1bHREYXRhczogUmVzdWx0RGF0YVtdO1xyXG4gIFxyXG4gIC8v44Kz44Oz44K544OI44Op44Kv44K/44CAXHJcbiAgLy9yZWNlaXZlZERhdGE6IOODleODreODs+ODiOOBi+OCieODneOCueODiOmAgeS/oeOBleOCjOOAgeOBneOCjOOCkuWPl+S/oeOBl+OBn+ODh+ODvOOCv1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVjZWl2ZWREYXRhOiBhbnksIHJlczogRXhwcmVzcy5SZXNwb25zZSl7XHJcbiAgICAvL+WPl+S/oeODh+ODvOOCv+OCkuODkeODvOOCueOBl+OAgeimgeaxguODh+ODvOOCv+OBqOOBl+OBpuWPl+OBkeWPluOCi+OAgijkvovlpJblh6bnkIbjgpLntYTjgb/ovrzjgoDkuojlrprjgIIpXHJcbiAgICB0aGlzLnJlcXVlc3RlZERhdGEgPSBKU09OLnBhcnNlKHJlY2VpdmVkRGF0YSk7XHJcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLnJlcXVlc3RlZERhdGEpKTtcclxuXHJcbiAgICAvL+ODh+ODvOOCv+ODmeODvOOCueOBqOaOpee2muOBmeOCi+OAglxyXG4gICAgdGhpcy5jb25uID0gQ29ubmVjdGlvbkZhY3RvcnkuZ2V0Q29ubmVjdGlvbigpO1xyXG5cclxuICAgIC8v44Oq44Kv44Ko44K544OI6YWN5YiX44KS5Yid5pyf5YyW44GZ44KL44CCXHJcbiAgICB0aGlzLnJlcXVlc3RzID0gW107XHJcblxyXG4gICAgdGhpcy5jdXJyZW50RXhlY3V0ZSA9IDA7XHJcblxyXG4gICAgdGhpcy5yZXN1bHREYXRhcyA9IFtdO1xyXG5cclxuICAgIC8v6KaB5rGC44OH44O844K/5Lit44Gu6KaB5rGCU1FM44KS5beh5Zue44GX44CBVGVkaW91c+OBrlJlcXVlc3Tjgq/jg6njgrnjga7jgqTjg7Pjgrnjgr/jg7PjgrnjgpLnlJ/miJDjgZnjgovjgIJcclxuICAgIHRoaXMucmVxdWVzdGVkRGF0YS5yZXF1ZXN0cy5mb3JFYWNoKChyZXF1ZXN0ZWRRdWVyeTogUmVxdWVzdGVkUXVlcnkpID0+IHtcclxuICAgICAgY29uc3QgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0TWFuYWdlcihyZXF1ZXN0ZWRRdWVyeS5xdWVyeU5hbWUsIHJlcXVlc3RlZFF1ZXJ5LnNvdXJjZSk7XHJcbiAgICAgIFxyXG4gICAgICByZXF1ZXN0LnByZXBhcmUoKHJlc3VsdERhdGE6IFJlc3VsdERhdGEpID0+IHtcclxuICAgICAgICB0aGlzLnJlc3VsdERhdGFzLnB1c2gocmVzdWx0RGF0YSk7XHJcblxyXG4gICAgICAgIGlmKCsrdGhpcy5jdXJyZW50RXhlY3V0ZSBpbiB0aGlzLnJlcXVlc3RzKSB7XHJcbiAgICAgICAgICB0aGlzLmNvbm4uZXhlY1NxbCh0aGlzLnJlcXVlc3RzW3RoaXMuY3VycmVudEV4ZWN1dGVdLnJlcXVlc3QpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXMuanNvbih0aGlzLnJlc3VsdERhdGFzKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy5yZXF1ZXN0cy5wdXNoKHJlcXVlc3QpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIFxyXG4gIC8v5a6f6KGM5Yem55CGXHJcbiAgcHVibGljIGV4ZWN1dGUoKTp2b2lkIHtcclxuICAgIC8v5pyA5Yid44Gu5Y+W5b6X5Yem55CG44KS5a6f6KGM44GZ44KL44CCXHJcbiAgICB0aGlzLmNvbm4ub24oJ2Nvbm5lY3QnLCAoZXJyb3I6IENvbm5lY3Rpb25FcnJvcikgPT4ge1xyXG4gICAgICBpZihlcnJvcil7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmNvbm4uZXhlY1NxbCh0aGlzLnJlcXVlc3RzWzBdLnJlcXVlc3QpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/yycomp/request-receiver.ts\n");

/***/ }),

/***/ "./src/yycomp/request.ts":
/*!*******************************!*\
  !*** ./src/yycomp/request.ts ***!
  \*******************************/
/*! exports provided: RequestState, RequestManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RequestState\", function() { return RequestState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RequestManager\", function() { return RequestManager; });\n/* harmony import */ var tedious__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tedious */ \"tedious\");\n/* harmony import */ var tedious__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tedious__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _declarations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./declarations */ \"./src/yycomp/declarations.ts\");\n\r\n\r\nvar RequestState;\r\n(function (RequestState) {\r\n    RequestState[RequestState[\"BEFORE_EXECUTE\"] = 0] = \"BEFORE_EXECUTE\";\r\n    RequestState[RequestState[\"COMPLETED\"] = 1] = \"COMPLETED\";\r\n    RequestState[RequestState[\"ERROR\"] = 2] = \"ERROR\";\r\n})(RequestState || (RequestState = {}));\r\nvar RequestManager = (function () {\r\n    function RequestManager(_queryName, source) {\r\n        var _this = this;\r\n        this._queryName = _queryName;\r\n        this.source = source;\r\n        this._request = new tedious__WEBPACK_IMPORTED_MODULE_0__[\"Request\"](this.source, function (error, rowCount) {\r\n            if (error) {\r\n                console.log(\"RequestError:\" + error);\r\n                _this.state = RequestState.ERROR;\r\n            }\r\n        });\r\n        this.state = RequestState.BEFORE_EXECUTE;\r\n        this.records = [];\r\n    }\r\n    RequestManager.prototype.prepare = function (callback) {\r\n        var _this = this;\r\n        this._request.on('row', function (columns) {\r\n            var row = {};\r\n            console.log('rowイベントにはいった。');\r\n            columns.forEach(function (column) {\r\n                row[column.metadata.colName] = column.value;\r\n            });\r\n            _this.records.push(row);\r\n        });\r\n        this._request.on('requestCompleted', function () {\r\n            _this.state = RequestState.COMPLETED;\r\n            var resultData = new _declarations__WEBPACK_IMPORTED_MODULE_1__[\"ResultData\"]();\r\n            resultData.queryName = _this.queryName;\r\n            resultData.records = _this.records;\r\n            console.log(\"oncompleted:\" + JSON.stringify(resultData));\r\n            callback(resultData);\r\n        });\r\n    };\r\n    Object.defineProperty(RequestManager.prototype, \"request\", {\r\n        get: function () {\r\n            return this._request;\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(RequestManager.prototype, \"queryName\", {\r\n        get: function () {\r\n            return this._queryName;\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    return RequestManager;\r\n}());\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMveXljb21wL3JlcXVlc3QudHM/MDExZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkQ7QUFDakI7QUFHNUMsSUFBWSxZQUlYO0FBSkQsV0FBWSxZQUFZO0lBQ3RCLG1FQUFjO0lBQ2QseURBQVM7SUFDVCxpREFBSztBQUNQLENBQUMsRUFKVyxZQUFZLEtBQVosWUFBWSxRQUl2QjtBQUVEO0lBS0Usd0JBQW9CLFVBQWtCLEVBQVUsTUFBYztRQUE5RCxpQkFjQztRQWRtQixlQUFVLEdBQVYsVUFBVSxDQUFRO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUU1RCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksK0NBQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFVBQUMsS0FBbUIsRUFBRSxRQUFnQjtZQUM3RSxJQUFHLEtBQUssRUFBQztnQkFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFnQixLQUFPLENBQUMsQ0FBQztnQkFFckMsS0FBSSxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDO2FBRWpDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFHSCxJQUFJLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQyxjQUFjLENBQUM7UUFDekMsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVNLGdDQUFPLEdBQWQsVUFBZSxRQUEwQztRQUF6RCxpQkFxQkM7UUFuQkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLFVBQUMsT0FBc0I7WUFDN0MsSUFBSSxHQUFHLEdBQVEsRUFBRSxDQUFDO1lBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDN0IsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFDLE1BQU07Z0JBQ3JCLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDOUMsQ0FBQyxDQUFDLENBQUM7WUFDSCxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLGtCQUFrQixFQUFFO1lBQ25DLEtBQUksQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDLFNBQVMsQ0FBQztZQUVwQyxJQUFNLFVBQVUsR0FBRyxJQUFJLHdEQUFVLEVBQUUsQ0FBQztZQUNwQyxVQUFVLENBQUMsU0FBUyxHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUM7WUFDdEMsVUFBVSxDQUFDLE9BQU8sR0FBRyxLQUFJLENBQUMsT0FBTyxDQUFDO1lBRWxDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUcsQ0FBQyxDQUFDO1lBQ3pELFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFHRCxzQkFBSSxtQ0FBTzthQUFYO1lBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3ZCLENBQUM7OztPQUFBO0lBR0Qsc0JBQUkscUNBQVM7YUFBYjtZQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUN6QixDQUFDOzs7T0FBQTtJQUNILHFCQUFDO0FBQUQsQ0FBQyIsImZpbGUiOiIuL3NyYy95eWNvbXAvcmVxdWVzdC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlcXVlc3QsIFJlcXVlc3RFcnJvciwgQ29sdW1uVmFsdWUgfSBmcm9tICd0ZWRpb3VzJztcclxuaW1wb3J0IHsgUmVzdWx0RGF0YSB9IGZyb20gJy4vZGVjbGFyYXRpb25zJztcclxuXHJcbi8v44Oq44Kv44Ko44K544OI44Gu54q25oWL44KS56S644GZ5YiX5oyZ5L2TXHJcbmV4cG9ydCBlbnVtIFJlcXVlc3RTdGF0ZSB7XHJcbiAgQkVGT1JFX0VYRUNVVEUsIFxyXG4gIENPTVBMRVRFRCwgXHJcbiAgRVJST1JcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFJlcXVlc3RNYW5hZ2VyIHtcclxuICBwcml2YXRlIHJlY29yZHM6IGFueVtdO1xyXG4gIHByaXZhdGUgc3RhdGU6IFJlcXVlc3RTdGF0ZTtcclxuICBwcml2YXRlIF9yZXF1ZXN0OiBSZXF1ZXN0O1xyXG4gIFxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3F1ZXJ5TmFtZTogc3RyaW5nLCBwcml2YXRlIHNvdXJjZTogc3RyaW5nKXtcclxuICAgIC8vUmVxdWVzdOOCquODluOCuOOCp+OCr+ODiOOCkueUn+aIkOOBmeOCi+OAglxyXG4gICAgdGhpcy5fcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KHRoaXMuc291cmNlLCAoZXJyb3I6IFJlcXVlc3RFcnJvciwgcm93Q291bnQ6IG51bWJlcikgPT4ge1xyXG4gICAgICBpZihlcnJvcil7XHJcbiAgICAgICAgY29uc29sZS5sb2coYFJlcXVlc3RFcnJvcjoke2Vycm9yfWApO1xyXG4gICAgICAgIC8v54q25oWL44KS6Kit5a6a44GZ44KL44CCXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IFJlcXVlc3RTdGF0ZS5FUlJPUjtcclxuICAgICAgICAvL+S+i+WkluOCkueZuueUn+OBleOBm+OCi+S6iOWumuOAglxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgLy/lkITjgIXjga7jg5XjgqPjg7zjg6vjg4njgpLliJ3mnJ/ljJbjgZnjgovjgIJcclxuICAgIHRoaXMuc3RhdGUgPSBSZXF1ZXN0U3RhdGUuQkVGT1JFX0VYRUNVVEU7XHJcbiAgICB0aGlzLnJlY29yZHMgPSBbXTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBwcmVwYXJlKGNhbGxiYWNrOiAocmVzdWx0RGF0YTogUmVzdWx0RGF0YSkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgLy/jgqTjg5njg7Pjg4jjgpLoqK3lrprjgIJcclxuICAgIHRoaXMuX3JlcXVlc3Qub24oJ3JvdycsIChjb2x1bW5zOiBDb2x1bW5WYWx1ZVtdKSA9PiB7XHJcbiAgICAgIGxldCByb3c6IGFueSA9IHt9O1xyXG4gICAgICBjb25zb2xlLmxvZygncm9344Kk44OZ44Oz44OI44Gr44Gv44GE44Gj44Gf44CCJyk7XHJcbiAgICAgIGNvbHVtbnMuZm9yRWFjaCgoY29sdW1uKSA9PiB7XHJcbiAgICAgICAgcm93W2NvbHVtbi5tZXRhZGF0YS5jb2xOYW1lXSA9IGNvbHVtbi52YWx1ZTtcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMucmVjb3Jkcy5wdXNoKHJvdyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLl9yZXF1ZXN0Lm9uKCdyZXF1ZXN0Q29tcGxldGVkJywgKCkgPT4ge1xyXG4gICAgICB0aGlzLnN0YXRlID0gUmVxdWVzdFN0YXRlLkNPTVBMRVRFRDtcclxuICAgICAgLy/jgrPjg7zjg6vjg5Djg4Pjgq/jgpLlrp/ooYzjgZnjgovjgIIo5Y+W5b6X44GX44Gf44Os44Kz44O844OJ44KS5rih44GZ44CCKVxyXG4gICAgICBjb25zdCByZXN1bHREYXRhID0gbmV3IFJlc3VsdERhdGEoKTtcclxuICAgICAgcmVzdWx0RGF0YS5xdWVyeU5hbWUgPSB0aGlzLnF1ZXJ5TmFtZTtcclxuICAgICAgcmVzdWx0RGF0YS5yZWNvcmRzID0gdGhpcy5yZWNvcmRzO1xyXG5cclxuICAgICAgY29uc29sZS5sb2coYG9uY29tcGxldGVkOiR7SlNPTi5zdHJpbmdpZnkocmVzdWx0RGF0YSl9YCk7XHJcbiAgICAgIGNhbGxiYWNrKHJlc3VsdERhdGEpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvL+ODquOCr+OCqOOCueODiOOCquODluOCuOOCp+OCr+ODiOOCkui/lOOBmeOAglxyXG4gIGdldCByZXF1ZXN0KCk6IFJlcXVlc3Qge1xyXG4gICAgcmV0dXJuIHRoaXMuX3JlcXVlc3Q7XHJcbiAgfVxyXG5cclxuICAvL+OCr+OCqOODquWQjeOCsuODg+OCv+ODvFxyXG4gIGdldCBxdWVyeU5hbWUoKTpzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX3F1ZXJ5TmFtZTtcclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/yycomp/request.ts\n");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiPzgxODgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYm9keS1wYXJzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJib2R5LXBhcnNlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///body-parser\n");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie-parser\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb29raWUtcGFyc2VyXCI/MjFkYyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJjb29raWUtcGFyc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29va2llLXBhcnNlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///cookie-parser\n");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCI/MjJmZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJleHByZXNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///express\n");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCI/NzRiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwYXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///path\n");

/***/ }),

/***/ "tedious":
/*!**************************!*\
  !*** external "tedious" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"tedious\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0ZWRpb3VzXCI/Yjg2YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJ0ZWRpb3VzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidGVkaW91c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///tedious\n");

/***/ })

/******/ });