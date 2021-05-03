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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/base/sass/main.scss":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/base/sass/main.scss ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/* MADE BY MC */\n/* BASE */\n.dama-title {\n  color: #e2e7f1;\n  font-size: 50px; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

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

/***/ "./src sync recursive ^\\.\\/.*\\/sass\\/main\\.scss$":
/*!*********************************************!*\
  !*** ./src sync ^\.\/.*\/sass\/main\.scss$ ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./base/sass/main.scss": "./src/base/sass/main.scss"
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
webpackContext.id = "./src sync recursive ^\\.\\/.*\\/sass\\/main\\.scss$";

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


/***/ }),

/***/ "./src/base/sass/main.scss":
/*!*********************************!*\
  !*** ./src/base/sass/main.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/base/sass/main.scss");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9kYW1hLnRzIiwid2VicGFjazovLy8uL21vZHVsZXMvZGF0YWxheWVycy50cyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2luZGV4LnRzIiwid2VicGFjazovLy8uL21vZHVsZXMvcGV0aXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jhc2Uvc2Fzcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjIHN5bmMgXlxcLlxcLy4qXFwudHMkIiwid2VicGFjazovLy8uL3NyYyBzeW5jIF5cXC5cXC8uKlxcL2pzXFwvY29uZmlnXFwvZGF0YWxheWVyc1xcLnRzJCIsIndlYnBhY2s6Ly8vLi9zcmMgc3luYyBeXFwuXFwvLipcXC9qc1xcL2NvbmZpZ1xcL3JvdXRlc1xcLnRzJCIsIndlYnBhY2s6Ly8vLi9zcmMgc3luYyBeXFwuXFwvLipcXC9qc1xcL3NlcnZpY2VzXFwvZ2VuZXJhbFxcLnRzJCIsIndlYnBhY2s6Ly8vLi9zcmMgc3luYyBeXFwuXFwvLipcXC9zYXNzXFwvbWFpblxcLnNjc3MkIiwid2VicGFjazovLy8uL3NyYy9iYXNlL2pzL2NvbXBvbmVudHMvZXhhbXBsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFzZS9qcy9jb25maWcvZGF0YWxheWVycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFzZS9qcy9jb25maWcvcm91dGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9iYXNlL2pzL3NlcnZpY2VzL2FwaS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFzZS9qcy9zZXJ2aWNlcy9nZW5lcmFsLnRzIiwid2VicGFjazovLy8uL3NyYy9iYXNlL2pzL3NlcnZpY2VzL21pZGRsZXdhcmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jhc2Uvc2Fzcy9tYWluLnNjc3M/NmMwYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTs7Ozs7R0FLRztBQUVIO0lBQUE7SUF5RUEsQ0FBQztJQXhFQyxzQkFBTyxHQUFQO1FBQ0UsT0FBTyxpQkFBaUI7SUFDMUIsQ0FBQztJQUNELG9CQUFLLEdBQUwsVUFBTSxJQUFtQixFQUFFLGFBQWtCO1FBQXZDLGtDQUFtQjtRQUN2QixJQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxHQUFHLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkUsT0FBTyxJQUFJLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsYUFBYSxFQUFFLEtBQUssQ0FBQztR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RyxJQUFJLHlEQUFRLEVBQUU7QUFFMUI7SUFBQTtJQU9BLENBQUM7SUFOQyw0QkFBTyxHQUFQO1FBQ0UsT0FBTyx1QkFBdUIsQ0FBQztJQUNqQyxDQUFDO0lBQ0QsNEJBQU8sR0FBUDtRQUNFLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQywyQ0FBMkMsQ0FBQztJQUM3RCxDQUFDO0lBQ0gsaUJBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7OztBQ2hCRDtBQUFBO0FBQUEsdUNBQXVDO0FBQ3ZDLG9DQUFvQztBQUNwQyx5QkFBeUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHekIsK0JBQStCO0FBQ3hCLElBQU0sSUFBSSxHQUFHOztRQUNoQixhQUFhO1FBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQzs7O0tBQzdDOzs7Ozs7Ozs7Ozs7O0FDVEQ7QUFBQTtJQUFBO0lBQ0EsQ0FBQztJQUFELGlCQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ0RELFVBQVUsbUJBQU8sQ0FBQyx5SkFBOEU7QUFDaEcsMEJBQTBCLG1CQUFPLENBQUMsdU5BQTBHOztBQUU1STs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7QUFJQSxzQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9tb2R1bGVzL2luZGV4LnRzXCIpO1xuIiwiLyoqXG4gKiBcbiAqIFNlcnZpY2UgRGFtYSBKU1xuICogXG4gKiBcbiAqL1xuXG5leHBvcnQgY2xhc3MgZGFtYSB7XG4gIHdlbGNvbWUoKXtcbiAgICByZXR1cm4gJ3dlbGNvbWUgdG8gREFNQSdcbiAgfVxuICBjbGljayhuYW1lOiBzdHJpbmcgPSBudWxsLCBjb25maWd1cmF0aW9uOiBhbnkpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RtLWNsaWNrPScgKyBuYW1lICsgJ10nKVswXVxuICAgIGVsZW1lbnQgJiYgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY29uZmlndXJhdGlvbiwgZmFsc2UpXG4gICAgcmV0dXJuICdyZW5kZXInO1xuICB9XG4gIGhpZGUoaWRzOiBhbnkgPSBbXSkge1xuICAgIGlkcy5tYXAoKGlkOiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZClcbiAgICAgIGlmIChlbGVtZW50KSBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9KVxuICAgIHJldHVybiAncmVuZGVyJztcbiAgfVxuICBzaG93KGlkOiBzdHJpbmcgPSBudWxsKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKVxuICAgIGlmIChlbGVtZW50KSBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgcmV0dXJuICdyZW5kZXInO1xuICB9XG4gIC8vIGhpZGVPbmUoaWQgPSBudWxsKSB7XG4gIC8vICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKVxuICAvLyAgIGlmIChlbGVtZW50KSBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgLy8gICByZXR1cm4gJ3JlbmRlcic7XG4gIC8vIH1cbiAgLy8gaGlkZVNob3coaWRIaWRlID0gbnVsbCwgaWRTaG93ID0gbnVsbCkge1xuICAvLyAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWRIaWRlKVxuICAvLyAgIGlmIChlbGVtZW50KSBlbGVtZW50LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZGlzcGxheTpub25lICFpbXBvcnRhbnRcIik7XG4gIC8vICAgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkU2hvdylcbiAgLy8gICBpZiAoZWxlbWVudCkgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImRpc3BsYXk6YmxvY2sgIWltcG9ydGFudFwiKTtcbiAgLy8gICByZXR1cm4gJ3JlbmRlcic7XG4gIC8vIH1cblxuICAvLyBwcmludChuYW1lLCB0ZXh0KSB7XG4gIC8vICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkbS1tb2RlbD0nICsgbmFtZSArICddJylbMF1cbiAgLy8gICBpZiAodHlwZW9mIGVsZW1lbnQgIT0gXCJ1bmRlZmluZWRcIiAmJiBlbGVtZW50ICE9IG51bGwpXG4gIC8vICAgICBlbGVtZW50LmlubmVySFRNTCA9IHRleHQ7XG4gIC8vICAgcmV0dXJuO1xuICAvLyB9XG5cbiAgLy8gcHJpbnQobmFtZSwgdGV4dCkge1xuICAvLyAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZG0tbW9kZWw9JyArIG5hbWUgKyAnXScpWzBdXG4gIC8vICAgaWYgKHR5cGVvZiBlbGVtZW50ICE9IFwidW5kZWZpbmVkXCIgJiYgZWxlbWVudCAhPSBudWxsKVxuICAvLyAgICAgZWxlbWVudC5pbm5lckhUTUwgPSB0ZXh0O1xuICAvLyAgIHJldHVybjtcbiAgLy8gfVxuXG4gIC8vIGdldElucHVudHMoaWRzID0gW10pIHtcbiAgLy8gICBjb25zdCBkYXRhID0ge31cbiAgLy8gICBpZHMubWFwKGlkID0+IHtcbiAgLy8gICAgIGxldCB2YWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSA/IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS52YWx1ZSA6IG51bGxcbiAgLy8gICAgIGlmICh2YWx1ZSkgZGF0YVtpZF0gPSB2YWx1ZVxuICAvLyAgIH0pXG4gIC8vICAgcmV0dXJuIGRhdGE7XG4gIC8vIH1cblxuXG4gIC8vICBnZXREYXRhRm9ybShmb3JtOiBhbnkpe1xuICAvLyAgICBsZXQgcmVxdWVzdCA9IHt9LCB2YWx1ZVxuICAvLyAgICBmb3JtLnRhcmdldC5mb3JFYWNoKGVsZW1lbnQgPT57XG4gIC8vICAgICAgY29uc29sZS5sb2coZWxlbWVudC50eXBlKVxuICAvLyAgICAgIC8vIHNpIGVzIHVuIHNlbGVjdCBtdWx0aXBsZSBndWFyZGFtb3MgbG9zIHZhbG9yZXMgc2kgbm8gZ3VhcmRhbW9zIGVsIGVsZW1lbnRvXG4gIC8vICAgICAgbGV0IGlzU2VsZWN0TXVsdGlwbGUgPSBlbGVtZW50Lmhhc0F0dHJpYnV0ZShcIm11bHRpcGxlXCIpXG4gIC8vICAgICAgdmFsdWUgPSBpc1NlbGVjdE11bHRpcGxlID8gWy4uLmVsZW1lbnQub3B0aW9uc10uZmlsdGVyKG9wdGlvbiA9PiBvcHRpb24uc2VsZWN0ZWQpLm1hcChvcHRpb24gPT4gb3B0aW9uLnZhbHVlKSA6IGVsZW1lbnQudmFsdWVcbiAgLy8gICAgICAvL1Blcm8gc2kgZXMgdW4gY2hla2JveCwgZ3VhcmRhbW9zIGVsIHZhbG9yIGRlbCBjaGVja2JveCwgcGVybyBwcmltZXJvIHZlcmlmaWNhbW9zIHNpIGVzIHVuIGNoZWNrYm94XG4gIC8vICAgICAgdmFsdWUgPSBlbGVtZW50LnR5cGUgPT0gXCJjaGVja2JveFwiID8gU3RyaW5nKGVsZW1lbnQuY2hlY2tlZCkgOiBlbGVtZW50LnZhbHVlXG4gIC8vICAgICAgY29uc29sZS5sb2coZWxlbWVudC5uYW1lLCBcIjpcIiwgdmFsdWUpXG4gIC8vICAgICAgLy9GaW5hbG1lbnRlIGd1YXJkYW1vcyBlbiBudWVzdHJvIG9iamV0b1xuICAvLyAgICAgIGlmKGVsZW1lbnQubmFtZSAmJiB2YWx1ZS5sZW5ndGgpIHJlcXVlc3RbZWxlbWVudC5uYW1lXSA9IHZhbHVlXG4gIC8vICAgIH0pXG4gIC8vICAgIHJldHVybiByZXF1ZXN0O1xuICAvLyAgfVxufSIsImNvbnN0IHByb2plY3QgPSBcImJhc2VcIlxuY29uc3QgeyBsYXllcnMgfSA9IHJlcXVpcmUoYC9zcmMvJHtwcm9qZWN0fS9qcy9jb25maWcvZGF0YWxheWVycy50c2ApXG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICAgICAgZGFtYTogYW55ICAgLFxuICAgICAgICBkYXRhbGF5ZXI6IGFueSAgXG4gICAgICAgIFNIQTI1NjogYW55LFxuICAgIH1cbn1cblxud2luZG93LmRhbWEgPSB3aW5kb3cuZGFtYSB8fCB7fTtcblxud2luZG93LmRhbWEuaW5mbyA9ICdEZXNhcnJvbGxhZG8gZW4gMTUwJSBwb3IgRGF2aWQgTWFydGluZXonXG5cbndpbmRvdy5kYW1hLnNldERhdGFsYXllciA9IChzZWxlY3Q6IHN0cmluZywgbGFiZWw6IHN0cmluZykgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGxldCBkYXRhTGF5ZXJGb3VuZCA9ICBsYXllcnMuZmluZCggKHZhbHVlOmFueSkgPT4gdmFsdWUubmFtZSA9PSBzZWxlY3QpO1xuICAgICAgICB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnID8gcHVzaExheWVyKGRhdGFMYXllckZvdW5kLCBsYWJlbCkgOiAgY29uc29sZS5sb2coJyVjIFBvciBmYXZvciBjb25maWd1cmFyIGVsIERhdGFsYXllciwgbm8gZW5jb250cmFkbyEgJywgJ2JhY2tncm91bmQ6ICMyMjI7IGNvbG9yOiAjYmFkYTU1Jyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignJWMgRGF0YWxheWVyIEVycm9yISAnLCAnYmFja2dyb3VuZDogcmVkOyBjb2xvcjogI2JhZGE1NScpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcHVzaExheWVyKGRhdGFMYXllckZvdW5kOiBhbnksIGxhYmVsOiBzdHJpbmcgKXtcbiAgICBjb25zdCBlbmNyeXB0ZWQ6IEJvb2xlYW4gPSBkYXRhTGF5ZXJGb3VuZFsnZW5jcnlwdGVkJ11cbiAgICBkZWxldGUgZGF0YUxheWVyRm91bmRbJ25hbWUnXVxuICAgIGRhdGFMYXllckZvdW5kWydldmVudExhYmVsJ10gID0gbGFiZWwgPyAoZW5jcnlwdGVkID8gd2luZG93LlNIQTI1NihsYWJlbCkgOiBsYWJlbCkgOiBkYXRhTGF5ZXJGb3VuZFsnZXZlbnRMYWJlbCddXG4gICAgd2luZG93LmRhdGFsYXllci5wdXNoKGRhdGFMYXllckZvdW5kKTtcbn1cblxuZXhwb3J0IGNvbnN0IGRhdGFsYXllcnMgPSBhc3luYyAoKSA9PiB7fVxuIiwiY29uc3QgcHJvamVjdDogc3RyaW5nID0gXCJiYXNlXCJcbi8vIElNUE9SVCBTQVNTXG5yZXF1aXJlKGAvc3JjLyR7cHJvamVjdH0vc2Fzcy9tYWluLnNjc3NgKVxuLy8gSU1QT1JUIFJPVVRFUyBcbmNvbnN0IHsgcm91dGVzIH0gPSByZXF1aXJlKGAvc3JjLyR7cHJvamVjdH0vanMvY29uZmlnL3JvdXRlcy50c2ApXG5cbmxldCByb3V0ZTogYW55ID0gcm91dGVzLmZpbmQoKGl0ZW06IGFueSkgPT4gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09IGl0ZW0ucGF0aClcblxucmVxdWlyZShgL3NyYy8ke3Byb2plY3R9L2pzL3NlcnZpY2VzL2dlbmVyYWwudHNgKS5wYWdlKClcbnJlcXVpcmUoYC9tb2R1bGVzL2RhdGFsYXllcnMudHNgKVxucm91dGUgPyByZXF1aXJlKGAvc3JjLyR7cHJvamVjdH0vanMvY29tcG9uZW50cy9gICsgcm91dGUuY29tcG9uZW50ICsgJy50cycpLnBhZ2UoKSA6IHJvdXRlRG9udEZvdW5kKClcbi8qKlxuICogZGluYW1pY1JvdXRlc1xuICogXG4gKiBUaGlzIGZ1bmN0aW9uIGdlbmVyYXRlIHRoZSBkaW5hbWljIHJvdXRlcyB3aGVuIHl1IHNlbmQgaW4gdGhlIHJvdXRlIDpcbiAqIFxuICogQHJldHVybnMgXG4gKi9cbmZ1bmN0aW9uIGRpbmFtaWNSb3V0ZXMoKXtcbiAgbGV0IG90aGVyUm91dGVzOmFueSA9IHJvdXRlcy5maWx0ZXIoKGl0ZW06IGFueSkgPT4gaXRlbS5wYXRoLmluY2x1ZGVzKCc6JykpXG4gIGxldCBnZXRSb3V0ZUN1cnJlbnQ6YW55ID0gbG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoJy8nKVxuICBsZXQgcmVxdWVzdDpvYmplY3QgPSB7fVxuICBvdGhlclJvdXRlcy5tYXAoIChyb3V0ZTogYW55KSA9PiByZXF1ZXN0ID0gZ2V0Um91dGVDdXJyZW50WzFdID09IChyb3V0ZS5wYXRoLnNwbGl0KCcvJykpWzFdID8geyAnc3RhdHVzJzogdHJ1ZSwgJ3JvdXRlJzogcm91dGV9IDogeyAnc3RhdHVzJzogZmFsc2UgfSlcbiAgcmV0dXJuIHJlcXVlc3Rcbn1cblxuLyoqXG4gKiByb3V0ZURvbnRGb3VuZFxuICogXG4gKiBUaGlzIGZ1bmN0aW9uIHdvcmsgd2hlbiByb3V0ZSB3YXNuJ3QgZm91bmRcbiAqIFxuICogQHJldHVybnMgXG4gKi9cbmZ1bmN0aW9uIHJvdXRlRG9udEZvdW5kKCl7XG4gIGNvbnN0IGRpbmFtaWM6IGFueSA9IGRpbmFtaWNSb3V0ZXMoKTtcbiAgZGluYW1pYy5zdGF0dXMgJiYgcmVxdWlyZShgL3NyYy8ke3Byb2plY3R9L2pzL2NvbXBvbmVudHMvJHtkaW5hbWljLnJvdXRlLmNvbXBvbmVudH0udHNgKS5wYWdlKClcbn0iLCJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBldGl0aW9uIHtcbiBnZXQodXJsOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgZmV0Y2godXJsKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHJlc29sdmUoZGF0YSkpO1xuICAgIH0pO1xuICB9XG4gIFxuICBwb3N0KHVybDogc3RyaW5nLCBkYXRhOiBvYmplY3QpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgZmV0Y2godXJsLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsIC8vIG9yICdQVVQnXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLCAvLyBkYXRhIGNhbiBiZSBgc3RyaW5nYCBvciB7b2JqZWN0fSFcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gcmVqZWN0KGVycm9yKSlcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNvbHZlKHJlc3BvbnNlKSk7XG4gICAgfSk7XG4gIH1cblxuICBwdXQodXJsOiBzdHJpbmcsIGRhdGE6IG9iamVjdCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBmZXRjaCh1cmwsIHtcbiAgICAgICAgbWV0aG9kOiBcIlBVVFwiLCAvLyBvciAnUFVUJ1xuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSwgLy8gZGF0YSBjYW4gYmUgYHN0cmluZ2Agb3Ige29iamVjdH0hXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHJlamVjdChlcnJvcikpXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzb2x2ZShyZXNwb25zZSkpO1xuICAgIH0pO1xuICB9XG59XG4gICIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKiBNQURFIEJZIE1DICovXFxuLyogQkFTRSAqL1xcbi5kYW1hLXRpdGxlIHtcXG4gIGNvbG9yOiAjZTJlN2YxO1xcbiAgZm9udC1zaXplOiA1MHB4OyB9XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwidmFyIG1hcCA9IHtcblx0XCIuL2Jhc2UvanMvY29tcG9uZW50cy9leGFtcGxlLnRzXCI6IFwiLi9zcmMvYmFzZS9qcy9jb21wb25lbnRzL2V4YW1wbGUudHNcIixcblx0XCIuL2Jhc2UvanMvY29uZmlnL2RhdGFsYXllcnMudHNcIjogXCIuL3NyYy9iYXNlL2pzL2NvbmZpZy9kYXRhbGF5ZXJzLnRzXCIsXG5cdFwiLi9iYXNlL2pzL2NvbmZpZy9yb3V0ZXMudHNcIjogXCIuL3NyYy9iYXNlL2pzL2NvbmZpZy9yb3V0ZXMudHNcIixcblx0XCIuL2Jhc2UvanMvc2VydmljZXMvYXBpLnRzXCI6IFwiLi9zcmMvYmFzZS9qcy9zZXJ2aWNlcy9hcGkudHNcIixcblx0XCIuL2Jhc2UvanMvc2VydmljZXMvZ2VuZXJhbC50c1wiOiBcIi4vc3JjL2Jhc2UvanMvc2VydmljZXMvZ2VuZXJhbC50c1wiLFxuXHRcIi4vYmFzZS9qcy9zZXJ2aWNlcy9taWRkbGV3YXJlLnRzXCI6IFwiLi9zcmMvYmFzZS9qcy9zZXJ2aWNlcy9taWRkbGV3YXJlLnRzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjIHN5bmMgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLipcXFxcLnRzJFwiOyIsInZhciBtYXAgPSB7XG5cdFwiLi9iYXNlL2pzL2NvbmZpZy9kYXRhbGF5ZXJzLnRzXCI6IFwiLi9zcmMvYmFzZS9qcy9jb25maWcvZGF0YWxheWVycy50c1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYyBzeW5jIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qXFxcXC9qc1xcXFwvY29uZmlnXFxcXC9kYXRhbGF5ZXJzXFxcXC50cyRcIjsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vYmFzZS9qcy9jb25maWcvcm91dGVzLnRzXCI6IFwiLi9zcmMvYmFzZS9qcy9jb25maWcvcm91dGVzLnRzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjIHN5bmMgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLipcXFxcL2pzXFxcXC9jb25maWdcXFxcL3JvdXRlc1xcXFwudHMkXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuL2Jhc2UvanMvc2VydmljZXMvZ2VuZXJhbC50c1wiOiBcIi4vc3JjL2Jhc2UvanMvc2VydmljZXMvZ2VuZXJhbC50c1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYyBzeW5jIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qXFxcXC9qc1xcXFwvc2VydmljZXNcXFxcL2dlbmVyYWxcXFxcLnRzJFwiOyIsInZhciBtYXAgPSB7XG5cdFwiLi9iYXNlL3Nhc3MvbWFpbi5zY3NzXCI6IFwiLi9zcmMvYmFzZS9zYXNzL21haW4uc2Nzc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYyBzeW5jIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qXFxcXC9zYXNzXFxcXC9tYWluXFxcXC5zY3NzJFwiOyIsImltcG9ydCB7IGRhbWEgfSBmcm9tIFwiLi4uLy4uLy4uL21vZHVsZXMvZGFtYVwiO1xuaW1wb3J0IHsgYXBpU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hcGlcIjtcbi8qKlxuICogVXNlIFBldGl0aW9uXG4gKiBcbiAqIFlvdSBtdXN0IHVzZSBwZXQuZ2V0KHVybCkgb3IgcGV0LnBvc3QodXJsLCBkYXRhKSBcbiAqL1xuY29uc3QgYXBpID0gbmV3IGFwaVNlcnZpY2UoKTtcbi8qKlxuICogVXNlIERhbWFcbiAqIFxuICogRGFtYSBoYXMgYSBsb3Qgb2YgZnVuY3Rpb24gdG8gaGVscCB0byBkZXZlbG9wZXIsIHRoaXMgZnVuY3Rpb24geW91IGNhbiBnZXQgaW4gdGhlIG5leHQgdXJsXG4gKiBcbiAqL1xuY29uc3QgZG0gPSBuZXcgZGFtYSgpO1xuXG5leHBvcnQgY29uc3QgcGFnZSA9IGFzeW5jICgpID0+IHtcbiAgY29uc29sZS5sb2coJ0FwaTonLCBhcGkuZXhhbXBsZSgpKVxuICBjb25zb2xlLmxvZygnRGFtYTonLCBkbS53ZWxjb21lKCkpXG59XG5cblxuXG4iLCIvKipcbiAqIENhbGwgRGF0YWxheWVyXG4gKiBcbiAqIENhbGwgZGF0YWxheWVyIHlvdSBuZWVkIHJlZ2lzdGVyIHRoaXMgbGlrZSBhYm92ZSwgc28geW91IGNhbiBjYWxsIHRoaXMgd2l0aCB0aGUgbmV4dCBmdW5jdGlvbiB3aGVuIHRoZSBldmVudCBpcyBjbGljXG4gKiAgICAgIGRhdGFEYXRhTGF5ZXJzKCduYW1lLXNlbGVjdGVkJywgJ2xhYmVsLXdpdGhvdXQtZW5jcnlwdCcpLCBmb3IgZXhhbXBsZVxuICogICAgICBkYXRhRGF0YUxheWVycygnc3RhcnRHYW1lJywgJ2RhdmlkZm1iOTNAZ21haWwuY29tJylcbiAqL1xuZXhwb3J0IGNvbnN0IGxheWVyczogb2JqZWN0ID0gW1xuICAgIHtcbiAgICAgICAgJ25hbWUnOiAnTkFNRScsXG4gICAgICAgICdldmVudCc6ICd0cmFja0V2ZW50JyxcbiAgICAgICAgJ2V2ZW50Q2F0ZWdvcnknOiAnQ0FURUdPUlknLCAvLyBDYXRlZ29yw61hIGRlbCBldmVudG8gKFN0cmluZykuIFJlcXVlcmlkby5cbiAgICAgICAgJ2V2ZW50QWN0aW9uJzogJ0FDVElPTicsIC8vIEFjY2nDs24gbyBzdWJjYXRlZ29yw61hIGRlbCBldmVudG8gKFN0cmluZykuIFJlcXVlcmlkby5cbiAgICAgICAgJ2V2ZW50TGFiZWwnOiAnTEFCRUwnLCAvLyBFdGlxdWV0YSBkZSBkZXNjcmlwY2nDs24gZGVsIGV2ZW50byAoU3RyaW5nKS4gUmVxdWVyaWRvLlxuICAgICAgICAnZW5jcnlwdGVkJzogZmFsc2UgLy8gZW5jcnlwdGVkIExhYmVsXG4gICAgfVxuXVxuXG4iLCJleHBvcnQgY29uc3Qgcm91dGVzID0gW1xuICAgIHtcbiAgICAgICAgbmFtZTogJ2luZGV4JyxcbiAgICAgICAgcGF0aDogJy8nLFxuICAgICAgICBjb21wb25lbnQ6ICdleGFtcGxlJ1xuICAgIH0sXG5dXG4iLCJpbXBvcnQgIFBldGl0aW9uICBmcm9tIFwiLi4uLy4uLy4uL21vZHVsZXMvcGV0aXRpb25cIjtcblxuLyoqXG4gKiBVc2UgUGV0aXRpb25cbiAqIFxuICogWW91IG11c3QgdXNlIHBldC5nZXQodXJsKSBvciBwZXQucG9zdCh1cmwsIGRhdGEpIFxuICovXG5jb25zdCBwZXQgPSBuZXcgUGV0aXRpb24oKVxuXG5leHBvcnQgY2xhc3MgYXBpU2VydmljZSB7XG4gIHdlbGNvbWUoKXtcbiAgICByZXR1cm4gJ3dlbGNvbWUgdG8gQXBpU2VydmljZSc7XG4gIH1cbiAgZXhhbXBsZSgpe1xuICAgIHJldHVybiBwZXQuZ2V0KCdodHRwOi8vYXBpLjE1MHBvcmNpZW50by5jb20vYXBpL2NvdW50cmllcycpXG4gIH1cbn0iLCIvLyBpbXBvcnQgZGFtYSBmcm9tIFwiL21vZHVsZXMvZGFtYS5qc1wiO1xuLy8gaW1wb3J0IGFwaURydXBhbCBmcm9tIFwiLi9hcGkuanNcIjtcbi8vIGNvbnN0IGRtID0gbmV3IGRhbWEoKTtcblxuXG4vLyBjb25zdCBhcGkgPSBuZXcgYXBpRHJ1cGFsKCk7XG5leHBvcnQgY29uc3QgcGFnZSA9IGFzeW5jICgpID0+IHtcbiAgICAvKiBPTiBMT0FEICovXG4gICAgY29uc29sZS5sb2coJ0RhbWE6IERlc2Fycm9sbGFkbyBwcm8gMTUwJScpXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgbWlkZGxld2FyZSB7IC8vIGp1c3QgYWRkIFwiZGVmYXVsdFwiXG59IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=