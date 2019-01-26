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

/***/ "./src/ConnectionFactory.ts":
/*!**********************************!*\
  !*** ./src/ConnectionFactory.ts ***!
  \**********************************/
/*! exports provided: ConnectionFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ConnectionFactory\", function() { return ConnectionFactory; });\n/* harmony import */ var tedious__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tedious */ \"tedious\");\n/* harmony import */ var tedious__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tedious__WEBPACK_IMPORTED_MODULE_0__);\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\nvar ConnectionFactory = (function (_super) {\r\n    __extends(ConnectionFactory, _super);\r\n    function ConnectionFactory() {\r\n        return _super !== null && _super.apply(this, arguments) || this;\r\n    }\r\n    ConnectionFactory.getConnection = function () {\r\n        return new tedious__WEBPACK_IMPORTED_MODULE_0__[\"Connection\"](this.config);\r\n    };\r\n    ConnectionFactory.config = {\r\n        userName: 'sa',\r\n        password: '',\r\n        server: 'localhost',\r\n        options: {\r\n            database: 'BoatRace',\r\n            port: 1433,\r\n            encrypt: false\r\n        }\r\n    };\r\n    return ConnectionFactory;\r\n}(tedious__WEBPACK_IMPORTED_MODULE_0__[\"Connection\"]));\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQ29ubmVjdGlvbkZhY3RvcnkudHM/NzJhMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFtQztBQUVuQztJQUF1QyxxQ0FBa0I7SUFBekQ7O0lBZUEsQ0FBQztJQUhlLCtCQUFhLEdBQTNCO1FBQ0UsT0FBTyxJQUFJLGtEQUFrQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBYmMsd0JBQU0sR0FBNkI7UUFDaEQsUUFBUSxFQUFFLElBQUk7UUFDZCxRQUFRLEVBQUUsRUFBRTtRQUNaLE1BQU0sRUFBRSxXQUFXO1FBQ25CLE9BQU8sRUFBRTtZQUNQLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLElBQUksRUFBRSxJQUFJO1lBQ1YsT0FBTyxFQUFFLEtBQUs7U0FDZjtLQUNGLENBQUM7SUFLSix3QkFBQztDQUFBLENBZnNDLGtEQUFrQixHQWV4RDtBQWY2QiIsImZpbGUiOiIuL3NyYy9Db25uZWN0aW9uRmFjdG9yeS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFRlZGlvdXMgZnJvbSAndGVkaW91cyc7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29ubmVjdGlvbkZhY3RvcnkgZXh0ZW5kcyBUZWRpb3VzLkNvbm5lY3Rpb24ge1xyXG4gIHByaXZhdGUgc3RhdGljIGNvbmZpZzogVGVkaW91cy5Db25uZWN0aW9uQ29uZmlnID0ge1xyXG4gICAgdXNlck5hbWU6ICdzYScsIFxyXG4gICAgcGFzc3dvcmQ6ICcnLCBcclxuICAgIHNlcnZlcjogJ2xvY2FsaG9zdCcsIFxyXG4gICAgb3B0aW9uczoge1xyXG4gICAgICBkYXRhYmFzZTogJ0JvYXRSYWNlJywgXHJcbiAgICAgIHBvcnQ6IDE0MzMsIFxyXG4gICAgICBlbmNyeXB0OiBmYWxzZVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0Q29ubmVjdGlvbigpOiBUZWRpb3VzLkNvbm5lY3Rpb24ge1xyXG4gICAgcmV0dXJuIG5ldyBUZWRpb3VzLkNvbm5lY3Rpb24odGhpcy5jb25maWcpO1xyXG4gIH1cclxufVxyXG4vKlxyXG5leHBvcnQgY2xhc3MgQ29ubmVjdGlvbiBleHRlbmRzIFRlZGlvdXMuQ29ubmVjdGlvbiB7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgY29uZmlnOiBUZWRpb3VzLkNvbm5lY3Rpb25Db25maWcgPSB7XHJcbiAgICB1c2VyTmFtZTogJ3NhJywgXHJcbiAgICBwYXNzd29yZDogJycsIFxyXG4gICAgc2VydmVyOiAnbG9jYWxob3N0JywgXHJcbiAgICBvcHRpb25zOiB7XHJcbiAgICAgIGRhdGFiYXNlOiAnQm9hdFJhY2UnLCBcclxuICAgICAgcG9ydDogMTQzMywgXHJcbiAgICAgIGVuY3J5cHQ6IGZhbHNlXHJcbiAgICB9XHJcbiAgfTsgXHJcblxyXG4gIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogVGVkaW91cy5Db25uZWN0aW9uO1xyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldENvbm5lY3Rpb24oKTogVGVkaW91cy5Db25uZWN0aW9ue1xyXG4gICAgaWYoIXRoaXMuX2luc3RhbmNlKXtcclxuICAgICAgbmV3IENvbm5lY3Rpb24odGhpcy5jb25maWcpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcihfY29uZmlnOiBUZWRpb3VzLkNvbm5lY3Rpb25Db25maWcpe1xyXG4gICAgc3VwZXIoX2NvbmZpZyk7XHJcbiAgfVxyXG59XHJcbiovIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ConnectionFactory.ts\n");

