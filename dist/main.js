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

var project = "base";
// IMPORT SASS
// require(`/src/${project}/sass/main.scss`)
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
	"./base/js/components/example.ts": "./src/base/js/components/example.ts",
	"./base/js/config/datalayers.ts": "./src/base/js/config/datalayers.ts",
	"./base/js/config/routes.ts": "./src/base/js/config/routes.ts",
	"./base/js/services/api.ts": "./src/base/js/services/api.ts",
	"./base/js/services/general.ts": "./src/base/js/services/general.ts",
	"./base/js/services/middleware.ts": "./src/base/js/services/middleware.ts"
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
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./base/js/config/datalayers.ts": "./src/base/js/config/datalayers.ts"
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
webpackContext.id = "./src sync recursive ^\\.\\/.*\\/js\\/config\\/datalayers\\.ts$";

/***/ }),

/***/ "./src sync recursive ^\\.\\/.*\\/js\\/config\\/routes\\.ts$":
/*!***************************************************!*\
  !*** ./src sync ^\.\/.*\/js\/config\/routes\.ts$ ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./base/js/config/routes.ts": "./src/base/js/config/routes.ts"
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
webpackContext.id = "./src sync recursive ^\\.\\/.*\\/js\\/config\\/routes\\.ts$";

/***/ }),

/***/ "./src sync recursive ^\\.\\/.*\\/js\\/services\\/general\\.ts$":
/*!******************************************************!*\
  !*** ./src sync ^\.\/.*\/js\/services\/general\.ts$ ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./base/js/services/general.ts": "./src/base/js/services/general.ts"
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
webpackContext.id = "./src sync recursive ^\\.\\/.*\\/js\\/services\\/general\\.ts$";

/***/ }),

/***/ "./src/base/js/components/example.ts":
/*!*******************************************!*\
  !*** ./src/base/js/components/example.ts ***!
  \*******************************************/
/*! exports provided: page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "page", function() { return page; });
/* harmony import */ var _modules_dama__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .../../../modules/dama */ "./modules/dama.ts");
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/api */ "./src/base/js/services/api.ts");
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

/***/ "./src/base/js/config/datalayers.ts":
/*!******************************************!*\
  !*** ./src/base/js/config/datalayers.ts ***!
  \******************************************/
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

/***/ "./src/base/js/config/routes.ts":
/*!**************************************!*\
  !*** ./src/base/js/config/routes.ts ***!
  \**************************************/
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

/***/ "./src/base/js/services/api.ts":
/*!*************************************!*\
  !*** ./src/base/js/services/api.ts ***!
  \*************************************/
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

/***/ "./src/base/js/services/general.ts":
/*!*****************************************!*\
  !*** ./src/base/js/services/general.ts ***!
  \*****************************************/
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

