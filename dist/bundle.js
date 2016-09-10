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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(1);
	
	var _util = __webpack_require__(3);
	
	var _util2 = _interopRequireDefault(_util);
	
	var _header = __webpack_require__(7);
	
	var _header2 = _interopRequireDefault(_header);
	
	var _main = __webpack_require__(9);
	
	var _main2 = _interopRequireDefault(_main);
	
	var _button = __webpack_require__(10);
	
	var _button2 = _interopRequireDefault(_button);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_util2.default.ready(function () {
	    _main2.default.load();
	    _header2.default.load();
	    _button2.default.load();
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _lang = __webpack_require__(4);
	
	var _lang2 = _interopRequireDefault(_lang);
	
	var _animation = __webpack_require__(5);
	
	var _animation2 = _interopRequireDefault(_animation);
	
	var _env = __webpack_require__(6);
	
	var _env2 = _interopRequireDefault(_env);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _ = {};
	
	_lang2.default.extend(_, _lang2.default, _animation2.default, _env2.default);
	
	exports.default = _;

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function toArray(likeArr) {
	    var i = void 0,
	        ii = void 0;
	    i = 0;
	    ii = likeArr.length;
	    var arr = new Array(ii);
	    while (i < ii) {
	        arr[i] = likeArr[i];
	        i++;
	    }
	    return arr;
	}
	
	function extend(target) {
	    Array.prototype.slice.call(arguments, 1).forEach(function (source) {
	        Object.keys(source).forEach(function (key) {
	            if (!target.hasOwnProperty(key)) {
	                target[key] = source[key];
	            }
	        });
	    });
	}
	
	exports.default = {
	    toArray: toArray,
	    extend: extend
	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function animate(func) {
	    if (global.requestAnimationFrame) {
	        global.requestAnimationFrame(func);
	    } else {
	        setTimeout(function () {
	            var timestamp = new Date().getTime();
	            func(timestamp);
	        }, 16);
	    }
	}
	
	exports.default = {
	    animate: animate
	};
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function ready(handler) {
	    window.addEventListener('load', handler);
	}
	
	exports.default = {
	    ready: ready,
	    support: {
	        touch: 'ontouchstart' in document.documentElement
	    }
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	__webpack_require__(8);
	
	var _util = __webpack_require__(3);
	
	var _util2 = _interopRequireDefault(_util);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var cache = new WeakMap();
	
	function load() {
	    _util2.default.toArray(document.getElementsByTagName('header')).forEach(transform);
	}
	
	function transform(el) {
	    var h1El = el.querySelector('h1');
	    cache.set(el, {
	        thresholdValue: el.offsetTop + h1El.offsetTop + h1El.offsetHeight + 10,
	        reachedThreshold: false
	    });
	
	    var infoEl = el.querySelector('div');
	    var pEl = infoEl.querySelectorAll('p')[1];
	    var iconEl = infoEl.querySelector('.icon');
	    var iconSize = pEl.offsetTop + pEl.offsetHeight;
	
	    iconEl.style.setProperty('width', iconSize + 'px');
	    iconEl.style.setProperty('height', iconSize + 'px');
	
	    var trackSize = Math.sin(Math.PI / 4) * iconSize;
	    var deltaSize = (iconSize - trackSize) / 2;
	
	    _util2.default.toArray(document.querySelectorAll('.track')).forEach(function (el) {
	        el.style.setProperty('width', trackSize + 'px');
	        el.style.setProperty('height', trackSize + 'px');
	        el.style.setProperty('top', deltaSize + 'px');
	        el.style.setProperty('left', deltaSize + 'px');
	    });
	
	    var handler = scrollHandler.bind(el);
	    document.addEventListener('scroll', handler);
	    document.addEventListener('mousewheel', handler);
	
	    handler();
	}
	
	function scrollHandler(e) {
	    var me = this;
	    var data = cache.get(me);
	
	    var curValue = document.body.scrollTop || document.documentElement.scrollTop;
	    var thresholdValue = data.thresholdValue;
	    if (curValue > thresholdValue) {
	        if (!data.reachedThreshold) {
	            data.reachedThreshold = true;
	            me.style.setProperty('position', 'fixed');
	            me.style.setProperty('top', -thresholdValue + 'px');
	        }
	    } else {
	        if (data.reachedThreshold) {
	            data.reachedThreshold = false;
	            me.style.setProperty('position', 'relative');
	            me.style.setProperty('top', '0');
	        }
	    }
	}
	
	exports.default = {
	    load: load
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _util = __webpack_require__(3);
	
	var _util2 = _interopRequireDefault(_util);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function load() {
	    _util2.default.toArray(document.getElementsByTagName('main')).forEach(transform);
	}
	
	function transform(el) {
	    el.style.setProperty('top', el.offsetTop + 'px');
	}
	
	exports.default = {
	    load: load
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	__webpack_require__(11);
	
	var _util = __webpack_require__(3);
	
	var _util2 = _interopRequireDefault(_util);
	
	var _config = __webpack_require__(12);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var cache = new WeakMap();
	
	function load() {
	    if (_util2.default.support.touch) {
	        return;
	    }
	    _util2.default.toArray(document.getElementsByClassName('J-button')).forEach(transform);
	}
	
	function transform(el) {
	    el.classList.add('button');
	    var canvas = document.createElement('canvas');
	    canvas.setAttribute('width', '0');
	    canvas.setAttribute('height', '0');
	
	    el.addEventListener('mouseenter', initCanvas);
	    el.addEventListener('mouseenter', enterHandler);
	    el.addEventListener('mouseleave', leaveHandler);
	
	    cache.set(el, {
	        canvas: canvas,
	        rect: null
	    });
	
	    var firstEl = el.childNodes[0];
	    el.insertBefore(canvas, firstEl);
	}
	
	function initCanvas() {
	    var me = this;
	    var data = cache.get(me);
	
	    var rect = me.getBoundingClientRect();
	    data.rect = rect;
	
	    var canvas = data.canvas;
	    canvas.setAttribute('width', rect.width);
	    canvas.setAttribute('height', rect.height);
	
	    me.removeEventListener('mouseenter', initCanvas);
	}
	
	function enterHandler(e) {
	    paintCircle.call(this, e, '#444');
	}
	
	function leaveHandler(e) {
	    paintCircle.call(this, e, '#fff');
	}
	
	function calDistance(_ref, x2, y2) {
	    var x1 = _ref.x;
	    var y1 = _ref.y;
	
	    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
	}
	
	function calRadius(pos, _ref2) {
	    var width = _ref2.width;
	    var height = _ref2.height;
	
	    return Math.max(calDistance(pos, 0, 0), calDistance(pos, 0, height), calDistance(pos, width, 0), calDistance(pos, width, height));
	}
	
	function paintCircle(e, color) {
	    var me = this;
	
	    var x = e.offsetX - 1;
	    var y = e.offsetY - 1;
	
	    var _cache$get = cache.get(me);
	
	    var canvas = _cache$get.canvas;
	    var rect = _cache$get.rect;
	
	    var ctx = canvas.getContext('2d');
	
	    var radius = calRadius({
	        x: x,
	        y: y
	    }, rect);
	    var animationDuration = _config2.default.animationDuration;
	
	
	    var startTime = null;
	    function paint(timestamp) {
	        if (startTime === null) {
	            startTime = timestamp;
	        }
	
	        var progress = timestamp - startTime;
	
	        ctx.fillStyle = color;
	        ctx.beginPath();
	        ctx.arc(x, y, radius * progress / animationDuration, 0, 2 * Math.PI);
	        ctx.fill();
	
	        if (progress < animationDuration) {
	            _util2.default.animate(paint);
	        }
	    }
	
	    _util2.default.animate(paint);
	}
	
	exports.default = {
	    load: load
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    animationDuration: 200 //ms
	};

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNWZjNWVmN2U5NWM5OGY1OWQ3YTIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvbGFuZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9hbmltYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvZW52LmpzIiwid2VicGFjazovLy8uL3NyYy9oZWFkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlYWRlci9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2J1dHRvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYnV0dG9uL2luZGV4LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnLmpzIl0sIm5hbWVzIjpbInJlYWR5IiwibG9hZCIsIl8iLCJleHRlbmQiLCJ0b0FycmF5IiwibGlrZUFyciIsImkiLCJpaSIsImxlbmd0aCIsImFyciIsIkFycmF5IiwidGFyZ2V0IiwicHJvdG90eXBlIiwic2xpY2UiLCJjYWxsIiwiYXJndW1lbnRzIiwiZm9yRWFjaCIsInNvdXJjZSIsIk9iamVjdCIsImtleXMiLCJrZXkiLCJoYXNPd25Qcm9wZXJ0eSIsImFuaW1hdGUiLCJmdW5jIiwiZ2xvYmFsIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwic2V0VGltZW91dCIsInRpbWVzdGFtcCIsIkRhdGUiLCJnZXRUaW1lIiwiaGFuZGxlciIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdXBwb3J0IiwidG91Y2giLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImNhY2hlIiwiV2Vha01hcCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwidHJhbnNmb3JtIiwiZWwiLCJoMUVsIiwicXVlcnlTZWxlY3RvciIsInNldCIsInRocmVzaG9sZFZhbHVlIiwib2Zmc2V0VG9wIiwib2Zmc2V0SGVpZ2h0IiwicmVhY2hlZFRocmVzaG9sZCIsImluZm9FbCIsInBFbCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpY29uRWwiLCJpY29uU2l6ZSIsInN0eWxlIiwic2V0UHJvcGVydHkiLCJ0cmFja1NpemUiLCJNYXRoIiwic2luIiwiUEkiLCJkZWx0YVNpemUiLCJzY3JvbGxIYW5kbGVyIiwiYmluZCIsImUiLCJtZSIsImRhdGEiLCJnZXQiLCJjdXJWYWx1ZSIsImJvZHkiLCJzY3JvbGxUb3AiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiY2xhc3NMaXN0IiwiYWRkIiwiY2FudmFzIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImluaXRDYW52YXMiLCJlbnRlckhhbmRsZXIiLCJsZWF2ZUhhbmRsZXIiLCJyZWN0IiwiZmlyc3RFbCIsImNoaWxkTm9kZXMiLCJpbnNlcnRCZWZvcmUiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ3aWR0aCIsImhlaWdodCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJwYWludENpcmNsZSIsImNhbERpc3RhbmNlIiwieDIiLCJ5MiIsIngxIiwieCIsInkxIiwieSIsInNxcnQiLCJwb3ciLCJjYWxSYWRpdXMiLCJwb3MiLCJtYXgiLCJjb2xvciIsIm9mZnNldFgiLCJvZmZzZXRZIiwiY3R4IiwiZ2V0Q29udGV4dCIsInJhZGl1cyIsImFuaW1hdGlvbkR1cmF0aW9uIiwic3RhcnRUaW1lIiwicGFpbnQiLCJwcm9ncmVzcyIsImZpbGxTdHlsZSIsImJlZ2luUGF0aCIsImFyYyIsImZpbGwiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVB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OiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDVmYzVlZjdlOTVjOThmNTlkN2EyXG4gKiovIiwiaW1wb3J0ICcuL2luZGV4LmNzcyc7XG5cbmltcG9ydCBfIGZyb20gJy4vdXRpbCc7XG5cbmltcG9ydCBoZWFkZXIgZnJvbSAnLi9oZWFkZXInO1xuaW1wb3J0IG1haW4gZnJvbSAnLi9tYWluJztcbmltcG9ydCBidXR0b24gZnJvbSAnLi9idXR0b24nO1xuXG5fLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICBtYWluLmxvYWQoKTtcbiAgICBoZWFkZXIubG9hZCgpO1xuICAgIGJ1dHRvbi5sb2FkKCk7XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pbmRleC5qc1xuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbmRleC5jc3NcbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgbGFuZyBmcm9tICcuL2xhbmcnO1xuaW1wb3J0IGFuaW1hdGlvbiBmcm9tICcuL2FuaW1hdGlvbic7XG5pbXBvcnQgZW52IGZyb20gJy4vZW52JztcblxubGV0IF8gPSB7fTtcblxubGFuZy5leHRlbmQoXG4gICAgXyxcbiAgICBsYW5nLCBhbmltYXRpb24sIGVudlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgXztcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy91dGlsL2luZGV4LmpzXG4gKiovIiwiZnVuY3Rpb24gdG9BcnJheShsaWtlQXJyKSB7XG4gICAgbGV0IGksaWk7XG4gICAgaSA9IDA7XG4gICAgaWkgPSBsaWtlQXJyLmxlbmd0aDtcbiAgICBsZXQgYXJyID0gbmV3IEFycmF5KGlpKTtcbiAgICB3aGlsZSAoaSA8IGlpKSB7XG4gICAgICAgIGFycltpXSA9IGxpa2VBcnJbaV07XG4gICAgICAgIGkrKztcbiAgICB9XG4gICAgcmV0dXJuIGFycjtcbn1cblxuZnVuY3Rpb24gZXh0ZW5kICh0YXJnZXQpIHtcbiAgICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChcbiAgICAgICAgYXJndW1lbnRzLFxuICAgICAgICAxXG4gICAgKS5mb3JFYWNoKFxuICAgICAgICBmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhzb3VyY2UpXG4gICAgICAgICAgICAgICAgLmZvckVhY2goXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGFyZ2V0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICk7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHRvQXJyYXksXG4gICAgZXh0ZW5kXG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3V0aWwvbGFuZy5qc1xuICoqLyIsImZ1bmN0aW9uIGFuaW1hdGUoZnVuYykge1xuICAgIGlmKGdsb2JhbC5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpIHtcbiAgICAgICAgZ2xvYmFsLnJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgbGV0IHRpbWVzdGFtcCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgZnVuYyh0aW1lc3RhbXApO1xuICAgICAgICB9LCAxNik7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgYW5pbWF0ZVxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy91dGlsL2FuaW1hdGlvbi5qc1xuICoqLyIsImZ1bmN0aW9uIHJlYWR5IChoYW5kbGVyKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBoYW5kbGVyKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHJlYWR5LFxuICAgIHN1cHBvcnQ6IHtcbiAgICAgICAgdG91Y2g6ICdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudFxuICAgIH1cbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdXRpbC9lbnYuanNcbiAqKi8iLCJpbXBvcnQgJy4vaW5kZXguY3NzJztcblxuaW1wb3J0IF8gZnJvbSAnLi4vdXRpbCc7XG5sZXQgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG5mdW5jdGlvbiBsb2FkKCl7XG4gICAgXy50b0FycmF5KFxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZGVyJylcbiAgICApLmZvckVhY2goIHRyYW5zZm9ybSApO1xufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm0gKGVsKSB7XG4gICAgbGV0IGgxRWwgPSBlbC5xdWVyeVNlbGVjdG9yKCdoMScpO1xuICAgIGNhY2hlLnNldChcbiAgICAgICAgZWwsXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRocmVzaG9sZFZhbHVlOiBlbC5vZmZzZXRUb3AgKyBoMUVsLm9mZnNldFRvcCArIGgxRWwub2Zmc2V0SGVpZ2h0ICsgMTAsXG4gICAgICAgICAgICByZWFjaGVkVGhyZXNob2xkOiBmYWxzZVxuICAgICAgICB9XG4gICAgKTtcblxuICAgIGxldCBpbmZvRWwgPSBlbC5xdWVyeVNlbGVjdG9yKCdkaXYnKTtcbiAgICBsZXQgcEVsID0gaW5mb0VsLnF1ZXJ5U2VsZWN0b3JBbGwoJ3AnKVsxXTtcbiAgICBsZXQgaWNvbkVsID0gaW5mb0VsLnF1ZXJ5U2VsZWN0b3IoJy5pY29uJyk7XG4gICAgbGV0IGljb25TaXplID0gcEVsLm9mZnNldFRvcCArIHBFbC5vZmZzZXRIZWlnaHQ7XG5cbiAgICBpY29uRWwuc3R5bGUuc2V0UHJvcGVydHkoJ3dpZHRoJywgaWNvblNpemUgKyAncHgnKTtcbiAgICBpY29uRWwuc3R5bGUuc2V0UHJvcGVydHkoJ2hlaWdodCcsIGljb25TaXplICsgJ3B4Jyk7XG5cbiAgICBsZXQgdHJhY2tTaXplID0gTWF0aC5zaW4oTWF0aC5QSSAvIDQpICogaWNvblNpemU7XG4gICAgbGV0IGRlbHRhU2l6ZSA9IChpY29uU2l6ZSAtIHRyYWNrU2l6ZSkgLyAyO1xuXG4gICAgXy50b0FycmF5KFxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudHJhY2snKVxuICAgICkuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgZWwuc3R5bGUuc2V0UHJvcGVydHkoJ3dpZHRoJywgdHJhY2tTaXplICsgJ3B4Jyk7XG4gICAgICAgIGVsLnN0eWxlLnNldFByb3BlcnR5KCdoZWlnaHQnLCB0cmFja1NpemUgKyAncHgnKTtcbiAgICAgICAgZWwuc3R5bGUuc2V0UHJvcGVydHkoJ3RvcCcsIGRlbHRhU2l6ZSArICdweCcpO1xuICAgICAgICBlbC5zdHlsZS5zZXRQcm9wZXJ0eSgnbGVmdCcsIGRlbHRhU2l6ZSArICdweCcpO1xuICAgIH0pO1xuXG4gICAgbGV0IGhhbmRsZXIgPSBzY3JvbGxIYW5kbGVyLmJpbmQoZWwpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZXIpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNld2hlZWwnLCBoYW5kbGVyKTtcblxuICAgIGhhbmRsZXIoKTtcbn1cblxuZnVuY3Rpb24gc2Nyb2xsSGFuZGxlciAoZSkge1xuICAgIGxldCBtZSA9IHRoaXM7XG4gICAgbGV0IGRhdGEgPSBjYWNoZS5nZXQobWUpO1xuXG4gICAgbGV0IGN1clZhbHVlID0gZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcbiAgICBsZXQgdGhyZXNob2xkVmFsdWUgPSBkYXRhLnRocmVzaG9sZFZhbHVlO1xuICAgIGlmIChjdXJWYWx1ZSA+IHRocmVzaG9sZFZhbHVlKSB7XG4gICAgICAgIGlmICghZGF0YS5yZWFjaGVkVGhyZXNob2xkKSB7XG4gICAgICAgICAgICBkYXRhLnJlYWNoZWRUaHJlc2hvbGQgPSB0cnVlO1xuICAgICAgICAgICAgbWUuc3R5bGUuc2V0UHJvcGVydHkoJ3Bvc2l0aW9uJywgJ2ZpeGVkJyk7XG4gICAgICAgICAgICBtZS5zdHlsZS5zZXRQcm9wZXJ0eSgndG9wJywgLXRocmVzaG9sZFZhbHVlICsncHgnKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChkYXRhLnJlYWNoZWRUaHJlc2hvbGQpIHtcbiAgICAgICAgICAgIGRhdGEucmVhY2hlZFRocmVzaG9sZCA9IGZhbHNlO1xuICAgICAgICAgICAgbWUuc3R5bGUuc2V0UHJvcGVydHkoJ3Bvc2l0aW9uJywgJ3JlbGF0aXZlJyk7XG4gICAgICAgICAgICBtZS5zdHlsZS5zZXRQcm9wZXJ0eSgndG9wJywgJzAnKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGxvYWRcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaGVhZGVyL2luZGV4LmpzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2hlYWRlci9pbmRleC5jc3NcbiAqKiBtb2R1bGUgaWQgPSA4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgXyBmcm9tICcuLi91dGlsJztcblxuZnVuY3Rpb24gbG9hZCgpe1xuICAgIF8udG9BcnJheShcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ21haW4nKVxuICAgICkuZm9yRWFjaCh0cmFuc2Zvcm0pO1xufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm0oZWwpIHtcbiAgICBlbC5zdHlsZS5zZXRQcm9wZXJ0eSgndG9wJywgZWwub2Zmc2V0VG9wICsgJ3B4Jyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBsb2FkXG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL21haW4vaW5kZXguanNcbiAqKi8iLCJpbXBvcnQgJy4vaW5kZXguY3NzJztcblxuaW1wb3J0IF8gZnJvbSAnLi4vdXRpbCc7XG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZyc7XG5cbmxldCBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbmZ1bmN0aW9uIGxvYWQgKCkge1xuICAgIGlmIChfLnN1cHBvcnQudG91Y2gpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBfLnRvQXJyYXkoXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ0otYnV0dG9uJylcbiAgICApLmZvckVhY2godHJhbnNmb3JtKTtcbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtIChlbCkge1xuICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbicpO1xuICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICBjYW52YXMuc2V0QXR0cmlidXRlKCd3aWR0aCcsICcwJyk7XG4gICAgY2FudmFzLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgJzAnKTtcblxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBpbml0Q2FudmFzKTtcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgZW50ZXJIYW5kbGVyKTtcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgbGVhdmVIYW5kbGVyKTtcblxuICAgIGNhY2hlLnNldChlbCwge1xuICAgICAgICBjYW52YXMsXG4gICAgICAgIHJlY3Q6IG51bGxcbiAgICB9KTtcblxuICAgIGxldCBmaXJzdEVsID0gZWwuY2hpbGROb2Rlc1swXTtcbiAgICBlbC5pbnNlcnRCZWZvcmUoY2FudmFzLCBmaXJzdEVsKTtcbn1cblxuZnVuY3Rpb24gaW5pdENhbnZhcyAoKSB7XG4gICAgbGV0IG1lID0gdGhpcztcbiAgICBsZXQgZGF0YSA9IGNhY2hlLmdldChtZSk7XG5cbiAgICBsZXQgcmVjdCA9IG1lLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGRhdGEucmVjdCA9IHJlY3Q7XG5cbiAgICBsZXQgY2FudmFzID0gZGF0YS5jYW52YXM7XG4gICAgY2FudmFzLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCByZWN0LndpZHRoKTtcbiAgICBjYW52YXMuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCByZWN0LmhlaWdodCk7XG5cbiAgICBtZS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgaW5pdENhbnZhcyk7XG59XG5cbmZ1bmN0aW9uIGVudGVySGFuZGxlciAoZSkge1xuICAgIHBhaW50Q2lyY2xlLmNhbGwodGhpcywgZSwgJyM0NDQnKTtcbn1cblxuZnVuY3Rpb24gbGVhdmVIYW5kbGVyIChlKSB7XG4gICAgcGFpbnRDaXJjbGUuY2FsbCh0aGlzLCBlLCAnI2ZmZicpO1xufVxuXG5mdW5jdGlvbiBjYWxEaXN0YW5jZSAoe3g6IHgxLCB5OiB5MX0sIHgyLCB5Mikge1xuICAgIHJldHVybiBNYXRoLnNxcnQoXG4gICAgICAgIE1hdGgucG93KHgxIC0geDIsIDIpICtcbiAgICAgICAgTWF0aC5wb3coeTEgLSB5MiwgMilcbiAgICApO1xufVxuXG5mdW5jdGlvbiBjYWxSYWRpdXMocG9zLCB7d2lkdGgsIGhlaWdodH0pIHtcbiAgICByZXR1cm4gTWF0aC5tYXgoXG4gICAgICAgIGNhbERpc3RhbmNlKHBvcywgMCwgMCksXG4gICAgICAgIGNhbERpc3RhbmNlKHBvcywgMCwgaGVpZ2h0KSxcbiAgICAgICAgY2FsRGlzdGFuY2UocG9zLCB3aWR0aCwgMCksXG4gICAgICAgIGNhbERpc3RhbmNlKHBvcywgd2lkdGgsIGhlaWdodClcbiAgICApO1xufVxuXG5mdW5jdGlvbiBwYWludENpcmNsZSAoZSwgY29sb3IpIHtcbiAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgbGV0IHggPSBlLm9mZnNldFgtMTtcbiAgICBsZXQgeSA9IGUub2Zmc2V0WS0xO1xuXG4gICAgbGV0IHtjYW52YXMsIHJlY3R9ID0gY2FjaGUuZ2V0KG1lKTtcbiAgICBsZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbiAgICBsZXQgcmFkaXVzID0gY2FsUmFkaXVzKFxuICAgICAgICB7XG4gICAgICAgICAgICB4LFxuICAgICAgICAgICAgeVxuICAgICAgICB9LFxuICAgICAgICByZWN0XG4gICAgKTtcbiAgICBsZXQge2FuaW1hdGlvbkR1cmF0aW9ufSA9IGNvbmZpZztcblxuICAgIGxldCBzdGFydFRpbWUgPSBudWxsO1xuICAgIGZ1bmN0aW9uIHBhaW50ICh0aW1lc3RhbXApIHtcbiAgICAgICAgaWYgKHN0YXJ0VGltZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgc3RhcnRUaW1lID0gdGltZXN0YW1wO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHByb2dyZXNzID0gdGltZXN0YW1wIC0gc3RhcnRUaW1lO1xuXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHguYXJjKFxuICAgICAgICAgICAgeCxcbiAgICAgICAgICAgIHksXG4gICAgICAgICAgICByYWRpdXMgKiBwcm9ncmVzcyAvIGFuaW1hdGlvbkR1cmF0aW9uLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDIgKiBNYXRoLlBJXG4gICAgICAgICk7XG4gICAgICAgIGN0eC5maWxsKCk7XG5cbiAgICAgICAgaWYgKHByb2dyZXNzIDwgYW5pbWF0aW9uRHVyYXRpb24pIHtcbiAgICAgICAgICAgIF8uYW5pbWF0ZShwYWludCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfLmFuaW1hdGUocGFpbnQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbG9hZFxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9idXR0b24vaW5kZXguanNcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYnV0dG9uL2luZGV4LmNzc1xuICoqIG1vZHVsZSBpZCA9IDExXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgYW5pbWF0aW9uRHVyYXRpb246IDIwMCAvL21zXG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbmZpZy5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=