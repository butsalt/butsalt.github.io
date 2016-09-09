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
	
	var _util = __webpack_require__(1);
	
	var _ = _interopRequireWildcard(_util);
	
	var _header = __webpack_require__(5);
	
	var header = _interopRequireWildcard(_header);
	
	var _main = __webpack_require__(6);
	
	var main = _interopRequireWildcard(_main);
	
	var _button = __webpack_require__(7);
	
	var button = _interopRequireWildcard(_button);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	__webpack_require__(9);
	__webpack_require__(11);
	
	_.ready(function init() {
	    main.load();
	    header.load();
	    button.load();
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _lang = __webpack_require__(2);
	
	Object.keys(_lang).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _lang[key];
	    }
	  });
	});
	
	var _animation = __webpack_require__(3);
	
	Object.keys(_animation).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _animation[key];
	    }
	  });
	});
	
	var _env = __webpack_require__(4);
	
	Object.keys(_env).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _env[key];
	    }
	  });
	});

/***/ },
/* 2 */
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
	
	exports.toArray = toArray;

/***/ },
/* 3 */
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
	
	exports.animate = animate;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function ready(handler) {
	    window.addEventListener('load', handler);
	}
	
	exports.ready = ready;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.load = undefined;
	
	var _util = __webpack_require__(1);
	
	var _ = _interopRequireWildcard(_util);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var cache = new WeakMap();
	
	function load() {
	    _.toArray(document.getElementsByTagName('header')).forEach(transform);
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
	
	    _.toArray(document.querySelectorAll('.track')).forEach(function (el) {
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
	
	exports.load = load;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.load = undefined;
	
	var _util = __webpack_require__(1);
	
	var _ = _interopRequireWildcard(_util);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function load() {
	    _.toArray(document.getElementsByTagName('main')).forEach(transform);
	}
	
	function transform(el) {
	    el.style.setProperty('top', el.offsetTop + 'px');
	}
	
	exports.load = load;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.load = undefined;
	
	var _util = __webpack_require__(1);
	
	var _ = _interopRequireWildcard(_util);
	
	var _config = __webpack_require__(8);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var cache = new WeakMap();
	
	function load() {
	    _.toArray(document.getElementsByClassName('button')).forEach(transform);
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
	            _.animate(paint);
	        }
	    }
	
	    _.animate(paint);
	}
	
	exports.load = load;

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    animationDuration: 200 //ms
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 10 */,
/* 11 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNjk4NWJmNDMxOWRhM2E4ZTlkMWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2xhbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvYW5pbWF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2Vudi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVhZGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9idXR0b24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9+L25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvZ2xvYmFsLmNzcyJdLCJuYW1lcyI6WyJfIiwiaGVhZGVyIiwibWFpbiIsImJ1dHRvbiIsInJlcXVpcmUiLCJyZWFkeSIsImluaXQiLCJsb2FkIiwidG9BcnJheSIsImxpa2VBcnIiLCJpIiwiaWkiLCJsZW5ndGgiLCJhcnIiLCJBcnJheSIsImFuaW1hdGUiLCJmdW5jIiwiZ2xvYmFsIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwic2V0VGltZW91dCIsInRpbWVzdGFtcCIsIkRhdGUiLCJnZXRUaW1lIiwiaGFuZGxlciIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYWNoZSIsIldlYWtNYXAiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiZm9yRWFjaCIsInRyYW5zZm9ybSIsImVsIiwiaDFFbCIsInF1ZXJ5U2VsZWN0b3IiLCJzZXQiLCJ0aHJlc2hvbGRWYWx1ZSIsIm9mZnNldFRvcCIsIm9mZnNldEhlaWdodCIsInJlYWNoZWRUaHJlc2hvbGQiLCJpbmZvRWwiLCJwRWwiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaWNvbkVsIiwiaWNvblNpemUiLCJzdHlsZSIsInNldFByb3BlcnR5IiwidHJhY2tTaXplIiwiTWF0aCIsInNpbiIsIlBJIiwiZGVsdGFTaXplIiwic2Nyb2xsSGFuZGxlciIsImJpbmQiLCJlIiwibWUiLCJkYXRhIiwiZ2V0IiwiY3VyVmFsdWUiLCJib2R5Iiwic2Nyb2xsVG9wIiwiZG9jdW1lbnRFbGVtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImNhbnZhcyIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJpbml0Q2FudmFzIiwiZW50ZXJIYW5kbGVyIiwibGVhdmVIYW5kbGVyIiwicmVjdCIsImZpcnN0RWwiLCJjaGlsZE5vZGVzIiwiaW5zZXJ0QmVmb3JlIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2lkdGgiLCJoZWlnaHQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicGFpbnRDaXJjbGUiLCJjYWxsIiwiY2FsRGlzdGFuY2UiLCJ4MiIsInkyIiwieDEiLCJ4IiwieTEiLCJ5Iiwic3FydCIsInBvdyIsImNhbFJhZGl1cyIsInBvcyIsIm1heCIsImNvbG9yIiwib2Zmc2V0WCIsIm9mZnNldFkiLCJjdHgiLCJnZXRDb250ZXh0IiwicmFkaXVzIiwiYW5pbWF0aW9uRHVyYXRpb24iLCJzdGFydFRpbWUiLCJwYWludCIsInByb2dyZXNzIiwiZmlsbFN0eWxlIiwiYmVnaW5QYXRoIiwiYXJjIiwiZmlsbCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQ25DQTs7S0FBWUEsQzs7QUFFWjs7S0FBWUMsTTs7QUFDWjs7S0FBWUMsSTs7QUFDWjs7S0FBWUMsTTs7OztBQVBaLG9CQUFBQyxDQUFR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LFNBQVo7QUFDSDs7QUFFRCxhQUFJZ0YsV0FBV2hGLFlBQVk4RSxTQUEzQjs7QUFFQUosYUFBSU8sU0FBSixHQUFnQlYsS0FBaEI7QUFDQUcsYUFBSVEsU0FBSjtBQUNBUixhQUFJUyxHQUFKLENBQ0lwQixDQURKLEVBRUlFLENBRkosRUFHSVcsU0FBU0ksUUFBVCxHQUFvQkgsaUJBSHhCLEVBSUksQ0FKSixFQUtJLElBQUlqRCxLQUFLRSxFQUxiO0FBT0E0QyxhQUFJVSxJQUFKOztBQUVBLGFBQUlKLFdBQVdILGlCQUFmLEVBQWtDO0FBQzlCakcsZUFBRWUsT0FBRixDQUFVb0YsS0FBVjtBQUNIO0FBQ0o7O0FBRURuRyxPQUFFZSxPQUFGLENBQVVvRixLQUFWO0FBQ0g7O1NBR0c1RixJLEdBQUFBLEk7Ozs7Ozs7Ozs7O21CQ2pIVztBQUNYMEYsd0JBQW1CLEdBRFIsQ0FDWTtBQURaLEU7Ozs7OztBQ0FmLDBDOzs7Ozs7O0FDQUEsMEMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCA2OTg1YmY0MzE5ZGEzYThlOWQxZVxuICoqLyIsInJlcXVpcmUoJ25vcm1hbGl6ZS5jc3MnKTtcbnJlcXVpcmUoJy4uL3N0eWxlcy9nbG9iYWwuY3NzJyk7XG5cbmltcG9ydCAqIGFzIF8gZnJvbSAnLi91dGlsJztcblxuaW1wb3J0ICogYXMgaGVhZGVyIGZyb20gJy4vaGVhZGVyJztcbmltcG9ydCAqIGFzIG1haW4gZnJvbSAnLi9tYWluJztcbmltcG9ydCAqIGFzIGJ1dHRvbiBmcm9tICcuL2J1dHRvbic7XG5cbl8ucmVhZHkoZnVuY3Rpb24gaW5pdCAoKSB7XG4gICAgbWFpbi5sb2FkKCk7XG4gICAgaGVhZGVyLmxvYWQoKTtcbiAgICBidXR0b24ubG9hZCgpO1xufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaW5kZXguanNcbiAqKi8iLCJleHBvcnQgKiBmcm9tICcuL2xhbmcnO1xuZXhwb3J0ICogZnJvbSAnLi9hbmltYXRpb24nO1xuZXhwb3J0ICogZnJvbSAnLi9lbnYnO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3V0aWwvaW5kZXguanNcbiAqKi8iLCJmdW5jdGlvbiB0b0FycmF5KGxpa2VBcnIpIHtcbiAgICBsZXQgaSxpaTtcbiAgICBpID0gMDtcbiAgICBpaSA9IGxpa2VBcnIubGVuZ3RoO1xuICAgIGxldCBhcnIgPSBuZXcgQXJyYXkoaWkpO1xuICAgIHdoaWxlIChpIDwgaWkpIHtcbiAgICAgICAgYXJyW2ldID0gbGlrZUFycltpXTtcbiAgICAgICAgaSsrO1xuICAgIH1cbiAgICByZXR1cm4gYXJyO1xufVxuXG5cbmV4cG9ydCB7XG4gICAgdG9BcnJheVxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy91dGlsL2xhbmcuanNcbiAqKi8iLCJmdW5jdGlvbiBhbmltYXRlKGZ1bmMpIHtcbiAgICBpZihnbG9iYWwucmVxdWVzdEFuaW1hdGlvbkZyYW1lKSB7XG4gICAgICAgIGdsb2JhbC5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuYyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGxldCB0aW1lc3RhbXAgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICAgIGZ1bmModGltZXN0YW1wKTtcbiAgICAgICAgfSwgMTYpO1xuICAgIH1cbn1cblxuZXhwb3J0IHthbmltYXRlfTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy91dGlsL2FuaW1hdGlvbi5qc1xuICoqLyIsImZ1bmN0aW9uIHJlYWR5KGhhbmRsZXIpe1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgaGFuZGxlcik7XG59XG5cbmV4cG9ydCB7XG4gICAgcmVhZHlcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdXRpbC9lbnYuanNcbiAqKi8iLCJpbXBvcnQgKiBhcyBfIGZyb20gJy4uL3V0aWwnO1xubGV0IGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuZnVuY3Rpb24gbG9hZCgpe1xuICAgIF8udG9BcnJheShcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWRlcicpXG4gICAgKS5mb3JFYWNoKCB0cmFuc2Zvcm0gKTtcbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtIChlbCkge1xuICAgIGxldCBoMUVsID0gZWwucXVlcnlTZWxlY3RvcignaDEnKTtcbiAgICBjYWNoZS5zZXQoXG4gICAgICAgIGVsLFxuICAgICAgICB7XG4gICAgICAgICAgICB0aHJlc2hvbGRWYWx1ZTogZWwub2Zmc2V0VG9wICsgaDFFbC5vZmZzZXRUb3AgKyBoMUVsLm9mZnNldEhlaWdodCArIDEwLFxuICAgICAgICAgICAgcmVhY2hlZFRocmVzaG9sZDogZmFsc2VcbiAgICAgICAgfVxuICAgICk7XG5cbiAgICBsZXQgaW5mb0VsID0gZWwucXVlcnlTZWxlY3RvcignZGl2Jyk7XG4gICAgbGV0IHBFbCA9IGluZm9FbC5xdWVyeVNlbGVjdG9yQWxsKCdwJylbMV07XG4gICAgbGV0IGljb25FbCA9IGluZm9FbC5xdWVyeVNlbGVjdG9yKCcuaWNvbicpO1xuICAgIGxldCBpY29uU2l6ZSA9IHBFbC5vZmZzZXRUb3AgKyBwRWwub2Zmc2V0SGVpZ2h0O1xuXG4gICAgaWNvbkVsLnN0eWxlLnNldFByb3BlcnR5KCd3aWR0aCcsIGljb25TaXplICsgJ3B4Jyk7XG4gICAgaWNvbkVsLnN0eWxlLnNldFByb3BlcnR5KCdoZWlnaHQnLCBpY29uU2l6ZSArICdweCcpO1xuXG4gICAgbGV0IHRyYWNrU2l6ZSA9IE1hdGguc2luKE1hdGguUEkgLyA0KSAqIGljb25TaXplO1xuICAgIGxldCBkZWx0YVNpemUgPSAoaWNvblNpemUgLSB0cmFja1NpemUpIC8gMjtcblxuICAgIF8udG9BcnJheShcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRyYWNrJylcbiAgICApLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIGVsLnN0eWxlLnNldFByb3BlcnR5KCd3aWR0aCcsIHRyYWNrU2l6ZSArICdweCcpO1xuICAgICAgICBlbC5zdHlsZS5zZXRQcm9wZXJ0eSgnaGVpZ2h0JywgdHJhY2tTaXplICsgJ3B4Jyk7XG4gICAgICAgIGVsLnN0eWxlLnNldFByb3BlcnR5KCd0b3AnLCBkZWx0YVNpemUgKyAncHgnKTtcbiAgICAgICAgZWwuc3R5bGUuc2V0UHJvcGVydHkoJ2xlZnQnLCBkZWx0YVNpemUgKyAncHgnKTtcbiAgICB9KTtcblxuICAgIGxldCBoYW5kbGVyID0gc2Nyb2xsSGFuZGxlci5iaW5kKGVsKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVyKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXdoZWVsJywgaGFuZGxlcik7XG5cbiAgICBoYW5kbGVyKCk7XG59XG5cbmZ1bmN0aW9uIHNjcm9sbEhhbmRsZXIgKGUpIHtcbiAgICBsZXQgbWUgPSB0aGlzO1xuICAgIGxldCBkYXRhID0gY2FjaGUuZ2V0KG1lKTtcblxuICAgIGxldCBjdXJWYWx1ZSA9IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG4gICAgbGV0IHRocmVzaG9sZFZhbHVlID0gZGF0YS50aHJlc2hvbGRWYWx1ZTtcbiAgICBpZiAoY3VyVmFsdWUgPiB0aHJlc2hvbGRWYWx1ZSkge1xuICAgICAgICBpZiAoIWRhdGEucmVhY2hlZFRocmVzaG9sZCkge1xuICAgICAgICAgICAgZGF0YS5yZWFjaGVkVGhyZXNob2xkID0gdHJ1ZTtcbiAgICAgICAgICAgIG1lLnN0eWxlLnNldFByb3BlcnR5KCdwb3NpdGlvbicsICdmaXhlZCcpO1xuICAgICAgICAgICAgbWUuc3R5bGUuc2V0UHJvcGVydHkoJ3RvcCcsIC10aHJlc2hvbGRWYWx1ZSArJ3B4Jyk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZGF0YS5yZWFjaGVkVGhyZXNob2xkKSB7XG4gICAgICAgICAgICBkYXRhLnJlYWNoZWRUaHJlc2hvbGQgPSBmYWxzZTtcbiAgICAgICAgICAgIG1lLnN0eWxlLnNldFByb3BlcnR5KCdwb3NpdGlvbicsICdyZWxhdGl2ZScpO1xuICAgICAgICAgICAgbWUuc3R5bGUuc2V0UHJvcGVydHkoJ3RvcCcsICcwJyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCB7XG4gICAgbG9hZFxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9oZWFkZXIvaW5kZXguanNcbiAqKi8iLCJpbXBvcnQgKiBhcyBfIGZyb20gJy4uL3V0aWwnO1xuXG5mdW5jdGlvbiBsb2FkKCl7XG4gICAgXy50b0FycmF5KFxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbWFpbicpXG4gICAgKS5mb3JFYWNoKHRyYW5zZm9ybSk7XG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybShlbCkge1xuICAgIGVsLnN0eWxlLnNldFByb3BlcnR5KCd0b3AnLCBlbC5vZmZzZXRUb3AgKyAncHgnKTtcbn1cblxuZXhwb3J0IHtcbiAgICBsb2FkXG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL21haW4vaW5kZXguanNcbiAqKi8iLCJpbXBvcnQgKiBhcyBfIGZyb20gJy4uL3V0aWwnO1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcnO1xuXG5sZXQgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG5mdW5jdGlvbiBsb2FkICgpIHtcbiAgICBfLnRvQXJyYXkoXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2J1dHRvbicpXG4gICAgKS5mb3JFYWNoKHRyYW5zZm9ybSk7XG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybSAoZWwpIHtcbiAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgY2FudmFzLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCAnMCcpO1xuICAgIGNhbnZhcy5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsICcwJyk7XG5cbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgaW5pdENhbnZhcyk7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIGVudGVySGFuZGxlcik7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGxlYXZlSGFuZGxlcik7XG5cbiAgICBjYWNoZS5zZXQoZWwsIHtcbiAgICAgICAgY2FudmFzLFxuICAgICAgICByZWN0OiBudWxsXG4gICAgfSk7XG5cbiAgICBsZXQgZmlyc3RFbCA9IGVsLmNoaWxkTm9kZXNbMF07XG4gICAgZWwuaW5zZXJ0QmVmb3JlKGNhbnZhcywgZmlyc3RFbCk7XG59XG5cbmZ1bmN0aW9uIGluaXRDYW52YXMgKCkge1xuICAgIGxldCBtZSA9IHRoaXM7XG4gICAgbGV0IGRhdGEgPSBjYWNoZS5nZXQobWUpO1xuXG4gICAgbGV0IHJlY3QgPSBtZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBkYXRhLnJlY3QgPSByZWN0O1xuXG4gICAgbGV0IGNhbnZhcyA9IGRhdGEuY2FudmFzO1xuICAgIGNhbnZhcy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgcmVjdC53aWR0aCk7XG4gICAgY2FudmFzLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgcmVjdC5oZWlnaHQpO1xuXG4gICAgbWUucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIGluaXRDYW52YXMpO1xufVxuXG5mdW5jdGlvbiBlbnRlckhhbmRsZXIgKGUpIHtcbiAgICBwYWludENpcmNsZS5jYWxsKHRoaXMsIGUsICcjNDQ0Jyk7XG59XG5cbmZ1bmN0aW9uIGxlYXZlSGFuZGxlciAoZSkge1xuICAgIHBhaW50Q2lyY2xlLmNhbGwodGhpcywgZSwgJyNmZmYnKTtcbn1cblxuZnVuY3Rpb24gY2FsRGlzdGFuY2UgKHt4OiB4MSwgeTogeTF9LCB4MiwgeTIpIHtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KFxuICAgICAgICBNYXRoLnBvdyh4MSAtIHgyLCAyKSArXG4gICAgICAgIE1hdGgucG93KHkxIC0geTIsIDIpXG4gICAgKTtcbn1cblxuZnVuY3Rpb24gY2FsUmFkaXVzKHBvcywge3dpZHRoLCBoZWlnaHR9KSB7XG4gICAgcmV0dXJuIE1hdGgubWF4KFxuICAgICAgICBjYWxEaXN0YW5jZShwb3MsIDAsIDApLFxuICAgICAgICBjYWxEaXN0YW5jZShwb3MsIDAsIGhlaWdodCksXG4gICAgICAgIGNhbERpc3RhbmNlKHBvcywgd2lkdGgsIDApLFxuICAgICAgICBjYWxEaXN0YW5jZShwb3MsIHdpZHRoLCBoZWlnaHQpXG4gICAgKTtcbn1cblxuZnVuY3Rpb24gcGFpbnRDaXJjbGUgKGUsIGNvbG9yKSB7XG4gICAgbGV0IG1lID0gdGhpcztcblxuICAgIGxldCB4ID0gZS5vZmZzZXRYLTE7XG4gICAgbGV0IHkgPSBlLm9mZnNldFktMTtcblxuICAgIGxldCB7Y2FudmFzLCByZWN0fSA9IGNhY2hlLmdldChtZSk7XG4gICAgbGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG4gICAgbGV0IHJhZGl1cyA9IGNhbFJhZGl1cyhcbiAgICAgICAge1xuICAgICAgICAgICAgeCxcbiAgICAgICAgICAgIHlcbiAgICAgICAgfSxcbiAgICAgICAgcmVjdFxuICAgICk7XG4gICAgbGV0IHthbmltYXRpb25EdXJhdGlvbn0gPSBjb25maWc7XG5cbiAgICBsZXQgc3RhcnRUaW1lID0gbnVsbDtcbiAgICBmdW5jdGlvbiBwYWludCAodGltZXN0YW1wKSB7XG4gICAgICAgIGlmIChzdGFydFRpbWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHN0YXJ0VGltZSA9IHRpbWVzdGFtcDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBwcm9ncmVzcyA9IHRpbWVzdGFtcCAtIHN0YXJ0VGltZTtcblxuICAgICAgICBjdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmFyYyhcbiAgICAgICAgICAgIHgsXG4gICAgICAgICAgICB5LFxuICAgICAgICAgICAgcmFkaXVzICogcHJvZ3Jlc3MgLyBhbmltYXRpb25EdXJhdGlvbixcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAyICogTWF0aC5QSVxuICAgICAgICApO1xuICAgICAgICBjdHguZmlsbCgpO1xuXG4gICAgICAgIGlmIChwcm9ncmVzcyA8IGFuaW1hdGlvbkR1cmF0aW9uKSB7XG4gICAgICAgICAgICBfLmFuaW1hdGUocGFpbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgXy5hbmltYXRlKHBhaW50KTtcbn1cblxuZXhwb3J0IHtcbiAgICBsb2FkXG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2J1dHRvbi9pbmRleC5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBhbmltYXRpb25EdXJhdGlvbjogMjAwIC8vbXNcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29uZmlnLmpzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9ub3JtYWxpemUuY3NzL25vcm1hbGl6ZS5jc3NcbiAqKiBtb2R1bGUgaWQgPSA5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zdHlsZXMvZ2xvYmFsLmNzc1xuICoqIG1vZHVsZSBpZCA9IDExXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9