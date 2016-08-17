module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/Users/satanworker/Desktop/fullstack_boilerplate";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var bootstrap_1 = __webpack_require__(3);
	var global_service_1 = __webpack_require__(4);
	var $server = new bootstrap_1.Server(new global_service_1.GlobalService());
	$server.bootstrap();


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {"use strict";
	var path = __webpack_require__(1);
	var APIHandler = (function () {
	    function APIHandler(globalService, db) {
	        this.globalService = globalService;
	        this.db = db;
	    }
	    APIHandler.prototype.routes = function () {
	        this.globalService.app.get('**', function (req, res, next) {
	            res.sendFile(path.resolve(__dirname + '/../../public/index.html'));
	        });
	    };
	    return APIHandler;
	}());
	exports.APIHandler = APIHandler;
	
	/* WEBPACK VAR INJECTION */}.call(exports, "server/api"))

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {"use strict";
	var path = __webpack_require__(1);
	var express = __webpack_require__(9);
	var bodyParser = __webpack_require__(6);
	var cookieParser = __webpack_require__(8);
	var api_service_1 = __webpack_require__(2);
	var http = __webpack_require__(10);
	var db_client_1 = __webpack_require__(5);
	var Server = (function () {
	    function Server(globalService) {
	        this.globalService = globalService;
	        this.dbClient = new db_client_1.DBClient(this.globalService);
	        this.API = new api_service_1.APIHandler(this.globalService, this.dbClient);
	    }
	    Server.prototype.bootstrap = function () {
	        this.app = express();
	        this.$http = http['Server'](this.app);
	        this.app.use(bodyParser.json());
	        this.app.use(cookieParser());
	        this.app.use(express.static(path.join(__dirname, '../public')));
	        this.globalService.app = this.app;
	        this.API.routes();
	        this.$http.listen(3000, function () {
	            console.log('nodemon test');
	        });
	    };
	    return Server;
	}());
	exports.Server = Server;
	
	/* WEBPACK VAR INJECTION */}.call(exports, "server"))

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	var GlobalService = (function () {
	    function GlobalService() {
	        this.test = 'empty';
	    }
	    return GlobalService;
	}());
	exports.GlobalService = GlobalService;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var rxjs_1 = __webpack_require__(11);
	var cassandra = __webpack_require__(7);
	var DBClient = (function () {
	    function DBClient(globalService) {
	        this.globalService = globalService;
	        this.client = this.globalService.DBClient;
	    }
	    DBClient.prototype.connect = function () {
	        this.client = new cassandra.Client({ contactPoints: ['127.0.0.1'] });
	        this.client.connect(function (err, result) {
	            if (err) {
	                return console.log('client connect error');
	            }
	        });
	    };
	    DBClient.prototype.login = function (email, password) {
	        var _this = this;
	        return new rxjs_1.Observable(function (observer) {
	            var query = 'SELECT * FROM denta.users WHERE email=? AND password=? ALLOW FILTERING';
	            _this.client.execute(query, [email, password], function (err, result) {
	                if (err) {
	                    return observer.error(err);
	                }
	                if (result) {
	                    observer.next(JSON.stringify(result.rows[0]));
	                }
	            });
	        });
	    };
	    DBClient.prototype.signup = function (email, password) {
	    };
	    return DBClient;
	}());
	exports.DBClient = DBClient;


/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("body-parser");

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("cassandra-driver");

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("cookie-parser");

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = require("http");

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = require("rxjs");

/***/ }
/******/ ]);
//# sourceMappingURL=app.js.map