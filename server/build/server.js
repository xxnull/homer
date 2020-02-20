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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! multer */ \"multer\");\n/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(multer__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _routes_weatherRoute__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routes/weatherRoute */ \"./routes/weatherRoute.js\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\n/**\n * Start the app\n * @module init Starts Express, Middleware, Error handler and Routes\n * @returns NodeJs + Express App Object\n */\n\nvar index =\n/*#__PURE__*/\nfunction () {\n  function index() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, index);\n\n    this.init();\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(index, [{\n    key: \"init\",\n    value: function init() {\n      var app = express__WEBPACK_IMPORTED_MODULE_6___default()();\n      app.use(cors__WEBPACK_IMPORTED_MODULE_7___default()());\n      app.options(\"*\", cors__WEBPACK_IMPORTED_MODULE_7___default()());\n      app.use(function (req, res, next) {\n        res.header(\"Access-Control-Allow-Origin\", \"*\");\n        res.header(\"Access-Control-Allow-Headers\", \"Origin, X-Requested-With, Content-Type, Accept\");\n        next();\n      });\n      var weather = new _routes_weatherRoute__WEBPACK_IMPORTED_MODULE_5__[\"default\"]();\n      app.use(body_parser__WEBPACK_IMPORTED_MODULE_3___default.a.json());\n      app.use(body_parser__WEBPACK_IMPORTED_MODULE_3___default.a.urlencoded({\n        extended: true\n      }));\n      app.set(\"port\", process.env.PORT || 3001);\n      app.use(\"/weather\", weather);\n      app.get(\"/\", function (req, res, next) {\n        res.status(200).json({\n          message: \"Homer API Alive\",\n          data: \"{}\"\n        });\n      });\n      app.use(function (error, req, res, next) {\n        var status = error.statusCode || 500;\n        var message = error.message;\n        var data = error.data;\n        res.status(status).json({\n          message: message,\n          data: data\n        });\n      });\n      app.listen(app.get(\"port\"), function () {\n        console.log(\"Backend is ready and listening on port: \" + app.get(\"port\"));\n      });\n    }\n  }]);\n\n  return index;\n}();\n\nnew index();\n\n//# sourceURL=webpack:///./app.js?");

/***/ }),

/***/ "./config/api.json":
/*!*************************!*\
  !*** ./config/api.json ***!
  \*************************/
/*! exports provided: 0, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"[{\\\"api\\\":{\\\"weather\\\":\\\"http://api.openweathermap.org/data/2.5/forecast?\\\",\\\"uvindex\\\":\\\"http://api.openweathermap.org/data/2.5/uvi/forecast?\\\",\\\"appid\\\":\\\"e2cf92ad32fb29b4a749ccfccb64c9f3\\\"}}]\");\n\n//# sourceURL=webpack:///./config/api.json?");

/***/ }),

