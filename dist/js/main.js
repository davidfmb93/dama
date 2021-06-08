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
/******/ 	return __webpack_require__(__webpack_require__.s = "./modules/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./modules/dama.ts":
/*!*************************!*\
  !*** ./modules/dama.ts ***!
  \*************************/
/*! exports provided: dama */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dama", function() { return dama; });
/**
 *
 * Service Dama JS
 *
 *
 */
var dama = /** @class */ (function () {
    function dama() {
    }
    dama.prototype.welcome = function () {
        return 'welcome to DAMA';
    };
    dama.prototype.click = function (name, configuration) {
        if (name === void 0) { name = null; }
        var element = document.querySelectorAll('[dm-click=' + name + ']')[0];
        element && element.addEventListener("click", configuration, false);
        return 'render';
    };
    dama.prototype.hide = function (ids) {
        if (ids === void 0) { ids = []; }
        ids.map(function (id) {
            var element = document.getElementById(id);
            if (element)
                element.style.display = "none";
        });
        return 'render';
    };
    dama.prototype.show = function (id) {
        if (id === void 0) { id = null; }
        var element = document.getElementById(id);
        if (element)
            element.style.display = "block";
        return 'render';
    };
    return dama;
}());



/***/ }),

/***/ "./modules/datalayers.ts":
/*!*******************************!*\
  !*** ./modules/datalayers.ts ***!
  \*******************************/
/*! exports provided: datalayers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "datalayers", function() { return datalayers; });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var project = "base";
var layers = __webpack_require__("./src sync recursive ^\\.\\/.*\\/js\\/config\\/datalayers\\.ts$")("./" + project + "/js/config/datalayers.ts").layers;
window.dama = window.dama || {};
window.dama.info = 'Desarrollado en 150% por David Martinez';
window.dama.setDatalayer = function (select, label) {
    try {
        var dataLayerFound = layers.find(function (value) { return value.name == select; });
        typeof window != 'undefined' ? pushLayer(dataLayerFound, label) : console.log('%c Por favor configurar el Datalayer, no encontrado! ', 'background: #222; color: #bada55');
    }
    catch (error) {
        console.error('%c Datalayer Error! ', 'background: red; color: #bada55');
    }
};
function pushLayer(dataLayerFound, label) {
    var encrypted = dataLayerFound['encrypted'];
    delete dataLayerFound['name'];
    dataLayerFound['eventLabel'] = label ? (encrypted ? window.SHA256(label) : label) : dataLayerFound['eventLabel'];
    window.datalayer.push(dataLayerFound);
}
var datalayers = function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/];
}); }); };


/***/ }),

/***/ "./modules/index.ts":
/*!**************************!*\
  !*** ./modules/index.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var project = "";
// IMPORT SASS
__webpack_require__("./src sync recursive ^\\.\\/.*\\/sass\\/main\\.scss$")("./" + project + "/sass/main.scss");
// IMPORT ROUTES 
var routes = __webpack_require__("./src sync recursive ^\\.\\/.*\\/js\\/config\\/routes\\.ts$")("./" + project + "/js/config/routes.ts").routes;
var route = routes.find(function (item) { return window.location.pathname == item.path; });
__webpack_require__("./src sync recursive ^\\.\\/.*\\/js\\/services\\/general\\.ts$")("./" + project + "/js/services/general.ts").page();
__webpack_require__(/*! /modules/datalayers.ts */ "./modules/datalayers.ts");
route ? __webpack_require__("./src sync recursive ^\\.\\/.*\\.ts$")("./" + project + "/js/components/" + route.component + ".ts").page() : routeDontFound();
/**
 * dinamicRoutes
 *
 * This function generate the dinamic routes when yu send in the route :
 *
 * @returns
 */
function dinamicRoutes() {
    var otherRoutes = routes.filter(function (item) { return item.path.includes(':'); });
    var getRouteCurrent = location.pathname.split('/');
    var request = {};
    otherRoutes.map(function (route) { return request = getRouteCurrent[1] == (route.path.split('/'))[1] ? { 'status': true, 'route': route } : { 'status': false }; });
    return request;
}
/**
 * routeDontFound
 *
 * This function work when route wasn't found
 *
 * @returns
 */
function routeDontFound() {
    var dinamic = dinamicRoutes();
    dinamic.status && __webpack_require__("./src sync recursive ^\\.\\/.*\\.ts$")("./" + project + "/js/components/" + dinamic.route.component + ".ts").page();
}


/***/ }),

