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
	        extent: null
	    });
	
	    var firstEl = el.childNodes[0];
	    el.insertBefore(canvas, firstEl);
	}
	
	function initCanvas() {
	    var me = this;
	    var data = cache.get(me);
	
	    var rect = me.getBoundingClientRect();
	    var extent = {
	        width: Math.ceil(rect.width),
	        height: Math.ceil(rect.height)
	    };
	    data.extent = rect;
	
	    var canvas = data.canvas;
	    canvas.setAttribute('width', extent.width);
	    canvas.setAttribute('height', extent.height);
	
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
	
	    return Math.ceil(Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2)));
	}
	
	function calRadius(pos, _ref2) {
	    var width = _ref2.width;
	    var height = _ref2.height;
	
	    return Math.ceil(Math.max(calDistance(pos, 0, 0), calDistance(pos, 0, height), calDistance(pos, width, 0), calDistance(pos, width, height)));
	}
	
	function paintCircle(e, color) {
	    var me = this;
	
	    var x = e.offsetX - 1;
	    var y = e.offsetY - 1;
	
	    var _cache$get = cache.get(me);
	
	    var canvas = _cache$get.canvas;
	    var extent = _cache$get.extent;
	
	    var ctx = canvas.getContext('2d');
	
	    var radius = calRadius({
	        x: x,
	        y: y
	    }, extent);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNGU2MmIzODM3MmI5MTdmNWJjOTUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvbGFuZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9hbmltYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvZW52LmpzIiwid2VicGFjazovLy8uL3NyYy9oZWFkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlYWRlci9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2J1dHRvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYnV0dG9uL2luZGV4LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnLmpzIl0sIm5hbWVzIjpbInJlYWR5IiwibG9hZCIsIl8iLCJleHRlbmQiLCJ0b0FycmF5IiwibGlrZUFyciIsImkiLCJpaSIsImxlbmd0aCIsImFyciIsIkFycmF5IiwidGFyZ2V0IiwicHJvdG90eXBlIiwic2xpY2UiLCJjYWxsIiwiYXJndW1lbnRzIiwiZm9yRWFjaCIsInNvdXJjZSIsIk9iamVjdCIsImtleXMiLCJrZXkiLCJoYXNPd25Qcm9wZXJ0eSIsImFuaW1hdGUiLCJmdW5jIiwiZ2xvYmFsIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwic2V0VGltZW91dCIsInRpbWVzdGFtcCIsIkRhdGUiLCJnZXRUaW1lIiwiaGFuZGxlciIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdXBwb3J0IiwidG91Y2giLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImNhY2hlIiwiV2Vha01hcCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwidHJhbnNmb3JtIiwiZWwiLCJoMUVsIiwicXVlcnlTZWxlY3RvciIsInNldCIsInRocmVzaG9sZFZhbHVlIiwib2Zmc2V0VG9wIiwib2Zmc2V0SGVpZ2h0IiwicmVhY2hlZFRocmVzaG9sZCIsImluZm9FbCIsInBFbCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpY29uRWwiLCJpY29uU2l6ZSIsInN0eWxlIiwic2V0UHJvcGVydHkiLCJ0cmFja1NpemUiLCJNYXRoIiwic2luIiwiUEkiLCJkZWx0YVNpemUiLCJzY3JvbGxIYW5kbGVyIiwiYmluZCIsImUiLCJtZSIsImRhdGEiLCJnZXQiLCJjdXJWYWx1ZSIsImJvZHkiLCJzY3JvbGxUb3AiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiY2xhc3NMaXN0IiwiYWRkIiwiY2FudmFzIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImluaXRDYW52YXMiLCJlbnRlckhhbmRsZXIiLCJsZWF2ZUhhbmRsZXIiLCJleHRlbnQiLCJmaXJzdEVsIiwiY2hpbGROb2RlcyIsImluc2VydEJlZm9yZSIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ3aWR0aCIsImNlaWwiLCJoZWlnaHQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicGFpbnRDaXJjbGUiLCJjYWxEaXN0YW5jZSIsIngyIiwieTIiLCJ4MSIsIngiLCJ5MSIsInkiLCJzcXJ0IiwicG93IiwiY2FsUmFkaXVzIiwicG9zIiwibWF4IiwiY29sb3IiLCJvZmZzZXRYIiwib2Zmc2V0WSIsImN0eCIsImdldENvbnRleHQiLCJyYWRpdXMiLCJhbmltYXRpb25EdXJhdGlvbiIsInN0YXJ0VGltZSIsInBhaW50IiwicHJvZ3Jlc3MiLCJmaWxsU3R5bGUiLCJiZWdpblBhdGgiLCJhcmMiLCJmaWxsIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7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LFdBQVdILGlCQUFmLEVBQWtDO0FBQzlCLDRCQUFFdEYsT0FBRixDQUFVd0YsS0FBVjtBQUNIO0FBQ0o7O0FBRUQsb0JBQUV4RixPQUFGLENBQVV3RixLQUFWO0FBQ0g7O21CQUVjO0FBQ1g3RztBQURXLEU7Ozs7OztBQzlIZiwwQzs7Ozs7Ozs7Ozs7bUJDQWU7QUFDWDJHLHdCQUFtQixHQURSLENBQ1k7QUFEWixFIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgNGU2MmIzODM3MmI5MTdmNWJjOTVcbiAqKi8iLCJpbXBvcnQgJy4vaW5kZXguY3NzJztcblxuaW1wb3J0IF8gZnJvbSAnLi91dGlsJztcblxuaW1wb3J0IGhlYWRlciBmcm9tICcuL2hlYWRlcic7XG5pbXBvcnQgbWFpbiBmcm9tICcuL21haW4nO1xuaW1wb3J0IGJ1dHRvbiBmcm9tICcuL2J1dHRvbic7XG5cbl8ucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgIG1haW4ubG9hZCgpO1xuICAgIGhlYWRlci5sb2FkKCk7XG4gICAgYnV0dG9uLmxvYWQoKTtcbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2luZGV4LmpzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2luZGV4LmNzc1xuICoqIG1vZHVsZSBpZCA9IDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBsYW5nIGZyb20gJy4vbGFuZyc7XG5pbXBvcnQgYW5pbWF0aW9uIGZyb20gJy4vYW5pbWF0aW9uJztcbmltcG9ydCBlbnYgZnJvbSAnLi9lbnYnO1xuXG5sZXQgXyA9IHt9O1xuXG5sYW5nLmV4dGVuZChcbiAgICBfLFxuICAgIGxhbmcsIGFuaW1hdGlvbiwgZW52XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBfO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3V0aWwvaW5kZXguanNcbiAqKi8iLCJmdW5jdGlvbiB0b0FycmF5KGxpa2VBcnIpIHtcbiAgICBsZXQgaSxpaTtcbiAgICBpID0gMDtcbiAgICBpaSA9IGxpa2VBcnIubGVuZ3RoO1xuICAgIGxldCBhcnIgPSBuZXcgQXJyYXkoaWkpO1xuICAgIHdoaWxlIChpIDwgaWkpIHtcbiAgICAgICAgYXJyW2ldID0gbGlrZUFycltpXTtcbiAgICAgICAgaSsrO1xuICAgIH1cbiAgICByZXR1cm4gYXJyO1xufVxuXG5mdW5jdGlvbiBleHRlbmQgKHRhcmdldCkge1xuICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKFxuICAgICAgICBhcmd1bWVudHMsXG4gICAgICAgIDFcbiAgICApLmZvckVhY2goXG4gICAgICAgIGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHNvdXJjZSlcbiAgICAgICAgICAgICAgICAuZm9yRWFjaChcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0YXJnZXQuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgKTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgdG9BcnJheSxcbiAgICBleHRlbmRcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdXRpbC9sYW5nLmpzXG4gKiovIiwiZnVuY3Rpb24gYW5pbWF0ZShmdW5jKSB7XG4gICAgaWYoZ2xvYmFsLnJlcXVlc3RBbmltYXRpb25GcmFtZSkge1xuICAgICAgICBnbG9iYWwucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBsZXQgdGltZXN0YW1wID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICBmdW5jKHRpbWVzdGFtcCk7XG4gICAgICAgIH0sIDE2KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBhbmltYXRlXG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3V0aWwvYW5pbWF0aW9uLmpzXG4gKiovIiwiZnVuY3Rpb24gcmVhZHkgKGhhbmRsZXIpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGhhbmRsZXIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcmVhZHksXG4gICAgc3VwcG9ydDoge1xuICAgICAgICB0b3VjaDogJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50XG4gICAgfVxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy91dGlsL2Vudi5qc1xuICoqLyIsImltcG9ydCAnLi9pbmRleC5jc3MnO1xuXG5pbXBvcnQgXyBmcm9tICcuLi91dGlsJztcbmxldCBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbmZ1bmN0aW9uIGxvYWQoKXtcbiAgICBfLnRvQXJyYXkoXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkZXInKVxuICAgICkuZm9yRWFjaCggdHJhbnNmb3JtICk7XG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybSAoZWwpIHtcbiAgICBsZXQgaDFFbCA9IGVsLnF1ZXJ5U2VsZWN0b3IoJ2gxJyk7XG4gICAgY2FjaGUuc2V0KFxuICAgICAgICBlbCxcbiAgICAgICAge1xuICAgICAgICAgICAgdGhyZXNob2xkVmFsdWU6IGVsLm9mZnNldFRvcCArIGgxRWwub2Zmc2V0VG9wICsgaDFFbC5vZmZzZXRIZWlnaHQgKyAxMCxcbiAgICAgICAgICAgIHJlYWNoZWRUaHJlc2hvbGQ6IGZhbHNlXG4gICAgICAgIH1cbiAgICApO1xuXG4gICAgbGV0IGluZm9FbCA9IGVsLnF1ZXJ5U2VsZWN0b3IoJ2RpdicpO1xuICAgIGxldCBwRWwgPSBpbmZvRWwucXVlcnlTZWxlY3RvckFsbCgncCcpWzFdO1xuICAgIGxldCBpY29uRWwgPSBpbmZvRWwucXVlcnlTZWxlY3RvcignLmljb24nKTtcbiAgICBsZXQgaWNvblNpemUgPSBwRWwub2Zmc2V0VG9wICsgcEVsLm9mZnNldEhlaWdodDtcblxuICAgIGljb25FbC5zdHlsZS5zZXRQcm9wZXJ0eSgnd2lkdGgnLCBpY29uU2l6ZSArICdweCcpO1xuICAgIGljb25FbC5zdHlsZS5zZXRQcm9wZXJ0eSgnaGVpZ2h0JywgaWNvblNpemUgKyAncHgnKTtcblxuICAgIGxldCB0cmFja1NpemUgPSBNYXRoLnNpbihNYXRoLlBJIC8gNCkgKiBpY29uU2l6ZTtcbiAgICBsZXQgZGVsdGFTaXplID0gKGljb25TaXplIC0gdHJhY2tTaXplKSAvIDI7XG5cbiAgICBfLnRvQXJyYXkoXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50cmFjaycpXG4gICAgKS5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICBlbC5zdHlsZS5zZXRQcm9wZXJ0eSgnd2lkdGgnLCB0cmFja1NpemUgKyAncHgnKTtcbiAgICAgICAgZWwuc3R5bGUuc2V0UHJvcGVydHkoJ2hlaWdodCcsIHRyYWNrU2l6ZSArICdweCcpO1xuICAgICAgICBlbC5zdHlsZS5zZXRQcm9wZXJ0eSgndG9wJywgZGVsdGFTaXplICsgJ3B4Jyk7XG4gICAgICAgIGVsLnN0eWxlLnNldFByb3BlcnR5KCdsZWZ0JywgZGVsdGFTaXplICsgJ3B4Jyk7XG4gICAgfSk7XG5cbiAgICBsZXQgaGFuZGxlciA9IHNjcm9sbEhhbmRsZXIuYmluZChlbCk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlcik7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V3aGVlbCcsIGhhbmRsZXIpO1xuXG4gICAgaGFuZGxlcigpO1xufVxuXG5mdW5jdGlvbiBzY3JvbGxIYW5kbGVyIChlKSB7XG4gICAgbGV0IG1lID0gdGhpcztcbiAgICBsZXQgZGF0YSA9IGNhY2hlLmdldChtZSk7XG5cbiAgICBsZXQgY3VyVmFsdWUgPSBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgIGxldCB0aHJlc2hvbGRWYWx1ZSA9IGRhdGEudGhyZXNob2xkVmFsdWU7XG4gICAgaWYgKGN1clZhbHVlID4gdGhyZXNob2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKCFkYXRhLnJlYWNoZWRUaHJlc2hvbGQpIHtcbiAgICAgICAgICAgIGRhdGEucmVhY2hlZFRocmVzaG9sZCA9IHRydWU7XG4gICAgICAgICAgICBtZS5zdHlsZS5zZXRQcm9wZXJ0eSgncG9zaXRpb24nLCAnZml4ZWQnKTtcbiAgICAgICAgICAgIG1lLnN0eWxlLnNldFByb3BlcnR5KCd0b3AnLCAtdGhyZXNob2xkVmFsdWUgKydweCcpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGRhdGEucmVhY2hlZFRocmVzaG9sZCkge1xuICAgICAgICAgICAgZGF0YS5yZWFjaGVkVGhyZXNob2xkID0gZmFsc2U7XG4gICAgICAgICAgICBtZS5zdHlsZS5zZXRQcm9wZXJ0eSgncG9zaXRpb24nLCAncmVsYXRpdmUnKTtcbiAgICAgICAgICAgIG1lLnN0eWxlLnNldFByb3BlcnR5KCd0b3AnLCAnMCcpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbG9hZFxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9oZWFkZXIvaW5kZXguanNcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaGVhZGVyL2luZGV4LmNzc1xuICoqIG1vZHVsZSBpZCA9IDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBfIGZyb20gJy4uL3V0aWwnO1xuXG5mdW5jdGlvbiBsb2FkKCl7XG4gICAgXy50b0FycmF5KFxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbWFpbicpXG4gICAgKS5mb3JFYWNoKHRyYW5zZm9ybSk7XG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybShlbCkge1xuICAgIGVsLnN0eWxlLnNldFByb3BlcnR5KCd0b3AnLCBlbC5vZmZzZXRUb3AgKyAncHgnKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGxvYWRcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvbWFpbi9pbmRleC5qc1xuICoqLyIsImltcG9ydCAnLi9pbmRleC5jc3MnO1xuXG5pbXBvcnQgXyBmcm9tICcuLi91dGlsJztcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJztcblxubGV0IGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuZnVuY3Rpb24gbG9hZCAoKSB7XG4gICAgaWYgKF8uc3VwcG9ydC50b3VjaCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIF8udG9BcnJheShcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnSi1idXR0b24nKVxuICAgICkuZm9yRWFjaCh0cmFuc2Zvcm0pO1xufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm0gKGVsKSB7XG4gICAgZWwuY2xhc3NMaXN0LmFkZCgnYnV0dG9uJyk7XG4gICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIGNhbnZhcy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgJzAnKTtcbiAgICBjYW52YXMuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCAnMCcpO1xuXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIGluaXRDYW52YXMpO1xuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBlbnRlckhhbmRsZXIpO1xuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBsZWF2ZUhhbmRsZXIpO1xuXG4gICAgY2FjaGUuc2V0KGVsLCB7XG4gICAgICAgIGNhbnZhcyxcbiAgICAgICAgZXh0ZW50OiBudWxsXG4gICAgfSk7XG5cbiAgICBsZXQgZmlyc3RFbCA9IGVsLmNoaWxkTm9kZXNbMF07XG4gICAgZWwuaW5zZXJ0QmVmb3JlKGNhbnZhcywgZmlyc3RFbCk7XG59XG5cbmZ1bmN0aW9uIGluaXRDYW52YXMgKCkge1xuICAgIGxldCBtZSA9IHRoaXM7XG4gICAgbGV0IGRhdGEgPSBjYWNoZS5nZXQobWUpO1xuXG4gICAgbGV0IHJlY3QgPSBtZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBsZXQgZXh0ZW50ID0ge1xuICAgICAgICB3aWR0aDogTWF0aC5jZWlsKHJlY3Qud2lkdGgpLFxuICAgICAgICBoZWlnaHQ6IE1hdGguY2VpbChyZWN0LmhlaWdodClcbiAgICB9O1xuICAgIGRhdGEuZXh0ZW50ID0gcmVjdDtcblxuICAgIGxldCBjYW52YXMgPSBkYXRhLmNhbnZhcztcbiAgICBjYW52YXMuc2V0QXR0cmlidXRlKCd3aWR0aCcsIGV4dGVudC53aWR0aCk7XG4gICAgY2FudmFzLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgZXh0ZW50LmhlaWdodCk7XG5cbiAgICBtZS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgaW5pdENhbnZhcyk7XG59XG5cbmZ1bmN0aW9uIGVudGVySGFuZGxlciAoZSkge1xuICAgIHBhaW50Q2lyY2xlLmNhbGwodGhpcywgZSwgJyM0NDQnKTtcbn1cblxuZnVuY3Rpb24gbGVhdmVIYW5kbGVyIChlKSB7XG4gICAgcGFpbnRDaXJjbGUuY2FsbCh0aGlzLCBlLCAnI2ZmZicpO1xufVxuXG5mdW5jdGlvbiBjYWxEaXN0YW5jZSAoe3g6IHgxLCB5OiB5MX0sIHgyLCB5Mikge1xuICAgIHJldHVybiBNYXRoLmNlaWwoXG4gICAgICAgIE1hdGguc3FydChcbiAgICAgICAgICAgIE1hdGgucG93KHgxIC0geDIsIDIpICtcbiAgICAgICAgICAgIE1hdGgucG93KHkxIC0geTIsIDIpXG4gICAgICAgIClcbiAgICApO1xufVxuXG5mdW5jdGlvbiBjYWxSYWRpdXMocG9zLCB7d2lkdGgsIGhlaWdodH0pIHtcbiAgICByZXR1cm4gTWF0aC5jZWlsKFxuICAgICAgICBNYXRoLm1heChcbiAgICAgICAgICAgIGNhbERpc3RhbmNlKHBvcywgMCwgMCksXG4gICAgICAgICAgICBjYWxEaXN0YW5jZShwb3MsIDAsIGhlaWdodCksXG4gICAgICAgICAgICBjYWxEaXN0YW5jZShwb3MsIHdpZHRoLCAwKSxcbiAgICAgICAgICAgIGNhbERpc3RhbmNlKHBvcywgd2lkdGgsIGhlaWdodClcbiAgICAgICAgKVxuICAgICk7XG59XG5cbmZ1bmN0aW9uIHBhaW50Q2lyY2xlIChlLCBjb2xvcikge1xuICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICBsZXQgeCA9IGUub2Zmc2V0WCAtIDE7XG4gICAgbGV0IHkgPSBlLm9mZnNldFkgLSAxO1xuXG4gICAgbGV0IHtjYW52YXMsIGV4dGVudH0gPSBjYWNoZS5nZXQobWUpO1xuICAgIGxldCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAgIGxldCByYWRpdXMgPSBjYWxSYWRpdXMoXG4gICAgICAgIHtcbiAgICAgICAgICAgIHgsXG4gICAgICAgICAgICB5XG4gICAgICAgIH0sXG4gICAgICAgIGV4dGVudFxuICAgICk7XG4gICAgbGV0IHthbmltYXRpb25EdXJhdGlvbn0gPSBjb25maWc7XG5cbiAgICBsZXQgc3RhcnRUaW1lID0gbnVsbDtcbiAgICBmdW5jdGlvbiBwYWludCAodGltZXN0YW1wKSB7XG4gICAgICAgIGlmIChzdGFydFRpbWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHN0YXJ0VGltZSA9IHRpbWVzdGFtcDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBwcm9ncmVzcyA9IHRpbWVzdGFtcCAtIHN0YXJ0VGltZTtcblxuICAgICAgICBjdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmFyYyhcbiAgICAgICAgICAgIHgsXG4gICAgICAgICAgICB5LFxuICAgICAgICAgICAgcmFkaXVzICogcHJvZ3Jlc3MgLyBhbmltYXRpb25EdXJhdGlvbixcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAyICogTWF0aC5QSVxuICAgICAgICApO1xuICAgICAgICBjdHguZmlsbCgpO1xuXG4gICAgICAgIGlmIChwcm9ncmVzcyA8IGFuaW1hdGlvbkR1cmF0aW9uKSB7XG4gICAgICAgICAgICBfLmFuaW1hdGUocGFpbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgXy5hbmltYXRlKHBhaW50KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGxvYWRcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYnV0dG9uL2luZGV4LmpzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2J1dHRvbi9pbmRleC5jc3NcbiAqKiBtb2R1bGUgaWQgPSAxMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIGFuaW1hdGlvbkR1cmF0aW9uOiAyMDAgLy9tc1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb25maWcuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9