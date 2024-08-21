/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 365:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 314:
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ 354:
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ 72:
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 659:
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ 540:
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ 56:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 825:
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ 113:
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(72);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(825);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(659);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(56);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(540);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(113);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/styles.css
var styles = __webpack_require__(365);
;// CONCATENATED MODULE: ./src/styles.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(styles/* default */.A, options);




       /* harmony default export */ const src_styles = (styles/* default */.A && styles/* default */.A.locals ? styles/* default */.A.locals : undefined);

;// CONCATENATED MODULE: ./src/utilities.js
var _prettyPrint = function prettyPrint(node) {
  var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var isLeft = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  if (node === null) {
    return;
  }
  if (node.rightChild !== null) {
    _prettyPrint(node.rightChild, "".concat(prefix).concat(isLeft ? "│   " : "    "), false);
  }
  console.log("".concat(prefix).concat(isLeft ? "└── " : "┌── ").concat(node.value));
  if (node.leftChild !== null) {
    _prettyPrint(node.leftChild, "".concat(prefix).concat(isLeft ? "    " : "│   "), true);
  }
};
var removeDuplicates = function removeDuplicates(array) {
  return array.filter(function (value, index) {
    return array.indexOf(value) === index;
  });
};

;// CONCATENATED MODULE: ./src/node.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
var Node = /*#__PURE__*/_createClass(function Node() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var leftChild = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var rightChild = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  _classCallCheck(this, Node);
  this.value = value;
  this.leftChild = leftChild;
  this.rightChild = rightChild;
});