/***/ "./src/base/js/services/middleware.ts":
/*!********************************************!*\
  !*** ./src/base/js/services/middleware.ts ***!
  \********************************************/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9kYW1hLnRzIiwid2VicGFjazovLy8uL21vZHVsZXMvZGF0YWxheWVycy50cyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2luZGV4LnRzIiwid2VicGFjazovLy8uL21vZHVsZXMvcGV0aXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjIHN5bmMgXlxcLlxcLy4qXFwudHMkIiwid2VicGFjazovLy8uL3NyYyBzeW5jIF5cXC5cXC8uKlxcL2pzXFwvY29uZmlnXFwvZGF0YWxheWVyc1xcLnRzJCIsIndlYnBhY2s6Ly8vLi9zcmMgc3luYyBeXFwuXFwvLipcXC9qc1xcL2NvbmZpZ1xcL3JvdXRlc1xcLnRzJCIsIndlYnBhY2s6Ly8vLi9zcmMgc3luYyBeXFwuXFwvLipcXC9qc1xcL3NlcnZpY2VzXFwvZ2VuZXJhbFxcLnRzJCIsIndlYnBhY2s6Ly8vLi9zcmMvYmFzZS9qcy9jb21wb25lbnRzL2V4YW1wbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jhc2UvanMvY29uZmlnL2RhdGFsYXllcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jhc2UvanMvY29uZmlnL3JvdXRlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFzZS9qcy9zZXJ2aWNlcy9hcGkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jhc2UvanMvc2VydmljZXMvZ2VuZXJhbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFzZS9qcy9zZXJ2aWNlcy9taWRkbGV3YXJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBOzs7OztHQUtHO0FBRUg7SUFBQTtJQXlFQSxDQUFDO0lBeEVDLHNCQUFPLEdBQVA7UUFDRSxPQUFPLGlCQUFpQjtJQUMxQixDQUFDO0lBQ0Qsb0JBQUssR0FBTCxVQUFNLElBQW1CLEVBQUUsYUFBa0I7UUFBdkMsa0NBQW1CO1FBQ3ZCLElBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEdBQUcsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2RSxPQUFPLElBQUksT0FBTyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxhQUFhLEVBQUUsS0FBSyxDQUFDO1FBQ2xFLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFDRCxtQkFBSSxHQUFKLFVBQUssR0FBYTtRQUFiLDhCQUFhO1FBQ2hCLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBQyxFQUFPO1lBQ2QsSUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUM7WUFDM0MsSUFBSSxPQUFPO2dCQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUM5QyxDQUFDLENBQUM7UUFDRixPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBQ0QsbUJBQUksR0FBSixVQUFLLEVBQWlCO1FBQWpCLDhCQUFpQjtRQUNwQixJQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQztRQUMzQyxJQUFJLE9BQU87WUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDN0MsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQXFESCxXQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hGRCxJQUFNLE9BQU8sR0FBRyxNQUFNO0FBQ2QsVUFBTSxHQUFLLHVGQUFRLE9BQVEsT0FBTyw2QkFBMEIsQ0FBQyxPQUF2RCxDQUF1RDtBQVVyRSxNQUFNLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO0FBRWhDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLHlDQUF5QztBQUU1RCxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxVQUFDLE1BQWMsRUFBRSxLQUFhO0lBQ3JELElBQUk7UUFDQSxJQUFJLGNBQWMsR0FBSSxNQUFNLENBQUMsSUFBSSxDQUFFLFVBQUMsS0FBUyxJQUFLLFlBQUssQ0FBQyxJQUFJLElBQUksTUFBTSxFQUFwQixDQUFvQixDQUFDLENBQUM7UUFDeEUsT0FBTyxNQUFNLElBQUksV0FBVyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBRSxPQUFPLENBQUMsR0FBRyxDQUFDLHVEQUF1RCxFQUFFLGtDQUFrQyxDQUFDLENBQUM7S0FDL0s7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNaLE9BQU8sQ0FBQyxLQUFLLENBQUMsc0JBQXNCLEVBQUUsaUNBQWlDLENBQUMsQ0FBQztLQUM1RTtBQUNMLENBQUM7QUFFRCxTQUFTLFNBQVMsQ0FBQyxjQUFtQixFQUFFLEtBQWE7SUFDakQsSUFBTSxTQUFTLEdBQVksY0FBYyxDQUFDLFdBQVcsQ0FBQztJQUN0RCxPQUFPLGNBQWMsQ0FBQyxNQUFNLENBQUM7SUFDN0IsY0FBYyxDQUFDLFlBQVksQ0FBQyxHQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDO0lBQ2pILE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQzFDLENBQUM7QUFFTSxJQUFNLFVBQVUsR0FBRzs7U0FBYzs7Ozs7Ozs7Ozs7O0FDL0J4QyxJQUFNLE9BQU8sR0FBVyxNQUFNO0FBQzlCLGNBQWM7QUFDZCw0Q0FBNEM7QUFDNUMsaUJBQWlCO0FBQ1QsVUFBTSxHQUFLLG1GQUFRLE9BQVEsT0FBTyx5QkFBc0IsQ0FBQyxPQUFuRCxDQUFtRDtBQUVqRSxJQUFJLEtBQUssR0FBUSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBUyxJQUFLLGFBQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQXJDLENBQXFDLENBQUM7QUFFbEYsc0ZBQVEsT0FBUSxPQUFPLDRCQUF5QixDQUFDLENBQUMsSUFBSSxFQUFFO0FBQ3hELG1CQUFPLENBQUMsdURBQXdCLENBQUM7QUFDakMsS0FBSyxDQUFDLENBQUMsQ0FBQyw0REFBUSxPQUFRLE9BQU8sb0JBQWlCLEdBQUcsS0FBSyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsY0FBYyxFQUFFO0FBQ3JHOzs7Ozs7R0FNRztBQUNILFNBQVMsYUFBYTtJQUNwQixJQUFJLFdBQVcsR0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQUMsSUFBUyxJQUFLLFdBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUF2QixDQUF1QixDQUFDO0lBQzNFLElBQUksZUFBZSxHQUFPLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUN0RCxJQUFJLE9BQU8sR0FBVSxFQUFFO0lBQ3ZCLFdBQVcsQ0FBQyxHQUFHLENBQUUsVUFBQyxLQUFVLElBQUssY0FBTyxHQUFHLGVBQWUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxFQUFwSCxDQUFvSCxDQUFDO0lBQ3RKLE9BQU8sT0FBTztBQUNoQixDQUFDO0FBRUQ7Ozs7OztHQU1HO0FBQ0gsU0FBUyxjQUFjO0lBQ3JCLElBQU0sT0FBTyxHQUFRLGFBQWEsRUFBRSxDQUFDO0lBQ3JDLE9BQU8sQ0FBQyxNQUFNLElBQUksNERBQVEsT0FBUSxPQUFPLHVCQUFrQixPQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsUUFBSyxDQUFDLENBQUMsSUFBSSxFQUFFO0FBQ2pHLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNuQ0Q7QUFBQTtJQUFBO0lBc0NBLENBQUM7SUFyQ0Esc0JBQUcsR0FBSCxVQUFJLEdBQVc7UUFDWixPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDakMsS0FBSyxDQUFDLEdBQUcsQ0FBQztpQkFDUCxJQUFJLENBQUMsVUFBQyxRQUFRLElBQUssZUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQztpQkFDbkMsSUFBSSxDQUFDLFVBQUMsSUFBSSxJQUFLLGNBQU8sQ0FBQyxJQUFJLENBQUMsRUFBYixDQUFhLENBQUMsQ0FBQztRQUNuQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCx1QkFBSSxHQUFKLFVBQUssR0FBVyxFQUFFLElBQVk7UUFDNUIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ2pDLEtBQUssQ0FBQyxHQUFHLEVBQUU7Z0JBQ1QsTUFBTSxFQUFFLE1BQU07Z0JBQ2QsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO2dCQUMxQixPQUFPLEVBQUU7b0JBQ1AsY0FBYyxFQUFFLGtCQUFrQjtpQkFDbkM7YUFDRixDQUFDO2lCQUNDLElBQUksQ0FBQyxVQUFDLEdBQUcsSUFBSyxVQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO2lCQUN6QixLQUFLLENBQUMsVUFBQyxLQUFLLElBQUssYUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFiLENBQWEsQ0FBQztpQkFDL0IsSUFBSSxDQUFDLFVBQUMsUUFBUSxJQUFLLGNBQU8sQ0FBQyxRQUFRLENBQUMsRUFBakIsQ0FBaUIsQ0FBQyxDQUFDO1FBQzNDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHNCQUFHLEdBQUgsVUFBSSxHQUFXLEVBQUUsSUFBWTtRQUMzQixPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDakMsS0FBSyxDQUFDLEdBQUcsRUFBRTtnQkFDVCxNQUFNLEVBQUUsS0FBSztnQkFDYixJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7Z0JBQzFCLE9BQU8sRUFBRTtvQkFDUCxjQUFjLEVBQUUsa0JBQWtCO2lCQUNuQzthQUNGLENBQUM7aUJBQ0MsSUFBSSxDQUFDLFVBQUMsR0FBRyxJQUFLLFVBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7aUJBQ3pCLEtBQUssQ0FBQyxVQUFDLEtBQUssSUFBSyxhQUFNLENBQUMsS0FBSyxDQUFDLEVBQWIsQ0FBYSxDQUFDO2lCQUMvQixJQUFJLENBQUMsVUFBQyxRQUFRLElBQUssY0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFqQixDQUFpQixDQUFDLENBQUM7UUFDM0MsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0gsZUFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7QUN2Q0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEOzs7Ozs7Ozs7OztBQzNCQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzRjs7Ozs7Ozs7Ozs7QUN0QkE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0Y7Ozs7Ozs7Ozs7O0FDdEJBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEI4QztBQUNEO0FBQzdDOzs7O0dBSUc7QUFDSCxJQUFNLEdBQUcsR0FBRyxJQUFJLHdEQUFVLEVBQUUsQ0FBQztBQUM3Qjs7Ozs7R0FLRztBQUNILElBQU0sRUFBRSxHQUFHLElBQUksa0RBQUksRUFBRSxDQUFDO0FBRWYsSUFBTSxJQUFJLEdBQUc7O1FBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7OztLQUNuQzs7Ozs7Ozs7Ozs7OztBQ25CRDtBQUFBO0FBQUE7Ozs7OztHQU1HO0FBQ0ksSUFBTSxNQUFNLEdBQVc7SUFDMUI7UUFDSSxNQUFNLEVBQUUsTUFBTTtRQUNkLE9BQU8sRUFBRSxZQUFZO1FBQ3JCLGVBQWUsRUFBRSxVQUFVO1FBQzNCLGFBQWEsRUFBRSxRQUFRO1FBQ3ZCLFlBQVksRUFBRSxPQUFPO1FBQ3JCLFdBQVcsRUFBRSxLQUFLLENBQUMsa0JBQWtCO0tBQ3hDO0NBQ0o7Ozs7Ozs7Ozs7Ozs7QUNoQkQ7QUFBQTtBQUFPLElBQU0sTUFBTSxHQUFHO0lBQ2xCO1FBQ0ksSUFBSSxFQUFFLE9BQU87UUFDYixJQUFJLEVBQUUsR0FBRztRQUNULFNBQVMsRUFBRSxTQUFTO0tBQ3ZCO0NBQ0o7Ozs7Ozs7Ozs7Ozs7QUNORDtBQUFBO0FBQUE7QUFBb0Q7QUFFcEQ7Ozs7R0FJRztBQUNILElBQU0sR0FBRyxHQUFHLElBQUkseURBQVEsRUFBRTtBQUUxQjtJQUFBO0lBT0EsQ0FBQztJQU5DLDRCQUFPLEdBQVA7UUFDRSxPQUFPLHVCQUF1QixDQUFDO0lBQ2pDLENBQUM7SUFDRCw0QkFBTyxHQUFQO1FBQ0UsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxDQUFDO0lBQzdELENBQUM7SUFDSCxpQkFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7O0FDaEJEO0FBQUE7QUFBQSx1Q0FBdUM7QUFDdkMsb0NBQW9DO0FBQ3BDLHlCQUF5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUd6QiwrQkFBK0I7QUFDeEIsSUFBTSxJQUFJLEdBQUc7O1FBQ2hCLGFBQWE7UUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDOzs7S0FDN0M7Ozs7Ozs7Ozs7Ozs7QUNURDtBQUFBO0lBQUE7SUFDQSxDQUFDO0lBQUQsaUJBQUM7QUFBRCxDQUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL21vZHVsZXMvaW5kZXgudHNcIik7XG4iLCIvKipcbiAqIFxuICogU2VydmljZSBEYW1hIEpTXG4gKiBcbiAqIFxuICovXG5cbmV4cG9ydCBjbGFzcyBkYW1hIHtcbiAgd2VsY29tZSgpe1xuICAgIHJldHVybiAnd2VsY29tZSB0byBEQU1BJ1xuICB9XG4gIGNsaWNrKG5hbWU6IHN0cmluZyA9IG51bGwsIGNvbmZpZ3VyYXRpb246IGFueSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZG0tY2xpY2s9JyArIG5hbWUgKyAnXScpWzBdXG4gICAgZWxlbWVudCAmJiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjb25maWd1cmF0aW9uLCBmYWxzZSlcbiAgICByZXR1cm4gJ3JlbmRlcic7XG4gIH1cbiAgaGlkZShpZHM6IGFueSA9IFtdKSB7XG4gICAgaWRzLm1hcCgoaWQ6IGFueSkgPT4ge1xuICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKVxuICAgICAgaWYgKGVsZW1lbnQpIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH0pXG4gICAgcmV0dXJuICdyZW5kZXInO1xuICB9XG4gIHNob3coaWQ6IHN0cmluZyA9IG51bGwpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpXG4gICAgaWYgKGVsZW1lbnQpIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICByZXR1cm4gJ3JlbmRlcic7XG4gIH1cbiAgLy8gaGlkZU9uZShpZCA9IG51bGwpIHtcbiAgLy8gICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpXG4gIC8vICAgaWYgKGVsZW1lbnQpIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAvLyAgIHJldHVybiAncmVuZGVyJztcbiAgLy8gfVxuICAvLyBoaWRlU2hvdyhpZEhpZGUgPSBudWxsLCBpZFNob3cgPSBudWxsKSB7XG4gIC8vICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZEhpZGUpXG4gIC8vICAgaWYgKGVsZW1lbnQpIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJkaXNwbGF5Om5vbmUgIWltcG9ydGFudFwiKTtcbiAgLy8gICBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWRTaG93KVxuICAvLyAgIGlmIChlbGVtZW50KSBlbGVtZW50LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZGlzcGxheTpibG9jayAhaW1wb3J0YW50XCIpO1xuICAvLyAgIHJldHVybiAncmVuZGVyJztcbiAgLy8gfVxuXG4gIC8vIHByaW50KG5hbWUsIHRleHQpIHtcbiAgLy8gICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RtLW1vZGVsPScgKyBuYW1lICsgJ10nKVswXVxuICAvLyAgIGlmICh0eXBlb2YgZWxlbWVudCAhPSBcInVuZGVmaW5lZFwiICYmIGVsZW1lbnQgIT0gbnVsbClcbiAgLy8gICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gdGV4dDtcbiAgLy8gICByZXR1cm47XG4gIC8vIH1cblxuICAvLyBwcmludChuYW1lLCB0ZXh0KSB7XG4gIC8vICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkbS1tb2RlbD0nICsgbmFtZSArICddJylbMF1cbiAgLy8gICBpZiAodHlwZW9mIGVsZW1lbnQgIT0gXCJ1bmRlZmluZWRcIiAmJiBlbGVtZW50ICE9IG51bGwpXG4gIC8vICAgICBlbGVtZW50LmlubmVySFRNTCA9IHRleHQ7XG4gIC8vICAgcmV0dXJuO1xuICAvLyB9XG5cbiAgLy8gZ2V0SW5wdW50cyhpZHMgPSBbXSkge1xuICAvLyAgIGNvbnN0IGRhdGEgPSB7fVxuICAvLyAgIGlkcy5tYXAoaWQgPT4ge1xuICAvLyAgICAgbGV0IHZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpID8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLnZhbHVlIDogbnVsbFxuICAvLyAgICAgaWYgKHZhbHVlKSBkYXRhW2lkXSA9IHZhbHVlXG4gIC8vICAgfSlcbiAgLy8gICByZXR1cm4gZGF0YTtcbiAgLy8gfVxuXG5cbiAgLy8gIGdldERhdGFGb3JtKGZvcm06IGFueSl7XG4gIC8vICAgIGxldCByZXF1ZXN0ID0ge30sIHZhbHVlXG4gIC8vICAgIGZvcm0udGFyZ2V0LmZvckVhY2goZWxlbWVudCA9PntcbiAgLy8gICAgICBjb25zb2xlLmxvZyhlbGVtZW50LnR5cGUpXG4gIC8vICAgICAgLy8gc2kgZXMgdW4gc2VsZWN0IG11bHRpcGxlIGd1YXJkYW1vcyBsb3MgdmFsb3JlcyBzaSBubyBndWFyZGFtb3MgZWwgZWxlbWVudG9cbiAgLy8gICAgICBsZXQgaXNTZWxlY3RNdWx0aXBsZSA9IGVsZW1lbnQuaGFzQXR0cmlidXRlKFwibXVsdGlwbGVcIilcbiAgLy8gICAgICB2YWx1ZSA9IGlzU2VsZWN0TXVsdGlwbGUgPyBbLi4uZWxlbWVudC5vcHRpb25zXS5maWx0ZXIob3B0aW9uID0+IG9wdGlvbi5zZWxlY3RlZCkubWFwKG9wdGlvbiA9PiBvcHRpb24udmFsdWUpIDogZWxlbWVudC52YWx1ZVxuICAvLyAgICAgIC8vUGVybyBzaSBlcyB1biBjaGVrYm94LCBndWFyZGFtb3MgZWwgdmFsb3IgZGVsIGNoZWNrYm94LCBwZXJvIHByaW1lcm8gdmVyaWZpY2Ftb3Mgc2kgZXMgdW4gY2hlY2tib3hcbiAgLy8gICAgICB2YWx1ZSA9IGVsZW1lbnQudHlwZSA9PSBcImNoZWNrYm94XCIgPyBTdHJpbmcoZWxlbWVudC5jaGVja2VkKSA6IGVsZW1lbnQudmFsdWVcbiAgLy8gICAgICBjb25zb2xlLmxvZyhlbGVtZW50Lm5hbWUsIFwiOlwiLCB2YWx1ZSlcbiAgLy8gICAgICAvL0ZpbmFsbWVudGUgZ3VhcmRhbW9zIGVuIG51ZXN0cm8gb2JqZXRvXG4gIC8vICAgICAgaWYoZWxlbWVudC5uYW1lICYmIHZhbHVlLmxlbmd0aCkgcmVxdWVzdFtlbGVtZW50Lm5hbWVdID0gdmFsdWVcbiAgLy8gICAgfSlcbiAgLy8gICAgcmV0dXJuIHJlcXVlc3Q7XG4gIC8vICB9XG59IiwiY29uc3QgcHJvamVjdCA9IFwiYmFzZVwiXG5jb25zdCB7IGxheWVycyB9ID0gcmVxdWlyZShgL3NyYy8ke3Byb2plY3R9L2pzL2NvbmZpZy9kYXRhbGF5ZXJzLnRzYClcblxuZGVjbGFyZSBnbG9iYWwge1xuICAgIGludGVyZmFjZSBXaW5kb3cge1xuICAgICAgICBkYW1hOiBhbnkgICAsXG4gICAgICAgIGRhdGFsYXllcjogYW55ICBcbiAgICAgICAgU0hBMjU2OiBhbnksXG4gICAgfVxufVxuXG53aW5kb3cuZGFtYSA9IHdpbmRvdy5kYW1hIHx8IHt9O1xuXG53aW5kb3cuZGFtYS5pbmZvID0gJ0Rlc2Fycm9sbGFkbyBlbiAxNTAlIHBvciBEYXZpZCBNYXJ0aW5leidcblxud2luZG93LmRhbWEuc2V0RGF0YWxheWVyID0gKHNlbGVjdDogc3RyaW5nLCBsYWJlbDogc3RyaW5nKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IGRhdGFMYXllckZvdW5kID0gIGxheWVycy5maW5kKCAodmFsdWU6YW55KSA9PiB2YWx1ZS5uYW1lID09IHNlbGVjdCk7XG4gICAgICAgIHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgPyBwdXNoTGF5ZXIoZGF0YUxheWVyRm91bmQsIGxhYmVsKSA6ICBjb25zb2xlLmxvZygnJWMgUG9yIGZhdm9yIGNvbmZpZ3VyYXIgZWwgRGF0YWxheWVyLCBubyBlbmNvbnRyYWRvISAnLCAnYmFja2dyb3VuZDogIzIyMjsgY29sb3I6ICNiYWRhNTUnKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCclYyBEYXRhbGF5ZXIgRXJyb3IhICcsICdiYWNrZ3JvdW5kOiByZWQ7IGNvbG9yOiAjYmFkYTU1Jyk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBwdXNoTGF5ZXIoZGF0YUxheWVyRm91bmQ6IGFueSwgbGFiZWw6IHN0cmluZyApe1xuICAgIGNvbnN0IGVuY3J5cHRlZDogQm9vbGVhbiA9IGRhdGFMYXllckZvdW5kWydlbmNyeXB0ZWQnXVxuICAgIGRlbGV0ZSBkYXRhTGF5ZXJGb3VuZFsnbmFtZSddXG4gICAgZGF0YUxheWVyRm91bmRbJ2V2ZW50TGFiZWwnXSAgPSBsYWJlbCA/IChlbmNyeXB0ZWQgPyB3aW5kb3cuU0hBMjU2KGxhYmVsKSA6IGxhYmVsKSA6IGRhdGFMYXllckZvdW5kWydldmVudExhYmVsJ11cbiAgICB3aW5kb3cuZGF0YWxheWVyLnB1c2goZGF0YUxheWVyRm91bmQpO1xufVxuXG5leHBvcnQgY29uc3QgZGF0YWxheWVycyA9IGFzeW5jICgpID0+IHt9XG4iLCJjb25zdCBwcm9qZWN0OiBzdHJpbmcgPSBcImJhc2VcIlxuLy8gSU1QT1JUIFNBU1Ncbi8vIHJlcXVpcmUoYC9zcmMvJHtwcm9qZWN0fS9zYXNzL21haW4uc2Nzc2ApXG4vLyBJTVBPUlQgUk9VVEVTIFxuY29uc3QgeyByb3V0ZXMgfSA9IHJlcXVpcmUoYC9zcmMvJHtwcm9qZWN0fS9qcy9jb25maWcvcm91dGVzLnRzYClcblxubGV0IHJvdXRlOiBhbnkgPSByb3V0ZXMuZmluZCgoaXRlbTogYW55KSA9PiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT0gaXRlbS5wYXRoKVxuXG5yZXF1aXJlKGAvc3JjLyR7cHJvamVjdH0vanMvc2VydmljZXMvZ2VuZXJhbC50c2ApLnBhZ2UoKVxucmVxdWlyZShgL21vZHVsZXMvZGF0YWxheWVycy50c2ApXG5yb3V0ZSA/IHJlcXVpcmUoYC9zcmMvJHtwcm9qZWN0fS9qcy9jb21wb25lbnRzL2AgKyByb3V0ZS5jb21wb25lbnQgKyAnLnRzJykucGFnZSgpIDogcm91dGVEb250Rm91bmQoKVxuLyoqXG4gKiBkaW5hbWljUm91dGVzXG4gKiBcbiAqIFRoaXMgZnVuY3Rpb24gZ2VuZXJhdGUgdGhlIGRpbmFtaWMgcm91dGVzIHdoZW4geXUgc2VuZCBpbiB0aGUgcm91dGUgOlxuICogXG4gKiBAcmV0dXJucyBcbiAqL1xuZnVuY3Rpb24gZGluYW1pY1JvdXRlcygpe1xuICBsZXQgb3RoZXJSb3V0ZXM6YW55ID0gcm91dGVzLmZpbHRlcigoaXRlbTogYW55KSA9PiBpdGVtLnBhdGguaW5jbHVkZXMoJzonKSlcbiAgbGV0IGdldFJvdXRlQ3VycmVudDphbnkgPSBsb2NhdGlvbi5wYXRobmFtZS5zcGxpdCgnLycpXG4gIGxldCByZXF1ZXN0Om9iamVjdCA9IHt9XG4gIG90aGVyUm91dGVzLm1hcCggKHJvdXRlOiBhbnkpID0+IHJlcXVlc3QgPSBnZXRSb3V0ZUN1cnJlbnRbMV0gPT0gKHJvdXRlLnBhdGguc3BsaXQoJy8nKSlbMV0gPyB7ICdzdGF0dXMnOiB0cnVlLCAncm91dGUnOiByb3V0ZX0gOiB7ICdzdGF0dXMnOiBmYWxzZSB9KVxuICByZXR1cm4gcmVxdWVzdFxufVxuXG4vKipcbiAqIHJvdXRlRG9udEZvdW5kXG4gKiBcbiAqIFRoaXMgZnVuY3Rpb24gd29yayB3aGVuIHJvdXRlIHdhc24ndCBmb3VuZFxuICogXG4gKiBAcmV0dXJucyBcbiAqL1xuZnVuY3Rpb24gcm91dGVEb250Rm91bmQoKXtcbiAgY29uc3QgZGluYW1pYzogYW55ID0gZGluYW1pY1JvdXRlcygpO1xuICBkaW5hbWljLnN0YXR1cyAmJiByZXF1aXJlKGAvc3JjLyR7cHJvamVjdH0vanMvY29tcG9uZW50cy8ke2RpbmFtaWMucm91dGUuY29tcG9uZW50fS50c2ApLnBhZ2UoKVxufSIsIlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGV0aXRpb24ge1xuIGdldCh1cmw6IHN0cmluZykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBmZXRjaCh1cmwpXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4gcmVzb2x2ZShkYXRhKSk7XG4gICAgfSk7XG4gIH1cbiAgXG4gIHBvc3QodXJsOiBzdHJpbmcsIGRhdGE6IG9iamVjdCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBmZXRjaCh1cmwsIHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIiwgLy8gb3IgJ1BVVCdcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksIC8vIGRhdGEgY2FuIGJlIGBzdHJpbmdgIG9yIHtvYmplY3R9IVxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiByZWplY3QoZXJyb3IpKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc29sdmUocmVzcG9uc2UpKTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1dCh1cmw6IHN0cmluZywgZGF0YTogb2JqZWN0KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGZldGNoKHVybCwge1xuICAgICAgICBtZXRob2Q6IFwiUFVUXCIsIC8vIG9yICdQVVQnXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLCAvLyBkYXRhIGNhbiBiZSBgc3RyaW5nYCBvciB7b2JqZWN0fSFcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gcmVqZWN0KGVycm9yKSlcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNvbHZlKHJlc3BvbnNlKSk7XG4gICAgfSk7XG4gIH1cbn1cbiAgIiwidmFyIG1hcCA9IHtcblx0XCIuL2Jhc2UvanMvY29tcG9uZW50cy9leGFtcGxlLnRzXCI6IFwiLi9zcmMvYmFzZS9qcy9jb21wb25lbnRzL2V4YW1wbGUudHNcIixcblx0XCIuL2Jhc2UvanMvY29uZmlnL2RhdGFsYXllcnMudHNcIjogXCIuL3NyYy9iYXNlL2pzL2NvbmZpZy9kYXRhbGF5ZXJzLnRzXCIsXG5cdFwiLi9iYXNlL2pzL2NvbmZpZy9yb3V0ZXMudHNcIjogXCIuL3NyYy9iYXNlL2pzL2NvbmZpZy9yb3V0ZXMudHNcIixcblx0XCIuL2Jhc2UvanMvc2VydmljZXMvYXBpLnRzXCI6IFwiLi9zcmMvYmFzZS9qcy9zZXJ2aWNlcy9hcGkudHNcIixcblx0XCIuL2Jhc2UvanMvc2VydmljZXMvZ2VuZXJhbC50c1wiOiBcIi4vc3JjL2Jhc2UvanMvc2VydmljZXMvZ2VuZXJhbC50c1wiLFxuXHRcIi4vYmFzZS9qcy9zZXJ2aWNlcy9taWRkbGV3YXJlLnRzXCI6IFwiLi9zcmMvYmFzZS9qcy9zZXJ2aWNlcy9taWRkbGV3YXJlLnRzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjIHN5bmMgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLipcXFxcLnRzJFwiOyIsInZhciBtYXAgPSB7XG5cdFwiLi9iYXNlL2pzL2NvbmZpZy9kYXRhbGF5ZXJzLnRzXCI6IFwiLi9zcmMvYmFzZS9qcy9jb25maWcvZGF0YWxheWVycy50c1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYyBzeW5jIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qXFxcXC9qc1xcXFwvY29uZmlnXFxcXC9kYXRhbGF5ZXJzXFxcXC50cyRcIjsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vYmFzZS9qcy9jb25maWcvcm91dGVzLnRzXCI6IFwiLi9zcmMvYmFzZS9qcy9jb25maWcvcm91dGVzLnRzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjIHN5bmMgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLipcXFxcL2pzXFxcXC9jb25maWdcXFxcL3JvdXRlc1xcXFwudHMkXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuL2Jhc2UvanMvc2VydmljZXMvZ2VuZXJhbC50c1wiOiBcIi4vc3JjL2Jhc2UvanMvc2VydmljZXMvZ2VuZXJhbC50c1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYyBzeW5jIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qXFxcXC9qc1xcXFwvc2VydmljZXNcXFxcL2dlbmVyYWxcXFxcLnRzJFwiOyIsImltcG9ydCB7IGRhbWEgfSBmcm9tIFwiLi4uLy4uLy4uL21vZHVsZXMvZGFtYVwiO1xuaW1wb3J0IHsgYXBpU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hcGlcIjtcbi8qKlxuICogVXNlIFBldGl0aW9uXG4gKiBcbiAqIFlvdSBtdXN0IHVzZSBwZXQuZ2V0KHVybCkgb3IgcGV0LnBvc3QodXJsLCBkYXRhKSBcbiAqL1xuY29uc3QgYXBpID0gbmV3IGFwaVNlcnZpY2UoKTtcbi8qKlxuICogVXNlIERhbWFcbiAqIFxuICogRGFtYSBoYXMgYSBsb3Qgb2YgZnVuY3Rpb24gdG8gaGVscCB0byBkZXZlbG9wZXIsIHRoaXMgZnVuY3Rpb24geW91IGNhbiBnZXQgaW4gdGhlIG5leHQgdXJsXG4gKiBcbiAqL1xuY29uc3QgZG0gPSBuZXcgZGFtYSgpO1xuXG5leHBvcnQgY29uc3QgcGFnZSA9IGFzeW5jICgpID0+IHtcbiAgY29uc29sZS5sb2coJ0FwaTonLCBhcGkuZXhhbXBsZSgpKVxuICBjb25zb2xlLmxvZygnRGFtYTonLCBkbS53ZWxjb21lKCkpXG59XG5cblxuXG4iLCIvKipcbiAqIENhbGwgRGF0YWxheWVyXG4gKiBcbiAqIENhbGwgZGF0YWxheWVyIHlvdSBuZWVkIHJlZ2lzdGVyIHRoaXMgbGlrZSBhYm92ZSwgc28geW91IGNhbiBjYWxsIHRoaXMgd2l0aCB0aGUgbmV4dCBmdW5jdGlvbiB3aGVuIHRoZSBldmVudCBpcyBjbGljXG4gKiAgICAgIGRhdGFEYXRhTGF5ZXJzKCduYW1lLXNlbGVjdGVkJywgJ2xhYmVsLXdpdGhvdXQtZW5jcnlwdCcpLCBmb3IgZXhhbXBsZVxuICogICAgICBkYXRhRGF0YUxheWVycygnc3RhcnRHYW1lJywgJ2RhdmlkZm1iOTNAZ21haWwuY29tJylcbiAqL1xuZXhwb3J0IGNvbnN0IGxheWVyczogb2JqZWN0ID0gW1xuICAgIHtcbiAgICAgICAgJ25hbWUnOiAnTkFNRScsXG4gICAgICAgICdldmVudCc6ICd0cmFja0V2ZW50JyxcbiAgICAgICAgJ2V2ZW50Q2F0ZWdvcnknOiAnQ0FURUdPUlknLCAvLyBDYXRlZ29yw61hIGRlbCBldmVudG8gKFN0cmluZykuIFJlcXVlcmlkby5cbiAgICAgICAgJ2V2ZW50QWN0aW9uJzogJ0FDVElPTicsIC8vIEFjY2nDs24gbyBzdWJjYXRlZ29yw61hIGRlbCBldmVudG8gKFN0cmluZykuIFJlcXVlcmlkby5cbiAgICAgICAgJ2V2ZW50TGFiZWwnOiAnTEFCRUwnLCAvLyBFdGlxdWV0YSBkZSBkZXNjcmlwY2nDs24gZGVsIGV2ZW50byAoU3RyaW5nKS4gUmVxdWVyaWRvLlxuICAgICAgICAnZW5jcnlwdGVkJzogZmFsc2UgLy8gZW5jcnlwdGVkIExhYmVsXG4gICAgfVxuXVxuXG4iLCJleHBvcnQgY29uc3Qgcm91dGVzID0gW1xuICAgIHtcbiAgICAgICAgbmFtZTogJ2luZGV4JyxcbiAgICAgICAgcGF0aDogJy8nLFxuICAgICAgICBjb21wb25lbnQ6ICdleGFtcGxlJ1xuICAgIH0sXG5dXG4iLCJpbXBvcnQgIFBldGl0aW9uICBmcm9tIFwiLi4uLy4uLy4uL21vZHVsZXMvcGV0aXRpb25cIjtcblxuLyoqXG4gKiBVc2UgUGV0aXRpb25cbiAqIFxuICogWW91IG11c3QgdXNlIHBldC5nZXQodXJsKSBvciBwZXQucG9zdCh1cmwsIGRhdGEpIFxuICovXG5jb25zdCBwZXQgPSBuZXcgUGV0aXRpb24oKVxuXG5leHBvcnQgY2xhc3MgYXBpU2VydmljZSB7XG4gIHdlbGNvbWUoKXtcbiAgICByZXR1cm4gJ3dlbGNvbWUgdG8gQXBpU2VydmljZSc7XG4gIH1cbiAgZXhhbXBsZSgpe1xuICAgIHJldHVybiBwZXQuZ2V0KCdodHRwOi8vYXBpLjE1MHBvcmNpZW50by5jb20vYXBpL2NvdW50cmllcycpXG4gIH1cbn0iLCIvLyBpbXBvcnQgZGFtYSBmcm9tIFwiL21vZHVsZXMvZGFtYS5qc1wiO1xuLy8gaW1wb3J0IGFwaURydXBhbCBmcm9tIFwiLi9hcGkuanNcIjtcbi8vIGNvbnN0IGRtID0gbmV3IGRhbWEoKTtcblxuXG4vLyBjb25zdCBhcGkgPSBuZXcgYXBpRHJ1cGFsKCk7XG5leHBvcnQgY29uc3QgcGFnZSA9IGFzeW5jICgpID0+IHtcbiAgICAvKiBPTiBMT0FEICovXG4gICAgY29uc29sZS5sb2coJ0RhbWE6IERlc2Fycm9sbGFkbyBwcm8gMTUwJScpXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgbWlkZGxld2FyZSB7IC8vIGp1c3QgYWRkIFwiZGVmYXVsdFwiXG59Il0sInNvdXJjZVJvb3QiOiIifQ==