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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNGVlZjZmMTJmZWYyOTJjOTMwNGMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvbGFuZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9hbmltYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvZW52LmpzIiwid2VicGFjazovLy8uL3NyYy9oZWFkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlYWRlci9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2J1dHRvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYnV0dG9uL2luZGV4LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnLmpzIl0sIm5hbWVzIjpbInJlYWR5IiwibG9hZCIsIl8iLCJleHRlbmQiLCJ0b0FycmF5IiwibGlrZUFyciIsImkiLCJpaSIsImxlbmd0aCIsImFyciIsIkFycmF5IiwidGFyZ2V0IiwicHJvdG90eXBlIiwic2xpY2UiLCJjYWxsIiwiYXJndW1lbnRzIiwiZm9yRWFjaCIsInNvdXJjZSIsIk9iamVjdCIsImtleXMiLCJrZXkiLCJoYXNPd25Qcm9wZXJ0eSIsImFuaW1hdGUiLCJmdW5jIiwiZ2xvYmFsIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwic2V0VGltZW91dCIsInRpbWVzdGFtcCIsIkRhdGUiLCJnZXRUaW1lIiwiaGFuZGxlciIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdXBwb3J0IiwidG91Y2giLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImNhY2hlIiwiV2Vha01hcCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwidHJhbnNmb3JtIiwiZWwiLCJoMUVsIiwicXVlcnlTZWxlY3RvciIsInNldCIsInRocmVzaG9sZFZhbHVlIiwib2Zmc2V0VG9wIiwib2Zmc2V0SGVpZ2h0IiwicmVhY2hlZFRocmVzaG9sZCIsImluZm9FbCIsInBFbCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzdHlsZSIsInNldFByb3BlcnR5IiwidHJhY2tTaXplIiwiZGVsdGFTaXplIiwic2Nyb2xsSGFuZGxlciIsImJpbmQiLCJlIiwibWUiLCJkYXRhIiwiZ2V0IiwiY3VyVmFsdWUiLCJib2R5Iiwic2Nyb2xsVG9wIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImNsYXNzTGlzdCIsImFkZCIsImNhbnZhcyIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJpbml0Q2FudmFzIiwiZW50ZXJIYW5kbGVyIiwibGVhdmVIYW5kbGVyIiwiZXh0ZW50IiwiZmlyc3RFbCIsImNoaWxkTm9kZXMiLCJpbnNlcnRCZWZvcmUiLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2lkdGgiLCJNYXRoIiwiY2VpbCIsImhlaWdodCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJwYWludENpcmNsZSIsImNhbERpc3RhbmNlIiwieDIiLCJ5MiIsIngxIiwieCIsInkxIiwieSIsInNxcnQiLCJwb3ciLCJjYWxSYWRpdXMiLCJwb3MiLCJtYXgiLCJjb2xvciIsIm9mZnNldFgiLCJvZmZzZXRZIiwiY3R4IiwiZ2V0Q29udGV4dCIsInJhZGl1cyIsImFuaW1hdGlvbkR1cmF0aW9uIiwic3RhcnRUaW1lIiwicGFpbnQiLCJwcm9ncmVzcyIsImZpbGxTdHlsZSIsImJlZ2luUGF0aCIsImFyYyIsIlBJIiwiZmlsbCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFF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TSxNQU5nQixjQU1oQkEsTUFOZ0I7O0FBTzdCLE9BQUkyQixNQUFNakMsT0FBT2tDLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBVjs7QUFFQSxPQUFJQyxTQUFTUixVQUNYO0FBQ0VMLFNBREY7QUFFRUU7QUFGRixJQURXLEVBS1hsQixNQUxXLENBQWI7QUFUNkIsT0FnQnhCOEIsaUJBaEJ3QixvQkFnQnhCQSxpQkFoQndCOzs7QUFrQjdCLE9BQUlDLFlBQVksSUFBaEI7QUFDQSxZQUFTQyxLQUFULENBQWUvRSxTQUFmLEVBQTBCO0FBQ3hCLFNBQUk4RSxjQUFjLElBQWxCLEVBQXdCO0FBQ3RCQSxtQkFBWTlFLFNBQVo7QUFDRDs7QUFFRCxTQUFJZ0YsV0FBV2hGLFlBQVk4RSxTQUEzQjs7QUFFQUosU0FBSU8sU0FBSixHQUFnQlYsS0FBaEI7QUFDQUcsU0FBSVEsU0FBSjtBQUNBUixTQUFJUyxHQUFKLENBQ0VwQixDQURGLEVBRUVFLENBRkYsRUFHRVcsU0FBU0ksUUFBVCxHQUFvQkgsaUJBSHRCLEVBSUUsQ0FKRixFQUtFLElBQUl2QixLQUFLOEIsRUFMWDtBQU9BVixTQUFJVyxJQUFKOztBQUVBLFNBQUlMLFdBQVdILGlCQUFmLEVBQWtDO0FBQ2hDLHNCQUFFbEYsT0FBRixDQUFVb0YsS0FBVjtBQUNEO0FBQ0Y7O0FBRUQsa0JBQUVwRixPQUFGLENBQVVvRixLQUFWO0FBQ0Q7O21CQUVjO0FBQ2J6RztBQURhLEU7Ozs7OztBQzlIZiwwQzs7Ozs7Ozs7Ozs7bUJDQWU7QUFDYnVHLHNCQUFtQixHQUROLENBQ1U7QUFEVixFIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgNGVlZjZmMTJmZWYyOTJjOTMwNGNcbiAqKi8iLCJpbXBvcnQgJy4vaW5kZXguY3NzJztcblxuaW1wb3J0IF8gZnJvbSAnLi91dGlsJztcblxuaW1wb3J0IGhlYWRlciBmcm9tICcuL2hlYWRlcic7XG5pbXBvcnQgbWFpbiBmcm9tICcuL21haW4nO1xuaW1wb3J0IGJ1dHRvbiBmcm9tICcuL2J1dHRvbic7XG5cbl8ucmVhZHkoZnVuY3Rpb24oKSB7XG4gIG1haW4ubG9hZCgpO1xuICBoZWFkZXIubG9hZCgpO1xuICBidXR0b24ubG9hZCgpO1xufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaW5kZXguanNcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5kZXguY3NzXG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IGxhbmcgZnJvbSAnLi9sYW5nJztcbmltcG9ydCBhbmltYXRpb24gZnJvbSAnLi9hbmltYXRpb24nO1xuaW1wb3J0IGVudiBmcm9tICcuL2Vudic7XG5cbmxldCBfID0ge307XG5cbmxhbmcuZXh0ZW5kKFxuICBfLFxuICBsYW5nLCBhbmltYXRpb24sIGVudlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgXztcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy91dGlsL2luZGV4LmpzXG4gKiovIiwiZnVuY3Rpb24gdG9BcnJheShsaWtlQXJyKSB7XG4gIGxldCBpLGlpO1xuICBpID0gMDtcbiAgaWkgPSBsaWtlQXJyLmxlbmd0aDtcbiAgbGV0IGFyciA9IG5ldyBBcnJheShpaSk7XG4gIHdoaWxlIChpIDwgaWkpIHtcbiAgICBhcnJbaV0gPSBsaWtlQXJyW2ldO1xuICAgIGkrKztcbiAgfVxuICByZXR1cm4gYXJyO1xufVxuXG5mdW5jdGlvbiBleHRlbmQodGFyZ2V0KSB7XG4gIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKFxuICAgIGFyZ3VtZW50cyxcbiAgICAxXG4gICkuZm9yRWFjaChcbiAgICBmdW5jdGlvbihzb3VyY2UpIHtcbiAgICAgIE9iamVjdC5rZXlzKHNvdXJjZSlcbiAgICAgICAgLmZvckVhY2goXG4gICAgICAgICAgZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgICBpZiAoIXRhcmdldC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cbiAgKTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHRvQXJyYXksXG4gIGV4dGVuZFxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy91dGlsL2xhbmcuanNcbiAqKi8iLCJmdW5jdGlvbiBhbmltYXRlKGZ1bmMpIHtcbiAgaWYoZ2xvYmFsLnJlcXVlc3RBbmltYXRpb25GcmFtZSkge1xuICAgIGdsb2JhbC5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuYyk7XG4gIH0gZWxzZSB7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIGxldCB0aW1lc3RhbXAgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgIGZ1bmModGltZXN0YW1wKTtcbiAgICB9LCAxNik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBhbmltYXRlXG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3V0aWwvYW5pbWF0aW9uLmpzXG4gKiovIiwiZnVuY3Rpb24gcmVhZHkoaGFuZGxlcikge1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGhhbmRsZXIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHJlYWR5LFxuICBzdXBwb3J0OiB7XG4gICAgdG91Y2g6ICdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudFxuICB9XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3V0aWwvZW52LmpzXG4gKiovIiwiaW1wb3J0ICcuL2luZGV4LmNzcyc7XG5cbmltcG9ydCBfIGZyb20gJy4uL3V0aWwnO1xubGV0IGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuZnVuY3Rpb24gbG9hZCgpe1xuICBfLnRvQXJyYXkoXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWRlcicpXG4gICkuZm9yRWFjaCggdHJhbnNmb3JtICk7XG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybShlbCkge1xuICBsZXQgaDFFbCA9IGVsLnF1ZXJ5U2VsZWN0b3IoJ2gxJyk7XG4gIGNhY2hlLnNldChcbiAgICBlbCxcbiAgICB7XG4gICAgICB0aHJlc2hvbGRWYWx1ZTogZWwub2Zmc2V0VG9wICsgaDFFbC5vZmZzZXRUb3AgKyBoMUVsLm9mZnNldEhlaWdodCArIDEwLFxuICAgICAgcmVhY2hlZFRocmVzaG9sZDogZmFsc2VcbiAgICB9XG4gICk7XG5cbiAgbGV0IGluZm9FbCA9IGVsLnF1ZXJ5U2VsZWN0b3IoJ2RpdicpO1xuICBsZXQgcEVsID0gaW5mb0VsLnF1ZXJ5U2VsZWN0b3JBbGwoJ3AnKVsxXTtcblxuICBfLnRvQXJyYXkoXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRyYWNrJylcbiAgKS5mb3JFYWNoKGZ1bmN0aW9uKGVsKSB7XG4gICAgZWwuc3R5bGUuc2V0UHJvcGVydHkoJ3dpZHRoJywgdHJhY2tTaXplICsgJ3B4Jyk7XG4gICAgZWwuc3R5bGUuc2V0UHJvcGVydHkoJ2hlaWdodCcsIHRyYWNrU2l6ZSArICdweCcpO1xuICAgIGVsLnN0eWxlLnNldFByb3BlcnR5KCd0b3AnLCBkZWx0YVNpemUgKyAncHgnKTtcbiAgICBlbC5zdHlsZS5zZXRQcm9wZXJ0eSgnbGVmdCcsIGRlbHRhU2l6ZSArICdweCcpO1xuICB9KTtcblxuICBsZXQgaGFuZGxlciA9IHNjcm9sbEhhbmRsZXIuYmluZChlbCk7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZXIpO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXdoZWVsJywgaGFuZGxlcik7XG5cbiAgaGFuZGxlcigpO1xufVxuXG5mdW5jdGlvbiBzY3JvbGxIYW5kbGVyKGUpIHtcbiAgbGV0IG1lID0gdGhpcztcbiAgbGV0IGRhdGEgPSBjYWNoZS5nZXQobWUpO1xuXG4gIGxldCBjdXJWYWx1ZSA9IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG4gIGxldCB0aHJlc2hvbGRWYWx1ZSA9IGRhdGEudGhyZXNob2xkVmFsdWU7XG4gIGlmIChjdXJWYWx1ZSA+IHRocmVzaG9sZFZhbHVlKSB7XG4gICAgaWYgKCFkYXRhLnJlYWNoZWRUaHJlc2hvbGQpIHtcbiAgICAgIGRhdGEucmVhY2hlZFRocmVzaG9sZCA9IHRydWU7XG4gICAgICBtZS5zdHlsZS5zZXRQcm9wZXJ0eSgncG9zaXRpb24nLCAnZml4ZWQnKTtcbiAgICAgIG1lLnN0eWxlLnNldFByb3BlcnR5KCd0b3AnLCAtdGhyZXNob2xkVmFsdWUgKydweCcpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAoZGF0YS5yZWFjaGVkVGhyZXNob2xkKSB7XG4gICAgICBkYXRhLnJlYWNoZWRUaHJlc2hvbGQgPSBmYWxzZTtcbiAgICAgIG1lLnN0eWxlLnNldFByb3BlcnR5KCdwb3NpdGlvbicsICdyZWxhdGl2ZScpO1xuICAgICAgbWUuc3R5bGUuc2V0UHJvcGVydHkoJ3RvcCcsICcwJyk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbG9hZFxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9oZWFkZXIvaW5kZXguanNcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaGVhZGVyL2luZGV4LmNzc1xuICoqIG1vZHVsZSBpZCA9IDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBfIGZyb20gJy4uL3V0aWwnO1xuXG5mdW5jdGlvbiBsb2FkKCl7XG4gIF8udG9BcnJheShcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbWFpbicpXG4gICkuZm9yRWFjaCh0cmFuc2Zvcm0pO1xufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm0oZWwpIHtcbiAgZWwuc3R5bGUuc2V0UHJvcGVydHkoJ3RvcCcsIGVsLm9mZnNldFRvcCArICdweCcpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGxvYWRcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvbWFpbi9pbmRleC5qc1xuICoqLyIsImltcG9ydCAnLi9pbmRleC5jc3MnO1xuXG5pbXBvcnQgXyBmcm9tICcuLi91dGlsJztcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJztcblxubGV0IGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuZnVuY3Rpb24gbG9hZCgpIHtcbiAgaWYgKF8uc3VwcG9ydC50b3VjaCkge1xuICAgIHJldHVybjtcbiAgfVxuICBfLnRvQXJyYXkoXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnSi1idXR0b24nKVxuICApLmZvckVhY2godHJhbnNmb3JtKTtcbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtKGVsKSB7XG4gIGVsLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbicpO1xuICB2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gIGNhbnZhcy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgJzAnKTtcbiAgY2FudmFzLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgJzAnKTtcblxuICBlbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgaW5pdENhbnZhcyk7XG4gIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBlbnRlckhhbmRsZXIpO1xuICBlbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgbGVhdmVIYW5kbGVyKTtcblxuICBjYWNoZS5zZXQoZWwsIHtcbiAgICBjYW52YXMsXG4gICAgZXh0ZW50OiBudWxsXG4gIH0pO1xuXG4gIGxldCBmaXJzdEVsID0gZWwuY2hpbGROb2Rlc1swXTtcbiAgZWwuaW5zZXJ0QmVmb3JlKGNhbnZhcywgZmlyc3RFbCk7XG59XG5cbmZ1bmN0aW9uIGluaXRDYW52YXMoKSB7XG4gIGxldCBtZSA9IHRoaXM7XG4gIGxldCBkYXRhID0gY2FjaGUuZ2V0KG1lKTtcblxuICBsZXQgcmVjdCA9IG1lLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICBsZXQgZXh0ZW50ID0ge1xuICAgIHdpZHRoOiBNYXRoLmNlaWwocmVjdC53aWR0aCksXG4gICAgaGVpZ2h0OiBNYXRoLmNlaWwocmVjdC5oZWlnaHQpXG4gIH07XG4gIGRhdGEuZXh0ZW50ID0gcmVjdDtcblxuICBsZXQgY2FudmFzID0gZGF0YS5jYW52YXM7XG4gIGNhbnZhcy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgZXh0ZW50LndpZHRoKTtcbiAgY2FudmFzLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgZXh0ZW50LmhlaWdodCk7XG5cbiAgbWUucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIGluaXRDYW52YXMpO1xufVxuXG5mdW5jdGlvbiBlbnRlckhhbmRsZXIoZSkge1xuICBwYWludENpcmNsZS5jYWxsKHRoaXMsIGUsICcjMDAwJyk7XG59XG5cbmZ1bmN0aW9uIGxlYXZlSGFuZGxlcihlKSB7XG4gIHBhaW50Q2lyY2xlLmNhbGwodGhpcywgZSwgJyNmZmYnKTtcbn1cblxuZnVuY3Rpb24gY2FsRGlzdGFuY2Uoe3g6IHgxLCB5OiB5MX0sIHgyLCB5Mikge1xuICByZXR1cm4gTWF0aC5jZWlsKFxuICAgIE1hdGguc3FydChcbiAgICAgIE1hdGgucG93KHgxIC0geDIsIDIpICtcbiAgICAgIE1hdGgucG93KHkxIC0geTIsIDIpXG4gICAgKVxuICApO1xufVxuXG5mdW5jdGlvbiBjYWxSYWRpdXMocG9zLCB7d2lkdGgsIGhlaWdodH0pIHtcbiAgcmV0dXJuIE1hdGguY2VpbChcbiAgICBNYXRoLm1heChcbiAgICAgIGNhbERpc3RhbmNlKHBvcywgMCwgMCksXG4gICAgICBjYWxEaXN0YW5jZShwb3MsIDAsIGhlaWdodCksXG4gICAgICBjYWxEaXN0YW5jZShwb3MsIHdpZHRoLCAwKSxcbiAgICAgIGNhbERpc3RhbmNlKHBvcywgd2lkdGgsIGhlaWdodClcbiAgICApXG4gICk7XG59XG5cbmZ1bmN0aW9uIHBhaW50Q2lyY2xlKGUsIGNvbG9yKSB7XG4gIGxldCBtZSA9IHRoaXM7XG5cbiAgbGV0IHggPSBlLm9mZnNldFggLSAxO1xuICBsZXQgeSA9IGUub2Zmc2V0WSAtIDE7XG5cbiAgbGV0IHtjYW52YXMsIGV4dGVudH0gPSBjYWNoZS5nZXQobWUpO1xuICBsZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbiAgbGV0IHJhZGl1cyA9IGNhbFJhZGl1cyhcbiAgICB7XG4gICAgICB4LFxuICAgICAgeVxuICAgIH0sXG4gICAgZXh0ZW50XG4gICk7XG4gIGxldCB7YW5pbWF0aW9uRHVyYXRpb259ID0gY29uZmlnO1xuXG4gIGxldCBzdGFydFRpbWUgPSBudWxsO1xuICBmdW5jdGlvbiBwYWludCh0aW1lc3RhbXApIHtcbiAgICBpZiAoc3RhcnRUaW1lID09PSBudWxsKSB7XG4gICAgICBzdGFydFRpbWUgPSB0aW1lc3RhbXA7XG4gICAgfVxuXG4gICAgbGV0IHByb2dyZXNzID0gdGltZXN0YW1wIC0gc3RhcnRUaW1lO1xuXG4gICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHguYXJjKFxuICAgICAgeCxcbiAgICAgIHksXG4gICAgICByYWRpdXMgKiBwcm9ncmVzcyAvIGFuaW1hdGlvbkR1cmF0aW9uLFxuICAgICAgMCxcbiAgICAgIDIgKiBNYXRoLlBJXG4gICAgKTtcbiAgICBjdHguZmlsbCgpO1xuXG4gICAgaWYgKHByb2dyZXNzIDwgYW5pbWF0aW9uRHVyYXRpb24pIHtcbiAgICAgIF8uYW5pbWF0ZShwYWludCk7XG4gICAgfVxuICB9XG5cbiAgXy5hbmltYXRlKHBhaW50KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBsb2FkXG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2J1dHRvbi9pbmRleC5qc1xuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9idXR0b24vaW5kZXguY3NzXG4gKiogbW9kdWxlIGlkID0gMTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgYW5pbWF0aW9uRHVyYXRpb246IDIwMCAvL21zXG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbmZpZy5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=