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
var layers = __webpack_require__(/*! /src/js/config/datalayers.ts */ "./src/js/config/datalayers.ts").layers;
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

// IMPORT SASS
__webpack_require__(/*! /src/sass/main.scss */ "./src/sass/main.scss");
// IMPORT ROUTES 
var routes = __webpack_require__(/*! /src/js/config/routes.ts */ "./src/js/config/routes.ts").routes;
var route = routes.find(function (item) {
    var responseItem = Array.isArray(item.path) ?
        item.path.some(function (itemPath) { return checkRoutePath(itemPath); }) :
        checkRoutePath(item.path);
    return responseItem;
});
// Check route with location pathname
function checkRoutePath(itemPath) {
    return window.location.pathname === itemPath;
}
__webpack_require__(/*! /src/js/services/general.ts */ "./src/js/services/general.ts").page();
__webpack_require__(/*! /modules/datalayers.ts */ "./modules/datalayers.ts");
// console.log( route.hasOwnProperty('page') ? 'has page' : 'has not page' )
route ? __webpack_require__("./src/js sync recursive ^\\.\\/.*$")("./" + (route.hasOwnProperty('page') ? "pages/" + route.page + ".ts" : "components/" + route.component + ".ts")).page() : routeDontFound();
// route ? require(`/src/js/components/` + route.component + '.ts').page() : routeDontFound()
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
    dinamic.status && __webpack_require__("./src/js/components sync recursive ^\\.\\/.*\\.ts$")("./" + dinamic.route.component + ".ts").page();
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

/***/ "./src/js sync recursive ^\\.\\/.*$":
/*!******************************!*\
  !*** ./src/js sync ^\.\/.*$ ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./components/example": "./src/js/components/example.ts",
	"./components/example.ts": "./src/js/components/example.ts",
	"./config/datalayers": "./src/js/config/datalayers.ts",
	"./config/datalayers.ts": "./src/js/config/datalayers.ts",
	"./config/routes": "./src/js/config/routes.ts",
	"./config/routes.ts": "./src/js/config/routes.ts",
	"./pages/pageEx": "./src/js/pages/pageEx.ts",
	"./pages/pageEx.ts": "./src/js/pages/pageEx.ts",
	"./services/api": "./src/js/services/api.ts",
	"./services/api.ts": "./src/js/services/api.ts",
	"./services/general": "./src/js/services/general.ts",
	"./services/general.ts": "./src/js/services/general.ts",
	"./services/middleware": "./src/js/services/middleware.ts",
	"./services/middleware.ts": "./src/js/services/middleware.ts"
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
webpackContext.id = "./src/js sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./src/js/components sync recursive ^\\.\\/.*\\.ts$":
/*!*********************************************!*\
  !*** ./src/js/components sync ^\.\/.*\.ts$ ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./example.ts": "./src/js/components/example.ts"
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
webpackContext.id = "./src/js/components sync recursive ^\\.\\/.*\\.ts$";

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
        console.log('Home');
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
        path: ['/', '/index.html'],
        component: 'example'
    },
    {
        name: 'test',
        path: '/page-ex.html',
        page: 'pageEx'
    }
];


/***/ }),

/***/ "./src/js/pages/pageEx.ts":
/*!********************************!*\
  !*** ./src/js/pages/pageEx.ts ***!
  \********************************/