/***/ }),

/***/ "./src/routes/data-access.ts":
/*!***********************************!*\
  !*** ./src/routes/data-access.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var tedious__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tedious */ \"tedious\");\n/* harmony import */ var tedious__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tedious__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ConnectionFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ConnectionFactory */ \"./src/ConnectionFactory.ts\");\n\r\n\r\n\r\nvar router = express__WEBPACK_IMPORTED_MODULE_0__[\"Router\"]();\r\nvar ResultData = (function () {\r\n    function ResultData() {\r\n        this.queryName = \"\";\r\n        this.records = [];\r\n    }\r\n    return ResultData;\r\n}());\r\nvar dummyRequestData = {\r\n    requests: [\r\n        {\r\n            queryName: \"M_ボートレーサー\",\r\n            source: \"SELECT * FROM BoatRace.dbo.M_ボートレーサー\"\r\n        },\r\n        {\r\n            queryName: \"M_ボートレース場\",\r\n            source: \"SELECT * FROM BoatRace.dbo.M_ボートレース場\"\r\n        }\r\n    ]\r\n};\r\nrouter.get('/', function (req, res, next) {\r\n    var dummyRequest = JSON.stringify(dummyRequestData);\r\n    var dreqs = JSON.parse(dummyRequest);\r\n    var conn = _ConnectionFactory__WEBPACK_IMPORTED_MODULE_2__[\"ConnectionFactory\"].getConnection();\r\n    var reqCount = dreqs.requests.length;\r\n    var current = 0;\r\n    var requests = [];\r\n    var results = [];\r\n    var result;\r\n    var completedCount = 0;\r\n    conn.on('connect', function (err) {\r\n        if (err) {\r\n            res.send(err.message);\r\n            return;\r\n        }\r\n        executeStatement();\r\n    });\r\n    var trySend = function () {\r\n        if (completedCount === reqCount) {\r\n            res.json(results);\r\n        }\r\n    };\r\n    var executeStatement = function () {\r\n        var sqlRequests = dreqs.requests;\r\n        var records = [];\r\n        sqlRequests.forEach(function (sqlRequest) {\r\n            var row = {};\r\n            console.log('リクエスト生成');\r\n            var request = new tedious__WEBPACK_IMPORTED_MODULE_1__[\"Request\"](sqlRequest.source, function (error) {\r\n                completedCount++;\r\n                if (error) {\r\n                    console.log(\"エラー内容:\" + error);\r\n                    return;\r\n                }\r\n                result = new ResultData();\r\n            });\r\n            console.log('行イベント生成');\r\n            request.on('row', function (columns) {\r\n                columns.forEach(function (column) {\r\n                    row[column.metadata.colName] = column.value;\r\n                });\r\n                console.log(\"\\u884C\\u306E\\u5185\\u5BB9:\" + JSON.stringify(row));\r\n                records.push(row);\r\n                row = {};\r\n            });\r\n            request.on('requestCompleted', function () {\r\n                if (++current in sqlRequests) {\r\n                    conn.execSql(requests[current]);\r\n                }\r\n                result.queryName = sqlRequest.queryName;\r\n                result.records = records;\r\n                results.push(result);\r\n                records = [];\r\n                console.log(\"trySend前:\" + sqlRequest.source + \", recors:\" + JSON.stringify(records));\r\n                trySend();\r\n            });\r\n            requests.push(request);\r\n        });\r\n        conn.execSql(requests[0]);\r\n    };\r\n});\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL2RhdGEtYWNjZXNzLnRzP2VlOTkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1DO0FBQ0E7QUFDc0I7QUFDekQsSUFBTSxNQUFNLEdBQUcsOENBQWMsRUFBRSxDQUFDO0FBU2hDO0lBSUU7UUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBQ0gsaUJBQUM7QUFBRCxDQUFDO0FBS0QsSUFBTSxnQkFBZ0IsR0FBZ0I7SUFDcEMsUUFBUSxFQUFFO1FBQ1I7WUFDRSxTQUFTLEVBQUUsV0FBVztZQUN0QixNQUFNLEVBQUUsc0NBQXNDO1NBQy9DO1FBQ0Q7WUFDRSxTQUFTLEVBQUUsV0FBVztZQUN0QixNQUFNLEVBQUUsc0NBQXNDO1NBQy9DO0tBQ0Y7Q0FDRixDQUFDO0FBRUYsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsVUFBQyxHQUFvQixFQUFFLEdBQXFCLEVBQUUsSUFBMEI7SUFFdEYsSUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3RELElBQU0sS0FBSyxHQUFnQixJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3BELElBQU0sSUFBSSxHQUF1QixvRUFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUNuRSxJQUFNLFFBQVEsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztJQUN2QyxJQUFJLE9BQU8sR0FBVyxDQUFDLENBQUM7SUFDeEIsSUFBSSxRQUFRLEdBQXNCLEVBQUUsQ0FBQztJQUNyQyxJQUFJLE9BQU8sR0FBaUIsRUFBRSxDQUFDO0lBQy9CLElBQUksTUFBa0IsQ0FBQztJQUN2QixJQUFJLGNBQWMsR0FBVyxDQUFDLENBQUM7SUFFL0IsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsVUFBQyxHQUE0QjtRQUM5QyxJQUFHLEdBQUcsRUFBQztZQUNMLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3RCLE9BQU87U0FDUjtRQUNELGdCQUFnQixFQUFFLENBQUM7SUFDckIsQ0FBQyxDQUFDLENBQUM7SUFFSCxJQUFNLE9BQU8sR0FBRztRQUNkLElBQUcsY0FBYyxLQUFHLFFBQVEsRUFBQztZQUMzQixHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ25CO0lBQ0gsQ0FBQyxDQUFDO0lBRUYsSUFBTSxnQkFBZ0IsR0FBRztRQUN2QixJQUFNLFdBQVcsR0FBaUIsS0FBSyxDQUFDLFFBQVEsQ0FBQztRQUNqRCxJQUFJLE9BQU8sR0FBVSxFQUFFLENBQUM7UUFFeEIsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFDLFVBQVU7WUFDN0IsSUFBSSxHQUFHLEdBQVEsRUFBRSxDQUFDO1lBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDdkIsSUFBTSxPQUFPLEdBQUcsSUFBSSwrQ0FBZSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsVUFBQyxLQUEyQjtnQkFDakYsY0FBYyxFQUFFLENBQUM7Z0JBRWpCLElBQUcsS0FBSyxFQUFDO29CQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxDQUFDO29CQUM5QixPQUFPO2lCQUNSO2dCQUVELE1BQU0sR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO1lBQzVCLENBQUMsQ0FBQyxDQUFDO1lBRUgsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN2QixPQUFPLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxVQUFDLE9BQThCO2dCQUMvQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUMsTUFBMkI7b0JBQzFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7Z0JBQzlDLENBQUMsQ0FBQyxDQUFDO2dCQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQVEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUcsQ0FBQyxDQUFDO2dCQUMzQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUVsQixHQUFHLEdBQUcsRUFBRSxDQUFDO1lBQ1gsQ0FBQyxDQUFDLENBQUM7WUFFSCxPQUFPLENBQUMsRUFBRSxDQUFDLGtCQUFrQixFQUFFO2dCQUM3QixJQUFHLEVBQUUsT0FBTyxJQUFJLFdBQVcsRUFBQztvQkFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztpQkFDakM7Z0JBRUQsTUFBTSxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDO2dCQUN4QyxNQUFNLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztnQkFDekIsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDckIsT0FBTyxHQUFHLEVBQUUsQ0FBQztnQkFDYixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUMsTUFBTSxHQUFHLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ3JGLE9BQU8sRUFBRSxDQUFDO1lBQ1osQ0FBQyxDQUFDLENBQUM7WUFFSCxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQTZCNUIsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDLENBQUM7QUFFWSxxRUFBTSxFQUFDIiwiZmlsZSI6Ii4vc3JjL3JvdXRlcy9kYXRhLWFjY2Vzcy50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIEV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCAqIGFzIFRlZGlvdXMgZnJvbSAndGVkaW91cyc7XHJcbmltcG9ydCB7IENvbm5lY3Rpb25GYWN0b3J5IH0gZnJvbSAnLi4vQ29ubmVjdGlvbkZhY3RvcnknO1xyXG5jb25zdCByb3V0ZXIgPSBFeHByZXNzLlJvdXRlcigpO1xyXG5cclxuaW50ZXJmYWNlIFNRTFJlcXVlc3R7XHJcbiAgcXVlcnlOYW1lOiBzdHJpbmc7XHJcbiAgc291cmNlOiBzdHJpbmc7XHJcbn1cclxuaW50ZXJmYWNlIFJlcXVlc3REYXRhIHtcclxuICByZXF1ZXN0czogU1FMUmVxdWVzdFtdO1xyXG59XHJcbmNsYXNzIFJlc3VsdERhdGEge1xyXG4gIHF1ZXJ5TmFtZTogc3RyaW5nO1xyXG4gIHJlY29yZHM6IGFueVtdO1xyXG5cclxuICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgdGhpcy5xdWVyeU5hbWUgPSBcIlwiO1xyXG4gICAgdGhpcy5yZWNvcmRzID0gW107XHJcbiAgfVxyXG59XHJcbmludGVyZmFjZSBSZXN1bHQge1xyXG4gIGRhdGE6IFJlc3VsdERhdGFbXTtcclxufVxyXG5cclxuY29uc3QgZHVtbXlSZXF1ZXN0RGF0YTogUmVxdWVzdERhdGEgPSB7XHJcbiAgcmVxdWVzdHM6IFtcclxuICAgIHtcclxuICAgICAgcXVlcnlOYW1lOiBcIk1f44Oc44O844OI44Os44O844K144O8XCIsIFxyXG4gICAgICBzb3VyY2U6IFwiU0VMRUNUICogRlJPTSBCb2F0UmFjZS5kYm8uTV/jg5zjg7zjg4jjg6zjg7zjgrXjg7xcIlxyXG4gICAgfSwgXHJcbiAgICB7XHJcbiAgICAgIHF1ZXJ5TmFtZTogXCJNX+ODnOODvOODiOODrOODvOOCueWgtFwiLCBcclxuICAgICAgc291cmNlOiBcIlNFTEVDVCAqIEZST00gQm9hdFJhY2UuZGJvLk1f44Oc44O844OI44Os44O844K55aC0XCJcclxuICAgIH1cclxuICBdXHJcbn07XHJcblxyXG5yb3V0ZXIuZ2V0KCcvJywgKHJlcTogRXhwcmVzcy5SZXF1ZXN0LCByZXM6IEV4cHJlc3MuUmVzcG9uc2UsIG5leHQ6IEV4cHJlc3MuTmV4dEZ1bmN0aW9uKSA9PiB7XHJcbiAgLy/jg4Djg5/jg7zjga7jg6rjgq/jgqjjgrnjg4jjg4fjg7zjgr/jgpLnlJ/miJDjgIJcclxuICBjb25zdCBkdW1teVJlcXVlc3QgPSBKU09OLnN0cmluZ2lmeShkdW1teVJlcXVlc3REYXRhKTtcclxuICBjb25zdCBkcmVxczogUmVxdWVzdERhdGEgPSBKU09OLnBhcnNlKGR1bW15UmVxdWVzdCk7XHJcbiAgY29uc3QgY29ubjogVGVkaW91cy5Db25uZWN0aW9uID0gQ29ubmVjdGlvbkZhY3RvcnkuZ2V0Q29ubmVjdGlvbigpO1xyXG4gIGNvbnN0IHJlcUNvdW50ID0gZHJlcXMucmVxdWVzdHMubGVuZ3RoO1xyXG4gIGxldCBjdXJyZW50OiBudW1iZXIgPSAwO1xyXG4gIGxldCByZXF1ZXN0czogVGVkaW91cy5SZXF1ZXN0W10gPSBbXTtcclxuICBsZXQgcmVzdWx0czogUmVzdWx0RGF0YVtdID0gW107XHJcbiAgbGV0IHJlc3VsdDogUmVzdWx0RGF0YTtcclxuICBsZXQgY29tcGxldGVkQ291bnQ6IG51bWJlciA9IDA7XHJcblxyXG4gIGNvbm4ub24oJ2Nvbm5lY3QnLCAoZXJyOiBUZWRpb3VzLkNvbm5lY3Rpb25FcnJvcikgPT4ge1xyXG4gICAgaWYoZXJyKXtcclxuICAgICAgcmVzLnNlbmQoZXJyLm1lc3NhZ2UpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBleGVjdXRlU3RhdGVtZW50KCk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHRyeVNlbmQgPSAoKSA9PiB7XHJcbiAgICBpZihjb21wbGV0ZWRDb3VudD09PXJlcUNvdW50KXtcclxuICAgICAgcmVzLmpzb24ocmVzdWx0cyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZXhlY3V0ZVN0YXRlbWVudCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHNxbFJlcXVlc3RzOiBTUUxSZXF1ZXN0W10gPSBkcmVxcy5yZXF1ZXN0cztcclxuICAgIGxldCByZWNvcmRzOiBhbnlbXSA9IFtdO1xyXG5cclxuICAgIHNxbFJlcXVlc3RzLmZvckVhY2goKHNxbFJlcXVlc3QpID0+IHtcclxuICAgICAgbGV0IHJvdzogYW55ID0ge307XHJcbiAgICAgIGNvbnNvbGUubG9nKCfjg6rjgq/jgqjjgrnjg4jnlJ/miJAnKTtcclxuICAgICAgY29uc3QgcmVxdWVzdCA9IG5ldyBUZWRpb3VzLlJlcXVlc3Qoc3FsUmVxdWVzdC5zb3VyY2UsIChlcnJvcjogVGVkaW91cy5SZXF1ZXN0RXJyb3IpID0+IHtcclxuICAgICAgICBjb21wbGV0ZWRDb3VudCsrO1xyXG5cclxuICAgICAgICBpZihlcnJvcil7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIuOCqOODqeODvOWGheWuuTpcIiArIGVycm9yKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlc3VsdCA9IG5ldyBSZXN1bHREYXRhKCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc29sZS5sb2coJ+ihjOOCpOODmeODs+ODiOeUn+aIkCcpO1xyXG4gICAgICByZXF1ZXN0Lm9uKCdyb3cnLCAoY29sdW1uczogVGVkaW91cy5Db2x1bW5WYWx1ZVtdKSA9PiB7XHJcbiAgICAgICAgY29sdW1ucy5mb3JFYWNoKChjb2x1bW46IFRlZGlvdXMuQ29sdW1uVmFsdWUpID0+IHtcclxuICAgICAgICAgIHJvd1tjb2x1bW4ubWV0YWRhdGEuY29sTmFtZV0gPSBjb2x1bW4udmFsdWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coYOihjOOBruWGheWuuToke0pTT04uc3RyaW5naWZ5KHJvdyl9YCk7XHJcbiAgICAgICAgcmVjb3Jkcy5wdXNoKHJvdyk7XHJcblxyXG4gICAgICAgIHJvdyA9IHt9O1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHJlcXVlc3Qub24oJ3JlcXVlc3RDb21wbGV0ZWQnLCAoKSA9PiB7XHJcbiAgICAgICAgaWYoKytjdXJyZW50IGluIHNxbFJlcXVlc3RzKXtcclxuICAgICAgICAgIGNvbm4uZXhlY1NxbChyZXF1ZXN0c1tjdXJyZW50XSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXN1bHQucXVlcnlOYW1lID0gc3FsUmVxdWVzdC5xdWVyeU5hbWU7XHJcbiAgICAgICAgcmVzdWx0LnJlY29yZHMgPSByZWNvcmRzO1xyXG4gICAgICAgIHJlc3VsdHMucHVzaChyZXN1bHQpO1xyXG4gICAgICAgIHJlY29yZHMgPSBbXTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInRyeVNlbmTliY06XCIgKyBzcWxSZXF1ZXN0LnNvdXJjZSArIFwiLCByZWNvcnM6XCIgKyBKU09OLnN0cmluZ2lmeShyZWNvcmRzKSk7XHJcbiAgICAgICAgdHJ5U2VuZCgpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHJlcXVlc3RzLnB1c2gocmVxdWVzdCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25uLmV4ZWNTcWwocmVxdWVzdHNbMF0pO1xyXG4vKiAgICBcclxuICAgIGZvcihsZXQgcmVxU1FMIGluIGRyZXFzLnJlcXVlc3RzKXtcclxuICAgICAgbGV0IHJvdyA6IGFueSA9IHt9O1xyXG5cclxuICAgICAgbGV0IHJlcXVlc3QgPSBuZXcgVGVkaW91cy5SZXF1ZXN0KHJlcVNRTC4sIChlcnJvcjogVGVkaW91cy5SZXF1ZXN0RXJyb3IpID0+IHtcclxuICAgICAgICBjb21wbGV0ZWRDb3VudCsrO1xyXG4gICAgICAgIGlmKGVycm9yKXtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v44OV44Ot44Oz44OI44G444Gu6L+U5L+h44KS6Kmm44G/44KL44CCXHJcbiAgICAgICAgdHJ5U2VuZCgpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHJlcXVlc3Qub24oJ3JvdycsIChjb2x1bW5zOiBUZWRpb3VzLkNvbHVtblZhbHVlW10pID0+IHtcclxuICAgICAgICBjb2x1bW5zLmZvckVhY2goKGNvbHVtbjogVGVkaW91cy5Db2x1bW5WYWx1ZSkgPT4ge1xyXG4gICAgICAgICAgcm93W2NvbHVtbi5tZXRhZGF0YS5jb2xOYW1lXSA9IGNvbHVtbi52YWx1ZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy9yZWNvcmRzLnB1c2gocm93KTtcclxuICAgICAgICByZXN1bHRzW3JlcVNRTFtcInF1ZXJ5TmFtZVwiXV0ucHVzaChyb3cpO1xyXG4gICAgICAgIHJvdyA9IHt9O1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbm4uZXhlY1NxbChyZXF1ZXN0KTtcclxuICAgIH1cclxuKi8gIFxyXG4gIH07XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm91dGVyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/routes/data-access.ts\n");

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