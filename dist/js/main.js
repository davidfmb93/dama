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
// require(`/src/${project}/sass/main.scss`)
__webpack_require__(/*! /src/sass/main.scss */ "./src/sass/main.scss");
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

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/sass/main.scss":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-1!./node_modules/css-loader/dist/cjs.js??ref--5-2!./node_modules/postcss-loader/src??ref--5-3!./node_modules/sass-loader/dist/cjs.js??ref--5-4!./src/sass/main.scss ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

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


/***/ }),

/***/ "./src/sass/main.scss":
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--5-1!../../node_modules/css-loader/dist/cjs.js??ref--5-2!../../node_modules/postcss-loader/src??ref--5-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-4!./main.scss */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/sass/main.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9kYW1hLnRzIiwid2VicGFjazovLy8uL21vZHVsZXMvZGF0YWxheWVycy50cyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2luZGV4LnRzIiwid2VicGFjazovLy8uL21vZHVsZXMvcGV0aXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nhc3MvbWFpbi5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMgc3luYyBeXFwuXFwvLipcXC50cyQiLCJ3ZWJwYWNrOi8vLy4vc3JjIHN5bmMgXlxcLlxcLy4qXFwvanNcXC9jb25maWdcXC9kYXRhbGF5ZXJzXFwudHMkIiwid2VicGFjazovLy8uL3NyYyBzeW5jIF5cXC5cXC8uKlxcL2pzXFwvY29uZmlnXFwvcm91dGVzXFwudHMkIiwid2VicGFjazovLy8uL3NyYyBzeW5jIF5cXC5cXC8uKlxcL2pzXFwvc2VydmljZXNcXC9nZW5lcmFsXFwudHMkIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2V4YW1wbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbmZpZy9kYXRhbGF5ZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb25maWcvcm91dGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9qcy9zZXJ2aWNlcy9hcGkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3NlcnZpY2VzL2dlbmVyYWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3NlcnZpY2VzL21pZGRsZXdhcmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nhc3MvbWFpbi5zY3NzPzZiNzUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtR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LE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQywyQ0FBMkMsQ0FBQztJQUM3RCxDQUFDO0lBQ0gsaUJBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7OztBQ2hCRDtBQUFBO0FBQUEsdUNBQXVDO0FBQ3ZDLG9DQUFvQztBQUNwQyx5QkFBeUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHekIsK0JBQStCO0FBQ3hCLElBQU0sSUFBSSxHQUFHOztRQUNoQixhQUFhO1FBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQzs7O0tBQzdDOzs7Ozs7Ozs7Ozs7O0FDVEQ7QUFBQTtJQUFBO0lBQ0EsQ0FBQztJQUFELGlCQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ0RELFVBQVUsbUJBQU8sQ0FBQyxzSkFBMkU7QUFDN0YsMEJBQTBCLG1CQUFPLENBQUMseWJBQXFQOztBQUV2Ujs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7QUFJQSxzQyIsImZpbGUiOiJqcy9tYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9tb2R1bGVzL2luZGV4LnRzXCIpO1xuIiwiLyoqXHJcbiAqIFxyXG4gKiBTZXJ2aWNlIERhbWEgSlNcclxuICogXHJcbiAqIFxyXG4gKi9cclxuXHJcbmV4cG9ydCBjbGFzcyBkYW1hIHtcclxuICB3ZWxjb21lKCl7XHJcbiAgICByZXR1cm4gJ3dlbGNvbWUgdG8gREFNQSdcclxuICB9XHJcbiAgY2xpY2sobmFtZTogc3RyaW5nID0gbnVsbCwgY29uZmlndXJhdGlvbjogYW55KSB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RtLWNsaWNrPScgKyBuYW1lICsgJ10nKVswXVxyXG4gICAgZWxlbWVudCAmJiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjb25maWd1cmF0aW9uLCBmYWxzZSlcclxuICAgIHJldHVybiAncmVuZGVyJztcclxuICB9XHJcbiAgaGlkZShpZHM6IGFueSA9IFtdKSB7XHJcbiAgICBpZHMubWFwKChpZDogYW55KSA9PiB7XHJcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZClcclxuICAgICAgaWYgKGVsZW1lbnQpIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgfSlcclxuICAgIHJldHVybiAncmVuZGVyJztcclxuICB9XHJcbiAgc2hvdyhpZDogc3RyaW5nID0gbnVsbCkge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKVxyXG4gICAgaWYgKGVsZW1lbnQpIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgIHJldHVybiAncmVuZGVyJztcclxuICB9XHJcbiAgLy8gaGlkZU9uZShpZCA9IG51bGwpIHtcclxuICAvLyAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZClcclxuICAvLyAgIGlmIChlbGVtZW50KSBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAvLyAgIHJldHVybiAncmVuZGVyJztcclxuICAvLyB9XHJcbiAgLy8gaGlkZVNob3coaWRIaWRlID0gbnVsbCwgaWRTaG93ID0gbnVsbCkge1xyXG4gIC8vICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZEhpZGUpXHJcbiAgLy8gICBpZiAoZWxlbWVudCkgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImRpc3BsYXk6bm9uZSAhaW1wb3J0YW50XCIpO1xyXG4gIC8vICAgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkU2hvdylcclxuICAvLyAgIGlmIChlbGVtZW50KSBlbGVtZW50LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZGlzcGxheTpibG9jayAhaW1wb3J0YW50XCIpO1xyXG4gIC8vICAgcmV0dXJuICdyZW5kZXInO1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gcHJpbnQobmFtZSwgdGV4dCkge1xyXG4gIC8vICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkbS1tb2RlbD0nICsgbmFtZSArICddJylbMF1cclxuICAvLyAgIGlmICh0eXBlb2YgZWxlbWVudCAhPSBcInVuZGVmaW5lZFwiICYmIGVsZW1lbnQgIT0gbnVsbClcclxuICAvLyAgICAgZWxlbWVudC5pbm5lckhUTUwgPSB0ZXh0O1xyXG4gIC8vICAgcmV0dXJuO1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gcHJpbnQobmFtZSwgdGV4dCkge1xyXG4gIC8vICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkbS1tb2RlbD0nICsgbmFtZSArICddJylbMF1cclxuICAvLyAgIGlmICh0eXBlb2YgZWxlbWVudCAhPSBcInVuZGVmaW5lZFwiICYmIGVsZW1lbnQgIT0gbnVsbClcclxuICAvLyAgICAgZWxlbWVudC5pbm5lckhUTUwgPSB0ZXh0O1xyXG4gIC8vICAgcmV0dXJuO1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gZ2V0SW5wdW50cyhpZHMgPSBbXSkge1xyXG4gIC8vICAgY29uc3QgZGF0YSA9IHt9XHJcbiAgLy8gICBpZHMubWFwKGlkID0+IHtcclxuICAvLyAgICAgbGV0IHZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpID8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLnZhbHVlIDogbnVsbFxyXG4gIC8vICAgICBpZiAodmFsdWUpIGRhdGFbaWRdID0gdmFsdWVcclxuICAvLyAgIH0pXHJcbiAgLy8gICByZXR1cm4gZGF0YTtcclxuICAvLyB9XHJcblxyXG5cclxuICAvLyAgZ2V0RGF0YUZvcm0oZm9ybTogYW55KXtcclxuICAvLyAgICBsZXQgcmVxdWVzdCA9IHt9LCB2YWx1ZVxyXG4gIC8vICAgIGZvcm0udGFyZ2V0LmZvckVhY2goZWxlbWVudCA9PntcclxuICAvLyAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnQudHlwZSlcclxuICAvLyAgICAgIC8vIHNpIGVzIHVuIHNlbGVjdCBtdWx0aXBsZSBndWFyZGFtb3MgbG9zIHZhbG9yZXMgc2kgbm8gZ3VhcmRhbW9zIGVsIGVsZW1lbnRvXHJcbiAgLy8gICAgICBsZXQgaXNTZWxlY3RNdWx0aXBsZSA9IGVsZW1lbnQuaGFzQXR0cmlidXRlKFwibXVsdGlwbGVcIilcclxuICAvLyAgICAgIHZhbHVlID0gaXNTZWxlY3RNdWx0aXBsZSA/IFsuLi5lbGVtZW50Lm9wdGlvbnNdLmZpbHRlcihvcHRpb24gPT4gb3B0aW9uLnNlbGVjdGVkKS5tYXAob3B0aW9uID0+IG9wdGlvbi52YWx1ZSkgOiBlbGVtZW50LnZhbHVlXHJcbiAgLy8gICAgICAvL1Blcm8gc2kgZXMgdW4gY2hla2JveCwgZ3VhcmRhbW9zIGVsIHZhbG9yIGRlbCBjaGVja2JveCwgcGVybyBwcmltZXJvIHZlcmlmaWNhbW9zIHNpIGVzIHVuIGNoZWNrYm94XHJcbiAgLy8gICAgICB2YWx1ZSA9IGVsZW1lbnQudHlwZSA9PSBcImNoZWNrYm94XCIgPyBTdHJpbmcoZWxlbWVudC5jaGVja2VkKSA6IGVsZW1lbnQudmFsdWVcclxuICAvLyAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnQubmFtZSwgXCI6XCIsIHZhbHVlKVxyXG4gIC8vICAgICAgLy9GaW5hbG1lbnRlIGd1YXJkYW1vcyBlbiBudWVzdHJvIG9iamV0b1xyXG4gIC8vICAgICAgaWYoZWxlbWVudC5uYW1lICYmIHZhbHVlLmxlbmd0aCkgcmVxdWVzdFtlbGVtZW50Lm5hbWVdID0gdmFsdWVcclxuICAvLyAgICB9KVxyXG4gIC8vICAgIHJldHVybiByZXF1ZXN0O1xyXG4gIC8vICB9XHJcbn0iLCJjb25zdCBwcm9qZWN0ID0gXCJiYXNlXCJcclxuY29uc3QgeyBsYXllcnMgfSA9IHJlcXVpcmUoYC9zcmMvJHtwcm9qZWN0fS9qcy9jb25maWcvZGF0YWxheWVycy50c2ApXHJcblxyXG5kZWNsYXJlIGdsb2JhbCB7XHJcbiAgICBpbnRlcmZhY2UgV2luZG93IHtcclxuICAgICAgICBkYW1hOiBhbnkgICAsXHJcbiAgICAgICAgZGF0YWxheWVyOiBhbnkgIFxyXG4gICAgICAgIFNIQTI1NjogYW55LFxyXG4gICAgfVxyXG59XHJcblxyXG53aW5kb3cuZGFtYSA9IHdpbmRvdy5kYW1hIHx8IHt9O1xyXG5cclxud2luZG93LmRhbWEuaW5mbyA9ICdEZXNhcnJvbGxhZG8gZW4gMTUwJSBwb3IgRGF2aWQgTWFydGluZXonXHJcblxyXG53aW5kb3cuZGFtYS5zZXREYXRhbGF5ZXIgPSAoc2VsZWN0OiBzdHJpbmcsIGxhYmVsOiBzdHJpbmcpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgbGV0IGRhdGFMYXllckZvdW5kID0gIGxheWVycy5maW5kKCAodmFsdWU6YW55KSA9PiB2YWx1ZS5uYW1lID09IHNlbGVjdCk7XHJcbiAgICAgICAgdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyA/IHB1c2hMYXllcihkYXRhTGF5ZXJGb3VuZCwgbGFiZWwpIDogIGNvbnNvbGUubG9nKCclYyBQb3IgZmF2b3IgY29uZmlndXJhciBlbCBEYXRhbGF5ZXIsIG5vIGVuY29udHJhZG8hICcsICdiYWNrZ3JvdW5kOiAjMjIyOyBjb2xvcjogI2JhZGE1NScpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCclYyBEYXRhbGF5ZXIgRXJyb3IhICcsICdiYWNrZ3JvdW5kOiByZWQ7IGNvbG9yOiAjYmFkYTU1Jyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHB1c2hMYXllcihkYXRhTGF5ZXJGb3VuZDogYW55LCBsYWJlbDogc3RyaW5nICl7XHJcbiAgICBjb25zdCBlbmNyeXB0ZWQ6IEJvb2xlYW4gPSBkYXRhTGF5ZXJGb3VuZFsnZW5jcnlwdGVkJ11cclxuICAgIGRlbGV0ZSBkYXRhTGF5ZXJGb3VuZFsnbmFtZSddXHJcbiAgICBkYXRhTGF5ZXJGb3VuZFsnZXZlbnRMYWJlbCddICA9IGxhYmVsID8gKGVuY3J5cHRlZCA/IHdpbmRvdy5TSEEyNTYobGFiZWwpIDogbGFiZWwpIDogZGF0YUxheWVyRm91bmRbJ2V2ZW50TGFiZWwnXVxyXG4gICAgd2luZG93LmRhdGFsYXllci5wdXNoKGRhdGFMYXllckZvdW5kKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGRhdGFsYXllcnMgPSBhc3luYyAoKSA9PiB7fVxyXG4iLCJjb25zdCBwcm9qZWN0OiBzdHJpbmcgPSBcIlwiXHJcbi8vIElNUE9SVCBTQVNTXHJcbi8vIHJlcXVpcmUoYC9zcmMvJHtwcm9qZWN0fS9zYXNzL21haW4uc2Nzc2ApXHJcbnJlcXVpcmUoYC9zcmMvc2Fzcy9tYWluLnNjc3NgKVxyXG4vLyBJTVBPUlQgUk9VVEVTIFxyXG5jb25zdCB7IHJvdXRlcyB9ID0gcmVxdWlyZShgL3NyYy8ke3Byb2plY3R9L2pzL2NvbmZpZy9yb3V0ZXMudHNgKVxyXG5cclxubGV0IHJvdXRlOiBhbnkgPSByb3V0ZXMuZmluZCgoaXRlbTogYW55KSA9PiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT0gaXRlbS5wYXRoKVxyXG5cclxucmVxdWlyZShgL3NyYy8ke3Byb2plY3R9L2pzL3NlcnZpY2VzL2dlbmVyYWwudHNgKS5wYWdlKClcclxucmVxdWlyZShgL21vZHVsZXMvZGF0YWxheWVycy50c2ApXHJcbnJvdXRlID8gcmVxdWlyZShgL3NyYy8ke3Byb2plY3R9L2pzL2NvbXBvbmVudHMvYCArIHJvdXRlLmNvbXBvbmVudCArICcudHMnKS5wYWdlKCkgOiByb3V0ZURvbnRGb3VuZCgpXHJcbi8qKlxyXG4gKiBkaW5hbWljUm91dGVzXHJcbiAqIFxyXG4gKiBUaGlzIGZ1bmN0aW9uIGdlbmVyYXRlIHRoZSBkaW5hbWljIHJvdXRlcyB3aGVuIHl1IHNlbmQgaW4gdGhlIHJvdXRlIDpcclxuICogXHJcbiAqIEByZXR1cm5zIFxyXG4gKi9cclxuZnVuY3Rpb24gZGluYW1pY1JvdXRlcygpe1xyXG4gIGxldCBvdGhlclJvdXRlczphbnkgPSByb3V0ZXMuZmlsdGVyKChpdGVtOiBhbnkpID0+IGl0ZW0ucGF0aC5pbmNsdWRlcygnOicpKVxyXG4gIGxldCBnZXRSb3V0ZUN1cnJlbnQ6YW55ID0gbG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoJy8nKVxyXG4gIGxldCByZXF1ZXN0Om9iamVjdCA9IHt9XHJcbiAgb3RoZXJSb3V0ZXMubWFwKCAocm91dGU6IGFueSkgPT4gcmVxdWVzdCA9IGdldFJvdXRlQ3VycmVudFsxXSA9PSAocm91dGUucGF0aC5zcGxpdCgnLycpKVsxXSA/IHsgJ3N0YXR1cyc6IHRydWUsICdyb3V0ZSc6IHJvdXRlfSA6IHsgJ3N0YXR1cyc6IGZhbHNlIH0pXHJcbiAgcmV0dXJuIHJlcXVlc3RcclxufVxyXG5cclxuLyoqXHJcbiAqIHJvdXRlRG9udEZvdW5kXHJcbiAqIFxyXG4gKiBUaGlzIGZ1bmN0aW9uIHdvcmsgd2hlbiByb3V0ZSB3YXNuJ3QgZm91bmRcclxuICogXHJcbiAqIEByZXR1cm5zIFxyXG4gKi9cclxuZnVuY3Rpb24gcm91dGVEb250Rm91bmQoKXtcclxuICBjb25zdCBkaW5hbWljOiBhbnkgPSBkaW5hbWljUm91dGVzKCk7XHJcbiAgZGluYW1pYy5zdGF0dXMgJiYgcmVxdWlyZShgL3NyYy8ke3Byb2plY3R9L2pzL2NvbXBvbmVudHMvJHtkaW5hbWljLnJvdXRlLmNvbXBvbmVudH0udHNgKS5wYWdlKClcclxufSIsIlxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQZXRpdGlvbiB7XHJcbiBnZXQodXJsOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGZldGNoKHVybClcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4gcmVzb2x2ZShkYXRhKSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgXHJcbiAgcG9zdCh1cmw6IHN0cmluZywgZGF0YTogb2JqZWN0KSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBmZXRjaCh1cmwsIHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLCAvLyBvciAnUFVUJ1xyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLCAvLyBkYXRhIGNhbiBiZSBgc3RyaW5nYCBvciB7b2JqZWN0fSFcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICB9LFxyXG4gICAgICB9KVxyXG4gICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gcmVqZWN0KGVycm9yKSlcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc29sdmUocmVzcG9uc2UpKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHV0KHVybDogc3RyaW5nLCBkYXRhOiBvYmplY3QpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGZldGNoKHVybCwge1xyXG4gICAgICAgIG1ldGhvZDogXCJQVVRcIiwgLy8gb3IgJ1BVVCdcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSwgLy8gZGF0YSBjYW4gYmUgYHN0cmluZ2Agb3Ige29iamVjdH0hXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSlcclxuICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHJlamVjdChlcnJvcikpXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNvbHZlKHJlc3BvbnNlKSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuICAiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsInZhciBtYXAgPSB7XG5cdFwiLi9qcy9jb21wb25lbnRzL2V4YW1wbGUudHNcIjogXCIuL3NyYy9qcy9jb21wb25lbnRzL2V4YW1wbGUudHNcIixcblx0XCIuL2pzL2NvbmZpZy9kYXRhbGF5ZXJzLnRzXCI6IFwiLi9zcmMvanMvY29uZmlnL2RhdGFsYXllcnMudHNcIixcblx0XCIuL2pzL2NvbmZpZy9yb3V0ZXMudHNcIjogXCIuL3NyYy9qcy9jb25maWcvcm91dGVzLnRzXCIsXG5cdFwiLi9qcy9zZXJ2aWNlcy9hcGkudHNcIjogXCIuL3NyYy9qcy9zZXJ2aWNlcy9hcGkudHNcIixcblx0XCIuL2pzL3NlcnZpY2VzL2dlbmVyYWwudHNcIjogXCIuL3NyYy9qcy9zZXJ2aWNlcy9nZW5lcmFsLnRzXCIsXG5cdFwiLi9qcy9zZXJ2aWNlcy9taWRkbGV3YXJlLnRzXCI6IFwiLi9zcmMvanMvc2VydmljZXMvbWlkZGxld2FyZS50c1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYyBzeW5jIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qXFxcXC50cyRcIjsiLCJmdW5jdGlvbiB3ZWJwYWNrRW1wdHlDb250ZXh0KHJlcSkge1xuXHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0dGhyb3cgZTtcbn1cbndlYnBhY2tFbXB0eUNvbnRleHQua2V5cyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gW107IH07XG53ZWJwYWNrRW1wdHlDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrRW1wdHlDb250ZXh0O1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrRW1wdHlDb250ZXh0O1xud2VicGFja0VtcHR5Q29udGV4dC5pZCA9IFwiLi9zcmMgc3luYyByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKlxcXFwvanNcXFxcL2NvbmZpZ1xcXFwvZGF0YWxheWVyc1xcXFwudHMkXCI7IiwiZnVuY3Rpb24gd2VicGFja0VtcHR5Q29udGV4dChyZXEpIHtcblx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdHRocm93IGU7XG59XG53ZWJwYWNrRW1wdHlDb250ZXh0LmtleXMgPSBmdW5jdGlvbigpIHsgcmV0dXJuIFtdOyB9O1xud2VicGFja0VtcHR5Q29udGV4dC5yZXNvbHZlID0gd2VicGFja0VtcHR5Q29udGV4dDtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0VtcHR5Q29udGV4dDtcbndlYnBhY2tFbXB0eUNvbnRleHQuaWQgPSBcIi4vc3JjIHN5bmMgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLipcXFxcL2pzXFxcXC9jb25maWdcXFxcL3JvdXRlc1xcXFwudHMkXCI7IiwiZnVuY3Rpb24gd2VicGFja0VtcHR5Q29udGV4dChyZXEpIHtcblx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdHRocm93IGU7XG59XG53ZWJwYWNrRW1wdHlDb250ZXh0LmtleXMgPSBmdW5jdGlvbigpIHsgcmV0dXJuIFtdOyB9O1xud2VicGFja0VtcHR5Q29udGV4dC5yZXNvbHZlID0gd2VicGFja0VtcHR5Q29udGV4dDtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0VtcHR5Q29udGV4dDtcbndlYnBhY2tFbXB0eUNvbnRleHQuaWQgPSBcIi4vc3JjIHN5bmMgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLipcXFxcL2pzXFxcXC9zZXJ2aWNlc1xcXFwvZ2VuZXJhbFxcXFwudHMkXCI7IiwiaW1wb3J0IHsgZGFtYSB9IGZyb20gXCIuLi4vLi4vLi4vbW9kdWxlcy9kYW1hXCI7XHJcbmltcG9ydCB7IGFwaVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvYXBpXCI7XHJcbi8qKlxyXG4gKiBVc2UgUGV0aXRpb25cclxuICogXHJcbiAqIFlvdSBtdXN0IHVzZSBwZXQuZ2V0KHVybCkgb3IgcGV0LnBvc3QodXJsLCBkYXRhKSBcclxuICovXHJcbmNvbnN0IGFwaSA9IG5ldyBhcGlTZXJ2aWNlKCk7XHJcbi8qKlxyXG4gKiBVc2UgRGFtYVxyXG4gKiBcclxuICogRGFtYSBoYXMgYSBsb3Qgb2YgZnVuY3Rpb24gdG8gaGVscCB0byBkZXZlbG9wZXIsIHRoaXMgZnVuY3Rpb24geW91IGNhbiBnZXQgaW4gdGhlIG5leHQgdXJsXHJcbiAqIFxyXG4gKi9cclxuY29uc3QgZG0gPSBuZXcgZGFtYSgpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHBhZ2UgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc29sZS5sb2coJ0FwaTonLCBhcGkuZXhhbXBsZSgpKVxyXG4gIGNvbnNvbGUubG9nKCdEYW1hOicsIGRtLndlbGNvbWUoKSlcclxufVxyXG5cclxuXHJcblxyXG4iLCIvKipcclxuICogQ2FsbCBEYXRhbGF5ZXJcclxuICogXHJcbiAqIENhbGwgZGF0YWxheWVyIHlvdSBuZWVkIHJlZ2lzdGVyIHRoaXMgbGlrZSBhYm92ZSwgc28geW91IGNhbiBjYWxsIHRoaXMgd2l0aCB0aGUgbmV4dCBmdW5jdGlvbiB3aGVuIHRoZSBldmVudCBpcyBjbGljXHJcbiAqICAgICAgZGF0YURhdGFMYXllcnMoJ25hbWUtc2VsZWN0ZWQnLCAnbGFiZWwtd2l0aG91dC1lbmNyeXB0JyksIGZvciBleGFtcGxlXHJcbiAqICAgICAgZGF0YURhdGFMYXllcnMoJ3N0YXJ0R2FtZScsICdkYXZpZGZtYjkzQGdtYWlsLmNvbScpXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgbGF5ZXJzOiBvYmplY3QgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgJ25hbWUnOiAnTkFNRScsXHJcbiAgICAgICAgJ2V2ZW50JzogJ3RyYWNrRXZlbnQnLFxyXG4gICAgICAgICdldmVudENhdGVnb3J5JzogJ0NBVEVHT1JZJywgLy8gQ2F0ZWdvcsOtYSBkZWwgZXZlbnRvIChTdHJpbmcpLiBSZXF1ZXJpZG8uXHJcbiAgICAgICAgJ2V2ZW50QWN0aW9uJzogJ0FDVElPTicsIC8vIEFjY2nDs24gbyBzdWJjYXRlZ29yw61hIGRlbCBldmVudG8gKFN0cmluZykuIFJlcXVlcmlkby5cclxuICAgICAgICAnZXZlbnRMYWJlbCc6ICdMQUJFTCcsIC8vIEV0aXF1ZXRhIGRlIGRlc2NyaXBjacOzbiBkZWwgZXZlbnRvIChTdHJpbmcpLiBSZXF1ZXJpZG8uXHJcbiAgICAgICAgJ2VuY3J5cHRlZCc6IGZhbHNlIC8vIGVuY3J5cHRlZCBMYWJlbFxyXG4gICAgfVxyXG5dXHJcblxyXG4iLCJleHBvcnQgY29uc3Qgcm91dGVzID0gW1xyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdpbmRleCcsXHJcbiAgICAgICAgcGF0aDogJy8nLFxyXG4gICAgICAgIGNvbXBvbmVudDogJ2V4YW1wbGUnXHJcbiAgICB9LFxyXG5dXHJcbiIsImltcG9ydCAgUGV0aXRpb24gIGZyb20gXCIuLi4vLi4vLi4vbW9kdWxlcy9wZXRpdGlvblwiO1xyXG5cclxuLyoqXHJcbiAqIFVzZSBQZXRpdGlvblxyXG4gKiBcclxuICogWW91IG11c3QgdXNlIHBldC5nZXQodXJsKSBvciBwZXQucG9zdCh1cmwsIGRhdGEpIFxyXG4gKi9cclxuY29uc3QgcGV0ID0gbmV3IFBldGl0aW9uKClcclxuXHJcbmV4cG9ydCBjbGFzcyBhcGlTZXJ2aWNlIHtcclxuICB3ZWxjb21lKCl7XHJcbiAgICByZXR1cm4gJ3dlbGNvbWUgdG8gQXBpU2VydmljZSc7XHJcbiAgfVxyXG4gIGV4YW1wbGUoKXtcclxuICAgIHJldHVybiBwZXQuZ2V0KCdodHRwOi8vYXBpLjE1MHBvcmNpZW50by5jb20vYXBpL2NvdW50cmllcycpXHJcbiAgfVxyXG59IiwiLy8gaW1wb3J0IGRhbWEgZnJvbSBcIi9tb2R1bGVzL2RhbWEuanNcIjtcclxuLy8gaW1wb3J0IGFwaURydXBhbCBmcm9tIFwiLi9hcGkuanNcIjtcclxuLy8gY29uc3QgZG0gPSBuZXcgZGFtYSgpO1xyXG5cclxuXHJcbi8vIGNvbnN0IGFwaSA9IG5ldyBhcGlEcnVwYWwoKTtcclxuZXhwb3J0IGNvbnN0IHBhZ2UgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAvKiBPTiBMT0FEICovXHJcbiAgICBjb25zb2xlLmxvZygnRGFtYTogRGVzYXJyb2xsYWRvIHBybyAxNTAlJylcclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIG1pZGRsZXdhcmUgeyAvLyBqdXN0IGFkZCBcImRlZmF1bHRcIlxyXG59IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tNS0xIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtMiEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTUtMyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS00IS4vbWFpbi5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiXSwic291cmNlUm9vdCI6IiJ9