/***/ "./controllers/weatherController.js":
/*!******************************************!*\
  !*** ./controllers/weatherController.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return weatherController; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _config_api_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config/api.json */ \"./config/api.json\");\nvar _config_api_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../config/api.json */ \"./config/api.json\", 1);\n\n\n\n\n\n\n\nvar weatherController =\n/*#__PURE__*/\nfunction () {\n  function weatherController() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, weatherController);\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(weatherController, [{\n    key: \"weatherForecastHandler\",\n    value: function weatherForecastHandler(params) {\n      var _this = this;\n\n      this.list = [];\n      return this.getForecast(params.zipcode, params.country).then(function (e) {\n        _this.list.push({\n          city: e.forecast.city,\n          country: e.forecast.country,\n          list: _this.parseList(e.forecast.list, e.uvindex)\n        });\n      }).then(function (e) {\n        return _this.list;\n      });\n    }\n  }, {\n    key: \"parseList\",\n    value: function parseList(rawList, uvindex, country) {\n      var _this2 = this;\n\n      this.setUV(uvindex);\n      return rawList.map(function (e) {\n        console.log(e);\n\n        try {\n          var uv = _this2.getUV(e.dt_txt.split(\" \")[0]);\n\n          return {\n            date: e.dt_txt.split(\" \")[0],\n            time: e.dt_txt.split(\" \")[1],\n            timestamp: e.dt,\n            weather: e.weather[0].main,\n            main: e.main,\n            code: e.weather[0].icon,\n            uv: uv\n          };\n        } catch (error) {\n          console.error(error);\n        }\n      });\n    }\n  }, {\n    key: \"getUV\",\n    value: function getUV(date) {\n      var uvFiltered = this.uv.filter(function (e) {\n        if (date == e.date_iso.split(\"T\")[0]) {\n          return e.value;\n        }\n      });\n\n      if (!!uvFiltered[0]) {\n        return uvFiltered[0].value;\n      }\n    }\n  }, {\n    key: \"setUV\",\n    value: function setUV(uvindex) {\n      this.uv = uvindex;\n    }\n  }, {\n    key: \"getForecast\",\n    value: function () {\n      var _getForecast = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(\n      /*#__PURE__*/\n      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(zipcode, country) {\n        var weatherUrl, uvUrl, appId, forecast, uVIndex;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.prev = 0;\n                weatherUrl = \"http://api.openweathermap.org/data/2.5/forecast\";\n                uvUrl = \"http://api.openweathermap.org/data/2.5/uvi/forecast\";\n                appId = \"e2cf92ad32fb29b4a749ccfccb64c9f3\";\n                _context.next = 6;\n                return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get(\"\".concat(weatherUrl, \"?zip=\").concat(zipcode, \",\").concat(country, \"&APPID=\").concat(appId, \"&units=metric\"));\n\n              case 6:\n                forecast = _context.sent;\n                _context.next = 9;\n                return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get(\"\".concat(uvUrl, \"?appid=\").concat(appId, \"&lat=\").concat(forecast.data.city.coord.lat, \"&lon=\").concat(forecast.data.city.coord.lon, \"&cnt=5\"));\n\n              case 9:\n                uVIndex = _context.sent;\n                return _context.abrupt(\"return\", {\n                  forecast: forecast.data,\n                  uvindex: uVIndex.data\n                });\n\n              case 13:\n                _context.prev = 13;\n                _context.t0 = _context[\"catch\"](0);\n                console.error(_context.t0);\n\n              case 16:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, null, [[0, 13]]);\n      }));\n\n      function getForecast(_x, _x2) {\n        return _getForecast.apply(this, arguments);\n      }\n\n      return getForecast;\n    }()\n  }]);\n\n  return weatherController;\n}();\n\n\n\n//# sourceURL=webpack:///./controllers/weatherController.js?");

/***/ }),

/***/ "./routes/weatherRoute.js":
/*!********************************!*\
  !*** ./routes/weatherRoute.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return weatherRoute; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _controllers_weatherController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/weatherController */ \"./controllers/weatherController.js\");\n\n\nvar express = __webpack_require__(/*! express */ \"express\");\n\n\n\n\nvar weatherRoute = function weatherRoute() {\n  var _this = this;\n\n  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, weatherRoute);\n\n  this.router = Object(express__WEBPACK_IMPORTED_MODULE_1__[\"Router\"])();\n  this.weatherController = new _controllers_weatherController__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n  this.router.get(\"/:country/:zipcode\", function (req, res) {\n    _this.weatherController.weatherForecastHandler(req.params).then(function (e) {\n      res.json(e);\n    });\n  });\n  return this.router;\n};\n\n\n\n//# sourceURL=webpack:///./routes/weatherRoute.js?");

/***/ }),

/***/ "./start.js":
/*!******************!*\
  !*** ./start.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! @babel/register */ \"@babel/register\")({\n  \"extends\": './babel.config.js',\n  ignore: [/node_modules/],\n  presets: ['@babel/preset-env']\n});\n\nmodule.exports = __webpack_require__(/*! ./app.js */ \"./app.js\");\n\n//# sourceURL=webpack:///./start.js?");

/***/ }),

/***/ 0:
/*!************************!*\
  !*** multi ./start.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./start.js */\"./start.js\");\n\n\n//# sourceURL=webpack:///multi_./start.js?");

/***/ }),

/***/ "@babel/register":
/*!**********************************!*\
  !*** external "@babel/register" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/register\");\n\n//# sourceURL=webpack:///external_%22@babel/register%22?");

/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/asyncToGenerator\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/asyncToGenerator%22?");

/***/ }),

/***/ "@babel/runtime/helpers/classCallCheck":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/classCallCheck" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/classCallCheck\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/classCallCheck%22?");

/***/ }),

/***/ "@babel/runtime/helpers/createClass":
/*!*****************************************************!*\
  !*** external "@babel/runtime/helpers/createClass" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/createClass\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/createClass%22?");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/regenerator\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/regenerator%22?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "multer":
/*!*************************!*\
  !*** external "multer" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"multer\");\n\n//# sourceURL=webpack:///external_%22multer%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ })

/******/ });