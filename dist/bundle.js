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
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 4 */
/***/ (function(module, exports) {

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

/***/ }),
/* 5 */
/***/ (function(module, exports) {

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

/***/ }),
/* 6 */
/***/ (function(module, exports) {

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

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

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
	  var x1 = _ref.x,
	      y1 = _ref.y;
	
	  return Math.ceil(Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2)));
	}
	
	function calRadius(pos, _ref2) {
	  var width = _ref2.width,
	      height = _ref2.height;
	
	  return Math.ceil(Math.max(calDistance(pos, 0, 0), calDistance(pos, 0, height), calDistance(pos, width, 0), calDistance(pos, width, height)));
	}
	
	function paintCircle(e, color) {
	  var me = this;
	
	  var x = e.offsetX - 1;
	  var y = e.offsetY - 1;
	
	  var _cache$get = cache.get(me),
	      canvas = _cache$get.canvas,
	      extent = _cache$get.extent;
	
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

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  animationDuration: 200 //ms
	};

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNmIwNDE2YmExNGUxNWU5Y2VmMTQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvbGFuZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9hbmltYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvZW52LmpzIiwid2VicGFjazovLy8uL3NyYy9oZWFkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlYWRlci9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2J1dHRvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYnV0dG9uL2luZGV4LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnLmpzIl0sIm5hbWVzIjpbInJlYWR5IiwibG9hZCIsIl8iLCJleHRlbmQiLCJ0b0FycmF5IiwibGlrZUFyciIsImkiLCJpaSIsImxlbmd0aCIsImFyciIsIkFycmF5IiwidGFyZ2V0IiwicHJvdG90eXBlIiwic2xpY2UiLCJjYWxsIiwiYXJndW1lbnRzIiwiZm9yRWFjaCIsInNvdXJjZSIsIk9iamVjdCIsImtleXMiLCJrZXkiLCJoYXNPd25Qcm9wZXJ0eSIsImFuaW1hdGUiLCJmdW5jIiwiZ2xvYmFsIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwic2V0VGltZW91dCIsInRpbWVzdGFtcCIsIkRhdGUiLCJnZXRUaW1lIiwiaGFuZGxlciIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdXBwb3J0IiwidG91Y2giLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImNhY2hlIiwiV2Vha01hcCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwidHJhbnNmb3JtIiwiZWwiLCJoMUVsIiwicXVlcnlTZWxlY3RvciIsInNldCIsInRocmVzaG9sZFZhbHVlIiwib2Zmc2V0VG9wIiwib2Zmc2V0SGVpZ2h0IiwicmVhY2hlZFRocmVzaG9sZCIsImluZm9FbCIsInBFbCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzdHlsZSIsInNldFByb3BlcnR5IiwidHJhY2tTaXplIiwiZGVsdGFTaXplIiwic2Nyb2xsSGFuZGxlciIsImJpbmQiLCJlIiwibWUiLCJkYXRhIiwiZ2V0IiwiY3VyVmFsdWUiLCJib2R5Iiwic2Nyb2xsVG9wIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImNsYXNzTGlzdCIsImFkZCIsImNhbnZhcyIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJpbml0Q2FudmFzIiwiZW50ZXJIYW5kbGVyIiwibGVhdmVIYW5kbGVyIiwiZXh0ZW50IiwiZmlyc3RFbCIsImNoaWxkTm9kZXMiLCJpbnNlcnRCZWZvcmUiLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2lkdGgiLCJNYXRoIiwiY2VpbCIsImhlaWdodCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJwYWludENpcmNsZSIsImNhbERpc3RhbmNlIiwieDIiLCJ5MiIsIngxIiwieCIsInkxIiwieSIsInNxcnQiLCJwb3ciLCJjYWxSYWRpdXMiLCJwb3MiLCJtYXgiLCJjb2xvciIsIm9mZnNldFgiLCJvZmZzZXRZIiwiY3R4IiwiZ2V0Q29udGV4dCIsInJhZGl1cyIsImFuaW1hdGlvbkR1cmF0aW9uIiwic3RhcnRUaW1lIiwicGFpbnQiLCJwcm9ncmVzcyIsImZpbGxTdHlsZSIsImJlZ2luUGF0aCIsImFyYyIsIlBJIiwiZmlsbCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFF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TSxNQU5nQixjQU1oQkEsTUFOZ0I7O0FBTzdCLE9BQUkyQixNQUFNakMsT0FBT2tDLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBVjs7QUFFQSxPQUFJQyxTQUFTUixVQUNYO0FBQ0VMLFNBREY7QUFFRUU7QUFGRixJQURXLEVBS1hsQixNQUxXLENBQWI7QUFUNkIsT0FnQnhCOEIsaUJBaEJ3QixvQkFnQnhCQSxpQkFoQndCOzs7QUFrQjdCLE9BQUlDLFlBQVksSUFBaEI7QUFDQSxZQUFTQyxLQUFULENBQWUvRSxTQUFmLEVBQTBCO0FBQ3hCLFNBQUk4RSxjQUFjLElBQWxCLEVBQXdCO0FBQ3RCQSxtQkFBWTlFLFNBQVo7QUFDRDs7QUFFRCxTQUFJZ0YsV0FBV2hGLFlBQVk4RSxTQUEzQjs7QUFFQUosU0FBSU8sU0FBSixHQUFnQlYsS0FBaEI7QUFDQUcsU0FBSVEsU0FBSjtBQUNBUixTQUFJUyxHQUFKLENBQ0VwQixDQURGLEVBRUVFLENBRkYsRUFHRVcsU0FBU0ksUUFBVCxHQUFvQkgsaUJBSHRCLEVBSUUsQ0FKRixFQUtFLElBQUl2QixLQUFLOEIsRUFMWDtBQU9BVixTQUFJVyxJQUFKOztBQUVBLFNBQUlMLFdBQVdILGlCQUFmLEVBQWtDO0FBQ2hDLHNCQUFFbEYsT0FBRixDQUFVb0YsS0FBVjtBQUNEO0FBQ0Y7O0FBRUQsa0JBQUVwRixPQUFGLENBQVVvRixLQUFWO0FBQ0Q7O21CQUVjO0FBQ2J6RztBQURhLEU7Ozs7OztBQzlIZiwwQzs7Ozs7Ozs7Ozs7bUJDQWU7QUFDYnVHLHNCQUFtQixHQUROLENBQ1U7QUFEVixFIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDZiMDQxNmJhMTRlMTVlOWNlZjE0IiwiaW1wb3J0ICcuL2luZGV4LmNzcyc7XG5cbmltcG9ydCBfIGZyb20gJy4vdXRpbCc7XG5cbmltcG9ydCBoZWFkZXIgZnJvbSAnLi9oZWFkZXInO1xuaW1wb3J0IG1haW4gZnJvbSAnLi9tYWluJztcbmltcG9ydCBidXR0b24gZnJvbSAnLi9idXR0b24nO1xuXG5fLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgbWFpbi5sb2FkKCk7XG4gIGhlYWRlci5sb2FkKCk7XG4gIGJ1dHRvbi5sb2FkKCk7XG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2luZGV4LmNzc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgbGFuZyBmcm9tICcuL2xhbmcnO1xuaW1wb3J0IGFuaW1hdGlvbiBmcm9tICcuL2FuaW1hdGlvbic7XG5pbXBvcnQgZW52IGZyb20gJy4vZW52JztcblxubGV0IF8gPSB7fTtcblxubGFuZy5leHRlbmQoXG4gIF8sXG4gIGxhbmcsIGFuaW1hdGlvbiwgZW52XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBfO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsL2luZGV4LmpzIiwiZnVuY3Rpb24gdG9BcnJheShsaWtlQXJyKSB7XG4gIGxldCBpLGlpO1xuICBpID0gMDtcbiAgaWkgPSBsaWtlQXJyLmxlbmd0aDtcbiAgbGV0IGFyciA9IG5ldyBBcnJheShpaSk7XG4gIHdoaWxlIChpIDwgaWkpIHtcbiAgICBhcnJbaV0gPSBsaWtlQXJyW2ldO1xuICAgIGkrKztcbiAgfVxuICByZXR1cm4gYXJyO1xufVxuXG5mdW5jdGlvbiBleHRlbmQodGFyZ2V0KSB7XG4gIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKFxuICAgIGFyZ3VtZW50cyxcbiAgICAxXG4gICkuZm9yRWFjaChcbiAgICBmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICBPYmplY3Qua2V5cyhzb3VyY2UpXG4gICAgICAgIC5mb3JFYWNoKFxuICAgICAgICAgIGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIGlmICghdGFyZ2V0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuICApO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdG9BcnJheSxcbiAgZXh0ZW5kXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsL2xhbmcuanMiLCJmdW5jdGlvbiBhbmltYXRlKGZ1bmMpIHtcbiAgaWYoZ2xvYmFsLnJlcXVlc3RBbmltYXRpb25GcmFtZSkge1xuICAgIGdsb2JhbC5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuYyk7XG4gIH0gZWxzZSB7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgdGltZXN0YW1wID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICBmdW5jKHRpbWVzdGFtcCk7XG4gICAgfSwgMTYpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgYW5pbWF0ZVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9hbmltYXRpb24uanMiLCJmdW5jdGlvbiByZWFkeShoYW5kbGVyKSB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgaGFuZGxlcik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcmVhZHksXG4gIHN1cHBvcnQ6IHtcbiAgICB0b3VjaDogJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50XG4gIH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvZW52LmpzIiwiaW1wb3J0ICcuL2luZGV4LmNzcyc7XG5cbmltcG9ydCBfIGZyb20gJy4uL3V0aWwnO1xubGV0IGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuZnVuY3Rpb24gbG9hZCgpe1xuICBfLnRvQXJyYXkoXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWRlcicpXG4gICkuZm9yRWFjaCggdHJhbnNmb3JtICk7XG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybShlbCkge1xuICBsZXQgaDFFbCA9IGVsLnF1ZXJ5U2VsZWN0b3IoJ2gxJyk7XG4gIGNhY2hlLnNldChcbiAgICBlbCxcbiAgICB7XG4gICAgICB0aHJlc2hvbGRWYWx1ZTogZWwub2Zmc2V0VG9wICsgaDFFbC5vZmZzZXRUb3AgKyBoMUVsLm9mZnNldEhlaWdodCArIDEwLFxuICAgICAgcmVhY2hlZFRocmVzaG9sZDogZmFsc2VcbiAgICB9XG4gICk7XG5cbiAgbGV0IGluZm9FbCA9IGVsLnF1ZXJ5U2VsZWN0b3IoJ2RpdicpO1xuICBsZXQgcEVsID0gaW5mb0VsLnF1ZXJ5U2VsZWN0b3JBbGwoJ3AnKVsxXTtcblxuICBfLnRvQXJyYXkoXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRyYWNrJylcbiAgKS5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgIGVsLnN0eWxlLnNldFByb3BlcnR5KCd3aWR0aCcsIHRyYWNrU2l6ZSArICdweCcpO1xuICAgIGVsLnN0eWxlLnNldFByb3BlcnR5KCdoZWlnaHQnLCB0cmFja1NpemUgKyAncHgnKTtcbiAgICBlbC5zdHlsZS5zZXRQcm9wZXJ0eSgndG9wJywgZGVsdGFTaXplICsgJ3B4Jyk7XG4gICAgZWwuc3R5bGUuc2V0UHJvcGVydHkoJ2xlZnQnLCBkZWx0YVNpemUgKyAncHgnKTtcbiAgfSk7XG5cbiAgbGV0IGhhbmRsZXIgPSBzY3JvbGxIYW5kbGVyLmJpbmQoZWwpO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVyKTtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V3aGVlbCcsIGhhbmRsZXIpO1xuXG4gIGhhbmRsZXIoKTtcbn1cblxuZnVuY3Rpb24gc2Nyb2xsSGFuZGxlcihlKSB7XG4gIGxldCBtZSA9IHRoaXM7XG4gIGxldCBkYXRhID0gY2FjaGUuZ2V0KG1lKTtcblxuICBsZXQgY3VyVmFsdWUgPSBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuICBsZXQgdGhyZXNob2xkVmFsdWUgPSBkYXRhLnRocmVzaG9sZFZhbHVlO1xuICBpZiAoY3VyVmFsdWUgPiB0aHJlc2hvbGRWYWx1ZSkge1xuICAgIGlmICghZGF0YS5yZWFjaGVkVGhyZXNob2xkKSB7XG4gICAgICBkYXRhLnJlYWNoZWRUaHJlc2hvbGQgPSB0cnVlO1xuICAgICAgbWUuc3R5bGUuc2V0UHJvcGVydHkoJ3Bvc2l0aW9uJywgJ2ZpeGVkJyk7XG4gICAgICBtZS5zdHlsZS5zZXRQcm9wZXJ0eSgndG9wJywgLXRocmVzaG9sZFZhbHVlICsncHgnKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKGRhdGEucmVhY2hlZFRocmVzaG9sZCkge1xuICAgICAgZGF0YS5yZWFjaGVkVGhyZXNob2xkID0gZmFsc2U7XG4gICAgICBtZS5zdHlsZS5zZXRQcm9wZXJ0eSgncG9zaXRpb24nLCAncmVsYXRpdmUnKTtcbiAgICAgIG1lLnN0eWxlLnNldFByb3BlcnR5KCd0b3AnLCAnMCcpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGxvYWRcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2hlYWRlci9pbmRleC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaGVhZGVyL2luZGV4LmNzc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgXyBmcm9tICcuLi91dGlsJztcblxuZnVuY3Rpb24gbG9hZCgpe1xuICBfLnRvQXJyYXkoXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ21haW4nKVxuICApLmZvckVhY2godHJhbnNmb3JtKTtcbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtKGVsKSB7XG4gIGVsLnN0eWxlLnNldFByb3BlcnR5KCd0b3AnLCBlbC5vZmZzZXRUb3AgKyAncHgnKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBsb2FkXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tYWluL2luZGV4LmpzIiwiaW1wb3J0ICcuL2luZGV4LmNzcyc7XG5cbmltcG9ydCBfIGZyb20gJy4uL3V0aWwnO1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcnO1xuXG5sZXQgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG5mdW5jdGlvbiBsb2FkKCkge1xuICBpZiAoXy5zdXBwb3J0LnRvdWNoKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIF8udG9BcnJheShcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdKLWJ1dHRvbicpXG4gICkuZm9yRWFjaCh0cmFuc2Zvcm0pO1xufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm0oZWwpIHtcbiAgZWwuY2xhc3NMaXN0LmFkZCgnYnV0dG9uJyk7XG4gIHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgY2FudmFzLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCAnMCcpO1xuICBjYW52YXMuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCAnMCcpO1xuXG4gIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBpbml0Q2FudmFzKTtcbiAgZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIGVudGVySGFuZGxlcik7XG4gIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBsZWF2ZUhhbmRsZXIpO1xuXG4gIGNhY2hlLnNldChlbCwge1xuICAgIGNhbnZhcyxcbiAgICBleHRlbnQ6IG51bGxcbiAgfSk7XG5cbiAgbGV0IGZpcnN0RWwgPSBlbC5jaGlsZE5vZGVzWzBdO1xuICBlbC5pbnNlcnRCZWZvcmUoY2FudmFzLCBmaXJzdEVsKTtcbn1cblxuZnVuY3Rpb24gaW5pdENhbnZhcygpIHtcbiAgbGV0IG1lID0gdGhpcztcbiAgbGV0IGRhdGEgPSBjYWNoZS5nZXQobWUpO1xuXG4gIGxldCByZWN0ID0gbWUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIGxldCBleHRlbnQgPSB7XG4gICAgd2lkdGg6IE1hdGguY2VpbChyZWN0LndpZHRoKSxcbiAgICBoZWlnaHQ6IE1hdGguY2VpbChyZWN0LmhlaWdodClcbiAgfTtcbiAgZGF0YS5leHRlbnQgPSByZWN0O1xuXG4gIGxldCBjYW52YXMgPSBkYXRhLmNhbnZhcztcbiAgY2FudmFzLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCBleHRlbnQud2lkdGgpO1xuICBjYW52YXMuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCBleHRlbnQuaGVpZ2h0KTtcblxuICBtZS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgaW5pdENhbnZhcyk7XG59XG5cbmZ1bmN0aW9uIGVudGVySGFuZGxlcihlKSB7XG4gIHBhaW50Q2lyY2xlLmNhbGwodGhpcywgZSwgJyMwMDAnKTtcbn1cblxuZnVuY3Rpb24gbGVhdmVIYW5kbGVyKGUpIHtcbiAgcGFpbnRDaXJjbGUuY2FsbCh0aGlzLCBlLCAnI2ZmZicpO1xufVxuXG5mdW5jdGlvbiBjYWxEaXN0YW5jZSh7eDogeDEsIHk6IHkxfSwgeDIsIHkyKSB7XG4gIHJldHVybiBNYXRoLmNlaWwoXG4gICAgTWF0aC5zcXJ0KFxuICAgICAgTWF0aC5wb3coeDEgLSB4MiwgMikgK1xuICAgICAgTWF0aC5wb3coeTEgLSB5MiwgMilcbiAgICApXG4gICk7XG59XG5cbmZ1bmN0aW9uIGNhbFJhZGl1cyhwb3MsIHt3aWR0aCwgaGVpZ2h0fSkge1xuICByZXR1cm4gTWF0aC5jZWlsKFxuICAgIE1hdGgubWF4KFxuICAgICAgY2FsRGlzdGFuY2UocG9zLCAwLCAwKSxcbiAgICAgIGNhbERpc3RhbmNlKHBvcywgMCwgaGVpZ2h0KSxcbiAgICAgIGNhbERpc3RhbmNlKHBvcywgd2lkdGgsIDApLFxuICAgICAgY2FsRGlzdGFuY2UocG9zLCB3aWR0aCwgaGVpZ2h0KVxuICAgIClcbiAgKTtcbn1cblxuZnVuY3Rpb24gcGFpbnRDaXJjbGUoZSwgY29sb3IpIHtcbiAgbGV0IG1lID0gdGhpcztcblxuICBsZXQgeCA9IGUub2Zmc2V0WCAtIDE7XG4gIGxldCB5ID0gZS5vZmZzZXRZIC0gMTtcblxuICBsZXQge2NhbnZhcywgZXh0ZW50fSA9IGNhY2hlLmdldChtZSk7XG4gIGxldCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuICBsZXQgcmFkaXVzID0gY2FsUmFkaXVzKFxuICAgIHtcbiAgICAgIHgsXG4gICAgICB5XG4gICAgfSxcbiAgICBleHRlbnRcbiAgKTtcbiAgbGV0IHthbmltYXRpb25EdXJhdGlvbn0gPSBjb25maWc7XG5cbiAgbGV0IHN0YXJ0VGltZSA9IG51bGw7XG4gIGZ1bmN0aW9uIHBhaW50KHRpbWVzdGFtcCkge1xuICAgIGlmIChzdGFydFRpbWUgPT09IG51bGwpIHtcbiAgICAgIHN0YXJ0VGltZSA9IHRpbWVzdGFtcDtcbiAgICB9XG5cbiAgICBsZXQgcHJvZ3Jlc3MgPSB0aW1lc3RhbXAgLSBzdGFydFRpbWU7XG5cbiAgICBjdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5hcmMoXG4gICAgICB4LFxuICAgICAgeSxcbiAgICAgIHJhZGl1cyAqIHByb2dyZXNzIC8gYW5pbWF0aW9uRHVyYXRpb24sXG4gICAgICAwLFxuICAgICAgMiAqIE1hdGguUElcbiAgICApO1xuICAgIGN0eC5maWxsKCk7XG5cbiAgICBpZiAocHJvZ3Jlc3MgPCBhbmltYXRpb25EdXJhdGlvbikge1xuICAgICAgXy5hbmltYXRlKHBhaW50KTtcbiAgICB9XG4gIH1cblxuICBfLmFuaW1hdGUocGFpbnQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGxvYWRcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2J1dHRvbi9pbmRleC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYnV0dG9uL2luZGV4LmNzc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGRlZmF1bHQge1xuICBhbmltYXRpb25EdXJhdGlvbjogMjAwIC8vbXNcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbmZpZy5qcyJdLCJzb3VyY2VSb290IjoiIn0=