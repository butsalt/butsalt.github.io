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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNGVlZjZmMTJmZWYyOTJjOTMwNGMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvbGFuZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9hbmltYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvZW52LmpzIiwid2VicGFjazovLy8uL3NyYy9oZWFkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlYWRlci9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2J1dHRvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYnV0dG9uL2luZGV4LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnLmpzIl0sIm5hbWVzIjpbInJlYWR5IiwibG9hZCIsIl8iLCJleHRlbmQiLCJ0b0FycmF5IiwibGlrZUFyciIsImkiLCJpaSIsImxlbmd0aCIsImFyciIsIkFycmF5IiwidGFyZ2V0IiwicHJvdG90eXBlIiwic2xpY2UiLCJjYWxsIiwiYXJndW1lbnRzIiwiZm9yRWFjaCIsInNvdXJjZSIsIk9iamVjdCIsImtleXMiLCJrZXkiLCJoYXNPd25Qcm9wZXJ0eSIsImFuaW1hdGUiLCJmdW5jIiwiZ2xvYmFsIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwic2V0VGltZW91dCIsInRpbWVzdGFtcCIsIkRhdGUiLCJnZXRUaW1lIiwiaGFuZGxlciIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdXBwb3J0IiwidG91Y2giLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImNhY2hlIiwiV2Vha01hcCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwidHJhbnNmb3JtIiwiZWwiLCJoMUVsIiwicXVlcnlTZWxlY3RvciIsInNldCIsInRocmVzaG9sZFZhbHVlIiwib2Zmc2V0VG9wIiwib2Zmc2V0SGVpZ2h0IiwicmVhY2hlZFRocmVzaG9sZCIsImluZm9FbCIsInBFbCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzdHlsZSIsInNldFByb3BlcnR5IiwidHJhY2tTaXplIiwiZGVsdGFTaXplIiwic2Nyb2xsSGFuZGxlciIsImJpbmQiLCJlIiwibWUiLCJkYXRhIiwiZ2V0IiwiY3VyVmFsdWUiLCJib2R5Iiwic2Nyb2xsVG9wIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImNsYXNzTGlzdCIsImFkZCIsImNhbnZhcyIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJpbml0Q2FudmFzIiwiZW50ZXJIYW5kbGVyIiwibGVhdmVIYW5kbGVyIiwiZXh0ZW50IiwiZmlyc3RFbCIsImNoaWxkTm9kZXMiLCJpbnNlcnRCZWZvcmUiLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2lkdGgiLCJNYXRoIiwiY2VpbCIsImhlaWdodCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJwYWludENpcmNsZSIsImNhbERpc3RhbmNlIiwieDIiLCJ5MiIsIngxIiwieCIsInkxIiwieSIsInNxcnQiLCJwb3ciLCJjYWxSYWRpdXMiLCJwb3MiLCJtYXgiLCJjb2xvciIsIm9mZnNldFgiLCJvZmZzZXRZIiwiY3R4IiwiZ2V0Q29udGV4dCIsInJhZGl1cyIsImFuaW1hdGlvbkR1cmF0aW9uIiwic3RhcnRUaW1lIiwicGFpbnQiLCJwcm9ncmVzcyIsImZpbGxTdHlsZSIsImJlZ2luUGF0aCIsImFyYyIsIlBJIiwiZmlsbCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQ3RDQTs7QUFFQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsZ0JBQUVBLEtBQUYsQ0FBUSxZQUFZO0FBQ2xCLGtCQUFLQyxJQUFMO0FBQ0Esb0JBQU9BLElBQVA7QUFDQSxvQkFBT0EsSUFBUDtBQUNELEVBSkQsRTs7Ozs7O0FDUkEsMEM7Ozs7Ozs7Ozs7Ozs7QUNBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLEtBQUlDLElBQUksRUFBUjs7QUFFQSxnQkFBS0MsTUFBTCxDQUNFRCxDQURGOzttQkFLZUEsQzs7Ozs7Ozs7Ozs7QUNYZixVQUFTRSxPQUFULENBQWlCQyxPQUFqQixFQUEwQjtBQUN4QixPQUFJQyxVQUFKO0FBQUEsT0FBTUMsV0FBTjtBQUNBRCxPQUFJLENBQUo7QUFDQUMsUUFBS0YsUUFBUUcsTUFBYjtBQUNBLE9BQUlDLE1BQU0sSUFBSUMsS0FBSixDQUFVSCxFQUFWLENBQVY7QUFDQSxVQUFPRCxJQUFJQyxFQUFYLEVBQWU7QUFDYkUsU0FBSUgsQ0FBSixJQUFTRCxRQUFRQyxDQUFSLENBQVQ7QUFDQUE7QUFDRDtBQUNELFVBQU9HLEdBQVA7QUFDRDs7QUFFRCxVQUFTTixNQUFULENBQWlCUSxNQUFqQixFQUF5QjtBQUN2QkQsU0FBTUUsU0FBTixDQUFnQkMsS0FBaEIsQ0FBc0JDLElBQXRCLENBQ0VDLFNBREYsRUFFRSxDQUZGLEVBR0VDLE9BSEYsQ0FJRSxVQUFVQyxNQUFWLEVBQWtCO0FBQ2hCQyxZQUFPQyxJQUFQLENBQVlGLE1BQVosRUFDR0QsT0FESCxDQUVJLFVBQVVJLEdBQVYsRUFBZTtBQUNiLFdBQUksQ0FBQ1QsT0FBT1UsY0FBUCxDQUFzQkQsR0FBdEIsQ0FBTCxFQUFpQztBQUMvQlQsZ0JBQU9TLEdBQVAsSUFBY0gsT0FBT0csR0FBUCxDQUFkO0FBQ0Q7QUFDRixNQU5MO0FBUUQsSUFiSDtBQWVEOzttQkFHYztBQUNiaEIsbUJBRGE7QUFFYkQ7QUFGYSxFOzs7Ozs7Ozs7OztBQy9CZixVQUFTbUIsT0FBVCxDQUFpQkMsSUFBakIsRUFBdUI7QUFDckIsT0FBR0MsT0FBT0MscUJBQVYsRUFBaUM7QUFDL0JELFlBQU9DLHFCQUFQLENBQTZCRixJQUE3QjtBQUNELElBRkQsTUFFTztBQUNMRyxnQkFBVyxZQUFXO0FBQ3BCLFdBQUlDLFlBQVksSUFBSUMsSUFBSixHQUFXQyxPQUFYLEVBQWhCO0FBQ0FOLFlBQUtJLFNBQUw7QUFDRCxNQUhELEVBR0csRUFISDtBQUlEO0FBQ0Y7O21CQUVjO0FBQ2JMO0FBRGEsRTs7Ozs7Ozs7Ozs7O0FDWGYsVUFBU3RCLEtBQVQsQ0FBZ0I4QixPQUFoQixFQUF5QjtBQUN2QkMsVUFBT0MsZ0JBQVAsQ0FBd0IsTUFBeEIsRUFBZ0NGLE9BQWhDO0FBQ0Q7O21CQUVjO0FBQ2I5QixlQURhO0FBRWJpQyxZQUFTO0FBQ1BDLFlBQU8sa0JBQWtCQyxTQUFTQztBQUQzQjtBQUZJLEU7Ozs7Ozs7Ozs7OztBQ0pmOztBQUVBOzs7Ozs7QUFDQSxLQUFJQyxRQUFRLElBQUlDLE9BQUosRUFBWjs7QUFFQSxVQUFTckMsSUFBVCxHQUFlO0FBQ2Isa0JBQUVHLE9BQUYsQ0FDRStCLFNBQVNJLG9CQUFULENBQThCLFFBQTlCLENBREYsRUFFRXZCLE9BRkYsQ0FFV3dCLFNBRlg7QUFHRDs7QUFFRCxVQUFTQSxTQUFULENBQW9CQyxFQUFwQixFQUF3QjtBQUN0QixPQUFJQyxPQUFPRCxHQUFHRSxhQUFILENBQWlCLElBQWpCLENBQVg7QUFDQU4sU0FBTU8sR0FBTixDQUNFSCxFQURGLEVBRUU7QUFDRUkscUJBQWdCSixHQUFHSyxTQUFILEdBQWVKLEtBQUtJLFNBQXBCLEdBQWdDSixLQUFLSyxZQUFyQyxHQUFvRCxFQUR0RTtBQUVFQyx1QkFBa0I7QUFGcEIsSUFGRjs7QUFRQSxPQUFJQyxTQUFTUixHQUFHRSxhQUFILENBQWlCLEtBQWpCLENBQWI7QUFDQSxPQUFJTyxNQUFNRCxPQUFPRSxnQkFBUCxDQUF3QixHQUF4QixFQUE2QixDQUE3QixDQUFWOztBQUVBLGtCQUFFL0MsT0FBRixDQUNFK0IsU0FBU2dCLGdCQUFULENBQTBCLFFBQTFCLENBREYsRUFFRW5DLE9BRkYsQ0FFVSxVQUFVeUIsRUFBVixFQUFjO0FBQ3RCQSxRQUFHVyxLQUFILENBQVNDLFdBQVQsQ0FBcUIsT0FBckIsRUFBOEJDLFlBQVksSUFBMUM7QUFDQWIsUUFBR1csS0FBSCxDQUFTQyxXQUFULENBQXFCLFFBQXJCLEVBQStCQyxZQUFZLElBQTNDO0FBQ0FiLFFBQUdXLEtBQUgsQ0FBU0MsV0FBVCxDQUFxQixLQUFyQixFQUE0QkUsWUFBWSxJQUF4QztBQUNBZCxRQUFHVyxLQUFILENBQVNDLFdBQVQsQ0FBcUIsTUFBckIsRUFBNkJFLFlBQVksSUFBekM7QUFDRCxJQVBEOztBQVNBLE9BQUl6QixVQUFVMEIsY0FBY0MsSUFBZCxDQUFtQmhCLEVBQW5CLENBQWQ7QUFDQU4sWUFBU0gsZ0JBQVQsQ0FBMEIsUUFBMUIsRUFBb0NGLE9BQXBDO0FBQ0FLLFlBQVNILGdCQUFULENBQTBCLFlBQTFCLEVBQXdDRixPQUF4Qzs7QUFFQUE7QUFDRDs7QUFFRCxVQUFTMEIsYUFBVCxDQUF3QkUsQ0FBeEIsRUFBMkI7QUFDekIsT0FBSUMsS0FBSyxJQUFUO0FBQ0EsT0FBSUMsT0FBT3ZCLE1BQU13QixHQUFOLENBQVVGLEVBQVYsQ0FBWDs7QUFFQSxPQUFJRyxXQUFXM0IsU0FBUzRCLElBQVQsQ0FBY0MsU0FBZCxJQUEyQjdCLFNBQVNDLGVBQVQsQ0FBeUI0QixTQUFuRTtBQUNBLE9BQUluQixpQkFBaUJlLEtBQUtmLGNBQTFCO0FBQ0EsT0FBSWlCLFdBQVdqQixjQUFmLEVBQStCO0FBQzdCLFNBQUksQ0FBQ2UsS0FBS1osZ0JBQVYsRUFBNEI7QUFDMUJZLFlBQUtaLGdCQUFMLEdBQXdCLElBQXhCO0FBQ0FXLFVBQUdQLEtBQUgsQ0FBU0MsV0FBVCxDQUFxQixVQUFyQixFQUFpQyxPQUFqQztBQUNBTSxVQUFHUCxLQUFILENBQVNDLFdBQVQsQ0FBcUIsS0FBckIsRUFBNEIsQ0FBQ1IsY0FBRCxHQUFpQixJQUE3QztBQUNEO0FBQ0YsSUFORCxNQU1PO0FBQ0wsU0FBSWUsS0FBS1osZ0JBQVQsRUFBMkI7QUFDekJZLFlBQUtaLGdCQUFMLEdBQXdCLEtBQXhCO0FBQ0FXLFVBQUdQLEtBQUgsQ0FBU0MsV0FBVCxDQUFxQixVQUFyQixFQUFpQyxVQUFqQztBQUNBTSxVQUFHUCxLQUFILENBQVNDLFdBQVQsQ0FBcUIsS0FBckIsRUFBNEIsR0FBNUI7QUFDRDtBQUNGO0FBQ0Y7O21CQUVjO0FBQ2JwRDtBQURhLEU7Ozs7OztBQzdEZiwwQzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7OztBQUVBLFVBQVNBLElBQVQsR0FBZTtBQUNiLGtCQUFFRyxPQUFGLENBQ0UrQixTQUFTSSxvQkFBVCxDQUE4QixNQUE5QixDQURGLEVBRUV2QixPQUZGLENBRVV3QixTQUZWO0FBR0Q7O0FBRUQsVUFBU0EsU0FBVCxDQUFtQkMsRUFBbkIsRUFBdUI7QUFDckJBLE1BQUdXLEtBQUgsQ0FBU0MsV0FBVCxDQUFxQixLQUFyQixFQUE0QlosR0FBR0ssU0FBSCxHQUFlLElBQTNDO0FBQ0Q7O21CQUVjO0FBQ2I3QztBQURhLEU7Ozs7Ozs7Ozs7OztBQ1pmOztBQUVBOzs7O0FBQ0E7Ozs7OztBQUVBLEtBQUlvQyxRQUFRLElBQUlDLE9BQUosRUFBWjs7QUFFQSxVQUFTckMsSUFBVCxHQUFpQjtBQUNmLE9BQUksZUFBRWdDLE9BQUYsQ0FBVUMsS0FBZCxFQUFxQjtBQUNuQjtBQUNEO0FBQ0Qsa0JBQUU5QixPQUFGLENBQ0UrQixTQUFTOEIsc0JBQVQsQ0FBZ0MsVUFBaEMsQ0FERixFQUVFakQsT0FGRixDQUVVd0IsU0FGVjtBQUdEOztBQUVELFVBQVNBLFNBQVQsQ0FBb0JDLEVBQXBCLEVBQXdCO0FBQ3RCQSxNQUFHeUIsU0FBSCxDQUFhQyxHQUFiLENBQWlCLFFBQWpCO0FBQ0EsT0FBSUMsU0FBU2pDLFNBQVNrQyxhQUFULENBQXVCLFFBQXZCLENBQWI7QUFDQUQsVUFBT0UsWUFBUCxDQUFvQixPQUFwQixFQUE2QixHQUE3QjtBQUNBRixVQUFPRSxZQUFQLENBQW9CLFFBQXBCLEVBQThCLEdBQTlCOztBQUVBN0IsTUFBR1QsZ0JBQUgsQ0FBb0IsWUFBcEIsRUFBa0N1QyxVQUFsQztBQUNBOUIsTUFBR1QsZ0JBQUgsQ0FBb0IsWUFBcEIsRUFBa0N3QyxZQUFsQztBQUNBL0IsTUFBR1QsZ0JBQUgsQ0FBb0IsWUFBcEIsRUFBa0N5QyxZQUFsQzs7QUFFQXBDLFNBQU1PLEdBQU4sQ0FBVUgsRUFBVixFQUFjO0FBQ1oyQixtQkFEWTtBQUVaTSxhQUFRO0FBRkksSUFBZDs7QUFLQSxPQUFJQyxVQUFVbEMsR0FBR21DLFVBQUgsQ0FBYyxDQUFkLENBQWQ7QUFDQW5DLE1BQUdvQyxZQUFILENBQWdCVCxNQUFoQixFQUF3Qk8sT0FBeEI7QUFDRDs7QUFFRCxVQUFTSixVQUFULEdBQXVCO0FBQ3JCLE9BQUlaLEtBQUssSUFBVDtBQUNBLE9BQUlDLE9BQU92QixNQUFNd0IsR0FBTixDQUFVRixFQUFWLENBQVg7O0FBRUEsT0FBSW1CLE9BQU9uQixHQUFHb0IscUJBQUgsRUFBWDtBQUNBLE9BQUlMLFNBQVM7QUFDWE0sWUFBT0MsS0FBS0MsSUFBTCxDQUFVSixLQUFLRSxLQUFmLENBREk7QUFFWEcsYUFBUUYsS0FBS0MsSUFBTCxDQUFVSixLQUFLSyxNQUFmO0FBRkcsSUFBYjtBQUlBdkIsUUFBS2MsTUFBTCxHQUFjSSxJQUFkOztBQUVBLE9BQUlWLFNBQVNSLEtBQUtRLE1BQWxCO0FBQ0FBLFVBQU9FLFlBQVAsQ0FBb0IsT0FBcEIsRUFBNkJJLE9BQU9NLEtBQXBDO0FBQ0FaLFVBQU9FLFlBQVAsQ0FBb0IsUUFBcEIsRUFBOEJJLE9BQU9TLE1BQXJDOztBQUVBeEIsTUFBR3lCLG1CQUFILENBQXVCLFlBQXZCLEVBQXFDYixVQUFyQztBQUNEOztBQUVELFVBQVNDLFlBQVQsQ0FBdUJkLENBQXZCLEVBQTBCO0FBQ3hCMkIsZUFBWXZFLElBQVosQ0FBaUIsSUFBakIsRUFBdUI0QyxDQUF2QixFQUEwQixNQUExQjtBQUNEOztBQUVELFVBQVNlLFlBQVQsQ0FBdUJmLENBQXZCLEVBQTBCO0FBQ3hCMkIsZUFBWXZFLElBQVosQ0FBaUIsSUFBakIsRUFBdUI0QyxDQUF2QixFQUEwQixNQUExQjtBQUNEOztBQUVELFVBQVM0QixXQUFULE9BQXNDQyxFQUF0QyxFQUEwQ0MsRUFBMUMsRUFBOEM7QUFBQSxPQUFwQkMsRUFBb0IsUUFBdkJDLENBQXVCO0FBQUEsT0FBYkMsRUFBYSxRQUFoQkMsQ0FBZ0I7O0FBQzVDLFVBQU9YLEtBQUtDLElBQUwsQ0FDTEQsS0FBS1ksSUFBTCxDQUNFWixLQUFLYSxHQUFMLENBQVNMLEtBQUtGLEVBQWQsRUFBa0IsQ0FBbEIsSUFDQU4sS0FBS2EsR0FBTCxDQUFTSCxLQUFLSCxFQUFkLEVBQWtCLENBQWxCLENBRkYsQ0FESyxDQUFQO0FBTUQ7O0FBRUQsVUFBU08sU0FBVCxDQUFtQkMsR0FBbkIsU0FBeUM7QUFBQSxPQUFoQmhCLEtBQWdCLFNBQWhCQSxLQUFnQjtBQUFBLE9BQVRHLE1BQVMsU0FBVEEsTUFBUzs7QUFDdkMsVUFBT0YsS0FBS0MsSUFBTCxDQUNMRCxLQUFLZ0IsR0FBTCxDQUNFWCxZQUFZVSxHQUFaLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLENBREYsRUFFRVYsWUFBWVUsR0FBWixFQUFpQixDQUFqQixFQUFvQmIsTUFBcEIsQ0FGRixFQUdFRyxZQUFZVSxHQUFaLEVBQWlCaEIsS0FBakIsRUFBd0IsQ0FBeEIsQ0FIRixFQUlFTSxZQUFZVSxHQUFaLEVBQWlCaEIsS0FBakIsRUFBd0JHLE1BQXhCLENBSkYsQ0FESyxDQUFQO0FBUUQ7O0FBRUQsVUFBU0UsV0FBVCxDQUFzQjNCLENBQXRCLEVBQXlCd0MsS0FBekIsRUFBZ0M7QUFDOUIsT0FBSXZDLEtBQUssSUFBVDs7QUFFQSxPQUFJK0IsSUFBSWhDLEVBQUV5QyxPQUFGLEdBQVksQ0FBcEI7QUFDQSxPQUFJUCxJQUFJbEMsRUFBRTBDLE9BQUYsR0FBWSxDQUFwQjs7QUFKOEIsb0JBTVAvRCxNQUFNd0IsR0FBTixDQUFVRixFQUFWLENBTk87O0FBQUEsT0FNekJTLE1BTnlCLGNBTXpCQSxNQU55QjtBQUFBLE9BTWpCTSxNQU5pQixjQU1qQkEsTUFOaUI7O0FBTzlCLE9BQUkyQixNQUFNakMsT0FBT2tDLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBVjs7QUFFQSxPQUFJQyxTQUFTUixVQUNYO0FBQ0VMLFNBREY7QUFFRUU7QUFGRixJQURXLEVBS1hsQixNQUxXLENBQWI7QUFUOEIsT0FnQnpCOEIsaUJBaEJ5QixvQkFnQnpCQSxpQkFoQnlCOzs7QUFrQjlCLE9BQUlDLFlBQVksSUFBaEI7QUFDQSxZQUFTQyxLQUFULENBQWdCL0UsU0FBaEIsRUFBMkI7QUFDekIsU0FBSThFLGNBQWMsSUFBbEIsRUFBd0I7QUFDdEJBLG1CQUFZOUUsU0FBWjtBQUNEOztBQUVELFNBQUlnRixXQUFXaEYsWUFBWThFLFNBQTNCOztBQUVBSixTQUFJTyxTQUFKLEdBQWdCVixLQUFoQjtBQUNBRyxTQUFJUSxTQUFKO0FBQ0FSLFNBQUlTLEdBQUosQ0FDRXBCLENBREYsRUFFRUUsQ0FGRixFQUdFVyxTQUFTSSxRQUFULEdBQW9CSCxpQkFIdEIsRUFJRSxDQUpGLEVBS0UsSUFBSXZCLEtBQUs4QixFQUxYO0FBT0FWLFNBQUlXLElBQUo7O0FBRUEsU0FBSUwsV0FBV0gsaUJBQWYsRUFBa0M7QUFDaEMsc0JBQUVsRixPQUFGLENBQVVvRixLQUFWO0FBQ0Q7QUFDRjs7QUFFRCxrQkFBRXBGLE9BQUYsQ0FBVW9GLEtBQVY7QUFDRDs7bUJBRWM7QUFDYnpHO0FBRGEsRTs7Ozs7O0FDOUhmLDBDOzs7Ozs7Ozs7OzttQkNBZTtBQUNidUcsc0JBQW1CLEdBRE4sQ0FDVTtBQURWLEUiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCA0ZWVmNmYxMmZlZjI5MmM5MzA0Y1xuICoqLyIsImltcG9ydCAnLi9pbmRleC5jc3MnO1xuXG5pbXBvcnQgXyBmcm9tICcuL3V0aWwnO1xuXG5pbXBvcnQgaGVhZGVyIGZyb20gJy4vaGVhZGVyJztcbmltcG9ydCBtYWluIGZyb20gJy4vbWFpbic7XG5pbXBvcnQgYnV0dG9uIGZyb20gJy4vYnV0dG9uJztcblxuXy5yZWFkeShmdW5jdGlvbiAoKSB7XG4gIG1haW4ubG9hZCgpO1xuICBoZWFkZXIubG9hZCgpO1xuICBidXR0b24ubG9hZCgpO1xufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaW5kZXguanNcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5kZXguY3NzXG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IGxhbmcgZnJvbSAnLi9sYW5nJztcbmltcG9ydCBhbmltYXRpb24gZnJvbSAnLi9hbmltYXRpb24nO1xuaW1wb3J0IGVudiBmcm9tICcuL2Vudic7XG5cbmxldCBfID0ge307XG5cbmxhbmcuZXh0ZW5kKFxuICBfLFxuICBsYW5nLCBhbmltYXRpb24sIGVudlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgXztcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy91dGlsL2luZGV4LmpzXG4gKiovIiwiZnVuY3Rpb24gdG9BcnJheShsaWtlQXJyKSB7XG4gIGxldCBpLGlpO1xuICBpID0gMDtcbiAgaWkgPSBsaWtlQXJyLmxlbmd0aDtcbiAgbGV0IGFyciA9IG5ldyBBcnJheShpaSk7XG4gIHdoaWxlIChpIDwgaWkpIHtcbiAgICBhcnJbaV0gPSBsaWtlQXJyW2ldO1xuICAgIGkrKztcbiAgfVxuICByZXR1cm4gYXJyO1xufVxuXG5mdW5jdGlvbiBleHRlbmQgKHRhcmdldCkge1xuICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChcbiAgICBhcmd1bWVudHMsXG4gICAgMVxuICApLmZvckVhY2goXG4gICAgZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgT2JqZWN0LmtleXMoc291cmNlKVxuICAgICAgICAuZm9yRWFjaChcbiAgICAgICAgICBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICBpZiAoIXRhcmdldC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cbiAgKTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHRvQXJyYXksXG4gIGV4dGVuZFxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy91dGlsL2xhbmcuanNcbiAqKi8iLCJmdW5jdGlvbiBhbmltYXRlKGZ1bmMpIHtcbiAgaWYoZ2xvYmFsLnJlcXVlc3RBbmltYXRpb25GcmFtZSkge1xuICAgIGdsb2JhbC5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuYyk7XG4gIH0gZWxzZSB7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIGxldCB0aW1lc3RhbXAgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgIGZ1bmModGltZXN0YW1wKTtcbiAgICB9LCAxNik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBhbmltYXRlXG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3V0aWwvYW5pbWF0aW9uLmpzXG4gKiovIiwiZnVuY3Rpb24gcmVhZHkgKGhhbmRsZXIpIHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBoYW5kbGVyKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICByZWFkeSxcbiAgc3VwcG9ydDoge1xuICAgIHRvdWNoOiAnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnRcbiAgfVxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy91dGlsL2Vudi5qc1xuICoqLyIsImltcG9ydCAnLi9pbmRleC5jc3MnO1xuXG5pbXBvcnQgXyBmcm9tICcuLi91dGlsJztcbmxldCBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbmZ1bmN0aW9uIGxvYWQoKXtcbiAgXy50b0FycmF5KFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkZXInKVxuICApLmZvckVhY2goIHRyYW5zZm9ybSApO1xufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm0gKGVsKSB7XG4gIGxldCBoMUVsID0gZWwucXVlcnlTZWxlY3RvcignaDEnKTtcbiAgY2FjaGUuc2V0KFxuICAgIGVsLFxuICAgIHtcbiAgICAgIHRocmVzaG9sZFZhbHVlOiBlbC5vZmZzZXRUb3AgKyBoMUVsLm9mZnNldFRvcCArIGgxRWwub2Zmc2V0SGVpZ2h0ICsgMTAsXG4gICAgICByZWFjaGVkVGhyZXNob2xkOiBmYWxzZVxuICAgIH1cbiAgKTtcblxuICBsZXQgaW5mb0VsID0gZWwucXVlcnlTZWxlY3RvcignZGl2Jyk7XG4gIGxldCBwRWwgPSBpbmZvRWwucXVlcnlTZWxlY3RvckFsbCgncCcpWzFdO1xuXG4gIF8udG9BcnJheShcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudHJhY2snKVxuICApLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgZWwuc3R5bGUuc2V0UHJvcGVydHkoJ3dpZHRoJywgdHJhY2tTaXplICsgJ3B4Jyk7XG4gICAgZWwuc3R5bGUuc2V0UHJvcGVydHkoJ2hlaWdodCcsIHRyYWNrU2l6ZSArICdweCcpO1xuICAgIGVsLnN0eWxlLnNldFByb3BlcnR5KCd0b3AnLCBkZWx0YVNpemUgKyAncHgnKTtcbiAgICBlbC5zdHlsZS5zZXRQcm9wZXJ0eSgnbGVmdCcsIGRlbHRhU2l6ZSArICdweCcpO1xuICB9KTtcblxuICBsZXQgaGFuZGxlciA9IHNjcm9sbEhhbmRsZXIuYmluZChlbCk7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZXIpO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXdoZWVsJywgaGFuZGxlcik7XG5cbiAgaGFuZGxlcigpO1xufVxuXG5mdW5jdGlvbiBzY3JvbGxIYW5kbGVyIChlKSB7XG4gIGxldCBtZSA9IHRoaXM7XG4gIGxldCBkYXRhID0gY2FjaGUuZ2V0KG1lKTtcblxuICBsZXQgY3VyVmFsdWUgPSBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuICBsZXQgdGhyZXNob2xkVmFsdWUgPSBkYXRhLnRocmVzaG9sZFZhbHVlO1xuICBpZiAoY3VyVmFsdWUgPiB0aHJlc2hvbGRWYWx1ZSkge1xuICAgIGlmICghZGF0YS5yZWFjaGVkVGhyZXNob2xkKSB7XG4gICAgICBkYXRhLnJlYWNoZWRUaHJlc2hvbGQgPSB0cnVlO1xuICAgICAgbWUuc3R5bGUuc2V0UHJvcGVydHkoJ3Bvc2l0aW9uJywgJ2ZpeGVkJyk7XG4gICAgICBtZS5zdHlsZS5zZXRQcm9wZXJ0eSgndG9wJywgLXRocmVzaG9sZFZhbHVlICsncHgnKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKGRhdGEucmVhY2hlZFRocmVzaG9sZCkge1xuICAgICAgZGF0YS5yZWFjaGVkVGhyZXNob2xkID0gZmFsc2U7XG4gICAgICBtZS5zdHlsZS5zZXRQcm9wZXJ0eSgncG9zaXRpb24nLCAncmVsYXRpdmUnKTtcbiAgICAgIG1lLnN0eWxlLnNldFByb3BlcnR5KCd0b3AnLCAnMCcpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGxvYWRcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaGVhZGVyL2luZGV4LmpzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2hlYWRlci9pbmRleC5jc3NcbiAqKiBtb2R1bGUgaWQgPSA4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgXyBmcm9tICcuLi91dGlsJztcblxuZnVuY3Rpb24gbG9hZCgpe1xuICBfLnRvQXJyYXkoXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ21haW4nKVxuICApLmZvckVhY2godHJhbnNmb3JtKTtcbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtKGVsKSB7XG4gIGVsLnN0eWxlLnNldFByb3BlcnR5KCd0b3AnLCBlbC5vZmZzZXRUb3AgKyAncHgnKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBsb2FkXG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL21haW4vaW5kZXguanNcbiAqKi8iLCJpbXBvcnQgJy4vaW5kZXguY3NzJztcblxuaW1wb3J0IF8gZnJvbSAnLi4vdXRpbCc7XG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZyc7XG5cbmxldCBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbmZ1bmN0aW9uIGxvYWQgKCkge1xuICBpZiAoXy5zdXBwb3J0LnRvdWNoKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIF8udG9BcnJheShcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdKLWJ1dHRvbicpXG4gICkuZm9yRWFjaCh0cmFuc2Zvcm0pO1xufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm0gKGVsKSB7XG4gIGVsLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbicpO1xuICB2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gIGNhbnZhcy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgJzAnKTtcbiAgY2FudmFzLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgJzAnKTtcblxuICBlbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgaW5pdENhbnZhcyk7XG4gIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBlbnRlckhhbmRsZXIpO1xuICBlbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgbGVhdmVIYW5kbGVyKTtcblxuICBjYWNoZS5zZXQoZWwsIHtcbiAgICBjYW52YXMsXG4gICAgZXh0ZW50OiBudWxsXG4gIH0pO1xuXG4gIGxldCBmaXJzdEVsID0gZWwuY2hpbGROb2Rlc1swXTtcbiAgZWwuaW5zZXJ0QmVmb3JlKGNhbnZhcywgZmlyc3RFbCk7XG59XG5cbmZ1bmN0aW9uIGluaXRDYW52YXMgKCkge1xuICBsZXQgbWUgPSB0aGlzO1xuICBsZXQgZGF0YSA9IGNhY2hlLmdldChtZSk7XG5cbiAgbGV0IHJlY3QgPSBtZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgbGV0IGV4dGVudCA9IHtcbiAgICB3aWR0aDogTWF0aC5jZWlsKHJlY3Qud2lkdGgpLFxuICAgIGhlaWdodDogTWF0aC5jZWlsKHJlY3QuaGVpZ2h0KVxuICB9O1xuICBkYXRhLmV4dGVudCA9IHJlY3Q7XG5cbiAgbGV0IGNhbnZhcyA9IGRhdGEuY2FudmFzO1xuICBjYW52YXMuc2V0QXR0cmlidXRlKCd3aWR0aCcsIGV4dGVudC53aWR0aCk7XG4gIGNhbnZhcy5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIGV4dGVudC5oZWlnaHQpO1xuXG4gIG1lLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBpbml0Q2FudmFzKTtcbn1cblxuZnVuY3Rpb24gZW50ZXJIYW5kbGVyIChlKSB7XG4gIHBhaW50Q2lyY2xlLmNhbGwodGhpcywgZSwgJyMwMDAnKTtcbn1cblxuZnVuY3Rpb24gbGVhdmVIYW5kbGVyIChlKSB7XG4gIHBhaW50Q2lyY2xlLmNhbGwodGhpcywgZSwgJyNmZmYnKTtcbn1cblxuZnVuY3Rpb24gY2FsRGlzdGFuY2UgKHt4OiB4MSwgeTogeTF9LCB4MiwgeTIpIHtcbiAgcmV0dXJuIE1hdGguY2VpbChcbiAgICBNYXRoLnNxcnQoXG4gICAgICBNYXRoLnBvdyh4MSAtIHgyLCAyKSArXG4gICAgICBNYXRoLnBvdyh5MSAtIHkyLCAyKVxuICAgIClcbiAgKTtcbn1cblxuZnVuY3Rpb24gY2FsUmFkaXVzKHBvcywge3dpZHRoLCBoZWlnaHR9KSB7XG4gIHJldHVybiBNYXRoLmNlaWwoXG4gICAgTWF0aC5tYXgoXG4gICAgICBjYWxEaXN0YW5jZShwb3MsIDAsIDApLFxuICAgICAgY2FsRGlzdGFuY2UocG9zLCAwLCBoZWlnaHQpLFxuICAgICAgY2FsRGlzdGFuY2UocG9zLCB3aWR0aCwgMCksXG4gICAgICBjYWxEaXN0YW5jZShwb3MsIHdpZHRoLCBoZWlnaHQpXG4gICAgKVxuICApO1xufVxuXG5mdW5jdGlvbiBwYWludENpcmNsZSAoZSwgY29sb3IpIHtcbiAgbGV0IG1lID0gdGhpcztcblxuICBsZXQgeCA9IGUub2Zmc2V0WCAtIDE7XG4gIGxldCB5ID0gZS5vZmZzZXRZIC0gMTtcblxuICBsZXQge2NhbnZhcywgZXh0ZW50fSA9IGNhY2hlLmdldChtZSk7XG4gIGxldCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuICBsZXQgcmFkaXVzID0gY2FsUmFkaXVzKFxuICAgIHtcbiAgICAgIHgsXG4gICAgICB5XG4gICAgfSxcbiAgICBleHRlbnRcbiAgKTtcbiAgbGV0IHthbmltYXRpb25EdXJhdGlvbn0gPSBjb25maWc7XG5cbiAgbGV0IHN0YXJ0VGltZSA9IG51bGw7XG4gIGZ1bmN0aW9uIHBhaW50ICh0aW1lc3RhbXApIHtcbiAgICBpZiAoc3RhcnRUaW1lID09PSBudWxsKSB7XG4gICAgICBzdGFydFRpbWUgPSB0aW1lc3RhbXA7XG4gICAgfVxuXG4gICAgbGV0IHByb2dyZXNzID0gdGltZXN0YW1wIC0gc3RhcnRUaW1lO1xuXG4gICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHguYXJjKFxuICAgICAgeCxcbiAgICAgIHksXG4gICAgICByYWRpdXMgKiBwcm9ncmVzcyAvIGFuaW1hdGlvbkR1cmF0aW9uLFxuICAgICAgMCxcbiAgICAgIDIgKiBNYXRoLlBJXG4gICAgKTtcbiAgICBjdHguZmlsbCgpO1xuXG4gICAgaWYgKHByb2dyZXNzIDwgYW5pbWF0aW9uRHVyYXRpb24pIHtcbiAgICAgIF8uYW5pbWF0ZShwYWludCk7XG4gICAgfVxuICB9XG5cbiAgXy5hbmltYXRlKHBhaW50KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBsb2FkXG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2J1dHRvbi9pbmRleC5qc1xuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9idXR0b24vaW5kZXguY3NzXG4gKiogbW9kdWxlIGlkID0gMTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgYW5pbWF0aW9uRHVyYXRpb246IDIwMCAvL21zXG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbmZpZy5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=