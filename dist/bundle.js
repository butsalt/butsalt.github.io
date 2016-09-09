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
	    ready: ready
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
	    _util2.default.toArray(document.getElementsByClassName('button')).forEach(transform);
	}
	
	function transform(el) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMGM4NDlkZDEyNGI3M2U5NzM3NTYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvbGFuZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9hbmltYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvZW52LmpzIiwid2VicGFjazovLy8uL3NyYy9oZWFkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlYWRlci9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2J1dHRvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYnV0dG9uL2luZGV4LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnLmpzIl0sIm5hbWVzIjpbInJlYWR5IiwibG9hZCIsIl8iLCJleHRlbmQiLCJ0b0FycmF5IiwibGlrZUFyciIsImkiLCJpaSIsImxlbmd0aCIsImFyciIsIkFycmF5IiwidGFyZ2V0IiwicHJvdG90eXBlIiwic2xpY2UiLCJjYWxsIiwiYXJndW1lbnRzIiwiZm9yRWFjaCIsInNvdXJjZSIsIk9iamVjdCIsImtleXMiLCJrZXkiLCJoYXNPd25Qcm9wZXJ0eSIsImFuaW1hdGUiLCJmdW5jIiwiZ2xvYmFsIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwic2V0VGltZW91dCIsInRpbWVzdGFtcCIsIkRhdGUiLCJnZXRUaW1lIiwiaGFuZGxlciIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYWNoZSIsIldlYWtNYXAiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwidHJhbnNmb3JtIiwiZWwiLCJoMUVsIiwicXVlcnlTZWxlY3RvciIsInNldCIsInRocmVzaG9sZFZhbHVlIiwib2Zmc2V0VG9wIiwib2Zmc2V0SGVpZ2h0IiwicmVhY2hlZFRocmVzaG9sZCIsImluZm9FbCIsInBFbCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpY29uRWwiLCJpY29uU2l6ZSIsInN0eWxlIiwic2V0UHJvcGVydHkiLCJ0cmFja1NpemUiLCJNYXRoIiwic2luIiwiUEkiLCJkZWx0YVNpemUiLCJzY3JvbGxIYW5kbGVyIiwiYmluZCIsImUiLCJtZSIsImRhdGEiLCJnZXQiLCJjdXJWYWx1ZSIsImJvZHkiLCJzY3JvbGxUb3AiLCJkb2N1bWVudEVsZW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiY2FudmFzIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImluaXRDYW52YXMiLCJlbnRlckhhbmRsZXIiLCJsZWF2ZUhhbmRsZXIiLCJyZWN0IiwiZmlyc3RFbCIsImNoaWxkTm9kZXMiLCJpbnNlcnRCZWZvcmUiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ3aWR0aCIsImhlaWdodCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJwYWludENpcmNsZSIsImNhbERpc3RhbmNlIiwieDIiLCJ5MiIsIngxIiwieCIsInkxIiwieSIsInNxcnQiLCJwb3ciLCJjYWxSYWRpdXMiLCJwb3MiLCJtYXgiLCJjb2xvciIsIm9mZnNldFgiLCJvZmZzZXRZIiwiY3R4IiwiZ2V0Q29udGV4dCIsInJhZGl1cyIsImFuaW1hdGlvbkR1cmF0aW9uIiwic3RhcnRUaW1lIiwicGFpbnQiLCJwcm9ncmVzcyIsImZpbGxTdHlsZSIsImJlZ2luUGF0aCIsImFyYyIsImZpbGwiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7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TXZCUSxNQU51QixjQU12QkEsTUFOdUI7QUFBQSxTQU1mTSxJQU5lLGNBTWZBLElBTmU7O0FBTzVCLFNBQUl3QixNQUFNOUIsT0FBTytCLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBVjs7QUFFQSxTQUFJQyxTQUFTUixVQUNUO0FBQ0lMLGFBREo7QUFFSUU7QUFGSixNQURTLEVBS1RmLElBTFMsQ0FBYjtBQVQ0QixTQWdCdkIyQixpQkFoQnVCLG9CQWdCdkJBLGlCQWhCdUI7OztBQWtCNUIsU0FBSUMsWUFBWSxJQUFoQjtBQUNBLGNBQVNDLEtBQVQsQ0FBZ0I3RSxTQUFoQixFQUEyQjtBQUN2QixhQUFJNEUsY0FBYyxJQUFsQixFQUF3QjtBQUNwQkEseUJBQVk1RSxTQUFaO0FBQ0g7O0FBRUQsYUFBSThFLFdBQVc5RSxZQUFZNEUsU0FBM0I7O0FBRUFKLGFBQUlPLFNBQUosR0FBZ0JWLEtBQWhCO0FBQ0FHLGFBQUlRLFNBQUo7QUFDQVIsYUFBSVMsR0FBSixDQUNJcEIsQ0FESixFQUVJRSxDQUZKLEVBR0lXLFNBQVNJLFFBQVQsR0FBb0JILGlCQUh4QixFQUlJLENBSkosRUFLSSxJQUFJaEQsS0FBS0UsRUFMYjtBQU9BMkMsYUFBSVUsSUFBSjs7QUFFQSxhQUFJSixXQUFXSCxpQkFBZixFQUFrQztBQUM5Qiw0QkFBRWhGLE9BQUYsQ0FBVWtGLEtBQVY7QUFDSDtBQUNKOztBQUVELG9CQUFFbEYsT0FBRixDQUFVa0YsS0FBVjtBQUNIOzttQkFFYztBQUNYdkc7QUFEVyxFOzs7Ozs7QUNsSGYsMEM7Ozs7Ozs7Ozs7O21CQ0FlO0FBQ1hxRyx3QkFBbUIsR0FEUixDQUNZO0FBRFosRSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDBjODQ5ZGQxMjRiNzNlOTczNzU2XG4gKiovIiwiaW1wb3J0ICcuL2luZGV4LmNzcyc7XG5cbmltcG9ydCBfIGZyb20gJy4vdXRpbCc7XG5cbmltcG9ydCBoZWFkZXIgZnJvbSAnLi9oZWFkZXInO1xuaW1wb3J0IG1haW4gZnJvbSAnLi9tYWluJztcbmltcG9ydCBidXR0b24gZnJvbSAnLi9idXR0b24nO1xuXG5fLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICBtYWluLmxvYWQoKTtcbiAgICBoZWFkZXIubG9hZCgpO1xuICAgIGJ1dHRvbi5sb2FkKCk7XG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pbmRleC5qc1xuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbmRleC5jc3NcbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgbGFuZyBmcm9tICcuL2xhbmcnO1xuaW1wb3J0IGFuaW1hdGlvbiBmcm9tICcuL2FuaW1hdGlvbic7XG5pbXBvcnQgZW52IGZyb20gJy4vZW52JztcblxubGV0IF8gPSB7fTtcblxubGFuZy5leHRlbmQoXG4gICAgXyxcbiAgICBsYW5nLCBhbmltYXRpb24sIGVudlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgXztcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy91dGlsL2luZGV4LmpzXG4gKiovIiwiZnVuY3Rpb24gdG9BcnJheShsaWtlQXJyKSB7XG4gICAgbGV0IGksaWk7XG4gICAgaSA9IDA7XG4gICAgaWkgPSBsaWtlQXJyLmxlbmd0aDtcbiAgICBsZXQgYXJyID0gbmV3IEFycmF5KGlpKTtcbiAgICB3aGlsZSAoaSA8IGlpKSB7XG4gICAgICAgIGFycltpXSA9IGxpa2VBcnJbaV07XG4gICAgICAgIGkrKztcbiAgICB9XG4gICAgcmV0dXJuIGFycjtcbn1cblxuZnVuY3Rpb24gZXh0ZW5kICh0YXJnZXQpIHtcbiAgICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChcbiAgICAgICAgYXJndW1lbnRzLFxuICAgICAgICAxXG4gICAgKS5mb3JFYWNoKFxuICAgICAgICBmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhzb3VyY2UpXG4gICAgICAgICAgICAgICAgLmZvckVhY2goXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGFyZ2V0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICk7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHRvQXJyYXksXG4gICAgZXh0ZW5kXG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3V0aWwvbGFuZy5qc1xuICoqLyIsImZ1bmN0aW9uIGFuaW1hdGUoZnVuYykge1xuICAgIGlmKGdsb2JhbC5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpIHtcbiAgICAgICAgZ2xvYmFsLnJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgbGV0IHRpbWVzdGFtcCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgZnVuYyh0aW1lc3RhbXApO1xuICAgICAgICB9LCAxNik7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgYW5pbWF0ZVxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy91dGlsL2FuaW1hdGlvbi5qc1xuICoqLyIsImZ1bmN0aW9uIHJlYWR5IChoYW5kbGVyKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBoYW5kbGVyKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHJlYWR5XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3V0aWwvZW52LmpzXG4gKiovIiwiaW1wb3J0ICcuL2luZGV4LmNzcyc7XG5cbmltcG9ydCBfIGZyb20gJy4uL3V0aWwnO1xubGV0IGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuZnVuY3Rpb24gbG9hZCgpe1xuICAgIF8udG9BcnJheShcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWRlcicpXG4gICAgKS5mb3JFYWNoKCB0cmFuc2Zvcm0gKTtcbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtIChlbCkge1xuICAgIGxldCBoMUVsID0gZWwucXVlcnlTZWxlY3RvcignaDEnKTtcbiAgICBjYWNoZS5zZXQoXG4gICAgICAgIGVsLFxuICAgICAgICB7XG4gICAgICAgICAgICB0aHJlc2hvbGRWYWx1ZTogZWwub2Zmc2V0VG9wICsgaDFFbC5vZmZzZXRUb3AgKyBoMUVsLm9mZnNldEhlaWdodCArIDEwLFxuICAgICAgICAgICAgcmVhY2hlZFRocmVzaG9sZDogZmFsc2VcbiAgICAgICAgfVxuICAgICk7XG5cbiAgICBsZXQgaW5mb0VsID0gZWwucXVlcnlTZWxlY3RvcignZGl2Jyk7XG4gICAgbGV0IHBFbCA9IGluZm9FbC5xdWVyeVNlbGVjdG9yQWxsKCdwJylbMV07XG4gICAgbGV0IGljb25FbCA9IGluZm9FbC5xdWVyeVNlbGVjdG9yKCcuaWNvbicpO1xuICAgIGxldCBpY29uU2l6ZSA9IHBFbC5vZmZzZXRUb3AgKyBwRWwub2Zmc2V0SGVpZ2h0O1xuXG4gICAgaWNvbkVsLnN0eWxlLnNldFByb3BlcnR5KCd3aWR0aCcsIGljb25TaXplICsgJ3B4Jyk7XG4gICAgaWNvbkVsLnN0eWxlLnNldFByb3BlcnR5KCdoZWlnaHQnLCBpY29uU2l6ZSArICdweCcpO1xuXG4gICAgbGV0IHRyYWNrU2l6ZSA9IE1hdGguc2luKE1hdGguUEkgLyA0KSAqIGljb25TaXplO1xuICAgIGxldCBkZWx0YVNpemUgPSAoaWNvblNpemUgLSB0cmFja1NpemUpIC8gMjtcblxuICAgIF8udG9BcnJheShcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRyYWNrJylcbiAgICApLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIGVsLnN0eWxlLnNldFByb3BlcnR5KCd3aWR0aCcsIHRyYWNrU2l6ZSArICdweCcpO1xuICAgICAgICBlbC5zdHlsZS5zZXRQcm9wZXJ0eSgnaGVpZ2h0JywgdHJhY2tTaXplICsgJ3B4Jyk7XG4gICAgICAgIGVsLnN0eWxlLnNldFByb3BlcnR5KCd0b3AnLCBkZWx0YVNpemUgKyAncHgnKTtcbiAgICAgICAgZWwuc3R5bGUuc2V0UHJvcGVydHkoJ2xlZnQnLCBkZWx0YVNpemUgKyAncHgnKTtcbiAgICB9KTtcblxuICAgIGxldCBoYW5kbGVyID0gc2Nyb2xsSGFuZGxlci5iaW5kKGVsKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVyKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXdoZWVsJywgaGFuZGxlcik7XG5cbiAgICBoYW5kbGVyKCk7XG59XG5cbmZ1bmN0aW9uIHNjcm9sbEhhbmRsZXIgKGUpIHtcbiAgICBsZXQgbWUgPSB0aGlzO1xuICAgIGxldCBkYXRhID0gY2FjaGUuZ2V0KG1lKTtcblxuICAgIGxldCBjdXJWYWx1ZSA9IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG4gICAgbGV0IHRocmVzaG9sZFZhbHVlID0gZGF0YS50aHJlc2hvbGRWYWx1ZTtcbiAgICBpZiAoY3VyVmFsdWUgPiB0aHJlc2hvbGRWYWx1ZSkge1xuICAgICAgICBpZiAoIWRhdGEucmVhY2hlZFRocmVzaG9sZCkge1xuICAgICAgICAgICAgZGF0YS5yZWFjaGVkVGhyZXNob2xkID0gdHJ1ZTtcbiAgICAgICAgICAgIG1lLnN0eWxlLnNldFByb3BlcnR5KCdwb3NpdGlvbicsICdmaXhlZCcpO1xuICAgICAgICAgICAgbWUuc3R5bGUuc2V0UHJvcGVydHkoJ3RvcCcsIC10aHJlc2hvbGRWYWx1ZSArJ3B4Jyk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZGF0YS5yZWFjaGVkVGhyZXNob2xkKSB7XG4gICAgICAgICAgICBkYXRhLnJlYWNoZWRUaHJlc2hvbGQgPSBmYWxzZTtcbiAgICAgICAgICAgIG1lLnN0eWxlLnNldFByb3BlcnR5KCdwb3NpdGlvbicsICdyZWxhdGl2ZScpO1xuICAgICAgICAgICAgbWUuc3R5bGUuc2V0UHJvcGVydHkoJ3RvcCcsICcwJyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBsb2FkXG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2hlYWRlci9pbmRleC5qc1xuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9oZWFkZXIvaW5kZXguY3NzXG4gKiogbW9kdWxlIGlkID0gOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IF8gZnJvbSAnLi4vdXRpbCc7XG5cbmZ1bmN0aW9uIGxvYWQoKXtcbiAgICBfLnRvQXJyYXkoXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdtYWluJylcbiAgICApLmZvckVhY2godHJhbnNmb3JtKTtcbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtKGVsKSB7XG4gICAgZWwuc3R5bGUuc2V0UHJvcGVydHkoJ3RvcCcsIGVsLm9mZnNldFRvcCArICdweCcpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbG9hZFxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9tYWluL2luZGV4LmpzXG4gKiovIiwiaW1wb3J0ICcuL2luZGV4LmNzcyc7XG5cbmltcG9ydCBfIGZyb20gJy4uL3V0aWwnO1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcnO1xuXG5sZXQgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG5mdW5jdGlvbiBsb2FkICgpIHtcbiAgICBfLnRvQXJyYXkoXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2J1dHRvbicpXG4gICAgKS5mb3JFYWNoKHRyYW5zZm9ybSk7XG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybSAoZWwpIHtcbiAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgY2FudmFzLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCAnMCcpO1xuICAgIGNhbnZhcy5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsICcwJyk7XG5cbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgaW5pdENhbnZhcyk7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIGVudGVySGFuZGxlcik7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGxlYXZlSGFuZGxlcik7XG5cbiAgICBjYWNoZS5zZXQoZWwsIHtcbiAgICAgICAgY2FudmFzLFxuICAgICAgICByZWN0OiBudWxsXG4gICAgfSk7XG5cbiAgICBsZXQgZmlyc3RFbCA9IGVsLmNoaWxkTm9kZXNbMF07XG4gICAgZWwuaW5zZXJ0QmVmb3JlKGNhbnZhcywgZmlyc3RFbCk7XG59XG5cbmZ1bmN0aW9uIGluaXRDYW52YXMgKCkge1xuICAgIGxldCBtZSA9IHRoaXM7XG4gICAgbGV0IGRhdGEgPSBjYWNoZS5nZXQobWUpO1xuXG4gICAgbGV0IHJlY3QgPSBtZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBkYXRhLnJlY3QgPSByZWN0O1xuXG4gICAgbGV0IGNhbnZhcyA9IGRhdGEuY2FudmFzO1xuICAgIGNhbnZhcy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgcmVjdC53aWR0aCk7XG4gICAgY2FudmFzLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgcmVjdC5oZWlnaHQpO1xuXG4gICAgbWUucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIGluaXRDYW52YXMpO1xufVxuXG5mdW5jdGlvbiBlbnRlckhhbmRsZXIgKGUpIHtcbiAgICBwYWludENpcmNsZS5jYWxsKHRoaXMsIGUsICcjNDQ0Jyk7XG59XG5cbmZ1bmN0aW9uIGxlYXZlSGFuZGxlciAoZSkge1xuICAgIHBhaW50Q2lyY2xlLmNhbGwodGhpcywgZSwgJyNmZmYnKTtcbn1cblxuZnVuY3Rpb24gY2FsRGlzdGFuY2UgKHt4OiB4MSwgeTogeTF9LCB4MiwgeTIpIHtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KFxuICAgICAgICBNYXRoLnBvdyh4MSAtIHgyLCAyKSArXG4gICAgICAgIE1hdGgucG93KHkxIC0geTIsIDIpXG4gICAgKTtcbn1cblxuZnVuY3Rpb24gY2FsUmFkaXVzKHBvcywge3dpZHRoLCBoZWlnaHR9KSB7XG4gICAgcmV0dXJuIE1hdGgubWF4KFxuICAgICAgICBjYWxEaXN0YW5jZShwb3MsIDAsIDApLFxuICAgICAgICBjYWxEaXN0YW5jZShwb3MsIDAsIGhlaWdodCksXG4gICAgICAgIGNhbERpc3RhbmNlKHBvcywgd2lkdGgsIDApLFxuICAgICAgICBjYWxEaXN0YW5jZShwb3MsIHdpZHRoLCBoZWlnaHQpXG4gICAgKTtcbn1cblxuZnVuY3Rpb24gcGFpbnRDaXJjbGUgKGUsIGNvbG9yKSB7XG4gICAgbGV0IG1lID0gdGhpcztcblxuICAgIGxldCB4ID0gZS5vZmZzZXRYLTE7XG4gICAgbGV0IHkgPSBlLm9mZnNldFktMTtcblxuICAgIGxldCB7Y2FudmFzLCByZWN0fSA9IGNhY2hlLmdldChtZSk7XG4gICAgbGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG4gICAgbGV0IHJhZGl1cyA9IGNhbFJhZGl1cyhcbiAgICAgICAge1xuICAgICAgICAgICAgeCxcbiAgICAgICAgICAgIHlcbiAgICAgICAgfSxcbiAgICAgICAgcmVjdFxuICAgICk7XG4gICAgbGV0IHthbmltYXRpb25EdXJhdGlvbn0gPSBjb25maWc7XG5cbiAgICBsZXQgc3RhcnRUaW1lID0gbnVsbDtcbiAgICBmdW5jdGlvbiBwYWludCAodGltZXN0YW1wKSB7XG4gICAgICAgIGlmIChzdGFydFRpbWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHN0YXJ0VGltZSA9IHRpbWVzdGFtcDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBwcm9ncmVzcyA9IHRpbWVzdGFtcCAtIHN0YXJ0VGltZTtcblxuICAgICAgICBjdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmFyYyhcbiAgICAgICAgICAgIHgsXG4gICAgICAgICAgICB5LFxuICAgICAgICAgICAgcmFkaXVzICogcHJvZ3Jlc3MgLyBhbmltYXRpb25EdXJhdGlvbixcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAyICogTWF0aC5QSVxuICAgICAgICApO1xuICAgICAgICBjdHguZmlsbCgpO1xuXG4gICAgICAgIGlmIChwcm9ncmVzcyA8IGFuaW1hdGlvbkR1cmF0aW9uKSB7XG4gICAgICAgICAgICBfLmFuaW1hdGUocGFpbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgXy5hbmltYXRlKHBhaW50KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGxvYWRcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYnV0dG9uL2luZGV4LmpzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2J1dHRvbi9pbmRleC5jc3NcbiAqKiBtb2R1bGUgaWQgPSAxMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIGFuaW1hdGlvbkR1cmF0aW9uOiAyMDAgLy9tc1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb25maWcuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9