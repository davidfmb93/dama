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
// require(`/src/sass/main.scss`)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9kYW1hLnRzIiwid2VicGFjazovLy8uL21vZHVsZXMvZGF0YWxheWVycy50cyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2luZGV4LnRzIiwid2VicGFjazovLy8uL21vZHVsZXMvcGV0aXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjIHN5bmMgXlxcLlxcLy4qXFwudHMkIiwid2VicGFjazovLy8uL3NyYyBzeW5jIF5cXC5cXC8uKlxcL2pzXFwvY29uZmlnXFwvZGF0YWxheWVyc1xcLnRzJCIsIndlYnBhY2s6Ly8vLi9zcmMgc3luYyBeXFwuXFwvLipcXC9qc1xcL2NvbmZpZ1xcL3JvdXRlc1xcLnRzJCIsIndlYnBhY2s6Ly8vLi9zcmMgc3luYyBeXFwuXFwvLipcXC9qc1xcL3NlcnZpY2VzXFwvZ2VuZXJhbFxcLnRzJCIsIndlYnBhY2s6Ly8vLi9zcmMgc3luYyBeXFwuXFwvLipcXC9zYXNzXFwvbWFpblxcLnNjc3MkIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2V4YW1wbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbmZpZy9kYXRhbGF5ZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb25maWcvcm91dGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9qcy9zZXJ2aWNlcy9hcGkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3NlcnZpY2VzL2dlbmVyYWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3NlcnZpY2VzL21pZGRsZXdhcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7Ozs7O0dBS0c7QUFFSDtJQUFBO0lBeUVBLENBQUM7SUF4RUMsc0JBQU8sR0FBUDtRQUNFLE9BQU8saUJBQWlCO0lBQzFCLENBQUM7SUFDRCxvQkFBSyxHQUFMLFVBQU0sSUFBbUIsRUFBRSxhQUFrQjtRQUF2QyxrQ0FBbUI7UUFDdkIsSUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFlBQVksR0FBRyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZFLE9BQU8sSUFBSSxPQUFPLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxLQUFLLENBQUM7UUFDbEUsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUNELG1CQUFJLEdBQUosVUFBSyxHQUFhO1FBQWIsOEJBQWE7UUFDaEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFDLEVBQU87WUFDZCxJQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQztZQUMzQyxJQUFJLE9BQU87Z0JBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBQzlDLENBQUMsQ0FBQztRQUNGLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFDRCxtQkFBSSxHQUFKLFVBQUssRUFBaUI7UUFBakIsOEJBQWlCO1FBQ3BCLElBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDO1FBQzNDLElBQUksT0FBTztZQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUM3QyxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBcURILFdBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEZELElBQU0sT0FBTyxHQUFHLE1BQU07QUFDZCxVQUFNLEdBQUssdUZBQVEsT0FBUSxPQUFPLDZCQUEwQixDQUFDLE9BQXZELENBQXVEO0FBVXJFLE1BQU0sQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7QUFFaEMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcseUNBQXlDO0FBRTVELE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLFVBQUMsTUFBYyxFQUFFLEtBQWE7SUFDckQsSUFBSTtRQUNBLElBQUksY0FBYyxHQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUUsVUFBQyxLQUFTLElBQUssWUFBSyxDQUFDLElBQUksSUFBSSxNQUFNLEVBQXBCLENBQW9CLENBQUMsQ0FBQztRQUN4RSxPQUFPLE1BQU0sSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsdURBQXVELEVBQUUsa0NBQWtDLENBQUMsQ0FBQztLQUMvSztJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ1osT0FBTyxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsRUFBRSxpQ0FBaUMsQ0FBQyxDQUFDO0tBQzVFO0FBQ0wsQ0FBQztBQUVELFNBQVMsU0FBUyxDQUFDLGNBQW1CLEVBQUUsS0FBYTtJQUNqRCxJQUFNLFNBQVMsR0FBWSxjQUFjLENBQUMsV0FBVyxDQUFDO0lBQ3RELE9BQU8sY0FBYyxDQUFDLE1BQU0sQ0FBQztJQUM3QixjQUFjLENBQUMsWUFBWSxDQUFDLEdBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUM7SUFDakgsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDMUMsQ0FBQztBQUVNLElBQU0sVUFBVSxHQUFHOztTQUFjOzs7Ozs7Ozs7Ozs7QUMvQnhDLElBQU0sT0FBTyxHQUFXLEVBQUU7QUFDMUIsY0FBYztBQUNkLDRFQUFRLE9BQVEsT0FBTyxvQkFBaUIsQ0FBQztBQUN6QyxpQ0FBaUM7QUFDakMsaUJBQWlCO0FBQ1QsVUFBTSxHQUFLLG1GQUFRLE9BQVEsT0FBTyx5QkFBc0IsQ0FBQyxPQUFuRCxDQUFtRDtBQUVqRSxJQUFJLEtBQUssR0FBUSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBUyxJQUFLLGFBQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQXJDLENBQXFDLENBQUM7QUFFbEYsc0ZBQVEsT0FBUSxPQUFPLDRCQUF5QixDQUFDLENBQUMsSUFBSSxFQUFFO0FBQ3hELG1CQUFPLENBQUMsdURBQXdCLENBQUM7QUFDakMsS0FBSyxDQUFDLENBQUMsQ0FBQyw0REFBUSxPQUFRLE9BQU8sb0JBQWlCLEdBQUcsS0FBSyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsY0FBYyxFQUFFO0FBQ3JHOzs7Ozs7R0FNRztBQUNILFNBQVMsYUFBYTtJQUNwQixJQUFJLFdBQVcsR0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQUMsSUFBUyxJQUFLLFdBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUF2QixDQUF1QixDQUFDO0lBQzNFLElBQUksZUFBZSxHQUFPLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUN0RCxJQUFJLE9BQU8sR0FBVSxFQUFFO0lBQ3ZCLFdBQVcsQ0FBQyxHQUFHLENBQUUsVUFBQyxLQUFVLElBQUssY0FBTyxHQUFHLGVBQWUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxFQUFwSCxDQUFvSCxDQUFDO0lBQ3RKLE9BQU8sT0FBTztBQUNoQixDQUFDO0FBRUQ7Ozs7OztHQU1HO0FBQ0gsU0FBUyxjQUFjO0lBQ3JCLElBQU0sT0FBTyxHQUFRLGFBQWEsRUFBRSxDQUFDO0lBQ3JDLE9BQU8sQ0FBQyxNQUFNLElBQUksNERBQVEsT0FBUSxPQUFPLHVCQUFrQixPQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsUUFBSyxDQUFDLENBQUMsSUFBSSxFQUFFO0FBQ2pHLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNwQ0Q7QUFBQTtJQUFBO0lBc0NBLENBQUM7SUFyQ0Esc0JBQUcsR0FBSCxVQUFJLEdBQVc7UUFDWixPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDakMsS0FBSyxDQUFDLEdBQUcsQ0FBQztpQkFDUCxJQUFJLENBQUMsVUFBQyxRQUFRLElBQUssZUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQztpQkFDbkMsSUFBSSxDQUFDLFVBQUMsSUFBSSxJQUFLLGNBQU8sQ0FBQyxJQUFJLENBQUMsRUFBYixDQUFhLENBQUMsQ0FBQztRQUNuQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCx1QkFBSSxHQUFKLFVBQUssR0FBVyxFQUFFLElBQVk7UUFDNUIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ2pDLEtBQUssQ0FBQyxHQUFHLEVBQUU7Z0JBQ1QsTUFBTSxFQUFFLE1BQU07Z0JBQ2QsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO2dCQUMxQixPQUFPLEVBQUU7b0JBQ1AsY0FBYyxFQUFFLGtCQUFrQjtpQkFDbkM7YUFDRixDQUFDO2lCQUNDLElBQUksQ0FBQyxVQUFDLEdBQUcsSUFBSyxVQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO2lCQUN6QixLQUFLLENBQUMsVUFBQyxLQUFLLElBQUssYUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFiLENBQWEsQ0FBQztpQkFDL0IsSUFBSSxDQUFDLFVBQUMsUUFBUSxJQUFLLGNBQU8sQ0FBQyxRQUFRLENBQUMsRUFBakIsQ0FBaUIsQ0FBQyxDQUFDO1FBQzNDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHNCQUFHLEdBQUgsVUFBSSxHQUFXLEVBQUUsSUFBWTtRQUMzQixPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDakMsS0FBSyxDQUFDLEdBQUcsRUFBRTtnQkFDVCxNQUFNLEVBQUUsS0FBSztnQkFDYixJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7Z0JBQzFCLE9BQU8sRUFBRTtvQkFDUCxjQUFjLEVBQUUsa0JBQWtCO2lCQUNuQzthQUNGLENBQUM7aUJBQ0MsSUFBSSxDQUFDLFVBQUMsR0FBRyxJQUFLLFVBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7aUJBQ3pCLEtBQUssQ0FBQyxVQUFDLEtBQUssSUFBSyxhQUFNLENBQUMsS0FBSyxDQUFDLEVBQWIsQ0FBYSxDQUFDO2lCQUMvQixJQUFJLENBQUMsVUFBQyxRQUFRLElBQUssY0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFqQixDQUFpQixDQUFDLENBQUM7UUFDM0MsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0gsZUFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7QUN2Q0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEOzs7Ozs7Ozs7OztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLFdBQVc7QUFDbEQ7QUFDQTtBQUNBLDJGOzs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsV0FBVztBQUNsRDtBQUNBO0FBQ0EsdUY7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxXQUFXO0FBQ2xEO0FBQ0E7QUFDQSwwRjs7Ozs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLFdBQVc7QUFDbEQ7QUFDQTtBQUNBLGdGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUjhDO0FBQ0Q7QUFDN0M7Ozs7R0FJRztBQUNILElBQU0sR0FBRyxHQUFHLElBQUksd0RBQVUsRUFBRSxDQUFDO0FBQzdCOzs7OztHQUtHO0FBQ0gsSUFBTSxFQUFFLEdBQUcsSUFBSSxrREFBSSxFQUFFLENBQUM7QUFFZixJQUFNLElBQUksR0FBRzs7UUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQzs7O0tBQ25DOzs7Ozs7Ozs7Ozs7O0FDbkJEO0FBQUE7QUFBQTs7Ozs7O0dBTUc7QUFDSSxJQUFNLE1BQU0sR0FBVztJQUMxQjtRQUNJLE1BQU0sRUFBRSxNQUFNO1FBQ2QsT0FBTyxFQUFFLFlBQVk7UUFDckIsZUFBZSxFQUFFLFVBQVU7UUFDM0IsYUFBYSxFQUFFLFFBQVE7UUFDdkIsWUFBWSxFQUFFLE9BQU87UUFDckIsV0FBVyxFQUFFLEtBQUssQ0FBQyxrQkFBa0I7S0FDeEM7Q0FDSjs7Ozs7Ozs7Ozs7OztBQ2hCRDtBQUFBO0FBQU8sSUFBTSxNQUFNLEdBQUc7SUFDbEI7UUFDSSxJQUFJLEVBQUUsT0FBTztRQUNiLElBQUksRUFBRSxHQUFHO1FBQ1QsU0FBUyxFQUFFLFNBQVM7S0FDdkI7Q0FDSjs7Ozs7Ozs7Ozs7OztBQ05EO0FBQUE7QUFBQTtBQUFvRDtBQUVwRDs7OztHQUlHO0FBQ0gsSUFBTSxHQUFHLEdBQUcsSUFBSSx5REFBUSxFQUFFO0FBRTFCO0lBQUE7SUFPQSxDQUFDO0lBTkMsNEJBQU8sR0FBUDtRQUNFLE9BQU8sdUJBQXVCLENBQUM7SUFDakMsQ0FBQztJQUNELDRCQUFPLEdBQVA7UUFDRSxPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUMsMkNBQTJDLENBQUM7SUFDN0QsQ0FBQztJQUNILGlCQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUNoQkQ7QUFBQTtBQUFBLHVDQUF1QztBQUN2QyxvQ0FBb0M7QUFDcEMseUJBQXlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR3pCLCtCQUErQjtBQUN4QixJQUFNLElBQUksR0FBRzs7UUFDaEIsYUFBYTtRQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUM7OztLQUM3Qzs7Ozs7Ozs7Ozs7OztBQ1REO0FBQUE7SUFBQTtJQUNBLENBQUM7SUFBRCxpQkFBQztBQUFELENBQUMiLCJmaWxlIjoianMvbWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vbW9kdWxlcy9pbmRleC50c1wiKTtcbiIsIi8qKlxyXG4gKiBcclxuICogU2VydmljZSBEYW1hIEpTXHJcbiAqIFxyXG4gKiBcclxuICovXHJcblxyXG5leHBvcnQgY2xhc3MgZGFtYSB7XHJcbiAgd2VsY29tZSgpe1xyXG4gICAgcmV0dXJuICd3ZWxjb21lIHRvIERBTUEnXHJcbiAgfVxyXG4gIGNsaWNrKG5hbWU6IHN0cmluZyA9IG51bGwsIGNvbmZpZ3VyYXRpb246IGFueSkge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkbS1jbGljaz0nICsgbmFtZSArICddJylbMF1cclxuICAgIGVsZW1lbnQgJiYgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY29uZmlndXJhdGlvbiwgZmFsc2UpXHJcbiAgICByZXR1cm4gJ3JlbmRlcic7XHJcbiAgfVxyXG4gIGhpZGUoaWRzOiBhbnkgPSBbXSkge1xyXG4gICAgaWRzLm1hcCgoaWQ6IGFueSkgPT4ge1xyXG4gICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpXHJcbiAgICAgIGlmIChlbGVtZW50KSBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIH0pXHJcbiAgICByZXR1cm4gJ3JlbmRlcic7XHJcbiAgfVxyXG4gIHNob3coaWQ6IHN0cmluZyA9IG51bGwpIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZClcclxuICAgIGlmIChlbGVtZW50KSBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICByZXR1cm4gJ3JlbmRlcic7XHJcbiAgfVxyXG4gIC8vIGhpZGVPbmUoaWQgPSBudWxsKSB7XHJcbiAgLy8gICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpXHJcbiAgLy8gICBpZiAoZWxlbWVudCkgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgLy8gICByZXR1cm4gJ3JlbmRlcic7XHJcbiAgLy8gfVxyXG4gIC8vIGhpZGVTaG93KGlkSGlkZSA9IG51bGwsIGlkU2hvdyA9IG51bGwpIHtcclxuICAvLyAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWRIaWRlKVxyXG4gIC8vICAgaWYgKGVsZW1lbnQpIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJkaXNwbGF5Om5vbmUgIWltcG9ydGFudFwiKTtcclxuICAvLyAgIGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZFNob3cpXHJcbiAgLy8gICBpZiAoZWxlbWVudCkgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImRpc3BsYXk6YmxvY2sgIWltcG9ydGFudFwiKTtcclxuICAvLyAgIHJldHVybiAncmVuZGVyJztcclxuICAvLyB9XHJcblxyXG4gIC8vIHByaW50KG5hbWUsIHRleHQpIHtcclxuICAvLyAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZG0tbW9kZWw9JyArIG5hbWUgKyAnXScpWzBdXHJcbiAgLy8gICBpZiAodHlwZW9mIGVsZW1lbnQgIT0gXCJ1bmRlZmluZWRcIiAmJiBlbGVtZW50ICE9IG51bGwpXHJcbiAgLy8gICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gdGV4dDtcclxuICAvLyAgIHJldHVybjtcclxuICAvLyB9XHJcblxyXG4gIC8vIHByaW50KG5hbWUsIHRleHQpIHtcclxuICAvLyAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZG0tbW9kZWw9JyArIG5hbWUgKyAnXScpWzBdXHJcbiAgLy8gICBpZiAodHlwZW9mIGVsZW1lbnQgIT0gXCJ1bmRlZmluZWRcIiAmJiBlbGVtZW50ICE9IG51bGwpXHJcbiAgLy8gICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gdGV4dDtcclxuICAvLyAgIHJldHVybjtcclxuICAvLyB9XHJcblxyXG4gIC8vIGdldElucHVudHMoaWRzID0gW10pIHtcclxuICAvLyAgIGNvbnN0IGRhdGEgPSB7fVxyXG4gIC8vICAgaWRzLm1hcChpZCA9PiB7XHJcbiAgLy8gICAgIGxldCB2YWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSA/IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS52YWx1ZSA6IG51bGxcclxuICAvLyAgICAgaWYgKHZhbHVlKSBkYXRhW2lkXSA9IHZhbHVlXHJcbiAgLy8gICB9KVxyXG4gIC8vICAgcmV0dXJuIGRhdGE7XHJcbiAgLy8gfVxyXG5cclxuXHJcbiAgLy8gIGdldERhdGFGb3JtKGZvcm06IGFueSl7XHJcbiAgLy8gICAgbGV0IHJlcXVlc3QgPSB7fSwgdmFsdWVcclxuICAvLyAgICBmb3JtLnRhcmdldC5mb3JFYWNoKGVsZW1lbnQgPT57XHJcbiAgLy8gICAgICBjb25zb2xlLmxvZyhlbGVtZW50LnR5cGUpXHJcbiAgLy8gICAgICAvLyBzaSBlcyB1biBzZWxlY3QgbXVsdGlwbGUgZ3VhcmRhbW9zIGxvcyB2YWxvcmVzIHNpIG5vIGd1YXJkYW1vcyBlbCBlbGVtZW50b1xyXG4gIC8vICAgICAgbGV0IGlzU2VsZWN0TXVsdGlwbGUgPSBlbGVtZW50Lmhhc0F0dHJpYnV0ZShcIm11bHRpcGxlXCIpXHJcbiAgLy8gICAgICB2YWx1ZSA9IGlzU2VsZWN0TXVsdGlwbGUgPyBbLi4uZWxlbWVudC5vcHRpb25zXS5maWx0ZXIob3B0aW9uID0+IG9wdGlvbi5zZWxlY3RlZCkubWFwKG9wdGlvbiA9PiBvcHRpb24udmFsdWUpIDogZWxlbWVudC52YWx1ZVxyXG4gIC8vICAgICAgLy9QZXJvIHNpIGVzIHVuIGNoZWtib3gsIGd1YXJkYW1vcyBlbCB2YWxvciBkZWwgY2hlY2tib3gsIHBlcm8gcHJpbWVybyB2ZXJpZmljYW1vcyBzaSBlcyB1biBjaGVja2JveFxyXG4gIC8vICAgICAgdmFsdWUgPSBlbGVtZW50LnR5cGUgPT0gXCJjaGVja2JveFwiID8gU3RyaW5nKGVsZW1lbnQuY2hlY2tlZCkgOiBlbGVtZW50LnZhbHVlXHJcbiAgLy8gICAgICBjb25zb2xlLmxvZyhlbGVtZW50Lm5hbWUsIFwiOlwiLCB2YWx1ZSlcclxuICAvLyAgICAgIC8vRmluYWxtZW50ZSBndWFyZGFtb3MgZW4gbnVlc3RybyBvYmpldG9cclxuICAvLyAgICAgIGlmKGVsZW1lbnQubmFtZSAmJiB2YWx1ZS5sZW5ndGgpIHJlcXVlc3RbZWxlbWVudC5uYW1lXSA9IHZhbHVlXHJcbiAgLy8gICAgfSlcclxuICAvLyAgICByZXR1cm4gcmVxdWVzdDtcclxuICAvLyAgfVxyXG59IiwiY29uc3QgcHJvamVjdCA9IFwiYmFzZVwiXHJcbmNvbnN0IHsgbGF5ZXJzIH0gPSByZXF1aXJlKGAvc3JjLyR7cHJvamVjdH0vanMvY29uZmlnL2RhdGFsYXllcnMudHNgKVxyXG5cclxuZGVjbGFyZSBnbG9iYWwge1xyXG4gICAgaW50ZXJmYWNlIFdpbmRvdyB7XHJcbiAgICAgICAgZGFtYTogYW55ICAgLFxyXG4gICAgICAgIGRhdGFsYXllcjogYW55ICBcclxuICAgICAgICBTSEEyNTY6IGFueSxcclxuICAgIH1cclxufVxyXG5cclxud2luZG93LmRhbWEgPSB3aW5kb3cuZGFtYSB8fCB7fTtcclxuXHJcbndpbmRvdy5kYW1hLmluZm8gPSAnRGVzYXJyb2xsYWRvIGVuIDE1MCUgcG9yIERhdmlkIE1hcnRpbmV6J1xyXG5cclxud2luZG93LmRhbWEuc2V0RGF0YWxheWVyID0gKHNlbGVjdDogc3RyaW5nLCBsYWJlbDogc3RyaW5nKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGxldCBkYXRhTGF5ZXJGb3VuZCA9ICBsYXllcnMuZmluZCggKHZhbHVlOmFueSkgPT4gdmFsdWUubmFtZSA9PSBzZWxlY3QpO1xyXG4gICAgICAgIHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgPyBwdXNoTGF5ZXIoZGF0YUxheWVyRm91bmQsIGxhYmVsKSA6ICBjb25zb2xlLmxvZygnJWMgUG9yIGZhdm9yIGNvbmZpZ3VyYXIgZWwgRGF0YWxheWVyLCBubyBlbmNvbnRyYWRvISAnLCAnYmFja2dyb3VuZDogIzIyMjsgY29sb3I6ICNiYWRhNTUnKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignJWMgRGF0YWxheWVyIEVycm9yISAnLCAnYmFja2dyb3VuZDogcmVkOyBjb2xvcjogI2JhZGE1NScpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBwdXNoTGF5ZXIoZGF0YUxheWVyRm91bmQ6IGFueSwgbGFiZWw6IHN0cmluZyApe1xyXG4gICAgY29uc3QgZW5jcnlwdGVkOiBCb29sZWFuID0gZGF0YUxheWVyRm91bmRbJ2VuY3J5cHRlZCddXHJcbiAgICBkZWxldGUgZGF0YUxheWVyRm91bmRbJ25hbWUnXVxyXG4gICAgZGF0YUxheWVyRm91bmRbJ2V2ZW50TGFiZWwnXSAgPSBsYWJlbCA/IChlbmNyeXB0ZWQgPyB3aW5kb3cuU0hBMjU2KGxhYmVsKSA6IGxhYmVsKSA6IGRhdGFMYXllckZvdW5kWydldmVudExhYmVsJ11cclxuICAgIHdpbmRvdy5kYXRhbGF5ZXIucHVzaChkYXRhTGF5ZXJGb3VuZCk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBkYXRhbGF5ZXJzID0gYXN5bmMgKCkgPT4ge31cclxuIiwiY29uc3QgcHJvamVjdDogc3RyaW5nID0gXCJcIlxyXG4vLyBJTVBPUlQgU0FTU1xyXG5yZXF1aXJlKGAvc3JjLyR7cHJvamVjdH0vc2Fzcy9tYWluLnNjc3NgKVxyXG4vLyByZXF1aXJlKGAvc3JjL3Nhc3MvbWFpbi5zY3NzYClcclxuLy8gSU1QT1JUIFJPVVRFUyBcclxuY29uc3QgeyByb3V0ZXMgfSA9IHJlcXVpcmUoYC9zcmMvJHtwcm9qZWN0fS9qcy9jb25maWcvcm91dGVzLnRzYClcclxuXHJcbmxldCByb3V0ZTogYW55ID0gcm91dGVzLmZpbmQoKGl0ZW06IGFueSkgPT4gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09IGl0ZW0ucGF0aClcclxuXHJcbnJlcXVpcmUoYC9zcmMvJHtwcm9qZWN0fS9qcy9zZXJ2aWNlcy9nZW5lcmFsLnRzYCkucGFnZSgpXHJcbnJlcXVpcmUoYC9tb2R1bGVzL2RhdGFsYXllcnMudHNgKVxyXG5yb3V0ZSA/IHJlcXVpcmUoYC9zcmMvJHtwcm9qZWN0fS9qcy9jb21wb25lbnRzL2AgKyByb3V0ZS5jb21wb25lbnQgKyAnLnRzJykucGFnZSgpIDogcm91dGVEb250Rm91bmQoKVxyXG4vKipcclxuICogZGluYW1pY1JvdXRlc1xyXG4gKiBcclxuICogVGhpcyBmdW5jdGlvbiBnZW5lcmF0ZSB0aGUgZGluYW1pYyByb3V0ZXMgd2hlbiB5dSBzZW5kIGluIHRoZSByb3V0ZSA6XHJcbiAqIFxyXG4gKiBAcmV0dXJucyBcclxuICovXHJcbmZ1bmN0aW9uIGRpbmFtaWNSb3V0ZXMoKXtcclxuICBsZXQgb3RoZXJSb3V0ZXM6YW55ID0gcm91dGVzLmZpbHRlcigoaXRlbTogYW55KSA9PiBpdGVtLnBhdGguaW5jbHVkZXMoJzonKSlcclxuICBsZXQgZ2V0Um91dGVDdXJyZW50OmFueSA9IGxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KCcvJylcclxuICBsZXQgcmVxdWVzdDpvYmplY3QgPSB7fVxyXG4gIG90aGVyUm91dGVzLm1hcCggKHJvdXRlOiBhbnkpID0+IHJlcXVlc3QgPSBnZXRSb3V0ZUN1cnJlbnRbMV0gPT0gKHJvdXRlLnBhdGguc3BsaXQoJy8nKSlbMV0gPyB7ICdzdGF0dXMnOiB0cnVlLCAncm91dGUnOiByb3V0ZX0gOiB7ICdzdGF0dXMnOiBmYWxzZSB9KVxyXG4gIHJldHVybiByZXF1ZXN0XHJcbn1cclxuXHJcbi8qKlxyXG4gKiByb3V0ZURvbnRGb3VuZFxyXG4gKiBcclxuICogVGhpcyBmdW5jdGlvbiB3b3JrIHdoZW4gcm91dGUgd2Fzbid0IGZvdW5kXHJcbiAqIFxyXG4gKiBAcmV0dXJucyBcclxuICovXHJcbmZ1bmN0aW9uIHJvdXRlRG9udEZvdW5kKCl7XHJcbiAgY29uc3QgZGluYW1pYzogYW55ID0gZGluYW1pY1JvdXRlcygpO1xyXG4gIGRpbmFtaWMuc3RhdHVzICYmIHJlcXVpcmUoYC9zcmMvJHtwcm9qZWN0fS9qcy9jb21wb25lbnRzLyR7ZGluYW1pYy5yb3V0ZS5jb21wb25lbnR9LnRzYCkucGFnZSgpXHJcbn0iLCJcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGV0aXRpb24ge1xyXG4gZ2V0KHVybDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBmZXRjaCh1cmwpXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHJlc29sdmUoZGF0YSkpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIFxyXG4gIHBvc3QodXJsOiBzdHJpbmcsIGRhdGE6IG9iamVjdCkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgZmV0Y2godXJsLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIiwgLy8gb3IgJ1BVVCdcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSwgLy8gZGF0YSBjYW4gYmUgYHN0cmluZ2Agb3Ige29iamVjdH0hXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSlcclxuICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHJlamVjdChlcnJvcikpXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNvbHZlKHJlc3BvbnNlKSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1dCh1cmw6IHN0cmluZywgZGF0YTogb2JqZWN0KSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBmZXRjaCh1cmwsIHtcclxuICAgICAgICBtZXRob2Q6IFwiUFVUXCIsIC8vIG9yICdQVVQnXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksIC8vIGRhdGEgY2FuIGJlIGBzdHJpbmdgIG9yIHtvYmplY3R9IVxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiByZWplY3QoZXJyb3IpKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzb2x2ZShyZXNwb25zZSkpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiAgIiwidmFyIG1hcCA9IHtcblx0XCIuL2pzL2NvbXBvbmVudHMvZXhhbXBsZS50c1wiOiBcIi4vc3JjL2pzL2NvbXBvbmVudHMvZXhhbXBsZS50c1wiLFxuXHRcIi4vanMvY29uZmlnL2RhdGFsYXllcnMudHNcIjogXCIuL3NyYy9qcy9jb25maWcvZGF0YWxheWVycy50c1wiLFxuXHRcIi4vanMvY29uZmlnL3JvdXRlcy50c1wiOiBcIi4vc3JjL2pzL2NvbmZpZy9yb3V0ZXMudHNcIixcblx0XCIuL2pzL3NlcnZpY2VzL2FwaS50c1wiOiBcIi4vc3JjL2pzL3NlcnZpY2VzL2FwaS50c1wiLFxuXHRcIi4vanMvc2VydmljZXMvZ2VuZXJhbC50c1wiOiBcIi4vc3JjL2pzL3NlcnZpY2VzL2dlbmVyYWwudHNcIixcblx0XCIuL2pzL3NlcnZpY2VzL21pZGRsZXdhcmUudHNcIjogXCIuL3NyYy9qcy9zZXJ2aWNlcy9taWRkbGV3YXJlLnRzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjIHN5bmMgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLipcXFxcLnRzJFwiOyIsImZ1bmN0aW9uIHdlYnBhY2tFbXB0eUNvbnRleHQocmVxKSB7XG5cdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHR0aHJvdyBlO1xufVxud2VicGFja0VtcHR5Q29udGV4dC5rZXlzID0gZnVuY3Rpb24oKSB7IHJldHVybiBbXTsgfTtcbndlYnBhY2tFbXB0eUNvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tFbXB0eUNvbnRleHQ7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tFbXB0eUNvbnRleHQ7XG53ZWJwYWNrRW1wdHlDb250ZXh0LmlkID0gXCIuL3NyYyBzeW5jIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qXFxcXC9qc1xcXFwvY29uZmlnXFxcXC9kYXRhbGF5ZXJzXFxcXC50cyRcIjsiLCJmdW5jdGlvbiB3ZWJwYWNrRW1wdHlDb250ZXh0KHJlcSkge1xuXHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0dGhyb3cgZTtcbn1cbndlYnBhY2tFbXB0eUNvbnRleHQua2V5cyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gW107IH07XG53ZWJwYWNrRW1wdHlDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrRW1wdHlDb250ZXh0O1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrRW1wdHlDb250ZXh0O1xud2VicGFja0VtcHR5Q29udGV4dC5pZCA9IFwiLi9zcmMgc3luYyByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKlxcXFwvanNcXFxcL2NvbmZpZ1xcXFwvcm91dGVzXFxcXC50cyRcIjsiLCJmdW5jdGlvbiB3ZWJwYWNrRW1wdHlDb250ZXh0KHJlcSkge1xuXHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0dGhyb3cgZTtcbn1cbndlYnBhY2tFbXB0eUNvbnRleHQua2V5cyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gW107IH07XG53ZWJwYWNrRW1wdHlDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrRW1wdHlDb250ZXh0O1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrRW1wdHlDb250ZXh0O1xud2VicGFja0VtcHR5Q29udGV4dC5pZCA9IFwiLi9zcmMgc3luYyByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKlxcXFwvanNcXFxcL3NlcnZpY2VzXFxcXC9nZW5lcmFsXFxcXC50cyRcIjsiLCJmdW5jdGlvbiB3ZWJwYWNrRW1wdHlDb250ZXh0KHJlcSkge1xuXHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0dGhyb3cgZTtcbn1cbndlYnBhY2tFbXB0eUNvbnRleHQua2V5cyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gW107IH07XG53ZWJwYWNrRW1wdHlDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrRW1wdHlDb250ZXh0O1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrRW1wdHlDb250ZXh0O1xud2VicGFja0VtcHR5Q29udGV4dC5pZCA9IFwiLi9zcmMgc3luYyByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKlxcXFwvc2Fzc1xcXFwvbWFpblxcXFwuc2NzcyRcIjsiLCJpbXBvcnQgeyBkYW1hIH0gZnJvbSBcIi4uLi8uLi8uLi9tb2R1bGVzL2RhbWFcIjtcclxuaW1wb3J0IHsgYXBpU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hcGlcIjtcclxuLyoqXHJcbiAqIFVzZSBQZXRpdGlvblxyXG4gKiBcclxuICogWW91IG11c3QgdXNlIHBldC5nZXQodXJsKSBvciBwZXQucG9zdCh1cmwsIGRhdGEpIFxyXG4gKi9cclxuY29uc3QgYXBpID0gbmV3IGFwaVNlcnZpY2UoKTtcclxuLyoqXHJcbiAqIFVzZSBEYW1hXHJcbiAqIFxyXG4gKiBEYW1hIGhhcyBhIGxvdCBvZiBmdW5jdGlvbiB0byBoZWxwIHRvIGRldmVsb3BlciwgdGhpcyBmdW5jdGlvbiB5b3UgY2FuIGdldCBpbiB0aGUgbmV4dCB1cmxcclxuICogXHJcbiAqL1xyXG5jb25zdCBkbSA9IG5ldyBkYW1hKCk7XHJcblxyXG5leHBvcnQgY29uc3QgcGFnZSA9IGFzeW5jICgpID0+IHtcclxuICBjb25zb2xlLmxvZygnQXBpOicsIGFwaS5leGFtcGxlKCkpXHJcbiAgY29uc29sZS5sb2coJ0RhbWE6JywgZG0ud2VsY29tZSgpKVxyXG59XHJcblxyXG5cclxuXHJcbiIsIi8qKlxyXG4gKiBDYWxsIERhdGFsYXllclxyXG4gKiBcclxuICogQ2FsbCBkYXRhbGF5ZXIgeW91IG5lZWQgcmVnaXN0ZXIgdGhpcyBsaWtlIGFib3ZlLCBzbyB5b3UgY2FuIGNhbGwgdGhpcyB3aXRoIHRoZSBuZXh0IGZ1bmN0aW9uIHdoZW4gdGhlIGV2ZW50IGlzIGNsaWNcclxuICogICAgICBkYXRhRGF0YUxheWVycygnbmFtZS1zZWxlY3RlZCcsICdsYWJlbC13aXRob3V0LWVuY3J5cHQnKSwgZm9yIGV4YW1wbGVcclxuICogICAgICBkYXRhRGF0YUxheWVycygnc3RhcnRHYW1lJywgJ2RhdmlkZm1iOTNAZ21haWwuY29tJylcclxuICovXHJcbmV4cG9ydCBjb25zdCBsYXllcnM6IG9iamVjdCA9IFtcclxuICAgIHtcclxuICAgICAgICAnbmFtZSc6ICdOQU1FJyxcclxuICAgICAgICAnZXZlbnQnOiAndHJhY2tFdmVudCcsXHJcbiAgICAgICAgJ2V2ZW50Q2F0ZWdvcnknOiAnQ0FURUdPUlknLCAvLyBDYXRlZ29yw61hIGRlbCBldmVudG8gKFN0cmluZykuIFJlcXVlcmlkby5cclxuICAgICAgICAnZXZlbnRBY3Rpb24nOiAnQUNUSU9OJywgLy8gQWNjacOzbiBvIHN1YmNhdGVnb3LDrWEgZGVsIGV2ZW50byAoU3RyaW5nKS4gUmVxdWVyaWRvLlxyXG4gICAgICAgICdldmVudExhYmVsJzogJ0xBQkVMJywgLy8gRXRpcXVldGEgZGUgZGVzY3JpcGNpw7NuIGRlbCBldmVudG8gKFN0cmluZykuIFJlcXVlcmlkby5cclxuICAgICAgICAnZW5jcnlwdGVkJzogZmFsc2UgLy8gZW5jcnlwdGVkIExhYmVsXHJcbiAgICB9XHJcbl1cclxuXHJcbiIsImV4cG9ydCBjb25zdCByb3V0ZXMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ2luZGV4JyxcclxuICAgICAgICBwYXRoOiAnLycsXHJcbiAgICAgICAgY29tcG9uZW50OiAnZXhhbXBsZSdcclxuICAgIH0sXHJcbl1cclxuIiwiaW1wb3J0ICBQZXRpdGlvbiAgZnJvbSBcIi4uLi8uLi8uLi9tb2R1bGVzL3BldGl0aW9uXCI7XHJcblxyXG4vKipcclxuICogVXNlIFBldGl0aW9uXHJcbiAqIFxyXG4gKiBZb3UgbXVzdCB1c2UgcGV0LmdldCh1cmwpIG9yIHBldC5wb3N0KHVybCwgZGF0YSkgXHJcbiAqL1xyXG5jb25zdCBwZXQgPSBuZXcgUGV0aXRpb24oKVxyXG5cclxuZXhwb3J0IGNsYXNzIGFwaVNlcnZpY2Uge1xyXG4gIHdlbGNvbWUoKXtcclxuICAgIHJldHVybiAnd2VsY29tZSB0byBBcGlTZXJ2aWNlJztcclxuICB9XHJcbiAgZXhhbXBsZSgpe1xyXG4gICAgcmV0dXJuIHBldC5nZXQoJ2h0dHA6Ly9hcGkuMTUwcG9yY2llbnRvLmNvbS9hcGkvY291bnRyaWVzJylcclxuICB9XHJcbn0iLCIvLyBpbXBvcnQgZGFtYSBmcm9tIFwiL21vZHVsZXMvZGFtYS5qc1wiO1xyXG4vLyBpbXBvcnQgYXBpRHJ1cGFsIGZyb20gXCIuL2FwaS5qc1wiO1xyXG4vLyBjb25zdCBkbSA9IG5ldyBkYW1hKCk7XHJcblxyXG5cclxuLy8gY29uc3QgYXBpID0gbmV3IGFwaURydXBhbCgpO1xyXG5leHBvcnQgY29uc3QgcGFnZSA9IGFzeW5jICgpID0+IHtcclxuICAgIC8qIE9OIExPQUQgKi9cclxuICAgIGNvbnNvbGUubG9nKCdEYW1hOiBEZXNhcnJvbGxhZG8gcHJvIDE1MCUnKVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgbWlkZGxld2FyZSB7IC8vIGp1c3QgYWRkIFwiZGVmYXVsdFwiXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9