/*! exports provided: page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "page", function() { return page; });
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
var page = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        console.log('Yeah');
        return [2 /*return*/];
    });
}); };


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
        console.log('Dama: Desarrollado por 150%');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9kYW1hLnRzIiwid2VicGFjazovLy8uL21vZHVsZXMvZGF0YWxheWVycy50cyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2luZGV4LnRzIiwid2VicGFjazovLy8uL21vZHVsZXMvcGV0aXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nhc3MvbWFpbi5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMgc3luYyBeXFwuXFwvLiokIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzIHN5bmMgXlxcLlxcLy4qXFwudHMkIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2V4YW1wbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbmZpZy9kYXRhbGF5ZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb25maWcvcm91dGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9qcy9wYWdlcy9wYWdlRXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3NlcnZpY2VzL2FwaS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc2VydmljZXMvZ2VuZXJhbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc2VydmljZXMvbWlkZGxld2FyZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Fzcy9tYWluLnNjc3M/NmI3NSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7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UUFDSSxJQUFJLEVBQUUsTUFBTTtRQUNaLElBQUksRUFBRSxlQUFlO1FBQ3JCLElBQUksRUFBRSxRQUFRO0tBQ2pCO0NBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hNLElBQU0sSUFBSSxHQUFHOztRQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQzs7O0tBQ25COzs7Ozs7Ozs7Ozs7O0FDRkQ7QUFBQTtBQUFBO0FBQW9EO0FBRXBEOzs7O0dBSUc7QUFDSCxJQUFNLEdBQUcsR0FBRyxJQUFJLHlEQUFRLEVBQUU7QUFFMUI7SUFBQTtJQU9BLENBQUM7SUFOQyw0QkFBTyxHQUFQO1FBQ0UsT0FBTyx1QkFBdUIsQ0FBQztJQUNqQyxDQUFDO0lBQ0QsNEJBQU8sR0FBUDtRQUNFLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQywyQ0FBMkMsQ0FBQztJQUM3RCxDQUFDO0lBQ0gsaUJBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7OztBQ2hCRDtBQUFBO0FBQUEsdUNBQXVDO0FBQ3ZDLG9DQUFvQztBQUNwQyx5QkFBeUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHekIsK0JBQStCO0FBQ3hCLElBQU0sSUFBSSxHQUFHOztRQUNoQixhQUFhO1FBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQzs7O0tBQzdDOzs7Ozs7Ozs7Ozs7O0FDVEQ7QUFBQTtJQUFBO0lBQ0EsQ0FBQztJQUFELGlCQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ0RELFVBQVUsbUJBQU8sQ0FBQyxzSkFBMkU7QUFDN0YsMEJBQTBCLG1CQUFPLENBQUMseWJBQXFQOztBQUV2Ujs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7QUFJQSxzQyIsImZpbGUiOiJqcy9tYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9tb2R1bGVzL2luZGV4LnRzXCIpO1xuIiwiLyoqXHJcbiAqIFxyXG4gKiBTZXJ2aWNlIERhbWEgSlNcclxuICogXHJcbiAqIFxyXG4gKi9cclxuXHJcbmV4cG9ydCBjbGFzcyBkYW1hIHtcclxuICB3ZWxjb21lKCl7XHJcbiAgICByZXR1cm4gJ3dlbGNvbWUgdG8gREFNQSdcclxuICB9XHJcbiAgY2xpY2sobmFtZTogc3RyaW5nID0gbnVsbCwgY29uZmlndXJhdGlvbjogYW55KSB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RtLWNsaWNrPScgKyBuYW1lICsgJ10nKVswXVxyXG4gICAgZWxlbWVudCAmJiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjb25maWd1cmF0aW9uLCBmYWxzZSlcclxuICAgIHJldHVybiAncmVuZGVyJztcclxuICB9XHJcbiAgaGlkZShpZHM6IGFueSA9IFtdKSB7XHJcbiAgICBpZHMubWFwKChpZDogYW55KSA9PiB7XHJcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZClcclxuICAgICAgaWYgKGVsZW1lbnQpIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgfSlcclxuICAgIHJldHVybiAncmVuZGVyJztcclxuICB9XHJcbiAgc2hvdyhpZDogc3RyaW5nID0gbnVsbCkge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKVxyXG4gICAgaWYgKGVsZW1lbnQpIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgIHJldHVybiAncmVuZGVyJztcclxuICB9XHJcbiAgLy8gaGlkZU9uZShpZCA9IG51bGwpIHtcclxuICAvLyAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZClcclxuICAvLyAgIGlmIChlbGVtZW50KSBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAvLyAgIHJldHVybiAncmVuZGVyJztcclxuICAvLyB9XHJcbiAgLy8gaGlkZVNob3coaWRIaWRlID0gbnVsbCwgaWRTaG93ID0gbnVsbCkge1xyXG4gIC8vICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZEhpZGUpXHJcbiAgLy8gICBpZiAoZWxlbWVudCkgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImRpc3BsYXk6bm9uZSAhaW1wb3J0YW50XCIpO1xyXG4gIC8vICAgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkU2hvdylcclxuICAvLyAgIGlmIChlbGVtZW50KSBlbGVtZW50LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZGlzcGxheTpibG9jayAhaW1wb3J0YW50XCIpO1xyXG4gIC8vICAgcmV0dXJuICdyZW5kZXInO1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gcHJpbnQobmFtZSwgdGV4dCkge1xyXG4gIC8vICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkbS1tb2RlbD0nICsgbmFtZSArICddJylbMF1cclxuICAvLyAgIGlmICh0eXBlb2YgZWxlbWVudCAhPSBcInVuZGVmaW5lZFwiICYmIGVsZW1lbnQgIT0gbnVsbClcclxuICAvLyAgICAgZWxlbWVudC5pbm5lckhUTUwgPSB0ZXh0O1xyXG4gIC8vICAgcmV0dXJuO1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gcHJpbnQobmFtZSwgdGV4dCkge1xyXG4gIC8vICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkbS1tb2RlbD0nICsgbmFtZSArICddJylbMF1cclxuICAvLyAgIGlmICh0eXBlb2YgZWxlbWVudCAhPSBcInVuZGVmaW5lZFwiICYmIGVsZW1lbnQgIT0gbnVsbClcclxuICAvLyAgICAgZWxlbWVudC5pbm5lckhUTUwgPSB0ZXh0O1xyXG4gIC8vICAgcmV0dXJuO1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gZ2V0SW5wdW50cyhpZHMgPSBbXSkge1xyXG4gIC8vICAgY29uc3QgZGF0YSA9IHt9XHJcbiAgLy8gICBpZHMubWFwKGlkID0+IHtcclxuICAvLyAgICAgbGV0IHZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpID8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLnZhbHVlIDogbnVsbFxyXG4gIC8vICAgICBpZiAodmFsdWUpIGRhdGFbaWRdID0gdmFsdWVcclxuICAvLyAgIH0pXHJcbiAgLy8gICByZXR1cm4gZGF0YTtcclxuICAvLyB9XHJcblxyXG5cclxuICAvLyAgZ2V0RGF0YUZvcm0oZm9ybTogYW55KXtcclxuICAvLyAgICBsZXQgcmVxdWVzdCA9IHt9LCB2YWx1ZVxyXG4gIC8vICAgIGZvcm0udGFyZ2V0LmZvckVhY2goZWxlbWVudCA9PntcclxuICAvLyAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnQudHlwZSlcclxuICAvLyAgICAgIC8vIHNpIGVzIHVuIHNlbGVjdCBtdWx0aXBsZSBndWFyZGFtb3MgbG9zIHZhbG9yZXMgc2kgbm8gZ3VhcmRhbW9zIGVsIGVsZW1lbnRvXHJcbiAgLy8gICAgICBsZXQgaXNTZWxlY3RNdWx0aXBsZSA9IGVsZW1lbnQuaGFzQXR0cmlidXRlKFwibXVsdGlwbGVcIilcclxuICAvLyAgICAgIHZhbHVlID0gaXNTZWxlY3RNdWx0aXBsZSA/IFsuLi5lbGVtZW50Lm9wdGlvbnNdLmZpbHRlcihvcHRpb24gPT4gb3B0aW9uLnNlbGVjdGVkKS5tYXAob3B0aW9uID0+IG9wdGlvbi52YWx1ZSkgOiBlbGVtZW50LnZhbHVlXHJcbiAgLy8gICAgICAvL1Blcm8gc2kgZXMgdW4gY2hla2JveCwgZ3VhcmRhbW9zIGVsIHZhbG9yIGRlbCBjaGVja2JveCwgcGVybyBwcmltZXJvIHZlcmlmaWNhbW9zIHNpIGVzIHVuIGNoZWNrYm94XHJcbiAgLy8gICAgICB2YWx1ZSA9IGVsZW1lbnQudHlwZSA9PSBcImNoZWNrYm94XCIgPyBTdHJpbmcoZWxlbWVudC5jaGVja2VkKSA6IGVsZW1lbnQudmFsdWVcclxuICAvLyAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnQubmFtZSwgXCI6XCIsIHZhbHVlKVxyXG4gIC8vICAgICAgLy9GaW5hbG1lbnRlIGd1YXJkYW1vcyBlbiBudWVzdHJvIG9iamV0b1xyXG4gIC8vICAgICAgaWYoZWxlbWVudC5uYW1lICYmIHZhbHVlLmxlbmd0aCkgcmVxdWVzdFtlbGVtZW50Lm5hbWVdID0gdmFsdWVcclxuICAvLyAgICB9KVxyXG4gIC8vICAgIHJldHVybiByZXF1ZXN0O1xyXG4gIC8vICB9XHJcbn0iLCJjb25zdCB7IGxheWVycyB9ID0gcmVxdWlyZShgL3NyYy9qcy9jb25maWcvZGF0YWxheWVycy50c2ApXHJcblxyXG5kZWNsYXJlIGdsb2JhbCB7XHJcbiAgICBpbnRlcmZhY2UgV2luZG93IHtcclxuICAgICAgICBkYW1hOiBhbnkgICAsXHJcbiAgICAgICAgZGF0YWxheWVyOiBhbnkgIFxyXG4gICAgICAgIFNIQTI1NjogYW55LFxyXG4gICAgfVxyXG59XHJcblxyXG53aW5kb3cuZGFtYSA9IHdpbmRvdy5kYW1hIHx8IHt9O1xyXG5cclxud2luZG93LmRhbWEuaW5mbyA9ICdEZXNhcnJvbGxhZG8gZW4gMTUwJSBwb3IgRGF2aWQgTWFydGluZXonXHJcblxyXG53aW5kb3cuZGFtYS5zZXREYXRhbGF5ZXIgPSAoc2VsZWN0OiBzdHJpbmcsIGxhYmVsOiBzdHJpbmcpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgbGV0IGRhdGFMYXllckZvdW5kID0gIGxheWVycy5maW5kKCAodmFsdWU6YW55KSA9PiB2YWx1ZS5uYW1lID09IHNlbGVjdCk7XHJcbiAgICAgICAgdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyA/IHB1c2hMYXllcihkYXRhTGF5ZXJGb3VuZCwgbGFiZWwpIDogIGNvbnNvbGUubG9nKCclYyBQb3IgZmF2b3IgY29uZmlndXJhciBlbCBEYXRhbGF5ZXIsIG5vIGVuY29udHJhZG8hICcsICdiYWNrZ3JvdW5kOiAjMjIyOyBjb2xvcjogI2JhZGE1NScpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCclYyBEYXRhbGF5ZXIgRXJyb3IhICcsICdiYWNrZ3JvdW5kOiByZWQ7IGNvbG9yOiAjYmFkYTU1Jyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHB1c2hMYXllcihkYXRhTGF5ZXJGb3VuZDogYW55LCBsYWJlbDogc3RyaW5nICl7XHJcbiAgICBjb25zdCBlbmNyeXB0ZWQ6IEJvb2xlYW4gPSBkYXRhTGF5ZXJGb3VuZFsnZW5jcnlwdGVkJ11cclxuICAgIGRlbGV0ZSBkYXRhTGF5ZXJGb3VuZFsnbmFtZSddXHJcbiAgICBkYXRhTGF5ZXJGb3VuZFsnZXZlbnRMYWJlbCddICA9IGxhYmVsID8gKGVuY3J5cHRlZCA/IHdpbmRvdy5TSEEyNTYobGFiZWwpIDogbGFiZWwpIDogZGF0YUxheWVyRm91bmRbJ2V2ZW50TGFiZWwnXVxyXG4gICAgd2luZG93LmRhdGFsYXllci5wdXNoKGRhdGFMYXllckZvdW5kKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGRhdGFsYXllcnMgPSBhc3luYyAoKSA9PiB7fVxyXG4iLCIvLyBJTVBPUlQgU0FTU1xyXG5yZXF1aXJlKGAvc3JjL3Nhc3MvbWFpbi5zY3NzYClcclxuXHJcbi8vIElNUE9SVCBST1VURVMgXHJcbmNvbnN0IHsgcm91dGVzIH0gPSByZXF1aXJlKGAvc3JjL2pzL2NvbmZpZy9yb3V0ZXMudHNgKVxyXG5cclxubGV0IHJvdXRlOiBhbnkgPSByb3V0ZXMuZmluZCggKGl0ZW06IGFueSkgPT4ge1xyXG5cdGNvbnN0IHJlc3BvbnNlSXRlbTpib29sZWFuID0gQXJyYXkuaXNBcnJheShpdGVtLnBhdGgpID9cclxuXHRcdGl0ZW0ucGF0aC5zb21lKCAoaXRlbVBhdGg6c3RyaW5nKSA9PiBjaGVja1JvdXRlUGF0aChpdGVtUGF0aCkgKSA6XHJcblx0XHRjaGVja1JvdXRlUGF0aChpdGVtLnBhdGgpXHJcblxyXG5cdHJldHVybiByZXNwb25zZUl0ZW1cclxufSlcclxuXHJcbi8vIENoZWNrIHJvdXRlIHdpdGggbG9jYXRpb24gcGF0aG5hbWVcclxuZnVuY3Rpb24gY2hlY2tSb3V0ZVBhdGgoIGl0ZW1QYXRoOmFueSApOmJvb2xlYW4ge1xyXG5cdHJldHVybiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT09IGl0ZW1QYXRoXHJcbn1cclxuXHJcbnJlcXVpcmUoYC9zcmMvanMvc2VydmljZXMvZ2VuZXJhbC50c2ApLnBhZ2UoKVxyXG5yZXF1aXJlKGAvbW9kdWxlcy9kYXRhbGF5ZXJzLnRzYClcclxuLy8gY29uc29sZS5sb2coIHJvdXRlLmhhc093blByb3BlcnR5KCdwYWdlJykgPyAnaGFzIHBhZ2UnIDogJ2hhcyBub3QgcGFnZScgKVxyXG5yb3V0ZSA/IHJlcXVpcmUoYC9zcmMvanMvJHsgcm91dGUuaGFzT3duUHJvcGVydHkoJ3BhZ2UnKSA/IGBwYWdlcy8ke3JvdXRlLnBhZ2V9LnRzYCA6IGBjb21wb25lbnRzLyR7cm91dGUuY29tcG9uZW50fS50c2B9YCkucGFnZSgpIDogcm91dGVEb250Rm91bmQoKVxyXG4vLyByb3V0ZSA/IHJlcXVpcmUoYC9zcmMvanMvY29tcG9uZW50cy9gICsgcm91dGUuY29tcG9uZW50ICsgJy50cycpLnBhZ2UoKSA6IHJvdXRlRG9udEZvdW5kKClcclxuLyoqXHJcbiAqIGRpbmFtaWNSb3V0ZXNcclxuICogXHJcbiAqIFRoaXMgZnVuY3Rpb24gZ2VuZXJhdGUgdGhlIGRpbmFtaWMgcm91dGVzIHdoZW4geXUgc2VuZCBpbiB0aGUgcm91dGUgOlxyXG4gKiBcclxuICogQHJldHVybnMgXHJcbiAqL1xyXG5mdW5jdGlvbiBkaW5hbWljUm91dGVzKCl7XHJcblx0bGV0IG90aGVyUm91dGVzOmFueSA9IHJvdXRlcy5maWx0ZXIoKGl0ZW06IGFueSkgPT4gaXRlbS5wYXRoLmluY2x1ZGVzKCc6JykpXHJcblx0bGV0IGdldFJvdXRlQ3VycmVudDphbnkgPSBsb2NhdGlvbi5wYXRobmFtZS5zcGxpdCgnLycpXHJcblx0bGV0IHJlcXVlc3Q6b2JqZWN0ID0ge31cclxuXHRvdGhlclJvdXRlcy5tYXAoIChyb3V0ZTogYW55KSA9PiByZXF1ZXN0ID0gZ2V0Um91dGVDdXJyZW50WzFdID09IChyb3V0ZS5wYXRoLnNwbGl0KCcvJykpWzFdID8geyAnc3RhdHVzJzogdHJ1ZSwgJ3JvdXRlJzogcm91dGV9IDogeyAnc3RhdHVzJzogZmFsc2UgfSlcclxuXHRyZXR1cm4gcmVxdWVzdFxyXG59XHJcblxyXG4vKipcclxuICogcm91dGVEb250Rm91bmRcclxuICogXHJcbiAqIFRoaXMgZnVuY3Rpb24gd29yayB3aGVuIHJvdXRlIHdhc24ndCBmb3VuZFxyXG4gKiBcclxuICogQHJldHVybnMgXHJcbiAqL1xyXG5mdW5jdGlvbiByb3V0ZURvbnRGb3VuZCgpe1xyXG5cdGNvbnN0IGRpbmFtaWM6IGFueSA9IGRpbmFtaWNSb3V0ZXMoKTtcclxuXHRkaW5hbWljLnN0YXR1cyAmJiByZXF1aXJlKGAvc3JjL2pzL2NvbXBvbmVudHMvJHtkaW5hbWljLnJvdXRlLmNvbXBvbmVudH0udHNgKS5wYWdlKClcclxufSIsIlxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQZXRpdGlvbiB7XHJcbiBnZXQodXJsOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGZldGNoKHVybClcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4gcmVzb2x2ZShkYXRhKSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgXHJcbiAgcG9zdCh1cmw6IHN0cmluZywgZGF0YTogb2JqZWN0KSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBmZXRjaCh1cmwsIHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLCAvLyBvciAnUFVUJ1xyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLCAvLyBkYXRhIGNhbiBiZSBgc3RyaW5nYCBvciB7b2JqZWN0fSFcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICB9LFxyXG4gICAgICB9KVxyXG4gICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gcmVqZWN0KGVycm9yKSlcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc29sdmUocmVzcG9uc2UpKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHV0KHVybDogc3RyaW5nLCBkYXRhOiBvYmplY3QpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGZldGNoKHVybCwge1xyXG4gICAgICAgIG1ldGhvZDogXCJQVVRcIiwgLy8gb3IgJ1BVVCdcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSwgLy8gZGF0YSBjYW4gYmUgYHN0cmluZ2Agb3Ige29iamVjdH0hXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSlcclxuICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHJlamVjdChlcnJvcikpXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNvbHZlKHJlc3BvbnNlKSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuICAiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsInZhciBtYXAgPSB7XG5cdFwiLi9jb21wb25lbnRzL2V4YW1wbGVcIjogXCIuL3NyYy9qcy9jb21wb25lbnRzL2V4YW1wbGUudHNcIixcblx0XCIuL2NvbXBvbmVudHMvZXhhbXBsZS50c1wiOiBcIi4vc3JjL2pzL2NvbXBvbmVudHMvZXhhbXBsZS50c1wiLFxuXHRcIi4vY29uZmlnL2RhdGFsYXllcnNcIjogXCIuL3NyYy9qcy9jb25maWcvZGF0YWxheWVycy50c1wiLFxuXHRcIi4vY29uZmlnL2RhdGFsYXllcnMudHNcIjogXCIuL3NyYy9qcy9jb25maWcvZGF0YWxheWVycy50c1wiLFxuXHRcIi4vY29uZmlnL3JvdXRlc1wiOiBcIi4vc3JjL2pzL2NvbmZpZy9yb3V0ZXMudHNcIixcblx0XCIuL2NvbmZpZy9yb3V0ZXMudHNcIjogXCIuL3NyYy9qcy9jb25maWcvcm91dGVzLnRzXCIsXG5cdFwiLi9wYWdlcy9wYWdlRXhcIjogXCIuL3NyYy9qcy9wYWdlcy9wYWdlRXgudHNcIixcblx0XCIuL3BhZ2VzL3BhZ2VFeC50c1wiOiBcIi4vc3JjL2pzL3BhZ2VzL3BhZ2VFeC50c1wiLFxuXHRcIi4vc2VydmljZXMvYXBpXCI6IFwiLi9zcmMvanMvc2VydmljZXMvYXBpLnRzXCIsXG5cdFwiLi9zZXJ2aWNlcy9hcGkudHNcIjogXCIuL3NyYy9qcy9zZXJ2aWNlcy9hcGkudHNcIixcblx0XCIuL3NlcnZpY2VzL2dlbmVyYWxcIjogXCIuL3NyYy9qcy9zZXJ2aWNlcy9nZW5lcmFsLnRzXCIsXG5cdFwiLi9zZXJ2aWNlcy9nZW5lcmFsLnRzXCI6IFwiLi9zcmMvanMvc2VydmljZXMvZ2VuZXJhbC50c1wiLFxuXHRcIi4vc2VydmljZXMvbWlkZGxld2FyZVwiOiBcIi4vc3JjL2pzL3NlcnZpY2VzL21pZGRsZXdhcmUudHNcIixcblx0XCIuL3NlcnZpY2VzL21pZGRsZXdhcmUudHNcIjogXCIuL3NyYy9qcy9zZXJ2aWNlcy9taWRkbGV3YXJlLnRzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2pzIHN5bmMgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLiokXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuL2V4YW1wbGUudHNcIjogXCIuL3NyYy9qcy9jb21wb25lbnRzL2V4YW1wbGUudHNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvanMvY29tcG9uZW50cyBzeW5jIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qXFxcXC50cyRcIjsiLCJpbXBvcnQgeyBkYW1hIH0gZnJvbSBcIi4uLi8uLi8uLi9tb2R1bGVzL2RhbWFcIjtcclxuaW1wb3J0IHsgYXBpU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hcGlcIjtcclxuLyoqXHJcbiAqIFVzZSBQZXRpdGlvblxyXG4gKiBcclxuICogWW91IG11c3QgdXNlIHBldC5nZXQodXJsKSBvciBwZXQucG9zdCh1cmwsIGRhdGEpIFxyXG4gKi9cclxuY29uc3QgYXBpID0gbmV3IGFwaVNlcnZpY2UoKTtcclxuLyoqXHJcbiAqIFVzZSBEYW1hXHJcbiAqIFxyXG4gKiBEYW1hIGhhcyBhIGxvdCBvZiBmdW5jdGlvbiB0byBoZWxwIHRvIGRldmVsb3BlciwgdGhpcyBmdW5jdGlvbiB5b3UgY2FuIGdldCBpbiB0aGUgbmV4dCB1cmxcclxuICogXHJcbiAqL1xyXG5jb25zdCBkbSA9IG5ldyBkYW1hKCk7XHJcblxyXG5leHBvcnQgY29uc3QgcGFnZSA9IGFzeW5jICgpID0+IHtcclxuXHRjb25zb2xlLmxvZygnSG9tZScpXHJcblx0Y29uc29sZS5sb2coJ0FwaTonLCBhcGkuZXhhbXBsZSgpKVxyXG5cdGNvbnNvbGUubG9nKCdEYW1hOicsIGRtLndlbGNvbWUoKSlcclxufSIsIi8qKlxyXG4gKiBDYWxsIERhdGFsYXllclxyXG4gKiBcclxuICogQ2FsbCBkYXRhbGF5ZXIgeW91IG5lZWQgcmVnaXN0ZXIgdGhpcyBsaWtlIGFib3ZlLCBzbyB5b3UgY2FuIGNhbGwgdGhpcyB3aXRoIHRoZSBuZXh0IGZ1bmN0aW9uIHdoZW4gdGhlIGV2ZW50IGlzIGNsaWNcclxuICogICAgICBkYXRhRGF0YUxheWVycygnbmFtZS1zZWxlY3RlZCcsICdsYWJlbC13aXRob3V0LWVuY3J5cHQnKSwgZm9yIGV4YW1wbGVcclxuICogICAgICBkYXRhRGF0YUxheWVycygnc3RhcnRHYW1lJywgJ2RhdmlkZm1iOTNAZ21haWwuY29tJylcclxuICovXHJcbmV4cG9ydCBjb25zdCBsYXllcnM6IG9iamVjdCA9IFtcclxuICAgIHtcclxuICAgICAgICAnbmFtZSc6ICdOQU1FJyxcclxuICAgICAgICAnZXZlbnQnOiAndHJhY2tFdmVudCcsXHJcbiAgICAgICAgJ2V2ZW50Q2F0ZWdvcnknOiAnQ0FURUdPUlknLCAvLyBDYXRlZ29yw61hIGRlbCBldmVudG8gKFN0cmluZykuIFJlcXVlcmlkby5cclxuICAgICAgICAnZXZlbnRBY3Rpb24nOiAnQUNUSU9OJywgLy8gQWNjacOzbiBvIHN1YmNhdGVnb3LDrWEgZGVsIGV2ZW50byAoU3RyaW5nKS4gUmVxdWVyaWRvLlxyXG4gICAgICAgICdldmVudExhYmVsJzogJ0xBQkVMJywgLy8gRXRpcXVldGEgZGUgZGVzY3JpcGNpw7NuIGRlbCBldmVudG8gKFN0cmluZykuIFJlcXVlcmlkby5cclxuICAgICAgICAnZW5jcnlwdGVkJzogZmFsc2UgLy8gZW5jcnlwdGVkIExhYmVsXHJcbiAgICB9XHJcbl1cclxuXHJcbiIsImV4cG9ydCBjb25zdCByb3V0ZXMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ2luZGV4JyxcclxuICAgICAgICBwYXRoOiBbJy8nLCAnL2luZGV4Lmh0bWwnXSxcclxuICAgICAgICBjb21wb25lbnQ6ICdleGFtcGxlJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAndGVzdCcsXHJcbiAgICAgICAgcGF0aDogJy9wYWdlLWV4Lmh0bWwnLFxyXG4gICAgICAgIHBhZ2U6ICdwYWdlRXgnXHJcbiAgICB9XHJcbl0iLCJleHBvcnQgY29uc3QgcGFnZSA9IGFzeW5jICgpID0+IHtcclxuXHRjb25zb2xlLmxvZygnWWVhaCcpXHJcbn0iLCJpbXBvcnQgIFBldGl0aW9uICBmcm9tIFwiLi4uLy4uLy4uL21vZHVsZXMvcGV0aXRpb25cIjtcclxuXHJcbi8qKlxyXG4gKiBVc2UgUGV0aXRpb25cclxuICogXHJcbiAqIFlvdSBtdXN0IHVzZSBwZXQuZ2V0KHVybCkgb3IgcGV0LnBvc3QodXJsLCBkYXRhKSBcclxuICovXHJcbmNvbnN0IHBldCA9IG5ldyBQZXRpdGlvbigpXHJcblxyXG5leHBvcnQgY2xhc3MgYXBpU2VydmljZSB7XHJcbiAgd2VsY29tZSgpe1xyXG4gICAgcmV0dXJuICd3ZWxjb21lIHRvIEFwaVNlcnZpY2UnO1xyXG4gIH1cclxuICBleGFtcGxlKCl7XHJcbiAgICByZXR1cm4gcGV0LmdldCgnaHR0cDovL2FwaS4xNTBwb3JjaWVudG8uY29tL2FwaS9jb3VudHJpZXMnKVxyXG4gIH1cclxufSIsIi8vIGltcG9ydCBkYW1hIGZyb20gXCIvbW9kdWxlcy9kYW1hLmpzXCI7XHJcbi8vIGltcG9ydCBhcGlEcnVwYWwgZnJvbSBcIi4vYXBpLmpzXCI7XHJcbi8vIGNvbnN0IGRtID0gbmV3IGRhbWEoKTtcclxuXHJcblxyXG4vLyBjb25zdCBhcGkgPSBuZXcgYXBpRHJ1cGFsKCk7XHJcbmV4cG9ydCBjb25zdCBwYWdlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgLyogT04gTE9BRCAqL1xyXG4gICAgY29uc29sZS5sb2coJ0RhbWE6IERlc2Fycm9sbGFkbyBwb3IgMTUwJScpXHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBtaWRkbGV3YXJlIHsgLy8ganVzdCBhZGQgXCJkZWZhdWx0XCJcclxufSIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTUtMSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS01LTMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtNCEuL21haW4uc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307Il0sInNvdXJjZVJvb3QiOiIifQ==