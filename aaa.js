(function (modules) { // webpackBootstrap
    /******/ 	// The module cache
    /******/ 	var installedModules = {};

    /******/ 	// The require function
    /******/ 	function require(moduleId) {

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
        /******/ 		modules[moduleId].call(module.exports, module, module.exports, require);

        /******/ 		// Flag the module as loaded
        /******/ 		module.loaded = true;

        /******/ 		// Return the exports of the module
        /******/ 		return module.exports;
        /******/ 	}


    /******/ 	// expose the modules object (__webpack_modules__)
    /******/ 	require.m = modules;

    /******/ 	// expose the module cache
    /******/ 	require.c = installedModules;

    /******/ 	// __webpack_public_path__
    /******/ 	require.p = "";

    /******/ 	// Load entry module and return exports
    /******/ 	return require(0);
    /******/ })([function anonymous(module,exports,__webpack__require__
/**/) {
/**
 * Created by xiaoxiaosu on 17/3/28.
 */


var hello = __webpack__require__(1),
    name = __webpack__require__(2)
var name2 = __webpack__require__(2);
console.log(hello)
console.log(name,name2)
},function anonymous(module,exports,__webpack__require__
/**/) {
/**
 * Created by xiaoxiaosu on 17/3/28.
 */

var name = 'hello'

module.exports = name
},function anonymous(module,exports,__webpack__require__
/**/) {
/**
 * Created by xiaoxiaosu on 17/3/28.
 */

var name = 'name'
var component1 = __webpack__require__(3);

module.exports = name
},function anonymous(module,exports,__webpack__require__
/**/) {
/**
 * Created by xiaoxiaosu on 17/3/28.
 */

var name = 'component1'
module.exports = name
}])