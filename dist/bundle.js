(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var flow = new Flow({
  target: 'http://localhost:3000/upload',
  query: { token: 'abcdef', dir: 'aa/bb' }
});
flow.assignBrowse(document.getElementById('file'));
flow.on('fileAdded', function (file, event) {
  console.log("fileAdded");
  console.log(file, event);
});
flow.on('filesSubmitted', function (file) {
  console.log("filesSubmitted");
  flow.upload();
});
flow.on('fileSuccess', function (file, message) {
  console.log("fileSuccess");
  console.log(file, message);
});
flow.on('fileError', function (file, message) {
  console.log("fileError");
  console.log(file, message);
});

},{}]},{},[1]);
