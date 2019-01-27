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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _yycomp_request_receiver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../yycomp/request-receiver */ \"./src/yycomp/request-receiver.ts\");\n\r\n\r\nvar router = express__WEBPACK_IMPORTED_MODULE_0__[\"Router\"]();\r\nvar dummyRequestData = {\r\n    requests: [\r\n        {\r\n            queryName: \"M_ボートレーサー\",\r\n            source: \"SELECT * FROM BoatRace.dbo.M_ボートレーサー\"\r\n        },\r\n        {\r\n            queryName: \"M_ボートレース場\",\r\n            source: \"SELECT * FROM BoatRace.dbo.M_ボートレース場\"\r\n        }\r\n    ]\r\n};\r\nrouter.get('/', function (req, res, next) {\r\n    var requestReceiver = new _yycomp_request_receiver__WEBPACK_IMPORTED_MODULE_1__[\"RequestReceiver\"](JSON.stringify(dummyRequestData), res);\r\n    requestReceiver.execute();\r\n});\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL2RhdGEtYWNjZXNzLnRzP2VlOTkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbUM7QUFJMEI7QUFFN0QsSUFBTSxNQUFNLEdBQUcsOENBQWMsRUFBRSxDQUFDO0FBd0JoQyxJQUFNLGdCQUFnQixHQUFrQjtJQUN0QyxRQUFRLEVBQUU7UUFDUjtZQUNFLFNBQVMsRUFBRSxXQUFXO1lBQ3RCLE1BQU0sRUFBRSxzQ0FBc0M7U0FDL0M7UUFDRDtZQUNFLFNBQVMsRUFBRSxXQUFXO1lBQ3RCLE1BQU0sRUFBRSxzQ0FBc0M7U0FDL0M7S0FDRjtDQUNGLENBQUM7QUFFRixNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxVQUFDLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxJQUEwQjtJQUN0RixJQUFNLGVBQWUsR0FBRyxJQUFJLHdFQUFlLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBRW5GLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQTRFNUIsQ0FBQyxDQUFDLENBQUM7QUFFWSxxRUFBTSxFQUFDIiwiZmlsZSI6Ii4vc3JjL3JvdXRlcy9kYXRhLWFjY2Vzcy50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIEV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCAqIGFzIFRlZGlvdXMgZnJvbSAndGVkaW91cyc7XHJcbmltcG9ydCB7IENvbm5lY3Rpb25GYWN0b3J5IH0gZnJvbSAnLi4veXljb21wL2Nvbm5lY3Rpb24tZmFjdG9yeSc7XHJcbmltcG9ydCB7IFJlcXVlc3RlZERhdGEgfSBmcm9tICcuLi95eWNvbXAvZGVjbGFyYXRpb25zJztcclxuaW1wb3J0IHsgUmVxdWVzdFJlY2VpdmVyIH0gZnJvbSAnLi4veXljb21wL3JlcXVlc3QtcmVjZWl2ZXInO1xyXG5cclxuY29uc3Qgcm91dGVyID0gRXhwcmVzcy5Sb3V0ZXIoKTtcclxuXHJcblxyXG4vKlxyXG5pbnRlcmZhY2UgU1FMUmVxdWVzdHtcclxuICBxdWVyeU5hbWU6IHN0cmluZztcclxuICBzb3VyY2U6IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIFJlcXVlc3REYXRhIHtcclxuICByZXF1ZXN0czogU1FMUmVxdWVzdFtdO1xyXG59XHJcblxyXG5jbGFzcyBSZXN1bHREYXRhIHtcclxuICBxdWVyeU5hbWU6IHN0cmluZztcclxuICByZWNvcmRzOiBhbnlbXTtcclxuXHJcbiAgY29uc3RydWN0b3IoKXtcclxuICAgIHRoaXMucXVlcnlOYW1lID0gXCJcIjtcclxuICAgIHRoaXMucmVjb3JkcyA9IFtdO1xyXG4gIH1cclxufVxyXG4qL1xyXG5cclxuY29uc3QgZHVtbXlSZXF1ZXN0RGF0YTogUmVxdWVzdGVkRGF0YSA9IHtcclxuICByZXF1ZXN0czogW1xyXG4gICAge1xyXG4gICAgICBxdWVyeU5hbWU6IFwiTV/jg5zjg7zjg4jjg6zjg7zjgrXjg7xcIiwgXHJcbiAgICAgIHNvdXJjZTogXCJTRUxFQ1QgKiBGUk9NIEJvYXRSYWNlLmRiby5NX+ODnOODvOODiOODrOODvOOCteODvFwiXHJcbiAgICB9LCBcclxuICAgIHtcclxuICAgICAgcXVlcnlOYW1lOiBcIk1f44Oc44O844OI44Os44O844K55aC0XCIsIFxyXG4gICAgICBzb3VyY2U6IFwiU0VMRUNUICogRlJPTSBCb2F0UmFjZS5kYm8uTV/jg5zjg7zjg4jjg6zjg7zjgrnloLRcIlxyXG4gICAgfVxyXG4gIF1cclxufTtcclxuXHJcbnJvdXRlci5nZXQoJy8nLCAocmVxOiBFeHByZXNzLlJlcXVlc3QsIHJlczogRXhwcmVzcy5SZXNwb25zZSwgbmV4dDogRXhwcmVzcy5OZXh0RnVuY3Rpb24pID0+IHtcclxuICBjb25zdCByZXF1ZXN0UmVjZWl2ZXIgPSBuZXcgUmVxdWVzdFJlY2VpdmVyKEpTT04uc3RyaW5naWZ5KGR1bW15UmVxdWVzdERhdGEpLCByZXMpO1xyXG4gIC8v5Yem55CG44KS5a6f6KGM44GZ44KL44CCXHJcbiAgcmVxdWVzdFJlY2VpdmVyLmV4ZWN1dGUoKTtcclxuXHJcbiAgXHJcblxyXG4gIC8qXHJcbiAgLy/jg4Djg5/jg7zjga7jg6rjgq/jgqjjgrnjg4jjg4fjg7zjgr/jgpLnlJ/miJDjgIJcclxuICBjb25zdCBkdW1teVJlcXVlc3QgPSBKU09OLnN0cmluZ2lmeShkdW1teVJlcXVlc3REYXRhKTtcclxuICBjb25zdCBkcmVxczogUmVxdWVzdERhdGEgPSBKU09OLnBhcnNlKGR1bW15UmVxdWVzdCk7XHJcbiAgY29uc3QgY29ubjogVGVkaW91cy5Db25uZWN0aW9uID0gQ29ubmVjdGlvbkZhY3RvcnkuZ2V0Q29ubmVjdGlvbigpO1xyXG4gIGNvbnN0IHJlcUNvdW50ID0gZHJlcXMucmVxdWVzdHMubGVuZ3RoO1xyXG4gIGxldCBjdXJyZW50OiBudW1iZXIgPSAwO1xyXG4gIGxldCByZXF1ZXN0czogVGVkaW91cy5SZXF1ZXN0W10gPSBbXTtcclxuICBsZXQgcmVzdWx0czogUmVzdWx0RGF0YVtdID0gW107XHJcbiAgbGV0IHJlc3VsdDogUmVzdWx0RGF0YTtcclxuICBsZXQgY29tcGxldGVkQ291bnQ6IG51bWJlciA9IDA7XHJcblxyXG4gIGNvbm4ub24oJ2Nvbm5lY3QnLCAoZXJyOiBUZWRpb3VzLkNvbm5lY3Rpb25FcnJvcikgPT4ge1xyXG4gICAgaWYoZXJyKXtcclxuICAgICAgcmVzLnNlbmQoZXJyLm1lc3NhZ2UpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBleGVjdXRlU3RhdGVtZW50KCk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHRyeVNlbmQgPSAoKSA9PiB7XHJcbiAgICBpZihjb21wbGV0ZWRDb3VudD09PXJlcUNvdW50KXtcclxuICAgICAgcmVzLmpzb24ocmVzdWx0cyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZXhlY3V0ZVN0YXRlbWVudCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHNxbFJlcXVlc3RzOiBTUUxSZXF1ZXN0W10gPSBkcmVxcy5yZXF1ZXN0cztcclxuICAgIGxldCByZWNvcmRzOiBhbnlbXSA9IFtdO1xyXG5cclxuICAgIHNxbFJlcXVlc3RzLmZvckVhY2goKHNxbFJlcXVlc3QpID0+IHtcclxuICAgICAgbGV0IHJvdzogYW55ID0ge307XHJcbiAgICAgIGNvbnNvbGUubG9nKCfjg6rjgq/jgqjjgrnjg4jnlJ/miJAnKTtcclxuICAgICAgY29uc3QgcmVxdWVzdCA9IG5ldyBUZWRpb3VzLlJlcXVlc3Qoc3FsUmVxdWVzdC5zb3VyY2UsIChlcnJvcjogVGVkaW91cy5SZXF1ZXN0RXJyb3IpID0+IHtcclxuICAgICAgICBjb21wbGV0ZWRDb3VudCsrO1xyXG5cclxuICAgICAgICBpZihlcnJvcil7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIuOCqOODqeODvOWGheWuuTpcIiArIGVycm9yKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc29sZS5sb2coJ+ihjOOCpOODmeODs+ODiOeUn+aIkCcpO1xyXG4gICAgICByZXF1ZXN0Lm9uKCdyb3cnLCAoY29sdW1uczogVGVkaW91cy5Db2x1bW5WYWx1ZVtdKSA9PiB7XHJcbiAgICAgICAgY29sdW1ucy5mb3JFYWNoKChjb2x1bW46IFRlZGlvdXMuQ29sdW1uVmFsdWUpID0+IHtcclxuICAgICAgICAgIHJvd1tjb2x1bW4ubWV0YWRhdGEuY29sTmFtZV0gPSBjb2x1bW4udmFsdWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coYOihjOOBruWGheWuuToke0pTT04uc3RyaW5naWZ5KHJvdyl9YCk7XHJcbiAgICAgICAgcmVjb3Jkcy5wdXNoKHJvdyk7XHJcblxyXG4gICAgICAgIHJvdyA9IHt9O1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHJlcXVlc3Qub24oJ3JlcXVlc3RDb21wbGV0ZWQnLCAoKSA9PiB7XHJcbiAgICAgICAgaWYoKytjdXJyZW50IGluIHNxbFJlcXVlc3RzKXtcclxuICAgICAgICAgIGNvbm4uZXhlY1NxbChyZXF1ZXN0c1tjdXJyZW50XSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlc3VsdCA9IG5ldyBSZXN1bHREYXRhKCk7XHJcbiAgICAgICAgcmVzdWx0LnF1ZXJ5TmFtZSA9IHNxbFJlcXVlc3QucXVlcnlOYW1lO1xyXG4gICAgICAgIHJlc3VsdC5yZWNvcmRzID0gcmVjb3JkcztcclxuICAgICAgICByZXN1bHRzLnB1c2gocmVzdWx0KTtcclxuICAgICAgICByZWNvcmRzID0gW107XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ0cnlTZW5k5YmNOlwiICsgc3FsUmVxdWVzdC5zb3VyY2UgKyBcIiwgcmVjb3JzOlwiICsgSlNPTi5zdHJpbmdpZnkocmVjb3JkcykpO1xyXG4gICAgICAgIHRyeVNlbmQoKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICByZXF1ZXN0cy5wdXNoKHJlcXVlc3QpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29ubi5leGVjU3FsKHJlcXVlc3RzWzBdKTtcclxuICB9O1xyXG4qL1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/routes/data-access.ts\n");

