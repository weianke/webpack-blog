/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: [BABEL] D:\\my-webpack-blog\\app.js: Invalid Option: '> 1%,last 2 versions' is not a valid value for 'targets.browers'. (While processing: \"D:\\\\my-webpack-blog\\\\node_modules\\\\@babel\\\\preset-env\\\\lib\\\\index.js\")\n    at semverifyTarget (D:\\my-webpack-blog\\node_modules\\@babel\\preset-env\\lib\\targets-parser.js:154:11)\n    at __default (D:\\my-webpack-blog\\node_modules\\@babel\\preset-env\\lib\\targets-parser.js:160:92)\n    at Object.keys.filter.sort.reduce (D:\\my-webpack-blog\\node_modules\\@babel\\preset-env\\lib\\targets-parser.js:204:43)\n    at Array.reduce (<anonymous>)\n    at getTargets (D:\\my-webpack-blog\\node_modules\\@babel\\preset-env\\lib\\targets-parser.js:192:104)\n    at _default (D:\\my-webpack-blog\\node_modules\\@babel\\preset-env\\lib\\index.js:187:46)\n    at D:\\my-webpack-blog\\node_modules\\@babel\\helper-plugin-utils\\lib\\index.js:19:12\n    at loadDescriptor (D:\\my-webpack-blog\\node_modules\\@babel\\core\\lib\\config\\full.js:165:14)\n    at cachedFunction (D:\\my-webpack-blog\\node_modules\\@babel\\core\\lib\\config\\caching.js:33:19)\n    at loadPresetDescriptor (D:\\my-webpack-blog\\node_modules\\@babel\\core\\lib\\config\\full.js:235:63)\n    at config.presets.reduce (D:\\my-webpack-blog\\node_modules\\@babel\\core\\lib\\config\\full.js:77:21)\n    at Array.reduce (<anonymous>)\n    at recurseDescriptors (D:\\my-webpack-blog\\node_modules\\@babel\\core\\lib\\config\\full.js:74:38)\n    at loadFullConfig (D:\\my-webpack-blog\\node_modules\\@babel\\core\\lib\\config\\full.js:108:6)\n    at process.nextTick (D:\\my-webpack-blog\\node_modules\\@babel\\core\\lib\\transform.js:28:33)\n    at _combinedTickCallback (internal/process/next_tick.js:131:7)\n    at process._tickCallback (internal/process/next_tick.js:180:9)");

/***/ })
/******/ ]);