;// CONCATENATED MODULE: ./src/tree.js
function tree_typeof(o) { "@babel/helpers - typeof"; return tree_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, tree_typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function tree_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function tree_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, tree_toPropertyKey(o.key), o); } }
function tree_createClass(e, r, t) { return r && tree_defineProperties(e.prototype, r), t && tree_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function tree_toPropertyKey(t) { var i = tree_toPrimitive(t, "string"); return "symbol" == tree_typeof(i) ? i : i + ""; }
function tree_toPrimitive(t, r) { if ("object" != tree_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != tree_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classPrivateMethodInitSpec(e, a) { _checkPrivateRedeclaration(e, a), a.add(e); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }


var _Tree_brand = /*#__PURE__*/new WeakSet();
var Tree = /*#__PURE__*/function () {
  function Tree(array) {
    tree_classCallCheck(this, Tree);
    _classPrivateMethodInitSpec(this, _Tree_brand);
    this.root = this.buildTree(array);
  }
  return tree_createClass(Tree, [{
    key: "buildTree",
    value: function buildTree(array) {
      if (array.length === 0) return null;
      var sortedArray = array.sort();
      var cleanArray = removeDuplicates(sortedArray);
      var mid = Math.floor(cleanArray.length / 2);
      var node = new Node(cleanArray[mid]);
      node.leftChild = this.buildTree(cleanArray.slice(0, mid));
      node.rightChild = this.buildTree(cleanArray.slice(mid + 1));
      return node;
    }
  }, {
    key: "insert",
    value: function insert(value) {
      var currNode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.root;
      if (currNode === null) return new Node(value);
      if (currNode.value === value) return;
      if (currNode.value < value) {
        currNode.rightChild = this.insert(value, currNode.rightChild);
      } else {
        currNode.leftChild = this.insert(value, currNode.leftChild);
      }
      return currNode;
    }
  }, {
    key: "remove",
    value: function remove(value) {
      var currNode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.root;
      if (currNode === null) return currNode;
      if (currNode.value > value) {
        currNode.leftChild = this.remove(value, currNode.leftChild);
      } else if (currNode.value < value) {
        currNode.rightChild = this.remove(value, currNode.rightChild);
      } else {
        if (currNode.leftChild && currNode.rightChild) {
          return currNode.rightChild || currNode.leftChild;
        }
        var succ = _assertClassBrand(_Tree_brand, this, _getSuccessor).call(this, currNode.rightChild);
        currNode.value = succ.value;
        currNode.right = this.remove(succ.value, currNode.rightChild);
      }
      return currNode;
    }
  }, {
    key: "find",
    value: function find(value) {
      var currNode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.root;
      if (currNode === null || currNode.value === value) return currNode;
      if (currNode.value > value) {
        return this.find(value, currNode.leftChild);
      } else {
        return this.find(value, currNode.rightChild);
      }
    }
  }, {
    key: "levelOrder",
    value: function levelOrder(cb) {
      if (typeof cb !== "function") throw new Error("Callback function is not provided!");
      var nodeQueue = [this.root];
      var levelOrderList = [];
      while (nodeQueue.length > 0) {
        var currentNode = nodeQueue.shift();
        levelOrderList.push(cb(currentNode.value));
        var enqueueList = [currentNode === null || currentNode === void 0 ? void 0 : currentNode.leftChild, currentNode === null || currentNode === void 0 ? void 0 : currentNode.rightChild].filter(function (value) {
          return value;
        });
        nodeQueue.push.apply(nodeQueue, _toConsumableArray(enqueueList));
      }
      if (levelOrderList.length > 0) return levelOrderList;
    }
  }, {
    key: "inOrder",
    value: function inOrder(cb) {
      var currNode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.root;
      var inOrderList = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      if (typeof cb !== "function") throw new Error("Callback function is not provided!");
      if (currNode === null) return;
      this.inOrder(cb, currNode.leftChild, inOrderList);
      inOrderList.push(cb(currNode.value));
      this.inOrder(cb, currNode.rightChild, inOrderList);
      if (inOrderList.length > 0) return inOrderList;
    }
  }, {
    key: "preOrder",
    value: function preOrder(cb) {
      var currNode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.root;
      var preOrderList = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      if (typeof cb !== "function") throw new Error("Callback function is not provided!");
      if (currNode === null) return;
      preOrderList.push(cb(currNode.value));
      this.preOrder(cb, currNode.leftChild, preOrderList);
      this.preOrder(cb, currNode.rightChild, preOrderList);
      if (preOrderList.length > 0) return preOrderList;
    }
  }, {
    key: "postOrder",
    value: function postOrder(cb) {
      var currNode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.root;
      var postOrderList = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      if (typeof cb !== "function") throw new Error("Callback function is not provided!");
      if (currNode === null) return;
      this.postOrder(cb, currNode.leftChild, postOrderList);
      this.postOrder(cb, currNode.rightChild, postOrderList);
      postOrderList.push(cb(currNode.value));
      if (postOrderList.length > 0) return postOrderList;
    }
  }, {
    key: "height",
    value: function height() {
      var currNode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.root;
      if (currNode === null) return 0;
      var leftHeight = this.height(currNode.leftChild);
      var rightHeight = this.height(currNode.rightChild);
      return Math.max(leftHeight, rightHeight) + 1;
    }
  }, {
    key: "depth",
    value: function depth(currNodeVal) {
      var currNode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.root;
      var edgeCount = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      if (currNode === null) return;
      if (currNode.value === currNodeVal) return edgeCount;
      if (currNode.value < currNodeVal) {
        return this.depth(currNodeVal, currNode.rightChild, edgeCount + 1);
      } else {
        return this.depth(currNodeVal, currNode.leftChild, edgeCount + 1);
      }
    }
  }, {
    key: "isBalanced",
    value: function isBalanced() {
      return _assertClassBrand(_Tree_brand, this, _testBalance).call(this, this.root) !== -1;
    }
  }, {
    key: "rebalance",
    value: function rebalance() {
      var inOrderList = this.inOrder(function (value) {
        return value;
      });
      this.root = this.buildTree(inOrderList);
    }
  }]);
}();
function _testBalance(currNode) {
  if (currNode === null) return 0;
  var leftBalance = _assertClassBrand(_Tree_brand, this, _testBalance).call(this, currNode.leftChild);
  var rightBalance = _assertClassBrand(_Tree_brand, this, _testBalance).call(this, currNode.rightChild);
  var diff = Math.abs(leftBalance - rightBalance);
  if (leftBalance === -1 || rightBalance === -1 || diff > 1) {
    return -1;
  } else {
    return Math.max(leftBalance, rightBalance) + 1;
  }
}
function _getSuccessor(node) {
  var currNode = node;
  while (currNode.leftChild) {
    currNode = currNode.leftChild;
  }
  return currNode;
}

;// CONCATENATED MODULE: ./src/index.js



function randomNumbers(size) {
  randomNumbers = [];
  for (var i = 0; i < size; i++) {
    randomNumbers.push(Math.round(Math.random() * 100));
  }
  return randomNumbers;
}
var testTree = new Tree(randomNumbers(20));
console.log(testTree.isBalanced());
console.log(testTree.levelOrder(function (value) {
  return value;
}));
console.log(testTree.inOrder(function (value) {
  return value;
}));
console.log(testTree.preOrder(function (value) {
  return value;
}));
console.log(testTree.postOrder(function (value) {
  return value;
}));
testTree.insert(432);
testTree.insert(291);
testTree.insert(675);
console.log(testTree.isBalanced());
testTree.rebalance();
console.log(testTree.isBalanced());
console.log(testTree.levelOrder(function (value) {
  return value;
}));
console.log(testTree.inOrder(function (value) {
  return value;
}));
console.log(testTree.preOrder(function (value) {
  return value;
}));
console.log(testTree.postOrder(function (value) {
  return value;
}));
/******/ })()
;
//# sourceMappingURL=main.js.map