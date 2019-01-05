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

/***/ "./src/server.ts":
/*!***********************!*\
  !*** ./src/server.ts ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n\r\nvar app = express__WEBPACK_IMPORTED_MODULE_0__();\r\nvar Connection = __webpack_require__(/*! tedious */ \"tedious\").Connection;\r\nvar config = {\r\n    userName: 'sa',\r\n    password: '',\r\n    server: 'localhost',\r\n    options: {\r\n        truestedConnection: true,\r\n        database: 'BoatRace',\r\n        port: 1433,\r\n        encrypt: false\r\n    }\r\n};\r\napp.get('/', function (req, res, next) {\r\n    return res.send('Hello World');\r\n});\r\napp.get('/dbconnect', function (req, res) {\r\n    console.log('きた');\r\n    var connection = new Connection(config);\r\n    console.log('接続成功');\r\n    var content = [];\r\n    var Request = __webpack_require__(/*! tedious */ \"tedious\").Request;\r\n    connection.on('connect', function (err) {\r\n        console.log('ProgramMessage:connected');\r\n        executeStatement();\r\n    });\r\n    connection.on('end', function () {\r\n        console.log('ProgramMessage:disconnected');\r\n        res.json(content);\r\n    });\r\n    var executeStatement = function () {\r\n        console.log('executeStatementきた');\r\n        var request = new Request('SELECT * FROM M_ボートレーサー', function (err) {\r\n            if (err) {\r\n                console.log(err);\r\n            }\r\n            console.log('Request生成');\r\n        });\r\n        var result = {};\r\n        request.on('row', function (columns) {\r\n            console.log('request.on(\\'columns\\')');\r\n            if (columns.value === null) {\r\n                console.log('Null');\r\n            }\r\n            else {\r\n                console.log('else');\r\n                columns.forEach(function (column) {\r\n                    result[column.metadata.colName] = column.value;\r\n                });\r\n                content.push(result);\r\n                result = {};\r\n            }\r\n        });\r\n        request.on('requestCompleted', function () {\r\n            console.log('requestCompleted');\r\n            connection.close();\r\n        });\r\n        connection.execSql(request);\r\n    };\r\n});\r\napp.listen(3000, function () {\r\n    console.log('Server Open');\r\n});\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (app);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyLnRzPzk2YmIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQW1DO0FBR25DLElBQU0sR0FBRyxHQUFHLG9DQUFPLEVBQUUsQ0FBQztBQUN0QixJQUFNLFVBQVUsR0FBRyxtQkFBTyxDQUFDLHdCQUFTLENBQUMsQ0FBQyxVQUFVLENBQUM7QUFFakQsSUFBTSxNQUFNLEdBQUc7SUFDYixRQUFRLEVBQUUsSUFBSTtJQUNkLFFBQVEsRUFBRSxFQUFFO0lBQ1osTUFBTSxFQUFFLFdBQVc7SUFDbkIsT0FBTyxFQUFFO1FBQ1Asa0JBQWtCLEVBQUUsSUFBSTtRQUN4QixRQUFRLEVBQUUsVUFBVTtRQUNwQixJQUFJLEVBQUUsSUFBSTtRQUNWLE9BQU8sRUFBRSxLQUFLO0tBQ2Y7Q0FDRixDQUFDO0FBRUYsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsVUFBQyxHQUFvQixFQUFFLEdBQXFCLEVBQUUsSUFBMEI7SUFDbkYsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQ2pDLENBQUMsQ0FBQyxDQUFDO0FBRUgsR0FBRyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsVUFBQyxHQUFvQixFQUFFLEdBQXFCO0lBQ2hFLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEIsSUFBTSxVQUFVLEdBQUcsSUFBSSxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNwQixJQUFNLE9BQU8sR0FBVSxFQUFFLENBQUM7SUFDMUIsSUFBTSxPQUFPLEdBQUcsbUJBQU8sQ0FBQyx3QkFBUyxDQUFDLENBQUMsT0FBTyxDQUFDO0lBRTNDLFVBQVUsQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLFVBQUMsR0FBUTtRQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFDeEMsZ0JBQWdCLEVBQUUsQ0FBQztJQUNyQixDQUFDLENBQUMsQ0FBQztJQUVILFVBQVUsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFO1FBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FBQztRQUUzQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3BCLENBQUMsQ0FBQyxDQUFDO0lBRUgsSUFBTSxnQkFBZ0IsR0FBRztRQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDbEMsSUFBTSxPQUFPLEdBQUcsSUFBSSxPQUFPLENBQUMseUJBQXlCLEVBQUUsVUFBQyxHQUFRO1lBQzlELElBQUcsR0FBRyxFQUFDO2dCQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDbEI7WUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxNQUFNLEdBQVEsRUFBRSxDQUFDO1FBRXJCLE9BQU8sQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLFVBQUMsT0FBWTtZQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7WUFDdkMsSUFBRyxPQUFPLENBQUMsS0FBSyxLQUFHLElBQUksRUFBQztnQkFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNyQjtpQkFBTTtnQkFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNwQixPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUMsTUFBMkI7b0JBQzFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7Z0JBQ2pELENBQUMsQ0FBQyxDQUFDO2dCQUNILE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3JCLE1BQU0sR0FBRyxFQUFFLENBQUM7YUFDYjtRQUNILENBQUMsQ0FBQyxDQUFDO1FBR0gsT0FBTyxDQUFDLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRTtZQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDaEMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsVUFBVSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDO0FBR0gsQ0FBQyxDQUFDLENBQUM7QUFFSCxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtJQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDN0IsQ0FBQyxDQUFDLENBQUM7QUFFWSxrRUFBRyxFQUFDIiwiZmlsZSI6Ii4vc3JjL3NlcnZlci50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIEV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCAqIGFzIFRlZGlvdXMgZnJvbSAndGVkaW91cyc7XHJcblxyXG5jb25zdCBhcHAgPSBFeHByZXNzKCk7XHJcbmNvbnN0IENvbm5lY3Rpb24gPSByZXF1aXJlKCd0ZWRpb3VzJykuQ29ubmVjdGlvbjtcclxuXHJcbmNvbnN0IGNvbmZpZyA9IHtcclxuICB1c2VyTmFtZTogJ3NhJywgXHJcbiAgcGFzc3dvcmQ6ICcnLCBcclxuICBzZXJ2ZXI6ICdsb2NhbGhvc3QnLCBcclxuICBvcHRpb25zOiB7XHJcbiAgICB0cnVlc3RlZENvbm5lY3Rpb246IHRydWUsXHJcbiAgICBkYXRhYmFzZTogJ0JvYXRSYWNlJywgXHJcbiAgICBwb3J0OiAxNDMzLCBcclxuICAgIGVuY3J5cHQ6IGZhbHNlXHJcbiAgfVxyXG59O1xyXG5cclxuYXBwLmdldCgnLycsIChyZXE6IEV4cHJlc3MuUmVxdWVzdCwgcmVzOiBFeHByZXNzLlJlc3BvbnNlLCBuZXh0OiBFeHByZXNzLk5leHRGdW5jdGlvbikgPT4ge1xyXG4gIHJldHVybiByZXMuc2VuZCgnSGVsbG8gV29ybGQnKTtcclxufSk7XHJcblxyXG5hcHAuZ2V0KCcvZGJjb25uZWN0JywgKHJlcTogRXhwcmVzcy5SZXF1ZXN0LCByZXM6IEV4cHJlc3MuUmVzcG9uc2UpID0+IHtcclxuICBjb25zb2xlLmxvZygn44GN44GfJyk7XHJcbiAgY29uc3QgY29ubmVjdGlvbiA9IG5ldyBDb25uZWN0aW9uKGNvbmZpZyk7XHJcbiAgY29uc29sZS5sb2coJ+aOpee2muaIkOWKnycpO1xyXG4gIGNvbnN0IGNvbnRlbnQ6IGFueVtdID0gW107XHJcbiAgY29uc3QgUmVxdWVzdCA9IHJlcXVpcmUoJ3RlZGlvdXMnKS5SZXF1ZXN0O1xyXG4gIFxyXG4gIGNvbm5lY3Rpb24ub24oJ2Nvbm5lY3QnLCAoZXJyOiBhbnkpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdQcm9ncmFtTWVzc2FnZTpjb25uZWN0ZWQnKTtcclxuICAgIGV4ZWN1dGVTdGF0ZW1lbnQoKTtcclxuICB9KTtcclxuXHJcbiAgY29ubmVjdGlvbi5vbignZW5kJywgKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ1Byb2dyYW1NZXNzYWdlOmRpc2Nvbm5lY3RlZCcpO1xyXG5cclxuICAgIHJlcy5qc29uKGNvbnRlbnQpO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBleGVjdXRlU3RhdGVtZW50ID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ2V4ZWN1dGVTdGF0ZW1lbnTjgY3jgZ8nKTtcclxuICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgUmVxdWVzdCgnU0VMRUNUICogRlJPTSBNX+ODnOODvOODiOODrOODvOOCteODvCcsIChlcnI6IGFueSkgPT4ge1xyXG4gICAgICBpZihlcnIpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgIH1cclxuICAgICAgY29uc29sZS5sb2coJ1JlcXVlc3TnlJ/miJAnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGxldCByZXN1bHQ6IGFueSA9IHt9O1xyXG5cclxuICAgIHJlcXVlc3Qub24oJ3JvdycsIChjb2x1bW5zOiBhbnkpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ3JlcXVlc3Qub24oXFwnY29sdW1uc1xcJyknKTtcclxuICAgICAgaWYoY29sdW1ucy52YWx1ZT09PW51bGwpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdOdWxsJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2Vsc2UnKTtcclxuICAgICAgICBjb2x1bW5zLmZvckVhY2goKGNvbHVtbjogVGVkaW91cy5Db2x1bW5WYWx1ZSkgPT4ge1xyXG4gICAgICAgICAgcmVzdWx0W2NvbHVtbi5tZXRhZGF0YS5jb2xOYW1lXSA9IGNvbHVtbi52YWx1ZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb250ZW50LnB1c2gocmVzdWx0KTtcclxuICAgICAgICByZXN1bHQgPSB7fTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIHJlcXVlc3Qub24oJ3JlcXVlc3RDb21wbGV0ZWQnLCAoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdyZXF1ZXN0Q29tcGxldGVkJyk7XHJcbiAgICAgIGNvbm5lY3Rpb24uY2xvc2UoKTtcclxuICAgIH0pO1xyXG4gICAgY29ubmVjdGlvbi5leGVjU3FsKHJlcXVlc3QpO1xyXG4gIH1cclxuXHJcblxyXG59KTtcclxuXHJcbmFwcC5saXN0ZW4oMzAwMCwgKCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKCdTZXJ2ZXIgT3BlbicpO1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFwcDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/server.ts\n");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCI/MjJmZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJleHByZXNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///express\n");

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