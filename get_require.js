/**
 * Created by xiaoxiaosu on 17/3/28.
 */

var fs = require('fs');
var path = require('path');
var os = require('os');
var shell = require('shelljs/global')
var paths = []
var moduleId = 0
var configPath = path.join(__dirname,'webpack.config.js')
var config = require(configPath)


function get_require(p) {
    var p2 = path.join(process.cwd(),p)
    cd(path.dirname(p2))

    var content = fs.readFileSync(p2,'utf-8')

    var hasModule = paths.find(function (obj) {
        return obj.path == p2
    })

    if(!hasModule){
        var module = {
            path:p2,
            content:content,
            id:moduleId++
        }
        paths.push(module)
        var re = /require\(['|"](.+)['|"]\)/

        while (content.match(re)){
            var res = content.match(re)
            if(res.length>1){
                get_require(res[1])
            }
            var r1 = res[1]
            cd(path.dirname(p2))


            // content = content.replace(res[0],'__webpack__require__('+moduleId++ +')')

            var rModule = paths.find(function (obj) {
                return path.join(process.cwd(),r1) == obj.path
            })


            content = content.replace(res[0],'__webpack__require__('+rModule.id+')')
            module.content = content
        }
    }
}



console.log(config)
get_require(config.entry)

var modules = []
for(var i=0;i<paths.length;i++){
    var module = fs.readFileSync(paths[i].path,'utf-8')

    var fn = new Function('module','exports','__webpack__require__',paths[i].content)
    modules.push(fn)
}



/******/var bundlejs = function(modules) { // webpackBootstrap
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
    /******/ }

fs.writeFileSync(path.join(config.output.path,config.output.filename),'('+bundlejs.toString()+')(['+modules.toString()+'])')