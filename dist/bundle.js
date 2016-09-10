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
	
	    var boundingClientRect = me.getBoundingClientRect();
	    var rect = {
	        width: Math.ceil(boundingClientRect.width),
	        height: Math.ceil(boundingClientRect.height)
	    };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNGVmYmRmOWMwMDZiMTU0NDQwZjkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvbGFuZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9hbmltYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvZW52LmpzIiwid2VicGFjazovLy8uL3NyYy9oZWFkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlYWRlci9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2J1dHRvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYnV0dG9uL2luZGV4LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnLmpzIl0sIm5hbWVzIjpbInJlYWR5IiwibG9hZCIsIl8iLCJleHRlbmQiLCJ0b0FycmF5IiwibGlrZUFyciIsImkiLCJpaSIsImxlbmd0aCIsImFyciIsIkFycmF5IiwidGFyZ2V0IiwicHJvdG90eXBlIiwic2xpY2UiLCJjYWxsIiwiYXJndW1lbnRzIiwiZm9yRWFjaCIsInNvdXJjZSIsIk9iamVjdCIsImtleXMiLCJrZXkiLCJoYXNPd25Qcm9wZXJ0eSIsImFuaW1hdGUiLCJmdW5jIiwiZ2xvYmFsIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwic2V0VGltZW91dCIsInRpbWVzdGFtcCIsIkRhdGUiLCJnZXRUaW1lIiwiaGFuZGxlciIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdXBwb3J0IiwidG91Y2giLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImNhY2hlIiwiV2Vha01hcCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwidHJhbnNmb3JtIiwiZWwiLCJoMUVsIiwicXVlcnlTZWxlY3RvciIsInNldCIsInRocmVzaG9sZFZhbHVlIiwib2Zmc2V0VG9wIiwib2Zmc2V0SGVpZ2h0IiwicmVhY2hlZFRocmVzaG9sZCIsImluZm9FbCIsInBFbCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpY29uRWwiLCJpY29uU2l6ZSIsInN0eWxlIiwic2V0UHJvcGVydHkiLCJ0cmFja1NpemUiLCJNYXRoIiwic2luIiwiUEkiLCJkZWx0YVNpemUiLCJzY3JvbGxIYW5kbGVyIiwiYmluZCIsImUiLCJtZSIsImRhdGEiLCJnZXQiLCJjdXJWYWx1ZSIsImJvZHkiLCJzY3JvbGxUb3AiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiY2xhc3NMaXN0IiwiYWRkIiwiY2FudmFzIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImluaXRDYW52YXMiLCJlbnRlckhhbmRsZXIiLCJsZWF2ZUhhbmRsZXIiLCJyZWN0IiwiZmlyc3RFbCIsImNoaWxkTm9kZXMiLCJpbnNlcnRCZWZvcmUiLCJib3VuZGluZ0NsaWVudFJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ3aWR0aCIsImNlaWwiLCJoZWlnaHQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicGFpbnRDaXJjbGUiLCJjYWxEaXN0YW5jZSIsIngyIiwieTIiLCJ4MSIsIngiLCJ5MSIsInkiLCJzcXJ0IiwicG93IiwiY2FsUmFkaXVzIiwicG9zIiwibWF4IiwiY29sb3IiLCJvZmZzZXRYIiwib2Zmc2V0WSIsImN0eCIsImdldENvbnRleHQiLCJyYWRpdXMiLCJhbmltYXRpb25EdXJhdGlvbiIsInN0YXJ0VGltZSIsInBhaW50IiwicHJvZ3Jlc3MiLCJmaWxsU3R5bGUiLCJiZWdpblBhdGgiLCJhcmMiLCJmaWxsIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVB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QUV0RixPQUFGLENBQVV3RixLQUFWO0FBQ0g7QUFDSjs7QUFFRCxvQkFBRXhGLE9BQUYsQ0FBVXdGLEtBQVY7QUFDSDs7bUJBRWM7QUFDWDdHO0FBRFcsRTs7Ozs7O0FDMUhmLDBDOzs7Ozs7Ozs7OzttQkNBZTtBQUNYMkcsd0JBQW1CLEdBRFIsQ0FDWTtBQURaLEUiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCA0ZWZiZGY5YzAwNmIxNTQ0NDBmOVxuICoqLyIsImltcG9ydCAnLi9pbmRleC5jc3MnO1xuXG5pbXBvcnQgXyBmcm9tICcuL3V0aWwnO1xuXG5pbXBvcnQgaGVhZGVyIGZyb20gJy4vaGVhZGVyJztcbmltcG9ydCBtYWluIGZyb20gJy4vbWFpbic7XG5pbXBvcnQgYnV0dG9uIGZyb20gJy4vYnV0dG9uJztcblxuXy5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgbWFpbi5sb2FkKCk7XG4gICAgaGVhZGVyLmxvYWQoKTtcbiAgICBidXR0b24ubG9hZCgpO1xufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaW5kZXguanNcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5kZXguY3NzXG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IGxhbmcgZnJvbSAnLi9sYW5nJztcbmltcG9ydCBhbmltYXRpb24gZnJvbSAnLi9hbmltYXRpb24nO1xuaW1wb3J0IGVudiBmcm9tICcuL2Vudic7XG5cbmxldCBfID0ge307XG5cbmxhbmcuZXh0ZW5kKFxuICAgIF8sXG4gICAgbGFuZywgYW5pbWF0aW9uLCBlbnZcbik7XG5cbmV4cG9ydCBkZWZhdWx0IF87XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdXRpbC9pbmRleC5qc1xuICoqLyIsImZ1bmN0aW9uIHRvQXJyYXkobGlrZUFycikge1xuICAgIGxldCBpLGlpO1xuICAgIGkgPSAwO1xuICAgIGlpID0gbGlrZUFyci5sZW5ndGg7XG4gICAgbGV0IGFyciA9IG5ldyBBcnJheShpaSk7XG4gICAgd2hpbGUgKGkgPCBpaSkge1xuICAgICAgICBhcnJbaV0gPSBsaWtlQXJyW2ldO1xuICAgICAgICBpKys7XG4gICAgfVxuICAgIHJldHVybiBhcnI7XG59XG5cbmZ1bmN0aW9uIGV4dGVuZCAodGFyZ2V0KSB7XG4gICAgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoXG4gICAgICAgIGFyZ3VtZW50cyxcbiAgICAgICAgMVxuICAgICkuZm9yRWFjaChcbiAgICAgICAgZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoc291cmNlKVxuICAgICAgICAgICAgICAgIC5mb3JFYWNoKFxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRhcmdldC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICApO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICB0b0FycmF5LFxuICAgIGV4dGVuZFxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy91dGlsL2xhbmcuanNcbiAqKi8iLCJmdW5jdGlvbiBhbmltYXRlKGZ1bmMpIHtcbiAgICBpZihnbG9iYWwucmVxdWVzdEFuaW1hdGlvbkZyYW1lKSB7XG4gICAgICAgIGdsb2JhbC5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuYyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGxldCB0aW1lc3RhbXAgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICAgIGZ1bmModGltZXN0YW1wKTtcbiAgICAgICAgfSwgMTYpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGFuaW1hdGVcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdXRpbC9hbmltYXRpb24uanNcbiAqKi8iLCJmdW5jdGlvbiByZWFkeSAoaGFuZGxlcikge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgaGFuZGxlcik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICByZWFkeSxcbiAgICBzdXBwb3J0OiB7XG4gICAgICAgIHRvdWNoOiAnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnRcbiAgICB9XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3V0aWwvZW52LmpzXG4gKiovIiwiaW1wb3J0ICcuL2luZGV4LmNzcyc7XG5cbmltcG9ydCBfIGZyb20gJy4uL3V0aWwnO1xubGV0IGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuZnVuY3Rpb24gbG9hZCgpe1xuICAgIF8udG9BcnJheShcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWRlcicpXG4gICAgKS5mb3JFYWNoKCB0cmFuc2Zvcm0gKTtcbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtIChlbCkge1xuICAgIGxldCBoMUVsID0gZWwucXVlcnlTZWxlY3RvcignaDEnKTtcbiAgICBjYWNoZS5zZXQoXG4gICAgICAgIGVsLFxuICAgICAgICB7XG4gICAgICAgICAgICB0aHJlc2hvbGRWYWx1ZTogZWwub2Zmc2V0VG9wICsgaDFFbC5vZmZzZXRUb3AgKyBoMUVsLm9mZnNldEhlaWdodCArIDEwLFxuICAgICAgICAgICAgcmVhY2hlZFRocmVzaG9sZDogZmFsc2VcbiAgICAgICAgfVxuICAgICk7XG5cbiAgICBsZXQgaW5mb0VsID0gZWwucXVlcnlTZWxlY3RvcignZGl2Jyk7XG4gICAgbGV0IHBFbCA9IGluZm9FbC5xdWVyeVNlbGVjdG9yQWxsKCdwJylbMV07XG4gICAgbGV0IGljb25FbCA9IGluZm9FbC5xdWVyeVNlbGVjdG9yKCcuaWNvbicpO1xuICAgIGxldCBpY29uU2l6ZSA9IHBFbC5vZmZzZXRUb3AgKyBwRWwub2Zmc2V0SGVpZ2h0O1xuXG4gICAgaWNvbkVsLnN0eWxlLnNldFByb3BlcnR5KCd3aWR0aCcsIGljb25TaXplICsgJ3B4Jyk7XG4gICAgaWNvbkVsLnN0eWxlLnNldFByb3BlcnR5KCdoZWlnaHQnLCBpY29uU2l6ZSArICdweCcpO1xuXG4gICAgbGV0IHRyYWNrU2l6ZSA9IE1hdGguc2luKE1hdGguUEkgLyA0KSAqIGljb25TaXplO1xuICAgIGxldCBkZWx0YVNpemUgPSAoaWNvblNpemUgLSB0cmFja1NpemUpIC8gMjtcblxuICAgIF8udG9BcnJheShcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRyYWNrJylcbiAgICApLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIGVsLnN0eWxlLnNldFByb3BlcnR5KCd3aWR0aCcsIHRyYWNrU2l6ZSArICdweCcpO1xuICAgICAgICBlbC5zdHlsZS5zZXRQcm9wZXJ0eSgnaGVpZ2h0JywgdHJhY2tTaXplICsgJ3B4Jyk7XG4gICAgICAgIGVsLnN0eWxlLnNldFByb3BlcnR5KCd0b3AnLCBkZWx0YVNpemUgKyAncHgnKTtcbiAgICAgICAgZWwuc3R5bGUuc2V0UHJvcGVydHkoJ2xlZnQnLCBkZWx0YVNpemUgKyAncHgnKTtcbiAgICB9KTtcblxuICAgIGxldCBoYW5kbGVyID0gc2Nyb2xsSGFuZGxlci5iaW5kKGVsKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVyKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXdoZWVsJywgaGFuZGxlcik7XG5cbiAgICBoYW5kbGVyKCk7XG59XG5cbmZ1bmN0aW9uIHNjcm9sbEhhbmRsZXIgKGUpIHtcbiAgICBsZXQgbWUgPSB0aGlzO1xuICAgIGxldCBkYXRhID0gY2FjaGUuZ2V0KG1lKTtcblxuICAgIGxldCBjdXJWYWx1ZSA9IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG4gICAgbGV0IHRocmVzaG9sZFZhbHVlID0gZGF0YS50aHJlc2hvbGRWYWx1ZTtcbiAgICBpZiAoY3VyVmFsdWUgPiB0aHJlc2hvbGRWYWx1ZSkge1xuICAgICAgICBpZiAoIWRhdGEucmVhY2hlZFRocmVzaG9sZCkge1xuICAgICAgICAgICAgZGF0YS5yZWFjaGVkVGhyZXNob2xkID0gdHJ1ZTtcbiAgICAgICAgICAgIG1lLnN0eWxlLnNldFByb3BlcnR5KCdwb3NpdGlvbicsICdmaXhlZCcpO1xuICAgICAgICAgICAgbWUuc3R5bGUuc2V0UHJvcGVydHkoJ3RvcCcsIC10aHJlc2hvbGRWYWx1ZSArJ3B4Jyk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZGF0YS5yZWFjaGVkVGhyZXNob2xkKSB7XG4gICAgICAgICAgICBkYXRhLnJlYWNoZWRUaHJlc2hvbGQgPSBmYWxzZTtcbiAgICAgICAgICAgIG1lLnN0eWxlLnNldFByb3BlcnR5KCdwb3NpdGlvbicsICdyZWxhdGl2ZScpO1xuICAgICAgICAgICAgbWUuc3R5bGUuc2V0UHJvcGVydHkoJ3RvcCcsICcwJyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBsb2FkXG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2hlYWRlci9pbmRleC5qc1xuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9oZWFkZXIvaW5kZXguY3NzXG4gKiogbW9kdWxlIGlkID0gOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IF8gZnJvbSAnLi4vdXRpbCc7XG5cbmZ1bmN0aW9uIGxvYWQoKXtcbiAgICBfLnRvQXJyYXkoXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdtYWluJylcbiAgICApLmZvckVhY2godHJhbnNmb3JtKTtcbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtKGVsKSB7XG4gICAgZWwuc3R5bGUuc2V0UHJvcGVydHkoJ3RvcCcsIGVsLm9mZnNldFRvcCArICdweCcpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbG9hZFxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9tYWluL2luZGV4LmpzXG4gKiovIiwiaW1wb3J0ICcuL2luZGV4LmNzcyc7XG5cbmltcG9ydCBfIGZyb20gJy4uL3V0aWwnO1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcnO1xuXG5sZXQgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG5mdW5jdGlvbiBsb2FkICgpIHtcbiAgICBpZiAoXy5zdXBwb3J0LnRvdWNoKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXy50b0FycmF5KFxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdKLWJ1dHRvbicpXG4gICAgKS5mb3JFYWNoKHRyYW5zZm9ybSk7XG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybSAoZWwpIHtcbiAgICBlbC5jbGFzc0xpc3QuYWRkKCdidXR0b24nKTtcbiAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgY2FudmFzLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCAnMCcpO1xuICAgIGNhbnZhcy5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsICcwJyk7XG5cbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgaW5pdENhbnZhcyk7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIGVudGVySGFuZGxlcik7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGxlYXZlSGFuZGxlcik7XG5cbiAgICBjYWNoZS5zZXQoZWwsIHtcbiAgICAgICAgY2FudmFzLFxuICAgICAgICByZWN0OiBudWxsXG4gICAgfSk7XG5cbiAgICBsZXQgZmlyc3RFbCA9IGVsLmNoaWxkTm9kZXNbMF07XG4gICAgZWwuaW5zZXJ0QmVmb3JlKGNhbnZhcywgZmlyc3RFbCk7XG59XG5cbmZ1bmN0aW9uIGluaXRDYW52YXMgKCkge1xuICAgIGxldCBtZSA9IHRoaXM7XG4gICAgbGV0IGRhdGEgPSBjYWNoZS5nZXQobWUpO1xuXG4gICAgbGV0IGJvdW5kaW5nQ2xpZW50UmVjdCA9IG1lLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGxldCByZWN0ID0ge1xuICAgICAgICB3aWR0aDogTWF0aC5jZWlsKGJvdW5kaW5nQ2xpZW50UmVjdC53aWR0aCksXG4gICAgICAgIGhlaWdodDogTWF0aC5jZWlsKGJvdW5kaW5nQ2xpZW50UmVjdC5oZWlnaHQpXG4gICAgfTtcbiAgICBkYXRhLnJlY3QgPSByZWN0O1xuXG4gICAgbGV0IGNhbnZhcyA9IGRhdGEuY2FudmFzO1xuICAgIGNhbnZhcy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgcmVjdC53aWR0aCk7XG4gICAgY2FudmFzLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgcmVjdC5oZWlnaHQpO1xuXG4gICAgbWUucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIGluaXRDYW52YXMpO1xufVxuXG5mdW5jdGlvbiBlbnRlckhhbmRsZXIgKGUpIHtcbiAgICBwYWludENpcmNsZS5jYWxsKHRoaXMsIGUsICcjNDQ0Jyk7XG59XG5cbmZ1bmN0aW9uIGxlYXZlSGFuZGxlciAoZSkge1xuICAgIHBhaW50Q2lyY2xlLmNhbGwodGhpcywgZSwgJyNmZmYnKTtcbn1cblxuZnVuY3Rpb24gY2FsRGlzdGFuY2UgKHt4OiB4MSwgeTogeTF9LCB4MiwgeTIpIHtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KFxuICAgICAgICBNYXRoLnBvdyh4MSAtIHgyLCAyKSArXG4gICAgICAgIE1hdGgucG93KHkxIC0geTIsIDIpXG4gICAgKTtcbn1cblxuZnVuY3Rpb24gY2FsUmFkaXVzKHBvcywge3dpZHRoLCBoZWlnaHR9KSB7XG4gICAgcmV0dXJuIE1hdGgubWF4KFxuICAgICAgICBjYWxEaXN0YW5jZShwb3MsIDAsIDApLFxuICAgICAgICBjYWxEaXN0YW5jZShwb3MsIDAsIGhlaWdodCksXG4gICAgICAgIGNhbERpc3RhbmNlKHBvcywgd2lkdGgsIDApLFxuICAgICAgICBjYWxEaXN0YW5jZShwb3MsIHdpZHRoLCBoZWlnaHQpXG4gICAgKTtcbn1cblxuZnVuY3Rpb24gcGFpbnRDaXJjbGUgKGUsIGNvbG9yKSB7XG4gICAgbGV0IG1lID0gdGhpcztcblxuICAgIGxldCB4ID0gZS5vZmZzZXRYLTE7XG4gICAgbGV0IHkgPSBlLm9mZnNldFktMTtcblxuICAgIGxldCB7Y2FudmFzLCByZWN0fSA9IGNhY2hlLmdldChtZSk7XG4gICAgbGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG4gICAgbGV0IHJhZGl1cyA9IGNhbFJhZGl1cyhcbiAgICAgICAge1xuICAgICAgICAgICAgeCxcbiAgICAgICAgICAgIHlcbiAgICAgICAgfSxcbiAgICAgICAgcmVjdFxuICAgICk7XG4gICAgbGV0IHthbmltYXRpb25EdXJhdGlvbn0gPSBjb25maWc7XG5cbiAgICBsZXQgc3RhcnRUaW1lID0gbnVsbDtcbiAgICBmdW5jdGlvbiBwYWludCAodGltZXN0YW1wKSB7XG4gICAgICAgIGlmIChzdGFydFRpbWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHN0YXJ0VGltZSA9IHRpbWVzdGFtcDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBwcm9ncmVzcyA9IHRpbWVzdGFtcCAtIHN0YXJ0VGltZTtcblxuICAgICAgICBjdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmFyYyhcbiAgICAgICAgICAgIHgsXG4gICAgICAgICAgICB5LFxuICAgICAgICAgICAgcmFkaXVzICogcHJvZ3Jlc3MgLyBhbmltYXRpb25EdXJhdGlvbixcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAyICogTWF0aC5QSVxuICAgICAgICApO1xuICAgICAgICBjdHguZmlsbCgpO1xuXG4gICAgICAgIGlmIChwcm9ncmVzcyA8IGFuaW1hdGlvbkR1cmF0aW9uKSB7XG4gICAgICAgICAgICBfLmFuaW1hdGUocGFpbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgXy5hbmltYXRlKHBhaW50KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGxvYWRcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYnV0dG9uL2luZGV4LmpzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2J1dHRvbi9pbmRleC5jc3NcbiAqKiBtb2R1bGUgaWQgPSAxMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIGFuaW1hdGlvbkR1cmF0aW9uOiAyMDAgLy9tc1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb25maWcuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9