/***/ "./modules/petition.ts":
/*!*****************************!*\
  !*** ./modules/petition.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Petition = /** @class */ (function () {
    function Petition() {
    }
    Petition.prototype.get = function (url) {
        return new Promise(function (resolve, reject) {
            fetch(url)
                .then(function (response) { return response.json(); })
                .then(function (data) { return resolve(data); });
        });
    };
    Petition.prototype.post = function (url, data) {
        return new Promise(function (resolve, reject) {
            fetch(url, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then(function (res) { return res.json(); })
                .catch(function (error) { return reject(error); })
                .then(function (response) { return resolve(response); });
        });
    };
    Petition.prototype.put = function (url, data) {
        return new Promise(function (resolve, reject) {
            fetch(url, {
                method: "PUT",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then(function (res) { return res.json(); })
                .catch(function (error) { return reject(error); })
                .then(function (response) { return resolve(response); });
        });
    };
    return Petition;
}());
/* harmony default export */ __webpack_exports__["default"] = (Petition);


/***/ }),

/***/ "./src sync recursive ^\\.\\/.*\\.ts$":
/*!*******************************!*\
  !*** ./src sync ^\.\/.*\.ts$ ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./js/components/example.ts": "./src/js/components/example.ts",
	"./js/config/datalayers.ts": "./src/js/config/datalayers.ts",
	"./js/config/routes.ts": "./src/js/config/routes.ts",
	"./js/services/api.ts": "./src/js/services/api.ts",
	"./js/services/general.ts": "./src/js/services/general.ts",
	"./js/services/middleware.ts": "./src/js/services/middleware.ts"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src sync recursive ^\\.\\/.*\\.ts$";

/***/ }),

/***/ "./src sync recursive ^\\.\\/.*\\/js\\/config\\/datalayers\\.ts$":
/*!*******************************************************!*\
  !*** ./src sync ^\.\/.*\/js\/config\/datalayers\.ts$ ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./src sync recursive ^\\.\\/.*\\/js\\/config\\/datalayers\\.ts$";

/***/ }),

/***/ "./src sync recursive ^\\.\\/.*\\/js\\/config\\/routes\\.ts$":
/*!***************************************************!*\
  !*** ./src sync ^\.\/.*\/js\/config\/routes\.ts$ ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./src sync recursive ^\\.\\/.*\\/js\\/config\\/routes\\.ts$";

/***/ }),

/***/ "./src sync recursive ^\\.\\/.*\\/js\\/services\\/general\\.ts$":
/*!******************************************************!*\
  !*** ./src sync ^\.\/.*\/js\/services\/general\.ts$ ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./src sync recursive ^\\.\\/.*\\/js\\/services\\/general\\.ts$";

/***/ }),

/***/ "./src sync recursive ^\\.\\/.*\\/sass\\/main\\.scss$":
/*!*********************************************!*\
  !*** ./src sync ^\.\/.*\/sass\/main\.scss$ ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./src sync recursive ^\\.\\/.*\\/sass\\/main\\.scss$";

/***/ }),

/***/ "./src/js/components/example.ts":
/*!**************************************!*\
  !*** ./src/js/components/example.ts ***!
  \**************************************/
/*! exports provided: page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "page", function() { return page; });
/* harmony import */ var _modules_dama__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .../../../modules/dama */ "./modules/dama.ts");
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/api */ "./src/js/services/api.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


/**
 * Use Petition
 *
 * You must use pet.get(url) or pet.post(url, data)
 */
var api = new _services_api__WEBPACK_IMPORTED_MODULE_1__["apiService"]();
/**
 * Use Dama
 *
 * Dama has a lot of function to help to developer, this function you can get in the next url
 *
 */
var dm = new _modules_dama__WEBPACK_IMPORTED_MODULE_0__["dama"]();
var page = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        console.log('Api:', api.example());
        console.log('Dama:', dm.welcome());
        return [2 /*return*/];
    });
}); };


/***/ }),

/***/ "./src/js/config/datalayers.ts":
/*!*************************************!*\
  !*** ./src/js/config/datalayers.ts ***!
  \*************************************/
/*! exports provided: layers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layers", function() { return layers; });
/**
 * Call Datalayer
 *
 * Call datalayer you need register this like above, so you can call this with the next function when the event is clic
 *      dataDataLayers('name-selected', 'label-without-encrypt'), for example
 *      dataDataLayers('startGame', 'davidfmb93@gmail.com')
 */
var layers = [
    {
        'name': 'NAME',
        'event': 'trackEvent',
        'eventCategory': 'CATEGORY',
        'eventAction': 'ACTION',
        'eventLabel': 'LABEL',
        'encrypted': false // encrypted Label
    }
];


/***/ }),

/***/ "./src/js/config/routes.ts":
/*!*********************************!*\
  !*** ./src/js/config/routes.ts ***!
  \*********************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
var routes = [
    {
        name: 'index',
        path: '/',
        component: 'example'
    },
];


/***/ }),

/***/ "./src/js/services/api.ts":
/*!********************************!*\
  !*** ./src/js/services/api.ts ***!
  \********************************/
/*! exports provided: apiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiService", function() { return apiService; });
/* harmony import */ var _modules_petition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .../../../modules/petition */ "./modules/petition.ts");

/**
 * Use Petition
 *
 * You must use pet.get(url) or pet.post(url, data)
 */