/***/ }),

/***/ "./src/server.ts":
/*!***********************!*\
  !*** ./src/server.ts ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _routes_data_access__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes/data-access */ \"./src/routes/data-access.ts\");\n\r\n\r\n\r\n\r\nvar cookieParser = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\r\nvar app = express__WEBPACK_IMPORTED_MODULE_0__();\r\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_1__[\"json\"]());\r\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_1__[\"urlencoded\"]({ extended: false }));\r\napp.use(cookieParser());\r\napp.use(express__WEBPACK_IMPORTED_MODULE_0__[\"static\"](path__WEBPACK_IMPORTED_MODULE_2__[\"join\"](__dirname, 'public')));\r\napp.use('/data-access', _routes_data_access__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\r\napp.get('/', function (req, res, next) {\r\n    return res.send('Hello Nyanko.');\r\n});\r\napp.listen(3000, function () {\r\n    console.log('Listen on port 3000.');\r\n});\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (app);\r\n\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyLnRzPzk2YmIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFtQztBQUdPO0FBQ2I7QUFDaUI7QUFHOUMsSUFBTSxZQUFZLEdBQUcsbUJBQU8sQ0FBQyxvQ0FBZSxDQUFDLENBQUM7QUFFOUMsSUFBTSxHQUFHLEdBQUcsb0NBQU8sRUFBRSxDQUFDO0FBRXRCLEdBQUcsQ0FBQyxHQUFHLENBQUMsZ0RBQWUsRUFBRSxDQUFDLENBQUM7QUFDM0IsR0FBRyxDQUFDLEdBQUcsQ0FBQyxzREFBcUIsQ0FBQyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbkQsR0FBRyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO0FBQ3hCLEdBQUcsQ0FBQyxHQUFHLENBQUMsOENBQWMsQ0FBQyx5Q0FBUyxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFFeEQsR0FBRyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsMkRBQVUsQ0FBQyxDQUFDO0FBRXBDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFVBQUMsR0FBb0IsRUFBRSxHQUFxQixFQUFFLElBQTBCO0lBQ2pGLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUNyQyxDQUFDLENBQUMsQ0FBQztBQUVILEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO0lBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBQ3hDLENBQUMsQ0FBQyxDQUFDO0FBRVksa0VBQUcsRUFBQyIsImZpbGUiOiIuL3NyYy9zZXJ2ZXIudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBFeHByZXNzIGZyb20gJ2V4cHJlc3MnO1xyXG4vL2NvbnN0IGJvZHlQYXJzZXIgPSByZXF1aXJlKCdib2R5LXBhcnNlcicpO1xyXG4vL2NvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XHJcbmltcG9ydCAqIGFzIGJvZHlQYXJzZXIgZnJvbSAnYm9keS1wYXJzZXInO1xyXG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xyXG5pbXBvcnQgZGF0YUFjY2VzcyBmcm9tICcuL3JvdXRlcy9kYXRhLWFjY2Vzcyc7XHJcblxyXG4vL2ltcG9ydCB7IGNvb2tpZVBhcnNlciB9IGZyb20gJ2Nvb2tpZS1wYXJzZXInO1xyXG5jb25zdCBjb29raWVQYXJzZXIgPSByZXF1aXJlKCdjb29raWUtcGFyc2VyJyk7XHJcblxyXG5jb25zdCBhcHAgPSBFeHByZXNzKCk7XHJcblxyXG5hcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKTtcclxuYXBwLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoeyBleHRlbmRlZDogZmFsc2V9KSk7XHJcbmFwcC51c2UoY29va2llUGFyc2VyKCkpO1xyXG5hcHAudXNlKEV4cHJlc3Muc3RhdGljKHBhdGguam9pbihfX2Rpcm5hbWUsICdwdWJsaWMnKSkpO1xyXG5cclxuYXBwLnVzZSgnL2RhdGEtYWNjZXNzJywgZGF0YUFjY2Vzcyk7XHJcblxyXG5hcHAuZ2V0KCcvJywgKHJlcTogRXhwcmVzcy5SZXF1ZXN0LCByZXM6IEV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IEV4cHJlc3MuTmV4dEZ1bmN0aW9uKSA9PiB7XHJcbiAgICByZXR1cm4gcmVzLnNlbmQoJ0hlbGxvIE55YW5rby4nKTtcclxufSk7XHJcblxyXG5hcHAubGlzdGVuKDMwMDAsICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdMaXN0ZW4gb24gcG9ydCAzMDAwLicpO1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFwcDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/server.ts\n");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RequestReceiver\", function() { return RequestReceiver; });\n/* harmony import */ var _connection_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./connection-factory */ \"./src/yycomp/connection-factory.ts\");\n/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./request */ \"./src/yycomp/request.ts\");\n\r\n\r\nvar RequestReceiver = (function () {\r\n    function RequestReceiver(receivedData, res) {\r\n        var _this = this;\r\n        this.receivedData = receivedData;\r\n        this.requestedData = JSON.parse(receivedData);\r\n        console.log(JSON.stringify(this.requestedData));\r\n        this.conn = _connection_factory__WEBPACK_IMPORTED_MODULE_0__[\"ConnectionFactory\"].getConnection();\r\n        this.requests = [];\r\n        this.currentExecute = 0;\r\n        this.resultDatas = [];\r\n        this.requestedData.requests.forEach(function (requestedQuery) {\r\n            var request = new _request__WEBPACK_IMPORTED_MODULE_1__[\"RequestManager\"](requestedQuery.queryName, requestedQuery.source);\r\n            request.prepare(function (resultData) {\r\n                _this.resultDatas.push(resultData);\r\n                if (++_this.currentExecute in _this.requests) {\r\n                    console.log('２回目以降のexecSql');\r\n                    _this.conn.execSql(_this.requests[_this.currentExecute].request);\r\n                }\r\n                else {\r\n                    res.json(_this.resultDatas);\r\n                }\r\n            });\r\n            _this.requests.push(request);\r\n        });\r\n    }\r\n    RequestReceiver.prototype.execute = function () {\r\n        var _this = this;\r\n        console.log('firstExecute');\r\n        this.conn.on('connect', function (error) {\r\n            if (error) {\r\n                console.log(error);\r\n            }\r\n            _this.conn.execSql(_this.requests[0].request);\r\n        });\r\n    };\r\n    return RequestReceiver;\r\n}());\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMveXljb21wL3JlcXVlc3QtcmVjZWl2ZXIudHM/Mzk4ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtBQUFBO0FBQUE7QUFBQTtBQUF5RDtBQUNkO0FBRzNDO0lBV0UseUJBQW9CLFlBQWlCLEVBQUUsR0FBcUI7UUFBNUQsaUJBZ0NDO1FBaENtQixpQkFBWSxHQUFaLFlBQVksQ0FBSztRQUVuQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDOUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBR2hELElBQUksQ0FBQyxJQUFJLEdBQUcscUVBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7UUFHOUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFFbkIsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7UUFFeEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFHdEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsY0FBOEI7WUFDakUsSUFBTSxPQUFPLEdBQUcsSUFBSSx1REFBYyxDQUFDLGNBQWMsQ0FBQyxTQUFTLEVBQUUsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRXBGLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQyxVQUFzQjtnQkFDckMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBRWxDLElBQUcsRUFBRSxLQUFJLENBQUMsY0FBYyxJQUFJLEtBQUksQ0FBQyxRQUFRLEVBQUU7b0JBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7b0JBQzdCLEtBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUMvRDtxQkFBTTtvQkFDTCxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztpQkFDNUI7WUFDSCxDQUFDLENBQUMsQ0FBQztZQUVILEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUdNLGlDQUFPLEdBQWQ7UUFBQSxpQkFXQztRQVRDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLFVBQUMsS0FBc0I7WUFDN0MsSUFBRyxLQUFLLEVBQUM7Z0JBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNwQjtZQUVELEtBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDOUMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQUFDIiwiZmlsZSI6Ii4vc3JjL3l5Y29tcC9yZXF1ZXN0LXJlY2VpdmVyLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVxdWVzdGVkRGF0YSwgUmVxdWVzdGVkUXVlcnksIFJlc3VsdERhdGEgfSBmcm9tICcuL2RlY2xhcmF0aW9ucyc7XHJcbmltcG9ydCB7IENvbm5lY3Rpb25FcnJvciB9IGZyb20gJ3RlZGlvdXMnO1xyXG5pbXBvcnQgeyBDb25uZWN0aW9uRmFjdG9yeSB9IGZyb20gJy4vY29ubmVjdGlvbi1mYWN0b3J5JzsgXHJcbmltcG9ydCB7IFJlcXVlc3RNYW5hZ2VyIH0gZnJvbSAnLi9yZXF1ZXN0JztcclxuaW1wb3J0ICogYXMgRXhwcmVzcyBmcm9tICdleHByZXNzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBSZXF1ZXN0UmVjZWl2ZXIge1xyXG4gIC8v44OV44Kj44O844Or44OJXHJcbiAgLy/opoHmsYLjg4fjg7zjgr9cclxuICBwcml2YXRlIHJlcXVlc3RlZERhdGE6IFJlcXVlc3RlZERhdGE7XHJcbiAgcHJpdmF0ZSBjb25uOiBDb25uZWN0aW9uRmFjdG9yeTtcclxuICBwcml2YXRlIHJlcXVlc3RzOiBSZXF1ZXN0TWFuYWdlcltdO1xyXG4gIHByaXZhdGUgY3VycmVudEV4ZWN1dGU6IG51bWJlcjtcclxuICBwcml2YXRlIHJlc3VsdERhdGFzOiBSZXN1bHREYXRhW107XHJcbiAgXHJcbiAgLy/jgrPjg7Pjgrnjg4jjg6njgq/jgr/jgIBcclxuICAvL3JlY2VpdmVkRGF0YTog44OV44Ot44Oz44OI44GL44KJ44Od44K544OI6YCB5L+h44GV44KM44CB44Gd44KM44KS5Y+X5L+h44GX44Gf44OH44O844K/XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWNlaXZlZERhdGE6IGFueSwgcmVzOiBFeHByZXNzLlJlc3BvbnNlKXtcclxuICAgIC8v5Y+X5L+h44OH44O844K/44KS44OR44O844K544GX44CB6KaB5rGC44OH44O844K/44Go44GX44Gm5Y+X44GR5Y+W44KL44CCKOS+i+WkluWHpueQhuOCkue1hOOBv+i+vOOCgOS6iOWumuOAgilcclxuICAgIHRoaXMucmVxdWVzdGVkRGF0YSA9IEpTT04ucGFyc2UocmVjZWl2ZWREYXRhKTtcclxuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMucmVxdWVzdGVkRGF0YSkpO1xyXG5cclxuICAgIC8v44OH44O844K/44OZ44O844K544Go5o6l57aa44GZ44KL44CCXHJcbiAgICB0aGlzLmNvbm4gPSBDb25uZWN0aW9uRmFjdG9yeS5nZXRDb25uZWN0aW9uKCk7XHJcblxyXG4gICAgLy/jg6rjgq/jgqjjgrnjg4jphY3liJfjgpLliJ3mnJ/ljJbjgZnjgovjgIJcclxuICAgIHRoaXMucmVxdWVzdHMgPSBbXTtcclxuXHJcbiAgICB0aGlzLmN1cnJlbnRFeGVjdXRlID0gMDtcclxuXHJcbiAgICB0aGlzLnJlc3VsdERhdGFzID0gW107XHJcblxyXG4gICAgLy/opoHmsYLjg4fjg7zjgr/kuK3jga7opoHmsYJTUUzjgpLlt6Hlm57jgZfjgIFUZWRpb3Vz44GuUmVxdWVzdOOCr+ODqeOCueOBruOCpOODs+OCueOCv+ODs+OCueOCkueUn+aIkOOBmeOCi+OAglxyXG4gICAgdGhpcy5yZXF1ZXN0ZWREYXRhLnJlcXVlc3RzLmZvckVhY2goKHJlcXVlc3RlZFF1ZXJ5OiBSZXF1ZXN0ZWRRdWVyeSkgPT4ge1xyXG4gICAgICBjb25zdCByZXF1ZXN0ID0gbmV3IFJlcXVlc3RNYW5hZ2VyKHJlcXVlc3RlZFF1ZXJ5LnF1ZXJ5TmFtZSwgcmVxdWVzdGVkUXVlcnkuc291cmNlKTtcclxuICAgICAgXHJcbiAgICAgIHJlcXVlc3QucHJlcGFyZSgocmVzdWx0RGF0YTogUmVzdWx0RGF0YSkgPT4ge1xyXG4gICAgICAgIHRoaXMucmVzdWx0RGF0YXMucHVzaChyZXN1bHREYXRhKTtcclxuXHJcbiAgICAgICAgaWYoKyt0aGlzLmN1cnJlbnRFeGVjdXRlIGluIHRoaXMucmVxdWVzdHMpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCfvvJLlm57nm67ku6XpmY3jga5leGVjU3FsJyk7XHJcbiAgICAgICAgICB0aGlzLmNvbm4uZXhlY1NxbCh0aGlzLnJlcXVlc3RzW3RoaXMuY3VycmVudEV4ZWN1dGVdLnJlcXVlc3QpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXMuanNvbih0aGlzLnJlc3VsdERhdGFzKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy5yZXF1ZXN0cy5wdXNoKHJlcXVlc3QpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIFxyXG4gIC8v5a6f6KGM5Yem55CGXHJcbiAgcHVibGljIGV4ZWN1dGUoKTp2b2lkIHtcclxuICAgIC8v5pyA5Yid44Gu5Y+W5b6X5Yem55CG44KS5a6f6KGM44GZ44KL44CCXHJcbiAgICBjb25zb2xlLmxvZygnZmlyc3RFeGVjdXRlJyk7XHJcbiAgICAvL3RoaXMuY29ubi5leGVjU3FsKHRoaXMucmVxdWVzdHNbMF0ucmVxdWVzdCk7XHJcbiAgICB0aGlzLmNvbm4ub24oJ2Nvbm5lY3QnLCAoZXJyb3I6IENvbm5lY3Rpb25FcnJvcikgPT4ge1xyXG4gICAgICBpZihlcnJvcil7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmNvbm4uZXhlY1NxbCh0aGlzLnJlcXVlc3RzWzBdLnJlcXVlc3QpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/yycomp/request-receiver.ts\n");

