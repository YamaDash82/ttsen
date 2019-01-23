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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var tedious__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tedious */ \"tedious\");\n/* harmony import */ var tedious__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tedious__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ConnectionFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ConnectionFactory */ \"./src/ConnectionFactory.ts\");\n\r\n\r\n\r\nvar router = express__WEBPACK_IMPORTED_MODULE_0__[\"Router\"]();\r\nrouter.get('/', function (req, res, next) {\r\n    var conn = _ConnectionFactory__WEBPACK_IMPORTED_MODULE_2__[\"ConnectionFactory\"].getConnection();\r\n    conn.on('connect', function (err) {\r\n        if (err) {\r\n            res.send(err.message);\r\n            return;\r\n        }\r\n        executeStatement();\r\n    });\r\n    var executeStatement = function () {\r\n        var records = [];\r\n        var records2 = [];\r\n        var row = {};\r\n        var row2 = {};\r\n        var request2 = new tedious__WEBPACK_IMPORTED_MODULE_1__[\"Request\"]('SELECT * FROM BoatRace.dbo.M_ボートレース場', function (error, rowCount) {\r\n            res.send(records2);\r\n        });\r\n        request2.on('row', function (columns) {\r\n            columns.forEach(function (column) {\r\n                row2[column.metadata.colName] = column.value;\r\n            });\r\n            records2.push(row2);\r\n            row2 = {};\r\n        });\r\n        var request = new tedious__WEBPACK_IMPORTED_MODULE_1__[\"Request\"]('SELECT * FROM BoatRace.dbo.M_ボートレーサー', function (error, rowCount) {\r\n            if (error) {\r\n                res.send(error.message);\r\n                return;\r\n            }\r\n            res.send(records);\r\n        });\r\n        request.on('row', function (columns) {\r\n            columns.forEach(function (column) {\r\n                row[column.metadata.colName] = column.value;\r\n            });\r\n            records.push(row);\r\n            row = {};\r\n        });\r\n        var requests = [];\r\n        requests.push(request2);\r\n        requests.forEach(function (currentReq) {\r\n            conn.execSql(currentReq);\r\n        });\r\n    };\r\n});\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL2RhdGEtYWNjZXNzLnRzP2VlOTkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1DO0FBQ0E7QUFDc0I7QUFDekQsSUFBTSxNQUFNLEdBQUcsOENBQWMsRUFBRSxDQUFDO0FBRWhDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFVBQUMsR0FBb0IsRUFBRSxHQUFxQixFQUFFLElBQTBCO0lBQ3RGLElBQU0sSUFBSSxHQUF1QixvRUFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUVuRSxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxVQUFDLEdBQTRCO1FBQzlDLElBQUcsR0FBRyxFQUFDO1lBQ0wsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDdEIsT0FBTztTQUNSO1FBQ0QsZ0JBQWdCLEVBQUUsQ0FBQztJQUNyQixDQUFDLENBQUMsQ0FBQztJQUVILElBQU0sZ0JBQWdCLEdBQUc7UUFDdkIsSUFBTSxPQUFPLEdBQVUsRUFBRSxDQUFDO1FBQzFCLElBQU0sUUFBUSxHQUFXLEVBQUUsQ0FBQztRQUU1QixJQUFJLEdBQUcsR0FBUyxFQUFFLENBQUM7UUFDbkIsSUFBSSxJQUFJLEdBQVEsRUFBRSxDQUFDO1FBRW5CLElBQU0sUUFBUSxHQUFHLElBQUksK0NBQWUsQ0FBQyxzQ0FBc0MsRUFBRSxVQUFDLEtBQTJCLEVBQUUsUUFBZ0I7WUFDekgsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztRQUVILFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLFVBQUMsT0FBOEI7WUFDaEQsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFDLE1BQTJCO2dCQUMxQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO1lBQy9DLENBQUMsQ0FBQyxDQUFDO1lBRUgsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNwQixJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ1osQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFNLE9BQU8sR0FBRyxJQUFJLCtDQUFlLENBQUMsc0NBQXNDLEVBQUUsVUFBQyxLQUEyQixFQUFFLFFBQWdCO1lBQ3hILElBQUcsS0FBSyxFQUFDO2dCQUNQLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUN4QixPQUFPO2FBQ1I7WUFJRCxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsVUFBQyxPQUE4QjtZQUMvQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUMsTUFBMkI7Z0JBQzFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDOUMsQ0FBQyxDQUFDLENBQUM7WUFDSCxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRWxCLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFDWCxDQUFDLENBQUMsQ0FBQztRQUVILElBQU0sUUFBUSxHQUF1QixFQUFFLENBQUM7UUFFeEMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUV4QixRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsVUFBMkI7WUFDM0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztJQUVMLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQyxDQUFDO0FBRVkscUVBQU0sRUFBQyIsImZpbGUiOiIuL3NyYy9yb3V0ZXMvZGF0YS1hY2Nlc3MudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBFeHByZXNzIGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgKiBhcyBUZWRpb3VzIGZyb20gJ3RlZGlvdXMnO1xyXG5pbXBvcnQgeyBDb25uZWN0aW9uRmFjdG9yeSB9IGZyb20gJy4uL0Nvbm5lY3Rpb25GYWN0b3J5JztcclxuY29uc3Qgcm91dGVyID0gRXhwcmVzcy5Sb3V0ZXIoKTtcclxuXHJcbnJvdXRlci5nZXQoJy8nLCAocmVxOiBFeHByZXNzLlJlcXVlc3QsIHJlczogRXhwcmVzcy5SZXNwb25zZSwgbmV4dDogRXhwcmVzcy5OZXh0RnVuY3Rpb24pID0+IHtcclxuICBjb25zdCBjb25uOiBUZWRpb3VzLkNvbm5lY3Rpb24gPSBDb25uZWN0aW9uRmFjdG9yeS5nZXRDb25uZWN0aW9uKCk7XHJcbiAgXHJcbiAgY29ubi5vbignY29ubmVjdCcsIChlcnI6IFRlZGlvdXMuQ29ubmVjdGlvbkVycm9yKSA9PiB7XHJcbiAgICBpZihlcnIpe1xyXG4gICAgICByZXMuc2VuZChlcnIubWVzc2FnZSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGV4ZWN1dGVTdGF0ZW1lbnQoKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgZXhlY3V0ZVN0YXRlbWVudCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJlY29yZHM6IGFueVtdID0gW107XHJcbiAgICBjb25zdCByZWNvcmRzMiA6IGFueVtdID0gW107XHJcblxyXG4gICAgbGV0IHJvdyA6IGFueSA9IHt9O1xyXG4gICAgbGV0IHJvdzI6IGFueSA9IHt9O1xyXG5cclxuICAgIGNvbnN0IHJlcXVlc3QyID0gbmV3IFRlZGlvdXMuUmVxdWVzdCgnU0VMRUNUICogRlJPTSBCb2F0UmFjZS5kYm8uTV/jg5zjg7zjg4jjg6zjg7zjgrnloLQnLCAoZXJyb3I6IFRlZGlvdXMuUmVxdWVzdEVycm9yLCByb3dDb3VudDogbnVtYmVyKSA9PiB7XHJcbiAgICAgIHJlcy5zZW5kKHJlY29yZHMyKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJlcXVlc3QyLm9uKCdyb3cnLCAoY29sdW1uczogVGVkaW91cy5Db2x1bW5WYWx1ZVtdKSA9PiB7XHJcbiAgICAgIGNvbHVtbnMuZm9yRWFjaCgoY29sdW1uOiBUZWRpb3VzLkNvbHVtblZhbHVlKSA9PiB7XHJcbiAgICAgICAgcm93Mltjb2x1bW4ubWV0YWRhdGEuY29sTmFtZV0gPSBjb2x1bW4udmFsdWU7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcmVjb3JkczIucHVzaChyb3cyKTtcclxuICAgICAgcm93MiA9IHt9O1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgcmVxdWVzdCA9IG5ldyBUZWRpb3VzLlJlcXVlc3QoJ1NFTEVDVCAqIEZST00gQm9hdFJhY2UuZGJvLk1f44Oc44O844OI44Os44O844K144O8JywgKGVycm9yOiBUZWRpb3VzLlJlcXVlc3RFcnJvciwgcm93Q291bnQ6IG51bWJlcikgPT4ge1xyXG4gICAgICBpZihlcnJvcil7XHJcbiAgICAgICAgcmVzLnNlbmQoZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvL+OCs+ODjeOCr+OCt+ODp+ODs+OCkumWieOBmOOCi+OAglxyXG4gICAgICAvL2Nvbm4uY2xvc2UoKTtcclxuICAgICAgcmVzLnNlbmQocmVjb3Jkcyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXF1ZXN0Lm9uKCdyb3cnLCAoY29sdW1uczogVGVkaW91cy5Db2x1bW5WYWx1ZVtdKSA9PiB7XHJcbiAgICAgIGNvbHVtbnMuZm9yRWFjaCgoY29sdW1uOiBUZWRpb3VzLkNvbHVtblZhbHVlKSA9PiB7XHJcbiAgICAgICAgcm93W2NvbHVtbi5tZXRhZGF0YS5jb2xOYW1lXSA9IGNvbHVtbi52YWx1ZTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJlY29yZHMucHVzaChyb3cpO1xyXG5cclxuICAgICAgcm93ID0ge307XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCByZXF1ZXN0cyA6IFRlZGlvdXMuUmVxdWVzdFtdID0gW107XHJcbiAgICAvL3JlcXVlc3RzLnB1c2gocmVxdWVzdCk7XHJcbiAgICByZXF1ZXN0cy5wdXNoKHJlcXVlc3QyKTtcclxuXHJcbiAgICByZXF1ZXN0cy5mb3JFYWNoKChjdXJyZW50UmVxOiBUZWRpb3VzLlJlcXVlc3QpID0+IHtcclxuICAgICAgY29ubi5leGVjU3FsKGN1cnJlbnRSZXEpO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICB9O1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/routes/data-access.ts\n");

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