var pet = new _modules_petition__WEBPACK_IMPORTED_MODULE_0__["default"]();
var apiService = /** @class */ (function () {
    function apiService() {
    }
    apiService.prototype.welcome = function () {
        return 'welcome to ApiService';
    };
    apiService.prototype.example = function () {
        return pet.get('http://api.150porciento.com/api/countries');
    };
    return apiService;
}());



/***/ }),

/***/ "./src/js/services/general.ts":
/*!************************************!*\
  !*** ./src/js/services/general.ts ***!
  \************************************/
/*! exports provided: page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "page", function() { return page; });
// import dama from "/modules/dama.js";
// import apiDrupal from "./api.js";
// const dm = new dama();
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// const api = new apiDrupal();
var page = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        /* ON LOAD */
        console.log('Dama: Desarrollado pro 150%');
        return [2 /*return*/];
    });
}); };


/***/ }),

/***/ "./src/js/services/middleware.ts":
/*!***************************************!*\
  !*** ./src/js/services/middleware.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var middleware = /** @class */ (function () {
    function middleware() {
    }
    return middleware;
}());
/* harmony default export */ __webpack_exports__["default"] = (middleware);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9kYW1hLnRzIiwid2VicGFjazovLy8uL21vZHVsZXMvZGF0YWxheWVycy50cyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2luZGV4LnRzIiwid2VicGFjazovLy8uL21vZHVsZXMvcGV0aXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjIHN5bmMgXlxcLlxcLy4qXFwudHMkIiwid2VicGFjazovLy8uL3NyYyBzeW5jIF5cXC5cXC8uKlxcL2pzXFwvY29uZmlnXFwvZGF0YWxheWVyc1xcLnRzJCIsIndlYnBhY2s6Ly8vLi9zcmMgc3luYyBeXFwuXFwvLipcXC9qc1xcL2NvbmZpZ1xcL3JvdXRlc1xcLnRzJCIsIndlYnBhY2s6Ly8vLi9zcmMgc3luYyBeXFwuXFwvLipcXC9qc1xcL3NlcnZpY2VzXFwvZ2VuZXJhbFxcLnRzJCIsIndlYnBhY2s6Ly8vLi9zcmMgc3luYyBeXFwuXFwvLipcXC9zYXNzXFwvbWFpblxcLnNjc3MkIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2V4YW1wbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbmZpZy9kYXRhbGF5ZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb25maWcvcm91dGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9qcy9zZXJ2aWNlcy9hcGkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3NlcnZpY2VzL2dlbmVyYWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3NlcnZpY2VzL21pZGRsZXdhcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFD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QixlQUFlLEVBQUUsVUFBVTtRQUMzQixhQUFhLEVBQUUsUUFBUTtRQUN2QixZQUFZLEVBQUUsT0FBTztRQUNyQixXQUFXLEVBQUUsS0FBSyxDQUFDLGtCQUFrQjtLQUN4QztDQUNKOzs7Ozs7Ozs7Ozs7O0FDaEJEO0FBQUE7QUFBTyxJQUFNLE1BQU0sR0FBRztJQUNsQjtRQUNJLElBQUksRUFBRSxPQUFPO1FBQ2IsSUFBSSxFQUFFLEdBQUc7UUFDVCxTQUFTLEVBQUUsU0FBUztLQUN2QjtDQUNKOzs7Ozs7Ozs7Ozs7O0FDTkQ7QUFBQTtBQUFBO0FBQW9EO0FBRXBEOzs7O0dBSUc7QUFDSCxJQUFNLEdBQUcsR0FBRyxJQUFJLHlEQUFRLEVBQUU7QUFFMUI7SUFBQTtJQU9BLENBQUM7SUFOQyw0QkFBTyxHQUFQO1FBQ0UsT0FBTyx1QkFBdUIsQ0FBQztJQUNqQyxDQUFDO0lBQ0QsNEJBQU8sR0FBUDtRQUNFLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQywyQ0FBMkMsQ0FBQztJQUM3RCxDQUFDO0lBQ0gsaUJBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7OztBQ2hCRDtBQUFBO0FBQUEsdUNBQXVDO0FBQ3ZDLG9DQUFvQztBQUNwQyx5QkFBeUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHekIsK0JBQStCO0FBQ3hCLElBQU0sSUFBSSxHQUFHOztRQUNoQixhQUFhO1FBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQzs7O0tBQzdDOzs7Ozs7Ozs7Ozs7O0FDVEQ7QUFBQTtJQUFBO0lBQ0EsQ0FBQztJQUFELGlCQUFDO0FBQUQsQ0FBQyIsImZpbGUiOiJqcy9tYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9tb2R1bGVzL2luZGV4LnRzXCIpO1xuIiwiLyoqXG4gKiBcbiAqIFNlcnZpY2UgRGFtYSBKU1xuICogXG4gKiBcbiAqL1xuXG5leHBvcnQgY2xhc3MgZGFtYSB7XG4gIHdlbGNvbWUoKXtcbiAgICByZXR1cm4gJ3dlbGNvbWUgdG8gREFNQSdcbiAgfVxuICBjbGljayhuYW1lOiBzdHJpbmcgPSBudWxsLCBjb25maWd1cmF0aW9uOiBhbnkpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RtLWNsaWNrPScgKyBuYW1lICsgJ10nKVswXVxuICAgIGVsZW1lbnQgJiYgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY29uZmlndXJhdGlvbiwgZmFsc2UpXG4gICAgcmV0dXJuICdyZW5kZXInO1xuICB9XG4gIGhpZGUoaWRzOiBhbnkgPSBbXSkge1xuICAgIGlkcy5tYXAoKGlkOiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZClcbiAgICAgIGlmIChlbGVtZW50KSBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9KVxuICAgIHJldHVybiAncmVuZGVyJztcbiAgfVxuICBzaG93KGlkOiBzdHJpbmcgPSBudWxsKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKVxuICAgIGlmIChlbGVtZW50KSBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgcmV0dXJuICdyZW5kZXInO1xuICB9XG4gIC8vIGhpZGVPbmUoaWQgPSBudWxsKSB7XG4gIC8vICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKVxuICAvLyAgIGlmIChlbGVtZW50KSBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgLy8gICByZXR1cm4gJ3JlbmRlcic7XG4gIC8vIH1cbiAgLy8gaGlkZVNob3coaWRIaWRlID0gbnVsbCwgaWRTaG93ID0gbnVsbCkge1xuICAvLyAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWRIaWRlKVxuICAvLyAgIGlmIChlbGVtZW50KSBlbGVtZW50LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZGlzcGxheTpub25lICFpbXBvcnRhbnRcIik7XG4gIC8vICAgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkU2hvdylcbiAgLy8gICBpZiAoZWxlbWVudCkgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImRpc3BsYXk6YmxvY2sgIWltcG9ydGFudFwiKTtcbiAgLy8gICByZXR1cm4gJ3JlbmRlcic7XG4gIC8vIH1cblxuICAvLyBwcmludChuYW1lLCB0ZXh0KSB7XG4gIC8vICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkbS1tb2RlbD0nICsgbmFtZSArICddJylbMF1cbiAgLy8gICBpZiAodHlwZW9mIGVsZW1lbnQgIT0gXCJ1bmRlZmluZWRcIiAmJiBlbGVtZW50ICE9IG51bGwpXG4gIC8vICAgICBlbGVtZW50LmlubmVySFRNTCA9IHRleHQ7XG4gIC8vICAgcmV0dXJuO1xuICAvLyB9XG5cbiAgLy8gcHJpbnQobmFtZSwgdGV4dCkge1xuICAvLyAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZG0tbW9kZWw9JyArIG5hbWUgKyAnXScpWzBdXG4gIC8vICAgaWYgKHR5cGVvZiBlbGVtZW50ICE9IFwidW5kZWZpbmVkXCIgJiYgZWxlbWVudCAhPSBudWxsKVxuICAvLyAgICAgZWxlbWVudC5pbm5lckhUTUwgPSB0ZXh0O1xuICAvLyAgIHJldHVybjtcbiAgLy8gfVxuXG4gIC8vIGdldElucHVudHMoaWRzID0gW10pIHtcbiAgLy8gICBjb25zdCBkYXRhID0ge31cbiAgLy8gICBpZHMubWFwKGlkID0+IHtcbiAgLy8gICAgIGxldCB2YWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSA/IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS52YWx1ZSA6IG51bGxcbiAgLy8gICAgIGlmICh2YWx1ZSkgZGF0YVtpZF0gPSB2YWx1ZVxuICAvLyAgIH0pXG4gIC8vICAgcmV0dXJuIGRhdGE7XG4gIC8vIH1cblxuXG4gIC8vICBnZXREYXRhRm9ybShmb3JtOiBhbnkpe1xuICAvLyAgICBsZXQgcmVxdWVzdCA9IHt9LCB2YWx1ZVxuICAvLyAgICBmb3JtLnRhcmdldC5mb3JFYWNoKGVsZW1lbnQgPT57XG4gIC8vICAgICAgY29uc29sZS5sb2coZWxlbWVudC50eXBlKVxuICAvLyAgICAgIC8vIHNpIGVzIHVuIHNlbGVjdCBtdWx0aXBsZSBndWFyZGFtb3MgbG9zIHZhbG9yZXMgc2kgbm8gZ3VhcmRhbW9zIGVsIGVsZW1lbnRvXG4gIC8vICAgICAgbGV0IGlzU2VsZWN0TXVsdGlwbGUgPSBlbGVtZW50Lmhhc0F0dHJpYnV0ZShcIm11bHRpcGxlXCIpXG4gIC8vICAgICAgdmFsdWUgPSBpc1NlbGVjdE11bHRpcGxlID8gWy4uLmVsZW1lbnQub3B0aW9uc10uZmlsdGVyKG9wdGlvbiA9PiBvcHRpb24uc2VsZWN0ZWQpLm1hcChvcHRpb24gPT4gb3B0aW9uLnZhbHVlKSA6IGVsZW1lbnQudmFsdWVcbiAgLy8gICAgICAvL1Blcm8gc2kgZXMgdW4gY2hla2JveCwgZ3VhcmRhbW9zIGVsIHZhbG9yIGRlbCBjaGVja2JveCwgcGVybyBwcmltZXJvIHZlcmlmaWNhbW9zIHNpIGVzIHVuIGNoZWNrYm94XG4gIC8vICAgICAgdmFsdWUgPSBlbGVtZW50LnR5cGUgPT0gXCJjaGVja2JveFwiID8gU3RyaW5nKGVsZW1lbnQuY2hlY2tlZCkgOiBlbGVtZW50LnZhbHVlXG4gIC8vICAgICAgY29uc29sZS5sb2coZWxlbWVudC5uYW1lLCBcIjpcIiwgdmFsdWUpXG4gIC8vICAgICAgLy9GaW5hbG1lbnRlIGd1YXJkYW1vcyBlbiBudWVzdHJvIG9iamV0b1xuICAvLyAgICAgIGlmKGVsZW1lbnQubmFtZSAmJiB2YWx1ZS5sZW5ndGgpIHJlcXVlc3RbZWxlbWVudC5uYW1lXSA9IHZhbHVlXG4gIC8vICAgIH0pXG4gIC8vICAgIHJldHVybiByZXF1ZXN0O1xuICAvLyAgfVxufSIsImNvbnN0IHByb2plY3QgPSBcImJhc2VcIlxuY29uc3QgeyBsYXllcnMgfSA9IHJlcXVpcmUoYC9zcmMvJHtwcm9qZWN0fS9qcy9jb25maWcvZGF0YWxheWVycy50c2ApXG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICAgICAgZGFtYTogYW55ICAgLFxuICAgICAgICBkYXRhbGF5ZXI6IGFueSAgXG4gICAgICAgIFNIQTI1NjogYW55LFxuICAgIH1cbn1cblxud2luZG93LmRhbWEgPSB3aW5kb3cuZGFtYSB8fCB7fTtcblxud2luZG93LmRhbWEuaW5mbyA9ICdEZXNhcnJvbGxhZG8gZW4gMTUwJSBwb3IgRGF2aWQgTWFydGluZXonXG5cbndpbmRvdy5kYW1hLnNldERhdGFsYXllciA9IChzZWxlY3Q6IHN0cmluZywgbGFiZWw6IHN0cmluZykgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGxldCBkYXRhTGF5ZXJGb3VuZCA9ICBsYXllcnMuZmluZCggKHZhbHVlOmFueSkgPT4gdmFsdWUubmFtZSA9PSBzZWxlY3QpO1xuICAgICAgICB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnID8gcHVzaExheWVyKGRhdGFMYXllckZvdW5kLCBsYWJlbCkgOiAgY29uc29sZS5sb2coJyVjIFBvciBmYXZvciBjb25maWd1cmFyIGVsIERhdGFsYXllciwgbm8gZW5jb250cmFkbyEgJywgJ2JhY2tncm91bmQ6ICMyMjI7IGNvbG9yOiAjYmFkYTU1Jyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignJWMgRGF0YWxheWVyIEVycm9yISAnLCAnYmFja2dyb3VuZDogcmVkOyBjb2xvcjogI2JhZGE1NScpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcHVzaExheWVyKGRhdGFMYXllckZvdW5kOiBhbnksIGxhYmVsOiBzdHJpbmcgKXtcbiAgICBjb25zdCBlbmNyeXB0ZWQ6IEJvb2xlYW4gPSBkYXRhTGF5ZXJGb3VuZFsnZW5jcnlwdGVkJ11cbiAgICBkZWxldGUgZGF0YUxheWVyRm91bmRbJ25hbWUnXVxuICAgIGRhdGFMYXllckZvdW5kWydldmVudExhYmVsJ10gID0gbGFiZWwgPyAoZW5jcnlwdGVkID8gd2luZG93LlNIQTI1NihsYWJlbCkgOiBsYWJlbCkgOiBkYXRhTGF5ZXJGb3VuZFsnZXZlbnRMYWJlbCddXG4gICAgd2luZG93LmRhdGFsYXllci5wdXNoKGRhdGFMYXllckZvdW5kKTtcbn1cblxuZXhwb3J0IGNvbnN0IGRhdGFsYXllcnMgPSBhc3luYyAoKSA9PiB7fVxuIiwiY29uc3QgcHJvamVjdDogc3RyaW5nID0gXCJcIlxuLy8gSU1QT1JUIFNBU1NcbnJlcXVpcmUoYC9zcmMvJHtwcm9qZWN0fS9zYXNzL21haW4uc2Nzc2ApXG4vLyBJTVBPUlQgUk9VVEVTIFxuY29uc3QgeyByb3V0ZXMgfSA9IHJlcXVpcmUoYC9zcmMvJHtwcm9qZWN0fS9qcy9jb25maWcvcm91dGVzLnRzYClcblxubGV0IHJvdXRlOiBhbnkgPSByb3V0ZXMuZmluZCgoaXRlbTogYW55KSA9PiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT0gaXRlbS5wYXRoKVxuXG5yZXF1aXJlKGAvc3JjLyR7cHJvamVjdH0vanMvc2VydmljZXMvZ2VuZXJhbC50c2ApLnBhZ2UoKVxucmVxdWlyZShgL21vZHVsZXMvZGF0YWxheWVycy50c2ApXG5yb3V0ZSA/IHJlcXVpcmUoYC9zcmMvJHtwcm9qZWN0fS9qcy9jb21wb25lbnRzL2AgKyByb3V0ZS5jb21wb25lbnQgKyAnLnRzJykucGFnZSgpIDogcm91dGVEb250Rm91bmQoKVxuLyoqXG4gKiBkaW5hbWljUm91dGVzXG4gKiBcbiAqIFRoaXMgZnVuY3Rpb24gZ2VuZXJhdGUgdGhlIGRpbmFtaWMgcm91dGVzIHdoZW4geXUgc2VuZCBpbiB0aGUgcm91dGUgOlxuICogXG4gKiBAcmV0dXJucyBcbiAqL1xuZnVuY3Rpb24gZGluYW1pY1JvdXRlcygpe1xuICBsZXQgb3RoZXJSb3V0ZXM6YW55ID0gcm91dGVzLmZpbHRlcigoaXRlbTogYW55KSA9PiBpdGVtLnBhdGguaW5jbHVkZXMoJzonKSlcbiAgbGV0IGdldFJvdXRlQ3VycmVudDphbnkgPSBsb2NhdGlvbi5wYXRobmFtZS5zcGxpdCgnLycpXG4gIGxldCByZXF1ZXN0Om9iamVjdCA9IHt9XG4gIG90aGVyUm91dGVzLm1hcCggKHJvdXRlOiBhbnkpID0+IHJlcXVlc3QgPSBnZXRSb3V0ZUN1cnJlbnRbMV0gPT0gKHJvdXRlLnBhdGguc3BsaXQoJy8nKSlbMV0gPyB7ICdzdGF0dXMnOiB0cnVlLCAncm91dGUnOiByb3V0ZX0gOiB7ICdzdGF0dXMnOiBmYWxzZSB9KVxuICByZXR1cm4gcmVxdWVzdFxufVxuXG4vKipcbiAqIHJvdXRlRG9udEZvdW5kXG4gKiBcbiAqIFRoaXMgZnVuY3Rpb24gd29yayB3aGVuIHJvdXRlIHdhc24ndCBmb3VuZFxuICogXG4gKiBAcmV0dXJucyBcbiAqL1xuZnVuY3Rpb24gcm91dGVEb250Rm91bmQoKXtcbiAgY29uc3QgZGluYW1pYzogYW55ID0gZGluYW1pY1JvdXRlcygpO1xuICBkaW5hbWljLnN0YXR1cyAmJiByZXF1aXJlKGAvc3JjLyR7cHJvamVjdH0vanMvY29tcG9uZW50cy8ke2RpbmFtaWMucm91dGUuY29tcG9uZW50fS50c2ApLnBhZ2UoKVxufSIsIlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGV0aXRpb24ge1xuIGdldCh1cmw6IHN0cmluZykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBmZXRjaCh1cmwpXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4gcmVzb2x2ZShkYXRhKSk7XG4gICAgfSk7XG4gIH1cbiAgXG4gIHBvc3QodXJsOiBzdHJpbmcsIGRhdGE6IG9iamVjdCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBmZXRjaCh1cmwsIHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIiwgLy8gb3IgJ1BVVCdcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksIC8vIGRhdGEgY2FuIGJlIGBzdHJpbmdgIG9yIHtvYmplY3R9IVxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiByZWplY3QoZXJyb3IpKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc29sdmUocmVzcG9uc2UpKTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1dCh1cmw6IHN0cmluZywgZGF0YTogb2JqZWN0KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGZldGNoKHVybCwge1xuICAgICAgICBtZXRob2Q6IFwiUFVUXCIsIC8vIG9yICdQVVQnXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLCAvLyBkYXRhIGNhbiBiZSBgc3RyaW5nYCBvciB7b2JqZWN0fSFcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gcmVqZWN0KGVycm9yKSlcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNvbHZlKHJlc3BvbnNlKSk7XG4gICAgfSk7XG4gIH1cbn1cbiAgIiwidmFyIG1hcCA9IHtcblx0XCIuL2pzL2NvbXBvbmVudHMvZXhhbXBsZS50c1wiOiBcIi4vc3JjL2pzL2NvbXBvbmVudHMvZXhhbXBsZS50c1wiLFxuXHRcIi4vanMvY29uZmlnL2RhdGFsYXllcnMudHNcIjogXCIuL3NyYy9qcy9jb25maWcvZGF0YWxheWVycy50c1wiLFxuXHRcIi4vanMvY29uZmlnL3JvdXRlcy50c1wiOiBcIi4vc3JjL2pzL2NvbmZpZy9yb3V0ZXMudHNcIixcblx0XCIuL2pzL3NlcnZpY2VzL2FwaS50c1wiOiBcIi4vc3JjL2pzL3NlcnZpY2VzL2FwaS50c1wiLFxuXHRcIi4vanMvc2VydmljZXMvZ2VuZXJhbC50c1wiOiBcIi4vc3JjL2pzL3NlcnZpY2VzL2dlbmVyYWwudHNcIixcblx0XCIuL2pzL3NlcnZpY2VzL21pZGRsZXdhcmUudHNcIjogXCIuL3NyYy9qcy9zZXJ2aWNlcy9taWRkbGV3YXJlLnRzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjIHN5bmMgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLipcXFxcLnRzJFwiOyIsImZ1bmN0aW9uIHdlYnBhY2tFbXB0eUNvbnRleHQocmVxKSB7XG5cdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHR0aHJvdyBlO1xufVxud2VicGFja0VtcHR5Q29udGV4dC5rZXlzID0gZnVuY3Rpb24oKSB7IHJldHVybiBbXTsgfTtcbndlYnBhY2tFbXB0eUNvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tFbXB0eUNvbnRleHQ7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tFbXB0eUNvbnRleHQ7XG53ZWJwYWNrRW1wdHlDb250ZXh0LmlkID0gXCIuL3NyYyBzeW5jIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qXFxcXC9qc1xcXFwvY29uZmlnXFxcXC9kYXRhbGF5ZXJzXFxcXC50cyRcIjsiLCJmdW5jdGlvbiB3ZWJwYWNrRW1wdHlDb250ZXh0KHJlcSkge1xuXHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0dGhyb3cgZTtcbn1cbndlYnBhY2tFbXB0eUNvbnRleHQua2V5cyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gW107IH07XG53ZWJwYWNrRW1wdHlDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrRW1wdHlDb250ZXh0O1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrRW1wdHlDb250ZXh0O1xud2VicGFja0VtcHR5Q29udGV4dC5pZCA9IFwiLi9zcmMgc3luYyByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKlxcXFwvanNcXFxcL2NvbmZpZ1xcXFwvcm91dGVzXFxcXC50cyRcIjsiLCJmdW5jdGlvbiB3ZWJwYWNrRW1wdHlDb250ZXh0KHJlcSkge1xuXHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0dGhyb3cgZTtcbn1cbndlYnBhY2tFbXB0eUNvbnRleHQua2V5cyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gW107IH07XG53ZWJwYWNrRW1wdHlDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrRW1wdHlDb250ZXh0O1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrRW1wdHlDb250ZXh0O1xud2VicGFja0VtcHR5Q29udGV4dC5pZCA9IFwiLi9zcmMgc3luYyByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKlxcXFwvanNcXFxcL3NlcnZpY2VzXFxcXC9nZW5lcmFsXFxcXC50cyRcIjsiLCJmdW5jdGlvbiB3ZWJwYWNrRW1wdHlDb250ZXh0KHJlcSkge1xuXHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0dGhyb3cgZTtcbn1cbndlYnBhY2tFbXB0eUNvbnRleHQua2V5cyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gW107IH07XG53ZWJwYWNrRW1wdHlDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrRW1wdHlDb250ZXh0O1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrRW1wdHlDb250ZXh0O1xud2VicGFja0VtcHR5Q29udGV4dC5pZCA9IFwiLi9zcmMgc3luYyByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKlxcXFwvc2Fzc1xcXFwvbWFpblxcXFwuc2NzcyRcIjsiLCJpbXBvcnQgeyBkYW1hIH0gZnJvbSBcIi4uLi8uLi8uLi9tb2R1bGVzL2RhbWFcIjtcbmltcG9ydCB7IGFwaVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvYXBpXCI7XG4vKipcbiAqIFVzZSBQZXRpdGlvblxuICogXG4gKiBZb3UgbXVzdCB1c2UgcGV0LmdldCh1cmwpIG9yIHBldC5wb3N0KHVybCwgZGF0YSkgXG4gKi9cbmNvbnN0IGFwaSA9IG5ldyBhcGlTZXJ2aWNlKCk7XG4vKipcbiAqIFVzZSBEYW1hXG4gKiBcbiAqIERhbWEgaGFzIGEgbG90IG9mIGZ1bmN0aW9uIHRvIGhlbHAgdG8gZGV2ZWxvcGVyLCB0aGlzIGZ1bmN0aW9uIHlvdSBjYW4gZ2V0IGluIHRoZSBuZXh0IHVybFxuICogXG4gKi9cbmNvbnN0IGRtID0gbmV3IGRhbWEoKTtcblxuZXhwb3J0IGNvbnN0IHBhZ2UgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdBcGk6JywgYXBpLmV4YW1wbGUoKSlcbiAgY29uc29sZS5sb2coJ0RhbWE6JywgZG0ud2VsY29tZSgpKVxufVxuXG5cblxuIiwiLyoqXG4gKiBDYWxsIERhdGFsYXllclxuICogXG4gKiBDYWxsIGRhdGFsYXllciB5b3UgbmVlZCByZWdpc3RlciB0aGlzIGxpa2UgYWJvdmUsIHNvIHlvdSBjYW4gY2FsbCB0aGlzIHdpdGggdGhlIG5leHQgZnVuY3Rpb24gd2hlbiB0aGUgZXZlbnQgaXMgY2xpY1xuICogICAgICBkYXRhRGF0YUxheWVycygnbmFtZS1zZWxlY3RlZCcsICdsYWJlbC13aXRob3V0LWVuY3J5cHQnKSwgZm9yIGV4YW1wbGVcbiAqICAgICAgZGF0YURhdGFMYXllcnMoJ3N0YXJ0R2FtZScsICdkYXZpZGZtYjkzQGdtYWlsLmNvbScpXG4gKi9cbmV4cG9ydCBjb25zdCBsYXllcnM6IG9iamVjdCA9IFtcbiAgICB7XG4gICAgICAgICduYW1lJzogJ05BTUUnLFxuICAgICAgICAnZXZlbnQnOiAndHJhY2tFdmVudCcsXG4gICAgICAgICdldmVudENhdGVnb3J5JzogJ0NBVEVHT1JZJywgLy8gQ2F0ZWdvcsOtYSBkZWwgZXZlbnRvIChTdHJpbmcpLiBSZXF1ZXJpZG8uXG4gICAgICAgICdldmVudEFjdGlvbic6ICdBQ1RJT04nLCAvLyBBY2Npw7NuIG8gc3ViY2F0ZWdvcsOtYSBkZWwgZXZlbnRvIChTdHJpbmcpLiBSZXF1ZXJpZG8uXG4gICAgICAgICdldmVudExhYmVsJzogJ0xBQkVMJywgLy8gRXRpcXVldGEgZGUgZGVzY3JpcGNpw7NuIGRlbCBldmVudG8gKFN0cmluZykuIFJlcXVlcmlkby5cbiAgICAgICAgJ2VuY3J5cHRlZCc6IGZhbHNlIC8vIGVuY3J5cHRlZCBMYWJlbFxuICAgIH1cbl1cblxuIiwiZXhwb3J0IGNvbnN0IHJvdXRlcyA9IFtcbiAgICB7XG4gICAgICAgIG5hbWU6ICdpbmRleCcsXG4gICAgICAgIHBhdGg6ICcvJyxcbiAgICAgICAgY29tcG9uZW50OiAnZXhhbXBsZSdcbiAgICB9LFxuXVxuIiwiaW1wb3J0ICBQZXRpdGlvbiAgZnJvbSBcIi4uLi8uLi8uLi9tb2R1bGVzL3BldGl0aW9uXCI7XG5cbi8qKlxuICogVXNlIFBldGl0aW9uXG4gKiBcbiAqIFlvdSBtdXN0IHVzZSBwZXQuZ2V0KHVybCkgb3IgcGV0LnBvc3QodXJsLCBkYXRhKSBcbiAqL1xuY29uc3QgcGV0ID0gbmV3IFBldGl0aW9uKClcblxuZXhwb3J0IGNsYXNzIGFwaVNlcnZpY2Uge1xuICB3ZWxjb21lKCl7XG4gICAgcmV0dXJuICd3ZWxjb21lIHRvIEFwaVNlcnZpY2UnO1xuICB9XG4gIGV4YW1wbGUoKXtcbiAgICByZXR1cm4gcGV0LmdldCgnaHR0cDovL2FwaS4xNTBwb3JjaWVudG8uY29tL2FwaS9jb3VudHJpZXMnKVxuICB9XG59IiwiLy8gaW1wb3J0IGRhbWEgZnJvbSBcIi9tb2R1bGVzL2RhbWEuanNcIjtcbi8vIGltcG9ydCBhcGlEcnVwYWwgZnJvbSBcIi4vYXBpLmpzXCI7XG4vLyBjb25zdCBkbSA9IG5ldyBkYW1hKCk7XG5cblxuLy8gY29uc3QgYXBpID0gbmV3IGFwaURydXBhbCgpO1xuZXhwb3J0IGNvbnN0IHBhZ2UgPSBhc3luYyAoKSA9PiB7XG4gICAgLyogT04gTE9BRCAqL1xuICAgIGNvbnNvbGUubG9nKCdEYW1hOiBEZXNhcnJvbGxhZG8gcHJvIDE1MCUnKVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIG1pZGRsZXdhcmUgeyAvLyBqdXN0IGFkZCBcImRlZmF1bHRcIlxufSJdLCJzb3VyY2VSb290IjoiIn0=