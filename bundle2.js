/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by xiaoxiaosu on 17/3/28.
	 */


	var hello = __webpack_require__(1),
	    name = __webpack_require__(2)
	var name2 = __webpack_require__(2);
	console.log(hello)
	console.log(name,name2)

/***/ },
/* 1 */
/***/ function(module, exports) {

	/**
	 * Created by xiaoxiaosu on 17/3/28.
	 */

	var name = 'hello'

	module.exports = name

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by xiaoxiaosu on 17/3/28.
	 */

	var name = 'name'
	var component1 = __webpack_require__(3);

	module.exports = name

/***/ },
/* 3 */
/***/ function(module, exports) {

	/**
	 * Created by xiaoxiaosu on 17/3/28.
	 */

	var name = 'component1'
	module.exports = name

/***/ }
/******/ ]);