/***/ }),

/***/ "./src/yycomp/request.ts":
/*!*******************************!*\
  !*** ./src/yycomp/request.ts ***!
  \*******************************/
/*! exports provided: RequestState, RequestManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RequestState\", function() { return RequestState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RequestManager\", function() { return RequestManager; });\n/* harmony import */ var tedious__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tedious */ \"tedious\");\n/* harmony import */ var tedious__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tedious__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _declarations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./declarations */ \"./src/yycomp/declarations.ts\");\n\r\n\r\nvar RequestState;\r\n(function (RequestState) {\r\n    RequestState[RequestState[\"BEFORE_EXECUTE\"] = 0] = \"BEFORE_EXECUTE\";\r\n    RequestState[RequestState[\"COMPLETED\"] = 1] = \"COMPLETED\";\r\n    RequestState[RequestState[\"ERROR\"] = 2] = \"ERROR\";\r\n})(RequestState || (RequestState = {}));\r\nvar RequestManager = (function () {\r\n    function RequestManager(_queryName, source) {\r\n        var _this = this;\r\n        this._queryName = _queryName;\r\n        this.source = source;\r\n        this._request = new tedious__WEBPACK_IMPORTED_MODULE_0__[\"Request\"](this.source, function (error, rowCount) {\r\n            if (error) {\r\n                console.log(\"RequestError:\" + error);\r\n                _this.state = RequestState.ERROR;\r\n            }\r\n        });\r\n        this.state = RequestState.BEFORE_EXECUTE;\r\n        this.records = [];\r\n    }\r\n    RequestManager.prototype.prepare = function (callback) {\r\n        var _this = this;\r\n        this._request.on('row', function (columns) {\r\n            var row = {};\r\n            console.log('rowイベントにはいった。');\r\n            columns.forEach(function (column) {\r\n                row[column.metadata.colName] = column.value;\r\n            });\r\n            _this.records.push(row);\r\n        });\r\n        this._request.on('requestCompleted', function () {\r\n            _this.state = RequestState.COMPLETED;\r\n            var resultData = new _declarations__WEBPACK_IMPORTED_MODULE_1__[\"ResultData\"]();\r\n            resultData.queryName = _this.queryName;\r\n            resultData.records = _this.records;\r\n            console.log(\"oncompleted:\" + JSON.stringify(resultData));\r\n            callback(resultData);\r\n        });\r\n    };\r\n    Object.defineProperty(RequestManager.prototype, \"request\", {\r\n        get: function () {\r\n            return this._request;\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(RequestManager.prototype, \"queryName\", {\r\n        get: function () {\r\n            return this._queryName;\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    RequestManager.prototype.getRecords = function () {\r\n        return this.records;\r\n    };\r\n    return RequestManager;\r\n}());\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMveXljb21wL3JlcXVlc3QudHM/MDExZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkQ7QUFDakI7QUFHNUMsSUFBWSxZQUlYO0FBSkQsV0FBWSxZQUFZO0lBQ3RCLG1FQUFjO0lBQ2QseURBQVM7SUFDVCxpREFBSztBQUNQLENBQUMsRUFKVyxZQUFZLEtBQVosWUFBWSxRQUl2QjtBQUVEO0lBS0Usd0JBQW9CLFVBQWtCLEVBQVUsTUFBYztRQUE5RCxpQkFjQztRQWRtQixlQUFVLEdBQVYsVUFBVSxDQUFRO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUU1RCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksK0NBQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFVBQUMsS0FBbUIsRUFBRSxRQUFnQjtZQUM3RSxJQUFHLEtBQUssRUFBQztnQkFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFnQixLQUFPLENBQUMsQ0FBQztnQkFFckMsS0FBSSxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDO2FBRWpDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFHSCxJQUFJLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQyxjQUFjLENBQUM7UUFDekMsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVNLGdDQUFPLEdBQWQsVUFBZSxRQUEwQztRQUF6RCxpQkFxQkM7UUFuQkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLFVBQUMsT0FBc0I7WUFDN0MsSUFBSSxHQUFHLEdBQVEsRUFBRSxDQUFDO1lBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDN0IsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFDLE1BQU07Z0JBQ3JCLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDOUMsQ0FBQyxDQUFDLENBQUM7WUFDSCxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLGtCQUFrQixFQUFFO1lBQ25DLEtBQUksQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDLFNBQVMsQ0FBQztZQUVwQyxJQUFNLFVBQVUsR0FBRyxJQUFJLHdEQUFVLEVBQUUsQ0FBQztZQUNwQyxVQUFVLENBQUMsU0FBUyxHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUM7WUFDdEMsVUFBVSxDQUFDLE9BQU8sR0FBRyxLQUFJLENBQUMsT0FBTyxDQUFDO1lBRWxDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUcsQ0FBQyxDQUFDO1lBQ3pELFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxzQkFBSSxtQ0FBTzthQUFYO1lBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3ZCLENBQUM7OztPQUFBO0lBRUQsc0JBQUkscUNBQVM7YUFBYjtZQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUN6QixDQUFDOzs7T0FBQTtJQUdNLG1DQUFVLEdBQWpCO1FBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMiLCJmaWxlIjoiLi9zcmMveXljb21wL3JlcXVlc3QudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZXF1ZXN0LCBSZXF1ZXN0RXJyb3IsIENvbHVtblZhbHVlIH0gZnJvbSAndGVkaW91cyc7XHJcbmltcG9ydCB7IFJlc3VsdERhdGEgfSBmcm9tICcuL2RlY2xhcmF0aW9ucyc7XHJcblxyXG4vL+ODquOCr+OCqOOCueODiOOBrueKtuaFi+OCkuekuuOBmeWIl+aMmeS9k1xyXG5leHBvcnQgZW51bSBSZXF1ZXN0U3RhdGUge1xyXG4gIEJFRk9SRV9FWEVDVVRFLCBcclxuICBDT01QTEVURUQsIFxyXG4gIEVSUk9SXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBSZXF1ZXN0TWFuYWdlciB7XHJcbiAgcHJpdmF0ZSByZWNvcmRzOiBhbnlbXTtcclxuICBwcml2YXRlIHN0YXRlOiBSZXF1ZXN0U3RhdGU7XHJcbiAgcHJpdmF0ZSBfcmVxdWVzdDogUmVxdWVzdDtcclxuICBcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9xdWVyeU5hbWU6IHN0cmluZywgcHJpdmF0ZSBzb3VyY2U6IHN0cmluZyl7XHJcbiAgICAvL1JlcXVlc3Tjgqrjg5bjgrjjgqfjgq/jg4jjgpLnlJ/miJDjgZnjgovjgIJcclxuICAgIHRoaXMuX3JlcXVlc3QgPSBuZXcgUmVxdWVzdCh0aGlzLnNvdXJjZSwgKGVycm9yOiBSZXF1ZXN0RXJyb3IsIHJvd0NvdW50OiBudW1iZXIpID0+IHtcclxuICAgICAgaWYoZXJyb3Ipe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBSZXF1ZXN0RXJyb3I6JHtlcnJvcn1gKTtcclxuICAgICAgICAvL+eKtuaFi+OCkuioreWumuOBmeOCi+OAglxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBSZXF1ZXN0U3RhdGUuRVJST1I7XHJcbiAgICAgICAgLy/kvovlpJbjgpLnmbrnlJ/jgZXjgZvjgovkuojlrprjgIJcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIC8v5ZCE44CF44Gu44OV44Kj44O844Or44OJ44KS5Yid5pyf5YyW44GZ44KL44CCXHJcbiAgICB0aGlzLnN0YXRlID0gUmVxdWVzdFN0YXRlLkJFRk9SRV9FWEVDVVRFO1xyXG4gICAgdGhpcy5yZWNvcmRzID0gW107XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcHJlcGFyZShjYWxsYmFjazogKHJlc3VsdERhdGE6IFJlc3VsdERhdGEpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIC8v44Kk44OZ44Oz44OI44KS6Kit5a6a44CCXHJcbiAgICB0aGlzLl9yZXF1ZXN0Lm9uKCdyb3cnLCAoY29sdW1uczogQ29sdW1uVmFsdWVbXSkgPT4ge1xyXG4gICAgICBsZXQgcm93OiBhbnkgPSB7fTtcclxuICAgICAgY29uc29sZS5sb2coJ3Jvd+OCpOODmeODs+ODiOOBq+OBr+OBhOOBo+OBn+OAgicpO1xyXG4gICAgICBjb2x1bW5zLmZvckVhY2goKGNvbHVtbikgPT4ge1xyXG4gICAgICAgIHJvd1tjb2x1bW4ubWV0YWRhdGEuY29sTmFtZV0gPSBjb2x1bW4udmFsdWU7XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLnJlY29yZHMucHVzaChyb3cpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5fcmVxdWVzdC5vbigncmVxdWVzdENvbXBsZXRlZCcsICgpID0+IHtcclxuICAgICAgdGhpcy5zdGF0ZSA9IFJlcXVlc3RTdGF0ZS5DT01QTEVURUQ7XHJcbiAgICAgIC8v44Kz44O844Or44OQ44OD44Kv44KS5a6f6KGM44GZ44KL44CCKOWPluW+l+OBl+OBn+ODrOOCs+ODvOODieOCkua4oeOBmeOAgilcclxuICAgICAgY29uc3QgcmVzdWx0RGF0YSA9IG5ldyBSZXN1bHREYXRhKCk7XHJcbiAgICAgIHJlc3VsdERhdGEucXVlcnlOYW1lID0gdGhpcy5xdWVyeU5hbWU7XHJcbiAgICAgIHJlc3VsdERhdGEucmVjb3JkcyA9IHRoaXMucmVjb3JkcztcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKGBvbmNvbXBsZXRlZDoke0pTT04uc3RyaW5naWZ5KHJlc3VsdERhdGEpfWApO1xyXG4gICAgICBjYWxsYmFjayhyZXN1bHREYXRhKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHJlcXVlc3QoKTogUmVxdWVzdCB7XHJcbiAgICByZXR1cm4gdGhpcy5fcmVxdWVzdDtcclxuICB9XHJcblxyXG4gIGdldCBxdWVyeU5hbWUoKTpzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX3F1ZXJ5TmFtZTtcclxuICB9XHJcblxyXG4gIC8v44Os44Kz44O844OJ576k5Y+W5b6X5Yem55CGXHJcbiAgcHVibGljIGdldFJlY29yZHMoKXtcclxuICAgIHJldHVybiB0aGlzLnJlY29yZHM7XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/yycomp/request.ts\n");

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