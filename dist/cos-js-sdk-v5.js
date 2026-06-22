(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["COS"] = factory();
	else
		root["COS"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var COS = __webpack_require__(/*! ./src/cos */ "./src/cos.js");
module.exports = COS;

/***/ }),

/***/ "./lib/base64.js":
/*!***********************!*\
  !*** ./lib/base64.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 * $Id: base64.js,v 2.15 2014/04/05 12:58:57 dankogai Exp dankogai $
 *
 *  Licensed under the BSD 3-Clause License.
 *    http://opensource.org/licenses/BSD-3-Clause
 *
 *  References:
 *    http://en.wikipedia.org/wiki/Base64
 */

var Base64 = function (global) {
  global = global || {};
  'use strict';
  // existing version for noConflict()
  var _Base64 = global.Base64;
  var version = "2.1.9";
  // if node.js, we use Buffer
  var buffer;
  // constants
  var b64chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  var b64tab = function (bin) {
    var t = {};
    for (var i = 0, l = bin.length; i < l; i++) t[bin.charAt(i)] = i;
    return t;
  }(b64chars);
  var fromCharCode = String.fromCharCode;
  // encoder stuff
  var cb_utob = function cb_utob(c) {
    if (c.length < 2) {
      var cc = c.charCodeAt(0);
      return cc < 0x80 ? c : cc < 0x800 ? fromCharCode(0xc0 | cc >>> 6) + fromCharCode(0x80 | cc & 0x3f) : fromCharCode(0xe0 | cc >>> 12 & 0x0f) + fromCharCode(0x80 | cc >>> 6 & 0x3f) + fromCharCode(0x80 | cc & 0x3f);
    } else {
      var cc = 0x10000 + (c.charCodeAt(0) - 0xD800) * 0x400 + (c.charCodeAt(1) - 0xDC00);
      return fromCharCode(0xf0 | cc >>> 18 & 0x07) + fromCharCode(0x80 | cc >>> 12 & 0x3f) + fromCharCode(0x80 | cc >>> 6 & 0x3f) + fromCharCode(0x80 | cc & 0x3f);
    }
  };
  var re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;
  var utob = function utob(u) {
    return u.replace(re_utob, cb_utob);
  };
  var cb_encode = function cb_encode(ccc) {
    var padlen = [0, 2, 1][ccc.length % 3],
      ord = ccc.charCodeAt(0) << 16 | (ccc.length > 1 ? ccc.charCodeAt(1) : 0) << 8 | (ccc.length > 2 ? ccc.charCodeAt(2) : 0),
      chars = [b64chars.charAt(ord >>> 18), b64chars.charAt(ord >>> 12 & 63), padlen >= 2 ? '=' : b64chars.charAt(ord >>> 6 & 63), padlen >= 1 ? '=' : b64chars.charAt(ord & 63)];
    return chars.join('');
  };
  var btoa = global.btoa ? function (b) {
    return global.btoa(b);
  } : function (b) {
    return b.replace(/[\s\S]{1,3}/g, cb_encode);
  };
  var _encode = buffer ? function (u) {
    return (u.constructor === buffer.constructor ? u : new buffer(u)).toString('base64');
  } : function (u) {
    return btoa(utob(u));
  };
  var encode = function encode(u, urisafe) {
    return !urisafe ? _encode(String(u)) : _encode(String(u)).replace(/[+\/]/g, function (m0) {
      return m0 == '+' ? '-' : '_';
    }).replace(/=/g, '');
  };
  var encodeURI = function encodeURI(u) {
    return encode(u, true);
  };
  // decoder stuff
  var re_btou = new RegExp(['[\xC0-\xDF][\x80-\xBF]', '[\xE0-\xEF][\x80-\xBF]{2}', '[\xF0-\xF7][\x80-\xBF]{3}'].join('|'), 'g');
  var cb_btou = function cb_btou(cccc) {
    switch (cccc.length) {
      case 4:
        var cp = (0x07 & cccc.charCodeAt(0)) << 18 | (0x3f & cccc.charCodeAt(1)) << 12 | (0x3f & cccc.charCodeAt(2)) << 6 | 0x3f & cccc.charCodeAt(3),
          offset = cp - 0x10000;
        return fromCharCode((offset >>> 10) + 0xD800) + fromCharCode((offset & 0x3FF) + 0xDC00);
      case 3:
        return fromCharCode((0x0f & cccc.charCodeAt(0)) << 12 | (0x3f & cccc.charCodeAt(1)) << 6 | 0x3f & cccc.charCodeAt(2));
      default:
        return fromCharCode((0x1f & cccc.charCodeAt(0)) << 6 | 0x3f & cccc.charCodeAt(1));
    }
  };
  var btou = function btou(b) {
    return b.replace(re_btou, cb_btou);
  };
  var cb_decode = function cb_decode(cccc) {
    var len = cccc.length,
      padlen = len % 4,
      n = (len > 0 ? b64tab[cccc.charAt(0)] << 18 : 0) | (len > 1 ? b64tab[cccc.charAt(1)] << 12 : 0) | (len > 2 ? b64tab[cccc.charAt(2)] << 6 : 0) | (len > 3 ? b64tab[cccc.charAt(3)] : 0),
      chars = [fromCharCode(n >>> 16), fromCharCode(n >>> 8 & 0xff), fromCharCode(n & 0xff)];
    chars.length -= [0, 0, 2, 1][padlen];
    return chars.join('');
  };
  var atob = global.atob ? function (a) {
    return global.atob(a);
  } : function (a) {
    return a.replace(/[\s\S]{1,4}/g, cb_decode);
  };
  var _decode = buffer ? function (a) {
    return (a.constructor === buffer.constructor ? a : new buffer(a, 'base64')).toString();
  } : function (a) {
    return btou(atob(a));
  };
  var decode = function decode(a) {
    return _decode(String(a).replace(/[-_]/g, function (m0) {
      return m0 == '-' ? '+' : '/';
    }).replace(/[^A-Za-z0-9\+\/]/g, ''));
  };
  var noConflict = function noConflict() {
    var Base64 = global.Base64;
    global.Base64 = _Base64;
    return Base64;
  };
  // export Base64
  var Base64 = {
    VERSION: version,
    atob: atob,
    btoa: btoa,
    fromBase64: decode,
    toBase64: encode,
    utob: utob,
    encode: encode,
    encodeURI: encodeURI,
    btou: btou,
    decode: decode,
    noConflict: noConflict
  };
  return Base64;
}();
module.exports = Base64;

/***/ }),

/***/ "./lib/crypto.js":
/*!***********************!*\
  !*** ./lib/crypto.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/*
 CryptoJS v3.1.2
 code.google.com/p/crypto-js
 (c) 2009-2013 by Jeff Mott. All rights reserved.
 code.google.com/p/crypto-js/wiki/License
 */
var CryptoJS = CryptoJS || function (g, l) {
  var e = {},
    d = e.lib = {},
    m = function m() {},
    k = d.Base = {
      extend: function extend(a) {
        m.prototype = this;
        var c = new m();
        a && c.mixIn(a);
        c.hasOwnProperty("init") || (c.init = function () {
          c.$super.init.apply(this, arguments);
        });
        c.init.prototype = c;
        c.$super = this;
        return c;
      },
      create: function create() {
        var a = this.extend();
        a.init.apply(a, arguments);
        return a;
      },
      init: function init() {},
      mixIn: function mixIn(a) {
        for (var c in a) a.hasOwnProperty(c) && (this[c] = a[c]);
        a.hasOwnProperty("toString") && (this.toString = a.toString);
      },
      clone: function clone() {
        return this.init.prototype.extend(this);
      }
    },
    p = d.WordArray = k.extend({
      init: function init(a, c) {
        a = this.words = a || [];
        this.sigBytes = c != l ? c : 4 * a.length;
      },
      toString: function toString(a) {
        return (a || n).stringify(this);
      },
      concat: function concat(a) {
        var c = this.words,
          q = a.words,
          f = this.sigBytes;
        a = a.sigBytes;
        this.clamp();
        if (f % 4) for (var b = 0; b < a; b++) c[f + b >>> 2] |= (q[b >>> 2] >>> 24 - 8 * (b % 4) & 255) << 24 - 8 * ((f + b) % 4);else if (65535 < q.length) for (b = 0; b < a; b += 4) c[f + b >>> 2] = q[b >>> 2];else c.push.apply(c, q);
        this.sigBytes += a;
        return this;
      },
      clamp: function clamp() {
        var a = this.words,
          c = this.sigBytes;
        a[c >>> 2] &= 4294967295 << 32 - 8 * (c % 4);
        a.length = g.ceil(c / 4);
      },
      clone: function clone() {
        var a = k.clone.call(this);
        a.words = this.words.slice(0);
        return a;
      },
      random: function random(a) {
        for (var c = [], b = 0; b < a; b += 4) c.push(4294967296 * g.random() | 0);
        return new p.init(c, a);
      }
    }),
    b = e.enc = {},
    n = b.Hex = {
      stringify: function stringify(a) {
        var c = a.words;
        a = a.sigBytes;
        for (var b = [], f = 0; f < a; f++) {
          var d = c[f >>> 2] >>> 24 - 8 * (f % 4) & 255;
          b.push((d >>> 4).toString(16));
          b.push((d & 15).toString(16));
        }
        return b.join("");
      },
      parse: function parse(a) {
        for (var c = a.length, b = [], f = 0; f < c; f += 2) b[f >>> 3] |= parseInt(a.substr(f, 2), 16) << 24 - 4 * (f % 8);
        return new p.init(b, c / 2);
      }
    },
    j = b.Latin1 = {
      stringify: function stringify(a) {
        var c = a.words;
        a = a.sigBytes;
        for (var b = [], f = 0; f < a; f++) b.push(String.fromCharCode(c[f >>> 2] >>> 24 - 8 * (f % 4) & 255));
        return b.join("");
      },
      parse: function parse(a) {
        for (var c = a.length, b = [], f = 0; f < c; f++) b[f >>> 2] |= (a.charCodeAt(f) & 255) << 24 - 8 * (f % 4);
        return new p.init(b, c);
      }
    },
    h = b.Utf8 = {
      stringify: function stringify(a) {
        try {
          return decodeURIComponent(escape(j.stringify(a)));
        } catch (c) {
          throw Error("Malformed UTF-8 data");
        }
      },
      parse: function parse(a) {
        return j.parse(unescape(encodeURIComponent(a)));
      }
    },
    r = d.BufferedBlockAlgorithm = k.extend({
      reset: function reset() {
        this._data = new p.init();
        this._nDataBytes = 0;
      },
      _append: function _append(a) {
        "string" == typeof a && (a = h.parse(a));
        this._data.concat(a);
        this._nDataBytes += a.sigBytes;
      },
      _process: function _process(a) {
        var c = this._data,
          b = c.words,
          f = c.sigBytes,
          d = this.blockSize,
          e = f / (4 * d),
          e = a ? g.ceil(e) : g.max((e | 0) - this._minBufferSize, 0);
        a = e * d;
        f = g.min(4 * a, f);
        if (a) {
          for (var k = 0; k < a; k += d) this._doProcessBlock(b, k);
          k = b.splice(0, a);
          c.sigBytes -= f;
        }
        return new p.init(k, f);
      },
      clone: function clone() {
        var a = k.clone.call(this);
        a._data = this._data.clone();
        return a;
      },
      _minBufferSize: 0
    });
  d.Hasher = r.extend({
    cfg: k.extend(),
    init: function init(a) {
      this.cfg = this.cfg.extend(a);
      this.reset();
    },
    reset: function reset() {
      r.reset.call(this);
      this._doReset();
    },
    update: function update(a) {
      this._append(a);
      this._process();
      return this;
    },
    finalize: function finalize(a) {
      a && this._append(a);
      return this._doFinalize();
    },
    blockSize: 16,
    _createHelper: function _createHelper(a) {
      return function (b, d) {
        return new a.init(d).finalize(b);
      };
    },
    _createHmacHelper: function _createHmacHelper(a) {
      return function (b, d) {
        return new s.HMAC.init(a, d).finalize(b);
      };
    }
  });
  var s = e.algo = {};
  return e;
}(Math);
(function () {
  var g = CryptoJS,
    l = g.lib,
    e = l.WordArray,
    d = l.Hasher,
    m = [],
    l = g.algo.SHA1 = d.extend({
      _doReset: function _doReset() {
        this._hash = new e.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
      },
      _doProcessBlock: function _doProcessBlock(d, e) {
        for (var b = this._hash.words, n = b[0], j = b[1], h = b[2], g = b[3], l = b[4], a = 0; 80 > a; a++) {
          if (16 > a) m[a] = d[e + a] | 0;else {
            var c = m[a - 3] ^ m[a - 8] ^ m[a - 14] ^ m[a - 16];
            m[a] = c << 1 | c >>> 31;
          }
          c = (n << 5 | n >>> 27) + l + m[a];
          c = 20 > a ? c + ((j & h | ~j & g) + 1518500249) : 40 > a ? c + ((j ^ h ^ g) + 1859775393) : 60 > a ? c + ((j & h | j & g | h & g) - 1894007588) : c + ((j ^ h ^ g) - 899497514);
          l = g;
          g = h;
          h = j << 30 | j >>> 2;
          j = n;
          n = c;
        }
        b[0] = b[0] + n | 0;
        b[1] = b[1] + j | 0;
        b[2] = b[2] + h | 0;
        b[3] = b[3] + g | 0;
        b[4] = b[4] + l | 0;
      },
      _doFinalize: function _doFinalize() {
        var d = this._data,
          e = d.words,
          b = 8 * this._nDataBytes,
          g = 8 * d.sigBytes;
        e[g >>> 5] |= 128 << 24 - g % 32;
        e[(g + 64 >>> 9 << 4) + 14] = Math.floor(b / 4294967296);
        e[(g + 64 >>> 9 << 4) + 15] = b;
        d.sigBytes = 4 * e.length;
        this._process();
        return this._hash;
      },
      clone: function clone() {
        var e = d.clone.call(this);
        e._hash = this._hash.clone();
        return e;
      }
    });
  g.SHA1 = d._createHelper(l);
  g.HmacSHA1 = d._createHmacHelper(l);
})();
(function () {
  var g = CryptoJS,
    l = g.enc.Utf8;
  g.algo.HMAC = g.lib.Base.extend({
    init: function init(e, d) {
      e = this._hasher = new e.init();
      "string" == typeof d && (d = l.parse(d));
      var g = e.blockSize,
        k = 4 * g;
      d.sigBytes > k && (d = e.finalize(d));
      d.clamp();
      for (var p = this._oKey = d.clone(), b = this._iKey = d.clone(), n = p.words, j = b.words, h = 0; h < g; h++) n[h] ^= 1549556828, j[h] ^= 909522486;
      p.sigBytes = b.sigBytes = k;
      this.reset();
    },
    reset: function reset() {
      var e = this._hasher;
      e.reset();
      e.update(this._iKey);
    },
    update: function update(e) {
      this._hasher.update(e);
      return this;
    },
    finalize: function finalize(e) {
      var d = this._hasher;
      e = d.finalize(e);
      d.reset();
      return d.finalize(this._oKey.clone().concat(e));
    }
  });
})();
(function () {
  // Shortcuts
  var C = CryptoJS;
  var C_lib = C.lib;
  var WordArray = C_lib.WordArray;
  var C_enc = C.enc;

  /**
   * Base64 encoding strategy.
   */
  var Base64 = C_enc.Base64 = {
    /**
     * Converts a word array to a Base64 string.
     *
     * @param {WordArray} wordArray The word array.
     *
     * @return {string} The Base64 string.
     *
     * @static
     *
     * @example
     *
     *     var base64String = CryptoJS.enc.Base64.stringify(wordArray);
     */
    stringify: function stringify(wordArray) {
      // Shortcuts
      var words = wordArray.words;
      var sigBytes = wordArray.sigBytes;
      var map = this._map;

      // Clamp excess bits
      wordArray.clamp();

      // Convert
      var base64Chars = [];
      for (var i = 0; i < sigBytes; i += 3) {
        var byte1 = words[i >>> 2] >>> 24 - i % 4 * 8 & 0xff;
        var byte2 = words[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 0xff;
        var byte3 = words[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 0xff;
        var triplet = byte1 << 16 | byte2 << 8 | byte3;
        for (var j = 0; j < 4 && i + j * 0.75 < sigBytes; j++) {
          base64Chars.push(map.charAt(triplet >>> 6 * (3 - j) & 0x3f));
        }
      }

      // Add padding
      var paddingChar = map.charAt(64);
      if (paddingChar) {
        while (base64Chars.length % 4) {
          base64Chars.push(paddingChar);
        }
      }
      return base64Chars.join('');
    },
    /**
     * Converts a Base64 string to a word array.
     *
     * @param {string} base64Str The Base64 string.
     *
     * @return {WordArray} The word array.
     *
     * @static
     *
     * @example
     *
     *     var wordArray = CryptoJS.enc.Base64.parse(base64String);
     */
    parse: function parse(base64Str) {
      // Shortcuts
      var base64StrLength = base64Str.length;
      var map = this._map;

      // Ignore padding
      var paddingChar = map.charAt(64);
      if (paddingChar) {
        var paddingIndex = base64Str.indexOf(paddingChar);
        if (paddingIndex != -1) {
          base64StrLength = paddingIndex;
        }
      }

      // Convert
      var words = [];
      var nBytes = 0;
      for (var i = 0; i < base64StrLength; i++) {
        if (i % 4) {
          var bits1 = map.indexOf(base64Str.charAt(i - 1)) << i % 4 * 2;
          var bits2 = map.indexOf(base64Str.charAt(i)) >>> 6 - i % 4 * 2;
          words[nBytes >>> 2] |= (bits1 | bits2) << 24 - nBytes % 4 * 8;
          nBytes++;
        }
      }
      return WordArray.create(words, nBytes);
    },
    _map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
  };
})();
if (( false ? undefined : _typeof(module)) === 'object') {
  module.exports = CryptoJS;
} else {
  window.CryptoJS = CryptoJS;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./lib/md5.js":
/*!********************!*\
  !*** ./lib/md5.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* https://github.com/emn178/js-md5 */
(function () {
  'use strict';

  var WINDOW = (typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object';
  var root = WINDOW ? window : {};
  if (root.JS_MD5_NO_WINDOW) {
    WINDOW = false;
  }
  var WEB_WORKER = !WINDOW && (typeof self === "undefined" ? "undefined" : _typeof(self)) === 'object';
  if (WEB_WORKER) {
    root = self;
  }
  var COMMON_JS = !root.JS_MD5_NO_COMMON_JS && ( false ? undefined : _typeof(module)) === 'object' && module.exports;
  var AMD =  true && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js");
  var ARRAY_BUFFER = !root.JS_MD5_NO_ARRAY_BUFFER && typeof ArrayBuffer !== 'undefined';
  var HEX_CHARS = '0123456789abcdef'.split('');
  var EXTRA = [128, 32768, 8388608, -2147483648];
  var SHIFT = [0, 8, 16, 24];
  var OUTPUT_TYPES = ['hex', 'array', 'digest', 'buffer', 'arrayBuffer', 'base64'];
  var BASE64_ENCODE_CHAR = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('');
  var blocks = [],
    buffer8;
  if (ARRAY_BUFFER) {
    var buffer = new ArrayBuffer(68);
    buffer8 = new Uint8Array(buffer);
    blocks = new Uint32Array(buffer);
  }
  if (root.JS_MD5_NO_NODE_JS || !Array.isArray) {
    Array.isArray = function (obj) {
      return Object.prototype.toString.call(obj) === '[object Array]';
    };
  }
  if (ARRAY_BUFFER && (root.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView)) {
    ArrayBuffer.isView = function (obj) {
      return _typeof(obj) === 'object' && obj.buffer && obj.buffer.constructor === ArrayBuffer;
    };
  }

  /**
   * @method hex
   * @memberof md5
   * @description Output hash as hex string
   * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
   * @returns {String} Hex string
   * @example
   * md5.hex('The quick brown fox jumps over the lazy dog');
   * // equal to
   * md5('The quick brown fox jumps over the lazy dog');
   */
  /**
   * @method digest
   * @memberof md5
   * @description Output hash as bytes array
   * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
   * @returns {Array} Bytes array
   * @example
   * md5.digest('The quick brown fox jumps over the lazy dog');
   */
  /**
   * @method array
   * @memberof md5
   * @description Output hash as bytes array
   * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
   * @returns {Array} Bytes array
   * @example
   * md5.array('The quick brown fox jumps over the lazy dog');
   */
  /**
   * @method arrayBuffer
   * @memberof md5
   * @description Output hash as ArrayBuffer
   * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
   * @returns {ArrayBuffer} ArrayBuffer
   * @example
   * md5.arrayBuffer('The quick brown fox jumps over the lazy dog');
   */
  /**
   * @method buffer
   * @deprecated This maybe confuse with Buffer in node.js. Please use arrayBuffer instead.
   * @memberof md5
   * @description Output hash as ArrayBuffer
   * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
   * @returns {ArrayBuffer} ArrayBuffer
   * @example
   * md5.buffer('The quick brown fox jumps over the lazy dog');
   */
  /**
   * @method base64
   * @memberof md5
   * @description Output hash as base64 string
   * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
   * @returns {String} base64 string
   * @example
   * md5.base64('The quick brown fox jumps over the lazy dog');
   */
  var createOutputMethod = function createOutputMethod(outputType) {
    return function (message, isBinStr) {
      return new Md5(true).update(message, isBinStr)[outputType]();
    };
  };

  /**
   * @method create
   * @memberof md5
   * @description Create Md5 object
   * @returns {Md5} Md5 object.
   * @example
   * var hash = md5.create();
   */
  /**
   * @method update
   * @memberof md5
   * @description Create and update Md5 object
   * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
   * @returns {Md5} Md5 object.
   * @example
   * var hash = md5.update('The quick brown fox jumps over the lazy dog');
   * // equal to
   * var hash = md5.create();
   * hash.update('The quick brown fox jumps over the lazy dog');
   */
  var createMethod = function createMethod() {
    var method = createOutputMethod('hex');
    method.getCtx = method.create = function () {
      return new Md5();
    };
    method.update = function (message) {
      return method.create().update(message);
    };
    for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
      var type = OUTPUT_TYPES[i];
      method[type] = createOutputMethod(type);
    }
    return method;
  };

  /**
   * Md5 class
   * @class Md5
   * @description This is internal class.
   * @see {@link md5.create}
   */
  function Md5(sharedMemory) {
    if (sharedMemory) {
      blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
      this.blocks = blocks;
      this.buffer8 = buffer8;
    } else {
      if (ARRAY_BUFFER) {
        var buffer = new ArrayBuffer(68);
        this.buffer8 = new Uint8Array(buffer);
        this.blocks = new Uint32Array(buffer);
      } else {
        this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      }
    }
    this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = this.hBytes = 0;
    this.finalized = this.hashed = false;
    this.first = true;
  }

  /**
   * @method update
   * @memberof Md5
   * @instance
   * @description Update hash
   * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
   * @returns {Md5} Md5 object.
   * @see {@link md5.update}
   */
  Md5.prototype.update = function (message, isBinStr) {
    if (this.finalized) {
      return;
    }
    var code,
      index = 0,
      i,
      length = message.length,
      blocks = this.blocks;
    var buffer8 = this.buffer8;
    while (index < length) {
      if (this.hashed) {
        this.hashed = false;
        blocks[0] = blocks[16];
        blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
      }
      if (ARRAY_BUFFER) {
        for (i = this.start; index < length && i < 64; ++index) {
          code = message.charCodeAt(index);
          if (isBinStr || code < 0x80) {
            buffer8[i++] = code;
          } else if (code < 0x800) {
            buffer8[i++] = 0xc0 | code >> 6;
            buffer8[i++] = 0x80 | code & 0x3f;
          } else if (code < 0xd800 || code >= 0xe000) {
            buffer8[i++] = 0xe0 | code >> 12;
            buffer8[i++] = 0x80 | code >> 6 & 0x3f;
            buffer8[i++] = 0x80 | code & 0x3f;
          } else {
            code = 0x10000 + ((code & 0x3ff) << 10 | message.charCodeAt(++index) & 0x3ff);
            buffer8[i++] = 0xf0 | code >> 18;
            buffer8[i++] = 0x80 | code >> 12 & 0x3f;
            buffer8[i++] = 0x80 | code >> 6 & 0x3f;
            buffer8[i++] = 0x80 | code & 0x3f;
          }
        }
      } else {
        for (i = this.start; index < length && i < 64; ++index) {
          code = message.charCodeAt(index);
          if (isBinStr || code < 0x80) {
            blocks[i >> 2] |= code << SHIFT[i++ & 3];
          } else if (code < 0x800) {
            blocks[i >> 2] |= (0xc0 | code >> 6) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | code & 0x3f) << SHIFT[i++ & 3];
          } else if (code < 0xd800 || code >= 0xe000) {
            blocks[i >> 2] |= (0xe0 | code >> 12) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | code >> 6 & 0x3f) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | code & 0x3f) << SHIFT[i++ & 3];
          } else {
            code = 0x10000 + ((code & 0x3ff) << 10 | message.charCodeAt(++index) & 0x3ff);
            blocks[i >> 2] |= (0xf0 | code >> 18) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | code >> 12 & 0x3f) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | code >> 6 & 0x3f) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | code & 0x3f) << SHIFT[i++ & 3];
          }
        }
      }
      this.lastByteIndex = i;
      this.bytes += i - this.start;
      if (i >= 64) {
        this.start = i - 64;
        this.hash();
        this.hashed = true;
      } else {
        this.start = i;
      }
    }
    if (this.bytes > 4294967295) {
      this.hBytes += this.bytes / 4294967296 << 0;
      this.bytes = this.bytes % 4294967296;
    }
    return this;
  };
  Md5.prototype.finalize = function () {
    if (this.finalized) {
      return;
    }
    this.finalized = true;
    var blocks = this.blocks,
      i = this.lastByteIndex;
    blocks[i >> 2] |= EXTRA[i & 3];
    if (i >= 56) {
      if (!this.hashed) {
        this.hash();
      }
      blocks[0] = blocks[16];
      blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
    }
    blocks[14] = this.bytes << 3;
    blocks[15] = this.hBytes << 3 | this.bytes >>> 29;
    this.hash();
  };
  Md5.prototype.hash = function () {
    var a,
      b,
      c,
      d,
      bc,
      da,
      blocks = this.blocks;
    if (this.first) {
      a = blocks[0] - 680876937;
      a = (a << 7 | a >>> 25) - 271733879 << 0;
      d = (-1732584194 ^ a & 2004318071) + blocks[1] - 117830708;
      d = (d << 12 | d >>> 20) + a << 0;
      c = (-271733879 ^ d & (a ^ -271733879)) + blocks[2] - 1126478375;
      c = (c << 17 | c >>> 15) + d << 0;
      b = (a ^ c & (d ^ a)) + blocks[3] - 1316259209;
      b = (b << 22 | b >>> 10) + c << 0;
    } else {
      a = this.h0;
      b = this.h1;
      c = this.h2;
      d = this.h3;
      a += (d ^ b & (c ^ d)) + blocks[0] - 680876936;
      a = (a << 7 | a >>> 25) + b << 0;
      d += (c ^ a & (b ^ c)) + blocks[1] - 389564586;
      d = (d << 12 | d >>> 20) + a << 0;
      c += (b ^ d & (a ^ b)) + blocks[2] + 606105819;
      c = (c << 17 | c >>> 15) + d << 0;
      b += (a ^ c & (d ^ a)) + blocks[3] - 1044525330;
      b = (b << 22 | b >>> 10) + c << 0;
    }
    a += (d ^ b & (c ^ d)) + blocks[4] - 176418897;
    a = (a << 7 | a >>> 25) + b << 0;
    d += (c ^ a & (b ^ c)) + blocks[5] + 1200080426;
    d = (d << 12 | d >>> 20) + a << 0;
    c += (b ^ d & (a ^ b)) + blocks[6] - 1473231341;
    c = (c << 17 | c >>> 15) + d << 0;
    b += (a ^ c & (d ^ a)) + blocks[7] - 45705983;
    b = (b << 22 | b >>> 10) + c << 0;
    a += (d ^ b & (c ^ d)) + blocks[8] + 1770035416;
    a = (a << 7 | a >>> 25) + b << 0;
    d += (c ^ a & (b ^ c)) + blocks[9] - 1958414417;
    d = (d << 12 | d >>> 20) + a << 0;
    c += (b ^ d & (a ^ b)) + blocks[10] - 42063;
    c = (c << 17 | c >>> 15) + d << 0;
    b += (a ^ c & (d ^ a)) + blocks[11] - 1990404162;
    b = (b << 22 | b >>> 10) + c << 0;
    a += (d ^ b & (c ^ d)) + blocks[12] + 1804603682;
    a = (a << 7 | a >>> 25) + b << 0;
    d += (c ^ a & (b ^ c)) + blocks[13] - 40341101;
    d = (d << 12 | d >>> 20) + a << 0;
    c += (b ^ d & (a ^ b)) + blocks[14] - 1502002290;
    c = (c << 17 | c >>> 15) + d << 0;
    b += (a ^ c & (d ^ a)) + blocks[15] + 1236535329;
    b = (b << 22 | b >>> 10) + c << 0;
    a += (c ^ d & (b ^ c)) + blocks[1] - 165796510;
    a = (a << 5 | a >>> 27) + b << 0;
    d += (b ^ c & (a ^ b)) + blocks[6] - 1069501632;
    d = (d << 9 | d >>> 23) + a << 0;
    c += (a ^ b & (d ^ a)) + blocks[11] + 643717713;
    c = (c << 14 | c >>> 18) + d << 0;
    b += (d ^ a & (c ^ d)) + blocks[0] - 373897302;
    b = (b << 20 | b >>> 12) + c << 0;
    a += (c ^ d & (b ^ c)) + blocks[5] - 701558691;
    a = (a << 5 | a >>> 27) + b << 0;
    d += (b ^ c & (a ^ b)) + blocks[10] + 38016083;
    d = (d << 9 | d >>> 23) + a << 0;
    c += (a ^ b & (d ^ a)) + blocks[15] - 660478335;
    c = (c << 14 | c >>> 18) + d << 0;
    b += (d ^ a & (c ^ d)) + blocks[4] - 405537848;
    b = (b << 20 | b >>> 12) + c << 0;
    a += (c ^ d & (b ^ c)) + blocks[9] + 568446438;
    a = (a << 5 | a >>> 27) + b << 0;
    d += (b ^ c & (a ^ b)) + blocks[14] - 1019803690;
    d = (d << 9 | d >>> 23) + a << 0;
    c += (a ^ b & (d ^ a)) + blocks[3] - 187363961;
    c = (c << 14 | c >>> 18) + d << 0;
    b += (d ^ a & (c ^ d)) + blocks[8] + 1163531501;
    b = (b << 20 | b >>> 12) + c << 0;
    a += (c ^ d & (b ^ c)) + blocks[13] - 1444681467;
    a = (a << 5 | a >>> 27) + b << 0;
    d += (b ^ c & (a ^ b)) + blocks[2] - 51403784;
    d = (d << 9 | d >>> 23) + a << 0;
    c += (a ^ b & (d ^ a)) + blocks[7] + 1735328473;
    c = (c << 14 | c >>> 18) + d << 0;
    b += (d ^ a & (c ^ d)) + blocks[12] - 1926607734;
    b = (b << 20 | b >>> 12) + c << 0;
    bc = b ^ c;
    a += (bc ^ d) + blocks[5] - 378558;
    a = (a << 4 | a >>> 28) + b << 0;
    d += (bc ^ a) + blocks[8] - 2022574463;
    d = (d << 11 | d >>> 21) + a << 0;
    da = d ^ a;
    c += (da ^ b) + blocks[11] + 1839030562;
    c = (c << 16 | c >>> 16) + d << 0;
    b += (da ^ c) + blocks[14] - 35309556;
    b = (b << 23 | b >>> 9) + c << 0;
    bc = b ^ c;
    a += (bc ^ d) + blocks[1] - 1530992060;
    a = (a << 4 | a >>> 28) + b << 0;
    d += (bc ^ a) + blocks[4] + 1272893353;
    d = (d << 11 | d >>> 21) + a << 0;
    da = d ^ a;
    c += (da ^ b) + blocks[7] - 155497632;
    c = (c << 16 | c >>> 16) + d << 0;
    b += (da ^ c) + blocks[10] - 1094730640;
    b = (b << 23 | b >>> 9) + c << 0;
    bc = b ^ c;
    a += (bc ^ d) + blocks[13] + 681279174;
    a = (a << 4 | a >>> 28) + b << 0;
    d += (bc ^ a) + blocks[0] - 358537222;
    d = (d << 11 | d >>> 21) + a << 0;
    da = d ^ a;
    c += (da ^ b) + blocks[3] - 722521979;
    c = (c << 16 | c >>> 16) + d << 0;
    b += (da ^ c) + blocks[6] + 76029189;
    b = (b << 23 | b >>> 9) + c << 0;
    bc = b ^ c;
    a += (bc ^ d) + blocks[9] - 640364487;
    a = (a << 4 | a >>> 28) + b << 0;
    d += (bc ^ a) + blocks[12] - 421815835;
    d = (d << 11 | d >>> 21) + a << 0;
    da = d ^ a;
    c += (da ^ b) + blocks[15] + 530742520;
    c = (c << 16 | c >>> 16) + d << 0;
    b += (da ^ c) + blocks[2] - 995338651;
    b = (b << 23 | b >>> 9) + c << 0;
    a += (c ^ (b | ~d)) + blocks[0] - 198630844;
    a = (a << 6 | a >>> 26) + b << 0;
    d += (b ^ (a | ~c)) + blocks[7] + 1126891415;
    d = (d << 10 | d >>> 22) + a << 0;
    c += (a ^ (d | ~b)) + blocks[14] - 1416354905;
    c = (c << 15 | c >>> 17) + d << 0;
    b += (d ^ (c | ~a)) + blocks[5] - 57434055;
    b = (b << 21 | b >>> 11) + c << 0;
    a += (c ^ (b | ~d)) + blocks[12] + 1700485571;
    a = (a << 6 | a >>> 26) + b << 0;
    d += (b ^ (a | ~c)) + blocks[3] - 1894986606;
    d = (d << 10 | d >>> 22) + a << 0;
    c += (a ^ (d | ~b)) + blocks[10] - 1051523;
    c = (c << 15 | c >>> 17) + d << 0;
    b += (d ^ (c | ~a)) + blocks[1] - 2054922799;
    b = (b << 21 | b >>> 11) + c << 0;
    a += (c ^ (b | ~d)) + blocks[8] + 1873313359;
    a = (a << 6 | a >>> 26) + b << 0;
    d += (b ^ (a | ~c)) + blocks[15] - 30611744;
    d = (d << 10 | d >>> 22) + a << 0;
    c += (a ^ (d | ~b)) + blocks[6] - 1560198380;
    c = (c << 15 | c >>> 17) + d << 0;
    b += (d ^ (c | ~a)) + blocks[13] + 1309151649;
    b = (b << 21 | b >>> 11) + c << 0;
    a += (c ^ (b | ~d)) + blocks[4] - 145523070;
    a = (a << 6 | a >>> 26) + b << 0;
    d += (b ^ (a | ~c)) + blocks[11] - 1120210379;
    d = (d << 10 | d >>> 22) + a << 0;
    c += (a ^ (d | ~b)) + blocks[2] + 718787259;
    c = (c << 15 | c >>> 17) + d << 0;
    b += (d ^ (c | ~a)) + blocks[9] - 343485551;
    b = (b << 21 | b >>> 11) + c << 0;
    if (this.first) {
      this.h0 = a + 1732584193 << 0;
      this.h1 = b - 271733879 << 0;
      this.h2 = c - 1732584194 << 0;
      this.h3 = d + 271733878 << 0;
      this.first = false;
    } else {
      this.h0 = this.h0 + a << 0;
      this.h1 = this.h1 + b << 0;
      this.h2 = this.h2 + c << 0;
      this.h3 = this.h3 + d << 0;
    }
  };

  /**
   * @method hex
   * @memberof Md5
   * @instance
   * @description Output hash as hex string
   * @returns {String} Hex string
   * @see {@link md5.hex}
   * @example
   * hash.hex();
   */
  Md5.prototype.hex = function () {
    this.finalize();
    var h0 = this.h0,
      h1 = this.h1,
      h2 = this.h2,
      h3 = this.h3;
    return HEX_CHARS[h0 >> 4 & 0x0F] + HEX_CHARS[h0 & 0x0F] + HEX_CHARS[h0 >> 12 & 0x0F] + HEX_CHARS[h0 >> 8 & 0x0F] + HEX_CHARS[h0 >> 20 & 0x0F] + HEX_CHARS[h0 >> 16 & 0x0F] + HEX_CHARS[h0 >> 28 & 0x0F] + HEX_CHARS[h0 >> 24 & 0x0F] + HEX_CHARS[h1 >> 4 & 0x0F] + HEX_CHARS[h1 & 0x0F] + HEX_CHARS[h1 >> 12 & 0x0F] + HEX_CHARS[h1 >> 8 & 0x0F] + HEX_CHARS[h1 >> 20 & 0x0F] + HEX_CHARS[h1 >> 16 & 0x0F] + HEX_CHARS[h1 >> 28 & 0x0F] + HEX_CHARS[h1 >> 24 & 0x0F] + HEX_CHARS[h2 >> 4 & 0x0F] + HEX_CHARS[h2 & 0x0F] + HEX_CHARS[h2 >> 12 & 0x0F] + HEX_CHARS[h2 >> 8 & 0x0F] + HEX_CHARS[h2 >> 20 & 0x0F] + HEX_CHARS[h2 >> 16 & 0x0F] + HEX_CHARS[h2 >> 28 & 0x0F] + HEX_CHARS[h2 >> 24 & 0x0F] + HEX_CHARS[h3 >> 4 & 0x0F] + HEX_CHARS[h3 & 0x0F] + HEX_CHARS[h3 >> 12 & 0x0F] + HEX_CHARS[h3 >> 8 & 0x0F] + HEX_CHARS[h3 >> 20 & 0x0F] + HEX_CHARS[h3 >> 16 & 0x0F] + HEX_CHARS[h3 >> 28 & 0x0F] + HEX_CHARS[h3 >> 24 & 0x0F];
  };

  /**
   * @method toString
   * @memberof Md5
   * @instance
   * @description Output hash as hex string
   * @returns {String} Hex string
   * @see {@link md5.hex}
   * @example
   * hash.toString();
   */
  Md5.prototype.toString = Md5.prototype.hex;

  /**
   * @method digest
   * @memberof Md5
   * @instance
   * @description Output hash as bytes array
   * @returns {Array} Bytes array
   * @see {@link md5.digest}
   * @example
   * hash.digest();
   */
  Md5.prototype.digest = function (format) {
    if (format === 'hex') return this.hex();
    this.finalize();
    var h0 = this.h0,
      h1 = this.h1,
      h2 = this.h2,
      h3 = this.h3;
    var res = [h0 & 0xFF, h0 >> 8 & 0xFF, h0 >> 16 & 0xFF, h0 >> 24 & 0xFF, h1 & 0xFF, h1 >> 8 & 0xFF, h1 >> 16 & 0xFF, h1 >> 24 & 0xFF, h2 & 0xFF, h2 >> 8 & 0xFF, h2 >> 16 & 0xFF, h2 >> 24 & 0xFF, h3 & 0xFF, h3 >> 8 & 0xFF, h3 >> 16 & 0xFF, h3 >> 24 & 0xFF];
    return res;
  };

  /**
   * @method array
   * @memberof Md5
   * @instance
   * @description Output hash as bytes array
   * @returns {Array} Bytes array
   * @see {@link md5.array}
   * @example
   * hash.array();
   */
  Md5.prototype.array = Md5.prototype.digest;

  /**
   * @method arrayBuffer
   * @memberof Md5
   * @instance
   * @description Output hash as ArrayBuffer
   * @returns {ArrayBuffer} ArrayBuffer
   * @see {@link md5.arrayBuffer}
   * @example
   * hash.arrayBuffer();
   */
  Md5.prototype.arrayBuffer = function () {
    this.finalize();
    var buffer = new ArrayBuffer(16);
    var blocks = new Uint32Array(buffer);
    blocks[0] = this.h0;
    blocks[1] = this.h1;
    blocks[2] = this.h2;
    blocks[3] = this.h3;
    return buffer;
  };

  /**
   * @method buffer
   * @deprecated This maybe confuse with Buffer in node.js. Please use arrayBuffer instead.
   * @memberof Md5
   * @instance
   * @description Output hash as ArrayBuffer
   * @returns {ArrayBuffer} ArrayBuffer
   * @see {@link md5.buffer}
   * @example
   * hash.buffer();
   */
  Md5.prototype.buffer = Md5.prototype.arrayBuffer;

  /**
   * @method base64
   * @memberof Md5
   * @instance
   * @description Output hash as base64 string
   * @returns {String} base64 string
   * @see {@link md5.base64}
   * @example
   * hash.base64();
   */
  Md5.prototype.base64 = function () {
    var v1,
      v2,
      v3,
      base64Str = '',
      bytes = this.array();
    for (var i = 0; i < 15;) {
      v1 = bytes[i++];
      v2 = bytes[i++];
      v3 = bytes[i++];
      base64Str += BASE64_ENCODE_CHAR[v1 >>> 2] + BASE64_ENCODE_CHAR[(v1 << 4 | v2 >>> 4) & 63] + BASE64_ENCODE_CHAR[(v2 << 2 | v3 >>> 6) & 63] + BASE64_ENCODE_CHAR[v3 & 63];
    }
    v1 = bytes[i];
    base64Str += BASE64_ENCODE_CHAR[v1 >>> 2] + BASE64_ENCODE_CHAR[v1 << 4 & 63] + '==';
    return base64Str;
  };
  var exports = createMethod();
  if (COMMON_JS) {
    module.exports = exports;
  } else {
    /**
     * @method md5
     * @description Md5 hash function, export to global in browsers.
     * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
     * @returns {String} md5 hashes
     * @example
     * md5(''); // d41d8cd98f00b204e9800998ecf8427e
     * md5('The quick brown fox jumps over the lazy dog'); // 9e107d9d372bb6826bd81d3542a419d6
     * md5('The quick brown fox jumps over the lazy dog.'); // e4d909c290d0fb1ca068ffaddf22cbd0
     *
     * // It also supports UTF-8 encoding
     * md5('中文'); // a7bac2239fcdcb3a067903d8077c4a07
     *
     * // It also supports byte `Array`, `Uint8Array`, `ArrayBuffer`
     * md5([]); // d41d8cd98f00b204e9800998ecf8427e
     * md5(new Uint8Array([])); // d41d8cd98f00b204e9800998ecf8427e
     */
    root.md5 = exports;
    if (AMD) {
      !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
        return exports;
      }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
  }
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./lib/request.js":
/*!************************!*\
  !*** ./lib/request.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
var stringifyPrimitive = function stringifyPrimitive(v) {
  switch (_typeof(v)) {
    case 'string':
      return v;
    case 'boolean':
      return v ? 'true' : 'false';
    case 'number':
      return isFinite(v) ? v : '';
    default:
      return '';
  }
};
var queryStringify = function queryStringify(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }
  if (_typeof(obj) === 'object') {
    return Object.keys(obj).map(function (k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (Array.isArray(obj[k])) {
        return obj[k].map(function (v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).filter(Boolean).join(sep);
  }
  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq + encodeURIComponent(stringifyPrimitive(obj));
};
var xhrRes = function xhrRes(err, xhr, body) {
  var headers = {};
  var strHeaders = xhr.getAllResponseHeaders();
  if (strHeaders && strHeaders.length > 0) {
    strHeaders.trim().split('\n').forEach(function (item) {
      if (item) {
        var index = item.indexOf(':');
        var key = item.substr(0, index).trim().toLowerCase();
        var val = item.substr(index + 1).trim();
        headers[key] = val;
      }
    });
  }
  return {
    error: err,
    statusCode: xhr.status,
    statusMessage: xhr.statusText,
    headers: headers,
    body: body
  };
};
var xhrBody = function xhrBody(xhr, dataType) {
  return !dataType && dataType === 'text' ? xhr.responseText : xhr.response;
};
var request = function request(opt, callback) {
  // method
  var method = (opt.method || 'GET').toUpperCase();

  // url、qs
  var url = opt.url;
  if (opt.qs) {
    var qsStr = queryStringify(opt.qs);
    if (qsStr) {
      url += (url.indexOf('?') === -1 ? '?' : '&') + qsStr;
    }
  }

  // 创建 ajax 实例
  var xhr = new XMLHttpRequest();
  xhr.open(method, url, true);
  xhr.responseType = opt.dataType || 'text';

  // 处理 xhrFields 属性
  if (opt.xhrFields) {
    for (var xhrField in opt.xhrFields) {
      xhr[xhrField] = opt.xhrFields[xhrField];
    }
  }

  // 处理 headers
  var headers = opt.headers;
  if (headers) {
    for (var key in headers) {
      if (headers.hasOwnProperty(key) && key.toLowerCase() !== 'content-length' && key.toLowerCase() !== 'user-agent' && key.toLowerCase() !== 'origin' && key.toLowerCase() !== 'host') {
        xhr.setRequestHeader(key, headers[key]);
      }
    }
  }

  // onprogress
  if (opt.onProgress && xhr.upload) xhr.upload.onprogress = opt.onProgress;
  if (opt.onDownloadProgress) xhr.onprogress = opt.onDownloadProgress;

  // timeout
  if (opt.timeout) xhr.timeout = opt.timeout;
  xhr.ontimeout = function (event) {
    var error = new Error('timeout');
    callback(xhrRes(error, xhr));
  };

  // success 2xx/3xx/4xx
  xhr.onload = function () {
    callback(xhrRes(null, xhr, xhrBody(xhr, opt.dataType)));
  };

  // error 5xx/0 (网络错误、跨域报错、Https connect-src 限制的报错时 statusCode 为 0)
  xhr.onerror = function (err) {
    var body = xhrBody(xhr, opt.dataType);
    if (body) {
      // 5xx
      callback(xhrRes(null, xhr, body));
    } else {
      // 0
      var error = xhr.statusText;
      if (!error && xhr.status === 0) error = new Error('CORS blocked or network error');
      callback(xhrRes(error, xhr, body));
    }
  };

  // send
  xhr.send(opt.body || '');

  // 返回 ajax 实例，用于外部调用 xhr.abort
  return xhr;
};
module.exports = request;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/@babel/runtime/helpers/toPropertyKey.js");
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/@babel/runtime/helpers/toPropertyKey.js");
function _defineProperty(e, r, t) {
  return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");
var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");
var nonIterableRest = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");
function _slicedToArray(r, e) {
  return arrayWithHoles(r) || iterableToArrayLimit(r, e) || unsupportedIterableToArray(r, e) || nonIterableRest();
}
module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toPrimitive.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPrimitive.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"];
function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
module.exports = toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toPropertyKey.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPropertyKey.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"];
var toPrimitive = __webpack_require__(/*! ./toPrimitive.js */ "./node_modules/@babel/runtime/helpers/toPrimitive.js");
function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
module.exports = toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(o) {
  "@babel/helpers - typeof";

  return module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof(o);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? arrayLikeToArray(r, a) : void 0;
  }
}
module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@nodable/entities/src/EntityDecoder.js":
/*!*************************************************************!*\
  !*** ./node_modules/@nodable/entities/src/EntityDecoder.js ***!
  \*************************************************************/
/*! exports provided: ENTITY_ACTION, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENTITY_ACTION", function() { return ENTITY_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EntityDecoder; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _entities_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./entities.js */ "./node_modules/@nodable/entities/src/entities.js");




function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
// ---------------------------------------------------------------------------
// Built-in named entity map  (name → replacement string)
// No regex, no {regex,val} objects — just flat key/value pairs.
// ---------------------------------------------------------------------------



// ---------------------------------------------------------------------------
// Entity hook action constants
// ---------------------------------------------------------------------------

/**
 * Action constants for `onExternalEntity` and `onInputEntity` hooks.
 *
 * Use these instead of raw strings to avoid typos:
 *
 * @example
 * import EntityDecoder, { ENTITY_ACTION } from './EntityDecoder.js';
 * const dec = new EntityDecoder({
 *   onInputEntity: (name, value) => ENTITY_ACTION.BLOCK,
 * });
 */
var ENTITY_ACTION = Object.freeze({
  /** Resolve and expand the entity normally. */
  ALLOW: 'allow',
  /** Silently skip this entity — it will not be registered. */
  BLOCK: 'block',
  /** Throw an error, aborting entity registration entirely. */
  THROW: 'throw'
});

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

var SPECIAL_CHARS = new Set('!?\\\\/[]$%{}^&*()<>|+');

/**
 * Validate that an entity name contains no dangerous characters.
 * @param {string} name
 * @returns {string} the name, unchanged
 * @throws {Error} on invalid characters
 */
function validateEntityName(name) {
  if (name[0] === '#') {
    throw new Error("[EntityReplacer] Invalid character '#' in entity name: \"".concat(name, "\""));
  }
  var _iterator = _createForOfIteratorHelper(name),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var ch = _step.value;
      if (SPECIAL_CHARS.has(ch)) {
        throw new Error("[EntityReplacer] Invalid character '".concat(ch, "' in entity name: \"").concat(name, "\""));
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return name;
}

/**
 * Merge one or more entity maps into a flat name→string map.
 * Accepts either:
 *   - plain string values:             { amp: '&' }
 *   - legacy {regex,val} / {regx,val}: { lt: { regex: /.../, val: '<' } }
 *
 * Values containing '&' are skipped (recursive expansion risk).
 *
 * @param {...object} maps
 * @returns {Record<string, string>}
 */
function mergeEntityMaps() {
  var out = Object.create(null);
  for (var _len = arguments.length, maps = new Array(_len), _key = 0; _key < _len; _key++) {
    maps[_key] = arguments[_key];
  }
  for (var _i = 0, _maps = maps; _i < _maps.length; _i++) {
    var map = _maps[_i];
    if (!map) continue;
    for (var _i2 = 0, _Object$keys = Object.keys(map); _i2 < _Object$keys.length; _i2++) {
      var key = _Object$keys[_i2];
      var raw = map[key];
      if (typeof raw === 'string') {
        out[key] = raw;
      } else if (raw && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_3___default()(raw) === 'object' && raw.val !== undefined) {
        // Legacy {regex,val} or {regx,val} — extract the string val only
        var val = raw.val;
        if (typeof val === 'string') {
          out[key] = val;
        }
        // function vals are not supported in the scanner — skip
      }
    }
  }
  return out;
}

// ---------------------------------------------------------------------------
// applyLimitsTo helpers
// ---------------------------------------------------------------------------

var LIMIT_TIER_EXTERNAL = 'external'; // input/runtime + persistent external maps
var LIMIT_TIER_BASE = 'base'; // DEFAULT_XML_ENTITIES + namedEntities (system) maps
var LIMIT_TIER_ALL = 'all'; // every entity regardless of tier

/**
 * Resolve `applyLimitsTo` option into a normalised Set of tier strings.
 * Accepted values: 'external' | 'base' | 'all' | string[]
 * Default: 'external' (only untrusted injected entities are counted).
 * @param {string|string[]|undefined} raw
 * @returns {Set<string>}
 */
function parseLimitTiers(raw) {
  if (!raw || raw === LIMIT_TIER_EXTERNAL) return new Set([LIMIT_TIER_EXTERNAL]);
  if (raw === LIMIT_TIER_ALL) return new Set([LIMIT_TIER_ALL]);
  if (raw === LIMIT_TIER_BASE) return new Set([LIMIT_TIER_BASE]);
  if (Array.isArray(raw)) return new Set(raw);
  return new Set([LIMIT_TIER_EXTERNAL]); // safe default for unrecognised values
}

// ---------------------------------------------------------------------------
// NCR (Numeric Character Reference) classification
// ---------------------------------------------------------------------------

// Severity order — higher number = stricter action.
// Used to enforce minimum action levels for specific codepoint ranges.
var NCR_LEVEL = Object.freeze({
  allow: 0,
  leave: 1,
  remove: 2,
  throw: 3
});

// XML 1.0 §2.2: allowed chars are #x9 | #xA | #xD | [#x20-#xD7FF] | [#xE000-#xFFFD] | [#x10000-#x10FFFF]
// Restricted C0: U+0001–U+001F excluding U+0009, U+000A, U+000D
var XML10_ALLOWED_C0 = new Set([0x09, 0x0A, 0x0D]);

/**
 * Parse the `ncr` constructor option into flat, hot-path-friendly fields.
 * @param {object|undefined} ncr
 * @returns {{ xmlVersion: number, onLevel: number, nullLevel: number }}
 */
function parseNCRConfig(ncr) {
  var _NCR_LEVEL$ncr$onNCR, _NCR_LEVEL$ncr$nullNC;
  if (!ncr) {
    return {
      xmlVersion: 1.0,
      onLevel: NCR_LEVEL.allow,
      nullLevel: NCR_LEVEL.remove
    };
  }
  var xmlVersion = ncr.xmlVersion === 1.1 ? 1.1 : 1.0;
  var onLevel = (_NCR_LEVEL$ncr$onNCR = NCR_LEVEL[ncr.onNCR]) !== null && _NCR_LEVEL$ncr$onNCR !== void 0 ? _NCR_LEVEL$ncr$onNCR : NCR_LEVEL.allow;
  var nullLevel = (_NCR_LEVEL$ncr$nullNC = NCR_LEVEL[ncr.nullNCR]) !== null && _NCR_LEVEL$ncr$nullNC !== void 0 ? _NCR_LEVEL$ncr$nullNC : NCR_LEVEL.remove;
  // 'allow' is not meaningful for null — clamp to at least 'remove'
  var clampedNull = Math.max(nullLevel, NCR_LEVEL.remove);
  return {
    xmlVersion: xmlVersion,
    onLevel: onLevel,
    nullLevel: clampedNull
  };
}

// ---------------------------------------------------------------------------
// EntityReplacer
// ---------------------------------------------------------------------------

/**
 * Single-pass, zero-regex entity replacer for XML/HTML content.
 *
 * Algorithm: scan the string once for '&', read to ';', resolve via map
 * or direct codepoint conversion, build output chunks, join once at the end.
 *
 * Entity lookup priority (highest → lowest):
 *   1. input / runtime  (DOCTYPE entities for current document)
 *   2. persistent external (survive across documents)
 *   3. base named map   (DEFAULT_XML_ENTITIES + user-supplied namedEntities)
 *
 * Both input and external resolve as the 'external' tier for limit purposes.
 * Base map entities resolve as the 'base' tier.
 *
 * Numeric / hex references (&#NNN; / &#xHH;) are resolved directly via
 * String.fromCodePoint() — no map needed. They count as 'base' tier.
 *
 * @example
 * const replacer = new EntityReplacer({ namedEntities: COMMON_HTML });
 * replacer.setExternalEntities({ brand: 'Acme' });
 *
 * const instance = replacer.reset();
 * instance.addInputEntities({ version: '1.0' });
 * instance.encode('&brand; v&version; &lt;'); // 'Acme v1.0 <'
 */
var EntityDecoder = /*#__PURE__*/function () {
  /**
   * @param {object} [options]
   * @param {object|null}  [options.namedEntities]        — extra named entities merged into base map
   * @param {object}  [options.limit]                 — security limits
   * @param {number}       [options.limit.maxTotalExpansions=0]  — 0 = unlimited
   * @param {number}       [options.limit.maxExpandedLength=0]   — 0 = unlimited
   * @param {'external'|'base'|'all'|string[]} [options.limit.applyLimitsTo='external']
   *   Which entity tiers count against the security limits:
   *   - 'external' (default) — only input/runtime + persistent external entities
   *   - 'base'               — only DEFAULT_XML_ENTITIES + namedEntities
   *   - 'all'                — every entity regardless of tier
   *   - string[]             — explicit combination, e.g. ['external', 'base']
   * @param {((resolved: string, original: string) => string)|null} [options.postCheck=null]
   * @param {string[]} [options.remove=[]] — entity names (e.g. ['nbsp', '#13']) to delete (replace with empty string)
   * @param {string[]} [options.leave=[]]  — entity names to keep as literal (unchanged in output)
   * @param {object}   [options.ncr]       — Numeric Character Reference controls
   * @param {1.0|1.1}  [options.ncr.xmlVersion=1.0]
   *   XML version governing which codepoint ranges are restricted:
   *   - 1.0 — C0 controls U+0001–U+001F (except U+0009/000A/000D) are prohibited
   *   - 1.1 — C0 controls are allowed when written as NCRs; C1 (U+007F–U+009F) decoded as-is
   * @param {'allow'|'leave'|'remove'|'throw'} [options.ncr.onNCR='allow']
   *   Base action for numeric references. Severity order: allow < leave < remove < throw.
   *   For codepoint ranges that carry a minimum level (surrogates → remove, XML 1.0 C0 → remove),
   *   the effective action is max(onNCR, rangeMinimum).
   * @param {'remove'|'throw'} [options.ncr.nullNCR='remove']
   *   Action for U+0000 (null). 'allow' and 'leave' are clamped to 'remove' since null is never safe.
   * @param {((name: string, value: string) => 'allow'|'block'|'throw')|null} [options.onExternalEntity=null]
   *   Hook called when an external entity is registered via `setExternalEntities()` or
   *   `addExternalEntity()`. Return `ENTITY_ACTION.ALLOW` to accept the entity,
   *   `ENTITY_ACTION.BLOCK` to silently skip it, or `ENTITY_ACTION.THROW` to abort with an error.
   * @param {((name: string, value: string) => 'allow'|'block'|'throw')|null} [options.onInputEntity=null]
   *   Hook called when an input entity is registered via `addInputEntities()`. Return
   *   `ENTITY_ACTION.ALLOW` to accept, `ENTITY_ACTION.BLOCK` to silently skip, or
   *   `ENTITY_ACTION.THROW` to abort with an error.
   */
  function EntityDecoder() {
    var _this$_limit$applyLim, _options$numericAllow;
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, EntityDecoder);
    this._limit = options.limit || {};
    this._maxTotalExpansions = this._limit.maxTotalExpansions || 0;
    this._maxExpandedLength = this._limit.maxExpandedLength || 0;
    this._postCheck = typeof options.postCheck === 'function' ? options.postCheck : function (r) {
      return r;
    };
    this._limitTiers = parseLimitTiers((_this$_limit$applyLim = this._limit.applyLimitsTo) !== null && _this$_limit$applyLim !== void 0 ? _this$_limit$applyLim : LIMIT_TIER_EXTERNAL);
    this._numericAllowed = (_options$numericAllow = options.numericAllowed) !== null && _options$numericAllow !== void 0 ? _options$numericAllow : true;
    // Base map: DEFAULT_XML_ENTITIES + user-supplied extras. Immutable after construction.
    this._baseMap = mergeEntityMaps(_entities_js__WEBPACK_IMPORTED_MODULE_4__["XML"], options.namedEntities || null);

    // Persistent external entities — survive across documents.
    // Stored as a separate map so reset() never touches them.
    /** @type {Record<string, string>} */
    this._externalMap = Object.create(null);

    // Input / runtime entities — current document only, wiped on reset().
    /** @type {Record<string, string>} */
    this._inputMap = Object.create(null);

    // Per-document counters
    this._totalExpansions = 0;
    this._expandedLength = 0;

    // --- New: remove / leave sets ---
    /** @type {Set<string>} */
    this._removeSet = new Set(options.remove && Array.isArray(options.remove) ? options.remove : []);
    /** @type {Set<string>} */
    this._leaveSet = new Set(options.leave && Array.isArray(options.leave) ? options.leave : []);

    // --- NCR config (parsed into flat fields for hot-path speed) ---
    var ncrCfg = parseNCRConfig(options.ncr);
    this._ncrXmlVersion = ncrCfg.xmlVersion;
    this._ncrOnLevel = ncrCfg.onLevel;
    this._ncrNullLevel = ncrCfg.nullLevel;

    // --- Registration hooks ---
    /** @type {((name: string, value: string) => 'allow'|'block'|'throw')|null} */
    this._onExternalEntity = typeof options.onExternalEntity === 'function' ? options.onExternalEntity : null;
    /** @type {((name: string, value: string) => 'allow'|'block'|'throw')|null} */
    this._onInputEntity = typeof options.onInputEntity === 'function' ? options.onInputEntity : null;
  }

  // -------------------------------------------------------------------------
  // Private: registration hook dispatch
  // -------------------------------------------------------------------------

  /**
   * Invoke a registration hook for a single entity name/value pair.
   * Returns true when the entity should be accepted, false when it should be
   * silently skipped (BLOCK), and throws when the hook returns THROW.
   *
   * @param {((name: string, value: string) => 'allow'|'block'|'throw')|null} hook
   * @param {string} name
   * @param {string} value
   * @param {string} context  — used in error messages ('external' | 'input')
   * @returns {boolean}  true = accept, false = skip
   */
  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(EntityDecoder, [{
    key: "_applyRegistrationHook",
    value: function _applyRegistrationHook(hook, name, value, context) {
      if (!hook) return true; // no hook → always accept
      var action = hook(name, value);
      if (action === ENTITY_ACTION.BLOCK) return false;
      if (action === ENTITY_ACTION.THROW) {
        throw new Error("[EntityDecoder] Registration of ".concat(context, " entity \"&").concat(name, ";\" was rejected by hook"));
      }
      return true; // ALLOW or any unknown return value → accept
    }

    // -------------------------------------------------------------------------
    // Persistent external entity registration
    // -------------------------------------------------------------------------

    /**
     * Replace the full set of persistent external entities.
     * All keys are validated — throws on invalid characters.
     * If `onExternalEntity` is set, it is called once per entry; entries that
     * return `ENTITY_ACTION.BLOCK` are silently omitted, `ENTITY_ACTION.THROW`
     * aborts the whole call.
     * @param {Record<string, string | { regex?: RegExp, val: string }>} map
     */
  }, {
    key: "setExternalEntities",
    value: function setExternalEntities(map) {
      if (map) {
        for (var _i3 = 0, _Object$keys2 = Object.keys(map); _i3 < _Object$keys2.length; _i3++) {
          var key = _Object$keys2[_i3];
          validateEntityName(key);
        }
      }
      if (!this._onExternalEntity) {
        this._externalMap = mergeEntityMaps(map);
        return;
      }
      // Hook present — resolve values first, then filter
      var flat = mergeEntityMaps(map);
      var filtered = Object.create(null);
      for (var _i4 = 0, _Object$entries = Object.entries(flat); _i4 < _Object$entries.length; _i4++) {
        var _Object$entries$_i = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_Object$entries[_i4], 2),
          name = _Object$entries$_i[0],
          value = _Object$entries$_i[1];
        if (this._applyRegistrationHook(this._onExternalEntity, name, value, 'external')) {
          filtered[name] = value;
        }
      }
      this._externalMap = filtered;
    }

    /**
     * Add a single persistent external entity.
     * If `onExternalEntity` is set it is called before the entity is stored;
     * `ENTITY_ACTION.BLOCK` silently skips storage, `ENTITY_ACTION.THROW` raises.
     * @param {string} key
     * @param {string} value
     */
  }, {
    key: "addExternalEntity",
    value: function addExternalEntity(key, value) {
      validateEntityName(key);
      if (typeof value === 'string' && value.indexOf('&') === -1) {
        if (this._applyRegistrationHook(this._onExternalEntity, key, value, 'external')) {
          this._externalMap[key] = value;
        }
      }
    }

    // -------------------------------------------------------------------------
    // Input / runtime entity registration (per document)
    // -------------------------------------------------------------------------

    /**
     * Inject DOCTYPE entities for the current document.
     * Also resets per-document expansion counters.
     * If `onInputEntity` is set it is called once per entry; entries returning
     * `ENTITY_ACTION.BLOCK` are silently omitted, `ENTITY_ACTION.THROW` aborts.
     * @param {Record<string, string | { regx?: RegExp, regex?: RegExp, val: string }>} map
     */
  }, {
    key: "addInputEntities",
    value: function addInputEntities(map) {
      this._totalExpansions = 0;
      this._expandedLength = 0;
      if (!this._onInputEntity) {
        this._inputMap = mergeEntityMaps(map);
        return;
      }
      var flat = mergeEntityMaps(map);
      var filtered = Object.create(null);
      for (var _i5 = 0, _Object$entries2 = Object.entries(flat); _i5 < _Object$entries2.length; _i5++) {
        var _Object$entries2$_i = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_Object$entries2[_i5], 2),
          name = _Object$entries2$_i[0],
          value = _Object$entries2$_i[1];
        if (this._applyRegistrationHook(this._onInputEntity, name, value, 'input')) {
          filtered[name] = value;
        }
      }
      this._inputMap = filtered;
    }

    // -------------------------------------------------------------------------
    // Per-document reset
    // -------------------------------------------------------------------------

    /**
     * Wipe input/runtime entities and reset counters.
     * Call this before processing each new document.
     * @returns {this}
     */
  }, {
    key: "reset",
    value: function reset() {
      this._inputMap = Object.create(null);
      this._totalExpansions = 0;
      this._expandedLength = 0;
      return this;
    }

    // -------------------------------------------------------------------------
    // XML version (can be set after construction, e.g. once parser reads <?xml?>)
    // -------------------------------------------------------------------------

    /**
     * Update the XML version used for NCR classification.
     * Call this as soon as the document's `<?xml version="...">` declaration is parsed.
     * @param {1.0|1.1|number} version
     */
  }, {
    key: "setXmlVersion",
    value: function setXmlVersion(version) {
      this._ncrXmlVersion = version === 1.1 ? 1.1 : 1.0;
    }

    // -------------------------------------------------------------------------
    // Primary API
    // -------------------------------------------------------------------------

    /**
     * Replace all entity references in `str` in a single pass.
     *
     * @param {string} str
     * @returns {string}
     */
  }, {
    key: "decode",
    value: function decode(str) {
      if (typeof str !== 'string' || str.length === 0) return str;
      //TODO: check if needed
      if (str.indexOf('&') === -1) return str; // fast path — no entities at all

      var original = str;
      var chunks = [];
      var len = str.length;
      var last = 0; // start of next unprocessed literal chunk
      var i = 0;
      var limitExpansions = this._maxTotalExpansions > 0;
      var limitLength = this._maxExpandedLength > 0;
      var checkLimits = limitExpansions || limitLength;
      while (i < len) {
        // Scan forward to next '&'
        if (str.charCodeAt(i) !== 38 /* '&' */) {
          i++;
          continue;
        }

        // --- Found '&' at position i ---

        // Scan forward to ';'
        var j = i + 1;
        while (j < len && str.charCodeAt(j) !== 59 /* ';' */ && j - i <= 32) j++;
        if (j >= len || str.charCodeAt(j) !== 59) {
          // No closing ';' within window — treat '&' as literal
          i++;
          continue;
        }

        // Raw token between '&' and ';' (exclusive)
        var token = str.slice(i + 1, j);
        if (token.length === 0) {
          i++;
          continue;
        }
        var replacement = void 0;
        var tier = void 0; // which limit tier this entity belongs to

        if (this._removeSet.has(token)) {
          // Remove entity: replace with empty string
          replacement = '';
          // If entity was unknown (replacement undefined), we still need a tier for limits.
          // Treat as external tier because it's user-directed removal of an unknown reference.
          if (tier === undefined) {
            tier = LIMIT_TIER_EXTERNAL;
          }
        } else if (this._leaveSet.has(token)) {
          // Do not replace — keep original &token; as literal
          i++;
          continue;
        } else if (token.charCodeAt(0) === 35 /* '#' */) {
          // ---- Numeric / NCR reference ----
          // NCR classification always runs first — prohibited codepoints must be
          // caught regardless of numericAllowed.
          var ncrResult = this._resolveNCR(token);
          if (ncrResult === undefined) {
            // 'leave' action — keep original &token; as-is
            i++;
            continue;
          }
          replacement = ncrResult; // '' for remove, char string for allow
          tier = LIMIT_TIER_BASE;
        } else {
          // ---- Named reference ----
          var resolved = this._resolveName(token);
          replacement = resolved === null || resolved === void 0 ? void 0 : resolved.value;
          tier = resolved === null || resolved === void 0 ? void 0 : resolved.tier;
        }
        if (replacement === undefined) {
          // Unknown entity — leave as-is, advance past '&' only
          i++;
          continue;
        }

        // Flush literal chunk before this entity
        if (i > last) chunks.push(str.slice(last, i));
        chunks.push(replacement);
        last = j + 1; // skip past ';'
        i = last;

        // Apply expansion limits only if this tier is being tracked
        if (checkLimits && this._tierCounts(tier)) {
          if (limitExpansions) {
            this._totalExpansions++;
            if (this._totalExpansions > this._maxTotalExpansions) {
              throw new Error("[EntityReplacer] Entity expansion count limit exceeded: " + "".concat(this._totalExpansions, " > ").concat(this._maxTotalExpansions));
            }
          }
          if (limitLength) {
            // delta: replacement.length minus the raw &token; length (token.length + 2 for '&' and ';')
            var delta = replacement.length - (token.length + 2);
            if (delta > 0) {
              this._expandedLength += delta;
              if (this._expandedLength > this._maxExpandedLength) {
                throw new Error("[EntityReplacer] Expanded content length limit exceeded: " + "".concat(this._expandedLength, " > ").concat(this._maxExpandedLength));
              }
            }
          }
        }
      }

      // Flush trailing literal
      if (last < len) chunks.push(str.slice(last));

      // If nothing was replaced, chunks is empty — return original
      var result = chunks.length === 0 ? str : chunks.join('');
      return this._postCheck(result, original);
    }

    // -------------------------------------------------------------------------
    // Private: limit tier check
    // -------------------------------------------------------------------------

    /**
     * Returns true if a resolved entity of the given tier should count
     * against the expansion/length limits.
     * @param {string} tier  — LIMIT_TIER_EXTERNAL | LIMIT_TIER_BASE
     * @returns {boolean}
     */
  }, {
    key: "_tierCounts",
    value: function _tierCounts(tier) {
      if (this._limitTiers.has(LIMIT_TIER_ALL)) return true;
      return this._limitTiers.has(tier);
    }

    // -------------------------------------------------------------------------
    // Private: entity resolution
    // -------------------------------------------------------------------------

    /**
     * Resolve a named entity token (without & and ;).
     * Priority: inputMap > externalMap > baseMap
     * Returns the resolved value tagged with its limit tier.
     *
     * @param {string} name
     * @returns {{ value: string, tier: string }|undefined}
     */
  }, {
    key: "_resolveName",
    value: function _resolveName(name) {
      // input and external both count as 'external' tier for limit purposes —
      // they are injected at runtime and are the untrusted surface.
      if (name in this._inputMap) return {
        value: this._inputMap[name],
        tier: LIMIT_TIER_EXTERNAL
      };
      if (name in this._externalMap) return {
        value: this._externalMap[name],
        tier: LIMIT_TIER_EXTERNAL
      };
      if (name in this._baseMap) return {
        value: this._baseMap[name],
        tier: LIMIT_TIER_BASE
      };
      return undefined;
    }

    /**
     * Classify a codepoint and return the minimum action level that must be applied.
     * Returns -1 when no minimum is imposed (normal allow path).
     *
     * Ranges checked (in priority order):
     *   1. U+0000            — null, governed by nullNCR (always ≥ remove)
     *   2. U+D800–U+DFFF     — surrogates, always prohibited (min: remove)
     *   3. U+0001–U+001F \ {0x09,0x0A,0x0D}  — XML 1.0 restricted C0 (min: remove)
     *      (skipped in XML 1.1 — C0 controls are allowed when written as NCRs)
     *
     * @param {number} cp  — codepoint
     * @returns {number}   — minimum NCR_LEVEL value, or -1 for no restriction
     */
  }, {
    key: "_classifyNCR",
    value: function _classifyNCR(cp) {
      // 1. Null
      if (cp === 0) return this._ncrNullLevel;

      // 2. Surrogates — always prohibited, minimum 'remove'
      if (cp >= 0xD800 && cp <= 0xDFFF) return NCR_LEVEL.remove;

      // 3. XML 1.0 restricted C0 controls
      if (this._ncrXmlVersion === 1.0) {
        if (cp >= 0x01 && cp <= 0x1F && !XML10_ALLOWED_C0.has(cp)) return NCR_LEVEL.remove;
      }
      return -1; // no restriction
    }

    /**
     * Execute a resolved NCR action.
     *
     * @param {number} action   — NCR_LEVEL value
     * @param {string} token    — raw token (e.g. '#38') for error messages
     * @param {number} cp       — codepoint, used only for error messages
     * @returns {string|undefined}
     *   - decoded character string  → 'allow'
     *   - ''                        → 'remove'
     *   - undefined                 → 'leave' (caller must skip past '&' only)
     *   - throws Error              → 'throw'
     */
  }, {
    key: "_applyNCRAction",
    value: function _applyNCRAction(action, token, cp) {
      switch (action) {
        case NCR_LEVEL.allow:
          return String.fromCodePoint(cp);
        case NCR_LEVEL.remove:
          return '';
        case NCR_LEVEL.leave:
          return undefined;
        // signal: keep literal
        case NCR_LEVEL.throw:
          throw new Error("[EntityDecoder] Prohibited numeric character reference " + "&".concat(token, "; (U+").concat(cp.toString(16).toUpperCase().padStart(4, '0'), ")"));
        default:
          return String.fromCodePoint(cp);
      }
    }

    /**
     * Full NCR resolution pipeline for a numeric token.
     *
     * Steps:
     *   1. Parse the codepoint (decimal or hex).
     *   2. Validate the raw codepoint range (NaN, <0, >0x10FFFF).
     *   3. If numericAllowed is false and no minimum restriction applies → leave as-is.
     *   4. Classify the codepoint to find the minimum required action level.
     *   5. Resolve effective action = max(onNCR, minimum).
     *   6. Apply and return.
     *
     * @param {string} token  — e.g. '#38', '#x26', '#X26'
     * @returns {string|undefined}
     *   - string (incl. '')  — replacement ('' = remove)
     *   - undefined          — leave original &token; as-is
     */
  }, {
    key: "_resolveNCR",
    value: function _resolveNCR(token) {
      // Step 1: parse codepoint
      var second = token.charCodeAt(1);
      var cp;
      if (second === 120 /* x */ || second === 88 /* X */) {
        cp = parseInt(token.slice(2), 16);
      } else {
        cp = parseInt(token.slice(1), 10);
      }

      // Step 2: out-of-range → leave as-is unconditionally
      if (Number.isNaN(cp) || cp < 0 || cp > 0x10FFFF) return undefined;

      // Step 3: classify to get minimum action level
      var minimum = this._classifyNCR(cp);

      // Step 4: if numericAllowed is false and no hard minimum → leave
      if (!this._numericAllowed && minimum < NCR_LEVEL.remove) return undefined;

      // Step 5: effective action = max(configured onNCR, range minimum)
      var effective = minimum === -1 ? this._ncrOnLevel : Math.max(this._ncrOnLevel, minimum);

      // Step 6: apply
      return this._applyNCRAction(effective, token, cp);
    }
  }]);
}();


/***/ }),

/***/ "./node_modules/@nodable/entities/src/EntityEncoder.js":
/*!*************************************************************!*\
  !*** ./node_modules/@nodable/entities/src/EntityEncoder.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EntityEncoder; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _entityTries_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./entityTries.js */ "./node_modules/@nodable/entities/src/entityTries.js");


// EntityDecoder.js


// Replacement strings indexed by char code — direct array access, no hashing
var XML_UNSAFE_REPLACEMENT = new Array(128);
XML_UNSAFE_REPLACEMENT[38] = '&amp;'; // &
XML_UNSAFE_REPLACEMENT[60] = '&lt;'; // <
XML_UNSAFE_REPLACEMENT[62] = '&gt;'; // >
XML_UNSAFE_REPLACEMENT[34] = '&quot;'; // "
XML_UNSAFE_REPLACEMENT[39] = '&apos;'; // '

// Typed bitmask for O(1) "is this ASCII code XML-unsafe?" check
var IS_XML_UNSAFE = new Uint8Array(128);
IS_XML_UNSAFE[38] = 1;
IS_XML_UNSAFE[60] = 1;
IS_XML_UNSAFE[62] = 1;
IS_XML_UNSAFE[34] = 1;
IS_XML_UNSAFE[39] = 1;

// Fast pre-scan: bail out immediately if nothing needs encoding
var NEEDS_PROCESSING = /[&<>"'\u0080-\uFFFF]/;
var EntityEncoder = /*#__PURE__*/function () {
  function EntityEncoder() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, EntityEncoder);
    this.encodeXmlSafe = options.encodeXmlSafe !== false;
    this.encodeAllNamed = options.encodeAllNamed !== false;
    this.maxReplacements = options.maxReplacements || 0;
    this.replacementsCount = 0;
  }
  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(EntityEncoder, [{
    key: "encode",
    value: function encode(str) {
      if (typeof str !== 'string' || str.length === 0) return str;
      if (!NEEDS_PROCESSING.test(str)) return str;
      var maxRep = this.maxReplacements;
      if (maxRep > 0 && this.replacementsCount >= maxRep) return str;

      // Hoist to locals — avoids `this` property lookup inside the hot loop
      var encodeXmlSafe = this.encodeXmlSafe;
      var encodeAllNamed = this.encodeAllNamed;
      var len = str.length;
      var result = '';
      var last = 0;
      var i = 0;
      var limitReached = false;

      // ── Main loop: runs to len-2 so trie3 never needs a bounds check ────────
      // The last 2 characters are handled by the tail block below.
      var mainEnd = len - 2; // i <= mainEnd guarantees i+1 and i+2 are valid

      while (i <= mainEnd && !limitReached) {
        var c0 = str.charCodeAt(i);

        // ── ASCII branch ───────────────────────────────────────────────────
        if (c0 < 128) {
          if (encodeXmlSafe && IS_XML_UNSAFE[c0] === 1) {
            result += str.substring(last, i) + XML_UNSAFE_REPLACEMENT[c0];
            last = ++i;
            if (maxRep > 0) {
              this.replacementsCount++;
              if (this.replacementsCount >= maxRep) {
                limitReached = true;
                break;
              }
            }
          } else {
            // Bulk-skip: advance to the next interesting position without
            // touching the outer loop overhead on every safe character
            i++;
            while (i <= mainEnd && !limitReached) {
              var c = str.charCodeAt(i);
              if (c >= 128 || encodeXmlSafe && IS_XML_UNSAFE[c] === 1) break;
              i++;
            }
          }
          continue;
        }

        // ── Non-ASCII: integer-keyed trie lookup ───────────────────────────
        // No bounds checks needed for c1/c2 because i <= mainEnd guarantees
        // i+1 and i+2 are both within the string.
        var matchedEntity = null;
        var advance = 1;

        // Try 3-char match first (longest wins)
        var mid3 = _entityTries_js__WEBPACK_IMPORTED_MODULE_2__["trie3"].get(c0);
        if (mid3 !== undefined) {
          var c1 = str.charCodeAt(i + 1);
          var inner3 = mid3.get(c1);
          if (inner3 !== undefined) {
            var c2 = str.charCodeAt(i + 2);
            var candidate = inner3.get(c2);
            if (candidate !== undefined) {
              matchedEntity = candidate;
              advance = 3;
            }
          }
        }

        // Try 2-char match
        if (matchedEntity === null) {
          var inner2 = _entityTries_js__WEBPACK_IMPORTED_MODULE_2__["trie2"].get(c0);
          if (inner2 !== undefined) {
            var _c = str.charCodeAt(i + 1);
            var _candidate = inner2.get(_c);
            if (_candidate !== undefined) {
              matchedEntity = _candidate;
              advance = 2;
            }
          }
        }

        // Try 1-char match
        if (matchedEntity === null && encodeAllNamed) {
          var _candidate2 = _entityTries_js__WEBPACK_IMPORTED_MODULE_2__["trie1"].get(c0);
          if (_candidate2 !== undefined) {
            matchedEntity = _candidate2;
          }
        }
        if (matchedEntity !== null) {
          result += str.substring(last, i) + matchedEntity;
          i += advance;
          last = i;
          if (maxRep > 0) {
            this.replacementsCount++;
            if (this.replacementsCount >= maxRep) {
              limitReached = true;
              break;
            }
          }
        } else {
          i++;
        }
      }

      // ── Tail: handle the last 1-2 characters (no 3-char match possible) ────
      while (i < len && !limitReached) {
        var _c2 = str.charCodeAt(i);
        if (_c2 < 128) {
          if (encodeXmlSafe && IS_XML_UNSAFE[_c2] === 1) {
            result += str.substring(last, i) + XML_UNSAFE_REPLACEMENT[_c2];
            last = ++i;
            if (maxRep > 0) {
              this.replacementsCount++;
              if (this.replacementsCount >= maxRep) {
                limitReached = true;
                break;
              }
            }
          } else {
            i++;
          }
          continue;
        }

        // Non-ASCII tail — only 2-char and 1-char matches are possible here
        var _matchedEntity = null;
        var _advance = 1;
        if (i + 1 < len) {
          var _inner = _entityTries_js__WEBPACK_IMPORTED_MODULE_2__["trie2"].get(_c2);
          if (_inner !== undefined) {
            var _c3 = str.charCodeAt(i + 1);
            var _candidate3 = _inner.get(_c3);
            if (_candidate3 !== undefined) {
              _matchedEntity = _candidate3;
              _advance = 2;
            }
          }
        }
        if (_matchedEntity === null && encodeAllNamed) {
          var _candidate4 = _entityTries_js__WEBPACK_IMPORTED_MODULE_2__["trie1"].get(_c2);
          if (_candidate4 !== undefined) {
            _matchedEntity = _candidate4;
          }
        }
        if (_matchedEntity !== null) {
          result += str.substring(last, i) + _matchedEntity;
          i += _advance;
          last = i;
          if (maxRep > 0) {
            this.replacementsCount++;
            if (this.replacementsCount >= maxRep) {
              limitReached = true;
              break;
            }
          }
        } else {
          i++;
        }
      }

      // ── Flush any remaining literal suffix ────────────────────────────────
      if (last < len) result += str.substring(last);
      return result;
    }
  }, {
    key: "reset",
    value: function reset() {
      this.replacementsCount = 0;
    }
  }]);
}();


/***/ }),

/***/ "./node_modules/@nodable/entities/src/entities.js":
/*!********************************************************!*\
  !*** ./node_modules/@nodable/entities/src/entities.js ***!
  \********************************************************/
/*! exports provided: BASIC_LATIN, LATIN_ACCENTS, LATIN_EXTENDED, GREEK, CYRILLIC, MATH, MATH_ADVANCED, ARROWS, SHAPES, PUNCTUATION, CURRENCY, FRACTIONS, MISC_SYMBOLS, ALL_ENTITIES, XML, COMMON_HTML */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASIC_LATIN", function() { return BASIC_LATIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LATIN_ACCENTS", function() { return LATIN_ACCENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LATIN_EXTENDED", function() { return LATIN_EXTENDED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GREEK", function() { return GREEK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CYRILLIC", function() { return CYRILLIC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MATH", function() { return MATH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MATH_ADVANCED", function() { return MATH_ADVANCED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARROWS", function() { return ARROWS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHAPES", function() { return SHAPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PUNCTUATION", function() { return PUNCTUATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CURRENCY", function() { return CURRENCY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FRACTIONS", function() { return FRACTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MISC_SYMBOLS", function() { return MISC_SYMBOLS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALL_ENTITIES", function() { return ALL_ENTITIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XML", function() { return XML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMMON_HTML", function() { return COMMON_HTML; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
// ---------------------------------------------------------------------------
// Complete HTML5 named entity reference
// Organized by logical categories for easy maintenance and selective importing
// ---------------------------------------------------------------------------

/**
 * Basic Latin & Special Characters
 * @type {Record<string, string>}
 */
var BASIC_LATIN = {
  amp: '&',
  AMP: '&',
  lt: '<',
  LT: '<',
  gt: '>',
  GT: '>',
  quot: '"',
  QUOT: '"',
  apos: "'",
  lsquo: '‘',
  rsquo: '’',
  ldquo: '“',
  rdquo: '”',
  lsquor: '‚',
  rsquor: '’',
  ldquor: '„',
  bdquo: '„',
  comma: ',',
  period: '.',
  colon: ':',
  semi: ';',
  excl: '!',
  quest: '?',
  num: '#',
  dollar: '$',
  percent: '%',
  ast: '*',
  commat: '@',
  lowbar: '_',
  verbar: '|',
  vert: '|',
  sol: '/',
  bsol: '\\',
  lbrace: '{',
  rbrace: '}',
  lbrack: '[',
  rbrack: ']',
  lpar: '(',
  rpar: ')',
  nbsp: "\xA0",
  iexcl: '¡',
  cent: '¢',
  pound: '£',
  curren: '¤',
  yen: '¥',
  brvbar: '¦',
  sect: '§',
  uml: '¨',
  copy: '©',
  COPY: '©',
  ordf: 'ª',
  laquo: '«',
  not: '¬',
  shy: "\xAD",
  reg: '®',
  REG: '®',
  macr: '¯',
  deg: '°',
  plusmn: '±',
  sup2: '²',
  sup3: '³',
  acute: '´',
  micro: 'µ',
  para: '¶',
  middot: '·',
  cedil: '¸',
  sup1: '¹',
  ordm: 'º',
  raquo: '»',
  frac14: '¼',
  frac12: '½',
  half: '½',
  frac34: '¾',
  iquest: '¿',
  times: '×',
  div: '÷',
  divide: '÷'
};

/**
 * Latin Extended & Accented Letters (A-Z)
 * @type {Record<string, string>}
 */
var LATIN_ACCENTS = {
  Agrave: 'À',
  agrave: 'à',
  Aacute: 'Á',
  aacute: 'á',
  Acirc: 'Â',
  acirc: 'â',
  Atilde: 'Ã',
  atilde: 'ã',
  Auml: 'Ä',
  auml: 'ä',
  Aring: 'Å',
  aring: 'å',
  AElig: 'Æ',
  aelig: 'æ',
  Ccedil: 'Ç',
  ccedil: 'ç',
  Egrave: 'È',
  egrave: 'è',
  Eacute: 'É',
  eacute: 'é',
  Ecirc: 'Ê',
  ecirc: 'ê',
  Euml: 'Ë',
  euml: 'ë',
  Igrave: 'Ì',
  igrave: 'ì',
  Iacute: 'Í',
  iacute: 'í',
  Icirc: 'Î',
  icirc: 'î',
  Iuml: 'Ï',
  iuml: 'ï',
  ETH: 'Ð',
  eth: 'ð',
  Ntilde: 'Ñ',
  ntilde: 'ñ',
  Ograve: 'Ò',
  ograve: 'ò',
  Oacute: 'Ó',
  oacute: 'ó',
  Ocirc: 'Ô',
  ocirc: 'ô',
  Otilde: 'Õ',
  otilde: 'õ',
  Ouml: 'Ö',
  ouml: 'ö',
  Oslash: 'Ø',
  oslash: 'ø',
  Ugrave: 'Ù',
  ugrave: 'ù',
  Uacute: 'Ú',
  uacute: 'ú',
  Ucirc: 'Û',
  ucirc: 'û',
  Uuml: 'Ü',
  uuml: 'ü',
  Yacute: 'Ý',
  yacute: 'ý',
  THORN: 'Þ',
  thorn: 'þ',
  szlig: 'ß',
  yuml: 'ÿ',
  Yuml: 'Ÿ'
};

/**
 * Latin Extended (Letters with diacritics)
 * @type {Record<string, string>}
 */
var LATIN_EXTENDED = {
  Amacr: 'Ā',
  amacr: 'ā',
  Abreve: 'Ă',
  abreve: 'ă',
  Aogon: 'Ą',
  aogon: 'ą',
  Cacute: 'Ć',
  cacute: 'ć',
  Ccirc: 'Ĉ',
  ccirc: 'ĉ',
  Cdot: 'Ċ',
  cdot: 'ċ',
  Ccaron: 'Č',
  ccaron: 'č',
  Dcaron: 'Ď',
  dcaron: 'ď',
  Dstrok: 'Đ',
  dstrok: 'đ',
  Emacr: 'Ē',
  emacr: 'ē',
  Ecaron: 'Ě',
  ecaron: 'ě',
  Edot: 'Ė',
  edot: 'ė',
  Eogon: 'Ę',
  eogon: 'ę',
  Gcirc: 'Ĝ',
  gcirc: 'ĝ',
  Gbreve: 'Ğ',
  gbreve: 'ğ',
  Gdot: 'Ġ',
  gdot: 'ġ',
  Gcedil: 'Ģ',
  Hcirc: 'Ĥ',
  hcirc: 'ĥ',
  Hstrok: 'Ħ',
  hstrok: 'ħ',
  Itilde: 'Ĩ',
  itilde: 'ĩ',
  Imacr: 'Ī',
  imacr: 'ī',
  Iogon: 'Į',
  iogon: 'į',
  Idot: 'İ',
  IJlig: 'Ĳ',
  ijlig: 'ĳ',
  Jcirc: 'Ĵ',
  jcirc: 'ĵ',
  Kcedil: 'Ķ',
  kcedil: 'ķ',
  kgreen: 'ĸ',
  Lacute: 'Ĺ',
  lacute: 'ĺ',
  Lcedil: 'Ļ',
  lcedil: 'ļ',
  Lcaron: 'Ľ',
  lcaron: 'ľ',
  Lmidot: 'Ŀ',
  lmidot: 'ŀ',
  Lstrok: 'Ł',
  lstrok: 'ł',
  Nacute: 'Ń',
  nacute: 'ń',
  Ncaron: 'Ň',
  ncaron: 'ň',
  Ncedil: 'Ņ',
  ncedil: 'ņ',
  ENG: 'Ŋ',
  eng: 'ŋ',
  Omacr: 'Ō',
  omacr: 'ō',
  Odblac: 'Ő',
  odblac: 'ő',
  OElig: 'Œ',
  oelig: 'œ',
  Racute: 'Ŕ',
  racute: 'ŕ',
  Rcaron: 'Ř',
  rcaron: 'ř',
  Rcedil: 'Ŗ',
  rcedil: 'ŗ',
  Sacute: 'Ś',
  sacute: 'ś',
  Scirc: 'Ŝ',
  scirc: 'ŝ',
  Scedil: 'Ş',
  scedil: 'ş',
  Scaron: 'Š',
  scaron: 'š',
  Tcedil: 'Ţ',
  tcedil: 'ţ',
  Tcaron: 'Ť',
  tcaron: 'ť',
  Tstrok: 'Ŧ',
  tstrok: 'ŧ',
  Utilde: 'Ũ',
  utilde: 'ũ',
  Umacr: 'Ū',
  umacr: 'ū',
  Ubreve: 'Ŭ',
  ubreve: 'ŭ',
  Uring: 'Ů',
  uring: 'ů',
  Udblac: 'Ű',
  udblac: 'ű',
  Uogon: 'Ų',
  uogon: 'ų',
  Wcirc: 'Ŵ',
  wcirc: 'ŵ',
  Ycirc: 'Ŷ',
  ycirc: 'ŷ',
  Zacute: 'Ź',
  zacute: 'ź',
  Zdot: 'Ż',
  zdot: 'ż',
  Zcaron: 'Ž',
  zcaron: 'ž'
};

/**
 * Greek Letters
 * @type {Record<string, string>}
 */
var GREEK = {
  Alpha: 'Α',
  alpha: 'α',
  Beta: 'Β',
  beta: 'β',
  Gamma: 'Γ',
  gamma: 'γ',
  Delta: 'Δ',
  delta: 'δ',
  Epsilon: 'Ε',
  epsilon: 'ε',
  epsiv: 'ϵ',
  varepsilon: 'ϵ',
  Zeta: 'Ζ',
  zeta: 'ζ',
  Eta: 'Η',
  eta: 'η',
  Theta: 'Θ',
  theta: 'θ',
  thetasym: 'ϑ',
  vartheta: 'ϑ',
  Iota: 'Ι',
  iota: 'ι',
  Kappa: 'Κ',
  kappa: 'κ',
  kappav: 'ϰ',
  varkappa: 'ϰ',
  Lambda: 'Λ',
  lambda: 'λ',
  Mu: 'Μ',
  mu: 'μ',
  Nu: 'Ν',
  nu: 'ν',
  Xi: 'Ξ',
  xi: 'ξ',
  Omicron: 'Ο',
  omicron: 'ο',
  Pi: 'Π',
  pi: 'π',
  piv: 'ϖ',
  varpi: 'ϖ',
  Rho: 'Ρ',
  rho: 'ρ',
  rhov: 'ϱ',
  varrho: 'ϱ',
  Sigma: 'Σ',
  sigma: 'σ',
  sigmaf: 'ς',
  sigmav: 'ς',
  varsigma: 'ς',
  Tau: 'Τ',
  tau: 'τ',
  Upsilon: 'Υ',
  upsilon: 'υ',
  upsi: 'υ',
  Upsi: 'ϒ',
  upsih: 'ϒ',
  Phi: 'Φ',
  phi: 'φ',
  phiv: 'ϕ',
  varphi: 'ϕ',
  Chi: 'Χ',
  chi: 'χ',
  Psi: 'Ψ',
  psi: 'ψ',
  Omega: 'Ω',
  omega: 'ω',
  ohm: 'Ω',
  Gammad: 'Ϝ',
  gammad: 'ϝ',
  digamma: 'ϝ'
};

/**
 * Cyrillic Letters
 * @type {Record<string, string>}
 */
var CYRILLIC = {
  Afr: '𝔄',
  afr: '𝔞',
  Acy: 'А',
  acy: 'а',
  Bcy: 'Б',
  bcy: 'б',
  Vcy: 'В',
  vcy: 'в',
  Gcy: 'Г',
  gcy: 'г',
  Dcy: 'Д',
  dcy: 'д',
  IEcy: 'Е',
  iecy: 'е',
  IOcy: 'Ё',
  iocy: 'ё',
  ZHcy: 'Ж',
  zhcy: 'ж',
  Zcy: 'З',
  zcy: 'з',
  Icy: 'И',
  icy: 'и',
  Jcy: 'Й',
  jcy: 'й',
  Kcy: 'К',
  kcy: 'к',
  Lcy: 'Л',
  lcy: 'л',
  Mcy: 'М',
  mcy: 'м',
  Ncy: 'Н',
  ncy: 'н',
  Ocy: 'О',
  ocy: 'о',
  Pcy: 'П',
  pcy: 'п',
  Rcy: 'Р',
  rcy: 'р',
  Scy: 'С',
  scy: 'с',
  Tcy: 'Т',
  tcy: 'т',
  Ucy: 'У',
  ucy: 'у',
  Fcy: 'Ф',
  fcy: 'ф',
  KHcy: 'Х',
  khcy: 'х',
  TScy: 'Ц',
  tscy: 'ц',
  CHcy: 'Ч',
  chcy: 'ч',
  SHcy: 'Ш',
  shcy: 'ш',
  SHCHcy: 'Щ',
  shchcy: 'щ',
  HARDcy: 'Ъ',
  hardcy: 'ъ',
  Ycy: 'Ы',
  ycy: 'ы',
  SOFTcy: 'Ь',
  softcy: 'ь',
  Ecy: 'Э',
  ecy: 'э',
  YUcy: 'Ю',
  yucy: 'ю',
  YAcy: 'Я',
  yacy: 'я',
  DJcy: 'Ђ',
  djcy: 'ђ',
  GJcy: 'Ѓ',
  gjcy: 'ѓ',
  Jukcy: 'Є',
  jukcy: 'є',
  DScy: 'Ѕ',
  dscy: 'ѕ',
  Iukcy: 'І',
  iukcy: 'і',
  YIcy: 'Ї',
  yicy: 'ї',
  Jsercy: 'Ј',
  jsercy: 'ј',
  LJcy: 'Љ',
  ljcy: 'љ',
  NJcy: 'Њ',
  njcy: 'њ',
  TSHcy: 'Ћ',
  tshcy: 'ћ',
  KJcy: 'Ќ',
  kjcy: 'ќ',
  Ubrcy: 'Ў',
  ubrcy: 'ў',
  DZcy: 'Џ',
  dzcy: 'џ'
};

/**
 * Mathematical Operators & Relations
 * @type {Record<string, string>}
 */
var MATH = {
  plus: '+',
  pm: '±',
  times: '×',
  div: '÷',
  divide: '÷',
  sdot: '⋅',
  star: '☆',
  starf: '★',
  bigstar: '★',
  lowast: '∗',
  ast: '*',
  midast: '*',
  compfn: '∘',
  smallcircle: '∘',
  bullet: '•',
  bull: '•',
  nbsp: "\xA0",
  hellip: '…',
  mldr: '…',
  prime: '′',
  Prime: '″',
  tprime: '‴',
  bprime: '‵',
  backprime: '‵',
  minus: '−',
  minusd: '∸',
  dotminus: '∸',
  plusdo: '∔',
  dotplus: '∔',
  plusmn: '±',
  minusplus: '∓',
  mnplus: '∓',
  mp: '∓',
  setminus: '∖',
  smallsetminus: '∖',
  Backslash: '∖',
  setmn: '∖',
  ssetmn: '∖',
  lowbar: '_',
  verbar: '|',
  vert: '|',
  VerticalLine: '|',
  colon: ':',
  Colon: '∷',
  Proportion: '∷',
  ratio: '∶',
  equals: '=',
  ne: '≠',
  nequiv: '≢',
  equiv: '≡',
  Congruent: '≡',
  sim: '∼',
  thicksim: '∼',
  thksim: '∼',
  sime: '≃',
  simeq: '≃',
  TildeEqual: '≃',
  asymp: '≈',
  approx: '≈',
  thickapprox: '≈',
  thkap: '≈',
  TildeTilde: '≈',
  ncong: '≇',
  cong: '≅',
  TildeFullEqual: '≅',
  asympeq: '≍',
  CupCap: '≍',
  bump: '≎',
  Bumpeq: '≎',
  HumpDownHump: '≎',
  bumpe: '≏',
  bumpeq: '≏',
  HumpEqual: '≏',
  le: '≤',
  LessEqual: '≤',
  ge: '≥',
  GreaterEqual: '≥',
  lesseqgtr: '⋚',
  lesseqqgtr: '⪋',
  greater: '>',
  less: '<'
};

/**
 * Mathematical Operators (Advanced)
 * @type {Record<string, string>}
 */
var MATH_ADVANCED = {
  alefsym: 'ℵ',
  aleph: 'ℵ',
  beth: 'ℶ',
  gimel: 'ℷ',
  daleth: 'ℸ',
  forall: '∀',
  ForAll: '∀',
  part: '∂',
  PartialD: '∂',
  exist: '∃',
  Exists: '∃',
  nexist: '∄',
  nexists: '∄',
  empty: '∅',
  emptyset: '∅',
  emptyv: '∅',
  varnothing: '∅',
  nabla: '∇',
  Del: '∇',
  isin: '∈',
  isinv: '∈',
  in: '∈',
  Element: '∈',
  notin: '∉',
  notinva: '∉',
  ni: '∋',
  niv: '∋',
  SuchThat: '∋',
  ReverseElement: '∋',
  notni: '∌',
  notniva: '∌',
  prod: '∏',
  Product: '∏',
  coprod: '∐',
  Coproduct: '∐',
  sum: '∑',
  Sum: '∑',
  minus: '−',
  mp: '∓',
  plusdo: '∔',
  dotplus: '∔',
  setminus: '∖',
  lowast: '∗',
  radic: '√',
  Sqrt: '√',
  prop: '∝',
  propto: '∝',
  Proportional: '∝',
  varpropto: '∝',
  infin: '∞',
  infintie: '⧝',
  ang: '∠',
  angle: '∠',
  angmsd: '∡',
  measuredangle: '∡',
  angsph: '∢',
  mid: '∣',
  VerticalBar: '∣',
  nmid: '∤',
  nsmid: '∤',
  npar: '∦',
  parallel: '∥',
  spar: '∥',
  nparallel: '∦',
  nspar: '∦',
  and: '∧',
  wedge: '∧',
  or: '∨',
  vee: '∨',
  cap: '∩',
  cup: '∪',
  int: '∫',
  Integral: '∫',
  conint: '∮',
  ContourIntegral: '∮',
  Conint: '∯',
  DoubleContourIntegral: '∯',
  Cconint: '∰',
  there4: '∴',
  therefore: '∴',
  Therefore: '∴',
  becaus: '∵',
  because: '∵',
  Because: '∵',
  ratio: '∶',
  Proportion: '∷',
  minusd: '∸',
  dotminus: '∸',
  mDDot: '∺',
  homtht: '∻',
  sim: '∼',
  bsimg: '∽',
  backsim: '∽',
  ac: '∾',
  mstpos: '∾',
  acd: '∿',
  VerticalTilde: '≀',
  wr: '≀',
  wreath: '≀',
  nsime: '≄',
  nsimeq: '≄',
  ncong: '≇',
  simne: '≆',
  ncongdot: '⩭̸',
  ngsim: '≵',
  nsim: '≁',
  napprox: '≉',
  nap: '≉',
  ngeq: '≱',
  nge: '≱',
  nleq: '≰',
  nle: '≰',
  ngtr: '≯',
  ngt: '≯',
  nless: '≮',
  nlt: '≮',
  nprec: '⊀',
  npr: '⊀',
  nsucc: '⊁',
  nsc: '⊁'
};

/**
 * Arrows
 * @type {Record<string, string>}
 */
var ARROWS = {
  larr: '←',
  leftarrow: '←',
  LeftArrow: '←',
  uarr: '↑',
  uparrow: '↑',
  UpArrow: '↑',
  rarr: '→',
  rightarrow: '→',
  RightArrow: '→',
  darr: '↓',
  downarrow: '↓',
  DownArrow: '↓',
  harr: '↔',
  leftrightarrow: '↔',
  LeftRightArrow: '↔',
  varr: '↕',
  updownarrow: '↕',
  UpDownArrow: '↕',
  nwarr: '↖',
  nwarrow: '↖',
  UpperLeftArrow: '↖',
  nearr: '↗',
  nearrow: '↗',
  UpperRightArrow: '↗',
  searr: '↘',
  searrow: '↘',
  LowerRightArrow: '↘',
  swarr: '↙',
  swarrow: '↙',
  LowerLeftArrow: '↙',
  lArr: '⇐',
  Leftarrow: '⇐',
  uArr: '⇑',
  Uparrow: '⇑',
  rArr: '⇒',
  Rightarrow: '⇒',
  dArr: '⇓',
  Downarrow: '⇓',
  hArr: '⇔',
  Leftrightarrow: '⇔',
  iff: '⇔',
  vArr: '⇕',
  Updownarrow: '⇕',
  lAarr: '⇚',
  Lleftarrow: '⇚',
  rAarr: '⇛',
  Rrightarrow: '⇛',
  lrarr: '⇆',
  leftrightarrows: '⇆',
  rlarr: '⇄',
  rightleftarrows: '⇄',
  lrhar: '⇋',
  leftrightharpoons: '⇋',
  ReverseEquilibrium: '⇋',
  rlhar: '⇌',
  rightleftharpoons: '⇌',
  Equilibrium: '⇌',
  udarr: '⇅',
  UpArrowDownArrow: '⇅',
  duarr: '⇵',
  DownArrowUpArrow: '⇵',
  llarr: '⇇',
  leftleftarrows: '⇇',
  rrarr: '⇉',
  rightrightarrows: '⇉',
  ddarr: '⇊',
  downdownarrows: '⇊',
  har: '↽',
  lhard: '↽',
  leftharpoondown: '↽',
  lharu: '↼',
  leftharpoonup: '↼',
  rhard: '⇁',
  rightharpoondown: '⇁',
  rharu: '⇀',
  rightharpoonup: '⇀',
  lsh: '↰',
  Lsh: '↰',
  rsh: '↱',
  Rsh: '↱',
  ldsh: '↲',
  rdsh: '↳',
  hookleftarrow: '↩',
  hookrightarrow: '↪',
  mapstoleft: '↤',
  mapstoup: '↥',
  map: '↦',
  mapsto: '↦',
  mapstodown: '↧',
  crarr: '↵',
  nleftarrow: '↚',
  nleftrightarrow: '↮',
  nrightarrow: '↛',
  nrarr: '↛',
  larrtl: '↢',
  rarrtl: '↣',
  leftarrowtail: '↢',
  rightarrowtail: '↣',
  twoheadleftarrow: '↞',
  twoheadrightarrow: '↠',
  Larr: '↞',
  Rarr: '↠',
  larrhk: '↩',
  rarrhk: '↪',
  larrlp: '↫',
  looparrowleft: '↫',
  rarrlp: '↬',
  looparrowright: '↬',
  harrw: '↭',
  leftrightsquigarrow: '↭',
  nrarrw: '↝̸',
  rarrw: '↝',
  rightsquigarrow: '↝',
  larrbfs: '⤟',
  rarrbfs: '⤠',
  nvHarr: '⤄',
  nvlArr: '⤂',
  nvrArr: '⤃',
  larrfs: '⤝',
  rarrfs: '⤞',
  Map: '⤅',
  larrsim: '⥳',
  rarrsim: '⥴',
  harrcir: '⥈',
  Uarrocir: '⥉',
  lurdshar: '⥊',
  ldrdhar: '⥧',
  ldrushar: '⥋',
  rdldhar: '⥩',
  lrhard: '⥭',
  uharr: '↾',
  uharl: '↿',
  dharr: '⇂',
  dharl: '⇃',
  Uarr: '↟',
  Darr: '↡',
  zigrarr: '⇝',
  nwArr: '⇖',
  neArr: '⇗',
  seArr: '⇘',
  swArr: '⇙',
  nharr: '↮',
  nhArr: '⇎',
  nlarr: '↚',
  nlArr: '⇍',
  nrArr: '⇏',
  larrb: '⇤',
  LeftArrowBar: '⇤',
  rarrb: '⇥',
  RightArrowBar: '⇥'
};

/**
 * Geometric Shapes
 * @type {Record<string, string>}
 */
var SHAPES = {
  square: '□',
  Square: '□',
  squ: '□',
  squf: '▪',
  squarf: '▪',
  blacksquar: '▪',
  blacksquare: '▪',
  FilledVerySmallSquare: '▪',
  blk34: '▓',
  blk12: '▒',
  blk14: '░',
  block: '█',
  srect: '▭',
  rect: '▭',
  sdot: '⋅',
  sdotb: '⊡',
  dotsquare: '⊡',
  triangle: '▵',
  tri: '▵',
  trine: '▵',
  utri: '▵',
  triangledown: '▿',
  dtri: '▿',
  tridown: '▿',
  triangleleft: '◃',
  ltri: '◃',
  triangleright: '▹',
  rtri: '▹',
  blacktriangle: '▴',
  utrif: '▴',
  blacktriangledown: '▾',
  dtrif: '▾',
  blacktriangleleft: '◂',
  ltrif: '◂',
  blacktriangleright: '▸',
  rtrif: '▸',
  loz: '◊',
  lozenge: '◊',
  blacklozenge: '⧫',
  lozf: '⧫',
  bigcirc: '◯',
  xcirc: '◯',
  circ: 'ˆ',
  Circle: '○',
  cir: '○',
  o: '○',
  bullet: '•',
  bull: '•',
  hellip: '…',
  mldr: '…',
  nldr: '‥',
  boxh: '─',
  HorizontalLine: '─',
  boxv: '│',
  boxdr: '┌',
  boxdl: '┐',
  boxur: '└',
  boxul: '┘',
  boxvr: '├',
  boxvl: '┤',
  boxhd: '┬',
  boxhu: '┴',
  boxvh: '┼',
  boxH: '═',
  boxV: '║',
  boxdR: '╒',
  boxDr: '╓',
  boxDR: '╔',
  boxDl: '╕',
  boxdL: '╖',
  boxDL: '╗',
  boxuR: '╘',
  boxUr: '╙',
  boxUR: '╚',
  boxUl: '╜',
  boxuL: '╛',
  boxUL: '╝',
  boxvR: '╞',
  boxVr: '╟',
  boxVR: '╠',
  boxVl: '╢',
  boxvL: '╡',
  boxVL: '╣',
  boxHd: '╤',
  boxhD: '╥',
  boxHD: '╦',
  boxHu: '╧',
  boxhU: '╨',
  boxHU: '╩',
  boxvH: '╪',
  boxVh: '╫',
  boxVH: '╬'
};

/**
 * Punctuation & Diacritics
 * @type {Record<string, string>}
 */
var PUNCTUATION = {
  excl: '!',
  iexcl: '¡',
  brvbar: '¦',
  sect: '§',
  uml: '¨',
  copy: '©',
  ordf: 'ª',
  laquo: '«',
  not: '¬',
  shy: "\xAD",
  reg: '®',
  macr: '¯',
  deg: '°',
  plusmn: '±',
  sup2: '²',
  sup3: '³',
  acute: '´',
  micro: 'µ',
  para: '¶',
  middot: '·',
  cedil: '¸',
  sup1: '¹',
  ordm: 'º',
  raquo: '»',
  frac14: '¼',
  frac12: '½',
  frac34: '¾',
  iquest: '¿',
  nbsp: "\xA0",
  comma: ',',
  period: '.',
  colon: ':',
  semi: ';',
  vert: '|',
  Verbar: '‖',
  verbar: '|',
  dblac: '˝',
  circ: 'ˆ',
  caron: 'ˇ',
  breve: '˘',
  dot: '˙',
  ring: '˚',
  ogon: '˛',
  tilde: '˜',
  DiacriticalGrave: '`',
  DiacriticalAcute: '´',
  DiacriticalTilde: '˜',
  DiacriticalDot: '˙',
  DiacriticalDoubleAcute: '˝',
  grave: '`'
};

/**
 * Currency Symbols
 * @type {Record<string, string>}
 */
var CURRENCY = {
  cent: '¢',
  pound: '£',
  curren: '¤',
  yen: '¥',
  euro: '€',
  dollar: '$',
  fnof: 'ƒ',
  inr: '₹',
  af: '؋',
  birr: 'ብር',
  peso: '₱',
  rub: '₽',
  won: '₩',
  yuan: '¥',
  cedil: '¸'
};

/**
 * Fractions
 * @type {Record<string, string>}
 */
var FRACTIONS = {
  frac12: '½',
  half: '½',
  frac13: '⅓',
  frac14: '¼',
  frac15: '⅕',
  frac16: '⅙',
  frac18: '⅛',
  frac23: '⅔',
  frac25: '⅖',
  frac34: '¾',
  frac35: '⅗',
  frac38: '⅜',
  frac45: '⅘',
  frac56: '⅚',
  frac58: '⅝',
  frac78: '⅞',
  frasl: '⁄'
};

/**
 * Miscellaneous Symbols
 * @type {Record<string, string>}
 */
var MISC_SYMBOLS = {
  trade: '™',
  TRADE: '™',
  telrec: '⌕',
  target: '⌖',
  ulcorn: '⌜',
  ulcorner: '⌜',
  urcorn: '⌝',
  urcorner: '⌝',
  dlcorn: '⌞',
  llcorner: '⌞',
  drcorn: '⌟',
  lrcorner: '⌟',
  intercal: '⊺',
  intcal: '⊺',
  oplus: '⊕',
  CirclePlus: '⊕',
  ominus: '⊖',
  CircleMinus: '⊖',
  otimes: '⊗',
  CircleTimes: '⊗',
  osol: '⊘',
  odot: '⊙',
  CircleDot: '⊙',
  oast: '⊛',
  circledast: '⊛',
  odash: '⊝',
  circleddash: '⊝',
  ocirc: '⊚',
  circledcirc: '⊚',
  boxplus: '⊞',
  plusb: '⊞',
  boxminus: '⊟',
  minusb: '⊟',
  boxtimes: '⊠',
  timesb: '⊠',
  boxdot: '⊡',
  sdotb: '⊡',
  veebar: '⊻',
  vee: '∨',
  barvee: '⊽',
  and: '∧',
  wedge: '∧',
  Cap: '⋒',
  Cup: '⋓',
  Fork: '⋔',
  pitchfork: '⋔',
  epar: '⋕',
  ltlarr: '⥶',
  nvap: '≍⃒',
  nvsim: '∼⃒',
  nvge: '≥⃒',
  nvle: '≤⃒',
  nvlt: '<⃒',
  nvgt: '>⃒',
  nvltrie: '⊴⃒',
  nvrtrie: '⊵⃒',
  Vdash: '⊩',
  dashv: '⊣',
  vDash: '⊨',
  Vvdash: '⊪',
  nvdash: '⊬',
  nvDash: '⊭',
  nVdash: '⊮',
  nVDash: '⊯'
};

/**
 * All entities combined (if you need everything)
 * @type {Record<string, string>}
 */
var ALL_ENTITIES = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, BASIC_LATIN), LATIN_ACCENTS), LATIN_EXTENDED), GREEK), CYRILLIC), MATH), MATH_ADVANCED), ARROWS), SHAPES), PUNCTUATION), CURRENCY), FRACTIONS), MISC_SYMBOLS);
var XML = {
  amp: "&",
  apos: "'",
  gt: ">",
  lt: "<",
  quot: "\""
};
var COMMON_HTML = {
  nbsp: "\xA0",
  copy: "\xA9",
  reg: "\xAE",
  trade: "\u2122",
  mdash: "\u2014",
  ndash: "\u2013",
  hellip: "\u2026",
  laquo: "\xAB",
  raquo: "\xBB",
  lsquo: "\u2018",
  rsquo: "\u2019",
  ldquo: "\u201C",
  rdquo: "\u201D",
  bull: "\u2022",
  para: "\xB6",
  sect: "\xA7",
  deg: "\xB0",
  frac12: "\xBD",
  frac14: "\xBC",
  frac34: "\xBE"
};
// ---------------------------------------------------------------------------
// Note: NUMERIC_ENTITIES (&#NNN; / &#xHH;) are handled by the scanner directly
// via String.fromCodePoint() without any map lookup.
// ---------------------------------------------------------------------------

/***/ }),

/***/ "./node_modules/@nodable/entities/src/entityTries.js":
/*!***********************************************************!*\
  !*** ./node_modules/@nodable/entities/src/entityTries.js ***!
  \***********************************************************/
/*! exports provided: trie1, trie2, trie3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trie1", function() { return trie1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trie2", function() { return trie2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trie3", function() { return trie3; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _entities_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entities.js */ "./node_modules/@nodable/entities/src/entities.js");

function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
// entityTries.js
// Builds integer-keyed tries so the decoder never allocates a string object
// during lookup — every key is a plain charCode number.
//
// trie1: Map<code0, entity>
// trie2: Map<code0, Map<code1, entity>>
// trie3: Map<code0, Map<code1, Map<code2, entity>>>



// Reverse map: character sequence → "&name;"
var CHAR_TO_ENTITY = new Map();
for (var _i = 0, _Object$entries = Object.entries(_entities_js__WEBPACK_IMPORTED_MODULE_1__["ALL_ENTITIES"]); _i < _Object$entries.length; _i++) {
  var _Object$entries$_i = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_Object$entries[_i], 2),
    name = _Object$entries$_i[0],
    chars = _Object$entries$_i[1];
  CHAR_TO_ENTITY.set(chars, "&".concat(name, ";"));
}
var trie1 = new Map(); // code0          → entity string
var trie2 = new Map(); // code0 → Map    → entity string
var trie3 = new Map(); // code0 → Map → Map → entity string
var _iterator = _createForOfIteratorHelper(CHAR_TO_ENTITY),
  _step;
try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var _step$value = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_step.value, 2),
      _chars = _step$value[0],
      entity = _step$value[1];
    var len = _chars.length;
    if (len === 1) {
      var c0 = _chars.charCodeAt(0);
      // Keep shortest match only if no longer match already claimed this code
      // (longer matches are inserted in the same pass so we just overwrite —
      //  trie1 is only consulted after trie2/trie3 both miss, so no conflict)
      trie1.set(c0, entity);
    } else if (len === 2) {
      var _c = _chars.charCodeAt(0);
      var c1 = _chars.charCodeAt(1);
      var inner = trie2.get(_c);
      if (inner === undefined) {
        inner = new Map();
        trie2.set(_c, inner);
      }
      inner.set(c1, entity);
    } else if (len === 3) {
      var _c2 = _chars.charCodeAt(0);
      var _c3 = _chars.charCodeAt(1);
      var c2 = _chars.charCodeAt(2);
      var mid = trie3.get(_c2);
      if (mid === undefined) {
        mid = new Map();
        trie3.set(_c2, mid);
      }
      var _inner = mid.get(_c3);
      if (_inner === undefined) {
        _inner = new Map();
        mid.set(_c3, _inner);
      }
      _inner.set(c2, entity);
    }
    // HTML5 has no named entity whose character sequence is longer than 3 chars
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

/***/ }),

/***/ "./node_modules/@nodable/entities/src/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/@nodable/entities/src/index.js ***!
  \*****************************************************/
/*! exports provided: EntityDecoder, ENTITY_ACTION, COMMON_HTML, XML, ALL_ENTITIES, ARROWS, BASIC_LATIN, CURRENCY, MATH, MATH_ADVANCED, CYRILLIC, FRACTIONS, GREEK, LATIN_ACCENTS, LATIN_EXTENDED, MISC_SYMBOLS, PUNCTUATION, SHAPES, EntityEncoder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EntityDecoder_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EntityDecoder.js */ "./node_modules/@nodable/entities/src/EntityDecoder.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EntityDecoder", function() { return _EntityDecoder_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ENTITY_ACTION", function() { return _EntityDecoder_js__WEBPACK_IMPORTED_MODULE_0__["ENTITY_ACTION"]; });

/* harmony import */ var _entities_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entities.js */ "./node_modules/@nodable/entities/src/entities.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "COMMON_HTML", function() { return _entities_js__WEBPACK_IMPORTED_MODULE_1__["COMMON_HTML"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "XML", function() { return _entities_js__WEBPACK_IMPORTED_MODULE_1__["XML"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ALL_ENTITIES", function() { return _entities_js__WEBPACK_IMPORTED_MODULE_1__["ALL_ENTITIES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ARROWS", function() { return _entities_js__WEBPACK_IMPORTED_MODULE_1__["ARROWS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BASIC_LATIN", function() { return _entities_js__WEBPACK_IMPORTED_MODULE_1__["BASIC_LATIN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CURRENCY", function() { return _entities_js__WEBPACK_IMPORTED_MODULE_1__["CURRENCY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MATH", function() { return _entities_js__WEBPACK_IMPORTED_MODULE_1__["MATH"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MATH_ADVANCED", function() { return _entities_js__WEBPACK_IMPORTED_MODULE_1__["MATH_ADVANCED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CYRILLIC", function() { return _entities_js__WEBPACK_IMPORTED_MODULE_1__["CYRILLIC"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FRACTIONS", function() { return _entities_js__WEBPACK_IMPORTED_MODULE_1__["FRACTIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GREEK", function() { return _entities_js__WEBPACK_IMPORTED_MODULE_1__["GREEK"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LATIN_ACCENTS", function() { return _entities_js__WEBPACK_IMPORTED_MODULE_1__["LATIN_ACCENTS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LATIN_EXTENDED", function() { return _entities_js__WEBPACK_IMPORTED_MODULE_1__["LATIN_EXTENDED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MISC_SYMBOLS", function() { return _entities_js__WEBPACK_IMPORTED_MODULE_1__["MISC_SYMBOLS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PUNCTUATION", function() { return _entities_js__WEBPACK_IMPORTED_MODULE_1__["PUNCTUATION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SHAPES", function() { return _entities_js__WEBPACK_IMPORTED_MODULE_1__["SHAPES"]; });

/* harmony import */ var _EntityEncoder_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EntityEncoder.js */ "./node_modules/@nodable/entities/src/EntityEncoder.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EntityEncoder", function() { return _EntityEncoder_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/**
 * @nodable/entities
 *
 * Standalone, zero-dependency XML/HTML entity replacement.
 *

 */





/***/ }),

/***/ "./node_modules/anynum/anynum.js":
/*!***************************************!*\
  !*** ./node_modules/anynum/anynum.js ***!
  \***************************************/
/*! exports provided: anynum, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "anynum", function() { return anynum; });
/* harmony import */ var _digitTable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./digitTable.js */ "./node_modules/anynum/digitTable.js");




const CHAR_0 = 48; // '0'.charCodeAt(0)
const CHAR_9 = 57; // '9'.charCodeAt(0)
const CHAR_MINUS = 45; // '-'.charCodeAt(0)

// Unicode minus/hyphen variants worth normalizing to ASCII '-' in numeric context:
//   U+2212  MINUS SIGN       − (mathematically correct minus)
//   U+FF0D  FULLWIDTH HYPHEN-MINUS  － (Japanese fullwidth context)
//   U+FE63  SMALL HYPHEN-MINUS     ﹣ (small form variant)
//
// NOT normalized (deliberate):
//   U+2013  EN DASH  –  (punctuation, not a numeric sign)
//   U+2014  EM DASH  —  (punctuation)
//   U+2010  HYPHEN   ‐  (typographic hyphen)
//
// Rationale: only characters a human or locale formatter would plausibly use
// as a numeric minus sign are normalized. Dashes used for punctuation are left
// alone to avoid mangling non-numeric strings.
const MINUS_SET = new Set([0x2212, 0xFF0D, 0xFE63]);

/**
 * Normalize all Unicode decimal digit characters in a string to ASCII (0-9),
 * and normalize Unicode minus variants to ASCII '-' (U+002D).
 *
 * Non-digit, non-minus characters are passed through unchanged.
 *
 * Performance design:
 * - Fast path: if the string has no convertible characters, return it unchanged
 *   (zero allocation).
 * - BMP digits (0x0660..0xFFFF excl. surrogates): flat Uint8Array lookup (O(1)).
 * - Supplementary plane digits (> 0xFFFF, encoded as surrogate pairs): Map lookup.
 * - Minus variants: checked inline with a small fixed Set.
 *
 * @param {string} str
 * @returns {string}
 */
function anynum(str) {
  if (typeof str !== 'string') return str;

  const len = str.length;
  if (len === 0) return str;

  // Scan for first character needing conversion.
  // If none found, return original string (zero allocation).
  let firstHit = -1;

  for (let i = 0; i < len; i++) {
    const cc = str.charCodeAt(i);

    // ASCII digit or ASCII minus — already normalized, skip fast
    if ((cc >= CHAR_0 && cc <= CHAR_9) || cc === CHAR_MINUS) continue;

    // Below first unicode digit script — check minus variants only
    if (cc < _digitTable_js__WEBPACK_IMPORTED_MODULE_0__["TABLE_OFFSET"]) {
      if (MINUS_SET.has(cc)) { firstHit = i; break; }
      continue;
    }

    // Surrogate pairs live in BMP range 0xD800-0xDFFF — check before TABLE
    if (cc >= 0xD800 && cc <= 0xDBFF) {
      if (i + 1 < len) {
        const low = str.charCodeAt(i + 1);
        if (low >= 0xDC00 && low <= 0xDFFF) {
          const cp = 0x10000 + ((cc - 0xD800) << 10) + (low - 0xDC00);
          if (_digitTable_js__WEBPACK_IMPORTED_MODULE_0__["HIGH_MAP"].has(cp)) { firstHit = i; break; }
        }
      }
      continue;
    }

    // BMP non-surrogate: flat table lookup; also check minus variants in this range
    if (_digitTable_js__WEBPACK_IMPORTED_MODULE_0__["TABLE"][cc - _digitTable_js__WEBPACK_IMPORTED_MODULE_0__["TABLE_OFFSET"]] !== _digitTable_js__WEBPACK_IMPORTED_MODULE_0__["NOT_DIGIT"] || MINUS_SET.has(cc)) {
      firstHit = i;
      break;
    }
  }

  // Nothing to replace — return original, zero allocation
  if (firstHit === -1) return str;

  // Build result: copy unchanged prefix, then convert from firstHit onward
  const chars = [];

  if (firstHit > 0) chars.push(str.slice(0, firstHit));

  for (let i = firstHit; i < len; i++) {
    const cc = str.charCodeAt(i);

    // ASCII digit or ASCII minus — pass through
    if ((cc >= CHAR_0 && cc <= CHAR_9) || cc === CHAR_MINUS) {
      chars.push(str[i]);
      continue;
    }

    // Below TABLE_OFFSET — check minus variants, else pass through
    if (cc < _digitTable_js__WEBPACK_IMPORTED_MODULE_0__["TABLE_OFFSET"]) {
      chars.push(MINUS_SET.has(cc) ? '-' : str[i]);
      continue;
    }

    // Surrogate pairs
    if (cc >= 0xD800 && cc <= 0xDBFF) {
      if (i + 1 < len) {
        const low = str.charCodeAt(i + 1);
        if (low >= 0xDC00 && low <= 0xDFFF) {
          const cp = 0x10000 + ((cc - 0xD800) << 10) + (low - 0xDC00);
          const d = _digitTable_js__WEBPACK_IMPORTED_MODULE_0__["HIGH_MAP"].get(cp);
          if (d !== undefined) {
            chars.push(String.fromCharCode(d + 48));
            i++; // consume low surrogate
            continue;
          }
        }
      }
      chars.push(str[i]);
      continue;
    }

    // BMP non-surrogate: flat table lookup + minus variants
    if (MINUS_SET.has(cc)) {
      chars.push('-');
      continue;
    }
    const d = _digitTable_js__WEBPACK_IMPORTED_MODULE_0__["TABLE"][cc - _digitTable_js__WEBPACK_IMPORTED_MODULE_0__["TABLE_OFFSET"]];
    chars.push(d !== _digitTable_js__WEBPACK_IMPORTED_MODULE_0__["NOT_DIGIT"] ? String.fromCharCode(d + 48) : str[i]);
  }

  return chars.join('');
}


/* harmony default export */ __webpack_exports__["default"] = (anynum);

/***/ }),

/***/ "./node_modules/anynum/digitTable.js":
/*!*******************************************!*\
  !*** ./node_modules/anynum/digitTable.js ***!
  \*******************************************/
/*! exports provided: TABLE, TABLE_OFFSET, HIGH_MAP, NOT_DIGIT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE", function() { return TABLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_OFFSET", function() { return TABLE_OFFSET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HIGH_MAP", function() { return HIGH_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOT_DIGIT", function() { return NOT_DIGIT; });
/**
 * Flat lookup table: maps Unicode code point → ASCII digit (0-9).
 * Only decimal digit characters (Unicode category Nd) are included.
 *
 * Strategy: Int32Array of size (maxCodePoint - minCodePoint + 1).
 * Value 0xFF means "not a digit". Value 0-9 is the ASCII digit value.
 * This gives O(1) lookup with no branching, no bisect, no loop.
 *
 * Memory: range is 0x0660 to 0x1FBF0 → ~129,936 entries × 1 byte = ~127 KB.
 * Acceptable for a one-time init; lookup is a single array index.
 */

// All known Unicode Nd (decimal digit) script zero code points.
// Each script has exactly 10 consecutive digits: zero+0 .. zero+9.
const SCRIPT_ZEROS = [
  // Basic Latin (ASCII) — included for completeness / pass-through
  0x0030, // 0-9

  // Arabic scripts
  0x0660, // Arabic-Indic ٠١٢٣٤٥٦٧٨٩
  0x06F0, // Extended Arabic-Indic (Urdu/Persian/Sindhi) ۰۱۲۳

  // Indic scripts
  0x0966, // Devanagari ०१२३४५६७८९
  0x09E6, // Bengali ০১২৩৪৫৬৭৮৯
  0x0A66, // Gurmukhi ੦੧੨੩੪੫੬੭੮੯
  0x0AE6, // Gujarati ૦૧૨૩૪૫૬૭૮૯
  0x0B66, // Odia ୦୧୨୩୪୫୬୭୮୯
  0x0BE6, // Tamil ௦௧௨௩௪௫௬௭௮௯
  0x0C66, // Telugu ౦౧౨౩౪౫౬౭౮౯
  0x0CE6, // Kannada ೦೧೨೩೪೫೬೭೮೯
  0x0D66, // Malayalam ൦൧൨൩൪൫൬൭൮൯
  0x0DE6, // Sinhala Archaic ෦෧෨෩෪෫෬෭෮෯

  // Southeast Asian scripts
  0x0E50, // Thai ๐๑๒๓๔๕๖๗๘๙
  0x0ED0, // Lao ໐໑໒໓໔໕໖໗໘໙
  0x0F20, // Tibetan ༠༡༢༣༤༥༦༧༨༩
  0x1040, // Myanmar ၀၁၂၃၄၅၆၇၈၉
  0x1090, // Myanmar Shan ႐႑႒႓႔႕႖႗႘႙
  0x17E0, // Khmer ០១២៣៤៥៦៧៨៩
  0x1810, // Mongolian ᠐᠑᠒᠓᠔᠕᠖᠗᠘᠙
  0x1946, // Limbu ᥆᥇᥈᥉᥊᥋᥌᥍᥎᥏
  0x19D0, // New Tai Lue ᧐᧑᧒᧓᧔᧕᧖᧗᧘᧙
  0x1A80, // Tai Tham Hora ᪀᪁᪂᪃᪄᪅᪆᪇᪈᪉
  0x1A90, // Tai Tham Tham ᪐᪑᪒᪓᪔᪕᪖᪗᪘᪙
  0x1B50, // Balinese ᭐᭑᭒᭓᭔᭕᭖᭗᭘᭙
  0x1BB0, // Sundanese ᮰᮱᮲᮳᮴᮵᮶᮷᮸᮹
  0x1C40, // Lepcha ᱀᱁᱂᱃᱄᱅᱆᱇᱈᱉
  0x1C50, // Ol Chiki ᱐᱑᱒᱓᱔᱕᱖᱗᱘᱙

  // Fullwidth (CJK context)
  0xFF10, // Fullwidth ０１２３４５６７８９

  // Mathematical digit variants (Unicode math block)
  0x1D7CE, // Mathematical Bold
  0x1D7D8, // Mathematical Double-Struck
  0x1D7E2, // Mathematical Sans-Serif
  0x1D7EC, // Mathematical Sans-Serif Bold
  0x1D7F6, // Mathematical Monospace

  // Other scripts
  0x104A0, // Osmanya 𐒠𐒡𐒢𐒣𐒤𐒥𐒦𐒧𐒨𐒩
  0x10D30, // Hanifi Rohingya 𐴰𐴱𐴲𐴳𐴴𐴵𐴶𐴷𐴸𐴹
  0x11066, // Brahmi 𑁦𑁧𑁨𑁩𑁪𑁫𑁬𑁭𑁮𑁯
  0x110F0, // Sora Sompeng 𑃰𑃱𑃲𑃳𑃴𑃵𑃶𑃷𑃸𑃹
  0x11136, // Chakma 𑄶𑄷𑄸𑄹𑄺𑄻𑄼𑄽𑄾𑄿
  0x111D0, // Sharada 𑇐𑇑𑇒𑇓𑇔𑇕𑇖𑇗𑇘𑇙
  0x112F0, // Khudawadi 𑋰𑋱𑋲𑋳𑋴𑋵𑋶𑋷𑋸𑋹
  0x11450, // Newa 𑑐𑑑𑑒𑑓𑑔𑑕𑑖𑑗𑑘𑑙
  0x114D0, // Tirhuta 𑓐𑓑𑓒𑓓𑓔𑓕𑓖𑓗𑓘𑓙
  0x11650, // Modi 𑙐𑙑𑙒𑙓𑙔𑙕𑙖𑙗𑙘𑙙
  0x116C0, // Takri 𑛀𑛁𑛂𑛃𑛄𑛅𑛆𑛇𑛈𑛉
  0x11730, // Ahom 𑜰𑜱𑜲𑜳𑜴𑜵𑜶𑜷𑜸𑜹
  0x118E0, // Warang Citi 𑣠𑣡𑣢𑣣𑣤𑣥𑣦𑣧𑣨𑣩
  0x11950, // Dives Akuru 𑥐𑥑𑥒𑥓𑥔𑥕𑥖𑥗𑥘𑥙
  0x11BF0, // Khitan Small Script 𑯰𑯱𑯲𑯳𑯴𑯵𑯶𑯷𑯸𑯹
  0x11C50, // Bhaiksuki 𑱐𑱑𑱒𑱓𑱔𑱕𑱖𑱗𑱘𑱙
  0x11D50, // Masaram Gondi 𑵐𑵑𑵒𑵓𑵔𑵕𑵖𑵗𑵘𑵙
  0x11DA0, // Gunjala Gondi 𑶠𑶡𑶢𑶣𑶤𑶥𑶦𑶧𑶨𑶩
  0x11F50, // Kawi 𑽐𑽑𑽒𑽓𑽔𑽕𑽖𑽗𑽘𑽙
  0x16A60, // Mro 𖩠𖩡𖩢𖩣𖩤𖩥𖩦𖩧𖩨𖩩
  0x16AC0, // Tangsa 𖫀𖫁𖫂𖫃𖫄𖫅𖫆𖫇𖫈𖫉
  0x16B50, // Pahawh Hmong 𖭐𖭑𖭒𖭓𖭔𖭕𖭖𖭗𖭘𖭙
  0x1E140, // Nyiakeng Puachue Hmong 𞅀𞅁𞅂𞅃𞅄𞅅𞅆𞅇𞅈𞅉
  0x1E2F0, // Wancho 𞋰𞋱𞋲𞋳𞋴𞋵𞋶𞋷𞋸𞋹
  0x1E4F0, // Nag Mundari 𞓰𞓱𞓲𞓳𞓴𞓵𞓶𞓷𞓸𞓹
  0x1E950, // Adlam 𞥐𞥑𞥒𞥓𞥔𞥕𞥖𞥗𞥘𞥙
  0x1FBF0, // Segmented digit symbols 🯰🯱🯲🯳🯴🯵🯶🯷🯸🯹
];

// Build a sparse Map for scripts above 0xFFFF (surrogate-pair range).
// These can't go into a flat Uint8Array indexed by code point efficiently.
const NOT_DIGIT = 0xFF;
const HIGH_MAP = new Map(); // codePoint → digit value (0-9)

const LOW_MAX = 0xFFFF;
const LOW_MIN = 0x0660; // first non-ASCII digit script

// Flat Uint8Array covering 0x0660 .. 0xFFFF
const TABLE_OFFSET = LOW_MIN;
const TABLE_SIZE = LOW_MAX - LOW_MIN + 1;
const TABLE = new Uint8Array(TABLE_SIZE).fill(NOT_DIGIT);

for (const zero of SCRIPT_ZEROS) {
  for (let d = 0; d < 10; d++) {
    const cp = zero + d;
    if (cp <= LOW_MAX) {
      TABLE[cp - TABLE_OFFSET] = d;
    } else {
      HIGH_MAP.set(cp, d);
    }
  }
}




/***/ }),

/***/ "./node_modules/fast-xml-builder/src/fxb.js":
/*!**************************************************!*\
  !*** ./node_modules/fast-xml-builder/src/fxb.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Builder; });
/* harmony import */ var _orderedJs2Xml_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./orderedJs2Xml.js */ "./node_modules/fast-xml-builder/src/orderedJs2Xml.js");
/* harmony import */ var _ignoreAttributes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ignoreAttributes.js */ "./node_modules/fast-xml-builder/src/ignoreAttributes.js");
/* harmony import */ var path_expression_matcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path-expression-matcher */ "./node_modules/path-expression-matcher/src/index.js");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util.js */ "./node_modules/fast-xml-builder/src/util.js");
/* harmony import */ var xml_naming__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! xml-naming */ "./node_modules/xml-naming/src/index.js");

//parse Empty Node as self closing node






const defaultOptions = {
  attributeNamePrefix: '@_',
  attributesGroupName: false,
  textNodeName: '#text',
  ignoreAttributes: true,
  cdataPropName: false,
  format: false,
  indentBy: '  ',
  suppressEmptyNode: false,
  suppressUnpairedNode: true,
  suppressBooleanAttributes: true,
  tagValueProcessor: function (key, a) {
    return a;
  },
  attributeValueProcessor: function (attrName, a) {
    return a;
  },
  preserveOrder: false,
  commentPropName: false,
  unpairedTags: [],
  entities: [
    { regex: new RegExp("&", "g"), val: "&amp;" },//it must be on top
    { regex: new RegExp(">", "g"), val: "&gt;" },
    { regex: new RegExp("<", "g"), val: "&lt;" },
    { regex: new RegExp("\'", "g"), val: "&apos;" },
    { regex: new RegExp("\"", "g"), val: "&quot;" }
  ],
  processEntities: true,
  stopNodes: [],
  // transformTagName: false,
  // transformAttributeName: false,
  oneListGroup: false,
  maxNestedTags: 100,
  jPath: true,  // When true, callbacks receive string jPath; when false, receive Matcher instance
  sanitizeName: false  // false = allow all names as-is (default, backward-compatible).
  // Set to a function (name, { isAttribute, matcher }) => string to
  // validate/sanitize tag and attribute names. Throw inside the function
  // to reject an invalid name.
};

function Builder(options) {
  this.options = Object.assign({}, defaultOptions, options);

  // Convert old-style stopNodes for backward compatibility
  // Old syntax: "*.tag" meant "tag anywhere in tree"
  // New syntax: "..tag" means "tag anywhere in tree"
  if (this.options.stopNodes && Array.isArray(this.options.stopNodes)) {
    this.options.stopNodes = this.options.stopNodes.map(node => {
      if (typeof node === 'string' && node.startsWith('*.')) {
        // Convert old wildcard syntax to deep wildcard
        return '..' + node.substring(2);
      }
      return node;
    });
  }

  // Pre-compile stopNode expressions for pattern matching
  this.stopNodeExpressions = [];
  if (this.options.stopNodes && Array.isArray(this.options.stopNodes)) {
    for (let i = 0; i < this.options.stopNodes.length; i++) {
      const node = this.options.stopNodes[i];
      if (typeof node === 'string') {
        this.stopNodeExpressions.push(new path_expression_matcher__WEBPACK_IMPORTED_MODULE_2__["Expression"](node));
      } else if (node instanceof path_expression_matcher__WEBPACK_IMPORTED_MODULE_2__["Expression"]) {
        this.stopNodeExpressions.push(node);
      }
    }
  }

  if (this.options.ignoreAttributes === true || this.options.attributesGroupName) {
    this.isAttribute = function (/*a*/) {
      return false;
    };
  } else {
    this.ignoreAttributesFn = Object(_ignoreAttributes_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this.options.ignoreAttributes)
    this.attrPrefixLen = this.options.attributeNamePrefix.length;
    this.isAttribute = isAttribute;
  }

  this.processTextOrObjNode = processTextOrObjNode

  if (this.options.format) {
    this.indentate = indentate;
    this.tagEndChar = '>\n';
    this.newLine = '\n';
  } else {
    this.indentate = function () {
      return '';
    };
    this.tagEndChar = '>';
    this.newLine = '';
  }
}

/**
 * Detect XML version from the ?xml declaration at the root of a plain-object input.
 * Checks both attributesGroupName and flat attribute forms.
 * Returns '1.0' if no declaration is found.
 */
function detectXmlVersionFromObj(jObj, options) {
  const decl = jObj['?xml'];
  if (decl && typeof decl === 'object') {
    // attributesGroupName path e.g. { '$$': { '@_version': '1.1' } }
    if (options.attributesGroupName && decl[options.attributesGroupName]) {
      const v = decl[options.attributesGroupName][options.attributeNamePrefix + 'version'];
      if (v) return v;
    }
    // flat attribute path e.g. { '@_version': '1.1' }
    const v = decl[options.attributeNamePrefix + 'version'];
    if (v) return v;
  }
  return '1.0';
}

/**
 * Resolve a tag or attribute name through sanitizeName if configured.
 * Validation via xml-naming's qName is performed first; the sanitizeName
 * callback is invoked only when the name is invalid. If sanitizeName is
 * false (default), no validation occurs and the name is used as-is.
 *
 * @param {string}  name        - raw name from the JS object
 * @param {boolean} isAttribute - true when resolving an attribute name
 * @param {object}  options
 * @param {Matcher} matcher     - current matcher state (readonly from callback perspective)
 * @param {string}  xmlVersion  - '1.0' or '1.1', forwarded to xml-naming
 */
function resolveTagName(name, isAttribute, options, matcher, xmlVersion) {
  if (!options.sanitizeName) return name;
  if (Object(xml_naming__WEBPACK_IMPORTED_MODULE_4__["qName"])(name, { xmlVersion })) return name;
  return options.sanitizeName(name, { isAttribute, matcher: matcher.readOnly() });
}

Builder.prototype.build = function (jObj) {
  if (this.options.preserveOrder) {
    return Object(_orderedJs2Xml_js__WEBPACK_IMPORTED_MODULE_0__["default"])(jObj, this.options);
  } else {
    if (Array.isArray(jObj) && this.options.arrayNodeName && this.options.arrayNodeName.length > 1) {
      jObj = {
        [this.options.arrayNodeName]: jObj
      }
    }
    // Initialize matcher for path tracking
    const matcher = new path_expression_matcher__WEBPACK_IMPORTED_MODULE_2__["Matcher"]();
    const xmlVersion = detectXmlVersionFromObj(jObj, this.options);
    return this.j2x(jObj, 0, matcher, xmlVersion).val;
  }
};

Builder.prototype.j2x = function (jObj, level, matcher, xmlVersion) {
  let attrStr = '';
  let val = '';
  if (this.options.maxNestedTags && matcher.getDepth() >= this.options.maxNestedTags) {
    throw new Error("Maximum nested tags exceeded");
  }
  // Get jPath based on option: string for backward compatibility, or Matcher for new features
  const jPath = this.options.jPath ? matcher.toString() : matcher;

  // Check if current node is a stopNode (will be used for attribute encoding)
  const isCurrentStopNode = this.checkStopNode(matcher);

  for (let key in jObj) {
    if (!Object.prototype.hasOwnProperty.call(jObj, key)) continue;

    // Resolve the key through sanitizeName before any use.
    // Special keys (textNodeName, cdataPropName, commentPropName, attributeNamePrefix,
    // attributesGroupName, "?" PI tags) are exempt — they are builder-internal conventions,
    // not user-supplied XML names.
    const isSpecialKey = key === this.options.textNodeName
      || key === this.options.cdataPropName
      || key === this.options.commentPropName
      || (this.options.attributesGroupName && key === this.options.attributesGroupName)
      || this.isAttribute(key)
      || key[0] === '?';

    const resolvedKey = isSpecialKey
      ? key
      : resolveTagName(key, false, this.options, matcher, xmlVersion);

    if (typeof jObj[key] === 'undefined') {
      // supress undefined node only if it is not an attribute
      if (this.isAttribute(key)) {
        val += '';
      }
    } else if (jObj[key] === null) {
      // null attribute should be ignored by the attribute list, but should not cause the tag closing
      if (this.isAttribute(key)) {
        val += '';
      } else if (resolvedKey === this.options.cdataPropName || resolvedKey === this.options.commentPropName) {
        val += '';
      } else if (resolvedKey[0] === '?') {
        val += this.indentate(level) + '<' + resolvedKey + '?' + this.tagEndChar;
      } else {
        val += this.indentate(level) + '<' + resolvedKey + '/' + this.tagEndChar;
      }
    } else if (jObj[key] instanceof Date) {
      val += this.buildTextValNode(jObj[key], resolvedKey, '', level, matcher);
    } else if (typeof jObj[key] !== 'object') {
      //premitive type
      const attr = this.isAttribute(key);
      if (attr && !this.ignoreAttributesFn(attr, jPath)) {
        // Resolve the attribute name through sanitizeName
        const resolvedAttr = resolveTagName(attr, true, this.options, matcher, xmlVersion);
        attrStr += this.buildAttrPairStr(resolvedAttr, '' + jObj[key], isCurrentStopNode);
      } else if (!attr) {
        //tag value
        if (key === this.options.textNodeName) {
          let newval = this.options.tagValueProcessor(key, '' + jObj[key]);
          val += this.replaceEntitiesValue(newval);
        } else {
          // Check if this is a stopNode before building
          matcher.push(resolvedKey);
          const isStopNode = this.checkStopNode(matcher);
          matcher.pop();

          if (isStopNode) {
            // Build as raw content without encoding
            const textValue = '' + jObj[key];
            if (textValue === '') {
              val += this.indentate(level) + '<' + resolvedKey + this.closeTag(resolvedKey) + this.tagEndChar;
            } else {
              val += this.indentate(level) + '<' + resolvedKey + '>' + textValue + '</' + resolvedKey + this.tagEndChar;
            }
          } else {
            val += this.buildTextValNode(jObj[key], resolvedKey, '', level, matcher);
          }
        }
      }
    } else if (Array.isArray(jObj[key])) {
      //repeated nodes
      const arrLen = jObj[key].length;
      let listTagVal = "";
      let listTagAttr = "";
      for (let j = 0; j < arrLen; j++) {
        const item = jObj[key][j];
        if (typeof item === 'undefined') {
          // supress undefined node
        } else if (item === null) {
          if (resolvedKey[0] === "?") val += this.indentate(level) + '<' + resolvedKey + '?' + this.tagEndChar;
          else val += this.indentate(level) + '<' + resolvedKey + '/' + this.tagEndChar;
        } else if (typeof item === 'object') {
          if (this.options.oneListGroup) {
            // Push tag to matcher before recursive call
            matcher.push(resolvedKey);
            const result = this.j2x(item, level + 1, matcher, xmlVersion);
            // Pop tag from matcher after recursive call
            matcher.pop();

            listTagVal += result.val;
            if (this.options.attributesGroupName && item.hasOwnProperty(this.options.attributesGroupName)) {
              listTagAttr += result.attrStr
            }
          } else {
            listTagVal += this.processTextOrObjNode(item, resolvedKey, level, matcher, xmlVersion)
          }
        } else {
          if (this.options.oneListGroup) {
            let textValue = this.options.tagValueProcessor(resolvedKey, item);
            textValue = this.replaceEntitiesValue(textValue);
            listTagVal += textValue;
          } else {
            // Check if this is a stopNode before building
            matcher.push(resolvedKey);
            const isStopNode = this.checkStopNode(matcher);
            matcher.pop();

            if (isStopNode) {
              // Build as raw content without encoding
              const textValue = '' + item;
              if (textValue === '') {
                listTagVal += this.indentate(level) + '<' + resolvedKey + this.closeTag(resolvedKey) + this.tagEndChar;
              } else {
                listTagVal += this.indentate(level) + '<' + resolvedKey + '>' + textValue + '</' + resolvedKey + this.tagEndChar;
              }
            } else {
              listTagVal += this.buildTextValNode(item, resolvedKey, '', level, matcher);
            }
          }
        }
      }
      if (this.options.oneListGroup) {
        listTagVal = this.buildObjectNode(listTagVal, resolvedKey, listTagAttr, level);
      }
      val += listTagVal;
    } else {
      //nested node
      if (this.options.attributesGroupName && key === this.options.attributesGroupName) {
        const Ks = Object.keys(jObj[key]);
        const L = Ks.length;
        for (let j = 0; j < L; j++) {
          // Resolve attribute names inside attributesGroupName
          const resolvedAttr = resolveTagName(Ks[j], true, this.options, matcher, xmlVersion);
          attrStr += this.buildAttrPairStr(resolvedAttr, '' + jObj[key][Ks[j]], isCurrentStopNode);
        }
      } else {
        val += this.processTextOrObjNode(jObj[key], resolvedKey, level, matcher, xmlVersion)
      }
    }
  }
  return { attrStr: attrStr, val: val };
};

Builder.prototype.buildAttrPairStr = function (attrName, val, isStopNode) {
  if (!isStopNode) {
    val = this.options.attributeValueProcessor(attrName, '' + val);
    val = this.replaceEntitiesValue(val);
  }
  if (this.options.suppressBooleanAttributes && val === "true") {
    return ' ' + attrName;
  } else return ' ' + attrName + '="' + Object(_util_js__WEBPACK_IMPORTED_MODULE_3__["escapeAttribute"])(val) + '"';
}

function processTextOrObjNode(object, key, level, matcher, xmlVersion) {
  // Extract attributes to pass to matcher
  const attrValues = this.extractAttributes(object);

  // Push tag to matcher before recursion WITH attributes
  matcher.push(key, attrValues);

  // Check if this entire node is a stopNode
  const isStopNode = this.checkStopNode(matcher);

  if (isStopNode) {
    // For stopNodes, build raw content without entity encoding
    const rawContent = this.buildRawContent(object);
    const attrStr = this.buildAttributesForStopNode(object);
    matcher.pop();
    return this.buildObjectNode(rawContent, key, attrStr, level);
  }

  const result = this.j2x(object, level + 1, matcher, xmlVersion);
  // Pop tag from matcher after recursion
  matcher.pop();

  // PI/XML-declaration tags must never emit text content — route through
  // buildTextValNode which correctly ignores the text node for "?" tags.
  if (key[0] === '?') {
    return this.buildTextValNode('', key, result.attrStr, level, matcher);
  } else if (object[this.options.textNodeName] !== undefined && Object.keys(object).length === 1) {
    return this.buildTextValNode(object[this.options.textNodeName], key, result.attrStr, level, matcher);
  } else {
    return this.buildObjectNode(result.val, key, result.attrStr, level);
  }
}

// Helper method to extract attributes from an object
Builder.prototype.extractAttributes = function (obj) {
  if (!obj || typeof obj !== 'object') return null;

  const attrValues = {};
  let hasAttrs = false;

  // Check for attributesGroupName (when attributes are grouped)
  if (this.options.attributesGroupName && obj[this.options.attributesGroupName]) {
    const attrGroup = obj[this.options.attributesGroupName];
    for (let attrKey in attrGroup) {
      if (!Object.prototype.hasOwnProperty.call(attrGroup, attrKey)) continue;
      // Remove attribute prefix if present
      const cleanKey = attrKey.startsWith(this.options.attributeNamePrefix)
        ? attrKey.substring(this.options.attributeNamePrefix.length)
        : attrKey;
      attrValues[cleanKey] = Object(_util_js__WEBPACK_IMPORTED_MODULE_3__["escapeAttribute"])(attrGroup[attrKey]);
      hasAttrs = true;
    }
  } else {
    // Look for individual attributes (prefixed with attributeNamePrefix)
    for (let key in obj) {
      if (!Object.prototype.hasOwnProperty.call(obj, key)) continue;
      const attr = this.isAttribute(key);
      if (attr) {
        attrValues[attr] = Object(_util_js__WEBPACK_IMPORTED_MODULE_3__["escapeAttribute"])(obj[key]);
        hasAttrs = true;
      }
    }
  }

  return hasAttrs ? attrValues : null;
};

// Build raw content for stopNode without entity encoding
Builder.prototype.buildRawContent = function (obj) {
  if (typeof obj === 'string') {
    return obj; // Already a string, return as-is
  }

  if (typeof obj !== 'object' || obj === null) {
    return String(obj);
  }

  // Check if this is a stopNode data from parser: { "#text": "raw xml", "@_attr": "val" }
  if (obj[this.options.textNodeName] !== undefined) {
    return obj[this.options.textNodeName]; // Return raw text without encoding
  }

  // Build raw XML from nested structure
  let content = '';

  for (let key in obj) {
    if (!Object.prototype.hasOwnProperty.call(obj, key)) continue;

    // Skip attributes
    if (this.isAttribute(key)) continue;
    if (this.options.attributesGroupName && key === this.options.attributesGroupName) continue;

    const value = obj[key];

    if (key === this.options.textNodeName) {
      content += value; // Raw text
    } else if (Array.isArray(value)) {
      // Array of same tag
      for (let item of value) {
        if (typeof item === 'string' || typeof item === 'number') {
          content += `<${key}>${item}</${key}>`;
        } else if (typeof item === 'object' && item !== null) {
          const nestedContent = this.buildRawContent(item);
          const nestedAttrs = this.buildAttributesForStopNode(item);
          if (nestedContent === '') {
            content += `<${key}${nestedAttrs}/>`;
          } else {
            content += `<${key}${nestedAttrs}>${nestedContent}</${key}>`;
          }
        }
      }
    } else if (typeof value === 'object' && value !== null) {
      // Nested object
      const nestedContent = this.buildRawContent(value);
      const nestedAttrs = this.buildAttributesForStopNode(value);
      if (nestedContent === '') {
        content += `<${key}${nestedAttrs}/>`;
      } else {
        content += `<${key}${nestedAttrs}>${nestedContent}</${key}>`;
      }
    } else {
      // Primitive value
      content += `<${key}>${value}</${key}>`;
    }
  }

  return content;
};

// Build attribute string for stopNode (no entity encoding)
Builder.prototype.buildAttributesForStopNode = function (obj) {
  if (!obj || typeof obj !== 'object') return '';

  let attrStr = '';

  // Check for attributesGroupName (when attributes are grouped)
  if (this.options.attributesGroupName && obj[this.options.attributesGroupName]) {
    const attrGroup = obj[this.options.attributesGroupName];
    for (let attrKey in attrGroup) {
      if (!Object.prototype.hasOwnProperty.call(attrGroup, attrKey)) continue;
      const cleanKey = attrKey.startsWith(this.options.attributeNamePrefix)
        ? attrKey.substring(this.options.attributeNamePrefix.length)
        : attrKey;
      const val = attrGroup[attrKey];
      if (val === true && this.options.suppressBooleanAttributes) {
        attrStr += ' ' + cleanKey;
      } else {
        attrStr += ' ' + cleanKey + '="' + val + '"'; // No encoding for stopNode
      }
    }
  } else {
    // Look for individual attributes
    for (let key in obj) {
      if (!Object.prototype.hasOwnProperty.call(obj, key)) continue;
      const attr = this.isAttribute(key);
      if (attr) {
        const val = obj[key];
        if (val === true && this.options.suppressBooleanAttributes) {
          attrStr += ' ' + attr;
        } else {
          attrStr += ' ' + attr + '="' + val + '"'; // No encoding for stopNode
        }
      }
    }
  }

  return attrStr;
};

Builder.prototype.buildObjectNode = function (val, key, attrStr, level) {
  if (val === "") {
    if (key[0] === "?") return this.indentate(level) + '<' + key + attrStr + '?' + this.tagEndChar;
    else {
      return this.indentate(level) + '<' + key + attrStr + this.closeTag(key) + this.tagEndChar;
    }
  } else if (key[0] === "?") {
    // PI/XML-declaration tags never have body content — treat them like empty.
    return this.indentate(level) + '<' + key + attrStr + '?' + this.tagEndChar;
  } else {
    let tagEndExp = '</' + key + this.tagEndChar;
    let piClosingChar = "";

    if (key[0] === "?") {
      piClosingChar = "?";
      tagEndExp = "";
    }

    // attrStr is an empty string in case the attribute came as undefined or null
    if ((attrStr || attrStr === '') && val.indexOf('<') === -1) {
      return (this.indentate(level) + '<' + key + attrStr + piClosingChar + '>' + val + tagEndExp);
    } else if (this.options.commentPropName !== false && key === this.options.commentPropName && piClosingChar.length === 0) {
      return this.indentate(level) + `<!--${val}-->` + this.newLine;
    } else {
      return (
        this.indentate(level) + '<' + key + attrStr + piClosingChar + this.tagEndChar +
        val +
        this.indentate(level) + tagEndExp);
    }
  }
}

Builder.prototype.closeTag = function (key) {
  let closeTag = "";
  if (this.options.unpairedTags.indexOf(key) !== -1) { //unpaired
    if (!this.options.suppressUnpairedNode) closeTag = "/"
  } else if (this.options.suppressEmptyNode) { //empty
    closeTag = "/";
  } else {
    closeTag = `></${key}`
  }
  return closeTag;
}

Builder.prototype.checkStopNode = function (matcher) {
  if (!this.stopNodeExpressions || this.stopNodeExpressions.length === 0) return false;

  for (let i = 0; i < this.stopNodeExpressions.length; i++) {
    if (matcher.matches(this.stopNodeExpressions[i])) {
      return true;
    }
  }
  return false;
}

function buildEmptyObjNode(val, key, attrStr, level) {
  if (val !== '') {
    return this.buildObjectNode(val, key, attrStr, level);
  } else {
    if (key[0] === "?") return this.indentate(level) + '<' + key + attrStr + '?' + this.tagEndChar;
    else {
      return this.indentate(level) + '<' + key + attrStr + '/' + this.tagEndChar;
    }
  }
}

Builder.prototype.buildTextValNode = function (val, key, attrStr, level, matcher) {
  if (this.options.cdataPropName !== false && key === this.options.cdataPropName) {
    const safeVal = Object(_util_js__WEBPACK_IMPORTED_MODULE_3__["safeCdata"])(val);
    return this.indentate(level) + `<![CDATA[${safeVal}]]>` + this.newLine;
  } else if (this.options.commentPropName !== false && key === this.options.commentPropName) {
    const safeVal = Object(_util_js__WEBPACK_IMPORTED_MODULE_3__["safeComment"])(val);
    return this.indentate(level) + `<!--${safeVal}-->` + this.newLine;
  } else if (key[0] === "?") {//PI tag
    return this.indentate(level) + '<' + key + attrStr + '?' + this.tagEndChar;
  } else {
    // Normal processing: apply tagValueProcessor and entity replacement
    let textValue = this.options.tagValueProcessor(key, val);
    textValue = this.replaceEntitiesValue(textValue);

    if (textValue === '') {
      return this.indentate(level) + '<' + key + attrStr + this.closeTag(key) + this.tagEndChar;
    } else {
      return this.indentate(level) + '<' + key + attrStr + '>' +
        textValue +
        '</' + key + this.tagEndChar;
    }
  }
}

Builder.prototype.replaceEntitiesValue = function (textValue) {
  if (textValue && textValue.length > 0 && this.options.processEntities) {
    for (let i = 0; i < this.options.entities.length; i++) {
      const entity = this.options.entities[i];
      textValue = textValue.replace(entity.regex, entity.val);
    }
  }
  return textValue;
}

function indentate(level) {
  return this.options.indentBy.repeat(level);
}

function isAttribute(name /*, options*/) {
  if (name.startsWith(this.options.attributeNamePrefix) && name !== this.options.textNodeName) {
    return name.substr(this.attrPrefixLen);
  } else {
    return false;
  }
}

/***/ }),

/***/ "./node_modules/fast-xml-builder/src/ignoreAttributes.js":
/*!***************************************************************!*\
  !*** ./node_modules/fast-xml-builder/src/ignoreAttributes.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getIgnoreAttributesFn; });
function getIgnoreAttributesFn(ignoreAttributes) {
    if (typeof ignoreAttributes === 'function') {
        return ignoreAttributes
    }
    if (Array.isArray(ignoreAttributes)) {
        return (attrName) => {
            for (const pattern of ignoreAttributes) {
                if (typeof pattern === 'string' && attrName === pattern) {
                    return true
                }
                if (pattern instanceof RegExp && pattern.test(attrName)) {
                    return true
                }
            }
        }
    }
    return () => false
}

/***/ }),

/***/ "./node_modules/fast-xml-builder/src/orderedJs2Xml.js":
/*!************************************************************!*\
  !*** ./node_modules/fast-xml-builder/src/orderedJs2Xml.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return toXml; });
/* harmony import */ var path_expression_matcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path-expression-matcher */ "./node_modules/path-expression-matcher/src/index.js");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util.js */ "./node_modules/fast-xml-builder/src/util.js");
/* harmony import */ var xml_naming__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! xml-naming */ "./node_modules/xml-naming/src/index.js");




const EOL = "\n";

/**
 * Detect XML version from the first element of the ordered array input.
 * The first element must be a ?xml processing instruction with a version attribute.
 * Returns '1.0' if not found.
 *
 * @param {array}  jArray
 * @param {object} options
 */
function detectXmlVersionFromArray(jArray, options) {
    if (!Array.isArray(jArray) || jArray.length === 0) return '1.0';
    const first = jArray[0];
    const firstKey = propName(first);
    if (firstKey === '?xml') {
        const attrs = first[':@'];
        if (attrs) {
            const versionKey = options.attributeNamePrefix + 'version';
            if (attrs[versionKey]) return attrs[versionKey];
        }
    }
    return '1.0';
}

/**
 * Resolve a tag or attribute name through sanitizeName if configured.
 * Validation via xml-naming's qName is performed first; the sanitizeName
 * callback is invoked only when the name is invalid. If sanitizeName is
 * false (default), no validation occurs and the name is used as-is.
 *
 * @param {string}  name        - raw name from the JS object
 * @param {boolean} isAttribute - true when resolving an attribute name
 * @param {object}  options
 * @param {Matcher} matcher     - current matcher state (readonly from callback perspective)
 * @param {string}  xmlVersion  - '1.0' or '1.1', forwarded to xml-naming
 */
function resolveTagName(name, isAttribute, options, matcher, xmlVersion) {
    if (!options.sanitizeName) return name;
    if (Object(xml_naming__WEBPACK_IMPORTED_MODULE_2__["qName"])(name, { xmlVersion })) return name;
    return options.sanitizeName(name, { isAttribute, matcher: matcher.readOnly() });
}

/**
 * @param {array} jArray
 * @param {any} options
 * @returns
 */
function toXml(jArray, options) {
    let indentation = "";
    if (options.format) {
        indentation = EOL;
    }

    // Pre-compile stopNode expressions for pattern matching
    const stopNodeExpressions = [];
    if (options.stopNodes && Array.isArray(options.stopNodes)) {
        for (let i = 0; i < options.stopNodes.length; i++) {
            const node = options.stopNodes[i];
            if (typeof node === 'string') {
                stopNodeExpressions.push(new path_expression_matcher__WEBPACK_IMPORTED_MODULE_0__["Expression"](node));
            } else if (node instanceof path_expression_matcher__WEBPACK_IMPORTED_MODULE_0__["Expression"]) {
                stopNodeExpressions.push(node);
            }
        }
    }

    // Detect XML version for use in name validation
    const xmlVersion = detectXmlVersionFromArray(jArray, options);

    // Initialize matcher for path tracking
    const matcher = new path_expression_matcher__WEBPACK_IMPORTED_MODULE_0__["Matcher"]();

    return arrToStr(jArray, options, indentation, matcher, stopNodeExpressions, xmlVersion);
}

function arrToStr(arr, options, indentation, matcher, stopNodeExpressions, xmlVersion) {
    let xmlStr = "";
    let isPreviousElementTag = false;

    if (options.maxNestedTags && matcher.getDepth() > options.maxNestedTags) {
        throw new Error("Maximum nested tags exceeded");
    }

    if (!Array.isArray(arr)) {
        // Non-array values (e.g. string tag values) should be treated as text content
        if (arr !== undefined && arr !== null) {
            let text = arr.toString();
            text = replaceEntitiesValue(text, options);
            return text;
        }
        return "";
    }

    for (let i = 0; i < arr.length; i++) {
        const tagObj = arr[i];
        const rawTagName = propName(tagObj);
        if (rawTagName === undefined) continue;

        // Special names are exempt from sanitizeName: internal conventions and PI tags
        // are not user-supplied XML element names.
        const isSpecialName = rawTagName === options.textNodeName
            || rawTagName === options.cdataPropName
            || rawTagName === options.commentPropName
            || rawTagName[0] === '?';

        // Resolve tag name (may transform it; may throw for invalid names)
        const tagName = isSpecialName
            ? rawTagName
            : resolveTagName(rawTagName, false, options, matcher, xmlVersion);

        // Extract attributes from ":@" property
        const attrValues = extractAttributeValues(tagObj[":@"], options);

        // Push resolved tag to matcher WITH attributes
        matcher.push(tagName, attrValues);

        // Check if this is a stop node using Expression matching
        const isStopNode = checkStopNode(matcher, stopNodeExpressions);

        if (tagName === options.textNodeName) {
            let tagText = tagObj[rawTagName];
            if (!isStopNode) {
                tagText = options.tagValueProcessor(tagName, tagText);
                tagText = replaceEntitiesValue(tagText, options);
            }
            if (isPreviousElementTag) {
                xmlStr += indentation;
            }
            xmlStr += tagText;
            isPreviousElementTag = false;
            matcher.pop();
            continue;
        } else if (tagName === options.cdataPropName) {
            if (isPreviousElementTag) {
                xmlStr += indentation;
            }
            const val = tagObj[rawTagName][0][options.textNodeName];
            const safeVal = Object(_util_js__WEBPACK_IMPORTED_MODULE_1__["safeCdata"])(val);
            xmlStr += `<![CDATA[${safeVal}]]>`;
            isPreviousElementTag = false;
            matcher.pop();
            continue;
        } else if (tagName === options.commentPropName) {
            const val = tagObj[rawTagName][0][options.textNodeName];
            const safeVal = Object(_util_js__WEBPACK_IMPORTED_MODULE_1__["safeComment"])(val);
            xmlStr += indentation + `<!--${safeVal}-->`;
            isPreviousElementTag = true;
            matcher.pop();
            continue;
        } else if (tagName[0] === "?") {
            const attStr = attr_to_str(tagObj[":@"], options, isStopNode, matcher, xmlVersion);
            const tempInd = tagName === "?xml" ? "" : indentation;
            // Text node content on PI/XML declaration tags is intentionally ignored.
            // Only attributes are valid on these tags per the XML spec.
            xmlStr += tempInd + `<${tagName}${attStr}?>`;
            isPreviousElementTag = true;
            matcher.pop();
            continue;
        }

        let newIdentation = indentation;
        if (newIdentation !== "") {
            newIdentation += options.indentBy;
        }

        // Pass isStopNode to attr_to_str so attributes are also not processed for stopNodes
        const attStr = attr_to_str(tagObj[":@"], options, isStopNode, matcher, xmlVersion);
        const tagStart = indentation + `<${tagName}${attStr}`;

        // If this is a stopNode, get raw content without processing
        let tagValue;
        if (isStopNode) {
            tagValue = getRawContent(tagObj[rawTagName], options);
        } else {
            tagValue = arrToStr(tagObj[rawTagName], options, newIdentation, matcher, stopNodeExpressions, xmlVersion);
        }

        if (options.unpairedTags.indexOf(tagName) !== -1) {
            if (options.suppressUnpairedNode) xmlStr += tagStart + ">";
            else xmlStr += tagStart + "/>";
        } else if ((!tagValue || tagValue.length === 0) && options.suppressEmptyNode) {
            xmlStr += tagStart + "/>";
        } else if (tagValue && tagValue.endsWith(">")) {
            xmlStr += tagStart + `>${tagValue}${indentation}</${tagName}>`;
        } else {
            xmlStr += tagStart + ">";
            if (tagValue && indentation !== "" && (tagValue.includes("/>") || tagValue.includes("</"))) {
                xmlStr += indentation + options.indentBy + tagValue + indentation;
            } else {
                xmlStr += tagValue;
            }
            xmlStr += `</${tagName}>`;
        }
        isPreviousElementTag = true;

        // Pop tag from matcher
        matcher.pop();
    }

    return xmlStr;
}

/**
 * Extract attribute values from the ":@" object and return as plain object
 * for passing to matcher.push()
 */
function extractAttributeValues(attrMap, options) {
    if (!attrMap || options.ignoreAttributes) return null;

    const attrValues = {};
    let hasAttrs = false;

    for (let attr in attrMap) {
        if (!Object.prototype.hasOwnProperty.call(attrMap, attr)) continue;
        // Remove the attribute prefix to get clean attribute name
        const cleanAttrName = attr.startsWith(options.attributeNamePrefix)
            ? attr.substr(options.attributeNamePrefix.length)
            : attr;
        attrValues[cleanAttrName] = Object(_util_js__WEBPACK_IMPORTED_MODULE_1__["escapeAttribute"])(attrMap[attr]);
        hasAttrs = true;
    }

    return hasAttrs ? attrValues : null;
}

/**
 * Extract raw content from a stopNode without any processing
 * This preserves the content exactly as-is, including special characters
 */
function getRawContent(arr, options) {
    if (!Array.isArray(arr)) {
        // Non-array values return as-is
        if (arr !== undefined && arr !== null) {
            return arr.toString();
        }
        return "";
    }

    let content = "";
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        const tagName = propName(item);

        if (tagName === options.textNodeName) {
            // Raw text content - NO processing, NO entity replacement
            content += item[tagName];
        } else if (tagName === options.cdataPropName) {
            // CDATA content
            content += item[tagName][0][options.textNodeName];
        } else if (tagName === options.commentPropName) {
            // Comment content
            content += item[tagName][0][options.textNodeName];
        } else if (tagName && tagName[0] === "?") {
            // Processing instruction - skip for stopNodes
            continue;
        } else if (tagName) {
            // Nested tags within stopNode — no sanitizeName, content is raw
            const attStr = attr_to_str_raw(item[":@"], options);
            const nestedContent = getRawContent(item[tagName], options);

            if (!nestedContent || nestedContent.length === 0) {
                content += `<${tagName}${attStr}/>`;
            } else {
                content += `<${tagName}${attStr}>${nestedContent}</${tagName}>`;
            }
        }
    }
    return content;
}

/**
 * Build attribute string for stopNodes - NO entity replacement
 */
function attr_to_str_raw(attrMap, options) {
    let attrStr = "";
    if (attrMap && !options.ignoreAttributes) {
        for (let attr in attrMap) {
            if (!Object.prototype.hasOwnProperty.call(attrMap, attr)) continue;
            // For stopNodes, use raw value without processing
            let attrVal = attrMap[attr];
            if (attrVal === true && options.suppressBooleanAttributes) {
                attrStr += ` ${attr.substr(options.attributeNamePrefix.length)}`;
            } else {
                attrStr += ` ${attr.substr(options.attributeNamePrefix.length)}="${Object(_util_js__WEBPACK_IMPORTED_MODULE_1__["escapeAttribute"])(attrVal)}"`;
            }
        }
    }
    return attrStr;
}

function propName(obj) {
    const keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        if (!Object.prototype.hasOwnProperty.call(obj, key)) continue;
        if (key !== ":@") return key;
    }
}

/**
 * Build attribute string, resolving attribute names through sanitizeName when configured.
 * Accepts matcher so the callback has path context.
 */
function attr_to_str(attrMap, options, isStopNode, matcher, xmlVersion) {
    let attrStr = "";
    if (attrMap && !options.ignoreAttributes) {
        for (let attr in attrMap) {
            if (!Object.prototype.hasOwnProperty.call(attrMap, attr)) continue;

            // Strip prefix to get the clean XML attribute name, then optionally sanitize it
            const cleanAttrName = attr.substr(options.attributeNamePrefix.length);
            const resolvedAttrName = isStopNode
                ? cleanAttrName  // stopNodes are raw — skip sanitizeName for attr names too
                : resolveTagName(cleanAttrName, true, options, matcher, xmlVersion);

            let attrVal;
            if (isStopNode) {
                // For stopNodes, use raw value without any processing
                attrVal = attrMap[attr];
            } else {
                // Normal processing: apply attributeValueProcessor and entity replacement
                attrVal = options.attributeValueProcessor(attr, attrMap[attr]);
                attrVal = replaceEntitiesValue(attrVal, options);
            }

            if (attrVal === true && options.suppressBooleanAttributes) {
                attrStr += ` ${resolvedAttrName}`;
            } else {
                attrStr += ` ${resolvedAttrName}="${Object(_util_js__WEBPACK_IMPORTED_MODULE_1__["escapeAttribute"])(attrVal)}"`;
            }
        }
    }
    return attrStr;
}

function checkStopNode(matcher, stopNodeExpressions) {
    if (!stopNodeExpressions || stopNodeExpressions.length === 0) return false;

    for (let i = 0; i < stopNodeExpressions.length; i++) {
        if (matcher.matches(stopNodeExpressions[i])) {
            return true;
        }
    }
    return false;
}

function replaceEntitiesValue(textValue, options) {
    if (textValue && textValue.length > 0 && options.processEntities) {
        for (let i = 0; i < options.entities.length; i++) {
            const entity = options.entities[i];
            textValue = textValue.replace(entity.regex, entity.val);
        }
    }
    return textValue;
}

/***/ }),

/***/ "./node_modules/fast-xml-builder/src/util.js":
/*!***************************************************!*\
  !*** ./node_modules/fast-xml-builder/src/util.js ***!
  \***************************************************/
/*! exports provided: safeComment, safeCdata, escapeAttribute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "safeComment", function() { return safeComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "safeCdata", function() { return safeCdata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escapeAttribute", function() { return escapeAttribute; });


function safeComment(val) {
  return String(val)
    .replace(/--/g, '- -')   // -- is illegal anywhere in comment content
    .replace(/--/g, '- -')   // handle the scenario when 2 consiucative dashes appears
    .replace(/-$/, '- ');    // trailing - would form -- with the closing -->
}

function safeCdata(val) {
  return String(val).replace(/\]\]>/g, ']]]]><![CDATA[>')
}

function escapeAttribute(val) {
  return String(val).replace(/"/g, '&quot;').replace(/'/g, '&apos;')
}

/***/ }),

/***/ "./node_modules/fast-xml-parser/src/fxp.js":
/*!*************************************************!*\
  !*** ./node_modules/fast-xml-parser/src/fxp.js ***!
  \*************************************************/
/*! exports provided: XMLParser, XMLValidator, XMLBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XMLValidator", function() { return XMLValidator; });
/* harmony import */ var _validator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validator.js */ "./node_modules/fast-xml-parser/src/validator.js");
/* harmony import */ var _xmlparser_XMLParser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./xmlparser/XMLParser.js */ "./node_modules/fast-xml-parser/src/xmlparser/XMLParser.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "XMLParser", function() { return _xmlparser_XMLParser_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _xmlbuilder_json2xml_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./xmlbuilder/json2xml.js */ "./node_modules/fast-xml-parser/src/xmlbuilder/json2xml.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "XMLBuilder", function() { return _xmlbuilder_json2xml_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });






var XMLValidator = {
  validate: _validator_js__WEBPACK_IMPORTED_MODULE_0__["validate"]
};


/***/ }),

/***/ "./node_modules/fast-xml-parser/src/ignoreAttributes.js":
/*!**************************************************************!*\
  !*** ./node_modules/fast-xml-parser/src/ignoreAttributes.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getIgnoreAttributesFn; });
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function getIgnoreAttributesFn(ignoreAttributes) {
  if (typeof ignoreAttributes === 'function') {
    return ignoreAttributes;
  }
  if (Array.isArray(ignoreAttributes)) {
    return function (attrName) {
      var _iterator = _createForOfIteratorHelper(ignoreAttributes),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var pattern = _step.value;
          if (typeof pattern === 'string' && attrName === pattern) {
            return true;
          }
          if (pattern instanceof RegExp && pattern.test(attrName)) {
            return true;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    };
  }
  return function () {
    return false;
  };
}

/***/ }),

/***/ "./node_modules/fast-xml-parser/src/util.js":
/*!**************************************************!*\
  !*** ./node_modules/fast-xml-parser/src/util.js ***!
  \**************************************************/
/*! exports provided: nameRegexp, getAllMatches, isName, isExist, isEmptyObject, getValue, DANGEROUS_PROPERTY_NAMES, criticalProperties */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nameRegexp", function() { return nameRegexp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllMatches", function() { return getAllMatches; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isName", function() { return isName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isExist", function() { return isExist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmptyObject", function() { return isEmptyObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getValue", function() { return getValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DANGEROUS_PROPERTY_NAMES", function() { return DANGEROUS_PROPERTY_NAMES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "criticalProperties", function() { return criticalProperties; });


var nameStartChar = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";
var nameChar = nameStartChar + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040";
var nameRegexp = '[' + nameStartChar + '][' + nameChar + ']*';
var regexName = new RegExp('^' + nameRegexp + '$');
function getAllMatches(string, regex) {
  var matches = [];
  var match = regex.exec(string);
  while (match) {
    var allmatches = [];
    allmatches.startIndex = regex.lastIndex - match[0].length;
    var len = match.length;
    for (var index = 0; index < len; index++) {
      allmatches.push(match[index]);
    }
    matches.push(allmatches);
    match = regex.exec(string);
  }
  return matches;
}
var isName = function isName(string) {
  var match = regexName.exec(string);
  return !(match === null || typeof match === 'undefined');
};
function isExist(v) {
  return typeof v !== 'undefined';
}
function isEmptyObject(obj) {
  return Object.keys(obj).length === 0;
}
function getValue(v) {
  if (exports.isExist(v)) {
    return v;
  } else {
    return '';
  }
}

/**
 * Dangerous property names that could lead to prototype pollution or security issues
 */
var DANGEROUS_PROPERTY_NAMES = [
// '__proto__',
// 'constructor',
// 'prototype',
'hasOwnProperty', 'toString', 'valueOf', '__defineGetter__', '__defineSetter__', '__lookupGetter__', '__lookupSetter__'];
var criticalProperties = ["__proto__", "constructor", "prototype"];

/***/ }),

/***/ "./node_modules/fast-xml-parser/src/validator.js":
/*!*******************************************************!*\
  !*** ./node_modules/fast-xml-parser/src/validator.js ***!
  \*******************************************************/
/*! exports provided: validate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validate", function() { return validate; });
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ "./node_modules/fast-xml-parser/src/util.js");



var defaultOptions = {
  allowBooleanAttributes: false,
  //A tag can have attributes without any value
  unpairedTags: []
};

//const tagsPattern = new RegExp("<\\/?([\\w:\\-_\.]+)\\s*\/?>","g");
function validate(xmlData, options) {
  options = Object.assign({}, defaultOptions, options);

  //xmlData = xmlData.replace(/(\r\n|\n|\r)/gm,"");//make it single line
  //xmlData = xmlData.replace(/(^\s*<\?xml.*?\?>)/g,"");//Remove XML starting tag
  //xmlData = xmlData.replace(/(<!DOCTYPE[\s\w\"\.\/\-\:]+(\[.*\])*\s*>)/g,"");//Remove DOCTYPE
  var tags = [];
  var tagFound = false;

  //indicates that the root tag has been closed (aka. depth 0 has been reached)
  var reachedRoot = false;
  if (xmlData[0] === "\uFEFF") {
    // check for byte order mark (BOM)
    xmlData = xmlData.substr(1);
  }
  for (var i = 0; i < xmlData.length; i++) {
    if (xmlData[i] === '<' && xmlData[i + 1] === '?') {
      i += 2;
      i = readPI(xmlData, i);
      if (i.err) return i;
    } else if (xmlData[i] === '<') {
      //starting of tag
      //read until you reach to '>' avoiding any '>' in attribute value
      var tagStartPos = i;
      i++;
      if (xmlData[i] === '!') {
        i = readCommentAndCDATA(xmlData, i);
        continue;
      } else {
        var closingTag = false;
        if (xmlData[i] === '/') {
          //closing tag
          closingTag = true;
          i++;
        }
        //read tagname
        var tagName = '';
        for (; i < xmlData.length && xmlData[i] !== '>' && xmlData[i] !== ' ' && xmlData[i] !== '\t' && xmlData[i] !== '\n' && xmlData[i] !== '\r'; i++) {
          tagName += xmlData[i];
        }
        tagName = tagName.trim();
        //console.log(tagName);

        if (tagName[tagName.length - 1] === '/') {
          //self closing tag without attributes
          tagName = tagName.substring(0, tagName.length - 1);
          //continue;
          i--;
        }
        if (!validateTagName(tagName)) {
          var msg = void 0;
          if (tagName.trim().length === 0) {
            msg = "Invalid space after '<'.";
          } else {
            msg = "Tag '" + tagName + "' is an invalid name.";
          }
          return getErrorObject('InvalidTag', msg, getLineNumberForPosition(xmlData, i));
        }
        var result = readAttributeStr(xmlData, i);
        if (result === false) {
          return getErrorObject('InvalidAttr', "Attributes for '" + tagName + "' have open quote.", getLineNumberForPosition(xmlData, i));
        }
        var attrStr = result.value;
        i = result.index;
        if (attrStr[attrStr.length - 1] === '/') {
          //self closing tag
          var attrStrStart = i - attrStr.length;
          attrStr = attrStr.substring(0, attrStr.length - 1);
          var isValid = validateAttributeString(attrStr, options);
          if (isValid === true) {
            tagFound = true;
            //continue; //text may presents after self closing tag
          } else {
            //the result from the nested function returns the position of the error within the attribute
            //in order to get the 'true' error line, we need to calculate the position where the attribute begins (i - attrStr.length) and then add the position within the attribute
            //this gives us the absolute index in the entire xml, which we can use to find the line at last
            return getErrorObject(isValid.err.code, isValid.err.msg, getLineNumberForPosition(xmlData, attrStrStart + isValid.err.line));
          }
        } else if (closingTag) {
          if (!result.tagClosed) {
            return getErrorObject('InvalidTag', "Closing tag '" + tagName + "' doesn't have proper closing.", getLineNumberForPosition(xmlData, i));
          } else if (attrStr.trim().length > 0) {
            return getErrorObject('InvalidTag', "Closing tag '" + tagName + "' can't have attributes or invalid starting.", getLineNumberForPosition(xmlData, tagStartPos));
          } else if (tags.length === 0) {
            return getErrorObject('InvalidTag', "Closing tag '" + tagName + "' has not been opened.", getLineNumberForPosition(xmlData, tagStartPos));
          } else {
            var otg = tags.pop();
            if (tagName !== otg.tagName) {
              var openPos = getLineNumberForPosition(xmlData, otg.tagStartPos);
              return getErrorObject('InvalidTag', "Expected closing tag '" + otg.tagName + "' (opened in line " + openPos.line + ", col " + openPos.col + ") instead of closing tag '" + tagName + "'.", getLineNumberForPosition(xmlData, tagStartPos));
            }

            //when there are no more tags, we reached the root level.
            if (tags.length == 0) {
              reachedRoot = true;
            }
          }
        } else {
          var _isValid = validateAttributeString(attrStr, options);
          if (_isValid !== true) {
            //the result from the nested function returns the position of the error within the attribute
            //in order to get the 'true' error line, we need to calculate the position where the attribute begins (i - attrStr.length) and then add the position within the attribute
            //this gives us the absolute index in the entire xml, which we can use to find the line at last
            return getErrorObject(_isValid.err.code, _isValid.err.msg, getLineNumberForPosition(xmlData, i - attrStr.length + _isValid.err.line));
          }

          //if the root level has been reached before ...
          if (reachedRoot === true) {
            return getErrorObject('InvalidXml', 'Multiple possible root nodes found.', getLineNumberForPosition(xmlData, i));
          } else if (options.unpairedTags.indexOf(tagName) !== -1) {
            //don't push into stack
          } else {
            tags.push({
              tagName: tagName,
              tagStartPos: tagStartPos
            });
          }
          tagFound = true;
        }

        //skip tag text value
        //It may include comments and CDATA value
        for (i++; i < xmlData.length; i++) {
          if (xmlData[i] === '<') {
            if (xmlData[i + 1] === '!') {
              //comment or CADATA
              i++;
              i = readCommentAndCDATA(xmlData, i);
              continue;
            } else if (xmlData[i + 1] === '?') {
              i = readPI(xmlData, ++i);
              if (i.err) return i;
            } else {
              break;
            }
          } else if (xmlData[i] === '&') {
            var afterAmp = validateAmpersand(xmlData, i);
            if (afterAmp == -1) return getErrorObject('InvalidChar', "char '&' is not expected.", getLineNumberForPosition(xmlData, i));
            i = afterAmp;
          } else {
            if (reachedRoot === true && !isWhiteSpace(xmlData[i])) {
              return getErrorObject('InvalidXml', "Extra text at the end", getLineNumberForPosition(xmlData, i));
            }
          }
        } //end of reading tag text value
        if (xmlData[i] === '<') {
          i--;
        }
      }
    } else {
      if (isWhiteSpace(xmlData[i])) {
        continue;
      }
      return getErrorObject('InvalidChar', "char '" + xmlData[i] + "' is not expected.", getLineNumberForPosition(xmlData, i));
    }
  }
  if (!tagFound) {
    return getErrorObject('InvalidXml', 'Start tag expected.', 1);
  } else if (tags.length == 1) {
    return getErrorObject('InvalidTag', "Unclosed tag '" + tags[0].tagName + "'.", getLineNumberForPosition(xmlData, tags[0].tagStartPos));
  } else if (tags.length > 0) {
    return getErrorObject('InvalidXml', "Invalid '" + JSON.stringify(tags.map(function (t) {
      return t.tagName;
    }), null, 4).replace(/\r?\n/g, '') + "' found.", {
      line: 1,
      col: 1
    });
  }
  return true;
}
;
function isWhiteSpace(char) {
  return char === ' ' || char === '\t' || char === '\n' || char === '\r';
}
/**
 * Read Processing insstructions and skip
 * @param {*} xmlData
 * @param {*} i
 */
function readPI(xmlData, i) {
  var start = i;
  for (; i < xmlData.length; i++) {
    if (xmlData[i] == '?' || xmlData[i] == ' ') {
      //tagname
      var tagname = xmlData.substr(start, i - start);
      if (i > 5 && tagname === 'xml') {
        return getErrorObject('InvalidXml', 'XML declaration allowed only at the start of the document.', getLineNumberForPosition(xmlData, i));
      } else if (xmlData[i] == '?' && xmlData[i + 1] == '>') {
        //check if valid attribut string
        i++;
        break;
      } else {
        continue;
      }
    }
  }
  return i;
}
function readCommentAndCDATA(xmlData, i) {
  if (xmlData.length > i + 5 && xmlData[i + 1] === '-' && xmlData[i + 2] === '-') {
    //comment
    for (i += 3; i < xmlData.length; i++) {
      if (xmlData[i] === '-' && xmlData[i + 1] === '-' && xmlData[i + 2] === '>') {
        i += 2;
        break;
      }
    }
  } else if (xmlData.length > i + 8 && xmlData[i + 1] === 'D' && xmlData[i + 2] === 'O' && xmlData[i + 3] === 'C' && xmlData[i + 4] === 'T' && xmlData[i + 5] === 'Y' && xmlData[i + 6] === 'P' && xmlData[i + 7] === 'E') {
    var angleBracketsCount = 1;
    for (i += 8; i < xmlData.length; i++) {
      if (xmlData[i] === '<') {
        angleBracketsCount++;
      } else if (xmlData[i] === '>') {
        angleBracketsCount--;
        if (angleBracketsCount === 0) {
          break;
        }
      }
    }
  } else if (xmlData.length > i + 9 && xmlData[i + 1] === '[' && xmlData[i + 2] === 'C' && xmlData[i + 3] === 'D' && xmlData[i + 4] === 'A' && xmlData[i + 5] === 'T' && xmlData[i + 6] === 'A' && xmlData[i + 7] === '[') {
    for (i += 8; i < xmlData.length; i++) {
      if (xmlData[i] === ']' && xmlData[i + 1] === ']' && xmlData[i + 2] === '>') {
        i += 2;
        break;
      }
    }
  }
  return i;
}
var doubleQuote = '"';
var singleQuote = "'";

/**
 * Keep reading xmlData until '<' is found outside the attribute value.
 * @param {string} xmlData
 * @param {number} i
 */
function readAttributeStr(xmlData, i) {
  var attrStr = '';
  var startChar = '';
  var tagClosed = false;
  for (; i < xmlData.length; i++) {
    if (xmlData[i] === doubleQuote || xmlData[i] === singleQuote) {
      if (startChar === '') {
        startChar = xmlData[i];
      } else if (startChar !== xmlData[i]) {
        //if vaue is enclosed with double quote then single quotes are allowed inside the value and vice versa
      } else {
        startChar = '';
      }
    } else if (xmlData[i] === '>') {
      if (startChar === '') {
        tagClosed = true;
        break;
      }
    }
    attrStr += xmlData[i];
  }
  if (startChar !== '') {
    return false;
  }
  return {
    value: attrStr,
    index: i,
    tagClosed: tagClosed
  };
}

/**
 * Select all the attributes whether valid or invalid.
 */
var validAttrStrRegxp = new RegExp('(\\s*)([^\\s=]+)(\\s*=)?(\\s*([\'"])(([\\s\\S])*?)\\5)?', 'g');

//attr, ="sd", a="amit's", a="sd"b="saf", ab  cd=""

function validateAttributeString(attrStr, options) {
  //console.log("start:"+attrStr+":end");

  //if(attrStr.trim().length === 0) return true; //empty string

  var matches = Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["getAllMatches"])(attrStr, validAttrStrRegxp);
  var attrNames = {};
  for (var i = 0; i < matches.length; i++) {
    if (matches[i][1].length === 0) {
      //nospace before attribute name: a="sd"b="saf"
      return getErrorObject('InvalidAttr', "Attribute '" + matches[i][2] + "' has no space in starting.", getPositionFromMatch(matches[i]));
    } else if (matches[i][3] !== undefined && matches[i][4] === undefined) {
      return getErrorObject('InvalidAttr', "Attribute '" + matches[i][2] + "' is without value.", getPositionFromMatch(matches[i]));
    } else if (matches[i][3] === undefined && !options.allowBooleanAttributes) {
      //independent attribute: ab
      return getErrorObject('InvalidAttr', "boolean attribute '" + matches[i][2] + "' is not allowed.", getPositionFromMatch(matches[i]));
    }
    /* else if(matches[i][6] === undefined){//attribute without value: ab=
                    return { err: { code:"InvalidAttr",msg:"attribute " + matches[i][2] + " has no value assigned."}};
                } */
    var attrName = matches[i][2];
    if (!validateAttrName(attrName)) {
      return getErrorObject('InvalidAttr', "Attribute '" + attrName + "' is an invalid name.", getPositionFromMatch(matches[i]));
    }
    if (!Object.prototype.hasOwnProperty.call(attrNames, attrName)) {
      //check for duplicate attribute.
      attrNames[attrName] = 1;
    } else {
      return getErrorObject('InvalidAttr', "Attribute '" + attrName + "' is repeated.", getPositionFromMatch(matches[i]));
    }
  }
  return true;
}
function validateNumberAmpersand(xmlData, i) {
  var re = /\d/;
  if (xmlData[i] === 'x') {
    i++;
    re = /[\da-fA-F]/;
  }
  for (; i < xmlData.length; i++) {
    if (xmlData[i] === ';') return i;
    if (!xmlData[i].match(re)) break;
  }
  return -1;
}
function validateAmpersand(xmlData, i) {
  // https://www.w3.org/TR/xml/#dt-charref
  i++;
  if (xmlData[i] === ';') return -1;
  if (xmlData[i] === '#') {
    i++;
    return validateNumberAmpersand(xmlData, i);
  }
  var count = 0;
  for (; i < xmlData.length; i++, count++) {
    if (xmlData[i].match(/\w/) && count < 20) continue;
    if (xmlData[i] === ';') break;
    return -1;
  }
  return i;
}
function getErrorObject(code, message, lineNumber) {
  return {
    err: {
      code: code,
      msg: message,
      line: lineNumber.line || lineNumber,
      col: lineNumber.col
    }
  };
}
function validateAttrName(attrName) {
  return Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["isName"])(attrName);
}

// const startsWithXML = /^xml/i;

function validateTagName(tagname) {
  return Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["isName"])(tagname) /* && !tagname.match(startsWithXML) */;
}

//this function returns the line number for the character at the given index
function getLineNumberForPosition(xmlData, index) {
  var lines = xmlData.substring(0, index).split(/\r?\n/);
  return {
    line: lines.length,
    // column number is last line's length + 1, because column numbering starts at 1:
    col: lines[lines.length - 1].length + 1
  };
}

//this function returns the position of the first character of match within attrStr
function getPositionFromMatch(match) {
  return match.startIndex + match[1].length;
}

/***/ }),

/***/ "./node_modules/fast-xml-parser/src/xmlbuilder/json2xml.js":
/*!*****************************************************************!*\
  !*** ./node_modules/fast-xml-parser/src/xmlbuilder/json2xml.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fast_xml_builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fast-xml-builder */ "./node_modules/fast-xml-builder/src/fxb.js");
/* empty/unused harmony star reexport */// Re-export from fast-xml-builder for backward compatibility

/* harmony default export */ __webpack_exports__["default"] = (fast_xml_builder__WEBPACK_IMPORTED_MODULE_0__["default"]);

// If there are any named exports you also want to re-export:


/***/ }),

/***/ "./node_modules/fast-xml-parser/src/xmlparser/DocTypeReader.js":
/*!*********************************************************************!*\
  !*** ./node_modules/fast-xml-parser/src/xmlparser/DocTypeReader.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DocTypeReader; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var xml_naming__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! xml-naming */ "./node_modules/xml-naming/src/index.js");




var DocTypeReader = /*#__PURE__*/function () {
  function DocTypeReader(options, xmlVersion) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, DocTypeReader);
    this.suppressValidationErr = !options;
    this.options = options;
    this.xmlVersion = xmlVersion || 1.0;
  }
  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(DocTypeReader, [{
    key: "setXmlVersion",
    value: function setXmlVersion() {
      var xmlVersion = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1.0;
      this.xmlVersion = xmlVersion;
    }
  }, {
    key: "readDocType",
    value: function readDocType(xmlData, i) {
      var entities = Object.create(null);
      var entityCount = 0;
      if (xmlData[i + 3] === 'O' && xmlData[i + 4] === 'C' && xmlData[i + 5] === 'T' && xmlData[i + 6] === 'Y' && xmlData[i + 7] === 'P' && xmlData[i + 8] === 'E') {
        i = i + 9;
        var angleBracketsCount = 1;
        var hasBody = false,
          comment = false;
        var exp = "";
        for (; i < xmlData.length; i++) {
          if (xmlData[i] === '<' && !comment) {
            //Determine the tag type
            if (hasBody && hasSeq(xmlData, "!ENTITY", i)) {
              i += 7;
              var entityName = void 0,
                val = void 0;
              var _this$readEntityExp = this.readEntityExp(xmlData, i + 1, this.suppressValidationErr);
              var _this$readEntityExp2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_this$readEntityExp, 3);
              entityName = _this$readEntityExp2[0];
              val = _this$readEntityExp2[1];
              i = _this$readEntityExp2[2];
              if (val.indexOf("&") === -1) {
                //Parameter entities are not supported
                if (this.options.enabled !== false && this.options.maxEntityCount != null && entityCount >= this.options.maxEntityCount) {
                  throw new Error("Entity count (".concat(entityCount + 1, ") exceeds maximum allowed (").concat(this.options.maxEntityCount, ")"));
                }
                //const escaped = entityName.replace(/[.\-+*:]/g, '\\.');
                //const escaped = entityName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                entities[entityName] = val;
                entityCount++;
              }
            } else if (hasBody && hasSeq(xmlData, "!ELEMENT", i)) {
              i += 8; //Not supported
              var _this$readElementExp = this.readElementExp(xmlData, i + 1),
                index = _this$readElementExp.index;
              i = index;
            } else if (hasBody && hasSeq(xmlData, "!ATTLIST", i)) {
              i += 8; //Not supported
              // const {index} = this.readAttlistExp(xmlData,i+1);
              // i = index;
            } else if (hasBody && hasSeq(xmlData, "!NOTATION", i)) {
              i += 9; //Not supported
              var _this$readNotationExp = this.readNotationExp(xmlData, i + 1, this.suppressValidationErr),
                _index = _this$readNotationExp.index;
              i = _index;
            } else if (hasSeq(xmlData, "!--", i)) comment = true;else throw new Error("Invalid DOCTYPE");
            angleBracketsCount++;
            exp = "";
          } else if (xmlData[i] === '>') {
            //Read tag content
            if (comment) {
              if (xmlData[i - 1] === "-" && xmlData[i - 2] === "-") {
                comment = false;
                angleBracketsCount--;
              }
            } else {
              angleBracketsCount--;
            }
            if (angleBracketsCount === 0) {
              break;
            }
          } else if (xmlData[i] === '[') {
            hasBody = true;
          } else {
            exp += xmlData[i];
          }
        }
        if (angleBracketsCount !== 0) {
          throw new Error("Unclosed DOCTYPE");
        }
      } else {
        throw new Error("Invalid Tag instead of DOCTYPE");
      }
      return {
        entities: entities,
        i: i
      };
    }
  }, {
    key: "readEntityExp",
    value: function readEntityExp(xmlData, i) {
      //External entities are not supported
      //    <!ENTITY ext SYSTEM "http://normal-website.com" >

      //Parameter entities are not supported
      //    <!ENTITY entityname "&anotherElement;">

      //Internal entities are supported
      //    <!ENTITY entityname "replacement text">

      // Skip leading whitespace after <!ENTITY
      i = skipWhitespace(xmlData, i);

      // Read entity name
      var startIndex = i;
      while (i < xmlData.length && !/\s/.test(xmlData[i]) && xmlData[i] !== '"' && xmlData[i] !== "'") {
        i++;
      }
      var entityName = xmlData.substring(startIndex, i);
      validateEntityName(entityName, {
        xmlVersion: this.xmlVersion
      });

      // Skip whitespace after entity name
      i = skipWhitespace(xmlData, i);

      // Check for unsupported constructs (external entities or parameter entities)
      if (!this.suppressValidationErr) {
        if (xmlData.substring(i, i + 6).toUpperCase() === "SYSTEM") {
          throw new Error("External entities are not supported");
        } else if (xmlData[i] === "%") {
          throw new Error("Parameter entities are not supported");
        }
      }

      // Read entity value (internal entity)
      var entityValue = "";
      // Validate entity size
      var _this$readIdentifierV = this.readIdentifierVal(xmlData, i, "entity");
      var _this$readIdentifierV2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_this$readIdentifierV, 2);
      i = _this$readIdentifierV2[0];
      entityValue = _this$readIdentifierV2[1];
      if (this.options.enabled !== false && this.options.maxEntitySize != null && entityValue.length > this.options.maxEntitySize) {
        throw new Error("Entity \"".concat(entityName, "\" size (").concat(entityValue.length, ") exceeds maximum allowed size (").concat(this.options.maxEntitySize, ")"));
      }
      i--;
      return [entityName, entityValue, i];
    }
  }, {
    key: "readNotationExp",
    value: function readNotationExp(xmlData, i) {
      // Skip leading whitespace after <!NOTATION
      i = skipWhitespace(xmlData, i);

      // Read notation name

      var startIndex = i;
      while (i < xmlData.length && !/\s/.test(xmlData[i])) {
        i++;
      }
      var notationName = xmlData.substring(startIndex, i);
      !this.suppressValidationErr && validateEntityName(notationName, {
        xmlVersion: this.xmlVersion
      });

      // Skip whitespace after notation name
      i = skipWhitespace(xmlData, i);

      // Check identifier type (SYSTEM or PUBLIC)
      var identifierType = xmlData.substring(i, i + 6).toUpperCase();
      if (!this.suppressValidationErr && identifierType !== "SYSTEM" && identifierType !== "PUBLIC") {
        throw new Error("Expected SYSTEM or PUBLIC, found \"".concat(identifierType, "\""));
      }
      i += identifierType.length;

      // Skip whitespace after identifier type
      i = skipWhitespace(xmlData, i);

      // Read public identifier (if PUBLIC)
      var publicIdentifier = null;
      var systemIdentifier = null;
      if (identifierType === "PUBLIC") {
        // Skip whitespace after public identifier
        var _this$readIdentifierV3 = this.readIdentifierVal(xmlData, i, "publicIdentifier");
        var _this$readIdentifierV4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_this$readIdentifierV3, 2);
        i = _this$readIdentifierV4[0];
        publicIdentifier = _this$readIdentifierV4[1];
        i = skipWhitespace(xmlData, i);

        // Optionally read system identifier
        if (xmlData[i] === '"' || xmlData[i] === "'") {
          var _this$readIdentifierV5 = this.readIdentifierVal(xmlData, i, "systemIdentifier");
          var _this$readIdentifierV6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_this$readIdentifierV5, 2);
          i = _this$readIdentifierV6[0];
          systemIdentifier = _this$readIdentifierV6[1];
        }
      } else if (identifierType === "SYSTEM") {
        // Read system identifier (mandatory for SYSTEM)
        var _this$readIdentifierV7 = this.readIdentifierVal(xmlData, i, "systemIdentifier");
        var _this$readIdentifierV8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_this$readIdentifierV7, 2);
        i = _this$readIdentifierV8[0];
        systemIdentifier = _this$readIdentifierV8[1];
        if (!this.suppressValidationErr && !systemIdentifier) {
          throw new Error("Missing mandatory system identifier for SYSTEM notation");
        }
      }
      return {
        notationName: notationName,
        publicIdentifier: publicIdentifier,
        systemIdentifier: systemIdentifier,
        index: --i
      };
    }
  }, {
    key: "readIdentifierVal",
    value: function readIdentifierVal(xmlData, i, type) {
      var identifierVal = "";
      var startChar = xmlData[i];
      if (startChar !== '"' && startChar !== "'") {
        throw new Error("Expected quoted string, found \"".concat(startChar, "\""));
      }
      i++;
      var startIndex = i;
      while (i < xmlData.length && xmlData[i] !== startChar) {
        i++;
      }
      identifierVal = xmlData.substring(startIndex, i);
      if (xmlData[i] !== startChar) {
        throw new Error("Unterminated ".concat(type, " value"));
      }
      i++;
      return [i, identifierVal];
    }
  }, {
    key: "readElementExp",
    value: function readElementExp(xmlData, i) {
      // <!ELEMENT br EMPTY>
      // <!ELEMENT div ANY>
      // <!ELEMENT title (#PCDATA)>
      // <!ELEMENT book (title, author+)>
      // <!ELEMENT name (content-model)>

      // Skip leading whitespace after <!ELEMENT
      i = skipWhitespace(xmlData, i);

      // Read element name
      var startIndex = i;
      while (i < xmlData.length && !/\s/.test(xmlData[i])) {
        i++;
      }
      var elementName = xmlData.substring(startIndex, i);

      // Validate element name
      if (!this.suppressValidationErr && !Object(xml_naming__WEBPACK_IMPORTED_MODULE_3__["qName"])(elementName, {
        xmlVersion: this.xmlVersion
      })) {
        throw new Error("Invalid element name: \"".concat(elementName, "\""));
      }

      // Skip whitespace after element name
      i = skipWhitespace(xmlData, i);
      var contentModel = "";
      // Expect '(' to start content model
      if (xmlData[i] === "E" && hasSeq(xmlData, "MPTY", i)) i += 4;else if (xmlData[i] === "A" && hasSeq(xmlData, "NY", i)) i += 2;else if (xmlData[i] === "(") {
        i++; // Move past '('

        // Read content model
        var _startIndex = i;
        while (i < xmlData.length && xmlData[i] !== ")") {
          i++;
        }
        contentModel = xmlData.substring(_startIndex, i);
        if (xmlData[i] !== ")") {
          throw new Error("Unterminated content model");
        }
      } else if (!this.suppressValidationErr) {
        throw new Error("Invalid Element Expression, found \"".concat(xmlData[i], "\""));
      }
      return {
        elementName: elementName,
        contentModel: contentModel.trim(),
        index: i
      };
    }
  }, {
    key: "readAttlistExp",
    value: function readAttlistExp(xmlData, i) {
      // Skip leading whitespace after <!ATTLIST
      i = skipWhitespace(xmlData, i);

      // Read element name
      var startIndex = i;
      while (i < xmlData.length && !/\s/.test(xmlData[i])) {
        i++;
      }
      var elementName = xmlData.substring(startIndex, i);

      // Validate element name
      validateEntityName(elementName, {
        xmlVersion: this.xmlVersion
      });

      // Skip whitespace after element name
      i = skipWhitespace(xmlData, i);

      // Read attribute name
      startIndex = i;
      while (i < xmlData.length && !/\s/.test(xmlData[i])) {
        i++;
      }
      var attributeName = xmlData.substring(startIndex, i);

      // Validate attribute name
      if (!validateEntityName(attributeName, {
        xmlVersion: this.xmlVersion
      })) {
        throw new Error("Invalid attribute name: \"".concat(attributeName, "\""));
      }

      // Skip whitespace after attribute name
      i = skipWhitespace(xmlData, i);

      // Read attribute type
      var attributeType = "";
      if (xmlData.substring(i, i + 8).toUpperCase() === "NOTATION") {
        attributeType = "NOTATION";
        i += 8; // Move past "NOTATION"

        // Skip whitespace after "NOTATION"
        i = skipWhitespace(xmlData, i);

        // Expect '(' to start the list of notations
        if (xmlData[i] !== "(") {
          throw new Error("Expected '(', found \"".concat(xmlData[i], "\""));
        }
        i++; // Move past '('

        // Read the list of allowed notations
        var allowedNotations = [];
        while (i < xmlData.length && xmlData[i] !== ")") {
          var _startIndex2 = i;
          while (i < xmlData.length && xmlData[i] !== "|" && xmlData[i] !== ")") {
            i++;
          }
          var notation = xmlData.substring(_startIndex2, i);

          // Validate notation name
          notation = notation.trim();
          if (!validateEntityName(notation, {
            xmlVersion: this.xmlVersion
          })) {
            throw new Error("Invalid notation name: \"".concat(notation, "\""));
          }
          allowedNotations.push(notation);

          // Skip '|' separator or exit loop
          if (xmlData[i] === "|") {
            i++; // Move past '|'
            i = skipWhitespace(xmlData, i); // Skip optional whitespace after '|'
          }
        }
        if (xmlData[i] !== ")") {
          throw new Error("Unterminated list of notations");
        }
        i++; // Move past ')'

        // Store the allowed notations as part of the attribute type
        attributeType += " (" + allowedNotations.join("|") + ")";
      } else {
        // Handle simple types (e.g., CDATA, ID, IDREF, etc.)
        var _startIndex3 = i;
        while (i < xmlData.length && !/\s/.test(xmlData[i])) {
          i++;
        }
        attributeType += xmlData.substring(_startIndex3, i);

        // Validate simple attribute type
        var validTypes = ["CDATA", "ID", "IDREF", "IDREFS", "ENTITY", "ENTITIES", "NMTOKEN", "NMTOKENS"];
        if (!this.suppressValidationErr && !validTypes.includes(attributeType.toUpperCase())) {
          throw new Error("Invalid attribute type: \"".concat(attributeType, "\""));
        }
      }

      // Skip whitespace after attribute type
      i = skipWhitespace(xmlData, i);

      // Read default value
      var defaultValue = "";
      if (xmlData.substring(i, i + 8).toUpperCase() === "#REQUIRED") {
        defaultValue = "#REQUIRED";
        i += 8;
      } else if (xmlData.substring(i, i + 7).toUpperCase() === "#IMPLIED") {
        defaultValue = "#IMPLIED";
        i += 7;
      } else {
        var _this$readIdentifierV9 = this.readIdentifierVal(xmlData, i, "ATTLIST");
        var _this$readIdentifierV0 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_this$readIdentifierV9, 2);
        i = _this$readIdentifierV0[0];
        defaultValue = _this$readIdentifierV0[1];
      }
      return {
        elementName: elementName,
        attributeName: attributeName,
        attributeType: attributeType,
        defaultValue: defaultValue,
        index: i
      };
    }
  }]);
}();

var skipWhitespace = function skipWhitespace(data, index) {
  while (index < data.length && /\s/.test(data[index])) {
    index++;
  }
  return index;
};
function hasSeq(data, seq, i) {
  for (var j = 0; j < seq.length; j++) {
    if (seq[j] !== data[i + j + 1]) return false;
  }
  return true;
}
function validateEntityName(name, xmlVersion) {
  if (Object(xml_naming__WEBPACK_IMPORTED_MODULE_3__["qName"])(name, {
    xmlVersion: xmlVersion
  })) return name;else throw new Error("Invalid entity name ".concat(name));
}

/***/ }),

/***/ "./node_modules/fast-xml-parser/src/xmlparser/OptionsBuilder.js":
/*!**********************************************************************!*\
  !*** ./node_modules/fast-xml-parser/src/xmlparser/OptionsBuilder.js ***!
  \**********************************************************************/
/*! exports provided: defaultOptions, buildOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultOptions", function() { return defaultOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildOptions", function() { return buildOptions; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util.js */ "./node_modules/fast-xml-parser/src/util.js");
/* harmony import */ var _nodable_entities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nodable/entities */ "./node_modules/@nodable/entities/src/index.js");



var defaultOnDangerousProperty = function defaultOnDangerousProperty(name) {
  if (_util_js__WEBPACK_IMPORTED_MODULE_1__["DANGEROUS_PROPERTY_NAMES"].includes(name)) {
    return "__" + name;
  }
  return name;
};
var defaultOptions = {
  preserveOrder: false,
  attributeNamePrefix: '@_',
  attributesGroupName: false,
  textNodeName: '#text',
  ignoreAttributes: true,
  removeNSPrefix: false,
  // remove NS from tag name or attribute name if true
  allowBooleanAttributes: false,
  //a tag can have attributes without any value
  //ignoreRootElement : false,
  parseTagValue: true,
  parseAttributeValue: false,
  trimValues: true,
  //Trim string values of tag and attributes
  cdataPropName: false,
  numberParseOptions: {
    hex: true,
    leadingZeros: true,
    eNotation: true,
    unicode: false
  },
  tagValueProcessor: function tagValueProcessor(tagName, val) {
    return val;
  },
  attributeValueProcessor: function attributeValueProcessor(attrName, val) {
    return val;
  },
  stopNodes: [],
  //nested tags will not be parsed even for errors
  alwaysCreateTextNode: false,
  isArray: function isArray() {
    return false;
  },
  commentPropName: false,
  unpairedTags: [],
  processEntities: true,
  htmlEntities: false,
  entityDecoder: null,
  ignoreDeclaration: false,
  ignorePiTags: false,
  transformTagName: false,
  transformAttributeName: false,
  updateTag: function updateTag(tagName, jPath, attrs) {
    return tagName;
  },
  // skipEmptyListItem: false
  captureMetaData: false,
  maxNestedTags: 100,
  strictReservedNames: true,
  jPath: true,
  // if true, pass jPath string to callbacks; if false, pass matcher instance
  onDangerousProperty: defaultOnDangerousProperty
};

/**
 * Validates that a property name is safe to use
 * @param {string} propertyName - The property name to validate
 * @param {string} optionName - The option field name (for error message)
 * @throws {Error} If property name is dangerous
 */
function validatePropertyName(propertyName, optionName) {
  if (typeof propertyName !== 'string') {
    return; // Only validate string property names
  }
  var normalized = propertyName.toLowerCase();
  if (_util_js__WEBPACK_IMPORTED_MODULE_1__["DANGEROUS_PROPERTY_NAMES"].some(function (dangerous) {
    return normalized === dangerous.toLowerCase();
  })) {
    throw new Error("[SECURITY] Invalid ".concat(optionName, ": \"").concat(propertyName, "\" is a reserved JavaScript keyword that could cause prototype pollution"));
  }
  if (_util_js__WEBPACK_IMPORTED_MODULE_1__["criticalProperties"].some(function (dangerous) {
    return normalized === dangerous.toLowerCase();
  })) {
    throw new Error("[SECURITY] Invalid ".concat(optionName, ": \"").concat(propertyName, "\" is a reserved JavaScript keyword that could cause prototype pollution"));
  }
}

/**
 * Normalizes processEntities option for backward compatibility
 * @param {boolean|object} value
 * @returns {object} Always returns normalized object
 */
function normalizeProcessEntities(value, htmlEntities) {
  // Boolean backward compatibility
  if (typeof value === 'boolean') {
    return {
      enabled: value,
      // true or false
      maxEntitySize: 10000,
      maxExpansionDepth: 10000,
      maxTotalExpansions: Infinity,
      maxExpandedLength: 100000,
      maxEntityCount: 1000,
      allowedTags: null,
      tagFilter: null,
      appliesTo: "all"
    };
  }

  // Object config - merge with defaults
  if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(value) === 'object' && value !== null) {
    var _value$maxEntitySize, _value$maxExpansionDe, _value$maxTotalExpans, _value$maxExpandedLen, _value$maxEntityCount, _value$allowedTags, _value$tagFilter, _value$appliesTo;
    return {
      enabled: value.enabled !== false,
      maxEntitySize: Math.max(1, (_value$maxEntitySize = value.maxEntitySize) !== null && _value$maxEntitySize !== void 0 ? _value$maxEntitySize : 10000),
      maxExpansionDepth: Math.max(1, (_value$maxExpansionDe = value.maxExpansionDepth) !== null && _value$maxExpansionDe !== void 0 ? _value$maxExpansionDe : 10000),
      maxTotalExpansions: Math.max(1, (_value$maxTotalExpans = value.maxTotalExpansions) !== null && _value$maxTotalExpans !== void 0 ? _value$maxTotalExpans : Infinity),
      maxExpandedLength: Math.max(1, (_value$maxExpandedLen = value.maxExpandedLength) !== null && _value$maxExpandedLen !== void 0 ? _value$maxExpandedLen : 100000),
      maxEntityCount: Math.max(1, (_value$maxEntityCount = value.maxEntityCount) !== null && _value$maxEntityCount !== void 0 ? _value$maxEntityCount : 1000),
      allowedTags: (_value$allowedTags = value.allowedTags) !== null && _value$allowedTags !== void 0 ? _value$allowedTags : null,
      tagFilter: (_value$tagFilter = value.tagFilter) !== null && _value$tagFilter !== void 0 ? _value$tagFilter : null,
      appliesTo: (_value$appliesTo = value.appliesTo) !== null && _value$appliesTo !== void 0 ? _value$appliesTo : "all"
    };
  }

  // Default to enabled with limits
  return normalizeProcessEntities(true);
}
var buildOptions = function buildOptions(options) {
  var built = Object.assign({}, defaultOptions, options);

  // Validate property names to prevent prototype pollution
  var propertyNameOptions = [{
    value: built.attributeNamePrefix,
    name: 'attributeNamePrefix'
  }, {
    value: built.attributesGroupName,
    name: 'attributesGroupName'
  }, {
    value: built.textNodeName,
    name: 'textNodeName'
  }, {
    value: built.cdataPropName,
    name: 'cdataPropName'
  }, {
    value: built.commentPropName,
    name: 'commentPropName'
  }];
  for (var _i = 0, _propertyNameOptions = propertyNameOptions; _i < _propertyNameOptions.length; _i++) {
    var _propertyNameOptions$ = _propertyNameOptions[_i],
      value = _propertyNameOptions$.value,
      name = _propertyNameOptions$.name;
    if (value) {
      validatePropertyName(value, name);
    }
  }
  if (built.onDangerousProperty === null) {
    built.onDangerousProperty = defaultOnDangerousProperty;
  }

  // Always normalize processEntities for backward compatibility and validation
  built.processEntities = normalizeProcessEntities(built.processEntities, built.htmlEntities);
  built.unpairedTagsSet = new Set(built.unpairedTags);
  // Convert old-style stopNodes for backward compatibility
  if (built.stopNodes && Array.isArray(built.stopNodes)) {
    built.stopNodes = built.stopNodes.map(function (node) {
      if (typeof node === 'string' && node.startsWith('*.')) {
        // Old syntax: *.tagname meant "tagname anywhere"
        // Convert to new syntax: ..tagname
        return '..' + node.substring(2);
      }
      return node;
    });
  }
  //console.debug(built.processEntities)
  return built;
};

/***/ }),

/***/ "./node_modules/fast-xml-parser/src/xmlparser/OrderedObjParser.js":
/*!************************************************************************!*\
  !*** ./node_modules/fast-xml-parser/src/xmlparser/OrderedObjParser.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OrderedObjParser; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util.js */ "./node_modules/fast-xml-parser/src/util.js");
/* harmony import */ var _xmlNode_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./xmlNode.js */ "./node_modules/fast-xml-parser/src/xmlparser/xmlNode.js");
/* harmony import */ var _DocTypeReader_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DocTypeReader.js */ "./node_modules/fast-xml-parser/src/xmlparser/DocTypeReader.js");
/* harmony import */ var strnum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! strnum */ "./node_modules/strnum/strnum.js");
/* harmony import */ var _ignoreAttributes_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ignoreAttributes.js */ "./node_modules/fast-xml-parser/src/ignoreAttributes.js");
/* harmony import */ var path_expression_matcher__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! path-expression-matcher */ "./node_modules/path-expression-matcher/src/index.js");
/* harmony import */ var _nodable_entities__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nodable/entities */ "./node_modules/@nodable/entities/src/index.js");
/* harmony import */ var is_unsafe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! is-unsafe */ "./node_modules/is-unsafe/src/index.js");


///@ts-check




function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }










// const regx =
//   '<((!\\[CDATA\\[([\\s\\S]*?)(]]>))|((NAME:)?(NAME))([^>]*)>|((\\/)(NAME)\\s*>))([^<]*)'
//   .replace(/NAME/g, util.nameRegexp);

//const tagsRegx = new RegExp("<(\\/?[\\w:\\-\._]+)([^>]*)>(\\s*"+cdataRegx+")*([^<]+)?","g");
//const tagsRegx = new RegExp("<(\\/?)((\\w*:)?([\\w:\\-\._]+))([^>]*)>([^<]*)("+cdataRegx+"([^<]*))*([^<]+)?","g");

// Helper functions for attribute and namespace handling

/**
 * Extract raw attributes (without prefix) from prefixed attribute map
 * @param {object} prefixedAttrs - Attributes with prefix from buildAttributesMap
 * @param {object} options - Parser options containing attributeNamePrefix
 * @returns {object} Raw attributes for matcher
 */
function extractRawAttributes(prefixedAttrs, options) {
  if (!prefixedAttrs) return {};

  // Handle attributesGroupName option
  var attrs = options.attributesGroupName ? prefixedAttrs[options.attributesGroupName] : prefixedAttrs;
  if (!attrs) return {};
  var rawAttrs = {};
  for (var key in attrs) {
    // Remove the attribute prefix to get raw name
    if (key.startsWith(options.attributeNamePrefix)) {
      var rawName = key.substring(options.attributeNamePrefix.length);
      rawAttrs[rawName] = attrs[key];
    } else {
      // Attribute without prefix (shouldn't normally happen, but be safe)
      rawAttrs[key] = attrs[key];
    }
  }
  return rawAttrs;
}

/**
 * Extract namespace from raw tag name
 * @param {string} rawTagName - Tag name possibly with namespace (e.g., "soap:Envelope")
 * @returns {string|undefined} Namespace or undefined
 */
function extractNamespace(rawTagName) {
  if (!rawTagName || typeof rawTagName !== 'string') return undefined;
  var colonIndex = rawTagName.indexOf(':');
  if (colonIndex !== -1 && colonIndex > 0) {
    var ns = rawTagName.substring(0, colonIndex);
    // Don't treat xmlns as a namespace
    if (ns !== 'xmlns') {
      return ns;
    }
  }
  return undefined;
}
var OrderedObjParser = /*#__PURE__*/_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(function OrderedObjParser(options, externalEntities) {
  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, OrderedObjParser);
  this.options = options;
  this.currentNode = null;
  this.tagsNodeStack = [];
  this.parseXml = parseXml;
  this.parseTextData = parseTextData;
  this.resolveNameSpace = resolveNameSpace;
  this.buildAttributesMap = buildAttributesMap;
  this.isItStopNode = isItStopNode;
  this.replaceEntitiesValue = replaceEntitiesValue;
  this.readStopNodeData = readStopNodeData;
  this.saveTextToParentTag = saveTextToParentTag;
  this.addChild = addChild;
  this.ignoreAttributesFn = Object(_ignoreAttributes_js__WEBPACK_IMPORTED_MODULE_8__["default"])(this.options.ignoreAttributes);
  this.entityExpansionCount = 0;
  this.currentExpandedLength = 0;
  var namedEntities = _objectSpread({}, _nodable_entities__WEBPACK_IMPORTED_MODULE_10__["XML"]);
  if (this.options.entityDecoder) {
    this.entityDecoder = this.options.entityDecoder;
  } else {
    if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(this.options.htmlEntities) === "object") namedEntities = this.options.htmlEntities;else if (this.options.htmlEntities === true) namedEntities = _objectSpread(_objectSpread({}, _nodable_entities__WEBPACK_IMPORTED_MODULE_10__["COMMON_HTML"]), _nodable_entities__WEBPACK_IMPORTED_MODULE_10__["CURRENCY"]);
    this.entityDecoder = new _nodable_entities__WEBPACK_IMPORTED_MODULE_10__["EntityDecoder"]({
      namedEntities: _objectSpread(_objectSpread({}, namedEntities), externalEntities),
      numericAllowed: this.options.htmlEntities,
      limit: {
        maxTotalExpansions: this.options.processEntities.maxTotalExpansions,
        maxExpandedLength: this.options.processEntities.maxExpandedLength,
        applyLimitsTo: this.options.processEntities.appliesTo
      },
      // onExternalEntity: (name, value) => isUnsafe(value) ? 'block' : 'allow',
      onInputEntity: function onInputEntity(name, value) {
        return (
          //TODO: VALID_CONTEXTS.HTML should be set only if this.options.htmlEntities
          Object(is_unsafe__WEBPACK_IMPORTED_MODULE_11__["isUnsafe"])(value, [is_unsafe__WEBPACK_IMPORTED_MODULE_11__["VALID_CONTEXTS"].HTML, is_unsafe__WEBPACK_IMPORTED_MODULE_11__["VALID_CONTEXTS"].XML]) ? _nodable_entities__WEBPACK_IMPORTED_MODULE_10__["ENTITY_ACTION"].BLOCK : _nodable_entities__WEBPACK_IMPORTED_MODULE_10__["ENTITY_ACTION"].ALLOW
        );
      }

      //postCheck: resolved => resolved
    });
  }

  // Initialize path matcher for path-expression-matcher
  this.matcher = new path_expression_matcher__WEBPACK_IMPORTED_MODULE_9__["Matcher"]();
  this.readonlyMatcher = this.matcher.readOnly();

  // Flag to track if current node is a stop node (optimization)
  this.isCurrentNodeStopNode = false;

  // Pre-compile stopNodes expressions
  this.stopNodeExpressionsSet = new path_expression_matcher__WEBPACK_IMPORTED_MODULE_9__["ExpressionSet"]();
  var stopNodesOpts = this.options.stopNodes;
  if (stopNodesOpts && stopNodesOpts.length > 0) {
    for (var i = 0; i < stopNodesOpts.length; i++) {
      var stopNodeExp = stopNodesOpts[i];
      if (typeof stopNodeExp === 'string') {
        // Convert string to Expression object
        this.stopNodeExpressionsSet.add(new path_expression_matcher__WEBPACK_IMPORTED_MODULE_9__["Expression"](stopNodeExp));
      } else if (stopNodeExp instanceof path_expression_matcher__WEBPACK_IMPORTED_MODULE_9__["Expression"]) {
        // Already an Expression object
        this.stopNodeExpressionsSet.add(stopNodeExp);
      }
    }
    this.stopNodeExpressionsSet.seal();
  }
});
/**
 * @param {string} val
 * @param {string} tagName
 * @param {string|Matcher} jPath - jPath string or Matcher instance based on options.jPath
 * @param {boolean} dontTrim
 * @param {boolean} hasAttributes
 * @param {boolean} isLeafNode
 * @param {boolean} escapeEntities
 */

function parseTextData(val, tagName, jPath, dontTrim, hasAttributes, isLeafNode, escapeEntities) {
  var options = this.options;
  if (val !== undefined) {
    if (options.trimValues && !dontTrim) {
      val = val.trim();
    }
    if (val.length > 0) {
      if (!escapeEntities) val = this.replaceEntitiesValue(val, tagName, jPath);

      // Pass jPath string or matcher based on options.jPath setting
      var jPathOrMatcher = options.jPath ? jPath.toString() : jPath;
      var newval = options.tagValueProcessor(tagName, val, jPathOrMatcher, hasAttributes, isLeafNode);
      if (newval === null || newval === undefined) {
        //don't parse
        return val;
      } else if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(newval) !== _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(val) || newval !== val) {
        //overwrite
        return newval;
      } else if (options.trimValues) {
        return parseValue(val, options.parseTagValue, options.numberParseOptions);
      } else {
        var trimmedVal = val.trim();
        if (trimmedVal === val) {
          return parseValue(val, options.parseTagValue, options.numberParseOptions);
        } else {
          return val;
        }
      }
    }
  }
}
function resolveNameSpace(tagname) {
  if (this.options.removeNSPrefix) {
    var tags = tagname.split(':');
    var prefix = tagname.charAt(0) === '/' ? '/' : '';
    if (tags[0] === 'xmlns') {
      return '';
    }
    if (tags.length === 2) {
      tagname = prefix + tags[1];
    }
  }
  return tagname;
}

//TODO: change regex to capture NS
//const attrsRegx = new RegExp("([\\w\\-\\.\\:]+)\\s*=\\s*(['\"])((.|\n)*?)\\2","gm");
var attrsRegx = new RegExp('([^\\s=]+)\\s*(=\\s*([\'"])([\\s\\S]*?)\\3)?', 'gm');
function buildAttributesMap(attrStr, jPath, tagName) {
  var force = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var options = this.options;
  if (force === true || options.ignoreAttributes !== true && typeof attrStr === 'string') {
    // attrStr = attrStr.replace(/\r?\n/g, ' ');
    //attrStr = attrStr || attrStr.trim();

    var matches = Object(_util_js__WEBPACK_IMPORTED_MODULE_4__["getAllMatches"])(attrStr, attrsRegx);
    var len = matches.length; //don't make it inline
    var attrs = {};

    // Pre-process values once: trim + entity replacement
    // Reused in both matcher update and second pass
    var processedVals = new Array(len);
    var hasRawAttrs = false;
    var rawAttrsForMatcher = {};
    for (var i = 0; i < len; i++) {
      var attrName = this.resolveNameSpace(matches[i][1]);
      var oldVal = matches[i][4];
      if (attrName.length && oldVal !== undefined) {
        var val = oldVal;
        if (options.trimValues) val = val.trim();
        val = this.replaceEntitiesValue(val, tagName, this.readonlyMatcher);
        processedVals[i] = val;
        rawAttrsForMatcher[attrName] = val;
        hasRawAttrs = true;
      }
    }

    // Update matcher ONCE before second pass, if applicable
    if (hasRawAttrs && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(jPath) === 'object' && jPath.updateCurrent) {
      jPath.updateCurrent(rawAttrsForMatcher);
    }

    // Hoist toString() once — path doesn't change during attribute processing
    var jPathStr = options.jPath ? jPath.toString() : this.readonlyMatcher;

    // Second pass: apply processors, build final attrs
    var hasAttrs = false;
    for (var _i = 0; _i < len; _i++) {
      var _attrName = this.resolveNameSpace(matches[_i][1]);
      if (this.ignoreAttributesFn(_attrName, jPathStr)) continue;
      var aName = options.attributeNamePrefix + _attrName;
      if (_attrName.length) {
        if (options.transformAttributeName) {
          aName = options.transformAttributeName(aName);
        }
        aName = sanitizeName(aName, options);
        if (matches[_i][4] !== undefined) {
          // Reuse already-processed value — no double entity replacement
          var _oldVal = processedVals[_i];
          var newVal = options.attributeValueProcessor(_attrName, _oldVal, jPathStr);
          if (newVal === null || newVal === undefined) {
            attrs[aName] = _oldVal;
          } else if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(newVal) !== _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(_oldVal) || newVal !== _oldVal) {
            attrs[aName] = newVal;
          } else {
            attrs[aName] = parseValue(_oldVal, options.parseAttributeValue, options.numberParseOptions);
          }
          hasAttrs = true;
        } else if (options.allowBooleanAttributes) {
          attrs[aName] = true;
          hasAttrs = true;
        }
      }
    }
    if (!hasAttrs) return;
    if (options.attributesGroupName && !options.preserveOrder) {
      var attrCollection = {};
      attrCollection[options.attributesGroupName] = attrs;
      return attrCollection;
    }
    return attrs;
  }
}
var parseXml = function parseXml(xmlData) {
  xmlData = xmlData.replace(/\r\n?/g, "\n"); //TODO: remove this line
  var xmlObj = new _xmlNode_js__WEBPACK_IMPORTED_MODULE_5__["default"]('!xml');
  var currentNode = xmlObj;
  var textData = "";

  // Reset matcher for new document
  this.matcher.reset();
  this.entityDecoder.reset();

  // Reset entity expansion counters for this document
  this.entityExpansionCount = 0;
  this.currentExpandedLength = 0;
  var options = this.options;
  var docTypeReader = new _DocTypeReader_js__WEBPACK_IMPORTED_MODULE_6__["default"](options.processEntities);
  var xmlLen = xmlData.length;
  for (var i = 0; i < xmlLen; i++) {
    //for each char in XML data
    var ch = xmlData[i];
    if (ch === '<') {
      // const nextIndex = i+1;
      // const _2ndChar = xmlData[nextIndex];
      var c1 = xmlData.charCodeAt(i + 1);
      if (c1 === 47) {
        //Closing Tag '/'
        var closeIndex = findClosingIndex(xmlData, ">", i, "Closing Tag is not closed.");
        var tagName = xmlData.substring(i + 2, closeIndex).trim();
        if (options.removeNSPrefix) {
          var colonIndex = tagName.indexOf(":");
          if (colonIndex !== -1) {
            tagName = tagName.substr(colonIndex + 1);
          }
        }
        tagName = transformTagName(options.transformTagName, tagName, "", options).tagName;
        if (currentNode) {
          textData = this.saveTextToParentTag(textData, currentNode, this.readonlyMatcher);
        }

        //check if last tag of nested tag was unpaired tag
        var lastTagName = this.matcher.getCurrentTag();
        if (tagName && options.unpairedTagsSet.has(tagName)) {
          throw new Error("Unpaired tag can not be used as closing tag: </".concat(tagName, ">"));
        }
        if (lastTagName && options.unpairedTagsSet.has(lastTagName)) {
          // Pop the unpaired tag
          this.matcher.pop();
          this.tagsNodeStack.pop();
        }
        // Pop the closing tag
        this.matcher.pop();
        this.isCurrentNodeStopNode = false; // Reset flag when closing tag

        currentNode = this.tagsNodeStack.pop(); //avoid recursion, set the parent tag scope
        textData = "";
        i = closeIndex;
      } else if (c1 === 63) {
        //'?'

        var tagData = readTagExp(xmlData, i, false, "?>");
        if (!tagData) throw new Error("Pi Tag is not closed.");
        textData = this.saveTextToParentTag(textData, currentNode, this.readonlyMatcher);
        var attsMap = this.buildAttributesMap(tagData.tagExp, this.matcher, tagData.tagName, true);
        if (attsMap) {
          var ver = attsMap[this.options.attributeNamePrefix + "version"];
          this.entityDecoder.setXmlVersion(Number(ver) || 1.0);
          docTypeReader.setXmlVersion(Number(ver) || 1.0);
        }
        if (options.ignoreDeclaration && tagData.tagName === "?xml" || options.ignorePiTags) {
          //do nothing
        } else {
          var childNode = new _xmlNode_js__WEBPACK_IMPORTED_MODULE_5__["default"](tagData.tagName);
          childNode.add(options.textNodeName, "");
          if (tagData.tagName !== tagData.tagExp && tagData.attrExpPresent && options.ignoreAttributes !== true) {
            childNode[":@"] = attsMap;
          }
          this.addChild(currentNode, childNode, this.readonlyMatcher, i);
        }
        i = tagData.closeIndex + 1;
      } else if (c1 === 33 && xmlData.charCodeAt(i + 2) === 45 && xmlData.charCodeAt(i + 3) === 45) {
        //'!--'
        var endIndex = findClosingIndex(xmlData, "-->", i + 4, "Comment is not closed.");
        if (options.commentPropName) {
          var comment = xmlData.substring(i + 4, endIndex - 2);
          textData = this.saveTextToParentTag(textData, currentNode, this.readonlyMatcher);
          currentNode.add(options.commentPropName, [_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, options.textNodeName, comment)]);
        }
        i = endIndex;
      } else if (c1 === 33 && xmlData.charCodeAt(i + 2) === 68) {
        //'!D'
        var result = docTypeReader.readDocType(xmlData, i);
        this.entityDecoder.addInputEntities(result.entities);
        i = result.i;
      } else if (c1 === 33 && xmlData.charCodeAt(i + 2) === 91) {
        // '!['
        var _closeIndex = findClosingIndex(xmlData, "]]>", i, "CDATA is not closed.") - 2;
        var tagExp = xmlData.substring(i + 9, _closeIndex);
        textData = this.saveTextToParentTag(textData, currentNode, this.readonlyMatcher);
        var val = this.parseTextData(tagExp, currentNode.tagname, this.readonlyMatcher, true, false, true, true);
        if (val == undefined) val = "";

        //cdata should be set even if it is 0 length string
        if (options.cdataPropName) {
          currentNode.add(options.cdataPropName, [_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, options.textNodeName, tagExp)]);
        } else {
          currentNode.add(options.textNodeName, val);
        }
        i = _closeIndex + 2;
      } else {
        //Opening tag
        var _result = readTagExp(xmlData, i, options.removeNSPrefix);

        // Safety check: readTagExp can return undefined
        if (!_result) {
          // Log context for debugging
          var context = xmlData.substring(Math.max(0, i - 50), Math.min(xmlLen, i + 50));
          throw new Error("readTagExp returned undefined at position ".concat(i, ". Context: \"").concat(context, "\""));
        }
        var _tagName = _result.tagName;
        var rawTagName = _result.rawTagName;
        var _tagExp = _result.tagExp;
        var attrExpPresent = _result.attrExpPresent;
        var _closeIndex2 = _result.closeIndex;
        var _transformTagName = transformTagName(options.transformTagName, _tagName, _tagExp, options);
        _tagName = _transformTagName.tagName;
        _tagExp = _transformTagName.tagExp;
        if (options.strictReservedNames && (_tagName === options.commentPropName || _tagName === options.cdataPropName || _tagName === options.textNodeName || _tagName === options.attributesGroupName)) {
          throw new Error("Invalid tag name: ".concat(_tagName));
        }

        //save text as child node
        if (currentNode && textData) {
          if (currentNode.tagname !== '!xml') {
            //when nested tag is found
            textData = this.saveTextToParentTag(textData, currentNode, this.readonlyMatcher, false);
          }
        }

        //check if last tag was unpaired tag
        var lastTag = currentNode;
        if (lastTag && options.unpairedTagsSet.has(lastTag.tagname)) {
          currentNode = this.tagsNodeStack.pop();
          this.matcher.pop();
        }

        // Clean up self-closing syntax BEFORE processing attributes
        // This is where tagExp gets the trailing / removed
        var isSelfClosing = false;
        if (_tagExp.length > 0 && _tagExp.lastIndexOf("/") === _tagExp.length - 1) {
          isSelfClosing = true;
          if (_tagName[_tagName.length - 1] === "/") {
            _tagName = _tagName.substr(0, _tagName.length - 1);
            _tagExp = _tagName;
          } else {
            _tagExp = _tagExp.substr(0, _tagExp.length - 1);
          }

          // Re-check attrExpPresent after cleaning
          attrExpPresent = _tagName !== _tagExp;
        }

        // Now process attributes with CLEAN tagExp (no trailing /)
        var prefixedAttrs = null;
        var rawAttrs = {};
        var namespace = undefined;

        // Extract namespace from rawTagName
        namespace = extractNamespace(rawTagName);

        // Push tag to matcher FIRST (with empty attrs for now) so callbacks see correct path
        if (_tagName !== xmlObj.tagname) {
          this.matcher.push(_tagName, {}, namespace);
        }

        // Now build attributes - callbacks will see correct matcher state
        if (_tagName !== _tagExp && attrExpPresent) {
          // Build attributes (returns prefixed attributes for the tree)
          // Note: buildAttributesMap now internally updates the matcher with raw attributes
          prefixedAttrs = this.buildAttributesMap(_tagExp, this.matcher, _tagName);
          if (prefixedAttrs) {
            // Extract raw attributes (without prefix) for our use
            //TODO: seems a performance overhead
            rawAttrs = extractRawAttributes(prefixedAttrs, options);
          }
        }

        // Now check if this is a stop node (after attributes are set)
        if (_tagName !== xmlObj.tagname) {
          this.isCurrentNodeStopNode = this.isItStopNode();
        }
        var startIndex = i;
        if (this.isCurrentNodeStopNode) {
          var tagContent = "";

          // For self-closing tags, content is empty
          if (isSelfClosing) {
            i = _result.closeIndex;
          }
          //unpaired tag
          else if (options.unpairedTagsSet.has(_tagName)) {
            i = _result.closeIndex;
          }
          //normal tag
          else {
            //read until closing tag is found
            var _result2 = this.readStopNodeData(xmlData, rawTagName, _closeIndex2 + 1);
            if (!_result2) throw new Error("Unexpected end of ".concat(rawTagName));
            i = _result2.i;
            tagContent = _result2.tagContent;
          }
          var _childNode = new _xmlNode_js__WEBPACK_IMPORTED_MODULE_5__["default"](_tagName);
          if (prefixedAttrs) {
            _childNode[":@"] = prefixedAttrs;
          }

          // For stop nodes, store raw content as-is without any processing
          _childNode.add(options.textNodeName, tagContent);
          this.matcher.pop(); // Pop the stop node tag
          this.isCurrentNodeStopNode = false; // Reset flag

          this.addChild(currentNode, _childNode, this.readonlyMatcher, startIndex);
        } else {
          //selfClosing tag
          if (isSelfClosing) {
            var _transformTagName2 = transformTagName(options.transformTagName, _tagName, _tagExp, options);
            _tagName = _transformTagName2.tagName;
            _tagExp = _transformTagName2.tagExp;
            var _childNode2 = new _xmlNode_js__WEBPACK_IMPORTED_MODULE_5__["default"](_tagName);
            if (prefixedAttrs) {
              _childNode2[":@"] = prefixedAttrs;
            }
            this.addChild(currentNode, _childNode2, this.readonlyMatcher, startIndex);
            this.matcher.pop(); // Pop self-closing tag
            this.isCurrentNodeStopNode = false; // Reset flag
          } else if (options.unpairedTagsSet.has(_tagName)) {
            //unpaired tag
            var _childNode3 = new _xmlNode_js__WEBPACK_IMPORTED_MODULE_5__["default"](_tagName);
            if (prefixedAttrs) {
              _childNode3[":@"] = prefixedAttrs;
            }
            this.addChild(currentNode, _childNode3, this.readonlyMatcher, startIndex);
            this.matcher.pop(); // Pop unpaired tag
            this.isCurrentNodeStopNode = false; // Reset flag
            i = _result.closeIndex;
            // Continue to next iteration without changing currentNode
            continue;
          }
          //opening tag
          else {
            var _childNode4 = new _xmlNode_js__WEBPACK_IMPORTED_MODULE_5__["default"](_tagName);
            if (this.tagsNodeStack.length > options.maxNestedTags) {
              throw new Error("Maximum nested tags exceeded");
            }
            this.tagsNodeStack.push(currentNode);
            if (prefixedAttrs) {
              _childNode4[":@"] = prefixedAttrs;
            }
            this.addChild(currentNode, _childNode4, this.readonlyMatcher, startIndex);
            currentNode = _childNode4;
          }
          textData = "";
          i = _closeIndex2;
        }
      }
    } else {
      textData += xmlData[i];
    }
  }
  return xmlObj.child;
};
function addChild(currentNode, childNode, matcher, startIndex) {
  // unset startIndex if not requested
  if (!this.options.captureMetaData) startIndex = undefined;

  // Pass jPath string or matcher based on options.jPath setting
  var jPathOrMatcher = this.options.jPath ? matcher.toString() : matcher;
  var result = this.options.updateTag(childNode.tagname, jPathOrMatcher, childNode[":@"]);
  if (result === false) {
    //do nothing
  } else if (typeof result === "string") {
    childNode.tagname = result;
    currentNode.addChild(childNode, startIndex);
  } else {
    currentNode.addChild(childNode, startIndex);
  }
}

/**
 * @param {object} val - Entity object with regex and val properties
 * @param {string} tagName - Tag name
 * @param {string|Matcher} jPath - jPath string or Matcher instance based on options.jPath
 */
function replaceEntitiesValue(val, tagName, jPath) {
  var entityConfig = this.options.processEntities;
  if (!entityConfig || !entityConfig.enabled) {
    return val;
  }

  // Check if tag is allowed to contain entities
  if (entityConfig.allowedTags) {
    var jPathOrMatcher = this.options.jPath ? jPath.toString() : jPath;
    var allowed = Array.isArray(entityConfig.allowedTags) ? entityConfig.allowedTags.includes(tagName) : entityConfig.allowedTags(tagName, jPathOrMatcher);
    if (!allowed) {
      return val;
    }
  }

  // Apply custom tag filter if provided
  if (entityConfig.tagFilter) {
    var _jPathOrMatcher = this.options.jPath ? jPath.toString() : jPath;
    if (!entityConfig.tagFilter(tagName, _jPathOrMatcher)) {
      return val; // Skip based on custom filter
    }
  }
  return this.entityDecoder.decode(val);
}
function saveTextToParentTag(textData, parentNode, matcher, isLeafNode) {
  if (textData) {
    //store previously collected data as textNode
    if (isLeafNode === undefined) isLeafNode = parentNode.child.length === 0;
    textData = this.parseTextData(textData, parentNode.tagname, matcher, false, parentNode[":@"] ? Object.keys(parentNode[":@"]).length !== 0 : false, isLeafNode);
    if (textData !== undefined && textData !== "") parentNode.add(this.options.textNodeName, textData);
    textData = "";
  }
  return textData;
}

/**
 * @param {Array<Expression>} stopNodeExpressions - Array of compiled Expression objects
 * @param {Matcher} matcher - Current path matcher
 */
function isItStopNode() {
  if (this.stopNodeExpressionsSet.size === 0) return false;
  return this.matcher.matchesAny(this.stopNodeExpressionsSet);
}

/**
 * Returns the tag Expression and where it is ending handling single-double quotes situation
 * @param {string} xmlData
 * @param {number} i starting index
 * @returns
 */
function tagExpWithClosingIndex(xmlData, i) {
  var closingChar = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ">";
  //TODO: ignore boolean attributes in tag expression
  //TODO: if ignore attributes, dont read full attribute expression but the end. But read for xml declaration
  var attrBoundary = 0;
  var len = xmlData.length;
  var closeCode0 = closingChar.charCodeAt(0);
  var closeCode1 = closingChar.length > 1 ? closingChar.charCodeAt(1) : -1;
  var result = '';
  var segmentStart = i;
  for (var index = i; index < len; index++) {
    var code = xmlData.charCodeAt(index);
    if (attrBoundary) {
      if (code === attrBoundary) attrBoundary = 0;
    } else if (code === 34 || code === 39) {
      // " or '
      attrBoundary = code;
    } else if (code === closeCode0) {
      if (closeCode1 !== -1) {
        if (xmlData.charCodeAt(index + 1) === closeCode1) {
          result += xmlData.substring(segmentStart, index);
          return {
            data: result,
            index: index
          };
        }
      } else {
        result += xmlData.substring(segmentStart, index);
        return {
          data: result,
          index: index
        };
      }
    } else if (code === 9 && !attrBoundary) {
      // \t - only replace with space outside attribute values
      // Flush accumulated segment, add space, start new segment
      result += xmlData.substring(segmentStart, index) + ' ';
      segmentStart = index + 1;
    }
  }
}
function findClosingIndex(xmlData, str, i, errMsg) {
  var closingIndex = xmlData.indexOf(str, i);
  if (closingIndex === -1) {
    throw new Error(errMsg);
  } else {
    return closingIndex + str.length - 1;
  }
}
function findClosingChar(xmlData, char, i, errMsg) {
  var closingIndex = xmlData.indexOf(char, i);
  if (closingIndex === -1) throw new Error(errMsg);
  return closingIndex; // no offset needed
}
function readTagExp(xmlData, i, removeNSPrefix) {
  var closingChar = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ">";
  var result = tagExpWithClosingIndex(xmlData, i + 1, closingChar);
  if (!result) return;
  var tagExp = result.data;
  var closeIndex = result.index;
  var separatorIndex = tagExp.search(/\s/);
  var tagName = tagExp;
  var attrExpPresent = true;
  if (separatorIndex !== -1) {
    //separate tag name and attributes expression
    tagName = tagExp.substring(0, separatorIndex);
    tagExp = tagExp.substring(separatorIndex + 1).trimStart();
  }
  var rawTagName = tagName;
  if (removeNSPrefix) {
    var colonIndex = tagName.indexOf(":");
    if (colonIndex !== -1) {
      tagName = tagName.substr(colonIndex + 1);
      attrExpPresent = tagName !== result.data.substr(colonIndex + 1);
    }
  }
  return {
    tagName: tagName,
    tagExp: tagExp,
    closeIndex: closeIndex,
    attrExpPresent: attrExpPresent,
    rawTagName: rawTagName
  };
}
/**
 * find paired tag for a stop node
 * @param {string} xmlData
 * @param {string} tagName
 * @param {number} i
 */
function readStopNodeData(xmlData, tagName, i) {
  var startIndex = i;
  // Starting at 1 since we already have an open tag
  var openTagCount = 1;
  var xmllen = xmlData.length;
  for (; i < xmllen; i++) {
    if (xmlData[i] === "<") {
      var c1 = xmlData.charCodeAt(i + 1);
      if (c1 === 47) {
        //close tag '/'
        var closeIndex = findClosingChar(xmlData, ">", i, "".concat(tagName, " is not closed"));
        var closeTagName = xmlData.substring(i + 2, closeIndex).trim();
        if (closeTagName === tagName) {
          openTagCount--;
          if (openTagCount === 0) {
            return {
              tagContent: xmlData.substring(startIndex, i),
              i: closeIndex
            };
          }
        }
        i = closeIndex;
      } else if (c1 === 63) {
        //?
        var _closeIndex3 = findClosingIndex(xmlData, "?>", i + 1, "StopNode is not closed.");
        i = _closeIndex3;
      } else if (c1 === 33 && xmlData.charCodeAt(i + 2) === 45 && xmlData.charCodeAt(i + 3) === 45) {
        // '!--'
        var _closeIndex4 = findClosingIndex(xmlData, "-->", i + 3, "StopNode is not closed.");
        i = _closeIndex4;
      } else if (c1 === 33 && xmlData.charCodeAt(i + 2) === 91) {
        // '!['
        var _closeIndex5 = findClosingIndex(xmlData, "]]>", i, "StopNode is not closed.") - 2;
        i = _closeIndex5;
      } else {
        var tagData = readTagExp(xmlData, i, false);
        if (tagData) {
          var openTagName = tagData && tagData.tagName;
          if (openTagName === tagName && tagData.tagExp[tagData.tagExp.length - 1] !== "/") {
            openTagCount++;
          }
          i = tagData.closeIndex;
        }
      }
    }
  } //end for loop
}
function parseValue(val, shouldParse, options) {
  if (shouldParse && typeof val === 'string') {
    //console.log(options)
    var newval = val.trim();
    if (newval === 'true') return true;else if (newval === 'false') return false;else return Object(strnum__WEBPACK_IMPORTED_MODULE_7__["default"])(val, options);
  } else {
    if (Object(_util_js__WEBPACK_IMPORTED_MODULE_4__["isExist"])(val)) {
      return val;
    } else {
      return '';
    }
  }
}
function fromCodePoint(str, base, prefix) {
  var codePoint = Number.parseInt(str, base);
  if (codePoint >= 0 && codePoint <= 0x10FFFF) {
    return String.fromCodePoint(codePoint);
  } else {
    return prefix + str + ";";
  }
}
function transformTagName(fn, tagName, tagExp, options) {
  if (fn) {
    var newTagName = fn(tagName);
    if (tagExp === tagName) {
      tagExp = newTagName;
    }
    tagName = newTagName;
  }
  tagName = sanitizeName(tagName, options);
  return {
    tagName: tagName,
    tagExp: tagExp
  };
}
function sanitizeName(name, options) {
  if (_util_js__WEBPACK_IMPORTED_MODULE_4__["criticalProperties"].includes(name)) {
    throw new Error("[SECURITY] Invalid name: \"".concat(name, "\" is a reserved JavaScript keyword that could cause prototype pollution"));
  } else if (_util_js__WEBPACK_IMPORTED_MODULE_4__["DANGEROUS_PROPERTY_NAMES"].includes(name)) {
    return options.onDangerousProperty(name);
  }
  return name;
}

/***/ }),

/***/ "./node_modules/fast-xml-parser/src/xmlparser/XMLParser.js":
/*!*****************************************************************!*\
  !*** ./node_modules/fast-xml-parser/src/xmlparser/XMLParser.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return XMLParser; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _OptionsBuilder_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OptionsBuilder.js */ "./node_modules/fast-xml-parser/src/xmlparser/OptionsBuilder.js");
/* harmony import */ var _OrderedObjParser_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./OrderedObjParser.js */ "./node_modules/fast-xml-parser/src/xmlparser/OrderedObjParser.js");
/* harmony import */ var _node2json_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node2json.js */ "./node_modules/fast-xml-parser/src/xmlparser/node2json.js");
/* harmony import */ var _validator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../validator.js */ "./node_modules/fast-xml-parser/src/validator.js");
/* harmony import */ var _xmlNode_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./xmlNode.js */ "./node_modules/fast-xml-parser/src/xmlparser/xmlNode.js");







var XMLParser = /*#__PURE__*/function () {
  function XMLParser(options) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, XMLParser);
    this.externalEntities = {};
    this.options = Object(_OptionsBuilder_js__WEBPACK_IMPORTED_MODULE_2__["buildOptions"])(options);
  }
  /**
   * Parse XML dats to JS object
   * @param {string|Uint8Array} xmlData
   * @param {boolean|Object} validationOption
   */
  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(XMLParser, [{
    key: "parse",
    value: function parse(xmlData, validationOption) {
      if (typeof xmlData !== "string" && xmlData.toString) {
        xmlData = xmlData.toString();
      } else if (typeof xmlData !== "string") {
        throw new Error("XML data is accepted in String or Bytes[] form.");
      }
      if (validationOption) {
        if (validationOption === true) validationOption = {}; //validate with default options

        var result = Object(_validator_js__WEBPACK_IMPORTED_MODULE_5__["validate"])(xmlData, validationOption);
        if (result !== true) {
          throw Error("".concat(result.err.msg, ":").concat(result.err.line, ":").concat(result.err.col));
        }
      }
      var orderedObjParser = new _OrderedObjParser_js__WEBPACK_IMPORTED_MODULE_3__["default"](this.options, this.externalEntities);
      // orderedObjParser.entityDecoder.setExternalEntities(this.externalEntities);
      var orderedResult = orderedObjParser.parseXml(xmlData);
      if (this.options.preserveOrder || orderedResult === undefined) return orderedResult;else return Object(_node2json_js__WEBPACK_IMPORTED_MODULE_4__["default"])(orderedResult, this.options, orderedObjParser.matcher, orderedObjParser.readonlyMatcher);
    }

    /**
     * Add Entity which is not by default supported by this library
     * @param {string} key
     * @param {string} value
     */
  }, {
    key: "addEntity",
    value: function addEntity(key, value) {
      if (value.indexOf("&") !== -1) {
        throw new Error("Entity value can't have '&'");
      } else if (key.indexOf("&") !== -1 || key.indexOf(";") !== -1) {
        throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
      } else if (value === "&") {
        throw new Error("An entity with value '&' is not permitted");
      } else {
        this.externalEntities[key] = value;
      }
    }

    /**
     * Returns a Symbol that can be used to access the metadata
     * property on a node.
     *
     * If Symbol is not available in the environment, an ordinary property is used
     * and the name of the property is here returned.
     *
     * The XMLMetaData property is only present when `captureMetaData`
     * is true in the options.
     */
  }], [{
    key: "getMetaDataSymbol",
    value: function getMetaDataSymbol() {
      return _xmlNode_js__WEBPACK_IMPORTED_MODULE_6__["default"].getMetaDataSymbol();
    }
  }]);
}();


/***/ }),

/***/ "./node_modules/fast-xml-parser/src/xmlparser/node2json.js":
/*!*****************************************************************!*\
  !*** ./node_modules/fast-xml-parser/src/xmlparser/node2json.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return prettify; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _xmlNode_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./xmlNode.js */ "./node_modules/fast-xml-parser/src/xmlparser/xmlNode.js");
/* harmony import */ var path_expression_matcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path-expression-matcher */ "./node_modules/path-expression-matcher/src/index.js");





var METADATA_SYMBOL = _xmlNode_js__WEBPACK_IMPORTED_MODULE_1__["default"].getMetaDataSymbol();

/**
 * Helper function to strip attribute prefix from attribute map
 * @param {object} attrs - Attributes with prefix (e.g., {"@_class": "code"})
 * @param {string} prefix - Attribute prefix to remove (e.g., "@_")
 * @returns {object} Attributes without prefix (e.g., {"class": "code"})
 */
function stripAttributePrefix(attrs, prefix) {
  if (!attrs || _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(attrs) !== 'object') return {};
  if (!prefix) return attrs;
  var rawAttrs = {};
  for (var key in attrs) {
    if (key.startsWith(prefix)) {
      var rawName = key.substring(prefix.length);
      rawAttrs[rawName] = attrs[key];
    } else {
      // Attribute without prefix (shouldn't normally happen, but be safe)
      rawAttrs[key] = attrs[key];
    }
  }
  return rawAttrs;
}

/**
 *
 * @param {array} node
 * @param {any} options
 * @param {Matcher} matcher - Path matcher instance
 * @returns
 */
function prettify(node, options, matcher, readonlyMatcher) {
  return compress(node, options, matcher, readonlyMatcher);
}

/**
 * @param {array} arr
 * @param {object} options
 * @param {Matcher} matcher - Path matcher instance
 * @returns object
 */
function compress(arr, options, matcher, readonlyMatcher) {
  var text;
  var compressedObj = {}; //This is intended to be a plain object
  for (var i = 0; i < arr.length; i++) {
    var tagObj = arr[i];
    var property = propName(tagObj);

    // Push current property to matcher WITH RAW ATTRIBUTES (no prefix)
    if (property !== undefined && property !== options.textNodeName) {
      var rawAttrs = stripAttributePrefix(tagObj[":@"] || {}, options.attributeNamePrefix);
      matcher.push(property, rawAttrs);
    }
    if (property === options.textNodeName) {
      if (text === undefined) text = tagObj[property];else text += "" + tagObj[property];
    } else if (property === undefined) {
      continue;
    } else if (tagObj[property]) {
      var val = compress(tagObj[property], options, matcher, readonlyMatcher);
      var isLeaf = isLeafTag(val, options);
      if (Object.keys(val).length === 0 && options.alwaysCreateTextNode) {
        val[options.textNodeName] = "";
      }
      if (tagObj[":@"]) {
        assignAttributes(val, tagObj[":@"], readonlyMatcher, options);
      } else if (Object.keys(val).length === 1 && val[options.textNodeName] !== undefined && !options.alwaysCreateTextNode) {
        val = val[options.textNodeName];
      } else if (Object.keys(val).length === 0) {
        if (options.alwaysCreateTextNode) val[options.textNodeName] = "";else val = "";
      }
      if (tagObj[METADATA_SYMBOL] !== undefined && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(val) === "object" && val !== null) {
        val[METADATA_SYMBOL] = tagObj[METADATA_SYMBOL]; // copy over metadata
      }
      if (compressedObj[property] !== undefined && Object.prototype.hasOwnProperty.call(compressedObj, property)) {
        if (!Array.isArray(compressedObj[property])) {
          compressedObj[property] = [compressedObj[property]];
        }
        compressedObj[property].push(val);
      } else {
        //TODO: if a node is not an array, then check if it should be an array
        //also determine if it is a leaf node

        // Pass jPath string or readonlyMatcher based on options.jPath setting
        var jPathOrMatcher = options.jPath ? readonlyMatcher.toString() : readonlyMatcher;
        if (options.isArray(property, jPathOrMatcher, isLeaf)) {
          compressedObj[property] = [val];
        } else {
          compressedObj[property] = val;
        }
      }

      // Pop property from matcher after processing
      if (property !== undefined && property !== options.textNodeName) {
        matcher.pop();
      }
    }
  }
  // if(text && text.length > 0) compressedObj[options.textNodeName] = text;
  if (typeof text === "string") {
    if (text.length > 0) compressedObj[options.textNodeName] = text;
  } else if (text !== undefined) compressedObj[options.textNodeName] = text;
  return compressedObj;
}
function propName(obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (key !== ":@") return key;
  }
}
function assignAttributes(obj, attrMap, readonlyMatcher, options) {
  if (attrMap) {
    var keys = Object.keys(attrMap);
    var len = keys.length; //don't make it inline
    for (var i = 0; i < len; i++) {
      var atrrName = keys[i]; // This is the PREFIXED name (e.g., "@_class")

      // Strip prefix for matcher path (for isArray callback)
      var rawAttrName = atrrName.startsWith(options.attributeNamePrefix) ? atrrName.substring(options.attributeNamePrefix.length) : atrrName;

      // For attributes, we need to create a temporary path
      // Pass jPath string or matcher based on options.jPath setting
      var jPathOrMatcher = options.jPath ? readonlyMatcher.toString() + "." + rawAttrName : readonlyMatcher;
      if (options.isArray(atrrName, jPathOrMatcher, true, true)) {
        obj[atrrName] = [attrMap[atrrName]];
      } else {
        obj[atrrName] = attrMap[atrrName];
      }
    }
  }
}
function isLeafTag(obj, options) {
  var textNodeName = options.textNodeName;
  var propCount = Object.keys(obj).length;
  if (propCount === 0) {
    return true;
  }
  if (propCount === 1 && (obj[textNodeName] || typeof obj[textNodeName] === "boolean" || obj[textNodeName] === 0)) {
    return true;
  }
  return false;
}

/***/ }),

/***/ "./node_modules/fast-xml-parser/src/xmlparser/xmlNode.js":
/*!***************************************************************!*\
  !*** ./node_modules/fast-xml-parser/src/xmlparser/xmlNode.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return XmlNode; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);





var METADATA_SYMBOL;
if (typeof Symbol !== "function") {
  METADATA_SYMBOL = "@@xmlMetadata";
} else {
  METADATA_SYMBOL = Symbol("XML Node Metadata");
}
var XmlNode = /*#__PURE__*/function () {
  function XmlNode(tagname) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, XmlNode);
    this.tagname = tagname;
    this.child = []; //nested tags, text, cdata, comments in order
    this[":@"] = Object.create(null); //attributes map
  }
  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(XmlNode, [{
    key: "add",
    value: function add(key, val) {
      // this.child.push( {name : key, val: val, isCdata: isCdata });
      if (key === "__proto__") key = "#__proto__";
      this.child.push(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, key, val));
    }
  }, {
    key: "addChild",
    value: function addChild(node, startIndex) {
      if (node.tagname === "__proto__") node.tagname = "#__proto__";
      if (node[":@"] && Object.keys(node[":@"]).length > 0) {
        this.child.push(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, node.tagname, node.child), ":@", node[":@"]));
      } else {
        this.child.push(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, node.tagname, node.child));
      }
      // if requested, add the startIndex
      if (startIndex !== undefined) {
        // Note: for now we just overwrite the metadata. If we had more complex metadata,
        // we might need to do an object append here:  metadata = { ...metadata, startIndex }
        this.child[this.child.length - 1][METADATA_SYMBOL] = {
          startIndex: startIndex
        };
      }
    }
    /** symbol used for metadata */
  }], [{
    key: "getMetaDataSymbol",
    value: function getMetaDataSymbol() {
      return METADATA_SYMBOL;
    }
  }]);
}();


/***/ }),

/***/ "./node_modules/is-unsafe/src/contexts/html.js":
/*!*****************************************************!*\
  !*** ./node_modules/is-unsafe/src/contexts/html.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * HTML context patterns.
 *
 * Detects XSS vectors that are dangerous when a string ends up rendered as HTML.
 * All patterns use bounded quantifiers to ensure linear-time matching (ReDoS-safe).
 *
 * Each entry is { pattern: RegExp, id: string, description: string }
 * so callers can inspect which rule fired if they need to.
 */

const HTML_PATTERNS = [
  {
    id: 'html-script-open',
    description: '<script opening tag',
    pattern: /<script[\s>/]/i,
  },
  {
    id: 'html-script-close',
    description: '</script closing tag',
    pattern: /<\/script[\s>]/i,
  },
  {
    id: 'html-javascript-protocol',
    description: 'javascript: URI scheme (with optional whitespace/encoding)',
    // Handles j&#x61;vascript:, j\u0061vascript:, and whitespace variants
    pattern: /j[\t\n\r ]*a[\t\n\r ]*v[\t\n\r ]*a[\t\n\r ]*s[\t\n\r ]*c[\t\n\r ]*r[\t\n\r ]*i[\t\n\r ]*p[\t\n\r ]*t[\t\n\r ]*:/i,
  },
  {
    id: 'html-vbscript-protocol',
    description: 'vbscript: URI scheme',
    pattern: /vbscript[\t\n\r ]*:/i,
  },
  {
    id: 'html-data-html',
    description: 'data:text/html URI — can execute scripts in browsers',
    pattern: /data[\t\n\r ]*:[\t\n\r ]*text\/html/i,
  },
  {
    id: 'html-data-xhtml',
    description: 'data:application/xhtml+xml URI',
    pattern: /data[\t\n\r ]*:[\t\n\r ]*application\/xhtml/i,
  },
  {
    id: 'html-data-svg',
    description: 'data:image/svg+xml URI — can execute scripts',
    pattern: /data[\t\n\r ]*:[\t\n\r ]*image\/svg\+xml/i,
  },
  {
    id: 'html-inline-event-handler',
    description: 'Inline event handler attributes: onclick=, onerror=, onload=, etc.',
    // \bon ensures we match a word boundary so "phonetic=" is not caught
    pattern: /\bon\w{1,30}\s*=/i,
  },
  {
    id: 'html-entity-obfuscated-script',
    description: 'HTML-entity-encoded <script (e.g. &#x3C;script or &lt;script)',
    // Entities include optional trailing semicolon: &#x3C; or &#x3C (both valid in HTML5)
    pattern: /(?:&#x0*3[Cc];?|&#0*60;?|&lt;)\s*script/i,
  },
  {
    id: 'html-entity-obfuscated-javascript',
    description: 'HTML-entity-encoded javascript: (partial — catches common &#106; or &#x6a; for "j")',
    pattern: /(?:&#x0*6[Aa];?|&#0*106;?)\s*(?:&#x0*61;?|a)[\s\S]{0,80}script\s*:/i,
  },
  {
    id: 'html-style-expression',
    description: 'CSS expression() — IE-era code execution in style attributes',
    pattern: /style[\s\S]{0,20}expression\s*\(/i,
  },
  {
    id: 'html-object-embed',
    description: '<object or <embed tags that can load active content',
    pattern: /<(?:object|embed)[\s>/]/i,
  },
  {
    id: 'html-base-tag',
    description: '<base href= — can hijack all relative URLs on a page',
    pattern: /<base[\s>]/i,
  },
  {
    id: 'html-meta-refresh',
    description: '<meta http-equiv="refresh" — can redirect users',
    pattern: /<meta[\s\S]{0,40}http-equiv[\s\S]{0,20}refresh/i,
  },
  {
    id: 'html-srcdoc',
    description: 'srcdoc= attribute on iframes — embeds HTML that can run scripts',
    pattern: /srcdoc\s*=/i,
  },
  {
    id: 'html-iframe',
    description: '<iframe tag',
    pattern: /<iframe[\s>/]/i,
  },
  {
    id: 'html-form',
    description: '<form tag — can be used for phishing / credential harvesting injection',
    pattern: /<form[\s>/]/i,
  },
];

/* harmony default export */ __webpack_exports__["default"] = (HTML_PATTERNS);


/***/ }),

/***/ "./node_modules/is-unsafe/src/contexts/log.js":
/*!****************************************************!*\
  !*** ./node_modules/is-unsafe/src/contexts/log.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * LOG context patterns.
 *
 * Detects injection vectors that are dangerous when a string is written
 * to a log file, passed to a logging framework, or interpolated into
 * a log message that will be parsed or displayed.
 *
 * Attack categories:
 *   1. CRLF injection — injects fake log lines by embedding newlines
 *   2. Log4Shell (CVE-2021-44228) — ${jndi:...} triggers JNDI lookup in Log4j
 *   3. SSTI in log templates — {{...}}, #{...} trigger template evaluation
 *      if the log message is passed through a template engine
 *   4. Null byte injection — truncates log entries in some implementations
 *   5. ANSI escape injection — manipulates terminal output when logs are
 *      tailed in a terminal (colour codes, cursor movement, etc.)
 *
 * Note: Newline characters (\n, \r) will produce false positives for
 * multi-line legitimate values. Use this context only for single-line
 * log field values (usernames, IDs, request parameters, etc.).
 */

const LOG_PATTERNS = [
  // ─── CRLF / newline injection ─────────────────────────────────────────────
  {
    id: 'log-crlf-injection',
    description: 'CRLF injection: literal \\r or \\n embeds fake log lines',
    pattern: /[\r\n]/,
  },
  {
    id: 'log-url-encoded-crlf',
    description: 'URL-encoded CRLF: %0d, %0a, %0D, %0A — decoded by some log parsers',
    pattern: /%0[dDaA]/,
  },
  {
    id: 'log-unicode-newline',
    description: 'Unicode newline variants: U+2028 (line separator), U+2029 (paragraph separator)',
    pattern: /[\u2028\u2029]/,
  },

  // ─── Log4Shell / JNDI injection (CVE-2021-44228) ─────────────────────────
  {
    id: 'log-log4shell-jndi',
    description: 'Log4Shell: ${jndi:...} triggers remote code execution in Apache Log4j',
    pattern: /\$\{jndi\s*:/i,
  },
  {
    id: 'log-log4shell-obfuscated',
    description: 'Obfuscated Log4Shell: ${::-j}... lookup-bypass prefix used to evade WAF detection',
    // ${::- is the Log4j lookup-bypass escape sequence; presence alone is suspicious
    pattern: /\$\{::-/,
  },
  {
    id: 'log-log4j-lookup',
    description: 'Log4j lookup syntax: ${env:...}, ${sys:...}, ${ctx:...} — data exfiltration',
    pattern: /\$\{(?:env|sys|ctx|main|map|sd|web|docker|k8s|spring)\s*:/i,
  },

  // ─── Server-Side Template Injection (SSTI) in log messages ───────────────
  {
    id: 'log-ssti-double-brace',
    description: 'SSTI double-brace: {{expression}} — Jinja2, Twig, Handlebars, etc.',
    pattern: /\{\{[\s\S]{0,80}\}\}/,
  },
  {
    id: 'log-ssti-hash-brace',
    description: 'SSTI hash-brace: #{expression} — Thymeleaf, Velocity, Ruby ERB',
    pattern: /#\{[\s\S]{0,80}\}/,
  },
  {
    id: 'log-ssti-dollar-brace',
    description: 'SSTI/EL injection: ${expression with operators or method calls} — JSP EL, Freemarker, SpEL',
    // Require that the ${...} content looks like an expression, not a plain variable name.
    // Flags if the content contains: . ( * + operators, or known SSTI keywords.
    // This avoids flagging ${PATH}, ${HOME} etc. (plain shell variables).
    pattern: /\$\{[^}]*(?:\.|\(|\*|\+|\bclass\b|\bruntime\b|\bprocess\b|\bexec\b)[^}]{0,80}\}/i,
  },
  {
    id: 'log-ssti-percent-tag',
    description: 'SSTI ERB/ASP tag: <%= expression %> — Ruby ERB, ASP',
    pattern: /<%=[\s\S]{0,80}%>/,
  },

  // ─── Null byte ────────────────────────────────────────────────────────────
  {
    id: 'log-null-byte',
    description: 'Null byte: \\x00 or %00 — can truncate log entries in C-backed loggers',
    pattern: /\x00|%00/,
  },

  // ─── ANSI escape injection ────────────────────────────────────────────────
  {
    id: 'log-ansi-escape',
    description: 'ANSI escape sequence: ESC[ — can manipulate terminal output when logs are tailed',
    pattern: /\x1b\[/,
  },
];

/* harmony default export */ __webpack_exports__["default"] = (LOG_PATTERNS);


/***/ }),

/***/ "./node_modules/is-unsafe/src/contexts/nosql.js":
/*!******************************************************!*\
  !*** ./node_modules/is-unsafe/src/contexts/nosql.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * NOSQL context patterns.
 *
 * Detects injection vectors specific to NoSQL databases (primarily MongoDB)
 * and JavaScript-evaluated queries.
 *
 * Attack categories:
 *   1. MongoDB query operator injection: $where, $ne, $gt, $regex, $or, $and, etc.
 *      These operators, when injected into a JSON query object, can bypass
 *      authentication or exfiltrate data without knowing passwords.
 *
 *   2. JavaScript execution: $where clauses execute arbitrary JS server-side.
 *
 *   3. Prototype pollution: __proto__, constructor.prototype — can corrupt
 *      the prototype chain of all objects in the Node.js process.
 *
 * Pattern note: MongoDB operators appear as JSON keys. In JSON, keys are
 * quoted: {"$where": ...} so the pattern must allow an optional closing
 * quote between the operator name and the colon: /\$where["'\s]*:/
 */

// Shared suffix: optional closing quote/whitespace before the colon
// Handles: $op: (bare), "$op": (JSON), '$op': (single-quoted)
const SEP = /["'\s]*:/;
const sep = '["\'\\s]*:';

const NOSQL_PATTERNS = [
  // ─── MongoDB $ operator injection ────────────────────────────────────────
  {
    id: 'nosql-where-operator',
    description: '$where — executes arbitrary JavaScript server-side in MongoDB',
    pattern: new RegExp(`\\$where${sep}`, 'i'),
  },
  {
    id: 'nosql-ne-operator',
    description: '$ne — "not equal" operator used to bypass equality checks',
    pattern: new RegExp(`\\$ne${sep}`, 'i'),
  },
  {
    id: 'nosql-gt-operator',
    description: '$gt — "greater than" used to bypass password/value checks',
    pattern: new RegExp(`\\$gte?${sep}`, 'i'),
  },
  {
    id: 'nosql-lt-operator',
    description: '$lt / $lte — "less than" bypass variants',
    pattern: new RegExp(`\\$lte?${sep}`, 'i'),
  },
  {
    id: 'nosql-regex-operator',
    description: '$regex — can be used to extract data character by character (blind injection)',
    pattern: new RegExp(`\\$regex${sep}`, 'i'),
  },
  {
    id: 'nosql-or-operator',
    description: '$or — logical OR; used to create always-true conditions',
    pattern: new RegExp(`\\$or${sep}\\s*\\[`, 'i'),
  },
  {
    id: 'nosql-and-operator',
    description: '$and — logical AND operator injection',
    pattern: new RegExp(`\\$and${sep}\\s*\\[`, 'i'),
  },
  {
    id: 'nosql-nor-operator',
    description: '$nor — logical NOR operator injection',
    pattern: new RegExp(`\\$nor${sep}\\s*\\[`, 'i'),
  },
  {
    id: 'nosql-exists-operator',
    description: '$exists — can enumerate fields to determine schema',
    pattern: new RegExp(`\\$exists${sep}`, 'i'),
  },
  {
    id: 'nosql-in-operator',
    description: '$in — matches any value in a list; can enumerate values',
    pattern: new RegExp(`\\$in${sep}\\s*\\[`, 'i'),
  },
  {
    id: 'nosql-expr-operator',
    description: '$expr — allows aggregation expressions in queries (MongoDB 3.6+)',
    pattern: new RegExp(`\\$expr${sep}`, 'i'),
  },
  {
    id: 'nosql-function-operator',
    description: '$function — executes arbitrary JavaScript in MongoDB 4.4+',
    pattern: new RegExp(`\\$function${sep}`, 'i'),
  },
  {
    id: 'nosql-accumulator-operator',
    description: '$accumulator — custom aggregation with arbitrary JS execution',
    pattern: new RegExp(`\\$accumulator${sep}`, 'i'),
  },
  // ─── Prototype pollution ─────────────────────────────────────────────────
  {
    id: 'nosql-proto-pollution',
    description: '__proto__ — prototype pollution via object key injection',
    pattern: /__proto__/,
  },
  {
    id: 'nosql-constructor-prototype',
    description: 'constructor.prototype — alternative prototype pollution vector (dot notation or JSON key)',
    // Matches dot-notation (obj.constructor.prototype) and JSON key adjacency
    // ("constructor": {"prototype": ...})
    pattern: /constructor[\s"':.,{\[]*prototype/i,
  },
  {
    id: 'nosql-proto-bracket',
    description: '["__proto__"] — bracket-notation prototype pollution',
    pattern: /\[["']__proto__["']\]/,
  },
];

/* harmony default export */ __webpack_exports__["default"] = (NOSQL_PATTERNS);


/***/ }),

/***/ "./node_modules/is-unsafe/src/contexts/redos.js":
/*!******************************************************!*\
  !*** ./node_modules/is-unsafe/src/contexts/redos.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * REDOS context patterns.
 *
 * Detects strings that, if used as regular expressions, could cause
 * catastrophic backtracking (ReDoS — Regular Expression Denial of Service).
 *
 * These patterns detect the structural forms that lead to exponential or
 * polynomial backtracking in NFA-based regex engines (V8, PCRE, Java, etc.).
 *
 * Use this context when user-supplied strings will be compiled into RegExp objects.
 */

const REDOS_PATTERNS = [
  {
    id: 'redos-nested-quantifier-plus',
    description: 'Nested + quantifier inside a group with outer quantifier: (a+)+, (.+b)*, etc.',
    // Matches any group containing a + quantifier, with an outer * or + — catches (a+)+, (.+b)*, etc.
    pattern: /\([^)]*\+[^)]*\)[+*]/,
  },
  {
    id: 'redos-nested-quantifier-star',
    description: 'Nested * quantifier: (a*)* or (a*)+ — catastrophic backtracking',
    pattern: /\([^)]*\*[^)]*\)[*+]/,
  },
  {
    id: 'redos-nested-groups',
    description: 'Doubly nested quantified groups: ((a+)+) — guaranteed catastrophic',
    pattern: /\(\([^)]{0,40}\)[+*]\)[+*]/,
  },
  {
    id: 'redos-alternation-overlap',
    description: 'Overlapping alternation under quantifier: (a|a)+ — ambiguous NFA paths',
    // Detect repeated identical alternatives under a quantifier
    pattern: /\(([^|()]{1,20})\|(?:\1)(?:\|[^|()]{1,20}){0,5}\)[+*?]{1,2}/,
  },
  {
    id: 'redos-star-plus-concat',
    description: '(x*x)+ pattern — triggers super-linear backtracking',
    pattern: /\([^)]{0,10}\*[^)]{0,10}\)[+*]/,
  },
  {
    id: 'redos-dot-star-greedy',
    description: '(.*){n,} or (.+){n,} — repeated greedy dot quantifiers',
    pattern: /\(\.[*+]\)\{?\d/,
  },
  {
    id: 'redos-large-repetition',
    description: 'Very large fixed or range repetition count {1000,} or {1000,n} — denial of service via backtracking',
    // Matches { followed by 4+ digits (≥1000), then optional ,digits }
    pattern: /\{\d{4,}(?:,\d*)?\}/,
  },
  {
    id: 'redos-catastrophic-alternation',
    description: 'Long alternation with many similar branches — polynomial backtracking risk',
    // Heuristic: 10+ pipe-separated alternatives in a single group
    pattern: /\([^)]{0,200}(?:\|[^|)]{0,50}){9,}\)/,
  },
];

/* harmony default export */ __webpack_exports__["default"] = (REDOS_PATTERNS);


/***/ }),

/***/ "./node_modules/is-unsafe/src/contexts/shell.js":
/*!******************************************************!*\
  !*** ./node_modules/is-unsafe/src/contexts/shell.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * SHELL context patterns.
 *
 * Detects shell injection vectors and path traversal patterns.
 * Designed for use when a string will be passed to a shell command,
 * used as a file path, or interpolated into OS-level operations.
 */

const SHELL_PATTERNS = [
  {
    id: 'shell-path-traversal-unix',
    description: 'Unix path traversal: ../  — climbing the directory tree',
    pattern: /\.\.\//,
  },
  {
    id: 'shell-path-traversal-windows',
    description: 'Windows path traversal: ..\\ — climbing the directory tree',
    pattern: /\.\.\\/,
  },
  {
    id: 'shell-path-traversal-encoded',
    description: 'URL-encoded path traversal: %2e%2e or %2f variants',
    pattern: /%2e%2e|%2f\.\.|\.\.%2f/i,
  },
  {
    id: 'shell-null-byte',
    description: 'Null byte injection: \\x00 or %00 — truncates strings in C-backed functions',
    pattern: /\x00|%00/,
  },
  {
    id: 'shell-semicolon',
    description: 'Semicolon command separator: cmd1; cmd2',
    pattern: /;/,
  },
  {
    id: 'shell-pipe',
    description: 'Pipe operator: cmd1 | cmd2',
    pattern: /\|/,
  },
  {
    id: 'shell-and-operator',
    description: 'AND operator: cmd1 && cmd2',
    pattern: /&&/,
  },
  {
    id: 'shell-or-operator',
    description: 'OR operator: cmd1 || cmd2',
    pattern: /\|\|/,
  },
  {
    id: 'shell-backtick',
    description: 'Backtick command substitution: `cmd`',
    pattern: /`/,
  },
  {
    id: 'shell-dollar-paren',
    description: 'Dollar-paren command substitution: $(cmd)',
    pattern: /\$\(/,
  },
  {
    id: 'shell-dollar-brace',
    description: 'Dollar-brace variable expansion: ${var} — can be abused for injection',
    pattern: /\$\{/,
  },
  {
    id: 'shell-redirect-out',
    description: 'Output redirection: cmd > file or cmd >> file',
    pattern: />{1,2}/,
  },
  {
    id: 'shell-redirect-in',
    description: 'Input redirection: cmd < file',
    pattern: /</,
  },
  {
    id: 'shell-newline-injection',
    description: 'Newline injection: \\n or \\r — can inject new shell commands',
    pattern: /[\n\r]/,
  },
  {
    id: 'shell-glob-star',
    description: 'Glob expansion: * or ? — can expand to unintended files',
    // Only flag when combined with path separators to reduce false positives
    pattern: /[/\\][*?]/,
  },
  {
    id: 'shell-absolute-root',
    description: 'Absolute root path injection: string starting with / or \\ (Windows UNC)',
    pattern: /^(?:\/|\\\\)/,
  },
  {
    id: 'shell-windows-drive',
    description: 'Windows drive letter path injection: C:\\ or D:/',
    pattern: /^[a-zA-Z]:[/\\]/,
  },
  {
    id: 'shell-curl-wget',
    description: 'curl/wget with URL or flags — can exfiltrate data or download payloads',
    // Require a URL scheme (http/https/ftp) or a flag (-) to reduce false positives
    // "curl is a tool" won't match; "curl http://..." or "curl -s ..." will
    pattern: /\b(?:curl|wget)\s+(?:https?:\/\/|ftp:\/\/|-)/i,
  },
];

/* harmony default export */ __webpack_exports__["default"] = (SHELL_PATTERNS);


/***/ }),

/***/ "./node_modules/is-unsafe/src/contexts/sql-strict.js":
/*!***********************************************************!*\
  !*** ./node_modules/is-unsafe/src/contexts/sql-strict.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sql_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sql.js */ "./node_modules/is-unsafe/src/contexts/sql.js");
/**
 * SQL-STRICT context patterns.
 *
 * Extends the base 'SQL' context with three additional rules that are
 * effective at detecting real injections but carry a higher false-positive
 * risk on general free-text input.
 *
 * Use 'SQL-STRICT' when:
 *   - The string is specifically a SQL fragment or database identifier
 *   - You control the input domain (e.g. a dedicated SQL search field)
 *   - You can tolerate occasional false positives in exchange for broader coverage
 *
 * Use 'SQL' (not STRICT) when:
 *   - The field is general user text (names, descriptions, comments)
 *   - False positives would block legitimate content (e.g. "see note -- above")
 *
 * Rules moved here from 'SQL' due to false-positive risk:
 *
 *   sql-line-comment   — "--" fires on "see note -- above", "value--", CSS var(--primary)
 *   sql-stacked-query  — "; SELECT" fires on legitimate prose with semicolons + SQL words
 *   sql-hex-encoding   — "0xDEAD" fires on hex values in technical docs and log output
 */



const SQL_STRICT_EXTRA = [
  {
    id: 'sql-line-comment',
    description: 'SQL line comment: -- followed by whitespace or end of string',
    pattern: /--(?:\s|$)/,
  },
  {
    id: 'sql-stacked-query',
    description: 'Stacked queries: semicolon immediately followed by a SQL keyword',
    pattern: /;\s{0,10}(?:SELECT|INSERT|UPDATE|DELETE|DROP|CREATE|ALTER|EXEC)\b/i,
  },
  {
    id: 'sql-hex-encoding',
    description: 'Hex-encoded string injection: 0x41414141 style (MySQL)',
    pattern: /\b0x[0-9a-f]{4,}/i,
  },
];

// SQL-STRICT = all base SQL rules + the three noisy extras
const SQL_STRICT_PATTERNS = [..._sql_js__WEBPACK_IMPORTED_MODULE_0__["default"], ...SQL_STRICT_EXTRA];

/* harmony default export */ __webpack_exports__["default"] = (SQL_STRICT_PATTERNS);


/***/ }),

/***/ "./node_modules/is-unsafe/src/contexts/sql.js":
/*!****************************************************!*\
  !*** ./node_modules/is-unsafe/src/contexts/sql.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * SQL context patterns — high-precision rules only.
 *
 * These rules have very low false-positive risk and are safe to apply to
 * general user text (names, descriptions, search queries, etc.).
 * All patterns are ReDoS-safe — unlike the `sql-injection` npm package
 * which has an active CVE on its own detection regexes.
 *
 * For exhaustive coverage including noisier heuristics (comment sequences,
 * hex literals, stacked queries with semicolons), use 'SQL-STRICT' instead.
 * Apply 'SQL-STRICT' only to strings that are specifically SQL fragments,
 * not to general free-text fields.
 */

const SQL_PATTERNS = [
  {
    id: 'sql-block-comment-open',
    description: 'SQL block comment open: /* ... */ — unusual in legitimate user text',
    pattern: /\/\*/,
  },
  {
    id: 'sql-union-select',
    description: 'UNION SELECT — most common SQL injection aggregation attack',
    pattern: /\bUNION\s{1,20}(?:ALL\s{1,20})?SELECT\b/i,
  },
  {
    id: 'sql-drop-table',
    description: 'DROP TABLE — destructive DDL injection',
    pattern: /\bDROP\s{1,20}TABLE\b/i,
  },
  {
    id: 'sql-drop-database',
    description: 'DROP DATABASE — destructive DDL injection',
    pattern: /\bDROP\s{1,20}DATABASE\b/i,
  },
  {
    id: 'sql-insert-into',
    description: 'INSERT INTO — data injection',
    pattern: /\bINSERT\s{1,20}INTO\b/i,
  },
  {
    id: 'sql-delete-from',
    description: 'DELETE FROM — data deletion injection',
    pattern: /\bDELETE\s{1,20}FROM\b/i,
  },
  {
    id: 'sql-update-set',
    description: 'UPDATE ... SET — data modification injection',
    // Allows arbitrary content between UPDATE and SET (table name, alias, etc.)
    pattern: /\bUPDATE\b[\s\S]{1,60}\bSET\b/i,
  },
  {
    id: 'sql-exec-xp',
    description: 'EXEC xp_ — MSSQL extended stored procedure execution',
    pattern: /\bEXEC(?:UTE)?\s{1,20}xp_/i,
  },
  {
    id: 'sql-tautology-string',
    description: "Classic string tautology: ' OR '1'='1 or \" OR \"1\"=\"1\"",
    // Last quote is optional — injection may truncate it: ' OR '1'='1--
    pattern: /'\s{0,10}OR\s{0,10}'[^']{0,20}'\s*=\s*'[^']{0,20}/i,
  },
  {
    id: 'sql-tautology-numeric',
    description: 'Numeric tautology: OR 1=1',
    pattern: /\bOR\s{1,10}1\s*=\s*1\b/i,
  },
  {
    id: 'sql-always-true-zero',
    description: 'Numeric tautology: OR 0=0',
    pattern: /\bOR\s{1,10}0\s*=\s*0\b/i,
  },
  {
    id: 'sql-sleep-benchmark',
    description: 'Time-based blind injection: SLEEP() or BENCHMARK()',
    pattern: /\b(?:SLEEP|BENCHMARK)\s*\(/i,
  },
  {
    id: 'sql-waitfor-delay',
    description: 'MSSQL time-based blind injection: WAITFOR DELAY',
    pattern: /\bWAITFOR\s{1,20}DELAY\b/i,
  },
  {
    id: 'sql-char-function',
    description: 'CHAR() function — used to obfuscate injected strings',
    pattern: /\bCHAR\s*\(\s*\d{1,3}/i,
  },
  {
    id: 'sql-information-schema',
    description: 'INFORMATION_SCHEMA — reconnaissance query for table/column enumeration',
    pattern: /\bINFORMATION_SCHEMA\b/i,
  },
];

/* harmony default export */ __webpack_exports__["default"] = (SQL_PATTERNS);


/***/ }),

/***/ "./node_modules/is-unsafe/src/contexts/svg.js":
/*!****************************************************!*\
  !*** ./node_modules/is-unsafe/src/contexts/svg.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * SVG context patterns.
 *
 * SVG is XML-based but renders in browsers, giving it a unique attack surface
 * that combines XML parser behaviour with browser rendering and JavaScript execution.
 *
 * Many of these vectors bypass HTML sanitizers that don't understand SVG semantics
 * (DOMPurify has documented bypass vulnerabilities specifically in SVG/XML context).
 */

const SVG_PATTERNS = [
  {
    id: 'svg-script-element',
    description: '<script element inside SVG executes JavaScript',
    pattern: /<script[\s>/]/i,
  },
  {
    id: 'svg-xlink-href-javascript',
    description: 'xlink:href with javascript: — classic SVG XSS via <a> or <use>',
    pattern: /xlink\s*:\s*href\s*=\s*["']?\s*javascript\s*:/i,
  },
  {
    id: 'svg-href-javascript',
    description: 'href= with javascript: in SVG context (<a>, <animate>, etc.)',
    pattern: /href\s*=\s*["']?\s*javascript\s*:/i,
  },
  {
    id: 'svg-foreignobject',
    description: '<foreignObject embeds HTML inside SVG — can execute scripts',
    pattern: /<foreignObject[\s>/]/i,
  },
  {
    id: 'svg-use-external',
    description: '<use xlink:href or href pointing to external resource (non-fragment URL)',
    // Match <use with href= where the value starts with a non-# character (external URL)
    // [\"'][^#] catches quoted values not starting with #; [^\"'#\s>] catches unquoted
    pattern: /<use[\s\S]{0,60}(?:xlink\s*:\s*)?href\s*=\s*(?:["'][^#]|[^"'#\s>])/i,
  },
  {
    id: 'svg-animate-href',
    description: '<animate attributeName="href" — can dynamically change href to javascript:',
    pattern: /<animate[\s\S]{0,80}attributeName\s*=\s*["'][\s]*href["']/i,
  },
  {
    id: 'svg-animate-xlinkhref',
    description: '<animate attributeName="xlink:href"',
    pattern: /<animate[\s\S]{0,80}attributeName\s*=\s*["'][\s]*xlink\s*:\s*href["']/i,
  },
  {
    id: 'svg-set-javascript',
    description: '<set to="javascript:..." — sets an attribute to a javascript: URI',
    pattern: /<set[\s\S]{0,80}to\s*=\s*["']?\s*javascript\s*:/i,
  },
  {
    id: 'svg-event-handler',
    description: 'SVG-specific event handler attributes: onload=, onerror=, onactivate=, etc.',
    pattern: /\bon(?:load|error|activate|begin|end|repeat|focus|blur|click|mouse\w{1,20}|key\w{1,20})\s*=/i,
  },
  {
    id: 'svg-handler-generic',
    description: 'Generic on* handler catch-all for SVG attributes',
    pattern: /\bon\w{1,30}\s*=/i,
  },
  {
    id: 'svg-filter-feimage',
    description: '<feImage href= — filter primitive that can load external resources',
    pattern: /<feImage[\s\S]{0,80}(?:xlink\s*:\s*)?href\s*=/i,
  },
  {
    id: 'svg-image-external',
    description: '<image xlink:href with http/https or javascript protocol',
    pattern: /<image[\s\S]{0,80}(?:xlink\s*:\s*)?href\s*=\s*["']?\s*(?:https?|javascript)\s*:/i,
  },
  {
    id: 'svg-style-javascript',
    description: 'style= attribute containing javascript: (e.g. background:url(javascript:...))',
    pattern: /style\s*=[\s\S]{0,60}javascript\s*:/i,
  },
];

/* harmony default export */ __webpack_exports__["default"] = (SVG_PATTERNS);


/***/ }),

/***/ "./node_modules/is-unsafe/src/contexts/xml.js":
/*!****************************************************!*\
  !*** ./node_modules/is-unsafe/src/contexts/xml.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * XML context patterns.
 *
 * Detects injection vectors that are specifically dangerous when a string
 * is inserted into an XML document (not HTML rendering context).
 *
 * Key distinction from HTML: these patterns target parser-level attacks —
 * things that can confuse or subvert an XML parser, trigger external entity
 * resolution, or inject DTD content. HTML rendering concerns (XSS) belong
 * in the HTML context.
 */

const XML_PATTERNS = [
  {
    id: 'xml-cdata-injection',
    description: 'CDATA section injection: <![CDATA[ breaks out of text node context',
    pattern: /<!\[CDATA\[/i,
  },
  {
    id: 'xml-cdata-close',
    description: 'CDATA close sequence: ]]> can terminate an enclosing CDATA section',
    pattern: /\]\]>/,
  },
  {
    id: 'xml-processing-instruction',
    description: 'XML processing instruction: <?xml-stylesheet or <?php etc.',
    pattern: /<\?(?:xml[\- ]|php|asp)/i,
  },
  {
    id: 'xml-doctype-injection',
    description: 'DOCTYPE declaration embedded in content — can define entities',
    // Match <!DOCTYPE followed by end-of-string, whitespace, or [ (internal subset)
    pattern: /<!DOCTYPE(?:[\s[]|$)/i,
  },
  {
    id: 'xml-entity-system',
    description: 'SYSTEM keyword — used in external entity declarations (XXE)',
    pattern: /\bSYSTEM\s+["']/i,
  },
  {
    id: 'xml-entity-public',
    description: 'PUBLIC keyword — used in external entity declarations (XXE)',
    pattern: /\bPUBLIC\s+["']/i,
  },
  {
    id: 'xml-entity-declaration',
    description: '<!ENTITY declaration — defines entities, potential XXE or entity expansion',
    pattern: /<!ENTITY[\s%]/i,
  },
  {
    id: 'xml-billion-laughs',
    description: 'Entity reference chaining / billion laughs: repeated &eX; style references',
    // Heuristic: 3+ consecutive entity refs suggests expansion attack
    pattern: /(?:&\w{1,20};){3,}/,
  },
  {
    id: 'xml-namespace-confusion',
    description: 'xmlns: attribute injection — can redefine namespaces to confuse parsers',
    pattern: /\bxmlns\s*(?::\w{1,40})?\s*=/i,
  },
  {
    id: 'xml-comment-injection',
    description: '<!-- comment injection — can hide content from some parsers',
    pattern: /<!--/,
  },
  {
    id: 'xml-comment-close',
    description: '--> closes an enclosing XML comment',
    pattern: /-->/,
  },
  {
    id: 'xml-pi-close',
    description: '?> closes an enclosing processing instruction',
    pattern: /\?>/,
  },
];

/* harmony default export */ __webpack_exports__["default"] = (XML_PATTERNS);


/***/ }),

/***/ "./node_modules/is-unsafe/src/index.js":
/*!*********************************************!*\
  !*** ./node_modules/is-unsafe/src/index.js ***!
  \*********************************************/
/*! exports provided: isUnsafe, whyUnsafe, allUnsafe, VALID_CONTEXTS, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUnsafe", function() { return isUnsafe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whyUnsafe", function() { return whyUnsafe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allUnsafe", function() { return allUnsafe; });
/* harmony import */ var _registry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registry.js */ "./node_modules/is-unsafe/src/registry.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VALID_CONTEXTS", function() { return _registry_js__WEBPACK_IMPORTED_MODULE_0__["VALID_CONTEXTS"]; });

/**
 * is-unsafe
 *
 * Zero-dependency, DOM-free, pure predicate for detecting unsafe strings
 * across HTML, XML, SVG, SQL, SQL-STRICT, SHELL, REDOS, NOSQL, and LOG contexts.
 *
 * @module is-unsafe
 */



/**
 * @typedef {'HTML'|'XML'|'SVG'|'SQL'|'SQL-STRICT'|'SHELL'|'REDOS'|'NOSQL'|'LOG'} ContextName
 */

/**
 * @typedef {Object} MatchResult
 * @property {string} context   - The context in which the match was found
 * @property {string} id        - Rule identifier
 * @property {string} description - Human-readable description of what was matched
 * @property {RegExp} pattern   - The pattern that matched
 */

// ─── Validation helpers ────────────────────────────────────────────────────

/**
 * Validate that `value` is a string. Throws TypeError if not.
 * @param {unknown} value
 */
function assertString(value) {
  if (typeof value !== 'string') {
    throw new TypeError(
      `is-unsafe: first argument must be a string, got ${typeof value}`
    );
  }
}

/**
 * Validate that `context` is a recognised context name, an array of them,
 * or a RegExp instance. Throws TypeError if not.
 * @param {ContextName|ContextName[]|RegExp} context
 */
function assertContext(context) {
  if (context instanceof RegExp) return;

  if (typeof context === 'string') {
    if (!_registry_js__WEBPACK_IMPORTED_MODULE_0__["default"][context]) {
      throw new TypeError(
        `is-unsafe: unknown context "${context}". Valid contexts: ${Object.keys(_registry_js__WEBPACK_IMPORTED_MODULE_0__["VALID_CONTEXTS"]).join(', ')}`
      );
    }
    return;
  }

  if (Array.isArray(context)) {
    if (context.length === 0) {
      throw new TypeError('is-unsafe: context array must not be empty');
    }
    for (const c of context) {
      if (typeof c !== 'string' || !_registry_js__WEBPACK_IMPORTED_MODULE_0__["default"][c]) {
        throw new TypeError(
          `is-unsafe: unknown context "${c}" in array. Valid contexts: ${Object.keys(_registry_js__WEBPACK_IMPORTED_MODULE_0__["VALID_CONTEXTS"]).join(', ')}`
        );
      }
    }
    return;
  }

  throw new TypeError(
    `is-unsafe: second argument must be a context string, array of context strings, or RegExp. Got: ${typeof context}`
  );
}

// ─── Core matching logic ───────────────────────────────────────────────────

/**
 * Test a single value against one named context's patterns.
 * Returns the first matching MatchResult, or null if nothing matched.
 *
 * @param {string} value
 * @param {string} contextName
 * @returns {MatchResult|null}
 */
function matchContext(value, contextName) {
  const patterns = _registry_js__WEBPACK_IMPORTED_MODULE_0__["default"][contextName];
  for (const rule of patterns) {
    if (rule.pattern.test(value)) {
      return { context: contextName, id: rule.id, description: rule.description, pattern: rule.pattern };
    }
  }
  return null;
}

// ─── Public API ───────────────────────────────────────────────────────────

/**
 * Returns `true` if `value` is unsafe in the given context(s), `false` otherwise.
 *
 * @param {string} value           - The string to test
 * @param {ContextName|ContextName[]|RegExp} context
 *   - A named context ('HTML', 'XML', 'SVG', 'SQL', 'SQL-STRICT', 'SHELL', 'REDOS', 'NOSQL', 'LOG')
 *   - An array of named contexts — returns true if unsafe in **any** of them
 *   - A custom RegExp — returns true if the pattern matches
 * @returns {boolean}
 *
 * @example
 * isUnsafe('<script>alert(1)</script>', 'HTML')  // true
 * isUnsafe('hello world', 'HTML')                // false
 * isUnsafe('value', ['HTML', 'SQL'])             // false
 * isUnsafe('value', /my-pattern/i)               // false
 */
function isUnsafe(value, context) {
  assertString(value);
  assertContext(context);

  // Custom RegExp — caller-supplied pattern
  if (context instanceof RegExp) {
    return context.test(value);
  }

  // Single named context
  if (typeof context === 'string') {
    return matchContext(value, context) !== null;
  }

  // Array of named contexts — unsafe if ANY context matches
  for (const c of context) {
    if (matchContext(value, c) !== null) return true;
  }
  return false;
}

/**
 * Like `isUnsafe`, but instead of a boolean returns the first `MatchResult`
 * describing **why** the value was flagged, or `null` if it is safe.
 *
 * Useful for logging, error messages, or policy reporting.
 *
 * @param {string} value
 * @param {ContextName|ContextName[]|RegExp} context
 * @returns {MatchResult|null}
 *
 * @example
 * whyUnsafe('<script>alert(1)</script>', 'HTML')
 * // { context: 'HTML', id: 'html-script-open', description: '...', pattern: /.../ }
 */
function whyUnsafe(value, context) {
  assertString(value);
  assertContext(context);

  if (context instanceof RegExp) {
    return context.test(value)
      ? { context: 'CUSTOM', id: 'custom-regex', description: 'Matched caller-supplied pattern', pattern: context }
      : null;
  }

  if (typeof context === 'string') {
    return matchContext(value, context);
  }

  for (const c of context) {
    const result = matchContext(value, c);
    if (result !== null) return result;
  }
  return null;
}

/**
 * Returns all matching rules across the given context(s), or an empty array
 * if the value is safe. Useful for comprehensive auditing.
 *
 * @param {string} value
 * @param {ContextName|ContextName[]|RegExp} context
 * @returns {MatchResult[]}
 */
function allUnsafe(value, context) {
  assertString(value);
  assertContext(context);

  const results = [];

  if (context instanceof RegExp) {
    if (context.test(value)) {
      results.push({ context: 'CUSTOM', id: 'custom-regex', description: 'Matched caller-supplied pattern', pattern: context });
    }
    return results;
  }

  const contexts = typeof context === 'string' ? [context] : context;

  for (const c of contexts) {
    const patterns = _registry_js__WEBPACK_IMPORTED_MODULE_0__["default"][c];
    for (const rule of patterns) {
      if (rule.pattern.test(value)) {
        results.push({ context: c, id: rule.id, description: rule.description, pattern: rule.pattern });
      }
    }
  }

  return results;
}


/* harmony default export */ __webpack_exports__["default"] = (isUnsafe);

/***/ }),

/***/ "./node_modules/is-unsafe/src/registry.js":
/*!************************************************!*\
  !*** ./node_modules/is-unsafe/src/registry.js ***!
  \************************************************/
/*! exports provided: default, VALID_CONTEXTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALID_CONTEXTS", function() { return VALID_CONTEXTS; });
/* harmony import */ var _contexts_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contexts/html.js */ "./node_modules/is-unsafe/src/contexts/html.js");
/* harmony import */ var _contexts_xml_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contexts/xml.js */ "./node_modules/is-unsafe/src/contexts/xml.js");
/* harmony import */ var _contexts_svg_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contexts/svg.js */ "./node_modules/is-unsafe/src/contexts/svg.js");
/* harmony import */ var _contexts_sql_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contexts/sql.js */ "./node_modules/is-unsafe/src/contexts/sql.js");
/* harmony import */ var _contexts_sql_strict_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contexts/sql-strict.js */ "./node_modules/is-unsafe/src/contexts/sql-strict.js");
/* harmony import */ var _contexts_shell_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contexts/shell.js */ "./node_modules/is-unsafe/src/contexts/shell.js");
/* harmony import */ var _contexts_redos_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contexts/redos.js */ "./node_modules/is-unsafe/src/contexts/redos.js");
/* harmony import */ var _contexts_nosql_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contexts/nosql.js */ "./node_modules/is-unsafe/src/contexts/nosql.js");
/* harmony import */ var _contexts_log_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contexts/log.js */ "./node_modules/is-unsafe/src/contexts/log.js");
/**
 * Context registry — maps context name strings to their pattern arrays.
 *
 * Adding a new context: create a file in ./contexts/, export a default array
 * of pattern objects, and register it here.
 *
 * Context name guide:
 *   SQL        — high-precision rules; safe for general text fields
 *   SQL-STRICT — SQL + three noisier rules (line comments, stacked queries, hex);
 *                use only for SQL-specific inputs
 *   REDOS      — detects ReDoS-prone patterns when string will be compiled as RegExp
 */











/** @type {Record<string, Array<{id: string, description: string, pattern: RegExp}>>} */
const CONTEXT_REGISTRY = {
  HTML: _contexts_html_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  XML: _contexts_xml_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  SVG: _contexts_svg_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  SQL: _contexts_sql_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  'SQL-STRICT': _contexts_sql_strict_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  SHELL: _contexts_shell_js__WEBPACK_IMPORTED_MODULE_5__["default"],
  REDOS: _contexts_redos_js__WEBPACK_IMPORTED_MODULE_6__["default"],
  NOSQL: _contexts_nosql_js__WEBPACK_IMPORTED_MODULE_7__["default"],
  LOG: _contexts_log_js__WEBPACK_IMPORTED_MODULE_8__["default"],
};

/* harmony default export */ __webpack_exports__["default"] = (CONTEXT_REGISTRY);

/**
 * Enum of valid context names — e.g. `VALID_CONTEXTS.HTML === 'HTML'`.
 * @type {Record<string, string>}
 */
const VALID_CONTEXTS = Object.freeze(
  Object.fromEntries(Object.keys(CONTEXT_REGISTRY).map((k) => [k, k]))
);

/***/ }),

/***/ "./node_modules/path-expression-matcher/src/Expression.js":
/*!****************************************************************!*\
  !*** ./node_modules/path-expression-matcher/src/Expression.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Expression; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Expression - Parses and stores a tag pattern expression
 *
 * Patterns are parsed once and stored in an optimized structure for fast matching.
 *
 * @example
 * const expr = new Expression("root.users.user");
 * const expr2 = new Expression("..user[id]:first");
 * const expr3 = new Expression("root/users/user", { separator: '/' });
 */
var Expression = /*#__PURE__*/function () {
  /**
   * Create a new Expression
   * @param {string} pattern - Pattern string (e.g., "root.users.user", "..user[id]")
   * @param {Object} options - Configuration options
   * @param {string} options.separator - Path separator (default: '.')
   */
  function Expression(pattern) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var data = arguments.length > 2 ? arguments[2] : undefined;
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Expression);
    this.pattern = pattern;
    this.separator = options.separator || '.';
    this.segments = this._parse(pattern);
    this.data = data;
    // Cache expensive checks for performance (O(1) instead of O(n))
    this._hasDeepWildcard = this.segments.some(function (seg) {
      return seg.type === 'deep-wildcard';
    });
    this._hasAttributeCondition = this.segments.some(function (seg) {
      return seg.attrName !== undefined;
    });
    this._hasPositionSelector = this.segments.some(function (seg) {
      return seg.position !== undefined;
    });
  }

  /**
   * Parse pattern string into segments
   * @private
   * @param {string} pattern - Pattern to parse
   * @returns {Array} Array of segment objects
   */
  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Expression, [{
    key: "_parse",
    value: function _parse(pattern) {
      var segments = [];

      // Split by separator but handle ".." specially
      var i = 0;
      var currentPart = '';
      while (i < pattern.length) {
        if (pattern[i] === this.separator) {
          // Check if next char is also separator (deep wildcard)
          if (i + 1 < pattern.length && pattern[i + 1] === this.separator) {
            // Flush current part if any
            if (currentPart.trim()) {
              segments.push(this._parseSegment(currentPart.trim()));
              currentPart = '';
            }
            // Add deep wildcard
            segments.push({
              type: 'deep-wildcard'
            });
            i += 2; // Skip both separators
          } else {
            // Regular separator
            if (currentPart.trim()) {
              segments.push(this._parseSegment(currentPart.trim()));
            }
            currentPart = '';
            i++;
          }
        } else {
          currentPart += pattern[i];
          i++;
        }
      }

      // Flush remaining part
      if (currentPart.trim()) {
        segments.push(this._parseSegment(currentPart.trim()));
      }
      return segments;
    }

    /**
     * Parse a single segment
     * @private
     * @param {string} part - Segment string (e.g., "user", "ns::user", "user[id]", "ns::user:first")
     * @returns {Object} Segment object
     */
  }, {
    key: "_parseSegment",
    value: function _parseSegment(part) {
      var segment = {
        type: 'tag'
      };

      // NEW NAMESPACE SYNTAX (v2.0):
      // ============================
      // Namespace uses DOUBLE colon (::)
      // Position uses SINGLE colon (:)
      //
      // Examples:
      //   "user"              → tag
      //   "user:first"        → tag + position
      //   "user[id]"          → tag + attribute
      //   "user[id]:first"    → tag + attribute + position
      //   "ns::user"          → namespace + tag
      //   "ns::user:first"    → namespace + tag + position
      //   "ns::user[id]"      → namespace + tag + attribute
      //   "ns::user[id]:first" → namespace + tag + attribute + position
      //   "ns::first"         → namespace + tag named "first" (NO ambiguity!)
      //
      // This eliminates all ambiguity:
      //   :: = namespace separator
      //   :  = position selector
      //   [] = attributes

      // Step 1: Extract brackets [attr] or [attr=value]
      var bracketContent = null;
      var withoutBrackets = part;
      var bracketMatch = part.match(/^([^\[]+)(\[[^\]]*\])(.*)$/);
      if (bracketMatch) {
        withoutBrackets = bracketMatch[1] + bracketMatch[3];
        if (bracketMatch[2]) {
          var content = bracketMatch[2].slice(1, -1);
          if (content) {
            bracketContent = content;
          }
        }
      }

      // Step 2: Check for namespace (double colon ::)
      var namespace = undefined;
      var tagAndPosition = withoutBrackets;
      if (withoutBrackets.includes('::')) {
        var nsIndex = withoutBrackets.indexOf('::');
        namespace = withoutBrackets.substring(0, nsIndex).trim();
        tagAndPosition = withoutBrackets.substring(nsIndex + 2).trim(); // Skip ::

        if (!namespace) {
          throw new Error("Invalid namespace in pattern: ".concat(part));
        }
      }

      // Step 3: Parse tag and position (single colon :)
      var tag = undefined;
      var positionMatch = null;
      if (tagAndPosition.includes(':')) {
        var colonIndex = tagAndPosition.lastIndexOf(':'); // Use last colon for position
        var tagPart = tagAndPosition.substring(0, colonIndex).trim();
        var posPart = tagAndPosition.substring(colonIndex + 1).trim();

        // Verify position is a valid keyword
        var isPositionKeyword = ['first', 'last', 'odd', 'even'].includes(posPart) || /^nth\(\d+\)$/.test(posPart);
        if (isPositionKeyword) {
          tag = tagPart;
          positionMatch = posPart;
        } else {
          // Not a valid position keyword, treat whole thing as tag
          tag = tagAndPosition;
        }
      } else {
        tag = tagAndPosition;
      }
      if (!tag) {
        throw new Error("Invalid segment pattern: ".concat(part));
      }
      segment.tag = tag;
      if (namespace) {
        segment.namespace = namespace;
      }

      // Step 4: Parse attributes
      if (bracketContent) {
        if (bracketContent.includes('=')) {
          var eqIndex = bracketContent.indexOf('=');
          segment.attrName = bracketContent.substring(0, eqIndex).trim();
          segment.attrValue = bracketContent.substring(eqIndex + 1).trim();
        } else {
          segment.attrName = bracketContent.trim();
        }
      }

      // Step 5: Parse position selector
      if (positionMatch) {
        var nthMatch = positionMatch.match(/^nth\((\d+)\)$/);
        if (nthMatch) {
          segment.position = 'nth';
          segment.positionValue = parseInt(nthMatch[1], 10);
        } else {
          segment.position = positionMatch;
        }
      }
      return segment;
    }

    /**
     * Get the number of segments
     * @returns {number}
     */
  }, {
    key: "length",
    get: function get() {
      return this.segments.length;
    }

    /**
     * Check if expression contains deep wildcard
     * @returns {boolean}
     */
  }, {
    key: "hasDeepWildcard",
    value: function hasDeepWildcard() {
      return this._hasDeepWildcard;
    }

    /**
     * Check if expression has attribute conditions
     * @returns {boolean}
     */
  }, {
    key: "hasAttributeCondition",
    value: function hasAttributeCondition() {
      return this._hasAttributeCondition;
    }

    /**
     * Check if expression has position selectors
     * @returns {boolean}
     */
  }, {
    key: "hasPositionSelector",
    value: function hasPositionSelector() {
      return this._hasPositionSelector;
    }

    /**
     * Get string representation
     * @returns {string}
     */
  }, {
    key: "toString",
    value: function toString() {
      return this.pattern;
    }
  }]);
}();


/***/ }),

/***/ "./node_modules/path-expression-matcher/src/ExpressionSet.js":
/*!*******************************************************************!*\
  !*** ./node_modules/path-expression-matcher/src/ExpressionSet.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ExpressionSet; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);


function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
/**
 * ExpressionSet - An indexed collection of Expressions for efficient bulk matching
 *
 * Instead of iterating all expressions on every tag, ExpressionSet pre-indexes
 * them at insertion time by depth and terminal tag name. At match time, only
 * the relevant bucket is evaluated — typically reducing checks from O(E) to O(1)
 * lookup plus O(small bucket) matches.
 *
 * Three buckets are maintained:
 *  - `_byDepthAndTag`  — exact depth + exact tag name  (tightest, used first)
 *  - `_wildcardByDepth` — exact depth + wildcard tag `*` (depth-matched only)
 *  - `_deepWildcards`  — expressions containing `..`  (cannot be depth-indexed)
 *
 * @example
 * import { Expression, ExpressionSet } from 'fast-xml-tagger';
 *
 * // Build once at config time
 * const stopNodes = new ExpressionSet();
 * stopNodes.add(new Expression('root.users.user'));
 * stopNodes.add(new Expression('root.config.setting'));
 * stopNodes.add(new Expression('..script'));
 *
 * // Query on every tag — hot path
 * if (stopNodes.matchesAny(matcher)) { ... }
 */
var ExpressionSet = /*#__PURE__*/function () {
  function ExpressionSet() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ExpressionSet);
    /** @type {Map<string, import('./Expression.js').default[]>} depth:tag → expressions */
    this._byDepthAndTag = new Map();

    /** @type {Map<number, import('./Expression.js').default[]>} depth → wildcard-tag expressions */
    this._wildcardByDepth = new Map();

    /** @type {import('./Expression.js').default[]} expressions containing deep wildcard (..) */
    this._deepWildcards = [];

    /** @type {Map<string, import('./Expression.js').default[]>} terminalTag → deep wildcard expressions */
    this._deepByTerminalTag = new Map();

    /** @type {Set<string>} pattern strings already added — used for deduplication */
    this._patterns = new Set();

    /** @type {boolean} whether the set is sealed against further additions */
    this._sealed = false;
  }

  /**
   * Add an Expression to the set.
   * Duplicate patterns (same pattern string) are silently ignored.
   *
   * @param {import('./Expression.js').default} expression - A pre-constructed Expression instance
   * @returns {this} for chaining
   * @throws {TypeError} if called after seal()
   *
   * @example
   * set.add(new Expression('root.users.user'));
   * set.add(new Expression('..script'));
   */
  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ExpressionSet, [{
    key: "add",
    value: function add(expression) {
      if (this._sealed) {
        throw new TypeError('ExpressionSet is sealed. Create a new ExpressionSet to add more expressions.');
      }

      // Deduplicate by pattern string
      if (this._patterns.has(expression.pattern)) return this;
      this._patterns.add(expression.pattern);
      if (expression.hasDeepWildcard()) {
        var _lastSeg = expression.segments[expression.segments.length - 1];
        if (_lastSeg && _lastSeg.type !== 'deep-wildcard' && _lastSeg.tag !== '*') {
          var _tag = _lastSeg.tag;
          if (!this._deepByTerminalTag.has(_tag)) this._deepByTerminalTag.set(_tag, []);
          this._deepByTerminalTag.get(_tag).push(expression);
        } else {
          this._deepWildcards.push(expression);
        }
        return this;
      }
      var depth = expression.length;
      var lastSeg = expression.segments[expression.segments.length - 1];
      var tag = lastSeg === null || lastSeg === void 0 ? void 0 : lastSeg.tag;
      if (!tag || tag === '*') {
        // Can index by depth but not by tag
        if (!this._wildcardByDepth.has(depth)) this._wildcardByDepth.set(depth, []);
        this._wildcardByDepth.get(depth).push(expression);
      } else {
        // Tightest bucket: depth + tag
        var key = "".concat(depth, ":").concat(tag);
        if (!this._byDepthAndTag.has(key)) this._byDepthAndTag.set(key, []);
        this._byDepthAndTag.get(key).push(expression);
      }
      return this;
    }

    /**
     * Add multiple expressions at once.
     *
     * @param {import('./Expression.js').default[]} expressions - Array of Expression instances
     * @returns {this} for chaining
     *
     * @example
     * set.addAll([
     *   new Expression('root.users.user'),
     *   new Expression('root.config.setting'),
     * ]);
     */
  }, {
    key: "addAll",
    value: function addAll(expressions) {
      var _iterator = _createForOfIteratorHelper(expressions),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var expr = _step.value;
          this.add(expr);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return this;
    }

    /**
     * Check whether a pattern string is already present in the set.
     *
     * @param {import('./Expression.js').default} expression
     * @returns {boolean}
     */
  }, {
    key: "has",
    value: function has(expression) {
      return this._patterns.has(expression.pattern);
    }

    /**
     * Number of expressions in the set.
     * @type {number}
     */
  }, {
    key: "size",
    get: function get() {
      return this._patterns.size;
    }

    /**
     * Seal the set against further modifications.
     * Useful to prevent accidental mutations after config is built.
     * Calling add() or addAll() on a sealed set throws a TypeError.
     *
     * @returns {this}
     */
  }, {
    key: "seal",
    value: function seal() {
      this._sealed = true;
      return this;
    }

    /**
     * Whether the set has been sealed.
     * @type {boolean}
     */
  }, {
    key: "isSealed",
    get: function get() {
      return this._sealed;
    }

    /**
     * Test whether the matcher's current path matches any expression in the set.
     *
     * Evaluation order (cheapest → most expensive):
     *  1. Exact depth + tag bucket  — O(1) lookup, typically 0–2 expressions
     *  2. Depth-only wildcard bucket — O(1) lookup, rare
     *  3. Deep-wildcard list         — always checked, but usually small
     *
     * @param {import('./Matcher.js').default} matcher - Matcher instance (or readOnly view)
     * @returns {boolean} true if any expression matches the current path
     *
     * @example
     * if (stopNodes.matchesAny(matcher)) {
     *   // handle stop node
     * }
     */
  }, {
    key: "matchesAny",
    value: function matchesAny(matcher) {
      return this.findMatch(matcher) !== null;
    }
    /**
    * Find and return the first Expression that matches the matcher's current path.
    *
    * Uses the same evaluation order as matchesAny (cheapest → most expensive):
    *  1. Exact depth + tag bucket
    *  2. Depth-only wildcard bucket
    *  3. Deep-wildcard list
    *
    * @param {import('./Matcher.js').default} matcher - Matcher instance (or readOnly view)
    * @returns {import('./Expression.js').default | null} the first matching Expression, or null
    *
    * @example
    * const expr = stopNodes.findMatch(matcher);
    * if (expr) {
    *   // access expr.config, expr.pattern, etc.
    * }
    */
  }, {
    key: "findMatch",
    value: function findMatch(matcher) {
      var depth = matcher.getDepth();
      var tag = matcher.getCurrentTag();

      // 1. Tightest bucket — most expressions live here
      var exactKey = "".concat(depth, ":").concat(tag);
      var exactBucket = this._byDepthAndTag.get(exactKey);
      if (exactBucket) {
        for (var i = 0; i < exactBucket.length; i++) {
          if (matcher.matches(exactBucket[i])) return exactBucket[i];
        }
      }

      // 2. Depth-matched wildcard-tag expressions
      var wildcardBucket = this._wildcardByDepth.get(depth);
      if (wildcardBucket) {
        for (var _i = 0; _i < wildcardBucket.length; _i++) {
          if (matcher.matches(wildcardBucket[_i])) return wildcardBucket[_i];
        }
      }

      // 3. Deep wildcards — indexed by terminal tag, then unindexed fallback
      var deepBucket = this._deepByTerminalTag.get(tag);
      if (deepBucket) {
        for (var _i2 = 0; _i2 < deepBucket.length; _i2++) {
          if (matcher.matches(deepBucket[_i2])) return deepBucket[_i2];
        }
      }
      for (var _i3 = 0; _i3 < this._deepWildcards.length; _i3++) {
        if (matcher.matches(this._deepWildcards[_i3])) return this._deepWildcards[_i3];
      }
      return null;
    }
  }]);
}();


/***/ }),

/***/ "./node_modules/path-expression-matcher/src/Matcher.js":
/*!*************************************************************!*\
  !*** ./node_modules/path-expression-matcher/src/Matcher.js ***!
  \*************************************************************/
/*! exports provided: MatcherView, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatcherView", function() { return MatcherView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Matcher; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ExpressionSet_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ExpressionSet.js */ "./node_modules/path-expression-matcher/src/ExpressionSet.js");



function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }


/**
 * MatcherView - A lightweight read-only view over a Matcher's internal state.
 *
 * Created once by Matcher and reused across all callbacks. Holds a direct
 * reference to the parent Matcher so it always reflects current parser state
 * with zero copying or freezing overhead.
 *
 * Users receive this via {@link Matcher#readOnly} or directly from parser
 * callbacks. It exposes all query and matching methods but has no mutation
 * methods — misuse is caught at the TypeScript level rather than at runtime.
 *
 * @example
 * const matcher = new Matcher();
 * const view = matcher.readOnly();
 *
 * matcher.push("root", {});
 * view.getCurrentTag(); // "root"
 * view.getDepth();      // 1
 */
var MatcherView = /*#__PURE__*/function () {
  /**
   * @param {Matcher} matcher - The parent Matcher instance to read from.
   */
  function MatcherView(matcher) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, MatcherView);
    this._matcher = matcher;
  }

  /**
   * Get the path separator used by the parent matcher.
   * @returns {string}
   */
  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(MatcherView, [{
    key: "separator",
    get: function get() {
      return this._matcher.separator;
    }

    /**
     * Get current tag name.
     * @returns {string|undefined}
     */
  }, {
    key: "getCurrentTag",
    value: function getCurrentTag() {
      var path = this._matcher.path;
      return path.length > 0 ? path[path.length - 1].tag : undefined;
    }

    /**
     * Get current namespace.
     * @returns {string|undefined}
     */
  }, {
    key: "getCurrentNamespace",
    value: function getCurrentNamespace() {
      var path = this._matcher.path;
      return path.length > 0 ? path[path.length - 1].namespace : undefined;
    }

    /**
     * Get current node's attribute value.
     * @param {string} attrName
     * @returns {*}
     */
  }, {
    key: "getAttrValue",
    value: function getAttrValue(attrName) {
      var _path$values;
      var path = this._matcher.path;
      if (path.length === 0) return undefined;
      return (_path$values = path[path.length - 1].values) === null || _path$values === void 0 ? void 0 : _path$values[attrName];
    }

    /**
     * Check if current node has an attribute.
     * @param {string} attrName
     * @returns {boolean}
     */
  }, {
    key: "hasAttr",
    value: function hasAttr(attrName) {
      var path = this._matcher.path;
      if (path.length === 0) return false;
      var current = path[path.length - 1];
      return current.values !== undefined && attrName in current.values;
    }

    /**
     * Get the value of a "kept" attribute from the nearest ancestor (or
     * current node) that declared it via `push(tag, attrs, ns, { keep: [...] })`.
     * @param {string} attrName
     * @returns {*}
     */
  }, {
    key: "getAnyParentAttr",
    value: function getAnyParentAttr(attrName) {
      return this._matcher.getAnyParentAttr(attrName);
    }

    /**
     * Check whether any ancestor (or the current node) kept the given
     * attribute via `push(tag, attrs, ns, { keep: [...] })`.
     * @param {string} attrName
     * @returns {boolean}
     */
  }, {
    key: "hasAnyParentAttr",
    value: function hasAnyParentAttr(attrName) {
      return this._matcher.hasAnyParentAttr(attrName);
    }

    /**
     * Get current node's sibling position (child index in parent).
     * @returns {number}
     */
  }, {
    key: "getPosition",
    value: function getPosition() {
      var _path$position;
      var path = this._matcher.path;
      if (path.length === 0) return -1;
      return (_path$position = path[path.length - 1].position) !== null && _path$position !== void 0 ? _path$position : 0;
    }

    /**
     * Get current node's repeat counter (occurrence count of this tag name).
     * @returns {number}
     */
  }, {
    key: "getCounter",
    value: function getCounter() {
      var _path$counter;
      var path = this._matcher.path;
      if (path.length === 0) return -1;
      return (_path$counter = path[path.length - 1].counter) !== null && _path$counter !== void 0 ? _path$counter : 0;
    }

    /**
     * Get current node's sibling index (alias for getPosition).
     * @returns {number}
     * @deprecated Use getPosition() or getCounter() instead
     */
  }, {
    key: "getIndex",
    value: function getIndex() {
      return this.getPosition();
    }

    /**
     * Get current path depth.
     * @returns {number}
     */
  }, {
    key: "getDepth",
    value: function getDepth() {
      return this._matcher.path.length;
    }

    /**
     * Get path as string.
     * @param {string} [separator] - Optional separator (uses default if not provided)
     * @param {boolean} [includeNamespace=true]
     * @returns {string}
     */
  }, {
    key: "toString",
    value: function toString(separator) {
      var includeNamespace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      return this._matcher.toString(separator, includeNamespace);
    }

    /**
     * Get path as array of tag names.
     * @returns {string[]}
     */
  }, {
    key: "toArray",
    value: function toArray() {
      return this._matcher.path.map(function (n) {
        return n.tag;
      });
    }

    /**
     * Match current path against an Expression.
     * @param {Expression} expression
     * @returns {boolean}
     */
  }, {
    key: "matches",
    value: function matches(expression) {
      return this._matcher.matches(expression);
    }

    /**
     * Match any expression in the given set against the current path.
     * @param {ExpressionSet} exprSet
     * @returns {boolean}
     */
  }, {
    key: "matchesAny",
    value: function matchesAny(exprSet) {
      return exprSet.matchesAny(this._matcher);
    }
  }]);
}();

/**
 * Matcher - Tracks current path in XML/JSON tree and matches against Expressions.
 *
 * The matcher maintains a stack of nodes representing the current path from root to
 * current tag. It only stores attribute values for the current (top) node to minimize
 * memory usage. Sibling tracking is used to auto-calculate position and counter.
 *
 * Use {@link Matcher#readOnly} to obtain a {@link MatcherView} safe to pass to
 * user callbacks — it always reflects current state with no Proxy overhead.
 *
 * @example
 * const matcher = new Matcher();
 * matcher.push("root", {});
 * matcher.push("users", {});
 * matcher.push("user", { id: "123", type: "admin" });
 *
 * const expr = new Expression("root.users.user");
 * matcher.matches(expr); // true
 */
var Matcher = /*#__PURE__*/function () {
  /**
   * Create a new Matcher.
   * @param {Object} [options={}]
   * @param {string} [options.separator='.'] - Default path separator
   */
  function Matcher() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Matcher);
    this.separator = options.separator || '.';
    this.path = [];
    this.siblingStacks = [];
    // Each path node: { tag, values, position, counter, namespace? }
    // values only present for current (last) node
    // Each siblingStacks entry: Map<tagName, count> tracking occurrences at each level
    this._pathStringCache = null;
    this._view = new MatcherView(this);

    // Kept-attribute stack: only populated when push() is called with options.keep.
    this._keptAttrs = [];
  }

  /**
   * Push a new tag onto the path.
   * @param {string} tagName
   * @param {Object|null} [attrValues=null]
   * @param {string|null} [namespace=null]
   * @param {Object|null} [options=null]
   * @param {string[]} [options.keep] - Names of attributes (from attrValues)
   */
  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Matcher, [{
    key: "push",
    value: function push(tagName) {
      var attrValues = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var namespace = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      this._pathStringCache = null;

      // Remove values from previous current node (now becoming ancestor)
      if (this.path.length > 0) {
        this.path[this.path.length - 1].values = undefined;
      }

      // Get or create sibling tracking for current level
      var currentLevel = this.path.length;
      if (!this.siblingStacks[currentLevel]) {
        this.siblingStacks[currentLevel] = new Map();
      }
      var siblings = this.siblingStacks[currentLevel];

      // Create a unique key for sibling tracking that includes namespace
      var siblingKey = namespace ? "".concat(namespace, ":").concat(tagName) : tagName;

      // Calculate counter (how many times this tag appeared at this level)
      var counter = siblings.get(siblingKey) || 0;

      // Calculate position (total children at this level so far)
      var position = 0;
      var _iterator = _createForOfIteratorHelper(siblings.values()),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var count = _step.value;
          position += count;
        }

        // Update sibling count for this tag
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      siblings.set(siblingKey, counter + 1);

      // Create new node
      var node = {
        tag: tagName,
        position: position,
        counter: counter
      };
      if (namespace !== null && namespace !== undefined) {
        node.namespace = namespace;
      }
      if (attrValues !== null && attrValues !== undefined) {
        node.values = attrValues;
      }
      this.path.push(node);

      // Depth of the node we just pushed (1-based, matches this.path.length)
      var depth = this.path.length;

      // Copy only the requested attributes into the kept-attrs stack. This is
      // the one part of push() whose cost scales with input (O(keep.length))
      // rather than being O(1) — by design, since the caller is explicitly
      // opting in for specific attribute names. No options/keep => zero added
      // cost beyond the two property reads below.
      var keep = options !== null ? options.keep : null;
      if (keep !== null && keep !== undefined && keep.length > 0 && attrValues) {
        for (var i = 0; i < keep.length; i++) {
          var name = keep[i];
          if (attrValues[name] !== undefined) {
            this._keptAttrs.push({
              depth: depth,
              name: name,
              value: attrValues[name]
            });
          }
        }
      }
    }

    /**
     * Pop the last tag from the path.
     * @returns {Object|undefined} The popped node
     */
  }, {
    key: "pop",
    value: function pop() {
      if (this.path.length === 0) return undefined;
      this._pathStringCache = null;
      var node = this.path.pop();
      if (this.siblingStacks.length > this.path.length + 1) {
        this.siblingStacks.length = this.path.length + 1;
      }

      // Drop any kept attributes that belonged to the popped node (or deeper).
      // _keptAttrs is depth-ordered (push only ever appends increasing depths),
      // so this is a backward scan that stops at the first surviving entry —
      // typically O(1) since kept attrs are rare by design.
      var poppedDepth = this.path.length + 1;
      while (this._keptAttrs.length > 0 && this._keptAttrs[this._keptAttrs.length - 1].depth >= poppedDepth) {
        this._keptAttrs.pop();
      }
      return node;
    }

    /**
     * Update current node's attribute values.
     * Useful when attributes are parsed after push.
     * @param {Object} attrValues
     */
  }, {
    key: "updateCurrent",
    value: function updateCurrent(attrValues) {
      if (this.path.length > 0) {
        var current = this.path[this.path.length - 1];
        if (attrValues !== null && attrValues !== undefined) {
          current.values = attrValues;
        }
      }
    }

    /**
     * Get current tag name.
     * @returns {string|undefined}
     */
  }, {
    key: "getCurrentTag",
    value: function getCurrentTag() {
      return this.path.length > 0 ? this.path[this.path.length - 1].tag : undefined;
    }

    /**
     * Get current namespace.
     * @returns {string|undefined}
     */
  }, {
    key: "getCurrentNamespace",
    value: function getCurrentNamespace() {
      return this.path.length > 0 ? this.path[this.path.length - 1].namespace : undefined;
    }

    /**
     * Get current node's attribute value.
     * @param {string} attrName
     * @returns {*}
     */
  }, {
    key: "getAttrValue",
    value: function getAttrValue(attrName) {
      var _this$path$values;
      if (this.path.length === 0) return undefined;
      return (_this$path$values = this.path[this.path.length - 1].values) === null || _this$path$values === void 0 ? void 0 : _this$path$values[attrName];
    }

    /**
     * Check if current node has an attribute.
     * @param {string} attrName
     * @returns {boolean}
     */
  }, {
    key: "hasAttr",
    value: function hasAttr(attrName) {
      if (this.path.length === 0) return false;
      var current = this.path[this.path.length - 1];
      return current.values !== undefined && attrName in current.values;
    }

    /**
     * Get the value of a "kept" attribute from the nearest ancestor (or
     * current node) that declared it via `push(tag, attrs, ns, { keep: [...] })`.
     * Unlike getAttrValue(), this works regardless of how deep the path has
     * gone since the attribute was pushed — but only for attribute names that
     * were explicitly marked with `keep` at push time. Cost is proportional to
     * the number of currently-kept attributes (typically 0-3), not path depth.
     * @param {string} attrName
     * @returns {*} the value, or undefined if no ancestor kept this attribute
     */
  }, {
    key: "getAnyParentAttr",
    value: function getAnyParentAttr(attrName) {
      var kept = this._keptAttrs;
      for (var i = kept.length - 1; i >= 0; i--) {
        if (kept[i].name === attrName) return kept[i].value;
      }
      return undefined;
    }

    /**
     * Check whether any ancestor (or the current node) kept the given
     * attribute via `push(tag, attrs, ns, { keep: [...] })`.
     * @param {string} attrName
     * @returns {boolean}
     */
  }, {
    key: "hasAnyParentAttr",
    value: function hasAnyParentAttr(attrName) {
      var kept = this._keptAttrs;
      for (var i = kept.length - 1; i >= 0; i--) {
        if (kept[i].name === attrName) return true;
      }
      return false;
    }

    /**
     * Get current node's sibling position (child index in parent).
     * @returns {number}
     */
  }, {
    key: "getPosition",
    value: function getPosition() {
      var _this$path$position;
      if (this.path.length === 0) return -1;
      return (_this$path$position = this.path[this.path.length - 1].position) !== null && _this$path$position !== void 0 ? _this$path$position : 0;
    }

    /**
     * Get current node's repeat counter (occurrence count of this tag name).
     * @returns {number}
     */
  }, {
    key: "getCounter",
    value: function getCounter() {
      var _this$path$counter;
      if (this.path.length === 0) return -1;
      return (_this$path$counter = this.path[this.path.length - 1].counter) !== null && _this$path$counter !== void 0 ? _this$path$counter : 0;
    }

    /**
     * Get current node's sibling index (alias for getPosition).
     * @returns {number}
     * @deprecated Use getPosition() or getCounter() instead
     */
  }, {
    key: "getIndex",
    value: function getIndex() {
      return this.getPosition();
    }

    /**
     * Get current path depth.
     * @returns {number}
     */
  }, {
    key: "getDepth",
    value: function getDepth() {
      return this.path.length;
    }

    /**
     * Get path as string.
     * @param {string} [separator] - Optional separator (uses default if not provided)
     * @param {boolean} [includeNamespace=true]
     * @returns {string}
     */
  }, {
    key: "toString",
    value: function toString(separator) {
      var includeNamespace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var sep = separator || this.separator;
      var isDefault = sep === this.separator && includeNamespace === true;
      if (isDefault) {
        if (this._pathStringCache !== null) {
          return this._pathStringCache;
        }
        var result = this.path.map(function (n) {
          return n.namespace ? "".concat(n.namespace, ":").concat(n.tag) : n.tag;
        }).join(sep);
        this._pathStringCache = result;
        return result;
      }
      return this.path.map(function (n) {
        return includeNamespace && n.namespace ? "".concat(n.namespace, ":").concat(n.tag) : n.tag;
      }).join(sep);
    }

    /**
     * Get path as array of tag names.
     * @returns {string[]}
     */
  }, {
    key: "toArray",
    value: function toArray() {
      return this.path.map(function (n) {
        return n.tag;
      });
    }

    /**
     * Reset the path to empty.
     */
  }, {
    key: "reset",
    value: function reset() {
      this._pathStringCache = null;
      this.path = [];
      this.siblingStacks = [];
      this._keptAttrs = [];
    }

    /**
     * Match current path against an Expression.
     * @param {Expression} expression
     * @returns {boolean}
     */
  }, {
    key: "matches",
    value: function matches(expression) {
      var segments = expression.segments;
      if (segments.length === 0) {
        return false;
      }
      if (expression.hasDeepWildcard()) {
        return this._matchWithDeepWildcard(segments);
      }
      return this._matchSimple(segments);
    }

    /**
     * @private
     */
  }, {
    key: "_matchSimple",
    value: function _matchSimple(segments) {
      if (this.path.length !== segments.length) {
        return false;
      }
      for (var i = 0; i < segments.length; i++) {
        if (!this._matchSegment(segments[i], this.path[i], i === this.path.length - 1)) {
          return false;
        }
      }
      return true;
    }

    /**
     * @private
     */
  }, {
    key: "_matchWithDeepWildcard",
    value: function _matchWithDeepWildcard(segments) {
      var pathIdx = this.path.length - 1;
      var segIdx = segments.length - 1;
      while (segIdx >= 0 && pathIdx >= 0) {
        var segment = segments[segIdx];
        if (segment.type === 'deep-wildcard') {
          segIdx--;
          if (segIdx < 0) {
            return true;
          }
          var nextSeg = segments[segIdx];
          var found = false;
          for (var i = pathIdx; i >= 0; i--) {
            if (this._matchSegment(nextSeg, this.path[i], i === this.path.length - 1)) {
              pathIdx = i - 1;
              segIdx--;
              found = true;
              break;
            }
          }
          if (!found) {
            return false;
          }
        } else {
          if (!this._matchSegment(segment, this.path[pathIdx], pathIdx === this.path.length - 1)) {
            return false;
          }
          pathIdx--;
          segIdx--;
        }
      }
      return segIdx < 0;
    }

    /**
     * @private
     */
  }, {
    key: "_matchSegment",
    value: function _matchSegment(segment, node, isCurrentNode) {
      if (segment.tag !== '*' && segment.tag !== node.tag) {
        return false;
      }
      if (segment.namespace !== undefined) {
        if (segment.namespace !== '*' && segment.namespace !== node.namespace) {
          return false;
        }
      }
      if (segment.attrName !== undefined) {
        if (!isCurrentNode) {
          return false;
        }
        if (!node.values || !(segment.attrName in node.values)) {
          return false;
        }
        if (segment.attrValue !== undefined) {
          if (String(node.values[segment.attrName]) !== String(segment.attrValue)) {
            return false;
          }
        }
      }
      if (segment.position !== undefined) {
        var _node$counter;
        if (!isCurrentNode) {
          return false;
        }
        var counter = (_node$counter = node.counter) !== null && _node$counter !== void 0 ? _node$counter : 0;
        if (segment.position === 'first' && counter !== 0) {
          return false;
        } else if (segment.position === 'odd' && counter % 2 !== 1) {
          return false;
        } else if (segment.position === 'even' && counter % 2 !== 0) {
          return false;
        } else if (segment.position === 'nth' && counter !== segment.positionValue) {
          return false;
        }
      }
      return true;
    }

    /**
     * Match any expression in the given set against the current path.
     * @param {ExpressionSet} exprSet
     * @returns {boolean}
     */
  }, {
    key: "matchesAny",
    value: function matchesAny(exprSet) {
      return exprSet.matchesAny(this);
    }

    /**
     * Create a snapshot of current state.
     * @returns {Object}
     */
  }, {
    key: "snapshot",
    value: function snapshot() {
      return {
        path: this.path.map(function (node) {
          return _objectSpread({}, node);
        }),
        siblingStacks: this.siblingStacks.map(function (map) {
          return new Map(map);
        }),
        keptAttrs: this._keptAttrs.map(function (entry) {
          return _objectSpread({}, entry);
        })
      };
    }

    /**
     * Restore state from snapshot.
     * @param {Object} snapshot
     */
  }, {
    key: "restore",
    value: function restore(snapshot) {
      this._pathStringCache = null;
      this.path = snapshot.path.map(function (node) {
        return _objectSpread({}, node);
      });
      this.siblingStacks = snapshot.siblingStacks.map(function (map) {
        return new Map(map);
      });
      this._keptAttrs = (snapshot.keptAttrs || []).map(function (entry) {
        return _objectSpread({}, entry);
      });
    }

    /**
     * Return the read-only {@link MatcherView} for this matcher.
     *
     * The same instance is returned on every call — no allocation occurs.
     * It always reflects the current parser state and is safe to pass to
     * user callbacks without risk of accidental mutation.
     *
     * @returns {MatcherView}
     *
     * @example
     * const view = matcher.readOnly();
     * // pass view to callbacks — it stays in sync automatically
     * view.matches(expr);       // ✓
     * view.getCurrentTag();     // ✓
     * // view.push(...)         // ✗ method does not exist — caught by TypeScript
     */
  }, {
    key: "readOnly",
    value: function readOnly() {
      return this._view;
    }
  }]);
}();


/***/ }),

/***/ "./node_modules/path-expression-matcher/src/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/path-expression-matcher/src/index.js ***!
  \***********************************************************/
/*! exports provided: Expression, Matcher, ExpressionSet, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Expression_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Expression.js */ "./node_modules/path-expression-matcher/src/Expression.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Expression", function() { return _Expression_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Matcher_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Matcher.js */ "./node_modules/path-expression-matcher/src/Matcher.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Matcher", function() { return _Matcher_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _ExpressionSet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ExpressionSet.js */ "./node_modules/path-expression-matcher/src/ExpressionSet.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpressionSet", function() { return _ExpressionSet_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/**
 * fast-xml-tagger - XML/JSON path matching library
 *
 * Provides efficient path tracking and pattern matching for XML/JSON parsers.
 *
 * @example
 * import { Expression, Matcher } from 'fast-xml-tagger';
 *
 * // Create expression (parse once)
 * const expr = new Expression("root.users.user[id]");
 *
 * // Create matcher (track path)
 * const matcher = new Matcher();
 * matcher.push("root", [], {}, 0);
 * matcher.push("users", [], {}, 0);
 * matcher.push("user", ["id", "type"], { id: "123", type: "admin" }, 0);
 *
 * // Match
 * if (matcher.matches(expr)) {
 *   console.log("Match found!");
 * }
 */





/* harmony default export */ __webpack_exports__["default"] = ({
  Expression: _Expression_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  Matcher: _Matcher_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  ExpressionSet: _ExpressionSet_js__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/strnum/strnum.js":
/*!***************************************!*\
  !*** ./node_modules/strnum/strnum.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return toNumber; });
/* harmony import */ var anynum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! anynum */ "./node_modules/anynum/anynum.js");
const hexRegex = /^[-+]?0x[a-fA-F0-9]+$/;
const binRegex = /^0b[01]+$/;
const octRegex = /^0o[0-7]+$/;
const numRegex = /^([\-\+])?(0*)([0-9]*(\.[0-9]*)?)$/;



const consider = {
    hex: true,
    binary: false,
    octal: false,
    leadingZeros: true,
    decimalPoint: "\.",
    eNotation: true,
    //skipLike: /regex/,
    infinity: "original", // "null", "infinity" (Infinity type), "string" ("Infinity" (the string literal))
    unicode: false,
};

function toNumber(str, options = {}) {
    options = Object.assign({}, consider, options);
    if (!str || typeof str !== "string") return str;

    let trimmedStr = str.trim();

    if (trimmedStr.length === 0) return str;
    else if (options.skipLike !== undefined && options.skipLike.test(trimmedStr)) return str;
    else if (trimmedStr === "0") return 0;

    if (options.unicode) {
        trimmedStr = Object(anynum__WEBPACK_IMPORTED_MODULE_0__["default"])(trimmedStr);
        if (trimmedStr === "0") return 0; // re-check after normalization
    }
    if (options.hex && hexRegex.test(trimmedStr)) {
        return parse_int(trimmedStr, 16);
    } else if (options.binary && binRegex.test(trimmedStr)) {
        return parse_int(trimmedStr, 2);
    } else if (options.octal && octRegex.test(trimmedStr)) {
        return parse_int(trimmedStr, 8);
    } else if (!isFinite(trimmedStr)) { //Infinity
        return handleInfinity(str, Number(trimmedStr), options);
    } else if (trimmedStr.includes('e') || trimmedStr.includes('E')) { //eNotation
        return resolveEnotation(str, trimmedStr, options);
    } else {
        //separate negative sign, leading zeros, and rest number
        const match = numRegex.exec(trimmedStr);
        // +00.123 => [ , '+', '00', '.123', ..
        if (match) {
            const sign = match[1] || "";
            const leadingZeros = match[2];
            let numTrimmedByZeros = trimZeros(match[3]); //complete num without leading zeros
            const decimalAdjacentToLeadingZeros = sign ? // 0., -00., 000.
                str[leadingZeros.length + 1] === "."
                : str[leadingZeros.length] === ".";

            //trim ending zeros for floating number
            if (!options.leadingZeros //leading zeros are not allowed
                && (leadingZeros.length > 1
                    || (leadingZeros.length === 1 && !decimalAdjacentToLeadingZeros))) {
                // 00, 00.3, +03.24, 03, 03.24
                return str;
            }
            else {//no leading zeros or leading zeros are allowed
                const num = Number(trimmedStr);
                const parsedStr = String(num);

                if (num === 0) return num;
                if (parsedStr.search(/[eE]/) !== -1) { //given number is long and parsed to eNotation
                    if (options.eNotation) return num;
                    else return str;
                } else if (trimmedStr.indexOf(".") !== -1) { //floating number
                    if (parsedStr === "0") return num; //0.0
                    else if (parsedStr === numTrimmedByZeros) return num; //0.456. 0.79000
                    else if (parsedStr === `${sign}${numTrimmedByZeros}`) return num;
                    else return str;
                }

                let n = leadingZeros ? numTrimmedByZeros : trimmedStr;
                if (leadingZeros) {
                    // -009 => -9
                    return (n === parsedStr) || (sign + n === parsedStr) ? num : str
                } else {
                    // +9
                    return (n === parsedStr) || (n === sign + parsedStr) ? num : str
                }
            }
        } else { //non-numeric string
            return str;
        }
    }
}

const eNotationRegx = /^([-+])?(0*)(\d*(\.\d*)?[eE][-\+]?\d+)$/;
function resolveEnotation(str, trimmedStr, options) {
    if (!options.eNotation) return str;
    const notation = trimmedStr.match(eNotationRegx);
    if (notation) {
        let sign = notation[1] || "";
        const eChar = notation[3].indexOf("e") === -1 ? "E" : "e";
        const leadingZeros = notation[2];
        const eAdjacentToLeadingZeros = sign ? // 0E.
            str[leadingZeros.length + 1] === eChar
            : str[leadingZeros.length] === eChar;

        if (leadingZeros.length > 1 && eAdjacentToLeadingZeros) return str;
        else if (leadingZeros.length === 1
            && (notation[3].startsWith(`.${eChar}`) || notation[3][0] === eChar)) {
            return Number(trimmedStr);
        } else if (leadingZeros.length > 0) {
            // Has leading zeros — only accept if leadingZeros option allows it
            if (options.leadingZeros && !eAdjacentToLeadingZeros) {
                trimmedStr = (notation[1] || "") + notation[3];
                return Number(trimmedStr);
            } else return str;
        } else {
            // No leading zeros — always valid e-notation, parse it
            return Number(trimmedStr);
        }
    } else {
        return str;
    }
}

/**
 *
 * @param {string} numStr without leading zeros
 * @returns
 */
function trimZeros(numStr) {
    if (numStr && numStr.indexOf(".") !== -1) {//float
        numStr = numStr.replace(/0+$/, ""); //remove ending zeros
        if (numStr === ".") numStr = "0";
        else if (numStr[0] === ".") numStr = "0" + numStr;
        else if (numStr[numStr.length - 1] === ".") numStr = numStr.substring(0, numStr.length - 1);
        return numStr;
    }
    return numStr;
}

function parse_int(numStr, base) {
    const str = numStr.trim();
    if (base === 2 || base === 8) numStr = str.substring(2);

    if (parseInt) return parseInt(numStr, base);
    else if (Number.parseInt) return Number.parseInt(numStr, base);
    else if (window && window.parseInt) return window.parseInt(numStr, base);
    else throw new Error("parseInt, Number.parseInt, window.parseInt are not supported");
}

/**
 * Handle infinite values based on user option
 * @param {string} str - original input string
 * @param {number} num - parsed number (Infinity or -Infinity)
 * @param {object} options - user options
 * @returns {string|number|null} based on infinity option
 */
function handleInfinity(str, num, options) {
    const isPositive = num === Infinity;

    switch (options.infinity.toLowerCase()) {
        case "null":
            return null;
        case "infinity":
            return num; // Return Infinity or -Infinity
        case "string":
            return isPositive ? "Infinity" : "-Infinity";
        case "original":
        default:
            return str; // Return original string like "1e1000"
    }
}

/***/ }),

/***/ "./node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./node_modules/xml-naming/src/index.js":
/*!**********************************************!*\
  !*** ./node_modules/xml-naming/src/index.js ***!
  \**********************************************/
/*! exports provided: name, ncName, qName, nmToken, nmTokens, validate, validateAll, sanitize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ncName", function() { return ncName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "qName", function() { return qName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nmToken", function() { return nmToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nmTokens", function() { return nmTokens; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validate", function() { return validate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateAll", function() { return validateAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sanitize", function() { return sanitize; });
/**
 * xml-naming
 * Validates XML Name productions as defined in the XML 1.0 and 1.1 specifications.
 * Covers: Name, NCName, QName, NMToken, NMTokens
 *
 * XML 1.0 spec: https://www.w3.org/TR/xml/#NT-Name
 * XML 1.1 spec: https://www.w3.org/TR/xml11/#NT-NameStartChar
 * XML NS spec:  https://www.w3.org/TR/xml-names/#NT-NCName
 */

// ---------------------------------------------------------------------------
// Character class strings — XML 1.0
//
// NameStartChar ::= ":" | [A-Z] | "_" | [a-z]
//   | [#xC0-#xD6]   | [#xD8-#xF6]   | [#xF8-#x2FF]
//   | [#x370-#x37D] | [#x37F-#x1FFF]    <- split to exclude #x0487
//   | [#x200C-#x200D]
//   | [#x2070-#x218F] | [#x2C00-#x2FEF]
//   | [#x3001-#xD7FF] | [#xF900-#xFDCF] | [#xFDF0-#xFFFD]
//
// NameChar ::= NameStartChar | "-" | "." | [0-9]
//   | #xB7 | [#x0300-#x036F] | [#x203F-#x2040]
//
// Note: \u0487 (Combining Cyrillic Millions Sign) was added in Unicode 4.0,
// after XML 1.0 was defined against Unicode 2.0. It falls inside the range
// \u037F-\u1FFF but must be excluded. We split that range into
// \u037F-\u0486 and \u0488-\u1FFF to exclude it explicitly.
// ---------------------------------------------------------------------------

const nameStartChar10 =
  ':A-Za-z_' +
  '\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF' +
  '\u0370-\u037D' +
  '\u037F-\u0486\u0488-\u1FFF' +  // split to exclude \u0487
  '\u200C-\u200D' +
  '\u2070-\u218F' +
  '\u2C00-\u2FEF' +
  '\u3001-\uD7FF' +
  '\uF900-\uFDCF' +
  '\uFDF0-\uFFFD';

const nameChar10 =
  nameStartChar10 +
  '\\-\\.\\d' +
  '\u00B7' +
  '\u0300-\u036F' +
  '\u203F-\u2040';

// ---------------------------------------------------------------------------
// Character class strings — XML 1.1
//
// Differences from XML 1.0:
//
// NameStartChar:
//   1.0 has split ranges: \u00C0-\u00D6, \u00D8-\u00F6, \u00F8-\u02FF
//   1.1 merges them into: \u00C0-\u02FF
//   (\u00D7 x and \u00F7 / are division symbols, excluded in both versions)
//
//   1.0 tops out at \uFFFD (BMP only)
//   1.1 adds \u{10000}-\u{EFFFF} (supplementary planes)
//   These require the /u flag on the RegExp — see buildRegexes below.
//
// NameChar:
//   1.1 adds \u0487 (Combining Cyrillic Millions Sign, added in Unicode 4.0)
// ---------------------------------------------------------------------------

const nameStartChar11 =
  ':A-Za-z_' +
  '\u00C0-\u02FF' +                    // merged — 1.0 had three split ranges here
  '\u0370-\u037D' +
  '\u037F-\u0486\u0488-\u1FFF' +       // split to exclude \u0487 (combining mark, never a NameStartChar)
  '\u200C-\u200D' +
  '\u2070-\u218F' +
  '\u2C00-\u2FEF' +
  '\u3001-\uD7FF' +
  '\uF900-\uFDCF' +
  '\uFDF0-\uFFFD' +
  '\u{10000}-\u{EFFFF}';     // supplementary planes — REQUIRES /u flag on RegExp

const nameChar11 =
  nameStartChar11 +
  '\\-\\.\\d' +
  '\u00B7' +
  '\u0300-\u036F' +
  '\u0487' +                 // Combining Cyrillic Millions Sign — valid in 1.1, not 1.0
  '\u203F-\u2040';

// ---------------------------------------------------------------------------
// Regex builders
//
// XML 1.0 regexes: no flags — BMP only, standard JS regex behaviour.
// XML 1.1 regexes: /u flag — required for \u{10000}-\u{EFFFF} to match actual
//   supplementary code points rather than lone surrogates (which are illegal XML).
// ---------------------------------------------------------------------------

const buildRegexes = (startChar, char, flags = '') => {
  const ncStart = startChar.replace(':', '');
  const ncChar = char.replace(':', '');
  const ncNamePat = `[${ncStart}][${ncChar}]*`;

  return {
    name: new RegExp(`^[${startChar}][${char}]*$`, flags),
    ncName: new RegExp(`^${ncNamePat}$`, flags),
    qName: new RegExp(`^${ncNamePat}(?::${ncNamePat})?$`, flags),
    nmToken: new RegExp(`^[${char}]+$`, flags),
    nmTokens: new RegExp(`^[${char}]+(?:\\s+[${char}]+)*$`, flags),
  };
};

const regexes10 = buildRegexes(nameStartChar10, nameChar10);       // no /u — BMP only
const regexes11 = buildRegexes(nameStartChar11, nameChar11, 'u');  // /u — enables \u{10000}-\u{EFFFF}

const getRegexes = (xmlVersion = '1.0') =>
  xmlVersion === '1.1' ? regexes11 : regexes10;

// ---------------------------------------------------------------------------
// Boolean validators
// ---------------------------------------------------------------------------

/**
 * Returns true if the string is a valid XML Name.
 * Colons are allowed anywhere (Name production).
 * Used for: DOCTYPE entity names, notation names, DTD element declarations.
 */
const name = (str, { xmlVersion = '1.0' } = {}) =>
  getRegexes(xmlVersion).name.test(str);

/**
 * Returns true if the string is a valid NCName (Non-Colonized Name).
 * Colons are not permitted.
 * Used for: namespace prefixes, local names, SVG id attributes.
 */
const ncName = (str, { xmlVersion = '1.0' } = {}) =>
  getRegexes(xmlVersion).ncName.test(str);

/**
 * Returns true if the string is a valid QName (Qualified Name).
 * Allows exactly one colon as a prefix separator: prefix:localName.
 * Used for: element and attribute names in namespace-aware XML/SVG.
 */
const qName = (str, { xmlVersion = '1.0' } = {}) =>
  getRegexes(xmlVersion).qName.test(str);

/**
 * Returns true if the string is a valid NMToken.
 * Like Name but no restriction on the first character.
 * Used for: DTD NMTOKEN attribute values.
 */
const nmToken = (str, { xmlVersion = '1.0' } = {}) =>
  getRegexes(xmlVersion).nmToken.test(str);

/**
 * Returns true if the string is a valid NMTokens value.
 * A whitespace-separated list of NMToken values.
 * Used for: DTD NMTOKENS attribute values.
 */
const nmTokens = (str, { xmlVersion = '1.0' } = {}) =>
  getRegexes(xmlVersion).nmTokens.test(str);

// ---------------------------------------------------------------------------
// Diagnostic validator
// ---------------------------------------------------------------------------

const PRODUCTIONS = ['name', 'ncName', 'qName', 'nmToken', 'nmTokens'];

/**
 * Validates a string against a named production and returns a detailed result.
 *
 * @param {string} str
 * @param {'name'|'ncName'|'qName'|'nmToken'|'nmTokens'} production
 * @param {{ xmlVersion?: '1.0'|'1.1' }} [opts]
 * @returns {{ valid: boolean, production: string, input: string, reason?: string, position?: number }}
 */
const validate = (str, production, { xmlVersion = '1.0' } = {}) => {
  if (!PRODUCTIONS.includes(production)) {
    throw new TypeError(
      `Unknown production "${production}". Must be one of: ${PRODUCTIONS.join(', ')}`
    );
  }

  const validators = { name, ncName, qName, nmToken, nmTokens };
  const isValid = validators[production](str, { xmlVersion });

  if (isValid) return { valid: true, production, input: str };

  let reason = 'Does not match the production rules';
  let position;

  if (str.length === 0) {
    reason = 'Input is empty';
  } else if (production === 'ncName' && str.includes(':')) {
    position = str.indexOf(':');
    reason = 'Colon is not allowed in NCName';
  } else if (production === 'qName' && str.startsWith(':')) {
    reason = 'QName cannot start with a colon';
    position = 0;
  } else if (production === 'qName' && str.endsWith(':')) {
    reason = 'QName cannot end with a colon';
    position = str.length - 1;
  } else if (production === 'qName' && (str.match(/:/g) || []).length > 1) {
    reason = 'QName can have at most one colon';
    position = str.lastIndexOf(':');
  } else if (
    ['name', 'ncName', 'qName'].includes(production) &&
    !/^[:A-Za-z_\u00C0-\uFFFD]/.test(str[0])
  ) {
    reason = `First character "${str[0]}" is not a valid NameStartChar`;
    position = 0;
  } else {
    for (let i = 0; i < str.length; i++) {
      if (!/[\w\-\\.:\u00B7\u00C0-\uFFFD]/.test(str[i])) {
        reason = `Character "${str[i]}" at position ${i} is not a valid NameChar`;
        position = i;
        break;
      }
    }
  }

  return { valid: false, production, input: str, reason, position };
};

// ---------------------------------------------------------------------------
// Batch validator
// ---------------------------------------------------------------------------

/**
 * Validates an array of strings against a named production.
 *
 * @param {string[]} strings
 * @param {'name'|'ncName'|'qName'|'nmToken'|'nmTokens'} production
 * @param {{ xmlVersion?: '1.0'|'1.1' }} [opts]
 * @returns {Array<{ valid: boolean, production: string, input: string, reason?: string, position?: number }>}
 */
const validateAll = (strings, production, opts = {}) =>
  strings.map(str => validate(str, production, opts));

// ---------------------------------------------------------------------------
// Sanitizer
// ---------------------------------------------------------------------------

/**
 * Transforms an invalid string into the nearest valid XML name for the given production.
 *
 * @param {string} str
 * @param {'name'|'ncName'|'qName'|'nmToken'|'nmTokens'} production
 * @param {{ replacement?: string }} [opts]
 * @returns {string}
 */
const sanitize = (str, production = 'name', { replacement = '_' } = {}) => {
  if (!str) return replacement;

  let result = str;

  // Strip colons for NCName
  if (production === 'ncName') {
    result = result.replace(/:/g, '');
  }

  // Replace illegal characters
  result = result.replace(/[^\w\-\.:\u00B7\u00C0-\uFFFD]/g, replacement);

  // Fix invalid start character for Name / NCName / QName
  if (production !== 'nmToken' && production !== 'nmTokens') {
    if (/^[\-\.\d]/.test(result)) {
      result = replacement + result;
    }
  }

  return result || replacement;
};

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, description, main, types, scripts, repository, keywords, author, license, bugs, homepage, dependencies, devDependencies, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"@acgrid/cos-js-sdk-v5\",\"version\":\"1.10.1\",\"description\":\"JavaScript SDK for [腾讯云对象存储](https://cloud.tencent.com/product/cos)\",\"main\":\"dist/cos-js-sdk-v5.js\",\"types\":\"index.d.ts\",\"scripts\":{\"prettier\":\"prettier --write src demo/demo.js demo/CIDemos/*.js test/test.js server/sts.js lib/request.js index.d.ts\",\"server\":\"node server/sts.js\",\"server:env\":\"node -r dotenv/config server/sts.js\",\"dev\":\"cross-env NODE_ENV=development webpack -w --mode=development\",\"build\":\"cross-env NODE_ENV=production webpack --mode=production\",\"cos-auth.min.js\":\"uglifyjs ./demo/common/cos-auth.js -o ./demo/common/cos-auth.min.js -c -m\",\"test\":\"jest --runInBand --coverage\",\"test:env\":\"node -r dotenv/config ./node_modules/jest/bin/jest.js --runInBand --coverage\",\"postinstall\":\"node scripts/patch-check.js\"},\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/acgrid/tencent-cos-js-sdk-v5.git\"},\"keywords\":[],\"author\":\"carsonxu\",\"license\":\"ISC\",\"bugs\":{\"url\":\"https://github.com/acgrid/tencent-cos-js-sdk-v5/issues\"},\"homepage\":\"https://github.com/acgrid/tencent-cos-js-sdk-v5#readme\",\"dependencies\":{\"@babel/runtime\":\"^7.29.7\",\"fast-xml-parser\":\"^5.9.2\"},\"devDependencies\":{\"@babel/core\":\"^7.29.7\",\"@babel/plugin-transform-runtime\":\"^7.29.7\",\"@babel/preset-env\":\"^7.29.7\",\"babel-loader\":\"8.2.5\",\"body-parser\":\"^1.18.3\",\"cross-env\":\"^5.2.0\",\"dotenv\":\"^16.4.7\",\"express\":\"^4.16.4\",\"jest\":\"29.7.0\",\"jest-environment-jsdom\":\"29.7.0\",\"patch-package\":\"^8.0.0\",\"prettier\":\"^3.0.1\",\"qcloud-cos-sts\":\"^3.0.2\",\"request\":\"^2.87.0\",\"terser-webpack-plugin\":\"4.2.3\",\"uglifyjs\":\"^2.4.11\",\"webpack\":\"4.46.0\",\"webpack-cli\":\"4.10.0\"}}");

/***/ }),

/***/ "./src/advance.js":
/*!************************!*\
  !*** ./src/advance.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
var session = __webpack_require__(/*! ./session */ "./src/session.js");
var Async = __webpack_require__(/*! ./async */ "./src/async.js");
var EventProxy = __webpack_require__(/*! ./event */ "./src/event.js").EventProxy;
var util = __webpack_require__(/*! ./util */ "./src/util.js");
var Tracker = __webpack_require__(/*! ./tracker */ "./src/tracker.js");

// 文件分块上传全过程，暴露的分块上传接口
function sliceUploadFile(params, callback) {
  var self = this;
  var ep = new EventProxy();
  var TaskId = params.TaskId;
  var Bucket = params.Bucket;
  var Region = params.Region;
  var Key = params.Key;
  var Body = params.Body;
  var ChunkSize = params.ChunkSize || params.SliceSize || self.options.ChunkSize;
  var AsyncLimit = params.AsyncLimit;
  var StorageClass = params.StorageClass;
  var ServerSideEncryption = params.ServerSideEncryption;
  var FileSize;
  var onProgress;
  var onHashProgress = params.onHashProgress;
  var tracker = params.tracker;
  tracker && tracker.setParams({
    chunkSize: ChunkSize
  });
  self.logger.info({
    cate: 'PROCESS',
    tag: 'upload',
    msg: "[key=".concat(params.Key, "] \u5206\u5757\u4E0A\u4F20\u5F00\u59CB")
  });

  // 上传过程中出现错误，返回错误
  ep.on('error', function (err) {
    if (!self._isRunningTask(TaskId)) return;
    if (params.UploadData.UploadId) {
      session.removeUsing(params.UploadData.UploadId);
    }
    err.UploadId = params.UploadData.UploadId || '';
    self.logger.error({
      cate: 'RESULT',
      tag: 'upload',
      msg: "[key=".concat(params.Key, "] \u5206\u5757\u4E0A\u4F20\u5931\u8D25: ").concat(JSON.stringify(err))
    });
    return callback(err);
  });

  // 上传分块完成，开始 uploadSliceComplete 操作
  ep.on('upload_complete', function (UploadCompleteData) {
    var _UploadCompleteData = util.extend({
      UploadId: params.UploadData.UploadId || ''
    }, UploadCompleteData);
    callback(null, _UploadCompleteData);
  });

  // 上传分块完成，开始 uploadSliceComplete 操作
  ep.on('upload_slice_complete', function (UploadData) {
    var metaHeaders = {};
    util.each(params.Headers, function (val, k) {
      var shortKey = k.toLowerCase();
      if (shortKey.indexOf('x-cos-meta-') === 0 || ['pic-operations', 'x-cos-callback', 'x-cos-callback-var', 'x-cos-return-body'].includes(shortKey)) {
        metaHeaders[k] = val;
      }
    });
    self.logger.info({
      cate: 'PROCESS',
      tag: 'upload',
      msg: "[key=".concat(params.Key, "] \u5F00\u59CB\u5B8C\u6210\u5206\u5757\u8BF7\u6C42")
    });
    uploadSliceComplete.call(self, {
      Bucket: Bucket,
      Region: Region,
      Key: Key,
      UploadId: UploadData.UploadId,
      SliceList: UploadData.SliceList,
      Headers: metaHeaders,
      tracker: tracker
    }, function (err, data) {
      if (!self._isRunningTask(TaskId)) return;
      session.removeUsing(UploadData.UploadId);
      if (err) {
        onProgress(null, true);
        self.logger.error({
          cate: 'RESULT',
          tag: 'upload',
          msg: "[key=".concat(params.Key, "] \u5B8C\u6210\u5206\u5757\u8BF7\u6C42\u5931\u8D25")
        });
        return ep.emit('error', err);
      }
      session.removeUploadId.call(self, UploadData.UploadId);
      onProgress({
        loaded: FileSize,
        total: FileSize
      }, true);
      self.logger.info({
        cate: 'RESULT',
        tag: 'upload',
        msg: "[key=".concat(params.Key, "] \u5B8C\u6210\u5206\u5757\u8BF7\u6C42\u6210\u529F")
      });
      ep.emit('upload_complete', data);
    });
  });

  // 获取 UploadId 完成，开始上传每个分片
  ep.on('get_upload_data_finish', function (UploadData) {
    // 处理 UploadId 缓存
    var uuid = session.getFileId(Body, params.ChunkSize, Bucket, Key);
    uuid && session.saveUploadId.call(self, uuid, UploadData.UploadId, self.options.UploadIdCacheLimit); // 缓存 UploadId
    session.setUsing(UploadData.UploadId); // 标记 UploadId 为正在使用

    // 获取 UploadId
    onProgress(null, true); // 任务状态开始 uploading
    self.logger.info({
      cate: 'PROCESS',
      tag: 'upload',
      msg: "[key=".concat(params.Key, "] \u5F00\u59CB\u4E0A\u4F20\u5404\u4E2A\u5206\u5757")
    });
    uploadSliceList.call(self, {
      TaskId: TaskId,
      Bucket: Bucket,
      Region: Region,
      Key: Key,
      Body: Body,
      FileSize: FileSize,
      SliceSize: ChunkSize,
      AsyncLimit: AsyncLimit,
      ServerSideEncryption: ServerSideEncryption,
      UploadData: UploadData,
      Headers: params.Headers,
      onProgress: onProgress,
      tracker: tracker
    }, function (err, data) {
      if (!self._isRunningTask(TaskId)) return;
      if (err) {
        onProgress(null, true);
        self.logger.error({
          cate: 'PROCESS',
          tag: 'upload',
          msg: "[key=".concat(params.Key, "] \u5206\u5757\u4E0A\u4F20\u5931\u8D25")
        });
        return ep.emit('error', err);
      }
      self.logger.info({
        cate: 'PROCESS',
        tag: 'upload',
        msg: "[key=".concat(params.Key, "] \u6240\u6709\u5206\u5757\u4E0A\u4F20\u5B8C\u6210")
      });
      ep.emit('upload_slice_complete', data);
    });
  });

  // 开始获取文件 UploadId，里面会视情况计算 ETag，并比对，保证文件一致性，也优化上传
  ep.on('get_file_size_finish', function () {
    onProgress = util.throttleOnProgress.call(self, FileSize, params.onProgress);
    if (params.UploadData.UploadId) {
      self.logger.info({
        cate: 'PROCESS',
        tag: 'upload',
        msg: "[key=".concat(params.Key, "] \u5DF2\u7ECF\u83B7\u53D6\u5230 uploadId, ").concat(params.UploadData.UploadId)
      });
      ep.emit('get_upload_data_finish', params.UploadData);
    } else {
      var _params = util.extend({
        TaskId: TaskId,
        Bucket: Bucket,
        Region: Region,
        Key: Key,
        Headers: params.Headers,
        StorageClass: StorageClass,
        Body: Body,
        FileSize: FileSize,
        SliceSize: ChunkSize,
        onHashProgress: onHashProgress,
        tracker: tracker
      }, params);
      self.logger.info({
        cate: 'PROCESS',
        tag: 'upload',
        msg: "[key=".concat(params.Key, "] \u53BB\u83B7\u53D6 uploadId")
      });
      getUploadIdAndPartList.call(self, _params, function (err, UploadData) {
        if (!self._isRunningTask(TaskId)) return;
        if (err) return ep.emit('error', err);
        params.UploadData.UploadId = UploadData.UploadId;
        params.UploadData.PartList = UploadData.PartList;
        self.logger.info({
          cate: 'PROCESS',
          tag: 'upload',
          msg: "[key=".concat(params.Key, "] \u83B7\u53D6\u5230 uploadId, ").concat(params.UploadData.UploadId)
        });
        ep.emit('get_upload_data_finish', params.UploadData);
      });
    }
  });

  // 获取上传文件大小
  FileSize = params.ContentLength;
  delete params.ContentLength;
  !params.Headers && (params.Headers = {});
  util.each(params.Headers, function (item, key) {
    if (key.toLowerCase() === 'content-length') {
      delete params.Headers[key];
    }
  });

  // 控制分片大小
  (function () {
    var SIZE = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 1024 * 2, 1024 * 4, 1024 * 5];
    var AutoChunkSize = 1024 * 1024;
    for (var i = 0; i < SIZE.length; i++) {
      AutoChunkSize = SIZE[i] * 1024 * 1024;
      if (FileSize / AutoChunkSize <= self.options.MaxPartNumber) break;
    }
    params.ChunkSize = params.SliceSize = ChunkSize = Math.max(ChunkSize, AutoChunkSize);
  })();

  // 开始上传
  if (FileSize === 0) {
    params.Body = '';
    params.ContentLength = 0;
    params.SkipTask = true;
    self.logger.info({
      cate: 'PROCESS',
      tag: 'upload',
      msg: "[key=".concat(params.Key, "] \u6587\u4EF6\u5927\u5C0F\u4E3A 0\uFF0C\u6267\u884C\u7B80\u5355\u4E0A\u4F20")
    });
    self.putObject(params, callback);
  } else {
    ep.emit('get_file_size_finish');
  }
}

// 获取上传任务的 UploadId
function getUploadIdAndPartList(params, callback) {
  var TaskId = params.TaskId;
  var Bucket = params.Bucket;
  var Region = params.Region;
  var Key = params.Key;
  var StorageClass = params.StorageClass;
  var self = this;

  // 计算 ETag
  var ETagMap = {};
  var FileSize = params.FileSize;
  var SliceSize = params.SliceSize;
  var SliceCount = Math.ceil(FileSize / SliceSize);
  var FinishSliceCount = 0;
  var FinishSize = 0;
  var onHashProgress = util.throttleOnProgress.call(self, FileSize, params.onHashProgress);
  var getChunkETag = function getChunkETag(PartNumber, callback) {
    var start = SliceSize * (PartNumber - 1);
    var end = Math.min(start + SliceSize, FileSize);
    var ChunkSize = end - start;
    if (ETagMap[PartNumber]) {
      callback(null, {
        PartNumber: PartNumber,
        ETag: ETagMap[PartNumber],
        Size: ChunkSize
      });
    } else {
      util.fileSlice(params.Body, start, end, false, function (chunkItem) {
        util.getFileMd5(chunkItem, function (err, md5) {
          if (err) return callback(util.error(err));
          var ETag = '"' + md5 + '"';
          ETagMap[PartNumber] = ETag;
          FinishSliceCount += 1;
          FinishSize += ChunkSize;
          onHashProgress({
            loaded: FinishSize,
            total: FileSize
          });
          callback(null, {
            PartNumber: PartNumber,
            ETag: ETag,
            Size: ChunkSize
          });
        });
      });
    }
  };

  // 通过和文件的 md5 对比，判断 UploadId 是否可用
  var isAvailableUploadList = function isAvailableUploadList(PartList, callback) {
    var PartCount = PartList.length;
    // 如果没有分片，通过
    if (PartCount === 0) {
      return callback(null, true);
    }
    // 检查分片数量
    if (PartCount > SliceCount) {
      return callback(null, false);
    }
    // 检查分片大小
    if (PartCount > 1) {
      var PartSliceSize = Math.max(PartList[0].Size, PartList[1].Size);
      if (PartSliceSize !== SliceSize) {
        return callback(null, false);
      }
    }
    // 逐个分片计算并检查 ETag 是否一致
    var _next = function next(index) {
      if (index < PartCount) {
        var Part = PartList[index];
        getChunkETag(Part.PartNumber, function (err, chunk) {
          if (chunk && chunk.ETag === Part.ETag && chunk.Size === Part.Size) {
            _next(index + 1);
          } else {
            callback(null, false);
          }
        });
      } else {
        callback(null, true);
      }
    };
    _next(0);
  };
  var ep = new EventProxy();
  ep.on('error', function (errData) {
    if (!self._isRunningTask(TaskId)) return;
    return callback(errData);
  });

  // 存在 UploadId
  ep.on('upload_id_available', function (UploadData) {
    // 转换成 map
    var map = {};
    var list = [];
    util.each(UploadData.PartList, function (item) {
      map[item.PartNumber] = item;
    });
    for (var PartNumber = 1; PartNumber <= SliceCount; PartNumber++) {
      var item = map[PartNumber];
      if (item) {
        item.PartNumber = PartNumber;
        item.Uploaded = true;
      } else {
        item = {
          PartNumber: PartNumber,
          ETag: null,
          Uploaded: false
        };
      }
      list.push(item);
    }
    UploadData.PartList = list;
    callback(null, UploadData);
  });

  // 不存在 UploadId, 初始化生成 UploadId
  ep.on('no_available_upload_id', function () {
    if (!self._isRunningTask(TaskId)) return;
    var _params = util.extend({
      Bucket: Bucket,
      Region: Region,
      Key: Key,
      Query: util.clone(params.Query),
      StorageClass: StorageClass,
      Body: params.Body,
      calledBySdk: 'sliceUploadFile',
      tracker: params.tracker
    }, params);
    var headers = util.clone(params.Headers);
    delete headers['x-cos-mime-limit'];
    _params.Headers = headers;
    self.logger.info({
      cate: 'PROCESS',
      tag: 'upload',
      msg: "[key=".concat(params.Key, "] \u51C6\u5907\u521D\u59CB\u5316\u5206\u5757\u4E0A\u4F20")
    });
    self.multipartInit(_params, function (err, data) {
      if (!self._isRunningTask(TaskId)) return;
      if (err) {
        self.logger.error({
          cate: 'PROCESS',
          tag: 'upload',
          msg: "[key=".concat(params.Key, "] \u521D\u59CB\u5316\u5206\u5757\u4E0A\u4F20\u5931\u8D25, ").concat(JSON.stringify(err))
        });
        return ep.emit('error', err);
      }
      var UploadId = data.UploadId;
      if (!UploadId) {
        return callback(util.error(new Error('no such upload id')));
      }
      self.logger.info({
        cate: 'PROCESS',
        tag: 'upload',
        msg: "[key=".concat(params.Key, "] \u521D\u59CB\u5316\u5206\u5757\u4E0A\u4F20\u6210\u529F")
      });
      ep.emit('upload_id_available', {
        UploadId: UploadId,
        PartList: []
      });
    });
  });

  // 如果已存在 UploadId，找一个可以用的 UploadId
  ep.on('has_and_check_upload_id', function (UploadIdList) {
    // 串行地，找一个内容一致的 UploadId
    UploadIdList = UploadIdList.reverse();
    Async.eachLimit(UploadIdList, 1, function (UploadId, asyncCallback) {
      if (!self._isRunningTask(TaskId)) return;
      // 如果正在上传，跳过
      if (session.using[UploadId]) {
        asyncCallback(); // 检查下一个 UploadId
        return;
      }
      // 判断 UploadId 是否可用
      wholeMultipartListPart.call(self, {
        Bucket: Bucket,
        Region: Region,
        Key: Key,
        UploadId: UploadId,
        tracker: params.tracker
      }, function (err, PartListData) {
        if (!self._isRunningTask(TaskId)) return;
        if (err) {
          session.removeUsing(UploadId);
          return ep.emit('error', err);
        }
        var PartList = PartListData.PartList;
        PartList.forEach(function (item) {
          item.PartNumber *= 1;
          item.Size *= 1;
          item.ETag = item.ETag || '';
        });
        isAvailableUploadList(PartList, function (err, isAvailable) {
          if (!self._isRunningTask(TaskId)) return;
          if (err) return ep.emit('error', err);
          if (isAvailable) {
            asyncCallback({
              UploadId: UploadId,
              PartList: PartList
            }); // 马上结束
          } else {
            asyncCallback(); // 检查下一个 UploadId
          }
        });
      });
    }, function (AvailableUploadData) {
      if (!self._isRunningTask(TaskId)) return;
      onHashProgress(null, true);
      if (AvailableUploadData && AvailableUploadData.UploadId) {
        ep.emit('upload_id_available', AvailableUploadData);
      } else {
        ep.emit('no_available_upload_id');
      }
    });
  });

  // 在本地缓存找可用的 UploadId
  ep.on('seek_local_avail_upload_id', function (RemoteUploadIdList) {
    // 在本地找可用的 UploadId
    var uuid = session.getFileId(params.Body, params.ChunkSize, Bucket, Key);
    var LocalUploadIdList = session.getUploadIdList.call(self, uuid);
    if (!uuid || !LocalUploadIdList) {
      ep.emit('has_and_check_upload_id', RemoteUploadIdList);
      return;
    }
    var _next2 = function next(index) {
      // 如果本地找不到可用 UploadId，再一个个遍历校验远端
      if (index >= LocalUploadIdList.length) {
        ep.emit('has_and_check_upload_id', RemoteUploadIdList);
        return;
      }
      var UploadId = LocalUploadIdList[index];
      // 如果不在远端 UploadId 列表里，跳过并删除
      if (!util.isInArray(RemoteUploadIdList, UploadId)) {
        session.removeUploadId.call(self, UploadId);
        _next2(index + 1);
        return;
      }
      // 如果正在上传，跳过
      if (session.using[UploadId]) {
        _next2(index + 1);
        return;
      }
      // 判断 UploadId 是否存在线上
      wholeMultipartListPart.call(self, {
        Bucket: Bucket,
        Region: Region,
        Key: Key,
        UploadId: UploadId,
        tracker: params.tracker
      }, function (err, PartListData) {
        if (!self._isRunningTask(TaskId)) return;
        if (err) {
          // 如果 UploadId 获取会出错，跳过并删除
          session.removeUploadId.call(self, UploadId);
          _next2(index + 1);
        } else {
          // 找到可用 UploadId
          ep.emit('upload_id_available', {
            UploadId: UploadId,
            PartList: PartListData.PartList
          });
        }
      });
    };
    _next2(0);
  });

  // 获取线上 UploadId 列表
  ep.on('get_remote_upload_id_list', function () {
    // 获取符合条件的 UploadId 列表，因为同一个文件可以有多个上传任务。
    wholeMultipartList.call(self, {
      Bucket: Bucket,
      Region: Region,
      Key: Key,
      tracker: params.tracker
    }, function (err, data) {
      if (!self._isRunningTask(TaskId)) return;
      if (err) return ep.emit('error', err);
      // 整理远端 UploadId 列表
      var RemoteUploadIdList = util.filter(data.UploadList, function (item) {
        return item.Key === Key && (!StorageClass || item.StorageClass.toUpperCase() === StorageClass.toUpperCase());
      }).reverse().map(function (item) {
        return item.UploadId || item.UploadID;
      });
      if (RemoteUploadIdList.length) {
        ep.emit('seek_local_avail_upload_id', RemoteUploadIdList);
      } else {
        // 远端没有 UploadId，清理缓存的 UploadId
        var uuid = session.getFileId(params.Body, params.ChunkSize, Bucket, Key),
          LocalUploadIdList;
        if (uuid && (LocalUploadIdList = session.getUploadIdList.call(self, uuid))) {
          util.each(LocalUploadIdList, function (UploadId) {
            session.removeUploadId.call(self, UploadId);
          });
        }
        ep.emit('no_available_upload_id');
      }
    });
  });

  // 开始找可用 UploadId
  ep.emit('get_remote_upload_id_list');
}

// 获取符合条件的全部上传任务 (条件包括 Bucket, Region, Prefix)
function wholeMultipartList(params, callback) {
  var self = this;
  var UploadList = [];
  var sendParams = {
    Bucket: params.Bucket,
    Region: params.Region,
    Prefix: params.Key,
    calledBySdk: params.calledBySdk || 'sliceUploadFile',
    tracker: params.tracker
  };
  var _next3 = function next() {
    self.multipartList(sendParams, function (err, data) {
      if (err) return callback(err);
      UploadList.push.apply(UploadList, data.Upload || []);
      if (data.IsTruncated === 'true') {
        // 列表不完整
        sendParams.KeyMarker = data.NextKeyMarker;
        sendParams.UploadIdMarker = data.NextUploadIdMarker;
        _next3();
      } else {
        callback(null, {
          UploadList: UploadList
        });
      }
    });
  };
  _next3();
}

// 获取指定上传任务的分块列表
function wholeMultipartListPart(params, callback) {
  var self = this;
  var PartList = [];
  var sendParams = {
    Bucket: params.Bucket,
    Region: params.Region,
    Key: params.Key,
    UploadId: params.UploadId,
    calledBySdk: 'sliceUploadFile',
    tracker: params.tracker
  };
  var _next4 = function next() {
    self.multipartListPart(sendParams, function (err, data) {
      if (err) return callback(err);
      PartList.push.apply(PartList, data.Part || []);
      if (data.IsTruncated === 'true') {
        // 列表不完整
        sendParams.PartNumberMarker = data.NextPartNumberMarker;
        _next4();
      } else {
        callback(null, {
          PartList: PartList
        });
      }
    });
  };
  _next4();
}

// 上传文件分块，包括
/*
 UploadId (上传任务编号)
 AsyncLimit (并发量)，
 SliceList (上传的分块数组)，
 FilePath (本地文件的位置)，
 SliceSize (文件分块大小)
 FileSize (文件大小)
 onProgress (上传成功之后的回调函数)
 */
function uploadSliceList(params, cb) {
  var self = this;
  var TaskId = params.TaskId;
  var Bucket = params.Bucket;
  var Region = params.Region;
  var Key = params.Key;
  var UploadData = params.UploadData;
  var FileSize = params.FileSize;
  var SliceSize = params.SliceSize;
  var ChunkParallel = Math.min(params.AsyncLimit || self.options.ChunkParallelLimit || 1, 256);
  var Body = params.Body;
  var SliceCount = Math.ceil(FileSize / SliceSize);
  var FinishSize = 0;
  var ServerSideEncryption = params.ServerSideEncryption;
  var Headers = params.Headers;
  var needUploadSlices = util.filter(UploadData.PartList, function (SliceItem) {
    if (SliceItem['Uploaded']) {
      FinishSize += SliceItem['PartNumber'] >= SliceCount ? FileSize % SliceSize || SliceSize : SliceSize;
    }
    return !SliceItem['Uploaded'];
  });
  var _onProgress2 = params.onProgress;
  self.logger.info({
    cate: 'PROCESS',
    tag: 'upload',
    msg: "[key=".concat(params.Key, "] \u5F00\u59CB\u5E76\u53D1\u4E0A\u4F20\u5404\u4E2A\u5206\u5757")
  });
  Async.eachLimit(needUploadSlices, ChunkParallel, function (SliceItem, asyncCallback) {
    if (!self._isRunningTask(TaskId)) return;
    var PartNumber = SliceItem['PartNumber'];
    var currentSize = Math.min(FileSize, SliceItem['PartNumber'] * SliceSize) - (SliceItem['PartNumber'] - 1) * SliceSize;
    var preAddSize = 0;
    self.logger.info({
      cate: 'PROCESS',
      tag: 'upload',
      msg: "[key=".concat(params.Key, "] \u5206\u5757").concat(PartNumber, "\u5F00\u59CB\u4E0A\u4F20")
    });
    uploadSliceItem.call(self, {
      TaskId: TaskId,
      Bucket: Bucket,
      Region: Region,
      Key: Key,
      SliceSize: SliceSize,
      FileSize: FileSize,
      PartNumber: PartNumber,
      ServerSideEncryption: ServerSideEncryption,
      Body: Body,
      UploadData: UploadData,
      Headers: Headers,
      onProgress: function onProgress(data) {
        FinishSize += data.loaded - preAddSize;
        preAddSize = data.loaded;
        _onProgress2({
          loaded: FinishSize,
          total: FileSize
        });
      },
      tracker: params.tracker
    }, function (err, data) {
      if (!self._isRunningTask(TaskId)) return;
      if (!err && !data.ETag) {
        err = 'get ETag error, please add "ETag" to CORS ExposeHeader setting.( 获取ETag失败，请在CORS ExposeHeader设置中添加ETag，请参考文档：https://cloud.tencent.com/document/product/436/13318 )';
        self.logger.error({
          cate: 'PROCESS',
          tag: 'upload',
          msg: "[key=".concat(params.Key, "] \u5206\u5757").concat(PartNumber, "\u4E0A\u4F20\u8BF7\u6C42\u6210\u529F\uFF0C\u4F46\u662F\u672A\u83B7\u53D6\u5230 eTag")
        });
      }
      if (err) {
        FinishSize -= preAddSize;
        self.logger.info({
          cate: 'RESULT',
          tag: 'upload',
          msg: "[key=".concat(params.Key, "] \u5206\u5757").concat(PartNumber, "\u4E0A\u4F20\u5931\u8D25")
        });
      } else {
        FinishSize += currentSize - preAddSize;
        SliceItem.ETag = data.ETag;
      }
      self.logger.info({
        cate: 'RESULT',
        tag: 'upload',
        msg: "[key=".concat(params.Key, "] \u5206\u5757").concat(PartNumber, "\u4E0A\u4F20\u6210\u529F")
      });
      _onProgress2({
        loaded: FinishSize,
        total: FileSize
      });
      asyncCallback(err || null, data);
    });
  }, function (err) {
    if (!self._isRunningTask(TaskId)) return;
    if (err) return cb(err);
    cb(null, {
      UploadId: UploadData.UploadId,
      SliceList: UploadData.PartList
    });
  });
}

// 上传指定分片
function uploadSliceItem(params, callback) {
  var self = this;
  var TaskId = params.TaskId;
  var Bucket = params.Bucket;
  var Region = params.Region;
  var Key = params.Key;
  var FileSize = params.FileSize;
  var FileBody = params.Body;
  var PartNumber = params.PartNumber * 1;
  var SliceSize = params.SliceSize;
  var ServerSideEncryption = params.ServerSideEncryption;
  var UploadData = params.UploadData;
  var Headers = params.Headers || {};
  var ChunkRetryTimes = self.options.ChunkRetryTimes + 1;
  var start = SliceSize * (PartNumber - 1);
  var ContentLength = SliceSize;
  var end = start + SliceSize;
  if (end > FileSize) {
    end = FileSize;
    ContentLength = end - start;
  }
  var headersWhiteList = ['x-cos-traffic-limit', 'x-cos-mime-limit'];
  var headers = {};
  util.each(Headers, function (v, k) {
    if (headersWhiteList.indexOf(k) > -1) {
      headers[k] = v;
    }
  });
  var PartItem = UploadData.PartList[PartNumber - 1];
  Async.retry(ChunkRetryTimes, function (tryCallback) {
    if (!self._isRunningTask(TaskId)) return;
    util.fileSlice(FileBody, start, end, true, function (Body) {
      self.multipartUpload({
        TaskId: TaskId,
        Bucket: Bucket,
        Region: Region,
        Key: Key,
        ContentLength: ContentLength,
        PartNumber: PartNumber,
        UploadId: UploadData.UploadId,
        ServerSideEncryption: ServerSideEncryption,
        Body: Body,
        Headers: headers,
        onProgress: params.onProgress,
        calledBySdk: 'sliceUploadFile',
        tracker: params.tracker
      }, function (err, data) {
        if (!self._isRunningTask(TaskId)) return;
        if (err) return tryCallback(err);
        PartItem.Uploaded = true;
        return tryCallback(null, data);
      });
    });
  }, function (err, data) {
    if (!self._isRunningTask(TaskId)) return;
    return callback(err, data);
  });
}

// 完成分块上传
function uploadSliceComplete(params, callback) {
  var Bucket = params.Bucket;
  var Region = params.Region;
  var Key = params.Key;
  var UploadId = params.UploadId;
  var SliceList = params.SliceList;
  var self = this;
  var ChunkRetryTimes = this.options.ChunkRetryTimes + 1;
  var Headers = params.Headers;
  var Parts = SliceList.map(function (item) {
    return {
      PartNumber: item.PartNumber,
      ETag: item.ETag
    };
  });
  // 完成上传的请求也做重试
  Async.retry(ChunkRetryTimes, function (tryCallback) {
    self.multipartComplete({
      Bucket: Bucket,
      Region: Region,
      Key: Key,
      UploadId: UploadId,
      Parts: Parts,
      Headers: Headers,
      calledBySdk: 'sliceUploadFile',
      tracker: params.tracker
    }, tryCallback);
  }, function (err, data) {
    callback(err, data);
  });
}

// 抛弃分块上传任务
/*
 AsyncLimit (抛弃上传任务的并发量)，
 UploadId (上传任务的编号，当 Level 为 task 时候需要)
 Level (抛弃分块上传任务的级别，task : 抛弃指定的上传任务，file ： 抛弃指定的文件对应的上传任务，其他值 ：抛弃指定Bucket 的全部上传任务)
 */
function abortUploadTask(params, callback) {
  var Bucket = params.Bucket;
  var Region = params.Region;
  var Key = params.Key;
  var UploadId = params.UploadId;
  var Level = params.Level || 'task';
  var AsyncLimit = params.AsyncLimit;
  var self = this;
  var ep = new EventProxy();
  ep.on('error', function (errData) {
    return callback(errData);
  });

  // 已经获取到需要抛弃的任务列表
  ep.on('get_abort_array', function (AbortArray) {
    abortUploadTaskArray.call(self, {
      Bucket: Bucket,
      Region: Region,
      Key: Key,
      Headers: params.Headers,
      AsyncLimit: AsyncLimit,
      AbortArray: AbortArray
    }, callback);
  });
  if (Level === 'bucket') {
    // Bucket 级别的任务抛弃，抛弃该 Bucket 下的全部上传任务
    wholeMultipartList.call(self, {
      Bucket: Bucket,
      Region: Region,
      calledBySdk: 'abortUploadTask'
    }, function (err, data) {
      if (err) return callback(err);
      ep.emit('get_abort_array', data.UploadList || []);
    });
  } else if (Level === 'file') {
    // 文件级别的任务抛弃，抛弃该文件的全部上传任务
    if (!Key) return callback(util.error(new Error('abort_upload_task_no_key')));
    wholeMultipartList.call(self, {
      Bucket: Bucket,
      Region: Region,
      Key: Key,
      calledBySdk: 'abortUploadTask'
    }, function (err, data) {
      if (err) return callback(err);
      ep.emit('get_abort_array', data.UploadList || []);
    });
  } else if (Level === 'task') {
    // 单个任务级别的任务抛弃，抛弃指定 UploadId 的上传任务
    if (!UploadId) return callback(util.error(new Error('abort_upload_task_no_id')));
    if (!Key) return callback(util.error(new Error('abort_upload_task_no_key')));
    ep.emit('get_abort_array', [{
      Key: Key,
      UploadId: UploadId
    }]);
  } else {
    return callback(util.error(new Error('abort_unknown_level')));
  }
}

// 批量抛弃分块上传任务
function abortUploadTaskArray(params, callback) {
  var Bucket = params.Bucket;
  var Region = params.Region;
  var Key = params.Key;
  var AbortArray = params.AbortArray;
  var AsyncLimit = params.AsyncLimit || 1;
  var self = this;
  var index = 0;
  var resultList = new Array(AbortArray.length);
  Async.eachLimit(AbortArray, AsyncLimit, function (AbortItem, nextItem) {
    var eachIndex = index;
    if (Key && Key !== AbortItem.Key) {
      resultList[eachIndex] = {
        error: {
          KeyNotMatch: true
        }
      };
      nextItem(null);
      return;
    }
    var UploadId = AbortItem.UploadId || AbortItem.UploadID;
    self.multipartAbort({
      Bucket: Bucket,
      Region: Region,
      Key: AbortItem.Key,
      Headers: params.Headers,
      UploadId: UploadId
    }, function (err) {
      var task = {
        Bucket: Bucket,
        Region: Region,
        Key: AbortItem.Key,
        UploadId: UploadId
      };
      resultList[eachIndex] = {
        error: err,
        task: task
      };
      nextItem(null);
    });
    index++;
  }, function (err) {
    if (err) return callback(err);
    var successList = [];
    var errorList = [];
    for (var i = 0, len = resultList.length; i < len; i++) {
      var item = resultList[i];
      if (item['task']) {
        if (item['error']) {
          errorList.push(item['task']);
        } else {
          successList.push(item['task']);
        }
      }
    }
    return callback(null, {
      successList: successList,
      errorList: errorList
    });
  });
}

// 高级上传
function uploadFile(params, callback) {
  var self = this;

  // 判断多大的文件使用分片上传
  var SliceSize = params.SliceSize === undefined ? self.options.SliceSize : params.SliceSize;
  var taskList = [];
  var Body = params.Body;
  var FileSize = Body.size || Body.length || 0;
  var fileInfo = {
    TaskId: ''
  };

  // 上传链路
  if (self.options.EnableReporter) {
    var accelerate = self.options.UseAccelerate || typeof self.options.Domain === 'string' && self.options.Domain.includes('accelerate.');
    var realApi = FileSize > SliceSize ? 'sliceUploadFile' : 'putObject';
    params.tracker = new Tracker({
      Beacon: self.options.BeaconReporter,
      clsReporter: self.options.ClsReporter,
      bucket: params.Bucket,
      region: params.Region,
      apiName: 'uploadFile',
      realApi: realApi,
      fileKey: params.Key,
      fileSize: FileSize,
      accelerate: accelerate,
      deepTracker: self.options.DeepTracker,
      customId: self.options.CustomId,
      delay: self.options.TrackerDelay
    });
  }

  // 整理 option，用于返回给回调
  util.each(params, function (v, k) {
    if (_typeof(v) !== 'object' && typeof v !== 'function') {
      fileInfo[k] = v;
    }
  });

  // 处理文件 TaskReady
  var _onTaskReady = params.onTaskReady;
  var onTaskReady = function onTaskReady(tid) {
    fileInfo.TaskId = tid;
    _onTaskReady && _onTaskReady(tid);
  };
  params.onTaskReady = onTaskReady;

  // 添加上传任务,超过阈值使用分块上传，小于等于则简单上传
  var api = FileSize > SliceSize ? 'sliceUploadFile' : 'putObject';

  // 处理文件完成
  var _onFileFinish = params.onFileFinish;
  var onFileFinish = function onFileFinish(err, data) {
    // 格式化上报参数并上报
    params.tracker && params.tracker.report(err, data);
    _onFileFinish && _onFileFinish(err, data, fileInfo);
    callback && callback(err, data);
  };
  taskList.push({
    api: api,
    params: params,
    callback: onFileFinish
  });
  self._addTasks(taskList);
}

// 批量上传文件
function uploadFiles(params, callback) {
  var self = this;

  // 判断多大的文件使用分片上传
  var SliceSize = params.SliceSize === undefined ? self.options.SliceSize : params.SliceSize;

  // 汇总返回进度
  var TotalSize = 0;
  var TotalFinish = 0;
  var onTotalProgress = util.throttleOnProgress.call(self, TotalFinish, params.onProgress);

  // 汇总返回回调
  var unFinishCount = params.files.length;
  var _onTotalFileFinish = params.onFileFinish;
  var resultList = Array(unFinishCount);
  var onTotalFileFinish = function onTotalFileFinish(err, data, options) {
    onTotalProgress(null, true);
    _onTotalFileFinish && _onTotalFileFinish(err, data, options);
    resultList[options.Index] = {
      options: options,
      error: err,
      data: data
    };
    if (--unFinishCount <= 0 && callback) {
      callback(null, {
        files: resultList
      });
    }
  };

  // 开始处理每个文件
  var taskList = [];
  util.each(params.files, function (fileParams, index) {
    (function () {
      var Body = fileParams.Body;
      var FileSize = Body.size || Body.length || 0;
      var fileInfo = {
        Index: index,
        TaskId: ''
      };

      // 如果 批量上传的 Key 是 / 开头，强制去掉第一个 /
      if (!self.options.UseRawKey && fileParams.Key && fileParams.Key.substr(0, 1) === '/') {
        fileParams.Key = fileParams.Key.substr(1);
      }

      // 更新文件总大小
      TotalSize += FileSize;

      // 单个文件上传链路
      if (self.options.EnableReporter) {
        var accelerate = self.options.UseAccelerate || typeof self.options.Domain === 'string' && self.options.Domain.includes('accelerate.');
        var realApi = FileSize > SliceSize ? 'sliceUploadFile' : 'putObject';
        fileParams.tracker = new Tracker({
          Beacon: self.options.BeaconReporter,
          clsReporter: self.options.ClsReporter,
          bucket: fileParams.Bucket,
          region: fileParams.Region,
          apiName: 'uploadFiles',
          realApi: realApi,
          fileKey: fileParams.Key,
          fileSize: FileSize,
          accelerate: accelerate,
          deepTracker: self.options.DeepTracker,
          customId: self.options.CustomId,
          delay: self.options.TrackerDelay
        });
      }

      // 整理 option，用于返回给回调
      util.each(fileParams, function (v, k) {
        if (_typeof(v) !== 'object' && typeof v !== 'function') {
          fileInfo[k] = v;
        }
      });

      // 处理单个文件 TaskReady
      var _onTaskReady = fileParams.onTaskReady;
      var onTaskReady = function onTaskReady(tid) {
        fileInfo.TaskId = tid;
        _onTaskReady && _onTaskReady(tid);
      };
      fileParams.onTaskReady = onTaskReady;

      // 处理单个文件进度
      var PreAddSize = 0;
      var _onProgress = fileParams.onProgress;
      var onProgress = function onProgress(info) {
        TotalFinish = TotalFinish - PreAddSize + info.loaded;
        PreAddSize = info.loaded;
        _onProgress && _onProgress(info);
        onTotalProgress({
          loaded: TotalFinish,
          total: TotalSize
        });
      };
      fileParams.onProgress = onProgress;

      // 添加上传任务
      var api = FileSize > SliceSize ? 'sliceUploadFile' : 'putObject';

      // 处理单个文件完成
      var _onFileFinish = fileParams.onFileFinish;
      var onFileFinish = function onFileFinish(err, data) {
        // 格式化上报参数并上报
        fileParams.tracker && fileParams.tracker.report(err, data);
        _onFileFinish && _onFileFinish(err, data);
        onTotalFileFinish && onTotalFileFinish(err, data, fileInfo);
      };
      taskList.push({
        api: api,
        params: fileParams,
        callback: onFileFinish
      });
    })();
  });
  self._addTasks(taskList);
}

// 分片复制文件
function sliceCopyFile(params, callback) {
  var ep = new EventProxy();
  var self = this;
  var Bucket = params.Bucket;
  var Region = params.Region;
  var Key = params.Key;
  var CopySource = params.CopySource;
  var m = util.getSourceParams.call(this, CopySource);
  if (!m) {
    callback(util.error(new Error('CopySource format error')));
    return;
  }
  var SourceBucket = m.Bucket;
  var SourceRegion = m.Region;
  var SourceKey = decodeURIComponent(m.Key);
  var CopySliceSize = params.CopySliceSize === undefined ? self.options.CopySliceSize : params.CopySliceSize;
  CopySliceSize = Math.max(0, CopySliceSize);
  var ChunkSize = params.CopyChunkSize || this.options.CopyChunkSize;
  var ChunkParallel = this.options.CopyChunkParallelLimit;
  var ChunkRetryTimes = this.options.ChunkRetryTimes + 1;
  var ChunkCount = 0;
  var FinishSize = 0;
  var FileSize;
  var onProgress;
  var SourceResHeaders = {};
  var SourceHeaders = {};
  var TargetHeader = {};

  // 分片复制完成，开始 multipartComplete 操作
  ep.on('copy_slice_complete', function (UploadData) {
    var metaHeaders = {};
    util.each(params.Headers, function (val, k) {
      if (k.toLowerCase().indexOf('x-cos-meta-') === 0) metaHeaders[k] = val;
    });
    var Parts = util.map(UploadData.PartList, function (item) {
      return {
        PartNumber: item.PartNumber,
        ETag: item.ETag
      };
    });
    // 完成上传的请求也做重试
    Async.retry(ChunkRetryTimes, function (tryCallback) {
      self.multipartComplete({
        Bucket: Bucket,
        Region: Region,
        Key: Key,
        UploadId: UploadData.UploadId,
        Parts: Parts,
        tracker: params.tracker,
        calledBySdk: 'sliceCopyFile'
      }, tryCallback);
    }, function (err, data) {
      session.removeUsing(UploadData.UploadId); // 标记 UploadId 没被使用了，因为复制没提供重试，所以只要出错，就是 UploadId 停用了。
      if (err) {
        onProgress(null, true);
        return callback(err);
      }
      session.removeUploadId(UploadData.UploadId);
      onProgress({
        loaded: FileSize,
        total: FileSize
      }, true);
      callback(null, data);
    });
  });
  ep.on('get_copy_data_finish', function (UploadData) {
    // 处理 UploadId 缓存
    var uuid = session.getCopyFileId(CopySource, SourceResHeaders, ChunkSize, Bucket, Key);
    uuid && session.saveUploadId(uuid, UploadData.UploadId, self.options.UploadIdCacheLimit); // 缓存 UploadId
    session.setUsing(UploadData.UploadId); // 标记 UploadId 为正在使用

    var needCopySlices = util.filter(UploadData.PartList, function (SliceItem) {
      if (SliceItem['Uploaded']) {
        FinishSize += SliceItem['PartNumber'] >= ChunkCount ? FileSize % ChunkSize || ChunkSize : ChunkSize;
      }
      return !SliceItem['Uploaded'];
    });
    Async.eachLimit(needCopySlices, ChunkParallel, function (SliceItem, asyncCallback) {
      var PartNumber = SliceItem.PartNumber;
      var CopySourceRange = SliceItem.CopySourceRange;
      var currentSize = SliceItem.end - SliceItem.start;
      Async.retry(ChunkRetryTimes, function (tryCallback) {
        copySliceItem.call(self, {
          Bucket: Bucket,
          Region: Region,
          Key: Key,
          CopySource: CopySource,
          UploadId: UploadData.UploadId,
          PartNumber: PartNumber,
          CopySourceRange: CopySourceRange,
          tracker: params.tracker,
          calledBySdk: 'sliceCopyFile'
        }, tryCallback);
      }, function (err, data) {
        if (err) return asyncCallback(err);
        FinishSize += currentSize;
        onProgress({
          loaded: FinishSize,
          total: FileSize
        });
        SliceItem.ETag = data.ETag;
        asyncCallback(err || null, data);
      });
    }, function (err) {
      if (err) {
        session.removeUsing(UploadData.UploadId); // 标记 UploadId 没被使用了，因为复制没提供重试，所以只要出错，就是 UploadId 停用了。
        onProgress(null, true);
        return callback(err);
      }
      ep.emit('copy_slice_complete', UploadData);
    });
  });
  ep.on('get_chunk_size_finish', function () {
    var createNewUploadId = function createNewUploadId() {
      self.multipartInit({
        Bucket: Bucket,
        Region: Region,
        Key: Key,
        Headers: TargetHeader,
        tracker: params.tracker,
        calledBySdk: 'sliceCopyFile'
      }, function (err, data) {
        if (err) return callback(err);
        params.UploadId = data.UploadId;
        ep.emit('get_copy_data_finish', {
          UploadId: params.UploadId,
          PartList: params.PartList
        });
      });
    };

    // 在本地找可用的 UploadId
    var uuid = session.getCopyFileId(CopySource, SourceResHeaders, ChunkSize, Bucket, Key);
    var LocalUploadIdList = session.getUploadIdList(uuid);
    if (!uuid || !LocalUploadIdList) return createNewUploadId();
    var _next5 = function next(index) {
      // 如果本地找不到可用 UploadId，再一个个遍历校验远端
      if (index >= LocalUploadIdList.length) return createNewUploadId();
      var UploadId = LocalUploadIdList[index];
      // 如果正在被使用，跳过
      if (session.using[UploadId]) return _next5(index + 1);
      // 判断 UploadId 是否存在线上
      wholeMultipartListPart.call(self, {
        Bucket: Bucket,
        Region: Region,
        Key: Key,
        UploadId: UploadId,
        tracker: params.tracker,
        calledBySdk: 'sliceCopyFile'
      }, function (err, PartListData) {
        if (err) {
          // 如果 UploadId 获取会出错，跳过并删除
          session.removeUploadId(UploadId);
          _next5(index + 1);
        } else {
          // 如果异步回来 UploadId 已经被用了，也跳过
          if (session.using[UploadId]) return _next5(index + 1);
          // 找到可用 UploadId
          var finishETagMap = {};
          var offset = 0;
          util.each(PartListData.PartList, function (PartItem) {
            var size = parseInt(PartItem.Size);
            var end = offset + size - 1;
            finishETagMap[PartItem.PartNumber + '|' + offset + '|' + end] = PartItem.ETag;
            offset += size;
          });
          util.each(params.PartList, function (PartItem) {
            var ETag = finishETagMap[PartItem.PartNumber + '|' + PartItem.start + '|' + PartItem.end];
            if (ETag) {
              PartItem.ETag = ETag;
              PartItem.Uploaded = true;
            }
          });
          ep.emit('get_copy_data_finish', {
            UploadId: UploadId,
            PartList: params.PartList
          });
        }
      });
    };
    _next5(0);
  });
  ep.on('get_file_size_finish', function () {
    // 控制分片大小
    (function () {
      var SIZE = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 1024 * 2, 1024 * 4, 1024 * 5];
      var AutoChunkSize = 1024 * 1024;
      for (var i = 0; i < SIZE.length; i++) {
        AutoChunkSize = SIZE[i] * 1024 * 1024;
        if (FileSize / AutoChunkSize <= self.options.MaxPartNumber) break;
      }
      params.ChunkSize = ChunkSize = Math.max(ChunkSize, AutoChunkSize);
      ChunkCount = Math.ceil(FileSize / ChunkSize);
      var list = [];
      for (var partNumber = 1; partNumber <= ChunkCount; partNumber++) {
        var start = (partNumber - 1) * ChunkSize;
        var end = partNumber * ChunkSize < FileSize ? partNumber * ChunkSize - 1 : FileSize - 1;
        var item = {
          PartNumber: partNumber,
          start: start,
          end: end,
          CopySourceRange: 'bytes=' + start + '-' + end
        };
        list.push(item);
      }
      params.PartList = list;
    })();
    if (params.Headers['x-cos-metadata-directive'] === 'Replaced') {
      TargetHeader = params.Headers;
    } else {
      TargetHeader = SourceHeaders;
    }
    TargetHeader['x-cos-storage-class'] = params.Headers['x-cos-storage-class'] || SourceHeaders['x-cos-storage-class'];
    TargetHeader = util.clearKey(TargetHeader);
    /**
     * 对于归档存储的对象，如果未恢复副本，则不允许 Copy
     */
    if (SourceHeaders['x-cos-storage-class'] === 'ARCHIVE' || SourceHeaders['x-cos-storage-class'] === 'DEEP_ARCHIVE') {
      var restoreHeader = SourceHeaders['x-cos-restore'];
      if (!restoreHeader || restoreHeader === 'ongoing-request="true"') {
        callback(util.error(new Error('Unrestored archive object is not allowed to be copied')));
        return;
      }
    }
    /**
     * 去除一些无用的头部，规避 multipartInit 出错
     * 这些头部通常是在 putObjectCopy 时才使用
     */
    delete TargetHeader['x-cos-copy-source'];
    delete TargetHeader['x-cos-metadata-directive'];
    delete TargetHeader['x-cos-copy-source-If-Modified-Since'];
    delete TargetHeader['x-cos-copy-source-If-Unmodified-Since'];
    delete TargetHeader['x-cos-copy-source-If-Match'];
    delete TargetHeader['x-cos-copy-source-If-None-Match'];
    ep.emit('get_chunk_size_finish');
  });

  // 获取远端复制源文件的大小
  self.headObject({
    Bucket: SourceBucket,
    Region: SourceRegion,
    Key: SourceKey,
    tracker: params.tracker,
    calledBySdk: 'sliceCopyFile'
  }, function (err, data) {
    if (err) {
      if (err.statusCode && err.statusCode === 404) {
        callback(util.error(err, {
          ErrorStatus: SourceKey + ' Not Exist'
        }));
      } else {
        callback(err);
      }
      return;
    }
    FileSize = params.FileSize = data.headers['content-length'];
    if (FileSize === undefined || !FileSize) {
      callback(util.error(new Error('get Content-Length error, please add "Content-Length" to CORS ExposeHeader setting.（ 获取Content-Length失败，请在CORS ExposeHeader设置中添加Content-Length，请参考文档：https://cloud.tencent.com/document/product/436/13318 ）')));
      return;
    }
    params.tracker && params.tracker.setParams({
      httpSize: FileSize
    });
    onProgress = util.throttleOnProgress.call(self, FileSize, params.onProgress);

    // 开始上传
    if (FileSize <= CopySliceSize) {
      if (!params.Headers['x-cos-metadata-directive']) {
        params.Headers['x-cos-metadata-directive'] = 'Copy';
      }
      self.putObjectCopy(Object.assign(params, {
        calledBySdk: 'sliceCopyFile'
      }), function (err, data) {
        if (err) {
          onProgress(null, true);
          return callback(err);
        }
        onProgress({
          loaded: FileSize,
          total: FileSize
        }, true);
        callback(err, data);
      });
    } else {
      var resHeaders = data.headers;
      SourceResHeaders = resHeaders;
      SourceHeaders = {
        'Cache-Control': resHeaders['cache-control'],
        'Content-Disposition': resHeaders['content-disposition'],
        'Content-Encoding': resHeaders['content-encoding'],
        'Content-Type': resHeaders['content-type'],
        Expires: resHeaders['expires'],
        'x-cos-storage-class': resHeaders['x-cos-storage-class']
      };
      util.each(resHeaders, function (v, k) {
        var metaPrefix = 'x-cos-meta-';
        if (k.indexOf(metaPrefix) === 0 && k.length > metaPrefix.length) {
          SourceHeaders[k] = v;
        }
      });
      ep.emit('get_file_size_finish');
    }
  });
}

// 复制指定分片
function copySliceItem(params, callback) {
  var TaskId = params.TaskId;
  var Bucket = params.Bucket;
  var Region = params.Region;
  var Key = params.Key;
  var CopySource = params.CopySource;
  var UploadId = params.UploadId;
  var PartNumber = params.PartNumber * 1;
  var CopySourceRange = params.CopySourceRange;
  var ChunkRetryTimes = this.options.ChunkRetryTimes + 1;
  var self = this;
  Async.retry(ChunkRetryTimes, function (tryCallback) {
    self.uploadPartCopy({
      TaskId: TaskId,
      Bucket: Bucket,
      Region: Region,
      Key: Key,
      CopySource: CopySource,
      UploadId: UploadId,
      PartNumber: PartNumber,
      CopySourceRange: CopySourceRange,
      tracker: params.tracker,
      calledBySdk: params.calledBySdk
    }, function (err, data) {
      tryCallback(err || null, data);
    });
  }, function (err, data) {
    return callback(err, data);
  });
}
var API_MAP = {
  sliceUploadFile: sliceUploadFile,
  abortUploadTask: abortUploadTask,
  uploadFile: uploadFile,
  uploadFiles: uploadFiles,
  sliceCopyFile: sliceCopyFile
};
module.exports.init = function (COS, task) {
  task.transferToTaskMethod(API_MAP, 'sliceUploadFile');
  util.each(API_MAP, function (fn, apiName) {
    COS.prototype[apiName] = util.apiWrapper(apiName, fn);
  });
};

/***/ }),

/***/ "./src/async.js":
/*!**********************!*\
  !*** ./src/async.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

var eachLimit = function eachLimit(arr, limit, iterator, callback) {
  callback = callback || function () {};
  if (!arr.length || limit <= 0) {
    return callback();
  }
  var completed = 0;
  var started = 0;
  var running = 0;
  (function replenish() {
    if (completed >= arr.length) {
      return callback();
    }
    while (running < limit && started < arr.length) {
      started += 1;
      running += 1;
      iterator(arr[started - 1], function (err) {
        if (err) {
          callback(err);
          callback = function callback() {};
        } else {
          completed += 1;
          running -= 1;
          if (completed >= arr.length) {
            callback();
          } else {
            replenish();
          }
        }
      });
    }
  })();
};
var retry = function retry(times, iterator, callback) {
  var _next = function next(index) {
    iterator(function (err, data) {
      if (err && index < times) {
        _next(index + 1);
      } else {
        callback(err, data);
      }
    });
  };
  if (times < 1) {
    callback();
  } else {
    _next(1);
  }
};
var async = {
  eachLimit: eachLimit,
  retry: retry
};
module.exports = async;

/***/ }),

/***/ "./src/base.js":
/*!*********************!*\
  !*** ./src/base.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _defineProperty = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var REQUEST = __webpack_require__(/*! ../lib/request */ "./lib/request.js");
var util = __webpack_require__(/*! ./util */ "./src/util.js");

// Bucket 相关

/**
 * 获取用户的 bucket 列表
 * @param  {Object}  params         回调函数，必须，下面为参数列表
 * 无特殊参数
 * @param  {Function}  callback     回调函数，必须
 */
function getService(params, callback) {
  var protocol = this.options.Protocol || (util.isBrowser && (typeof location === "undefined" ? "undefined" : _typeof(location)) === 'object' && location.protocol === 'http:' ? 'http:' : 'https:');
  var domain = this.options.ServiceDomain;
  var appId = params.AppId || this.options.appId;
  var region = params.Region;
  if (domain) {
    domain = domain.replace(/\{\{AppId\}\}/gi, appId || '').replace(/\{\{Region\}\}/gi, region || '').replace(/\{\{.*?\}\}/gi, '');
    if (!/^[a-zA-Z]+:\/\//.test(domain)) {
      domain = protocol + '//' + domain;
    }
    if (domain.slice(-1) === '/') {
      domain = domain.slice(0, -1);
    }
  } else if (region) {
    domain = protocol + '//cos.' + region + '.myqcloud.com';
  } else {
    domain = protocol + '//service.cos.myqcloud.com';
  }
  var SignHost = '';
  var standardHost = region ? 'cos.' + region + '.myqcloud.com' : 'service.cos.myqcloud.com';
  var urlHost = domain.replace(/^https?:\/\/([^/]+)(\/.*)?$/, '$1');
  if (standardHost === urlHost) SignHost = standardHost;
  submitRequest.call(this, {
    Action: 'name/cos:GetService',
    url: domain,
    method: 'GET',
    headers: params.Headers,
    SignHost: SignHost,
    tracker: params.tracker
  }, function (err, data) {
    if (err) return callback(err);
    var buckets = data && data.ListAllMyBucketsResult && data.ListAllMyBucketsResult.Buckets && data.ListAllMyBucketsResult.Buckets.Bucket || [];
    buckets = util.isArray(buckets) ? buckets : [buckets];
    var owner = data && data.ListAllMyBucketsResult && data.ListAllMyBucketsResult.Owner || {};
    callback(null, {
      Buckets: buckets,
      Owner: owner,
      statusCode: data.statusCode,
      headers: data.headers
    });
  });
}

/**
 * 创建 Bucket，并初始化访问权限
 * @param  {Object}  params                         参数对象，必须
 *     @param  {String}  params.Bucket              Bucket名称，必须
 *     @param  {String}  params.Region              地域名称，必须
 *     @param  {String}  params.ACL                 用户自定义文件权限，可以设置：private，public-read；默认值：private，非必须
 *     @param  {String}  params.GrantRead           赋予被授权者读的权限，格式x-cos-grant-read: uin=" ",uin=" "，非必须
 *     @param  {String}  params.GrantWrite          赋予被授权者写的权限，格式x-cos-grant-write: uin=" ",uin=" "，非必须
 *     @param  {String}  params.GrantFullControl    赋予被授权者读写权限，格式x-cos-grant-full-control: uin=" ",uin=" "，非必须
 * @param  {Function}  callback                     回调函数，必须
 * @return  {Object}  err                           请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
 * @return  {Object}  data                          返回的数据
 *     @return  {String}  data.Location             操作地址
 */
function putBucket(params, callback) {
  var self = this;
  var xml = '';
  if (params['BucketAZConfig']) {
    var CreateBucketConfiguration = {
      BucketAZConfig: params.BucketAZConfig
    };
    xml = util.json2xml({
      CreateBucketConfiguration: CreateBucketConfiguration
    });
  }
  submitRequest.call(this, {
    Action: 'name/cos:PutBucket',
    method: 'PUT',
    Bucket: params.Bucket,
    Region: params.Region,
    headers: params.Headers,
    body: xml,
    tracker: params.tracker
  }, function (err, data) {
    if (err) return callback(err);
    var url = getUrl({
      protocol: self.options.Protocol,
      domain: self.options.Domain,
      bucket: params.Bucket,
      region: params.Region,
      isLocation: true
    });
    callback(null, {
      Location: url,
      statusCode: data.statusCode,
      headers: data.headers
    });
  });
}

/**
 * 查看是否存在该Bucket，是否有权限访问
 * @param  {Object}  params                     参数对象，必须
 *     @param  {String}  params.Bucket          Bucket名称，必须
 *     @param  {String}  params.Region          地域名称，必须
 * @param  {Function}  callback                 回调函数，必须
 * @return  {Object}  err                       请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
 * @return  {Object}  data                      返回的数据
 *     @return  {Boolean}  data.BucketExist     Bucket是否存在
 *     @return  {Boolean}  data.BucketAuth      是否有 Bucket 的访问权限
 */
function headBucket(params, callback) {
  submitRequest.call(this, {
    Action: 'name/cos:HeadBucket',
    Bucket: params.Bucket,
    Region: params.Region,
    headers: params.Headers,
    method: 'HEAD',
    tracker: params.tracker
  }, callback);
}

/**
 * 获取 Bucket 下的 object 列表
 * @param  {Object}  params                         参数对象，必须
 *     @param  {String}  params.Bucket              Bucket名称，必须
 *     @param  {String}  params.Region              地域名称，必须
 *     @param  {String}  params.Prefix              前缀匹配，用来规定返回的文件前缀地址，非必须
 *     @param  {String}  params.Delimiter           定界符为一个符号，如果有Prefix，则将Prefix到delimiter之间的相同路径归为一类，非必须
 *     @param  {String}  params.Marker              默认以UTF-8二进制顺序列出条目，所有列出条目从marker开始，非必须
 *     @param  {String}  params.MaxKeys             单次返回最大的条目数量，默认1000，非必须
 *     @param  {String}  params.EncodingType        规定返回值的编码方式，非必须
 * @param  {Function}  callback                     回调函数，必须
 * @return  {Object}  err                           请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
 * @return  {Object}  data                          返回的数据
 *     @return  {Object}  data.ListBucketResult     返回的 object 列表信息
 */
function getBucket(params, callback) {
  var reqParams = {};
  reqParams['prefix'] = params['Prefix'] || '';
  reqParams['delimiter'] = params['Delimiter'];
  reqParams['marker'] = params['Marker'];
  reqParams['max-keys'] = params['MaxKeys'];
  reqParams['encoding-type'] = params['EncodingType'];
  submitRequest.call(this, {
    Action: 'name/cos:GetBucket',
    ResourceKey: reqParams['prefix'],
    method: 'GET',
    Bucket: params.Bucket,
    Region: params.Region,
    headers: params.Headers,
    qs: reqParams,
    tracker: params.tracker
  }, function (err, data) {
    if (err) return callback(err);
    var ListBucketResult = data.ListBucketResult || {};
    var Contents = ListBucketResult.Contents || [];
    var CommonPrefixes = ListBucketResult.CommonPrefixes || [];
    Contents = util.isArray(Contents) ? Contents : [Contents];
    CommonPrefixes = util.isArray(CommonPrefixes) ? CommonPrefixes : [CommonPrefixes];
    var result = util.clone(ListBucketResult);
    util.extend(result, {
      Contents: Contents,
      CommonPrefixes: CommonPrefixes,
      statusCode: data.statusCode,
      headers: data.headers
    });
    callback(null, result);
  });
}

/**
 * 删除 Bucket
 * @param  {Object}  params                 参数对象，必须
 *     @param  {String}  params.Bucket      Bucket名称，必须
 *     @param  {String}  params.Region      地域名称，必须
 * @param  {Function}  callback             回调函数，必须
 * @return  {Object}  err                   请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
 * @return  {Object}  data                  返回的数据
 *     @return  {String}  data.Location     操作地址
 */
function deleteBucket(params, callback) {
  submitRequest.call(this, {
    Action: 'name/cos:DeleteBucket',
    Bucket: params.Bucket,
    Region: params.Region,
    headers: params.Headers,
    method: 'DELETE',
    tracker: params.tracker
  }, function (err, data) {
    if (err && err.statusCode === 204) {
      return callback(null, {
        statusCode: err.statusCode
      });
    } else if (err) {
      return callback(err);
    }
    callback(null, {
      statusCode: data.statusCode,
      headers: data.headers
    });
  });
}

/**
 * 设置 Bucket 的 权限列表
 * @param  {Object}  params                         参数对象，必须
 *     @param  {String}  params.Bucket              Bucket名称，必须
 *     @param  {String}  params.Region              地域名称，必须
 *     @param  {String}  params.ACL                 用户自定义文件权限，可以设置：private，public-read；默认值：private，非必须
 *     @param  {String}  params.GrantRead           赋予被授权者读的权限，格式x-cos-grant-read: uin=" ",uin=" "，非必须
 *     @param  {String}  params.GrantWrite          赋予被授权者写的权限，格式x-cos-grant-write: uin=" ",uin=" "，非必须
 *     @param  {String}  params.GrantFullControl    赋予被授权者读写权限，格式x-cos-grant-full-control: uin=" ",uin=" "，非必须
 * @param  {Function}  callback                     回调函数，必须
 * @return  {Object}  err                           请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
 * @return  {Object}  data                          返回的数据
 */
function putBucketAcl(params, callback) {
  var headers = params.Headers;
  var xml = '';
  if (params['AccessControlPolicy']) {
    var AccessControlPolicy = util.clone(params['AccessControlPolicy'] || {});
    var Grants = AccessControlPolicy.Grants || AccessControlPolicy.Grant;
    Grants = util.isArray(Grants) ? Grants : [Grants];
    delete AccessControlPolicy.Grant;
    delete AccessControlPolicy.Grants;
    AccessControlPolicy.AccessControlList = {
      Grant: Grants
    };
    xml = util.json2xml({
      AccessControlPolicy: AccessControlPolicy
    });
    headers['Content-Type'] = 'application/xml';
    headers['Content-MD5'] = util.b64(util.md5(xml));
  }

  // Grant Header 去重
  util.each(headers, function (val, key) {
    if (key.indexOf('x-cos-grant-') === 0) {
      headers[key] = uniqGrant(headers[key]);
    }
  });
  submitRequest.call(this, {
    Action: 'name/cos:PutBucketACL',
    method: 'PUT',
    Bucket: params.Bucket,
    Region: params.Region,
    headers: headers,
    action: 'acl',
    body: xml,
    tracker: params.tracker
  }, function (err, data) {
    if (err) return callback(err);
    callback(null, {
      statusCode: data.statusCode,
      headers: data.headers
    });
  });
}

/**
 * 获取 Bucket 的 权限列表
 * @param  {Object}  params                         参数对象，必须
 *     @param  {String}  params.Bucket              Bucket名称，必须
 *     @param  {String}  params.Region              地域名称，必须
 * @param  {Function}  callback                     回调函数，必须
 * @return  {Object}  err                           请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
 * @return  {Object}  data                          返回的数据
 *     @return  {Object}  data.AccessControlPolicy  访问权限信息
 */
function getBucketAcl(params, callback) {
  submitRequest.call(this, {
    Action: 'name/cos:GetBucketACL',
    method: 'GET',
    Bucket: params.Bucket,
    Region: params.Region,
    headers: params.Headers,
    action: 'acl',
    tracker: params.tracker
  }, function (err, data) {
    if (err) return callback(err);
    var AccessControlPolicy = data.AccessControlPolicy || {};
    var Owner = AccessControlPolicy.Owner || {};
    var Grant = AccessControlPolicy.AccessControlList.Grant || [];
    Grant = util.isArray(Grant) ? Grant : [Grant];
    var result = decodeAcl(AccessControlPolicy);
    if (data.headers && data.headers['x-cos-acl']) {
      result.ACL = data.headers['x-cos-acl'];
    }
    result = util.extend(result, {
      Owner: Owner,
      Grants: Grant,
      statusCode: data.statusCode,
      headers: data.headers
    });
    callback(null, result);
  });
}

/**
 * 设置 Bucket 的 跨域设置
 * @param  {Object}  params                             参数对象，必须
 *     @param  {String}  params.Bucket                  Bucket名称，必须
 *     @param  {String}  params.Region                  地域名称，必须
 *     @param  {Object}  params.CORSConfiguration       相关的跨域设置，必须
 * @param  {Array}  params.CORSConfiguration.CORSRules  对应的跨域规则
 * @param  {Function}  callback                         回调函数，必须
 * @return  {Object}  err                               请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
 * @return  {Object}  data                              返回的数据
 */
function putBucketCors(params, callback) {
  var CORSConfiguration = params['CORSConfiguration'] || {};
  var CORSRules = CORSConfiguration['CORSRules'] || params['CORSRules'] || [];
  CORSRules = util.clone(util.isArray(CORSRules) ? CORSRules : [CORSRules]);
  util.each(CORSRules, function (rule) {
    util.each(['AllowedOrigin', 'AllowedHeader', 'AllowedMethod', 'ExposeHeader'], function (key) {
      var sKey = key + 's';
      var val = rule[sKey] || rule[key] || [];
      delete rule[sKey];
      rule[key] = util.isArray(val) ? val : [val];
    });
  });
  var Conf = {
    CORSRule: CORSRules
  };
  if (params.ResponseVary) Conf.ResponseVary = params.ResponseVary;
  var xml = util.json2xml({
    CORSConfiguration: Conf
  });
  var headers = params.Headers;
  headers['Content-Type'] = 'application/xml';
  headers['Content-MD5'] = util.b64(util.md5(xml));
  submitRequest.call(this, {
    Action: 'name/cos:PutBucketCORS',
    method: 'PUT',
    Bucket: params.Bucket,
    Region: params.Region,
    body: xml,
    action: 'cors',
    headers: headers,
    tracker: params.tracker
  }, function (err, data) {
    if (err) return callback(err);
    callback(null, {
      statusCode: data.statusCode,
      headers: data.headers
    });
  });
}

/**
 * 获取 Bucket 的 跨域设置
 * @param  {Object}  params                         参数对象，必须
 *     @param  {String}  params.Bucket              Bucket名称，必须
 *     @param  {String}  params.Region              地域名称，必须
 * @param  {Function}  callback                     回调函数，必须
 * @return  {Object}  err                           请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
 * @return  {Object}  data                          返回的数据
 *     @return  {Object}  data.CORSRules            Bucket的跨域设置
 */
function getBucketCors(params, callback) {
  submitRequest.call(this, {
    Action: 'name/cos:GetBucketCORS',
    method: 'GET',
    Bucket: params.Bucket,
    Region: params.Region,
    headers: params.Headers,
    action: 'cors',
    tracker: params.tracker
  }, function (err, data) {
    if (err) {
      if (err.statusCode === 404 && err.error && err.error.Code === 'NoSuchCORSConfiguration') {
        var result = {
          CORSRules: [],
          statusCode: err.statusCode
        };
        err.headers && (result.headers = err.headers);
        callback(null, result);
      } else {
        callback(err);
      }
      return;
    }
    var CORSConfiguration = data.CORSConfiguration || {};
    var CORSRules = CORSConfiguration.CORSRules || CORSConfiguration.CORSRule || [];
    CORSRules = util.clone(util.isArray(CORSRules) ? CORSRules : [CORSRules]);
    var ResponseVary = CORSConfiguration.ResponseVary;
    util.each(CORSRules, function (rule) {
      util.each(['AllowedOrigin', 'AllowedHeader', 'AllowedMethod', 'ExposeHeader'], function (key) {
        var sKey = key + 's';
        var val = rule[sKey] || rule[key] || [];
        delete rule[key];
        rule[sKey] = util.isArray(val) ? val : [val];
      });
    });
    callback(null, {
      CORSRules: CORSRules,
      ResponseVary: ResponseVary,
      statusCode: data.statusCode,
      headers: data.headers
    });
  });
}

/**
 * 删除 Bucket 的 跨域设置
 * @param  {Object}  params                 参数对象，必须
 *     @param  {String}  params.Bucket      Bucket名称，必须
 *     @param  {String}  params.Region      地域名称，必须
 * @param  {Function}  callback             回调函数，必须
 * @return  {Object}  err                   请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
 * @return  {Object}  data                  返回的数据
 */
function deleteBucketCors(params, callback) {
  submitRequest.call(this, {
    Action: 'name/cos:DeleteBucketCORS',
    method: 'DELETE',
    Bucket: params.Bucket,
    Region: params.Region,
    headers: params.Headers,
    action: 'cors',
    tracker: params.tracker
  }, function (err, data) {
    if (err && err.statusCode === 204) {
      return callback(null, {
        statusCode: err.statusCode
      });
    } else if (err) {
      return callback(err);
    }
    callback(null, {
      statusCode: data.statusCode || err.statusCode,
      headers: data.headers
    });
  });
}

/**
 * 获取 Bucket 的 地域信息
 * @param  {Object}  params             参数对象，必须
 *     @param  {String}  params.Bucket  Bucket名称，必须
 *     @param  {String}  params.Region  地域名称，必须
 * @param  {Function}  callback         回调函数，必须
 * @return  {Object}  err               请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
 * @return  {Object}  data              返回数据，包含地域信息 LocationConstraint
 */
function getBucketLocation(params, callback) {
  submitRequest.call(this, {
    Action: 'name/cos:GetBucketLocation',
    method: 'GET',
    Bucket: params.Bucket,
    Region: params.Region,
    headers: params.Headers,
    action: 'location',
    tracker: params.tracker
  }, callback);
}
function putBucketPolicy(params, callback) {
  var Policy = params['Policy'];
  try {
    if (typeof Policy === 'string') Policy = JSON.parse(Policy);
  } catch (e) {}
  if (!Policy || typeof Policy === 'string') return callback(util.error(new Error('Policy format error')));
  var PolicyStr = JSON.stringify(Policy);
  if (!Policy.version) Policy.version = '2.0';
  var headers = params.Headers;
  headers['Content-Type'] = 'application/json';
  headers['Content-MD5'] = util.b64(util.md5(PolicyStr));
  submitRequest.call(this, {
    Action: 'name/cos:PutBucketPolicy',
    method: 'PUT',
    Bucket: params.Bucket,
    Region: params.Region,
    action: 'policy',
    body: PolicyStr,
    headers: headers,
    tracker: params.tracker
  }, function (err, data) {
    if (err && err.statusCode === 204) {
      return callback(null, {
        statusCode: err.statusCode
      });
    } else if (err) {
      return callback(err);
    }
    callback(null, {
      statusCode: data.statusCode,
      headers: data.headers
    });
  });
}

/**
 * 获取 Bucket 的读取权限策略
 * @param  {Object}  params             参数对象，必须
 *     @param  {String}  params.Bucket  Bucket名称，必须
 *     @param  {String}  params.Region  地域名称，必须
 * @param  {Function}  callback         回调函数，必须
 * @return  {Object}  err               请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
 * @return  {Object}  data              返回数据
 */
function getBucketPolicy(params, callback) {
  submitRequest.call(this, {
    Action: 'name/cos:GetBucketPolicy',
    method: 'GET',
    Bucket: params.Bucket,
    Region: params.Region,
    headers: params.Headers,
    action: 'policy',
    rawBody: true,
    tracker: params.tracker
  }, function (err, data) {
    if (err) {
      if (err.statusCode && err.statusCode === 403) {
        return callback(util.error(err, {
          ErrorStatus: 'Access Denied'
        }));
      }
      if (err.statusCode && err.statusCode === 405) {
        return callback(util.error(err, {
          ErrorStatus: 'Method Not Allowed'
        }));
      }
      if (err.statusCode && err.statusCode === 404) {
        return callback(util.error(err, {
          ErrorStatus: 'Policy Not Found'
        }));
      }
      return callback(err);
    }
    var Policy = {};
    try {
      Policy = JSON.parse(data.body);
    } catch (e) {}
    callback(null, {
      Policy: Policy,
      statusCode: data.statusCode,
      headers: data.headers
    });
  });
}

/**
 * 删除 Bucket 的 跨域设置
 * @param  {Object}  params                 参数对象，必须
 *     @param  {String}  params.Bucket      Bucket名称，必须
 *     @param  {String}  params.Region      地域名称，必须
 * @param  {Function}  callback             回调函数，必须
 * @return  {Object}  err                   请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
 * @return  {Object}  data                  返回的数据
 */
function deleteBucketPolicy(params, callback) {
  submitRequest.call(this, {
    Action: 'name/cos:DeleteBucketPolicy',
    method: 'DELETE',
    Bucket: params.Bucket,
    Region: params.Region,
    headers: params.Headers,
    action: 'policy',
    tracker: params.tracker
  }, function (err, data) {
    if (err && err.statusCode === 204) {
      return callback(null, {
        statusCode: err.statusCode
      });
    } else if (err) {
      return callback(err);
    }
    callback(null, {
      statusCode: data.statusCode || err.statusCode,
      headers: data.headers
    });
  });
}

/**
 * 设置 Bucket 的标签
 * @param  {Object}  params             参数对象，必须
 *     @param  {String}  params.Bucket  Bucket名称，必须
 *     @param  {String}  params.Region  地域名称，必须
 *     @param  {Array}   params.TagSet  标签设置，必须
 * @param  {Function}  callback         回调函数，必须
 * @return  {Object}  err               请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
 * @return  {Object}  data              返回数据
 */
function putBucketTagging(params, callback) {
  var Tagging = params['Tagging'] || {};
  var Tags = Tagging.TagSet || Tagging.Tags || params['Tags'] || [];
  Tags = util.clone(util.isArray(Tags) ? Tags : [Tags]);
  var xml = util.json2xml({
    Tagging: {
      TagSet: {
        Tag: Tags
      }
    }
  });
  var headers = params.Headers;
  headers['Content-Type'] = 'application/xml';
  headers['Content-MD5'] = util.b64(util.md5(xml));
  submitRequest.call(this, {
    Action: 'name/cos:PutBucketTagging',
    method: 'PUT',
    Bucket: params.Bucket,
    Region: params.Region,
    body: xml,
    action: 'tagging',
    headers: headers,
    tracker: params.tracker
  }, function (err, data) {
    if (err && err.statusCode === 204) {
      return callback(null, {
        statusCode: err.statusCode
      });
    } else if (err) {
      return callback(err);
    }
    callback(null, {
      statusCode: data.statusCode,
      headers: data.headers
    });
  });
}

/**
 * 获取 Bucket 的标签设置
 * @param  {Object}  params             参数对象，必须
 *     @param  {String}  params.Bucket  Bucket名称，必须
 *     @param  {String}  params.Region  地域名称，必须
 * @param  {Function}  callback         回调函数，必须
 * @return  {Object}  err               请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
 * @return  {Object}  data              返回数据
 */
function getBucketTagging(params, callback) {
  submitRequest.call(this, {
    Action: 'name/cos:GetBucketTagging',
    method: 'GET',
    Bucket: params.Bucket,
    Region: params.Region,
    headers: params.Headers,
    action: 'tagging',
    tracker: params.tracker
  }, function (err, data) {
    if (err) {
      if (err.statusCode === 404 && err.error && (err.error === 'Not Found' || err.error.Code === 'NoSuchTagSet')) {
        var result = {
          Tags: [],
          statusCode: err.statusCode
        };
        err.headers && (result.headers = err.headers);
        callback(null, result);
      } else {
        callback(err);
      }
      return;
    }
    var Tags = [];
    try {
      Tags = data.Tagging.TagSet.Tag || [];
    } catch (e) {}
    Tags = util.clone(util.isArray(Tags) ? Tags : [Tags]);
    callback(null, {
      Tags: Tags,
      statusCode: data.statusCode,
      headers: data.headers
    });
  });
}

/**
 * 删除 Bucket 的 标签设置
 * @param  {Object}  params             参数对象，必须
 *     @param  {String}  params.Bucket  Bucket名称，必须
 *     @param  {String}  params.Region  地域名称，必须
 * @param  {Function}  callback         回调函数，必须
 * @return  {Object}  err               请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
 * @return  {Object}  data              返回的数据
 */
function deleteBucketTagging(params, callback) {
  submitRequest.call(this, {
    Action: 'name/cos:DeleteBucketTagging',
    method: 'DELETE',
    Bucket: params.Bucket,
    Region: params.Region,
    headers: params.Headers,
    action: 'tagging',
    tracker: params.tracker
  }, function (err, data) {
    if (err && err.statusCode === 204) {
      return callback(null, {
        statusCode: err.statusCode
      });
    } else if (err) {
      return callback(err);
    }
    callback(null, {
      statusCode: data.statusCode,
      headers: data.headers
    });
  });
}
function putBucketLifecycle(params, callback) {
  var LifecycleConfiguration = params['LifecycleConfiguration'] || {};
  var Rules = LifecycleConfiguration.Rules || params.Rules || [];
  Rules = util.clone(Rules);
  var xml = util.json2xml({
    LifecycleConfiguration: {
      Rule: Rules
    }
  });
  var headers = params.Headers;
  headers['Content-Type'] = 'application/xml';
  headers['Content-MD5'] = util.b64(util.md5(xml));
  submitRequest.call(this, {
    Action: 'name/cos:PutBucketLifecycle',
    method: 'PUT',
    Bucket: params.Bucket,
    Region: params.Region,
    body: xml,
    action: 'lifecycle',
    headers: headers,
    tracker: params.tracker
  }, function (err, data) {
    if (err && err.statusCode === 204) {
      return callback(null, {
        statusCode: err.statusCode
      });
    } else if (err) {
      return callback(err);
    }
    callback(null, {
      statusCode: data.statusCode,
      headers: data.headers
    });
  });
}
function getBucketLifecycle(params, callback) {
  submitRequest.call(this, {
    Action: 'name/cos:GetBucketLifecycle',
    method: 'GET',
    Bucket: params.Bucket,
    Region: params.Region,
    headers: params.Headers,
    action: 'lifecycle',
    tracker: params.tracker
  }, function (err, data) {
    if (err) {
      if (err.statusCode === 404 && err.error && err.error.Code === 'NoSuchLifecycleConfiguration') {
        var result = {
          Rules: [],
          statusCode: err.statusCode
        };
        err.headers && (result.headers = err.headers);
        callback(null, result);
      } else {
        callback(err);
      }
      return;
    }
    var Rules = [];
    try {
      Rules = data.LifecycleConfiguration.Rule || [];
    } catch (e) {}
    Rules = util.clone(util.isArray(Rules) ? Rules : [Rules]);
    callback(null, {
      Rules: Rules,
      statusCode: data.statusCode,
      headers: data.headers
    });
  });
}
function deleteBucketLifecycle(params, callback) {
  submitRequest.call(this, {
    Action: 'name/cos:DeleteBucketLifecycle',
    method: 'DELETE',
    Bucket: params.Bucket,
    Region: params.Region,
    headers: params.Headers,
    action: 'lifecycle',
    tracker: params.tracker
  }, function (err, data) {
    if (err && err.statusCode === 204) {
      return callback(null, {
        statusCode: err.statusCode
      });
    } else if (err) {
      return callback(err);
    }
    callback(null, {
      statusCode: data.statusCode,
      headers: data.headers
    });
  });
}
function putBucketVersioning(params, callback) {
  if (!params['VersioningConfiguration']) {
    callback(util.error(new Error('missing param VersioningConfiguration')));
    return;
  }
  var VersioningConfiguration = params['VersioningConfiguration'] || {};
  var xml = util.json2xml({
    VersioningConfiguration: VersioningConfiguration
  });
  var headers = params.Headers;
  headers['Content-Type'] = 'application/xml';
  headers['Content-MD5'] = util.b64(util.md5(xml));
  submitRequest.call(this, {
    Action: 'name/cos:PutBucketVersioning',
    method: 'PUT',
    Bucket: params.Bucket,
    Region: params.Region,
    body: xml,
    action: 'versioning',
    headers: headers,
    tracker: params.tracker
  }, function (err, data) {
    if (err && err.statusCode === 204) {
      return callback(null, {
        statusCode: err.statusCode
      });
    } else if (err) {
      return callback(err);
    }
    callback(null, {
      statusCode: data.statusCode,
      headers: data.headers
    });
  });
}
function getBucketVersioning(params, callback) {
  submitRequest.call(this, {
    Action: 'name/cos:GetBucketVersioning',
    method: 'GET',
    Bucket: params.Bucket,
    Region: params.Region,
    headers: params.Headers,
    action: 'versioning',
    tracker: params.tracker
  }, function (err, data) {
    if (!err) {
      !data.VersioningConfiguration && (data.VersioningConfiguration = {});
    }
    callback(err, data);
  });
}
function putBucketReplication(params, callback) {
  var ReplicationConfiguration = util.clone(params.ReplicationConfiguration);
  var xml = util.json2xml({
    ReplicationConfiguration: ReplicationConfiguration
  });
  xml = xml.replace(/<(\/?)Rules>/gi, '<$1Rule>');
  xml = xml.replace(/<(\/?)Tags>/gi, '<$1Tag>');
  var headers = params.Headers;
  headers['Content-Type'] = 'application/xml';
  headers['Content-MD5'] = util.b64(util.md5(xml));
  submitRequest.call(this, {
    Action: 'name/cos:PutBucketReplication',
    method: 'PUT',
    Bucket: params.Bucket,
    Region: params.Region,
    body: xml,
    action: 'replication',
    headers: headers,
    tracker: params.tracker
  }, function (err, data) {
    if (err && err.statusCode === 204) {
      return callback(null, {
        statusCode: err.statusCode
      });
    } else if (err) {
      return callback(err);
    }
    callback(null, {
      statusCode: data.statusCode,
      headers: data.headers
    });
  });
}
function getBucketReplication(params, callback) {
  submitRequest.call(this, {
    Action: 'name/cos:GetBucketReplication',
    method: 'GET',
    Bucket: params.Bucket,
    Region: params.Region,
    headers: params.Headers,
    action: 'replication',
    tracker: params.tracker
  }, function (err, data) {
    if (err) {
      if (err.statusCode === 404 && err.error && (err.error === 'Not Found' || err.error.Code === 'ReplicationConfigurationnotFoundError')) {
        var result = {
          ReplicationConfiguration: {
            Rules: []
          },
          statusCode: err.statusCode
        };
        err.headers && (result.headers = err.headers);
        callback(null, result);
      } else {
        callback(err);
      }
      return;
    }
    !data.ReplicationConfiguration && (data.ReplicationConfiguration = {});
    if (data.ReplicationConfiguration.Rule) {
      data.ReplicationConfiguration.Rules = util.makeArray(data.ReplicationConfiguration.Rule);
      delete data.ReplicationConfiguration.Rule;
    }
    callback(err, data);
  });
}
function deleteBucketReplication(params, callback) {
  submitRequest.call(this, {
    Action: 'name/cos:DeleteBucketReplication',
    method: 'DELETE',
    Bucket: params.Bucket,
    Region: params.Region,
    headers: params.Headers,
    action: 'replication',
    tracker: params.tracker
  }, function (err, data) {
    if (err && err.statusCode === 204) {
      return callback(null, {
        statusCode: err.statusCode
      });
    } else if (err) {
      return callback(err);
    }
    callback(null, {
      statusCode: data.statusCode,
      headers: data.headers
    });
  });
}

/**
 * 设置 Bucket 静态网站配置信息
 * @param  {Object}  params                                                 参数对象，必须
 *     @param  {String}  params.Bucket                                      Bucket名称，必须
 *     @param  {String}  params.Region                                      地域名称，必须
 *     @param  {Object}  params.WebsiteConfiguration                        地域名称，必须
 *         @param  {Object}   WebsiteConfiguration.IndexDocument            索引文档，必须
 *         @param  {Object}   WebsiteConfiguration.ErrorDocument            错误文档，非必须
 *         @param  {Object}   WebsiteConfiguration.RedirectAllRequestsTo    重定向所有请求，非必须
 *         @param  {Array}   params.RoutingRules                            重定向规则，非必须
 * @param  {Function}  callback                                             回调函数，必须
 * @return  {Object}  err                                                   请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
 * @return  {Object}  data                                                  返回数据
 */
function putBucketWebsite(params, callback) {
  if (!params['WebsiteConfiguration']) {
    callback(util.error(new Error('missing param WebsiteConfiguration')));
    return;
  }
  var WebsiteConfiguration = util.clone(params['WebsiteConfiguration'] || {});
  var RoutingRules = WebsiteConfiguration['RoutingRules'] || WebsiteConfiguration['RoutingRule'] || [];
  RoutingRules = util.isArray(RoutingRules) ? RoutingRules : [RoutingRules];
  delete WebsiteConfiguration.RoutingRule;
  delete WebsiteConfiguration.RoutingRules;
  if (RoutingRules.length) WebsiteConfiguration.RoutingRules = {
    RoutingRule: RoutingRules
  };
  var xml = util.json2xml({
    WebsiteConfiguration: WebsiteConfiguration
  });
  var headers = params.Headers;
  headers['Content-Type'] = 'application/xml';
  headers['Content-MD5'] = util.b64(util.md5(xml));
  submitRequest.call(this, {
    Action: 'name/cos:PutBucketWebsite',
    method: 'PUT',
    Bucket: params.Bucket,
    Region: params.Region,
    body: xml,
    action: 'website',
    headers: headers,
    tracker: params.tracker
  }, function (err, data) {
    if (err && err.statusCode === 204) {
      return callback(null, {
        statusCode: err.statusCode
      });
    } else if (err) {
      return callback(err);
    }
    callback(null, {
      statusCode: data.statusCode,
      headers: data.headers
    });
  });
}

/**
 * 获取 Bucket 的静态网站配置信息
 * @param  {Object}  params             参数对象，必须
 *     @param  {String}  params.Bucket  Bucket名称，必须
 *     @param  {String}  params.Region  地域名称，必须
 * @param  {Function}  callback         回调函数，必须
 * @return  {Object}  err               请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
 * @return  {Object}  data              返回数据
 */
function getBucketWebsite(params, callback) {
  submitRequest.call(this, {
    Action: 'name/cos:GetBucketWebsite',
    method: 'GET',
    Bucket: params.Bucket,
    Region: params.Region,
    Key: params.Key,
    headers: params.Headers,
    action: 'website',
    tracker: params.tracker
  }, function (err, data) {
    if (err) {
      if (err.statusCode === 404 && err.error.Code === 'NoSuchWebsiteConfiguration') {
        var result = {
          WebsiteConfiguration: {},
          statusCode: err.statusCode
        };
        err.headers && (result.headers = err.headers);
        callback(null, result);
      } else {
        callback(err);
      }
      return;
    }
    var WebsiteConfiguration = data.WebsiteConfiguration || {};
    if (WebsiteConfiguration['RoutingRules']) {
      var RoutingRules = util.clone(WebsiteConfiguration['RoutingRules'].RoutingRule || []);
      RoutingRules = util.makeArray(RoutingRules);
      WebsiteConfiguration.RoutingRules = RoutingRules;
    }
    callback(null, {
      WebsiteConfiguration: WebsiteConfiguration,
      statusCode: data.statusCode,
      headers: data.headers
    });
  });
}

/**
 * 删除 Bucket 的静态网站配置
 * @param  {Object}  params             参数对象，必须
 *     @param  {String}  params.Bucket  Bucket名称，必须
 *     @param  {String}  params.Region  地域名称，必须
 * @param  {Function}  callback         回调函数，必须
 * @return  {Object}  err               请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
 * @return  {Object}  data              返回数据
 */
function deleteBucketWebsite(params, callback) {
  submitRequest.call(this, {
    Action: 'name/cos:DeleteBucketWebsite',
    method: 'DELETE',
    Bucket: params.Bucket,
    Region: params.Region,
    headers: params.Headers,
    action: 'website',
    tracker: params.tracker
  }, function (err, data) {
    if (err && err.statusCode === 204) {
      return callback(null, {
        statusCode: err.statusCode
      });
    } else if (err) {
      return callback(err);
    }
    callback(null, {
      statusCode: data.statusCode,
      headers: data.headers
    });
  });
}

/**
 * 设置 Bucket 的防盗链白名单或者黑名单
 * @param  {Object}  params                                                 参数对象，必须
 *     @param  {String}  params.Bucket                                      Bucket名称，必须
 *     @param  {String}  params.Region                                      地域名称，必须
 *     @param  {Object}  params.RefererConfiguration                        地域名称，必须
 *         @param  {String}   RefererConfiguration.Status                   是否开启防盗链，枚举值：Enabled、Disabled
 *         @param  {String}   RefererConfiguration.RefererType              防盗链类型，枚举值：Black-List、White-List，必须
 *         @param  {Array}   RefererConfiguration.DomianList.Domain         生效域名，必须
 *         @param  {String}   RefererConfiguration.EmptyReferConfiguration  ，非必须
 * @param  {Function}  callback                                             回调函数，必须
 * @return  {Object}  err                                                   请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
 * @return  {Object}  data                                                  返回数据
 */
function putBucketReferer(params, callback) {
  if (!params['RefererConfiguration']) {
    callback(util.error(new Error('missing param RefererConfiguration')));
    return;
  }
  var RefererConfiguration = util.clone(params['RefererConfiguration'] || {});
  var DomainList = RefererConfiguration['DomainList'] || {};
  var Domains = DomainList['Domains'] || DomainList['Domain'] || [];
  Domains = util.isArray(Domains) ? Domains : [Domains];
  if (Domains.length) RefererConfiguration.DomainList = {
    Domain: Domains
  };
  var xml = util.json2xml({
    RefererConfiguration: RefererConfiguration
  });
  var headers = params.Headers;
  headers['Content-Type'] = 'application/xml';
  headers['Content-MD5'] = util.b64(util.md5(xml));
  submitRequest.call(this, {
    Action: 'name/cos:PutBucketReferer',
    method: 'PUT',
    Bucket: params.Bucket,
    Region: params.Region,
    body: xml,
    action: 'referer',
    headers: headers,
    tracker: params.tracker
  }, function (err, data) {
    if (err && err.statusCode === 204) {
      return callback(null, {
        statusCode: err.statusCode
      });
    } else if (err) {
      return callback(err);
    }
    callback(null, {
      statusCode: data.statusCode,
      headers: data.headers
    });
  });
}

/**
 * 获取 Bucket 的防盗链白名单或者黑名单
 * @param  {Object}  params             参数对象，必须
 *     @param  {String}  params.Bucket  Bucket名称，必须
 *     @param  {String}  params.Region  地域名称，必须
 * @param  {Function}  callback         回调函数，必须
 * @return  {Object}  err               请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
 * @return  {Object}  data              返回数据
 */
function getBucketReferer(params, callback) {
  submitRequest.call(this, {
    Action: 'name/cos:GetBucketReferer',
    method: 'GET',
    Bucket: params.Bucket,
    Region: params.Region,
    Key: params.Key,
    headers: params.Headers,
    action: 'referer',
    tracker: params.tracker
  }, function (err, data) {
    if (err) {
      if (err.statusCode === 404 && err.error.Code === 'NoSuchRefererConfiguration') {
        var result = {
          WebsiteConfiguration: {},
          statusCode: err.statusCode
        };
        err.headers && (result.headers = err.headers);
        callback(null, result);
      } else {
        callback(err);
      }
      return;
    }
    var RefererConfiguration = data.RefererConfiguration || {};
    if (RefererConfiguration['DomainList']) {
      var Domains = util.makeArray(RefererConfiguration['DomainList'].Domain || []);
      RefererConfiguration.DomainList = {
        Domains: Domains
      };
    }
    callback(null, {
      RefererConfiguration: RefererConfiguration,
      statusCode: data.statusCode,
      headers: data.headers
    });
  });
}

/**
 * 设置 Bucket 自定义域名
 * @param  {Object}  params                                                 参数对象，必须
 *     @param  {String}  params.Bucket                                      Bucket名称，必须
 *     @param  {String}  params.Region                                      地域名称，必须
 * @param  {Function}  callback                                             回调函数，必须
 * @return  {Object}  err                                                   请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
 * @return  {Object}  data                                                  返回数据
 */
function putBucketDomain(params, callback) {
  var DomainConfiguration = params['DomainConfiguration'] || {};
  var DomainRule = DomainConfiguration.DomainRule || params.DomainRule || [];
  DomainRule = util.clone(DomainRule);
  var xml = util.json2xml({
    DomainConfiguration: {
      DomainRule: DomainRule
    }
  });
  var headers = params.Headers;
  headers['Content-Type'] = 'application/xml';
  headers['Content-MD5'] = util.b64(util.md5(xml));
  submitRequest.call(this, {
    Action: 'name/cos:PutBucketDomain',
    method: 'PUT',
    Bucket: params.Bucket,
    Region: params.Region,
    body: xml,
    action: 'domain',
    headers: headers,
    tracker: params.tracker
  }, function (err, data) {
    if (err && err.statusCode === 204) {
      return callback(null, {
        statusCode: err.statusCode
      });
    } else if (err) {
      return callback(err);
    }
    callback(null, {
      statusCode: data.statusCode,
      headers: data.headers
    });
  });
}

/**
 * 获取 Bucket 的自定义域名
 * @param  {Object}  params             参数对象，必须
 *     @param  {String}  params.Bucket  Bucket名称，必须
 *     @param  {String}  params.Region  地域名称，必须
 * @param  {Function}  callback         回调函数，必须
 * @return  {Object}  err               请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
 * @return  {Object}  data              返回数据
 */
function getBucketDomain(params, callback) {
  submitRequest.call(this, {
    Action: 'name/cos:GetBucketDomain',
    method: 'GET',
    Bucket: params.Bucket,
    Region: params.Region,
    headers: params.Headers,
    action: 'domain',
    tracker: params.tracker
  }, function (err, data) {
    if (err) return callback(err);
    var DomainRule = [];
    try {
      DomainRule = data.DomainConfiguration.DomainRule || [];
    } catch (e) {}
    DomainRule = util.clone(util.isArray(DomainRule) ? DomainRule : [DomainRule]);
    callback(null, {
      DomainRule: DomainRule,
      statusCode: data.statusCode,
      headers: data.headers
    });
  });
}

/**
 * 删除 Bucket 自定义域名
 * @param  {Object}  params             参数对象，必须
 *     @param  {String}  params.Bucket  Bucket名称，必须
 *     @param  {String}  params.Region  地域名称，必须
 * @param  {Function}  callback         回调函数，必须
 * @return  {Object}  err               请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
 * @return  {Object}  data              返回数据
 */
function deleteBucketDomain(params, callback) {
  submitRequest.call(this, {
    Action: 'name/cos:DeleteBucketDomain',
    method: 'DELETE',
    Bucket: params.Bucket,
    Region: params.Region,
    headers: params.Headers,
    action: 'domain',
    tracker: params.tracker
  }, function (err, data) {
    if (err && err.statusCode === 204) {
      return callback(null, {
        statusCode: err.statusCode
      });
    } else if (err) {
      return callback(err);
    }
    callback(null, {
      statusCode: data.statusCode,
      headers: data.headers
    });
  });
}

/**
 * 设置 Bucket 的回源
 * @param  {Object}  params                                                 参数对象，必须
 *     @param  {String}  params.Bucket                                      Bucket名称，必须
 *     @param  {String}  params.Region                                      地域名称，必须
 * @param  {Function}  callback                                             回调函数，必须
 * @return  {Object}  err                                                   请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
 * @return  {Object}  data                                                  返回数据
 */
function putBucketOrigin(params, callback) {
  var OriginConfiguration = params['OriginConfiguration'] || {};
  var OriginRule = OriginConfiguration.OriginRule || params.OriginRule || [];
  OriginRule = util.clone(OriginRule);
  var xml = util.json2xml({
    OriginConfiguration: {
      OriginRule: OriginRule
    }
  });
  var headers = params.Headers;
  headers['Content-Type'] = 'application/xml';
  headers['Content-MD5'] = util.b64(util.md5(xml));
  submitRequest.call(this, {
    Action: 'name/cos:PutBucketOrigin',
    method: 'PUT',
    Bucket: params.Bucket,
    Region: params.Region,
    body: xml,
    action: 'origin',
    headers: headers,
    tracker: params.tracker
  }, function (err, data) {
    if (err && err.statusCode === 204) {
      return callback(null, {
        statusCode: err.statusCode
      });
    } else if (err) {
      return callback(err);
    }
    callback(null, {
      statusCode: data.statusCode,
      headers: data.headers
    });
  });
}

/**
 * 获取 Bucket 的回源
 * @param  {Object}  params             参数对象，必须
 *     @param  {String}  params.Bucket  Bucket名称，必须
 *     @param  {String}  params.Region  地域名称，必须
 * @param  {Function}  callback         回调函数，必须
 * @return  {Object}  err               请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
 * @return  {Object}  data              返回数据
 */
function getBucketOrigin(params, callback) {
  submitRequest.call(this, {
    Action: 'name/cos:GetBucketOrigin',
    method: 'GET',
    Bucket: params.Bucket,
    Region: params.Region,
    headers: params.Headers,
    action: 'origin',
    tracker: params.tracker
  }, function (err, data) {
    if (err) return callback(err);
    var OriginRule = [];
    try {
      OriginRule = data.OriginConfiguration.OriginRule || [];
    } catch (e) {}
    OriginRule = util.clone(util.isArray(OriginRule) ? OriginRule : [OriginRule]);
    callback(null, {
      OriginRule: OriginRule,
      statusCode: data.statusCode,
      headers: data.headers
    });
  });
}

/**
 * 删除 Bucket 的回源
 * @param  {Object}  params             参数对象，必须
 *     @param  {String}  params.Bucket  Bucket名称，必须
 *     @param  {String}  params.Region  地域名称，必须
 * @param  {Function}  callback         回调函数，必须
 * @return  {Object}  err               请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
 * @return  {Object}  data              返回数据
 */
function deleteBucketOrigin(params, callback) {
  submitRequest.call(this, {
    Action: 'name/cos:DeleteBucketOrigin',
    method: 'DELETE',
    Bucket: params.Bucket,
    Region: params.Region,
    headers: params.Headers,
    action: 'origin',
    tracker: params.tracker
  }, function (err, data) {
    if (err && err.statusCode === 204) {
      return callback(null, {
        statusCode: err.statusCode
      });
    } else if (err) {
      return callback(err);
    }
    callback(null, {
      statusCode: data.statusCode,
      headers: data.headers
    });
  });
}

/**
 * 设置 Bucket 的日志记录
 * @param  {Object}  params                                                 参数对象，必须
 *     @param  {String}  params.Bucket                                      Bucket名称，必须
 *     @param  {String}  params.Region                                      地域名称，必须
 *     @param  {(Object|String)}  params.BucketLoggingStatus                         说明日志记录配置的状态，如果无子节点信息则意为关闭日志记录，必须
 * @param  {Function}  callback                                             回调函数，必须
 * @return  {Object}  err                                                   请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
 * @return  {Object}  data                                                  返回数据
 */
function putBucketLogging(params, callback) {
  var xml = util.json2xml({
    BucketLoggingStatus: params['BucketLoggingStatus'] || ''
  });
  var headers = params.Headers;
  headers['Content-Type'] = 'application/xml';
  headers['Content-MD5'] = util.b64(util.md5(xml));
  submitRequest.call(this, {
    Action: 'name/cos:PutBucketLogging',
    method: 'PUT',
    Bucket: params.Bucket,
    Region: params.Region,
    body: xml,
    action: 'logging',
    headers: headers,
    tracker: params.tracker
  }, function (err, data) {
    if (err && err.statusCode === 204) {
      return callback(null, {
        statusCode: err.statusCode
      });
    } else if (err) {
      return callback(err);
    }
    callback(null, {
      statusCode: data.statusCode,
      headers: data.headers
    });
  });
}

/**
 * 获取 Bucket 的日志记录
 * @param  {Object}  params             参数对象，必须
 *     @param  {String}  params.Bucket  Bucket名称，必须
 *     @param  {String}  params.Region  地域名称，必须
 * @param  {Function}  callback         回调函数，必须
 * @return  {Object}  err               请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
 * @return  {Object}  data              返回数据
 */
function getBucketLogging(params, callback) {
  submitRequest.call(this, {
    Action: 'name/cos:GetBucketLogging',
    method: 'GET',
    Bucket: params.Bucket,
    Region: params.Region,
    headers: params.Headers,
    action: 'logging',
    tracker: params.tracker
  }, function (err, data) {
    if (err) return callback(err);
    callback(null, {
      BucketLoggingStatus: data.BucketLoggingStatus,
      statusCode: data.statusCode,
      headers: data.headers
    });
  });
}

/**
 * 创建/编辑 Bucket 的清单任务
 * @param  {Object}  params                                                 参数对象，必须
 *     @param  {String}  params.Bucket                                      Bucket名称，必须
 *     @param  {String}  params.Region                                      地域名称，必须
 *     @param  {String}  params.Id                                          清单任务的名称，必须
 *     @param  {Object}  params.InventoryConfiguration                      包含清单的配置参数，必须
 * @param  {Function}  callback                                             回调函数，必须
 * @return  {Object}  err                                                   请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
 * @return  {Object}  data                                                  返回数据
 */
function submitBucketInventory(method, params, callback) {
  var InventoryConfiguration = util.clone(params['InventoryConfiguration']);
  if (InventoryConfiguration.OptionalFields) {
    var Field = InventoryConfiguration.OptionalFields || [];
    InventoryConfiguration.OptionalFields = {
      Field: Field
    };
  }
  if (InventoryConfiguration.Destination && InventoryConfiguration.Destination.COSBucketDestination && InventoryConfiguration.Destination.COSBucketDestination.Encryption) {
    var Encryption = InventoryConfiguration.Destination.COSBucketDestination.Encryption;
    if (Object.keys(Encryption).indexOf('SSECOS') > -1) {
      Encryption['SSE-COS'] = Encryption['SSECOS'];
      delete Encryption['SSECOS'];
    }
  }
  var xml = util.json2xml({
    InventoryConfiguration: InventoryConfiguration
  });
  var headers = params.Headers;
  headers['Content-Type'] = 'application/xml';
  headers['Content-MD5'] = util.b64(util.md5(xml));
  var action = method === 'PUT' ? 'name/cos:PutBucketInventory' : 'name/cos:PostBucketInventory';
  submitRequest.call(this, {
    Action: action,
    method: method,
    Bucket: params.Bucket,
    Region: params.Region,
    body: xml,
    action: 'inventory',
    qs: {
      id: params['Id']
    },
    headers: headers,
    tracker: params.tracker
  }, function (err, data) {
    if (err && err.statusCode === 204) {
      return callback(null, {
        statusCode: err.statusCode
      });
    } else if (err) {
      return callback(err);
    }
    callback(null, {
      statusCode: data.statusCode,
      headers: data.headers
    });
  });
}

/**
 * 创建一个清单任务
 */
function putBucketInventory(params, callback) {
  return submitBucketInventory.call(this, 'PUT', params, callback);
}

/**
 * 创建一个一次性清单任务 会立即执行
 */
function postBucketInventory(params, callback) {
  return submitBucketInventory.call(this, 'POST', params, callback);
}

/**
 * 获取 Bucket 的清单任务信息
 * @param  {Object}  params             参数对象，必须
 *     @param  {String}  params.Bucket  Bucket名称，必须
 *     @param  {String}  params.Region  地域名称，必须
 *     @param  {String}  params.Id      清单任务的名称，必须
 * @param  {Function}  callback         回调函数，必须
 * @return  {Object}  err               请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
 * @return  {Object}  data              返回数据
 */
function getBucketInventory(params, callback) {
  submitRequest.call(this, {
    Action: 'name/cos:GetBucketInventory',
    method: 'GET',
    Bucket: params.Bucket,
    Region: params.Region,
    headers: params.Headers,
    action: 'inventory',
    qs: {
      id: params['Id']
    },
    tracker: params.tracker
  }, function (err, data) {
    if (err) return callback(err);
    var InventoryConfiguration = data['InventoryConfiguration'];
    if (InventoryConfiguration && InventoryConfiguration.OptionalFields && InventoryConfiguration.OptionalFields.Field) {
      var Field = InventoryConfiguration.OptionalFields.Field;
      if (!util.isArray(Field)) {
        Field = [Field];
      }
      InventoryConfiguration.OptionalFields = Field;
    }
    if (InventoryConfiguration.Destination && InventoryConfiguration.Destination.COSBucketDestination && InventoryConfiguration.Destination.COSBucketDestination.Encryption) {
      var Encryption = InventoryConfiguration.Destination.COSBucketDestination.Encryption;
      if (Object.keys(Encryption).indexOf('SSE-COS') > -1) {
        Encryption['SSECOS'] = Encryption['SSE-COS'];
        delete Encryption['SSE-COS'];
      }
    }
    callback(null, {
      InventoryConfiguration: InventoryConfiguration,
      statusCode: data.statusCode,
      headers: data.headers
    });
  });
}

/**
 * 获取 Bucket 的清单任务信息
 * @param  {Object}  params                             参数对象，必须
 *     @param  {String}  params.Bucket                  Bucket名称，必须
 *     @param  {String}  params.Region                  地域名称，必须
 *     @param  {String}  params.ContinuationToken       当 COS 响应体中 IsTruncated 为 true，且 NextContinuationToken 节点中存在参数值时，您可以将这个参数作为 continuation-token 参数值，以获取下一页的清单任务信息，非必须
 * @param  {Function}  callback                         回调函数，必须
 * @return  {Object}  err                               请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
 * @return  {Object}  data                              返回数据
 */
function listBucketInventory(params, callback) {
  submitRequest.call(this, {
    Action: 'name/cos:ListBucketInventory',
    method: 'GET',
    Bucket: params.Bucket,
    Region: params.Region,
    headers: params.Headers,
    action: 'inventory',
    qs: {
      'continuation-token': params['ContinuationToken']
    },
    tracker: params.tracker
  }, function (err, data) {
    if (err) return callback(err);
    var ListInventoryConfigurationResult = data['ListInventoryConfigurationResult'];
    var InventoryConfigurations = ListInventoryConfigurationResult.InventoryConfiguration || [];
    InventoryConfigurations = util.isArray(InventoryConfigurations) ? InventoryConfigurations : [InventoryConfigurations];
    delete ListInventoryConfigurationResult['InventoryConfiguration'];
    util.each(InventoryConfigurations, function (InventoryConfiguration) {
      if (InventoryConfiguration && InventoryConfiguration.OptionalFields && InventoryConfiguration.OptionalFields.Field) {
        var Field = InventoryConfiguration.OptionalFields.Field;
        if (!util.isArray(Field)) {
          Field = [Field];
        }
        InventoryConfiguration.OptionalFields = Field;
      }
      if (InventoryConfiguration.Destination && InventoryConfiguration.Destination.COSBucketDestination && InventoryConfiguration.Destination.COSBucketDestination.Encryption) {
        var Encryption = InventoryConfiguration.Destination.COSBucketDestination.Encryption;
        if (Object.keys(Encryption).indexOf('SSE-COS') > -1) {
          Encryption['SSECOS'] = Encryption['SSE-COS'];
          delete Encryption['SSE-COS'];
        }
      }
    });
    ListInventoryConfigurationResult.InventoryConfigurations = InventoryConfigurations;
    util.extend(ListInventoryConfigurationResult, {
      statusCode: data.statusCode,
      headers: data.headers
    });
    callback(null, ListInventoryConfigurationResult);
  });
}

/**
 * 删除 Bucket 的清单任务
 * @param  {Object}  params             参数对象，必须
 *     @param  {String}  params.Bucket  Bucket名称，必须
 *     @param  {String}  params.Region  地域名称，必须
 *     @param  {String}  params.Id      清单任务的名称，必须
 * @param  {Function}  callback         回调函数，必须
 * @return  {Object}  err               请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
 * @return  {Object}  data              返回数据
 */
function deleteBucketInventory(params, callback) {
  submitRequest.call(this, {
    Action: 'name/cos:DeleteBucketInventory',
    method: 'DELETE',
    Bucket: params.Bucket,
    Region: params.Region,
    headers: params.Headers,
    action: 'inventory',
    qs: {
      id: params['Id']
    },
    tracker: params.tracker
  }, function (err, data) {
    if (err && err.statusCode === 204) {
      return callback(null, {
        statusCode: err.statusCode
      });
    } else if (err) {
      return callback(err);
    }
    callback(null, {
      statusCode: data.statusCode,
      headers: data.headers
    });
  });
}

/* 全球加速 */
function putBucketAccelerate(params, callback) {
  if (!params['AccelerateConfiguration']) {
    callback(util.error(new Error('missing param AccelerateConfiguration')));
    return;
  }
  var configuration = {
    AccelerateConfiguration: params.AccelerateConfiguration || {}
  };
  var xml = util.json2xml(configuration);
  var headers = {};
  headers['Content-Type'] = 'application/xml';
  headers['Content-MD5'] = util.b64(util.md5(xml));
  submitRequest.call(this, {
    Action: 'name/cos:PutBucketAccelerate',
    method: 'PUT',
    Bucket: params.Bucket,
    Region: params.Region,
    body: xml,
    action: 'accelerate',
    headers: headers,
    tracker: params.tracker
  }, function (err, data) {
    if (err) return callback(err);
    callback(null, {
      statusCode: data.statusCode,
      headers: data.headers
    });
  });
}
function getBucketAccelerate(params, callback) {
  submitRequest.call(this, {
    Action: 'name/cos:GetBucketAccelerate',
    method: 'GET',
    Bucket: params.Bucket,
    Region: params.Region,
    action: 'accelerate',
    tracker: params.tracker
  }, function (err, data) {
    if (!err) {
      !data.AccelerateConfiguration && (data.AccelerateConfiguration = {});
    }
    callback(err, data);
  });
}
function putBucketEncryption(params, callback) {
  var conf = params.ServerSideEncryptionConfiguration || {};
  var Rules = conf.Rule || conf.Rules || [];
  var xml = util.json2xml({
    ServerSideEncryptionConfiguration: {
      Rule: Rules
    }
  });
  var headers = params.Headers;
  headers['Content-Type'] = 'application/xml';
  headers['Content-MD5'] = util.b64(util.md5(xml));
  submitRequest.call(this, {
    Action: 'name/cos:PutBucketEncryption',
    method: 'PUT',
    Bucket: params.Bucket,
    Region: params.Region,
    body: xml,
    action: 'encryption',
    headers: headers,
    tracker: params.tracker
  }, function (err, data) {
    if (err && err.statusCode === 204) {
      return callback(null, {
        statusCode: err.statusCode
      });
    } else if (err) {
      return callback(err);
    }
    callback(null, {
      statusCode: data.statusCode,
      headers: data.headers
    });
  });
}
function getBucketEncryption(params, callback) {
  submitRequest.call(this, {
    Action: 'name/cos:GetBucketEncryption',
    method: 'GET',
    Bucket: params.Bucket,
    Region: params.Region,
    headers: params.Headers,
    action: 'encryption',
    tracker: params.tracker
  }, function (err, data) {
    if (err) {
      if (err.statusCode === 404 && err.code === 'NoSuchEncryptionConfiguration') {
        var result = {
          EncryptionConfiguration: {
            Rules: []
          },
          statusCode: err.statusCode
        };
        err.headers && (result.headers = err.headers);
        callback(null, result);
      } else {
        callback(err);
      }
      return;
    }
    var Rules = util.makeArray(data.EncryptionConfiguration && data.EncryptionConfiguration.Rule || []);
    data.EncryptionConfiguration = {
      Rules: Rules
    };
    callback(err, data);
  });
}
function deleteBucketEncryption(params, callback) {
  submitRequest.call(this, {
    Action: 'name/cos:DeleteBucketReplication',
    method: 'DELETE',
    Bucket: params.Bucket,
    Region: params.Region,
    headers: params.Headers,
    action: 'encryption',
    tracker: params.tracker
  }, function (err, data) {
    if (err && err.statusCode === 204) {
      return callback(null, {
        statusCode: err.statusCode
      });
    } else if (err) {
      return callback(err);
    }
    callback(null, {
      statusCode: data.statusCode,
      headers: data.headers
    });
  });
}

// Object 相关

/**
 * 取回对应Object的元数据，Head的权限与Get的权限一致
 * @param  {Object}  params                         参数对象，必须
 *     @param  {String}  params.Bucket              Bucket名称，必须
 *     @param  {String}  params.Region              地域名称，必须
 *     @param  {String}  params.Key                 文件名称，必须
 *     @param  {String}  params.IfModifiedSince     当Object在指定时间后被修改，则返回对应Object元信息，否则返回304，非必须
 * @param  {Function}  callback                     回调函数，必须
 * @return  {Object}  err                           请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
 * @return  {Object}  data                          为指定 object 的元数据，如果设置了 IfModifiedSince ，且文件未修改，则返回一个对象，NotModified 属性为 true
 *     @return  {Boolean}  data.NotModified         是否在 IfModifiedSince 时间点之后未修改该 object，则为 true
 */
function headObject(params, callback) {
  submitRequest.call(this, {
    Action: 'name/cos:HeadObject',
    method: 'HEAD',
    Bucket: params.Bucket,
    Region: params.Region,
    Key: params.Key,
    VersionId: params.VersionId,
    headers: params.Headers,
    tracker: params.tracker
  }, function (err, data) {
    if (err) {
      var statusCode = err.statusCode;
      if (params.Headers['If-Modified-Since'] && statusCode && statusCode === 304) {
        return callback(null, {
          NotModified: true,
          statusCode: statusCode
        });
      }
      return callback(err);
    }
    data.ETag = util.attr(data.headers, 'etag', '');
    callback(null, data);
  });
}
function listObjectVersions(params, callback) {
  var reqParams = {};
  reqParams['prefix'] = params['Prefix'] || '';
  reqParams['delimiter'] = params['Delimiter'];
  reqParams['key-marker'] = params['KeyMarker'];
  reqParams['version-id-marker'] = params['VersionIdMarker'];
  reqParams['max-keys'] = params['MaxKeys'];
  reqParams['encoding-type'] = params['EncodingType'];
  submitRequest.call(this, {
    Action: 'name/cos:GetBucketObjectVersions',
    ResourceKey: reqParams['prefix'],
    method: 'GET',
    Bucket: params.Bucket,
    Region: params.Region,
    headers: params.Headers,
    qs: reqParams,
    action: 'versions',
    tracker: params.tracker
  }, function (err, data) {
    if (err) return callback(err);
    var ListVersionsResult = data.ListVersionsResult || {};
    var DeleteMarkers = ListVersionsResult.DeleteMarker || [];
    DeleteMarkers = util.isArray(DeleteMarkers) ? DeleteMarkers : [DeleteMarkers];
    var Versions = ListVersionsResult.Version || [];
    Versions = util.isArray(Versions) ? Versions : [Versions];
    var result = util.clone(ListVersionsResult);
    delete result.DeleteMarker;
    delete result.Version;
    util.extend(result, {
      DeleteMarkers: DeleteMarkers,
      Versions: Versions,
      statusCode: data.statusCode,
      headers: data.headers
    });
    callback(null, result);
  });
}

/**
 * 下载 object
 * @param  {Object}  params                                 参数对象，必须
 *     @param  {String}  params.Bucket                      Bucket名称，必须
 *     @param  {String}  params.Region                      地域名称，必须
 *     @param  {String}  params.Key                         文件名称，必须
 *     @param  {WriteStream}  params.Output                 文件写入流，非必须
 *     @param  {String}  params.IfModifiedSince             当Object在指定时间后被修改，则返回对应Object元信息，否则返回304，非必须
 *     @param  {String}  params.IfUnmodifiedSince           如果文件修改时间早于或等于指定时间，才返回文件内容。否则返回 412 (precondition failed)，非必须
 *     @param  {String}  params.IfMatch                     当 ETag 与指定的内容一致，才返回文件。否则返回 412 (precondition failed)，非必须
 *     @param  {String}  params.IfNoneMatch                 当 ETag 与指定的内容不一致，才返回文件。否则返回304 (not modified)，非必须
 *     @param  {String}  params.ResponseContentType         设置返回头部中的 Content-Type 参数，非必须
 *     @param  {String}  params.ResponseContentLanguage     设置返回头部中的 Content-Language 参数，非必须
 *     @param  {String}  params.ResponseExpires             设置返回头部中的 Content-Expires 参数，非必须
 *     @param  {String}  params.ResponseCacheControl        设置返回头部中的 Cache-Control 参数，非必须
 *     @param  {String}  params.ResponseContentDisposition  设置返回头部中的 Content-Disposition 参数，非必须
 *     @param  {String}  params.ResponseContentEncoding     设置返回头部中的 Content-Encoding 参数，非必须
 * @param  {Function}  callback                             回调函数，必须
 * @param  {Object}  err                                    请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
 * @param  {Object}  data                                   为对应的 object 数据，包括 body 和 headers
 */
function getObject(params, callback) {
  var self = this;
  self.logger.info({
    cate: 'PROCESS',
    tag: 'download',
    msg: "[key=".concat(params.Key, "] getObject\u5F00\u59CB")
  });
  if (this.options.ObjectKeySimplifyCheck) {
    // getObject 的 Key 需要校验，避免调用成 getBucket
    var formatKey = util.simplifyPath(params.Key);
    if (formatKey === '/') {
      callback(util.error(new Error('The Getobject Key is illegal')));
      return;
    }
  }
  var reqParams = params.Query || {};
  var reqParamsStr = params.QueryString || '';
  var onProgress = util.throttleOnProgress.call(this, 0, params.onProgress);
  var tracker = params.tracker;
  tracker && tracker.setParams({
    signStartTime: new Date().getTime()
  });
  reqParams['response-content-type'] = params['ResponseContentType'];
  reqParams['response-content-language'] = params['ResponseContentLanguage'];
  reqParams['response-expires'] = params['ResponseExpires'];
  reqParams['response-cache-control'] = params['ResponseCacheControl'];
  reqParams['response-content-disposition'] = params['ResponseContentDisposition'];
  reqParams['response-content-encoding'] = params['ResponseContentEncoding'];

  // 如果用户自己传入了 output
  submitRequest.call(this, {
    Action: 'name/cos:GetObject',
    method: 'GET',
    Bucket: params.Bucket,
    Region: params.Region,
    Key: params.Key,
    VersionId: params.VersionId,
    DataType: params.DataType,
    headers: params.Headers,
    qs: reqParams,
    qsStr: reqParamsStr,
    rawBody: true,
    onDownloadProgress: onProgress,
    tracker: tracker
  }, function (err, data) {
    onProgress(null, true);
    if (err) {
      var statusCode = err.statusCode;
      if (params.Headers['If-Modified-Since'] && statusCode && statusCode === 304) {
        return callback(null, {
          NotModified: true
        });
      }
      return callback(err);
    }
    callback(null, {
      Body: data.body,
      ETag: util.attr(data.headers, 'etag', ''),
      statusCode: data.statusCode,
      headers: data.headers
    });
    self.logger.info({
      cate: 'PROCESS',
      tag: 'download',
      msg: "[key=".concat(params.Key, "] getObject\u7ED3\u675F")
    });
  });
}

/**
 * 上传 object
 * @param  {Object} params                                          参数对象，必须
 *     @param  {String}  params.Bucket                              Bucket名称，必须
 *     @param  {String}  params.Region                              地域名称，必须
 *     @param  {String}  params.Key                                 文件名称，必须
 *     @param  {File || Blob || String}  params.Body                上传文件对象或字符串，必须
 *     @param  {String}  params.CacheControl                        RFC 2616 中定义的缓存策略，将作为 Object 元数据保存，非必须
 *     @param  {String}  params.ContentDisposition                  RFC 2616 中定义的文件名称，将作为 Object 元数据保存，非必须
 *     @param  {String}  params.ContentEncoding                     RFC 2616 中定义的编码格式，将作为 Object 元数据保存，非必须
 *     @param  {String}  params.ContentLength                       RFC 2616 中定义的 HTTP 请求内容长度（字节），必须
 *     @param  {String}  params.ContentType                         RFC 2616 中定义的内容类型（MIME），将作为 Object 元数据保存，非必须
 *     @param  {String}  params.Expect                              当使用 Expect: 100-continue 时，在收到服务端确认后，才会发送请求内容，非必须
 *     @param  {String}  params.Expires                             RFC 2616 中定义的过期时间，将作为 Object 元数据保存，非必须
 *     @param  {String}  params.ACL                                 允许用户自定义文件权限，有效值：private | public-read，非必须
 *     @param  {String}  params.GrantRead                           赋予被授权者读取对象的权限，格式：id="[OwnerUin]"，可使用半角逗号（,）分隔多组被授权者，非必须
 *     @param  {String}  params.GrantReadAcp                        赋予被授权者读取对象的访问控制列表（ACL）的权限，格式：id="[OwnerUin]"，可使用半角逗号（,）分隔多组被授权者，非必须
 *     @param  {String}  params.GrantWriteAcp                       赋予被授权者写入对象的访问控制列表（ACL）的权限，格式：id="[OwnerUin]"，可使用半角逗号（,）分隔多组被授权者，非必须
 *     @param  {String}  params.GrantFullControl                    赋予被授权者操作对象的所有权限，格式：id="[OwnerUin]"，可使用半角逗号（,）分隔多组被授权者，非必须
 *     @param  {String}  params.StorageClass                        设置对象的存储级别，枚举值：STANDARD、STANDARD_IA、ARCHIVE，默认值：STANDARD，非必须
 *     @param  {String}  params.x-cos-meta-*                        允许用户自定义的头部信息，将作为对象的元数据保存。大小限制2KB，非必须
 *     @param  {String}  params.ContentSha1                         RFC 3174 中定义的 160-bit 内容 SHA-1 算法校验，非必须
 *     @param  {String}  params.ServerSideEncryption                支持按照指定的加密算法进行服务端数据加密，格式 x-cos-server-side-encryption: "AES256"，非必须
 *     @param  {Function}  params.onProgress                        上传进度回调函数
 * @param  {Function}  callback                                     回调函数，必须
 * @return  {Object}  err                                           请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
 * @return  {Object}  data                                          为对应的 object 数据
 *     @return  {String}  data.ETag                                 为对应上传文件的 ETag 值
 */
function putObject(params, callback) {
  var self = this;
  var FileSize = params.ContentLength;
  var onProgress = util.throttleOnProgress.call(self, FileSize, params.onProgress);
  self.logger.info({
    cate: 'PROCESS',
    tag: 'upload',
    msg: "[key=".concat(params.Key, "] putObject\u5F00\u59CB")
  });

  // 特殊处理 Cache-Control、Content-Type，避免代理更改这两个字段导致写入到 Object 属性里
  var headers = params.Headers;
  if (!headers['Cache-Control'] && !headers['cache-control']) headers['Cache-Control'] = '';
  if (!headers['Content-Type'] && !headers['content-type']) {
    headers['Content-Type'] = params.Body && params.Body.type || '';
  }
  var needCalcMd5 = params.UploadAddMetaMd5 || self.options.UploadAddMetaMd5 || self.options.UploadCheckContentMd5;
  var tracker = params.tracker;
  needCalcMd5 && tracker && tracker.setParams({
    md5StartTime: new Date().getTime()
  });
  needCalcMd5 && self.logger.debug({
    cate: 'PROCESS',
    tag: 'upload',
    msg: "[key=".concat(params.Key, "] \u5F00\u59CB\u8BA1\u7B97 md5")
  });
  util.getBodyMd5(needCalcMd5, params.Body, function (md5) {
    if (md5) {
      self.logger.debug({
        cate: 'PROCESS',
        tag: 'upload',
        msg: "[key=".concat(params.Key, "] md5: ").concat(md5, "\uFF0Cmd5Base64=").concat(util.b64(md5))
      });
      tracker && tracker.setParams({
        md5EndTime: new Date().getTime()
      });
      if (self.options.UploadCheckContentMd5) headers['Content-MD5'] = util.b64(md5);
      if (params.UploadAddMetaMd5 || self.options.UploadAddMetaMd5) headers['x-cos-meta-md5'] = md5;
    }
    if (params.ContentLength !== undefined) headers['Content-Length'] = params.ContentLength;
    onProgress(null, true); // 任务状态开始 uploading
    submitRequest.call(self, {
      Action: 'name/cos:PutObject',
      TaskId: params.TaskId,
      method: 'PUT',
      Bucket: params.Bucket,
      Region: params.Region,
      Key: params.Key,
      headers: params.Headers,
      qs: params.Query,
      body: params.Body,
      onProgress: onProgress,
      tracker: tracker
    }, function (err, data) {
      if (err) {
        self.logger.error({
          cate: 'ERROR',
          tag: 'upload',
          msg: "\u4E0A\u4F20\u5931\u8D25\uFF0C\u9519\u8BEF\u4FE1\u606F\uFF1A".concat(JSON.stringify(err))
        });
        onProgress(null, true);
        return callback(err);
      }
      onProgress({
        loaded: FileSize,
        total: FileSize
      }, true);
      var url = getUrl({
        ForcePathStyle: self.options.ForcePathStyle,
        protocol: self.options.Protocol,
        domain: self.options.Domain,
        bucket: params.Bucket,
        region: !self.options.UseAccelerate ? params.Region : 'accelerate',
        object: params.Key
      });
      url = url.substr(url.indexOf('://') + 3);
      data.Location = url;
      data.ETag = util.attr(data.headers, 'etag', '');
      self.logger.info({
        cate: 'RESULT',
        tag: 'upload',
        msg: "\u4E0A\u4F20\u6210\u529F\uFF0CLocation=".concat(url)
      });
      self.logger.info({
        cate: 'PROCESS',
        tag: 'upload',
        msg: "[key=".concat(params.Key, "] putObject\u7ED3\u675F")
      });
      callback(null, data);
    });
  }, params.onHashProgress);
}

/**
 * 删除 object
 * @param  {Object}  params                     参数对象，必须
 *     @param  {String}  params.Bucket          Bucket名称，必须
 *     @param  {String}  params.Region          地域名称，必须
 *     @param  {String}  params.Key             object名称，必须
 * @param  {Function}  callback                 回调函数，必须
 * @param  {Object}  err                        请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
 * @param  {Object}  data                       删除操作成功之后返回的数据
 */
function deleteObject(params, callback) {
  submitRequest.call(this, {
    Action: 'name/cos:DeleteObject',
    method: 'DELETE',
    Bucket: params.Bucket,
    Region: params.Region,
    Key: params.Key,
    headers: params.Headers,
    VersionId: params.VersionId,
    action: params.Recursive ? 'recursive' : '',
    tracker: params.tracker
  }, function (err, data) {
    if (err) {
      var statusCode = err.statusCode;
      if (statusCode && statusCode === 404) {
        return callback(null, {
          BucketNotFound: true,
          statusCode: statusCode
        });
      } else {
        return callback(err);
      }
    }
    callback(null, {
      statusCode: data.statusCode,
      headers: data.headers
    });
  });
}

/**
 * 获取 object 的 权限列表
 * @param  {Object}  params                         参数对象，必须
 *     @param  {String}  params.Bucket              Bucket名称，必须
 *     @param  {String}  params.Region              地域名称，必须
 *     @param  {String}  params.Key                 object名称，必须
 * @param  {Function}  callback                     回调函数，必须
 * @return  {Object}  err                           请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
 * @return  {Object}  data                          返回的数据
 *     @return  {Object}  data.AccessControlPolicy  权限列表
 */
function getObjectAcl(params, callback) {
  var reqParams = {};
  if (params.VersionId) {
    reqParams.versionId = params.VersionId;
  }
  submitRequest.call(this, {
    Action: 'name/cos:GetObjectACL',
    method: 'GET',
    Bucket: params.Bucket,
    Region: params.Region,
    Key: params.Key,
    headers: params.Headers,
    qs: reqParams,
    action: 'acl',
    tracker: params.tracker
  }, function (err, data) {
    if (err) return callback(err);
    var AccessControlPolicy = data.AccessControlPolicy || {};
    var Owner = AccessControlPolicy.Owner || {};
    var Grant = AccessControlPolicy.AccessControlList && AccessControlPolicy.AccessControlList.Grant || [];
    Grant = util.isArray(Grant) ? Grant : [Grant];
    var result = decodeAcl(AccessControlPolicy);
    delete result.GrantWrite;
    if (data.headers && data.headers['x-cos-acl']) {
      result.ACL = data.headers['x-cos-acl'];
    }
    result = util.extend(result, {
      Owner: Owner,
      Grants: Grant,
      statusCode: data.statusCode,
      headers: data.headers
    });
    callback(null, result);
  });
}

/**
 * 设置 object 的 权限列表
 * @param  {Object}  params             参数对象，必须
 *     @param  {String}  params.Bucket  Bucket名称，必须
 *     @param  {String}  params.Region  地域名称，必须
 *     @param  {String}  params.Key     object名称，必须
 * @param  {Function}  callback         回调函数，必须
 * @return  {Object}  err               请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
 * @return  {Object}  data              返回的数据
 */
function putObjectAcl(params, callback) {
  var headers = params.Headers;
  var xml = '';
  if (params['AccessControlPolicy']) {
    var AccessControlPolicy = util.clone(params['AccessControlPolicy'] || {});
    var Grants = AccessControlPolicy.Grants || AccessControlPolicy.Grant;
    Grants = util.isArray(Grants) ? Grants : [Grants];
    delete AccessControlPolicy.Grant;
    delete AccessControlPolicy.Grants;
    AccessControlPolicy.AccessControlList = {
      Grant: Grants
    };
    xml = util.json2xml({
      AccessControlPolicy: AccessControlPolicy
    });
    headers['Content-Type'] = 'application/xml';
    headers['Content-MD5'] = util.b64(util.md5(xml));
  }

  // Grant Header 去重
  util.each(headers, function (val, key) {
    if (key.indexOf('x-cos-grant-') === 0) {
      headers[key] = uniqGrant(headers[key]);
    }
  });
  submitRequest.call(this, {
    Action: 'name/cos:PutObjectACL',
    method: 'PUT',
    Bucket: params.Bucket,
    Region: params.Region,
    Key: params.Key,
    action: 'acl',
    headers: headers,
    body: xml,
    tracker: params.tracker
  }, function (err, data) {
    if (err) return callback(err);
    callback(null, {
      statusCode: data.statusCode,
      headers: data.headers
    });
  });
}

/**
 * Options Object请求实现跨域访问的预请求。即发出一个 OPTIONS 请求给服务器以确认是否可以进行跨域操作。
 * @param  {Object}  params             参数对象，必须
 *     @param  {String}  params.Bucket  Bucket名称，必须
 *     @param  {String}  params.Region  地域名称，必须
 *     @param  {String}  params.Key     object名称，必须
 * @param  {Function}  callback         回调函数，必须
 * @return  {Object}  err               请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
 * @return  {Object}  data              返回的数据
 */
function optionsObject(params, callback) {
  var headers = params.Headers;
  headers['Origin'] = params['Origin'];
  headers['Access-Control-Request-Method'] = params['AccessControlRequestMethod'];
  headers['Access-Control-Request-Headers'] = params['AccessControlRequestHeaders'];
  submitRequest.call(this, {
    Action: 'name/cos:OptionsObject',
    method: 'OPTIONS',
    Bucket: params.Bucket,
    Region: params.Region,
    Key: params.Key,
    headers: headers,
    tracker: params.tracker
  }, function (err, data) {
    if (err) {
      if (err.statusCode && err.statusCode === 403) {
        return callback(null, {
          OptionsForbidden: true,
          statusCode: err.statusCode
        });
      }
      return callback(err);
    }
    var headers = data.headers || {};
    callback(null, {
      AccessControlAllowOrigin: headers['access-control-allow-origin'],
      AccessControlAllowMethods: headers['access-control-allow-methods'],
      AccessControlAllowHeaders: headers['access-control-allow-headers'],
      AccessControlExposeHeaders: headers['access-control-expose-headers'],
      AccessControlMaxAge: headers['access-control-max-age'],
      statusCode: data.statusCode,
      headers: data.headers
    });
  });
}

/**
 * @param  {Object}                                     参数列表
 *     @param  {String}  Bucket                         Bucket 名称
 *     @param  {String}  Region                         地域名称
 *     @param  {String}  Key                            文件名称
 *     @param  {String}  CopySource                     源文件URL绝对路径，可以通过versionid子资源指定历史版本
 *     @param  {String}  ACL                            允许用户自定义文件权限。有效值：private，public-read默认值：private。
 *     @param  {String}  GrantRead                      赋予被授权者读的权限，格式 x-cos-grant-read: uin=" ",uin=" "，当需要给子账户授权时，uin="RootAcountID/SubAccountID"，当需要给根账户授权时，uin="RootAcountID"。
 *     @param  {String}  GrantWrite                     赋予被授权者写的权限，格式 x-cos-grant-write: uin=" ",uin=" "，当需要给子账户授权时，uin="RootAcountID/SubAccountID"，当需要给根账户授权时，uin="RootAcountID"。
 *     @param  {String}  GrantFullControl               赋予被授权者读写权限，格式 x-cos-grant-full-control: uin=" ",uin=" "，当需要给子账户授权时，uin="RootAcountID/SubAccountID"，当需要给根账户授权时，uin="RootAcountID"。
 *     @param  {String}  MetadataDirective              是否拷贝元数据，枚举值：Copy, Replaced，默认值Copy。假如标记为Copy，忽略Header中的用户元数据信息直接复制；假如标记为Replaced，按Header信息修改元数据。当目标路径和原路径一致，即用户试图修改元数据时，必须为Replaced
 *     @param  {String}  CopySourceIfModifiedSince      当Object在指定时间后被修改，则执行操作，否则返回412。可与x-cos-copy-source-If-None-Match一起使用，与其他条件联合使用返回冲突。
 *     @param  {String}  CopySourceIfUnmodifiedSince    当Object在指定时间后未被修改，则执行操作，否则返回412。可与x-cos-copy-source-If-Match一起使用，与其他条件联合使用返回冲突。
 *     @param  {String}  CopySourceIfMatch              当Object的ETag和给定一致时，则执行操作，否则返回412。可与x-cos-copy-source-If-Unmodified-Since一起使用，与其他条件联合使用返回冲突。
 *     @param  {String}  CopySourceIfNoneMatch          当Object的ETag和给定不一致时，则执行操作，否则返回412。可与x-cos-copy-source-If-Modified-Since一起使用，与其他条件联合使用返回冲突。
 *     @param  {String}  StorageClass                   存储级别，枚举值：存储级别，枚举值：Standard, Standard_IA，Archive；默认值：Standard
 *     @param  {String}  CacheControl                   指定所有缓存机制在整个请求/响应链中必须服从的指令。
 *     @param  {String}  ContentDisposition             MIME 协议的扩展，MIME 协议指示 MIME 用户代理如何显示附加的文件
 *     @param  {String}  ContentEncoding                HTTP 中用来对「采用何种编码格式传输正文」进行协定的一对头部字段
 *     @param  {String}  ContentLength                  设置响应消息的实体内容的大小，单位为字节
 *     @param  {String}  ContentType                    RFC 2616 中定义的 HTTP 请求内容类型（MIME），例如text/plain
 *     @param  {String}  Expect                         请求的特定的服务器行为
 *     @param  {String}  Expires                        响应过期的日期和时间
 *     @param  {String}  params.ServerSideEncryption   支持按照指定的加密算法进行服务端数据加密，格式 x-cos-server-side-encryption: "AES256"，非必须
 *     @param  {String}  ContentLanguage                指定内容语言
 *     @param  {String}  x-cos-meta-*                   允许用户自定义的头部信息，将作为 Object 元数据返回。大小限制2K。
 */
function putObjectCopy(params, callback) {
  // 特殊处理 Cache-Control
  var self = this;
  var headers = params.Headers;
  if (!headers['Cache-Control'] && !headers['cache-control']) headers['Cache-Control'] = '';
  var CopySource = params.CopySource || '';
  var m = util.getSourceParams.call(this, CopySource);
  if (!m) {
    callback(util.error(new Error('CopySource format error')));
    return;
  }
  var SourceBucket = m.Bucket;
  var SourceRegion = m.Region;
  var SourceKey = decodeURIComponent(m.Key);
  submitRequest.call(this, {
    Scope: [{
      action: 'name/cos:GetObject',
      bucket: SourceBucket,
      region: SourceRegion,
      prefix: SourceKey
    }, {
      action: 'name/cos:PutObject',
      bucket: params.Bucket,
      region: params.Region,
      prefix: params.Key
    }],
    method: 'PUT',
    Bucket: params.Bucket,
    Region: params.Region,
    Key: params.Key,
    VersionId: params.VersionId,
    headers: params.Headers,
    tracker: params.tracker
  }, function (err, data) {
    if (err) return callback(err);
    var result = util.clone(data.CopyObjectResult || {});
    var url = getUrl({
      ForcePathStyle: self.options.ForcePathStyle,
      protocol: self.options.Protocol,
      domain: self.options.Domain,
      bucket: params.Bucket,
      region: params.Region,
      object: params.Key,
      isLocation: true
    });
    util.extend(result, {
      Location: url,
      statusCode: data.statusCode,
      headers: data.headers
    });
    callback(null, result);
  });
}
function uploadPartCopy(params, callback) {
  var CopySource = params.CopySource || '';
  var m = util.getSourceParams.call(this, CopySource);
  if (!m) {
    callback(util.error(new Error('CopySource format error')));
    return;
  }
  var SourceBucket = m.Bucket;
  var SourceRegion = m.Region;
  var SourceKey = decodeURIComponent(m.Key);
  submitRequest.call(this, {
    Scope: [{
      action: 'name/cos:GetObject',
      bucket: SourceBucket,
      region: SourceRegion,
      prefix: SourceKey
    }, {
      action: 'name/cos:PutObject',
      bucket: params.Bucket,
      region: params.Region,
      prefix: params.Key
    }],
    method: 'PUT',
    Bucket: params.Bucket,
    Region: params.Region,
    Key: params.Key,
    VersionId: params.VersionId,
    qs: {
      partNumber: params['PartNumber'],
      uploadId: params['UploadId']
    },
    headers: params.Headers,
    tracker: params.tracker
  }, function (err, data) {
    if (err) return callback(err);
    var result = util.clone(data.CopyPartResult || {});
    util.extend(result, {
      statusCode: data.statusCode,
      headers: data.headers
    });
    callback(null, result);
  });
}
function deleteMultipleObject(params, callback) {
  var Objects = params.Objects || [];
  var Quiet = params.Quiet;
  Objects = util.isArray(Objects) ? Objects : [Objects];
  var xml = util.json2xml({
    Delete: {
      Object: Objects,
      Quiet: Quiet || false
    }
  });
  var headers = params.Headers;
  headers['Content-Type'] = 'application/xml';
  headers['Content-MD5'] = util.b64(util.md5(xml));
  var Scope = util.map(Objects, function (v) {
    return {
      action: 'name/cos:DeleteObject',
      bucket: params.Bucket,
      region: params.Region,
      prefix: v.Key
    };
  });
  submitRequest.call(this, {
    Scope: Scope,
    method: 'POST',
    Bucket: params.Bucket,
    Region: params.Region,
    body: xml,
    action: 'delete',
    headers: headers,
    tracker: params.tracker
  }, function (err, data) {
    if (err) return callback(err);
    var DeleteResult = data.DeleteResult || {};
    var Deleted = DeleteResult.Deleted || [];
    var Errors = DeleteResult.Error || [];
    Deleted = util.isArray(Deleted) ? Deleted : [Deleted];
    Errors = util.isArray(Errors) ? Errors : [Errors];
    var result = util.clone(DeleteResult);
    util.extend(result, {
      Error: Errors,
      Deleted: Deleted,
      statusCode: data.statusCode,
      headers: data.headers
    });
    callback(null, result);
  });
}
function restoreObject(params, callback) {
  var headers = params.Headers;
  if (!params['RestoreRequest']) {
    callback(util.error(new Error('missing param RestoreRequest')));
    return;
  }
  var RestoreRequest = params.RestoreRequest || {};
  var xml = util.json2xml({
    RestoreRequest: RestoreRequest
  });
  headers['Content-Type'] = 'application/xml';
  headers['Content-MD5'] = util.b64(util.md5(xml));
  submitRequest.call(this, {
    Action: 'name/cos:RestoreObject',
    method: 'POST',
    Bucket: params.Bucket,
    Region: params.Region,
    Key: params.Key,
    VersionId: params.VersionId,
    body: xml,
    action: 'restore',
    headers: headers,
    tracker: params.tracker
  }, callback);
}

/**
 * 设置 Object 的标签
 * @param  {Object}  params             参数对象，必须
 *     @param  {String}  params.Bucket  Object名称，必须
 *     @param  {String}  params.Region  地域名称，必须
 *     @param  {Array}   params.TagSet  标签设置，必须
 * @param  {Function}  callback         回调函数，必须
 * @return  {Object}  err               请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/42998
 * @return  {Object}  data              返回数据
 */
function putObjectTagging(params, callback) {
  var Tagging = params['Tagging'] || {};
  var Tags = Tagging.TagSet || Tagging.Tags || params['Tags'] || [];
  Tags = util.clone(util.isArray(Tags) ? Tags : [Tags]);
  var xml = util.json2xml({
    Tagging: {
      TagSet: {
        Tag: Tags
      }
    }
  });
  var headers = params.Headers;
  headers['Content-Type'] = 'application/xml';
  headers['Content-MD5'] = util.b64(util.md5(xml));
  submitRequest.call(this, {
    Action: 'name/cos:PutObjectTagging',
    method: 'PUT',
    Bucket: params.Bucket,
    Key: params.Key,
    Region: params.Region,
    body: xml,
    action: 'tagging',
    headers: headers,
    VersionId: params.VersionId,
    tracker: params.tracker
  }, function (err, data) {
    if (err && err.statusCode === 204) {
      return callback(null, {
        statusCode: err.statusCode
      });
    } else if (err) {
      return callback(err);
    }
    callback(null, {
      statusCode: data.statusCode,
      headers: data.headers
    });
  });
}

/**
 * 获取 Object 的标签设置
 * @param  {Object}  params             参数对象，必须
 *     @param  {String}  params.Bucket  Bucket名称，必须
 *     @param  {String}  params.Region  地域名称，必须
 * @param  {Function}  callback         回调函数，必须
 * @return  {Object}  err               请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/42998
 * @return  {Object}  data              返回数据
 */
function getObjectTagging(params, callback) {
  submitRequest.call(this, {
    Action: 'name/cos:GetObjectTagging',
    method: 'GET',
    Key: params.Key,
    Bucket: params.Bucket,
    Region: params.Region,
    headers: params.Headers,
    action: 'tagging',
    VersionId: params.VersionId,
    tracker: params.tracker
  }, function (err, data) {
    if (err) {
      if (err.statusCode === 404 && err.error && (err.error === 'Not Found' || err.error.Code === 'NoSuchTagSet')) {
        var result = {
          Tags: [],
          statusCode: err.statusCode
        };
        err.headers && (result.headers = err.headers);
        callback(null, result);
      } else {
        callback(err);
      }
      return;
    }
    var Tags = [];
    try {
      Tags = data.Tagging.TagSet.Tag || [];
    } catch (e) {}
    Tags = util.clone(util.isArray(Tags) ? Tags : [Tags]);
    callback(null, {
      Tags: Tags,
      statusCode: data.statusCode,
      headers: data.headers
    });
  });
}

/**
 * 删除 Object 的 标签设置
 * @param  {Object}  params             参数对象，必须
 *     @param  {String}  params.Bucket  Object名称，必须
 *     @param  {String}  params.Region  地域名称，必须
 * @param  {Function}  callback         回调函数，必须
 * @return  {Object}  err               请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/42998
 * @return  {Object}  data              返回的数据
 */
function deleteObjectTagging(params, callback) {
  submitRequest.call(this, {
    Action: 'name/cos:DeleteObjectTagging',
    method: 'DELETE',
    Bucket: params.Bucket,
    Region: params.Region,
    Key: params.Key,
    headers: params.Headers,
    action: 'tagging',
    VersionId: params.VersionId,
    tracker: params.tracker
  }, function (err, data) {
    if (err && err.statusCode === 204) {
      return callback(null, {
        statusCode: err.statusCode
      });
    } else if (err) {
      return callback(err);
    }
    callback(null, {
      statusCode: data.statusCode,
      headers: data.headers
    });
  });
}

/**
 * 使用 SQL 语句从指定对象（CSV 格式或者 JSON 格式）中检索内容
 * @param  {Object}  params                   参数对象，必须
 *     @param  {String}  params.Bucket        Object名称，必须
 *     @param  {String}  params.Region        地域名称，必须
 *     @param  {Object}  params.SelectRequest 地域名称，必须
 * @param  {Function}  callback               回调函数，必须
 * @return  {Object}  err                     请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/42998
 * @return  {Object}  data                    返回的数据
 */
function selectObjectContent(params, callback) {
  var SelectType = params['SelectType'];
  if (!SelectType) return callback(util.error(new Error('missing param SelectType')));
  var SelectRequest = params['SelectRequest'] || {};
  var xml = util.json2xml({
    SelectRequest: SelectRequest
  });
  var headers = params.Headers;
  headers['Content-Type'] = 'application/xml';
  headers['Content-MD5'] = util.b64(util.md5(xml));
  submitRequest.call(this, {
    Action: 'name/cos:GetObject',
    method: 'POST',
    Bucket: params.Bucket,
    Region: params.Region,
    Key: params.Key,
    headers: params.Headers,
    action: 'select',
    qs: {
      'select-type': params['SelectType']
    },
    VersionId: params.VersionId,
    body: xml,
    DataType: 'arraybuffer',
    rawBody: true,
    tracker: params.tracker
  }, function (err, data) {
    if (err && err.statusCode === 204) {
      return callback(null, {
        statusCode: err.statusCode
      });
    } else if (err) {
      return callback(err);
    }
    var result = util.parseSelectPayload(data.body);
    callback(null, {
      statusCode: data.statusCode,
      headers: data.headers,
      Body: result.body,
      Payload: result.payload
    });
  });
}

// 分块上传

/**
 * 初始化分块上传
 * @param  {Object}  params                                     参数对象，必须
 *     @param  {String}  params.Bucket                          Bucket名称，必须
 *     @param  {String}  params.Region                          地域名称，必须
 *     @param  {String}  params.Key                             object名称，必须
 *     @param  {String}  params.UploadId                        object名称，必须
 *     @param  {String}  params.CacheControl                    RFC 2616 中定义的缓存策略，将作为 Object 元数据保存，非必须
 *     @param  {String}  params.ContentDisposition              RFC 2616 中定义的文件名称，将作为 Object 元数据保存    ，非必须
 *     @param  {String}  params.ContentEncoding                 RFC 2616 中定义的编码格式，将作为 Object 元数据保存，非必须
 *     @param  {String}  params.ContentType                     RFC 2616 中定义的内容类型（MIME），将作为 Object 元数据保存，非必须
 *     @param  {String}  params.Expires                         RFC 2616 中定义的过期时间，将作为 Object 元数据保存，非必须
 *     @param  {String}  params.ACL                             允许用户自定义文件权限，非必须
 *     @param  {String}  params.GrantRead                       赋予被授权者读的权限 ，非必须
 *     @param  {String}  params.GrantWrite                      赋予被授权者写的权限 ，非必须
 *     @param  {String}  params.GrantFullControl                赋予被授权者读写权限 ，非必须
 *     @param  {String}  params.StorageClass                    设置Object的存储级别，枚举值：Standard，Standard_IA，Archive，非必须
 *     @param  {String}  params.ServerSideEncryption           支持按照指定的加密算法进行服务端数据加密，格式 x-cos-server-side-encryption: "AES256"，非必须
 * @param  {Function}  callback                                 回调函数，必须
 * @return  {Object}  err                                       请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
 * @return  {Object}  data                                      返回的数据
 */
function multipartInit(params, callback) {
  var self = this;
  // 特殊处理 Cache-Control
  var headers = params.Headers;
  var tracker = params.tracker;

  // 特殊处理 Cache-Control、Content-Type
  if (!headers['Cache-Control'] && !headers['cache-control']) headers['Cache-Control'] = '';
  if (!headers['Content-Type'] && !headers['content-type']) {
    headers['Content-Type'] = params.Body && params.Body.type || '';
  }
  var needCalcMd5 = params.Body && (params.UploadAddMetaMd5 || self.options.UploadAddMetaMd5);
  needCalcMd5 && tracker && tracker.setParams({
    md5StartTime: new Date().getTime()
  });
  util.getBodyMd5(needCalcMd5, params.Body, function (md5) {
    if (md5) params.Headers['x-cos-meta-md5'] = md5;
    needCalcMd5 && tracker && tracker.setParams({
      md5EndTime: new Date().getTime()
    });
    submitRequest.call(self, {
      Action: 'name/cos:InitiateMultipartUpload',
      method: 'POST',
      Bucket: params.Bucket,
      Region: params.Region,
      Key: params.Key,
      action: 'uploads',
      headers: params.Headers,
      qs: params.Query,
      tracker: tracker
    }, function (err, data) {
      if (err) {
        tracker && tracker.parent && tracker.parent.setParams({
          errorNode: 'multipartInit'
        });
        return callback(err);
      }
      data = util.clone(data || {});
      if (data && data.InitiateMultipartUploadResult) {
        return callback(null, util.extend(data.InitiateMultipartUploadResult, {
          statusCode: data.statusCode,
          headers: data.headers
        }));
      }
      callback(null, data);
    });
  }, params.onHashProgress);
}

/**
 * 分块上传
 * @param  {Object}  params                                 参数对象，必须
 *     @param  {String}  params.Bucket                      Bucket名称，必须
 *     @param  {String}  params.Region                      地域名称，必须
 *     @param  {String}  params.Key                         object名称，必须
 *     @param  {File || Blob || String}  params.Body        上传文件对象或字符串
 *     @param  {String} params.ContentLength                RFC 2616 中定义的 HTTP 请求内容长度（字节），非必须
 *     @param  {String} params.Expect                       当使用 Expect: 100-continue 时，在收到服务端确认后，才会发送请求内容，非必须
 *     @param  {String} params.ServerSideEncryption         支持按照指定的加密算法进行服务端数据加密，格式 x-cos-server-side-encryption: "AES256"，非必须
 *     @param  {String} params.ContentSha1                  RFC 3174 中定义的 160-bit 内容 SHA-1 算法校验值，非必须
 * @param  {Function}  callback                             回调函数，必须
 *     @return  {Object}  err                               请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
 *     @return  {Object}  data                              返回的数据
 *     @return  {Object}  data.ETag                         返回的文件分块 sha1 值
 */
function multipartUpload(params, callback) {
  var self = this;
  util.getFileSize('multipartUpload', params, function () {
    var tracker = params.tracker;
    var needCalcMd5 = self.options.UploadCheckContentMd5;
    needCalcMd5 && tracker && tracker.setParams({
      md5StartTime: new Date().getTime()
    });
    util.getBodyMd5(needCalcMd5, params.Body, function (md5) {
      if (md5) params.Headers['Content-MD5'] = util.b64(md5);
      needCalcMd5 && tracker && tracker.setParams({
        md5EndTime: new Date().getTime()
      });
      tracker && tracker.setParams({
        partNumber: params.PartNumber
      });
      submitRequest.call(self, {
        Action: 'name/cos:UploadPart',
        TaskId: params.TaskId,
        method: 'PUT',
        Bucket: params.Bucket,
        Region: params.Region,
        Key: params.Key,
        qs: {
          partNumber: params['PartNumber'],
          uploadId: params['UploadId']
        },
        headers: params.Headers,
        onProgress: params.onProgress,
        body: params.Body || null,
        tracker: tracker
      }, function (err, data) {
        if (err) {
          tracker && tracker.parent && tracker.parent.setParams({
            errorNode: 'multipartUpload'
          });
          return callback(err);
        }
        callback(null, {
          ETag: util.attr(data.headers, 'etag', ''),
          statusCode: data.statusCode,
          headers: data.headers
        });
      });
    });
  });
}

/**
 * 完成分块上传
 * @param  {Object}  params                             参数对象，必须
 *     @param  {String}  params.Bucket                  Bucket名称，必须
 *     @param  {String}  params.Region                  地域名称，必须
 *     @param  {String}  params.Key                     object名称，必须
 *     @param  {Array}   params.Parts                   分块信息列表，必须
 *     @param  {String}  params.Parts[i].PartNumber     块编号，必须
 *     @param  {String}  params.Parts[i].ETag           分块的 sha1 校验值
 * @param  {Function}  callback                         回调函数，必须
 * @return  {Object}  err                               请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
 * @return  {Object}  data                              返回的数据
 *     @return  {Object}  data.CompleteMultipartUpload  完成分块上传后的文件信息，包括Location, Bucket, Key 和 ETag
 */
function multipartComplete(params, callback) {
  var self = this;
  var UploadId = params.UploadId;
  var Parts = params['Parts'];
  var tracker = params.tracker;
  for (var i = 0, len = Parts.length; i < len; i++) {
    if (Parts[i]['ETag'] && Parts[i]['ETag'].indexOf('"') === 0) {
      continue;
    }
    Parts[i]['ETag'] = '"' + Parts[i]['ETag'] + '"';
  }
  var xml = util.json2xml({
    CompleteMultipartUpload: {
      Part: Parts
    }
  });
  // CSP/ceph CompleteMultipartUpload 接口 body 写死了限制 1MB，这里最多 10000 片时，xml 字符串去掉空格853KB
  xml = xml.replace(/\n\s*/g, '');
  var headers = params.Headers;
  headers['Content-Type'] = 'application/xml';
  headers['Content-MD5'] = util.b64(util.md5(xml));
  submitRequest.call(this, {
    Action: 'name/cos:CompleteMultipartUpload',
    method: 'POST',
    Bucket: params.Bucket,
    Region: params.Region,
    Key: params.Key,
    qs: {
      uploadId: UploadId
    },
    body: xml,
    headers: headers,
    tracker: tracker
  }, function (err, data) {
    if (err) {
      tracker && tracker.parent && tracker.parent.setParams({
        errorNode: 'multipartComplete'
      });
      return callback(err);
    }
    var url = getUrl({
      ForcePathStyle: self.options.ForcePathStyle,
      protocol: self.options.Protocol,
      domain: self.options.Domain,
      bucket: params.Bucket,
      region: !self.options.UseAccelerate ? params.Region : 'accelerate',
      object: params.Key,
      isLocation: true
    });
    var res = data.CompleteMultipartUploadResult || {};
    // pic-operations 处理
    if (res.ProcessResults) {
      res.UploadResult = {
        OriginalInfo: {
          Key: res.Key,
          Location: url,
          ETag: res.ETag,
          ImageInfo: res.ImageInfo
        },
        ProcessResults: res.ProcessResults
      };
      delete res.ImageInfo;
      delete res.ProcessResults;
    }
    // callback 处理
    if (res.CallbackResult) {
      var callbackResult = res.CallbackResult;
      if (callbackResult.Status === '200' && callbackResult.CallbackBody) {
        try {
          res.CallbackBody = JSON.parse(util.decodeBase64(callbackResult.CallbackBody));
        } catch (e) {
          res.CallbackBody = {};
        }
      } else {
        res.CallbackError = callbackResult.Error || {};
      }
      delete res.CallbackResult;
    }
    // returnBody 处理
    if (res.ReturnBodyResult) {
      var returnBodyResult = res.ReturnBodyResult;
      if (returnBodyResult.Status === '200' && returnBodyResult.ReturnBody) {
        try {
          res.ReturnBody = JSON.parse(util.decodeBase64(returnBodyResult.ReturnBody));
        } catch (e) {
          res.ReturnBody = {};
        }
      } else {
        res.ReturnError = {
          Code: returnBodyResult.Code,
          Message: returnBodyResult.Message,
          Status: returnBodyResult.Status
        };
      }
      delete res.ReturnBodyResult;
    }
    var result = util.extend(res, {
      Location: url,
      statusCode: data.statusCode,
      headers: data.headers
    });
    callback(null, result);
  });
}

/**
 * 分块上传任务列表查询
 * @param  {Object}  params                                 参数对象，必须
 *     @param  {String}  params.Bucket                      Bucket名称，必须
 *     @param  {String}  params.Region                      地域名称，必须
 *     @param  {String}  params.Delimiter                   定界符为一个符号，如果有Prefix，则将Prefix到delimiter之间的相同路径归为一类，定义为Common Prefix，然后列出所有Common Prefix。如果没有Prefix，则从路径起点开始，非必须
 *     @param  {String}  params.EncodingType                规定返回值的编码方式，非必须
 *     @param  {String}  params.Prefix                      前缀匹配，用来规定返回的文件前缀地址，非必须
 *     @param  {String}  params.MaxUploads                  单次返回最大的条目数量，默认1000，非必须
 *     @param  {String}  params.KeyMarker                   与upload-id-marker一起使用 </Br>当upload-id-marker未被指定时，ObjectName字母顺序大于key-marker的条目将被列出 </Br>当upload-id-marker被指定时，ObjectName字母顺序大于key-marker的条目被列出，ObjectName字母顺序等于key-marker同时UploadId大于upload-id-marker的条目将被列出，非必须
 *     @param  {String}  params.UploadIdMarker              与key-marker一起使用 </Br>当key-marker未被指定时，upload-id-marker将被忽略 </Br>当key-marker被指定时，ObjectName字母顺序大于key-marker的条目被列出，ObjectName字母顺序等于key-marker同时UploadId大于upload-id-marker的条目将被列出，非必须
 * @param  {Function}  callback                             回调函数，必须
 * @return  {Object}  err                                   请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
 * @return  {Object}  data                                  返回的数据
 *     @return  {Object}  data.ListMultipartUploadsResult   分块上传任务信息
 */
function multipartList(params, callback) {
  var reqParams = {};
  reqParams['delimiter'] = params['Delimiter'];
  reqParams['encoding-type'] = params['EncodingType'];
  reqParams['prefix'] = params['Prefix'] || '';
  reqParams['max-uploads'] = params['MaxUploads'];
  reqParams['key-marker'] = params['KeyMarker'];
  reqParams['upload-id-marker'] = params['UploadIdMarker'];
  reqParams = util.clearKey(reqParams);
  var tracker = params.tracker;
  tracker && tracker.setParams({
    signStartTime: new Date().getTime()
  });
  submitRequest.call(this, {
    Action: 'name/cos:ListMultipartUploads',
    ResourceKey: reqParams['prefix'],
    method: 'GET',
    Bucket: params.Bucket,
    Region: params.Region,
    headers: params.Headers,
    qs: reqParams,
    action: 'uploads',
    tracker: tracker
  }, function (err, data) {
    if (err) {
      tracker && tracker.parent && tracker.parent.setParams({
        errorNode: 'multipartList'
      });
      return callback(err);
    }
    if (data && data.ListMultipartUploadsResult) {
      var Upload = data.ListMultipartUploadsResult.Upload || [];
      Upload = util.isArray(Upload) ? Upload : [Upload];
      data.ListMultipartUploadsResult.Upload = Upload;
    }
    var result = util.clone(data.ListMultipartUploadsResult || {});
    util.extend(result, {
      statusCode: data.statusCode,
      headers: data.headers
    });
    callback(null, result);
  });
}

/**
 * 上传的分块列表查询
 * @param  {Object}  params                                 参数对象，必须
 *     @param  {String}  params.Bucket                      Bucket名称，必须
 *     @param  {String}  params.Region                      地域名称，必须
 *     @param  {String}  params.Key                         object名称，必须
 *     @param  {String}  params.UploadId                    标示本次分块上传的ID，必须
 *     @param  {String}  params.EncodingType                规定返回值的编码方式，非必须
 *     @param  {String}  params.MaxParts                    单次返回最大的条目数量，默认1000，非必须
 *     @param  {String}  params.PartNumberMarker            默认以UTF-8二进制顺序列出条目，所有列出条目从marker开始，非必须
 * @param  {Function}  callback                             回调函数，必须
 * @return  {Object}  err                                   请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
 * @return  {Object}  data                                  返回的数据
 *     @return  {Object}  data.ListMultipartUploadsResult   分块信息
 */
function multipartListPart(params, callback) {
  var reqParams = {};
  var tracker = params.tracker;
  reqParams['uploadId'] = params['UploadId'];
  reqParams['encoding-type'] = params['EncodingType'];
  reqParams['max-parts'] = params['MaxParts'];
  reqParams['part-number-marker'] = params['PartNumberMarker'];
  submitRequest.call(this, {
    Action: 'name/cos:ListParts',
    method: 'GET',
    Bucket: params.Bucket,
    Region: params.Region,
    Key: params.Key,
    headers: params.Headers,
    qs: reqParams,
    tracker: tracker
  }, function (err, data) {
    if (err) {
      tracker && tracker.parent && tracker.parent.setParams({
        errorNode: 'multipartListPart'
      });
      return callback(err);
    }
    var ListPartsResult = data.ListPartsResult || {};
    var Part = ListPartsResult.Part || [];
    Part = util.isArray(Part) ? Part : [Part];
    ListPartsResult.Part = Part;
    var result = util.clone(ListPartsResult);
    util.extend(result, {
      statusCode: data.statusCode,
      headers: data.headers
    });
    callback(null, result);
  });
}

/**
 * 抛弃分块上传
 * @param  {Object}  params                 参数对象，必须
 *     @param  {String}  params.Bucket      Bucket名称，必须
 *     @param  {String}  params.Region      地域名称，必须
 *     @param  {String}  params.Key         object名称，必须
 *     @param  {String}  params.UploadId    标示本次分块上传的ID，必须
 * @param  {Function}  callback             回调函数，必须
 *     @return  {Object}    err             请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
 *     @return  {Object}    data            返回的数据
 */
function multipartAbort(params, callback) {
  var reqParams = {};
  reqParams['uploadId'] = params['UploadId'];
  submitRequest.call(this, {
    Action: 'name/cos:AbortMultipartUpload',
    method: 'DELETE',
    Bucket: params.Bucket,
    Region: params.Region,
    Key: params.Key,
    headers: params.Headers,
    qs: reqParams,
    tracker: params.tracker
  }, function (err, data) {
    if (err) return callback(err);
    callback(null, {
      statusCode: data.statusCode,
      headers: data.headers
    });
  });
}

/**
 * 抛弃分块上传
 * @param  {Object}  params                 参数对象，必须
 *     @param  {String}  params.Bucket      Bucket名称，必须
 *     @param  {String}  params.Region      地域名称，必须
 *     @param  {String}  params.Key         object名称，必须
 *     @param  {String}  params.UploadId    标示本次分块上传的ID，必须
 * @param  {Function}  callback             回调函数，必须
 *     @return  {Object}    err             请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
 *     @return  {Object}    data            返回的数据
 */
function request(params, callback) {
  submitRequest.call(this, {
    method: params.Method,
    Bucket: params.Bucket,
    Region: params.Region,
    Key: params.Key,
    action: params.Action,
    headers: params.Headers,
    qs: params.Query,
    body: params.Body,
    Url: params.Url,
    rawBody: params.RawBody,
    DataType: params.DataType,
    tracker: params.tracker
  }, function (err, data) {
    if (err) return callback(err);
    if (data && data.body) {
      data.Body = data.body;
      delete data.body;
    }
    callback(err, data);
  });
}

/**
 * 追加上传
 * @param  {Object}  params                                         参数对象，必须
 *     @param  {String}  params.Bucket                              Bucket名称，必须
 *     @param  {String}  params.Region                              地域名称，必须
 *     @param  {String}  params.Key                                 object名称，必须
 *     @param  {File || Blob || String}  params.Body                上传文件对象或字符串
 *     @param  {Number}  params.Position                            追加操作的起始点，单位为字节，必须
 *     @param  {String}  params.CacheControl                        RFC 2616 中定义的缓存策略，将作为 Object 元数据保存，非必须
 *     @param  {String}  params.ContentDisposition                  RFC 2616 中定义的文件名称，将作为 Object 元数据保存，非必须
 *     @param  {String}  params.ContentEncoding                     RFC 2616 中定义的编码格式，将作为 Object 元数据保存，非必须
 *     @param  {String}  params.ContentLength                       RFC 2616 中定义的 HTTP 请求内容长度（字节），必须
 *     @param  {String}  params.ContentType                         RFC 2616 中定义的内容类型（MIME），将作为 Object 元数据保存，非必须
 *     @param  {String}  params.Expect                              当使用 Expect: 100-continue 时，在收到服务端确认后，才会发送请求内容，非必须
 *     @param  {String}  params.Expires                             RFC 2616 中定义的过期时间，将作为 Object 元数据保存，非必须
 *     @param  {String}  params.ACL                                 允许用户自定义文件权限，有效值：private | public-read，非必须
 *     @param  {String}  params.GrantRead                           赋予被授权者读取对象的权限，格式：id="[OwnerUin]"，可使用半角逗号（,）分隔多组被授权者，非必须
 *     @param  {String}  params.GrantReadAcp                        赋予被授权者读取对象的访问控制列表（ACL）的权限，格式：id="[OwnerUin]"，可使用半角逗号（,）分隔多组被授权者，非必须
 *     @param  {String}  params.GrantWriteAcp                       赋予被授权者写入对象的访问控制列表（ACL）的权限，格式：id="[OwnerUin]"，可使用半角逗号（,）分隔多组被授权者，非必须
 *     @param  {String}  params.GrantFullControl                    赋予被授权者操作对象的所有权限，格式：id="[OwnerUin]"，可使用半角逗号（,）分隔多组被授权者，非必须
 *     @param  {String}  params.StorageClass                        设置对象的存储级别，枚举值：STANDARD、STANDARD_IA、ARCHIVE，默认值：STANDARD，非必须
 *     @param  {String}  params.x-cos-meta-*                        允许用户自定义的头部信息，将作为对象的元数据保存。大小限制2KB，非必须
 *     @param  {String}  params.ContentSha1                         RFC 3174 中定义的 160-bit 内容 SHA-1 算法校验，非必须
 *     @param  {String}  params.ServerSideEncryption                支持按照指定的加密算法进行服务端数据加密，格式 x-cos-server-side-encryption: "AES256"，非必须
 * @param  {Function}  callback                                     回调函数，必须
 *     @return  {Object}    err                                     请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
 *     @return  {Object}    data                                    返回的数据
 */
function appendObject(params, callback) {
  // 特殊处理 Cache-Control、Content-Type，避免代理更改这两个字段导致写入到 Object 属性里
  var headers = params.Headers;
  if (!headers['Cache-Control'] && !headers['cache-control']) headers['Cache-Control'] = '';
  if (!headers['Content-Type'] && !headers['content-type']) {
    headers['Content-Type'] = params.Body && params.Body.type || '';
  }
  submitRequest.call(this, {
    Action: 'name/cos:AppendObject',
    method: 'POST',
    Bucket: params.Bucket,
    Region: params.Region,
    action: 'append',
    Key: params.Key,
    body: params.Body,
    qs: {
      position: params.Position
    },
    headers: params.Headers,
    tracker: params.tracker
  }, function (err, data) {
    if (err) return callback(err);
    callback(null, data);
  });
}

/**
 * 获取签名
 * @param  {Object}  params             参数对象，必须
 *     @param  {String}  params.Method  请求方法，必须
 *     @param  {String}  params.Key     object名称，必须
 *     @param  {String}  params.Expires 名超时时间，单位秒，可选
 * @return  {String}  data              返回签名字符串
 */
function getAuth(params) {
  var self = this;
  return util.getAuth({
    SecretId: params.SecretId || this.options.SecretId || '',
    SecretKey: params.SecretKey || this.options.SecretKey || '',
    Bucket: params.Bucket,
    Region: params.Region,
    Method: params.Method,
    Key: params.Key,
    Query: params.Query,
    Headers: params.Headers,
    Expires: params.Expires,
    UseRawKey: self.options.UseRawKey,
    SystemClockOffset: self.options.SystemClockOffset
  });
}

/**
 * 获取文件下载链接
 * @param  {Object}  params                 参数对象，必须
 *     @param  {String}  params.Bucket      Bucket名称，必须
 *     @param  {String}  params.Region      地域名称，必须
 *     @param  {String}  params.Key         object名称，必须
 *     @param  {String}  params.Method      请求的方法，可选
 *     @param  {String}  params.Expires     签名超时时间，单位秒，可选
 * @param  {Function}  callback             回调函数，必须
 *     @return  {Object}    err             请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
 *     @return  {Object}    data            返回的数据
 */
function getObjectUrl(params, callback) {
  var self = this;
  var useAccelerate = params.UseAccelerate === undefined ? self.options.UseAccelerate : params.UseAccelerate;
  var url = getUrl({
    ForcePathStyle: self.options.ForcePathStyle,
    protocol: params.Protocol || self.options.Protocol,
    domain: params.Domain || self.options.Domain,
    bucket: params.Bucket,
    region: useAccelerate ? 'accelerate' : params.Region,
    object: params.Key
  });
  var queryParamsStr = '';
  if (params.Query) {
    queryParamsStr += util.obj2str(params.Query);
  }
  if (params.QueryString) {
    queryParamsStr += (queryParamsStr ? '&' : '') + params.QueryString;
  }
  var syncUrl = url;
  if (params.Sign !== undefined && !params.Sign) {
    queryParamsStr && (syncUrl += '?' + queryParamsStr);
    callback(null, {
      Url: syncUrl
    });
    return syncUrl;
  }

  // 签名加上 Host，避免跨桶访问
  var SignHost = getSignHost.call(this, {
    Bucket: params.Bucket,
    Region: params.Region,
    UseAccelerate: params.UseAccelerate,
    Url: url
  });
  var AuthData = getAuthorizationAsync.call(this, {
    Action: (params.Method || '').toUpperCase() === 'PUT' ? 'name/cos:PutObject' : 'name/cos:GetObject',
    Bucket: params.Bucket || '',
    Region: params.Region || '',
    Method: params.Method || 'get',
    Key: params.Key,
    Expires: params.Expires,
    Headers: params.Headers,
    Query: params.Query,
    SignHost: SignHost,
    ForceSignHost: params.ForceSignHost === false ? false : self.options.ForceSignHost // getObjectUrl支持传参ForceSignHost
  }, function (err, AuthData) {
    if (!callback) return;
    if (err) {
      callback(err);
      return;
    }

    // 兼容万象url qUrlParamList需要再encode一次
    var replaceUrlParamList = function replaceUrlParamList(url) {
      var urlParams = url.match(/q-url-param-list.*?(?=&)/g)[0];
      var encodedParams = 'q-url-param-list=' + encodeURIComponent(urlParams.replace(/q-url-param-list=/, '')).toLowerCase();
      var reg = new RegExp(urlParams, 'g');
      var replacedUrl = url.replace(reg, encodedParams);
      return replacedUrl;
    };
    var signUrl = url;
    signUrl += '?' + (AuthData.Authorization.indexOf('q-signature') > -1 ? replaceUrlParamList(AuthData.Authorization) : 'sign=' + encodeURIComponent(AuthData.Authorization));
    AuthData.SecurityToken && (signUrl += '&x-cos-security-token=' + AuthData.SecurityToken);
    AuthData.ClientIP && (signUrl += '&clientIP=' + AuthData.ClientIP);
    AuthData.ClientUA && (signUrl += '&clientUA=' + AuthData.ClientUA);
    AuthData.Token && (signUrl += '&token=' + AuthData.Token);
    queryParamsStr && (signUrl += '&' + queryParamsStr);
    setTimeout(function () {
      callback(null, {
        Url: signUrl
      });
    });
  });
  if (AuthData) {
    syncUrl += '?' + AuthData.Authorization + (AuthData.SecurityToken ? '&x-cos-security-token=' + AuthData.SecurityToken : '');
    queryParamsStr && (syncUrl += '&' + queryParamsStr);
  } else {
    queryParamsStr && (syncUrl += '?' + queryParamsStr);
  }
  return syncUrl;
}

/**
 * 私有方法
 */
function decodeAcl(AccessControlPolicy) {
  var result = {
    GrantFullControl: [],
    GrantWrite: [],
    GrantRead: [],
    GrantReadAcp: [],
    GrantWriteAcp: [],
    ACL: ''
  };
  var GrantMap = {
    FULL_CONTROL: 'GrantFullControl',
    WRITE: 'GrantWrite',
    READ: 'GrantRead',
    READ_ACP: 'GrantReadAcp',
    WRITE_ACP: 'GrantWriteAcp'
  };
  var AccessControlList = AccessControlPolicy && AccessControlPolicy.AccessControlList || {};
  var Grant = AccessControlList.Grant;
  if (Grant) {
    Grant = util.isArray(Grant) ? Grant : [Grant];
  }
  var PublicAcl = {
    READ: 0,
    WRITE: 0,
    FULL_CONTROL: 0
  };
  Grant && Grant.length && util.each(Grant, function (item) {
    var uriMatch = item.Grantee.URI && item.Grantee.URI.endsWith('/groups/global/AllUsers');
    if (item.Grantee.ID === 'qcs::cam::anyone:anyone' || uriMatch) {
      PublicAcl[item.Permission] = 1;
    } else if (item.Grantee.ID !== AccessControlPolicy.Owner.ID) {
      result[GrantMap[item.Permission]].push('id="' + item.Grantee.ID + '"');
    }
  });
  if (PublicAcl.FULL_CONTROL || PublicAcl.WRITE && PublicAcl.READ) {
    result.ACL = 'public-read-write';
  } else if (PublicAcl.READ) {
    result.ACL = 'public-read';
  } else {
    result.ACL = 'private';
  }
  util.each(GrantMap, function (item) {
    result[item] = uniqGrant(result[item].join(','));
  });
  return result;
}

// Grant 去重
function uniqGrant(str) {
  var arr = str.split(',');
  var exist = {};
  var i, item;
  for (i = 0; i < arr.length;) {
    item = arr[i].trim();
    if (exist[item]) {
      arr.splice(i, 1);
    } else {
      exist[item] = true;
      arr[i] = item;
      i++;
    }
  }
  return arr.join(',');
}

// 生成操作 url
function getUrl(params) {
  var region = params.region || '';
  var longBucket = params.bucket || '';
  var shortBucket = longBucket.substr(0, longBucket.lastIndexOf('-'));
  var appId = longBucket.substr(longBucket.lastIndexOf('-') + 1);
  var domain = params.domain;
  var object = params.object;
  if (typeof domain === 'function') {
    domain = domain({
      Bucket: longBucket,
      Region: region
    });
  }
  // 兼容不带冒号的http、https
  if (['http', 'https'].includes(params.protocol)) {
    params.protocol = params.protocol + ':';
  }
  var protocol = params.protocol || (util.isBrowser && (typeof location === "undefined" ? "undefined" : _typeof(location)) === 'object' && location.protocol === 'http:' ? 'http:' : 'https:');
  if (!domain) {
    if (['cn-south', 'cn-south-2', 'cn-north', 'cn-east', 'cn-southwest', 'sg'].indexOf(region) > -1) {
      domain = '{Region}.myqcloud.com';
    } else {
      domain = 'cos.{Region}.myqcloud.com';
    }
    if (!params.ForcePathStyle) {
      domain = '{Bucket}.' + domain;
    }
  }
  domain = domain.replace(/\{\{AppId\}\}/gi, appId).replace(/\{\{Bucket\}\}/gi, shortBucket).replace(/\{\{Region\}\}/gi, region).replace(/\{\{.*?\}\}/gi, '');
  domain = domain.replace(/\{AppId\}/gi, appId).replace(/\{BucketName\}/gi, shortBucket).replace(/\{Bucket\}/gi, longBucket).replace(/\{Region\}/gi, region).replace(/\{.*?\}/gi, '');
  if (!/^[a-zA-Z]+:\/\//.test(domain)) {
    domain = protocol + '//' + domain;
  }

  // 去掉域名最后的斜杆
  if (domain.slice(-1) === '/') {
    domain = domain.slice(0, -1);
  }
  var url = domain;
  if (params.ForcePathStyle) {
    url += '/' + longBucket;
  }
  url += '/';
  if (object) {
    url += util.camSafeUrlEncode(object).replace(/%2F/g, '/');
  }
  if (params.isLocation) {
    url = url.replace(/^https?:\/\//, '');
  }
  return url;
}
var getSignHost = function getSignHost(opt) {
  // Url 或 Bucket+Region 至少传一个
  var paramsCompleted = opt.Url || opt.Bucket && opt.Region;
  if (!paramsCompleted) return '';
  var useAccelerate = opt.UseAccelerate === undefined ? this.options.UseAccelerate : opt.UseAccelerate;
  var url = opt.Url || getUrl({
    ForcePathStyle: this.options.ForcePathStyle,
    protocol: this.options.Protocol,
    domain: this.options.Domain,
    bucket: opt.Bucket,
    region: useAccelerate ? 'accelerate' : opt.Region
  });
  var urlHost = url.replace(/^https?:\/\/([^/]+)(\/.*)?$/, '$1');
  return urlHost;
};

// 异步获取签名
function getAuthorizationAsync(params, callback) {
  var headers = util.clone(params.Headers);
  var headerHost = '';
  util.each(headers, function (v, k) {
    (v === '' || ['content-type', 'cache-control', 'expires'].indexOf(k.toLowerCase()) > -1) && delete headers[k];
    if (k.toLowerCase() === 'host') headerHost = v;
  });
  // ForceSignHost明确传入false才不加入host签名
  var forceSignHost = params.ForceSignHost === false ? false : true;

  // Host 加入签名计算
  if (!headerHost && params.SignHost && forceSignHost) headers.Host = params.SignHost;

  // 获取凭证的回调，避免用户 callback 多次
  var cbDone = false;
  var cb = function cb(err, AuthData) {
    if (cbDone) return;
    cbDone = true;
    if (AuthData && AuthData.XCosSecurityToken && !AuthData.SecurityToken) {
      AuthData = util.clone(AuthData);
      AuthData.SecurityToken = AuthData.XCosSecurityToken;
      delete AuthData.XCosSecurityToken;
    }
    callback && callback(err, AuthData);
  };
  var self = this;
  var Bucket = params.Bucket || '';
  var Region = params.Region || '';

  // PathName
  var KeyName = params.Key || '';
  if (self.options.ForcePathStyle && Bucket) {
    KeyName = Bucket + '/' + KeyName;
  }
  var Pathname = '/' + KeyName;

  // Action、ResourceKey
  var StsData = {};
  var Scope = params.Scope;
  if (!Scope) {
    var Action = params.Action || '';
    var ResourceKey = params.ResourceKey || params.Key || '';
    Scope = params.Scope || [{
      action: Action,
      bucket: Bucket,
      region: Region,
      prefix: ResourceKey
    }];
  }
  var ScopeKey = util.md5(JSON.stringify(Scope));

  // STS
  self._StsCache = self._StsCache || [];
  (function () {
    var i, AuthData;
    for (i = self._StsCache.length - 1; i >= 0; i--) {
      AuthData = self._StsCache[i];
      var compareTime = Math.round(util.getSkewTime(self.options.SystemClockOffset) / 1000) + 30;
      if (AuthData.StartTime && compareTime < AuthData.StartTime || compareTime >= AuthData.ExpiredTime) {
        self._StsCache.splice(i, 1);
        continue;
      }
      if (!AuthData.ScopeLimit || AuthData.ScopeLimit && AuthData.ScopeKey === ScopeKey) {
        StsData = AuthData;
        break;
      }
    }
  })();
  var calcAuthByTmpKey = function calcAuthByTmpKey() {
    var KeyTime = '';
    if (StsData.StartTime && params.Expires) {
      KeyTime = StsData.StartTime + ';' + (StsData.StartTime + params.Expires * 1);
    } else if (StsData.StartTime && StsData.ExpiredTime) {
      KeyTime = StsData.StartTime + ';' + StsData.ExpiredTime;
    }
    var Authorization = util.getAuth({
      SecretId: StsData.TmpSecretId,
      SecretKey: StsData.TmpSecretKey,
      Method: params.Method,
      Pathname: Pathname,
      Query: params.Query,
      Headers: headers,
      Expires: params.Expires,
      UseRawKey: self.options.UseRawKey,
      SystemClockOffset: self.options.SystemClockOffset,
      KeyTime: KeyTime,
      ForceSignHost: forceSignHost
    });
    var AuthData = {
      Authorization: Authorization,
      SecurityToken: StsData.SecurityToken || StsData.XCosSecurityToken || '',
      Token: StsData.Token || '',
      ClientIP: StsData.ClientIP || '',
      ClientUA: StsData.ClientUA || '',
      SignFrom: 'client'
    };
    cb(null, AuthData);
  };
  var checkAuthError = function checkAuthError(AuthData) {
    if (AuthData.Authorization) {
      // 检查签名格式
      var formatAllow = false;
      var auth = AuthData.Authorization;
      if (auth) {
        if (auth.indexOf(' ') > -1) {
          formatAllow = false;
        } else if (auth.indexOf('q-sign-algorithm=') > -1 && auth.indexOf('q-ak=') > -1 && auth.indexOf('q-sign-time=') > -1 && auth.indexOf('q-key-time=') > -1 && auth.indexOf('q-url-param-list=') > -1) {
          formatAllow = true;
        } else {
          try {
            auth = atob(auth);
            if (auth.indexOf('a=') > -1 && auth.indexOf('k=') > -1 && auth.indexOf('t=') > -1 && auth.indexOf('r=') > -1 && auth.indexOf('b=') > -1) {
              formatAllow = true;
            }
          } catch (e) {}
        }
      }
      if (!formatAllow) return util.error(new Error('getAuthorization callback params format error'));
    } else {
      if (!AuthData.TmpSecretId) return util.error(new Error('getAuthorization callback params missing "TmpSecretId"'));
      if (!AuthData.TmpSecretKey) return util.error(new Error('getAuthorization callback params missing "TmpSecretKey"'));
      if (!AuthData.SecurityToken && !AuthData.XCosSecurityToken) return util.error(new Error('getAuthorization callback params missing "SecurityToken"'));
      if (!AuthData.ExpiredTime) return util.error(new Error('getAuthorization callback params missing "ExpiredTime"'));
      if (AuthData.ExpiredTime && AuthData.ExpiredTime.toString().length !== 10) return util.error(new Error('getAuthorization callback params "ExpiredTime" should be 10 digits'));
      if (AuthData.StartTime && AuthData.StartTime.toString().length !== 10) return util.error(new Error('getAuthorization callback params "StartTime" should be 10 StartTime'));
    }
    return false;
  };

  // 先判断是否有临时密钥
  if (StsData.ExpiredTime && StsData.ExpiredTime - util.getSkewTime(self.options.SystemClockOffset) / 1000 > 60) {
    // 如果缓存的临时密钥有效，并还有超过60秒有效期就直接使用
    calcAuthByTmpKey();
  } else if (self.options.getAuthorization) {
    // 外部计算签名或获取临时密钥
    self.options.getAuthorization.call(self, {
      Bucket: Bucket,
      Region: Region,
      Method: params.Method,
      Key: KeyName,
      Pathname: Pathname,
      Query: params.Query,
      Headers: headers,
      Scope: Scope,
      SystemClockOffset: self.options.SystemClockOffset,
      ForceSignHost: forceSignHost
    }, function (AuthData) {
      if (typeof AuthData === 'string') AuthData = {
        Authorization: AuthData
      };
      var AuthError = checkAuthError(AuthData);
      if (AuthError) return cb(AuthError);
      if (AuthData.Authorization) {
        cb(null, AuthData);
      } else {
        StsData = AuthData || {};
        StsData.Scope = Scope;
        StsData.ScopeKey = ScopeKey;
        self._StsCache.push(StsData);
        calcAuthByTmpKey();
      }
    });
  } else if (self.options.getSTS) {
    // 外部获取临时密钥
    self.options.getSTS.call(self, {
      Bucket: Bucket,
      Region: Region
    }, function (data) {
      StsData = data || {};
      StsData.Scope = Scope;
      StsData.ScopeKey = ScopeKey;
      if (!StsData.TmpSecretId) StsData.TmpSecretId = StsData.SecretId;
      if (!StsData.TmpSecretKey) StsData.TmpSecretKey = StsData.SecretKey;
      var AuthError = checkAuthError(StsData);
      if (AuthError) return cb(AuthError);
      self._StsCache.push(StsData);
      calcAuthByTmpKey();
    });
  } else {
    // 内部计算获取签名
    return function () {
      var KeyTime = '';
      if (self.options.StartTime && params.Expires) {
        if (self.options.StartTime.toString().length !== 10) {
          return cb(util.error(new Error('params "StartTime" should be 10 digits')));
        }
        KeyTime = self.options.StartTime + ';' + (self.options.StartTime + params.Expires * 1);
      } else if (self.options.StartTime && self.options.ExpiredTime) {
        if (self.options.StartTime.toString().length !== 10) {
          return cb(util.error(new Error('params "StartTime" should be 10 digits')));
        }
        if (self.options.ExpiredTime.toString().length !== 10) {
          return cb(util.error(new Error('params "ExpiredTime" should be 10 digits')));
        }
        KeyTime = self.options.StartTime + ';' + self.options.ExpiredTime * 1;
      }
      var Authorization = util.getAuth({
        SecretId: params.SecretId || self.options.SecretId,
        SecretKey: params.SecretKey || self.options.SecretKey,
        Method: params.Method,
        Pathname: Pathname,
        Query: params.Query,
        Headers: headers,
        Expires: params.Expires,
        KeyTime: KeyTime,
        UseRawKey: self.options.UseRawKey,
        SystemClockOffset: self.options.SystemClockOffset,
        ForceSignHost: forceSignHost
      });
      var AuthData = {
        Authorization: Authorization,
        SecurityToken: self.options.SecurityToken || self.options.XCosSecurityToken,
        SignFrom: 'client'
      };
      cb(null, AuthData);
      return AuthData;
    }();
  }
  return '';
}

// 判断当前请求出错时能否重试
function allowRetry(err) {
  var self = this;
  var canRetry = false;
  var isTimeError = false;
  var networkError = false;
  var serverDate = err.headers && (err.headers.date || err.headers.Date) || err.error && err.error.ServerTime;
  try {
    var errorCode = err.error.Code;
    var errorMessage = err.error.Message;
    if (errorCode === 'RequestTimeTooSkewed' || errorCode === 'AccessDenied' && errorMessage === 'Request has expired') {
      isTimeError = true;
    }
  } catch (e) {}
  if (err) {
    // 调整时间偏差
    if (isTimeError && serverDate) {
      var serverTime = Date.parse(serverDate);
      if (this.options.CorrectClockSkew && Math.abs(util.getSkewTime(this.options.SystemClockOffset) - serverTime) >= 30000) {
        console.error('error: Local time is too skewed.');
        this.options.SystemClockOffset = serverTime - Date.now();
        canRetry = true;
      }
    } else if (Math.floor(err.statusCode / 100) === 5) {
      canRetry = true;
      networkError = false;
    } else if (err.message === 'timeout') {
      canRetry = true;
      networkError = self.options.AutoSwitchHost;
    } else if (err.message === 'CORS blocked or network error') {
      // 跨域/网络错误都包含在内
      canRetry = true;
      networkError = self.options.AutoSwitchHost;
    }
  }
  return {
    canRetry: canRetry,
    networkError: networkError
  };
}

/**
 * requestUrl：请求的url，用于判断是否cos主域名，true才切
 * clientCalcSign：是否客户端计算签名，服务端返回的签名不能切，true才切
 * networkError：是否未知网络错误，true才切
 * */
function canSwitchHost(_ref) {
  var requestUrl = _ref.requestUrl,
    clientCalcSign = _ref.clientCalcSign,
    networkError = _ref.networkError;
  if (!this.options.AutoSwitchHost) return false;
  if (!requestUrl) return false;
  if (!clientCalcSign) return false;
  if (!networkError) return false;
  var commonReg = /^https?:\/\/[^\/]*\.cos\.[^\/]*\.myqcloud\.com(\/.*)?$/;
  var accelerateReg = /^https?:\/\/[^\/]*\.cos\.accelerate\.myqcloud\.com(\/.*)?$/;
  // 当前域名是cos主域名才切换
  var isCommonCosHost = commonReg.test(requestUrl) && !accelerateReg.test(requestUrl);
  return isCommonCosHost;
}

// 获取签名并发起请求
function submitRequest(params, callback) {
  var self = this;

  // 处理 headers
  !params.headers && (params.headers = {});

  // 处理 query
  !params.qs && (params.qs = {});
  params.VersionId && (params.qs.versionId = params.VersionId);
  params.qs = util.clearKey(params.qs);

  // 清理 undefined 和 null 字段
  params.headers && (params.headers = util.clearKey(params.headers));
  params.qs && (params.qs = util.clearKey(params.qs));
  var Query = util.clone(params.qs);
  params.action && (Query[params.action] = '');

  /**
   * 手动传params.SignHost的场景：cos.getService、cos.getObjectUrl
   * 手动传Url的场景：cos.request
   */
  var paramsUrl = params.url || params.Url;
  var SignHost = params.SignHost || getSignHost.call(this, {
    Bucket: params.Bucket,
    Region: params.Region,
    Url: paramsUrl
  });
  var tracker = params.tracker;
  var _next = function next(tryTimes) {
    var oldClockOffset = self.options.SystemClockOffset;
    tracker && tracker.setParams({
      signStartTime: new Date().getTime(),
      httpRetryTimes: tryTimes - 1
    });
    if (params.SwitchHost) {
      // 更换要签的host
      SignHost = SignHost.replace(/myqcloud.com/, 'tencentcos.cn');
    }
    var logParams = _objectSpread(_objectSpread({}, params), {}, {
      Query: Query,
      SignHost: SignHost,
      ForceSignHost: self.options.ForceSignHost
    });
    delete logParams.tracker;
    self.logger.debug({
      cate: 'PROCESS',
      tag: 'base',
      msg: "\u5F00\u59CB\u8BA1\u7B97\u7B7E\u540D, opt=".concat(JSON.stringify(logParams))
    });
    getAuthorizationAsync.call(self, {
      Bucket: params.Bucket || '',
      Region: params.Region || '',
      Method: params.method,
      Key: params.Key,
      Query: Query,
      Headers: params.headers,
      SignHost: SignHost,
      Action: params.Action,
      ResourceKey: params.ResourceKey,
      Scope: params.Scope,
      ForceSignHost: self.options.ForceSignHost,
      SwitchHost: params.SwitchHost
    }, function (err, AuthData) {
      if (err) {
        self.logger.error({
          cate: 'PROCESS',
          tag: 'base',
          msg: "\u7B7E\u540D\u83B7\u53D6\u5931\u8D25, err=".concat(JSON.stringify(err.message))
        });
        callback(err);
        return;
      }
      tracker && tracker.setParams({
        signEndTime: new Date().getTime(),
        httpStartTime: new Date().getTime()
      });
      params.AuthData = AuthData;
      self.logger.debug({
        cate: 'PROCESS',
        tag: 'base',
        msg: "\u7B7E\u540D\u83B7\u53D6\u6210\u529F"
      });
      self.logger.info({
        cate: 'PROCESS',
        tag: 'base',
        msg: "\u51C6\u5907\u53D1\u8D77\u8BF7\u6C42"
      });
      _submitRequest.call(self, params, function (err, data) {
        tracker && tracker.setParams({
          httpEndTime: new Date().getTime()
        });
        var canRetry = false;
        var networkError = false;
        if (err) {
          var info = allowRetry.call(self, err);
          canRetry = info.canRetry || oldClockOffset !== self.options.SystemClockOffset;
          networkError = info.networkError;
          self.logger.error({
            cate: 'PROCESS',
            tag: 'network',
            msg: "\u8BF7\u6C42\u5931\u8D25, err=".concat(JSON.stringify(err), ", canRetry=").concat(canRetry, ", networkError=").concat(networkError, ", tryTimes=").concat(tryTimes)
          });
        }
        if (err && tryTimes < 4 && canRetry) {
          if (params.headers) {
            delete params.headers.Authorization;
            delete params.headers['token'];
            delete params.headers['clientIP'];
            delete params.headers['clientUA'];
            params.headers['x-cos-security-token'] && delete params.headers['x-cos-security-token'];
            params.headers['x-ci-security-token'] && delete params.headers['x-ci-security-token'];
          }
          // 进入重试逻辑时 需判断是否需要切换cos备用域名
          var switchHost = canSwitchHost.call(self, {
            requestUrl: (err === null || err === void 0 ? void 0 : err.url) || '',
            clientCalcSign: AuthData.SignFrom === 'client',
            networkError: networkError
          });
          params.SwitchHost = switchHost;
          // 重试时增加请求头
          params.headers['x-cos-sdk-retry'] = true;
          self.logger.info({
            cate: 'PROCESS',
            tag: 'base',
            msg: "\u91CD\u8BD5\u8BF7\u6C42, \u91CD\u8BD5\u7B2C".concat(tryTimes, "\u6B21")
          });
          _next(tryTimes + 1);
        } else {
          self.logger.info({
            cate: 'PROCESS',
            tag: 'base',
            msg: "\u8BF7\u6C42\u5B8C\u6210"
          });
          callback(err, data);
        }
      });
    });
  };
  _next(1);
}

// 发起请求
function _submitRequest(params, callback) {
  var self = this;
  var TaskId = params.TaskId;
  if (TaskId && !self._isRunningTask(TaskId)) return;
  var bucket = params.Bucket;
  var region = params.Region;
  var object = params.Key;
  var method = params.method || 'GET';
  var url = params.Url || params.url;
  var body = params.body;
  var rawBody = params.rawBody;

  // url
  if (self.options.UseAccelerate) {
    region = 'accelerate';
  }
  url = url || getUrl({
    ForcePathStyle: self.options.ForcePathStyle,
    protocol: self.options.Protocol,
    domain: self.options.Domain,
    bucket: bucket,
    region: region,
    object: object
  });
  if (params.SwitchHost) {
    // 更换请求的url
    url = url.replace(/myqcloud.com/, 'tencentcos.cn');
  }
  var repoterUrl = object ? url : '';
  if (params.action) {
    // 已知问题，某些版本的qq会对url自动拼接（比如/upload被拼接成/upload=(null)）导致签名错误，这里做下兼容。
    url = url + '?' + (util.isIOS_QQ ? "".concat(params.action, "=") : params.action);
  }
  if (params.qsStr) {
    if (url.indexOf('?') > -1) {
      url = url + '&' + params.qsStr;
    } else {
      url = url + '?' + params.qsStr;
    }
  }
  var opt = {
    method: method,
    url: url,
    headers: params.headers,
    qs: params.qs,
    body: body
  };

  // 兼容ci接口
  var token = 'x-cos-security-token';
  if (util.isCIHost(url)) {
    token = 'x-ci-security-token';
  }

  // 获取签名
  opt.headers.Authorization = params.AuthData.Authorization;
  params.AuthData.Token && (opt.headers['token'] = params.AuthData.Token);
  params.AuthData.ClientIP && (opt.headers['clientIP'] = params.AuthData.ClientIP);
  params.AuthData.ClientUA && (opt.headers['clientUA'] = params.AuthData.ClientUA);
  params.AuthData.SecurityToken && (opt.headers[token] = params.AuthData.SecurityToken);
  params.Action && (opt.action = params.Action);
  opt.key = params.Key || params.ResourceKey;

  // 清理 undefined 和 null 字段
  opt.headers && (opt.headers = util.clearKey(opt.headers));
  opt = util.clearKey(opt);

  // progress
  if (params.onProgress && typeof params.onProgress === 'function') {
    var contentLength = body && (body.size || body.length) || 0;
    opt.onProgress = function (e) {
      if (TaskId && !self._isRunningTask(TaskId)) return;
      var loaded = e ? e.loaded : 0;
      params.onProgress({
        loaded: loaded,
        total: contentLength
      });
    };
  }
  if (params.onDownloadProgress) {
    opt.onDownloadProgress = params.onDownloadProgress;
  }
  if (params.DataType) {
    opt.dataType = params.DataType;
  }
  if (this.options.Timeout) {
    opt.timeout = this.options.Timeout;
  }
  self.options.ForcePathStyle && (opt.pathStyle = self.options.ForcePathStyle);
  var requestUid = util.uuid();
  self.logger.info({
    cate: 'PROCESS',
    tag: 'network',
    msg: "[Request] ".concat(requestUid, ", requestOpt=").concat(JSON.stringify(opt))
  });
  self.emit('before-send', opt);
  var useAccelerate = opt.url.includes('accelerate.');
  var queryString = opt.qs ? Object.keys(opt.qs).map(function (key) {
    return "".concat(key, "=").concat(opt.qs[key]);
  }).join('&') : '';
  var fullUrl = queryString ? opt.url + '?' + queryString : opt.url;
  if (params.tracker) {
    var _opt$body;
    params.tracker.setParams({
      url: fullUrl,
      httpMethod: opt.method,
      accelerate: useAccelerate,
      httpSize: ((_opt$body = opt.body) === null || _opt$body === void 0 ? void 0 : _opt$body.size) || 0
    });
    // 分块上传时给父级tracker设置url信息
    if (params.tracker.parent && !params.tracker.parent.params.url) {
      params.tracker.parent.setParams({
        url: repoterUrl,
        accelerate: useAccelerate
      });
    }
  }
  var sender = (self.options.Request || REQUEST)(opt, function (r) {
    if (r && r.error === 'abort') return;
    var receive = {
      options: opt,
      error: r && r.error,
      statusCode: r && r.statusCode || 0,
      statusMessage: r && r.statusMessage || '',
      headers: r && r.headers || {},
      body: r && r.body
    };
    // 抛出事件，允许修改返回值的 error、statusCode、statusMessage、body
    self.emit('after-receive', receive);
    var err = receive.error;
    var body = receive.body;
    // 返回内容添加 状态码 和 headers
    var response = {
      statusCode: receive.statusCode,
      statusMessage: receive.statusMessage,
      headers: receive.headers
    };
    var result = err ? '[error]' : '[success]';
    self.logger.info({
      cate: 'PROCESS',
      tag: 'network',
      msg: "[Response] ".concat(requestUid, ", ").concat(result, ", response=").concat(JSON.stringify(response))
    });
    var hasReturned;
    var cb = function cb(err, data) {
      TaskId && self.off('inner-kill-task', _killTask);
      if (hasReturned) return;
      hasReturned = true;
      var attrs = {};
      response && response.statusCode && (attrs.statusCode = response.statusCode);
      response && response.headers && (attrs.headers = response.headers);
      if (err) {
        opt.url && (attrs.url = opt.url);
        opt.method && (attrs.method = opt.method);
        err = util.extend(err || {}, attrs);
        callback(err, null);
      } else {
        // putObject 返回回调处理
        if (params.Action === 'name/cos:PutObject') {
          var pHeaders = {};
          for (var i in params.headers) {
            var key = i.toLowerCase();
            pHeaders[key] = params.headers[i];
          }
          if (pHeaders['x-cos-callback']) {
            if (data.Error) {
              data.CallbackError = util.clone(data.Error);
              delete data.Error;
            } else {
              data.CallbackBody = util.clone(data);
            }
          } else if (pHeaders['x-cos-return-body']) {
            if (data.Error) {
              data.ReturnError = util.clone(data.Error);
              delete data.Error;
            } else {
              data.ReturnBody = util.clone(data);
            }
          }
        }
        if (data && _typeof(data) !== 'object') {
          data = {
            Body: data
          };
        }
        data = util.extend(data || {}, attrs);
        callback(null, data);
      }
      sender = null;
    };

    // 请求错误，发生网络错误
    if (err) return cb(util.error(err));

    // 请求返回码不为 200
    var statusCode = response.statusCode;
    var statusSuccess = Math.floor(statusCode / 100) === 2; // 200 202 204 206

    // 不对 body 进行转换，body 直接挂载返回
    if (rawBody) {
      if (statusSuccess) {
        return cb(null, {
          body: body
        });
      } else {
        // 兼容报错时返回了 blob，需要解析成 string
        if (body instanceof Blob) {
          util.readAsBinaryString(body, function (content) {
            var json = util.parseResBody(content);
            var errorBody = json.Error || json;
            return cb(util.error(new Error(errorBody.Message || 'response body error'), {
              code: errorBody.Code,
              error: errorBody
            }));
          });
          return;
        }
      }
    }

    // 解析body，兼容 xml、json，解析失败时完整返回
    var json = util.parseResBody(body);

    // 处理返回值
    var errorBody = json.Error || json;
    if (statusSuccess) {
      // 正确返回，状态码 2xx 时，body 不会有 Error
      cb(null, json);
    } else if (errorBody) {
      // 正常返回了 xml body，且有 Error 节点
      cb(util.error(new Error(errorBody.Message), {
        code: errorBody.Code,
        error: errorBody
      }));
    } else if (statusCode) {
      // 有错误的状态码
      cb(util.error(new Error(response.statusMessage), {
        code: '' + statusCode
      }));
    } else if (statusCode) {
      // 无状态码，或者获取不到状态码
      cb(util.error(new Error('statusCode error')));
    }
  });

  // kill task
  var _killTask = function killTask(data) {
    if (data.TaskId === TaskId) {
      sender && sender.abort && sender.abort();
      self.off('inner-kill-task', _killTask);
    }
  };
  TaskId && self.on('inner-kill-task', _killTask);
}
var API_MAP = {
  // Bucket 相关方法
  getService: getService,
  // Bucket
  putBucket: putBucket,
  headBucket: headBucket,
  // Bucket
  getBucket: getBucket,
  deleteBucket: deleteBucket,
  putBucketAcl: putBucketAcl,
  // BucketACL
  getBucketAcl: getBucketAcl,
  putBucketCors: putBucketCors,
  // BucketCors
  getBucketCors: getBucketCors,
  deleteBucketCors: deleteBucketCors,
  getBucketLocation: getBucketLocation,
  // BucketLocation
  getBucketPolicy: getBucketPolicy,
  // BucketPolicy
  putBucketPolicy: putBucketPolicy,
  deleteBucketPolicy: deleteBucketPolicy,
  putBucketTagging: putBucketTagging,
  // BucketTagging
  getBucketTagging: getBucketTagging,
  deleteBucketTagging: deleteBucketTagging,
  putBucketLifecycle: putBucketLifecycle,
  // BucketLifecycle
  getBucketLifecycle: getBucketLifecycle,
  deleteBucketLifecycle: deleteBucketLifecycle,
  putBucketVersioning: putBucketVersioning,
  // BucketVersioning
  getBucketVersioning: getBucketVersioning,
  putBucketReplication: putBucketReplication,
  // BucketReplication
  getBucketReplication: getBucketReplication,
  deleteBucketReplication: deleteBucketReplication,
  putBucketWebsite: putBucketWebsite,
  // BucketWebsite
  getBucketWebsite: getBucketWebsite,
  deleteBucketWebsite: deleteBucketWebsite,
  putBucketReferer: putBucketReferer,
  // BucketReferer
  getBucketReferer: getBucketReferer,
  putBucketDomain: putBucketDomain,
  // BucketDomain
  getBucketDomain: getBucketDomain,
  deleteBucketDomain: deleteBucketDomain,
  putBucketOrigin: putBucketOrigin,
  // BucketOrigin
  getBucketOrigin: getBucketOrigin,
  deleteBucketOrigin: deleteBucketOrigin,
  putBucketLogging: putBucketLogging,
  // BucketLogging
  getBucketLogging: getBucketLogging,
  putBucketInventory: putBucketInventory,
  // BucketInventory
  postBucketInventory: postBucketInventory,
  getBucketInventory: getBucketInventory,
  listBucketInventory: listBucketInventory,
  deleteBucketInventory: deleteBucketInventory,
  putBucketAccelerate: putBucketAccelerate,
  getBucketAccelerate: getBucketAccelerate,
  putBucketEncryption: putBucketEncryption,
  getBucketEncryption: getBucketEncryption,
  deleteBucketEncryption: deleteBucketEncryption,
  // Object 相关方法
  getObject: getObject,
  headObject: headObject,
  listObjectVersions: listObjectVersions,
  putObject: putObject,
  deleteObject: deleteObject,
  getObjectAcl: getObjectAcl,
  putObjectAcl: putObjectAcl,
  optionsObject: optionsObject,
  putObjectCopy: putObjectCopy,
  deleteMultipleObject: deleteMultipleObject,
  restoreObject: restoreObject,
  putObjectTagging: putObjectTagging,
  getObjectTagging: getObjectTagging,
  deleteObjectTagging: deleteObjectTagging,
  selectObjectContent: selectObjectContent,
  appendObject: appendObject,
  // 分块上传相关方法
  uploadPartCopy: uploadPartCopy,
  multipartInit: multipartInit,
  multipartUpload: multipartUpload,
  multipartComplete: multipartComplete,
  multipartList: multipartList,
  multipartListPart: multipartListPart,
  multipartAbort: multipartAbort,
  // 工具方法
  request: request,
  getObjectUrl: getObjectUrl,
  getAuth: getAuth
};
function warnOldApi(apiName, fn, proto) {
  util.each(['Cors', 'Acl'], function (suffix) {
    if (apiName.slice(-suffix.length) === suffix) {
      var oldName = apiName.slice(0, -suffix.length) + suffix.toUpperCase();
      var apiFn = util.apiWrapper(apiName, fn);
      var warned = false;
      proto[oldName] = function () {
        !warned && console.warn('warning: cos.' + oldName + ' has been deprecated. Please Use cos.' + apiName + ' instead.');
        warned = true;
        apiFn.apply(this, arguments);
      };
    }
  });
}
module.exports.init = function (COS, task) {
  task.transferToTaskMethod(API_MAP, 'putObject');
  util.each(API_MAP, function (fn, apiName) {
    COS.prototype[apiName] = util.apiWrapper(apiName, fn);
    warnOldApi(apiName, fn, COS.prototype);
  });
};

/***/ }),

/***/ "./src/cos.js":
/*!********************!*\
  !*** ./src/cos.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var util = __webpack_require__(/*! ./util */ "./src/util.js");
var event = __webpack_require__(/*! ./event */ "./src/event.js");
var task = __webpack_require__(/*! ./task */ "./src/task.js");
var base = __webpack_require__(/*! ./base */ "./src/base.js");
var advance = __webpack_require__(/*! ./advance */ "./src/advance.js");
var Logger = __webpack_require__(/*! ./logger */ "./src/logger.js");
var pkg = __webpack_require__(/*! ../package.json */ "./package.json");
var defaultOptions = {
  AppId: '',
  // AppId 已废弃，请拼接到 Bucket 后传入，例如：test-1250000000
  SecretId: '',
  SecretKey: '',
  SecurityToken: '',
  // 使用临时密钥需要注意自行刷新 Token
  StartTime: 0,
  // 临时密钥返回起始时间
  ExpiredTime: 0,
  // 临时密钥过期时间
  ChunkRetryTimes: 2,
  FileParallelLimit: 3,
  ChunkParallelLimit: 3,
  ChunkSize: 1024 * 1024,
  SliceSize: 1024 * 1024,
  CopyChunkParallelLimit: 20,
  CopyChunkSize: 1024 * 1024 * 10,
  CopySliceSize: 1024 * 1024 * 10,
  MaxPartNumber: 10000,
  ProgressInterval: 1000,
  Domain: '',
  ServiceDomain: '',
  Protocol: '',
  CompatibilityMode: false,
  ForcePathStyle: false,
  UseRawKey: false,
  Timeout: 0,
  // 单位毫秒，0 代表不设置超时时间
  CorrectClockSkew: true,
  SystemClockOffset: 0,
  // 单位毫秒，ms
  UploadCheckContentMd5: false,
  UploadQueueSize: 10000,
  UploadAddMetaMd5: false,
  UploadIdCacheLimit: 50,
  UseAccelerate: false,
  ForceSignHost: true,
  // 默认将host加入签名计算，关闭后可能导致越权风险，建议保持为true
  AutoSwitchHost: true,
  CopySourceParser: null,
  // 自定义拷贝源解析器
  ObjectKeySimplifyCheck: true,
  // 开启合并校验 getObject Key
  /** 上报相关 **/
  DeepTracker: false,
  // 上报时是否对每个分块上传做单独上报
  TrackerDelay: 5000,
  // 周期性上报，单位毫秒。0代表实时上报
  CustomId: '',
  // 自定义上报id
  BeaconReporter: null,
  // 灯塔上报组件，如有需要请自行传入，传入即代表开启上报
  ClsReporter: null,
  // cls 上报组件，如有需要请自行传入，传入即代表开启上报
  // 日志相关
  EnableLog: false,
  // 是否开启日志
  EnableLogcat: false,
  // 是否开启控制台日志打印
  LogLevel: 'VERBOSE',
  // 日志级别，支持 VERBOSE、DEBUG、INFO、WARN、ERROR，默认为 VERBOSE
  ClsLogger: null,
  // 日志上报到 cls 组件
  LogExtras: {} // 日志上报时，附带的额外信息，例如：{deviceID: '', userID: ''}
};

// 对外暴露的类
var COS = function COS(options) {
  var _this$options$LogLeve,
    _this$options$LogExtr,
    _this = this;
  this.options = util.extend(util.clone(defaultOptions), options || {});
  this.options.FileParallelLimit = Math.max(1, this.options.FileParallelLimit);
  this.options.ChunkParallelLimit = Math.max(1, this.options.ChunkParallelLimit);
  this.options.ChunkRetryTimes = Math.max(0, this.options.ChunkRetryTimes);
  this.options.ChunkSize = Math.max(1024 * 1024, this.options.ChunkSize);
  this.options.CopyChunkParallelLimit = Math.max(1, this.options.CopyChunkParallelLimit);
  this.options.CopyChunkSize = Math.max(1024 * 1024, this.options.CopyChunkSize);
  this.options.CopySliceSize = Math.max(0, this.options.CopySliceSize);
  this.options.MaxPartNumber = Math.max(1024, Math.min(10000, this.options.MaxPartNumber));
  this.options.Timeout = Math.max(0, this.options.Timeout);
  this.options.EnableReporter = this.options.BeaconReporter || this.options.ClsReporter;
  if (this.options.AppId) {
    console.warn('warning: AppId has been deprecated, Please put it at the end of parameter Bucket(E.g: "test-1250000000").');
  }
  if (this.options.SecretId && this.options.SecretId.indexOf(' ') > -1) {
    console.error('error: SecretId格式错误，请检查');
    console.error('error: SecretId format is incorrect. Please check');
  }
  if (this.options.SecretKey && this.options.SecretKey.indexOf(' ') > -1) {
    console.error('error: SecretKey格式错误，请检查');
    console.error('error: SecretKey format is incorrect. Please check');
  }
  if (util.isNode()) {
    console.log('Tip: Next.js、Nuxt.js 等服务端渲染技术可正常使用JavaScript SDK，请忽略下方 nodejs 环境警告');
    console.warn('warning: cos-js-sdk-v5 不支持 nodejs 环境使用，请改用 cos-nodejs-sdk-v5，参考文档： https://cloud.tencent.com/document/product/436/8629');
    console.warn('warning: cos-js-sdk-v5 does not support nodejs environment. Please use cos-nodejs-sdk-v5 instead. See: https://cloud.tencent.com/document/product/436/8629');
  }
  if (this.options.ForcePathStyle) {
    console.warn('cos-js-sdk-v5不再支持使用path-style，仅支持使用virtual-hosted-style，参考文档：https://cloud.tencent.com/document/product/436/96243');
    throw new Error('ForcePathStyle is not supported');
  }
  event.init(this);
  task.init(this);
  // 初始化日志模块
  this.logger = new Logger({
    enableLog: this.options.EnableLog,
    enableLogcat: this.options.EnableLogcat,
    level: (_this$options$LogLeve = this.options.LogLevel) !== null && _this$options$LogLeve !== void 0 ? _this$options$LogLeve : 'VERBOSE',
    clsLogger: this.options.ClsLogger,
    logExtras: (_this$options$LogExtr = this.options.LogExtras) !== null && _this$options$LogExtr !== void 0 ? _this$options$LogExtr : {}
  });
  if (this.options.EnableLog) {
    event.init(this.logger);
    this.logger.on('log-message', function (data) {
      _this.emit('log-message', data);
    });
  }
};
base.init(COS, task);
advance.init(COS, task);
COS.util = {
  md5: util.md5,
  xml2json: util.xml2json,
  json2xml: util.json2xml,
  encodeBase64: util.encodeBase64
};
COS.getAuthorization = util.getAuth;
COS.version = pkg.version;
module.exports = COS;

/***/ }),

/***/ "./src/event.js":
/*!**********************!*\
  !*** ./src/event.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

var initEvent = function initEvent(cos) {
  var listeners = {};
  var getList = function getList(action) {
    !listeners[action] && (listeners[action] = []);
    return listeners[action];
  };
  cos.on = function (action, callback) {
    if (action === 'task-list-update') {
      console.warn('warning: Event "' + action + '" has been deprecated. Please use "list-update" instead.');
    }
    getList(action).push(callback);
  };
  cos.off = function (action, callback) {
    var list = getList(action);
    for (var i = list.length - 1; i >= 0; i--) {
      callback === list[i] && list.splice(i, 1);
    }
  };
  cos.emit = function (action, data) {
    var list = getList(action).map(function (cb) {
      return cb;
    });
    for (var i = 0; i < list.length; i++) {
      list[i](data);
    }
  };
};
var EventProxy = function EventProxy() {
  initEvent(this);
};
module.exports.init = initEvent;
module.exports.EventProxy = EventProxy;

/***/ }),

/***/ "./src/logger.js":
/*!***********************!*\
  !*** ./src/logger.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
var _defineProperty = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
var pkg = __webpack_require__(/*! ../package.json */ "./package.json");
var pkgVersion = pkg.version;
var logLevelList = ['VERBOSE', 'DEBUG', 'INFO', 'WARN', 'ERROR'];
var Logger = /*#__PURE__*/function () {
  "use strict";

  function Logger(params) {
    var _params$enableLog;
    _classCallCheck(this, Logger);
    _defineProperty(this, "level", 'VERBOSE');
    // VERBOSE | DEBUG | INFO | WARN | ERROR 按日志等级排序
    _defineProperty(this, "clsLogger", null);
    _defineProperty(this, "logExtras", {});
    this.enableLog = (_params$enableLog = params.enableLog) !== null && _params$enableLog !== void 0 ? _params$enableLog : false;
    this.level = params.level || 'VERBOSE';
    if (!logLevelList.includes(this.level)) {
      this.level = 'VERBOSE';
    }
    this.enableLogcat = params.enableLogcat;
    this.clsLogger = params.clsLogger;
    this.logExtras = params.logExtras;
  }
  return _createClass(Logger, [{
    key: "info",
    value: function info() {
      if (['VERBOSE', 'INFO'].includes(this.level)) {
        for (var _len = arguments.length, msg = new Array(_len), _key = 0; _key < _len; _key++) {
          msg[_key] = arguments[_key];
        }
        this.log.apply(this, ['info'].concat(msg));
      }
    }
  }, {
    key: "debug",
    value: function debug() {
      if (['VERBOSE', 'DEBUG'].includes(this.level)) {
        for (var _len2 = arguments.length, msg = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          msg[_key2] = arguments[_key2];
        }
        this.log.apply(this, ['debug'].concat(msg));
      }
    }
  }, {
    key: "warn",
    value: function warn() {
      if (['VERBOSE', 'WARN'].includes(this.level)) {
        for (var _len3 = arguments.length, msg = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          msg[_key3] = arguments[_key3];
        }
        this.log.apply(this, ['warn'].concat(msg));
      }
    }
  }, {
    key: "error",
    value: function error() {
      if (['VERBOSE', 'ERROR'].includes(this.level)) {
        for (var _len4 = arguments.length, msg = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          msg[_key4] = arguments[_key4];
        }
        this.log.apply(this, ['error'].concat(msg));
      }
    }
    /**
     * 参数结构 {
     *  timestamp: '2021-08-16T06:51:27.781Z',
     *  cate: 'PROCESS',
     *  tag: 'network',
     *  msg: {}
     * */
  }, {
    key: "log",
    value: function log() {
      if (!this.enableLog) {
        return;
      }
      var type = arguments.length <= 0 ? undefined : arguments[0];
      var _ref = arguments.length <= 1 ? undefined : arguments[1],
        _ref$cate = _ref.cate,
        cate = _ref$cate === void 0 ? 'base' : _ref$cate,
        _ref$tag = _ref.tag,
        tag = _ref$tag === void 0 ? 'base' : _ref$tag,
        msg = _ref.msg;
      var logMsg = {
        version: "cos-js-sdk-v5-".concat(pkgVersion),
        timestamp: new Date().toISOString(),
        cate: "[".concat(cate.toUpperCase(), "]"),
        tag: "[".concat(tag.toUpperCase(), "]"),
        msg: msg,
        extras: this.logExtras
      };
      // 日志输出到控制台
      if (this.enableLogcat) {
        console[type]("[".concat(logMsg.version, "] ").concat(logMsg.timestamp, " ").concat(logMsg.cate, " ").concat(logMsg.tag, " ").concat(logMsg.msg, " ").concat(logMsg.extras ? JSON.stringify(logMsg.extras) : ''));
      }
      // 日志上报到 cls
      if (this.clsLogger) {
        this.clsLogger.log(logMsg, false);
      }
      // 日志回调
      this.emit('log-message', logMsg);
    }
  }]);
}();
module.exports = Logger;

/***/ }),

/***/ "./src/session.js":
/*!************************!*\
  !*** ./src/session.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(/*! ./util */ "./src/util.js");

// 按照文件特征值，缓存 UploadId
var cacheKey = 'cos_sdk_upload_cache';
var expires = 30 * 24 * 3600;
var cache;
var timer;
var getCache = function getCache() {
  try {
    var val = JSON.parse(localStorage.getItem(cacheKey));
  } catch (e) {}
  if (!val) val = [];
  cache = val;
};
var setCache = function setCache() {
  try {
    if (cache.length) localStorage.setItem(cacheKey, JSON.stringify(cache));else localStorage.removeItem(cacheKey);
  } catch (e) {}
};
var init = function init() {
  if (cache) return;
  getCache.call(this);
  // 清理太老旧的数据
  var changed = false;
  var now = Math.round(Date.now() / 1000);
  for (var i = cache.length - 1; i >= 0; i--) {
    var mtime = cache[i][2];
    if (!mtime || mtime + expires < now) {
      cache.splice(i, 1);
      changed = true;
    }
  }
  changed && setCache();
};

// 把缓存存到本地
var save = function save() {
  if (timer) return;
  timer = setTimeout(function () {
    setCache();
    timer = null;
  }, 400);
};
var mod = {
  using: {},
  // 标记 UploadId 正在使用
  setUsing: function setUsing(uuid) {
    mod.using[uuid] = true;
  },
  // 标记 UploadId 已经没在使用
  removeUsing: function removeUsing(uuid) {
    delete mod.using[uuid];
  },
  // 用上传参数生成哈希值
  getFileId: function getFileId(file, ChunkSize, Bucket, Key) {
    if (file.name && file.size && file.lastModifiedDate && ChunkSize) {
      return util.md5([file.name, file.size, file.lastModifiedDate, ChunkSize, Bucket, Key].join('::'));
    } else {
      return null;
    }
  },
  // 用上传参数生成哈希值
  getCopyFileId: function getCopyFileId(copySource, sourceHeaders, ChunkSize, Bucket, Key) {
    var size = sourceHeaders['content-length'];
    var etag = sourceHeaders.etag || '';
    var lastModified = sourceHeaders['last-modified'];
    if (copySource && ChunkSize) {
      return util.md5([copySource, size, etag, lastModified, ChunkSize, Bucket, Key].join('::'));
    } else {
      return null;
    }
  },
  // 获取文件对应的 UploadId 列表
  getUploadIdList: function getUploadIdList(uuid) {
    if (!uuid) return null;
    init.call(this);
    var list = [];
    for (var i = 0; i < cache.length; i++) {
      if (cache[i][0] === uuid) list.push(cache[i][1]);
    }
    return list.length ? list : null;
  },
  // 缓存 UploadId
  saveUploadId: function saveUploadId(uuid, UploadId, limit) {
    init.call(this);
    if (!uuid) return;
    // 清理没用的 UploadId，js 文件没有 FilePath ，只清理相同记录
    for (var i = cache.length - 1; i >= 0; i--) {
      var item = cache[i];
      if (item[0] === uuid && item[1] === UploadId) {
        cache.splice(i, 1);
      }
    }
    cache.unshift([uuid, UploadId, Math.round(Date.now() / 1000)]);
    if (cache.length > limit) cache.splice(limit);
    save();
  },
  // UploadId 已用完，移除掉
  removeUploadId: function removeUploadId(UploadId) {
    init.call(this);
    delete mod.using[UploadId];
    for (var i = cache.length - 1; i >= 0; i--) {
      if (cache[i][1] === UploadId) cache.splice(i, 1);
    }
    save();
  }
};
module.exports = mod;

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var session = __webpack_require__(/*! ./session */ "./src/session.js");
var util = __webpack_require__(/*! ./util */ "./src/util.js");
var originApiMap = {};
var transferToTaskMethod = function transferToTaskMethod(apiMap, apiName) {
  originApiMap[apiName] = apiMap[apiName];
  apiMap[apiName] = function (params, callback) {
    if (params.SkipTask) {
      originApiMap[apiName].call(this, params, callback);
    } else {
      this._addTask(apiName, params, callback);
    }
  };
};
var initTask = function initTask(cos) {
  var queue = [];
  var tasks = {};
  var uploadingFileCount = 0;
  var nextUploadIndex = 0;

  // 接口返回简略的任务信息
  var formatTask = function formatTask(task) {
    var t = {
      id: task.id,
      Bucket: task.Bucket,
      Region: task.Region,
      Key: task.Key,
      FilePath: task.FilePath,
      state: task.state,
      loaded: task.loaded,
      size: task.size,
      speed: task.speed,
      percent: task.percent,
      hashPercent: task.hashPercent,
      error: task.error
    };
    if (task.FilePath) t.FilePath = task.FilePath;
    if (task._custom) t._custom = task._custom; // 控制台使用
    return t;
  };
  var emitListUpdate = function () {
    var timer;
    var emit = function emit() {
      timer = 0;
      cos.emit('task-list-update', {
        list: util.map(queue, formatTask)
      });
      cos.emit('list-update', {
        list: util.map(queue, formatTask)
      });
    };
    return function () {
      if (!timer) timer = setTimeout(emit);
    };
  }();
  var clearQueue = function clearQueue() {
    if (queue.length <= cos.options.UploadQueueSize) return;
    for

      // 如果还太多，才继续清理
    (var i = 0; i < nextUploadIndex &&
    // 小于当前操作的 index 才清理
    i < queue.length &&
    // 大于队列才清理
    queue.length > cos.options.UploadQueueSize;) {
      var isActive = queue[i].state === 'waiting' || queue[i].state === 'checking' || queue[i].state === 'uploading';
      if (!queue[i] || !isActive) {
        tasks[queue[i].id] && delete tasks[queue[i].id];
        queue.splice(i, 1);
        nextUploadIndex--;
      } else {
        i++;
      }
    }
    emitListUpdate();
  };
  var _startNextTask = function startNextTask() {
    // 检查是否允许增加执行进程
    if (uploadingFileCount >= cos.options.FileParallelLimit) return;
    // 跳过不可执行的任务
    while (queue[nextUploadIndex] && queue[nextUploadIndex].state !== 'waiting') nextUploadIndex++;
    // 检查是否已遍历结束
    if (nextUploadIndex >= queue.length) return;
    // 上传该遍历到的任务
    var task = queue[nextUploadIndex];
    nextUploadIndex++;
    uploadingFileCount++;
    task.state = 'checking';
    task.params.onTaskStart && task.params.onTaskStart(formatTask(task));
    !task.params.UploadData && (task.params.UploadData = {});
    var apiParams = util.formatParams(task.api, task.params);
    originApiMap[task.api].call(cos, apiParams, function (err, data) {
      if (!cos._isRunningTask(task.id)) return;
      if (task.state === 'checking' || task.state === 'uploading') {
        task.state = err ? 'error' : 'success';
        err && (task.error = err);
        uploadingFileCount--;
        emitListUpdate();
        _startNextTask();
        task.callback && task.callback(err, data);
        if (task.state === 'success') {
          if (task.params) {
            delete task.params.UploadData;
            delete task.params.Body;
            delete task.params;
          }
          delete task.callback;
        }
      }
      clearQueue();
    });
    emitListUpdate();
    // 异步执行下一个任务
    setTimeout(_startNextTask);
  };
  var killTask = function killTask(id, switchToState) {
    var task = tasks[id];
    if (!task) return;
    var waiting = task && task.state === 'waiting';
    var running = task && (task.state === 'checking' || task.state === 'uploading');
    if (switchToState === 'canceled' && task.state !== 'canceled' || switchToState === 'paused' && waiting || switchToState === 'paused' && running) {
      task.state = switchToState;
      cos.emit('inner-kill-task', {
        TaskId: id,
        toState: switchToState
      });
      try {
        var UploadId = task && task.params && task.params.UploadData.UploadId;
      } catch (e) {}
      if (switchToState === 'canceled' && UploadId) session.removeUsing(UploadId);
      emitListUpdate();
      if (running) {
        uploadingFileCount--;
        _startNextTask();
      }
      if (switchToState === 'canceled') {
        if (task.params) {
          delete task.params.UploadData;
          delete task.params.Body;
          delete task.params;
        }
        delete task.callback;
      }
    }
    clearQueue();
  };
  cos._addTasks = function (taskList) {
    util.each(taskList, function (task) {
      cos._addTask(task.api, task.params, task.callback, true);
    });
    emitListUpdate();
  };
  var isTaskReadyWarning = true;
  cos._addTask = function (api, params, callback, ignoreAddEvent) {
    // 复制参数对象
    params = util.formatParams(api, params);

    // 生成 id
    var id = util.uuid();
    params.TaskId = id;
    params.onTaskReady && params.onTaskReady(id);
    if (params.TaskReady) {
      params.TaskReady(id);
      isTaskReadyWarning && console.warn('warning: Param "TaskReady" has been deprecated. Please use "onTaskReady" instead.');
      isTaskReadyWarning = false;
    }
    var task = {
      // env
      params: params,
      callback: callback,
      api: api,
      index: queue.length,
      // task
      id: id,
      Bucket: params.Bucket,
      Region: params.Region,
      Key: params.Key,
      FilePath: params.FilePath || '',
      state: 'waiting',
      loaded: 0,
      size: 0,
      speed: 0,
      percent: 0,
      hashPercent: 0,
      error: null,
      _custom: params._custom
    };
    var onHashProgress = params.onHashProgress;
    params.onHashProgress = function (info) {
      if (!cos._isRunningTask(task.id)) return;
      task.hashPercent = info.percent;
      onHashProgress && onHashProgress(info);
      emitListUpdate();
    };
    var onProgress = params.onProgress;
    params.onProgress = function (info) {
      if (!cos._isRunningTask(task.id)) return;
      task.state === 'checking' && (task.state = 'uploading');
      task.loaded = info.loaded;
      task.speed = info.speed;
      task.percent = info.percent;
      onProgress && onProgress(info);
      emitListUpdate();
    };

    // 异步获取 filesize
    util.getFileSize(api, params, function (err, size) {
      // 开始处理上传
      if (err) return callback(util.error(err)); // 如果获取大小出错，不加入队列
      // 获取完文件大小再把任务加入队列
      tasks[id] = task;
      queue.push(task);
      task.size = size;
      !ignoreAddEvent && emitListUpdate();
      _startNextTask();
      clearQueue();
    });
    return id;
  };
  cos._isRunningTask = function (id) {
    var task = tasks[id];
    return !!(task && (task.state === 'checking' || task.state === 'uploading'));
  };
  cos.getTaskList = function () {
    return util.map(queue, formatTask);
  };
  cos.cancelTask = function (id) {
    killTask(id, 'canceled');
  };
  cos.pauseTask = function (id) {
    killTask(id, 'paused');
  };
  cos.restartTask = function (id) {
    var task = tasks[id];
    if (task && (task.state === 'paused' || task.state === 'error')) {
      task.state = 'waiting';
      emitListUpdate();
      nextUploadIndex = Math.min(nextUploadIndex, task.index);
      _startNextTask();
    }
  };
  cos.isUploadRunning = function () {
    return uploadingFileCount || nextUploadIndex < queue.length;
  };
};
module.exports.transferToTaskMethod = transferToTaskMethod;
module.exports.init = initTask;

/***/ }),

/***/ "./src/tracker.js":
/*!************************!*\
  !*** ./src/tracker.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
var pkg = __webpack_require__(/*! ../package.json */ "./package.json");
var beacon = null;
var getBeacon = function getBeacon(Beacon, delay) {
  if (!beacon) {
    // 生成 beacon
    if (typeof Beacon !== 'function') {
      throw new Error('Beacon not found');
    }
    beacon = new Beacon({
      appkey: '0WEB05PY6MHRGK0U',
      versionCode: pkg.version,
      channelID: 'js_sdk',
      //渠道,选填
      openid: 'openid',
      // 用户id, 选填
      unionid: 'unid',
      //用户unionid , 类似idfv,选填
      strictMode: false,
      //严苛模式开关, 打开严苛模式会主动抛出异常, 上线请务必关闭!!!
      delay: delay,
      // 普通事件延迟上报时间(单位毫秒), 默认1000(1秒),选填
      sessionDuration: 60 * 1000 // session变更的时间间隔, 一个用户持续30分钟(默认值)没有任何上报则算另一次 session,每变更一次session上报一次启动事件(rqd_applaunched),使用毫秒(ms),最小值30秒,选填
    });
  }
  return beacon;
};

// 毫秒转秒
var ms2s = function ms2s(ms) {
  if (!ms || ms < 0) return 0;
  return (ms / 1000).toFixed(3);
};
var utils = {
  // 生成uid 每个链路对应唯一一条uid
  getUid: function getUid() {
    var S4 = function S4() {
      return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
    };
    return S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4();
  },
  // 获取网络类型 4g ｜ wifi
  getNetType: function getNetType() {
    if ((typeof navigator === "undefined" ? "undefined" : _typeof(navigator)) === 'object') {
      var connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
      return (connection === null || connection === void 0 ? void 0 : connection.type) || (connection === null || connection === void 0 ? void 0 : connection.effectiveType) || 'unknown';
    }
    return 'unknown';
  },
  // http | https
  getProtocol: function getProtocol() {
    if ((typeof location === "undefined" ? "undefined" : _typeof(location)) === 'object') {
      return location.protocol.replace(/:/, '');
    }
    return 'unknown protocol';
  },
  // 获取pc端操作系统类型
  getOsType: function getOsType() {
    if ((typeof navigator === "undefined" ? "undefined" : _typeof(navigator)) !== 'object') {
      return 'unknown os';
    }
    var agent = navigator.userAgent.toLowerCase();
    var isMac = /macintosh|mac os x/i.test(navigator.userAgent);
    if (agent.indexOf('win32') >= 0 || agent.indexOf('wow32') >= 0) {
      return 'win32';
    }
    if (agent.indexOf('win64') >= 0 || agent.indexOf('wow64') >= 0) {
      return 'win64';
    }
    if (isMac) {
      return 'mac';
    }
    return 'unknown os';
  },
  isMobile: function isMobile() {
    var exp = /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i;
    if ((typeof navigator === "undefined" ? "undefined" : _typeof(navigator)) === 'object' && navigator.userAgent.match(exp)) {
      return true; // 移动端
    }
    return false; // PC端
  },
  isAndroid: function isAndroid() {
    var exp = /(Android|Adr|Linux)/i;
    if ((typeof navigator === "undefined" ? "undefined" : _typeof(navigator)) === 'object' && navigator.userAgent.match(exp)) {
      return true;
    }
    return false;
  },
  isIOS: function isIOS() {
    var exp = /(iPhone|iPod|iPad|iOS)/i;
    if ((typeof navigator === "undefined" ? "undefined" : _typeof(navigator)) === 'object' && navigator.userAgent.match(exp)) {
      return true;
    }
    return false;
  },
  isOtherMobile: function isOtherMobile() {
    return isMobile && !isAndroid && !isIOS;
  },
  getUA: function getUA() {
    if ((typeof navigator === "undefined" ? "undefined" : _typeof(navigator)) !== 'object') {
      return 'unknown device';
    }
    var explorer = navigator.userAgent;
    return explorer;
  }
};
var isMobile = utils.isMobile();
var mobileOsType = utils.isAndroid() ? 'android' : utils.isIOS ? 'ios' : 'other_mobile';
var pcOsType = utils.getOsType();
var devicePlatform = isMobile ? mobileOsType : pcOsType;
var ua = utils.getUA();
var protocol = utils.getProtocol();
var transApiName = function transApiName(api) {
  if (['putObject', 'sliceUploadFile', 'uploadFile', 'uploadFiles'].includes(api)) {
    return 'UploadTask';
  } else if (api === 'getObject') {
    return 'DownloadTask';
  } else if (['putObjectCopy', 'sliceCopyFile'].includes(api)) {
    return 'CopyTask';
  }
  return api;
};

// 上报参数驼峰改下划线
function camel2underline(key) {
  return key.replace(/([A-Z])/g, '_$1').toLowerCase();
}
function formatParams(params) {
  var formattedParams = {};
  var successKeys = ['sdkVersionName', 'sdkVersionCode', 'osName', 'networkType', 'requestName', 'requestResult', 'bucket', 'region', 'appid', 'accelerate', 'url', 'host', 'requestPath', 'userAgent', 'networkProtocol', 'httpMethod', 'httpSize', 'httpSpeed', 'httpTookTime', 'httpMd5', 'httpSign', 'httpFullTime', 'httpDomain', 'partNumber', 'httpRetryTimes', 'customId', 'traceId', 'realApi'];
  var failureKeys = [].concat(successKeys, ['errorNode', 'errorCode', 'errorName', 'errorMessage', 'errorRequestId', 'errorHttpCode', 'errorServiceName', 'errorType', 'fullError']);
  // 需要上报的参数字段
  var reporterKeys = params.requestResult === 'Success' ? successKeys : failureKeys;
  for (var key in params) {
    if (!reporterKeys.includes(key)) continue;
    var formattedKey = camel2underline(key);
    formattedParams[formattedKey] = params[key];
  }
  formattedParams['request_name'] = params.realApi ? transApiName(params.realApi) : params.requestName;
  return formattedParams;
}

// 链路追踪器
var Tracker = /*#__PURE__*/function () {
  "use strict";

  function Tracker(opt) {
    _classCallCheck(this, Tracker);
    var parent = opt.parent,
      traceId = opt.traceId,
      bucket = opt.bucket,
      region = opt.region,
      apiName = opt.apiName,
      realApi = opt.realApi,
      httpMethod = opt.httpMethod,
      fileKey = opt.fileKey,
      fileSize = opt.fileSize,
      accelerate = opt.accelerate,
      customId = opt.customId,
      delay = opt.delay,
      deepTracker = opt.deepTracker,
      Beacon = opt.Beacon,
      clsReporter = opt.clsReporter;
    var appid = bucket && bucket.substr(bucket.lastIndexOf('-') + 1) || '';
    this.parent = parent;
    this.deepTracker = deepTracker;
    this.delay = delay;
    if (clsReporter && !this.clsReporter) {
      this.clsReporter = clsReporter;
    }
    // 上报用到的字段
    this.params = {
      // 通用字段
      sdkVersionName: 'cos-js-sdk-v5',
      sdkVersionCode: pkg.version,
      osName: devicePlatform,
      networkType: '',
      requestName: apiName || '',
      requestResult: '',
      // sdk api调用结果Success、Failure
      realApi: realApi,
      bucket: bucket,
      region: region,
      accelerate: accelerate,
      httpMethod: httpMethod,
      url: '',
      // 请求url
      host: '',
      httpDomain: '',
      requestPath: fileKey || '',
      userAgent: ua,
      networkProtocol: protocol,
      errorType: '',
      errorCode: '',
      errorName: '',
      errorMessage: '',
      errorRequestId: '',
      errorHttpCode: 0,
      errorServiceName: '',
      errorNode: '',
      httpTookTime: 0,
      // http整体耗时
      httpSize: fileSize || 0,
      // 主要是文件大小，大小 B
      httpMd5: 0,
      // MD5耗时
      httpSign: 0,
      // 计算签名耗时
      httpFullTime: 0,
      // 任务整体耗时(包括md5、签名等)
      httpSpeed: 0,
      // 主要关注上传速度，KB/s

      md5StartTime: 0,
      // md5计算开始时间
      md5EndTime: 0,
      // md5计算结束时间
      signStartTime: 0,
      // 计算签名开始时间
      signEndTime: 0,
      // 计算签名结束时间
      httpStartTime: 0,
      // 发起网络请求开始时间
      httpEndTime: 0,
      // 网路请求结束时间
      startTime: new Date().getTime(),
      // sdk api调用起始时间，不是纯网络耗时
      endTime: 0,
      //  sdk api调用结束时间，不是纯网络耗时

      // js补充字段
      traceId: traceId || utils.getUid(),
      // 每条上报唯一标识
      appid: appid,
      partNumber: 0,
      // 分块上传编号
      httpRetryTimes: 0,
      // sdk内部发起的请求重试
      customId: customId || '',
      // 业务id
      partTime: 0
    };
    if (Beacon) {
      this.beacon = getBeacon(Beacon, delay);
    }
  }

  // 格式化sdk回调
  return _createClass(Tracker, [{
    key: "formatResult",
    value: function formatResult(err, data) {
      var _err$error, _err$error2, _err$error3, _err$error4, _err$error5, _err$error6;
      var now = new Date().getTime();
      var networkType = utils.getNetType();
      var errorCode = err ? (err === null || err === void 0 ? void 0 : err.code) || (err === null || err === void 0 || (_err$error = err.error) === null || _err$error === void 0 ? void 0 : _err$error.code) || (err === null || err === void 0 || (_err$error2 = err.error) === null || _err$error2 === void 0 ? void 0 : _err$error2.Code) : '';
      var errorMessage = err ? (err === null || err === void 0 ? void 0 : err.message) || (err === null || err === void 0 || (_err$error3 = err.error) === null || _err$error3 === void 0 ? void 0 : _err$error3.message) || (err === null || err === void 0 || (_err$error4 = err.error) === null || _err$error4 === void 0 ? void 0 : _err$error4.Message) : '';
      var errorName = errorMessage;
      var errorServiceName = err ? (err === null || err === void 0 ? void 0 : err.resource) || (err === null || err === void 0 || (_err$error5 = err.error) === null || _err$error5 === void 0 ? void 0 : _err$error5.resource) || (err === null || err === void 0 || (_err$error6 = err.error) === null || _err$error6 === void 0 ? void 0 : _err$error6.Resource) : '';
      var errorHttpCode = err ? err === null || err === void 0 ? void 0 : err.statusCode : data.statusCode;
      var requestId = err ? (err === null || err === void 0 ? void 0 : err.headers) && (err === null || err === void 0 ? void 0 : err.headers['x-cos-request-id']) : (data === null || data === void 0 ? void 0 : data.headers) && (data === null || data === void 0 ? void 0 : data.headers['x-cos-request-id']);
      var errorType = err ? requestId ? 'Server' : 'Client' : '';
      if (this.params.requestName === 'getObject') {
        this.params.httpSize = data ? data.headers && data.headers['content-length'] : 0;
      }

      // 上报 sliceUploadFile || uploadFile || uploadFiles 命中分块上传时
      var isSliceUploadFile = this.params.realApi === 'sliceUploadFile';
      var isSliceCopyFile = this.params.realApi === 'sliceCopyFile';
      if (isSliceUploadFile || isSliceCopyFile) {
        var speed = this.params.httpSize / 1024 / this.params.partTime;
        Object.assign(this.params, {
          httpSpeed: speed < 0 ? 0 : speed.toFixed(3)
        });
      } else {
        var httpFullTime = now - this.params.startTime;
        var httpTookTime = this.params.httpEndTime - this.params.httpStartTime;
        var _speed = this.params.httpSize / 1024 / (httpTookTime / 1000);
        var httpMd5 = this.params.md5EndTime - this.params.md5StartTime;
        var httpSign = this.params.signEndTime - this.params.signStartTime;
        if (this.parent) {
          this.parent.addParamValue('httpTookTime', ms2s(httpTookTime));
          this.parent.addParamValue('httpFullTime', ms2s(httpFullTime));
          this.parent.addParamValue('httpMd5', ms2s(httpMd5));
          this.parent.addParamValue('httpSign', ms2s(httpSign));
          if (['multipartUpload', 'uploadPartCopy', 'putObjectCopy'].includes(this.params.requestName)) {
            // 只有小分块上传|复制才累计纯请求耗时，计算速度时用到
            this.parent.addParamValue('partTime', ms2s(httpTookTime));
          }
        }
        Object.assign(this.params, {
          httpFullTime: ms2s(httpFullTime),
          httpMd5: ms2s(httpMd5),
          httpSign: ms2s(httpSign),
          httpTookTime: ms2s(httpTookTime),
          httpSpeed: _speed < 0 ? 0 : _speed.toFixed(3)
        });
      }
      Object.assign(this.params, {
        networkType: networkType,
        requestResult: err ? 'Failure' : 'Success',
        errorType: errorType,
        errorCode: errorCode,
        errorHttpCode: errorHttpCode,
        errorName: errorName,
        errorMessage: errorMessage,
        errorServiceName: errorServiceName,
        errorRequestId: requestId
      });
      if (err && (!errorCode || !errorMessage)) {
        // 暂存全量err一段时间 观察是否所有err格式都可被解析
        this.params.fullError = err ? JSON.stringify(err) : '';
      }
      if (this.params.url) {
        try {
          var execRes = /^http(s)?:\/\/(.*?)\//.exec(this.params.url);
          this.params.host = execRes[2];
        } catch (e) {
          this.params.host = this.params.url;
        }
        this.params.httpDomain = this.params.host;
      }
    }

    // 上报
  }, {
    key: "report",
    value: function report(err, data) {
      if (!this.beacon && !this.clsReporter) return;
      this.formatResult(err, data);
      var formattedParams = formatParams(this.params);
      if (this.beacon) {
        this.sendEventsToBeacon(formattedParams);
      }
      if (this.clsReporter) {
        this.sendEventsToCLS(formattedParams);
      }
    }

    // 设置当前链路的参数
  }, {
    key: "setParams",
    value: function setParams(params) {
      Object.assign(this.params, params);
    }
  }, {
    key: "addParamValue",
    value: function addParamValue(key, value) {
      this.params[key] = (+this.params[key] + +value).toFixed(3);
    }

    // 上报灯塔
  }, {
    key: "sendEventsToBeacon",
    value: function sendEventsToBeacon(formattedParams) {
      // DeepTracker模式下才会上报分块上传内部细节
      var isSliceUploadFile = this.params.requestName === 'sliceUploadFile' || this.params.realApi === 'sliceUploadFile';
      if (isSliceUploadFile && !this.deepTracker) {
        return;
      }
      var eventCode = 'qcloud_track_cos_sdk';
      if (this.delay === 0) {
        // 实时上报
        this.beacon && this.beacon.onDirectUserAction(eventCode, formattedParams);
      } else {
        // 周期性上报
        this.beacon && this.beacon.onUserAction(eventCode, formattedParams);
      }
    }

    // 上报 cls
  }, {
    key: "sendEventsToCLS",
    value: function sendEventsToCLS(formattedParams) {
      // 是否实时上报
      var immediate = !!(this.delay === 0);
      this.clsReporter.log(formattedParams, immediate);
    }

    // 生成子实例，与父所属一个链路，可用于分块上传内部流程上报单个分块操作
  }, {
    key: "generateSubTracker",
    value: function generateSubTracker(subParams) {
      Object.assign(subParams, {
        parent: this,
        deepTracker: this.deepTracker,
        traceId: this.params.traceId,
        bucket: this.params.bucket,
        region: this.params.region,
        accelerate: this.params.accelerate,
        fileKey: this.params.requestPath,
        customId: this.params.customId,
        delay: this.delay,
        clsReporter: this.clsReporter
      });
      return new Tracker(subParams);
    }
  }]);
}();
module.exports = Tracker;

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var md5 = __webpack_require__(/*! ../lib/md5 */ "./lib/md5.js");
var CryptoJS = __webpack_require__(/*! ../lib/crypto */ "./lib/crypto.js");
var _require = __webpack_require__(/*! fast-xml-parser */ "./node_modules/fast-xml-parser/src/fxp.js"),
  XMLParser = _require.XMLParser,
  XMLBuilder = _require.XMLBuilder;
var xmlParser = new XMLParser({
  ignoreDeclaration: true,
  // 忽略 XML 声明
  ignoreAttributes: true,
  // 忽略属性
  parseTagValue: false,
  // 关闭自动解析
  trimValues: false // 关闭默认 trim
});
var xmlBuilder = new XMLBuilder();
var base64 = __webpack_require__(/*! ../lib/base64 */ "./lib/base64.js");
var Tracker = __webpack_require__(/*! ./tracker */ "./src/tracker.js");

// 删掉不需要的#text
var textNodeName = '#text';
var _deleteTextNodes = function deleteTextNodes(obj) {
  if (!isObject(obj)) return;
  for (var i in obj) {
    var item = obj[i];
    if (typeof item === 'string') {
      if (i === textNodeName) {
        delete obj[i];
      }
    } else if (Array.isArray(item)) {
      item.forEach(function (i) {
        _deleteTextNodes(i);
      });
    } else if (isObject(item)) {
      _deleteTextNodes(item);
    }
  }
};

// XML 对象转 JSON 对象
var xml2json = function xml2json(bodyStr) {
  var json = xmlParser.parse(bodyStr);
  _deleteTextNodes(json);
  return json;
};

// JSON 对象转 XML 对象
var json2xml = function json2xml(json) {
  var xml = xmlBuilder.build(json);
  return xml;
};
function camSafeUrlEncode(str) {
  return encodeURIComponent(str).replace(/!/g, '%21').replace(/'/g, '%27').replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/\*/g, '%2A');
}
function getObjectKeys(obj, forKey) {
  var list = [];
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      list.push(forKey ? camSafeUrlEncode(key).toLowerCase() : key);
    }
  }
  return list.sort(function (a, b) {
    a = a.toLowerCase();
    b = b.toLowerCase();
    return a === b ? 0 : a > b ? 1 : -1;
  });
}

/**
 * obj转为string
 * @param  {Object}  obj                需要转的对象，必须
 * @param  {Boolean} lowerCaseKey       key是否转为小写，默认false，非必须
 * @return {String}  data               返回字符串
 */
var obj2str = function obj2str(obj, lowerCaseKey) {
  var i, key, val;
  var list = [];
  var keyList = getObjectKeys(obj);
  for (i = 0; i < keyList.length; i++) {
    key = keyList[i];
    val = obj[key] === undefined || obj[key] === null ? '' : '' + obj[key];
    key = lowerCaseKey ? camSafeUrlEncode(key).toLowerCase() : camSafeUrlEncode(key);
    val = camSafeUrlEncode(val) || '';
    list.push(key + '=' + val);
  }
  return list.join('&');
};

// 可以签入签名的headers
var signHeaders = ['cache-control', 'content-disposition', 'content-encoding', 'content-length', 'content-md5', 'expect', 'expires', 'host', 'if-match', 'if-modified-since', 'if-none-match', 'if-unmodified-since', 'origin', 'range', 'transfer-encoding', 'pic-operations'];
var getSignHeaderObj = function getSignHeaderObj(headers) {
  var signHeaderObj = {};
  for (var i in headers) {
    var key = i.toLowerCase();
    if (key.indexOf('x-cos-') > -1 || key.indexOf('x-ci-') > -1 || signHeaders.indexOf(key) > -1) {
      signHeaderObj[i] = headers[i];
    }
  }
  return signHeaderObj;
};

//测试用的key后面可以去掉
var getAuth = function getAuth(opt) {
  opt = opt || {};
  var SecretId = opt.SecretId;
  var SecretKey = opt.SecretKey;
  var KeyTime = opt.KeyTime;
  var method = (opt.method || opt.Method || 'get').toLowerCase();
  var queryParams = clone(opt.Query || opt.params || {});
  var headers = getSignHeaderObj(clone(opt.Headers || opt.headers || {}));
  var Key = opt.Key || '';
  var pathname;
  if (opt.UseRawKey) {
    pathname = opt.Pathname || opt.pathname || '/' + Key;
  } else {
    pathname = opt.Pathname || opt.pathname || Key;
    pathname.indexOf('/') !== 0 && (pathname = '/' + pathname);
  }

  // ForceSignHost明确传入false才不加入host签名
  var forceSignHost = opt.ForceSignHost === false ? false : true;

  // 如果有传入存储桶且需要强制签名，那么签名默认加 Host 参与计算，避免跨桶访问
  if (!headers.Host && !headers.host && opt.Bucket && opt.Region && forceSignHost) headers.Host = opt.Bucket + '.cos.' + opt.Region + '.myqcloud.com';
  if (!SecretId) throw new Error('missing param SecretId');
  if (!SecretKey) throw new Error('missing param SecretKey');

  // 签名有效起止时间
  var now = Math.round(getSkewTime(opt.SystemClockOffset) / 1000) - 1;
  var exp = now;
  var Expires = opt.Expires || opt.expires;
  if (Expires === undefined) {
    exp += 900; // 签名过期时间为当前 + 900s
  } else {
    exp += Expires * 1 || 0;
  }

  // 要用到的 Authorization 参数列表
  var qSignAlgorithm = 'sha1';
  var qAk = SecretId;
  var qSignTime = KeyTime || now + ';' + exp;
  var qKeyTime = KeyTime || now + ';' + exp;
  var qHeaderList = getObjectKeys(headers, true).join(';').toLowerCase();
  var qUrlParamList = getObjectKeys(queryParams, true).join(';').toLowerCase();

  // 签名算法说明文档：https://www.qcloud.com/document/product/436/7778
  // 步骤一：计算 SignKey
  var signKey = CryptoJS.HmacSHA1(qKeyTime, SecretKey).toString();

  // 步骤二：构成 FormatString
  var formatString = [method, pathname, util.obj2str(queryParams, true), util.obj2str(headers, true), ''].join('\n');

  // 步骤三：计算 StringToSign
  var stringToSign = ['sha1', qSignTime, CryptoJS.SHA1(formatString).toString(), ''].join('\n');

  // 步骤四：计算 Signature
  var qSignature = CryptoJS.HmacSHA1(stringToSign, signKey).toString();

  // 步骤五：构造 Authorization
  var authorization = ['q-sign-algorithm=' + qSignAlgorithm, 'q-ak=' + qAk, 'q-sign-time=' + qSignTime, 'q-key-time=' + qKeyTime, 'q-header-list=' + qHeaderList, 'q-url-param-list=' + qUrlParamList, 'q-signature=' + qSignature].join('&');
  return authorization;
};
var readIntBE = function readIntBE(chunk, size, offset) {
  var bytes = size / 8;
  var buf = chunk.slice(offset, offset + bytes);
  new Uint8Array(buf).reverse();
  return new {
    8: Uint8Array,
    16: Uint16Array,
    32: Uint32Array
  }[size](buf)[0];
};
var buf2str = function buf2str(chunk, start, end, isUtf8) {
  var buf = chunk.slice(start, end);
  var str = '';
  new Uint8Array(buf).forEach(function (charCode) {
    str += String.fromCharCode(charCode);
  });
  if (isUtf8) str = decodeURIComponent(escape(str));
  return str;
};
var parseSelectPayload = function parseSelectPayload(chunk) {
  var header = {};
  var body = buf2str(chunk);
  var result = {
    records: []
  };
  while (chunk.byteLength) {
    var totalLength = readIntBE(chunk, 32, 0);
    var headerLength = readIntBE(chunk, 32, 4);
    var payloadRestLength = totalLength - headerLength - 16;
    var offset = 0;
    var content;
    chunk = chunk.slice(12);
    // 获取 Message 的 header 信息
    while (offset < headerLength) {
      var headerNameLength = readIntBE(chunk, 8, offset);
      var headerName = buf2str(chunk, offset + 1, offset + 1 + headerNameLength);
      var headerValueLength = readIntBE(chunk, 16, offset + headerNameLength + 2);
      var headerValue = buf2str(chunk, offset + headerNameLength + 4, offset + headerNameLength + 4 + headerValueLength);
      header[headerName] = headerValue;
      offset += headerNameLength + 4 + headerValueLength;
    }
    if (header[':event-type'] === 'Records') {
      content = buf2str(chunk, offset, offset + payloadRestLength, true);
      result.records.push(content);
    } else if (header[':event-type'] === 'Stats') {
      content = buf2str(chunk, offset, offset + payloadRestLength, true);
      result.stats = util.xml2json(content).Stats;
    } else if (header[':event-type'] === 'error') {
      var errCode = header[':error-code'];
      var errMessage = header[':error-message'];
      var err = new Error(errMessage);
      err.message = errMessage;
      err.name = err.code = errCode;
      result.error = err;
    } else if (['Progress', 'Continuation', 'End'].includes(header[':event-type'])) {
      // do nothing
    }
    chunk = chunk.slice(offset + payloadRestLength + 4);
  }
  return {
    payload: result.records.join(''),
    body: body
  };
};
var getSourceParams = function getSourceParams(source) {
  var parser = this.options.CopySourceParser;
  if (parser) return parser(source);
  var m = source.match(/^([^.]+-\d+)\.cos(v6|-cdc|-cdz|-internal)?\.([^.]+)\.((myqcloud\.com)|(tencentcos\.cn))\/(.+)$/);
  if (!m) return null;
  return {
    Bucket: m[1],
    Region: m[3],
    Key: m[7]
  };
};
var noop = function noop() {};

// 清除对象里值为的 undefined 或 null 的属性
var clearKey = function clearKey(obj) {
  var retObj = {};
  for (var key in obj) {
    if (obj.hasOwnProperty(key) && obj[key] !== undefined && obj[key] !== null) {
      retObj[key] = obj[key];
    }
  }
  return retObj;
};
var readAsBinaryString = function readAsBinaryString(blob, callback) {
  var readFun;
  var fr = new FileReader();
  if (FileReader.prototype.readAsBinaryString) {
    readFun = FileReader.prototype.readAsBinaryString;
    fr.onload = function () {
      callback(this.result);
    };
  } else if (FileReader.prototype.readAsArrayBuffer) {
    // 在 ie11 添加 readAsBinaryString 兼容
    readFun = function readFun(fileData) {
      var binary = '';
      var pt = this;
      var reader = new FileReader();
      reader.onload = function (e) {
        var bytes = new Uint8Array(reader.result);
        var length = bytes.byteLength;
        for (var i = 0; i < length; i++) {
          binary += String.fromCharCode(bytes[i]);
        }
        callback(binary);
      };
      reader.readAsArrayBuffer(fileData);
    };
  } else {
    console.error('FileReader not support readAsBinaryString');
  }
  readFun.call(fr, blob);
};
var fileSliceNeedCopy = function () {
  var compareVersion = function compareVersion(a, b) {
    a = a.split('.');
    b = b.split('.');
    for (var i = 0; i < b.length; i++) {
      if (a[i] !== b[i]) {
        return parseInt(a[i]) > parseInt(b[i]) ? 1 : -1;
      }
    }
    return 0;
  };
  var check = function check(ua) {
    if (!ua) return false;
    var ChromeVersion = (ua.match(/Chrome\/([.\d]+)/) || [])[1];
    var QBCoreVersion = (ua.match(/QBCore\/([.\d]+)/) || [])[1];
    var QQBrowserVersion = (ua.match(/QQBrowser\/([.\d]+)/) || [])[1];
    var need = ChromeVersion && compareVersion(ChromeVersion, '53.0.2785.116') < 0 && QBCoreVersion && compareVersion(QBCoreVersion, '3.53.991.400') < 0 && QQBrowserVersion && compareVersion(QQBrowserVersion, '9.0.2524.400') <= 0 || false;
    return need;
  };
  return check(typeof navigator !== 'undefined' && navigator.userAgent);
}();

// 获取文件分片
var fileSlice = function fileSlice(file, start, end, isUseToUpload, callback) {
  var blob;
  if (file.slice) {
    blob = file.slice(start, end);
  } else if (file.mozSlice) {
    blob = file.mozSlice(start, end);
  } else if (file.webkitSlice) {
    blob = file.webkitSlice(start, end);
  }
  if (isUseToUpload && fileSliceNeedCopy) {
    var reader = new FileReader();
    reader.onload = function (e) {
      blob = null;
      callback(new Blob([reader.result]));
    };
    reader.readAsArrayBuffer(blob);
  } else {
    callback(blob);
  }
};

// 获取文件内容的 MD5
var getBodyMd5 = function getBodyMd5(UploadCheckContentMd5, Body, callback, onProgress) {
  callback = callback || noop;
  if (UploadCheckContentMd5) {
    if (typeof Body === 'string') {
      callback(util.md5(Body, true));
    } else if (Blob && Body instanceof Blob) {
      util.getFileMd5(Body, function (err, md5) {
        callback(md5);
      }, onProgress);
    } else {
      callback();
    }
  } else {
    callback();
  }
};

// 获取文件 md5 值
var md5ChunkSize = 1024 * 1024;
var getFileMd5 = function getFileMd5(blob, callback, onProgress) {
  var size = blob.size;
  var loaded = 0;
  var md5ctx = md5.getCtx();
  var _next = function next(start) {
    if (start >= size) {
      var hash = md5ctx.digest('hex');
      callback(null, hash);
      return;
    }
    var end = Math.min(size, start + md5ChunkSize);
    util.fileSlice(blob, start, end, false, function (chunk) {
      readAsBinaryString(chunk, function (content) {
        chunk = null;
        md5ctx = md5ctx.update(content, true);
        loaded += content.length;
        content = null;
        if (onProgress) onProgress({
          loaded: loaded,
          total: size,
          percent: Math.round(loaded / size * 10000) / 10000
        });
        _next(start + md5ChunkSize);
      });
    });
  };
  _next(0);
};
function clone(obj) {
  return map(obj, function (v) {
    return _typeof(v) === 'object' && v !== null ? clone(v) : v;
  });
}
function attr(obj, name, defaultValue) {
  return obj && name in obj ? obj[name] : defaultValue;
}
function extend(target, source) {
  each(source, function (val, key) {
    target[key] = source[key];
  });
  return target;
}
function isArray(arr) {
  return arr instanceof Array;
}
function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}
function isInArray(arr, item) {
  var flag = false;
  for (var i = 0; i < arr.length; i++) {
    if (item === arr[i]) {
      flag = true;
      break;
    }
  }
  return flag;
}
function makeArray(arr) {
  return isArray(arr) ? arr : [arr];
}
function each(obj, fn) {
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      fn(obj[i], i);
    }
  }
}
function map(obj, fn) {
  var o = isArray(obj) ? [] : {};
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      o[i] = fn(obj[i], i);
    }
  }
  return o;
}
function filter(obj, fn) {
  var iaArr = isArray(obj);
  var o = iaArr ? [] : {};
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      if (fn(obj[i], i)) {
        if (iaArr) {
          o.push(obj[i]);
        } else {
          o[i] = obj[i];
        }
      }
    }
  }
  return o;
}
var b64 = function b64(str) {
  var i,
    len,
    char,
    res = '';
  for (i = 0, len = str.length / 2; i < len; i++) {
    char = parseInt(str[i * 2] + str[i * 2 + 1], 16);
    res += String.fromCharCode(char);
  }
  return btoa(res);
};
var uuid = function uuid() {
  var S4 = function S4() {
    return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
  };
  return S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4();
};
var hasMissingParams = function hasMissingParams(apiName, params) {
  var Bucket = params.Bucket;
  var Region = params.Region;
  var Key = params.Key;
  var Domain = this.options.Domain;
  var checkBucket = !Domain || typeof Domain === 'string' && Domain.indexOf('{Bucket}') > -1;
  var checkRegion = !Domain || typeof Domain === 'string' && Domain.indexOf('{Region}') > -1;
  if (apiName.indexOf('Bucket') > -1 || apiName === 'deleteMultipleObject' || apiName === 'multipartList' || apiName === 'listObjectVersions') {
    if (checkBucket && !Bucket) return 'Bucket';
    if (checkRegion && !Region) return 'Region';
  } else if (apiName.indexOf('Object') > -1 || apiName.indexOf('multipart') > -1 || apiName === 'sliceUploadFile' || apiName === 'abortUploadTask' || apiName === 'uploadFile') {
    if (checkBucket && !Bucket) return 'Bucket';
    if (checkRegion && !Region) return 'Region';
    if (!Key) return 'Key';
  }
  return false;
};
var formatParams = function formatParams(apiName, params) {
  // 复制参数对象
  params = extend({}, params);

  // 统一处理 Headers
  if (apiName !== 'getAuth' && apiName !== 'getV4Auth' && apiName !== 'getObjectUrl') {
    var Headers = params.Headers || {};
    if (params && _typeof(params) === 'object') {
      (function () {
        for (var key in params) {
          if (params.hasOwnProperty(key) && key.indexOf('x-cos-') > -1) {
            Headers[key] = params[key];
          }
        }
      })();
      var headerMap = {
        // params headers
        'x-cos-mfa': 'MFA',
        'Content-MD5': 'ContentMD5',
        'Content-Length': 'ContentLength',
        'Content-Type': 'ContentType',
        Expect: 'Expect',
        Expires: 'Expires',
        'Cache-Control': 'CacheControl',
        'Content-Disposition': 'ContentDisposition',
        'Content-Encoding': 'ContentEncoding',
        Range: 'Range',
        'If-Modified-Since': 'IfModifiedSince',
        'If-Unmodified-Since': 'IfUnmodifiedSince',
        'If-Match': 'IfMatch',
        'If-None-Match': 'IfNoneMatch',
        'x-cos-copy-source': 'CopySource',
        'x-cos-copy-source-Range': 'CopySourceRange',
        'x-cos-metadata-directive': 'MetadataDirective',
        'x-cos-copy-source-If-Modified-Since': 'CopySourceIfModifiedSince',
        'x-cos-copy-source-If-Unmodified-Since': 'CopySourceIfUnmodifiedSince',
        'x-cos-copy-source-If-Match': 'CopySourceIfMatch',
        'x-cos-copy-source-If-None-Match': 'CopySourceIfNoneMatch',
        'x-cos-acl': 'ACL',
        'x-cos-grant-read': 'GrantRead',
        'x-cos-grant-write': 'GrantWrite',
        'x-cos-grant-full-control': 'GrantFullControl',
        'x-cos-grant-read-acp': 'GrantReadAcp',
        'x-cos-grant-write-acp': 'GrantWriteAcp',
        'x-cos-storage-class': 'StorageClass',
        'x-cos-traffic-limit': 'TrafficLimit',
        'x-cos-mime-limit': 'MimeLimit',
        // SSE-C
        'x-cos-server-side-encryption-customer-algorithm': 'SSECustomerAlgorithm',
        'x-cos-server-side-encryption-customer-key': 'SSECustomerKey',
        'x-cos-server-side-encryption-customer-key-MD5': 'SSECustomerKeyMD5',
        // SSE-COS、SSE-KMS
        'x-cos-server-side-encryption': 'ServerSideEncryption',
        'x-cos-server-side-encryption-cos-kms-key-id': 'SSEKMSKeyId',
        'x-cos-server-side-encryption-context': 'SSEContext',
        // 上传时图片处理
        'Pic-Operations': 'PicOperations',
        'x-cos-callback': 'Callback',
        'x-cos-callback-var': 'CallbackVar',
        'x-cos-return-body': 'ReturnBody'
      };
      util.each(headerMap, function (paramKey, headerKey) {
        if (params[paramKey] !== undefined) {
          Headers[headerKey] = params[paramKey];
        }
      });
      params.Headers = clearKey(Headers);
    }
  }
  return params;
};
var apiWrapper = function apiWrapper(apiName, apiFn) {
  return function (params, callback) {
    var self = this;

    // 处理参数
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }

    // 整理参数格式
    params = formatParams(apiName, params);

    // tracker传递
    var tracker;
    if (self.options.EnableReporter) {
      if (params.calledBySdk === 'sliceUploadFile' || params.calledBySdk === 'sliceCopyFile') {
        // 分块上传内部方法使用sliceUploadFile的子链路
        tracker = params.tracker && params.tracker.generateSubTracker({
          apiName: apiName
        });
      } else if (['uploadFile', 'uploadFiles'].includes(apiName)) {
        // uploadFile、uploadFiles方法在内部处理，此处不处理
        tracker = null;
      } else {
        var fileSize = 0;
        if (params.Body) {
          fileSize = typeof params.Body === 'string' ? params.Body.length : params.Body.size || params.Body.byteLength || 0;
        }
        var accelerate = self.options.UseAccelerate || typeof self.options.Domain === 'string' && self.options.Domain.includes('accelerate.');
        tracker = new Tracker({
          Beacon: self.options.BeaconReporter,
          clsReporter: self.options.ClsReporter,
          bucket: params.Bucket,
          region: params.Region,
          apiName: apiName,
          realApi: apiName,
          accelerate: accelerate,
          fileKey: params.Key,
          fileSize: fileSize,
          deepTracker: self.options.DeepTracker,
          customId: self.options.CustomId,
          delay: self.options.TrackerDelay
        });
      }
    }
    params.tracker = tracker;

    // 代理回调函数
    var formatResult = function formatResult(result) {
      if (result && result.headers) {
        result.headers['x-ci-request-id'] && (result.RequestId = result.headers['x-ci-request-id']);
        result.headers['x-cos-request-id'] && (result.RequestId = result.headers['x-cos-request-id']);
        result.headers['x-cos-version-id'] && (result.VersionId = result.headers['x-cos-version-id']);
        result.headers['x-cos-delete-marker'] && (result.DeleteMarker = result.headers['x-cos-delete-marker']);
      }
      return result;
    };
    var _callback = function _callback(err, data) {
      // 格式化上报参数并上报
      tracker && tracker.report(err, data);
      callback && callback(formatResult(err), formatResult(data));
    };
    var checkParams = function checkParams() {
      if (apiName !== 'getService' && apiName !== 'abortUploadTask') {
        // 判断参数是否完整
        var missingResult = hasMissingParams.call(self, apiName, params);
        if (missingResult) {
          return 'missing param ' + missingResult;
        }
        // 判断 region 格式
        if (params.Region) {
          if (self.options.CompatibilityMode) {
            if (!/^([a-z\d-.]+)$/.test(params.Region)) {
              return 'Region format error.';
            }
          } else {
            if (params.Region.indexOf('cos.') > -1) {
              return 'param Region should not be start with "cos."';
            } else if (!/^([a-z\d-]+)$/.test(params.Region)) {
              return 'Region format error.';
            }
          }
          // 判断 region 格式
          if (!self.options.CompatibilityMode && params.Region.indexOf('-') === -1 && params.Region !== 'yfb' && params.Region !== 'default' && params.Region !== 'accelerate') {
            console.warn('warning: param Region format error, find help here: https://cloud.tencent.com/document/product/436/6224');
          }
        }
        // 兼容不带 AppId 的 Bucket
        if (params.Bucket) {
          var appId = params.AppId || self.options.AppId;
          if (appId && params.Bucket.substr(params.Bucket.length - appId.length - 1) !== '-' + appId) {
            params.Bucket = params.Bucket + '-' + appId;
          } else if (!/^([a-z\d-]+)-(\d+)$/.test(params.Bucket)) {
            return 'Bucket should format as "test-1250000000".';
          }
          if (params.AppId) {
            console.warn('warning: AppId has been deprecated, Please put it at the end of parameter Bucket(E.g Bucket:"test-1250000000" ).');
            delete params.AppId;
          }
        }
        // 如果 Key 是 / 开头，强制去掉第一个 /
        if (!self.options.UseRawKey && params.Key && params.Key.substr(0, 1) === '/') {
          params.Key = params.Key.substr(1);
        }
      }
    };
    var errMsg = checkParams();
    var isSync = ['getAuth', 'getObjectUrl'].includes(apiName);
    if (typeof Promise === 'function' && !isSync && !callback) {
      return new Promise(function (resolve, reject) {
        callback = function callback(err, data) {
          err ? reject(err) : resolve(data);
        };
        if (errMsg) return _callback(util.error(new Error(errMsg)));
        apiFn.call(self, params, _callback);
      });
    } else {
      if (errMsg) return _callback(util.error(new Error(errMsg)));
      var res = apiFn.call(self, params, _callback);
      if (isSync) return res;
    }
  };
};
var throttleOnProgress = function throttleOnProgress(total, onProgress) {
  var self = this;
  var size0 = 0;
  var size1 = 0;
  var time0 = Date.now();
  var time1;
  var timer;
  function update() {
    timer = 0;
    if (onProgress && typeof onProgress === 'function') {
      time1 = Date.now();
      var speed = Math.max(0, Math.round((size1 - size0) / ((time1 - time0) / 1000) * 100) / 100) || 0;
      var percent;
      if (size1 === 0 && total === 0) {
        percent = 1;
      } else {
        percent = Math.floor(size1 / total * 100) / 100 || 0;
      }
      time0 = time1;
      size0 = size1;
      try {
        onProgress({
          loaded: size1,
          total: total,
          speed: speed,
          percent: percent
        });
      } catch (e) {}
    }
  }
  return function (info, immediately) {
    if (info) {
      size1 = info.loaded;
      total = info.total;
    }
    if (immediately) {
      clearTimeout(timer);
      update();
    } else {
      if (timer) return;
      timer = setTimeout(update, self.options.ProgressInterval);
    }
  };
};
var getFileSize = function getFileSize(api, params, callback) {
  var size;
  if (typeof params.Body === 'string') {
    params.Body = new Blob([params.Body], {
      type: 'text/plain'
    });
  } else if (params.Body instanceof ArrayBuffer) {
    params.Body = new Blob([params.Body]);
  }
  if (params.Body && (params.Body instanceof Blob || params.Body.toString() === '[object File]' || params.Body.toString() === '[object Blob]')) {
    size = params.Body.size;
  } else {
    callback(util.error(new Error('params body format error, Only allow File|Blob|String.')));
    return;
  }
  params.ContentLength = size;
  callback(null, size);
};

// 获取调正的时间戳
var getSkewTime = function getSkewTime(offset) {
  return Date.now() + (offset || 0);
};
var error = function error(err, opt) {
  var sourceErr = err;
  err.message = err.message || null;
  if (typeof opt === 'string') {
    err.error = opt;
    err.message = opt;
  } else if (_typeof(opt) === 'object' && opt !== null) {
    extend(err, opt);
    if (opt.code || opt.name) err.code = opt.code || opt.name;
    if (opt.message) err.message = opt.message;
    if (opt.stack) err.stack = opt.stack;
  }
  if (typeof Object.defineProperty === 'function') {
    Object.defineProperty(err, 'name', {
      writable: true,
      enumerable: false
    });
    Object.defineProperty(err, 'message', {
      enumerable: true
    });
  }
  err.name = opt && opt.name || err.name || err.code || 'Error';
  if (!err.code) err.code = err.name;
  if (!err.error) err.error = clone(sourceErr); // 兼容老的错误格式

  return err;
};
var isWebWorker = function isWebWorker() {
  // 有限判断 worker 环境的 constructor name 其次用 worker 独有的 FileReaderSync 兜底 详细参考 https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API/Using_web_workers
  return (typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) === 'object' && (globalThis.constructor.name === 'DedicatedWorkerGlobalScope' || globalThis.FileReaderSync);
};
var isNode = function isNode() {
  // 得兜底 web worker 环境中 webpack 用了 process 插件之类的情况
  return (typeof window === "undefined" ? "undefined" : _typeof(window)) !== 'object' && (typeof process === "undefined" ? "undefined" : _typeof(process)) === 'object' && "function" === 'function' && !isWebWorker();
};
var isCIHost = function isCIHost(url) {
  return /^https?:\/\/([^/]+\.)?ci\.[^/]+/.test(url);
};

//判断是否是ios
var isIOS = function () {
  if ((typeof navigator === "undefined" ? "undefined" : _typeof(navigator)) !== 'object') {
    return false;
  }
  var u = navigator.userAgent;
  var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
  return isIOS;
}();

// 判断是qq内置浏览器
var isQQ = function () {
  if ((typeof navigator === "undefined" ? "undefined" : _typeof(navigator)) !== 'object') {
    return false;
  }
  return /\sQQ/i.test(navigator.userAgent);
}();
var encodeBase64 = function encodeBase64(str, safe) {
  var base64Str = base64.encode(str);
  // 万象使用的安全base64格式需要特殊处理
  if (safe) {
    base64Str = base64Str.replaceAll('+', '-').replaceAll('/', '_').replaceAll('=', '');
  }
  return base64Str;
};
var decodeBase64 = function decodeBase64(base64Str) {
  if (!base64Str) return '';
  return base64.decode(base64Str);
};
var simplifyPath = function simplifyPath(path) {
  var names = path.split('/');
  var stack = [];
  var _iterator = _createForOfIteratorHelper(names),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var name = _step.value;
      if (name === '..') {
        if (stack.length) {
          stack.pop();
        }
      } else if (name.length && name !== '.') {
        stack.push(name);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return '/' + stack.join('/');
};

// 解析响应体，兼容 xml、json
var parseResBody = function parseResBody(responseBody) {
  var json;
  if (responseBody && typeof responseBody === 'string') {
    var trimBody = responseBody.trim();
    var isXml = trimBody.indexOf('<') === 0;
    var isJson = trimBody.indexOf('{') === 0;
    if (isXml) {
      // xml 解析，解析失败返回{}
      json = util.xml2json(responseBody) || {};
    } else if (isJson) {
      // json解析，解析失败返回原始 Body
      try {
        // 替换 json 中的换行符为空格，否则解析会出错
        var formatBody = responseBody.replace(/\n/g, ' ');
        var parsedBody = JSON.parse(formatBody);
        // 确保解析出 json 对象
        if (Object.prototype.toString.call(parsedBody) === '[object Object]') {
          json = parsedBody;
        } else {
          json = responseBody;
        }
      } catch (e) {
        json = responseBody;
      }
    } else {
      json = responseBody;
    }
  } else {
    json = responseBody || {};
  }
  return json;
};
var util = {
  noop: noop,
  formatParams: formatParams,
  apiWrapper: apiWrapper,
  xml2json: xml2json,
  json2xml: json2xml,
  md5: md5,
  clearKey: clearKey,
  fileSlice: fileSlice,
  getBodyMd5: getBodyMd5,
  getFileMd5: getFileMd5,
  b64: b64,
  extend: extend,
  isArray: isArray,
  isInArray: isInArray,
  makeArray: makeArray,
  each: each,
  map: map,
  filter: filter,
  clone: clone,
  attr: attr,
  uuid: uuid,
  camSafeUrlEncode: camSafeUrlEncode,
  throttleOnProgress: throttleOnProgress,
  getFileSize: getFileSize,
  getSkewTime: getSkewTime,
  error: error,
  obj2str: obj2str,
  getAuth: getAuth,
  parseSelectPayload: parseSelectPayload,
  getSourceParams: getSourceParams,
  isBrowser: true,
  isNode: isNode,
  isCIHost: isCIHost,
  isIOS_QQ: isIOS && isQQ,
  encodeBase64: encodeBase64,
  decodeBase64: decodeBase64,
  simplifyPath: simplifyPath,
  readAsBinaryString: readAsBinaryString,
  parseResBody: parseResBody
};
module.exports = util;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ })

/******/ });
});