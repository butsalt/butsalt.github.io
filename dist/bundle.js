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
	    paintCircle.call(this, e, '#000');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTUxNmQ5MzFiNzQyNWQ0ZjExOTAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvbGFuZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9hbmltYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvZW52LmpzIiwid2VicGFjazovLy8uL3NyYy9oZWFkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlYWRlci9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2J1dHRvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYnV0dG9uL2luZGV4LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnLmpzIl0sIm5hbWVzIjpbInJlYWR5IiwibG9hZCIsIl8iLCJleHRlbmQiLCJ0b0FycmF5IiwibGlrZUFyciIsImkiLCJpaSIsImxlbmd0aCIsImFyciIsIkFycmF5IiwidGFyZ2V0IiwicHJvdG90eXBlIiwic2xpY2UiLCJjYWxsIiwiYXJndW1lbnRzIiwiZm9yRWFjaCIsInNvdXJjZSIsIk9iamVjdCIsImtleXMiLCJrZXkiLCJoYXNPd25Qcm9wZXJ0eSIsImFuaW1hdGUiLCJmdW5jIiwiZ2xvYmFsIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwic2V0VGltZW91dCIsInRpbWVzdGFtcCIsIkRhdGUiLCJnZXRUaW1lIiwiaGFuZGxlciIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdXBwb3J0IiwidG91Y2giLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImNhY2hlIiwiV2Vha01hcCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwidHJhbnNmb3JtIiwiZWwiLCJoMUVsIiwicXVlcnlTZWxlY3RvciIsInNldCIsInRocmVzaG9sZFZhbHVlIiwib2Zmc2V0VG9wIiwib2Zmc2V0SGVpZ2h0IiwicmVhY2hlZFRocmVzaG9sZCIsImluZm9FbCIsInBFbCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzdHlsZSIsInNldFByb3BlcnR5IiwidHJhY2tTaXplIiwiZGVsdGFTaXplIiwic2Nyb2xsSGFuZGxlciIsImJpbmQiLCJlIiwibWUiLCJkYXRhIiwiZ2V0IiwiY3VyVmFsdWUiLCJib2R5Iiwic2Nyb2xsVG9wIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImNsYXNzTGlzdCIsImFkZCIsImNhbnZhcyIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJpbml0Q2FudmFzIiwiZW50ZXJIYW5kbGVyIiwibGVhdmVIYW5kbGVyIiwiZXh0ZW50IiwiZmlyc3RFbCIsImNoaWxkTm9kZXMiLCJpbnNlcnRCZWZvcmUiLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2lkdGgiLCJNYXRoIiwiY2VpbCIsImhlaWdodCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJwYWludENpcmNsZSIsImNhbERpc3RhbmNlIiwieDIiLCJ5MiIsIngxIiwieCIsInkxIiwieSIsInNxcnQiLCJwb3ciLCJjYWxSYWRpdXMiLCJwb3MiLCJtYXgiLCJjb2xvciIsIm9mZnNldFgiLCJvZmZzZXRZIiwiY3R4IiwiZ2V0Q29udGV4dCIsInJhZGl1cyIsImFuaW1hdGlvbkR1cmF0aW9uIiwic3RhcnRUaW1lIiwicGFpbnQiLCJwcm9ncmVzcyIsImZpbGxTdHlsZSIsImJlZ2luUGF0aCIsImFyYyIsIlBJIiwiZmlsbCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFF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dkJBLE1BTnVCO0FBQUEsU0FNZk0sTUFOZSxjQU1mQSxNQU5lOztBQU81QixTQUFJMkIsTUFBTWpDLE9BQU9rQyxVQUFQLENBQWtCLElBQWxCLENBQVY7O0FBRUEsU0FBSUMsU0FBU1IsVUFDVDtBQUNJTCxhQURKO0FBRUlFO0FBRkosTUFEUyxFQUtUbEIsTUFMUyxDQUFiO0FBVDRCLFNBZ0J2QjhCLGlCQWhCdUIsb0JBZ0J2QkEsaUJBaEJ1Qjs7O0FBa0I1QixTQUFJQyxZQUFZLElBQWhCO0FBQ0EsY0FBU0MsS0FBVCxDQUFnQi9FLFNBQWhCLEVBQTJCO0FBQ3ZCLGFBQUk4RSxjQUFjLElBQWxCLEVBQXdCO0FBQ3BCQSx5QkFBWTlFLFNBQVo7QUFDSDs7QUFFRCxhQUFJZ0YsV0FBV2hGLFlBQVk4RSxTQUEzQjs7QUFFQUosYUFBSU8sU0FBSixHQUFnQlYsS0FBaEI7QUFDQUcsYUFBSVEsU0FBSjtBQUNBUixhQUFJUyxHQUFKLENBQ0lwQixDQURKLEVBRUlFLENBRkosRUFHSVcsU0FBU0ksUUFBVCxHQUFvQkgsaUJBSHhCLEVBSUksQ0FKSixFQUtJLElBQUl2QixLQUFLOEIsRUFMYjtBQU9BVixhQUFJVyxJQUFKOztBQUVBLGFBQUlMLFdBQVdILGlCQUFmLEVBQWtDO0FBQzlCLDRCQUFFbEYsT0FBRixDQUFVb0YsS0FBVjtBQUNIO0FBQ0o7O0FBRUQsb0JBQUVwRixPQUFGLENBQVVvRixLQUFWO0FBQ0g7O21CQUVjO0FBQ1h6RztBQURXLEU7Ozs7OztBQzlIZiwwQzs7Ozs7Ozs7Ozs7bUJDQWU7QUFDWHVHLHdCQUFtQixHQURSLENBQ1k7QUFEWixFIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgMTUxNmQ5MzFiNzQyNWQ0ZjExOTBcbiAqKi8iLCJpbXBvcnQgJy4vaW5kZXguY3NzJztcblxuaW1wb3J0IF8gZnJvbSAnLi91dGlsJztcblxuaW1wb3J0IGhlYWRlciBmcm9tICcuL2hlYWRlcic7XG5pbXBvcnQgbWFpbiBmcm9tICcuL21haW4nO1xuaW1wb3J0IGJ1dHRvbiBmcm9tICcuL2J1dHRvbic7XG5cbl8ucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgIG1haW4ubG9hZCgpO1xuICAgIGhlYWRlci5sb2FkKCk7XG4gICAgYnV0dG9uLmxvYWQoKTtcbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2luZGV4LmpzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2luZGV4LmNzc1xuICoqIG1vZHVsZSBpZCA9IDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBsYW5nIGZyb20gJy4vbGFuZyc7XG5pbXBvcnQgYW5pbWF0aW9uIGZyb20gJy4vYW5pbWF0aW9uJztcbmltcG9ydCBlbnYgZnJvbSAnLi9lbnYnO1xuXG5sZXQgXyA9IHt9O1xuXG5sYW5nLmV4dGVuZChcbiAgICBfLFxuICAgIGxhbmcsIGFuaW1hdGlvbiwgZW52XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBfO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3V0aWwvaW5kZXguanNcbiAqKi8iLCJmdW5jdGlvbiB0b0FycmF5KGxpa2VBcnIpIHtcbiAgICBsZXQgaSxpaTtcbiAgICBpID0gMDtcbiAgICBpaSA9IGxpa2VBcnIubGVuZ3RoO1xuICAgIGxldCBhcnIgPSBuZXcgQXJyYXkoaWkpO1xuICAgIHdoaWxlIChpIDwgaWkpIHtcbiAgICAgICAgYXJyW2ldID0gbGlrZUFycltpXTtcbiAgICAgICAgaSsrO1xuICAgIH1cbiAgICByZXR1cm4gYXJyO1xufVxuXG5mdW5jdGlvbiBleHRlbmQgKHRhcmdldCkge1xuICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKFxuICAgICAgICBhcmd1bWVudHMsXG4gICAgICAgIDFcbiAgICApLmZvckVhY2goXG4gICAgICAgIGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHNvdXJjZSlcbiAgICAgICAgICAgICAgICAuZm9yRWFjaChcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0YXJnZXQuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgKTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgdG9BcnJheSxcbiAgICBleHRlbmRcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdXRpbC9sYW5nLmpzXG4gKiovIiwiZnVuY3Rpb24gYW5pbWF0ZShmdW5jKSB7XG4gICAgaWYoZ2xvYmFsLnJlcXVlc3RBbmltYXRpb25GcmFtZSkge1xuICAgICAgICBnbG9iYWwucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBsZXQgdGltZXN0YW1wID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICBmdW5jKHRpbWVzdGFtcCk7XG4gICAgICAgIH0sIDE2KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBhbmltYXRlXG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3V0aWwvYW5pbWF0aW9uLmpzXG4gKiovIiwiZnVuY3Rpb24gcmVhZHkgKGhhbmRsZXIpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGhhbmRsZXIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcmVhZHksXG4gICAgc3VwcG9ydDoge1xuICAgICAgICB0b3VjaDogJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50XG4gICAgfVxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy91dGlsL2Vudi5qc1xuICoqLyIsImltcG9ydCAnLi9pbmRleC5jc3MnO1xuXG5pbXBvcnQgXyBmcm9tICcuLi91dGlsJztcbmxldCBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbmZ1bmN0aW9uIGxvYWQoKXtcbiAgICBfLnRvQXJyYXkoXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkZXInKVxuICAgICkuZm9yRWFjaCggdHJhbnNmb3JtICk7XG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybSAoZWwpIHtcbiAgICBsZXQgaDFFbCA9IGVsLnF1ZXJ5U2VsZWN0b3IoJ2gxJyk7XG4gICAgY2FjaGUuc2V0KFxuICAgICAgICBlbCxcbiAgICAgICAge1xuICAgICAgICAgICAgdGhyZXNob2xkVmFsdWU6IGVsLm9mZnNldFRvcCArIGgxRWwub2Zmc2V0VG9wICsgaDFFbC5vZmZzZXRIZWlnaHQgKyAxMCxcbiAgICAgICAgICAgIHJlYWNoZWRUaHJlc2hvbGQ6IGZhbHNlXG4gICAgICAgIH1cbiAgICApO1xuXG4gICAgbGV0IGluZm9FbCA9IGVsLnF1ZXJ5U2VsZWN0b3IoJ2RpdicpO1xuICAgIGxldCBwRWwgPSBpbmZvRWwucXVlcnlTZWxlY3RvckFsbCgncCcpWzFdO1xuXG4gICAgXy50b0FycmF5KFxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudHJhY2snKVxuICAgICkuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgZWwuc3R5bGUuc2V0UHJvcGVydHkoJ3dpZHRoJywgdHJhY2tTaXplICsgJ3B4Jyk7XG4gICAgICAgIGVsLnN0eWxlLnNldFByb3BlcnR5KCdoZWlnaHQnLCB0cmFja1NpemUgKyAncHgnKTtcbiAgICAgICAgZWwuc3R5bGUuc2V0UHJvcGVydHkoJ3RvcCcsIGRlbHRhU2l6ZSArICdweCcpO1xuICAgICAgICBlbC5zdHlsZS5zZXRQcm9wZXJ0eSgnbGVmdCcsIGRlbHRhU2l6ZSArICdweCcpO1xuICAgIH0pO1xuXG4gICAgbGV0IGhhbmRsZXIgPSBzY3JvbGxIYW5kbGVyLmJpbmQoZWwpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZXIpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNld2hlZWwnLCBoYW5kbGVyKTtcblxuICAgIGhhbmRsZXIoKTtcbn1cblxuZnVuY3Rpb24gc2Nyb2xsSGFuZGxlciAoZSkge1xuICAgIGxldCBtZSA9IHRoaXM7XG4gICAgbGV0IGRhdGEgPSBjYWNoZS5nZXQobWUpO1xuXG4gICAgbGV0IGN1clZhbHVlID0gZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcbiAgICBsZXQgdGhyZXNob2xkVmFsdWUgPSBkYXRhLnRocmVzaG9sZFZhbHVlO1xuICAgIGlmIChjdXJWYWx1ZSA+IHRocmVzaG9sZFZhbHVlKSB7XG4gICAgICAgIGlmICghZGF0YS5yZWFjaGVkVGhyZXNob2xkKSB7XG4gICAgICAgICAgICBkYXRhLnJlYWNoZWRUaHJlc2hvbGQgPSB0cnVlO1xuICAgICAgICAgICAgbWUuc3R5bGUuc2V0UHJvcGVydHkoJ3Bvc2l0aW9uJywgJ2ZpeGVkJyk7XG4gICAgICAgICAgICBtZS5zdHlsZS5zZXRQcm9wZXJ0eSgndG9wJywgLXRocmVzaG9sZFZhbHVlICsncHgnKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChkYXRhLnJlYWNoZWRUaHJlc2hvbGQpIHtcbiAgICAgICAgICAgIGRhdGEucmVhY2hlZFRocmVzaG9sZCA9IGZhbHNlO1xuICAgICAgICAgICAgbWUuc3R5bGUuc2V0UHJvcGVydHkoJ3Bvc2l0aW9uJywgJ3JlbGF0aXZlJyk7XG4gICAgICAgICAgICBtZS5zdHlsZS5zZXRQcm9wZXJ0eSgndG9wJywgJzAnKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGxvYWRcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaGVhZGVyL2luZGV4LmpzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2hlYWRlci9pbmRleC5jc3NcbiAqKiBtb2R1bGUgaWQgPSA4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgXyBmcm9tICcuLi91dGlsJztcblxuZnVuY3Rpb24gbG9hZCgpe1xuICAgIF8udG9BcnJheShcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ21haW4nKVxuICAgICkuZm9yRWFjaCh0cmFuc2Zvcm0pO1xufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm0oZWwpIHtcbiAgICBlbC5zdHlsZS5zZXRQcm9wZXJ0eSgndG9wJywgZWwub2Zmc2V0VG9wICsgJ3B4Jyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBsb2FkXG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL21haW4vaW5kZXguanNcbiAqKi8iLCJpbXBvcnQgJy4vaW5kZXguY3NzJztcblxuaW1wb3J0IF8gZnJvbSAnLi4vdXRpbCc7XG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZyc7XG5cbmxldCBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbmZ1bmN0aW9uIGxvYWQgKCkge1xuICAgIGlmIChfLnN1cHBvcnQudG91Y2gpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBfLnRvQXJyYXkoXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ0otYnV0dG9uJylcbiAgICApLmZvckVhY2godHJhbnNmb3JtKTtcbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtIChlbCkge1xuICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbicpO1xuICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICBjYW52YXMuc2V0QXR0cmlidXRlKCd3aWR0aCcsICcwJyk7XG4gICAgY2FudmFzLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgJzAnKTtcblxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBpbml0Q2FudmFzKTtcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgZW50ZXJIYW5kbGVyKTtcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgbGVhdmVIYW5kbGVyKTtcblxuICAgIGNhY2hlLnNldChlbCwge1xuICAgICAgICBjYW52YXMsXG4gICAgICAgIGV4dGVudDogbnVsbFxuICAgIH0pO1xuXG4gICAgbGV0IGZpcnN0RWwgPSBlbC5jaGlsZE5vZGVzWzBdO1xuICAgIGVsLmluc2VydEJlZm9yZShjYW52YXMsIGZpcnN0RWwpO1xufVxuXG5mdW5jdGlvbiBpbml0Q2FudmFzICgpIHtcbiAgICBsZXQgbWUgPSB0aGlzO1xuICAgIGxldCBkYXRhID0gY2FjaGUuZ2V0KG1lKTtcblxuICAgIGxldCByZWN0ID0gbWUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgbGV0IGV4dGVudCA9IHtcbiAgICAgICAgd2lkdGg6IE1hdGguY2VpbChyZWN0LndpZHRoKSxcbiAgICAgICAgaGVpZ2h0OiBNYXRoLmNlaWwocmVjdC5oZWlnaHQpXG4gICAgfTtcbiAgICBkYXRhLmV4dGVudCA9IHJlY3Q7XG5cbiAgICBsZXQgY2FudmFzID0gZGF0YS5jYW52YXM7XG4gICAgY2FudmFzLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCBleHRlbnQud2lkdGgpO1xuICAgIGNhbnZhcy5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIGV4dGVudC5oZWlnaHQpO1xuXG4gICAgbWUucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIGluaXRDYW52YXMpO1xufVxuXG5mdW5jdGlvbiBlbnRlckhhbmRsZXIgKGUpIHtcbiAgICBwYWludENpcmNsZS5jYWxsKHRoaXMsIGUsICcjMDAwJyk7XG59XG5cbmZ1bmN0aW9uIGxlYXZlSGFuZGxlciAoZSkge1xuICAgIHBhaW50Q2lyY2xlLmNhbGwodGhpcywgZSwgJyNmZmYnKTtcbn1cblxuZnVuY3Rpb24gY2FsRGlzdGFuY2UgKHt4OiB4MSwgeTogeTF9LCB4MiwgeTIpIHtcbiAgICByZXR1cm4gTWF0aC5jZWlsKFxuICAgICAgICBNYXRoLnNxcnQoXG4gICAgICAgICAgICBNYXRoLnBvdyh4MSAtIHgyLCAyKSArXG4gICAgICAgICAgICBNYXRoLnBvdyh5MSAtIHkyLCAyKVxuICAgICAgICApXG4gICAgKTtcbn1cblxuZnVuY3Rpb24gY2FsUmFkaXVzKHBvcywge3dpZHRoLCBoZWlnaHR9KSB7XG4gICAgcmV0dXJuIE1hdGguY2VpbChcbiAgICAgICAgTWF0aC5tYXgoXG4gICAgICAgICAgICBjYWxEaXN0YW5jZShwb3MsIDAsIDApLFxuICAgICAgICAgICAgY2FsRGlzdGFuY2UocG9zLCAwLCBoZWlnaHQpLFxuICAgICAgICAgICAgY2FsRGlzdGFuY2UocG9zLCB3aWR0aCwgMCksXG4gICAgICAgICAgICBjYWxEaXN0YW5jZShwb3MsIHdpZHRoLCBoZWlnaHQpXG4gICAgICAgIClcbiAgICApO1xufVxuXG5mdW5jdGlvbiBwYWludENpcmNsZSAoZSwgY29sb3IpIHtcbiAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgbGV0IHggPSBlLm9mZnNldFggLSAxO1xuICAgIGxldCB5ID0gZS5vZmZzZXRZIC0gMTtcblxuICAgIGxldCB7Y2FudmFzLCBleHRlbnR9ID0gY2FjaGUuZ2V0KG1lKTtcbiAgICBsZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbiAgICBsZXQgcmFkaXVzID0gY2FsUmFkaXVzKFxuICAgICAgICB7XG4gICAgICAgICAgICB4LFxuICAgICAgICAgICAgeVxuICAgICAgICB9LFxuICAgICAgICBleHRlbnRcbiAgICApO1xuICAgIGxldCB7YW5pbWF0aW9uRHVyYXRpb259ID0gY29uZmlnO1xuXG4gICAgbGV0IHN0YXJ0VGltZSA9IG51bGw7XG4gICAgZnVuY3Rpb24gcGFpbnQgKHRpbWVzdGFtcCkge1xuICAgICAgICBpZiAoc3RhcnRUaW1lID09PSBudWxsKSB7XG4gICAgICAgICAgICBzdGFydFRpbWUgPSB0aW1lc3RhbXA7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcHJvZ3Jlc3MgPSB0aW1lc3RhbXAgLSBzdGFydFRpbWU7XG5cbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5hcmMoXG4gICAgICAgICAgICB4LFxuICAgICAgICAgICAgeSxcbiAgICAgICAgICAgIHJhZGl1cyAqIHByb2dyZXNzIC8gYW5pbWF0aW9uRHVyYXRpb24sXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMiAqIE1hdGguUElcbiAgICAgICAgKTtcbiAgICAgICAgY3R4LmZpbGwoKTtcblxuICAgICAgICBpZiAocHJvZ3Jlc3MgPCBhbmltYXRpb25EdXJhdGlvbikge1xuICAgICAgICAgICAgXy5hbmltYXRlKHBhaW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF8uYW5pbWF0ZShwYWludCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBsb2FkXG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2J1dHRvbi9pbmRleC5qc1xuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9idXR0b24vaW5kZXguY3NzXG4gKiogbW9kdWxlIGlkID0gMTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBhbmltYXRpb25EdXJhdGlvbjogMjAwIC8vbXNcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29uZmlnLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==